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
    var tmp553 = result__;
    var result__ = tmp553;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp554 = result__;
      var result__ = tmp554;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp555 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicCode, callback) {
  var __this = this;
  var result__ = nrichRPG.coreWorkout.topicMapForId(topicCode).keys();
  var keys = result__;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll18) {
    coll18 = coll18.reverse();
    function processOne10() {
      var i;
      i = coll18.pop();
      var result__ = mobl.random(keys.length - 1);
      var r = result__;
      var result__ = keys.get(r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQA(tid, function(result__) {
        var tmp556 = result__;
        
        if(coll18.length > 0) processOne10(); else rest10();
        
      });
    }
    function rest10() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll18.length > 0) processOne10(); else rest10();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root1000 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes872 = $("<span>");
  root1000.append(nodes872);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1001 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp564 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp516 = mobl.ref(result__);
    
    var nodes873 = $("<span>");
    root1001.append(nodes873);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp516, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1002 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes874 = $("<span>");
      root1002.append(nodes874);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1003 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1003); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes874;
        nodes874 = node.contents();
        oldNodes.replaceWith(nodes874);
      }));
      callback(root1002); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes873;
      nodes873 = node.contents();
      oldNodes.replaceWith(nodes873);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp563 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp517 = mobl.ref(result__);
    
    var nodes875 = $("<span>");
    root1001.append(nodes875);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp517, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1004 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes876 = $("<span>");
      root1004.append(nodes876);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1005 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1005); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes876;
        nodes876 = node.contents();
        oldNodes.replaceWith(nodes876);
      }));
      callback(root1004); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes875;
      nodes875 = node.contents();
      oldNodes.replaceWith(nodes875);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp562 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp518 = mobl.ref(result__);
    
    var nodes877 = $("<span>");
    root1001.append(nodes877);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp518, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1006 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes878 = $("<span>");
      root1006.append(nodes878);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1007 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1007); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes878;
        nodes878 = node.contents();
        oldNodes.replaceWith(nodes878);
      }));
      callback(root1006); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes877;
      nodes877 = node.contents();
      oldNodes.replaceWith(nodes877);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp561 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp519 = mobl.ref(result__);
    
    var nodes879 = $("<span>");
    root1001.append(nodes879);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp519, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1008 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes880 = $("<span>");
      root1008.append(nodes880);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1009 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1009); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes880;
        nodes880 = node.contents();
        oldNodes.replaceWith(nodes880);
      }));
      callback(root1008); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes879;
      nodes879 = node.contents();
      oldNodes.replaceWith(nodes879);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp560 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp520 = mobl.ref(result__);
    
    var nodes881 = $("<span>");
    root1001.append(nodes881);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp520, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1010 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes882 = $("<span>");
      root1010.append(nodes882);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1011 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1011); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes882;
        nodes882 = node.contents();
        oldNodes.replaceWith(nodes882);
      }));
      callback(root1010); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes881;
      nodes881 = node.contents();
      oldNodes.replaceWith(nodes881);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp559 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp521 = mobl.ref(result__);
    
    var nodes883 = $("<span>");
    root1001.append(nodes883);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp521, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1012 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes884 = $("<span>");
      root1012.append(nodes884);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1013 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1013); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes884;
        nodes884 = node.contents();
        oldNodes.replaceWith(nodes884);
      }));
      callback(root1012); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes883;
      nodes883 = node.contents();
      oldNodes.replaceWith(nodes883);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp558 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp522 = mobl.ref(result__);
    
    var nodes885 = $("<span>");
    root1001.append(nodes885);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp522, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1014 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes886 = $("<span>");
      root1014.append(nodes886);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1015 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1015); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes886;
        nodes886 = node.contents();
        oldNodes.replaceWith(nodes886);
      }));
      callback(root1014); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes885;
      nodes885 = node.contents();
      oldNodes.replaceWith(nodes885);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp557 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp523 = mobl.ref(result__);
    
    var nodes887 = $("<span>");
    root1001.append(nodes887);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp523, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1016 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes888 = $("<span>");
      root1016.append(nodes888);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1017 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1017); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes888;
        nodes888 = node.contents();
        oldNodes.replaceWith(nodes888);
      }));
      callback(root1016); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes887;
      nodes887 = node.contents();
      oldNodes.replaceWith(nodes887);
    }));
    callback(root1001); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes872;
    nodes872 = node.contents();
    oldNodes.replaceWith(nodes872);
  }));
  callback(root1000); return subs__;
  
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
    var tmp565 = result__;
    var result__ = mobl.alert(nrichRPG.coreWorkout.topicName(tid) + " added");
    if(callback && callback.apply) callback(); return;
  });
};


nrichRPG.coreWorkout.topicLabel = function(tid, elements, callback) {
  var root1018 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var map = mobl.ref(nrichRPG.coreWorkout.topicMapForId(tid.get()));
  var result__ = "+" + map.get().get(tid.get());
  var tmp524 = mobl.ref(result__);
  subs__.addSub(map.addEventListener('change', function() {
    tmp524.set("+" + map.get().get(tid.get()));
  }));
  subs__.addSub(tid.addEventListener('change', function() {
    tmp524.set("+" + map.get().get(tid.get()));
  }));
  
  var nodes889 = $("<span>");
  root1018.append(nodes889);
  subs__.addSub((mobl.label)(tmp524, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root1019 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1019); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes889;
    nodes889 = node.contents();
    oldNodes.replaceWith(nodes889);
  }));
  callback(root1018); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.topicItem = function(tid, elements, callback) {
  var root1020 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   nrichRPG.coreWorkout.topicAdded(tid.get(), function(result__) {
                     var tmp566 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp525 = mobl.ref(result__);
  
  var nodes890 = $("<span>");
  root1020.append(nodes890);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp525, mobl.ref(null), mobl.ref(false), function(_, callback) {
    var root1021 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes891 = $("<span>");
    root1021.append(nodes891);
    subs__.addSub((nrichRPG.coreWorkout.topicLabel)(tid, function(_, callback) {
      var root1022 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1022); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes891;
      nodes891 = node.contents();
      oldNodes.replaceWith(nodes891);
    }));
    callback(root1021); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes890;
    nodes890 = node.contents();
    oldNodes.replaceWith(nodes890);
  }));
  callback(root1020); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root1023 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes892 = $("<span>");
  root1023.append(nodes892);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1024 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp527 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp526 = mobl.ref(result__);
    
    var nodes893 = $("<span>");
    root1024.append(nodes893);
    subs__.addSub((ui.backButton)(tmp526, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp527, function(_, callback) {
      var root1025 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1025); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes893;
      nodes893 = node.contents();
      oldNodes.replaceWith(nodes893);
    }));
    callback(root1024); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes892;
    nodes892 = node.contents();
    oldNodes.replaceWith(nodes892);
  }));
  var nodes894 = $("<span>");
  root1023.append(nodes894);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1026 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes895 = $("<span>");
    root1026.append(nodes895);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C11"), function(_, callback) {
      var root1027 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1027); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes895;
      nodes895 = node.contents();
      oldNodes.replaceWith(nodes895);
    }));
    var nodes896 = $("<span>");
    root1026.append(nodes896);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C7"), function(_, callback) {
      var root1028 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1028); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes896;
      nodes896 = node.contents();
      oldNodes.replaceWith(nodes896);
    }));
    var nodes897 = $("<span>");
    root1026.append(nodes897);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C9"), function(_, callback) {
      var root1029 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1029); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes897;
      nodes897 = node.contents();
      oldNodes.replaceWith(nodes897);
    }));
    var nodes898 = $("<span>");
    root1026.append(nodes898);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C1"), function(_, callback) {
      var root1030 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1030); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes898;
      nodes898 = node.contents();
      oldNodes.replaceWith(nodes898);
    }));
    var nodes899 = $("<span>");
    root1026.append(nodes899);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C30"), function(_, callback) {
      var root1031 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1031); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes899;
      nodes899 = node.contents();
      oldNodes.replaceWith(nodes899);
    }));
    var nodes900 = $("<span>");
    root1026.append(nodes900);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C13"), function(_, callback) {
      var root1032 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1032); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes900;
      nodes900 = node.contents();
      oldNodes.replaceWith(nodes900);
    }));
    var nodes901 = $("<span>");
    root1026.append(nodes901);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C17"), function(_, callback) {
      var root1033 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1033); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes901;
      nodes901 = node.contents();
      oldNodes.replaceWith(nodes901);
    }));
    callback(root1026); return subs__;
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes894;
    nodes894 = node.contents();
    oldNodes.replaceWith(nodes894);
  }));
  callback(root1023); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root1034 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes902 = $("<span>");
  root1034.append(nodes902);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1035 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp529 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp528 = mobl.ref(result__);
    
    var nodes903 = $("<span>");
    root1035.append(nodes903);
    subs__.addSub((ui.backButton)(tmp528, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp529, function(_, callback) {
      var root1036 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1036); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes903;
      nodes903 = node.contents();
      oldNodes.replaceWith(nodes903);
    }));
    callback(root1035); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes902;
    nodes902 = node.contents();
    oldNodes.replaceWith(nodes902);
  }));
  var nodes904 = $("<span>");
  root1034.append(nodes904);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1037 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes905 = $("<span>");
    root1037.append(nodes905);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C24"), function(_, callback) {
      var root1038 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1038); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes905;
      nodes905 = node.contents();
      oldNodes.replaceWith(nodes905);
    }));
    var nodes906 = $("<span>");
    root1037.append(nodes906);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C25"), function(_, callback) {
      var root1039 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1039); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes906;
      nodes906 = node.contents();
      oldNodes.replaceWith(nodes906);
    }));
    var nodes907 = $("<span>");
    root1037.append(nodes907);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C26"), function(_, callback) {
      var root1040 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1040); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes907;
      nodes907 = node.contents();
      oldNodes.replaceWith(nodes907);
    }));
    var nodes908 = $("<span>");
    root1037.append(nodes908);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C270"), function(_, callback) {
      var root1041 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1041); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes908;
      nodes908 = node.contents();
      oldNodes.replaceWith(nodes908);
    }));
    var nodes909 = $("<span>");
    root1037.append(nodes909);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C27"), function(_, callback) {
      var root1042 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1042); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes909;
      nodes909 = node.contents();
      oldNodes.replaceWith(nodes909);
    }));
    callback(root1037); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes904;
    nodes904 = node.contents();
    oldNodes.replaceWith(nodes904);
  }));
  callback(root1034); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root1043 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes910 = $("<span>");
  root1043.append(nodes910);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1044 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp531 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp530 = mobl.ref(result__);
    
    var nodes911 = $("<span>");
    root1044.append(nodes911);
    subs__.addSub((ui.backButton)(tmp530, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp531, function(_, callback) {
      var root1045 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1045); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes911;
      nodes911 = node.contents();
      oldNodes.replaceWith(nodes911);
    }));
    callback(root1044); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes910;
    nodes910 = node.contents();
    oldNodes.replaceWith(nodes910);
  }));
  var nodes912 = $("<span>");
  root1043.append(nodes912);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1046 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes913 = $("<span>");
    root1046.append(nodes913);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C15"), function(_, callback) {
      var root1047 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1047); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes913;
      nodes913 = node.contents();
      oldNodes.replaceWith(nodes913);
    }));
    var nodes914 = $("<span>");
    root1046.append(nodes914);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C16"), function(_, callback) {
      var root1048 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1048); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes914;
      nodes914 = node.contents();
      oldNodes.replaceWith(nodes914);
    }));
    var nodes915 = $("<span>");
    root1046.append(nodes915);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C6"), function(_, callback) {
      var root1049 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1049); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes915;
      nodes915 = node.contents();
      oldNodes.replaceWith(nodes915);
    }));
    callback(root1046); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes912;
    nodes912 = node.contents();
    oldNodes.replaceWith(nodes912);
  }));
  callback(root1043); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root1050 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes916 = $("<span>");
  root1050.append(nodes916);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1051 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp533 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp532 = mobl.ref(result__);
    
    var nodes917 = $("<span>");
    root1051.append(nodes917);
    subs__.addSub((ui.backButton)(tmp532, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp533, function(_, callback) {
      var root1052 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1052); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes917;
      nodes917 = node.contents();
      oldNodes.replaceWith(nodes917);
    }));
    callback(root1051); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes916;
    nodes916 = node.contents();
    oldNodes.replaceWith(nodes916);
  }));
  var nodes918 = $("<span>");
  root1050.append(nodes918);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1053 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes919 = $("<span>");
    root1053.append(nodes919);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C8"), function(_, callback) {
      var root1054 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1054); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes919;
      nodes919 = node.contents();
      oldNodes.replaceWith(nodes919);
    }));
    var nodes920 = $("<span>");
    root1053.append(nodes920);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C12"), function(_, callback) {
      var root1055 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1055); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes920;
      nodes920 = node.contents();
      oldNodes.replaceWith(nodes920);
    }));
    var nodes921 = $("<span>");
    root1053.append(nodes921);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C23"), function(_, callback) {
      var root1056 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1056); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes921;
      nodes921 = node.contents();
      oldNodes.replaceWith(nodes921);
    }));
    var nodes922 = $("<span>");
    root1053.append(nodes922);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C2"), function(_, callback) {
      var root1057 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1057); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes922;
      nodes922 = node.contents();
      oldNodes.replaceWith(nodes922);
    }));
    callback(root1053); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes918;
    nodes918 = node.contents();
    oldNodes.replaceWith(nodes918);
  }));
  callback(root1050); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root1058 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes923 = $("<span>");
  root1058.append(nodes923);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1059 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp535 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp534 = mobl.ref(result__);
    
    var nodes924 = $("<span>");
    root1059.append(nodes924);
    subs__.addSub((ui.backButton)(tmp534, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp535, function(_, callback) {
      var root1060 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1060); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes924;
      nodes924 = node.contents();
      oldNodes.replaceWith(nodes924);
    }));
    callback(root1059); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes923;
    nodes923 = node.contents();
    oldNodes.replaceWith(nodes923);
  }));
  var nodes925 = $("<span>");
  root1058.append(nodes925);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1061 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes926 = $("<span>");
    root1061.append(nodes926);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C5"), function(_, callback) {
      var root1062 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1062); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes926;
      nodes926 = node.contents();
      oldNodes.replaceWith(nodes926);
    }));
    var nodes927 = $("<span>");
    root1061.append(nodes927);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C18"), function(_, callback) {
      var root1063 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1063); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes927;
      nodes927 = node.contents();
      oldNodes.replaceWith(nodes927);
    }));
    callback(root1061); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes925;
    nodes925 = node.contents();
    oldNodes.replaceWith(nodes925);
  }));
  callback(root1058); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root1064 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes928 = $("<span>");
  root1064.append(nodes928);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1065 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp537 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp536 = mobl.ref(result__);
    
    var nodes929 = $("<span>");
    root1065.append(nodes929);
    subs__.addSub((ui.backButton)(tmp536, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp537, function(_, callback) {
      var root1066 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1066); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes929;
      nodes929 = node.contents();
      oldNodes.replaceWith(nodes929);
    }));
    callback(root1065); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes928;
    nodes928 = node.contents();
    oldNodes.replaceWith(nodes928);
  }));
  var nodes930 = $("<span>");
  root1064.append(nodes930);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1067 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes931 = $("<span>");
    root1067.append(nodes931);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C14"), function(_, callback) {
      var root1068 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1068); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes931;
      nodes931 = node.contents();
      oldNodes.replaceWith(nodes931);
    }));
    var nodes932 = $("<span>");
    root1067.append(nodes932);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C20"), function(_, callback) {
      var root1069 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1069); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes932;
      nodes932 = node.contents();
      oldNodes.replaceWith(nodes932);
    }));
    var nodes933 = $("<span>");
    root1067.append(nodes933);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C21"), function(_, callback) {
      var root1070 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1070); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes933;
      nodes933 = node.contents();
      oldNodes.replaceWith(nodes933);
    }));
    var nodes934 = $("<span>");
    root1067.append(nodes934);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C22"), function(_, callback) {
      var root1071 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1071); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes934;
      nodes934 = node.contents();
      oldNodes.replaceWith(nodes934);
    }));
    var nodes935 = $("<span>");
    root1067.append(nodes935);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C19"), function(_, callback) {
      var root1072 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1072); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes935;
      nodes935 = node.contents();
      oldNodes.replaceWith(nodes935);
    }));
    callback(root1067); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes930;
    nodes930 = node.contents();
    oldNodes.replaceWith(nodes930);
  }));
  callback(root1064); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root1073 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes936 = $("<span>");
  root1073.append(nodes936);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1074 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp539 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp538 = mobl.ref(result__);
    
    var nodes937 = $("<span>");
    root1074.append(nodes937);
    subs__.addSub((ui.backButton)(tmp538, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp539, function(_, callback) {
      var root1075 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1075); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes937;
      nodes937 = node.contents();
      oldNodes.replaceWith(nodes937);
    }));
    callback(root1074); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes936;
    nodes936 = node.contents();
    oldNodes.replaceWith(nodes936);
  }));
  var nodes938 = $("<span>");
  root1073.append(nodes938);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1076 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes939 = $("<span>");
    root1076.append(nodes939);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C28"), function(_, callback) {
      var root1077 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1077); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes939;
      nodes939 = node.contents();
      oldNodes.replaceWith(nodes939);
    }));
    var nodes940 = $("<span>");
    root1076.append(nodes940);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C3"), function(_, callback) {
      var root1078 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1078); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes940;
      nodes940 = node.contents();
      oldNodes.replaceWith(nodes940);
    }));
    var nodes941 = $("<span>");
    root1076.append(nodes941);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C4"), function(_, callback) {
      var root1079 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1079); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes941;
      nodes941 = node.contents();
      oldNodes.replaceWith(nodes941);
    }));
    callback(root1076); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes938;
    nodes938 = node.contents();
    oldNodes.replaceWith(nodes938);
  }));
  callback(root1073); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root1080 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes942 = $("<span>");
  root1080.append(nodes942);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1081 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp541 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp540 = mobl.ref(result__);
    
    var nodes943 = $("<span>");
    root1081.append(nodes943);
    subs__.addSub((ui.backButton)(tmp540, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp541, function(_, callback) {
      var root1082 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1082); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes943;
      nodes943 = node.contents();
      oldNodes.replaceWith(nodes943);
    }));
    callback(root1081); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes942;
    nodes942 = node.contents();
    oldNodes.replaceWith(nodes942);
  }));
  var nodes944 = $("<span>");
  root1080.append(nodes944);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1083 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes945 = $("<span>");
    root1083.append(nodes945);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C29"), function(_, callback) {
      var root1084 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1084); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes945;
      nodes945 = node.contents();
      oldNodes.replaceWith(nodes945);
    }));
    callback(root1083); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes944;
    nodes944 = node.contents();
    oldNodes.replaceWith(nodes944);
  }));
  callback(root1080); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root1085 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes946 = $("<span>");
  root1085.append(nodes946);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1086 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes947 = $("<span>");
    root1086.append(nodes947);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F1"), function(_, callback) {
      var root1087 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1087); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes947;
      nodes947 = node.contents();
      oldNodes.replaceWith(nodes947);
    }));
    var nodes948 = $("<span>");
    root1086.append(nodes948);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F2"), function(_, callback) {
      var root1088 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1088); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes948;
      nodes948 = node.contents();
      oldNodes.replaceWith(nodes948);
    }));
    var nodes949 = $("<span>");
    root1086.append(nodes949);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F3a"), function(_, callback) {
      var root1089 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1089); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes949;
      nodes949 = node.contents();
      oldNodes.replaceWith(nodes949);
    }));
    var nodes950 = $("<span>");
    root1086.append(nodes950);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F4"), function(_, callback) {
      var root1090 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1090); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes950;
      nodes950 = node.contents();
      oldNodes.replaceWith(nodes950);
    }));
    var nodes951 = $("<span>");
    root1086.append(nodes951);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F5"), function(_, callback) {
      var root1091 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1091); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes951;
      nodes951 = node.contents();
      oldNodes.replaceWith(nodes951);
    }));
    var nodes952 = $("<span>");
    root1086.append(nodes952);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F6"), function(_, callback) {
      var root1092 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1092); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes952;
      nodes952 = node.contents();
      oldNodes.replaceWith(nodes952);
    }));
    var nodes953 = $("<span>");
    root1086.append(nodes953);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F7"), function(_, callback) {
      var root1093 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1093); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes953;
      nodes953 = node.contents();
      oldNodes.replaceWith(nodes953);
    }));
    var nodes954 = $("<span>");
    root1086.append(nodes954);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F8"), function(_, callback) {
      var root1094 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1094); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes954;
      nodes954 = node.contents();
      oldNodes.replaceWith(nodes954);
    }));
    var nodes955 = $("<span>");
    root1086.append(nodes955);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F9"), function(_, callback) {
      var root1095 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1095); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes955;
      nodes955 = node.contents();
      oldNodes.replaceWith(nodes955);
    }));
    var nodes956 = $("<span>");
    root1086.append(nodes956);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F10"), function(_, callback) {
      var root1096 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1096); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes956;
      nodes956 = node.contents();
      oldNodes.replaceWith(nodes956);
    }));
    var nodes957 = $("<span>");
    root1086.append(nodes957);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F11"), function(_, callback) {
      var root1097 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1097); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes957;
      nodes957 = node.contents();
      oldNodes.replaceWith(nodes957);
    }));
    var nodes958 = $("<span>");
    root1086.append(nodes958);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F12"), function(_, callback) {
      var root1098 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1098); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes958;
      nodes958 = node.contents();
      oldNodes.replaceWith(nodes958);
    }));
    var nodes959 = $("<span>");
    root1086.append(nodes959);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F13"), function(_, callback) {
      var root1099 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1099); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes959;
      nodes959 = node.contents();
      oldNodes.replaceWith(nodes959);
    }));
    callback(root1086); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes946;
    nodes946 = node.contents();
    oldNodes.replaceWith(nodes946);
  }));
  callback(root1085); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root1100 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes960 = $("<span>");
  root1100.append(nodes960);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1101 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes961 = $("<span>");
    root1101.append(nodes961);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S1"), function(_, callback) {
      var root1102 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1102); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes961;
      nodes961 = node.contents();
      oldNodes.replaceWith(nodes961);
    }));
    var nodes962 = $("<span>");
    root1101.append(nodes962);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S2"), function(_, callback) {
      var root1103 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1103); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes962;
      nodes962 = node.contents();
      oldNodes.replaceWith(nodes962);
    }));
    var nodes963 = $("<span>");
    root1101.append(nodes963);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S3"), function(_, callback) {
      var root1104 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1104); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes963;
      nodes963 = node.contents();
      oldNodes.replaceWith(nodes963);
    }));
    var nodes964 = $("<span>");
    root1101.append(nodes964);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S4"), function(_, callback) {
      var root1105 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1105); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes964;
      nodes964 = node.contents();
      oldNodes.replaceWith(nodes964);
    }));
    var nodes965 = $("<span>");
    root1101.append(nodes965);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S5"), function(_, callback) {
      var root1106 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1106); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes965;
      nodes965 = node.contents();
      oldNodes.replaceWith(nodes965);
    }));
    var nodes966 = $("<span>");
    root1101.append(nodes966);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S6"), function(_, callback) {
      var root1107 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1107); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes966;
      nodes966 = node.contents();
      oldNodes.replaceWith(nodes966);
    }));
    callback(root1101); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes960;
    nodes960 = node.contents();
    oldNodes.replaceWith(nodes960);
  }));
  callback(root1100); return subs__;
  
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
  var root1108 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node40 = $("<div>");
  
  var ref43 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref43.get() !== null) {
    node40.attr('class', ref43.get());
    subs__.addSub(ref43.addEventListener('change', function(_, ref, val) {
      node40.attr('class', val);
    }));
    
  }
  subs__.addSub(ref43.rebind());
  
  var val8 = onclick.get();
  if(val8 !== null) {
    subs__.addSub(mobl.domBind(node40, 'tap', val8));
  }
  
  
  var node41 = $("<div>");
  
  var ref42 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref42.get() !== null) {
    node41.attr('class', ref42.get());
    subs__.addSub(ref42.addEventListener('change', function(_, ref, val) {
      node41.attr('class', val);
    }));
    
  }
  subs__.addSub(ref42.rebind());
  
  
  var node42 = $("<div>");
  
  var ref40 = text;
  node42.text(""+ref40.get());
  var ignore8 = false;
  subs__.addSub(ref40.addEventListener('change', function(_, ref, val) {
    if(ignore8) return;
    node42.text(""+val);
  }));
  subs__.addSub(ref40.rebind());
  
  
  var ref41 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref41.get() !== null) {
    node42.attr('class', ref41.get());
    subs__.addSub(ref41.addEventListener('change', function(_, ref, val) {
      node42.attr('class', val);
    }));
    
  }
  subs__.addSub(ref41.rebind());
  
  node41.append(node42);
  node40.append(node41);
  var nodes967 = $("<span>");
  node40.append(nodes967);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl8();
  }));
  
  function renderControl8() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1109 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1109); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes967;
      nodes967 = node.contents();
      oldNodes.replaceWith(nodes967);
    }));
  }
  renderControl8();
  root1108.append(node40);
  callback(root1108); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mathJAX.renderMaths(function(result__) {
    var tmp567 = result__;
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
    var tmp568 = result__;
    var result__ = tmp568;
    var qa2 = result__;
    var result__ = qa2;
    if(callback && callback.apply) callback(result__);
    return;
    if(callback && callback.apply) callback(); return;
  });
};


nrichRPG.coreWorkout.showQA = function(qa, number, elements, callback) {
  var root1110 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp574 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp545 = mobl.ref(result__);
  
  var result__ = nrichRPG.coreWorkout.topicName(qa.get().topic);
  var tmp544 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'topic').addEventListener('change', function() {
    tmp544.set(nrichRPG.coreWorkout.topicName(qa.get().topic));
  }));
  
  var nodes968 = $("<span>");
  root1110.append(nodes968);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(tmp544, tmp545, function(_, callback) {
    var root1111 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp571 = result__;
                       var result__ = tmp571;
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
                             var tmp572 = result__;
                             if(callback && callback.apply) callback(); return;
                           });
                         }
                       }
                     });
                   };
    var tmp542 = mobl.ref(result__);
    
    var nodes969 = $("<span>");
    root1111.append(nodes969);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp542, function(_, callback) {
      var root1112 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1112); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes969;
      nodes969 = node.contents();
      oldNodes.replaceWith(nodes969);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(qa.get().topic, function(result__) {
                       var tmp569 = result__;
                       var result__ = tmp569;
                       var qa2 = result__;
                       var result__ = qa.get().number;
                       var qnum = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       var result__ = qnum;
                       qa.get().number = result__;
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp570 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp543 = mobl.ref(result__);
    
    var nodes970 = $("<span>");
    root1111.append(nodes970);
    subs__.addSub((ui.sideButton)(mobl.ref("New"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp543, function(_, callback) {
      var root1113 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1113); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes970;
      nodes970 = node.contents();
      oldNodes.replaceWith(nodes970);
    }));
    callback(root1111); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes968;
    nodes968 = node.contents();
    oldNodes.replaceWith(nodes968);
  }));
  var nodes971 = $("<span>");
  root1110.append(nodes971);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1114 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp573 = result__;
                       var result__ = nrichRPG.coreWorkout.removeMathJaxIncidentElements();
                       var result__ = mobl.$("#question-block-" + number.get()).children("span:first").html();
                       qa.get().questionHtml = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp548 = mobl.ref(result__);
    
    var nodes972 = $("<span>");
    root1114.append(nodes972);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp548, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root1115 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + number.get() + ". ";
      var tmp546 = mobl.ref(result__);
      subs__.addSub(number.addEventListener('change', function() {
        tmp546.set("Q" + number.get() + ". ");
      }));
      
      var nodes973 = $("<span>");
      root1115.append(nodes973);
      subs__.addSub((mobl.html)(tmp546, function(_, callback) {
        var root1116 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1116); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes973;
        nodes973 = node.contents();
        oldNodes.replaceWith(nodes973);
      }));
      
      var node43 = $("<span>");
      
      var ref44 = mobl.ref("question-block-" + number.get());
      if(ref44.get() !== null) {
        node43.attr('id', ref44.get());
        subs__.addSub(ref44.addEventListener('change', function(_, ref, val) {
          node43.attr('id', val);
        }));
        subs__.addSub(number.addEventListener('change', function() {
          node43.attr('id', "question-block-" + number.get());
        }));
        
      }
      subs__.addSub(ref44.rebind());
      
      var result__ = plot.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml;
      var tmp547 = mobl.ref(result__);
      subs__.addSub(mobl.ref(qa, 'question').addEventListener('change', function() {
        tmp547.set(plot.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml);
      }));
      subs__.addSub(mobl.ref(qa, 'questionHtml').addEventListener('change', function() {
        tmp547.set(plot.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml);
      }));
      
      var nodes974 = $("<span>");
      node43.append(nodes974);
      subs__.addSub((mobl.html)(tmp547, function(_, callback) {
        var root1117 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1117); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes974;
        nodes974 = node.contents();
        oldNodes.replaceWith(nodes974);
      }));
      root1115.append(node43);
      callback(root1115); return subs__;
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes972;
      nodes972 = node.contents();
      oldNodes.replaceWith(nodes972);
    }));
    var nodes975 = $("<span>");
    root1114.append(nodes975);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root1118 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes976 = $("<span>");
      root1118.append(nodes976);
      subs__.addSub((nrichRPG.coreWorkout.makeChoices)(qa, number, function(_, callback) {
        var root1119 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1119); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes976;
        nodes976 = node.contents();
        oldNodes.replaceWith(nodes976);
      }));
      callback(root1118); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes975;
      nodes975 = node.contents();
      oldNodes.replaceWith(nodes975);
    }));
    callback(root1114); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes971;
    nodes971 = node.contents();
    oldNodes.replaceWith(nodes971);
  }));
  callback(root1110); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.choiceItemStyle = function(choiceNumber, questionNumber, currentChoice, correctChoice) {
   var __this = this;
  var encodedChoiceNumber = choiceNumber + questionNumber * 4;
  
  var encodedCorrectChoice = correctChoice + questionNumber * 4;
  
  return encodedChoiceNumber == currentChoice ? (currentChoice == encodedCorrectChoice ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle) : ui.itemStyle;
};


nrichRPG.coreWorkout.makeChoices = function(qa, number, elements, callback) {
  var root1120 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var currentChoice = mobl.ref(-1);
  var nodes977 = $("<span>");
  root1120.append(nodes977);
  subs__.addSub((mobl.block)(mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root1121 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = nrichRPG.coreWorkout.generateChoices(qa.get());
    var tmp552 = mobl.ref(result__);
    subs__.addSub(qa.addEventListener('change', function() {
      tmp552.set(nrichRPG.coreWorkout.generateChoices(qa.get()));
    }));
    
    
    var node44 = mobl.loadingSpan();
    root1121.append(node44);
    var list8;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList8 = function() {
      var subs__ = listSubs__;
      list8 = tmp552.get();
      list8.list(function(results8) {
        node44.empty();
        for(var i219 = 0; i219 < results8.length; i219++) {
          (function() {
            var iternode8 = $("<span>");
            node44.append(iternode8);
            var order;var correctChoice;var answer;
            order = mobl.ref(mobl.ref(mobl.ref(results8), i219), "_1");correctChoice = mobl.ref(mobl.ref(mobl.ref(results8), i219), "_2");answer = mobl.ref(mobl.ref(mobl.ref(results8), i219), "_3");
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = order.get() + number.get() * 4;
                             currentChoice.set(result__);
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
            var tmp551 = mobl.ref(result__);
            
            var result__ = nrichRPG.coreWorkout.choiceItemStyle(order.get(), number.get(), currentChoice.get(), correctChoice.get());
            var tmp550 = mobl.ref(result__);
            subs__.addSub(order.addEventListener('change', function() {
              tmp550.set(nrichRPG.coreWorkout.choiceItemStyle(order.get(), number.get(), currentChoice.get(), correctChoice.get()));
            }));
            subs__.addSub(number.addEventListener('change', function() {
              tmp550.set(nrichRPG.coreWorkout.choiceItemStyle(order.get(), number.get(), currentChoice.get(), correctChoice.get()));
            }));
            subs__.addSub(currentChoice.addEventListener('change', function() {
              tmp550.set(nrichRPG.coreWorkout.choiceItemStyle(order.get(), number.get(), currentChoice.get(), correctChoice.get()));
            }));
            subs__.addSub(correctChoice.addEventListener('change', function() {
              tmp550.set(nrichRPG.coreWorkout.choiceItemStyle(order.get(), number.get(), currentChoice.get(), correctChoice.get()));
            }));
            
            var nodes978 = $("<span>");
            iternode8.append(nodes978);
            subs__.addSub((ui.item)(tmp550, mobl.ref(ui.itemPushedStyle), tmp551, mobl.ref(null), mobl.ref(true), function(_, callback) {
              var root1122 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var result__ = "Choice " + order.get() + ".";
              var tmp549 = mobl.ref(result__);
              subs__.addSub(order.addEventListener('change', function() {
                tmp549.set("Choice " + order.get() + ".");
              }));
              
              var nodes979 = $("<span>");
              root1122.append(nodes979);
              subs__.addSub((mobl.html)(tmp549, function(_, callback) {
                var root1123 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1123); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes979;
                nodes979 = node.contents();
                oldNodes.replaceWith(nodes979);
              }));
              var nodes980 = $("<span>");
              root1122.append(nodes980);
              subs__.addSub((mobl.html)(answer, function(_, callback) {
                var root1124 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1124); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes980;
                nodes980 = node.contents();
                oldNodes.replaceWith(nodes980);
              }));
              callback(root1122); return subs__;
              
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes978;
              nodes978 = node.contents();
              oldNodes.replaceWith(nodes978);
            }));
            
            var oldNodes = iternode8;
            iternode8 = iternode8.contents();
            oldNodes.replaceWith(iternode8);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list8.addEventListener('change', function() { listSubs__.unsubscribe(); renderList8(true); }));
        subs__.addSub(tmp552.addEventListener('change', function() { listSubs__.unsubscribe(); renderList8(true); }));
      });
    };
    renderList8();
    
    callback(root1121); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes977;
    nodes977 = node.contents();
    oldNodes.replaceWith(nodes977);
  }));
  callback(root1120); return subs__;
  
  return subs__;
};
nrichRPG.coreWorkout.generateChoices = function(qa) {
   var __this = this;
  var correctChoice = mobl.random(3) + 1;
  
  var choices = [];
  
  var coll19 = mobl.range(1, 5);
  var length8 = coll19.length;
  for(var i220 = 0; i220 < length8; i220++) {
    var index;
    index = coll19.get(i220);
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
  var result__ = nrichRPG.questionAnswer.QA.all().order("number", false).limit(1);
  var qas = result__;
  qas.count(function(result__) {
    var tmp577 = result__;
    var result__ = tmp577 > 0;
    var tmp576 = result__;
    var result__ = tmp576;
    if(result__) {
      {
        qas.one(function(result__) {
          var tmp579 = result__;
          var result__ = tmp579.number;
          var tmp578 = result__;
          var result__ = tmp578;
          nrichRPG.coreWorkout.max.set(result__);
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
        });
      }
    } else {
      {
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
    }
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