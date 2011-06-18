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
    var tmp1153 = result__;
    var result__ = tmp1153;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp1154 = result__;
      var result__ = tmp1154;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp1155 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicId, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll1552) {
    coll1552 = coll1552.reverse();
    function processOne58() {
      var i;
      i = coll1552.pop();
      nrichRPG.coreWorkout.makeQA(topicId, function(result__) {
        var tmp1156 = result__;
        
        if(coll1552.length > 0) processOne58(); else rest58();
        
      });
    }
    function rest58() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll1552.length > 0) processOne58(); else rest58();
  });
  
};

nrichRPG.coreWorkout.randomQStar = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll1553) {
    coll1553 = coll1553.reverse();
    function processOne59() {
      var i;
      i = coll1553.pop();
      var result__ = mobl.Math.floor(13 * mobl.Math.random());
      var r = result__;
      var result__ = "F" + (1 + r);
      var tid = result__;
      var result__ = tid == "F3";
      if(result__) {
        var result__ = "F3a";
        tid = result__;
        nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
          var tmp1157 = result__;
          
          if(coll1553.length > 0) processOne59(); else rest59();
          
        });
      } else {
        {
          nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
            var tmp1157 = result__;
            
            if(coll1553.length > 0) processOne59(); else rest59();
            
          });
        }
      }
    }
    function rest59() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll1553.length > 0) processOne59(); else rest59();
  });
  
};

nrichRPG.coreWorkout.randomQStats = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll1554) {
    coll1554 = coll1554.reverse();
    function processOne60() {
      var i;
      i = coll1554.pop();
      var result__ = mobl.Math.floor(6 * mobl.Math.random());
      var r = result__;
      var result__ = "S" + (1 + r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
        var tmp1158 = result__;
        
        if(coll1554.length > 0) processOne60(); else rest60();
        
      });
    }
    function rest60() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll1554.length > 0) processOne60(); else rest60();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root1576 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1151 = $("<span>");
  root1576.append(nodes1151);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1577 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1166 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1059 = mobl.ref(result__);
    
    var nodes1152 = $("<span>");
    root1577.append(nodes1152);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1059, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1578 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1153 = $("<span>");
      root1578.append(nodes1153);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1579 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1579); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1153;
        nodes1153 = node.contents();
        oldNodes.replaceWith(nodes1153);
      }));
      callback(root1578); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1152;
      nodes1152 = node.contents();
      oldNodes.replaceWith(nodes1152);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1165 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1060 = mobl.ref(result__);
    
    var nodes1154 = $("<span>");
    root1577.append(nodes1154);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1060, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1580 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1155 = $("<span>");
      root1580.append(nodes1155);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1581 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1581); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1155;
        nodes1155 = node.contents();
        oldNodes.replaceWith(nodes1155);
      }));
      callback(root1580); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1154;
      nodes1154 = node.contents();
      oldNodes.replaceWith(nodes1154);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1164 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1061 = mobl.ref(result__);
    
    var nodes1156 = $("<span>");
    root1577.append(nodes1156);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1061, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1582 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1157 = $("<span>");
      root1582.append(nodes1157);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1583 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1583); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1157;
        nodes1157 = node.contents();
        oldNodes.replaceWith(nodes1157);
      }));
      callback(root1582); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1156;
      nodes1156 = node.contents();
      oldNodes.replaceWith(nodes1156);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1163 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1062 = mobl.ref(result__);
    
    var nodes1158 = $("<span>");
    root1577.append(nodes1158);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1062, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1584 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1159 = $("<span>");
      root1584.append(nodes1159);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1585 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1585); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1159;
        nodes1159 = node.contents();
        oldNodes.replaceWith(nodes1159);
      }));
      callback(root1584); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1158;
      nodes1158 = node.contents();
      oldNodes.replaceWith(nodes1158);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1162 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1063 = mobl.ref(result__);
    
    var nodes1160 = $("<span>");
    root1577.append(nodes1160);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1063, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1586 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1161 = $("<span>");
      root1586.append(nodes1161);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1587 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1587); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1161;
        nodes1161 = node.contents();
        oldNodes.replaceWith(nodes1161);
      }));
      callback(root1586); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1160;
      nodes1160 = node.contents();
      oldNodes.replaceWith(nodes1160);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1161 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1064 = mobl.ref(result__);
    
    var nodes1162 = $("<span>");
    root1577.append(nodes1162);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1064, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1588 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1163 = $("<span>");
      root1588.append(nodes1163);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1589 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1589); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1163;
        nodes1163 = node.contents();
        oldNodes.replaceWith(nodes1163);
      }));
      callback(root1588); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1162;
      nodes1162 = node.contents();
      oldNodes.replaceWith(nodes1162);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1160 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1065 = mobl.ref(result__);
    
    var nodes1164 = $("<span>");
    root1577.append(nodes1164);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1065, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1590 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1165 = $("<span>");
      root1590.append(nodes1165);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1591 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1591); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1165;
        nodes1165 = node.contents();
        oldNodes.replaceWith(nodes1165);
      }));
      callback(root1590); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1164;
      nodes1164 = node.contents();
      oldNodes.replaceWith(nodes1164);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1159 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1066 = mobl.ref(result__);
    
    var nodes1166 = $("<span>");
    root1577.append(nodes1166);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1066, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1592 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1167 = $("<span>");
      root1592.append(nodes1167);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1593 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1593); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1167;
        nodes1167 = node.contents();
        oldNodes.replaceWith(nodes1167);
      }));
      callback(root1592); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1166;
      nodes1166 = node.contents();
      oldNodes.replaceWith(nodes1166);
    }));
    callback(root1577); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1151;
    nodes1151 = node.contents();
    oldNodes.replaceWith(nodes1151);
  }));
  callback(root1576); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root1594 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes1168 = $("<span>");
  root1594.append(nodes1168);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1595 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1068 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1067 = mobl.ref(result__);
    
    var nodes1169 = $("<span>");
    root1595.append(nodes1169);
    subs__.addSub((ui.backButton)(tmp1067, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1068, function(_, callback) {
      var root1596 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1596); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1169;
      nodes1169 = node.contents();
      oldNodes.replaceWith(nodes1169);
    }));
    callback(root1595); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1168;
    nodes1168 = node.contents();
    oldNodes.replaceWith(nodes1168);
  }));
  var nodes1170 = $("<span>");
  root1594.append(nodes1170);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1597 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(10, function(result__) {
                       var tmp1174 = result__;
                       var result__ = mobl.alert("Quadratic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1069 = mobl.ref(result__);
    
    var nodes1171 = $("<span>");
    root1597.append(nodes1171);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1069, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1598 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1172 = $("<span>");
      root1598.append(nodes1172);
      subs__.addSub((mobl.label)(mobl.ref("+Quadratic equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1599 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1599); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1172;
        nodes1172 = node.contents();
        oldNodes.replaceWith(nodes1172);
      }));
      callback(root1598); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1171;
      nodes1171 = node.contents();
      oldNodes.replaceWith(nodes1171);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(11, function(result__) {
                       var tmp1173 = result__;
                       var result__ = mobl.alert("Completing the Square Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1070 = mobl.ref(result__);
    
    var nodes1173 = $("<span>");
    root1597.append(nodes1173);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1070, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1600 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1174 = $("<span>");
      root1600.append(nodes1174);
      subs__.addSub((mobl.label)(mobl.ref("+Completing the square"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1601 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1601); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1174;
        nodes1174 = node.contents();
        oldNodes.replaceWith(nodes1174);
      }));
      callback(root1600); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1173;
      nodes1173 = node.contents();
      oldNodes.replaceWith(nodes1173);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(7, function(result__) {
                       var tmp1172 = result__;
                       var result__ = mobl.alert("Ineqalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1071 = mobl.ref(result__);
    
    var nodes1175 = $("<span>");
    root1597.append(nodes1175);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1071, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1602 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1176 = $("<span>");
      root1602.append(nodes1176);
      subs__.addSub((mobl.label)(mobl.ref("+Inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1603 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1603); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1176;
        nodes1176 = node.contents();
        oldNodes.replaceWith(nodes1176);
      }));
      callback(root1602); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1175;
      nodes1175 = node.contents();
      oldNodes.replaceWith(nodes1175);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(9, function(result__) {
                       var tmp1171 = result__;
                       var result__ = mobl.alert("Factor theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1072 = mobl.ref(result__);
    
    var nodes1177 = $("<span>");
    root1597.append(nodes1177);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1072, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1604 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1178 = $("<span>");
      root1604.append(nodes1178);
      subs__.addSub((mobl.label)(mobl.ref("+Factor theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1605 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1605); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1178;
        nodes1178 = node.contents();
        oldNodes.replaceWith(nodes1178);
      }));
      callback(root1604); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1177;
      nodes1177 = node.contents();
      oldNodes.replaceWith(nodes1177);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(1, function(result__) {
                       var tmp1170 = result__;
                       var result__ = mobl.alert("Partial fraction Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1073 = mobl.ref(result__);
    
    var nodes1179 = $("<span>");
    root1597.append(nodes1179);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1073, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1606 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1180 = $("<span>");
      root1606.append(nodes1180);
      subs__.addSub((mobl.label)(mobl.ref("+Partial fractions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1607 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1607); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1180;
        nodes1180 = node.contents();
        oldNodes.replaceWith(nodes1180);
      }));
      callback(root1606); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1179;
      nodes1179 = node.contents();
      oldNodes.replaceWith(nodes1179);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(30, function(result__) {
                       var tmp1169 = result__;
                       var result__ = mobl.alert("Powers Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1074 = mobl.ref(result__);
    
    var nodes1181 = $("<span>");
    root1597.append(nodes1181);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1074, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1608 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1182 = $("<span>");
      root1608.append(nodes1182);
      subs__.addSub((mobl.label)(mobl.ref("+Powers"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1609 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1609); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1182;
        nodes1182 = node.contents();
        oldNodes.replaceWith(nodes1182);
      }));
      callback(root1608); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1181;
      nodes1181 = node.contents();
      oldNodes.replaceWith(nodes1181);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(13, function(result__) {
                       var tmp1168 = result__;
                       var result__ = mobl.alert("Logarithm Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1075 = mobl.ref(result__);
    
    var nodes1183 = $("<span>");
    root1597.append(nodes1183);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1075, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1610 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1184 = $("<span>");
      root1610.append(nodes1184);
      subs__.addSub((mobl.label)(mobl.ref("+Logarithms"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1611 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1611); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1184;
        nodes1184 = node.contents();
        oldNodes.replaceWith(nodes1184);
      }));
      callback(root1610); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1183;
      nodes1183 = node.contents();
      oldNodes.replaceWith(nodes1183);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(17, function(result__) {
                       var tmp1167 = result__;
                       var result__ = mobl.alert("Trig equation Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1076 = mobl.ref(result__);
    
    var nodes1185 = $("<span>");
    root1597.append(nodes1185);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1076, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1612 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1186 = $("<span>");
      root1612.append(nodes1186);
      subs__.addSub((mobl.label)(mobl.ref("+Trig equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1613 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1613); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1186;
        nodes1186 = node.contents();
        oldNodes.replaceWith(nodes1186);
      }));
      callback(root1612); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1185;
      nodes1185 = node.contents();
      oldNodes.replaceWith(nodes1185);
    }));
    callback(root1597); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1170;
    nodes1170 = node.contents();
    oldNodes.replaceWith(nodes1170);
  }));
  callback(root1594); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root1614 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1187 = $("<span>");
  root1614.append(nodes1187);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1615 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1078 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1077 = mobl.ref(result__);
    
    var nodes1188 = $("<span>");
    root1615.append(nodes1188);
    subs__.addSub((ui.backButton)(tmp1077, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1078, function(_, callback) {
      var root1616 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1616); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1188;
      nodes1188 = node.contents();
      oldNodes.replaceWith(nodes1188);
    }));
    callback(root1615); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1187;
    nodes1187 = node.contents();
    oldNodes.replaceWith(nodes1187);
  }));
  var nodes1189 = $("<span>");
  root1614.append(nodes1189);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1617 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(24, function(result__) {
                       var tmp1179 = result__;
                       var result__ = mobl.alert("Modulus Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1079 = mobl.ref(result__);
    
    var nodes1190 = $("<span>");
    root1617.append(nodes1190);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1079, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1618 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1191 = $("<span>");
      root1618.append(nodes1191);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus function"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1619 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1619); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1191;
        nodes1191 = node.contents();
        oldNodes.replaceWith(nodes1191);
      }));
      callback(root1618); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1190;
      nodes1190 = node.contents();
      oldNodes.replaceWith(nodes1190);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(25, function(result__) {
                       var tmp1178 = result__;
                       var result__ = mobl.alert("Transformations of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1080 = mobl.ref(result__);
    
    var nodes1192 = $("<span>");
    root1617.append(nodes1192);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1080, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1620 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1193 = $("<span>");
      root1620.append(nodes1193);
      subs__.addSub((mobl.label)(mobl.ref("+Transformations of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1621 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1621); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1193;
        nodes1193 = node.contents();
        oldNodes.replaceWith(nodes1193);
      }));
      callback(root1620); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1192;
      nodes1192 = node.contents();
      oldNodes.replaceWith(nodes1192);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(26, function(result__) {
                       var tmp1177 = result__;
                       var result__ = mobl.alert("Composition of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1081 = mobl.ref(result__);
    
    var nodes1194 = $("<span>");
    root1617.append(nodes1194);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1081, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1622 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1195 = $("<span>");
      root1622.append(nodes1195);
      subs__.addSub((mobl.label)(mobl.ref("+Composition of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1623 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1623); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1195;
        nodes1195 = node.contents();
        oldNodes.replaceWith(nodes1195);
      }));
      callback(root1622); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1194;
      nodes1194 = node.contents();
      oldNodes.replaceWith(nodes1194);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(270, function(result__) {
                       var tmp1176 = result__;
                       var result__ = mobl.alert("Implicit functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1082 = mobl.ref(result__);
    
    var nodes1196 = $("<span>");
    root1617.append(nodes1196);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1082, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1624 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1197 = $("<span>");
      root1624.append(nodes1197);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1625 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1625); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1197;
        nodes1197 = node.contents();
        oldNodes.replaceWith(nodes1197);
      }));
      callback(root1624); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1196;
      nodes1196 = node.contents();
      oldNodes.replaceWith(nodes1196);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(27, function(result__) {
                       var tmp1175 = result__;
                       var result__ = mobl.alert("Parametric functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1083 = mobl.ref(result__);
    
    var nodes1198 = $("<span>");
    root1617.append(nodes1198);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1083, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1626 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1199 = $("<span>");
      root1626.append(nodes1199);
      subs__.addSub((mobl.label)(mobl.ref("+Parametric functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1627 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1627); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1199;
        nodes1199 = node.contents();
        oldNodes.replaceWith(nodes1199);
      }));
      callback(root1626); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1198;
      nodes1198 = node.contents();
      oldNodes.replaceWith(nodes1198);
    }));
    callback(root1617); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1189;
    nodes1189 = node.contents();
    oldNodes.replaceWith(nodes1189);
  }));
  callback(root1614); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root1628 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1200 = $("<span>");
  root1628.append(nodes1200);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1629 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1085 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1084 = mobl.ref(result__);
    
    var nodes1201 = $("<span>");
    root1629.append(nodes1201);
    subs__.addSub((ui.backButton)(tmp1084, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1085, function(_, callback) {
      var root1630 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1630); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1201;
      nodes1201 = node.contents();
      oldNodes.replaceWith(nodes1201);
    }));
    callback(root1629); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1200;
    nodes1200 = node.contents();
    oldNodes.replaceWith(nodes1200);
  }));
  var nodes1202 = $("<span>");
  root1628.append(nodes1202);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1631 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(15, function(result__) {
                       var tmp1182 = result__;
                       var result__ = mobl.alert("Triangles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1086 = mobl.ref(result__);
    
    var nodes1203 = $("<span>");
    root1631.append(nodes1203);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1086, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1632 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1204 = $("<span>");
      root1632.append(nodes1204);
      subs__.addSub((mobl.label)(mobl.ref("+Triangles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1633 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1633); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1204;
        nodes1204 = node.contents();
        oldNodes.replaceWith(nodes1204);
      }));
      callback(root1632); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1203;
      nodes1203 = node.contents();
      oldNodes.replaceWith(nodes1203);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(16, function(result__) {
                       var tmp1181 = result__;
                       var result__ = mobl.alert("Circles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1087 = mobl.ref(result__);
    
    var nodes1205 = $("<span>");
    root1631.append(nodes1205);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1087, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1634 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1206 = $("<span>");
      root1634.append(nodes1206);
      subs__.addSub((mobl.label)(mobl.ref("+Circles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1635 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1635); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1206;
        nodes1206 = node.contents();
        oldNodes.replaceWith(nodes1206);
      }));
      callback(root1634); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1205;
      nodes1205 = node.contents();
      oldNodes.replaceWith(nodes1205);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(6, function(result__) {
                       var tmp1180 = result__;
                       var result__ = mobl.alert("3D lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1088 = mobl.ref(result__);
    
    var nodes1207 = $("<span>");
    root1631.append(nodes1207);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1088, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1636 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1208 = $("<span>");
      root1636.append(nodes1208);
      subs__.addSub((mobl.label)(mobl.ref("+ 3D lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1637 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1637); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1208;
        nodes1208 = node.contents();
        oldNodes.replaceWith(nodes1208);
      }));
      callback(root1636); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1207;
      nodes1207 = node.contents();
      oldNodes.replaceWith(nodes1207);
    }));
    callback(root1631); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1202;
    nodes1202 = node.contents();
    oldNodes.replaceWith(nodes1202);
  }));
  callback(root1628); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root1638 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1209 = $("<span>");
  root1638.append(nodes1209);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1639 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1090 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1089 = mobl.ref(result__);
    
    var nodes1210 = $("<span>");
    root1639.append(nodes1210);
    subs__.addSub((ui.backButton)(tmp1089, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1090, function(_, callback) {
      var root1640 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1640); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1210;
      nodes1210 = node.contents();
      oldNodes.replaceWith(nodes1210);
    }));
    callback(root1639); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1209;
    nodes1209 = node.contents();
    oldNodes.replaceWith(nodes1209);
  }));
  var nodes1211 = $("<span>");
  root1638.append(nodes1211);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1641 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(8, function(result__) {
                       var tmp1186 = result__;
                       var result__ = mobl.alert("Arithmetic Progressions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1091 = mobl.ref(result__);
    
    var nodes1212 = $("<span>");
    root1641.append(nodes1212);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1091, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1642 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1213 = $("<span>");
      root1642.append(nodes1213);
      subs__.addSub((mobl.label)(mobl.ref("+Arithmetic progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1643 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1643); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1213;
        nodes1213 = node.contents();
        oldNodes.replaceWith(nodes1213);
      }));
      callback(root1642); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1212;
      nodes1212 = node.contents();
      oldNodes.replaceWith(nodes1212);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(12, function(result__) {
                       var tmp1185 = result__;
                       var result__ = mobl.alert("Binomial Expansion Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1092 = mobl.ref(result__);
    
    var nodes1214 = $("<span>");
    root1641.append(nodes1214);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1092, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1644 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1215 = $("<span>");
      root1644.append(nodes1215);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial expansion"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1645 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1645); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1215;
        nodes1215 = node.contents();
        oldNodes.replaceWith(nodes1215);
      }));
      callback(root1644); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1214;
      nodes1214 = node.contents();
      oldNodes.replaceWith(nodes1214);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(23, function(result__) {
                       var tmp1184 = result__;
                       var result__ = mobl.alert("Geometric Progression Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1093 = mobl.ref(result__);
    
    var nodes1216 = $("<span>");
    root1641.append(nodes1216);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1093, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1646 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1217 = $("<span>");
      root1646.append(nodes1217);
      subs__.addSub((mobl.label)(mobl.ref("+Geometric progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1647 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1647); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1217;
        nodes1217 = node.contents();
        oldNodes.replaceWith(nodes1217);
      }));
      callback(root1646); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1216;
      nodes1216 = node.contents();
      oldNodes.replaceWith(nodes1216);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(2, function(result__) {
                       var tmp1183 = result__;
                       var result__ = mobl.alert("Binomial theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1094 = mobl.ref(result__);
    
    var nodes1218 = $("<span>");
    root1641.append(nodes1218);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1094, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1648 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1219 = $("<span>");
      root1648.append(nodes1219);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1649 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1649); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1219;
        nodes1219 = node.contents();
        oldNodes.replaceWith(nodes1219);
      }));
      callback(root1648); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1218;
      nodes1218 = node.contents();
      oldNodes.replaceWith(nodes1218);
    }));
    callback(root1641); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1211;
    nodes1211 = node.contents();
    oldNodes.replaceWith(nodes1211);
  }));
  callback(root1638); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root1650 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1220 = $("<span>");
  root1650.append(nodes1220);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1651 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1096 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1095 = mobl.ref(result__);
    
    var nodes1221 = $("<span>");
    root1651.append(nodes1221);
    subs__.addSub((ui.backButton)(tmp1095, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1096, function(_, callback) {
      var root1652 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1652); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1221;
      nodes1221 = node.contents();
      oldNodes.replaceWith(nodes1221);
    }));
    callback(root1651); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1220;
    nodes1220 = node.contents();
    oldNodes.replaceWith(nodes1220);
  }));
  var nodes1222 = $("<span>");
  root1650.append(nodes1222);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1653 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(5, function(result__) {
                       var tmp1188 = result__;
                       var result__ = mobl.alert("Scalar product Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1097 = mobl.ref(result__);
    
    var nodes1223 = $("<span>");
    root1653.append(nodes1223);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1097, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1654 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1224 = $("<span>");
      root1654.append(nodes1224);
      subs__.addSub((mobl.label)(mobl.ref("+Scalar products"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1655 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1655); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1224;
        nodes1224 = node.contents();
        oldNodes.replaceWith(nodes1224);
      }));
      callback(root1654); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1223;
      nodes1223 = node.contents();
      oldNodes.replaceWith(nodes1223);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(18, function(result__) {
                       var tmp1187 = result__;
                       var result__ = mobl.alert("Vector equation of lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1098 = mobl.ref(result__);
    
    var nodes1225 = $("<span>");
    root1653.append(nodes1225);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1098, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1656 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1226 = $("<span>");
      root1656.append(nodes1226);
      subs__.addSub((mobl.label)(mobl.ref("+Vector equation of lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1657 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1657); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1226;
        nodes1226 = node.contents();
        oldNodes.replaceWith(nodes1226);
      }));
      callback(root1656); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1225;
      nodes1225 = node.contents();
      oldNodes.replaceWith(nodes1225);
    }));
    callback(root1653); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1222;
    nodes1222 = node.contents();
    oldNodes.replaceWith(nodes1222);
  }));
  callback(root1650); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root1658 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1227 = $("<span>");
  root1658.append(nodes1227);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1659 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1100 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1099 = mobl.ref(result__);
    
    var nodes1228 = $("<span>");
    root1659.append(nodes1228);
    subs__.addSub((ui.backButton)(tmp1099, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1100, function(_, callback) {
      var root1660 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1660); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1228;
      nodes1228 = node.contents();
      oldNodes.replaceWith(nodes1228);
    }));
    callback(root1659); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1227;
    nodes1227 = node.contents();
    oldNodes.replaceWith(nodes1227);
  }));
  var nodes1229 = $("<span>");
  root1658.append(nodes1229);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1661 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(14, function(result__) {
                       var tmp1193 = result__;
                       var result__ = mobl.alert("Stationary points Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1101 = mobl.ref(result__);
    
    var nodes1230 = $("<span>");
    root1661.append(nodes1230);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1101, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1662 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1231 = $("<span>");
      root1662.append(nodes1231);
      subs__.addSub((mobl.label)(mobl.ref("+Stationary points"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1663 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1663); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1231;
        nodes1231 = node.contents();
        oldNodes.replaceWith(nodes1231);
      }));
      callback(root1662); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1230;
      nodes1230 = node.contents();
      oldNodes.replaceWith(nodes1230);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(20, function(result__) {
                       var tmp1192 = result__;
                       var result__ = mobl.alert("Chain rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1102 = mobl.ref(result__);
    
    var nodes1232 = $("<span>");
    root1661.append(nodes1232);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1102, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1664 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1233 = $("<span>");
      root1664.append(nodes1233);
      subs__.addSub((mobl.label)(mobl.ref("+Chain rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1665 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1665); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1233;
        nodes1233 = node.contents();
        oldNodes.replaceWith(nodes1233);
      }));
      callback(root1664); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1232;
      nodes1232 = node.contents();
      oldNodes.replaceWith(nodes1232);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(21, function(result__) {
                       var tmp1191 = result__;
                       var result__ = mobl.alert("Product rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1103 = mobl.ref(result__);
    
    var nodes1234 = $("<span>");
    root1661.append(nodes1234);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1103, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1666 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1235 = $("<span>");
      root1666.append(nodes1235);
      subs__.addSub((mobl.label)(mobl.ref("+Product rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1667 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1667); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1235;
        nodes1235 = node.contents();
        oldNodes.replaceWith(nodes1235);
      }));
      callback(root1666); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1234;
      nodes1234 = node.contents();
      oldNodes.replaceWith(nodes1234);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(22, function(result__) {
                       var tmp1190 = result__;
                       var result__ = mobl.alert("Quotient rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1104 = mobl.ref(result__);
    
    var nodes1236 = $("<span>");
    root1661.append(nodes1236);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1104, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1668 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1237 = $("<span>");
      root1668.append(nodes1237);
      subs__.addSub((mobl.label)(mobl.ref("+Quotient rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1669 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1669); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1237;
        nodes1237 = node.contents();
        oldNodes.replaceWith(nodes1237);
      }));
      callback(root1668); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1236;
      nodes1236 = node.contents();
      oldNodes.replaceWith(nodes1236);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(19, function(result__) {
                       var tmp1189 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1105 = mobl.ref(result__);
    
    var nodes1238 = $("<span>");
    root1661.append(nodes1238);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1105, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1670 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1239 = $("<span>");
      root1670.append(nodes1239);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1671 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1671); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1239;
        nodes1239 = node.contents();
        oldNodes.replaceWith(nodes1239);
      }));
      callback(root1670); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1238;
      nodes1238 = node.contents();
      oldNodes.replaceWith(nodes1238);
    }));
    callback(root1661); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1229;
    nodes1229 = node.contents();
    oldNodes.replaceWith(nodes1229);
  }));
  callback(root1658); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root1672 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1240 = $("<span>");
  root1672.append(nodes1240);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1673 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1107 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1106 = mobl.ref(result__);
    
    var nodes1241 = $("<span>");
    root1673.append(nodes1241);
    subs__.addSub((ui.backButton)(tmp1106, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1107, function(_, callback) {
      var root1674 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1674); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1241;
      nodes1241 = node.contents();
      oldNodes.replaceWith(nodes1241);
    }));
    callback(root1673); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1240;
    nodes1240 = node.contents();
    oldNodes.replaceWith(nodes1240);
  }));
  var nodes1242 = $("<span>");
  root1672.append(nodes1242);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1675 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(28, function(result__) {
                       var tmp1196 = result__;
                       var result__ = mobl.alert("Integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1108 = mobl.ref(result__);
    
    var nodes1243 = $("<span>");
    root1675.append(nodes1243);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1108, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1676 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1244 = $("<span>");
      root1676.append(nodes1244);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1677 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1677); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1244;
        nodes1244 = node.contents();
        oldNodes.replaceWith(nodes1244);
      }));
      callback(root1676); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1243;
      nodes1243 = node.contents();
      oldNodes.replaceWith(nodes1243);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(3, function(result__) {
                       var tmp1195 = result__;
                       var result__ = mobl.alert("Polynomial integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1109 = mobl.ref(result__);
    
    var nodes1245 = $("<span>");
    root1675.append(nodes1245);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1109, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1678 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1246 = $("<span>");
      root1678.append(nodes1246);
      subs__.addSub((mobl.label)(mobl.ref("+Polynomial integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1679 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1679); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1246;
        nodes1246 = node.contents();
        oldNodes.replaceWith(nodes1246);
      }));
      callback(root1678); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1245;
      nodes1245 = node.contents();
      oldNodes.replaceWith(nodes1245);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(4, function(result__) {
                       var tmp1194 = result__;
                       var result__ = mobl.alert("Trig integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1110 = mobl.ref(result__);
    
    var nodes1247 = $("<span>");
    root1675.append(nodes1247);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1110, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1680 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1248 = $("<span>");
      root1680.append(nodes1248);
      subs__.addSub((mobl.label)(mobl.ref("+Trig integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1681 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1681); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1248;
        nodes1248 = node.contents();
        oldNodes.replaceWith(nodes1248);
      }));
      callback(root1680); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1247;
      nodes1247 = node.contents();
      oldNodes.replaceWith(nodes1247);
    }));
    callback(root1675); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1242;
    nodes1242 = node.contents();
    oldNodes.replaceWith(nodes1242);
  }));
  callback(root1672); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root1682 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1249 = $("<span>");
  root1682.append(nodes1249);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1683 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1112 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1111 = mobl.ref(result__);
    
    var nodes1250 = $("<span>");
    root1683.append(nodes1250);
    subs__.addSub((ui.backButton)(tmp1111, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1112, function(_, callback) {
      var root1684 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1684); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1250;
      nodes1250 = node.contents();
      oldNodes.replaceWith(nodes1250);
    }));
    callback(root1683); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1249;
    nodes1249 = node.contents();
    oldNodes.replaceWith(nodes1249);
  }));
  var nodes1251 = $("<span>");
  root1682.append(nodes1251);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1685 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(29, function(result__) {
                       var tmp1197 = result__;
                       var result__ = mobl.alert("Differential equations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1113 = mobl.ref(result__);
    
    var nodes1252 = $("<span>");
    root1685.append(nodes1252);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1113, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1686 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1253 = $("<span>");
      root1686.append(nodes1253);
      subs__.addSub((mobl.label)(mobl.ref("+Diff equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1687 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1687); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1253;
        nodes1253 = node.contents();
        oldNodes.replaceWith(nodes1253);
      }));
      callback(root1686); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1252;
      nodes1252 = node.contents();
      oldNodes.replaceWith(nodes1252);
    }));
    callback(root1685); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1251;
    nodes1251 = node.contents();
    oldNodes.replaceWith(nodes1251);
  }));
  callback(root1682); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root1688 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1254 = $("<span>");
  root1688.append(nodes1254);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1689 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F1", function(result__) {
                       var tmp1210 = result__;
                       var result__ = mobl.alert("Complex arithmetic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1114 = mobl.ref(result__);
    
    var nodes1255 = $("<span>");
    root1689.append(nodes1255);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1114, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1690 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1256 = $("<span>");
      root1690.append(nodes1256);
      subs__.addSub((mobl.label)(mobl.ref("+Complex arithmetic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1691 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1691); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1256;
        nodes1256 = node.contents();
        oldNodes.replaceWith(nodes1256);
      }));
      callback(root1690); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1255;
      nodes1255 = node.contents();
      oldNodes.replaceWith(nodes1255);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F2", function(result__) {
                       var tmp1209 = result__;
                       var result__ = mobl.alert("Modulus argument Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1115 = mobl.ref(result__);
    
    var nodes1257 = $("<span>");
    root1689.append(nodes1257);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1115, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1692 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1258 = $("<span>");
      root1692.append(nodes1258);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus argument"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1693 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1693); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1258;
        nodes1258 = node.contents();
        oldNodes.replaceWith(nodes1258);
      }));
      callback(root1692); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1257;
      nodes1257 = node.contents();
      oldNodes.replaceWith(nodes1257);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F3a", function(result__) {
                       var tmp1208 = result__;
                       var result__ = mobl.alert("2nd order DE Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1116 = mobl.ref(result__);
    
    var nodes1259 = $("<span>");
    root1689.append(nodes1259);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1116, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1694 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1260 = $("<span>");
      root1694.append(nodes1260);
      subs__.addSub((mobl.label)(mobl.ref("+2nd order DEs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1695 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1695); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1260;
        nodes1260 = node.contents();
        oldNodes.replaceWith(nodes1260);
      }));
      callback(root1694); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1259;
      nodes1259 = node.contents();
      oldNodes.replaceWith(nodes1259);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F4", function(result__) {
                       var tmp1207 = result__;
                       var result__ = mobl.alert("Rank 2 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1117 = mobl.ref(result__);
    
    var nodes1261 = $("<span>");
    root1689.append(nodes1261);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1117, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1696 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1262 = $("<span>");
      root1696.append(nodes1262);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 2 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1697 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1697); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1262;
        nodes1262 = node.contents();
        oldNodes.replaceWith(nodes1262);
      }));
      callback(root1696); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1261;
      nodes1261 = node.contents();
      oldNodes.replaceWith(nodes1261);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F5", function(result__) {
                       var tmp1206 = result__;
                       var result__ = mobl.alert("Taylor Series Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1118 = mobl.ref(result__);
    
    var nodes1263 = $("<span>");
    root1689.append(nodes1263);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1118, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1698 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1264 = $("<span>");
      root1698.append(nodes1264);
      subs__.addSub((mobl.label)(mobl.ref("+Taylor Series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1699 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1699); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1264;
        nodes1264 = node.contents();
        oldNodes.replaceWith(nodes1264);
      }));
      callback(root1698); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1263;
      nodes1263 = node.contents();
      oldNodes.replaceWith(nodes1263);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F6", function(result__) {
                       var tmp1205 = result__;
                       var result__ = mobl.alert("Polar Coordinates Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1119 = mobl.ref(result__);
    
    var nodes1265 = $("<span>");
    root1689.append(nodes1265);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1119, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1700 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1266 = $("<span>");
      root1700.append(nodes1266);
      subs__.addSub((mobl.label)(mobl.ref("+Polar Coordinates"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1701 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1701); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1266;
        nodes1266 = node.contents();
        oldNodes.replaceWith(nodes1266);
      }));
      callback(root1700); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1265;
      nodes1265 = node.contents();
      oldNodes.replaceWith(nodes1265);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F7", function(result__) {
                       var tmp1204 = result__;
                       var result__ = mobl.alert("Rank 3 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1120 = mobl.ref(result__);
    
    var nodes1267 = $("<span>");
    root1689.append(nodes1267);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1120, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1702 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1268 = $("<span>");
      root1702.append(nodes1268);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 3 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1703 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1703); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1268;
        nodes1268 = node.contents();
        oldNodes.replaceWith(nodes1268);
      }));
      callback(root1702); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1267;
      nodes1267 = node.contents();
      oldNodes.replaceWith(nodes1267);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F8", function(result__) {
                       var tmp1203 = result__;
                       var result__ = mobl.alert("Further vectors added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1121 = mobl.ref(result__);
    
    var nodes1269 = $("<span>");
    root1689.append(nodes1269);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1121, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1704 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1270 = $("<span>");
      root1704.append(nodes1270);
      subs__.addSub((mobl.label)(mobl.ref("+Further vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1705 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1705); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1270;
        nodes1270 = node.contents();
        oldNodes.replaceWith(nodes1270);
      }));
      callback(root1704); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1269;
      nodes1269 = node.contents();
      oldNodes.replaceWith(nodes1269);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F9", function(result__) {
                       var tmp1202 = result__;
                       var result__ = mobl.alert("Newton-Raphson added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1122 = mobl.ref(result__);
    
    var nodes1271 = $("<span>");
    root1689.append(nodes1271);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1122, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1706 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1272 = $("<span>");
      root1706.append(nodes1272);
      subs__.addSub((mobl.label)(mobl.ref("+Newton-Raphson"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1707 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1707); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1272;
        nodes1272 = node.contents();
        oldNodes.replaceWith(nodes1272);
      }));
      callback(root1706); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1271;
      nodes1271 = node.contents();
      oldNodes.replaceWith(nodes1271);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F10", function(result__) {
                       var tmp1201 = result__;
                       var result__ = mobl.alert("Further inequalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1123 = mobl.ref(result__);
    
    var nodes1273 = $("<span>");
    root1689.append(nodes1273);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1123, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1708 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1274 = $("<span>");
      root1708.append(nodes1274);
      subs__.addSub((mobl.label)(mobl.ref("+Further inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1709 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1709); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1274;
        nodes1274 = node.contents();
        oldNodes.replaceWith(nodes1274);
      }));
      callback(root1708); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1273;
      nodes1273 = node.contents();
      oldNodes.replaceWith(nodes1273);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F11", function(result__) {
                       var tmp1200 = result__;
                       var result__ = mobl.alert("Integration by substitution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1124 = mobl.ref(result__);
    
    var nodes1275 = $("<span>");
    root1689.append(nodes1275);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1124, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1710 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1276 = $("<span>");
      root1710.append(nodes1276);
      subs__.addSub((mobl.label)(mobl.ref("+Integration by substitution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1711 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1711); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1276;
        nodes1276 = node.contents();
        oldNodes.replaceWith(nodes1276);
      }));
      callback(root1710); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1275;
      nodes1275 = node.contents();
      oldNodes.replaceWith(nodes1275);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F12", function(result__) {
                       var tmp1199 = result__;
                       var result__ = mobl.alert("Figures of revolution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1125 = mobl.ref(result__);
    
    var nodes1277 = $("<span>");
    root1689.append(nodes1277);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1125, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1712 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1278 = $("<span>");
      root1712.append(nodes1278);
      subs__.addSub((mobl.label)(mobl.ref("+Figures of revolution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1713 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1713); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1278;
        nodes1278 = node.contents();
        oldNodes.replaceWith(nodes1278);
      }));
      callback(root1712); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1277;
      nodes1277 = node.contents();
      oldNodes.replaceWith(nodes1277);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F13", function(result__) {
                       var tmp1198 = result__;
                       var result__ = mobl.alert("Matrix transformations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1126 = mobl.ref(result__);
    
    var nodes1279 = $("<span>");
    root1689.append(nodes1279);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1126, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1714 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1280 = $("<span>");
      root1714.append(nodes1280);
      subs__.addSub((mobl.label)(mobl.ref("+Matrix transformations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1715 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1715); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1280;
        nodes1280 = node.contents();
        oldNodes.replaceWith(nodes1280);
      }));
      callback(root1714); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1279;
      nodes1279 = node.contents();
      oldNodes.replaceWith(nodes1279);
    }));
    callback(root1689); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1254;
    nodes1254 = node.contents();
    oldNodes.replaceWith(nodes1254);
  }));
  callback(root1688); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root1716 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1281 = $("<span>");
  root1716.append(nodes1281);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1717 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S1", function(result__) {
                       var tmp1216 = result__;
                       var result__ = mobl.alert("Discrete Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1127 = mobl.ref(result__);
    
    var nodes1282 = $("<span>");
    root1717.append(nodes1282);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1127, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1718 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1283 = $("<span>");
      root1718.append(nodes1283);
      subs__.addSub((mobl.label)(mobl.ref("+Discrete Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1719 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1719); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1283;
        nodes1283 = node.contents();
        oldNodes.replaceWith(nodes1283);
      }));
      callback(root1718); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1282;
      nodes1282 = node.contents();
      oldNodes.replaceWith(nodes1282);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S2", function(result__) {
                       var tmp1215 = result__;
                       var result__ = mobl.alert("Continuous Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1128 = mobl.ref(result__);
    
    var nodes1284 = $("<span>");
    root1717.append(nodes1284);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1128, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1720 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1285 = $("<span>");
      root1720.append(nodes1285);
      subs__.addSub((mobl.label)(mobl.ref("+Continuous Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1721 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1721); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1285;
        nodes1285 = node.contents();
        oldNodes.replaceWith(nodes1285);
      }));
      callback(root1720); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1284;
      nodes1284 = node.contents();
      oldNodes.replaceWith(nodes1284);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S3", function(result__) {
                       var tmp1214 = result__;
                       var result__ = mobl.alert("Hypothesis Testing Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1129 = mobl.ref(result__);
    
    var nodes1286 = $("<span>");
    root1717.append(nodes1286);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1129, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1722 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1287 = $("<span>");
      root1722.append(nodes1287);
      subs__.addSub((mobl.label)(mobl.ref("+Hypothesis Testing"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1723 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1723); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1287;
        nodes1287 = node.contents();
        oldNodes.replaceWith(nodes1287);
      }));
      callback(root1722); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1286;
      nodes1286 = node.contents();
      oldNodes.replaceWith(nodes1286);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S4", function(result__) {
                       var tmp1213 = result__;
                       var result__ = mobl.alert("Confidence Intervals Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1130 = mobl.ref(result__);
    
    var nodes1288 = $("<span>");
    root1717.append(nodes1288);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1130, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1724 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1289 = $("<span>");
      root1724.append(nodes1289);
      subs__.addSub((mobl.label)(mobl.ref("+Confidence Intervals"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1725 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1725); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1289;
        nodes1289 = node.contents();
        oldNodes.replaceWith(nodes1289);
      }));
      callback(root1724); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1288;
      nodes1288 = node.contents();
      oldNodes.replaceWith(nodes1288);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S5", function(result__) {
                       var tmp1212 = result__;
                       var result__ = mobl.alert("Chi Squared Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1131 = mobl.ref(result__);
    
    var nodes1290 = $("<span>");
    root1717.append(nodes1290);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1131, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1726 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1291 = $("<span>");
      root1726.append(nodes1291);
      subs__.addSub((mobl.label)(mobl.ref("+Chi Squared"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1727 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1727); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1291;
        nodes1291 = node.contents();
        oldNodes.replaceWith(nodes1291);
      }));
      callback(root1726); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1290;
      nodes1290 = node.contents();
      oldNodes.replaceWith(nodes1290);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S6", function(result__) {
                       var tmp1211 = result__;
                       var result__ = mobl.alert("Product Moment Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1132 = mobl.ref(result__);
    
    var nodes1292 = $("<span>");
    root1717.append(nodes1292);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1132, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1728 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1293 = $("<span>");
      root1728.append(nodes1293);
      subs__.addSub((mobl.label)(mobl.ref("+Product Moments"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1729 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1729); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1293;
        nodes1293 = node.contents();
        oldNodes.replaceWith(nodes1293);
      }));
      callback(root1728); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1292;
      nodes1292 = node.contents();
      oldNodes.replaceWith(nodes1292);
    }));
    callback(root1717); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1281;
    nodes1281 = node.contents();
    oldNodes.replaceWith(nodes1281);
  }));
  callback(root1716); return subs__;
  
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
  var root1730 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node682 = $("<div>");
  
  var ref684 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref684.get() !== null) {
    node682.attr('class', ref684.get());
    subs__.addSub(ref684.addEventListener('change', function(_, ref, val) {
      node682.attr('class', val);
    }));
    
  }
  subs__.addSub(ref684.rebind());
  
  var val350 = onclick.get();
  if(val350 !== null) {
    subs__.addSub(mobl.domBind(node682, 'tap', val350));
  }
  
  
  var node683 = $("<div>");
  
  var ref683 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref683.get() !== null) {
    node683.attr('class', ref683.get());
    subs__.addSub(ref683.addEventListener('change', function(_, ref, val) {
      node683.attr('class', val);
    }));
    
  }
  subs__.addSub(ref683.rebind());
  
  
  var node684 = $("<div>");
  
  var ref681 = text;
  node684.text(""+ref681.get());
  var ignore134 = false;
  subs__.addSub(ref681.addEventListener('change', function(_, ref, val) {
    if(ignore134) return;
    node684.text(""+val);
  }));
  subs__.addSub(ref681.rebind());
  
  
  var ref682 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref682.get() !== null) {
    node684.attr('class', ref682.get());
    subs__.addSub(ref682.addEventListener('change', function(_, ref, val) {
      node684.attr('class', val);
    }));
    
  }
  subs__.addSub(ref682.rebind());
  
  node683.append(node684);
  node682.append(node683);
  var nodes1294 = $("<span>");
  node682.append(nodes1294);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl280();
  }));
  
  function renderControl280() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1731 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1731); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1294;
      nodes1294 = node.contents();
      oldNodes.replaceWith(nodes1294);
    }));
  }
  renderControl280();
  root1730.append(node682);
  callback(root1730); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mobl.sleep(100, function(result__) {
    var tmp1217 = result__;
    mathJAX.renderMaths(function(result__) {
      var tmp1218 = result__;
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
  var root1732 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node685 = $("<span>");
  root1732.append(node685);
  var condSubs164 = new mobl.CompSubscription();
  subs__.addSub(condSubs164);
  var oldValue164;
  var renderCond164 = function() {
    var value1160 = qa.get().correct;
    if(oldValue164 === value1160) return;
    oldValue164 = value1160;
    var subs__ = condSubs164;
    subs__.unsubscribe();
    node685.empty();
    if(value1160) {
      var nodes1295 = $("<span>");
      node685.append(nodes1295);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.agreeStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1733 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = qa.get().answer != "%GRAPH%";
        var tmp1136 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp1136.set(qa.get().answer != "%GRAPH%");
        }));
        
        
        var node686 = $("<span>");
        root1733.append(node686);
        var condSubs165 = new mobl.CompSubscription();
        subs__.addSub(condSubs165);
        var oldValue165;
        var renderCond165 = function() {
          var value1161 = tmp1136.get();
          if(oldValue165 === value1161) return;
          oldValue165 = value1161;
          var subs__ = condSubs165;
          subs__.unsubscribe();
          node686.empty();
          if(value1161) {
            var result__ = "A" + qa.get().number + ". ";
            var tmp1133 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp1133.set("A" + qa.get().number + ". ");
            }));
            
            var nodes1296 = $("<span>");
            node686.append(nodes1296);
            subs__.addSub((mobl.label)(tmp1133, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1734 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1734); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1296;
              nodes1296 = node.contents();
              oldNodes.replaceWith(nodes1296);
            }));
            var nodes1297 = $("<span>");
            node686.append(nodes1297);
            subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
              var root1735 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1735); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1297;
              nodes1297 = node.contents();
              oldNodes.replaceWith(nodes1297);
            }));
            
            
            
          } else {
            var result__ = "A" + qa.get().number + ". ";
            var tmp1134 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp1134.set("A" + qa.get().number + ". ");
            }));
            
            var nodes1298 = $("<span>");
            node686.append(nodes1298);
            subs__.addSub((mobl.label)(tmp1134, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1736 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1736); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1298;
              nodes1298 = node.contents();
              oldNodes.replaceWith(nodes1298);
            }));
            var nodes1299 = $("<span>");
            node686.append(nodes1299);
            subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
              var root1737 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1737); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1299;
              nodes1299 = node.contents();
              oldNodes.replaceWith(nodes1299);
            }));
            
            var node687 = $("<span>");
            node687.attr('style', "display:none");
            
            nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
              var tmp1220 = result__;
              var tmp1135 = mobl.ref(result__);
              subs__.addSub(qa.addEventListener('change', function() {
                nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                  var tmp1219 = result__;
                  var result__ = tmp1219;
                  tmp1135.set(result__);
                  
                });
              }));
              
              var nodes1300 = $("<span>");
              node687.append(nodes1300);
              subs__.addSub((mobl.html)(tmp1135, function(_, callback) {
                var root1738 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1738); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1300;
                nodes1300 = node.contents();
                oldNodes.replaceWith(nodes1300);
              }));
              node686.append(node687);
              
              
            });
            
            
            
          }
        };
        renderCond165();
        subs__.addSub(tmp1136.addEventListener('change', function() {
          renderCond165();
        }));
        
        callback(root1733); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1295;
        nodes1295 = node.contents();
        oldNodes.replaceWith(nodes1295);
      }));
      
      
    } else {
      var nodes1301 = $("<span>");
      node685.append(nodes1301);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.disagreeStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1739 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = qa.get().answer != "%GRAPH%";
        var tmp1140 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp1140.set(qa.get().answer != "%GRAPH%");
        }));
        
        
        var node688 = $("<span>");
        root1739.append(node688);
        var condSubs166 = new mobl.CompSubscription();
        subs__.addSub(condSubs166);
        var oldValue166;
        var renderCond166 = function() {
          var value1162 = tmp1140.get();
          if(oldValue166 === value1162) return;
          oldValue166 = value1162;
          var subs__ = condSubs166;
          subs__.unsubscribe();
          node688.empty();
          if(value1162) {
            var result__ = "A" + qa.get().number + ". ";
            var tmp1137 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp1137.set("A" + qa.get().number + ". ");
            }));
            
            var nodes1302 = $("<span>");
            node688.append(nodes1302);
            subs__.addSub((mobl.label)(tmp1137, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1740 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1740); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1302;
              nodes1302 = node.contents();
              oldNodes.replaceWith(nodes1302);
            }));
            var nodes1303 = $("<span>");
            node688.append(nodes1303);
            subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
              var root1741 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1741); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1303;
              nodes1303 = node.contents();
              oldNodes.replaceWith(nodes1303);
            }));
            
            
            
          } else {
            var result__ = "A" + qa.get().number + ". ";
            var tmp1138 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp1138.set("A" + qa.get().number + ". ");
            }));
            
            var nodes1304 = $("<span>");
            node688.append(nodes1304);
            subs__.addSub((mobl.label)(tmp1138, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1742 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1742); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1304;
              nodes1304 = node.contents();
              oldNodes.replaceWith(nodes1304);
            }));
            var nodes1305 = $("<span>");
            node688.append(nodes1305);
            subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
              var root1743 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1743); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1305;
              nodes1305 = node.contents();
              oldNodes.replaceWith(nodes1305);
            }));
            
            var node689 = $("<span>");
            node689.attr('style', "display:none");
            
            nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
              var tmp1222 = result__;
              var tmp1139 = mobl.ref(result__);
              subs__.addSub(qa.addEventListener('change', function() {
                nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                  var tmp1221 = result__;
                  var result__ = tmp1221;
                  tmp1139.set(result__);
                  
                });
              }));
              
              var nodes1306 = $("<span>");
              node689.append(nodes1306);
              subs__.addSub((mobl.html)(tmp1139, function(_, callback) {
                var root1744 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1744); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1306;
                nodes1306 = node.contents();
                oldNodes.replaceWith(nodes1306);
              }));
              node688.append(node689);
              
              
            });
            
            
            
          }
        };
        renderCond166();
        subs__.addSub(tmp1140.addEventListener('change', function() {
          renderCond166();
        }));
        
        callback(root1739); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1301;
        nodes1301 = node.contents();
        oldNodes.replaceWith(nodes1301);
      }));
      
      
    }
  };
  renderCond164();
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    renderCond164();
  }));
  
  var nodes1307 = $("<span>");
  root1732.append(nodes1307);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root1745 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node690 = $("<span>");
    node690.attr('style', "display:none");
    
    nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
      var tmp1224 = result__;
      var tmp1141 = mobl.ref(result__);
      subs__.addSub(qa.addEventListener('change', function() {
        nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
          var tmp1223 = result__;
          var result__ = tmp1223;
          tmp1141.set(result__);
          
        });
      }));
      
      var nodes1311 = $("<span>");
      node690.append(nodes1311);
      subs__.addSub((mobl.html)(tmp1141, function(_, callback) {
        var root1749 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1749); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1311;
        nodes1311 = node.contents();
        oldNodes.replaceWith(nodes1311);
      }));
      root1745.append(node690);
      var nodes1308 = $("<span>");
      root1745.append(nodes1308);
      subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1746 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1746); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1308;
        nodes1308 = node.contents();
        oldNodes.replaceWith(nodes1308);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = true;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp1142 = mobl.ref(result__);
      
      var nodes1309 = $("<span>");
      root1745.append(nodes1309);
      subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp1142, function(_, callback) {
        var root1747 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1747); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1309;
        nodes1309 = node.contents();
        oldNodes.replaceWith(nodes1309);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = false;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp1143 = mobl.ref(result__);
      
      var nodes1310 = $("<span>");
      root1745.append(nodes1310);
      subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp1143, function(_, callback) {
        var root1748 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1748); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1310;
        nodes1310 = node.contents();
        oldNodes.replaceWith(nodes1310);
      }));
      callback(root1745); return subs__;
      
      
      
      
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1307;
    nodes1307 = node.contents();
    oldNodes.replaceWith(nodes1307);
  }));
  callback(root1732); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp1225 = result__;
    var result__ = tmp1225;
    var qa2 = result__;
    var result__ = qa2 == null;
    if(result__) {
      nrichRPG.questionAnswer.QA.all().one(function(result__) {
        var tmp1226 = result__;
        var result__ = tmp1226;
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
  var root1750 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node691 = $("<span>");
  
  var ref685 = mobl.ref("color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
  if(ref685.get() !== null) {
    node691.attr('style', ref685.get());
    subs__.addSub(ref685.addEventListener('change', function(_, ref, val) {
      node691.attr('style', val);
    }));
    subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
      node691.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
      node691.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    
  }
  subs__.addSub(ref685.rebind());
  
  var result__ = "Q" + number.get() + ". " + qa.get().topic;
  var tmp1144 = mobl.ref(result__);
  subs__.addSub(number.addEventListener('change', function() {
    tmp1144.set("Q" + number.get() + ". " + qa.get().topic);
  }));
  subs__.addSub(mobl.ref(qa, 'topic').addEventListener('change', function() {
    tmp1144.set("Q" + number.get() + ". " + qa.get().topic);
  }));
  
  var nodes1312 = $("<span>");
  node691.append(nodes1312);
  subs__.addSub((mobl.html)(tmp1144, function(_, callback) {
    var root1751 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1751); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1312;
    nodes1312 = node.contents();
    oldNodes.replaceWith(nodes1312);
  }));
  root1750.append(node691);
  callback(root1750); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.showQA = function(qa, elements, callback) {
  var root1752 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node692 = $("<span>");
  root1752.append(node692);
  var condSubs167 = new mobl.CompSubscription();
  subs__.addSub(condSubs167);
  var oldValue167;
  var renderCond167 = function() {
    var value1163 = qa.get();
    if(oldValue167 === value1163) return;
    oldValue167 = value1163;
    var subs__ = condSubs167;
    subs__.unsubscribe();
    node692.empty();
    if(value1163) {
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       mathJAX.renderMaths(function(result__) {
                         var tmp1234 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     };
      var tmp1147 = mobl.ref(result__);
      
      var result__ = qa.get().topic.toLowerCase();
      var tmp1146 = mobl.ref(result__);
      subs__.addSub(mobl.ref(qa, 'topic').addEventListener('change', function() {
        tmp1146.set(qa.get().topic.toLowerCase());
      }));
      
      var nodes1313 = $("<span>");
      node692.append(nodes1313);
      subs__.addSub((nrichRPG.coreWorkout.panelHeader)(tmp1146, tmp1147, function(_, callback) {
        var root1753 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                           var tmp1227 = result__;
                           var result__ = tmp1227;
                           var qa2 = result__;
                           var result__ = mobl.remove(qa.get());
                           var result__ = qa2;
                           qa.set(result__);
                           nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                             var tmp1228 = result__;
                             if(callback && callback.apply) callback(); return;
                           });
                         });
                       };
        var tmp1145 = mobl.ref(result__);
        
        var nodes1314 = $("<span>");
        root1753.append(nodes1314);
        subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp1145, function(_, callback) {
          var root1754 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1754); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1314;
          nodes1314 = node.contents();
          oldNodes.replaceWith(nodes1314);
        }));
        callback(root1753); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1313;
        nodes1313 = node.contents();
        oldNodes.replaceWith(nodes1313);
      }));
      var nodes1315 = $("<span>");
      node692.append(nodes1315);
      subs__.addSub((ui.group)(function(_, callback) {
        var root1755 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         mathJAX.renderMaths(function(result__) {
                           var tmp1233 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp1150 = mobl.ref(result__);
        
        var nodes1316 = $("<span>");
        root1755.append(nodes1316);
        subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp1150, mobl.ref(null), mobl.ref(true), function(_, callback) {
          var root1756 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var result__ = "Q" + qa.get().number + ". " + qa.get().question;
          var tmp1148 = mobl.ref(result__);
          subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
            tmp1148.set("Q" + qa.get().number + ". " + qa.get().question);
          }));
          subs__.addSub(mobl.ref(qa, 'question').addEventListener('change', function() {
            tmp1148.set("Q" + qa.get().number + ". " + qa.get().question);
          }));
          
          var nodes1317 = $("<span>");
          root1756.append(nodes1317);
          subs__.addSub((mobl.html)(tmp1148, function(_, callback) {
            var root1757 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root1757); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes1317;
            nodes1317 = node.contents();
            oldNodes.replaceWith(nodes1317);
          }));
          
          var node693 = $("<span>");
          node693.attr('style', "display:none");
          
          nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
            var tmp1230 = result__;
            var tmp1149 = mobl.ref(result__);
            subs__.addSub(qa.addEventListener('change', function() {
              nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                var tmp1229 = result__;
                var result__ = tmp1229;
                tmp1149.set(result__);
                
              });
            }));
            
            var nodes1318 = $("<span>");
            node693.append(nodes1318);
            subs__.addSub((mobl.html)(tmp1149, function(_, callback) {
              var root1758 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1758); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1318;
              nodes1318 = node.contents();
              oldNodes.replaceWith(nodes1318);
            }));
            root1756.append(node693);
            callback(root1756); return subs__;
            
          });
          
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes1316;
          nodes1316 = node.contents();
          oldNodes.replaceWith(nodes1316);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         mathJAX.renderMaths(function(result__) {
                           var tmp1232 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp1152 = mobl.ref(result__);
        
        var nodes1319 = $("<span>");
        root1755.append(nodes1319);
        subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1152, mobl.ref(null), mobl.ref(true), function(_, callback) {
          var root1759 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes1320 = $("<span>");
          root1759.append(nodes1320);
          subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root1760 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                               var tmp1231 = result__;
                               if(callback && callback.apply) callback(); return;
                             });
                           };
            var tmp1151 = mobl.ref(result__);
            
            var nodes1321 = $("<span>");
            root1760.append(nodes1321);
            subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp1151, function(_, callback) {
              var root1761 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1761); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1321;
              nodes1321 = node.contents();
              oldNodes.replaceWith(nodes1321);
            }));
            callback(root1760); return subs__;
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes1320;
            nodes1320 = node.contents();
            oldNodes.replaceWith(nodes1320);
          }));
          
          var node694 = $("<span>");
          root1759.append(node694);
          var condSubs168 = new mobl.CompSubscription();
          subs__.addSub(condSubs168);
          var oldValue168;
          var renderCond168 = function() {
            var value1164 = qa.get().done;
            if(oldValue168 === value1164) return;
            oldValue168 = value1164;
            var subs__ = condSubs168;
            subs__.unsubscribe();
            node694.empty();
            if(value1164) {
              var nodes1322 = $("<span>");
              node694.append(nodes1322);
              subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, function(_, callback) {
                var root1762 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1762); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1322;
                nodes1322 = node.contents();
                oldNodes.replaceWith(nodes1322);
              }));
              
              
            } else {
              
            }
          };
          renderCond168();
          subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
            renderCond168();
          }));
          
          callback(root1759); return subs__;
          
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes1319;
          nodes1319 = node.contents();
          oldNodes.replaceWith(nodes1319);
        }));
        callback(root1755); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1315;
        nodes1315 = node.contents();
        oldNodes.replaceWith(nodes1315);
      }));
      
      
      
    } else {
      
    }
  };
  renderCond167();
  subs__.addSub(qa.addEventListener('change', function() {
    renderCond167();
  }));
  
  callback(root1752); return subs__;
  
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
  qas.list(function(coll1555) {
    coll1555 = coll1555.reverse();
    function processOne61() {
      var item;
      item = coll1555.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll1555.length > 0) processOne61(); else rest61();
      
    }
    function rest61() {
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
    if(coll1555.length > 0) processOne61(); else rest61();
  });
  
};

nrichRPG.coreWorkout.makeQAStar = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll1556) {
    coll1556 = coll1556.reverse();
    function processOne62() {
      var item;
      item = coll1556.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll1556.length > 0) processOne62(); else rest62();
      
    }
    function rest62() {
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
    if(coll1556.length > 0) processOne62(); else rest62();
  });
  
};

nrichRPG.coreWorkout.makeQAStats = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll1557) {
    coll1557 = coll1557.reverse();
    function processOne63() {
      var item;
      item = coll1557.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll1557.length > 0) processOne63(); else rest63();
      
    }
    function rest63() {
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
    if(coll1557.length > 0) processOne63(); else rest63();
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