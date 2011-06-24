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
    var tmp1203 = result__;
    var result__ = tmp1203;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp1204 = result__;
      var result__ = tmp1204;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp1205 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicId, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll69) {
    coll69 = coll69.reverse();
    function processOne39() {
      var i;
      i = coll69.pop();
      nrichRPG.coreWorkout.makeQA(topicId, function(result__) {
        var tmp1206 = result__;
        
        if(coll69.length > 0) processOne39(); else rest39();
        
      });
    }
    function rest39() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll69.length > 0) processOne39(); else rest39();
  });
  
};

nrichRPG.coreWorkout.randomQStar = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll70) {
    coll70 = coll70.reverse();
    function processOne40() {
      var i;
      i = coll70.pop();
      var result__ = mobl.Math.floor(13 * mobl.Math.random());
      var r = result__;
      var result__ = "F" + (1 + r);
      var tid = result__;
      var result__ = tid == "F3";
      if(result__) {
        var result__ = "F3a";
        tid = result__;
        nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
          var tmp1207 = result__;
          
          if(coll70.length > 0) processOne40(); else rest40();
          
        });
      } else {
        {
          nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
            var tmp1207 = result__;
            
            if(coll70.length > 0) processOne40(); else rest40();
            
          });
        }
      }
    }
    function rest40() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll70.length > 0) processOne40(); else rest40();
  });
  
};

nrichRPG.coreWorkout.randomQStats = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll71) {
    coll71 = coll71.reverse();
    function processOne41() {
      var i;
      i = coll71.pop();
      var result__ = mobl.Math.floor(6 * mobl.Math.random());
      var r = result__;
      var result__ = "S" + (1 + r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
        var tmp1208 = result__;
        
        if(coll71.length > 0) processOne41(); else rest41();
        
      });
    }
    function rest41() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll71.length > 0) processOne41(); else rest41();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root1211 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1089 = $("<span>");
  root1211.append(nodes1089);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1212 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1216 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1113 = mobl.ref(result__);
    
    var nodes1090 = $("<span>");
    root1212.append(nodes1090);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1113, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1213 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1091 = $("<span>");
      root1213.append(nodes1091);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1214 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1214); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1091;
        nodes1091 = node.contents();
        oldNodes.replaceWith(nodes1091);
      }));
      callback(root1213); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1090;
      nodes1090 = node.contents();
      oldNodes.replaceWith(nodes1090);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1215 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1114 = mobl.ref(result__);
    
    var nodes1092 = $("<span>");
    root1212.append(nodes1092);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1114, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1215 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1093 = $("<span>");
      root1215.append(nodes1093);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1216 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1216); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1093;
        nodes1093 = node.contents();
        oldNodes.replaceWith(nodes1093);
      }));
      callback(root1215); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1092;
      nodes1092 = node.contents();
      oldNodes.replaceWith(nodes1092);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1214 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1115 = mobl.ref(result__);
    
    var nodes1094 = $("<span>");
    root1212.append(nodes1094);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1115, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1217 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1095 = $("<span>");
      root1217.append(nodes1095);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1218 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1218); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1095;
        nodes1095 = node.contents();
        oldNodes.replaceWith(nodes1095);
      }));
      callback(root1217); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1094;
      nodes1094 = node.contents();
      oldNodes.replaceWith(nodes1094);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1213 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1116 = mobl.ref(result__);
    
    var nodes1096 = $("<span>");
    root1212.append(nodes1096);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1116, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1219 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1097 = $("<span>");
      root1219.append(nodes1097);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1220 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1220); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1097;
        nodes1097 = node.contents();
        oldNodes.replaceWith(nodes1097);
      }));
      callback(root1219); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1096;
      nodes1096 = node.contents();
      oldNodes.replaceWith(nodes1096);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1212 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1117 = mobl.ref(result__);
    
    var nodes1098 = $("<span>");
    root1212.append(nodes1098);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1117, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1221 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1099 = $("<span>");
      root1221.append(nodes1099);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1222 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1222); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1099;
        nodes1099 = node.contents();
        oldNodes.replaceWith(nodes1099);
      }));
      callback(root1221); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1098;
      nodes1098 = node.contents();
      oldNodes.replaceWith(nodes1098);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1211 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1118 = mobl.ref(result__);
    
    var nodes1100 = $("<span>");
    root1212.append(nodes1100);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1118, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1223 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1101 = $("<span>");
      root1223.append(nodes1101);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1224 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1224); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1101;
        nodes1101 = node.contents();
        oldNodes.replaceWith(nodes1101);
      }));
      callback(root1223); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1100;
      nodes1100 = node.contents();
      oldNodes.replaceWith(nodes1100);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1210 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1119 = mobl.ref(result__);
    
    var nodes1102 = $("<span>");
    root1212.append(nodes1102);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1119, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1225 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1103 = $("<span>");
      root1225.append(nodes1103);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1226 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1226); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1103;
        nodes1103 = node.contents();
        oldNodes.replaceWith(nodes1103);
      }));
      callback(root1225); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1102;
      nodes1102 = node.contents();
      oldNodes.replaceWith(nodes1102);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1209 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1120 = mobl.ref(result__);
    
    var nodes1104 = $("<span>");
    root1212.append(nodes1104);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1120, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1227 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1105 = $("<span>");
      root1227.append(nodes1105);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1228 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1228); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1105;
        nodes1105 = node.contents();
        oldNodes.replaceWith(nodes1105);
      }));
      callback(root1227); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1104;
      nodes1104 = node.contents();
      oldNodes.replaceWith(nodes1104);
    }));
    callback(root1212); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1089;
    nodes1089 = node.contents();
    oldNodes.replaceWith(nodes1089);
  }));
  callback(root1211); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root1229 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes1106 = $("<span>");
  root1229.append(nodes1106);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1230 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1122 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1121 = mobl.ref(result__);
    
    var nodes1107 = $("<span>");
    root1230.append(nodes1107);
    subs__.addSub((ui.backButton)(tmp1121, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1122, function(_, callback) {
      var root1231 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1231); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1107;
      nodes1107 = node.contents();
      oldNodes.replaceWith(nodes1107);
    }));
    callback(root1230); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1106;
    nodes1106 = node.contents();
    oldNodes.replaceWith(nodes1106);
  }));
  var nodes1108 = $("<span>");
  root1229.append(nodes1108);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1232 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(10, function(result__) {
                       var tmp1224 = result__;
                       var result__ = mobl.alert("Quadratic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1123 = mobl.ref(result__);
    
    var nodes1109 = $("<span>");
    root1232.append(nodes1109);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1123, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1233 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1110 = $("<span>");
      root1233.append(nodes1110);
      subs__.addSub((mobl.label)(mobl.ref("+Quadratic equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1234 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1234); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1110;
        nodes1110 = node.contents();
        oldNodes.replaceWith(nodes1110);
      }));
      callback(root1233); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1109;
      nodes1109 = node.contents();
      oldNodes.replaceWith(nodes1109);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(11, function(result__) {
                       var tmp1223 = result__;
                       var result__ = mobl.alert("Completing the Square Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1124 = mobl.ref(result__);
    
    var nodes1111 = $("<span>");
    root1232.append(nodes1111);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1124, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1235 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1112 = $("<span>");
      root1235.append(nodes1112);
      subs__.addSub((mobl.label)(mobl.ref("+Completing the square"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1236 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1236); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1112;
        nodes1112 = node.contents();
        oldNodes.replaceWith(nodes1112);
      }));
      callback(root1235); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1111;
      nodes1111 = node.contents();
      oldNodes.replaceWith(nodes1111);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(7, function(result__) {
                       var tmp1222 = result__;
                       var result__ = mobl.alert("Ineqalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1125 = mobl.ref(result__);
    
    var nodes1113 = $("<span>");
    root1232.append(nodes1113);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1125, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1237 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1114 = $("<span>");
      root1237.append(nodes1114);
      subs__.addSub((mobl.label)(mobl.ref("+Inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1238 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1238); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1114;
        nodes1114 = node.contents();
        oldNodes.replaceWith(nodes1114);
      }));
      callback(root1237); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1113;
      nodes1113 = node.contents();
      oldNodes.replaceWith(nodes1113);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(9, function(result__) {
                       var tmp1221 = result__;
                       var result__ = mobl.alert("Factor theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1126 = mobl.ref(result__);
    
    var nodes1115 = $("<span>");
    root1232.append(nodes1115);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1126, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1239 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1116 = $("<span>");
      root1239.append(nodes1116);
      subs__.addSub((mobl.label)(mobl.ref("+Factor theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1240 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1240); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1116;
        nodes1116 = node.contents();
        oldNodes.replaceWith(nodes1116);
      }));
      callback(root1239); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1115;
      nodes1115 = node.contents();
      oldNodes.replaceWith(nodes1115);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(1, function(result__) {
                       var tmp1220 = result__;
                       var result__ = mobl.alert("Partial fraction Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1127 = mobl.ref(result__);
    
    var nodes1117 = $("<span>");
    root1232.append(nodes1117);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1127, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1241 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1118 = $("<span>");
      root1241.append(nodes1118);
      subs__.addSub((mobl.label)(mobl.ref("+Partial fractions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1242 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1242); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1118;
        nodes1118 = node.contents();
        oldNodes.replaceWith(nodes1118);
      }));
      callback(root1241); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1117;
      nodes1117 = node.contents();
      oldNodes.replaceWith(nodes1117);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(30, function(result__) {
                       var tmp1219 = result__;
                       var result__ = mobl.alert("Powers Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1128 = mobl.ref(result__);
    
    var nodes1119 = $("<span>");
    root1232.append(nodes1119);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1128, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1243 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1120 = $("<span>");
      root1243.append(nodes1120);
      subs__.addSub((mobl.label)(mobl.ref("+Powers"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1244 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1244); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1120;
        nodes1120 = node.contents();
        oldNodes.replaceWith(nodes1120);
      }));
      callback(root1243); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1119;
      nodes1119 = node.contents();
      oldNodes.replaceWith(nodes1119);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(13, function(result__) {
                       var tmp1218 = result__;
                       var result__ = mobl.alert("Logarithm Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1129 = mobl.ref(result__);
    
    var nodes1121 = $("<span>");
    root1232.append(nodes1121);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1129, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1245 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1122 = $("<span>");
      root1245.append(nodes1122);
      subs__.addSub((mobl.label)(mobl.ref("+Logarithms"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1246 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1246); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1122;
        nodes1122 = node.contents();
        oldNodes.replaceWith(nodes1122);
      }));
      callback(root1245); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1121;
      nodes1121 = node.contents();
      oldNodes.replaceWith(nodes1121);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(17, function(result__) {
                       var tmp1217 = result__;
                       var result__ = mobl.alert("Trig equation Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1130 = mobl.ref(result__);
    
    var nodes1123 = $("<span>");
    root1232.append(nodes1123);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1130, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1247 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1124 = $("<span>");
      root1247.append(nodes1124);
      subs__.addSub((mobl.label)(mobl.ref("+Trig equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1248 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1248); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1124;
        nodes1124 = node.contents();
        oldNodes.replaceWith(nodes1124);
      }));
      callback(root1247); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1123;
      nodes1123 = node.contents();
      oldNodes.replaceWith(nodes1123);
    }));
    callback(root1232); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1108;
    nodes1108 = node.contents();
    oldNodes.replaceWith(nodes1108);
  }));
  callback(root1229); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root1249 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1125 = $("<span>");
  root1249.append(nodes1125);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1250 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1132 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1131 = mobl.ref(result__);
    
    var nodes1126 = $("<span>");
    root1250.append(nodes1126);
    subs__.addSub((ui.backButton)(tmp1131, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1132, function(_, callback) {
      var root1251 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1251); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1126;
      nodes1126 = node.contents();
      oldNodes.replaceWith(nodes1126);
    }));
    callback(root1250); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1125;
    nodes1125 = node.contents();
    oldNodes.replaceWith(nodes1125);
  }));
  var nodes1127 = $("<span>");
  root1249.append(nodes1127);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1252 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(24, function(result__) {
                       var tmp1229 = result__;
                       var result__ = mobl.alert("Modulus Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1133 = mobl.ref(result__);
    
    var nodes1128 = $("<span>");
    root1252.append(nodes1128);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1133, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1253 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1129 = $("<span>");
      root1253.append(nodes1129);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus function"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1254 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1254); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1129;
        nodes1129 = node.contents();
        oldNodes.replaceWith(nodes1129);
      }));
      callback(root1253); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1128;
      nodes1128 = node.contents();
      oldNodes.replaceWith(nodes1128);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(25, function(result__) {
                       var tmp1228 = result__;
                       var result__ = mobl.alert("Transformations of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1134 = mobl.ref(result__);
    
    var nodes1130 = $("<span>");
    root1252.append(nodes1130);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1134, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1255 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1131 = $("<span>");
      root1255.append(nodes1131);
      subs__.addSub((mobl.label)(mobl.ref("+Transformations of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1256 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1256); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1131;
        nodes1131 = node.contents();
        oldNodes.replaceWith(nodes1131);
      }));
      callback(root1255); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1130;
      nodes1130 = node.contents();
      oldNodes.replaceWith(nodes1130);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(26, function(result__) {
                       var tmp1227 = result__;
                       var result__ = mobl.alert("Composition of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1135 = mobl.ref(result__);
    
    var nodes1132 = $("<span>");
    root1252.append(nodes1132);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1135, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1257 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1133 = $("<span>");
      root1257.append(nodes1133);
      subs__.addSub((mobl.label)(mobl.ref("+Composition of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1258 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1258); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1133;
        nodes1133 = node.contents();
        oldNodes.replaceWith(nodes1133);
      }));
      callback(root1257); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1132;
      nodes1132 = node.contents();
      oldNodes.replaceWith(nodes1132);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(270, function(result__) {
                       var tmp1226 = result__;
                       var result__ = mobl.alert("Implicit functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1136 = mobl.ref(result__);
    
    var nodes1134 = $("<span>");
    root1252.append(nodes1134);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1136, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1259 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1135 = $("<span>");
      root1259.append(nodes1135);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1260 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1260); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1135;
        nodes1135 = node.contents();
        oldNodes.replaceWith(nodes1135);
      }));
      callback(root1259); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1134;
      nodes1134 = node.contents();
      oldNodes.replaceWith(nodes1134);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(27, function(result__) {
                       var tmp1225 = result__;
                       var result__ = mobl.alert("Parametric functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1137 = mobl.ref(result__);
    
    var nodes1136 = $("<span>");
    root1252.append(nodes1136);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1137, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1261 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1137 = $("<span>");
      root1261.append(nodes1137);
      subs__.addSub((mobl.label)(mobl.ref("+Parametric functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1262 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1262); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1137;
        nodes1137 = node.contents();
        oldNodes.replaceWith(nodes1137);
      }));
      callback(root1261); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1136;
      nodes1136 = node.contents();
      oldNodes.replaceWith(nodes1136);
    }));
    callback(root1252); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1127;
    nodes1127 = node.contents();
    oldNodes.replaceWith(nodes1127);
  }));
  callback(root1249); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root1263 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1138 = $("<span>");
  root1263.append(nodes1138);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1264 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1139 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1138 = mobl.ref(result__);
    
    var nodes1139 = $("<span>");
    root1264.append(nodes1139);
    subs__.addSub((ui.backButton)(tmp1138, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1139, function(_, callback) {
      var root1265 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1265); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1139;
      nodes1139 = node.contents();
      oldNodes.replaceWith(nodes1139);
    }));
    callback(root1264); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1138;
    nodes1138 = node.contents();
    oldNodes.replaceWith(nodes1138);
  }));
  var nodes1140 = $("<span>");
  root1263.append(nodes1140);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1266 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(15, function(result__) {
                       var tmp1232 = result__;
                       var result__ = mobl.alert("Triangles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1140 = mobl.ref(result__);
    
    var nodes1141 = $("<span>");
    root1266.append(nodes1141);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1140, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1267 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1142 = $("<span>");
      root1267.append(nodes1142);
      subs__.addSub((mobl.label)(mobl.ref("+Triangles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1268 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1268); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1142;
        nodes1142 = node.contents();
        oldNodes.replaceWith(nodes1142);
      }));
      callback(root1267); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1141;
      nodes1141 = node.contents();
      oldNodes.replaceWith(nodes1141);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(16, function(result__) {
                       var tmp1231 = result__;
                       var result__ = mobl.alert("Circles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1141 = mobl.ref(result__);
    
    var nodes1143 = $("<span>");
    root1266.append(nodes1143);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1141, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1269 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1144 = $("<span>");
      root1269.append(nodes1144);
      subs__.addSub((mobl.label)(mobl.ref("+Circles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1270 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1270); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1144;
        nodes1144 = node.contents();
        oldNodes.replaceWith(nodes1144);
      }));
      callback(root1269); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1143;
      nodes1143 = node.contents();
      oldNodes.replaceWith(nodes1143);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(6, function(result__) {
                       var tmp1230 = result__;
                       var result__ = mobl.alert("3D lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1142 = mobl.ref(result__);
    
    var nodes1145 = $("<span>");
    root1266.append(nodes1145);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1142, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1271 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1146 = $("<span>");
      root1271.append(nodes1146);
      subs__.addSub((mobl.label)(mobl.ref("+ 3D lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1272 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1272); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1146;
        nodes1146 = node.contents();
        oldNodes.replaceWith(nodes1146);
      }));
      callback(root1271); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1145;
      nodes1145 = node.contents();
      oldNodes.replaceWith(nodes1145);
    }));
    callback(root1266); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1140;
    nodes1140 = node.contents();
    oldNodes.replaceWith(nodes1140);
  }));
  callback(root1263); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root1273 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1147 = $("<span>");
  root1273.append(nodes1147);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1274 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1144 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1143 = mobl.ref(result__);
    
    var nodes1148 = $("<span>");
    root1274.append(nodes1148);
    subs__.addSub((ui.backButton)(tmp1143, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1144, function(_, callback) {
      var root1275 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1275); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1148;
      nodes1148 = node.contents();
      oldNodes.replaceWith(nodes1148);
    }));
    callback(root1274); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1147;
    nodes1147 = node.contents();
    oldNodes.replaceWith(nodes1147);
  }));
  var nodes1149 = $("<span>");
  root1273.append(nodes1149);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1276 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(8, function(result__) {
                       var tmp1236 = result__;
                       var result__ = mobl.alert("Arithmetic Progressions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1145 = mobl.ref(result__);
    
    var nodes1150 = $("<span>");
    root1276.append(nodes1150);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1145, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1277 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1151 = $("<span>");
      root1277.append(nodes1151);
      subs__.addSub((mobl.label)(mobl.ref("+Arithmetic progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1278 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1278); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1151;
        nodes1151 = node.contents();
        oldNodes.replaceWith(nodes1151);
      }));
      callback(root1277); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1150;
      nodes1150 = node.contents();
      oldNodes.replaceWith(nodes1150);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(12, function(result__) {
                       var tmp1235 = result__;
                       var result__ = mobl.alert("Binomial Expansion Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1146 = mobl.ref(result__);
    
    var nodes1152 = $("<span>");
    root1276.append(nodes1152);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1146, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1279 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1153 = $("<span>");
      root1279.append(nodes1153);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial expansion"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1280 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1280); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1153;
        nodes1153 = node.contents();
        oldNodes.replaceWith(nodes1153);
      }));
      callback(root1279); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1152;
      nodes1152 = node.contents();
      oldNodes.replaceWith(nodes1152);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(23, function(result__) {
                       var tmp1234 = result__;
                       var result__ = mobl.alert("Geometric Progression Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1147 = mobl.ref(result__);
    
    var nodes1154 = $("<span>");
    root1276.append(nodes1154);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1147, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1281 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1155 = $("<span>");
      root1281.append(nodes1155);
      subs__.addSub((mobl.label)(mobl.ref("+Geometric progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1282 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1282); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1155;
        nodes1155 = node.contents();
        oldNodes.replaceWith(nodes1155);
      }));
      callback(root1281); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1154;
      nodes1154 = node.contents();
      oldNodes.replaceWith(nodes1154);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(2, function(result__) {
                       var tmp1233 = result__;
                       var result__ = mobl.alert("Binomial theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1148 = mobl.ref(result__);
    
    var nodes1156 = $("<span>");
    root1276.append(nodes1156);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1148, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1283 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1157 = $("<span>");
      root1283.append(nodes1157);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1284 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1284); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1157;
        nodes1157 = node.contents();
        oldNodes.replaceWith(nodes1157);
      }));
      callback(root1283); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1156;
      nodes1156 = node.contents();
      oldNodes.replaceWith(nodes1156);
    }));
    callback(root1276); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1149;
    nodes1149 = node.contents();
    oldNodes.replaceWith(nodes1149);
  }));
  callback(root1273); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root1285 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1158 = $("<span>");
  root1285.append(nodes1158);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1286 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1150 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1149 = mobl.ref(result__);
    
    var nodes1159 = $("<span>");
    root1286.append(nodes1159);
    subs__.addSub((ui.backButton)(tmp1149, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1150, function(_, callback) {
      var root1287 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1287); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1159;
      nodes1159 = node.contents();
      oldNodes.replaceWith(nodes1159);
    }));
    callback(root1286); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1158;
    nodes1158 = node.contents();
    oldNodes.replaceWith(nodes1158);
  }));
  var nodes1160 = $("<span>");
  root1285.append(nodes1160);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1288 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(5, function(result__) {
                       var tmp1238 = result__;
                       var result__ = mobl.alert("Scalar product Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1151 = mobl.ref(result__);
    
    var nodes1161 = $("<span>");
    root1288.append(nodes1161);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1151, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1289 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1162 = $("<span>");
      root1289.append(nodes1162);
      subs__.addSub((mobl.label)(mobl.ref("+Scalar products"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1290 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1290); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1162;
        nodes1162 = node.contents();
        oldNodes.replaceWith(nodes1162);
      }));
      callback(root1289); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1161;
      nodes1161 = node.contents();
      oldNodes.replaceWith(nodes1161);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(18, function(result__) {
                       var tmp1237 = result__;
                       var result__ = mobl.alert("Vector equation of lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1152 = mobl.ref(result__);
    
    var nodes1163 = $("<span>");
    root1288.append(nodes1163);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1152, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1291 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1164 = $("<span>");
      root1291.append(nodes1164);
      subs__.addSub((mobl.label)(mobl.ref("+Vector equation of lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1292 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1292); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1164;
        nodes1164 = node.contents();
        oldNodes.replaceWith(nodes1164);
      }));
      callback(root1291); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1163;
      nodes1163 = node.contents();
      oldNodes.replaceWith(nodes1163);
    }));
    callback(root1288); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1160;
    nodes1160 = node.contents();
    oldNodes.replaceWith(nodes1160);
  }));
  callback(root1285); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root1293 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1165 = $("<span>");
  root1293.append(nodes1165);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1294 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1154 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1153 = mobl.ref(result__);
    
    var nodes1166 = $("<span>");
    root1294.append(nodes1166);
    subs__.addSub((ui.backButton)(tmp1153, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1154, function(_, callback) {
      var root1295 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1295); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1166;
      nodes1166 = node.contents();
      oldNodes.replaceWith(nodes1166);
    }));
    callback(root1294); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1165;
    nodes1165 = node.contents();
    oldNodes.replaceWith(nodes1165);
  }));
  var nodes1167 = $("<span>");
  root1293.append(nodes1167);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1296 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(14, function(result__) {
                       var tmp1243 = result__;
                       var result__ = mobl.alert("Stationary points Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1155 = mobl.ref(result__);
    
    var nodes1168 = $("<span>");
    root1296.append(nodes1168);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1155, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1297 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1169 = $("<span>");
      root1297.append(nodes1169);
      subs__.addSub((mobl.label)(mobl.ref("+Stationary points"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1298 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1298); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1169;
        nodes1169 = node.contents();
        oldNodes.replaceWith(nodes1169);
      }));
      callback(root1297); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1168;
      nodes1168 = node.contents();
      oldNodes.replaceWith(nodes1168);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(20, function(result__) {
                       var tmp1242 = result__;
                       var result__ = mobl.alert("Chain rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1156 = mobl.ref(result__);
    
    var nodes1170 = $("<span>");
    root1296.append(nodes1170);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1156, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1299 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1171 = $("<span>");
      root1299.append(nodes1171);
      subs__.addSub((mobl.label)(mobl.ref("+Chain rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1300 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1300); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1171;
        nodes1171 = node.contents();
        oldNodes.replaceWith(nodes1171);
      }));
      callback(root1299); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1170;
      nodes1170 = node.contents();
      oldNodes.replaceWith(nodes1170);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(21, function(result__) {
                       var tmp1241 = result__;
                       var result__ = mobl.alert("Product rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1157 = mobl.ref(result__);
    
    var nodes1172 = $("<span>");
    root1296.append(nodes1172);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1157, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1301 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1173 = $("<span>");
      root1301.append(nodes1173);
      subs__.addSub((mobl.label)(mobl.ref("+Product rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1302 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1302); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1173;
        nodes1173 = node.contents();
        oldNodes.replaceWith(nodes1173);
      }));
      callback(root1301); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1172;
      nodes1172 = node.contents();
      oldNodes.replaceWith(nodes1172);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(22, function(result__) {
                       var tmp1240 = result__;
                       var result__ = mobl.alert("Quotient rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1158 = mobl.ref(result__);
    
    var nodes1174 = $("<span>");
    root1296.append(nodes1174);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1158, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1303 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1175 = $("<span>");
      root1303.append(nodes1175);
      subs__.addSub((mobl.label)(mobl.ref("+Quotient rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1304 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1304); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1175;
        nodes1175 = node.contents();
        oldNodes.replaceWith(nodes1175);
      }));
      callback(root1303); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1174;
      nodes1174 = node.contents();
      oldNodes.replaceWith(nodes1174);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(19, function(result__) {
                       var tmp1239 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1159 = mobl.ref(result__);
    
    var nodes1176 = $("<span>");
    root1296.append(nodes1176);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1159, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1305 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1177 = $("<span>");
      root1305.append(nodes1177);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1306 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1306); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1177;
        nodes1177 = node.contents();
        oldNodes.replaceWith(nodes1177);
      }));
      callback(root1305); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1176;
      nodes1176 = node.contents();
      oldNodes.replaceWith(nodes1176);
    }));
    callback(root1296); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1167;
    nodes1167 = node.contents();
    oldNodes.replaceWith(nodes1167);
  }));
  callback(root1293); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root1307 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1178 = $("<span>");
  root1307.append(nodes1178);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1308 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1161 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1160 = mobl.ref(result__);
    
    var nodes1179 = $("<span>");
    root1308.append(nodes1179);
    subs__.addSub((ui.backButton)(tmp1160, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1161, function(_, callback) {
      var root1309 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1309); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1179;
      nodes1179 = node.contents();
      oldNodes.replaceWith(nodes1179);
    }));
    callback(root1308); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1178;
    nodes1178 = node.contents();
    oldNodes.replaceWith(nodes1178);
  }));
  var nodes1180 = $("<span>");
  root1307.append(nodes1180);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1310 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(28, function(result__) {
                       var tmp1246 = result__;
                       var result__ = mobl.alert("Integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1162 = mobl.ref(result__);
    
    var nodes1181 = $("<span>");
    root1310.append(nodes1181);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1162, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1311 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1182 = $("<span>");
      root1311.append(nodes1182);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1312 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1312); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1182;
        nodes1182 = node.contents();
        oldNodes.replaceWith(nodes1182);
      }));
      callback(root1311); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1181;
      nodes1181 = node.contents();
      oldNodes.replaceWith(nodes1181);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(3, function(result__) {
                       var tmp1245 = result__;
                       var result__ = mobl.alert("Polynomial integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1163 = mobl.ref(result__);
    
    var nodes1183 = $("<span>");
    root1310.append(nodes1183);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1163, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1313 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1184 = $("<span>");
      root1313.append(nodes1184);
      subs__.addSub((mobl.label)(mobl.ref("+Polynomial integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1314 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1314); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1184;
        nodes1184 = node.contents();
        oldNodes.replaceWith(nodes1184);
      }));
      callback(root1313); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1183;
      nodes1183 = node.contents();
      oldNodes.replaceWith(nodes1183);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(4, function(result__) {
                       var tmp1244 = result__;
                       var result__ = mobl.alert("Trig integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1164 = mobl.ref(result__);
    
    var nodes1185 = $("<span>");
    root1310.append(nodes1185);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1164, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1315 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1186 = $("<span>");
      root1315.append(nodes1186);
      subs__.addSub((mobl.label)(mobl.ref("+Trig integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1316 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1316); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1186;
        nodes1186 = node.contents();
        oldNodes.replaceWith(nodes1186);
      }));
      callback(root1315); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1185;
      nodes1185 = node.contents();
      oldNodes.replaceWith(nodes1185);
    }));
    callback(root1310); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1180;
    nodes1180 = node.contents();
    oldNodes.replaceWith(nodes1180);
  }));
  callback(root1307); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root1317 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1187 = $("<span>");
  root1317.append(nodes1187);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1318 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1166 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1165 = mobl.ref(result__);
    
    var nodes1188 = $("<span>");
    root1318.append(nodes1188);
    subs__.addSub((ui.backButton)(tmp1165, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1166, function(_, callback) {
      var root1319 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1319); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1188;
      nodes1188 = node.contents();
      oldNodes.replaceWith(nodes1188);
    }));
    callback(root1318); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1187;
    nodes1187 = node.contents();
    oldNodes.replaceWith(nodes1187);
  }));
  var nodes1189 = $("<span>");
  root1317.append(nodes1189);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1320 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(29, function(result__) {
                       var tmp1247 = result__;
                       var result__ = mobl.alert("Differential equations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1167 = mobl.ref(result__);
    
    var nodes1190 = $("<span>");
    root1320.append(nodes1190);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1167, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1321 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1191 = $("<span>");
      root1321.append(nodes1191);
      subs__.addSub((mobl.label)(mobl.ref("+Diff equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1322 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1322); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1191;
        nodes1191 = node.contents();
        oldNodes.replaceWith(nodes1191);
      }));
      callback(root1321); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1190;
      nodes1190 = node.contents();
      oldNodes.replaceWith(nodes1190);
    }));
    callback(root1320); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1189;
    nodes1189 = node.contents();
    oldNodes.replaceWith(nodes1189);
  }));
  callback(root1317); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root1323 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1192 = $("<span>");
  root1323.append(nodes1192);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1324 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F1", function(result__) {
                       var tmp1260 = result__;
                       var result__ = mobl.alert("Complex arithmetic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1168 = mobl.ref(result__);
    
    var nodes1193 = $("<span>");
    root1324.append(nodes1193);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1168, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1325 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1194 = $("<span>");
      root1325.append(nodes1194);
      subs__.addSub((mobl.label)(mobl.ref("+Complex arithmetic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1326 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1326); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1194;
        nodes1194 = node.contents();
        oldNodes.replaceWith(nodes1194);
      }));
      callback(root1325); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1193;
      nodes1193 = node.contents();
      oldNodes.replaceWith(nodes1193);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F2", function(result__) {
                       var tmp1259 = result__;
                       var result__ = mobl.alert("Modulus argument Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1169 = mobl.ref(result__);
    
    var nodes1195 = $("<span>");
    root1324.append(nodes1195);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1169, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1327 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1196 = $("<span>");
      root1327.append(nodes1196);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus argument"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1328 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1328); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1196;
        nodes1196 = node.contents();
        oldNodes.replaceWith(nodes1196);
      }));
      callback(root1327); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1195;
      nodes1195 = node.contents();
      oldNodes.replaceWith(nodes1195);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F3a", function(result__) {
                       var tmp1258 = result__;
                       var result__ = mobl.alert("2nd order DE Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1170 = mobl.ref(result__);
    
    var nodes1197 = $("<span>");
    root1324.append(nodes1197);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1170, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1329 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1198 = $("<span>");
      root1329.append(nodes1198);
      subs__.addSub((mobl.label)(mobl.ref("+2nd order DEs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1330 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1330); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1198;
        nodes1198 = node.contents();
        oldNodes.replaceWith(nodes1198);
      }));
      callback(root1329); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1197;
      nodes1197 = node.contents();
      oldNodes.replaceWith(nodes1197);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F4", function(result__) {
                       var tmp1257 = result__;
                       var result__ = mobl.alert("Rank 2 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1171 = mobl.ref(result__);
    
    var nodes1199 = $("<span>");
    root1324.append(nodes1199);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1171, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1331 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1200 = $("<span>");
      root1331.append(nodes1200);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 2 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1332 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1332); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1200;
        nodes1200 = node.contents();
        oldNodes.replaceWith(nodes1200);
      }));
      callback(root1331); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1199;
      nodes1199 = node.contents();
      oldNodes.replaceWith(nodes1199);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F5", function(result__) {
                       var tmp1256 = result__;
                       var result__ = mobl.alert("Taylor Series Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1172 = mobl.ref(result__);
    
    var nodes1201 = $("<span>");
    root1324.append(nodes1201);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1172, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1333 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1202 = $("<span>");
      root1333.append(nodes1202);
      subs__.addSub((mobl.label)(mobl.ref("+Taylor Series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1334 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1334); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1202;
        nodes1202 = node.contents();
        oldNodes.replaceWith(nodes1202);
      }));
      callback(root1333); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1201;
      nodes1201 = node.contents();
      oldNodes.replaceWith(nodes1201);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F6", function(result__) {
                       var tmp1255 = result__;
                       var result__ = mobl.alert("Polar Coordinates Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1173 = mobl.ref(result__);
    
    var nodes1203 = $("<span>");
    root1324.append(nodes1203);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1173, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1335 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1204 = $("<span>");
      root1335.append(nodes1204);
      subs__.addSub((mobl.label)(mobl.ref("+Polar Coordinates"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1336 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1336); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1204;
        nodes1204 = node.contents();
        oldNodes.replaceWith(nodes1204);
      }));
      callback(root1335); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1203;
      nodes1203 = node.contents();
      oldNodes.replaceWith(nodes1203);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F7", function(result__) {
                       var tmp1254 = result__;
                       var result__ = mobl.alert("Rank 3 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1174 = mobl.ref(result__);
    
    var nodes1205 = $("<span>");
    root1324.append(nodes1205);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1174, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1337 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1206 = $("<span>");
      root1337.append(nodes1206);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 3 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1338 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1338); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1206;
        nodes1206 = node.contents();
        oldNodes.replaceWith(nodes1206);
      }));
      callback(root1337); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1205;
      nodes1205 = node.contents();
      oldNodes.replaceWith(nodes1205);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F8", function(result__) {
                       var tmp1253 = result__;
                       var result__ = mobl.alert("Further vectors added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1175 = mobl.ref(result__);
    
    var nodes1207 = $("<span>");
    root1324.append(nodes1207);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1175, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1339 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1208 = $("<span>");
      root1339.append(nodes1208);
      subs__.addSub((mobl.label)(mobl.ref("+Further vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1340 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1340); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1208;
        nodes1208 = node.contents();
        oldNodes.replaceWith(nodes1208);
      }));
      callback(root1339); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1207;
      nodes1207 = node.contents();
      oldNodes.replaceWith(nodes1207);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F9", function(result__) {
                       var tmp1252 = result__;
                       var result__ = mobl.alert("Newton-Raphson added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1176 = mobl.ref(result__);
    
    var nodes1209 = $("<span>");
    root1324.append(nodes1209);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1176, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1341 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1210 = $("<span>");
      root1341.append(nodes1210);
      subs__.addSub((mobl.label)(mobl.ref("+Newton-Raphson"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1342 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1342); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1210;
        nodes1210 = node.contents();
        oldNodes.replaceWith(nodes1210);
      }));
      callback(root1341); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1209;
      nodes1209 = node.contents();
      oldNodes.replaceWith(nodes1209);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F10", function(result__) {
                       var tmp1251 = result__;
                       var result__ = mobl.alert("Further inequalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1177 = mobl.ref(result__);
    
    var nodes1211 = $("<span>");
    root1324.append(nodes1211);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1177, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1343 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1212 = $("<span>");
      root1343.append(nodes1212);
      subs__.addSub((mobl.label)(mobl.ref("+Further inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1344 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1344); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1212;
        nodes1212 = node.contents();
        oldNodes.replaceWith(nodes1212);
      }));
      callback(root1343); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1211;
      nodes1211 = node.contents();
      oldNodes.replaceWith(nodes1211);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F11", function(result__) {
                       var tmp1250 = result__;
                       var result__ = mobl.alert("Integration by substitution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1178 = mobl.ref(result__);
    
    var nodes1213 = $("<span>");
    root1324.append(nodes1213);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1178, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1345 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1214 = $("<span>");
      root1345.append(nodes1214);
      subs__.addSub((mobl.label)(mobl.ref("+Integration by substitution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1346 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1346); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1214;
        nodes1214 = node.contents();
        oldNodes.replaceWith(nodes1214);
      }));
      callback(root1345); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1213;
      nodes1213 = node.contents();
      oldNodes.replaceWith(nodes1213);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F12", function(result__) {
                       var tmp1249 = result__;
                       var result__ = mobl.alert("Figures of revolution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1179 = mobl.ref(result__);
    
    var nodes1215 = $("<span>");
    root1324.append(nodes1215);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1179, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1347 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1216 = $("<span>");
      root1347.append(nodes1216);
      subs__.addSub((mobl.label)(mobl.ref("+Figures of revolution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1348 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1348); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1216;
        nodes1216 = node.contents();
        oldNodes.replaceWith(nodes1216);
      }));
      callback(root1347); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1215;
      nodes1215 = node.contents();
      oldNodes.replaceWith(nodes1215);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F13", function(result__) {
                       var tmp1248 = result__;
                       var result__ = mobl.alert("Matrix transformations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1180 = mobl.ref(result__);
    
    var nodes1217 = $("<span>");
    root1324.append(nodes1217);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1180, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1349 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1218 = $("<span>");
      root1349.append(nodes1218);
      subs__.addSub((mobl.label)(mobl.ref("+Matrix transformations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1350 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1350); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1218;
        nodes1218 = node.contents();
        oldNodes.replaceWith(nodes1218);
      }));
      callback(root1349); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1217;
      nodes1217 = node.contents();
      oldNodes.replaceWith(nodes1217);
    }));
    callback(root1324); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1192;
    nodes1192 = node.contents();
    oldNodes.replaceWith(nodes1192);
  }));
  callback(root1323); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root1351 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1219 = $("<span>");
  root1351.append(nodes1219);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1352 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S1", function(result__) {
                       var tmp1266 = result__;
                       var result__ = mobl.alert("Discrete Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1181 = mobl.ref(result__);
    
    var nodes1220 = $("<span>");
    root1352.append(nodes1220);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1181, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1353 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1221 = $("<span>");
      root1353.append(nodes1221);
      subs__.addSub((mobl.label)(mobl.ref("+Discrete Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1354 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1354); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1221;
        nodes1221 = node.contents();
        oldNodes.replaceWith(nodes1221);
      }));
      callback(root1353); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1220;
      nodes1220 = node.contents();
      oldNodes.replaceWith(nodes1220);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S2", function(result__) {
                       var tmp1265 = result__;
                       var result__ = mobl.alert("Continuous Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1182 = mobl.ref(result__);
    
    var nodes1222 = $("<span>");
    root1352.append(nodes1222);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1182, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1355 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1223 = $("<span>");
      root1355.append(nodes1223);
      subs__.addSub((mobl.label)(mobl.ref("+Continuous Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1356 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1356); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1223;
        nodes1223 = node.contents();
        oldNodes.replaceWith(nodes1223);
      }));
      callback(root1355); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1222;
      nodes1222 = node.contents();
      oldNodes.replaceWith(nodes1222);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S3", function(result__) {
                       var tmp1264 = result__;
                       var result__ = mobl.alert("Hypothesis Testing Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1183 = mobl.ref(result__);
    
    var nodes1224 = $("<span>");
    root1352.append(nodes1224);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1183, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1357 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1225 = $("<span>");
      root1357.append(nodes1225);
      subs__.addSub((mobl.label)(mobl.ref("+Hypothesis Testing"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1358 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1358); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1225;
        nodes1225 = node.contents();
        oldNodes.replaceWith(nodes1225);
      }));
      callback(root1357); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1224;
      nodes1224 = node.contents();
      oldNodes.replaceWith(nodes1224);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S4", function(result__) {
                       var tmp1263 = result__;
                       var result__ = mobl.alert("Confidence Intervals Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1184 = mobl.ref(result__);
    
    var nodes1226 = $("<span>");
    root1352.append(nodes1226);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1184, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1359 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1227 = $("<span>");
      root1359.append(nodes1227);
      subs__.addSub((mobl.label)(mobl.ref("+Confidence Intervals"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1360 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1360); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1227;
        nodes1227 = node.contents();
        oldNodes.replaceWith(nodes1227);
      }));
      callback(root1359); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1226;
      nodes1226 = node.contents();
      oldNodes.replaceWith(nodes1226);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S5", function(result__) {
                       var tmp1262 = result__;
                       var result__ = mobl.alert("Chi Squared Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1185 = mobl.ref(result__);
    
    var nodes1228 = $("<span>");
    root1352.append(nodes1228);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1185, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1361 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1229 = $("<span>");
      root1361.append(nodes1229);
      subs__.addSub((mobl.label)(mobl.ref("+Chi Squared"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1362 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1362); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1229;
        nodes1229 = node.contents();
        oldNodes.replaceWith(nodes1229);
      }));
      callback(root1361); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1228;
      nodes1228 = node.contents();
      oldNodes.replaceWith(nodes1228);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S6", function(result__) {
                       var tmp1261 = result__;
                       var result__ = mobl.alert("Product Moment Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1186 = mobl.ref(result__);
    
    var nodes1230 = $("<span>");
    root1352.append(nodes1230);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1186, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1363 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1231 = $("<span>");
      root1363.append(nodes1231);
      subs__.addSub((mobl.label)(mobl.ref("+Product Moments"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1364 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1364); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1231;
        nodes1231 = node.contents();
        oldNodes.replaceWith(nodes1231);
      }));
      callback(root1363); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1230;
      nodes1230 = node.contents();
      oldNodes.replaceWith(nodes1230);
    }));
    callback(root1352); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1219;
    nodes1219 = node.contents();
    oldNodes.replaceWith(nodes1219);
  }));
  callback(root1351); return subs__;
  
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

nrichRPG.coreWorkout.panelHeader = function(text, onclick, elements, callback) {
  var root1365 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node115 = $("<div>");
  
  var ref87 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref87.get() !== null) {
    node115.attr('class', ref87.get());
    subs__.addSub(ref87.addEventListener('change', function(_, ref, val) {
      node115.attr('class', val);
    }));
    
  }
  subs__.addSub(ref87.rebind());
  
  var val35 = onclick.get();
  if(val35 !== null) {
    subs__.addSub(mobl.domBind(node115, 'tap', val35));
  }
  
  
  var node116 = $("<div>");
  
  var ref86 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref86.get() !== null) {
    node116.attr('class', ref86.get());
    subs__.addSub(ref86.addEventListener('change', function(_, ref, val) {
      node116.attr('class', val);
    }));
    
  }
  subs__.addSub(ref86.rebind());
  
  
  var node117 = $("<div>");
  
  var ref84 = text;
  node117.text(""+ref84.get());
  var ignore17 = false;
  subs__.addSub(ref84.addEventListener('change', function(_, ref, val) {
    if(ignore17) return;
    node117.text(""+val);
  }));
  subs__.addSub(ref84.rebind());
  
  
  var ref85 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref85.get() !== null) {
    node117.attr('class', ref85.get());
    subs__.addSub(ref85.addEventListener('change', function(_, ref, val) {
      node117.attr('class', val);
    }));
    
  }
  subs__.addSub(ref85.rebind());
  
  node116.append(node117);
  node115.append(node116);
  var nodes1232 = $("<span>");
  node115.append(nodes1232);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl29();
  }));
  
  function renderControl29() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1366 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1366); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1232;
      nodes1232 = node.contents();
      oldNodes.replaceWith(nodes1232);
    }));
  }
  renderControl29();
  root1365.append(node115);
  callback(root1365); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mobl.sleep(100, function(result__) {
    var tmp1267 = result__;
    mathJAX.renderMaths(function(result__) {
      var tmp1268 = result__;
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
  });
};


nrichRPG.coreWorkout.answerBlock = function(qa, elements, callback) {
  var root1367 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node118 = $("<span>");
  root1367.append(node118);
  var condSubs37 = new mobl.CompSubscription();
  subs__.addSub(condSubs37);
  var oldValue37;
  var renderCond37 = function() {
    var value57 = qa.get().correct;
    if(oldValue37 === value57) return;
    oldValue37 = value57;
    var subs__ = condSubs37;
    subs__.unsubscribe();
    node118.empty();
    if(value57) {
      var nodes1233 = $("<span>");
      node118.append(nodes1233);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.agreeStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1368 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = qa.get().answer != "%GRAPH%";
        var tmp1189 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp1189.set(qa.get().answer != "%GRAPH%");
        }));
        
        
        var node119 = $("<span>");
        root1368.append(node119);
        var condSubs38 = new mobl.CompSubscription();
        subs__.addSub(condSubs38);
        var oldValue38;
        var renderCond38 = function() {
          var value58 = tmp1189.get();
          if(oldValue38 === value58) return;
          oldValue38 = value58;
          var subs__ = condSubs38;
          subs__.unsubscribe();
          node119.empty();
          if(value58) {
            var result__ = "A" + qa.get().number + ". ";
            var tmp1187 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp1187.set("A" + qa.get().number + ". ");
            }));
            
            var nodes1234 = $("<span>");
            node119.append(nodes1234);
            subs__.addSub((mobl.label)(tmp1187, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1369 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1369); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1234;
              nodes1234 = node.contents();
              oldNodes.replaceWith(nodes1234);
            }));
            var nodes1235 = $("<span>");
            node119.append(nodes1235);
            subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
              var root1370 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1370); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1235;
              nodes1235 = node.contents();
              oldNodes.replaceWith(nodes1235);
            }));
            
            
            
          } else {
            var result__ = "A" + qa.get().number + ". ";
            var tmp1188 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp1188.set("A" + qa.get().number + ". ");
            }));
            
            var nodes1236 = $("<span>");
            node119.append(nodes1236);
            subs__.addSub((mobl.label)(tmp1188, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1371 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1371); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1236;
              nodes1236 = node.contents();
              oldNodes.replaceWith(nodes1236);
            }));
            var nodes1237 = $("<span>");
            node119.append(nodes1237);
            subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
              var root1372 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1372); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1237;
              nodes1237 = node.contents();
              oldNodes.replaceWith(nodes1237);
            }));
            
            
            
          }
        };
        renderCond38();
        subs__.addSub(tmp1189.addEventListener('change', function() {
          renderCond38();
        }));
        
        callback(root1368); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1233;
        nodes1233 = node.contents();
        oldNodes.replaceWith(nodes1233);
      }));
      
      
    } else {
      var nodes1238 = $("<span>");
      node118.append(nodes1238);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.disagreeStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1373 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = qa.get().answer != "%GRAPH%";
        var tmp1192 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp1192.set(qa.get().answer != "%GRAPH%");
        }));
        
        
        var node120 = $("<span>");
        root1373.append(node120);
        var condSubs39 = new mobl.CompSubscription();
        subs__.addSub(condSubs39);
        var oldValue39;
        var renderCond39 = function() {
          var value59 = tmp1192.get();
          if(oldValue39 === value59) return;
          oldValue39 = value59;
          var subs__ = condSubs39;
          subs__.unsubscribe();
          node120.empty();
          if(value59) {
            var result__ = "A" + qa.get().number + ". ";
            var tmp1190 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp1190.set("A" + qa.get().number + ". ");
            }));
            
            var nodes1239 = $("<span>");
            node120.append(nodes1239);
            subs__.addSub((mobl.label)(tmp1190, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1374 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1374); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1239;
              nodes1239 = node.contents();
              oldNodes.replaceWith(nodes1239);
            }));
            var nodes1240 = $("<span>");
            node120.append(nodes1240);
            subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
              var root1375 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1375); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1240;
              nodes1240 = node.contents();
              oldNodes.replaceWith(nodes1240);
            }));
            
            
            
          } else {
            var result__ = "A" + qa.get().number + ". ";
            var tmp1191 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp1191.set("A" + qa.get().number + ". ");
            }));
            
            var nodes1241 = $("<span>");
            node120.append(nodes1241);
            subs__.addSub((mobl.label)(tmp1191, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1376 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1376); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1241;
              nodes1241 = node.contents();
              oldNodes.replaceWith(nodes1241);
            }));
            var nodes1242 = $("<span>");
            node120.append(nodes1242);
            subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
              var root1377 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1377); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1242;
              nodes1242 = node.contents();
              oldNodes.replaceWith(nodes1242);
            }));
            
            
            
          }
        };
        renderCond39();
        subs__.addSub(tmp1192.addEventListener('change', function() {
          renderCond39();
        }));
        
        callback(root1373); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1238;
        nodes1238 = node.contents();
        oldNodes.replaceWith(nodes1238);
      }));
      
      
    }
  };
  renderCond37();
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    renderCond37();
  }));
  
  var nodes1243 = $("<span>");
  root1367.append(nodes1243);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root1378 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes1244 = $("<span>");
    root1378.append(nodes1244);
    subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root1379 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1379); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1244;
      nodes1244 = node.contents();
      oldNodes.replaceWith(nodes1244);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = true;
                     qa.get().correct = result__;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1193 = mobl.ref(result__);
    
    var nodes1245 = $("<span>");
    root1378.append(nodes1245);
    subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp1193, function(_, callback) {
      var root1380 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1380); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1245;
      nodes1245 = node.contents();
      oldNodes.replaceWith(nodes1245);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = false;
                     qa.get().correct = result__;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1194 = mobl.ref(result__);
    
    var nodes1246 = $("<span>");
    root1378.append(nodes1246);
    subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp1194, function(_, callback) {
      var root1381 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1381); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1246;
      nodes1246 = node.contents();
      oldNodes.replaceWith(nodes1246);
    }));
    callback(root1378); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1243;
    nodes1243 = node.contents();
    oldNodes.replaceWith(nodes1243);
  }));
  callback(root1367); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp1269 = result__;
    var result__ = tmp1269;
    var qa2 = result__;
    var result__ = qa2 == null;
    if(result__) {
      nrichRPG.questionAnswer.QA.all().one(function(result__) {
        var tmp1270 = result__;
        var result__ = tmp1270;
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


nrichRPG.coreWorkout.qaItem = function(qa, number, elements, callback) {
  var root1382 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node121 = $("<span>");
  
  var ref88 = mobl.ref("color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
  if(ref88.get() !== null) {
    node121.attr('style', ref88.get());
    subs__.addSub(ref88.addEventListener('change', function(_, ref, val) {
      node121.attr('style', val);
    }));
    subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
      node121.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
      node121.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    
  }
  subs__.addSub(ref88.rebind());
  
  var result__ = "Q" + number.get() + ". " + qa.get().topic;
  var tmp1195 = mobl.ref(result__);
  subs__.addSub(number.addEventListener('change', function() {
    tmp1195.set("Q" + number.get() + ". " + qa.get().topic);
  }));
  subs__.addSub(mobl.ref(qa, 'topic').addEventListener('change', function() {
    tmp1195.set("Q" + number.get() + ". " + qa.get().topic);
  }));
  
  var nodes1247 = $("<span>");
  node121.append(nodes1247);
  subs__.addSub((mobl.html)(tmp1195, function(_, callback) {
    var root1383 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1383); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1247;
    nodes1247 = node.contents();
    oldNodes.replaceWith(nodes1247);
  }));
  root1382.append(node121);
  callback(root1382); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.showQA = function(qa, elements, callback) {
  var root1384 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp1276 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp1198 = mobl.ref(result__);
  
  var result__ = qa.get().topic.toLowerCase();
  var tmp1197 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'topic').addEventListener('change', function() {
    tmp1197.set(qa.get().topic.toLowerCase());
  }));
  
  var nodes1248 = $("<span>");
  root1384.append(nodes1248);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(tmp1197, tmp1198, function(_, callback) {
    var root1385 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp1271 = result__;
                       var result__ = tmp1271;
                       var qa2 = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp1272 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp1196 = mobl.ref(result__);
    
    var nodes1249 = $("<span>");
    root1385.append(nodes1249);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp1196, function(_, callback) {
      var root1386 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1386); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1249;
      nodes1249 = node.contents();
      oldNodes.replaceWith(nodes1249);
    }));
    callback(root1385); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1248;
    nodes1248 = node.contents();
    oldNodes.replaceWith(nodes1248);
  }));
  var nodes1250 = $("<span>");
  root1384.append(nodes1250);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1387 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp1275 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1200 = mobl.ref(result__);
    
    var nodes1251 = $("<span>");
    root1387.append(nodes1251);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp1200, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root1388 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + qa.get().number + ". " + qa.get().question;
      var tmp1199 = mobl.ref(result__);
      subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
        tmp1199.set("Q" + qa.get().number + ". " + qa.get().question);
      }));
      subs__.addSub(mobl.ref(qa, 'question').addEventListener('change', function() {
        tmp1199.set("Q" + qa.get().number + ". " + qa.get().question);
      }));
      
      var nodes1252 = $("<span>");
      root1388.append(nodes1252);
      subs__.addSub((mobl.html)(tmp1199, function(_, callback) {
        var root1389 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1389); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1252;
        nodes1252 = node.contents();
        oldNodes.replaceWith(nodes1252);
      }));
      callback(root1388); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1251;
      nodes1251 = node.contents();
      oldNodes.replaceWith(nodes1251);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp1274 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1202 = mobl.ref(result__);
    
    var nodes1253 = $("<span>");
    root1387.append(nodes1253);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1202, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root1390 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1254 = $("<span>");
      root1390.append(nodes1254);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1391 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                           var tmp1273 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp1201 = mobl.ref(result__);
        
        var nodes1255 = $("<span>");
        root1391.append(nodes1255);
        subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp1201, function(_, callback) {
          var root1392 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1392); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1255;
          nodes1255 = node.contents();
          oldNodes.replaceWith(nodes1255);
        }));
        callback(root1391); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1254;
        nodes1254 = node.contents();
        oldNodes.replaceWith(nodes1254);
      }));
      
      var node122 = $("<span>");
      root1390.append(node122);
      var condSubs40 = new mobl.CompSubscription();
      subs__.addSub(condSubs40);
      var oldValue40;
      var renderCond40 = function() {
        var value60 = qa.get().done;
        if(oldValue40 === value60) return;
        oldValue40 = value60;
        var subs__ = condSubs40;
        subs__.unsubscribe();
        node122.empty();
        if(value60) {
          var nodes1256 = $("<span>");
          node122.append(nodes1256);
          subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, function(_, callback) {
            var root1393 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root1393); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes1256;
            nodes1256 = node.contents();
            oldNodes.replaceWith(nodes1256);
          }));
          
          
        } else {
          
        }
      };
      renderCond40();
      subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
        renderCond40();
      }));
      
      callback(root1390); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1253;
      nodes1253 = node.contents();
      oldNodes.replaceWith(nodes1253);
    }));
    callback(root1387); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1250;
    nodes1250 = node.contents();
    oldNodes.replaceWith(nodes1250);
  }));
  callback(root1384); return subs__;
  
  
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
  qas.list(function(coll72) {
    coll72 = coll72.reverse();
    function processOne42() {
      var item;
      item = coll72.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll72.length > 0) processOne42(); else rest42();
      
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
    if(coll72.length > 0) processOne42(); else rest42();
  });
  
};

nrichRPG.coreWorkout.makeQAStar = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll73) {
    coll73 = coll73.reverse();
    function processOne43() {
      var item;
      item = coll73.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll73.length > 0) processOne43(); else rest43();
      
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
    if(coll73.length > 0) processOne43(); else rest43();
  });
  
};

nrichRPG.coreWorkout.makeQAStats = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll74) {
    coll74 = coll74.reverse();
    function processOne44() {
      var item;
      item = coll74.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll74.length > 0) processOne44(); else rest44();
      
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
    if(coll74.length > 0) processOne44(); else rest44();
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