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
  var root1414 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node520 = $("<span>");
  
  var ref538 = mobl.ref("color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
  if(ref538.get() !== null) {
    node520.attr('style', ref538.get());
    subs__.addSub(ref538.addEventListener('change', function(_, ref, val) {
      node520.attr('style', val);
    }));
    subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
      node520.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
      node520.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    
  }
  subs__.addSub(ref538.rebind());
  
  var result__ = "Q" + number.get() + ". " + qa.get().topic;
  var tmp952 = mobl.ref(result__);
  subs__.addSub(number.addEventListener('change', function() {
    tmp952.set("Q" + number.get() + ". " + qa.get().topic);
  }));
  subs__.addSub(mobl.ref(qa, 'topic').addEventListener('change', function() {
    tmp952.set("Q" + number.get() + ". " + qa.get().topic);
  }));
  
  var nodes1045 = $("<span>");
  node520.append(nodes1045);
  subs__.addSub((mobl.html)(tmp952, function(_, callback) {
    var root1415 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1415); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1045;
    nodes1045 = node.contents();
    oldNodes.replaceWith(nodes1045);
  }));
  root1414.append(node520);
  callback(root1414); return subs__;
  
  
  return subs__;
};

mathmo.qTab = function(elements, callback) {
  var root1416 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1046 = $("<span>");
  root1416.append(nodes1046);
  subs__.addSub((ui.header)(mobl.ref("Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1417 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes1047 = $("<span>");
    root1417.append(nodes1047);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), mobl.ref(null), mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root1418 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1418); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1047;
      nodes1047 = node.contents();
      oldNodes.replaceWith(nodes1047);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.clearAllQ(function(result__) {
                       var tmp960 = result__;
                       var result__ = ui.hideCurrent();
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp953 = mobl.ref(result__);
    
    var nodes1048 = $("<span>");
    root1417.append(nodes1048);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp953, function(_, callback) {
      var root1419 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1419); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1048;
      nodes1048 = node.contents();
      oldNodes.replaceWith(nodes1048);
    }));
    callback(root1417); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1046;
    nodes1046 = node.contents();
    oldNodes.replaceWith(nodes1046);
  }));
  var result__ = nrichRPG.questionAnswer.QA.all().order("number", true);
  var tmp954 = mobl.ref(result__);
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all().order("number", true)).addEventListener('change', function() {
    tmp954.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all()).addEventListener('change', function() {
    tmp954.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA).addEventListener('change', function() {
    tmp954.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  
  var nodes1049 = $("<span>");
  root1416.append(nodes1049);
  subs__.addSub((ui.mMasterDetail)(tmp954, mobl.ref(mathmo.qaItem), mobl.ref(nrichRPG.coreWorkout.showQA), function(_, callback) {
    var root1420 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1420); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1049;
    nodes1049 = node.contents();
    oldNodes.replaceWith(nodes1049);
  }));
  callback(root1416); return subs__;
  
  
  return subs__;
};

mathmo.coreTab = function(elements, callback) {
  var root1421 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1050 = $("<span>");
  root1421.append(nodes1050);
  subs__.addSub((ui.header)(mobl.ref("Q on topic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1422 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes1051 = $("<span>");
    root1422.append(nodes1051);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), mobl.ref(null), mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root1423 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1423); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1051;
      nodes1051 = node.contents();
      oldNodes.replaceWith(nodes1051);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.clearAllQ(function(result__) {
                       var tmp961 = result__;
                       var result__ = ui.hideCurrent();
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp955 = mobl.ref(result__);
    
    var nodes1052 = $("<span>");
    root1422.append(nodes1052);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp955, function(_, callback) {
      var root1424 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1424); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1052;
      nodes1052 = node.contents();
      oldNodes.replaceWith(nodes1052);
    }));
    callback(root1422); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1050;
    nodes1050 = node.contents();
    oldNodes.replaceWith(nodes1050);
  }));
  var nodes1053 = $("<span>");
  root1421.append(nodes1053);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1425 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQ(5, 1000, function(result__) {
                       var tmp964 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp956 = mobl.ref(result__);
    
    var nodes1054 = $("<span>");
    root1425.append(nodes1054);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp956, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1426 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1055 = $("<span>");
      root1426.append(nodes1055);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 core Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1427 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1427); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1055;
        nodes1055 = node.contents();
        oldNodes.replaceWith(nodes1055);
      }));
      callback(root1426); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1054;
      nodes1054 = node.contents();
      oldNodes.replaceWith(nodes1054);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQStar(5, function(result__) {
                       var tmp963 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp957 = mobl.ref(result__);
    
    var nodes1056 = $("<span>");
    root1425.append(nodes1056);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp957, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1428 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1057 = $("<span>");
      root1428.append(nodes1057);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 further Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1429 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1429); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1057;
        nodes1057 = node.contents();
        oldNodes.replaceWith(nodes1057);
      }));
      callback(root1428); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1056;
      nodes1056 = node.contents();
      oldNodes.replaceWith(nodes1056);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQStats(5, function(result__) {
                       var tmp962 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp958 = mobl.ref(result__);
    
    var nodes1058 = $("<span>");
    root1425.append(nodes1058);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp958, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1430 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1059 = $("<span>");
      root1430.append(nodes1059);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 stats Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1431 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1431); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1059;
        nodes1059 = node.contents();
        oldNodes.replaceWith(nodes1059);
      }));
      callback(root1430); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1058;
      nodes1058 = node.contents();
      oldNodes.replaceWith(nodes1058);
    }));
    callback(root1425); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1053;
    nodes1053 = node.contents();
    oldNodes.replaceWith(nodes1053);
  }));
  var nodes1060 = $("<span>");
  root1421.append(nodes1060);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Core topics</section>"), function(_, callback) {
    var root1432 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1432); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1060;
    nodes1060 = node.contents();
    oldNodes.replaceWith(nodes1060);
  }));
  var nodes1061 = $("<span>");
  root1421.append(nodes1061);
  subs__.addSub((nrichRPG.coreWorkout.addQA)(function(_, callback) {
    var root1433 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1433); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1061;
    nodes1061 = node.contents();
    oldNodes.replaceWith(nodes1061);
  }));
  var nodes1062 = $("<span>");
  root1421.append(nodes1062);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Further topics</section>"), function(_, callback) {
    var root1434 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1434); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1062;
    nodes1062 = node.contents();
    oldNodes.replaceWith(nodes1062);
  }));
  var nodes1063 = $("<span>");
  root1421.append(nodes1063);
  subs__.addSub((nrichRPG.coreWorkout.addQAPlus)(function(_, callback) {
    var root1435 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1435); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1063;
    nodes1063 = node.contents();
    oldNodes.replaceWith(nodes1063);
  }));
  var nodes1064 = $("<span>");
  root1421.append(nodes1064);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Stats topics</section>"), function(_, callback) {
    var root1436 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1436); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1064;
    nodes1064 = node.contents();
    oldNodes.replaceWith(nodes1064);
  }));
  var nodes1065 = $("<span>");
  root1421.append(nodes1065);
  subs__.addSub((nrichRPG.coreWorkout.addQAStats)(function(_, callback) {
    var root1437 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1437); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1065;
    nodes1065 = node.contents();
    oldNodes.replaceWith(nodes1065);
  }));
  callback(root1421); return subs__;
  
  
  
  
  
  
  
  
  return subs__;
};

mathmo.furtherTab = function(elements, callback) {
  var root1438 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1066 = $("<span>");
  root1438.append(nodes1066);
  subs__.addSub((ui.header)(mobl.ref("+Q on *topic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1439 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1439); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1066;
    nodes1066 = node.contents();
    oldNodes.replaceWith(nodes1066);
  }));
  var nodes1067 = $("<span>");
  root1438.append(nodes1067);
  subs__.addSub((nrichRPG.coreWorkout.addQAPlus)(function(_, callback) {
    var root1440 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root1440); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1067;
    nodes1067 = node.contents();
    oldNodes.replaceWith(nodes1067);
  }));
  callback(root1438); return subs__;
  
  
  return subs__;
};

mathmo.root = function(callback, screenCallback) {
  var root1441 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  mobl.fetchLanguageBundle("english.json", function(result__) {
    var tmp965 = result__;
    nrichRPG.questionAnswer.QA.all().count(function(result__) {
      var tmp967 = result__;
      var result__ = tmp967 == 0;
      var tmp966 = result__;
      var result__ = tmp966;
      if(result__) {
        {
          nrichRPG.coreWorkout.randomQ(5, 1000, function(result__) {
            var tmp968 = result__;
            var result__ = [new mobl.Tuple("Intro", "", ui.introduction), new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab)];
            var tmp959 = mobl.ref(result__);
            subs__.addSub(mobl.ref(ui.introduction).addEventListener('change', function() {
              tmp959.set([new mobl.Tuple("Intro", "", ui.introduction), new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab)]);
            }));
            subs__.addSub(mobl.ref(mathmo.qTab).addEventListener('change', function() {
              tmp959.set([new mobl.Tuple("Intro", "", ui.introduction), new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab)]);
            }));
            subs__.addSub(mobl.ref(mathmo.coreTab).addEventListener('change', function() {
              tmp959.set([new mobl.Tuple("Intro", "", ui.introduction), new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab)]);
            }));
            
            var nodes1068 = $("<span>");
            root1441.append(nodes1068);
            subs__.addSub((ui.tabSet)(tmp959, mobl.ref(null), function(_, callback) {
              var root1442 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root1442); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1068;
              nodes1068 = node.contents();
              oldNodes.replaceWith(nodes1068);
            }));
            callback(root1441); return subs__;
            
          });
        }
      } else {
        {
          var result__ = [new mobl.Tuple("Intro", "", ui.introduction), new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab)];
          var tmp959 = mobl.ref(result__);
          subs__.addSub(mobl.ref(ui.introduction).addEventListener('change', function() {
            tmp959.set([new mobl.Tuple("Intro", "", ui.introduction), new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab)]);
          }));
          subs__.addSub(mobl.ref(mathmo.qTab).addEventListener('change', function() {
            tmp959.set([new mobl.Tuple("Intro", "", ui.introduction), new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab)]);
          }));
          subs__.addSub(mobl.ref(mathmo.coreTab).addEventListener('change', function() {
            tmp959.set([new mobl.Tuple("Intro", "", ui.introduction), new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab)]);
          }));
          
          var nodes1068 = $("<span>");
          root1441.append(nodes1068);
          subs__.addSub((ui.tabSet)(tmp959, mobl.ref(null), function(_, callback) {
            var root1442 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root1442); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes1068;
            nodes1068 = node.contents();
            oldNodes.replaceWith(nodes1068);
          }));
          callback(root1441); return subs__;
          
        }
      }
    });
  });
  return subs__;
};
