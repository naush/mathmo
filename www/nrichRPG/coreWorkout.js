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
    var tmp128 = result__;
    var result__ = tmp128;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp129 = result__;
      var result__ = tmp129;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp131 = result__;
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
    function processOne3() {
      var i;
      i = coll39.pop();
      var result__ = mobl.Math.floor(keys.length * mobl.Math.random());
      var r = result__;
      var result__ = keys.get(r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQA(tid, function(result__) {
        var tmp132 = result__;
        
        if(coll39.length > 0) processOne3(); else rest3();
        
      });
    }
    function rest3() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll39.length > 0) processOne3(); else rest3();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root123 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes81 = $("<span>");
  root123.append(nodes81);
  subs__.addSub((ui.group)(function(_, callback) {
    var root124 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp141 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp83 = mobl.ref(result__);
    
    var nodes82 = $("<span>");
    root124.append(nodes82);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp83, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root125 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes83 = $("<span>");
      root125.append(nodes83);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root126 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root126); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes83;
        nodes83 = node.contents();
        oldNodes.replaceWith(nodes83);
      }));
      callback(root125); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes82;
      nodes82 = node.contents();
      oldNodes.replaceWith(nodes82);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp139 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp84 = mobl.ref(result__);
    
    var nodes84 = $("<span>");
    root124.append(nodes84);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp84, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root127 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes85 = $("<span>");
      root127.append(nodes85);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root128 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root128); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes85;
        nodes85 = node.contents();
        oldNodes.replaceWith(nodes85);
      }));
      callback(root127); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes84;
      nodes84 = node.contents();
      oldNodes.replaceWith(nodes84);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp138 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp85 = mobl.ref(result__);
    
    var nodes86 = $("<span>");
    root124.append(nodes86);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp85, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root129 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes87 = $("<span>");
      root129.append(nodes87);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root130 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root130); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes87;
        nodes87 = node.contents();
        oldNodes.replaceWith(nodes87);
      }));
      callback(root129); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes86;
      nodes86 = node.contents();
      oldNodes.replaceWith(nodes86);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp137 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp86 = mobl.ref(result__);
    
    var nodes88 = $("<span>");
    root124.append(nodes88);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp86, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root131 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes89 = $("<span>");
      root131.append(nodes89);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root132 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root132); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes89;
        nodes89 = node.contents();
        oldNodes.replaceWith(nodes89);
      }));
      callback(root131); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes88;
      nodes88 = node.contents();
      oldNodes.replaceWith(nodes88);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp136 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp87 = mobl.ref(result__);
    
    var nodes90 = $("<span>");
    root124.append(nodes90);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp87, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root133 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes91 = $("<span>");
      root133.append(nodes91);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root134 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root134); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes91;
        nodes91 = node.contents();
        oldNodes.replaceWith(nodes91);
      }));
      callback(root133); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes90;
      nodes90 = node.contents();
      oldNodes.replaceWith(nodes90);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp135 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp88 = mobl.ref(result__);
    
    var nodes92 = $("<span>");
    root124.append(nodes92);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp88, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root135 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes93 = $("<span>");
      root135.append(nodes93);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root136 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root136); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes93;
        nodes93 = node.contents();
        oldNodes.replaceWith(nodes93);
      }));
      callback(root135); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes92;
      nodes92 = node.contents();
      oldNodes.replaceWith(nodes92);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp134 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp89 = mobl.ref(result__);
    
    var nodes94 = $("<span>");
    root124.append(nodes94);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp89, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root137 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes95 = $("<span>");
      root137.append(nodes95);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root138 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root138); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes95;
        nodes95 = node.contents();
        oldNodes.replaceWith(nodes95);
      }));
      callback(root137); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes94;
      nodes94 = node.contents();
      oldNodes.replaceWith(nodes94);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp133 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp91 = mobl.ref(result__);
    
    var nodes96 = $("<span>");
    root124.append(nodes96);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp91, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root139 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes97 = $("<span>");
      root139.append(nodes97);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root140 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root140); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes97;
        nodes97 = node.contents();
        oldNodes.replaceWith(nodes97);
      }));
      callback(root139); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes96;
      nodes96 = node.contents();
      oldNodes.replaceWith(nodes96);
    }));
    callback(root124); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes81;
    nodes81 = node.contents();
    oldNodes.replaceWith(nodes81);
  }));
  callback(root123); return subs__;
  
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
    var tmp142 = result__;
    var result__ = mobl.alert(nrichRPG.coreWorkout.topicName(tid) + " added");
    if(callback && callback.apply) callback(); return;
  });
};


nrichRPG.coreWorkout.topicLabel = function(tid, elements, callback) {
  var root141 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var map = mobl.ref(nrichRPG.coreWorkout.topicMapForId(tid.get()));
  var result__ = "+" + map.get().get(tid.get());
  var tmp92 = mobl.ref(result__);
  subs__.addSub(map.addEventListener('change', function() {
    tmp92.set("+" + map.get().get(tid.get()));
  }));
  subs__.addSub(tid.addEventListener('change', function() {
    tmp92.set("+" + map.get().get(tid.get()));
  }));
  
  var nodes98 = $("<span>");
  root141.append(nodes98);
  subs__.addSub((mobl.label)(tmp92, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root142 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root142); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes98;
    nodes98 = node.contents();
    oldNodes.replaceWith(nodes98);
  }));
  callback(root141); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.topicItem = function(tid, elements, callback) {
  var root143 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   nrichRPG.coreWorkout.topicAdded(tid.get(), function(result__) {
                     var tmp143 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp93 = mobl.ref(result__);
  
  var nodes99 = $("<span>");
  root143.append(nodes99);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp93, mobl.ref(null), mobl.ref(false), function(_, callback) {
    var root144 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes100 = $("<span>");
    root144.append(nodes100);
    subs__.addSub((nrichRPG.coreWorkout.topicLabel)(tid, function(_, callback) {
      var root145 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root145); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes100;
      nodes100 = node.contents();
      oldNodes.replaceWith(nodes100);
    }));
    callback(root144); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes99;
    nodes99 = node.contents();
    oldNodes.replaceWith(nodes99);
  }));
  callback(root143); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root146 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes101 = $("<span>");
  root146.append(nodes101);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root147 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp95 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp94 = mobl.ref(result__);
    
    var nodes102 = $("<span>");
    root147.append(nodes102);
    subs__.addSub((ui.backButton)(tmp94, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp95, function(_, callback) {
      var root148 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root148); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes102;
      nodes102 = node.contents();
      oldNodes.replaceWith(nodes102);
    }));
    callback(root147); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes101;
    nodes101 = node.contents();
    oldNodes.replaceWith(nodes101);
  }));
  var nodes103 = $("<span>");
  root146.append(nodes103);
  subs__.addSub((ui.group)(function(_, callback) {
    var root149 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes104 = $("<span>");
    root149.append(nodes104);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C11"), function(_, callback) {
      var root150 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root150); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes104;
      nodes104 = node.contents();
      oldNodes.replaceWith(nodes104);
    }));
    var nodes105 = $("<span>");
    root149.append(nodes105);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C7"), function(_, callback) {
      var root151 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root151); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes105;
      nodes105 = node.contents();
      oldNodes.replaceWith(nodes105);
    }));
    var nodes106 = $("<span>");
    root149.append(nodes106);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C9"), function(_, callback) {
      var root152 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root152); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes106;
      nodes106 = node.contents();
      oldNodes.replaceWith(nodes106);
    }));
    var nodes107 = $("<span>");
    root149.append(nodes107);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C1"), function(_, callback) {
      var root153 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root153); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes107;
      nodes107 = node.contents();
      oldNodes.replaceWith(nodes107);
    }));
    var nodes108 = $("<span>");
    root149.append(nodes108);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C30"), function(_, callback) {
      var root154 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root154); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes108;
      nodes108 = node.contents();
      oldNodes.replaceWith(nodes108);
    }));
    var nodes109 = $("<span>");
    root149.append(nodes109);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C13"), function(_, callback) {
      var root155 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root155); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes109;
      nodes109 = node.contents();
      oldNodes.replaceWith(nodes109);
    }));
    var nodes110 = $("<span>");
    root149.append(nodes110);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C17"), function(_, callback) {
      var root156 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root156); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes110;
      nodes110 = node.contents();
      oldNodes.replaceWith(nodes110);
    }));
    callback(root149); return subs__;
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes103;
    nodes103 = node.contents();
    oldNodes.replaceWith(nodes103);
  }));
  callback(root146); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root157 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes111 = $("<span>");
  root157.append(nodes111);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root158 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp97 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp96 = mobl.ref(result__);
    
    var nodes112 = $("<span>");
    root158.append(nodes112);
    subs__.addSub((ui.backButton)(tmp96, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp97, function(_, callback) {
      var root159 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root159); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes112;
      nodes112 = node.contents();
      oldNodes.replaceWith(nodes112);
    }));
    callback(root158); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes111;
    nodes111 = node.contents();
    oldNodes.replaceWith(nodes111);
  }));
  var nodes113 = $("<span>");
  root157.append(nodes113);
  subs__.addSub((ui.group)(function(_, callback) {
    var root160 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes114 = $("<span>");
    root160.append(nodes114);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C24"), function(_, callback) {
      var root161 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root161); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes114;
      nodes114 = node.contents();
      oldNodes.replaceWith(nodes114);
    }));
    var nodes115 = $("<span>");
    root160.append(nodes115);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C25"), function(_, callback) {
      var root162 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root162); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes115;
      nodes115 = node.contents();
      oldNodes.replaceWith(nodes115);
    }));
    var nodes116 = $("<span>");
    root160.append(nodes116);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C26"), function(_, callback) {
      var root163 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root163); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes116;
      nodes116 = node.contents();
      oldNodes.replaceWith(nodes116);
    }));
    var nodes117 = $("<span>");
    root160.append(nodes117);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C270"), function(_, callback) {
      var root164 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root164); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes117;
      nodes117 = node.contents();
      oldNodes.replaceWith(nodes117);
    }));
    var nodes118 = $("<span>");
    root160.append(nodes118);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C27"), function(_, callback) {
      var root165 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root165); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes118;
      nodes118 = node.contents();
      oldNodes.replaceWith(nodes118);
    }));
    callback(root160); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes113;
    nodes113 = node.contents();
    oldNodes.replaceWith(nodes113);
  }));
  callback(root157); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root166 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes119 = $("<span>");
  root166.append(nodes119);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root167 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp99 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp98 = mobl.ref(result__);
    
    var nodes120 = $("<span>");
    root167.append(nodes120);
    subs__.addSub((ui.backButton)(tmp98, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp99, function(_, callback) {
      var root168 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root168); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes120;
      nodes120 = node.contents();
      oldNodes.replaceWith(nodes120);
    }));
    callback(root167); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes119;
    nodes119 = node.contents();
    oldNodes.replaceWith(nodes119);
  }));
  var nodes121 = $("<span>");
  root166.append(nodes121);
  subs__.addSub((ui.group)(function(_, callback) {
    var root169 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes122 = $("<span>");
    root169.append(nodes122);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C15"), function(_, callback) {
      var root170 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root170); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes122;
      nodes122 = node.contents();
      oldNodes.replaceWith(nodes122);
    }));
    var nodes123 = $("<span>");
    root169.append(nodes123);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C16"), function(_, callback) {
      var root171 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root171); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes123;
      nodes123 = node.contents();
      oldNodes.replaceWith(nodes123);
    }));
    var nodes124 = $("<span>");
    root169.append(nodes124);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C6"), function(_, callback) {
      var root172 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root172); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes124;
      nodes124 = node.contents();
      oldNodes.replaceWith(nodes124);
    }));
    callback(root169); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes121;
    nodes121 = node.contents();
    oldNodes.replaceWith(nodes121);
  }));
  callback(root166); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root173 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes125 = $("<span>");
  root173.append(nodes125);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root174 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp101 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp100 = mobl.ref(result__);
    
    var nodes126 = $("<span>");
    root174.append(nodes126);
    subs__.addSub((ui.backButton)(tmp100, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp101, function(_, callback) {
      var root175 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root175); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes126;
      nodes126 = node.contents();
      oldNodes.replaceWith(nodes126);
    }));
    callback(root174); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes125;
    nodes125 = node.contents();
    oldNodes.replaceWith(nodes125);
  }));
  var nodes127 = $("<span>");
  root173.append(nodes127);
  subs__.addSub((ui.group)(function(_, callback) {
    var root176 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes128 = $("<span>");
    root176.append(nodes128);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C8"), function(_, callback) {
      var root177 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root177); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes128;
      nodes128 = node.contents();
      oldNodes.replaceWith(nodes128);
    }));
    var nodes129 = $("<span>");
    root176.append(nodes129);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C12"), function(_, callback) {
      var root178 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root178); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes129;
      nodes129 = node.contents();
      oldNodes.replaceWith(nodes129);
    }));
    var nodes130 = $("<span>");
    root176.append(nodes130);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C23"), function(_, callback) {
      var root179 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root179); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes130;
      nodes130 = node.contents();
      oldNodes.replaceWith(nodes130);
    }));
    var nodes131 = $("<span>");
    root176.append(nodes131);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C2"), function(_, callback) {
      var root180 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root180); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes131;
      nodes131 = node.contents();
      oldNodes.replaceWith(nodes131);
    }));
    callback(root176); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes127;
    nodes127 = node.contents();
    oldNodes.replaceWith(nodes127);
  }));
  callback(root173); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root181 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes132 = $("<span>");
  root181.append(nodes132);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root182 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp103 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp102 = mobl.ref(result__);
    
    var nodes133 = $("<span>");
    root182.append(nodes133);
    subs__.addSub((ui.backButton)(tmp102, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp103, function(_, callback) {
      var root183 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root183); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes133;
      nodes133 = node.contents();
      oldNodes.replaceWith(nodes133);
    }));
    callback(root182); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes132;
    nodes132 = node.contents();
    oldNodes.replaceWith(nodes132);
  }));
  var nodes134 = $("<span>");
  root181.append(nodes134);
  subs__.addSub((ui.group)(function(_, callback) {
    var root184 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes135 = $("<span>");
    root184.append(nodes135);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C5"), function(_, callback) {
      var root185 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root185); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes135;
      nodes135 = node.contents();
      oldNodes.replaceWith(nodes135);
    }));
    var nodes136 = $("<span>");
    root184.append(nodes136);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C18"), function(_, callback) {
      var root186 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root186); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes136;
      nodes136 = node.contents();
      oldNodes.replaceWith(nodes136);
    }));
    callback(root184); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes134;
    nodes134 = node.contents();
    oldNodes.replaceWith(nodes134);
  }));
  callback(root181); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root187 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes137 = $("<span>");
  root187.append(nodes137);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root188 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp105 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp104 = mobl.ref(result__);
    
    var nodes138 = $("<span>");
    root188.append(nodes138);
    subs__.addSub((ui.backButton)(tmp104, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp105, function(_, callback) {
      var root189 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root189); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes138;
      nodes138 = node.contents();
      oldNodes.replaceWith(nodes138);
    }));
    callback(root188); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes137;
    nodes137 = node.contents();
    oldNodes.replaceWith(nodes137);
  }));
  var nodes139 = $("<span>");
  root187.append(nodes139);
  subs__.addSub((ui.group)(function(_, callback) {
    var root190 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes140 = $("<span>");
    root190.append(nodes140);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C14"), function(_, callback) {
      var root191 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root191); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes140;
      nodes140 = node.contents();
      oldNodes.replaceWith(nodes140);
    }));
    var nodes141 = $("<span>");
    root190.append(nodes141);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C20"), function(_, callback) {
      var root193 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root193); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes141;
      nodes141 = node.contents();
      oldNodes.replaceWith(nodes141);
    }));
    var nodes142 = $("<span>");
    root190.append(nodes142);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C21"), function(_, callback) {
      var root194 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root194); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes142;
      nodes142 = node.contents();
      oldNodes.replaceWith(nodes142);
    }));
    var nodes143 = $("<span>");
    root190.append(nodes143);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C22"), function(_, callback) {
      var root195 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root195); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes143;
      nodes143 = node.contents();
      oldNodes.replaceWith(nodes143);
    }));
    var nodes144 = $("<span>");
    root190.append(nodes144);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C19"), function(_, callback) {
      var root196 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root196); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes144;
      nodes144 = node.contents();
      oldNodes.replaceWith(nodes144);
    }));
    callback(root190); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes139;
    nodes139 = node.contents();
    oldNodes.replaceWith(nodes139);
  }));
  callback(root187); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root197 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes145 = $("<span>");
  root197.append(nodes145);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root198 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp107 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp106 = mobl.ref(result__);
    
    var nodes146 = $("<span>");
    root198.append(nodes146);
    subs__.addSub((ui.backButton)(tmp106, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp107, function(_, callback) {
      var root199 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root199); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes146;
      nodes146 = node.contents();
      oldNodes.replaceWith(nodes146);
    }));
    callback(root198); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes145;
    nodes145 = node.contents();
    oldNodes.replaceWith(nodes145);
  }));
  var nodes147 = $("<span>");
  root197.append(nodes147);
  subs__.addSub((ui.group)(function(_, callback) {
    var root200 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes148 = $("<span>");
    root200.append(nodes148);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C28"), function(_, callback) {
      var root201 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root201); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes148;
      nodes148 = node.contents();
      oldNodes.replaceWith(nodes148);
    }));
    var nodes149 = $("<span>");
    root200.append(nodes149);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C3"), function(_, callback) {
      var root202 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root202); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes149;
      nodes149 = node.contents();
      oldNodes.replaceWith(nodes149);
    }));
    var nodes150 = $("<span>");
    root200.append(nodes150);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C4"), function(_, callback) {
      var root203 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root203); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes150;
      nodes150 = node.contents();
      oldNodes.replaceWith(nodes150);
    }));
    callback(root200); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes147;
    nodes147 = node.contents();
    oldNodes.replaceWith(nodes147);
  }));
  callback(root197); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root204 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes151 = $("<span>");
  root204.append(nodes151);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root205 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp109 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp108 = mobl.ref(result__);
    
    var nodes152 = $("<span>");
    root205.append(nodes152);
    subs__.addSub((ui.backButton)(tmp108, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp109, function(_, callback) {
      var root206 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root206); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes152;
      nodes152 = node.contents();
      oldNodes.replaceWith(nodes152);
    }));
    callback(root205); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes151;
    nodes151 = node.contents();
    oldNodes.replaceWith(nodes151);
  }));
  var nodes153 = $("<span>");
  root204.append(nodes153);
  subs__.addSub((ui.group)(function(_, callback) {
    var root207 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes154 = $("<span>");
    root207.append(nodes154);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C29"), function(_, callback) {
      var root208 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root208); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes154;
      nodes154 = node.contents();
      oldNodes.replaceWith(nodes154);
    }));
    callback(root207); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes153;
    nodes153 = node.contents();
    oldNodes.replaceWith(nodes153);
  }));
  callback(root204); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root209 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes155 = $("<span>");
  root209.append(nodes155);
  subs__.addSub((ui.group)(function(_, callback) {
    var root210 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes156 = $("<span>");
    root210.append(nodes156);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F1"), function(_, callback) {
      var root211 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root211); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes156;
      nodes156 = node.contents();
      oldNodes.replaceWith(nodes156);
    }));
    var nodes157 = $("<span>");
    root210.append(nodes157);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F2"), function(_, callback) {
      var root212 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root212); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes157;
      nodes157 = node.contents();
      oldNodes.replaceWith(nodes157);
    }));
    var nodes158 = $("<span>");
    root210.append(nodes158);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F3a"), function(_, callback) {
      var root213 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root213); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes158;
      nodes158 = node.contents();
      oldNodes.replaceWith(nodes158);
    }));
    var nodes159 = $("<span>");
    root210.append(nodes159);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F4"), function(_, callback) {
      var root214 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root214); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes159;
      nodes159 = node.contents();
      oldNodes.replaceWith(nodes159);
    }));
    var nodes160 = $("<span>");
    root210.append(nodes160);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F5"), function(_, callback) {
      var root215 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root215); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes160;
      nodes160 = node.contents();
      oldNodes.replaceWith(nodes160);
    }));
    var nodes161 = $("<span>");
    root210.append(nodes161);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F6"), function(_, callback) {
      var root216 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root216); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes161;
      nodes161 = node.contents();
      oldNodes.replaceWith(nodes161);
    }));
    var nodes162 = $("<span>");
    root210.append(nodes162);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F7"), function(_, callback) {
      var root217 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root217); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes162;
      nodes162 = node.contents();
      oldNodes.replaceWith(nodes162);
    }));
    var nodes163 = $("<span>");
    root210.append(nodes163);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F8"), function(_, callback) {
      var root218 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root218); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes163;
      nodes163 = node.contents();
      oldNodes.replaceWith(nodes163);
    }));
    var nodes164 = $("<span>");
    root210.append(nodes164);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F9"), function(_, callback) {
      var root219 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root219); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes164;
      nodes164 = node.contents();
      oldNodes.replaceWith(nodes164);
    }));
    var nodes165 = $("<span>");
    root210.append(nodes165);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F10"), function(_, callback) {
      var root220 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root220); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes165;
      nodes165 = node.contents();
      oldNodes.replaceWith(nodes165);
    }));
    var nodes166 = $("<span>");
    root210.append(nodes166);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F11"), function(_, callback) {
      var root221 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root221); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes166;
      nodes166 = node.contents();
      oldNodes.replaceWith(nodes166);
    }));
    var nodes167 = $("<span>");
    root210.append(nodes167);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F12"), function(_, callback) {
      var root222 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root222); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes167;
      nodes167 = node.contents();
      oldNodes.replaceWith(nodes167);
    }));
    var nodes168 = $("<span>");
    root210.append(nodes168);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F13"), function(_, callback) {
      var root223 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root223); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes168;
      nodes168 = node.contents();
      oldNodes.replaceWith(nodes168);
    }));
    callback(root210); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes155;
    nodes155 = node.contents();
    oldNodes.replaceWith(nodes155);
  }));
  callback(root209); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root224 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes169 = $("<span>");
  root224.append(nodes169);
  subs__.addSub((ui.group)(function(_, callback) {
    var root225 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes170 = $("<span>");
    root225.append(nodes170);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S1"), function(_, callback) {
      var root226 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root226); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes170;
      nodes170 = node.contents();
      oldNodes.replaceWith(nodes170);
    }));
    var nodes171 = $("<span>");
    root225.append(nodes171);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S2"), function(_, callback) {
      var root227 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root227); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes171;
      nodes171 = node.contents();
      oldNodes.replaceWith(nodes171);
    }));
    var nodes172 = $("<span>");
    root225.append(nodes172);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S3"), function(_, callback) {
      var root228 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root228); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes172;
      nodes172 = node.contents();
      oldNodes.replaceWith(nodes172);
    }));
    var nodes173 = $("<span>");
    root225.append(nodes173);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S4"), function(_, callback) {
      var root229 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root229); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes173;
      nodes173 = node.contents();
      oldNodes.replaceWith(nodes173);
    }));
    var nodes174 = $("<span>");
    root225.append(nodes174);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S5"), function(_, callback) {
      var root230 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root230); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes174;
      nodes174 = node.contents();
      oldNodes.replaceWith(nodes174);
    }));
    var nodes175 = $("<span>");
    root225.append(nodes175);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S6"), function(_, callback) {
      var root231 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root231); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes175;
      nodes175 = node.contents();
      oldNodes.replaceWith(nodes175);
    }));
    callback(root225); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes169;
    nodes169 = node.contents();
    oldNodes.replaceWith(nodes169);
  }));
  callback(root224); return subs__;
  
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
  var root232 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node62 = $("<div>");
  
  var ref69 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref69.get() !== null) {
    node62.attr('class', ref69.get());
    subs__.addSub(ref69.addEventListener('change', function(_, ref, val) {
      node62.attr('class', val);
    }));
    
  }
  subs__.addSub(ref69.rebind());
  
  var val34 = onclick.get();
  if(val34 !== null) {
    subs__.addSub(mobl.domBind(node62, 'tap', val34));
  }
  
  
  var node63 = $("<div>");
  
  var ref68 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref68.get() !== null) {
    node63.attr('class', ref68.get());
    subs__.addSub(ref68.addEventListener('change', function(_, ref, val) {
      node63.attr('class', val);
    }));
    
  }
  subs__.addSub(ref68.rebind());
  
  
  var node64 = $("<div>");
  
  var ref66 = text;
  node64.text(""+ref66.get());
  var ignore12 = false;
  subs__.addSub(ref66.addEventListener('change', function(_, ref, val) {
    if(ignore12) return;
    node64.text(""+val);
  }));
  subs__.addSub(ref66.rebind());
  
  
  var ref67 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref67.get() !== null) {
    node64.attr('class', ref67.get());
    subs__.addSub(ref67.addEventListener('change', function(_, ref, val) {
      node64.attr('class', val);
    }));
    
  }
  subs__.addSub(ref67.rebind());
  
  node63.append(node64);
  node62.append(node63);
  var nodes176 = $("<span>");
  node62.append(nodes176);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl29();
  }));
  
  function renderControl29() {
    subs__.addSub((elements)(function(elements, callback) {
      var root233 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root233); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes176;
      nodes176 = node.contents();
      oldNodes.replaceWith(nodes176);
    }));
  }
  renderControl29();
  root232.append(node62);
  callback(root232); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mathJAX.renderMaths(function(result__) {
    var tmp144 = result__;
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


nrichRPG.coreWorkout.answerBlock = function(qa, number, elements, callback) {
  var root234 = $("<span>");
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
                       var result__ = mobl.$("#plot-wrapper").children("span:first").html();
                       qa.get().plotHtml = result__;
                       if(callback && callback.apply) callback(); return;
                     }
                   }
                 };
  var tmp115 = mobl.ref(result__);
  
  var result__ = qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle;
  var tmp114 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    tmp114.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.agreeStyle).addEventListener('change', function() {
    tmp114.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.disagreeStyle).addEventListener('change', function() {
    tmp114.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  
  var nodes177 = $("<span>");
  root234.append(nodes177);
  subs__.addSub((mobl.block)(tmp114, mobl.ref(null), tmp115, mobl.ref(null), function(_, callback) {
    var root235 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = "A" + number.get() + ". ";
    var tmp111 = mobl.ref(result__);
    subs__.addSub(number.addEventListener('change', function() {
      tmp111.set("A" + number.get() + ". ");
    }));
    
    var nodes178 = $("<span>");
    root235.append(nodes178);
    subs__.addSub((mobl.label)(tmp111, mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root236 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root236); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes178;
      nodes178 = node.contents();
      oldNodes.replaceWith(nodes178);
    }));
    var result__ = qa.get().answer != "%GRAPH%";
    var tmp113 = mobl.ref(result__);
    subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
      tmp113.set(qa.get().answer != "%GRAPH%");
    }));
    
    
    var node65 = $("<span>");
    root235.append(node65);
    var condSubs14 = new mobl.CompSubscription();
    subs__.addSub(condSubs14);
    var oldValue14;
    var renderCond14 = function() {
      var value38 = tmp113.get();
      if(oldValue14 === value38) return;
      oldValue14 = value38;
      var subs__ = condSubs14;
      subs__.unsubscribe();
      node65.empty();
      if(value38) {
        
        var node66 = $("<span>");
        
        var ref70 = mobl.ref("answer-block-" + number.get());
        if(ref70.get() !== null) {
          node66.attr('id', ref70.get());
          subs__.addSub(ref70.addEventListener('change', function(_, ref, val) {
            node66.attr('id', val);
          }));
          subs__.addSub(number.addEventListener('change', function() {
            node66.attr('id', "answer-block-" + number.get());
          }));
          
        }
        subs__.addSub(ref70.rebind());
        
        var result__ = plot.blank(qa.get().answerHtml) ? qa.get().answer : qa.get().answerHtml;
        var tmp112 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp112.set(plot.blank(qa.get().answerHtml) ? qa.get().answer : qa.get().answerHtml);
        }));
        subs__.addSub(mobl.ref(qa, 'answerHtml').addEventListener('change', function() {
          tmp112.set(plot.blank(qa.get().answerHtml) ? qa.get().answer : qa.get().answerHtml);
        }));
        
        var nodes179 = $("<span>");
        node66.append(nodes179);
        subs__.addSub((mobl.html)(tmp112, function(_, callback) {
          var root237 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root237); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes179;
          nodes179 = node.contents();
          oldNodes.replaceWith(nodes179);
        }));
        node65.append(node66);
        
        
        
      } else {
        var nodes180 = $("<span>");
        node65.append(nodes180);
        subs__.addSub((plot.plot)(qa, mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
          var root238 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root238); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes180;
          nodes180 = node.contents();
          oldNodes.replaceWith(nodes180);
        }));
        
        
      }
    };
    renderCond14();
    subs__.addSub(tmp113.addEventListener('change', function() {
      renderCond14();
    }));
    
    callback(root235); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes177;
    nodes177 = node.contents();
    oldNodes.replaceWith(nodes177);
  }));
  var nodes181 = $("<span>");
  root234.append(nodes181);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root239 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes182 = $("<span>");
    root239.append(nodes182);
    subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root240 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root240); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes182;
      nodes182 = node.contents();
      oldNodes.replaceWith(nodes182);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = true;
                     qa.get().correct = result__;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp116 = mobl.ref(result__);
    
    var nodes183 = $("<span>");
    root239.append(nodes183);
    subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp116, function(_, callback) {
      var root241 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root241); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes183;
      nodes183 = node.contents();
      oldNodes.replaceWith(nodes183);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = false;
                     qa.get().correct = result__;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp117 = mobl.ref(result__);
    
    var nodes184 = $("<span>");
    root239.append(nodes184);
    subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp117, function(_, callback) {
      var root242 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root242); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes184;
      nodes184 = node.contents();
      oldNodes.replaceWith(nodes184);
    }));
    callback(root239); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes181;
    nodes181 = node.contents();
    oldNodes.replaceWith(nodes181);
  }));
  callback(root234); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp145 = result__;
    var result__ = tmp145;
    var qa2 = result__;
    var result__ = qa2;
    if(callback && callback.apply) callback(result__);
    return;
    if(callback && callback.apply) callback(); return;
  });
};


nrichRPG.coreWorkout.showQA = function(qa, number, elements, callback) {
  var root243 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp154 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp122 = mobl.ref(result__);
  
  var result__ = nrichRPG.coreWorkout.topicName(qa.get().topic);
  var tmp121 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'topic').addEventListener('change', function() {
    tmp121.set(nrichRPG.coreWorkout.topicName(qa.get().topic));
  }));
  
  var nodes185 = $("<span>");
  root243.append(nodes185);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(tmp121, tmp122, function(_, callback) {
    var root244 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp148 = result__;
                       var result__ = tmp148;
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
                             var tmp149 = result__;
                             if(callback && callback.apply) callback(); return;
                           });
                         }
                       }
                     });
                   };
    var tmp118 = mobl.ref(result__);
    
    var nodes186 = $("<span>");
    root244.append(nodes186);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp118, function(_, callback) {
      var root245 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root245); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes186;
      nodes186 = node.contents();
      oldNodes.replaceWith(nodes186);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(qa.get().topic, function(result__) {
                       var tmp146 = result__;
                       var result__ = tmp146;
                       var qa2 = result__;
                       var result__ = qa.get().number;
                       var qnum = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       var result__ = qnum;
                       qa.get().number = result__;
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp147 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp119 = mobl.ref(result__);
    
    var nodes187 = $("<span>");
    root244.append(nodes187);
    subs__.addSub((ui.sideButton)(mobl.ref("New"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp119, function(_, callback) {
      var root246 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root246); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes187;
      nodes187 = node.contents();
      oldNodes.replaceWith(nodes187);
    }));
    callback(root244); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes185;
    nodes185 = node.contents();
    oldNodes.replaceWith(nodes185);
  }));
  var nodes188 = $("<span>");
  root243.append(nodes188);
  subs__.addSub((ui.group)(function(_, callback) {
    var root247 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp153 = result__;
                       var result__ = nrichRPG.coreWorkout.removeMathJaxIncidentElements();
                       var result__ = mobl.$("#question-block-" + number.get()).children("span:first").html();
                       qa.get().questionHtml = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp125 = mobl.ref(result__);
    
    var nodes189 = $("<span>");
    root247.append(nodes189);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp125, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root248 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + number.get() + ". ";
      var tmp123 = mobl.ref(result__);
      subs__.addSub(number.addEventListener('change', function() {
        tmp123.set("Q" + number.get() + ". ");
      }));
      
      var nodes190 = $("<span>");
      root248.append(nodes190);
      subs__.addSub((mobl.html)(tmp123, function(_, callback) {
        var root249 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root249); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes190;
        nodes190 = node.contents();
        oldNodes.replaceWith(nodes190);
      }));
      
      var node67 = $("<span>");
      
      var ref71 = mobl.ref("question-block-" + number.get());
      if(ref71.get() !== null) {
        node67.attr('id', ref71.get());
        subs__.addSub(ref71.addEventListener('change', function(_, ref, val) {
          node67.attr('id', val);
        }));
        subs__.addSub(number.addEventListener('change', function() {
          node67.attr('id', "question-block-" + number.get());
        }));
        
      }
      subs__.addSub(ref71.rebind());
      
      var result__ = plot.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml;
      var tmp124 = mobl.ref(result__);
      subs__.addSub(mobl.ref(qa, 'question').addEventListener('change', function() {
        tmp124.set(plot.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml);
      }));
      subs__.addSub(mobl.ref(qa, 'questionHtml').addEventListener('change', function() {
        tmp124.set(plot.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml);
      }));
      
      var nodes191 = $("<span>");
      node67.append(nodes191);
      subs__.addSub((mobl.html)(tmp124, function(_, callback) {
        var root250 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root250); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes191;
        nodes191 = node.contents();
        oldNodes.replaceWith(nodes191);
      }));
      root248.append(node67);
      callback(root248); return subs__;
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes189;
      nodes189 = node.contents();
      oldNodes.replaceWith(nodes189);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp152 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp127 = mobl.ref(result__);
    
    var nodes192 = $("<span>");
    root247.append(nodes192);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp127, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root251 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes193 = $("<span>");
      root251.append(nodes193);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root252 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                           var tmp151 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp126 = mobl.ref(result__);
        
        var nodes194 = $("<span>");
        root252.append(nodes194);
        subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp126, function(_, callback) {
          var root253 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root253); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes194;
          nodes194 = node.contents();
          oldNodes.replaceWith(nodes194);
        }));
        callback(root252); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes193;
        nodes193 = node.contents();
        oldNodes.replaceWith(nodes193);
      }));
      
      var node68 = $("<span>");
      root251.append(node68);
      var condSubs15 = new mobl.CompSubscription();
      subs__.addSub(condSubs15);
      var oldValue15;
      var renderCond15 = function() {
        var value39 = qa.get().done;
        if(oldValue15 === value39) return;
        oldValue15 = value39;
        var subs__ = condSubs15;
        subs__.unsubscribe();
        node68.empty();
        if(value39) {
          var nodes195 = $("<span>");
          node68.append(nodes195);
          subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, number, function(_, callback) {
            var root254 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root254); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes195;
            nodes195 = node.contents();
            oldNodes.replaceWith(nodes195);
          }));
          
          
        } else {
          
        }
      };
      renderCond15();
      subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
        renderCond15();
      }));
      
      callback(root251); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes192;
      nodes192 = node.contents();
      oldNodes.replaceWith(nodes192);
    }));
    callback(root247); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes188;
    nodes188 = node.contents();
    oldNodes.replaceWith(nodes188);
  }));
  callback(root243); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.max = mobl.ref(0);
nrichRPG.coreWorkout.makeQA = function(tid, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll40) {
    coll40 = coll40.reverse();
    function processOne4() {
      var item;
      item = coll40.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll40.length > 0) processOne4(); else rest4();
      
    }
    function rest4() {
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
    if(coll40.length > 0) processOne4(); else rest4();
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