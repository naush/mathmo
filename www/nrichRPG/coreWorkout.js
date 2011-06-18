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
    var tmp1330 = result__;
    var result__ = tmp1330;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp1331 = result__;
      var result__ = tmp1331;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp1332 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicId, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll1564) {
    coll1564 = coll1564.reverse();
    function processOne64() {
      var i;
      i = coll1564.pop();
      nrichRPG.coreWorkout.makeQA(topicId, function(result__) {
        var tmp1333 = result__;
        
        if(coll1564.length > 0) processOne64(); else rest64();
        
      });
    }
    function rest64() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll1564.length > 0) processOne64(); else rest64();
  });
  
};

nrichRPG.coreWorkout.randomQStar = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll1565) {
    coll1565 = coll1565.reverse();
    function processOne65() {
      var i;
      i = coll1565.pop();
      var result__ = mobl.Math.floor(13 * mobl.Math.random());
      var r = result__;
      var result__ = "F" + (1 + r);
      var tid = result__;
      var result__ = tid == "F3";
      if(result__) {
        var result__ = "F3a";
        tid = result__;
        nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
          var tmp1334 = result__;
          
          if(coll1565.length > 0) processOne65(); else rest65();
          
        });
      } else {
        {
          nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
            var tmp1334 = result__;
            
            if(coll1565.length > 0) processOne65(); else rest65();
            
          });
        }
      }
    }
    function rest65() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll1565.length > 0) processOne65(); else rest65();
  });
  
};

nrichRPG.coreWorkout.randomQStats = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll1566) {
    coll1566 = coll1566.reverse();
    function processOne66() {
      var i;
      i = coll1566.pop();
      var result__ = mobl.Math.floor(6 * mobl.Math.random());
      var r = result__;
      var result__ = "S" + (1 + r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
        var tmp1335 = result__;
        
        if(coll1566.length > 0) processOne66(); else rest66();
        
      });
    }
    function rest66() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll1566.length > 0) processOne66(); else rest66();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root1763 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1323 = $("<span>");
  root1763.append(nodes1323);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1764 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1343 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1235 = mobl.ref(result__);
    
    var nodes1324 = $("<span>");
    root1764.append(nodes1324);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1235, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1765 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1325 = $("<span>");
      root1765.append(nodes1325);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1766 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1766); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1325;
        nodes1325 = node.contents();
        oldNodes.replaceWith(nodes1325);
      }));
      callback(root1765); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1324;
      nodes1324 = node.contents();
      oldNodes.replaceWith(nodes1324);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1342 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1236 = mobl.ref(result__);
    
    var nodes1326 = $("<span>");
    root1764.append(nodes1326);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1236, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1767 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1327 = $("<span>");
      root1767.append(nodes1327);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1768 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1768); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1327;
        nodes1327 = node.contents();
        oldNodes.replaceWith(nodes1327);
      }));
      callback(root1767); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1326;
      nodes1326 = node.contents();
      oldNodes.replaceWith(nodes1326);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1341 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1237 = mobl.ref(result__);
    
    var nodes1328 = $("<span>");
    root1764.append(nodes1328);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1237, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1769 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1329 = $("<span>");
      root1769.append(nodes1329);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1770 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1770); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1329;
        nodes1329 = node.contents();
        oldNodes.replaceWith(nodes1329);
      }));
      callback(root1769); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1328;
      nodes1328 = node.contents();
      oldNodes.replaceWith(nodes1328);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1340 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1238 = mobl.ref(result__);
    
    var nodes1330 = $("<span>");
    root1764.append(nodes1330);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1238, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1771 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1331 = $("<span>");
      root1771.append(nodes1331);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1772 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1772); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1331;
        nodes1331 = node.contents();
        oldNodes.replaceWith(nodes1331);
      }));
      callback(root1771); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1330;
      nodes1330 = node.contents();
      oldNodes.replaceWith(nodes1330);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1339 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1239 = mobl.ref(result__);
    
    var nodes1332 = $("<span>");
    root1764.append(nodes1332);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1239, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1773 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1333 = $("<span>");
      root1773.append(nodes1333);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1774 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1774); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1333;
        nodes1333 = node.contents();
        oldNodes.replaceWith(nodes1333);
      }));
      callback(root1773); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1332;
      nodes1332 = node.contents();
      oldNodes.replaceWith(nodes1332);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1338 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1240 = mobl.ref(result__);
    
    var nodes1334 = $("<span>");
    root1764.append(nodes1334);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1240, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1775 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1335 = $("<span>");
      root1775.append(nodes1335);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1776 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1776); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1335;
        nodes1335 = node.contents();
        oldNodes.replaceWith(nodes1335);
      }));
      callback(root1775); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1334;
      nodes1334 = node.contents();
      oldNodes.replaceWith(nodes1334);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1337 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1241 = mobl.ref(result__);
    
    var nodes1336 = $("<span>");
    root1764.append(nodes1336);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1241, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1777 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1337 = $("<span>");
      root1777.append(nodes1337);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1778 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1778); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1337;
        nodes1337 = node.contents();
        oldNodes.replaceWith(nodes1337);
      }));
      callback(root1777); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1336;
      nodes1336 = node.contents();
      oldNodes.replaceWith(nodes1336);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1336 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1242 = mobl.ref(result__);
    
    var nodes1338 = $("<span>");
    root1764.append(nodes1338);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1242, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1779 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1339 = $("<span>");
      root1779.append(nodes1339);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1780 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1780); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1339;
        nodes1339 = node.contents();
        oldNodes.replaceWith(nodes1339);
      }));
      callback(root1779); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1338;
      nodes1338 = node.contents();
      oldNodes.replaceWith(nodes1338);
    }));
    callback(root1764); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1323;
    nodes1323 = node.contents();
    oldNodes.replaceWith(nodes1323);
  }));
  callback(root1763); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root1781 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes1340 = $("<span>");
  root1781.append(nodes1340);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1782 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1244 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1243 = mobl.ref(result__);
    
    var nodes1341 = $("<span>");
    root1782.append(nodes1341);
    subs__.addSub((ui.backButton)(tmp1243, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1244, function(_, callback) {
      var root1783 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1783); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1341;
      nodes1341 = node.contents();
      oldNodes.replaceWith(nodes1341);
    }));
    callback(root1782); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1340;
    nodes1340 = node.contents();
    oldNodes.replaceWith(nodes1340);
  }));
  var nodes1342 = $("<span>");
  root1781.append(nodes1342);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1784 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(10, function(result__) {
                       var tmp1351 = result__;
                       var result__ = mobl.alert("Quadratic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1245 = mobl.ref(result__);
    
    var nodes1343 = $("<span>");
    root1784.append(nodes1343);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1245, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1785 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1344 = $("<span>");
      root1785.append(nodes1344);
      subs__.addSub((mobl.label)(mobl.ref("+Quadratic equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1786 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1786); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1344;
        nodes1344 = node.contents();
        oldNodes.replaceWith(nodes1344);
      }));
      callback(root1785); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1343;
      nodes1343 = node.contents();
      oldNodes.replaceWith(nodes1343);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(11, function(result__) {
                       var tmp1350 = result__;
                       var result__ = mobl.alert("Completing the Square Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1246 = mobl.ref(result__);
    
    var nodes1345 = $("<span>");
    root1784.append(nodes1345);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1246, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1787 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1346 = $("<span>");
      root1787.append(nodes1346);
      subs__.addSub((mobl.label)(mobl.ref("+Completing the square"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1788 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1788); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1346;
        nodes1346 = node.contents();
        oldNodes.replaceWith(nodes1346);
      }));
      callback(root1787); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1345;
      nodes1345 = node.contents();
      oldNodes.replaceWith(nodes1345);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(7, function(result__) {
                       var tmp1349 = result__;
                       var result__ = mobl.alert("Ineqalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1247 = mobl.ref(result__);
    
    var nodes1347 = $("<span>");
    root1784.append(nodes1347);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1247, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1789 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1348 = $("<span>");
      root1789.append(nodes1348);
      subs__.addSub((mobl.label)(mobl.ref("+Inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1790 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1790); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1348;
        nodes1348 = node.contents();
        oldNodes.replaceWith(nodes1348);
      }));
      callback(root1789); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1347;
      nodes1347 = node.contents();
      oldNodes.replaceWith(nodes1347);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(9, function(result__) {
                       var tmp1348 = result__;
                       var result__ = mobl.alert("Factor theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1248 = mobl.ref(result__);
    
    var nodes1349 = $("<span>");
    root1784.append(nodes1349);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1248, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1791 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1350 = $("<span>");
      root1791.append(nodes1350);
      subs__.addSub((mobl.label)(mobl.ref("+Factor theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1792 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1792); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1350;
        nodes1350 = node.contents();
        oldNodes.replaceWith(nodes1350);
      }));
      callback(root1791); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1349;
      nodes1349 = node.contents();
      oldNodes.replaceWith(nodes1349);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(1, function(result__) {
                       var tmp1347 = result__;
                       var result__ = mobl.alert("Partial fraction Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1249 = mobl.ref(result__);
    
    var nodes1351 = $("<span>");
    root1784.append(nodes1351);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1249, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1793 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1352 = $("<span>");
      root1793.append(nodes1352);
      subs__.addSub((mobl.label)(mobl.ref("+Partial fractions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1794 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1794); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1352;
        nodes1352 = node.contents();
        oldNodes.replaceWith(nodes1352);
      }));
      callback(root1793); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1351;
      nodes1351 = node.contents();
      oldNodes.replaceWith(nodes1351);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(30, function(result__) {
                       var tmp1346 = result__;
                       var result__ = mobl.alert("Powers Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1250 = mobl.ref(result__);
    
    var nodes1353 = $("<span>");
    root1784.append(nodes1353);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1250, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1795 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1354 = $("<span>");
      root1795.append(nodes1354);
      subs__.addSub((mobl.label)(mobl.ref("+Powers"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1796 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1796); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1354;
        nodes1354 = node.contents();
        oldNodes.replaceWith(nodes1354);
      }));
      callback(root1795); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1353;
      nodes1353 = node.contents();
      oldNodes.replaceWith(nodes1353);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(13, function(result__) {
                       var tmp1345 = result__;
                       var result__ = mobl.alert("Logarithm Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1251 = mobl.ref(result__);
    
    var nodes1355 = $("<span>");
    root1784.append(nodes1355);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1251, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1797 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1356 = $("<span>");
      root1797.append(nodes1356);
      subs__.addSub((mobl.label)(mobl.ref("+Logarithms"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1798 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1798); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1356;
        nodes1356 = node.contents();
        oldNodes.replaceWith(nodes1356);
      }));
      callback(root1797); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1355;
      nodes1355 = node.contents();
      oldNodes.replaceWith(nodes1355);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(17, function(result__) {
                       var tmp1344 = result__;
                       var result__ = mobl.alert("Trig equation Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1252 = mobl.ref(result__);
    
    var nodes1357 = $("<span>");
    root1784.append(nodes1357);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1252, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1799 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1358 = $("<span>");
      root1799.append(nodes1358);
      subs__.addSub((mobl.label)(mobl.ref("+Trig equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1800 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1800); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1358;
        nodes1358 = node.contents();
        oldNodes.replaceWith(nodes1358);
      }));
      callback(root1799); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1357;
      nodes1357 = node.contents();
      oldNodes.replaceWith(nodes1357);
    }));
    callback(root1784); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1342;
    nodes1342 = node.contents();
    oldNodes.replaceWith(nodes1342);
  }));
  callback(root1781); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root1801 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1359 = $("<span>");
  root1801.append(nodes1359);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1802 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1254 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1253 = mobl.ref(result__);
    
    var nodes1360 = $("<span>");
    root1802.append(nodes1360);
    subs__.addSub((ui.backButton)(tmp1253, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1254, function(_, callback) {
      var root1803 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1803); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1360;
      nodes1360 = node.contents();
      oldNodes.replaceWith(nodes1360);
    }));
    callback(root1802); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1359;
    nodes1359 = node.contents();
    oldNodes.replaceWith(nodes1359);
  }));
  var nodes1361 = $("<span>");
  root1801.append(nodes1361);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1804 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(24, function(result__) {
                       var tmp1356 = result__;
                       var result__ = mobl.alert("Modulus Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1255 = mobl.ref(result__);
    
    var nodes1362 = $("<span>");
    root1804.append(nodes1362);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1255, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1805 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1363 = $("<span>");
      root1805.append(nodes1363);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus function"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1806 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1806); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1363;
        nodes1363 = node.contents();
        oldNodes.replaceWith(nodes1363);
      }));
      callback(root1805); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1362;
      nodes1362 = node.contents();
      oldNodes.replaceWith(nodes1362);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(25, function(result__) {
                       var tmp1355 = result__;
                       var result__ = mobl.alert("Transformations of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1256 = mobl.ref(result__);
    
    var nodes1364 = $("<span>");
    root1804.append(nodes1364);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1256, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1807 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1365 = $("<span>");
      root1807.append(nodes1365);
      subs__.addSub((mobl.label)(mobl.ref("+Transformations of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1808 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1808); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1365;
        nodes1365 = node.contents();
        oldNodes.replaceWith(nodes1365);
      }));
      callback(root1807); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1364;
      nodes1364 = node.contents();
      oldNodes.replaceWith(nodes1364);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(26, function(result__) {
                       var tmp1354 = result__;
                       var result__ = mobl.alert("Composition of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1257 = mobl.ref(result__);
    
    var nodes1366 = $("<span>");
    root1804.append(nodes1366);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1257, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1809 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1367 = $("<span>");
      root1809.append(nodes1367);
      subs__.addSub((mobl.label)(mobl.ref("+Composition of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1810 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1810); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1367;
        nodes1367 = node.contents();
        oldNodes.replaceWith(nodes1367);
      }));
      callback(root1809); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1366;
      nodes1366 = node.contents();
      oldNodes.replaceWith(nodes1366);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(270, function(result__) {
                       var tmp1353 = result__;
                       var result__ = mobl.alert("Implicit functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1258 = mobl.ref(result__);
    
    var nodes1368 = $("<span>");
    root1804.append(nodes1368);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1258, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1811 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1369 = $("<span>");
      root1811.append(nodes1369);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1812 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1812); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1369;
        nodes1369 = node.contents();
        oldNodes.replaceWith(nodes1369);
      }));
      callback(root1811); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1368;
      nodes1368 = node.contents();
      oldNodes.replaceWith(nodes1368);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(27, function(result__) {
                       var tmp1352 = result__;
                       var result__ = mobl.alert("Parametric functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1259 = mobl.ref(result__);
    
    var nodes1370 = $("<span>");
    root1804.append(nodes1370);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1259, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1813 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1371 = $("<span>");
      root1813.append(nodes1371);
      subs__.addSub((mobl.label)(mobl.ref("+Parametric functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1814 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1814); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1371;
        nodes1371 = node.contents();
        oldNodes.replaceWith(nodes1371);
      }));
      callback(root1813); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1370;
      nodes1370 = node.contents();
      oldNodes.replaceWith(nodes1370);
    }));
    callback(root1804); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1361;
    nodes1361 = node.contents();
    oldNodes.replaceWith(nodes1361);
  }));
  callback(root1801); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root1815 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1372 = $("<span>");
  root1815.append(nodes1372);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1816 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1261 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1260 = mobl.ref(result__);
    
    var nodes1373 = $("<span>");
    root1816.append(nodes1373);
    subs__.addSub((ui.backButton)(tmp1260, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1261, function(_, callback) {
      var root1817 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1817); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1373;
      nodes1373 = node.contents();
      oldNodes.replaceWith(nodes1373);
    }));
    callback(root1816); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1372;
    nodes1372 = node.contents();
    oldNodes.replaceWith(nodes1372);
  }));
  var nodes1374 = $("<span>");
  root1815.append(nodes1374);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1818 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(15, function(result__) {
                       var tmp1359 = result__;
                       var result__ = mobl.alert("Triangles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1262 = mobl.ref(result__);
    
    var nodes1375 = $("<span>");
    root1818.append(nodes1375);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1262, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1819 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1376 = $("<span>");
      root1819.append(nodes1376);
      subs__.addSub((mobl.label)(mobl.ref("+Triangles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1820 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1820); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1376;
        nodes1376 = node.contents();
        oldNodes.replaceWith(nodes1376);
      }));
      callback(root1819); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1375;
      nodes1375 = node.contents();
      oldNodes.replaceWith(nodes1375);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(16, function(result__) {
                       var tmp1358 = result__;
                       var result__ = mobl.alert("Circles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1263 = mobl.ref(result__);
    
    var nodes1377 = $("<span>");
    root1818.append(nodes1377);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1263, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1821 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1378 = $("<span>");
      root1821.append(nodes1378);
      subs__.addSub((mobl.label)(mobl.ref("+Circles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1822 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1822); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1378;
        nodes1378 = node.contents();
        oldNodes.replaceWith(nodes1378);
      }));
      callback(root1821); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1377;
      nodes1377 = node.contents();
      oldNodes.replaceWith(nodes1377);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(6, function(result__) {
                       var tmp1357 = result__;
                       var result__ = mobl.alert("3D lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1264 = mobl.ref(result__);
    
    var nodes1379 = $("<span>");
    root1818.append(nodes1379);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1264, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1823 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1380 = $("<span>");
      root1823.append(nodes1380);
      subs__.addSub((mobl.label)(mobl.ref("+ 3D lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1824 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1824); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1380;
        nodes1380 = node.contents();
        oldNodes.replaceWith(nodes1380);
      }));
      callback(root1823); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1379;
      nodes1379 = node.contents();
      oldNodes.replaceWith(nodes1379);
    }));
    callback(root1818); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1374;
    nodes1374 = node.contents();
    oldNodes.replaceWith(nodes1374);
  }));
  callback(root1815); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root1825 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1381 = $("<span>");
  root1825.append(nodes1381);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1826 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1266 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1265 = mobl.ref(result__);
    
    var nodes1382 = $("<span>");
    root1826.append(nodes1382);
    subs__.addSub((ui.backButton)(tmp1265, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1266, function(_, callback) {
      var root1827 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1827); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1382;
      nodes1382 = node.contents();
      oldNodes.replaceWith(nodes1382);
    }));
    callback(root1826); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1381;
    nodes1381 = node.contents();
    oldNodes.replaceWith(nodes1381);
  }));
  var nodes1383 = $("<span>");
  root1825.append(nodes1383);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1828 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(8, function(result__) {
                       var tmp1363 = result__;
                       var result__ = mobl.alert("Arithmetic Progressions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1267 = mobl.ref(result__);
    
    var nodes1384 = $("<span>");
    root1828.append(nodes1384);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1267, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1829 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1385 = $("<span>");
      root1829.append(nodes1385);
      subs__.addSub((mobl.label)(mobl.ref("+Arithmetic progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1830 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1830); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1385;
        nodes1385 = node.contents();
        oldNodes.replaceWith(nodes1385);
      }));
      callback(root1829); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1384;
      nodes1384 = node.contents();
      oldNodes.replaceWith(nodes1384);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(12, function(result__) {
                       var tmp1362 = result__;
                       var result__ = mobl.alert("Binomial Expansion Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1268 = mobl.ref(result__);
    
    var nodes1386 = $("<span>");
    root1828.append(nodes1386);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1268, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1831 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1387 = $("<span>");
      root1831.append(nodes1387);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial expansion"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1832 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1832); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1387;
        nodes1387 = node.contents();
        oldNodes.replaceWith(nodes1387);
      }));
      callback(root1831); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1386;
      nodes1386 = node.contents();
      oldNodes.replaceWith(nodes1386);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(23, function(result__) {
                       var tmp1361 = result__;
                       var result__ = mobl.alert("Geometric Progression Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1269 = mobl.ref(result__);
    
    var nodes1388 = $("<span>");
    root1828.append(nodes1388);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1269, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1833 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1389 = $("<span>");
      root1833.append(nodes1389);
      subs__.addSub((mobl.label)(mobl.ref("+Geometric progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1834 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1834); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1389;
        nodes1389 = node.contents();
        oldNodes.replaceWith(nodes1389);
      }));
      callback(root1833); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1388;
      nodes1388 = node.contents();
      oldNodes.replaceWith(nodes1388);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(2, function(result__) {
                       var tmp1360 = result__;
                       var result__ = mobl.alert("Binomial theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1270 = mobl.ref(result__);
    
    var nodes1390 = $("<span>");
    root1828.append(nodes1390);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1270, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1835 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1391 = $("<span>");
      root1835.append(nodes1391);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1836 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1836); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1391;
        nodes1391 = node.contents();
        oldNodes.replaceWith(nodes1391);
      }));
      callback(root1835); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1390;
      nodes1390 = node.contents();
      oldNodes.replaceWith(nodes1390);
    }));
    callback(root1828); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1383;
    nodes1383 = node.contents();
    oldNodes.replaceWith(nodes1383);
  }));
  callback(root1825); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root1837 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1392 = $("<span>");
  root1837.append(nodes1392);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1838 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1272 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1271 = mobl.ref(result__);
    
    var nodes1393 = $("<span>");
    root1838.append(nodes1393);
    subs__.addSub((ui.backButton)(tmp1271, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1272, function(_, callback) {
      var root1839 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1839); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1393;
      nodes1393 = node.contents();
      oldNodes.replaceWith(nodes1393);
    }));
    callback(root1838); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1392;
    nodes1392 = node.contents();
    oldNodes.replaceWith(nodes1392);
  }));
  var nodes1394 = $("<span>");
  root1837.append(nodes1394);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1840 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(5, function(result__) {
                       var tmp1365 = result__;
                       var result__ = mobl.alert("Scalar product Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1273 = mobl.ref(result__);
    
    var nodes1395 = $("<span>");
    root1840.append(nodes1395);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1273, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1841 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1396 = $("<span>");
      root1841.append(nodes1396);
      subs__.addSub((mobl.label)(mobl.ref("+Scalar products"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1842 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1842); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1396;
        nodes1396 = node.contents();
        oldNodes.replaceWith(nodes1396);
      }));
      callback(root1841); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1395;
      nodes1395 = node.contents();
      oldNodes.replaceWith(nodes1395);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(18, function(result__) {
                       var tmp1364 = result__;
                       var result__ = mobl.alert("Vector equation of lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1274 = mobl.ref(result__);
    
    var nodes1397 = $("<span>");
    root1840.append(nodes1397);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1274, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1843 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1398 = $("<span>");
      root1843.append(nodes1398);
      subs__.addSub((mobl.label)(mobl.ref("+Vector equation of lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1844 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1844); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1398;
        nodes1398 = node.contents();
        oldNodes.replaceWith(nodes1398);
      }));
      callback(root1843); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1397;
      nodes1397 = node.contents();
      oldNodes.replaceWith(nodes1397);
    }));
    callback(root1840); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1394;
    nodes1394 = node.contents();
    oldNodes.replaceWith(nodes1394);
  }));
  callback(root1837); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root1845 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1399 = $("<span>");
  root1845.append(nodes1399);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1846 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1276 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1275 = mobl.ref(result__);
    
    var nodes1400 = $("<span>");
    root1846.append(nodes1400);
    subs__.addSub((ui.backButton)(tmp1275, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1276, function(_, callback) {
      var root1847 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1847); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1400;
      nodes1400 = node.contents();
      oldNodes.replaceWith(nodes1400);
    }));
    callback(root1846); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1399;
    nodes1399 = node.contents();
    oldNodes.replaceWith(nodes1399);
  }));
  var nodes1401 = $("<span>");
  root1845.append(nodes1401);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1848 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(14, function(result__) {
                       var tmp1370 = result__;
                       var result__ = mobl.alert("Stationary points Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1277 = mobl.ref(result__);
    
    var nodes1402 = $("<span>");
    root1848.append(nodes1402);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1277, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1849 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1403 = $("<span>");
      root1849.append(nodes1403);
      subs__.addSub((mobl.label)(mobl.ref("+Stationary points"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1850 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1850); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1403;
        nodes1403 = node.contents();
        oldNodes.replaceWith(nodes1403);
      }));
      callback(root1849); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1402;
      nodes1402 = node.contents();
      oldNodes.replaceWith(nodes1402);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(20, function(result__) {
                       var tmp1369 = result__;
                       var result__ = mobl.alert("Chain rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1278 = mobl.ref(result__);
    
    var nodes1404 = $("<span>");
    root1848.append(nodes1404);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1278, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1851 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1405 = $("<span>");
      root1851.append(nodes1405);
      subs__.addSub((mobl.label)(mobl.ref("+Chain rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1852 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1852); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1405;
        nodes1405 = node.contents();
        oldNodes.replaceWith(nodes1405);
      }));
      callback(root1851); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1404;
      nodes1404 = node.contents();
      oldNodes.replaceWith(nodes1404);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(21, function(result__) {
                       var tmp1368 = result__;
                       var result__ = mobl.alert("Product rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1279 = mobl.ref(result__);
    
    var nodes1406 = $("<span>");
    root1848.append(nodes1406);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1279, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1853 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1407 = $("<span>");
      root1853.append(nodes1407);
      subs__.addSub((mobl.label)(mobl.ref("+Product rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1854 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1854); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1407;
        nodes1407 = node.contents();
        oldNodes.replaceWith(nodes1407);
      }));
      callback(root1853); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1406;
      nodes1406 = node.contents();
      oldNodes.replaceWith(nodes1406);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(22, function(result__) {
                       var tmp1367 = result__;
                       var result__ = mobl.alert("Quotient rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1280 = mobl.ref(result__);
    
    var nodes1408 = $("<span>");
    root1848.append(nodes1408);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1280, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1855 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1409 = $("<span>");
      root1855.append(nodes1409);
      subs__.addSub((mobl.label)(mobl.ref("+Quotient rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1856 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1856); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1409;
        nodes1409 = node.contents();
        oldNodes.replaceWith(nodes1409);
      }));
      callback(root1855); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1408;
      nodes1408 = node.contents();
      oldNodes.replaceWith(nodes1408);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(19, function(result__) {
                       var tmp1366 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1281 = mobl.ref(result__);
    
    var nodes1410 = $("<span>");
    root1848.append(nodes1410);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1281, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1857 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1411 = $("<span>");
      root1857.append(nodes1411);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1858 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1858); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1411;
        nodes1411 = node.contents();
        oldNodes.replaceWith(nodes1411);
      }));
      callback(root1857); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1410;
      nodes1410 = node.contents();
      oldNodes.replaceWith(nodes1410);
    }));
    callback(root1848); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1401;
    nodes1401 = node.contents();
    oldNodes.replaceWith(nodes1401);
  }));
  callback(root1845); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root1859 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1412 = $("<span>");
  root1859.append(nodes1412);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1860 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1283 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1282 = mobl.ref(result__);
    
    var nodes1413 = $("<span>");
    root1860.append(nodes1413);
    subs__.addSub((ui.backButton)(tmp1282, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1283, function(_, callback) {
      var root1861 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1861); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1413;
      nodes1413 = node.contents();
      oldNodes.replaceWith(nodes1413);
    }));
    callback(root1860); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1412;
    nodes1412 = node.contents();
    oldNodes.replaceWith(nodes1412);
  }));
  var nodes1414 = $("<span>");
  root1859.append(nodes1414);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1862 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(28, function(result__) {
                       var tmp1373 = result__;
                       var result__ = mobl.alert("Integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1284 = mobl.ref(result__);
    
    var nodes1415 = $("<span>");
    root1862.append(nodes1415);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1284, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1863 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1416 = $("<span>");
      root1863.append(nodes1416);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1864 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1864); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1416;
        nodes1416 = node.contents();
        oldNodes.replaceWith(nodes1416);
      }));
      callback(root1863); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1415;
      nodes1415 = node.contents();
      oldNodes.replaceWith(nodes1415);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(3, function(result__) {
                       var tmp1372 = result__;
                       var result__ = mobl.alert("Polynomial integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1285 = mobl.ref(result__);
    
    var nodes1417 = $("<span>");
    root1862.append(nodes1417);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1285, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1865 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1418 = $("<span>");
      root1865.append(nodes1418);
      subs__.addSub((mobl.label)(mobl.ref("+Polynomial integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1866 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1866); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1418;
        nodes1418 = node.contents();
        oldNodes.replaceWith(nodes1418);
      }));
      callback(root1865); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1417;
      nodes1417 = node.contents();
      oldNodes.replaceWith(nodes1417);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(4, function(result__) {
                       var tmp1371 = result__;
                       var result__ = mobl.alert("Trig integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1286 = mobl.ref(result__);
    
    var nodes1419 = $("<span>");
    root1862.append(nodes1419);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1286, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1867 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1420 = $("<span>");
      root1867.append(nodes1420);
      subs__.addSub((mobl.label)(mobl.ref("+Trig integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1868 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1868); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1420;
        nodes1420 = node.contents();
        oldNodes.replaceWith(nodes1420);
      }));
      callback(root1867); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1419;
      nodes1419 = node.contents();
      oldNodes.replaceWith(nodes1419);
    }));
    callback(root1862); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1414;
    nodes1414 = node.contents();
    oldNodes.replaceWith(nodes1414);
  }));
  callback(root1859); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root1869 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1421 = $("<span>");
  root1869.append(nodes1421);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1870 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1288 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1287 = mobl.ref(result__);
    
    var nodes1422 = $("<span>");
    root1870.append(nodes1422);
    subs__.addSub((ui.backButton)(tmp1287, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1288, function(_, callback) {
      var root1871 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1871); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1422;
      nodes1422 = node.contents();
      oldNodes.replaceWith(nodes1422);
    }));
    callback(root1870); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1421;
    nodes1421 = node.contents();
    oldNodes.replaceWith(nodes1421);
  }));
  var nodes1423 = $("<span>");
  root1869.append(nodes1423);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1872 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(29, function(result__) {
                       var tmp1374 = result__;
                       var result__ = mobl.alert("Differential equations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1289 = mobl.ref(result__);
    
    var nodes1424 = $("<span>");
    root1872.append(nodes1424);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1289, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1873 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1425 = $("<span>");
      root1873.append(nodes1425);
      subs__.addSub((mobl.label)(mobl.ref("+Diff equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1874 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1874); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1425;
        nodes1425 = node.contents();
        oldNodes.replaceWith(nodes1425);
      }));
      callback(root1873); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1424;
      nodes1424 = node.contents();
      oldNodes.replaceWith(nodes1424);
    }));
    callback(root1872); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1423;
    nodes1423 = node.contents();
    oldNodes.replaceWith(nodes1423);
  }));
  callback(root1869); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root1875 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1426 = $("<span>");
  root1875.append(nodes1426);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1876 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F1", function(result__) {
                       var tmp1387 = result__;
                       var result__ = mobl.alert("Complex arithmetic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1290 = mobl.ref(result__);
    
    var nodes1427 = $("<span>");
    root1876.append(nodes1427);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1290, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1877 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1428 = $("<span>");
      root1877.append(nodes1428);
      subs__.addSub((mobl.label)(mobl.ref("+Complex arithmetic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1878 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1878); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1428;
        nodes1428 = node.contents();
        oldNodes.replaceWith(nodes1428);
      }));
      callback(root1877); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1427;
      nodes1427 = node.contents();
      oldNodes.replaceWith(nodes1427);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F2", function(result__) {
                       var tmp1386 = result__;
                       var result__ = mobl.alert("Modulus argument Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1291 = mobl.ref(result__);
    
    var nodes1429 = $("<span>");
    root1876.append(nodes1429);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1291, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1879 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1430 = $("<span>");
      root1879.append(nodes1430);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus argument"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1880 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1880); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1430;
        nodes1430 = node.contents();
        oldNodes.replaceWith(nodes1430);
      }));
      callback(root1879); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1429;
      nodes1429 = node.contents();
      oldNodes.replaceWith(nodes1429);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F3a", function(result__) {
                       var tmp1385 = result__;
                       var result__ = mobl.alert("2nd order DE Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1292 = mobl.ref(result__);
    
    var nodes1431 = $("<span>");
    root1876.append(nodes1431);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1292, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1881 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1432 = $("<span>");
      root1881.append(nodes1432);
      subs__.addSub((mobl.label)(mobl.ref("+2nd order DEs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1882 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1882); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1432;
        nodes1432 = node.contents();
        oldNodes.replaceWith(nodes1432);
      }));
      callback(root1881); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1431;
      nodes1431 = node.contents();
      oldNodes.replaceWith(nodes1431);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F4", function(result__) {
                       var tmp1384 = result__;
                       var result__ = mobl.alert("Rank 2 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1293 = mobl.ref(result__);
    
    var nodes1433 = $("<span>");
    root1876.append(nodes1433);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1293, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1883 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1434 = $("<span>");
      root1883.append(nodes1434);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 2 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1884 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1884); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1434;
        nodes1434 = node.contents();
        oldNodes.replaceWith(nodes1434);
      }));
      callback(root1883); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1433;
      nodes1433 = node.contents();
      oldNodes.replaceWith(nodes1433);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F5", function(result__) {
                       var tmp1383 = result__;
                       var result__ = mobl.alert("Taylor Series Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1294 = mobl.ref(result__);
    
    var nodes1435 = $("<span>");
    root1876.append(nodes1435);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1294, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1885 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1436 = $("<span>");
      root1885.append(nodes1436);
      subs__.addSub((mobl.label)(mobl.ref("+Taylor Series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1886 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1886); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1436;
        nodes1436 = node.contents();
        oldNodes.replaceWith(nodes1436);
      }));
      callback(root1885); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1435;
      nodes1435 = node.contents();
      oldNodes.replaceWith(nodes1435);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F6", function(result__) {
                       var tmp1382 = result__;
                       var result__ = mobl.alert("Polar Coordinates Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1295 = mobl.ref(result__);
    
    var nodes1437 = $("<span>");
    root1876.append(nodes1437);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1295, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1887 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1438 = $("<span>");
      root1887.append(nodes1438);
      subs__.addSub((mobl.label)(mobl.ref("+Polar Coordinates"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1888 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1888); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1438;
        nodes1438 = node.contents();
        oldNodes.replaceWith(nodes1438);
      }));
      callback(root1887); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1437;
      nodes1437 = node.contents();
      oldNodes.replaceWith(nodes1437);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F7", function(result__) {
                       var tmp1381 = result__;
                       var result__ = mobl.alert("Rank 3 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1296 = mobl.ref(result__);
    
    var nodes1439 = $("<span>");
    root1876.append(nodes1439);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1296, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1889 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1440 = $("<span>");
      root1889.append(nodes1440);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 3 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1890 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1890); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1440;
        nodes1440 = node.contents();
        oldNodes.replaceWith(nodes1440);
      }));
      callback(root1889); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1439;
      nodes1439 = node.contents();
      oldNodes.replaceWith(nodes1439);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F8", function(result__) {
                       var tmp1380 = result__;
                       var result__ = mobl.alert("Further vectors added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1297 = mobl.ref(result__);
    
    var nodes1441 = $("<span>");
    root1876.append(nodes1441);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1297, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1891 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1442 = $("<span>");
      root1891.append(nodes1442);
      subs__.addSub((mobl.label)(mobl.ref("+Further vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1892 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1892); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1442;
        nodes1442 = node.contents();
        oldNodes.replaceWith(nodes1442);
      }));
      callback(root1891); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1441;
      nodes1441 = node.contents();
      oldNodes.replaceWith(nodes1441);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F9", function(result__) {
                       var tmp1379 = result__;
                       var result__ = mobl.alert("Newton-Raphson added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1298 = mobl.ref(result__);
    
    var nodes1443 = $("<span>");
    root1876.append(nodes1443);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1298, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1893 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1444 = $("<span>");
      root1893.append(nodes1444);
      subs__.addSub((mobl.label)(mobl.ref("+Newton-Raphson"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1894 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1894); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1444;
        nodes1444 = node.contents();
        oldNodes.replaceWith(nodes1444);
      }));
      callback(root1893); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1443;
      nodes1443 = node.contents();
      oldNodes.replaceWith(nodes1443);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F10", function(result__) {
                       var tmp1378 = result__;
                       var result__ = mobl.alert("Further inequalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1299 = mobl.ref(result__);
    
    var nodes1445 = $("<span>");
    root1876.append(nodes1445);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1299, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1895 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1446 = $("<span>");
      root1895.append(nodes1446);
      subs__.addSub((mobl.label)(mobl.ref("+Further inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1896 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1896); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1446;
        nodes1446 = node.contents();
        oldNodes.replaceWith(nodes1446);
      }));
      callback(root1895); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1445;
      nodes1445 = node.contents();
      oldNodes.replaceWith(nodes1445);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F11", function(result__) {
                       var tmp1377 = result__;
                       var result__ = mobl.alert("Integration by substitution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1300 = mobl.ref(result__);
    
    var nodes1447 = $("<span>");
    root1876.append(nodes1447);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1300, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1897 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1448 = $("<span>");
      root1897.append(nodes1448);
      subs__.addSub((mobl.label)(mobl.ref("+Integration by substitution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1898 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1898); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1448;
        nodes1448 = node.contents();
        oldNodes.replaceWith(nodes1448);
      }));
      callback(root1897); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1447;
      nodes1447 = node.contents();
      oldNodes.replaceWith(nodes1447);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F12", function(result__) {
                       var tmp1376 = result__;
                       var result__ = mobl.alert("Figures of revolution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1301 = mobl.ref(result__);
    
    var nodes1449 = $("<span>");
    root1876.append(nodes1449);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1301, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1899 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1450 = $("<span>");
      root1899.append(nodes1450);
      subs__.addSub((mobl.label)(mobl.ref("+Figures of revolution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1900 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1900); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1450;
        nodes1450 = node.contents();
        oldNodes.replaceWith(nodes1450);
      }));
      callback(root1899); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1449;
      nodes1449 = node.contents();
      oldNodes.replaceWith(nodes1449);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F13", function(result__) {
                       var tmp1375 = result__;
                       var result__ = mobl.alert("Matrix transformations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1302 = mobl.ref(result__);
    
    var nodes1451 = $("<span>");
    root1876.append(nodes1451);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1302, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1901 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1452 = $("<span>");
      root1901.append(nodes1452);
      subs__.addSub((mobl.label)(mobl.ref("+Matrix transformations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1902 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1902); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1452;
        nodes1452 = node.contents();
        oldNodes.replaceWith(nodes1452);
      }));
      callback(root1901); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1451;
      nodes1451 = node.contents();
      oldNodes.replaceWith(nodes1451);
    }));
    callback(root1876); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1426;
    nodes1426 = node.contents();
    oldNodes.replaceWith(nodes1426);
  }));
  callback(root1875); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root1903 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1453 = $("<span>");
  root1903.append(nodes1453);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1904 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S1", function(result__) {
                       var tmp1393 = result__;
                       var result__ = mobl.alert("Discrete Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1303 = mobl.ref(result__);
    
    var nodes1454 = $("<span>");
    root1904.append(nodes1454);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1303, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1905 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1455 = $("<span>");
      root1905.append(nodes1455);
      subs__.addSub((mobl.label)(mobl.ref("+Discrete Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1906 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1906); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1455;
        nodes1455 = node.contents();
        oldNodes.replaceWith(nodes1455);
      }));
      callback(root1905); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1454;
      nodes1454 = node.contents();
      oldNodes.replaceWith(nodes1454);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S2", function(result__) {
                       var tmp1392 = result__;
                       var result__ = mobl.alert("Continuous Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1304 = mobl.ref(result__);
    
    var nodes1456 = $("<span>");
    root1904.append(nodes1456);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1304, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1907 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1457 = $("<span>");
      root1907.append(nodes1457);
      subs__.addSub((mobl.label)(mobl.ref("+Continuous Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1908 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1908); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1457;
        nodes1457 = node.contents();
        oldNodes.replaceWith(nodes1457);
      }));
      callback(root1907); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1456;
      nodes1456 = node.contents();
      oldNodes.replaceWith(nodes1456);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S3", function(result__) {
                       var tmp1391 = result__;
                       var result__ = mobl.alert("Hypothesis Testing Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1305 = mobl.ref(result__);
    
    var nodes1458 = $("<span>");
    root1904.append(nodes1458);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1305, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1909 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1459 = $("<span>");
      root1909.append(nodes1459);
      subs__.addSub((mobl.label)(mobl.ref("+Hypothesis Testing"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1910 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1910); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1459;
        nodes1459 = node.contents();
        oldNodes.replaceWith(nodes1459);
      }));
      callback(root1909); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1458;
      nodes1458 = node.contents();
      oldNodes.replaceWith(nodes1458);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S4", function(result__) {
                       var tmp1390 = result__;
                       var result__ = mobl.alert("Confidence Intervals Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1306 = mobl.ref(result__);
    
    var nodes1460 = $("<span>");
    root1904.append(nodes1460);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1306, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1911 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1461 = $("<span>");
      root1911.append(nodes1461);
      subs__.addSub((mobl.label)(mobl.ref("+Confidence Intervals"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1912 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1912); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1461;
        nodes1461 = node.contents();
        oldNodes.replaceWith(nodes1461);
      }));
      callback(root1911); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1460;
      nodes1460 = node.contents();
      oldNodes.replaceWith(nodes1460);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S5", function(result__) {
                       var tmp1389 = result__;
                       var result__ = mobl.alert("Chi Squared Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1307 = mobl.ref(result__);
    
    var nodes1462 = $("<span>");
    root1904.append(nodes1462);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1307, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1913 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1463 = $("<span>");
      root1913.append(nodes1463);
      subs__.addSub((mobl.label)(mobl.ref("+Chi Squared"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1914 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1914); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1463;
        nodes1463 = node.contents();
        oldNodes.replaceWith(nodes1463);
      }));
      callback(root1913); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1462;
      nodes1462 = node.contents();
      oldNodes.replaceWith(nodes1462);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S6", function(result__) {
                       var tmp1388 = result__;
                       var result__ = mobl.alert("Product Moment Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1308 = mobl.ref(result__);
    
    var nodes1464 = $("<span>");
    root1904.append(nodes1464);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1308, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1915 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1465 = $("<span>");
      root1915.append(nodes1465);
      subs__.addSub((mobl.label)(mobl.ref("+Product Moments"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1916 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1916); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1465;
        nodes1465 = node.contents();
        oldNodes.replaceWith(nodes1465);
      }));
      callback(root1915); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1464;
      nodes1464 = node.contents();
      oldNodes.replaceWith(nodes1464);
    }));
    callback(root1904); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1453;
    nodes1453 = node.contents();
    oldNodes.replaceWith(nodes1453);
  }));
  callback(root1903); return subs__;
  
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
  var root1917 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node695 = $("<div>");
  
  var ref689 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref689.get() !== null) {
    node695.attr('class', ref689.get());
    subs__.addSub(ref689.addEventListener('change', function(_, ref, val) {
      node695.attr('class', val);
    }));
    
  }
  subs__.addSub(ref689.rebind());
  
  var val351 = onclick.get();
  if(val351 !== null) {
    subs__.addSub(mobl.domBind(node695, 'tap', val351));
  }
  
  
  var node696 = $("<div>");
  
  var ref688 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref688.get() !== null) {
    node696.attr('class', ref688.get());
    subs__.addSub(ref688.addEventListener('change', function(_, ref, val) {
      node696.attr('class', val);
    }));
    
  }
  subs__.addSub(ref688.rebind());
  
  
  var node697 = $("<div>");
  
  var ref686 = text;
  node697.text(""+ref686.get());
  var ignore135 = false;
  subs__.addSub(ref686.addEventListener('change', function(_, ref, val) {
    if(ignore135) return;
    node697.text(""+val);
  }));
  subs__.addSub(ref686.rebind());
  
  
  var ref687 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref687.get() !== null) {
    node697.attr('class', ref687.get());
    subs__.addSub(ref687.addEventListener('change', function(_, ref, val) {
      node697.attr('class', val);
    }));
    
  }
  subs__.addSub(ref687.rebind());
  
  node696.append(node697);
  node695.append(node696);
  var nodes1466 = $("<span>");
  node695.append(nodes1466);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl281();
  }));
  
  function renderControl281() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1918 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1918); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1466;
      nodes1466 = node.contents();
      oldNodes.replaceWith(nodes1466);
    }));
  }
  renderControl281();
  root1917.append(node695);
  callback(root1917); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mobl.sleep(100, function(result__) {
    var tmp1394 = result__;
    mathJAX.renderMaths(function(result__) {
      var tmp1395 = result__;
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
  var root1919 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node698 = $("<span>");
  root1919.append(node698);
  var condSubs169 = new mobl.CompSubscription();
  subs__.addSub(condSubs169);
  var oldValue169;
  var renderCond169 = function() {
    var value1169 = qa.get().correct;
    if(oldValue169 === value1169) return;
    oldValue169 = value1169;
    var subs__ = condSubs169;
    subs__.unsubscribe();
    node698.empty();
    if(value1169) {
      var nodes1467 = $("<span>");
      node698.append(nodes1467);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.agreeStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1920 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = qa.get().answer != "%GRAPH%";
        var tmp1312 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp1312.set(qa.get().answer != "%GRAPH%");
        }));
        
        
        var node699 = $("<span>");
        root1920.append(node699);
        var condSubs170 = new mobl.CompSubscription();
        subs__.addSub(condSubs170);
        var oldValue170;
        var renderCond170 = function() {
          var value1170 = tmp1312.get();
          if(oldValue170 === value1170) return;
          oldValue170 = value1170;
          var subs__ = condSubs170;
          subs__.unsubscribe();
          node699.empty();
          if(value1170) {
            var result__ = "A" + qa.get().number + ". ";
            var tmp1309 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp1309.set("A" + qa.get().number + ". ");
            }));
            
            var nodes1468 = $("<span>");
            node699.append(nodes1468);
            subs__.addSub((mobl.label)(tmp1309, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1921 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1921); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1468;
              nodes1468 = node.contents();
              oldNodes.replaceWith(nodes1468);
            }));
            var nodes1469 = $("<span>");
            node699.append(nodes1469);
            subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
              var root1922 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1922); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1469;
              nodes1469 = node.contents();
              oldNodes.replaceWith(nodes1469);
            }));
            
            
            
          } else {
            var result__ = "A" + qa.get().number + ". ";
            var tmp1310 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp1310.set("A" + qa.get().number + ". ");
            }));
            
            var nodes1470 = $("<span>");
            node699.append(nodes1470);
            subs__.addSub((mobl.label)(tmp1310, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1923 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1923); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1470;
              nodes1470 = node.contents();
              oldNodes.replaceWith(nodes1470);
            }));
            var nodes1471 = $("<span>");
            node699.append(nodes1471);
            subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
              var root1924 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1924); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1471;
              nodes1471 = node.contents();
              oldNodes.replaceWith(nodes1471);
            }));
            
            var node700 = $("<span>");
            node700.attr('style', "display:none");
            
            nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
              var tmp1397 = result__;
              var tmp1311 = mobl.ref(result__);
              subs__.addSub(qa.addEventListener('change', function() {
                nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                  var tmp1396 = result__;
                  var result__ = tmp1396;
                  tmp1311.set(result__);
                  
                });
              }));
              
              var nodes1472 = $("<span>");
              node700.append(nodes1472);
              subs__.addSub((mobl.html)(tmp1311, function(_, callback) {
                var root1925 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1925); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1472;
                nodes1472 = node.contents();
                oldNodes.replaceWith(nodes1472);
              }));
              node699.append(node700);
              
              
            });
            
            
            
          }
        };
        renderCond170();
        subs__.addSub(tmp1312.addEventListener('change', function() {
          renderCond170();
        }));
        
        callback(root1920); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1467;
        nodes1467 = node.contents();
        oldNodes.replaceWith(nodes1467);
      }));
      
      
    } else {
      var nodes1473 = $("<span>");
      node698.append(nodes1473);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.disagreeStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1926 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = qa.get().answer != "%GRAPH%";
        var tmp1316 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp1316.set(qa.get().answer != "%GRAPH%");
        }));
        
        
        var node701 = $("<span>");
        root1926.append(node701);
        var condSubs171 = new mobl.CompSubscription();
        subs__.addSub(condSubs171);
        var oldValue171;
        var renderCond171 = function() {
          var value1171 = tmp1316.get();
          if(oldValue171 === value1171) return;
          oldValue171 = value1171;
          var subs__ = condSubs171;
          subs__.unsubscribe();
          node701.empty();
          if(value1171) {
            var result__ = "A" + qa.get().number + ". ";
            var tmp1313 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp1313.set("A" + qa.get().number + ". ");
            }));
            
            var nodes1474 = $("<span>");
            node701.append(nodes1474);
            subs__.addSub((mobl.label)(tmp1313, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1927 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1927); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1474;
              nodes1474 = node.contents();
              oldNodes.replaceWith(nodes1474);
            }));
            var nodes1475 = $("<span>");
            node701.append(nodes1475);
            subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
              var root1928 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1928); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1475;
              nodes1475 = node.contents();
              oldNodes.replaceWith(nodes1475);
            }));
            
            
            
          } else {
            var result__ = "A" + qa.get().number + ". ";
            var tmp1314 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp1314.set("A" + qa.get().number + ". ");
            }));
            
            var nodes1476 = $("<span>");
            node701.append(nodes1476);
            subs__.addSub((mobl.label)(tmp1314, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1929 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1929); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1476;
              nodes1476 = node.contents();
              oldNodes.replaceWith(nodes1476);
            }));
            var nodes1477 = $("<span>");
            node701.append(nodes1477);
            subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
              var root1930 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1930); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1477;
              nodes1477 = node.contents();
              oldNodes.replaceWith(nodes1477);
            }));
            
            var node702 = $("<span>");
            node702.attr('style', "display:none");
            
            nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
              var tmp1399 = result__;
              var tmp1315 = mobl.ref(result__);
              subs__.addSub(qa.addEventListener('change', function() {
                nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                  var tmp1398 = result__;
                  var result__ = tmp1398;
                  tmp1315.set(result__);
                  
                });
              }));
              
              var nodes1478 = $("<span>");
              node702.append(nodes1478);
              subs__.addSub((mobl.html)(tmp1315, function(_, callback) {
                var root1931 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1931); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1478;
                nodes1478 = node.contents();
                oldNodes.replaceWith(nodes1478);
              }));
              node701.append(node702);
              
              
            });
            
            
            
          }
        };
        renderCond171();
        subs__.addSub(tmp1316.addEventListener('change', function() {
          renderCond171();
        }));
        
        callback(root1926); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1473;
        nodes1473 = node.contents();
        oldNodes.replaceWith(nodes1473);
      }));
      
      
    }
  };
  renderCond169();
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    renderCond169();
  }));
  
  var nodes1479 = $("<span>");
  root1919.append(nodes1479);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root1932 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node703 = $("<span>");
    node703.attr('style', "display:none");
    
    nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
      var tmp1401 = result__;
      var tmp1317 = mobl.ref(result__);
      subs__.addSub(qa.addEventListener('change', function() {
        nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
          var tmp1400 = result__;
          var result__ = tmp1400;
          tmp1317.set(result__);
          
        });
      }));
      
      var nodes1483 = $("<span>");
      node703.append(nodes1483);
      subs__.addSub((mobl.html)(tmp1317, function(_, callback) {
        var root1936 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1936); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1483;
        nodes1483 = node.contents();
        oldNodes.replaceWith(nodes1483);
      }));
      root1932.append(node703);
      var nodes1480 = $("<span>");
      root1932.append(nodes1480);
      subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1933 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1933); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1480;
        nodes1480 = node.contents();
        oldNodes.replaceWith(nodes1480);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = true;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp1318 = mobl.ref(result__);
      
      var nodes1481 = $("<span>");
      root1932.append(nodes1481);
      subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp1318, function(_, callback) {
        var root1934 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1934); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1481;
        nodes1481 = node.contents();
        oldNodes.replaceWith(nodes1481);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = false;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp1319 = mobl.ref(result__);
      
      var nodes1482 = $("<span>");
      root1932.append(nodes1482);
      subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp1319, function(_, callback) {
        var root1935 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1935); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1482;
        nodes1482 = node.contents();
        oldNodes.replaceWith(nodes1482);
      }));
      callback(root1932); return subs__;
      
      
      
      
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1479;
    nodes1479 = node.contents();
    oldNodes.replaceWith(nodes1479);
  }));
  callback(root1919); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp1402 = result__;
    var result__ = tmp1402;
    var qa2 = result__;
    var result__ = qa2 == null;
    if(result__) {
      nrichRPG.questionAnswer.QA.all().one(function(result__) {
        var tmp1403 = result__;
        var result__ = tmp1403;
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
  var root1937 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node704 = $("<span>");
  
  var ref690 = mobl.ref("color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
  if(ref690.get() !== null) {
    node704.attr('style', ref690.get());
    subs__.addSub(ref690.addEventListener('change', function(_, ref, val) {
      node704.attr('style', val);
    }));
    subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
      node704.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
      node704.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    
  }
  subs__.addSub(ref690.rebind());
  
  var result__ = "Q" + number.get() + ". " + qa.get().topic;
  var tmp1320 = mobl.ref(result__);
  subs__.addSub(number.addEventListener('change', function() {
    tmp1320.set("Q" + number.get() + ". " + qa.get().topic);
  }));
  subs__.addSub(mobl.ref(qa, 'topic').addEventListener('change', function() {
    tmp1320.set("Q" + number.get() + ". " + qa.get().topic);
  }));
  
  var nodes1484 = $("<span>");
  node704.append(nodes1484);
  subs__.addSub((mobl.html)(tmp1320, function(_, callback) {
    var root1938 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1938); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1484;
    nodes1484 = node.contents();
    oldNodes.replaceWith(nodes1484);
  }));
  root1937.append(node704);
  callback(root1937); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.showQA = function(qa, elements, callback) {
  var root1939 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  nrichRPG.questionAnswer.QA.all().count(function(result__) {
    var tmp1415 = result__;
    var result__ = tmp1415 > 0;
    var tmp1414 = result__;
    var result__ = qa.get() && tmp1414;
    var tmp1413 = result__;
    var tmp1329 = mobl.ref(result__);
    subs__.addSub(qa.addEventListener('change', function() {
      nrichRPG.questionAnswer.QA.all().count(function(result__) {
        var tmp1406 = result__;
        var result__ = tmp1406 > 0;
        var tmp1405 = result__;
        var result__ = qa.get() && tmp1405;
        var tmp1404 = result__;
        var result__ = tmp1404;
        tmp1329.set(result__);
        
      });
    }));
    subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all()).addEventListener('change', function() {
      nrichRPG.questionAnswer.QA.all().count(function(result__) {
        var tmp1409 = result__;
        var result__ = tmp1409 > 0;
        var tmp1408 = result__;
        var result__ = qa.get() && tmp1408;
        var tmp1407 = result__;
        var result__ = tmp1407;
        tmp1329.set(result__);
        
      });
    }));
    subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA).addEventListener('change', function() {
      nrichRPG.questionAnswer.QA.all().count(function(result__) {
        var tmp1412 = result__;
        var result__ = tmp1412 > 0;
        var tmp1411 = result__;
        var result__ = qa.get() && tmp1411;
        var tmp1410 = result__;
        var result__ = tmp1410;
        tmp1329.set(result__);
        
      });
    }));
    
    
    var node705 = $("<span>");
    root1939.append(node705);
    var condSubs172 = new mobl.CompSubscription();
    subs__.addSub(condSubs172);
    var oldValue172;
    var renderCond172 = function() {
      var value1172 = tmp1329.get();
      if(oldValue172 === value1172) return;
      oldValue172 = value1172;
      var subs__ = condSubs172;
      subs__.unsubscribe();
      node705.empty();
      if(value1172) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         mathJAX.renderMaths(function(result__) {
                           var tmp1423 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp1323 = mobl.ref(result__);
        
        var result__ = qa.get().topic.toLowerCase();
        var tmp1322 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'topic').addEventListener('change', function() {
          tmp1322.set(qa.get().topic.toLowerCase());
        }));
        
        var nodes1485 = $("<span>");
        node705.append(nodes1485);
        subs__.addSub((nrichRPG.coreWorkout.panelHeader)(tmp1322, tmp1323, function(_, callback) {
          var root1940 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var result__ = function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                             var tmp1416 = result__;
                             var result__ = tmp1416;
                             var qa2 = result__;
                             var result__ = mobl.remove(qa.get());
                             var result__ = qa2;
                             qa.set(result__);
                             nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                               var tmp1417 = result__;
                               if(callback && callback.apply) callback(); return;
                             });
                           });
                         };
          var tmp1321 = mobl.ref(result__);
          
          var nodes1486 = $("<span>");
          root1940.append(nodes1486);
          subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp1321, function(_, callback) {
            var root1941 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root1941); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes1486;
            nodes1486 = node.contents();
            oldNodes.replaceWith(nodes1486);
          }));
          callback(root1940); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes1485;
          nodes1485 = node.contents();
          oldNodes.replaceWith(nodes1485);
        }));
        var nodes1487 = $("<span>");
        node705.append(nodes1487);
        subs__.addSub((ui.group)(function(_, callback) {
          var root1942 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var result__ = function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           mathJAX.renderMaths(function(result__) {
                             var tmp1422 = result__;
                             if(callback && callback.apply) callback(); return;
                           });
                         };
          var tmp1326 = mobl.ref(result__);
          
          var nodes1488 = $("<span>");
          root1942.append(nodes1488);
          subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp1326, mobl.ref(null), mobl.ref(true), function(_, callback) {
            var root1943 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var result__ = "Q" + qa.get().number + ". " + qa.get().question;
            var tmp1324 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp1324.set("Q" + qa.get().number + ". " + qa.get().question);
            }));
            subs__.addSub(mobl.ref(qa, 'question').addEventListener('change', function() {
              tmp1324.set("Q" + qa.get().number + ". " + qa.get().question);
            }));
            
            var nodes1489 = $("<span>");
            root1943.append(nodes1489);
            subs__.addSub((mobl.html)(tmp1324, function(_, callback) {
              var root1944 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1944); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1489;
              nodes1489 = node.contents();
              oldNodes.replaceWith(nodes1489);
            }));
            
            var node706 = $("<span>");
            node706.attr('style', "display:none");
            
            nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
              var tmp1419 = result__;
              var tmp1325 = mobl.ref(result__);
              subs__.addSub(qa.addEventListener('change', function() {
                nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                  var tmp1418 = result__;
                  var result__ = tmp1418;
                  tmp1325.set(result__);
                  
                });
              }));
              
              var nodes1490 = $("<span>");
              node706.append(nodes1490);
              subs__.addSub((mobl.html)(tmp1325, function(_, callback) {
                var root1945 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1945); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1490;
                nodes1490 = node.contents();
                oldNodes.replaceWith(nodes1490);
              }));
              root1943.append(node706);
              callback(root1943); return subs__;
              
            });
            
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes1488;
            nodes1488 = node.contents();
            oldNodes.replaceWith(nodes1488);
          }));
          var result__ = function(event, callback) {
                           if(event && event.stopPropagation) event.stopPropagation();
                           mathJAX.renderMaths(function(result__) {
                             var tmp1421 = result__;
                             if(callback && callback.apply) callback(); return;
                           });
                         };
          var tmp1328 = mobl.ref(result__);
          
          var nodes1491 = $("<span>");
          root1942.append(nodes1491);
          subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1328, mobl.ref(null), mobl.ref(true), function(_, callback) {
            var root1946 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            var nodes1492 = $("<span>");
            root1946.append(nodes1492);
            subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1947 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                                 var tmp1420 = result__;
                                 if(callback && callback.apply) callback(); return;
                               });
                             };
              var tmp1327 = mobl.ref(result__);
              
              var nodes1493 = $("<span>");
              root1947.append(nodes1493);
              subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp1327, function(_, callback) {
                var root1948 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root1948); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1493;
                nodes1493 = node.contents();
                oldNodes.replaceWith(nodes1493);
              }));
              callback(root1947); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes1492;
              nodes1492 = node.contents();
              oldNodes.replaceWith(nodes1492);
            }));
            
            var node707 = $("<span>");
            root1946.append(node707);
            var condSubs173 = new mobl.CompSubscription();
            subs__.addSub(condSubs173);
            var oldValue173;
            var renderCond173 = function() {
              var value1173 = qa.get().done;
              if(oldValue173 === value1173) return;
              oldValue173 = value1173;
              var subs__ = condSubs173;
              subs__.unsubscribe();
              node707.empty();
              if(value1173) {
                var nodes1494 = $("<span>");
                node707.append(nodes1494);
                subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, function(_, callback) {
                  var root1949 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root1949); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes1494;
                  nodes1494 = node.contents();
                  oldNodes.replaceWith(nodes1494);
                }));
                
                
              } else {
                
              }
            };
            renderCond173();
            subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
              renderCond173();
            }));
            
            callback(root1946); return subs__;
            
            
            return subs__;
          }, function(node) {
            var oldNodes = nodes1491;
            nodes1491 = node.contents();
            oldNodes.replaceWith(nodes1491);
          }));
          callback(root1942); return subs__;
          
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes1487;
          nodes1487 = node.contents();
          oldNodes.replaceWith(nodes1487);
        }));
        
        
        
      } else {
        
      }
    };
    renderCond172();
    subs__.addSub(tmp1329.addEventListener('change', function() {
      renderCond172();
    }));
    
    callback(root1939); return subs__;
    
  });
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
  qas.list(function(coll1567) {
    coll1567 = coll1567.reverse();
    function processOne67() {
      var item;
      item = coll1567.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll1567.length > 0) processOne67(); else rest67();
      
    }
    function rest67() {
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
    if(coll1567.length > 0) processOne67(); else rest67();
  });
  
};

nrichRPG.coreWorkout.makeQAStar = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll1568) {
    coll1568 = coll1568.reverse();
    function processOne68() {
      var item;
      item = coll1568.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll1568.length > 0) processOne68(); else rest68();
      
    }
    function rest68() {
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
    if(coll1568.length > 0) processOne68(); else rest68();
  });
  
};

nrichRPG.coreWorkout.makeQAStats = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll1569) {
    coll1569 = coll1569.reverse();
    function processOne69() {
      var item;
      item = coll1569.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll1569.length > 0) processOne69(); else rest69();
      
    }
    function rest69() {
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
    if(coll1569.length > 0) processOne69(); else rest69();
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