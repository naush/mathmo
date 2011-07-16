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
    var tmp103 = result__;
    var result__ = tmp103;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp104 = result__;
      var result__ = tmp104;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp105 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicCode, callback) {
  var __this = this;
  var result__ = nrichRPG.coreWorkout.topicMapForId(topicCode).keys();
  var keys = result__;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll15) {
    coll15 = coll15.reverse();
    function processOne2() {
      var i;
      i = coll15.pop();
      var result__ = mobl.Math.floor(keys.length * mobl.Math.random());
      var r = result__;
      var result__ = keys.get(r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQA(tid, function(result__) {
        var tmp106 = result__;
        
        if(coll15.length > 0) processOne2(); else rest2();
        
      });
    }
    function rest2() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll15.length > 0) processOne2(); else rest2();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root125 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes109 = $("<span>");
  root125.append(nodes109);
  subs__.addSub((ui.group)(function(_, callback) {
    var root126 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp114 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp66 = mobl.ref(result__);
    
    var nodes110 = $("<span>");
    root126.append(nodes110);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp66, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root127 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes111 = $("<span>");
      root127.append(nodes111);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root128 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root128); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes111;
        nodes111 = node.contents();
        oldNodes.replaceWith(nodes111);
      }));
      callback(root127); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes110;
      nodes110 = node.contents();
      oldNodes.replaceWith(nodes110);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp113 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp67 = mobl.ref(result__);
    
    var nodes112 = $("<span>");
    root126.append(nodes112);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp67, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root129 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes113 = $("<span>");
      root129.append(nodes113);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root130 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root130); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes113;
        nodes113 = node.contents();
        oldNodes.replaceWith(nodes113);
      }));
      callback(root129); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes112;
      nodes112 = node.contents();
      oldNodes.replaceWith(nodes112);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp112 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp68 = mobl.ref(result__);
    
    var nodes114 = $("<span>");
    root126.append(nodes114);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp68, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root131 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes115 = $("<span>");
      root131.append(nodes115);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root132 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root132); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes115;
        nodes115 = node.contents();
        oldNodes.replaceWith(nodes115);
      }));
      callback(root131); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes114;
      nodes114 = node.contents();
      oldNodes.replaceWith(nodes114);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp111 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp69 = mobl.ref(result__);
    
    var nodes116 = $("<span>");
    root126.append(nodes116);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp69, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root133 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes117 = $("<span>");
      root133.append(nodes117);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root134 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root134); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes117;
        nodes117 = node.contents();
        oldNodes.replaceWith(nodes117);
      }));
      callback(root133); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes116;
      nodes116 = node.contents();
      oldNodes.replaceWith(nodes116);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp110 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp70 = mobl.ref(result__);
    
    var nodes118 = $("<span>");
    root126.append(nodes118);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp70, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root135 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes119 = $("<span>");
      root135.append(nodes119);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root136 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root136); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes119;
        nodes119 = node.contents();
        oldNodes.replaceWith(nodes119);
      }));
      callback(root135); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes118;
      nodes118 = node.contents();
      oldNodes.replaceWith(nodes118);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp109 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp71 = mobl.ref(result__);
    
    var nodes120 = $("<span>");
    root126.append(nodes120);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp71, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root137 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes121 = $("<span>");
      root137.append(nodes121);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root138 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root138); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes121;
        nodes121 = node.contents();
        oldNodes.replaceWith(nodes121);
      }));
      callback(root137); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes120;
      nodes120 = node.contents();
      oldNodes.replaceWith(nodes120);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp108 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp72 = mobl.ref(result__);
    
    var nodes122 = $("<span>");
    root126.append(nodes122);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp72, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root139 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes123 = $("<span>");
      root139.append(nodes123);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root140 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root140); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes123;
        nodes123 = node.contents();
        oldNodes.replaceWith(nodes123);
      }));
      callback(root139); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes122;
      nodes122 = node.contents();
      oldNodes.replaceWith(nodes122);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp107 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp73 = mobl.ref(result__);
    
    var nodes124 = $("<span>");
    root126.append(nodes124);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp73, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root141 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes125 = $("<span>");
      root141.append(nodes125);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root142 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root142); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes125;
        nodes125 = node.contents();
        oldNodes.replaceWith(nodes125);
      }));
      callback(root141); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes124;
      nodes124 = node.contents();
      oldNodes.replaceWith(nodes124);
    }));
    callback(root126); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes109;
    nodes109 = node.contents();
    oldNodes.replaceWith(nodes109);
  }));
  callback(root125); return subs__;
  
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
    var tmp115 = result__;
    var result__ = mobl.alert(nrichRPG.coreWorkout.topicName(tid) + " added");
    if(callback && callback.apply) callback(); return;
  });
};


nrichRPG.coreWorkout.topicLabel = function(tid, elements, callback) {
  var root143 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var map = mobl.ref(nrichRPG.coreWorkout.topicMapForId(tid.get()));
  var result__ = "+" + map.get().get(tid.get());
  var tmp74 = mobl.ref(result__);
  subs__.addSub(map.addEventListener('change', function() {
    tmp74.set("+" + map.get().get(tid.get()));
  }));
  subs__.addSub(tid.addEventListener('change', function() {
    tmp74.set("+" + map.get().get(tid.get()));
  }));
  
  var nodes126 = $("<span>");
  root143.append(nodes126);
  subs__.addSub((mobl.label)(tmp74, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root144 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root144); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes126;
    nodes126 = node.contents();
    oldNodes.replaceWith(nodes126);
  }));
  callback(root143); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.topicItem = function(tid, elements, callback) {
  var root145 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   nrichRPG.coreWorkout.topicAdded(tid.get(), function(result__) {
                     var tmp116 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp75 = mobl.ref(result__);
  
  var nodes127 = $("<span>");
  root145.append(nodes127);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp75, mobl.ref(null), mobl.ref(false), function(_, callback) {
    var root146 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes128 = $("<span>");
    root146.append(nodes128);
    subs__.addSub((nrichRPG.coreWorkout.topicLabel)(tid, function(_, callback) {
      var root147 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root147); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes128;
      nodes128 = node.contents();
      oldNodes.replaceWith(nodes128);
    }));
    callback(root146); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes127;
    nodes127 = node.contents();
    oldNodes.replaceWith(nodes127);
  }));
  callback(root145); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root148 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes129 = $("<span>");
  root148.append(nodes129);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root149 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp77 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp76 = mobl.ref(result__);
    
    var nodes130 = $("<span>");
    root149.append(nodes130);
    subs__.addSub((ui.backButton)(tmp76, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp77, function(_, callback) {
      var root150 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root150); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes130;
      nodes130 = node.contents();
      oldNodes.replaceWith(nodes130);
    }));
    callback(root149); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes129;
    nodes129 = node.contents();
    oldNodes.replaceWith(nodes129);
  }));
  var nodes131 = $("<span>");
  root148.append(nodes131);
  subs__.addSub((ui.group)(function(_, callback) {
    var root151 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes132 = $("<span>");
    root151.append(nodes132);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C11"), function(_, callback) {
      var root152 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root152); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes132;
      nodes132 = node.contents();
      oldNodes.replaceWith(nodes132);
    }));
    var nodes133 = $("<span>");
    root151.append(nodes133);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C7"), function(_, callback) {
      var root153 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root153); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes133;
      nodes133 = node.contents();
      oldNodes.replaceWith(nodes133);
    }));
    var nodes134 = $("<span>");
    root151.append(nodes134);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C9"), function(_, callback) {
      var root154 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root154); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes134;
      nodes134 = node.contents();
      oldNodes.replaceWith(nodes134);
    }));
    var nodes135 = $("<span>");
    root151.append(nodes135);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C1"), function(_, callback) {
      var root155 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root155); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes135;
      nodes135 = node.contents();
      oldNodes.replaceWith(nodes135);
    }));
    var nodes136 = $("<span>");
    root151.append(nodes136);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C30"), function(_, callback) {
      var root156 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root156); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes136;
      nodes136 = node.contents();
      oldNodes.replaceWith(nodes136);
    }));
    var nodes137 = $("<span>");
    root151.append(nodes137);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C13"), function(_, callback) {
      var root157 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root157); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes137;
      nodes137 = node.contents();
      oldNodes.replaceWith(nodes137);
    }));
    var nodes138 = $("<span>");
    root151.append(nodes138);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C17"), function(_, callback) {
      var root158 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root158); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes138;
      nodes138 = node.contents();
      oldNodes.replaceWith(nodes138);
    }));
    callback(root151); return subs__;
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes131;
    nodes131 = node.contents();
    oldNodes.replaceWith(nodes131);
  }));
  callback(root148); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root159 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes139 = $("<span>");
  root159.append(nodes139);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root160 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp79 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp78 = mobl.ref(result__);
    
    var nodes140 = $("<span>");
    root160.append(nodes140);
    subs__.addSub((ui.backButton)(tmp78, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp79, function(_, callback) {
      var root161 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root161); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes140;
      nodes140 = node.contents();
      oldNodes.replaceWith(nodes140);
    }));
    callback(root160); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes139;
    nodes139 = node.contents();
    oldNodes.replaceWith(nodes139);
  }));
  var nodes141 = $("<span>");
  root159.append(nodes141);
  subs__.addSub((ui.group)(function(_, callback) {
    var root162 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes142 = $("<span>");
    root162.append(nodes142);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C24"), function(_, callback) {
      var root163 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root163); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes142;
      nodes142 = node.contents();
      oldNodes.replaceWith(nodes142);
    }));
    var nodes143 = $("<span>");
    root162.append(nodes143);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C25"), function(_, callback) {
      var root164 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root164); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes143;
      nodes143 = node.contents();
      oldNodes.replaceWith(nodes143);
    }));
    var nodes144 = $("<span>");
    root162.append(nodes144);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C26"), function(_, callback) {
      var root165 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root165); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes144;
      nodes144 = node.contents();
      oldNodes.replaceWith(nodes144);
    }));
    var nodes145 = $("<span>");
    root162.append(nodes145);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C270"), function(_, callback) {
      var root166 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root166); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes145;
      nodes145 = node.contents();
      oldNodes.replaceWith(nodes145);
    }));
    var nodes146 = $("<span>");
    root162.append(nodes146);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C27"), function(_, callback) {
      var root167 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root167); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes146;
      nodes146 = node.contents();
      oldNodes.replaceWith(nodes146);
    }));
    callback(root162); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes141;
    nodes141 = node.contents();
    oldNodes.replaceWith(nodes141);
  }));
  callback(root159); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root168 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes147 = $("<span>");
  root168.append(nodes147);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root169 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp81 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp80 = mobl.ref(result__);
    
    var nodes148 = $("<span>");
    root169.append(nodes148);
    subs__.addSub((ui.backButton)(tmp80, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp81, function(_, callback) {
      var root170 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root170); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes148;
      nodes148 = node.contents();
      oldNodes.replaceWith(nodes148);
    }));
    callback(root169); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes147;
    nodes147 = node.contents();
    oldNodes.replaceWith(nodes147);
  }));
  var nodes149 = $("<span>");
  root168.append(nodes149);
  subs__.addSub((ui.group)(function(_, callback) {
    var root171 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes150 = $("<span>");
    root171.append(nodes150);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C15"), function(_, callback) {
      var root172 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root172); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes150;
      nodes150 = node.contents();
      oldNodes.replaceWith(nodes150);
    }));
    var nodes151 = $("<span>");
    root171.append(nodes151);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C16"), function(_, callback) {
      var root173 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root173); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes151;
      nodes151 = node.contents();
      oldNodes.replaceWith(nodes151);
    }));
    var nodes152 = $("<span>");
    root171.append(nodes152);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C6"), function(_, callback) {
      var root174 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root174); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes152;
      nodes152 = node.contents();
      oldNodes.replaceWith(nodes152);
    }));
    callback(root171); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes149;
    nodes149 = node.contents();
    oldNodes.replaceWith(nodes149);
  }));
  callback(root168); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root175 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes153 = $("<span>");
  root175.append(nodes153);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root176 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp83 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp82 = mobl.ref(result__);
    
    var nodes154 = $("<span>");
    root176.append(nodes154);
    subs__.addSub((ui.backButton)(tmp82, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp83, function(_, callback) {
      var root177 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root177); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes154;
      nodes154 = node.contents();
      oldNodes.replaceWith(nodes154);
    }));
    callback(root176); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes153;
    nodes153 = node.contents();
    oldNodes.replaceWith(nodes153);
  }));
  var nodes155 = $("<span>");
  root175.append(nodes155);
  subs__.addSub((ui.group)(function(_, callback) {
    var root178 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes156 = $("<span>");
    root178.append(nodes156);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C8"), function(_, callback) {
      var root179 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root179); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes156;
      nodes156 = node.contents();
      oldNodes.replaceWith(nodes156);
    }));
    var nodes157 = $("<span>");
    root178.append(nodes157);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C12"), function(_, callback) {
      var root180 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root180); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes157;
      nodes157 = node.contents();
      oldNodes.replaceWith(nodes157);
    }));
    var nodes158 = $("<span>");
    root178.append(nodes158);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C23"), function(_, callback) {
      var root181 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root181); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes158;
      nodes158 = node.contents();
      oldNodes.replaceWith(nodes158);
    }));
    var nodes159 = $("<span>");
    root178.append(nodes159);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C2"), function(_, callback) {
      var root182 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root182); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes159;
      nodes159 = node.contents();
      oldNodes.replaceWith(nodes159);
    }));
    callback(root178); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes155;
    nodes155 = node.contents();
    oldNodes.replaceWith(nodes155);
  }));
  callback(root175); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root183 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes160 = $("<span>");
  root183.append(nodes160);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root184 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp85 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp84 = mobl.ref(result__);
    
    var nodes161 = $("<span>");
    root184.append(nodes161);
    subs__.addSub((ui.backButton)(tmp84, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp85, function(_, callback) {
      var root185 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root185); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes161;
      nodes161 = node.contents();
      oldNodes.replaceWith(nodes161);
    }));
    callback(root184); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes160;
    nodes160 = node.contents();
    oldNodes.replaceWith(nodes160);
  }));
  var nodes162 = $("<span>");
  root183.append(nodes162);
  subs__.addSub((ui.group)(function(_, callback) {
    var root186 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes163 = $("<span>");
    root186.append(nodes163);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C5"), function(_, callback) {
      var root187 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root187); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes163;
      nodes163 = node.contents();
      oldNodes.replaceWith(nodes163);
    }));
    var nodes164 = $("<span>");
    root186.append(nodes164);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C18"), function(_, callback) {
      var root188 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root188); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes164;
      nodes164 = node.contents();
      oldNodes.replaceWith(nodes164);
    }));
    callback(root186); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes162;
    nodes162 = node.contents();
    oldNodes.replaceWith(nodes162);
  }));
  callback(root183); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root189 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes165 = $("<span>");
  root189.append(nodes165);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root190 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp87 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp86 = mobl.ref(result__);
    
    var nodes166 = $("<span>");
    root190.append(nodes166);
    subs__.addSub((ui.backButton)(tmp86, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp87, function(_, callback) {
      var root191 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root191); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes166;
      nodes166 = node.contents();
      oldNodes.replaceWith(nodes166);
    }));
    callback(root190); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes165;
    nodes165 = node.contents();
    oldNodes.replaceWith(nodes165);
  }));
  var nodes167 = $("<span>");
  root189.append(nodes167);
  subs__.addSub((ui.group)(function(_, callback) {
    var root192 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes168 = $("<span>");
    root192.append(nodes168);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C14"), function(_, callback) {
      var root193 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root193); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes168;
      nodes168 = node.contents();
      oldNodes.replaceWith(nodes168);
    }));
    var nodes169 = $("<span>");
    root192.append(nodes169);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C20"), function(_, callback) {
      var root194 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root194); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes169;
      nodes169 = node.contents();
      oldNodes.replaceWith(nodes169);
    }));
    var nodes170 = $("<span>");
    root192.append(nodes170);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C21"), function(_, callback) {
      var root195 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root195); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes170;
      nodes170 = node.contents();
      oldNodes.replaceWith(nodes170);
    }));
    var nodes171 = $("<span>");
    root192.append(nodes171);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C22"), function(_, callback) {
      var root196 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root196); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes171;
      nodes171 = node.contents();
      oldNodes.replaceWith(nodes171);
    }));
    var nodes172 = $("<span>");
    root192.append(nodes172);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C19"), function(_, callback) {
      var root197 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root197); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes172;
      nodes172 = node.contents();
      oldNodes.replaceWith(nodes172);
    }));
    callback(root192); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes167;
    nodes167 = node.contents();
    oldNodes.replaceWith(nodes167);
  }));
  callback(root189); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root198 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes173 = $("<span>");
  root198.append(nodes173);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root199 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp89 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp88 = mobl.ref(result__);
    
    var nodes174 = $("<span>");
    root199.append(nodes174);
    subs__.addSub((ui.backButton)(tmp88, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp89, function(_, callback) {
      var root200 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root200); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes174;
      nodes174 = node.contents();
      oldNodes.replaceWith(nodes174);
    }));
    callback(root199); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes173;
    nodes173 = node.contents();
    oldNodes.replaceWith(nodes173);
  }));
  var nodes175 = $("<span>");
  root198.append(nodes175);
  subs__.addSub((ui.group)(function(_, callback) {
    var root201 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes176 = $("<span>");
    root201.append(nodes176);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C28"), function(_, callback) {
      var root202 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root202); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes176;
      nodes176 = node.contents();
      oldNodes.replaceWith(nodes176);
    }));
    var nodes177 = $("<span>");
    root201.append(nodes177);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C3"), function(_, callback) {
      var root203 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root203); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes177;
      nodes177 = node.contents();
      oldNodes.replaceWith(nodes177);
    }));
    var nodes178 = $("<span>");
    root201.append(nodes178);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C4"), function(_, callback) {
      var root204 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root204); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes178;
      nodes178 = node.contents();
      oldNodes.replaceWith(nodes178);
    }));
    callback(root201); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes175;
    nodes175 = node.contents();
    oldNodes.replaceWith(nodes175);
  }));
  callback(root198); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root205 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes179 = $("<span>");
  root205.append(nodes179);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root206 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp91 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp90 = mobl.ref(result__);
    
    var nodes180 = $("<span>");
    root206.append(nodes180);
    subs__.addSub((ui.backButton)(tmp90, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp91, function(_, callback) {
      var root207 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root207); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes180;
      nodes180 = node.contents();
      oldNodes.replaceWith(nodes180);
    }));
    callback(root206); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes179;
    nodes179 = node.contents();
    oldNodes.replaceWith(nodes179);
  }));
  var nodes181 = $("<span>");
  root205.append(nodes181);
  subs__.addSub((ui.group)(function(_, callback) {
    var root208 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes182 = $("<span>");
    root208.append(nodes182);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C29"), function(_, callback) {
      var root209 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root209); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes182;
      nodes182 = node.contents();
      oldNodes.replaceWith(nodes182);
    }));
    callback(root208); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes181;
    nodes181 = node.contents();
    oldNodes.replaceWith(nodes181);
  }));
  callback(root205); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root210 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes183 = $("<span>");
  root210.append(nodes183);
  subs__.addSub((ui.group)(function(_, callback) {
    var root211 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes184 = $("<span>");
    root211.append(nodes184);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F1"), function(_, callback) {
      var root212 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root212); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes184;
      nodes184 = node.contents();
      oldNodes.replaceWith(nodes184);
    }));
    var nodes185 = $("<span>");
    root211.append(nodes185);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F2"), function(_, callback) {
      var root213 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root213); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes185;
      nodes185 = node.contents();
      oldNodes.replaceWith(nodes185);
    }));
    var nodes186 = $("<span>");
    root211.append(nodes186);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F3a"), function(_, callback) {
      var root214 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root214); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes186;
      nodes186 = node.contents();
      oldNodes.replaceWith(nodes186);
    }));
    var nodes187 = $("<span>");
    root211.append(nodes187);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F4"), function(_, callback) {
      var root215 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root215); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes187;
      nodes187 = node.contents();
      oldNodes.replaceWith(nodes187);
    }));
    var nodes188 = $("<span>");
    root211.append(nodes188);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F5"), function(_, callback) {
      var root216 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root216); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes188;
      nodes188 = node.contents();
      oldNodes.replaceWith(nodes188);
    }));
    var nodes189 = $("<span>");
    root211.append(nodes189);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F6"), function(_, callback) {
      var root217 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root217); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes189;
      nodes189 = node.contents();
      oldNodes.replaceWith(nodes189);
    }));
    var nodes190 = $("<span>");
    root211.append(nodes190);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F7"), function(_, callback) {
      var root218 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root218); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes190;
      nodes190 = node.contents();
      oldNodes.replaceWith(nodes190);
    }));
    var nodes191 = $("<span>");
    root211.append(nodes191);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F8"), function(_, callback) {
      var root219 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root219); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes191;
      nodes191 = node.contents();
      oldNodes.replaceWith(nodes191);
    }));
    var nodes192 = $("<span>");
    root211.append(nodes192);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F9"), function(_, callback) {
      var root220 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root220); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes192;
      nodes192 = node.contents();
      oldNodes.replaceWith(nodes192);
    }));
    var nodes193 = $("<span>");
    root211.append(nodes193);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F10"), function(_, callback) {
      var root221 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root221); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes193;
      nodes193 = node.contents();
      oldNodes.replaceWith(nodes193);
    }));
    var nodes194 = $("<span>");
    root211.append(nodes194);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F11"), function(_, callback) {
      var root222 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root222); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes194;
      nodes194 = node.contents();
      oldNodes.replaceWith(nodes194);
    }));
    var nodes195 = $("<span>");
    root211.append(nodes195);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F12"), function(_, callback) {
      var root223 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root223); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes195;
      nodes195 = node.contents();
      oldNodes.replaceWith(nodes195);
    }));
    var nodes196 = $("<span>");
    root211.append(nodes196);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F13"), function(_, callback) {
      var root224 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root224); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes196;
      nodes196 = node.contents();
      oldNodes.replaceWith(nodes196);
    }));
    callback(root211); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes183;
    nodes183 = node.contents();
    oldNodes.replaceWith(nodes183);
  }));
  callback(root210); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root225 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes197 = $("<span>");
  root225.append(nodes197);
  subs__.addSub((ui.group)(function(_, callback) {
    var root226 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes198 = $("<span>");
    root226.append(nodes198);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S1"), function(_, callback) {
      var root227 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root227); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes198;
      nodes198 = node.contents();
      oldNodes.replaceWith(nodes198);
    }));
    var nodes199 = $("<span>");
    root226.append(nodes199);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S2"), function(_, callback) {
      var root228 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root228); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes199;
      nodes199 = node.contents();
      oldNodes.replaceWith(nodes199);
    }));
    var nodes200 = $("<span>");
    root226.append(nodes200);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S3"), function(_, callback) {
      var root229 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root229); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes200;
      nodes200 = node.contents();
      oldNodes.replaceWith(nodes200);
    }));
    var nodes201 = $("<span>");
    root226.append(nodes201);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S4"), function(_, callback) {
      var root230 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root230); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes201;
      nodes201 = node.contents();
      oldNodes.replaceWith(nodes201);
    }));
    var nodes202 = $("<span>");
    root226.append(nodes202);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S5"), function(_, callback) {
      var root231 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root231); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes202;
      nodes202 = node.contents();
      oldNodes.replaceWith(nodes202);
    }));
    var nodes203 = $("<span>");
    root226.append(nodes203);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S6"), function(_, callback) {
      var root232 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root232); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes203;
      nodes203 = node.contents();
      oldNodes.replaceWith(nodes203);
    }));
    callback(root226); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes197;
    nodes197 = node.contents();
    oldNodes.replaceWith(nodes197);
  }));
  callback(root225); return subs__;
  
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
  var root233 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node5 = $("<div>");
  
  var ref8 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref8.get() !== null) {
    node5.attr('class', ref8.get());
    subs__.addSub(ref8.addEventListener('change', function(_, ref, val) {
      node5.attr('class', val);
    }));
    
  }
  subs__.addSub(ref8.rebind());
  
  var val1 = onclick.get();
  if(val1 !== null) {
    subs__.addSub(mobl.domBind(node5, 'tap', val1));
  }
  
  
  var node6 = $("<div>");
  
  var ref7 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref7.get() !== null) {
    node6.attr('class', ref7.get());
    subs__.addSub(ref7.addEventListener('change', function(_, ref, val) {
      node6.attr('class', val);
    }));
    
  }
  subs__.addSub(ref7.rebind());
  
  
  var node7 = $("<div>");
  
  var ref5 = text;
  node7.text(""+ref5.get());
  var ignore1 = false;
  subs__.addSub(ref5.addEventListener('change', function(_, ref, val) {
    if(ignore1) return;
    node7.text(""+val);
  }));
  subs__.addSub(ref5.rebind());
  
  
  var ref6 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref6.get() !== null) {
    node7.attr('class', ref6.get());
    subs__.addSub(ref6.addEventListener('change', function(_, ref, val) {
      node7.attr('class', val);
    }));
    
  }
  subs__.addSub(ref6.rebind());
  
  node6.append(node7);
  node5.append(node6);
  var nodes204 = $("<span>");
  node5.append(nodes204);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1();
  }));
  
  function renderControl1() {
    subs__.addSub((elements)(function(elements, callback) {
      var root234 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root234); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes204;
      nodes204 = node.contents();
      oldNodes.replaceWith(nodes204);
    }));
  }
  renderControl1();
  root233.append(node5);
  callback(root233); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mathJAX.renderMaths(function(result__) {
    var tmp117 = result__;
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
    var tmp118 = result__;
    var result__ = tmp118;
    var qa2 = result__;
    var result__ = qa2;
    if(callback && callback.apply) callback(result__);
    return;
    if(callback && callback.apply) callback(); return;
  });
};


nrichRPG.coreWorkout.showQA = function(qa, number, elements, callback) {
  var root235 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp124 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp95 = mobl.ref(result__);
  
  var result__ = nrichRPG.coreWorkout.topicName(qa.get().topic);
  var tmp94 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'topic').addEventListener('change', function() {
    tmp94.set(nrichRPG.coreWorkout.topicName(qa.get().topic));
  }));
  
  var nodes205 = $("<span>");
  root235.append(nodes205);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(tmp94, tmp95, function(_, callback) {
    var root236 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp121 = result__;
                       var result__ = tmp121;
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
                             var tmp122 = result__;
                             if(callback && callback.apply) callback(); return;
                           });
                         }
                       }
                     });
                   };
    var tmp92 = mobl.ref(result__);
    
    var nodes206 = $("<span>");
    root236.append(nodes206);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp92, function(_, callback) {
      var root237 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root237); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes206;
      nodes206 = node.contents();
      oldNodes.replaceWith(nodes206);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(qa.get().topic, function(result__) {
                       var tmp119 = result__;
                       var result__ = tmp119;
                       var qa2 = result__;
                       var result__ = qa.get().number;
                       var qnum = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       var result__ = qnum;
                       qa.get().number = result__;
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp120 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp93 = mobl.ref(result__);
    
    var nodes207 = $("<span>");
    root236.append(nodes207);
    subs__.addSub((ui.sideButton)(mobl.ref("New"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp93, function(_, callback) {
      var root238 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root238); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes207;
      nodes207 = node.contents();
      oldNodes.replaceWith(nodes207);
    }));
    callback(root236); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes205;
    nodes205 = node.contents();
    oldNodes.replaceWith(nodes205);
  }));
  var nodes208 = $("<span>");
  root235.append(nodes208);
  subs__.addSub((ui.group)(function(_, callback) {
    var root239 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp123 = result__;
                       var result__ = nrichRPG.coreWorkout.removeMathJaxIncidentElements();
                       var result__ = mobl.$("#question-block-" + number.get()).children("span:first").html();
                       qa.get().questionHtml = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp98 = mobl.ref(result__);
    
    var nodes209 = $("<span>");
    root239.append(nodes209);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp98, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root240 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + number.get() + ". ";
      var tmp96 = mobl.ref(result__);
      subs__.addSub(number.addEventListener('change', function() {
        tmp96.set("Q" + number.get() + ". ");
      }));
      
      var nodes210 = $("<span>");
      root240.append(nodes210);
      subs__.addSub((mobl.html)(tmp96, function(_, callback) {
        var root241 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root241); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes210;
        nodes210 = node.contents();
        oldNodes.replaceWith(nodes210);
      }));
      
      var node8 = $("<span>");
      
      var ref9 = mobl.ref("question-block-" + number.get());
      if(ref9.get() !== null) {
        node8.attr('id', ref9.get());
        subs__.addSub(ref9.addEventListener('change', function(_, ref, val) {
          node8.attr('id', val);
        }));
        subs__.addSub(number.addEventListener('change', function() {
          node8.attr('id', "question-block-" + number.get());
        }));
        
      }
      subs__.addSub(ref9.rebind());
      
      var result__ = plot.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml;
      var tmp97 = mobl.ref(result__);
      subs__.addSub(mobl.ref(qa, 'question').addEventListener('change', function() {
        tmp97.set(plot.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml);
      }));
      subs__.addSub(mobl.ref(qa, 'questionHtml').addEventListener('change', function() {
        tmp97.set(plot.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml);
      }));
      
      var nodes211 = $("<span>");
      node8.append(nodes211);
      subs__.addSub((mobl.html)(tmp97, function(_, callback) {
        var root242 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root242); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes211;
        nodes211 = node.contents();
        oldNodes.replaceWith(nodes211);
      }));
      root240.append(node8);
      callback(root240); return subs__;
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes209;
      nodes209 = node.contents();
      oldNodes.replaceWith(nodes209);
    }));
    var nodes212 = $("<span>");
    root239.append(nodes212);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root243 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes213 = $("<span>");
      root243.append(nodes213);
      subs__.addSub((nrichRPG.coreWorkout.makeChoices)(qa, function(_, callback) {
        var root244 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root244); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes213;
        nodes213 = node.contents();
        oldNodes.replaceWith(nodes213);
      }));
      callback(root243); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes212;
      nodes212 = node.contents();
      oldNodes.replaceWith(nodes212);
    }));
    callback(root239); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes208;
    nodes208 = node.contents();
    oldNodes.replaceWith(nodes208);
  }));
  callback(root235); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.makeChoices = function(qa, elements, callback) {
  var root245 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var currenctChoice = mobl.ref(-1);
  var nodes214 = $("<span>");
  root245.append(nodes214);
  subs__.addSub((mobl.block)(mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root246 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = nrichRPG.coreWorkout.generateChoices(qa.get());
    var tmp102 = mobl.ref(result__);
    subs__.addSub(qa.addEventListener('change', function() {
      tmp102.set(nrichRPG.coreWorkout.generateChoices(qa.get()));
    }));
    
    
    var node9 = mobl.loadingSpan();
    root246.append(node9);
    var list1;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList1 = function() {
      var subs__ = listSubs__;
      list1 = tmp102.get();
      list1.list(function(results1) {
        node9.empty();
        for(var i72 = 0; i72 < results1.length; i72++) {
          (function() {
            var iternode1 = $("<span>");
            node9.append(iternode1);
            var order;var correctChoice;var answer;
            order = mobl.ref(mobl.ref(mobl.ref(results1), i72), "_1");correctChoice = mobl.ref(mobl.ref(mobl.ref(results1), i72), "_2");answer = mobl.ref(mobl.ref(mobl.ref(results1), i72), "_3");
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = order.get();
                             currenctChoice.set(result__);
                             var result__ = currenctChoice.get() == correctChoice.get();
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
            var tmp101 = mobl.ref(result__);
            
            var result__ = order.get() == currenctChoice.get() ? (currenctChoice.get() == correctChoice.get() ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle) : ui.itemStyle;
            var tmp100 = mobl.ref(result__);
            subs__.addSub(order.addEventListener('change', function() {
              tmp100.set(order.get() == currenctChoice.get() ? (currenctChoice.get() == correctChoice.get() ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle) : ui.itemStyle);
            }));
            subs__.addSub(currenctChoice.addEventListener('change', function() {
              tmp100.set(order.get() == currenctChoice.get() ? (currenctChoice.get() == correctChoice.get() ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle) : ui.itemStyle);
            }));
            subs__.addSub(correctChoice.addEventListener('change', function() {
              tmp100.set(order.get() == currenctChoice.get() ? (currenctChoice.get() == correctChoice.get() ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle) : ui.itemStyle);
            }));
            subs__.addSub(mobl.ref(nrichRPG.coreWorkout.agreeStyle).addEventListener('change', function() {
              tmp100.set(order.get() == currenctChoice.get() ? (currenctChoice.get() == correctChoice.get() ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle) : ui.itemStyle);
            }));
            subs__.addSub(mobl.ref(nrichRPG.coreWorkout.disagreeStyle).addEventListener('change', function() {
              tmp100.set(order.get() == currenctChoice.get() ? (currenctChoice.get() == correctChoice.get() ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle) : ui.itemStyle);
            }));
            subs__.addSub(mobl.ref(ui.itemStyle).addEventListener('change', function() {
              tmp100.set(order.get() == currenctChoice.get() ? (currenctChoice.get() == correctChoice.get() ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle) : ui.itemStyle);
            }));
            
            var nodes215 = $("<span>");
            iternode1.append(nodes215);
            subs__.addSub((ui.item)(tmp100, mobl.ref(ui.itemPushedStyle), tmp101, mobl.ref(null), mobl.ref(true), function(_, callback) {
              var root247 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var result__ = "Choice " + order.get() + ".";
              var tmp99 = mobl.ref(result__);
              subs__.addSub(order.addEventListener('change', function() {
                tmp99.set("Choice " + order.get() + ".");
              }));
              
              var nodes216 = $("<span>");
              root247.append(nodes216);
              subs__.addSub((mobl.html)(tmp99, function(_, callback) {
                var root248 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root248); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes216;
                nodes216 = node.contents();
                oldNodes.replaceWith(nodes216);
              }));
              var nodes217 = $("<span>");
              root247.append(nodes217);
              subs__.addSub((mobl.html)(answer, function(_, callback) {
                var root249 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root249); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes217;
                nodes217 = node.contents();
                oldNodes.replaceWith(nodes217);
              }));
              callback(root247); return subs__;
              
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes215;
              nodes215 = node.contents();
              oldNodes.replaceWith(nodes215);
            }));
            
            var oldNodes = iternode1;
            iternode1 = iternode1.contents();
            oldNodes.replaceWith(iternode1);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list1.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1(true); }));
        subs__.addSub(tmp102.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1(true); }));
      });
    };
    renderList1();
    
    callback(root246); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes214;
    nodes214 = node.contents();
    oldNodes.replaceWith(nodes214);
  }));
  callback(root245); return subs__;
  
  return subs__;
};
nrichRPG.coreWorkout.generateChoices = function(qa) {
   var __this = this;
  var correctChoice = mobl.random(4);
  
  var choices = [];
  
  var coll16 = mobl.range(1, 5);
  var length1 = coll16.length;
  for(var i73 = 0; i73 < length1; i73++) {
    var index;
    index = coll16.get(i73);
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
  nrichRPG.questionAnswer.QA.all().list(function(coll17) {
    coll17 = coll17.reverse();
    function processOne3() {
      var item;
      item = coll17.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll17.length > 0) processOne3(); else rest3();
      
    }
    function rest3() {
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
    if(coll17.length > 0) processOne3(); else rest3();
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