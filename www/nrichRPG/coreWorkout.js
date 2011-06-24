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
    var tmp1425 = result__;
    var result__ = tmp1425;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp1426 = result__;
      var result__ = tmp1426;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp1427 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicId, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll84) {
    coll84 = coll84.reverse();
    function processOne48() {
      var i;
      i = coll84.pop();
      nrichRPG.coreWorkout.makeQA(topicId, function(result__) {
        var tmp1428 = result__;
        
        if(coll84.length > 0) processOne48(); else rest48();
        
      });
    }
    function rest48() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll84.length > 0) processOne48(); else rest48();
  });
  
};

nrichRPG.coreWorkout.randomQStar = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll85) {
    coll85 = coll85.reverse();
    function processOne49() {
      var i;
      i = coll85.pop();
      var result__ = mobl.Math.floor(13 * mobl.Math.random());
      var r = result__;
      var result__ = "F" + (1 + r);
      var tid = result__;
      var result__ = tid == "F3";
      if(result__) {
        var result__ = "F3a";
        tid = result__;
        nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
          var tmp1429 = result__;
          
          if(coll85.length > 0) processOne49(); else rest49();
          
        });
      } else {
        {
          nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
            var tmp1429 = result__;
            
            if(coll85.length > 0) processOne49(); else rest49();
            
          });
        }
      }
    }
    function rest49() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll85.length > 0) processOne49(); else rest49();
  });
  
};

nrichRPG.coreWorkout.randomQStats = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll86) {
    coll86 = coll86.reverse();
    function processOne50() {
      var i;
      i = coll86.pop();
      var result__ = mobl.Math.floor(6 * mobl.Math.random());
      var r = result__;
      var result__ = "S" + (1 + r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
        var tmp1430 = result__;
        
        if(coll86.length > 0) processOne50(); else rest50();
        
      });
    }
    function rest50() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll86.length > 0) processOne50(); else rest50();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root1506 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1329 = $("<span>");
  root1506.append(nodes1329);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1507 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1438 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1335 = mobl.ref(result__);
    
    var nodes1330 = $("<span>");
    root1507.append(nodes1330);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1335, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1508 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1331 = $("<span>");
      root1508.append(nodes1331);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1509 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1509); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1331;
        nodes1331 = node.contents();
        oldNodes.replaceWith(nodes1331);
      }));
      callback(root1508); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1330;
      nodes1330 = node.contents();
      oldNodes.replaceWith(nodes1330);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1437 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1336 = mobl.ref(result__);
    
    var nodes1332 = $("<span>");
    root1507.append(nodes1332);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1336, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1510 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1333 = $("<span>");
      root1510.append(nodes1333);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1511 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1511); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1333;
        nodes1333 = node.contents();
        oldNodes.replaceWith(nodes1333);
      }));
      callback(root1510); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1332;
      nodes1332 = node.contents();
      oldNodes.replaceWith(nodes1332);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1436 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1337 = mobl.ref(result__);
    
    var nodes1334 = $("<span>");
    root1507.append(nodes1334);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1337, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1512 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1335 = $("<span>");
      root1512.append(nodes1335);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1513 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1513); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1335;
        nodes1335 = node.contents();
        oldNodes.replaceWith(nodes1335);
      }));
      callback(root1512); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1334;
      nodes1334 = node.contents();
      oldNodes.replaceWith(nodes1334);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1435 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1338 = mobl.ref(result__);
    
    var nodes1336 = $("<span>");
    root1507.append(nodes1336);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1338, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1514 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1337 = $("<span>");
      root1514.append(nodes1337);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1515 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1515); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1337;
        nodes1337 = node.contents();
        oldNodes.replaceWith(nodes1337);
      }));
      callback(root1514); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1336;
      nodes1336 = node.contents();
      oldNodes.replaceWith(nodes1336);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1434 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1339 = mobl.ref(result__);
    
    var nodes1338 = $("<span>");
    root1507.append(nodes1338);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1339, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1516 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1339 = $("<span>");
      root1516.append(nodes1339);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1517 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1517); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1339;
        nodes1339 = node.contents();
        oldNodes.replaceWith(nodes1339);
      }));
      callback(root1516); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1338;
      nodes1338 = node.contents();
      oldNodes.replaceWith(nodes1338);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1433 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1340 = mobl.ref(result__);
    
    var nodes1340 = $("<span>");
    root1507.append(nodes1340);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1340, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1518 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1341 = $("<span>");
      root1518.append(nodes1341);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1519 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1519); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1341;
        nodes1341 = node.contents();
        oldNodes.replaceWith(nodes1341);
      }));
      callback(root1518); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1340;
      nodes1340 = node.contents();
      oldNodes.replaceWith(nodes1340);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1432 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1341 = mobl.ref(result__);
    
    var nodes1342 = $("<span>");
    root1507.append(nodes1342);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1341, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1520 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1343 = $("<span>");
      root1520.append(nodes1343);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1521 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1521); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1343;
        nodes1343 = node.contents();
        oldNodes.replaceWith(nodes1343);
      }));
      callback(root1520); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1342;
      nodes1342 = node.contents();
      oldNodes.replaceWith(nodes1342);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1431 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1342 = mobl.ref(result__);
    
    var nodes1344 = $("<span>");
    root1507.append(nodes1344);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1342, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1522 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1345 = $("<span>");
      root1522.append(nodes1345);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1523 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1523); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1345;
        nodes1345 = node.contents();
        oldNodes.replaceWith(nodes1345);
      }));
      callback(root1522); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1344;
      nodes1344 = node.contents();
      oldNodes.replaceWith(nodes1344);
    }));
    callback(root1507); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1329;
    nodes1329 = node.contents();
    oldNodes.replaceWith(nodes1329);
  }));
  callback(root1506); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root1524 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes1346 = $("<span>");
  root1524.append(nodes1346);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1525 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1344 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1343 = mobl.ref(result__);
    
    var nodes1347 = $("<span>");
    root1525.append(nodes1347);
    subs__.addSub((ui.backButton)(tmp1343, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1344, function(_, callback) {
      var root1526 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1526); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1347;
      nodes1347 = node.contents();
      oldNodes.replaceWith(nodes1347);
    }));
    callback(root1525); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1346;
    nodes1346 = node.contents();
    oldNodes.replaceWith(nodes1346);
  }));
  var nodes1348 = $("<span>");
  root1524.append(nodes1348);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1527 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(10, function(result__) {
                       var tmp1446 = result__;
                       var result__ = mobl.alert("Quadratic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1345 = mobl.ref(result__);
    
    var nodes1349 = $("<span>");
    root1527.append(nodes1349);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1345, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1528 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1350 = $("<span>");
      root1528.append(nodes1350);
      subs__.addSub((mobl.label)(mobl.ref("+Quadratic equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1529 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1529); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1350;
        nodes1350 = node.contents();
        oldNodes.replaceWith(nodes1350);
      }));
      callback(root1528); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1349;
      nodes1349 = node.contents();
      oldNodes.replaceWith(nodes1349);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(11, function(result__) {
                       var tmp1445 = result__;
                       var result__ = mobl.alert("Completing the Square Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1346 = mobl.ref(result__);
    
    var nodes1351 = $("<span>");
    root1527.append(nodes1351);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1346, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1530 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1352 = $("<span>");
      root1530.append(nodes1352);
      subs__.addSub((mobl.label)(mobl.ref("+Completing the square"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1531 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1531); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1352;
        nodes1352 = node.contents();
        oldNodes.replaceWith(nodes1352);
      }));
      callback(root1530); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1351;
      nodes1351 = node.contents();
      oldNodes.replaceWith(nodes1351);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(7, function(result__) {
                       var tmp1444 = result__;
                       var result__ = mobl.alert("Ineqalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1347 = mobl.ref(result__);
    
    var nodes1353 = $("<span>");
    root1527.append(nodes1353);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1347, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1532 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1354 = $("<span>");
      root1532.append(nodes1354);
      subs__.addSub((mobl.label)(mobl.ref("+Inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1533 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1533); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1354;
        nodes1354 = node.contents();
        oldNodes.replaceWith(nodes1354);
      }));
      callback(root1532); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1353;
      nodes1353 = node.contents();
      oldNodes.replaceWith(nodes1353);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(9, function(result__) {
                       var tmp1443 = result__;
                       var result__ = mobl.alert("Factor theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1348 = mobl.ref(result__);
    
    var nodes1355 = $("<span>");
    root1527.append(nodes1355);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1348, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1534 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1356 = $("<span>");
      root1534.append(nodes1356);
      subs__.addSub((mobl.label)(mobl.ref("+Factor theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1535 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1535); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1356;
        nodes1356 = node.contents();
        oldNodes.replaceWith(nodes1356);
      }));
      callback(root1534); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1355;
      nodes1355 = node.contents();
      oldNodes.replaceWith(nodes1355);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(1, function(result__) {
                       var tmp1442 = result__;
                       var result__ = mobl.alert("Partial fraction Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1349 = mobl.ref(result__);
    
    var nodes1357 = $("<span>");
    root1527.append(nodes1357);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1349, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1536 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1358 = $("<span>");
      root1536.append(nodes1358);
      subs__.addSub((mobl.label)(mobl.ref("+Partial fractions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1537 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1537); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1358;
        nodes1358 = node.contents();
        oldNodes.replaceWith(nodes1358);
      }));
      callback(root1536); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1357;
      nodes1357 = node.contents();
      oldNodes.replaceWith(nodes1357);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(30, function(result__) {
                       var tmp1441 = result__;
                       var result__ = mobl.alert("Powers Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1350 = mobl.ref(result__);
    
    var nodes1359 = $("<span>");
    root1527.append(nodes1359);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1350, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1538 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1360 = $("<span>");
      root1538.append(nodes1360);
      subs__.addSub((mobl.label)(mobl.ref("+Powers"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1539 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1539); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1360;
        nodes1360 = node.contents();
        oldNodes.replaceWith(nodes1360);
      }));
      callback(root1538); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1359;
      nodes1359 = node.contents();
      oldNodes.replaceWith(nodes1359);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(13, function(result__) {
                       var tmp1440 = result__;
                       var result__ = mobl.alert("Logarithm Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1351 = mobl.ref(result__);
    
    var nodes1361 = $("<span>");
    root1527.append(nodes1361);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1351, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1540 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1362 = $("<span>");
      root1540.append(nodes1362);
      subs__.addSub((mobl.label)(mobl.ref("+Logarithms"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1541 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1541); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1362;
        nodes1362 = node.contents();
        oldNodes.replaceWith(nodes1362);
      }));
      callback(root1540); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1361;
      nodes1361 = node.contents();
      oldNodes.replaceWith(nodes1361);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(17, function(result__) {
                       var tmp1439 = result__;
                       var result__ = mobl.alert("Trig equation Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1352 = mobl.ref(result__);
    
    var nodes1363 = $("<span>");
    root1527.append(nodes1363);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1352, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1542 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1364 = $("<span>");
      root1542.append(nodes1364);
      subs__.addSub((mobl.label)(mobl.ref("+Trig equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1543 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1543); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1364;
        nodes1364 = node.contents();
        oldNodes.replaceWith(nodes1364);
      }));
      callback(root1542); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1363;
      nodes1363 = node.contents();
      oldNodes.replaceWith(nodes1363);
    }));
    callback(root1527); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1348;
    nodes1348 = node.contents();
    oldNodes.replaceWith(nodes1348);
  }));
  callback(root1524); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root1544 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1365 = $("<span>");
  root1544.append(nodes1365);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1545 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1354 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1353 = mobl.ref(result__);
    
    var nodes1366 = $("<span>");
    root1545.append(nodes1366);
    subs__.addSub((ui.backButton)(tmp1353, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1354, function(_, callback) {
      var root1546 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1546); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1366;
      nodes1366 = node.contents();
      oldNodes.replaceWith(nodes1366);
    }));
    callback(root1545); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1365;
    nodes1365 = node.contents();
    oldNodes.replaceWith(nodes1365);
  }));
  var nodes1367 = $("<span>");
  root1544.append(nodes1367);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1547 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(24, function(result__) {
                       var tmp1451 = result__;
                       var result__ = mobl.alert("Modulus Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1355 = mobl.ref(result__);
    
    var nodes1368 = $("<span>");
    root1547.append(nodes1368);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1355, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1548 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1369 = $("<span>");
      root1548.append(nodes1369);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus function"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1549 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1549); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1369;
        nodes1369 = node.contents();
        oldNodes.replaceWith(nodes1369);
      }));
      callback(root1548); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1368;
      nodes1368 = node.contents();
      oldNodes.replaceWith(nodes1368);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(25, function(result__) {
                       var tmp1450 = result__;
                       var result__ = mobl.alert("Transformations of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1356 = mobl.ref(result__);
    
    var nodes1370 = $("<span>");
    root1547.append(nodes1370);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1356, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1550 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1371 = $("<span>");
      root1550.append(nodes1371);
      subs__.addSub((mobl.label)(mobl.ref("+Transformations of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1551 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1551); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1371;
        nodes1371 = node.contents();
        oldNodes.replaceWith(nodes1371);
      }));
      callback(root1550); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1370;
      nodes1370 = node.contents();
      oldNodes.replaceWith(nodes1370);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(26, function(result__) {
                       var tmp1449 = result__;
                       var result__ = mobl.alert("Composition of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1357 = mobl.ref(result__);
    
    var nodes1372 = $("<span>");
    root1547.append(nodes1372);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1357, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1552 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1373 = $("<span>");
      root1552.append(nodes1373);
      subs__.addSub((mobl.label)(mobl.ref("+Composition of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1553 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1553); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1373;
        nodes1373 = node.contents();
        oldNodes.replaceWith(nodes1373);
      }));
      callback(root1552); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1372;
      nodes1372 = node.contents();
      oldNodes.replaceWith(nodes1372);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(270, function(result__) {
                       var tmp1448 = result__;
                       var result__ = mobl.alert("Implicit functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1358 = mobl.ref(result__);
    
    var nodes1374 = $("<span>");
    root1547.append(nodes1374);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1358, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1554 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1375 = $("<span>");
      root1554.append(nodes1375);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1555 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1555); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1375;
        nodes1375 = node.contents();
        oldNodes.replaceWith(nodes1375);
      }));
      callback(root1554); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1374;
      nodes1374 = node.contents();
      oldNodes.replaceWith(nodes1374);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(27, function(result__) {
                       var tmp1447 = result__;
                       var result__ = mobl.alert("Parametric functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1359 = mobl.ref(result__);
    
    var nodes1376 = $("<span>");
    root1547.append(nodes1376);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1359, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1556 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1377 = $("<span>");
      root1556.append(nodes1377);
      subs__.addSub((mobl.label)(mobl.ref("+Parametric functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1557 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1557); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1377;
        nodes1377 = node.contents();
        oldNodes.replaceWith(nodes1377);
      }));
      callback(root1556); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1376;
      nodes1376 = node.contents();
      oldNodes.replaceWith(nodes1376);
    }));
    callback(root1547); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1367;
    nodes1367 = node.contents();
    oldNodes.replaceWith(nodes1367);
  }));
  callback(root1544); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root1558 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1378 = $("<span>");
  root1558.append(nodes1378);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1559 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1361 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1360 = mobl.ref(result__);
    
    var nodes1379 = $("<span>");
    root1559.append(nodes1379);
    subs__.addSub((ui.backButton)(tmp1360, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1361, function(_, callback) {
      var root1560 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1560); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1379;
      nodes1379 = node.contents();
      oldNodes.replaceWith(nodes1379);
    }));
    callback(root1559); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1378;
    nodes1378 = node.contents();
    oldNodes.replaceWith(nodes1378);
  }));
  var nodes1380 = $("<span>");
  root1558.append(nodes1380);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1561 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(15, function(result__) {
                       var tmp1454 = result__;
                       var result__ = mobl.alert("Triangles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1362 = mobl.ref(result__);
    
    var nodes1381 = $("<span>");
    root1561.append(nodes1381);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1362, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1562 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1382 = $("<span>");
      root1562.append(nodes1382);
      subs__.addSub((mobl.label)(mobl.ref("+Triangles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1563 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1563); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1382;
        nodes1382 = node.contents();
        oldNodes.replaceWith(nodes1382);
      }));
      callback(root1562); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1381;
      nodes1381 = node.contents();
      oldNodes.replaceWith(nodes1381);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(16, function(result__) {
                       var tmp1453 = result__;
                       var result__ = mobl.alert("Circles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1363 = mobl.ref(result__);
    
    var nodes1383 = $("<span>");
    root1561.append(nodes1383);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1363, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1564 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1384 = $("<span>");
      root1564.append(nodes1384);
      subs__.addSub((mobl.label)(mobl.ref("+Circles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1565 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1565); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1384;
        nodes1384 = node.contents();
        oldNodes.replaceWith(nodes1384);
      }));
      callback(root1564); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1383;
      nodes1383 = node.contents();
      oldNodes.replaceWith(nodes1383);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(6, function(result__) {
                       var tmp1452 = result__;
                       var result__ = mobl.alert("3D lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1364 = mobl.ref(result__);
    
    var nodes1385 = $("<span>");
    root1561.append(nodes1385);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1364, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1566 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1386 = $("<span>");
      root1566.append(nodes1386);
      subs__.addSub((mobl.label)(mobl.ref("+ 3D lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1567 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1567); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1386;
        nodes1386 = node.contents();
        oldNodes.replaceWith(nodes1386);
      }));
      callback(root1566); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1385;
      nodes1385 = node.contents();
      oldNodes.replaceWith(nodes1385);
    }));
    callback(root1561); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1380;
    nodes1380 = node.contents();
    oldNodes.replaceWith(nodes1380);
  }));
  callback(root1558); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root1568 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1387 = $("<span>");
  root1568.append(nodes1387);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1569 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1366 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1365 = mobl.ref(result__);
    
    var nodes1388 = $("<span>");
    root1569.append(nodes1388);
    subs__.addSub((ui.backButton)(tmp1365, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1366, function(_, callback) {
      var root1570 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1570); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1388;
      nodes1388 = node.contents();
      oldNodes.replaceWith(nodes1388);
    }));
    callback(root1569); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1387;
    nodes1387 = node.contents();
    oldNodes.replaceWith(nodes1387);
  }));
  var nodes1389 = $("<span>");
  root1568.append(nodes1389);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1571 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(8, function(result__) {
                       var tmp1458 = result__;
                       var result__ = mobl.alert("Arithmetic Progressions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1367 = mobl.ref(result__);
    
    var nodes1390 = $("<span>");
    root1571.append(nodes1390);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1367, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1572 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1391 = $("<span>");
      root1572.append(nodes1391);
      subs__.addSub((mobl.label)(mobl.ref("+Arithmetic progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1573 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1573); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1391;
        nodes1391 = node.contents();
        oldNodes.replaceWith(nodes1391);
      }));
      callback(root1572); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1390;
      nodes1390 = node.contents();
      oldNodes.replaceWith(nodes1390);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(12, function(result__) {
                       var tmp1457 = result__;
                       var result__ = mobl.alert("Binomial Expansion Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1368 = mobl.ref(result__);
    
    var nodes1392 = $("<span>");
    root1571.append(nodes1392);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1368, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1574 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1393 = $("<span>");
      root1574.append(nodes1393);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial expansion"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1575 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1575); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1393;
        nodes1393 = node.contents();
        oldNodes.replaceWith(nodes1393);
      }));
      callback(root1574); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1392;
      nodes1392 = node.contents();
      oldNodes.replaceWith(nodes1392);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(23, function(result__) {
                       var tmp1456 = result__;
                       var result__ = mobl.alert("Geometric Progression Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1369 = mobl.ref(result__);
    
    var nodes1394 = $("<span>");
    root1571.append(nodes1394);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1369, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1576 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1395 = $("<span>");
      root1576.append(nodes1395);
      subs__.addSub((mobl.label)(mobl.ref("+Geometric progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1577 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1577); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1395;
        nodes1395 = node.contents();
        oldNodes.replaceWith(nodes1395);
      }));
      callback(root1576); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1394;
      nodes1394 = node.contents();
      oldNodes.replaceWith(nodes1394);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(2, function(result__) {
                       var tmp1455 = result__;
                       var result__ = mobl.alert("Binomial theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1370 = mobl.ref(result__);
    
    var nodes1396 = $("<span>");
    root1571.append(nodes1396);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1370, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1578 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1397 = $("<span>");
      root1578.append(nodes1397);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1579 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1579); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1397;
        nodes1397 = node.contents();
        oldNodes.replaceWith(nodes1397);
      }));
      callback(root1578); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1396;
      nodes1396 = node.contents();
      oldNodes.replaceWith(nodes1396);
    }));
    callback(root1571); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1389;
    nodes1389 = node.contents();
    oldNodes.replaceWith(nodes1389);
  }));
  callback(root1568); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root1580 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1398 = $("<span>");
  root1580.append(nodes1398);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1581 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1372 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1371 = mobl.ref(result__);
    
    var nodes1399 = $("<span>");
    root1581.append(nodes1399);
    subs__.addSub((ui.backButton)(tmp1371, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1372, function(_, callback) {
      var root1582 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1582); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1399;
      nodes1399 = node.contents();
      oldNodes.replaceWith(nodes1399);
    }));
    callback(root1581); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1398;
    nodes1398 = node.contents();
    oldNodes.replaceWith(nodes1398);
  }));
  var nodes1400 = $("<span>");
  root1580.append(nodes1400);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1583 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(5, function(result__) {
                       var tmp1460 = result__;
                       var result__ = mobl.alert("Scalar product Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1373 = mobl.ref(result__);
    
    var nodes1401 = $("<span>");
    root1583.append(nodes1401);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1373, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1584 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1402 = $("<span>");
      root1584.append(nodes1402);
      subs__.addSub((mobl.label)(mobl.ref("+Scalar products"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1585 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1585); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1402;
        nodes1402 = node.contents();
        oldNodes.replaceWith(nodes1402);
      }));
      callback(root1584); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1401;
      nodes1401 = node.contents();
      oldNodes.replaceWith(nodes1401);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(18, function(result__) {
                       var tmp1459 = result__;
                       var result__ = mobl.alert("Vector equation of lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1374 = mobl.ref(result__);
    
    var nodes1403 = $("<span>");
    root1583.append(nodes1403);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1374, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1586 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1404 = $("<span>");
      root1586.append(nodes1404);
      subs__.addSub((mobl.label)(mobl.ref("+Vector equation of lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1587 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1587); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1404;
        nodes1404 = node.contents();
        oldNodes.replaceWith(nodes1404);
      }));
      callback(root1586); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1403;
      nodes1403 = node.contents();
      oldNodes.replaceWith(nodes1403);
    }));
    callback(root1583); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1400;
    nodes1400 = node.contents();
    oldNodes.replaceWith(nodes1400);
  }));
  callback(root1580); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root1588 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1405 = $("<span>");
  root1588.append(nodes1405);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1589 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1376 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1375 = mobl.ref(result__);
    
    var nodes1406 = $("<span>");
    root1589.append(nodes1406);
    subs__.addSub((ui.backButton)(tmp1375, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1376, function(_, callback) {
      var root1590 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1590); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1406;
      nodes1406 = node.contents();
      oldNodes.replaceWith(nodes1406);
    }));
    callback(root1589); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1405;
    nodes1405 = node.contents();
    oldNodes.replaceWith(nodes1405);
  }));
  var nodes1407 = $("<span>");
  root1588.append(nodes1407);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1591 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(14, function(result__) {
                       var tmp1465 = result__;
                       var result__ = mobl.alert("Stationary points Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1377 = mobl.ref(result__);
    
    var nodes1408 = $("<span>");
    root1591.append(nodes1408);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1377, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1592 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1409 = $("<span>");
      root1592.append(nodes1409);
      subs__.addSub((mobl.label)(mobl.ref("+Stationary points"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1593 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1593); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1409;
        nodes1409 = node.contents();
        oldNodes.replaceWith(nodes1409);
      }));
      callback(root1592); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1408;
      nodes1408 = node.contents();
      oldNodes.replaceWith(nodes1408);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(20, function(result__) {
                       var tmp1464 = result__;
                       var result__ = mobl.alert("Chain rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1378 = mobl.ref(result__);
    
    var nodes1410 = $("<span>");
    root1591.append(nodes1410);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1378, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1594 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1411 = $("<span>");
      root1594.append(nodes1411);
      subs__.addSub((mobl.label)(mobl.ref("+Chain rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1595 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1595); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1411;
        nodes1411 = node.contents();
        oldNodes.replaceWith(nodes1411);
      }));
      callback(root1594); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1410;
      nodes1410 = node.contents();
      oldNodes.replaceWith(nodes1410);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(21, function(result__) {
                       var tmp1463 = result__;
                       var result__ = mobl.alert("Product rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1379 = mobl.ref(result__);
    
    var nodes1412 = $("<span>");
    root1591.append(nodes1412);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1379, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1596 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1413 = $("<span>");
      root1596.append(nodes1413);
      subs__.addSub((mobl.label)(mobl.ref("+Product rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1597 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1597); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1413;
        nodes1413 = node.contents();
        oldNodes.replaceWith(nodes1413);
      }));
      callback(root1596); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1412;
      nodes1412 = node.contents();
      oldNodes.replaceWith(nodes1412);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(22, function(result__) {
                       var tmp1462 = result__;
                       var result__ = mobl.alert("Quotient rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1380 = mobl.ref(result__);
    
    var nodes1414 = $("<span>");
    root1591.append(nodes1414);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1380, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1598 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1415 = $("<span>");
      root1598.append(nodes1415);
      subs__.addSub((mobl.label)(mobl.ref("+Quotient rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1599 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1599); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1415;
        nodes1415 = node.contents();
        oldNodes.replaceWith(nodes1415);
      }));
      callback(root1598); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1414;
      nodes1414 = node.contents();
      oldNodes.replaceWith(nodes1414);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(19, function(result__) {
                       var tmp1461 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1381 = mobl.ref(result__);
    
    var nodes1416 = $("<span>");
    root1591.append(nodes1416);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1381, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1600 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1417 = $("<span>");
      root1600.append(nodes1417);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1601 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1601); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1417;
        nodes1417 = node.contents();
        oldNodes.replaceWith(nodes1417);
      }));
      callback(root1600); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1416;
      nodes1416 = node.contents();
      oldNodes.replaceWith(nodes1416);
    }));
    callback(root1591); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1407;
    nodes1407 = node.contents();
    oldNodes.replaceWith(nodes1407);
  }));
  callback(root1588); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root1602 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1418 = $("<span>");
  root1602.append(nodes1418);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1603 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1383 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1382 = mobl.ref(result__);
    
    var nodes1419 = $("<span>");
    root1603.append(nodes1419);
    subs__.addSub((ui.backButton)(tmp1382, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1383, function(_, callback) {
      var root1604 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1604); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1419;
      nodes1419 = node.contents();
      oldNodes.replaceWith(nodes1419);
    }));
    callback(root1603); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1418;
    nodes1418 = node.contents();
    oldNodes.replaceWith(nodes1418);
  }));
  var nodes1420 = $("<span>");
  root1602.append(nodes1420);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1605 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(28, function(result__) {
                       var tmp1468 = result__;
                       var result__ = mobl.alert("Integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1384 = mobl.ref(result__);
    
    var nodes1421 = $("<span>");
    root1605.append(nodes1421);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1384, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1606 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1422 = $("<span>");
      root1606.append(nodes1422);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1607 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1607); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1422;
        nodes1422 = node.contents();
        oldNodes.replaceWith(nodes1422);
      }));
      callback(root1606); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1421;
      nodes1421 = node.contents();
      oldNodes.replaceWith(nodes1421);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(3, function(result__) {
                       var tmp1467 = result__;
                       var result__ = mobl.alert("Polynomial integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1385 = mobl.ref(result__);
    
    var nodes1423 = $("<span>");
    root1605.append(nodes1423);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1385, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1608 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1424 = $("<span>");
      root1608.append(nodes1424);
      subs__.addSub((mobl.label)(mobl.ref("+Polynomial integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1609 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1609); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1424;
        nodes1424 = node.contents();
        oldNodes.replaceWith(nodes1424);
      }));
      callback(root1608); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1423;
      nodes1423 = node.contents();
      oldNodes.replaceWith(nodes1423);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(4, function(result__) {
                       var tmp1466 = result__;
                       var result__ = mobl.alert("Trig integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1386 = mobl.ref(result__);
    
    var nodes1425 = $("<span>");
    root1605.append(nodes1425);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1386, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1610 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1426 = $("<span>");
      root1610.append(nodes1426);
      subs__.addSub((mobl.label)(mobl.ref("+Trig integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1611 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1611); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1426;
        nodes1426 = node.contents();
        oldNodes.replaceWith(nodes1426);
      }));
      callback(root1610); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1425;
      nodes1425 = node.contents();
      oldNodes.replaceWith(nodes1425);
    }));
    callback(root1605); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1420;
    nodes1420 = node.contents();
    oldNodes.replaceWith(nodes1420);
  }));
  callback(root1602); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root1612 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1427 = $("<span>");
  root1612.append(nodes1427);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1613 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1388 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1387 = mobl.ref(result__);
    
    var nodes1428 = $("<span>");
    root1613.append(nodes1428);
    subs__.addSub((ui.backButton)(tmp1387, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1388, function(_, callback) {
      var root1614 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1614); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1428;
      nodes1428 = node.contents();
      oldNodes.replaceWith(nodes1428);
    }));
    callback(root1613); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1427;
    nodes1427 = node.contents();
    oldNodes.replaceWith(nodes1427);
  }));
  var nodes1429 = $("<span>");
  root1612.append(nodes1429);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1615 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(29, function(result__) {
                       var tmp1469 = result__;
                       var result__ = mobl.alert("Differential equations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1389 = mobl.ref(result__);
    
    var nodes1430 = $("<span>");
    root1615.append(nodes1430);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1389, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1616 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1431 = $("<span>");
      root1616.append(nodes1431);
      subs__.addSub((mobl.label)(mobl.ref("+Diff equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1617 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1617); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1431;
        nodes1431 = node.contents();
        oldNodes.replaceWith(nodes1431);
      }));
      callback(root1616); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1430;
      nodes1430 = node.contents();
      oldNodes.replaceWith(nodes1430);
    }));
    callback(root1615); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1429;
    nodes1429 = node.contents();
    oldNodes.replaceWith(nodes1429);
  }));
  callback(root1612); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root1618 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1432 = $("<span>");
  root1618.append(nodes1432);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1619 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F1", function(result__) {
                       var tmp1482 = result__;
                       var result__ = mobl.alert("Complex arithmetic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1390 = mobl.ref(result__);
    
    var nodes1433 = $("<span>");
    root1619.append(nodes1433);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1390, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1620 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1434 = $("<span>");
      root1620.append(nodes1434);
      subs__.addSub((mobl.label)(mobl.ref("+Complex arithmetic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1621 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1621); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1434;
        nodes1434 = node.contents();
        oldNodes.replaceWith(nodes1434);
      }));
      callback(root1620); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1433;
      nodes1433 = node.contents();
      oldNodes.replaceWith(nodes1433);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F2", function(result__) {
                       var tmp1481 = result__;
                       var result__ = mobl.alert("Modulus argument Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1391 = mobl.ref(result__);
    
    var nodes1435 = $("<span>");
    root1619.append(nodes1435);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1391, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1622 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1436 = $("<span>");
      root1622.append(nodes1436);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus argument"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1623 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1623); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1436;
        nodes1436 = node.contents();
        oldNodes.replaceWith(nodes1436);
      }));
      callback(root1622); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1435;
      nodes1435 = node.contents();
      oldNodes.replaceWith(nodes1435);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F3a", function(result__) {
                       var tmp1480 = result__;
                       var result__ = mobl.alert("2nd order DE Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1392 = mobl.ref(result__);
    
    var nodes1437 = $("<span>");
    root1619.append(nodes1437);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1392, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1624 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1438 = $("<span>");
      root1624.append(nodes1438);
      subs__.addSub((mobl.label)(mobl.ref("+2nd order DEs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1625 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1625); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1438;
        nodes1438 = node.contents();
        oldNodes.replaceWith(nodes1438);
      }));
      callback(root1624); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1437;
      nodes1437 = node.contents();
      oldNodes.replaceWith(nodes1437);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F4", function(result__) {
                       var tmp1479 = result__;
                       var result__ = mobl.alert("Rank 2 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1393 = mobl.ref(result__);
    
    var nodes1439 = $("<span>");
    root1619.append(nodes1439);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1393, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1626 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1440 = $("<span>");
      root1626.append(nodes1440);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 2 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1627 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1627); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1440;
        nodes1440 = node.contents();
        oldNodes.replaceWith(nodes1440);
      }));
      callback(root1626); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1439;
      nodes1439 = node.contents();
      oldNodes.replaceWith(nodes1439);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F5", function(result__) {
                       var tmp1478 = result__;
                       var result__ = mobl.alert("Taylor Series Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1394 = mobl.ref(result__);
    
    var nodes1441 = $("<span>");
    root1619.append(nodes1441);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1394, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1628 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1442 = $("<span>");
      root1628.append(nodes1442);
      subs__.addSub((mobl.label)(mobl.ref("+Taylor Series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1629 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1629); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1442;
        nodes1442 = node.contents();
        oldNodes.replaceWith(nodes1442);
      }));
      callback(root1628); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1441;
      nodes1441 = node.contents();
      oldNodes.replaceWith(nodes1441);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F6", function(result__) {
                       var tmp1477 = result__;
                       var result__ = mobl.alert("Polar Coordinates Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1395 = mobl.ref(result__);
    
    var nodes1443 = $("<span>");
    root1619.append(nodes1443);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1395, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1630 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1444 = $("<span>");
      root1630.append(nodes1444);
      subs__.addSub((mobl.label)(mobl.ref("+Polar Coordinates"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1631 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1631); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1444;
        nodes1444 = node.contents();
        oldNodes.replaceWith(nodes1444);
      }));
      callback(root1630); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1443;
      nodes1443 = node.contents();
      oldNodes.replaceWith(nodes1443);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F7", function(result__) {
                       var tmp1476 = result__;
                       var result__ = mobl.alert("Rank 3 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1396 = mobl.ref(result__);
    
    var nodes1445 = $("<span>");
    root1619.append(nodes1445);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1396, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1632 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1446 = $("<span>");
      root1632.append(nodes1446);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 3 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1633 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1633); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1446;
        nodes1446 = node.contents();
        oldNodes.replaceWith(nodes1446);
      }));
      callback(root1632); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1445;
      nodes1445 = node.contents();
      oldNodes.replaceWith(nodes1445);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F8", function(result__) {
                       var tmp1475 = result__;
                       var result__ = mobl.alert("Further vectors added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1397 = mobl.ref(result__);
    
    var nodes1447 = $("<span>");
    root1619.append(nodes1447);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1397, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1634 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1448 = $("<span>");
      root1634.append(nodes1448);
      subs__.addSub((mobl.label)(mobl.ref("+Further vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1635 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1635); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1448;
        nodes1448 = node.contents();
        oldNodes.replaceWith(nodes1448);
      }));
      callback(root1634); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1447;
      nodes1447 = node.contents();
      oldNodes.replaceWith(nodes1447);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F9", function(result__) {
                       var tmp1474 = result__;
                       var result__ = mobl.alert("Newton-Raphson added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1398 = mobl.ref(result__);
    
    var nodes1449 = $("<span>");
    root1619.append(nodes1449);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1398, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1636 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1450 = $("<span>");
      root1636.append(nodes1450);
      subs__.addSub((mobl.label)(mobl.ref("+Newton-Raphson"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1637 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1637); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1450;
        nodes1450 = node.contents();
        oldNodes.replaceWith(nodes1450);
      }));
      callback(root1636); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1449;
      nodes1449 = node.contents();
      oldNodes.replaceWith(nodes1449);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F10", function(result__) {
                       var tmp1473 = result__;
                       var result__ = mobl.alert("Further inequalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1399 = mobl.ref(result__);
    
    var nodes1451 = $("<span>");
    root1619.append(nodes1451);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1399, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1638 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1452 = $("<span>");
      root1638.append(nodes1452);
      subs__.addSub((mobl.label)(mobl.ref("+Further inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1639 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1639); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1452;
        nodes1452 = node.contents();
        oldNodes.replaceWith(nodes1452);
      }));
      callback(root1638); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1451;
      nodes1451 = node.contents();
      oldNodes.replaceWith(nodes1451);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F11", function(result__) {
                       var tmp1472 = result__;
                       var result__ = mobl.alert("Integration by substitution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1400 = mobl.ref(result__);
    
    var nodes1453 = $("<span>");
    root1619.append(nodes1453);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1400, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1640 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1454 = $("<span>");
      root1640.append(nodes1454);
      subs__.addSub((mobl.label)(mobl.ref("+Integration by substitution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1641 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1641); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1454;
        nodes1454 = node.contents();
        oldNodes.replaceWith(nodes1454);
      }));
      callback(root1640); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1453;
      nodes1453 = node.contents();
      oldNodes.replaceWith(nodes1453);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F12", function(result__) {
                       var tmp1471 = result__;
                       var result__ = mobl.alert("Figures of revolution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1401 = mobl.ref(result__);
    
    var nodes1455 = $("<span>");
    root1619.append(nodes1455);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1401, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1642 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1456 = $("<span>");
      root1642.append(nodes1456);
      subs__.addSub((mobl.label)(mobl.ref("+Figures of revolution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1643 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1643); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1456;
        nodes1456 = node.contents();
        oldNodes.replaceWith(nodes1456);
      }));
      callback(root1642); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1455;
      nodes1455 = node.contents();
      oldNodes.replaceWith(nodes1455);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F13", function(result__) {
                       var tmp1470 = result__;
                       var result__ = mobl.alert("Matrix transformations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1402 = mobl.ref(result__);
    
    var nodes1457 = $("<span>");
    root1619.append(nodes1457);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1402, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1644 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1458 = $("<span>");
      root1644.append(nodes1458);
      subs__.addSub((mobl.label)(mobl.ref("+Matrix transformations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1645 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1645); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1458;
        nodes1458 = node.contents();
        oldNodes.replaceWith(nodes1458);
      }));
      callback(root1644); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1457;
      nodes1457 = node.contents();
      oldNodes.replaceWith(nodes1457);
    }));
    callback(root1619); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1432;
    nodes1432 = node.contents();
    oldNodes.replaceWith(nodes1432);
  }));
  callback(root1618); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root1646 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1459 = $("<span>");
  root1646.append(nodes1459);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1647 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S1", function(result__) {
                       var tmp1488 = result__;
                       var result__ = mobl.alert("Discrete Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1403 = mobl.ref(result__);
    
    var nodes1460 = $("<span>");
    root1647.append(nodes1460);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1403, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1648 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1461 = $("<span>");
      root1648.append(nodes1461);
      subs__.addSub((mobl.label)(mobl.ref("+Discrete Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1649 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1649); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1461;
        nodes1461 = node.contents();
        oldNodes.replaceWith(nodes1461);
      }));
      callback(root1648); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1460;
      nodes1460 = node.contents();
      oldNodes.replaceWith(nodes1460);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S2", function(result__) {
                       var tmp1487 = result__;
                       var result__ = mobl.alert("Continuous Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1404 = mobl.ref(result__);
    
    var nodes1462 = $("<span>");
    root1647.append(nodes1462);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1404, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1650 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1463 = $("<span>");
      root1650.append(nodes1463);
      subs__.addSub((mobl.label)(mobl.ref("+Continuous Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1651 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1651); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1463;
        nodes1463 = node.contents();
        oldNodes.replaceWith(nodes1463);
      }));
      callback(root1650); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1462;
      nodes1462 = node.contents();
      oldNodes.replaceWith(nodes1462);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S3", function(result__) {
                       var tmp1486 = result__;
                       var result__ = mobl.alert("Hypothesis Testing Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1405 = mobl.ref(result__);
    
    var nodes1464 = $("<span>");
    root1647.append(nodes1464);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1405, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1652 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1465 = $("<span>");
      root1652.append(nodes1465);
      subs__.addSub((mobl.label)(mobl.ref("+Hypothesis Testing"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1653 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1653); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1465;
        nodes1465 = node.contents();
        oldNodes.replaceWith(nodes1465);
      }));
      callback(root1652); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1464;
      nodes1464 = node.contents();
      oldNodes.replaceWith(nodes1464);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S4", function(result__) {
                       var tmp1485 = result__;
                       var result__ = mobl.alert("Confidence Intervals Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1406 = mobl.ref(result__);
    
    var nodes1466 = $("<span>");
    root1647.append(nodes1466);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1406, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1654 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1467 = $("<span>");
      root1654.append(nodes1467);
      subs__.addSub((mobl.label)(mobl.ref("+Confidence Intervals"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1655 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1655); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1467;
        nodes1467 = node.contents();
        oldNodes.replaceWith(nodes1467);
      }));
      callback(root1654); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1466;
      nodes1466 = node.contents();
      oldNodes.replaceWith(nodes1466);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S5", function(result__) {
                       var tmp1484 = result__;
                       var result__ = mobl.alert("Chi Squared Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1407 = mobl.ref(result__);
    
    var nodes1468 = $("<span>");
    root1647.append(nodes1468);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1407, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1656 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1469 = $("<span>");
      root1656.append(nodes1469);
      subs__.addSub((mobl.label)(mobl.ref("+Chi Squared"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1657 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1657); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1469;
        nodes1469 = node.contents();
        oldNodes.replaceWith(nodes1469);
      }));
      callback(root1656); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1468;
      nodes1468 = node.contents();
      oldNodes.replaceWith(nodes1468);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S6", function(result__) {
                       var tmp1483 = result__;
                       var result__ = mobl.alert("Product Moment Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1408 = mobl.ref(result__);
    
    var nodes1470 = $("<span>");
    root1647.append(nodes1470);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1408, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1658 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1471 = $("<span>");
      root1658.append(nodes1471);
      subs__.addSub((mobl.label)(mobl.ref("+Product Moments"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1659 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1659); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1471;
        nodes1471 = node.contents();
        oldNodes.replaceWith(nodes1471);
      }));
      callback(root1658); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1470;
      nodes1470 = node.contents();
      oldNodes.replaceWith(nodes1470);
    }));
    callback(root1647); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1459;
    nodes1459 = node.contents();
    oldNodes.replaceWith(nodes1459);
  }));
  callback(root1646); return subs__;
  
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
  var root1660 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node186 = $("<div>");
  
  var ref159 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref159.get() !== null) {
    node186.attr('class', ref159.get());
    subs__.addSub(ref159.addEventListener('change', function(_, ref, val) {
      node186.attr('class', val);
    }));
    
  }
  subs__.addSub(ref159.rebind());
  
  var val70 = onclick.get();
  if(val70 !== null) {
    subs__.addSub(mobl.domBind(node186, 'tap', val70));
  }
  
  
  var node187 = $("<div>");
  
  var ref158 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref158.get() !== null) {
    node187.attr('class', ref158.get());
    subs__.addSub(ref158.addEventListener('change', function(_, ref, val) {
      node187.attr('class', val);
    }));
    
  }
  subs__.addSub(ref158.rebind());
  
  
  var node188 = $("<div>");
  
  var ref156 = text;
  node188.text(""+ref156.get());
  var ignore30 = false;
  subs__.addSub(ref156.addEventListener('change', function(_, ref, val) {
    if(ignore30) return;
    node188.text(""+val);
  }));
  subs__.addSub(ref156.rebind());
  
  
  var ref157 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref157.get() !== null) {
    node188.attr('class', ref157.get());
    subs__.addSub(ref157.addEventListener('change', function(_, ref, val) {
      node188.attr('class', val);
    }));
    
  }
  subs__.addSub(ref157.rebind());
  
  node187.append(node188);
  node186.append(node187);
  var nodes1472 = $("<span>");
  node186.append(nodes1472);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl57();
  }));
  
  function renderControl57() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1661 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1661); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1472;
      nodes1472 = node.contents();
      oldNodes.replaceWith(nodes1472);
    }));
  }
  renderControl57();
  root1660.append(node186);
  callback(root1660); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mobl.sleep(100, function(result__) {
    var tmp1489 = result__;
    mathJAX.renderMaths(function(result__) {
      var tmp1490 = result__;
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
  var root1662 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node189 = $("<span>");
  root1662.append(node189);
  var condSubs54 = new mobl.CompSubscription();
  subs__.addSub(condSubs54);
  var oldValue54;
  var renderCond54 = function() {
    var value78 = qa.get().correct;
    if(oldValue54 === value78) return;
    oldValue54 = value78;
    var subs__ = condSubs54;
    subs__.unsubscribe();
    node189.empty();
    if(value78) {
      var nodes1473 = $("<span>");
      node189.append(nodes1473);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.agreeStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1663 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = qa.get().answer != "%GRAPH%";
        var tmp1411 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp1411.set(qa.get().answer != "%GRAPH%");
        }));
        
        
        var node190 = $("<span>");
        root1663.append(node190);
        var condSubs55 = new mobl.CompSubscription();
        subs__.addSub(condSubs55);
        var oldValue55;
        var renderCond55 = function() {
          var value79 = tmp1411.get();
          if(oldValue55 === value79) return;
          oldValue55 = value79;
          var subs__ = condSubs55;
          subs__.unsubscribe();
          node190.empty();
          if(value79) {
            var result__ = "A" + qa.get().number + ". ";
            var tmp1409 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp1409.set("A" + qa.get().number + ". ");
            }));
            
            var nodes1474 = $("<span>");
            node190.append(nodes1474);
            subs__.addSub((mobl.label)(tmp1409, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1664 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1664); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1474;
              nodes1474 = node.contents();
              oldNodes.replaceWith(nodes1474);
            }));
            var nodes1475 = $("<span>");
            node190.append(nodes1475);
            subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
              var root1665 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1665); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1475;
              nodes1475 = node.contents();
              oldNodes.replaceWith(nodes1475);
            }));
            
            
            
          } else {
            var result__ = "A" + qa.get().number + ". ";
            var tmp1410 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp1410.set("A" + qa.get().number + ". ");
            }));
            
            var nodes1476 = $("<span>");
            node190.append(nodes1476);
            subs__.addSub((mobl.label)(tmp1410, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1666 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1666); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1476;
              nodes1476 = node.contents();
              oldNodes.replaceWith(nodes1476);
            }));
            var nodes1477 = $("<span>");
            node190.append(nodes1477);
            subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
              var root1667 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1667); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1477;
              nodes1477 = node.contents();
              oldNodes.replaceWith(nodes1477);
            }));
            
            
            
          }
        };
        renderCond55();
        subs__.addSub(tmp1411.addEventListener('change', function() {
          renderCond55();
        }));
        
        callback(root1663); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1473;
        nodes1473 = node.contents();
        oldNodes.replaceWith(nodes1473);
      }));
      
      
    } else {
      var nodes1478 = $("<span>");
      node189.append(nodes1478);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.disagreeStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1668 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = qa.get().answer != "%GRAPH%";
        var tmp1414 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp1414.set(qa.get().answer != "%GRAPH%");
        }));
        
        
        var node191 = $("<span>");
        root1668.append(node191);
        var condSubs56 = new mobl.CompSubscription();
        subs__.addSub(condSubs56);
        var oldValue56;
        var renderCond56 = function() {
          var value80 = tmp1414.get();
          if(oldValue56 === value80) return;
          oldValue56 = value80;
          var subs__ = condSubs56;
          subs__.unsubscribe();
          node191.empty();
          if(value80) {
            var result__ = "A" + qa.get().number + ". ";
            var tmp1412 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp1412.set("A" + qa.get().number + ". ");
            }));
            
            var nodes1479 = $("<span>");
            node191.append(nodes1479);
            subs__.addSub((mobl.label)(tmp1412, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1669 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1669); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1479;
              nodes1479 = node.contents();
              oldNodes.replaceWith(nodes1479);
            }));
            var nodes1480 = $("<span>");
            node191.append(nodes1480);
            subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
              var root1670 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1670); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1480;
              nodes1480 = node.contents();
              oldNodes.replaceWith(nodes1480);
            }));
            
            
            
          } else {
            var result__ = "A" + qa.get().number + ". ";
            var tmp1413 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp1413.set("A" + qa.get().number + ". ");
            }));
            
            var nodes1481 = $("<span>");
            node191.append(nodes1481);
            subs__.addSub((mobl.label)(tmp1413, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root1671 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1671); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1481;
              nodes1481 = node.contents();
              oldNodes.replaceWith(nodes1481);
            }));
            var nodes1482 = $("<span>");
            node191.append(nodes1482);
            subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
              var root1672 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1672); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1482;
              nodes1482 = node.contents();
              oldNodes.replaceWith(nodes1482);
            }));
            
            
            
          }
        };
        renderCond56();
        subs__.addSub(tmp1414.addEventListener('change', function() {
          renderCond56();
        }));
        
        callback(root1668); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1478;
        nodes1478 = node.contents();
        oldNodes.replaceWith(nodes1478);
      }));
      
      
    }
  };
  renderCond54();
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    renderCond54();
  }));
  
  var nodes1483 = $("<span>");
  root1662.append(nodes1483);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root1673 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes1484 = $("<span>");
    root1673.append(nodes1484);
    subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root1674 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1674); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1484;
      nodes1484 = node.contents();
      oldNodes.replaceWith(nodes1484);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = true;
                     qa.get().correct = result__;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1415 = mobl.ref(result__);
    
    var nodes1485 = $("<span>");
    root1673.append(nodes1485);
    subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp1415, function(_, callback) {
      var root1675 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1675); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1485;
      nodes1485 = node.contents();
      oldNodes.replaceWith(nodes1485);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = false;
                     qa.get().correct = result__;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1416 = mobl.ref(result__);
    
    var nodes1486 = $("<span>");
    root1673.append(nodes1486);
    subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp1416, function(_, callback) {
      var root1676 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1676); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1486;
      nodes1486 = node.contents();
      oldNodes.replaceWith(nodes1486);
    }));
    callback(root1673); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1483;
    nodes1483 = node.contents();
    oldNodes.replaceWith(nodes1483);
  }));
  callback(root1662); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp1491 = result__;
    var result__ = tmp1491;
    var qa2 = result__;
    var result__ = qa2 == null;
    if(result__) {
      nrichRPG.questionAnswer.QA.all().one(function(result__) {
        var tmp1492 = result__;
        var result__ = tmp1492;
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
  var root1677 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node192 = $("<span>");
  
  var ref160 = mobl.ref("color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
  if(ref160.get() !== null) {
    node192.attr('style', ref160.get());
    subs__.addSub(ref160.addEventListener('change', function(_, ref, val) {
      node192.attr('style', val);
    }));
    subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
      node192.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
      node192.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    
  }
  subs__.addSub(ref160.rebind());
  
  var result__ = "Q" + number.get() + ". " + qa.get().topic;
  var tmp1417 = mobl.ref(result__);
  subs__.addSub(number.addEventListener('change', function() {
    tmp1417.set("Q" + number.get() + ". " + qa.get().topic);
  }));
  subs__.addSub(mobl.ref(qa, 'topic').addEventListener('change', function() {
    tmp1417.set("Q" + number.get() + ". " + qa.get().topic);
  }));
  
  var nodes1487 = $("<span>");
  node192.append(nodes1487);
  subs__.addSub((mobl.html)(tmp1417, function(_, callback) {
    var root1678 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1678); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1487;
    nodes1487 = node.contents();
    oldNodes.replaceWith(nodes1487);
  }));
  root1677.append(node192);
  callback(root1677); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.showQA = function(qa, elements, callback) {
  var root1679 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp1498 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp1420 = mobl.ref(result__);
  
  var result__ = qa.get().topic.toLowerCase();
  var tmp1419 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'topic').addEventListener('change', function() {
    tmp1419.set(qa.get().topic.toLowerCase());
  }));
  
  var nodes1488 = $("<span>");
  root1679.append(nodes1488);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(tmp1419, tmp1420, function(_, callback) {
    var root1680 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp1493 = result__;
                       var result__ = tmp1493;
                       var qa2 = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp1494 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp1418 = mobl.ref(result__);
    
    var nodes1489 = $("<span>");
    root1680.append(nodes1489);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp1418, function(_, callback) {
      var root1681 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1681); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1489;
      nodes1489 = node.contents();
      oldNodes.replaceWith(nodes1489);
    }));
    callback(root1680); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1488;
    nodes1488 = node.contents();
    oldNodes.replaceWith(nodes1488);
  }));
  var nodes1490 = $("<span>");
  root1679.append(nodes1490);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1682 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp1497 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1422 = mobl.ref(result__);
    
    var nodes1491 = $("<span>");
    root1682.append(nodes1491);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp1422, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root1683 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + qa.get().number + ". " + qa.get().question;
      var tmp1421 = mobl.ref(result__);
      subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
        tmp1421.set("Q" + qa.get().number + ". " + qa.get().question);
      }));
      subs__.addSub(mobl.ref(qa, 'question').addEventListener('change', function() {
        tmp1421.set("Q" + qa.get().number + ". " + qa.get().question);
      }));
      
      var nodes1492 = $("<span>");
      root1683.append(nodes1492);
      subs__.addSub((mobl.html)(tmp1421, function(_, callback) {
        var root1684 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1684); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1492;
        nodes1492 = node.contents();
        oldNodes.replaceWith(nodes1492);
      }));
      callback(root1683); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1491;
      nodes1491 = node.contents();
      oldNodes.replaceWith(nodes1491);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp1496 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1424 = mobl.ref(result__);
    
    var nodes1493 = $("<span>");
    root1682.append(nodes1493);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1424, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root1685 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1494 = $("<span>");
      root1685.append(nodes1494);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1686 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                           var tmp1495 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp1423 = mobl.ref(result__);
        
        var nodes1495 = $("<span>");
        root1686.append(nodes1495);
        subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp1423, function(_, callback) {
          var root1687 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1687); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1495;
          nodes1495 = node.contents();
          oldNodes.replaceWith(nodes1495);
        }));
        callback(root1686); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1494;
        nodes1494 = node.contents();
        oldNodes.replaceWith(nodes1494);
      }));
      
      var node193 = $("<span>");
      root1685.append(node193);
      var condSubs57 = new mobl.CompSubscription();
      subs__.addSub(condSubs57);
      var oldValue57;
      var renderCond57 = function() {
        var value81 = qa.get().done;
        if(oldValue57 === value81) return;
        oldValue57 = value81;
        var subs__ = condSubs57;
        subs__.unsubscribe();
        node193.empty();
        if(value81) {
          var nodes1496 = $("<span>");
          node193.append(nodes1496);
          subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, function(_, callback) {
            var root1688 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root1688); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes1496;
            nodes1496 = node.contents();
            oldNodes.replaceWith(nodes1496);
          }));
          
          
        } else {
          
        }
      };
      renderCond57();
      subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
        renderCond57();
      }));
      
      callback(root1685); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1493;
      nodes1493 = node.contents();
      oldNodes.replaceWith(nodes1493);
    }));
    callback(root1682); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1490;
    nodes1490 = node.contents();
    oldNodes.replaceWith(nodes1490);
  }));
  callback(root1679); return subs__;
  
  
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
  qas.list(function(coll87) {
    coll87 = coll87.reverse();
    function processOne51() {
      var item;
      item = coll87.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll87.length > 0) processOne51(); else rest51();
      
    }
    function rest51() {
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
    if(coll87.length > 0) processOne51(); else rest51();
  });
  
};

nrichRPG.coreWorkout.makeQAStar = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll88) {
    coll88 = coll88.reverse();
    function processOne52() {
      var item;
      item = coll88.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll88.length > 0) processOne52(); else rest52();
      
    }
    function rest52() {
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
    if(coll88.length > 0) processOne52(); else rest52();
  });
  
};

nrichRPG.coreWorkout.makeQAStats = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll89) {
    coll89 = coll89.reverse();
    function processOne53() {
      var item;
      item = coll89.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll89.length > 0) processOne53(); else rest53();
      
    }
    function rest53() {
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
    if(coll89.length > 0) processOne53(); else rest53();
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