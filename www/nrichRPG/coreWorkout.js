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
<<<<<<< HEAD
    var tmp128 = result__;
    var result__ = tmp128;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp129 = result__;
      var result__ = tmp129;
=======
    var tmp879 = result__;
    var result__ = tmp879;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp880 = result__;
      var result__ = tmp880;
>>>>>>> upstream/master
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
<<<<<<< HEAD
    var tmp131 = result__;
=======
    var tmp881 = result__;
>>>>>>> upstream/master
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicCode, callback) {
  var __this = this;
  var result__ = nrichRPG.coreWorkout.topicMapForId(topicCode).keys();
  var keys = result__;
  var result__ = mobl.range(0, n);
<<<<<<< HEAD
  mobl.range(0, n).list(function(coll27) {
    coll27 = coll27.reverse();
    function processOne3() {
      var i;
      i = coll27.pop();
=======
  mobl.range(0, n).list(function(coll95) {
    coll95 = coll95.reverse();
    function processOne23() {
      var i;
      i = coll95.pop();
>>>>>>> upstream/master
      var result__ = mobl.Math.floor(keys.length * mobl.Math.random());
      var r = result__;
      var result__ = keys.get(r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQA(tid, function(result__) {
<<<<<<< HEAD
        var tmp132 = result__;
        
        if(coll27.length > 0) processOne3(); else rest3();
        
      });
    }
    function rest3() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll27.length > 0) processOne3(); else rest3();
=======
        var tmp882 = result__;
        
        if(coll95.length > 0) processOne23(); else rest23();
        
      });
    }
    function rest23() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll95.length > 0) processOne23(); else rest23();
>>>>>>> upstream/master
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
<<<<<<< HEAD
  var root123 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes81 = $("<span>");
  root123.append(nodes81);
  subs__.addSub((ui.group)(function(_, callback) {
    var root124 = $("<span>");
=======
  var root1419 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1174 = $("<span>");
  root1419.append(nodes1174);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1420 = $("<span>");
>>>>>>> upstream/master
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
<<<<<<< HEAD
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
=======
                     var tmp890 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp833 = mobl.ref(result__);
    
    var nodes1175 = $("<span>");
    root1420.append(nodes1175);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp833, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1421 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1176 = $("<span>");
      root1421.append(nodes1176);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1422 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1422); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1176;
        nodes1176 = node.contents();
        oldNodes.replaceWith(nodes1176);
      }));
      callback(root1421); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1175;
      nodes1175 = node.contents();
      oldNodes.replaceWith(nodes1175);
>>>>>>> upstream/master
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
<<<<<<< HEAD
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
=======
                     var tmp889 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp834 = mobl.ref(result__);
    
    var nodes1177 = $("<span>");
    root1420.append(nodes1177);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp834, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1423 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1178 = $("<span>");
      root1423.append(nodes1178);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1424 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1424); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1178;
        nodes1178 = node.contents();
        oldNodes.replaceWith(nodes1178);
      }));
      callback(root1423); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1177;
      nodes1177 = node.contents();
      oldNodes.replaceWith(nodes1177);
>>>>>>> upstream/master
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
<<<<<<< HEAD
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
=======
                     var tmp888 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp835 = mobl.ref(result__);
    
    var nodes1179 = $("<span>");
    root1420.append(nodes1179);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp835, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1425 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1180 = $("<span>");
      root1425.append(nodes1180);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1426 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1426); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1180;
        nodes1180 = node.contents();
        oldNodes.replaceWith(nodes1180);
      }));
      callback(root1425); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1179;
      nodes1179 = node.contents();
      oldNodes.replaceWith(nodes1179);
>>>>>>> upstream/master
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
<<<<<<< HEAD
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
=======
                     var tmp887 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp836 = mobl.ref(result__);
    
    var nodes1181 = $("<span>");
    root1420.append(nodes1181);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp836, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1427 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1182 = $("<span>");
      root1427.append(nodes1182);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1428 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1428); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1182;
        nodes1182 = node.contents();
        oldNodes.replaceWith(nodes1182);
      }));
      callback(root1427); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1181;
      nodes1181 = node.contents();
      oldNodes.replaceWith(nodes1181);
>>>>>>> upstream/master
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
<<<<<<< HEAD
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
=======
                     var tmp886 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp837 = mobl.ref(result__);
    
    var nodes1183 = $("<span>");
    root1420.append(nodes1183);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp837, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1429 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1184 = $("<span>");
      root1429.append(nodes1184);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1430 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1430); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1184;
        nodes1184 = node.contents();
        oldNodes.replaceWith(nodes1184);
      }));
      callback(root1429); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1183;
      nodes1183 = node.contents();
      oldNodes.replaceWith(nodes1183);
>>>>>>> upstream/master
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
<<<<<<< HEAD
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
=======
                     var tmp885 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp838 = mobl.ref(result__);
    
    var nodes1185 = $("<span>");
    root1420.append(nodes1185);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp838, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1431 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1186 = $("<span>");
      root1431.append(nodes1186);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1432 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1432); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1186;
        nodes1186 = node.contents();
        oldNodes.replaceWith(nodes1186);
      }));
      callback(root1431); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1185;
      nodes1185 = node.contents();
      oldNodes.replaceWith(nodes1185);
>>>>>>> upstream/master
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
<<<<<<< HEAD
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
=======
                     var tmp884 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp839 = mobl.ref(result__);
    
    var nodes1187 = $("<span>");
    root1420.append(nodes1187);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp839, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1433 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1188 = $("<span>");
      root1433.append(nodes1188);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1434 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1434); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1188;
        nodes1188 = node.contents();
        oldNodes.replaceWith(nodes1188);
      }));
      callback(root1433); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1187;
      nodes1187 = node.contents();
      oldNodes.replaceWith(nodes1187);
>>>>>>> upstream/master
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
<<<<<<< HEAD
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
=======
                     var tmp883 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp840 = mobl.ref(result__);
    
    var nodes1189 = $("<span>");
    root1420.append(nodes1189);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp840, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1435 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1190 = $("<span>");
      root1435.append(nodes1190);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1436 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1436); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1190;
        nodes1190 = node.contents();
        oldNodes.replaceWith(nodes1190);
      }));
      callback(root1435); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1189;
      nodes1189 = node.contents();
      oldNodes.replaceWith(nodes1189);
    }));
    callback(root1420); return subs__;
>>>>>>> upstream/master
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
<<<<<<< HEAD
    var oldNodes = nodes81;
    nodes81 = node.contents();
    oldNodes.replaceWith(nodes81);
  }));
  callback(root123); return subs__;
=======
    var oldNodes = nodes1174;
    nodes1174 = node.contents();
    oldNodes.replaceWith(nodes1174);
  }));
  callback(root1419); return subs__;
>>>>>>> upstream/master
  
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
<<<<<<< HEAD
    var tmp142 = result__;
=======
    var tmp891 = result__;
>>>>>>> upstream/master
    var result__ = mobl.alert(nrichRPG.coreWorkout.topicName(tid) + " added");
    if(callback && callback.apply) callback(); return;
  });
};


nrichRPG.coreWorkout.topicLabel = function(tid, elements, callback) {
<<<<<<< HEAD
  var root141 = $("<span>");
=======
  var root1437 = $("<span>");
>>>>>>> upstream/master
  var subs__ = new mobl.CompSubscription();
  
  var map = mobl.ref(nrichRPG.coreWorkout.topicMapForId(tid.get()));
  var result__ = "+" + map.get().get(tid.get());
<<<<<<< HEAD
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
=======
  var tmp841 = mobl.ref(result__);
  subs__.addSub(map.addEventListener('change', function() {
    tmp841.set("+" + map.get().get(tid.get()));
  }));
  subs__.addSub(tid.addEventListener('change', function() {
    tmp841.set("+" + map.get().get(tid.get()));
  }));
  
  var nodes1191 = $("<span>");
  root1437.append(nodes1191);
  subs__.addSub((mobl.label)(tmp841, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root1438 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1438); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1191;
    nodes1191 = node.contents();
    oldNodes.replaceWith(nodes1191);
  }));
  callback(root1437); return subs__;
>>>>>>> upstream/master
  
  return subs__;
};

nrichRPG.coreWorkout.topicItem = function(tid, elements, callback) {
<<<<<<< HEAD
  var root143 = $("<span>");
=======
  var root1439 = $("<span>");
>>>>>>> upstream/master
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   nrichRPG.coreWorkout.topicAdded(tid.get(), function(result__) {
<<<<<<< HEAD
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
=======
                     var tmp892 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp842 = mobl.ref(result__);
  
  var nodes1192 = $("<span>");
  root1439.append(nodes1192);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp842, mobl.ref(null), mobl.ref(false), function(_, callback) {
    var root1440 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes1193 = $("<span>");
    root1440.append(nodes1193);
    subs__.addSub((nrichRPG.coreWorkout.topicLabel)(tid, function(_, callback) {
      var root1441 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1441); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1193;
      nodes1193 = node.contents();
      oldNodes.replaceWith(nodes1193);
    }));
    callback(root1440); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1192;
    nodes1192 = node.contents();
    oldNodes.replaceWith(nodes1192);
  }));
  callback(root1439); return subs__;
>>>>>>> upstream/master
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
<<<<<<< HEAD
  var root146 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes101 = $("<span>");
  root146.append(nodes101);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root147 = $("<span>");
=======
  var root1442 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes1194 = $("<span>");
  root1442.append(nodes1194);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1443 = $("<span>");
>>>>>>> upstream/master
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
<<<<<<< HEAD
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
=======
    var tmp844 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp843 = mobl.ref(result__);
    
    var nodes1195 = $("<span>");
    root1443.append(nodes1195);
    subs__.addSub((ui.backButton)(tmp843, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp844, function(_, callback) {
      var root1444 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1444); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1195;
      nodes1195 = node.contents();
      oldNodes.replaceWith(nodes1195);
    }));
    callback(root1443); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1194;
    nodes1194 = node.contents();
    oldNodes.replaceWith(nodes1194);
  }));
  var nodes1196 = $("<span>");
  root1442.append(nodes1196);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1445 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes1197 = $("<span>");
    root1445.append(nodes1197);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C11"), function(_, callback) {
      var root1446 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1446); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1197;
      nodes1197 = node.contents();
      oldNodes.replaceWith(nodes1197);
    }));
    var nodes1198 = $("<span>");
    root1445.append(nodes1198);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C7"), function(_, callback) {
      var root1447 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1447); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1198;
      nodes1198 = node.contents();
      oldNodes.replaceWith(nodes1198);
    }));
    var nodes1199 = $("<span>");
    root1445.append(nodes1199);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C9"), function(_, callback) {
      var root1448 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1448); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1199;
      nodes1199 = node.contents();
      oldNodes.replaceWith(nodes1199);
    }));
    var nodes1200 = $("<span>");
    root1445.append(nodes1200);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C1"), function(_, callback) {
      var root1449 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1449); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1200;
      nodes1200 = node.contents();
      oldNodes.replaceWith(nodes1200);
    }));
    var nodes1201 = $("<span>");
    root1445.append(nodes1201);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C30"), function(_, callback) {
      var root1450 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1450); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1201;
      nodes1201 = node.contents();
      oldNodes.replaceWith(nodes1201);
    }));
    var nodes1202 = $("<span>");
    root1445.append(nodes1202);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C13"), function(_, callback) {
      var root1451 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1451); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1202;
      nodes1202 = node.contents();
      oldNodes.replaceWith(nodes1202);
    }));
    var nodes1203 = $("<span>");
    root1445.append(nodes1203);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C17"), function(_, callback) {
      var root1452 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1452); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1203;
      nodes1203 = node.contents();
      oldNodes.replaceWith(nodes1203);
    }));
    callback(root1445); return subs__;
>>>>>>> upstream/master
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
<<<<<<< HEAD
    var oldNodes = nodes103;
    nodes103 = node.contents();
    oldNodes.replaceWith(nodes103);
  }));
  callback(root146); return subs__;
=======
    var oldNodes = nodes1196;
    nodes1196 = node.contents();
    oldNodes.replaceWith(nodes1196);
  }));
  callback(root1442); return subs__;
>>>>>>> upstream/master
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
<<<<<<< HEAD
  var root157 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes111 = $("<span>");
  root157.append(nodes111);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root158 = $("<span>");
=======
  var root1453 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1204 = $("<span>");
  root1453.append(nodes1204);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1454 = $("<span>");
>>>>>>> upstream/master
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
<<<<<<< HEAD
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
=======
    var tmp846 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp845 = mobl.ref(result__);
    
    var nodes1205 = $("<span>");
    root1454.append(nodes1205);
    subs__.addSub((ui.backButton)(tmp845, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp846, function(_, callback) {
      var root1455 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1455); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1205;
      nodes1205 = node.contents();
      oldNodes.replaceWith(nodes1205);
    }));
    callback(root1454); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1204;
    nodes1204 = node.contents();
    oldNodes.replaceWith(nodes1204);
  }));
  var nodes1206 = $("<span>");
  root1453.append(nodes1206);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1456 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes1207 = $("<span>");
    root1456.append(nodes1207);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C24"), function(_, callback) {
      var root1457 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1457); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1207;
      nodes1207 = node.contents();
      oldNodes.replaceWith(nodes1207);
    }));
    var nodes1208 = $("<span>");
    root1456.append(nodes1208);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C25"), function(_, callback) {
      var root1458 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1458); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1208;
      nodes1208 = node.contents();
      oldNodes.replaceWith(nodes1208);
    }));
    var nodes1209 = $("<span>");
    root1456.append(nodes1209);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C26"), function(_, callback) {
      var root1459 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1459); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1209;
      nodes1209 = node.contents();
      oldNodes.replaceWith(nodes1209);
    }));
    var nodes1210 = $("<span>");
    root1456.append(nodes1210);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C270"), function(_, callback) {
      var root1460 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1460); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1210;
      nodes1210 = node.contents();
      oldNodes.replaceWith(nodes1210);
    }));
    var nodes1211 = $("<span>");
    root1456.append(nodes1211);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C27"), function(_, callback) {
      var root1461 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1461); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1211;
      nodes1211 = node.contents();
      oldNodes.replaceWith(nodes1211);
    }));
    callback(root1456); return subs__;
>>>>>>> upstream/master
    
    
    
    
    
    return subs__;
  }, function(node) {
<<<<<<< HEAD
    var oldNodes = nodes113;
    nodes113 = node.contents();
    oldNodes.replaceWith(nodes113);
  }));
  callback(root157); return subs__;
=======
    var oldNodes = nodes1206;
    nodes1206 = node.contents();
    oldNodes.replaceWith(nodes1206);
  }));
  callback(root1453); return subs__;
>>>>>>> upstream/master
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
<<<<<<< HEAD
  var root166 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes119 = $("<span>");
  root166.append(nodes119);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root167 = $("<span>");
=======
  var root1462 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1212 = $("<span>");
  root1462.append(nodes1212);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1463 = $("<span>");
>>>>>>> upstream/master
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
<<<<<<< HEAD
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
=======
    var tmp848 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp847 = mobl.ref(result__);
    
    var nodes1213 = $("<span>");
    root1463.append(nodes1213);
    subs__.addSub((ui.backButton)(tmp847, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp848, function(_, callback) {
      var root1464 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1464); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1213;
      nodes1213 = node.contents();
      oldNodes.replaceWith(nodes1213);
    }));
    callback(root1463); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1212;
    nodes1212 = node.contents();
    oldNodes.replaceWith(nodes1212);
  }));
  var nodes1214 = $("<span>");
  root1462.append(nodes1214);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1465 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes1215 = $("<span>");
    root1465.append(nodes1215);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C15"), function(_, callback) {
      var root1466 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1466); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1215;
      nodes1215 = node.contents();
      oldNodes.replaceWith(nodes1215);
    }));
    var nodes1216 = $("<span>");
    root1465.append(nodes1216);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C16"), function(_, callback) {
      var root1467 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1467); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1216;
      nodes1216 = node.contents();
      oldNodes.replaceWith(nodes1216);
    }));
    var nodes1217 = $("<span>");
    root1465.append(nodes1217);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C6"), function(_, callback) {
      var root1468 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1468); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1217;
      nodes1217 = node.contents();
      oldNodes.replaceWith(nodes1217);
    }));
    callback(root1465); return subs__;
>>>>>>> upstream/master
    
    
    
    return subs__;
  }, function(node) {
<<<<<<< HEAD
    var oldNodes = nodes121;
    nodes121 = node.contents();
    oldNodes.replaceWith(nodes121);
  }));
  callback(root166); return subs__;
=======
    var oldNodes = nodes1214;
    nodes1214 = node.contents();
    oldNodes.replaceWith(nodes1214);
  }));
  callback(root1462); return subs__;
>>>>>>> upstream/master
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
<<<<<<< HEAD
  var root173 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes125 = $("<span>");
  root173.append(nodes125);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root174 = $("<span>");
=======
  var root1469 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1218 = $("<span>");
  root1469.append(nodes1218);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1470 = $("<span>");
>>>>>>> upstream/master
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
<<<<<<< HEAD
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
=======
    var tmp850 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp849 = mobl.ref(result__);
    
    var nodes1219 = $("<span>");
    root1470.append(nodes1219);
    subs__.addSub((ui.backButton)(tmp849, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp850, function(_, callback) {
      var root1471 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1471); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1219;
      nodes1219 = node.contents();
      oldNodes.replaceWith(nodes1219);
    }));
    callback(root1470); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1218;
    nodes1218 = node.contents();
    oldNodes.replaceWith(nodes1218);
  }));
  var nodes1220 = $("<span>");
  root1469.append(nodes1220);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1472 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes1221 = $("<span>");
    root1472.append(nodes1221);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C8"), function(_, callback) {
      var root1473 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1473); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1221;
      nodes1221 = node.contents();
      oldNodes.replaceWith(nodes1221);
    }));
    var nodes1222 = $("<span>");
    root1472.append(nodes1222);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C12"), function(_, callback) {
      var root1474 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1474); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1222;
      nodes1222 = node.contents();
      oldNodes.replaceWith(nodes1222);
    }));
    var nodes1223 = $("<span>");
    root1472.append(nodes1223);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C23"), function(_, callback) {
      var root1475 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1475); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1223;
      nodes1223 = node.contents();
      oldNodes.replaceWith(nodes1223);
    }));
    var nodes1224 = $("<span>");
    root1472.append(nodes1224);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C2"), function(_, callback) {
      var root1476 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1476); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1224;
      nodes1224 = node.contents();
      oldNodes.replaceWith(nodes1224);
    }));
    callback(root1472); return subs__;
>>>>>>> upstream/master
    
    
    
    
    return subs__;
  }, function(node) {
<<<<<<< HEAD
    var oldNodes = nodes127;
    nodes127 = node.contents();
    oldNodes.replaceWith(nodes127);
  }));
  callback(root173); return subs__;
=======
    var oldNodes = nodes1220;
    nodes1220 = node.contents();
    oldNodes.replaceWith(nodes1220);
  }));
  callback(root1469); return subs__;
>>>>>>> upstream/master
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
<<<<<<< HEAD
  var root181 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes132 = $("<span>");
  root181.append(nodes132);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root182 = $("<span>");
=======
  var root1477 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1225 = $("<span>");
  root1477.append(nodes1225);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1478 = $("<span>");
>>>>>>> upstream/master
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
<<<<<<< HEAD
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
=======
    var tmp852 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp851 = mobl.ref(result__);
    
    var nodes1226 = $("<span>");
    root1478.append(nodes1226);
    subs__.addSub((ui.backButton)(tmp851, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp852, function(_, callback) {
      var root1479 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1479); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1226;
      nodes1226 = node.contents();
      oldNodes.replaceWith(nodes1226);
    }));
    callback(root1478); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1225;
    nodes1225 = node.contents();
    oldNodes.replaceWith(nodes1225);
  }));
  var nodes1227 = $("<span>");
  root1477.append(nodes1227);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1480 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes1228 = $("<span>");
    root1480.append(nodes1228);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C5"), function(_, callback) {
      var root1481 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1481); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1228;
      nodes1228 = node.contents();
      oldNodes.replaceWith(nodes1228);
    }));
    var nodes1229 = $("<span>");
    root1480.append(nodes1229);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C18"), function(_, callback) {
      var root1482 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1482); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1229;
      nodes1229 = node.contents();
      oldNodes.replaceWith(nodes1229);
    }));
    callback(root1480); return subs__;
>>>>>>> upstream/master
    
    
    return subs__;
  }, function(node) {
<<<<<<< HEAD
    var oldNodes = nodes134;
    nodes134 = node.contents();
    oldNodes.replaceWith(nodes134);
  }));
  callback(root181); return subs__;
=======
    var oldNodes = nodes1227;
    nodes1227 = node.contents();
    oldNodes.replaceWith(nodes1227);
  }));
  callback(root1477); return subs__;
>>>>>>> upstream/master
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
<<<<<<< HEAD
  var root187 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes137 = $("<span>");
  root187.append(nodes137);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root188 = $("<span>");
=======
  var root1483 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1230 = $("<span>");
  root1483.append(nodes1230);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1484 = $("<span>");
>>>>>>> upstream/master
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
<<<<<<< HEAD
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
=======
    var tmp854 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp853 = mobl.ref(result__);
    
    var nodes1231 = $("<span>");
    root1484.append(nodes1231);
    subs__.addSub((ui.backButton)(tmp853, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp854, function(_, callback) {
      var root1485 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1485); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1231;
      nodes1231 = node.contents();
      oldNodes.replaceWith(nodes1231);
    }));
    callback(root1484); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1230;
    nodes1230 = node.contents();
    oldNodes.replaceWith(nodes1230);
  }));
  var nodes1232 = $("<span>");
  root1483.append(nodes1232);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1486 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes1233 = $("<span>");
    root1486.append(nodes1233);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C14"), function(_, callback) {
      var root1487 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1487); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1233;
      nodes1233 = node.contents();
      oldNodes.replaceWith(nodes1233);
    }));
    var nodes1234 = $("<span>");
    root1486.append(nodes1234);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C20"), function(_, callback) {
      var root1488 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1488); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1234;
      nodes1234 = node.contents();
      oldNodes.replaceWith(nodes1234);
    }));
    var nodes1235 = $("<span>");
    root1486.append(nodes1235);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C21"), function(_, callback) {
      var root1489 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1489); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1235;
      nodes1235 = node.contents();
      oldNodes.replaceWith(nodes1235);
    }));
    var nodes1236 = $("<span>");
    root1486.append(nodes1236);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C22"), function(_, callback) {
      var root1490 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1490); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1236;
      nodes1236 = node.contents();
      oldNodes.replaceWith(nodes1236);
    }));
    var nodes1237 = $("<span>");
    root1486.append(nodes1237);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C19"), function(_, callback) {
      var root1491 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1491); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1237;
      nodes1237 = node.contents();
      oldNodes.replaceWith(nodes1237);
    }));
    callback(root1486); return subs__;
>>>>>>> upstream/master
    
    
    
    
    
    return subs__;
  }, function(node) {
<<<<<<< HEAD
    var oldNodes = nodes139;
    nodes139 = node.contents();
    oldNodes.replaceWith(nodes139);
  }));
  callback(root187); return subs__;
=======
    var oldNodes = nodes1232;
    nodes1232 = node.contents();
    oldNodes.replaceWith(nodes1232);
  }));
  callback(root1483); return subs__;
>>>>>>> upstream/master
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
<<<<<<< HEAD
  var root197 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes145 = $("<span>");
  root197.append(nodes145);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root198 = $("<span>");
=======
  var root1492 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1238 = $("<span>");
  root1492.append(nodes1238);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1493 = $("<span>");
>>>>>>> upstream/master
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
<<<<<<< HEAD
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
=======
    var tmp856 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp855 = mobl.ref(result__);
    
    var nodes1239 = $("<span>");
    root1493.append(nodes1239);
    subs__.addSub((ui.backButton)(tmp855, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp856, function(_, callback) {
      var root1494 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1494); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1239;
      nodes1239 = node.contents();
      oldNodes.replaceWith(nodes1239);
    }));
    callback(root1493); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1238;
    nodes1238 = node.contents();
    oldNodes.replaceWith(nodes1238);
  }));
  var nodes1240 = $("<span>");
  root1492.append(nodes1240);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1495 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes1241 = $("<span>");
    root1495.append(nodes1241);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C28"), function(_, callback) {
      var root1496 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1496); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1241;
      nodes1241 = node.contents();
      oldNodes.replaceWith(nodes1241);
    }));
    var nodes1242 = $("<span>");
    root1495.append(nodes1242);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C3"), function(_, callback) {
      var root1497 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1497); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1242;
      nodes1242 = node.contents();
      oldNodes.replaceWith(nodes1242);
    }));
    var nodes1243 = $("<span>");
    root1495.append(nodes1243);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C4"), function(_, callback) {
      var root1498 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1498); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1243;
      nodes1243 = node.contents();
      oldNodes.replaceWith(nodes1243);
    }));
    callback(root1495); return subs__;
>>>>>>> upstream/master
    
    
    
    return subs__;
  }, function(node) {
<<<<<<< HEAD
    var oldNodes = nodes147;
    nodes147 = node.contents();
    oldNodes.replaceWith(nodes147);
  }));
  callback(root197); return subs__;
=======
    var oldNodes = nodes1240;
    nodes1240 = node.contents();
    oldNodes.replaceWith(nodes1240);
  }));
  callback(root1492); return subs__;
>>>>>>> upstream/master
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
<<<<<<< HEAD
  var root204 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes151 = $("<span>");
  root204.append(nodes151);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root205 = $("<span>");
=======
  var root1499 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1244 = $("<span>");
  root1499.append(nodes1244);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1500 = $("<span>");
>>>>>>> upstream/master
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
<<<<<<< HEAD
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
=======
    var tmp858 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp857 = mobl.ref(result__);
    
    var nodes1245 = $("<span>");
    root1500.append(nodes1245);
    subs__.addSub((ui.backButton)(tmp857, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp858, function(_, callback) {
      var root1501 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1501); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1245;
      nodes1245 = node.contents();
      oldNodes.replaceWith(nodes1245);
    }));
    callback(root1500); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1244;
    nodes1244 = node.contents();
    oldNodes.replaceWith(nodes1244);
  }));
  var nodes1246 = $("<span>");
  root1499.append(nodes1246);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1502 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes1247 = $("<span>");
    root1502.append(nodes1247);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C29"), function(_, callback) {
      var root1503 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1503); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1247;
      nodes1247 = node.contents();
      oldNodes.replaceWith(nodes1247);
    }));
    callback(root1502); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1246;
    nodes1246 = node.contents();
    oldNodes.replaceWith(nodes1246);
  }));
  callback(root1499); return subs__;
>>>>>>> upstream/master
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
<<<<<<< HEAD
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
=======
  var root1504 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1248 = $("<span>");
  root1504.append(nodes1248);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1505 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes1249 = $("<span>");
    root1505.append(nodes1249);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F1"), function(_, callback) {
      var root1506 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1506); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1249;
      nodes1249 = node.contents();
      oldNodes.replaceWith(nodes1249);
    }));
    var nodes1250 = $("<span>");
    root1505.append(nodes1250);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F2"), function(_, callback) {
      var root1507 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1507); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1250;
      nodes1250 = node.contents();
      oldNodes.replaceWith(nodes1250);
    }));
    var nodes1251 = $("<span>");
    root1505.append(nodes1251);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F3a"), function(_, callback) {
      var root1508 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1508); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1251;
      nodes1251 = node.contents();
      oldNodes.replaceWith(nodes1251);
    }));
    var nodes1252 = $("<span>");
    root1505.append(nodes1252);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F4"), function(_, callback) {
      var root1509 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1509); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1252;
      nodes1252 = node.contents();
      oldNodes.replaceWith(nodes1252);
    }));
    var nodes1253 = $("<span>");
    root1505.append(nodes1253);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F5"), function(_, callback) {
      var root1510 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1510); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1253;
      nodes1253 = node.contents();
      oldNodes.replaceWith(nodes1253);
    }));
    var nodes1254 = $("<span>");
    root1505.append(nodes1254);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F6"), function(_, callback) {
      var root1511 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1511); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1254;
      nodes1254 = node.contents();
      oldNodes.replaceWith(nodes1254);
    }));
    var nodes1255 = $("<span>");
    root1505.append(nodes1255);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F7"), function(_, callback) {
      var root1512 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1512); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1255;
      nodes1255 = node.contents();
      oldNodes.replaceWith(nodes1255);
    }));
    var nodes1256 = $("<span>");
    root1505.append(nodes1256);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F8"), function(_, callback) {
      var root1513 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1513); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1256;
      nodes1256 = node.contents();
      oldNodes.replaceWith(nodes1256);
    }));
    var nodes1257 = $("<span>");
    root1505.append(nodes1257);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F9"), function(_, callback) {
      var root1514 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1514); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1257;
      nodes1257 = node.contents();
      oldNodes.replaceWith(nodes1257);
    }));
    var nodes1258 = $("<span>");
    root1505.append(nodes1258);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F10"), function(_, callback) {
      var root1515 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1515); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1258;
      nodes1258 = node.contents();
      oldNodes.replaceWith(nodes1258);
    }));
    var nodes1259 = $("<span>");
    root1505.append(nodes1259);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F11"), function(_, callback) {
      var root1516 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1516); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1259;
      nodes1259 = node.contents();
      oldNodes.replaceWith(nodes1259);
    }));
    var nodes1260 = $("<span>");
    root1505.append(nodes1260);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F12"), function(_, callback) {
      var root1517 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1517); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1260;
      nodes1260 = node.contents();
      oldNodes.replaceWith(nodes1260);
    }));
    var nodes1261 = $("<span>");
    root1505.append(nodes1261);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F13"), function(_, callback) {
      var root1518 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1518); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1261;
      nodes1261 = node.contents();
      oldNodes.replaceWith(nodes1261);
    }));
    callback(root1505); return subs__;
>>>>>>> upstream/master
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
<<<<<<< HEAD
    var oldNodes = nodes155;
    nodes155 = node.contents();
    oldNodes.replaceWith(nodes155);
  }));
  callback(root209); return subs__;
=======
    var oldNodes = nodes1248;
    nodes1248 = node.contents();
    oldNodes.replaceWith(nodes1248);
  }));
  callback(root1504); return subs__;
>>>>>>> upstream/master
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
<<<<<<< HEAD
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
=======
  var root1519 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1262 = $("<span>");
  root1519.append(nodes1262);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1520 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes1263 = $("<span>");
    root1520.append(nodes1263);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S1"), function(_, callback) {
      var root1521 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1521); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1263;
      nodes1263 = node.contents();
      oldNodes.replaceWith(nodes1263);
    }));
    var nodes1264 = $("<span>");
    root1520.append(nodes1264);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S2"), function(_, callback) {
      var root1522 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1522); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1264;
      nodes1264 = node.contents();
      oldNodes.replaceWith(nodes1264);
    }));
    var nodes1265 = $("<span>");
    root1520.append(nodes1265);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S3"), function(_, callback) {
      var root1523 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1523); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1265;
      nodes1265 = node.contents();
      oldNodes.replaceWith(nodes1265);
    }));
    var nodes1266 = $("<span>");
    root1520.append(nodes1266);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S4"), function(_, callback) {
      var root1524 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1524); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1266;
      nodes1266 = node.contents();
      oldNodes.replaceWith(nodes1266);
    }));
    var nodes1267 = $("<span>");
    root1520.append(nodes1267);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S5"), function(_, callback) {
      var root1525 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1525); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1267;
      nodes1267 = node.contents();
      oldNodes.replaceWith(nodes1267);
    }));
    var nodes1268 = $("<span>");
    root1520.append(nodes1268);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S6"), function(_, callback) {
      var root1526 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1526); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1268;
      nodes1268 = node.contents();
      oldNodes.replaceWith(nodes1268);
    }));
    callback(root1520); return subs__;
>>>>>>> upstream/master
    
    
    
    
    
    
    return subs__;
  }, function(node) {
<<<<<<< HEAD
    var oldNodes = nodes169;
    nodes169 = node.contents();
    oldNodes.replaceWith(nodes169);
  }));
  callback(root224); return subs__;
=======
    var oldNodes = nodes1262;
    nodes1262 = node.contents();
    oldNodes.replaceWith(nodes1262);
  }));
  callback(root1519); return subs__;
>>>>>>> upstream/master
  
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
<<<<<<< HEAD
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
=======
  var root1527 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node260 = $("<div>");
  
  var ref223 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref223.get() !== null) {
    node260.attr('class', ref223.get());
    subs__.addSub(ref223.addEventListener('change', function(_, ref, val) {
      node260.attr('class', val);
    }));
    
  }
  subs__.addSub(ref223.rebind());
  
  var val104 = onclick.get();
  if(val104 !== null) {
    subs__.addSub(mobl.domBind(node260, 'tap', val104));
  }
  
  
  var node261 = $("<div>");
  
  var ref222 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref222.get() !== null) {
    node261.attr('class', ref222.get());
    subs__.addSub(ref222.addEventListener('change', function(_, ref, val) {
      node261.attr('class', val);
    }));
    
  }
  subs__.addSub(ref222.rebind());
  
  
  var node262 = $("<div>");
  
  var ref220 = text;
  node262.text(""+ref220.get());
  var ignore42 = false;
  subs__.addSub(ref220.addEventListener('change', function(_, ref, val) {
    if(ignore42) return;
    node262.text(""+val);
  }));
  subs__.addSub(ref220.rebind());
  
  
  var ref221 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref221.get() !== null) {
    node262.attr('class', ref221.get());
    subs__.addSub(ref221.addEventListener('change', function(_, ref, val) {
      node262.attr('class', val);
    }));
    
  }
  subs__.addSub(ref221.rebind());
  
  node261.append(node262);
  node260.append(node261);
  var nodes1269 = $("<span>");
  node260.append(nodes1269);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl90();
  }));
  
  function renderControl90() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1528 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1528); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1269;
      nodes1269 = node.contents();
      oldNodes.replaceWith(nodes1269);
    }));
  }
  renderControl90();
  root1527.append(node260);
  callback(root1527); return subs__;
>>>>>>> upstream/master
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mathJAX.renderMaths(function(result__) {
<<<<<<< HEAD
    var tmp144 = result__;
    var result__ = plot.renderPlot("corePlotArea", qa);
    if(callback && callback.apply) callback(); return;
=======
    var tmp893 = result__;
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
>>>>>>> upstream/master
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


<<<<<<< HEAD
nrichRPG.coreWorkout.answerBlock = function(qa, number, elements, callback) {
  var root234 = $("<span>");
=======
nrichRPG.coreWorkout.answerBlock = function(qa, elements, callback) {
  var root1529 = $("<span>");
>>>>>>> upstream/master
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
  
<<<<<<< HEAD
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
      var value30 = tmp113.get();
      if(oldValue14 === value30) return;
      oldValue14 = value30;
      var subs__ = condSubs14;
      subs__.unsubscribe();
      node65.empty();
      if(value30) {
        
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
=======
  var node263 = $("<span>");
  root1529.append(node263);
  var condSubs70 = new mobl.CompSubscription();
  subs__.addSub(condSubs70);
  var oldValue70;
  var renderCond70 = function() {
    var value118 = qa.get().correct;
    if(oldValue70 === value118) return;
    oldValue70 = value118;
    var subs__ = condSubs70;
    subs__.unsubscribe();
    node263.empty();
    if(value118) {
      var nodes1270 = $("<span>");
      node263.append(nodes1270);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.agreeStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1530 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = qa.get().answer != "%GRAPH%";
        var tmp862 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp862.set(qa.get().answer != "%GRAPH%");
        }));
        
        
        var node264 = $("<span>");
        root1530.append(node264);
        var condSubs71 = new mobl.CompSubscription();
        subs__.addSub(condSubs71);
        var oldValue71;
        var renderCond71 = function() {
          var value119 = tmp862.get();
          if(oldValue71 === value119) return;
          oldValue71 = value119;
          var subs__ = condSubs71;
          subs__.unsubscribe();
          node264.empty();
          if(value119) {
            var result__ = "A" + qa.get().number + ". ";
            var tmp859 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp859.set("A" + qa.get().number + ". ");
            }));
            
            var nodes1271 = $("<span>");
            node264.append(nodes1271);
            subs__.addSub((mobl.label)(tmp859, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1531 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1531); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1271;
              nodes1271 = node.contents();
              oldNodes.replaceWith(nodes1271);
            }));
            var nodes1272 = $("<span>");
            node264.append(nodes1272);
            subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
              var root1532 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1532); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1272;
              nodes1272 = node.contents();
              oldNodes.replaceWith(nodes1272);
            }));
            
            
            
          } else {
            var result__ = "A" + qa.get().number + ". ";
            var tmp860 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp860.set("A" + qa.get().number + ". ");
            }));
            
            var nodes1273 = $("<span>");
            node264.append(nodes1273);
            subs__.addSub((mobl.label)(tmp860, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1533 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1533); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1273;
              nodes1273 = node.contents();
              oldNodes.replaceWith(nodes1273);
            }));
            var nodes1274 = $("<span>");
            node264.append(nodes1274);
            subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
              var root1534 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1534); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1274;
              nodes1274 = node.contents();
              oldNodes.replaceWith(nodes1274);
            }));
            
            var node265 = $("<span>");
            node265.attr('style', "display:none");
            
            nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
              var tmp895 = result__;
              var tmp861 = mobl.ref(result__);
              subs__.addSub(qa.addEventListener('change', function() {
                nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                  var tmp894 = result__;
                  var result__ = tmp894;
                  tmp861.set(result__);
                  
                });
              }));
              
              var nodes1275 = $("<span>");
              node265.append(nodes1275);
              subs__.addSub((mobl.html)(tmp861, function(_, callback) {
                var root1535 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1535); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1275;
                nodes1275 = node.contents();
                oldNodes.replaceWith(nodes1275);
              }));
              node264.append(node265);
              
              
            });
            
            
            
          }
        };
        renderCond71();
        subs__.addSub(tmp862.addEventListener('change', function() {
          renderCond71();
        }));
        
        callback(root1530); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1270;
        nodes1270 = node.contents();
        oldNodes.replaceWith(nodes1270);
      }));
      
      
    } else {
      var nodes1276 = $("<span>");
      node263.append(nodes1276);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.disagreeStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1536 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = qa.get().answer != "%GRAPH%";
        var tmp866 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp866.set(qa.get().answer != "%GRAPH%");
>>>>>>> upstream/master
        }));
        node65.append(node66);
        
        
        
<<<<<<< HEAD
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
=======
        var node266 = $("<span>");
        root1536.append(node266);
        var condSubs72 = new mobl.CompSubscription();
        subs__.addSub(condSubs72);
        var oldValue72;
        var renderCond72 = function() {
          var value120 = tmp866.get();
          if(oldValue72 === value120) return;
          oldValue72 = value120;
          var subs__ = condSubs72;
          subs__.unsubscribe();
          node266.empty();
          if(value120) {
            var result__ = "A" + qa.get().number + ". ";
            var tmp863 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp863.set("A" + qa.get().number + ". ");
            }));
            
            var nodes1277 = $("<span>");
            node266.append(nodes1277);
            subs__.addSub((mobl.label)(tmp863, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1537 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1537); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1277;
              nodes1277 = node.contents();
              oldNodes.replaceWith(nodes1277);
            }));
            var nodes1278 = $("<span>");
            node266.append(nodes1278);
            subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
              var root1538 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1538); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1278;
              nodes1278 = node.contents();
              oldNodes.replaceWith(nodes1278);
            }));
            
            
            
          } else {
            var result__ = "A" + qa.get().number + ". ";
            var tmp864 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp864.set("A" + qa.get().number + ". ");
            }));
            
            var nodes1279 = $("<span>");
            node266.append(nodes1279);
            subs__.addSub((mobl.label)(tmp864, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1539 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1539); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1279;
              nodes1279 = node.contents();
              oldNodes.replaceWith(nodes1279);
            }));
            var nodes1280 = $("<span>");
            node266.append(nodes1280);
            subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
              var root1540 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1540); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1280;
              nodes1280 = node.contents();
              oldNodes.replaceWith(nodes1280);
            }));
            
            var node267 = $("<span>");
            node267.attr('style', "display:none");
            
            nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
              var tmp897 = result__;
              var tmp865 = mobl.ref(result__);
              subs__.addSub(qa.addEventListener('change', function() {
                nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                  var tmp896 = result__;
                  var result__ = tmp896;
                  tmp865.set(result__);
                  
                });
              }));
              
              var nodes1281 = $("<span>");
              node267.append(nodes1281);
              subs__.addSub((mobl.html)(tmp865, function(_, callback) {
                var root1541 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1541); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1281;
                nodes1281 = node.contents();
                oldNodes.replaceWith(nodes1281);
              }));
              node266.append(node267);
              
              
            });
            
            
            
          }
        };
        renderCond72();
        subs__.addSub(tmp866.addEventListener('change', function() {
          renderCond72();
        }));
        
        callback(root1536); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1276;
        nodes1276 = node.contents();
        oldNodes.replaceWith(nodes1276);
      }));
      
      
    }
  };
  renderCond70();
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    renderCond70();
  }));
  
  var nodes1282 = $("<span>");
  root1529.append(nodes1282);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root1542 = $("<span>");
>>>>>>> upstream/master
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
    
    
<<<<<<< HEAD
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes181;
    nodes181 = node.contents();
    oldNodes.replaceWith(nodes181);
  }));
  callback(root234); return subs__;
=======
    var node268 = $("<span>");
    node268.attr('style', "display:none");
    
    nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
      var tmp899 = result__;
      var tmp867 = mobl.ref(result__);
      subs__.addSub(qa.addEventListener('change', function() {
        nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
          var tmp898 = result__;
          var result__ = tmp898;
          tmp867.set(result__);
          
        });
      }));
      
      var nodes1286 = $("<span>");
      node268.append(nodes1286);
      subs__.addSub((mobl.html)(tmp867, function(_, callback) {
        var root1546 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1546); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1286;
        nodes1286 = node.contents();
        oldNodes.replaceWith(nodes1286);
      }));
      root1542.append(node268);
      var nodes1283 = $("<span>");
      root1542.append(nodes1283);
      subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1543 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1543); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1283;
        nodes1283 = node.contents();
        oldNodes.replaceWith(nodes1283);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = true;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp868 = mobl.ref(result__);
      
      var nodes1284 = $("<span>");
      root1542.append(nodes1284);
      subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp868, function(_, callback) {
        var root1544 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1544); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1284;
        nodes1284 = node.contents();
        oldNodes.replaceWith(nodes1284);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = false;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp869 = mobl.ref(result__);
      
      var nodes1285 = $("<span>");
      root1542.append(nodes1285);
      subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp869, function(_, callback) {
        var root1545 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1545); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1285;
        nodes1285 = node.contents();
        oldNodes.replaceWith(nodes1285);
      }));
      callback(root1542); return subs__;
      
      
      
      
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1282;
    nodes1282 = node.contents();
    oldNodes.replaceWith(nodes1282);
  }));
  callback(root1529); return subs__;
>>>>>>> upstream/master
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
<<<<<<< HEAD
    var tmp145 = result__;
    var result__ = tmp145;
=======
    var tmp900 = result__;
    var result__ = tmp900;
>>>>>>> upstream/master
    var qa2 = result__;
    var result__ = qa2;
    if(callback && callback.apply) callback(result__);
    return;
    if(callback && callback.apply) callback(); return;
  });
};


<<<<<<< HEAD
nrichRPG.coreWorkout.showQA = function(qa, number, elements, callback) {
  var root243 = $("<span>");
=======
nrichRPG.coreWorkout.showQA = function(qa, elements, callback) {
  var root1547 = $("<span>");
>>>>>>> upstream/master
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
<<<<<<< HEAD
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
=======
                     var tmp910 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp873 = mobl.ref(result__);
  
  var result__ = nrichRPG.coreWorkout.topicName(qa.get().topic);
  var tmp872 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'topic').addEventListener('change', function() {
    tmp872.set(nrichRPG.coreWorkout.topicName(qa.get().topic));
  }));
  
  var nodes1287 = $("<span>");
  root1547.append(nodes1287);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(tmp872, tmp873, function(_, callback) {
    var root1548 = $("<span>");
>>>>>>> upstream/master
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
<<<<<<< HEAD
                       var tmp148 = result__;
                       var result__ = tmp148;
=======
                       var tmp903 = result__;
                       var result__ = tmp903;
>>>>>>> upstream/master
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
<<<<<<< HEAD
                             var tmp149 = result__;
=======
                             var tmp904 = result__;
>>>>>>> upstream/master
                             if(callback && callback.apply) callback(); return;
                           });
                         }
                       }
                     });
                   };
<<<<<<< HEAD
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
=======
    var tmp870 = mobl.ref(result__);
    
    var nodes1288 = $("<span>");
    root1548.append(nodes1288);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp870, function(_, callback) {
      var root1549 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1549); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1288;
      nodes1288 = node.contents();
      oldNodes.replaceWith(nodes1288);
>>>>>>> upstream/master
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(qa.get().topic, function(result__) {
<<<<<<< HEAD
                       var tmp146 = result__;
                       var result__ = tmp146;
=======
                       var tmp901 = result__;
                       var result__ = tmp901;
>>>>>>> upstream/master
                       var qa2 = result__;
                       var result__ = qa.get().number;
                       var qnum = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       var result__ = qnum;
                       qa.get().number = result__;
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
<<<<<<< HEAD
                         var tmp147 = result__;
=======
                         var tmp902 = result__;
>>>>>>> upstream/master
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
<<<<<<< HEAD
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
=======
    var tmp871 = mobl.ref(result__);
    
    var nodes1289 = $("<span>");
    root1548.append(nodes1289);
    subs__.addSub((ui.sideButton)(mobl.ref("New"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp871, function(_, callback) {
      var root1550 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1550); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1289;
      nodes1289 = node.contents();
      oldNodes.replaceWith(nodes1289);
    }));
    callback(root1548); return subs__;
>>>>>>> upstream/master
    
    
    return subs__;
  }, function(node) {
<<<<<<< HEAD
    var oldNodes = nodes185;
    nodes185 = node.contents();
    oldNodes.replaceWith(nodes185);
  }));
  var nodes188 = $("<span>");
  root243.append(nodes188);
  subs__.addSub((ui.group)(function(_, callback) {
    var root247 = $("<span>");
=======
    var oldNodes = nodes1287;
    nodes1287 = node.contents();
    oldNodes.replaceWith(nodes1287);
  }));
  var nodes1290 = $("<span>");
  root1547.append(nodes1290);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1551 = $("<span>");
>>>>>>> upstream/master
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
<<<<<<< HEAD
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
=======
                       var tmp909 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp876 = mobl.ref(result__);
    
    var nodes1291 = $("<span>");
    root1551.append(nodes1291);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp876, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root1552 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + qa.get().number + ". " + qa.get().question;
      var tmp874 = mobl.ref(result__);
      subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
        tmp874.set("Q" + qa.get().number + ". " + qa.get().question);
      }));
      subs__.addSub(mobl.ref(qa, 'question').addEventListener('change', function() {
        tmp874.set("Q" + qa.get().number + ". " + qa.get().question);
      }));
      
      var nodes1292 = $("<span>");
      root1552.append(nodes1292);
      subs__.addSub((mobl.html)(tmp874, function(_, callback) {
        var root1553 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1553); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1292;
        nodes1292 = node.contents();
        oldNodes.replaceWith(nodes1292);
      }));
      
      var node269 = $("<span>");
      node269.attr('style', "display:none");
      
      nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
        var tmp906 = result__;
        var tmp875 = mobl.ref(result__);
        subs__.addSub(qa.addEventListener('change', function() {
          nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
            var tmp905 = result__;
            var result__ = tmp905;
            tmp875.set(result__);
            
          });
        }));
        
        var nodes1293 = $("<span>");
        node269.append(nodes1293);
        subs__.addSub((mobl.html)(tmp875, function(_, callback) {
          var root1554 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1554); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1293;
          nodes1293 = node.contents();
          oldNodes.replaceWith(nodes1293);
        }));
        root1552.append(node269);
        callback(root1552); return subs__;
>>>>>>> upstream/master
        
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
<<<<<<< HEAD
      var oldNodes = nodes189;
      nodes189 = node.contents();
      oldNodes.replaceWith(nodes189);
=======
      var oldNodes = nodes1291;
      nodes1291 = node.contents();
      oldNodes.replaceWith(nodes1291);
>>>>>>> upstream/master
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
<<<<<<< HEAD
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
=======
                       var tmp908 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp878 = mobl.ref(result__);
    
    var nodes1294 = $("<span>");
    root1551.append(nodes1294);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp878, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root1555 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1295 = $("<span>");
      root1555.append(nodes1295);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1556 = $("<span>");
>>>>>>> upstream/master
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
<<<<<<< HEAD
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
        var value31 = qa.get().done;
        if(oldValue15 === value31) return;
        oldValue15 = value31;
        var subs__ = condSubs15;
        subs__.unsubscribe();
        node68.empty();
        if(value31) {
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
=======
                           var tmp907 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp877 = mobl.ref(result__);
        
        var nodes1296 = $("<span>");
        root1556.append(nodes1296);
        subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp877, function(_, callback) {
          var root1557 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1557); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1296;
          nodes1296 = node.contents();
          oldNodes.replaceWith(nodes1296);
        }));
        callback(root1556); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1295;
        nodes1295 = node.contents();
        oldNodes.replaceWith(nodes1295);
      }));
      
      var node270 = $("<span>");
      root1555.append(node270);
      var condSubs73 = new mobl.CompSubscription();
      subs__.addSub(condSubs73);
      var oldValue73;
      var renderCond73 = function() {
        var value121 = qa.get().done;
        if(oldValue73 === value121) return;
        oldValue73 = value121;
        var subs__ = condSubs73;
        subs__.unsubscribe();
        node270.empty();
        if(value121) {
          var nodes1297 = $("<span>");
          node270.append(nodes1297);
          subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, function(_, callback) {
            var root1558 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root1558); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes1297;
            nodes1297 = node.contents();
            oldNodes.replaceWith(nodes1297);
>>>>>>> upstream/master
          }));
          
          
        } else {
          
        }
      };
<<<<<<< HEAD
      renderCond15();
      subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
        renderCond15();
      }));
      
      callback(root251); return subs__;
=======
      renderCond73();
      subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
        renderCond73();
      }));
      
      callback(root1555); return subs__;
>>>>>>> upstream/master
      
      
      return subs__;
    }, function(node) {
<<<<<<< HEAD
      var oldNodes = nodes192;
      nodes192 = node.contents();
      oldNodes.replaceWith(nodes192);
    }));
    callback(root247); return subs__;
=======
      var oldNodes = nodes1294;
      nodes1294 = node.contents();
      oldNodes.replaceWith(nodes1294);
    }));
    callback(root1551); return subs__;
>>>>>>> upstream/master
    
    
    return subs__;
  }, function(node) {
<<<<<<< HEAD
    var oldNodes = nodes188;
    nodes188 = node.contents();
    oldNodes.replaceWith(nodes188);
  }));
  callback(root243); return subs__;
=======
    var oldNodes = nodes1290;
    nodes1290 = node.contents();
    oldNodes.replaceWith(nodes1290);
  }));
  callback(root1547); return subs__;
>>>>>>> upstream/master
  
  
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
<<<<<<< HEAD
  qas.list(function(coll28) {
    coll28 = coll28.reverse();
    function processOne4() {
      var item;
      item = coll28.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll28.length > 0) processOne4(); else rest4();
      
    }
    function rest4() {
=======
  qas.list(function(coll96) {
    coll96 = coll96.reverse();
    function processOne24() {
      var item;
      item = coll96.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll96.length > 0) processOne24(); else rest24();
      
    }
    function rest24() {
>>>>>>> upstream/master
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
<<<<<<< HEAD
    if(coll28.length > 0) processOne4(); else rest4();
=======
    if(coll96.length > 0) processOne24(); else rest24();
>>>>>>> upstream/master
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