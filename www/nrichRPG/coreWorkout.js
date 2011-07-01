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
    var tmp1209 = result__;
    var result__ = tmp1209;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp1210 = result__;
      var result__ = tmp1210;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp1211 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicId, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll195) {
    coll195 = coll195.reverse();
    function processOne39() {
      var i;
      i = coll195.pop();
      nrichRPG.coreWorkout.makeQA(topicId, function(result__) {
        var tmp1212 = result__;
        
        if(coll195.length > 0) processOne39(); else rest39();
        
      });
    }
    function rest39() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll195.length > 0) processOne39(); else rest39();
  });
  
};

nrichRPG.coreWorkout.randomQStar = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll196) {
    coll196 = coll196.reverse();
    function processOne40() {
      var i;
      i = coll196.pop();
      var result__ = mobl.Math.floor(13 * mobl.Math.random());
      var r = result__;
      var result__ = "F" + (1 + r);
      var tid = result__;
      var result__ = tid == "F3";
      if(result__) {
        var result__ = "F3a";
        tid = result__;
        nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
          var tmp1213 = result__;
          
          if(coll196.length > 0) processOne40(); else rest40();
          
        });
      } else {
        {
          nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
            var tmp1213 = result__;
            
            if(coll196.length > 0) processOne40(); else rest40();
            
          });
        }
      }
    }
    function rest40() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll196.length > 0) processOne40(); else rest40();
  });
  
};

nrichRPG.coreWorkout.randomQStats = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll197) {
    coll197 = coll197.reverse();
    function processOne41() {
      var i;
      i = coll197.pop();
      var result__ = mobl.Math.floor(6 * mobl.Math.random());
      var r = result__;
      var result__ = "S" + (1 + r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
        var tmp1214 = result__;
        
        if(coll197.length > 0) processOne41(); else rest41();
        
      });
    }
    function rest41() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll197.length > 0) processOne41(); else rest41();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root1480 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1181 = $("<span>");
  root1480.append(nodes1181);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1481 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1222 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1121 = mobl.ref(result__);
    
    var nodes1182 = $("<span>");
    root1481.append(nodes1182);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1121, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1482 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1183 = $("<span>");
      root1482.append(nodes1183);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1483 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1483); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1183;
        nodes1183 = node.contents();
        oldNodes.replaceWith(nodes1183);
      }));
      callback(root1482); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1182;
      nodes1182 = node.contents();
      oldNodes.replaceWith(nodes1182);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1221 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1122 = mobl.ref(result__);
    
    var nodes1184 = $("<span>");
    root1481.append(nodes1184);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1122, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1484 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1185 = $("<span>");
      root1484.append(nodes1185);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1485 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1485); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1185;
        nodes1185 = node.contents();
        oldNodes.replaceWith(nodes1185);
      }));
      callback(root1484); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1184;
      nodes1184 = node.contents();
      oldNodes.replaceWith(nodes1184);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1220 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1123 = mobl.ref(result__);
    
    var nodes1186 = $("<span>");
    root1481.append(nodes1186);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1123, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1486 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1187 = $("<span>");
      root1486.append(nodes1187);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1487 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1487); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1187;
        nodes1187 = node.contents();
        oldNodes.replaceWith(nodes1187);
      }));
      callback(root1486); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1186;
      nodes1186 = node.contents();
      oldNodes.replaceWith(nodes1186);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1219 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1124 = mobl.ref(result__);
    
    var nodes1188 = $("<span>");
    root1481.append(nodes1188);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1124, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1488 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1189 = $("<span>");
      root1488.append(nodes1189);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1489 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1489); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1189;
        nodes1189 = node.contents();
        oldNodes.replaceWith(nodes1189);
      }));
      callback(root1488); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1188;
      nodes1188 = node.contents();
      oldNodes.replaceWith(nodes1188);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1218 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1125 = mobl.ref(result__);
    
    var nodes1190 = $("<span>");
    root1481.append(nodes1190);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1125, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1490 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1191 = $("<span>");
      root1490.append(nodes1191);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1491 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1491); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1191;
        nodes1191 = node.contents();
        oldNodes.replaceWith(nodes1191);
      }));
      callback(root1490); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1190;
      nodes1190 = node.contents();
      oldNodes.replaceWith(nodes1190);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1217 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1126 = mobl.ref(result__);
    
    var nodes1192 = $("<span>");
    root1481.append(nodes1192);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1126, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1492 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1193 = $("<span>");
      root1492.append(nodes1193);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1493 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1493); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1193;
        nodes1193 = node.contents();
        oldNodes.replaceWith(nodes1193);
      }));
      callback(root1492); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1192;
      nodes1192 = node.contents();
      oldNodes.replaceWith(nodes1192);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1216 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1127 = mobl.ref(result__);
    
    var nodes1194 = $("<span>");
    root1481.append(nodes1194);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1127, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1494 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1195 = $("<span>");
      root1494.append(nodes1195);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1495 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1495); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1195;
        nodes1195 = node.contents();
        oldNodes.replaceWith(nodes1195);
      }));
      callback(root1494); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1194;
      nodes1194 = node.contents();
      oldNodes.replaceWith(nodes1194);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1215 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1128 = mobl.ref(result__);
    
    var nodes1196 = $("<span>");
    root1481.append(nodes1196);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1128, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1496 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1197 = $("<span>");
      root1496.append(nodes1197);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1497 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1497); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1197;
        nodes1197 = node.contents();
        oldNodes.replaceWith(nodes1197);
      }));
      callback(root1496); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1196;
      nodes1196 = node.contents();
      oldNodes.replaceWith(nodes1196);
    }));
    callback(root1481); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1181;
    nodes1181 = node.contents();
    oldNodes.replaceWith(nodes1181);
  }));
  callback(root1480); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root1498 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes1198 = $("<span>");
  root1498.append(nodes1198);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1499 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1130 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1129 = mobl.ref(result__);
    
    var nodes1199 = $("<span>");
    root1499.append(nodes1199);
    subs__.addSub((ui.backButton)(tmp1129, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1130, function(_, callback) {
      var root1500 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1500); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1199;
      nodes1199 = node.contents();
      oldNodes.replaceWith(nodes1199);
    }));
    callback(root1499); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1198;
    nodes1198 = node.contents();
    oldNodes.replaceWith(nodes1198);
  }));
  var nodes1200 = $("<span>");
  root1498.append(nodes1200);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1501 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(10, function(result__) {
                       var tmp1230 = result__;
                       var result__ = mobl.alert("Quadratic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1131 = mobl.ref(result__);
    
    var nodes1201 = $("<span>");
    root1501.append(nodes1201);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1131, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1502 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1202 = $("<span>");
      root1502.append(nodes1202);
      subs__.addSub((mobl.label)(mobl.ref("+Quadratic equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1503 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1503); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1202;
        nodes1202 = node.contents();
        oldNodes.replaceWith(nodes1202);
      }));
      callback(root1502); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1201;
      nodes1201 = node.contents();
      oldNodes.replaceWith(nodes1201);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(11, function(result__) {
                       var tmp1229 = result__;
                       var result__ = mobl.alert("Completing the Square Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1132 = mobl.ref(result__);
    
    var nodes1203 = $("<span>");
    root1501.append(nodes1203);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1132, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1504 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1204 = $("<span>");
      root1504.append(nodes1204);
      subs__.addSub((mobl.label)(mobl.ref("+Completing the square"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1505 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1505); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1204;
        nodes1204 = node.contents();
        oldNodes.replaceWith(nodes1204);
      }));
      callback(root1504); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1203;
      nodes1203 = node.contents();
      oldNodes.replaceWith(nodes1203);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(7, function(result__) {
                       var tmp1228 = result__;
                       var result__ = mobl.alert("Ineqalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1133 = mobl.ref(result__);
    
    var nodes1205 = $("<span>");
    root1501.append(nodes1205);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1133, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1506 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1206 = $("<span>");
      root1506.append(nodes1206);
      subs__.addSub((mobl.label)(mobl.ref("+Inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1507 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1507); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1206;
        nodes1206 = node.contents();
        oldNodes.replaceWith(nodes1206);
      }));
      callback(root1506); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1205;
      nodes1205 = node.contents();
      oldNodes.replaceWith(nodes1205);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(9, function(result__) {
                       var tmp1227 = result__;
                       var result__ = mobl.alert("Factor theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1134 = mobl.ref(result__);
    
    var nodes1207 = $("<span>");
    root1501.append(nodes1207);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1134, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1508 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1208 = $("<span>");
      root1508.append(nodes1208);
      subs__.addSub((mobl.label)(mobl.ref("+Factor theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1509 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1509); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1208;
        nodes1208 = node.contents();
        oldNodes.replaceWith(nodes1208);
      }));
      callback(root1508); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1207;
      nodes1207 = node.contents();
      oldNodes.replaceWith(nodes1207);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(1, function(result__) {
                       var tmp1226 = result__;
                       var result__ = mobl.alert("Partial fraction Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1135 = mobl.ref(result__);
    
    var nodes1209 = $("<span>");
    root1501.append(nodes1209);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1135, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1510 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1210 = $("<span>");
      root1510.append(nodes1210);
      subs__.addSub((mobl.label)(mobl.ref("+Partial fractions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1511 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1511); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1210;
        nodes1210 = node.contents();
        oldNodes.replaceWith(nodes1210);
      }));
      callback(root1510); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1209;
      nodes1209 = node.contents();
      oldNodes.replaceWith(nodes1209);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(30, function(result__) {
                       var tmp1225 = result__;
                       var result__ = mobl.alert("Powers Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1136 = mobl.ref(result__);
    
    var nodes1211 = $("<span>");
    root1501.append(nodes1211);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1136, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1512 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1212 = $("<span>");
      root1512.append(nodes1212);
      subs__.addSub((mobl.label)(mobl.ref("+Powers"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1513 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1513); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1212;
        nodes1212 = node.contents();
        oldNodes.replaceWith(nodes1212);
      }));
      callback(root1512); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1211;
      nodes1211 = node.contents();
      oldNodes.replaceWith(nodes1211);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(13, function(result__) {
                       var tmp1224 = result__;
                       var result__ = mobl.alert("Logarithm Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1137 = mobl.ref(result__);
    
    var nodes1213 = $("<span>");
    root1501.append(nodes1213);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1137, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1514 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1214 = $("<span>");
      root1514.append(nodes1214);
      subs__.addSub((mobl.label)(mobl.ref("+Logarithms"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1515 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1515); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1214;
        nodes1214 = node.contents();
        oldNodes.replaceWith(nodes1214);
      }));
      callback(root1514); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1213;
      nodes1213 = node.contents();
      oldNodes.replaceWith(nodes1213);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(17, function(result__) {
                       var tmp1223 = result__;
                       var result__ = mobl.alert("Trig equation Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1138 = mobl.ref(result__);
    
    var nodes1215 = $("<span>");
    root1501.append(nodes1215);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1138, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1516 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1216 = $("<span>");
      root1516.append(nodes1216);
      subs__.addSub((mobl.label)(mobl.ref("+Trig equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1517 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1517); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1216;
        nodes1216 = node.contents();
        oldNodes.replaceWith(nodes1216);
      }));
      callback(root1516); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1215;
      nodes1215 = node.contents();
      oldNodes.replaceWith(nodes1215);
    }));
    callback(root1501); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1200;
    nodes1200 = node.contents();
    oldNodes.replaceWith(nodes1200);
  }));
  callback(root1498); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root1518 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1217 = $("<span>");
  root1518.append(nodes1217);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1519 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1140 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1139 = mobl.ref(result__);
    
    var nodes1218 = $("<span>");
    root1519.append(nodes1218);
    subs__.addSub((ui.backButton)(tmp1139, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1140, function(_, callback) {
      var root1520 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1520); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1218;
      nodes1218 = node.contents();
      oldNodes.replaceWith(nodes1218);
    }));
    callback(root1519); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1217;
    nodes1217 = node.contents();
    oldNodes.replaceWith(nodes1217);
  }));
  var nodes1219 = $("<span>");
  root1518.append(nodes1219);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1521 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(24, function(result__) {
                       var tmp1235 = result__;
                       var result__ = mobl.alert("Modulus Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1141 = mobl.ref(result__);
    
    var nodes1220 = $("<span>");
    root1521.append(nodes1220);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1141, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1522 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1221 = $("<span>");
      root1522.append(nodes1221);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus function"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1523 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1523); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1221;
        nodes1221 = node.contents();
        oldNodes.replaceWith(nodes1221);
      }));
      callback(root1522); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1220;
      nodes1220 = node.contents();
      oldNodes.replaceWith(nodes1220);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(25, function(result__) {
                       var tmp1234 = result__;
                       var result__ = mobl.alert("Transformations of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1142 = mobl.ref(result__);
    
    var nodes1222 = $("<span>");
    root1521.append(nodes1222);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1142, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1524 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1223 = $("<span>");
      root1524.append(nodes1223);
      subs__.addSub((mobl.label)(mobl.ref("+Transformations of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1525 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1525); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1223;
        nodes1223 = node.contents();
        oldNodes.replaceWith(nodes1223);
      }));
      callback(root1524); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1222;
      nodes1222 = node.contents();
      oldNodes.replaceWith(nodes1222);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(26, function(result__) {
                       var tmp1233 = result__;
                       var result__ = mobl.alert("Composition of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1143 = mobl.ref(result__);
    
    var nodes1224 = $("<span>");
    root1521.append(nodes1224);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1143, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1526 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1225 = $("<span>");
      root1526.append(nodes1225);
      subs__.addSub((mobl.label)(mobl.ref("+Composition of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1527 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1527); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1225;
        nodes1225 = node.contents();
        oldNodes.replaceWith(nodes1225);
      }));
      callback(root1526); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1224;
      nodes1224 = node.contents();
      oldNodes.replaceWith(nodes1224);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(270, function(result__) {
                       var tmp1232 = result__;
                       var result__ = mobl.alert("Implicit functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1144 = mobl.ref(result__);
    
    var nodes1226 = $("<span>");
    root1521.append(nodes1226);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1144, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1528 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1227 = $("<span>");
      root1528.append(nodes1227);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1529 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1529); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1227;
        nodes1227 = node.contents();
        oldNodes.replaceWith(nodes1227);
      }));
      callback(root1528); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1226;
      nodes1226 = node.contents();
      oldNodes.replaceWith(nodes1226);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(27, function(result__) {
                       var tmp1231 = result__;
                       var result__ = mobl.alert("Parametric functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1145 = mobl.ref(result__);
    
    var nodes1228 = $("<span>");
    root1521.append(nodes1228);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1145, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1530 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1229 = $("<span>");
      root1530.append(nodes1229);
      subs__.addSub((mobl.label)(mobl.ref("+Parametric functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1531 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1531); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1229;
        nodes1229 = node.contents();
        oldNodes.replaceWith(nodes1229);
      }));
      callback(root1530); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1228;
      nodes1228 = node.contents();
      oldNodes.replaceWith(nodes1228);
    }));
    callback(root1521); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1219;
    nodes1219 = node.contents();
    oldNodes.replaceWith(nodes1219);
  }));
  callback(root1518); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root1532 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1230 = $("<span>");
  root1532.append(nodes1230);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1533 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1147 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1146 = mobl.ref(result__);
    
    var nodes1231 = $("<span>");
    root1533.append(nodes1231);
    subs__.addSub((ui.backButton)(tmp1146, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1147, function(_, callback) {
      var root1534 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1534); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1231;
      nodes1231 = node.contents();
      oldNodes.replaceWith(nodes1231);
    }));
    callback(root1533); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1230;
    nodes1230 = node.contents();
    oldNodes.replaceWith(nodes1230);
  }));
  var nodes1232 = $("<span>");
  root1532.append(nodes1232);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1535 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(15, function(result__) {
                       var tmp1238 = result__;
                       var result__ = mobl.alert("Triangles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1148 = mobl.ref(result__);
    
    var nodes1233 = $("<span>");
    root1535.append(nodes1233);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1148, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1536 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1234 = $("<span>");
      root1536.append(nodes1234);
      subs__.addSub((mobl.label)(mobl.ref("+Triangles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1537 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1537); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1234;
        nodes1234 = node.contents();
        oldNodes.replaceWith(nodes1234);
      }));
      callback(root1536); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1233;
      nodes1233 = node.contents();
      oldNodes.replaceWith(nodes1233);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(16, function(result__) {
                       var tmp1237 = result__;
                       var result__ = mobl.alert("Circles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1149 = mobl.ref(result__);
    
    var nodes1235 = $("<span>");
    root1535.append(nodes1235);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1149, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1538 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1236 = $("<span>");
      root1538.append(nodes1236);
      subs__.addSub((mobl.label)(mobl.ref("+Circles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1539 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1539); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1236;
        nodes1236 = node.contents();
        oldNodes.replaceWith(nodes1236);
      }));
      callback(root1538); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1235;
      nodes1235 = node.contents();
      oldNodes.replaceWith(nodes1235);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(6, function(result__) {
                       var tmp1236 = result__;
                       var result__ = mobl.alert("3D lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1150 = mobl.ref(result__);
    
    var nodes1237 = $("<span>");
    root1535.append(nodes1237);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1150, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1540 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1238 = $("<span>");
      root1540.append(nodes1238);
      subs__.addSub((mobl.label)(mobl.ref("+ 3D lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1541 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1541); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1238;
        nodes1238 = node.contents();
        oldNodes.replaceWith(nodes1238);
      }));
      callback(root1540); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1237;
      nodes1237 = node.contents();
      oldNodes.replaceWith(nodes1237);
    }));
    callback(root1535); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1232;
    nodes1232 = node.contents();
    oldNodes.replaceWith(nodes1232);
  }));
  callback(root1532); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root1542 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1239 = $("<span>");
  root1542.append(nodes1239);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1543 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1152 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1151 = mobl.ref(result__);
    
    var nodes1240 = $("<span>");
    root1543.append(nodes1240);
    subs__.addSub((ui.backButton)(tmp1151, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1152, function(_, callback) {
      var root1544 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1544); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1240;
      nodes1240 = node.contents();
      oldNodes.replaceWith(nodes1240);
    }));
    callback(root1543); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1239;
    nodes1239 = node.contents();
    oldNodes.replaceWith(nodes1239);
  }));
  var nodes1241 = $("<span>");
  root1542.append(nodes1241);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1545 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(8, function(result__) {
                       var tmp1242 = result__;
                       var result__ = mobl.alert("Arithmetic Progressions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1153 = mobl.ref(result__);
    
    var nodes1242 = $("<span>");
    root1545.append(nodes1242);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1153, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1546 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1243 = $("<span>");
      root1546.append(nodes1243);
      subs__.addSub((mobl.label)(mobl.ref("+Arithmetic progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1547 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1547); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1243;
        nodes1243 = node.contents();
        oldNodes.replaceWith(nodes1243);
      }));
      callback(root1546); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1242;
      nodes1242 = node.contents();
      oldNodes.replaceWith(nodes1242);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(12, function(result__) {
                       var tmp1241 = result__;
                       var result__ = mobl.alert("Binomial Expansion Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1154 = mobl.ref(result__);
    
    var nodes1244 = $("<span>");
    root1545.append(nodes1244);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1154, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1548 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1245 = $("<span>");
      root1548.append(nodes1245);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial expansion"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1549 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1549); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1245;
        nodes1245 = node.contents();
        oldNodes.replaceWith(nodes1245);
      }));
      callback(root1548); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1244;
      nodes1244 = node.contents();
      oldNodes.replaceWith(nodes1244);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(23, function(result__) {
                       var tmp1240 = result__;
                       var result__ = mobl.alert("Geometric Progression Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1155 = mobl.ref(result__);
    
    var nodes1246 = $("<span>");
    root1545.append(nodes1246);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1155, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1550 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1247 = $("<span>");
      root1550.append(nodes1247);
      subs__.addSub((mobl.label)(mobl.ref("+Geometric progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1551 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1551); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1247;
        nodes1247 = node.contents();
        oldNodes.replaceWith(nodes1247);
      }));
      callback(root1550); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1246;
      nodes1246 = node.contents();
      oldNodes.replaceWith(nodes1246);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(2, function(result__) {
                       var tmp1239 = result__;
                       var result__ = mobl.alert("Binomial theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1156 = mobl.ref(result__);
    
    var nodes1248 = $("<span>");
    root1545.append(nodes1248);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1156, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1552 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1249 = $("<span>");
      root1552.append(nodes1249);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1553 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1553); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1249;
        nodes1249 = node.contents();
        oldNodes.replaceWith(nodes1249);
      }));
      callback(root1552); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1248;
      nodes1248 = node.contents();
      oldNodes.replaceWith(nodes1248);
    }));
    callback(root1545); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1241;
    nodes1241 = node.contents();
    oldNodes.replaceWith(nodes1241);
  }));
  callback(root1542); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root1554 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1250 = $("<span>");
  root1554.append(nodes1250);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1555 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1158 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1157 = mobl.ref(result__);
    
    var nodes1251 = $("<span>");
    root1555.append(nodes1251);
    subs__.addSub((ui.backButton)(tmp1157, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1158, function(_, callback) {
      var root1556 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1556); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1251;
      nodes1251 = node.contents();
      oldNodes.replaceWith(nodes1251);
    }));
    callback(root1555); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1250;
    nodes1250 = node.contents();
    oldNodes.replaceWith(nodes1250);
  }));
  var nodes1252 = $("<span>");
  root1554.append(nodes1252);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1557 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(5, function(result__) {
                       var tmp1244 = result__;
                       var result__ = mobl.alert("Scalar product Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1159 = mobl.ref(result__);
    
    var nodes1253 = $("<span>");
    root1557.append(nodes1253);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1159, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1558 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1254 = $("<span>");
      root1558.append(nodes1254);
      subs__.addSub((mobl.label)(mobl.ref("+Scalar products"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1559 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1559); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1254;
        nodes1254 = node.contents();
        oldNodes.replaceWith(nodes1254);
      }));
      callback(root1558); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1253;
      nodes1253 = node.contents();
      oldNodes.replaceWith(nodes1253);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(18, function(result__) {
                       var tmp1243 = result__;
                       var result__ = mobl.alert("Vector equation of lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1160 = mobl.ref(result__);
    
    var nodes1255 = $("<span>");
    root1557.append(nodes1255);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1160, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1560 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1256 = $("<span>");
      root1560.append(nodes1256);
      subs__.addSub((mobl.label)(mobl.ref("+Vector equation of lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1561 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1561); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1256;
        nodes1256 = node.contents();
        oldNodes.replaceWith(nodes1256);
      }));
      callback(root1560); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1255;
      nodes1255 = node.contents();
      oldNodes.replaceWith(nodes1255);
    }));
    callback(root1557); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1252;
    nodes1252 = node.contents();
    oldNodes.replaceWith(nodes1252);
  }));
  callback(root1554); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root1562 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1257 = $("<span>");
  root1562.append(nodes1257);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1563 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1162 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1161 = mobl.ref(result__);
    
    var nodes1258 = $("<span>");
    root1563.append(nodes1258);
    subs__.addSub((ui.backButton)(tmp1161, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1162, function(_, callback) {
      var root1564 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1564); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1258;
      nodes1258 = node.contents();
      oldNodes.replaceWith(nodes1258);
    }));
    callback(root1563); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1257;
    nodes1257 = node.contents();
    oldNodes.replaceWith(nodes1257);
  }));
  var nodes1259 = $("<span>");
  root1562.append(nodes1259);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1565 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(14, function(result__) {
                       var tmp1249 = result__;
                       var result__ = mobl.alert("Stationary points Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1163 = mobl.ref(result__);
    
    var nodes1260 = $("<span>");
    root1565.append(nodes1260);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1163, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1566 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1261 = $("<span>");
      root1566.append(nodes1261);
      subs__.addSub((mobl.label)(mobl.ref("+Stationary points"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1567 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1567); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1261;
        nodes1261 = node.contents();
        oldNodes.replaceWith(nodes1261);
      }));
      callback(root1566); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1260;
      nodes1260 = node.contents();
      oldNodes.replaceWith(nodes1260);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(20, function(result__) {
                       var tmp1248 = result__;
                       var result__ = mobl.alert("Chain rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1164 = mobl.ref(result__);
    
    var nodes1262 = $("<span>");
    root1565.append(nodes1262);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1164, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1568 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1263 = $("<span>");
      root1568.append(nodes1263);
      subs__.addSub((mobl.label)(mobl.ref("+Chain rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1569 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1569); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1263;
        nodes1263 = node.contents();
        oldNodes.replaceWith(nodes1263);
      }));
      callback(root1568); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1262;
      nodes1262 = node.contents();
      oldNodes.replaceWith(nodes1262);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(21, function(result__) {
                       var tmp1247 = result__;
                       var result__ = mobl.alert("Product rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1165 = mobl.ref(result__);
    
    var nodes1264 = $("<span>");
    root1565.append(nodes1264);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1165, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1570 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1265 = $("<span>");
      root1570.append(nodes1265);
      subs__.addSub((mobl.label)(mobl.ref("+Product rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1571 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1571); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1265;
        nodes1265 = node.contents();
        oldNodes.replaceWith(nodes1265);
      }));
      callback(root1570); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1264;
      nodes1264 = node.contents();
      oldNodes.replaceWith(nodes1264);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(22, function(result__) {
                       var tmp1246 = result__;
                       var result__ = mobl.alert("Quotient rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1166 = mobl.ref(result__);
    
    var nodes1266 = $("<span>");
    root1565.append(nodes1266);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1166, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1572 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1267 = $("<span>");
      root1572.append(nodes1267);
      subs__.addSub((mobl.label)(mobl.ref("+Quotient rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1573 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1573); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1267;
        nodes1267 = node.contents();
        oldNodes.replaceWith(nodes1267);
      }));
      callback(root1572); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1266;
      nodes1266 = node.contents();
      oldNodes.replaceWith(nodes1266);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(19, function(result__) {
                       var tmp1245 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1167 = mobl.ref(result__);
    
    var nodes1268 = $("<span>");
    root1565.append(nodes1268);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1167, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1574 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1269 = $("<span>");
      root1574.append(nodes1269);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1575 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1575); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1269;
        nodes1269 = node.contents();
        oldNodes.replaceWith(nodes1269);
      }));
      callback(root1574); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1268;
      nodes1268 = node.contents();
      oldNodes.replaceWith(nodes1268);
    }));
    callback(root1565); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1259;
    nodes1259 = node.contents();
    oldNodes.replaceWith(nodes1259);
  }));
  callback(root1562); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root1576 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1270 = $("<span>");
  root1576.append(nodes1270);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1577 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1169 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1168 = mobl.ref(result__);
    
    var nodes1271 = $("<span>");
    root1577.append(nodes1271);
    subs__.addSub((ui.backButton)(tmp1168, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1169, function(_, callback) {
      var root1578 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1578); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1271;
      nodes1271 = node.contents();
      oldNodes.replaceWith(nodes1271);
    }));
    callback(root1577); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1270;
    nodes1270 = node.contents();
    oldNodes.replaceWith(nodes1270);
  }));
  var nodes1272 = $("<span>");
  root1576.append(nodes1272);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1579 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(28, function(result__) {
                       var tmp1252 = result__;
                       var result__ = mobl.alert("Integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1170 = mobl.ref(result__);
    
    var nodes1273 = $("<span>");
    root1579.append(nodes1273);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1170, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1580 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1274 = $("<span>");
      root1580.append(nodes1274);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1581 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1581); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1274;
        nodes1274 = node.contents();
        oldNodes.replaceWith(nodes1274);
      }));
      callback(root1580); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1273;
      nodes1273 = node.contents();
      oldNodes.replaceWith(nodes1273);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(3, function(result__) {
                       var tmp1251 = result__;
                       var result__ = mobl.alert("Polynomial integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1171 = mobl.ref(result__);
    
    var nodes1275 = $("<span>");
    root1579.append(nodes1275);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1171, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1582 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1276 = $("<span>");
      root1582.append(nodes1276);
      subs__.addSub((mobl.label)(mobl.ref("+Polynomial integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1583 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1583); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1276;
        nodes1276 = node.contents();
        oldNodes.replaceWith(nodes1276);
      }));
      callback(root1582); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1275;
      nodes1275 = node.contents();
      oldNodes.replaceWith(nodes1275);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(4, function(result__) {
                       var tmp1250 = result__;
                       var result__ = mobl.alert("Trig integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1172 = mobl.ref(result__);
    
    var nodes1277 = $("<span>");
    root1579.append(nodes1277);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1172, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1584 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1278 = $("<span>");
      root1584.append(nodes1278);
      subs__.addSub((mobl.label)(mobl.ref("+Trig integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1585 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1585); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1278;
        nodes1278 = node.contents();
        oldNodes.replaceWith(nodes1278);
      }));
      callback(root1584); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1277;
      nodes1277 = node.contents();
      oldNodes.replaceWith(nodes1277);
    }));
    callback(root1579); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1272;
    nodes1272 = node.contents();
    oldNodes.replaceWith(nodes1272);
  }));
  callback(root1576); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root1586 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1279 = $("<span>");
  root1586.append(nodes1279);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1587 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1174 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1173 = mobl.ref(result__);
    
    var nodes1280 = $("<span>");
    root1587.append(nodes1280);
    subs__.addSub((ui.backButton)(tmp1173, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1174, function(_, callback) {
      var root1588 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1588); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1280;
      nodes1280 = node.contents();
      oldNodes.replaceWith(nodes1280);
    }));
    callback(root1587); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1279;
    nodes1279 = node.contents();
    oldNodes.replaceWith(nodes1279);
  }));
  var nodes1281 = $("<span>");
  root1586.append(nodes1281);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1589 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(29, function(result__) {
                       var tmp1253 = result__;
                       var result__ = mobl.alert("Differential equations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1175 = mobl.ref(result__);
    
    var nodes1282 = $("<span>");
    root1589.append(nodes1282);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1175, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1590 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1283 = $("<span>");
      root1590.append(nodes1283);
      subs__.addSub((mobl.label)(mobl.ref("+Diff equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1591 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1591); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1283;
        nodes1283 = node.contents();
        oldNodes.replaceWith(nodes1283);
      }));
      callback(root1590); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1282;
      nodes1282 = node.contents();
      oldNodes.replaceWith(nodes1282);
    }));
    callback(root1589); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1281;
    nodes1281 = node.contents();
    oldNodes.replaceWith(nodes1281);
  }));
  callback(root1586); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root1592 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1284 = $("<span>");
  root1592.append(nodes1284);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1593 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F1", function(result__) {
                       var tmp1266 = result__;
                       var result__ = mobl.alert("Complex arithmetic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1176 = mobl.ref(result__);
    
    var nodes1285 = $("<span>");
    root1593.append(nodes1285);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1176, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1594 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1286 = $("<span>");
      root1594.append(nodes1286);
      subs__.addSub((mobl.label)(mobl.ref("+Complex arithmetic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1595 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1595); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1286;
        nodes1286 = node.contents();
        oldNodes.replaceWith(nodes1286);
      }));
      callback(root1594); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1285;
      nodes1285 = node.contents();
      oldNodes.replaceWith(nodes1285);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F2", function(result__) {
                       var tmp1265 = result__;
                       var result__ = mobl.alert("Modulus argument Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1177 = mobl.ref(result__);
    
    var nodes1287 = $("<span>");
    root1593.append(nodes1287);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1177, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1596 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1288 = $("<span>");
      root1596.append(nodes1288);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus argument"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1597 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1597); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1288;
        nodes1288 = node.contents();
        oldNodes.replaceWith(nodes1288);
      }));
      callback(root1596); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1287;
      nodes1287 = node.contents();
      oldNodes.replaceWith(nodes1287);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F3a", function(result__) {
                       var tmp1264 = result__;
                       var result__ = mobl.alert("2nd order DE Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1178 = mobl.ref(result__);
    
    var nodes1289 = $("<span>");
    root1593.append(nodes1289);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1178, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1598 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1290 = $("<span>");
      root1598.append(nodes1290);
      subs__.addSub((mobl.label)(mobl.ref("+2nd order DEs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1599 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1599); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1290;
        nodes1290 = node.contents();
        oldNodes.replaceWith(nodes1290);
      }));
      callback(root1598); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1289;
      nodes1289 = node.contents();
      oldNodes.replaceWith(nodes1289);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F4", function(result__) {
                       var tmp1263 = result__;
                       var result__ = mobl.alert("Rank 2 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1179 = mobl.ref(result__);
    
    var nodes1291 = $("<span>");
    root1593.append(nodes1291);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1179, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1600 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1292 = $("<span>");
      root1600.append(nodes1292);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 2 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1601 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1601); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1292;
        nodes1292 = node.contents();
        oldNodes.replaceWith(nodes1292);
      }));
      callback(root1600); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1291;
      nodes1291 = node.contents();
      oldNodes.replaceWith(nodes1291);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F5", function(result__) {
                       var tmp1262 = result__;
                       var result__ = mobl.alert("Taylor Series Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1180 = mobl.ref(result__);
    
    var nodes1293 = $("<span>");
    root1593.append(nodes1293);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1180, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1602 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1294 = $("<span>");
      root1602.append(nodes1294);
      subs__.addSub((mobl.label)(mobl.ref("+Taylor Series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1603 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1603); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1294;
        nodes1294 = node.contents();
        oldNodes.replaceWith(nodes1294);
      }));
      callback(root1602); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1293;
      nodes1293 = node.contents();
      oldNodes.replaceWith(nodes1293);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F6", function(result__) {
                       var tmp1261 = result__;
                       var result__ = mobl.alert("Polar Coordinates Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1181 = mobl.ref(result__);
    
    var nodes1295 = $("<span>");
    root1593.append(nodes1295);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1181, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1604 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1296 = $("<span>");
      root1604.append(nodes1296);
      subs__.addSub((mobl.label)(mobl.ref("+Polar Coordinates"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1605 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1605); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1296;
        nodes1296 = node.contents();
        oldNodes.replaceWith(nodes1296);
      }));
      callback(root1604); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1295;
      nodes1295 = node.contents();
      oldNodes.replaceWith(nodes1295);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F7", function(result__) {
                       var tmp1260 = result__;
                       var result__ = mobl.alert("Rank 3 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1182 = mobl.ref(result__);
    
    var nodes1297 = $("<span>");
    root1593.append(nodes1297);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1182, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1606 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1298 = $("<span>");
      root1606.append(nodes1298);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 3 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1607 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1607); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1298;
        nodes1298 = node.contents();
        oldNodes.replaceWith(nodes1298);
      }));
      callback(root1606); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1297;
      nodes1297 = node.contents();
      oldNodes.replaceWith(nodes1297);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F8", function(result__) {
                       var tmp1259 = result__;
                       var result__ = mobl.alert("Further vectors added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1183 = mobl.ref(result__);
    
    var nodes1299 = $("<span>");
    root1593.append(nodes1299);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1183, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1608 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1300 = $("<span>");
      root1608.append(nodes1300);
      subs__.addSub((mobl.label)(mobl.ref("+Further vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1609 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1609); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1300;
        nodes1300 = node.contents();
        oldNodes.replaceWith(nodes1300);
      }));
      callback(root1608); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1299;
      nodes1299 = node.contents();
      oldNodes.replaceWith(nodes1299);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F9", function(result__) {
                       var tmp1258 = result__;
                       var result__ = mobl.alert("Newton-Raphson added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1184 = mobl.ref(result__);
    
    var nodes1301 = $("<span>");
    root1593.append(nodes1301);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1184, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1610 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1302 = $("<span>");
      root1610.append(nodes1302);
      subs__.addSub((mobl.label)(mobl.ref("+Newton-Raphson"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1611 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1611); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1302;
        nodes1302 = node.contents();
        oldNodes.replaceWith(nodes1302);
      }));
      callback(root1610); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1301;
      nodes1301 = node.contents();
      oldNodes.replaceWith(nodes1301);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F10", function(result__) {
                       var tmp1257 = result__;
                       var result__ = mobl.alert("Further inequalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1185 = mobl.ref(result__);
    
    var nodes1303 = $("<span>");
    root1593.append(nodes1303);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1185, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1612 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1304 = $("<span>");
      root1612.append(nodes1304);
      subs__.addSub((mobl.label)(mobl.ref("+Further inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1613 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1613); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1304;
        nodes1304 = node.contents();
        oldNodes.replaceWith(nodes1304);
      }));
      callback(root1612); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1303;
      nodes1303 = node.contents();
      oldNodes.replaceWith(nodes1303);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F11", function(result__) {
                       var tmp1256 = result__;
                       var result__ = mobl.alert("Integration by substitution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1186 = mobl.ref(result__);
    
    var nodes1305 = $("<span>");
    root1593.append(nodes1305);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1186, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1614 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1306 = $("<span>");
      root1614.append(nodes1306);
      subs__.addSub((mobl.label)(mobl.ref("+Integration by substitution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1615 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1615); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1306;
        nodes1306 = node.contents();
        oldNodes.replaceWith(nodes1306);
      }));
      callback(root1614); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1305;
      nodes1305 = node.contents();
      oldNodes.replaceWith(nodes1305);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F12", function(result__) {
                       var tmp1255 = result__;
                       var result__ = mobl.alert("Figures of revolution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1187 = mobl.ref(result__);
    
    var nodes1307 = $("<span>");
    root1593.append(nodes1307);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1187, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1616 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1308 = $("<span>");
      root1616.append(nodes1308);
      subs__.addSub((mobl.label)(mobl.ref("+Figures of revolution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1617 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1617); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1308;
        nodes1308 = node.contents();
        oldNodes.replaceWith(nodes1308);
      }));
      callback(root1616); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1307;
      nodes1307 = node.contents();
      oldNodes.replaceWith(nodes1307);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F13", function(result__) {
                       var tmp1254 = result__;
                       var result__ = mobl.alert("Matrix transformations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1188 = mobl.ref(result__);
    
    var nodes1309 = $("<span>");
    root1593.append(nodes1309);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1188, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1618 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1310 = $("<span>");
      root1618.append(nodes1310);
      subs__.addSub((mobl.label)(mobl.ref("+Matrix transformations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1619 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1619); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1310;
        nodes1310 = node.contents();
        oldNodes.replaceWith(nodes1310);
      }));
      callback(root1618); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1309;
      nodes1309 = node.contents();
      oldNodes.replaceWith(nodes1309);
    }));
    callback(root1593); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1284;
    nodes1284 = node.contents();
    oldNodes.replaceWith(nodes1284);
  }));
  callback(root1592); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root1620 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1311 = $("<span>");
  root1620.append(nodes1311);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1621 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S1", function(result__) {
                       var tmp1272 = result__;
                       var result__ = mobl.alert("Discrete Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1189 = mobl.ref(result__);
    
    var nodes1312 = $("<span>");
    root1621.append(nodes1312);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1189, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1622 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1313 = $("<span>");
      root1622.append(nodes1313);
      subs__.addSub((mobl.label)(mobl.ref("+Discrete Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1623 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1623); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1313;
        nodes1313 = node.contents();
        oldNodes.replaceWith(nodes1313);
      }));
      callback(root1622); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1312;
      nodes1312 = node.contents();
      oldNodes.replaceWith(nodes1312);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S2", function(result__) {
                       var tmp1271 = result__;
                       var result__ = mobl.alert("Continuous Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1190 = mobl.ref(result__);
    
    var nodes1314 = $("<span>");
    root1621.append(nodes1314);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1190, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1624 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1315 = $("<span>");
      root1624.append(nodes1315);
      subs__.addSub((mobl.label)(mobl.ref("+Continuous Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1625 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1625); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1315;
        nodes1315 = node.contents();
        oldNodes.replaceWith(nodes1315);
      }));
      callback(root1624); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1314;
      nodes1314 = node.contents();
      oldNodes.replaceWith(nodes1314);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S3", function(result__) {
                       var tmp1270 = result__;
                       var result__ = mobl.alert("Hypothesis Testing Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1191 = mobl.ref(result__);
    
    var nodes1316 = $("<span>");
    root1621.append(nodes1316);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1191, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1626 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1317 = $("<span>");
      root1626.append(nodes1317);
      subs__.addSub((mobl.label)(mobl.ref("+Hypothesis Testing"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1627 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1627); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1317;
        nodes1317 = node.contents();
        oldNodes.replaceWith(nodes1317);
      }));
      callback(root1626); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1316;
      nodes1316 = node.contents();
      oldNodes.replaceWith(nodes1316);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S4", function(result__) {
                       var tmp1269 = result__;
                       var result__ = mobl.alert("Confidence Intervals Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1192 = mobl.ref(result__);
    
    var nodes1318 = $("<span>");
    root1621.append(nodes1318);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1192, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1628 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1319 = $("<span>");
      root1628.append(nodes1319);
      subs__.addSub((mobl.label)(mobl.ref("+Confidence Intervals"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1629 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1629); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1319;
        nodes1319 = node.contents();
        oldNodes.replaceWith(nodes1319);
      }));
      callback(root1628); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1318;
      nodes1318 = node.contents();
      oldNodes.replaceWith(nodes1318);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S5", function(result__) {
                       var tmp1268 = result__;
                       var result__ = mobl.alert("Chi Squared Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1193 = mobl.ref(result__);
    
    var nodes1320 = $("<span>");
    root1621.append(nodes1320);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1193, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1630 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1321 = $("<span>");
      root1630.append(nodes1321);
      subs__.addSub((mobl.label)(mobl.ref("+Chi Squared"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1631 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1631); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1321;
        nodes1321 = node.contents();
        oldNodes.replaceWith(nodes1321);
      }));
      callback(root1630); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1320;
      nodes1320 = node.contents();
      oldNodes.replaceWith(nodes1320);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S6", function(result__) {
                       var tmp1267 = result__;
                       var result__ = mobl.alert("Product Moment Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1194 = mobl.ref(result__);
    
    var nodes1322 = $("<span>");
    root1621.append(nodes1322);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1194, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1632 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1323 = $("<span>");
      root1632.append(nodes1323);
      subs__.addSub((mobl.label)(mobl.ref("+Product Moments"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1633 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1633); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1323;
        nodes1323 = node.contents();
        oldNodes.replaceWith(nodes1323);
      }));
      callback(root1632); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1322;
      nodes1322 = node.contents();
      oldNodes.replaceWith(nodes1322);
    }));
    callback(root1621); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1311;
    nodes1311 = node.contents();
    oldNodes.replaceWith(nodes1311);
  }));
  callback(root1620); return subs__;
  
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
  var root1634 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node355 = $("<div>");
  
  var ref371 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref371.get() !== null) {
    node355.attr('class', ref371.get());
    subs__.addSub(ref371.addEventListener('change', function(_, ref, val) {
      node355.attr('class', val);
    }));
    
  }
  subs__.addSub(ref371.rebind());
  
  var val179 = onclick.get();
  if(val179 !== null) {
    subs__.addSub(mobl.domBind(node355, 'tap', val179));
  }
  
  
  var node356 = $("<div>");
  
  var ref370 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref370.get() !== null) {
    node356.attr('class', ref370.get());
    subs__.addSub(ref370.addEventListener('change', function(_, ref, val) {
      node356.attr('class', val);
    }));
    
  }
  subs__.addSub(ref370.rebind());
  
  
  var node357 = $("<div>");
  
  var ref368 = text;
  node357.text(""+ref368.get());
  var ignore66 = false;
  subs__.addSub(ref368.addEventListener('change', function(_, ref, val) {
    if(ignore66) return;
    node357.text(""+val);
  }));
  subs__.addSub(ref368.rebind());
  
  
  var ref369 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref369.get() !== null) {
    node357.attr('class', ref369.get());
    subs__.addSub(ref369.addEventListener('change', function(_, ref, val) {
      node357.attr('class', val);
    }));
    
  }
  subs__.addSub(ref369.rebind());
  
  node356.append(node357);
  node355.append(node356);
  var nodes1324 = $("<span>");
  node355.append(nodes1324);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl154();
  }));
  
  function renderControl154() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1635 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1635); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1324;
      nodes1324 = node.contents();
      oldNodes.replaceWith(nodes1324);
    }));
  }
  renderControl154();
  root1634.append(node355);
  callback(root1634); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mathJAX.renderMaths(function(result__) {
    var tmp1273 = result__;
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
  var root1636 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   var result__ = qa.get().answer != "%GRAPH%";
                   if(result__) {
                     var result__ = mobl.$("#answer-block-" + number.get()).children("span:first").html();
                     qa.get().answer = result__;
                     if(callback && callback.apply) callback(); return;
                   } else {
                     {
                       if(callback && callback.apply) callback(); return;
                     }
                   }
                 };
  var tmp1198 = mobl.ref(result__);
  
  var result__ = qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle;
  var tmp1197 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    tmp1197.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.agreeStyle).addEventListener('change', function() {
    tmp1197.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.disagreeStyle).addEventListener('change', function() {
    tmp1197.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  
  var nodes1325 = $("<span>");
  root1636.append(nodes1325);
  subs__.addSub((mobl.block)(tmp1197, mobl.ref(null), tmp1198, mobl.ref(null), function(_, callback) {
    var root1637 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = "A" + number.get() + ". ";
    var tmp1195 = mobl.ref(result__);
    subs__.addSub(number.addEventListener('change', function() {
      tmp1195.set("A" + number.get() + ". ");
    }));
    
    var nodes1326 = $("<span>");
    root1637.append(nodes1326);
    subs__.addSub((mobl.label)(tmp1195, mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root1638 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1638); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1326;
      nodes1326 = node.contents();
      oldNodes.replaceWith(nodes1326);
    }));
    var result__ = qa.get().answer != "%GRAPH%";
    var tmp1196 = mobl.ref(result__);
    subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
      tmp1196.set(qa.get().answer != "%GRAPH%");
    }));
    
    
    var node358 = $("<span>");
    root1637.append(node358);
    var condSubs78 = new mobl.CompSubscription();
    subs__.addSub(condSubs78);
    var oldValue78;
    var renderCond78 = function() {
      var value182 = tmp1196.get();
      if(oldValue78 === value182) return;
      oldValue78 = value182;
      var subs__ = condSubs78;
      subs__.unsubscribe();
      node358.empty();
      if(value182) {
        
        var node359 = $("<span>");
        
        var ref372 = mobl.ref("answer-block-" + number.get());
        if(ref372.get() !== null) {
          node359.attr('id', ref372.get());
          subs__.addSub(ref372.addEventListener('change', function(_, ref, val) {
            node359.attr('id', val);
          }));
          subs__.addSub(number.addEventListener('change', function() {
            node359.attr('id', "answer-block-" + number.get());
          }));
          
        }
        subs__.addSub(ref372.rebind());
        
        var nodes1327 = $("<span>");
        node359.append(nodes1327);
        subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
          var root1639 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1639); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1327;
          nodes1327 = node.contents();
          oldNodes.replaceWith(nodes1327);
        }));
        node358.append(node359);
        
        
        
      } else {
        var nodes1328 = $("<span>");
        node358.append(nodes1328);
        subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
          var root1640 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1640); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1328;
          nodes1328 = node.contents();
          oldNodes.replaceWith(nodes1328);
        }));
        
        
      }
    };
    renderCond78();
    subs__.addSub(tmp1196.addEventListener('change', function() {
      renderCond78();
    }));
    
    callback(root1637); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1325;
    nodes1325 = node.contents();
    oldNodes.replaceWith(nodes1325);
  }));
  var nodes1329 = $("<span>");
  root1636.append(nodes1329);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root1641 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node360 = $("<span>");
    node360.attr('style', "display:none");
    
    nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
      var tmp1275 = result__;
      var tmp1199 = mobl.ref(result__);
      subs__.addSub(qa.addEventListener('change', function() {
        nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
          var tmp1274 = result__;
          var result__ = tmp1274;
          tmp1199.set(result__);
          
        });
      }));
      
      var nodes1333 = $("<span>");
      node360.append(nodes1333);
      subs__.addSub((mobl.html)(tmp1199, function(_, callback) {
        var root1645 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1645); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1333;
        nodes1333 = node.contents();
        oldNodes.replaceWith(nodes1333);
      }));
      root1641.append(node360);
      var nodes1330 = $("<span>");
      root1641.append(nodes1330);
      subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1642 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1642); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1330;
        nodes1330 = node.contents();
        oldNodes.replaceWith(nodes1330);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = true;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp1200 = mobl.ref(result__);
      
      var nodes1331 = $("<span>");
      root1641.append(nodes1331);
      subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp1200, function(_, callback) {
        var root1643 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1643); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1331;
        nodes1331 = node.contents();
        oldNodes.replaceWith(nodes1331);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = false;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp1201 = mobl.ref(result__);
      
      var nodes1332 = $("<span>");
      root1641.append(nodes1332);
      subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp1201, function(_, callback) {
        var root1644 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1644); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1332;
        nodes1332 = node.contents();
        oldNodes.replaceWith(nodes1332);
      }));
      callback(root1641); return subs__;
      
      
      
      
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1329;
    nodes1329 = node.contents();
    oldNodes.replaceWith(nodes1329);
  }));
  callback(root1636); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp1276 = result__;
    var result__ = tmp1276;
    var qa2 = result__;
    var result__ = qa2 == null;
    if(result__) {
      nrichRPG.questionAnswer.QA.all().one(function(result__) {
        var tmp1277 = result__;
        var result__ = tmp1277;
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
  var root1646 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp1285 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp1203 = mobl.ref(result__);
  
  var nodes1334 = $("<span>");
  root1646.append(nodes1334);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(mobl.ref(qa, 'topic'), tmp1203, function(_, callback) {
    var root1647 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp1278 = result__;
                       var result__ = tmp1278;
                       var qa2 = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp1279 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp1202 = mobl.ref(result__);
    
    var nodes1335 = $("<span>");
    root1647.append(nodes1335);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp1202, function(_, callback) {
      var root1648 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1648); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1335;
      nodes1335 = node.contents();
      oldNodes.replaceWith(nodes1335);
    }));
    callback(root1647); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1334;
    nodes1334 = node.contents();
    oldNodes.replaceWith(nodes1334);
  }));
  var nodes1336 = $("<span>");
  root1646.append(nodes1336);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1649 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp1284 = result__;
                       var result__ = mobl.$("#question-block-" + number.get()).children("span:first").html();
                       qa.get().question = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1206 = mobl.ref(result__);
    
    var nodes1337 = $("<span>");
    root1649.append(nodes1337);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp1206, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root1650 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + number.get() + ". ";
      var tmp1204 = mobl.ref(result__);
      subs__.addSub(number.addEventListener('change', function() {
        tmp1204.set("Q" + number.get() + ". ");
      }));
      
      var nodes1338 = $("<span>");
      root1650.append(nodes1338);
      subs__.addSub((mobl.html)(tmp1204, function(_, callback) {
        var root1651 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1651); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1338;
        nodes1338 = node.contents();
        oldNodes.replaceWith(nodes1338);
      }));
      
      var node361 = $("<span>");
      
      var ref373 = mobl.ref("question-block-" + number.get());
      if(ref373.get() !== null) {
        node361.attr('id', ref373.get());
        subs__.addSub(ref373.addEventListener('change', function(_, ref, val) {
          node361.attr('id', val);
        }));
        subs__.addSub(number.addEventListener('change', function() {
          node361.attr('id', "question-block-" + number.get());
        }));
        
      }
      subs__.addSub(ref373.rebind());
      
      var nodes1340 = $("<span>");
      node361.append(nodes1340);
      subs__.addSub((mobl.html)(mobl.ref(qa, 'question'), function(_, callback) {
        var root1653 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1653); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1340;
        nodes1340 = node.contents();
        oldNodes.replaceWith(nodes1340);
      }));
      root1650.append(node361);
      
      var node362 = $("<span>");
      node362.attr('style', "display:none");
      
      nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
        var tmp1281 = result__;
        var tmp1205 = mobl.ref(result__);
        subs__.addSub(qa.addEventListener('change', function() {
          nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
            var tmp1280 = result__;
            var result__ = tmp1280;
            tmp1205.set(result__);
            
          });
        }));
        
        var nodes1339 = $("<span>");
        node362.append(nodes1339);
        subs__.addSub((mobl.html)(tmp1205, function(_, callback) {
          var root1652 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1652); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1339;
          nodes1339 = node.contents();
          oldNodes.replaceWith(nodes1339);
        }));
        root1650.append(node362);
        callback(root1650); return subs__;
        
      });
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1337;
      nodes1337 = node.contents();
      oldNodes.replaceWith(nodes1337);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp1283 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1208 = mobl.ref(result__);
    
    var nodes1341 = $("<span>");
    root1649.append(nodes1341);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1208, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root1654 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1342 = $("<span>");
      root1654.append(nodes1342);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1655 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                           var tmp1282 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp1207 = mobl.ref(result__);
        
        var nodes1343 = $("<span>");
        root1655.append(nodes1343);
        subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp1207, function(_, callback) {
          var root1656 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1656); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1343;
          nodes1343 = node.contents();
          oldNodes.replaceWith(nodes1343);
        }));
        callback(root1655); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1342;
        nodes1342 = node.contents();
        oldNodes.replaceWith(nodes1342);
      }));
      
      var node363 = $("<span>");
      root1654.append(node363);
      var condSubs79 = new mobl.CompSubscription();
      subs__.addSub(condSubs79);
      var oldValue79;
      var renderCond79 = function() {
        var value183 = qa.get().done;
        if(oldValue79 === value183) return;
        oldValue79 = value183;
        var subs__ = condSubs79;
        subs__.unsubscribe();
        node363.empty();
        if(value183) {
          var nodes1344 = $("<span>");
          node363.append(nodes1344);
          subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, number, function(_, callback) {
            var root1657 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root1657); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes1344;
            nodes1344 = node.contents();
            oldNodes.replaceWith(nodes1344);
          }));
          
          
        } else {
          
        }
      };
      renderCond79();
      subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
        renderCond79();
      }));
      
      callback(root1654); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1341;
      nodes1341 = node.contents();
      oldNodes.replaceWith(nodes1341);
    }));
    callback(root1649); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1336;
    nodes1336 = node.contents();
    oldNodes.replaceWith(nodes1336);
  }));
  callback(root1646); return subs__;
  
  
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
  qas.list(function(coll198) {
    coll198 = coll198.reverse();
    function processOne42() {
      var item;
      item = coll198.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll198.length > 0) processOne42(); else rest42();
      
    }
    function rest42() {
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
    if(coll198.length > 0) processOne42(); else rest42();
  });
  
};

nrichRPG.coreWorkout.makeQAStar = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll199) {
    coll199 = coll199.reverse();
    function processOne43() {
      var item;
      item = coll199.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll199.length > 0) processOne43(); else rest43();
      
    }
    function rest43() {
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
    if(coll199.length > 0) processOne43(); else rest43();
  });
  
};

nrichRPG.coreWorkout.makeQAStats = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll200) {
    coll200 = coll200.reverse();
    function processOne44() {
      var item;
      item = coll200.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll200.length > 0) processOne44(); else rest44();
      
    }
    function rest44() {
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
    if(coll200.length > 0) processOne44(); else rest44();
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