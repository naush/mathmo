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
    var tmp489 = result__;
    var result__ = tmp489;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp490 = result__;
      var result__ = tmp490;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp491 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicCode, callback) {
  var __this = this;
  var result__ = nrichRPG.coreWorkout.topicMapForId(topicCode).keys();
  var keys = result__;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll16) {
    coll16 = coll16.reverse();
    function processOne9() {
      var i;
      i = coll16.pop();
      var result__ = mobl.Math.floor(keys.length * mobl.Math.random());
      var r = result__;
      var result__ = keys.get(r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQA(tid, function(result__) {
        var tmp492 = result__;
        
        if(coll16.length > 0) processOne9(); else rest9();
        
      });
    }
    function rest9() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll16.length > 0) processOne9(); else rest9();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root875 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes763 = $("<span>");
  root875.append(nodes763);
  subs__.addSub((ui.group)(function(_, callback) {
    var root876 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp500 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp452 = mobl.ref(result__);
    
    var nodes764 = $("<span>");
    root876.append(nodes764);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp452, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root877 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes765 = $("<span>");
      root877.append(nodes765);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root878 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root878); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes765;
        nodes765 = node.contents();
        oldNodes.replaceWith(nodes765);
      }));
      callback(root877); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes764;
      nodes764 = node.contents();
      oldNodes.replaceWith(nodes764);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp499 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp453 = mobl.ref(result__);
    
    var nodes766 = $("<span>");
    root876.append(nodes766);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp453, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root879 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes767 = $("<span>");
      root879.append(nodes767);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root880 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root880); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes767;
        nodes767 = node.contents();
        oldNodes.replaceWith(nodes767);
      }));
      callback(root879); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes766;
      nodes766 = node.contents();
      oldNodes.replaceWith(nodes766);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp498 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp454 = mobl.ref(result__);
    
    var nodes768 = $("<span>");
    root876.append(nodes768);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp454, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root881 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes769 = $("<span>");
      root881.append(nodes769);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root882 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root882); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes769;
        nodes769 = node.contents();
        oldNodes.replaceWith(nodes769);
      }));
      callback(root881); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes768;
      nodes768 = node.contents();
      oldNodes.replaceWith(nodes768);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp497 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp455 = mobl.ref(result__);
    
    var nodes770 = $("<span>");
    root876.append(nodes770);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp455, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root883 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes771 = $("<span>");
      root883.append(nodes771);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root884 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root884); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes771;
        nodes771 = node.contents();
        oldNodes.replaceWith(nodes771);
      }));
      callback(root883); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes770;
      nodes770 = node.contents();
      oldNodes.replaceWith(nodes770);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp496 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp456 = mobl.ref(result__);
    
    var nodes772 = $("<span>");
    root876.append(nodes772);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp456, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root885 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes773 = $("<span>");
      root885.append(nodes773);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root886 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root886); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes773;
        nodes773 = node.contents();
        oldNodes.replaceWith(nodes773);
      }));
      callback(root885); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes772;
      nodes772 = node.contents();
      oldNodes.replaceWith(nodes772);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp495 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp457 = mobl.ref(result__);
    
    var nodes774 = $("<span>");
    root876.append(nodes774);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp457, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root887 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes775 = $("<span>");
      root887.append(nodes775);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root888 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root888); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes775;
        nodes775 = node.contents();
        oldNodes.replaceWith(nodes775);
      }));
      callback(root887); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes774;
      nodes774 = node.contents();
      oldNodes.replaceWith(nodes774);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp494 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp458 = mobl.ref(result__);
    
    var nodes776 = $("<span>");
    root876.append(nodes776);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp458, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root889 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes777 = $("<span>");
      root889.append(nodes777);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root890 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root890); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes777;
        nodes777 = node.contents();
        oldNodes.replaceWith(nodes777);
      }));
      callback(root889); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes776;
      nodes776 = node.contents();
      oldNodes.replaceWith(nodes776);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp493 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp459 = mobl.ref(result__);
    
    var nodes778 = $("<span>");
    root876.append(nodes778);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp459, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root891 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes779 = $("<span>");
      root891.append(nodes779);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root892 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root892); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes779;
        nodes779 = node.contents();
        oldNodes.replaceWith(nodes779);
      }));
      callback(root891); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes778;
      nodes778 = node.contents();
      oldNodes.replaceWith(nodes778);
    }));
    callback(root876); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes763;
    nodes763 = node.contents();
    oldNodes.replaceWith(nodes763);
  }));
  callback(root875); return subs__;
  
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
    var tmp501 = result__;
    var result__ = mobl.alert(nrichRPG.coreWorkout.topicName(tid) + " added");
    if(callback && callback.apply) callback(); return;
  });
};


nrichRPG.coreWorkout.topicLabel = function(tid, elements, callback) {
  var root893 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var map = mobl.ref(nrichRPG.coreWorkout.topicMapForId(tid.get()));
  var result__ = "+" + map.get().get(tid.get());
  var tmp460 = mobl.ref(result__);
  subs__.addSub(map.addEventListener('change', function() {
    tmp460.set("+" + map.get().get(tid.get()));
  }));
  subs__.addSub(tid.addEventListener('change', function() {
    tmp460.set("+" + map.get().get(tid.get()));
  }));
  
  var nodes780 = $("<span>");
  root893.append(nodes780);
  subs__.addSub((mobl.label)(tmp460, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root894 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root894); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes780;
    nodes780 = node.contents();
    oldNodes.replaceWith(nodes780);
  }));
  callback(root893); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.topicItem = function(tid, elements, callback) {
  var root895 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   nrichRPG.coreWorkout.topicAdded(tid.get(), function(result__) {
                     var tmp502 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp461 = mobl.ref(result__);
  
  var nodes781 = $("<span>");
  root895.append(nodes781);
  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp461, mobl.ref(null), mobl.ref(false), function(_, callback) {
    var root896 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes782 = $("<span>");
    root896.append(nodes782);
    subs__.addSub((nrichRPG.coreWorkout.topicLabel)(tid, function(_, callback) {
      var root897 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root897); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes782;
      nodes782 = node.contents();
      oldNodes.replaceWith(nodes782);
    }));
    callback(root896); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes781;
    nodes781 = node.contents();
    oldNodes.replaceWith(nodes781);
  }));
  callback(root895); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root898 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes783 = $("<span>");
  root898.append(nodes783);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root899 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp463 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp462 = mobl.ref(result__);
    
    var nodes784 = $("<span>");
    root899.append(nodes784);
    subs__.addSub((ui.backButton)(tmp462, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp463, function(_, callback) {
      var root900 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root900); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes784;
      nodes784 = node.contents();
      oldNodes.replaceWith(nodes784);
    }));
    callback(root899); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes783;
    nodes783 = node.contents();
    oldNodes.replaceWith(nodes783);
  }));
  var nodes785 = $("<span>");
  root898.append(nodes785);
  subs__.addSub((ui.group)(function(_, callback) {
    var root901 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes786 = $("<span>");
    root901.append(nodes786);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C11"), function(_, callback) {
      var root902 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root902); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes786;
      nodes786 = node.contents();
      oldNodes.replaceWith(nodes786);
    }));
    var nodes787 = $("<span>");
    root901.append(nodes787);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C7"), function(_, callback) {
      var root903 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root903); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes787;
      nodes787 = node.contents();
      oldNodes.replaceWith(nodes787);
    }));
    var nodes788 = $("<span>");
    root901.append(nodes788);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C9"), function(_, callback) {
      var root904 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root904); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes788;
      nodes788 = node.contents();
      oldNodes.replaceWith(nodes788);
    }));
    var nodes789 = $("<span>");
    root901.append(nodes789);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C1"), function(_, callback) {
      var root905 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root905); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes789;
      nodes789 = node.contents();
      oldNodes.replaceWith(nodes789);
    }));
    var nodes790 = $("<span>");
    root901.append(nodes790);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C30"), function(_, callback) {
      var root906 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root906); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes790;
      nodes790 = node.contents();
      oldNodes.replaceWith(nodes790);
    }));
    var nodes791 = $("<span>");
    root901.append(nodes791);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C13"), function(_, callback) {
      var root907 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root907); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes791;
      nodes791 = node.contents();
      oldNodes.replaceWith(nodes791);
    }));
    var nodes792 = $("<span>");
    root901.append(nodes792);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C17"), function(_, callback) {
      var root908 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root908); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes792;
      nodes792 = node.contents();
      oldNodes.replaceWith(nodes792);
    }));
    callback(root901); return subs__;
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes785;
    nodes785 = node.contents();
    oldNodes.replaceWith(nodes785);
  }));
  callback(root898); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root909 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes793 = $("<span>");
  root909.append(nodes793);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root910 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp465 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp464 = mobl.ref(result__);
    
    var nodes794 = $("<span>");
    root910.append(nodes794);
    subs__.addSub((ui.backButton)(tmp464, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp465, function(_, callback) {
      var root911 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root911); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes794;
      nodes794 = node.contents();
      oldNodes.replaceWith(nodes794);
    }));
    callback(root910); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes793;
    nodes793 = node.contents();
    oldNodes.replaceWith(nodes793);
  }));
  var nodes795 = $("<span>");
  root909.append(nodes795);
  subs__.addSub((ui.group)(function(_, callback) {
    var root912 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes796 = $("<span>");
    root912.append(nodes796);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C24"), function(_, callback) {
      var root913 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root913); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes796;
      nodes796 = node.contents();
      oldNodes.replaceWith(nodes796);
    }));
    var nodes797 = $("<span>");
    root912.append(nodes797);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C25"), function(_, callback) {
      var root914 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root914); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes797;
      nodes797 = node.contents();
      oldNodes.replaceWith(nodes797);
    }));
    var nodes798 = $("<span>");
    root912.append(nodes798);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C26"), function(_, callback) {
      var root915 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root915); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes798;
      nodes798 = node.contents();
      oldNodes.replaceWith(nodes798);
    }));
    var nodes799 = $("<span>");
    root912.append(nodes799);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C270"), function(_, callback) {
      var root916 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root916); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes799;
      nodes799 = node.contents();
      oldNodes.replaceWith(nodes799);
    }));
    var nodes800 = $("<span>");
    root912.append(nodes800);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C27"), function(_, callback) {
      var root917 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root917); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes800;
      nodes800 = node.contents();
      oldNodes.replaceWith(nodes800);
    }));
    callback(root912); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes795;
    nodes795 = node.contents();
    oldNodes.replaceWith(nodes795);
  }));
  callback(root909); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root918 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes801 = $("<span>");
  root918.append(nodes801);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root919 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp467 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp466 = mobl.ref(result__);
    
    var nodes802 = $("<span>");
    root919.append(nodes802);
    subs__.addSub((ui.backButton)(tmp466, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp467, function(_, callback) {
      var root920 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root920); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes802;
      nodes802 = node.contents();
      oldNodes.replaceWith(nodes802);
    }));
    callback(root919); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes801;
    nodes801 = node.contents();
    oldNodes.replaceWith(nodes801);
  }));
  var nodes803 = $("<span>");
  root918.append(nodes803);
  subs__.addSub((ui.group)(function(_, callback) {
    var root921 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes804 = $("<span>");
    root921.append(nodes804);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C15"), function(_, callback) {
      var root922 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root922); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes804;
      nodes804 = node.contents();
      oldNodes.replaceWith(nodes804);
    }));
    var nodes805 = $("<span>");
    root921.append(nodes805);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C16"), function(_, callback) {
      var root923 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root923); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes805;
      nodes805 = node.contents();
      oldNodes.replaceWith(nodes805);
    }));
    var nodes806 = $("<span>");
    root921.append(nodes806);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C6"), function(_, callback) {
      var root924 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root924); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes806;
      nodes806 = node.contents();
      oldNodes.replaceWith(nodes806);
    }));
    callback(root921); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes803;
    nodes803 = node.contents();
    oldNodes.replaceWith(nodes803);
  }));
  callback(root918); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root925 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes807 = $("<span>");
  root925.append(nodes807);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root926 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp469 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp468 = mobl.ref(result__);
    
    var nodes808 = $("<span>");
    root926.append(nodes808);
    subs__.addSub((ui.backButton)(tmp468, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp469, function(_, callback) {
      var root927 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root927); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes808;
      nodes808 = node.contents();
      oldNodes.replaceWith(nodes808);
    }));
    callback(root926); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes807;
    nodes807 = node.contents();
    oldNodes.replaceWith(nodes807);
  }));
  var nodes809 = $("<span>");
  root925.append(nodes809);
  subs__.addSub((ui.group)(function(_, callback) {
    var root928 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes810 = $("<span>");
    root928.append(nodes810);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C8"), function(_, callback) {
      var root929 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root929); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes810;
      nodes810 = node.contents();
      oldNodes.replaceWith(nodes810);
    }));
    var nodes811 = $("<span>");
    root928.append(nodes811);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C12"), function(_, callback) {
      var root930 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root930); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes811;
      nodes811 = node.contents();
      oldNodes.replaceWith(nodes811);
    }));
    var nodes812 = $("<span>");
    root928.append(nodes812);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C23"), function(_, callback) {
      var root931 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root931); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes812;
      nodes812 = node.contents();
      oldNodes.replaceWith(nodes812);
    }));
    var nodes813 = $("<span>");
    root928.append(nodes813);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C2"), function(_, callback) {
      var root932 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root932); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes813;
      nodes813 = node.contents();
      oldNodes.replaceWith(nodes813);
    }));
    callback(root928); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes809;
    nodes809 = node.contents();
    oldNodes.replaceWith(nodes809);
  }));
  callback(root925); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root933 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes814 = $("<span>");
  root933.append(nodes814);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root934 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp471 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp470 = mobl.ref(result__);
    
    var nodes815 = $("<span>");
    root934.append(nodes815);
    subs__.addSub((ui.backButton)(tmp470, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp471, function(_, callback) {
      var root935 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root935); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes815;
      nodes815 = node.contents();
      oldNodes.replaceWith(nodes815);
    }));
    callback(root934); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes814;
    nodes814 = node.contents();
    oldNodes.replaceWith(nodes814);
  }));
  var nodes816 = $("<span>");
  root933.append(nodes816);
  subs__.addSub((ui.group)(function(_, callback) {
    var root936 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes817 = $("<span>");
    root936.append(nodes817);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C5"), function(_, callback) {
      var root937 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root937); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes817;
      nodes817 = node.contents();
      oldNodes.replaceWith(nodes817);
    }));
    var nodes818 = $("<span>");
    root936.append(nodes818);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C18"), function(_, callback) {
      var root938 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root938); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes818;
      nodes818 = node.contents();
      oldNodes.replaceWith(nodes818);
    }));
    callback(root936); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes816;
    nodes816 = node.contents();
    oldNodes.replaceWith(nodes816);
  }));
  callback(root933); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root939 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes819 = $("<span>");
  root939.append(nodes819);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root940 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp473 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp472 = mobl.ref(result__);
    
    var nodes820 = $("<span>");
    root940.append(nodes820);
    subs__.addSub((ui.backButton)(tmp472, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp473, function(_, callback) {
      var root941 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root941); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes820;
      nodes820 = node.contents();
      oldNodes.replaceWith(nodes820);
    }));
    callback(root940); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes819;
    nodes819 = node.contents();
    oldNodes.replaceWith(nodes819);
  }));
  var nodes821 = $("<span>");
  root939.append(nodes821);
  subs__.addSub((ui.group)(function(_, callback) {
    var root942 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes822 = $("<span>");
    root942.append(nodes822);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C14"), function(_, callback) {
      var root943 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root943); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes822;
      nodes822 = node.contents();
      oldNodes.replaceWith(nodes822);
    }));
    var nodes823 = $("<span>");
    root942.append(nodes823);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C20"), function(_, callback) {
      var root944 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root944); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes823;
      nodes823 = node.contents();
      oldNodes.replaceWith(nodes823);
    }));
    var nodes824 = $("<span>");
    root942.append(nodes824);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C21"), function(_, callback) {
      var root945 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root945); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes824;
      nodes824 = node.contents();
      oldNodes.replaceWith(nodes824);
    }));
    var nodes825 = $("<span>");
    root942.append(nodes825);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C22"), function(_, callback) {
      var root946 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root946); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes825;
      nodes825 = node.contents();
      oldNodes.replaceWith(nodes825);
    }));
    var nodes826 = $("<span>");
    root942.append(nodes826);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C19"), function(_, callback) {
      var root947 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root947); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes826;
      nodes826 = node.contents();
      oldNodes.replaceWith(nodes826);
    }));
    callback(root942); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes821;
    nodes821 = node.contents();
    oldNodes.replaceWith(nodes821);
  }));
  callback(root939); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root948 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes827 = $("<span>");
  root948.append(nodes827);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root949 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp475 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp474 = mobl.ref(result__);
    
    var nodes828 = $("<span>");
    root949.append(nodes828);
    subs__.addSub((ui.backButton)(tmp474, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp475, function(_, callback) {
      var root950 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root950); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes828;
      nodes828 = node.contents();
      oldNodes.replaceWith(nodes828);
    }));
    callback(root949); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes827;
    nodes827 = node.contents();
    oldNodes.replaceWith(nodes827);
  }));
  var nodes829 = $("<span>");
  root948.append(nodes829);
  subs__.addSub((ui.group)(function(_, callback) {
    var root951 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes830 = $("<span>");
    root951.append(nodes830);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C28"), function(_, callback) {
      var root952 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root952); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes830;
      nodes830 = node.contents();
      oldNodes.replaceWith(nodes830);
    }));
    var nodes831 = $("<span>");
    root951.append(nodes831);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C3"), function(_, callback) {
      var root953 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root953); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes831;
      nodes831 = node.contents();
      oldNodes.replaceWith(nodes831);
    }));
    var nodes832 = $("<span>");
    root951.append(nodes832);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C4"), function(_, callback) {
      var root954 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root954); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes832;
      nodes832 = node.contents();
      oldNodes.replaceWith(nodes832);
    }));
    callback(root951); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes829;
    nodes829 = node.contents();
    oldNodes.replaceWith(nodes829);
  }));
  callback(root948); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root955 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes833 = $("<span>");
  root955.append(nodes833);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root956 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp477 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp476 = mobl.ref(result__);
    
    var nodes834 = $("<span>");
    root956.append(nodes834);
    subs__.addSub((ui.backButton)(tmp476, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp477, function(_, callback) {
      var root957 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root957); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes834;
      nodes834 = node.contents();
      oldNodes.replaceWith(nodes834);
    }));
    callback(root956); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes833;
    nodes833 = node.contents();
    oldNodes.replaceWith(nodes833);
  }));
  var nodes835 = $("<span>");
  root955.append(nodes835);
  subs__.addSub((ui.group)(function(_, callback) {
    var root958 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes836 = $("<span>");
    root958.append(nodes836);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("C29"), function(_, callback) {
      var root959 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root959); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes836;
      nodes836 = node.contents();
      oldNodes.replaceWith(nodes836);
    }));
    callback(root958); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes835;
    nodes835 = node.contents();
    oldNodes.replaceWith(nodes835);
  }));
  callback(root955); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root960 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes837 = $("<span>");
  root960.append(nodes837);
  subs__.addSub((ui.group)(function(_, callback) {
    var root961 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes838 = $("<span>");
    root961.append(nodes838);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F1"), function(_, callback) {
      var root962 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root962); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes838;
      nodes838 = node.contents();
      oldNodes.replaceWith(nodes838);
    }));
    var nodes839 = $("<span>");
    root961.append(nodes839);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F2"), function(_, callback) {
      var root963 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root963); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes839;
      nodes839 = node.contents();
      oldNodes.replaceWith(nodes839);
    }));
    var nodes840 = $("<span>");
    root961.append(nodes840);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F3a"), function(_, callback) {
      var root964 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root964); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes840;
      nodes840 = node.contents();
      oldNodes.replaceWith(nodes840);
    }));
    var nodes841 = $("<span>");
    root961.append(nodes841);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F4"), function(_, callback) {
      var root965 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root965); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes841;
      nodes841 = node.contents();
      oldNodes.replaceWith(nodes841);
    }));
    var nodes842 = $("<span>");
    root961.append(nodes842);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F5"), function(_, callback) {
      var root966 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root966); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes842;
      nodes842 = node.contents();
      oldNodes.replaceWith(nodes842);
    }));
    var nodes843 = $("<span>");
    root961.append(nodes843);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F6"), function(_, callback) {
      var root967 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root967); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes843;
      nodes843 = node.contents();
      oldNodes.replaceWith(nodes843);
    }));
    var nodes844 = $("<span>");
    root961.append(nodes844);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F7"), function(_, callback) {
      var root968 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root968); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes844;
      nodes844 = node.contents();
      oldNodes.replaceWith(nodes844);
    }));
    var nodes845 = $("<span>");
    root961.append(nodes845);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F8"), function(_, callback) {
      var root969 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root969); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes845;
      nodes845 = node.contents();
      oldNodes.replaceWith(nodes845);
    }));
    var nodes846 = $("<span>");
    root961.append(nodes846);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F9"), function(_, callback) {
      var root970 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root970); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes846;
      nodes846 = node.contents();
      oldNodes.replaceWith(nodes846);
    }));
    var nodes847 = $("<span>");
    root961.append(nodes847);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F10"), function(_, callback) {
      var root971 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root971); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes847;
      nodes847 = node.contents();
      oldNodes.replaceWith(nodes847);
    }));
    var nodes848 = $("<span>");
    root961.append(nodes848);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F11"), function(_, callback) {
      var root972 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root972); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes848;
      nodes848 = node.contents();
      oldNodes.replaceWith(nodes848);
    }));
    var nodes849 = $("<span>");
    root961.append(nodes849);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F12"), function(_, callback) {
      var root973 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root973); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes849;
      nodes849 = node.contents();
      oldNodes.replaceWith(nodes849);
    }));
    var nodes850 = $("<span>");
    root961.append(nodes850);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("F13"), function(_, callback) {
      var root974 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root974); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes850;
      nodes850 = node.contents();
      oldNodes.replaceWith(nodes850);
    }));
    callback(root961); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes837;
    nodes837 = node.contents();
    oldNodes.replaceWith(nodes837);
  }));
  callback(root960); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root975 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes851 = $("<span>");
  root975.append(nodes851);
  subs__.addSub((ui.group)(function(_, callback) {
    var root976 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes852 = $("<span>");
    root976.append(nodes852);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S1"), function(_, callback) {
      var root977 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root977); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes852;
      nodes852 = node.contents();
      oldNodes.replaceWith(nodes852);
    }));
    var nodes853 = $("<span>");
    root976.append(nodes853);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S2"), function(_, callback) {
      var root978 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root978); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes853;
      nodes853 = node.contents();
      oldNodes.replaceWith(nodes853);
    }));
    var nodes854 = $("<span>");
    root976.append(nodes854);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S3"), function(_, callback) {
      var root979 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root979); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes854;
      nodes854 = node.contents();
      oldNodes.replaceWith(nodes854);
    }));
    var nodes855 = $("<span>");
    root976.append(nodes855);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S4"), function(_, callback) {
      var root980 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root980); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes855;
      nodes855 = node.contents();
      oldNodes.replaceWith(nodes855);
    }));
    var nodes856 = $("<span>");
    root976.append(nodes856);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S5"), function(_, callback) {
      var root981 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root981); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes856;
      nodes856 = node.contents();
      oldNodes.replaceWith(nodes856);
    }));
    var nodes857 = $("<span>");
    root976.append(nodes857);
    subs__.addSub((nrichRPG.coreWorkout.topicItem)(mobl.ref("S6"), function(_, callback) {
      var root982 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root982); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes857;
      nodes857 = node.contents();
      oldNodes.replaceWith(nodes857);
    }));
    callback(root976); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes851;
    nodes851 = node.contents();
    oldNodes.replaceWith(nodes851);
  }));
  callback(root975); return subs__;
  
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
  var root983 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node35 = $("<div>");
  
  var ref38 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref38.get() !== null) {
    node35.attr('class', ref38.get());
    subs__.addSub(ref38.addEventListener('change', function(_, ref, val) {
      node35.attr('class', val);
    }));
    
  }
  subs__.addSub(ref38.rebind());
  
  var val7 = onclick.get();
  if(val7 !== null) {
    subs__.addSub(mobl.domBind(node35, 'tap', val7));
  }
  
  
  var node36 = $("<div>");
  
  var ref37 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref37.get() !== null) {
    node36.attr('class', ref37.get());
    subs__.addSub(ref37.addEventListener('change', function(_, ref, val) {
      node36.attr('class', val);
    }));
    
  }
  subs__.addSub(ref37.rebind());
  
  
  var node37 = $("<div>");
  
  var ref35 = text;
  node37.text(""+ref35.get());
  var ignore7 = false;
  subs__.addSub(ref35.addEventListener('change', function(_, ref, val) {
    if(ignore7) return;
    node37.text(""+val);
  }));
  subs__.addSub(ref35.rebind());
  
  
  var ref36 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref36.get() !== null) {
    node37.attr('class', ref36.get());
    subs__.addSub(ref36.addEventListener('change', function(_, ref, val) {
      node37.attr('class', val);
    }));
    
  }
  subs__.addSub(ref36.rebind());
  
  node36.append(node37);
  node35.append(node36);
  var nodes858 = $("<span>");
  node35.append(nodes858);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl7();
  }));
  
  function renderControl7() {
    subs__.addSub((elements)(function(elements, callback) {
      var root984 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root984); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes858;
      nodes858 = node.contents();
      oldNodes.replaceWith(nodes858);
    }));
  }
  renderControl7();
  root983.append(node35);
  callback(root983); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mathJAX.renderMaths(function(result__) {
    var tmp503 = result__;
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
    var tmp504 = result__;
    var result__ = tmp504;
    var qa2 = result__;
    var result__ = qa2;
    if(callback && callback.apply) callback(result__);
    return;
    if(callback && callback.apply) callback(); return;
  });
};


nrichRPG.coreWorkout.showQA = function(qa, number, elements, callback) {
  var root985 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp510 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp481 = mobl.ref(result__);
  
  var result__ = nrichRPG.coreWorkout.topicName(qa.get().topic);
  var tmp480 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'topic').addEventListener('change', function() {
    tmp480.set(nrichRPG.coreWorkout.topicName(qa.get().topic));
  }));
  
  var nodes859 = $("<span>");
  root985.append(nodes859);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(tmp480, tmp481, function(_, callback) {
    var root986 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp507 = result__;
                       var result__ = tmp507;
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
                             var tmp508 = result__;
                             if(callback && callback.apply) callback(); return;
                           });
                         }
                       }
                     });
                   };
    var tmp478 = mobl.ref(result__);
    
    var nodes860 = $("<span>");
    root986.append(nodes860);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp478, function(_, callback) {
      var root987 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root987); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes860;
      nodes860 = node.contents();
      oldNodes.replaceWith(nodes860);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(qa.get().topic, function(result__) {
                       var tmp505 = result__;
                       var result__ = tmp505;
                       var qa2 = result__;
                       var result__ = qa.get().number;
                       var qnum = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       var result__ = qnum;
                       qa.get().number = result__;
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp506 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp479 = mobl.ref(result__);
    
    var nodes861 = $("<span>");
    root986.append(nodes861);
    subs__.addSub((ui.sideButton)(mobl.ref("New"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp479, function(_, callback) {
      var root988 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root988); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes861;
      nodes861 = node.contents();
      oldNodes.replaceWith(nodes861);
    }));
    callback(root986); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes859;
    nodes859 = node.contents();
    oldNodes.replaceWith(nodes859);
  }));
  var nodes862 = $("<span>");
  root985.append(nodes862);
  subs__.addSub((ui.group)(function(_, callback) {
    var root989 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp509 = result__;
                       var result__ = nrichRPG.coreWorkout.removeMathJaxIncidentElements();
                       var result__ = mobl.$("#question-block-" + number.get()).children("span:first").html();
                       qa.get().questionHtml = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp484 = mobl.ref(result__);
    
    var nodes863 = $("<span>");
    root989.append(nodes863);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp484, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root990 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + number.get() + ". ";
      var tmp482 = mobl.ref(result__);
      subs__.addSub(number.addEventListener('change', function() {
        tmp482.set("Q" + number.get() + ". ");
      }));
      
      var nodes864 = $("<span>");
      root990.append(nodes864);
      subs__.addSub((mobl.html)(tmp482, function(_, callback) {
        var root991 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root991); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes864;
        nodes864 = node.contents();
        oldNodes.replaceWith(nodes864);
      }));
      
      var node38 = $("<span>");
      
      var ref39 = mobl.ref("question-block-" + number.get());
      if(ref39.get() !== null) {
        node38.attr('id', ref39.get());
        subs__.addSub(ref39.addEventListener('change', function(_, ref, val) {
          node38.attr('id', val);
        }));
        subs__.addSub(number.addEventListener('change', function() {
          node38.attr('id', "question-block-" + number.get());
        }));
        
      }
      subs__.addSub(ref39.rebind());
      
      var result__ = plot.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml;
      var tmp483 = mobl.ref(result__);
      subs__.addSub(mobl.ref(qa, 'question').addEventListener('change', function() {
        tmp483.set(plot.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml);
      }));
      subs__.addSub(mobl.ref(qa, 'questionHtml').addEventListener('change', function() {
        tmp483.set(plot.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml);
      }));
      
      var nodes865 = $("<span>");
      node38.append(nodes865);
      subs__.addSub((mobl.html)(tmp483, function(_, callback) {
        var root992 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root992); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes865;
        nodes865 = node.contents();
        oldNodes.replaceWith(nodes865);
      }));
      root990.append(node38);
      callback(root990); return subs__;
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes863;
      nodes863 = node.contents();
      oldNodes.replaceWith(nodes863);
    }));
    var nodes866 = $("<span>");
    root989.append(nodes866);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root993 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes867 = $("<span>");
      root993.append(nodes867);
      subs__.addSub((nrichRPG.coreWorkout.makeChoices)(qa, number, function(_, callback) {
        var root994 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root994); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes867;
        nodes867 = node.contents();
        oldNodes.replaceWith(nodes867);
      }));
      callback(root993); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes866;
      nodes866 = node.contents();
      oldNodes.replaceWith(nodes866);
    }));
    callback(root989); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes862;
    nodes862 = node.contents();
    oldNodes.replaceWith(nodes862);
  }));
  callback(root985); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.choiceItemStyle = function(choiceNumber, questionNumber, currentChoice, correctChoice) {
   var __this = this;
  var encodedChoiceNumber = choiceNumber + questionNumber * 4;
  
  var encodedCorrectChoice = correctChoice + questionNumber * 4;
  
  return encodedChoiceNumber == currentChoice ? (currentChoice == encodedCorrectChoice ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle) : ui.itemStyle;
};


nrichRPG.coreWorkout.makeChoices = function(qa, number, elements, callback) {
  var root995 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var currentChoice = mobl.ref(-1);
  var nodes868 = $("<span>");
  root995.append(nodes868);
  subs__.addSub((mobl.block)(mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root996 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = nrichRPG.coreWorkout.generateChoices(qa.get());
    var tmp488 = mobl.ref(result__);
    subs__.addSub(qa.addEventListener('change', function() {
      tmp488.set(nrichRPG.coreWorkout.generateChoices(qa.get()));
    }));
    
    
    var node39 = mobl.loadingSpan();
    root996.append(node39);
    var list7;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList7 = function() {
      var subs__ = listSubs__;
      list7 = tmp488.get();
      list7.list(function(results7) {
        node39.empty();
        for(var i206 = 0; i206 < results7.length; i206++) {
          (function() {
            var iternode7 = $("<span>");
            node39.append(iternode7);
            var order;var correctChoice;var answer;
            order = mobl.ref(mobl.ref(mobl.ref(results7), i206), "_1");correctChoice = mobl.ref(mobl.ref(mobl.ref(results7), i206), "_2");answer = mobl.ref(mobl.ref(mobl.ref(results7), i206), "_3");
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = order.get() + number.get() * 4;
                             currentChoice.set(result__);
                             var result__ = currentChoice.get() == correctChoice.get() + number.get() * 4;
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
            var tmp487 = mobl.ref(result__);
            
            var result__ = nrichRPG.coreWorkout.choiceItemStyle(order.get(), number.get(), currentChoice.get(), correctChoice.get());
            var tmp486 = mobl.ref(result__);
            subs__.addSub(order.addEventListener('change', function() {
              tmp486.set(nrichRPG.coreWorkout.choiceItemStyle(order.get(), number.get(), currentChoice.get(), correctChoice.get()));
            }));
            subs__.addSub(number.addEventListener('change', function() {
              tmp486.set(nrichRPG.coreWorkout.choiceItemStyle(order.get(), number.get(), currentChoice.get(), correctChoice.get()));
            }));
            subs__.addSub(currentChoice.addEventListener('change', function() {
              tmp486.set(nrichRPG.coreWorkout.choiceItemStyle(order.get(), number.get(), currentChoice.get(), correctChoice.get()));
            }));
            subs__.addSub(correctChoice.addEventListener('change', function() {
              tmp486.set(nrichRPG.coreWorkout.choiceItemStyle(order.get(), number.get(), currentChoice.get(), correctChoice.get()));
            }));
            
            var nodes869 = $("<span>");
            iternode7.append(nodes869);
            subs__.addSub((ui.item)(tmp486, mobl.ref(ui.itemPushedStyle), tmp487, mobl.ref(null), mobl.ref(true), function(_, callback) {
              var root997 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var result__ = "Choice " + order.get() + ".";
              var tmp485 = mobl.ref(result__);
              subs__.addSub(order.addEventListener('change', function() {
                tmp485.set("Choice " + order.get() + ".");
              }));
              
              var nodes870 = $("<span>");
              root997.append(nodes870);
              subs__.addSub((mobl.html)(tmp485, function(_, callback) {
                var root998 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root998); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes870;
                nodes870 = node.contents();
                oldNodes.replaceWith(nodes870);
              }));
              var nodes871 = $("<span>");
              root997.append(nodes871);
              subs__.addSub((mobl.html)(answer, function(_, callback) {
                var root999 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root999); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes871;
                nodes871 = node.contents();
                oldNodes.replaceWith(nodes871);
              }));
              callback(root997); return subs__;
              
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes869;
              nodes869 = node.contents();
              oldNodes.replaceWith(nodes869);
            }));
            
            var oldNodes = iternode7;
            iternode7 = iternode7.contents();
            oldNodes.replaceWith(iternode7);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list7.addEventListener('change', function() { listSubs__.unsubscribe(); renderList7(true); }));
        subs__.addSub(tmp488.addEventListener('change', function() { listSubs__.unsubscribe(); renderList7(true); }));
      });
    };
    renderList7();
    
    callback(root996); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes868;
    nodes868 = node.contents();
    oldNodes.replaceWith(nodes868);
  }));
  callback(root995); return subs__;
  
  return subs__;
};
nrichRPG.coreWorkout.generateChoices = function(qa) {
   var __this = this;
  var correctChoice = mobl.random(3) + 1;
  
  var choices = [];
  
  var coll17 = mobl.range(1, 5);
  var length7 = coll17.length;
  for(var i207 = 0; i207 < length7; i207++) {
    var index;
    index = coll17.get(i207);
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
  var result__ = nrichRPG.questionAnswer.QA.all().order("number", false).limit(1);
  var qas = result__;
  qas.count(function(result__) {
    var tmp513 = result__;
    var result__ = tmp513 > 0;
    var tmp512 = result__;
    var result__ = tmp512;
    if(result__) {
      {
        qas.one(function(result__) {
          var tmp515 = result__;
          var result__ = tmp515.number;
          var tmp514 = result__;
          var result__ = tmp514;
          nrichRPG.coreWorkout.max.set(result__);
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
        });
      }
    } else {
      {
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
    }
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