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
    var tmp583 = result__;
    var result__ = tmp583;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp584 = result__;
      var result__ = tmp584;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp585 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicCode, callback) {
  var __this = this;
  var result__ = nrichRPG.coreWorkout.topicMapForId(topicCode).keys();
  var keys = result__;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll39) {
    coll39 = coll39.reverse();
    function processOne18() {
      var i;
      i = coll39.pop();
      var result__ = mobl.Math.floor(keys.length * mobl.Math.random());
      var r = result__;
      var result__ = keys.get(r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQA(tid, function(result__) {
        var tmp586 = result__;
        
        if(coll39.length > 0) processOne18(); else rest18();
        
      });
    }
    function rest18() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll39.length > 0) processOne18(); else rest18();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root1127 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes982 = $("<span>");
  root1127.append(nodes982);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1128 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp594 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp546 = mobl.ref(result__);
    
    var nodes983 = $("<span>");
    root1128.append(nodes983);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp546, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1129 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes984 = $("<span>");
      root1129.append(nodes984);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1130 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1130); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes984;
        nodes984 = node.contents();
        oldNodes.replaceWith(nodes984);
      }));
      callback(root1129); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes983;
      nodes983 = node.contents();
      oldNodes.replaceWith(nodes983);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp593 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp547 = mobl.ref(result__);
    
    var nodes985 = $("<span>");
    root1128.append(nodes985);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp547, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1131 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes986 = $("<span>");
      root1131.append(nodes986);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1132 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1132); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes986;
        nodes986 = node.contents();
        oldNodes.replaceWith(nodes986);
      }));
      callback(root1131); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes985;
      nodes985 = node.contents();
      oldNodes.replaceWith(nodes985);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp592 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp548 = mobl.ref(result__);
    
    var nodes987 = $("<span>");
    root1128.append(nodes987);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp548, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1133 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes988 = $("<span>");
      root1133.append(nodes988);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1134 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1134); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes988;
        nodes988 = node.contents();
        oldNodes.replaceWith(nodes988);
      }));
      callback(root1133); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes987;
      nodes987 = node.contents();
      oldNodes.replaceWith(nodes987);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp591 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp549 = mobl.ref(result__);
    
    var nodes989 = $("<span>");
    root1128.append(nodes989);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp549, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1135 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes990 = $("<span>");
      root1135.append(nodes990);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1136 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1136); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes990;
        nodes990 = node.contents();
        oldNodes.replaceWith(nodes990);
      }));
      callback(root1135); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes989;
      nodes989 = node.contents();
      oldNodes.replaceWith(nodes989);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp590 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp550 = mobl.ref(result__);
    
    var nodes991 = $("<span>");
    root1128.append(nodes991);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp550, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1137 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes992 = $("<span>");
      root1137.append(nodes992);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1138 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1138); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes992;
        nodes992 = node.contents();
        oldNodes.replaceWith(nodes992);
      }));
      callback(root1137); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes991;
      nodes991 = node.contents();
      oldNodes.replaceWith(nodes991);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp589 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp551 = mobl.ref(result__);
    
    var nodes993 = $("<span>");
    root1128.append(nodes993);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp551, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1139 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes994 = $("<span>");
      root1139.append(nodes994);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1140 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1140); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes994;
        nodes994 = node.contents();
        oldNodes.replaceWith(nodes994);
      }));
      callback(root1139); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes993;
      nodes993 = node.contents();
      oldNodes.replaceWith(nodes993);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp588 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp552 = mobl.ref(result__);
    
    var nodes995 = $("<span>");
    root1128.append(nodes995);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp552, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1141 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes996 = $("<span>");
      root1141.append(nodes996);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1142 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1142); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes996;
        nodes996 = node.contents();
        oldNodes.replaceWith(nodes996);
      }));
      callback(root1141); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes995;
      nodes995 = node.contents();
      oldNodes.replaceWith(nodes995);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp587 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp553 = mobl.ref(result__);
    
    var nodes997 = $("<span>");
    root1128.append(nodes997);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp553, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1143 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes998 = $("<span>");
      root1143.append(nodes998);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1144 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1144); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes998;
        nodes998 = node.contents();
        oldNodes.replaceWith(nodes998);
      }));
      callback(root1143); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes997;
      nodes997 = node.contents();
      oldNodes.replaceWith(nodes997);
    }));
    callback(root1128); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes982;
    nodes982 = node.contents();
    oldNodes.replaceWith(nodes982);
  }));
  callback(root1127); return subs__;
  
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
    var tmp595 = result__;
    var result__ = mobl.alert(nrichRPG.coreWorkout.topicName(tid) + " added");
    if(callback && callback.apply) callback(); return;
  });
};


nrichRPG.coreWorkout.topicLabel = function(tid, elements, callback) {
  var root1145 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var map = mobl.ref(nrichRPG.coreWorkout.topicMapForId(tid.get()));
  var result__ = "+" + map.get().get(tid.get());
  var tmp554 = mobl.ref(result__);
  subs__.addSub(map.addEventListener('change', function() {
    tmp554.set("+" + map.get().get(tid.get()));
  }));
  subs__.addSub(tid.addEventListener('change', function() {
    tmp554.set("+" + map.get().get(tid.get()));
  }));
  
  var nodes999 = $("<span>");
  root1145.append(nodes999);
  subs__.addSub((mobl.label)(tmp554, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root1146 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1146); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes999;
    nodes999 = node.contents();
    oldNodes.replaceWith(nodes999);
  }));
  callback(root1145); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.topicItem = function(tid, elements, callback) {
  var root1147 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   nrichRPG.coreWorkout.topicAdded(tid.get(), function(result__) {
                     var tmp596 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp555 = mobl.ref(result__);
  
  var nodes1000 = $("<span>");
  root1147.append(nodes1000);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp555, mobl.ref(null), mobl.ref(false), function(_, callback) {
    var root1148 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes1001 = $("<span>");
    root1148.append(nodes1001);
    subs__.addSub((nrichRPG.coreWorkout.topicLabel)(tid, function(_, callback) {
      var root1149 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1149); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1001;
      nodes1001 = node.contents();
      oldNodes.replaceWith(nodes1001);
    }));
    callback(root1148); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1000;
    nodes1000 = node.contents();
    oldNodes.replaceWith(nodes1000);
  }));
  callback(root1147); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root1150 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes1002 = $("<span>");
  root1150.append(nodes1002);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1151 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp557 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp556 = mobl.ref(result__);
    
    var nodes1003 = $("<span>");
    root1151.append(nodes1003);
    subs__.addSub((ui.backButton)(tmp556, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp557, function(_, callback) {
      var root1152 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1152); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1003;
      nodes1003 = node.contents();
      oldNodes.replaceWith(nodes1003);
    }));
    callback(root1151); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1002;
    nodes1002 = node.contents();
    oldNodes.replaceWith(nodes1002);
  }));
  var nodes1004 = $("<span>");
  root1150.append(nodes1004);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1153 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes1005 = $("<span>");
    root1153.append(nodes1005);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C11"), function(_, callback) {
      var root1154 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1154); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1005;
      nodes1005 = node.contents();
      oldNodes.replaceWith(nodes1005);
    }));
    var nodes1006 = $("<span>");
    root1153.append(nodes1006);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C7"), function(_, callback) {
      var root1155 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1155); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1006;
      nodes1006 = node.contents();
      oldNodes.replaceWith(nodes1006);
    }));
    var nodes1007 = $("<span>");
    root1153.append(nodes1007);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C9"), function(_, callback) {
      var root1156 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1156); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1007;
      nodes1007 = node.contents();
      oldNodes.replaceWith(nodes1007);
    }));
    var nodes1008 = $("<span>");
    root1153.append(nodes1008);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C1"), function(_, callback) {
      var root1157 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1157); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1008;
      nodes1008 = node.contents();
      oldNodes.replaceWith(nodes1008);
    }));
    var nodes1009 = $("<span>");
    root1153.append(nodes1009);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C30"), function(_, callback) {
      var root1158 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1158); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1009;
      nodes1009 = node.contents();
      oldNodes.replaceWith(nodes1009);
    }));
    var nodes1010 = $("<span>");
    root1153.append(nodes1010);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C13"), function(_, callback) {
      var root1159 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1159); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1010;
      nodes1010 = node.contents();
      oldNodes.replaceWith(nodes1010);
    }));
    var nodes1011 = $("<span>");
    root1153.append(nodes1011);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C17"), function(_, callback) {
      var root1160 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1160); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1011;
      nodes1011 = node.contents();
      oldNodes.replaceWith(nodes1011);
    }));
    callback(root1153); return subs__;
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1004;
    nodes1004 = node.contents();
    oldNodes.replaceWith(nodes1004);
  }));
  callback(root1150); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root1161 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1012 = $("<span>");
  root1161.append(nodes1012);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1162 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp559 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp558 = mobl.ref(result__);
    
    var nodes1013 = $("<span>");
    root1162.append(nodes1013);
    subs__.addSub((ui.backButton)(tmp558, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp559, function(_, callback) {
      var root1163 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1163); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1013;
      nodes1013 = node.contents();
      oldNodes.replaceWith(nodes1013);
    }));
    callback(root1162); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1012;
    nodes1012 = node.contents();
    oldNodes.replaceWith(nodes1012);
  }));
  var nodes1014 = $("<span>");
  root1161.append(nodes1014);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1164 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes1015 = $("<span>");
    root1164.append(nodes1015);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C24"), function(_, callback) {
      var root1165 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1165); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1015;
      nodes1015 = node.contents();
      oldNodes.replaceWith(nodes1015);
    }));
    var nodes1016 = $("<span>");
    root1164.append(nodes1016);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C25"), function(_, callback) {
      var root1166 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1166); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1016;
      nodes1016 = node.contents();
      oldNodes.replaceWith(nodes1016);
    }));
    var nodes1017 = $("<span>");
    root1164.append(nodes1017);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C26"), function(_, callback) {
      var root1167 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1167); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1017;
      nodes1017 = node.contents();
      oldNodes.replaceWith(nodes1017);
    }));
    var nodes1018 = $("<span>");
    root1164.append(nodes1018);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C270"), function(_, callback) {
      var root1168 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1168); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1018;
      nodes1018 = node.contents();
      oldNodes.replaceWith(nodes1018);
    }));
    var nodes1019 = $("<span>");
    root1164.append(nodes1019);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C27"), function(_, callback) {
      var root1169 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1169); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1019;
      nodes1019 = node.contents();
      oldNodes.replaceWith(nodes1019);
    }));
    callback(root1164); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1014;
    nodes1014 = node.contents();
    oldNodes.replaceWith(nodes1014);
  }));
  callback(root1161); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root1170 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1020 = $("<span>");
  root1170.append(nodes1020);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1171 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp561 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp560 = mobl.ref(result__);
    
    var nodes1021 = $("<span>");
    root1171.append(nodes1021);
    subs__.addSub((ui.backButton)(tmp560, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp561, function(_, callback) {
      var root1172 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1172); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1021;
      nodes1021 = node.contents();
      oldNodes.replaceWith(nodes1021);
    }));
    callback(root1171); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1020;
    nodes1020 = node.contents();
    oldNodes.replaceWith(nodes1020);
  }));
  var nodes1022 = $("<span>");
  root1170.append(nodes1022);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1173 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes1023 = $("<span>");
    root1173.append(nodes1023);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C15"), function(_, callback) {
      var root1174 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1174); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1023;
      nodes1023 = node.contents();
      oldNodes.replaceWith(nodes1023);
    }));
    var nodes1024 = $("<span>");
    root1173.append(nodes1024);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C16"), function(_, callback) {
      var root1175 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1175); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1024;
      nodes1024 = node.contents();
      oldNodes.replaceWith(nodes1024);
    }));
    var nodes1025 = $("<span>");
    root1173.append(nodes1025);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C6"), function(_, callback) {
      var root1176 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1176); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1025;
      nodes1025 = node.contents();
      oldNodes.replaceWith(nodes1025);
    }));
    callback(root1173); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1022;
    nodes1022 = node.contents();
    oldNodes.replaceWith(nodes1022);
  }));
  callback(root1170); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root1177 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1026 = $("<span>");
  root1177.append(nodes1026);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1178 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp563 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp562 = mobl.ref(result__);
    
    var nodes1027 = $("<span>");
    root1178.append(nodes1027);
    subs__.addSub((ui.backButton)(tmp562, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp563, function(_, callback) {
      var root1179 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1179); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1027;
      nodes1027 = node.contents();
      oldNodes.replaceWith(nodes1027);
    }));
    callback(root1178); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1026;
    nodes1026 = node.contents();
    oldNodes.replaceWith(nodes1026);
  }));
  var nodes1028 = $("<span>");
  root1177.append(nodes1028);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1180 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes1029 = $("<span>");
    root1180.append(nodes1029);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C8"), function(_, callback) {
      var root1181 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1181); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1029;
      nodes1029 = node.contents();
      oldNodes.replaceWith(nodes1029);
    }));
    var nodes1030 = $("<span>");
    root1180.append(nodes1030);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C12"), function(_, callback) {
      var root1182 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1182); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1030;
      nodes1030 = node.contents();
      oldNodes.replaceWith(nodes1030);
    }));
    var nodes1031 = $("<span>");
    root1180.append(nodes1031);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C23"), function(_, callback) {
      var root1183 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1183); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1031;
      nodes1031 = node.contents();
      oldNodes.replaceWith(nodes1031);
    }));
    var nodes1032 = $("<span>");
    root1180.append(nodes1032);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C2"), function(_, callback) {
      var root1184 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1184); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1032;
      nodes1032 = node.contents();
      oldNodes.replaceWith(nodes1032);
    }));
    callback(root1180); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1028;
    nodes1028 = node.contents();
    oldNodes.replaceWith(nodes1028);
  }));
  callback(root1177); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root1185 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1033 = $("<span>");
  root1185.append(nodes1033);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1186 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp565 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp564 = mobl.ref(result__);
    
    var nodes1034 = $("<span>");
    root1186.append(nodes1034);
    subs__.addSub((ui.backButton)(tmp564, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp565, function(_, callback) {
      var root1187 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1187); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1034;
      nodes1034 = node.contents();
      oldNodes.replaceWith(nodes1034);
    }));
    callback(root1186); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1033;
    nodes1033 = node.contents();
    oldNodes.replaceWith(nodes1033);
  }));
  var nodes1035 = $("<span>");
  root1185.append(nodes1035);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1188 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes1036 = $("<span>");
    root1188.append(nodes1036);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C5"), function(_, callback) {
      var root1189 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1189); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1036;
      nodes1036 = node.contents();
      oldNodes.replaceWith(nodes1036);
    }));
    var nodes1037 = $("<span>");
    root1188.append(nodes1037);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C18"), function(_, callback) {
      var root1190 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1190); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1037;
      nodes1037 = node.contents();
      oldNodes.replaceWith(nodes1037);
    }));
    callback(root1188); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1035;
    nodes1035 = node.contents();
    oldNodes.replaceWith(nodes1035);
  }));
  callback(root1185); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root1191 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1038 = $("<span>");
  root1191.append(nodes1038);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1192 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp567 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp566 = mobl.ref(result__);
    
    var nodes1039 = $("<span>");
    root1192.append(nodes1039);
    subs__.addSub((ui.backButton)(tmp566, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp567, function(_, callback) {
      var root1193 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1193); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1039;
      nodes1039 = node.contents();
      oldNodes.replaceWith(nodes1039);
    }));
    callback(root1192); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1038;
    nodes1038 = node.contents();
    oldNodes.replaceWith(nodes1038);
  }));
  var nodes1040 = $("<span>");
  root1191.append(nodes1040);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1194 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes1041 = $("<span>");
    root1194.append(nodes1041);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C14"), function(_, callback) {
      var root1195 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1195); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1041;
      nodes1041 = node.contents();
      oldNodes.replaceWith(nodes1041);
    }));
    var nodes1042 = $("<span>");
    root1194.append(nodes1042);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C20"), function(_, callback) {
      var root1196 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1196); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1042;
      nodes1042 = node.contents();
      oldNodes.replaceWith(nodes1042);
    }));
    var nodes1043 = $("<span>");
    root1194.append(nodes1043);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C21"), function(_, callback) {
      var root1197 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1197); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1043;
      nodes1043 = node.contents();
      oldNodes.replaceWith(nodes1043);
    }));
    var nodes1044 = $("<span>");
    root1194.append(nodes1044);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C22"), function(_, callback) {
      var root1198 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1198); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1044;
      nodes1044 = node.contents();
      oldNodes.replaceWith(nodes1044);
    }));
    var nodes1045 = $("<span>");
    root1194.append(nodes1045);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C19"), function(_, callback) {
      var root1199 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1199); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1045;
      nodes1045 = node.contents();
      oldNodes.replaceWith(nodes1045);
    }));
    callback(root1194); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1040;
    nodes1040 = node.contents();
    oldNodes.replaceWith(nodes1040);
  }));
  callback(root1191); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root1200 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1046 = $("<span>");
  root1200.append(nodes1046);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1201 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp569 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp568 = mobl.ref(result__);
    
    var nodes1047 = $("<span>");
    root1201.append(nodes1047);
    subs__.addSub((ui.backButton)(tmp568, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp569, function(_, callback) {
      var root1202 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1202); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1047;
      nodes1047 = node.contents();
      oldNodes.replaceWith(nodes1047);
    }));
    callback(root1201); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1046;
    nodes1046 = node.contents();
    oldNodes.replaceWith(nodes1046);
  }));
  var nodes1048 = $("<span>");
  root1200.append(nodes1048);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1203 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes1049 = $("<span>");
    root1203.append(nodes1049);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C28"), function(_, callback) {
      var root1204 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1204); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1049;
      nodes1049 = node.contents();
      oldNodes.replaceWith(nodes1049);
    }));
    var nodes1050 = $("<span>");
    root1203.append(nodes1050);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C3"), function(_, callback) {
      var root1205 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1205); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1050;
      nodes1050 = node.contents();
      oldNodes.replaceWith(nodes1050);
    }));
    var nodes1051 = $("<span>");
    root1203.append(nodes1051);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C4"), function(_, callback) {
      var root1206 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1206); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1051;
      nodes1051 = node.contents();
      oldNodes.replaceWith(nodes1051);
    }));
    callback(root1203); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1048;
    nodes1048 = node.contents();
    oldNodes.replaceWith(nodes1048);
  }));
  callback(root1200); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root1207 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1052 = $("<span>");
  root1207.append(nodes1052);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1208 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp571 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp570 = mobl.ref(result__);
    
    var nodes1053 = $("<span>");
    root1208.append(nodes1053);
    subs__.addSub((ui.backButton)(tmp570, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp571, function(_, callback) {
      var root1209 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1209); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1053;
      nodes1053 = node.contents();
      oldNodes.replaceWith(nodes1053);
    }));
    callback(root1208); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1052;
    nodes1052 = node.contents();
    oldNodes.replaceWith(nodes1052);
  }));
  var nodes1054 = $("<span>");
  root1207.append(nodes1054);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1210 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes1055 = $("<span>");
    root1210.append(nodes1055);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C29"), function(_, callback) {
      var root1211 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1211); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1055;
      nodes1055 = node.contents();
      oldNodes.replaceWith(nodes1055);
    }));
    callback(root1210); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1054;
    nodes1054 = node.contents();
    oldNodes.replaceWith(nodes1054);
  }));
  callback(root1207); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root1212 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1056 = $("<span>");
  root1212.append(nodes1056);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1213 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes1057 = $("<span>");
    root1213.append(nodes1057);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F1"), function(_, callback) {
      var root1214 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1214); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1057;
      nodes1057 = node.contents();
      oldNodes.replaceWith(nodes1057);
    }));
    var nodes1058 = $("<span>");
    root1213.append(nodes1058);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F2"), function(_, callback) {
      var root1215 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1215); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1058;
      nodes1058 = node.contents();
      oldNodes.replaceWith(nodes1058);
    }));
    var nodes1059 = $("<span>");
    root1213.append(nodes1059);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F3a"), function(_, callback) {
      var root1216 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1216); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1059;
      nodes1059 = node.contents();
      oldNodes.replaceWith(nodes1059);
    }));
    var nodes1060 = $("<span>");
    root1213.append(nodes1060);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F4"), function(_, callback) {
      var root1217 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1217); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1060;
      nodes1060 = node.contents();
      oldNodes.replaceWith(nodes1060);
    }));
    var nodes1061 = $("<span>");
    root1213.append(nodes1061);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F5"), function(_, callback) {
      var root1218 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1218); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1061;
      nodes1061 = node.contents();
      oldNodes.replaceWith(nodes1061);
    }));
    var nodes1062 = $("<span>");
    root1213.append(nodes1062);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F6"), function(_, callback) {
      var root1219 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1219); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1062;
      nodes1062 = node.contents();
      oldNodes.replaceWith(nodes1062);
    }));
    var nodes1063 = $("<span>");
    root1213.append(nodes1063);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F7"), function(_, callback) {
      var root1220 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1220); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1063;
      nodes1063 = node.contents();
      oldNodes.replaceWith(nodes1063);
    }));
    var nodes1064 = $("<span>");
    root1213.append(nodes1064);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F8"), function(_, callback) {
      var root1221 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1221); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1064;
      nodes1064 = node.contents();
      oldNodes.replaceWith(nodes1064);
    }));
    var nodes1065 = $("<span>");
    root1213.append(nodes1065);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F9"), function(_, callback) {
      var root1222 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1222); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1065;
      nodes1065 = node.contents();
      oldNodes.replaceWith(nodes1065);
    }));
    var nodes1066 = $("<span>");
    root1213.append(nodes1066);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F10"), function(_, callback) {
      var root1223 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1223); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1066;
      nodes1066 = node.contents();
      oldNodes.replaceWith(nodes1066);
    }));
    var nodes1067 = $("<span>");
    root1213.append(nodes1067);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F11"), function(_, callback) {
      var root1224 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1224); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1067;
      nodes1067 = node.contents();
      oldNodes.replaceWith(nodes1067);
    }));
    var nodes1068 = $("<span>");
    root1213.append(nodes1068);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F12"), function(_, callback) {
      var root1225 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1225); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1068;
      nodes1068 = node.contents();
      oldNodes.replaceWith(nodes1068);
    }));
    var nodes1069 = $("<span>");
    root1213.append(nodes1069);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F13"), function(_, callback) {
      var root1226 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1226); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1069;
      nodes1069 = node.contents();
      oldNodes.replaceWith(nodes1069);
    }));
    callback(root1213); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1056;
    nodes1056 = node.contents();
    oldNodes.replaceWith(nodes1056);
  }));
  callback(root1212); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root1227 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1070 = $("<span>");
  root1227.append(nodes1070);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1228 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes1071 = $("<span>");
    root1228.append(nodes1071);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S1"), function(_, callback) {
      var root1229 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1229); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1071;
      nodes1071 = node.contents();
      oldNodes.replaceWith(nodes1071);
    }));
    var nodes1072 = $("<span>");
    root1228.append(nodes1072);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S2"), function(_, callback) {
      var root1230 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1230); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1072;
      nodes1072 = node.contents();
      oldNodes.replaceWith(nodes1072);
    }));
    var nodes1073 = $("<span>");
    root1228.append(nodes1073);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S3"), function(_, callback) {
      var root1231 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1231); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1073;
      nodes1073 = node.contents();
      oldNodes.replaceWith(nodes1073);
    }));
    var nodes1074 = $("<span>");
    root1228.append(nodes1074);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S4"), function(_, callback) {
      var root1232 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1232); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1074;
      nodes1074 = node.contents();
      oldNodes.replaceWith(nodes1074);
    }));
    var nodes1075 = $("<span>");
    root1228.append(nodes1075);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S5"), function(_, callback) {
      var root1233 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1233); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1075;
      nodes1075 = node.contents();
      oldNodes.replaceWith(nodes1075);
    }));
    var nodes1076 = $("<span>");
    root1228.append(nodes1076);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S6"), function(_, callback) {
      var root1234 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1234); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1076;
      nodes1076 = node.contents();
      oldNodes.replaceWith(nodes1076);
    }));
    callback(root1228); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1070;
    nodes1070 = node.contents();
    oldNodes.replaceWith(nodes1070);
  }));
  callback(root1227); return subs__;
  
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
  var root1235 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node45 = $("<div>");
  
  var ref48 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref48.get() !== null) {
    node45.attr('class', ref48.get());
    subs__.addSub(ref48.addEventListener('change', function(_, ref, val) {
      node45.attr('class', val);
    }));
    
  }
  subs__.addSub(ref48.rebind());
  
  var val9 = onclick.get();
  if(val9 !== null) {
    subs__.addSub(mobl.domBind(node45, 'tap', val9));
  }
  
  
  var node46 = $("<div>");
  
  var ref47 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref47.get() !== null) {
    node46.attr('class', ref47.get());
    subs__.addSub(ref47.addEventListener('change', function(_, ref, val) {
      node46.attr('class', val);
    }));
    
  }
  subs__.addSub(ref47.rebind());
  
  
  var node47 = $("<div>");
  
  var ref45 = text;
  node47.text(""+ref45.get());
  var ignore9 = false;
  subs__.addSub(ref45.addEventListener('change', function(_, ref, val) {
    if(ignore9) return;
    node47.text(""+val);
  }));
  subs__.addSub(ref45.rebind());
  
  
  var ref46 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref46.get() !== null) {
    node47.attr('class', ref46.get());
    subs__.addSub(ref46.addEventListener('change', function(_, ref, val) {
      node47.attr('class', val);
    }));
    
  }
  subs__.addSub(ref46.rebind());
  
  node46.append(node47);
  node45.append(node46);
  var nodes1077 = $("<span>");
  node45.append(nodes1077);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl9();
  }));
  
  function renderControl9() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1236 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1236); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1077;
      nodes1077 = node.contents();
      oldNodes.replaceWith(nodes1077);
    }));
  }
  renderControl9();
  root1235.append(node45);
  callback(root1235); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mathJAX.renderMaths(function(result__) {
    var tmp597 = result__;
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
    var tmp598 = result__;
    var result__ = tmp598;
    var qa2 = result__;
    var result__ = qa2;
    if(callback && callback.apply) callback(result__);
    return;
    if(callback && callback.apply) callback(); return;
  });
};


nrichRPG.coreWorkout.showQA = function(qa, number, elements, callback) {
  var root1237 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp604 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp575 = mobl.ref(result__);
  
  var result__ = nrichRPG.coreWorkout.topicName(qa.get().topic);
  var tmp574 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'topic').addEventListener('change', function() {
    tmp574.set(nrichRPG.coreWorkout.topicName(qa.get().topic));
  }));
  
  var nodes1078 = $("<span>");
  root1237.append(nodes1078);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(tmp574, tmp575, function(_, callback) {
    var root1238 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp601 = result__;
                       var result__ = tmp601;
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
                             var tmp602 = result__;
                             if(callback && callback.apply) callback(); return;
                           });
                         }
                       }
                     });
                   };
    var tmp572 = mobl.ref(result__);
    
    var nodes1079 = $("<span>");
    root1238.append(nodes1079);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp572, function(_, callback) {
      var root1239 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1239); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1079;
      nodes1079 = node.contents();
      oldNodes.replaceWith(nodes1079);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(qa.get().topic, function(result__) {
                       var tmp599 = result__;
                       var result__ = tmp599;
                       var qa2 = result__;
                       var result__ = qa.get().number;
                       var qnum = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       var result__ = qnum;
                       qa.get().number = result__;
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp600 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp573 = mobl.ref(result__);
    
    var nodes1080 = $("<span>");
    root1238.append(nodes1080);
    subs__.addSub((ui.sideButton)(mobl.ref("New"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp573, function(_, callback) {
      var root1240 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1240); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1080;
      nodes1080 = node.contents();
      oldNodes.replaceWith(nodes1080);
    }));
    callback(root1238); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1078;
    nodes1078 = node.contents();
    oldNodes.replaceWith(nodes1078);
  }));
  var nodes1081 = $("<span>");
  root1237.append(nodes1081);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1241 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp603 = result__;
                       var result__ = nrichRPG.coreWorkout.removeMathJaxIncidentElements();
                       var result__ = mobl.$("#question-block-" + number.get()).children("span:first").html();
                       qa.get().questionHtml = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp578 = mobl.ref(result__);
    
    var nodes1082 = $("<span>");
    root1241.append(nodes1082);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp578, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root1242 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + number.get() + ". ";
      var tmp576 = mobl.ref(result__);
      subs__.addSub(number.addEventListener('change', function() {
        tmp576.set("Q" + number.get() + ". ");
      }));
      
      var nodes1083 = $("<span>");
      root1242.append(nodes1083);
      subs__.addSub((mobl.html)(tmp576, function(_, callback) {
        var root1243 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1243); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1083;
        nodes1083 = node.contents();
        oldNodes.replaceWith(nodes1083);
      }));
      
      var node48 = $("<span>");
      
      var ref49 = mobl.ref("question-block-" + number.get());
      if(ref49.get() !== null) {
        node48.attr('id', ref49.get());
        subs__.addSub(ref49.addEventListener('change', function(_, ref, val) {
          node48.attr('id', val);
        }));
        subs__.addSub(number.addEventListener('change', function() {
          node48.attr('id', "question-block-" + number.get());
        }));
        
      }
      subs__.addSub(ref49.rebind());
      
      var result__ = plot.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml;
      var tmp577 = mobl.ref(result__);
      subs__.addSub(mobl.ref(qa, 'question').addEventListener('change', function() {
        tmp577.set(plot.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml);
      }));
      subs__.addSub(mobl.ref(qa, 'questionHtml').addEventListener('change', function() {
        tmp577.set(plot.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml);
      }));
      
      var nodes1084 = $("<span>");
      node48.append(nodes1084);
      subs__.addSub((mobl.html)(tmp577, function(_, callback) {
        var root1244 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1244); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1084;
        nodes1084 = node.contents();
        oldNodes.replaceWith(nodes1084);
      }));
      root1242.append(node48);
      callback(root1242); return subs__;
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1082;
      nodes1082 = node.contents();
      oldNodes.replaceWith(nodes1082);
    }));
    var nodes1085 = $("<span>");
    root1241.append(nodes1085);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root1245 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1086 = $("<span>");
      root1245.append(nodes1086);
      subs__.addSub((nrichRPG.coreWorkout.makeChoices)(qa, number, function(_, callback) {
        var root1246 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1246); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1086;
        nodes1086 = node.contents();
        oldNodes.replaceWith(nodes1086);
      }));
      callback(root1245); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1085;
      nodes1085 = node.contents();
      oldNodes.replaceWith(nodes1085);
    }));
    callback(root1241); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1081;
    nodes1081 = node.contents();
    oldNodes.replaceWith(nodes1081);
  }));
  callback(root1237); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.choiceItemStyle = function(choiceNumber, questionNumber, currentChoice, correctChoice) {
   var __this = this;
  var encodedChoiceNumber = choiceNumber + questionNumber * 4;
  
  var encodedCorrectChoice = correctChoice + questionNumber * 4;
  
  return encodedChoiceNumber == currentChoice ? (currentChoice == encodedCorrectChoice ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle) : ui.itemStyle;
};


nrichRPG.coreWorkout.makeChoices = function(qa, number, elements, callback) {
  var root1247 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var currentChoice = mobl.ref(-1);
  var nodes1087 = $("<span>");
  root1247.append(nodes1087);
  subs__.addSub((mobl.block)(mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root1248 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = nrichRPG.coreWorkout.generateChoices(qa.get());
    var tmp582 = mobl.ref(result__);
    subs__.addSub(qa.addEventListener('change', function() {
      tmp582.set(nrichRPG.coreWorkout.generateChoices(qa.get()));
    }));
    
    
    var node49 = mobl.loadingSpan();
    root1248.append(node49);
    var list9;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList9 = function() {
      var subs__ = listSubs__;
      list9 = tmp582.get();
      list9.list(function(results9) {
        node49.empty();
        for(var i340 = 0; i340 < results9.length; i340++) {
          (function() {
            var iternode9 = $("<span>");
            node49.append(iternode9);
            var order;var correctChoice;var answer;
            order = mobl.ref(mobl.ref(mobl.ref(results9), i340), "_1");correctChoice = mobl.ref(mobl.ref(mobl.ref(results9), i340), "_2");answer = mobl.ref(mobl.ref(mobl.ref(results9), i340), "_3");
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
            var tmp581 = mobl.ref(result__);
            
            var result__ = nrichRPG.coreWorkout.choiceItemStyle(order.get(), number.get(), currentChoice.get(), correctChoice.get());
            var tmp580 = mobl.ref(result__);
            subs__.addSub(order.addEventListener('change', function() {
              tmp580.set(nrichRPG.coreWorkout.choiceItemStyle(order.get(), number.get(), currentChoice.get(), correctChoice.get()));
            }));
            subs__.addSub(number.addEventListener('change', function() {
              tmp580.set(nrichRPG.coreWorkout.choiceItemStyle(order.get(), number.get(), currentChoice.get(), correctChoice.get()));
            }));
            subs__.addSub(currentChoice.addEventListener('change', function() {
              tmp580.set(nrichRPG.coreWorkout.choiceItemStyle(order.get(), number.get(), currentChoice.get(), correctChoice.get()));
            }));
            subs__.addSub(correctChoice.addEventListener('change', function() {
              tmp580.set(nrichRPG.coreWorkout.choiceItemStyle(order.get(), number.get(), currentChoice.get(), correctChoice.get()));
            }));
            
            var nodes1088 = $("<span>");
            iternode9.append(nodes1088);
            subs__.addSub((ui.item)(tmp580, mobl.ref(ui.itemPushedStyle), tmp581, mobl.ref(null), mobl.ref(true), function(_, callback) {
              var root1249 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var result__ = "Choice " + order.get() + ".";
              var tmp579 = mobl.ref(result__);
              subs__.addSub(order.addEventListener('change', function() {
                tmp579.set("Choice " + order.get() + ".");
              }));
              
              var nodes1089 = $("<span>");
              root1249.append(nodes1089);
              subs__.addSub((mobl.html)(tmp579, function(_, callback) {
                var root1250 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1250); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1089;
                nodes1089 = node.contents();
                oldNodes.replaceWith(nodes1089);
              }));
              var nodes1090 = $("<span>");
              root1249.append(nodes1090);
              subs__.addSub((mobl.html)(answer, function(_, callback) {
                var root1251 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1251); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1090;
                nodes1090 = node.contents();
                oldNodes.replaceWith(nodes1090);
              }));
              callback(root1249); return subs__;
              
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1088;
              nodes1088 = node.contents();
              oldNodes.replaceWith(nodes1088);
            }));
            
            var oldNodes = iternode9;
            iternode9 = iternode9.contents();
            oldNodes.replaceWith(iternode9);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list9.addEventListener('change', function() { listSubs__.unsubscribe(); renderList9(true); }));
        subs__.addSub(tmp582.addEventListener('change', function() { listSubs__.unsubscribe(); renderList9(true); }));
      });
    };
    renderList9();
    
    callback(root1248); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1087;
    nodes1087 = node.contents();
    oldNodes.replaceWith(nodes1087);
  }));
  callback(root1247); return subs__;
  
  return subs__;
};
nrichRPG.coreWorkout.generateChoices = function(qa) {
   var __this = this;
  var correctChoice = mobl.random(4);
  
  var choices = [];
  
  var coll40 = mobl.range(1, 5);
  var length9 = coll40.length;
  for(var i341 = 0; i341 < length9; i341++) {
    var index;
    index = coll40.get(i341);
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
  nrichRPG.questionAnswer.QA.all().list(function(coll41) {
    coll41 = coll41.reverse();
    function processOne19() {
      var item;
      item = coll41.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll41.length > 0) processOne19(); else rest19();
      
    }
    function rest19() {
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
    if(coll41.length > 0) processOne19(); else rest19();
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