mobl.provides('mathmo');
mobl.provides('nrichRPG');
mobl.provides('mobl');
mobl.provides('nrichRPG.questionAnswer');
mobl.provides('nrichRPG.coreWorkout');
mobl.provides('ui');
mobl.provides('mathmo');
persistence.debug = false;mathmo.homeUrl = mobl.ref("http://nrich.maths.org");
mathmo.resourceUrl = mobl.ref("http://nrich.maths.org/7088");

mathmo.qaItem = function(qa, number, elements, callback) {
  var root1658 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node364 = $("<span>");
  
  var ref374 = mobl.ref("color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
  if(ref374.get() !== null) {
    node364.attr('style', ref374.get());
    subs__.addSub(ref374.addEventListener('change', function(_, ref, val) {
      node364.attr('style', val);
    }));
    subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
      node364.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
      node364.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    
  }
  subs__.addSub(ref374.rebind());
  
  var result__ = "Q" + number.get() + ". " + qa.get().topic;
  var tmp1286 = mobl.ref(result__);
  subs__.addSub(number.addEventListener('change', function() {
    tmp1286.set("Q" + number.get() + ". " + qa.get().topic);
  }));
  subs__.addSub(mobl.ref(qa, 'topic').addEventListener('change', function() {
    tmp1286.set("Q" + number.get() + ". " + qa.get().topic);
  }));
  
  var nodes1345 = $("<span>");
  node364.append(nodes1345);
  subs__.addSub((mobl.html)(tmp1286, function(_, callback) {
    var root1659 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1659); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1345;
    nodes1345 = node.contents();
    oldNodes.replaceWith(nodes1345);
  }));
  root1658.append(node364);
  callback(root1658); return subs__;
  
  
  return subs__;
};

mathmo.qTab = function(elements, callback) {
  var root1660 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1346 = $("<span>");
  root1660.append(nodes1346);
  subs__.addSub((ui.header)(mobl.ref("Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1661 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes1347 = $("<span>");
    root1661.append(nodes1347);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), mobl.ref(null), mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root1662 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1662); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1347;
      nodes1347 = node.contents();
      oldNodes.replaceWith(nodes1347);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.clearAllQ(function(result__) {
                       var tmp1294 = result__;
                       var result__ = ui.hideCurrent();
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1287 = mobl.ref(result__);
    
    var nodes1348 = $("<span>");
    root1661.append(nodes1348);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp1287, function(_, callback) {
      var root1663 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1663); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1348;
      nodes1348 = node.contents();
      oldNodes.replaceWith(nodes1348);
    }));
    callback(root1661); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1346;
    nodes1346 = node.contents();
    oldNodes.replaceWith(nodes1346);
  }));
  var result__ = nrichRPG.questionAnswer.QA.all().order("number", true);
  var tmp1288 = mobl.ref(result__);
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all().order("number", true)).addEventListener('change', function() {
    tmp1288.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all()).addEventListener('change', function() {
    tmp1288.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA).addEventListener('change', function() {
    tmp1288.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  
  var nodes1349 = $("<span>");
  root1660.append(nodes1349);
  subs__.addSub((ui.mMasterDetail)(tmp1288, mobl.ref(mathmo.qaItem), mobl.ref(nrichRPG.coreWorkout.showQA), function(_, callback) {
    var root1664 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1664); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1349;
    nodes1349 = node.contents();
    oldNodes.replaceWith(nodes1349);
  }));
  callback(root1660); return subs__;
  
  
  return subs__;
};

mathmo.coreTab = function(elements, callback) {
  var root1665 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1350 = $("<span>");
  root1665.append(nodes1350);
  subs__.addSub((ui.header)(mobl.ref("Q on topic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1666 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes1351 = $("<span>");
    root1666.append(nodes1351);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), mobl.ref(null), mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root1667 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1667); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1351;
      nodes1351 = node.contents();
      oldNodes.replaceWith(nodes1351);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.clearAllQ(function(result__) {
                       var tmp1295 = result__;
                       var result__ = ui.hideCurrent();
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1289 = mobl.ref(result__);
    
    var nodes1352 = $("<span>");
    root1666.append(nodes1352);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp1289, function(_, callback) {
      var root1668 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1668); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1352;
      nodes1352 = node.contents();
      oldNodes.replaceWith(nodes1352);
    }));
    callback(root1666); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1350;
    nodes1350 = node.contents();
    oldNodes.replaceWith(nodes1350);
  }));
  var nodes1353 = $("<span>");
  root1665.append(nodes1353);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1669 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQ(5, 1000, function(result__) {
                       var tmp1298 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1290 = mobl.ref(result__);
    
    var nodes1354 = $("<span>");
    root1669.append(nodes1354);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1290, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1670 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1355 = $("<span>");
      root1670.append(nodes1355);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 core Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1671 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1671); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1355;
        nodes1355 = node.contents();
        oldNodes.replaceWith(nodes1355);
      }));
      callback(root1670); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1354;
      nodes1354 = node.contents();
      oldNodes.replaceWith(nodes1354);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQStar(5, function(result__) {
                       var tmp1297 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1291 = mobl.ref(result__);
    
    var nodes1356 = $("<span>");
    root1669.append(nodes1356);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1291, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1672 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1357 = $("<span>");
      root1672.append(nodes1357);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 further Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1673 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1673); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1357;
        nodes1357 = node.contents();
        oldNodes.replaceWith(nodes1357);
      }));
      callback(root1672); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1356;
      nodes1356 = node.contents();
      oldNodes.replaceWith(nodes1356);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQStats(5, function(result__) {
                       var tmp1296 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1292 = mobl.ref(result__);
    
    var nodes1358 = $("<span>");
    root1669.append(nodes1358);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1292, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1674 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1359 = $("<span>");
      root1674.append(nodes1359);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 stats Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1675 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1675); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1359;
        nodes1359 = node.contents();
        oldNodes.replaceWith(nodes1359);
      }));
      callback(root1674); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1358;
      nodes1358 = node.contents();
      oldNodes.replaceWith(nodes1358);
    }));
    callback(root1669); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1353;
    nodes1353 = node.contents();
    oldNodes.replaceWith(nodes1353);
  }));
  var nodes1360 = $("<span>");
  root1665.append(nodes1360);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Core topics</section>"), function(_, callback) {
    var root1676 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1676); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1360;
    nodes1360 = node.contents();
    oldNodes.replaceWith(nodes1360);
  }));
  var nodes1361 = $("<span>");
  root1665.append(nodes1361);
  subs__.addSub((nrichRPG.coreWorkout.addQA)(function(_, callback) {
    var root1677 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1677); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1361;
    nodes1361 = node.contents();
    oldNodes.replaceWith(nodes1361);
  }));
  var nodes1362 = $("<span>");
  root1665.append(nodes1362);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Further topics</section>"), function(_, callback) {
    var root1678 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1678); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1362;
    nodes1362 = node.contents();
    oldNodes.replaceWith(nodes1362);
  }));
  var nodes1363 = $("<span>");
  root1665.append(nodes1363);
  subs__.addSub((nrichRPG.coreWorkout.addQAPlus)(function(_, callback) {
    var root1679 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1679); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1363;
    nodes1363 = node.contents();
    oldNodes.replaceWith(nodes1363);
  }));
  var nodes1364 = $("<span>");
  root1665.append(nodes1364);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Stats topics</section>"), function(_, callback) {
    var root1680 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1680); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1364;
    nodes1364 = node.contents();
    oldNodes.replaceWith(nodes1364);
  }));
  var nodes1365 = $("<span>");
  root1665.append(nodes1365);
  subs__.addSub((nrichRPG.coreWorkout.addQAStats)(function(_, callback) {
    var root1681 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1681); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1365;
    nodes1365 = node.contents();
    oldNodes.replaceWith(nodes1365);
  }));
  callback(root1665); return subs__;
  
  
  
  
  
  
  
  
  return subs__;
};

mathmo.furtherTab = function(elements, callback) {
  var root1682 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1366 = $("<span>");
  root1682.append(nodes1366);
  subs__.addSub((ui.header)(mobl.ref("+Q on *topic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1683 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1683); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1366;
    nodes1366 = node.contents();
    oldNodes.replaceWith(nodes1366);
  }));
  var nodes1367 = $("<span>");
  root1682.append(nodes1367);
  subs__.addSub((nrichRPG.coreWorkout.addQAPlus)(function(_, callback) {
    var root1684 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1684); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1367;
    nodes1367 = node.contents();
    oldNodes.replaceWith(nodes1367);
  }));
  callback(root1682); return subs__;
  
  
  return subs__;
};

mathmo.root = function(callback, screenCallback) {
  var root1685 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  mobl.fetchLanguageBundle("english.json", function(result__) {
    var tmp1299 = result__;
    nrichRPG.questionAnswer.QA.all().count(function(result__) {
      var tmp1301 = result__;
      var result__ = tmp1301 == 0;
      var tmp1300 = result__;
      var result__ = tmp1300;
      if(result__) {
        {
          nrichRPG.coreWorkout.randomQ(5, 1000, function(result__) {
            var tmp1302 = result__;
            var result__ = [new mobl.Tuple("Intro", "", ui.introduction), new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab)];
            var tmp1293 = mobl.ref(result__);
            subs__.addSub(mobl.ref(ui.introduction).addEventListener('change', function() {
              tmp1293.set([new mobl.Tuple("Intro", "", ui.introduction), new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab)]);
            }));
            subs__.addSub(mobl.ref(mathmo.qTab).addEventListener('change', function() {
              tmp1293.set([new mobl.Tuple("Intro", "", ui.introduction), new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab)]);
            }));
            subs__.addSub(mobl.ref(mathmo.coreTab).addEventListener('change', function() {
              tmp1293.set([new mobl.Tuple("Intro", "", ui.introduction), new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab)]);
            }));
            
            var nodes1368 = $("<span>");
            root1685.append(nodes1368);
            subs__.addSub((ui.tabSet)(tmp1293, mobl.ref(null), function(_, callback) {
              var root1686 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1686); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1368;
              nodes1368 = node.contents();
              oldNodes.replaceWith(nodes1368);
            }));
            callback(root1685); return subs__;
            
          });
        }
      } else {
        {
          var result__ = [new mobl.Tuple("Intro", "", ui.introduction), new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab)];
          var tmp1293 = mobl.ref(result__);
          subs__.addSub(mobl.ref(ui.introduction).addEventListener('change', function() {
            tmp1293.set([new mobl.Tuple("Intro", "", ui.introduction), new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab)]);
          }));
          subs__.addSub(mobl.ref(mathmo.qTab).addEventListener('change', function() {
            tmp1293.set([new mobl.Tuple("Intro", "", ui.introduction), new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab)]);
          }));
          subs__.addSub(mobl.ref(mathmo.coreTab).addEventListener('change', function() {
            tmp1293.set([new mobl.Tuple("Intro", "", ui.introduction), new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab)]);
          }));
          
          var nodes1368 = $("<span>");
          root1685.append(nodes1368);
          subs__.addSub((ui.tabSet)(tmp1293, mobl.ref(null), function(_, callback) {
            var root1686 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root1686); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes1368;
            nodes1368 = node.contents();
            oldNodes.replaceWith(nodes1368);
          }));
          callback(root1685); return subs__;
          
        }
      }
    });
  });
  return subs__;
};
