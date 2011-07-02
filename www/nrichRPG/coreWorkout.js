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
    var tmp966 = result__;
    var result__ = tmp966;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp967 = result__;
      var result__ = tmp967;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp968 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicId, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll366) {
    coll366 = coll366.reverse();
    function processOne36() {
      var i;
      i = coll366.pop();
      nrichRPG.coreWorkout.makeQA(topicId, function(result__) {
        var tmp969 = result__;
        
        if(coll366.length > 0) processOne36(); else rest36();
        
      });
    }
    function rest36() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll366.length > 0) processOne36(); else rest36();
  });
  
};

nrichRPG.coreWorkout.randomQStar = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll367) {
    coll367 = coll367.reverse();
    function processOne37() {
      var i;
      i = coll367.pop();
      var result__ = mobl.Math.floor(13 * mobl.Math.random());
      var r = result__;
      var result__ = "F" + (1 + r);
      var tid = result__;
      var result__ = tid == "F3";
      if(result__) {
        var result__ = "F3a";
        tid = result__;
        nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
          var tmp970 = result__;
          
          if(coll367.length > 0) processOne37(); else rest37();
          
        });
      } else {
        {
          nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
            var tmp970 = result__;
            
            if(coll367.length > 0) processOne37(); else rest37();
            
          });
        }
      }
    }
    function rest37() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll367.length > 0) processOne37(); else rest37();
  });
  
};

nrichRPG.coreWorkout.randomQStats = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll368) {
    coll368 = coll368.reverse();
    function processOne38() {
      var i;
      i = coll368.pop();
      var result__ = mobl.Math.floor(6 * mobl.Math.random());
      var r = result__;
      var result__ = "S" + (1 + r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
        var tmp971 = result__;
        
        if(coll368.length > 0) processOne38(); else rest38();
        
      });
    }
    function rest38() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll368.length > 0) processOne38(); else rest38();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root1176 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes919 = $("<span>");
  root1176.append(nodes919);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1177 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp979 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp878 = mobl.ref(result__);
    
    var nodes920 = $("<span>");
    root1177.append(nodes920);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp878, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1178 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes921 = $("<span>");
      root1178.append(nodes921);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1179 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1179); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes921;
        nodes921 = node.contents();
        oldNodes.replaceWith(nodes921);
      }));
      callback(root1178); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes920;
      nodes920 = node.contents();
      oldNodes.replaceWith(nodes920);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp978 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp879 = mobl.ref(result__);
    
    var nodes922 = $("<span>");
    root1177.append(nodes922);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp879, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1180 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes923 = $("<span>");
      root1180.append(nodes923);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1181 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1181); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes923;
        nodes923 = node.contents();
        oldNodes.replaceWith(nodes923);
      }));
      callback(root1180); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes922;
      nodes922 = node.contents();
      oldNodes.replaceWith(nodes922);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp977 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp880 = mobl.ref(result__);
    
    var nodes924 = $("<span>");
    root1177.append(nodes924);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp880, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1182 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes925 = $("<span>");
      root1182.append(nodes925);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1183 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1183); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes925;
        nodes925 = node.contents();
        oldNodes.replaceWith(nodes925);
      }));
      callback(root1182); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes924;
      nodes924 = node.contents();
      oldNodes.replaceWith(nodes924);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp976 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp881 = mobl.ref(result__);
    
    var nodes926 = $("<span>");
    root1177.append(nodes926);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp881, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1184 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes927 = $("<span>");
      root1184.append(nodes927);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1185 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1185); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes927;
        nodes927 = node.contents();
        oldNodes.replaceWith(nodes927);
      }));
      callback(root1184); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes926;
      nodes926 = node.contents();
      oldNodes.replaceWith(nodes926);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp975 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp882 = mobl.ref(result__);
    
    var nodes928 = $("<span>");
    root1177.append(nodes928);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp882, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1186 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes929 = $("<span>");
      root1186.append(nodes929);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1187 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1187); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes929;
        nodes929 = node.contents();
        oldNodes.replaceWith(nodes929);
      }));
      callback(root1186); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes928;
      nodes928 = node.contents();
      oldNodes.replaceWith(nodes928);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp974 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp883 = mobl.ref(result__);
    
    var nodes930 = $("<span>");
    root1177.append(nodes930);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp883, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1188 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes931 = $("<span>");
      root1188.append(nodes931);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1189 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1189); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes931;
        nodes931 = node.contents();
        oldNodes.replaceWith(nodes931);
      }));
      callback(root1188); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes930;
      nodes930 = node.contents();
      oldNodes.replaceWith(nodes930);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp973 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp884 = mobl.ref(result__);
    
    var nodes932 = $("<span>");
    root1177.append(nodes932);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp884, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1190 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes933 = $("<span>");
      root1190.append(nodes933);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1191 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1191); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes933;
        nodes933 = node.contents();
        oldNodes.replaceWith(nodes933);
      }));
      callback(root1190); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes932;
      nodes932 = node.contents();
      oldNodes.replaceWith(nodes932);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp972 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp885 = mobl.ref(result__);
    
    var nodes934 = $("<span>");
    root1177.append(nodes934);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp885, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1192 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes935 = $("<span>");
      root1192.append(nodes935);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1193 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1193); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes935;
        nodes935 = node.contents();
        oldNodes.replaceWith(nodes935);
      }));
      callback(root1192); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes934;
      nodes934 = node.contents();
      oldNodes.replaceWith(nodes934);
    }));
    callback(root1177); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes919;
    nodes919 = node.contents();
    oldNodes.replaceWith(nodes919);
  }));
  callback(root1176); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root1194 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes936 = $("<span>");
  root1194.append(nodes936);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1195 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp887 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp886 = mobl.ref(result__);
    
    var nodes937 = $("<span>");
    root1195.append(nodes937);
    subs__.addSub((ui.backButton)(tmp886, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp887, function(_, callback) {
      var root1196 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1196); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes937;
      nodes937 = node.contents();
      oldNodes.replaceWith(nodes937);
    }));
    callback(root1195); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes936;
    nodes936 = node.contents();
    oldNodes.replaceWith(nodes936);
  }));
  var nodes938 = $("<span>");
  root1194.append(nodes938);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1197 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(10, function(result__) {
                       var tmp987 = result__;
                       var result__ = mobl.alert("Quadratic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp888 = mobl.ref(result__);
    
    var nodes939 = $("<span>");
    root1197.append(nodes939);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp888, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1198 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes940 = $("<span>");
      root1198.append(nodes940);
      subs__.addSub((mobl.label)(mobl.ref("+Quadratic equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1199 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1199); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes940;
        nodes940 = node.contents();
        oldNodes.replaceWith(nodes940);
      }));
      callback(root1198); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes939;
      nodes939 = node.contents();
      oldNodes.replaceWith(nodes939);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(11, function(result__) {
                       var tmp986 = result__;
                       var result__ = mobl.alert("Completing the Square Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp889 = mobl.ref(result__);
    
    var nodes941 = $("<span>");
    root1197.append(nodes941);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp889, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1200 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes942 = $("<span>");
      root1200.append(nodes942);
      subs__.addSub((mobl.label)(mobl.ref("+Completing the square"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1201 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1201); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes942;
        nodes942 = node.contents();
        oldNodes.replaceWith(nodes942);
      }));
      callback(root1200); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes941;
      nodes941 = node.contents();
      oldNodes.replaceWith(nodes941);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(7, function(result__) {
                       var tmp985 = result__;
                       var result__ = mobl.alert("Ineqalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp890 = mobl.ref(result__);
    
    var nodes943 = $("<span>");
    root1197.append(nodes943);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp890, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1202 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes944 = $("<span>");
      root1202.append(nodes944);
      subs__.addSub((mobl.label)(mobl.ref("+Inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1203 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1203); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes944;
        nodes944 = node.contents();
        oldNodes.replaceWith(nodes944);
      }));
      callback(root1202); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes943;
      nodes943 = node.contents();
      oldNodes.replaceWith(nodes943);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(9, function(result__) {
                       var tmp984 = result__;
                       var result__ = mobl.alert("Factor theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp891 = mobl.ref(result__);
    
    var nodes945 = $("<span>");
    root1197.append(nodes945);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp891, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1204 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes946 = $("<span>");
      root1204.append(nodes946);
      subs__.addSub((mobl.label)(mobl.ref("+Factor theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1205 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1205); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes946;
        nodes946 = node.contents();
        oldNodes.replaceWith(nodes946);
      }));
      callback(root1204); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes945;
      nodes945 = node.contents();
      oldNodes.replaceWith(nodes945);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(1, function(result__) {
                       var tmp983 = result__;
                       var result__ = mobl.alert("Partial fraction Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp892 = mobl.ref(result__);
    
    var nodes947 = $("<span>");
    root1197.append(nodes947);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp892, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1206 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes948 = $("<span>");
      root1206.append(nodes948);
      subs__.addSub((mobl.label)(mobl.ref("+Partial fractions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1207 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1207); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes948;
        nodes948 = node.contents();
        oldNodes.replaceWith(nodes948);
      }));
      callback(root1206); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes947;
      nodes947 = node.contents();
      oldNodes.replaceWith(nodes947);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(30, function(result__) {
                       var tmp982 = result__;
                       var result__ = mobl.alert("Powers Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp893 = mobl.ref(result__);
    
    var nodes949 = $("<span>");
    root1197.append(nodes949);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp893, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1208 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes950 = $("<span>");
      root1208.append(nodes950);
      subs__.addSub((mobl.label)(mobl.ref("+Powers"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1209 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1209); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes950;
        nodes950 = node.contents();
        oldNodes.replaceWith(nodes950);
      }));
      callback(root1208); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes949;
      nodes949 = node.contents();
      oldNodes.replaceWith(nodes949);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(13, function(result__) {
                       var tmp981 = result__;
                       var result__ = mobl.alert("Logarithm Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp894 = mobl.ref(result__);
    
    var nodes951 = $("<span>");
    root1197.append(nodes951);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp894, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1210 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes952 = $("<span>");
      root1210.append(nodes952);
      subs__.addSub((mobl.label)(mobl.ref("+Logarithms"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1211 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1211); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes952;
        nodes952 = node.contents();
        oldNodes.replaceWith(nodes952);
      }));
      callback(root1210); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes951;
      nodes951 = node.contents();
      oldNodes.replaceWith(nodes951);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(17, function(result__) {
                       var tmp980 = result__;
                       var result__ = mobl.alert("Trig equation Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp895 = mobl.ref(result__);
    
    var nodes953 = $("<span>");
    root1197.append(nodes953);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp895, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1212 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes954 = $("<span>");
      root1212.append(nodes954);
      subs__.addSub((mobl.label)(mobl.ref("+Trig equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1213 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1213); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes954;
        nodes954 = node.contents();
        oldNodes.replaceWith(nodes954);
      }));
      callback(root1212); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes953;
      nodes953 = node.contents();
      oldNodes.replaceWith(nodes953);
    }));
    callback(root1197); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes938;
    nodes938 = node.contents();
    oldNodes.replaceWith(nodes938);
  }));
  callback(root1194); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root1214 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes955 = $("<span>");
  root1214.append(nodes955);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1215 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp897 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp896 = mobl.ref(result__);
    
    var nodes956 = $("<span>");
    root1215.append(nodes956);
    subs__.addSub((ui.backButton)(tmp896, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp897, function(_, callback) {
      var root1216 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1216); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes956;
      nodes956 = node.contents();
      oldNodes.replaceWith(nodes956);
    }));
    callback(root1215); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes955;
    nodes955 = node.contents();
    oldNodes.replaceWith(nodes955);
  }));
  var nodes957 = $("<span>");
  root1214.append(nodes957);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1217 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(24, function(result__) {
                       var tmp992 = result__;
                       var result__ = mobl.alert("Modulus Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp898 = mobl.ref(result__);
    
    var nodes958 = $("<span>");
    root1217.append(nodes958);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp898, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1218 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes959 = $("<span>");
      root1218.append(nodes959);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus function"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1219 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1219); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes959;
        nodes959 = node.contents();
        oldNodes.replaceWith(nodes959);
      }));
      callback(root1218); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes958;
      nodes958 = node.contents();
      oldNodes.replaceWith(nodes958);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(25, function(result__) {
                       var tmp991 = result__;
                       var result__ = mobl.alert("Transformations of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp899 = mobl.ref(result__);
    
    var nodes960 = $("<span>");
    root1217.append(nodes960);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp899, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1220 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes961 = $("<span>");
      root1220.append(nodes961);
      subs__.addSub((mobl.label)(mobl.ref("+Transformations of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1221 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1221); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes961;
        nodes961 = node.contents();
        oldNodes.replaceWith(nodes961);
      }));
      callback(root1220); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes960;
      nodes960 = node.contents();
      oldNodes.replaceWith(nodes960);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(26, function(result__) {
                       var tmp990 = result__;
                       var result__ = mobl.alert("Composition of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp900 = mobl.ref(result__);
    
    var nodes962 = $("<span>");
    root1217.append(nodes962);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp900, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1222 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes963 = $("<span>");
      root1222.append(nodes963);
      subs__.addSub((mobl.label)(mobl.ref("+Composition of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1223 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1223); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes963;
        nodes963 = node.contents();
        oldNodes.replaceWith(nodes963);
      }));
      callback(root1222); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes962;
      nodes962 = node.contents();
      oldNodes.replaceWith(nodes962);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(270, function(result__) {
                       var tmp989 = result__;
                       var result__ = mobl.alert("Implicit functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp901 = mobl.ref(result__);
    
    var nodes964 = $("<span>");
    root1217.append(nodes964);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp901, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1224 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes965 = $("<span>");
      root1224.append(nodes965);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1225 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1225); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes965;
        nodes965 = node.contents();
        oldNodes.replaceWith(nodes965);
      }));
      callback(root1224); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes964;
      nodes964 = node.contents();
      oldNodes.replaceWith(nodes964);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(27, function(result__) {
                       var tmp988 = result__;
                       var result__ = mobl.alert("Parametric functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp902 = mobl.ref(result__);
    
    var nodes966 = $("<span>");
    root1217.append(nodes966);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp902, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1226 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes967 = $("<span>");
      root1226.append(nodes967);
      subs__.addSub((mobl.label)(mobl.ref("+Parametric functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1227 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1227); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes967;
        nodes967 = node.contents();
        oldNodes.replaceWith(nodes967);
      }));
      callback(root1226); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes966;
      nodes966 = node.contents();
      oldNodes.replaceWith(nodes966);
    }));
    callback(root1217); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes957;
    nodes957 = node.contents();
    oldNodes.replaceWith(nodes957);
  }));
  callback(root1214); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root1228 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes968 = $("<span>");
  root1228.append(nodes968);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1229 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp904 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp903 = mobl.ref(result__);
    
    var nodes969 = $("<span>");
    root1229.append(nodes969);
    subs__.addSub((ui.backButton)(tmp903, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp904, function(_, callback) {
      var root1230 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1230); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes969;
      nodes969 = node.contents();
      oldNodes.replaceWith(nodes969);
    }));
    callback(root1229); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes968;
    nodes968 = node.contents();
    oldNodes.replaceWith(nodes968);
  }));
  var nodes970 = $("<span>");
  root1228.append(nodes970);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1231 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(15, function(result__) {
                       var tmp995 = result__;
                       var result__ = mobl.alert("Triangles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp905 = mobl.ref(result__);
    
    var nodes971 = $("<span>");
    root1231.append(nodes971);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp905, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1232 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes972 = $("<span>");
      root1232.append(nodes972);
      subs__.addSub((mobl.label)(mobl.ref("+Triangles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1233 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1233); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes972;
        nodes972 = node.contents();
        oldNodes.replaceWith(nodes972);
      }));
      callback(root1232); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes971;
      nodes971 = node.contents();
      oldNodes.replaceWith(nodes971);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(16, function(result__) {
                       var tmp994 = result__;
                       var result__ = mobl.alert("Circles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp906 = mobl.ref(result__);
    
    var nodes973 = $("<span>");
    root1231.append(nodes973);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp906, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1234 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes974 = $("<span>");
      root1234.append(nodes974);
      subs__.addSub((mobl.label)(mobl.ref("+Circles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1235 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1235); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes974;
        nodes974 = node.contents();
        oldNodes.replaceWith(nodes974);
      }));
      callback(root1234); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes973;
      nodes973 = node.contents();
      oldNodes.replaceWith(nodes973);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(6, function(result__) {
                       var tmp993 = result__;
                       var result__ = mobl.alert("3D lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp907 = mobl.ref(result__);
    
    var nodes975 = $("<span>");
    root1231.append(nodes975);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp907, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1236 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes976 = $("<span>");
      root1236.append(nodes976);
      subs__.addSub((mobl.label)(mobl.ref("+ 3D lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1237 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1237); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes976;
        nodes976 = node.contents();
        oldNodes.replaceWith(nodes976);
      }));
      callback(root1236); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes975;
      nodes975 = node.contents();
      oldNodes.replaceWith(nodes975);
    }));
    callback(root1231); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes970;
    nodes970 = node.contents();
    oldNodes.replaceWith(nodes970);
  }));
  callback(root1228); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root1238 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes977 = $("<span>");
  root1238.append(nodes977);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1239 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp909 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp908 = mobl.ref(result__);
    
    var nodes978 = $("<span>");
    root1239.append(nodes978);
    subs__.addSub((ui.backButton)(tmp908, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp909, function(_, callback) {
      var root1240 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1240); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes978;
      nodes978 = node.contents();
      oldNodes.replaceWith(nodes978);
    }));
    callback(root1239); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes977;
    nodes977 = node.contents();
    oldNodes.replaceWith(nodes977);
  }));
  var nodes979 = $("<span>");
  root1238.append(nodes979);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1241 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(8, function(result__) {
                       var tmp999 = result__;
                       var result__ = mobl.alert("Arithmetic Progressions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp910 = mobl.ref(result__);
    
    var nodes980 = $("<span>");
    root1241.append(nodes980);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp910, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1242 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes981 = $("<span>");
      root1242.append(nodes981);
      subs__.addSub((mobl.label)(mobl.ref("+Arithmetic progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1243 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1243); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes981;
        nodes981 = node.contents();
        oldNodes.replaceWith(nodes981);
      }));
      callback(root1242); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes980;
      nodes980 = node.contents();
      oldNodes.replaceWith(nodes980);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(12, function(result__) {
                       var tmp998 = result__;
                       var result__ = mobl.alert("Binomial Expansion Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp911 = mobl.ref(result__);
    
    var nodes982 = $("<span>");
    root1241.append(nodes982);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp911, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1244 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes983 = $("<span>");
      root1244.append(nodes983);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial expansion"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1245 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1245); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes983;
        nodes983 = node.contents();
        oldNodes.replaceWith(nodes983);
      }));
      callback(root1244); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes982;
      nodes982 = node.contents();
      oldNodes.replaceWith(nodes982);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(23, function(result__) {
                       var tmp997 = result__;
                       var result__ = mobl.alert("Geometric Progression Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp912 = mobl.ref(result__);
    
    var nodes984 = $("<span>");
    root1241.append(nodes984);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp912, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1246 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes985 = $("<span>");
      root1246.append(nodes985);
      subs__.addSub((mobl.label)(mobl.ref("+Geometric progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1247 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1247); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes985;
        nodes985 = node.contents();
        oldNodes.replaceWith(nodes985);
      }));
      callback(root1246); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes984;
      nodes984 = node.contents();
      oldNodes.replaceWith(nodes984);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(2, function(result__) {
                       var tmp996 = result__;
                       var result__ = mobl.alert("Binomial theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp913 = mobl.ref(result__);
    
    var nodes986 = $("<span>");
    root1241.append(nodes986);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp913, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1248 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes987 = $("<span>");
      root1248.append(nodes987);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1249 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1249); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes987;
        nodes987 = node.contents();
        oldNodes.replaceWith(nodes987);
      }));
      callback(root1248); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes986;
      nodes986 = node.contents();
      oldNodes.replaceWith(nodes986);
    }));
    callback(root1241); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes979;
    nodes979 = node.contents();
    oldNodes.replaceWith(nodes979);
  }));
  callback(root1238); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root1250 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes988 = $("<span>");
  root1250.append(nodes988);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1251 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp915 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp914 = mobl.ref(result__);
    
    var nodes989 = $("<span>");
    root1251.append(nodes989);
    subs__.addSub((ui.backButton)(tmp914, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp915, function(_, callback) {
      var root1252 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1252); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes989;
      nodes989 = node.contents();
      oldNodes.replaceWith(nodes989);
    }));
    callback(root1251); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes988;
    nodes988 = node.contents();
    oldNodes.replaceWith(nodes988);
  }));
  var nodes990 = $("<span>");
  root1250.append(nodes990);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1253 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(5, function(result__) {
                       var tmp1001 = result__;
                       var result__ = mobl.alert("Scalar product Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp916 = mobl.ref(result__);
    
    var nodes991 = $("<span>");
    root1253.append(nodes991);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp916, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1254 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes992 = $("<span>");
      root1254.append(nodes992);
      subs__.addSub((mobl.label)(mobl.ref("+Scalar products"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1255 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1255); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes992;
        nodes992 = node.contents();
        oldNodes.replaceWith(nodes992);
      }));
      callback(root1254); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes991;
      nodes991 = node.contents();
      oldNodes.replaceWith(nodes991);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(18, function(result__) {
                       var tmp1000 = result__;
                       var result__ = mobl.alert("Vector equation of lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp917 = mobl.ref(result__);
    
    var nodes993 = $("<span>");
    root1253.append(nodes993);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp917, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1256 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes994 = $("<span>");
      root1256.append(nodes994);
      subs__.addSub((mobl.label)(mobl.ref("+Vector equation of lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1257 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1257); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes994;
        nodes994 = node.contents();
        oldNodes.replaceWith(nodes994);
      }));
      callback(root1256); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes993;
      nodes993 = node.contents();
      oldNodes.replaceWith(nodes993);
    }));
    callback(root1253); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes990;
    nodes990 = node.contents();
    oldNodes.replaceWith(nodes990);
  }));
  callback(root1250); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root1258 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes995 = $("<span>");
  root1258.append(nodes995);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1259 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp919 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp918 = mobl.ref(result__);
    
    var nodes996 = $("<span>");
    root1259.append(nodes996);
    subs__.addSub((ui.backButton)(tmp918, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp919, function(_, callback) {
      var root1260 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1260); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes996;
      nodes996 = node.contents();
      oldNodes.replaceWith(nodes996);
    }));
    callback(root1259); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes995;
    nodes995 = node.contents();
    oldNodes.replaceWith(nodes995);
  }));
  var nodes997 = $("<span>");
  root1258.append(nodes997);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1261 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(14, function(result__) {
                       var tmp1006 = result__;
                       var result__ = mobl.alert("Stationary points Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp920 = mobl.ref(result__);
    
    var nodes998 = $("<span>");
    root1261.append(nodes998);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp920, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1262 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes999 = $("<span>");
      root1262.append(nodes999);
      subs__.addSub((mobl.label)(mobl.ref("+Stationary points"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1263 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1263); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes999;
        nodes999 = node.contents();
        oldNodes.replaceWith(nodes999);
      }));
      callback(root1262); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes998;
      nodes998 = node.contents();
      oldNodes.replaceWith(nodes998);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(20, function(result__) {
                       var tmp1005 = result__;
                       var result__ = mobl.alert("Chain rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp921 = mobl.ref(result__);
    
    var nodes1000 = $("<span>");
    root1261.append(nodes1000);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp921, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1264 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1001 = $("<span>");
      root1264.append(nodes1001);
      subs__.addSub((mobl.label)(mobl.ref("+Chain rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1265 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1265); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1001;
        nodes1001 = node.contents();
        oldNodes.replaceWith(nodes1001);
      }));
      callback(root1264); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1000;
      nodes1000 = node.contents();
      oldNodes.replaceWith(nodes1000);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(21, function(result__) {
                       var tmp1004 = result__;
                       var result__ = mobl.alert("Product rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp922 = mobl.ref(result__);
    
    var nodes1002 = $("<span>");
    root1261.append(nodes1002);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp922, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1266 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1003 = $("<span>");
      root1266.append(nodes1003);
      subs__.addSub((mobl.label)(mobl.ref("+Product rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1267 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1267); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1003;
        nodes1003 = node.contents();
        oldNodes.replaceWith(nodes1003);
      }));
      callback(root1266); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1002;
      nodes1002 = node.contents();
      oldNodes.replaceWith(nodes1002);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(22, function(result__) {
                       var tmp1003 = result__;
                       var result__ = mobl.alert("Quotient rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp923 = mobl.ref(result__);
    
    var nodes1004 = $("<span>");
    root1261.append(nodes1004);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp923, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1268 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1005 = $("<span>");
      root1268.append(nodes1005);
      subs__.addSub((mobl.label)(mobl.ref("+Quotient rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1269 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1269); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1005;
        nodes1005 = node.contents();
        oldNodes.replaceWith(nodes1005);
      }));
      callback(root1268); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1004;
      nodes1004 = node.contents();
      oldNodes.replaceWith(nodes1004);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(19, function(result__) {
                       var tmp1002 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp924 = mobl.ref(result__);
    
    var nodes1006 = $("<span>");
    root1261.append(nodes1006);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp924, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1270 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1007 = $("<span>");
      root1270.append(nodes1007);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1271 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1271); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1007;
        nodes1007 = node.contents();
        oldNodes.replaceWith(nodes1007);
      }));
      callback(root1270); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1006;
      nodes1006 = node.contents();
      oldNodes.replaceWith(nodes1006);
    }));
    callback(root1261); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes997;
    nodes997 = node.contents();
    oldNodes.replaceWith(nodes997);
  }));
  callback(root1258); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root1272 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1008 = $("<span>");
  root1272.append(nodes1008);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1273 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp926 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp925 = mobl.ref(result__);
    
    var nodes1009 = $("<span>");
    root1273.append(nodes1009);
    subs__.addSub((ui.backButton)(tmp925, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp926, function(_, callback) {
      var root1274 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1274); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1009;
      nodes1009 = node.contents();
      oldNodes.replaceWith(nodes1009);
    }));
    callback(root1273); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1008;
    nodes1008 = node.contents();
    oldNodes.replaceWith(nodes1008);
  }));
  var nodes1010 = $("<span>");
  root1272.append(nodes1010);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1275 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(28, function(result__) {
                       var tmp1009 = result__;
                       var result__ = mobl.alert("Integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp927 = mobl.ref(result__);
    
    var nodes1011 = $("<span>");
    root1275.append(nodes1011);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp927, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1276 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1012 = $("<span>");
      root1276.append(nodes1012);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1277 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1277); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1012;
        nodes1012 = node.contents();
        oldNodes.replaceWith(nodes1012);
      }));
      callback(root1276); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1011;
      nodes1011 = node.contents();
      oldNodes.replaceWith(nodes1011);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(3, function(result__) {
                       var tmp1008 = result__;
                       var result__ = mobl.alert("Polynomial integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp928 = mobl.ref(result__);
    
    var nodes1013 = $("<span>");
    root1275.append(nodes1013);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp928, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1278 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1014 = $("<span>");
      root1278.append(nodes1014);
      subs__.addSub((mobl.label)(mobl.ref("+Polynomial integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1279 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1279); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1014;
        nodes1014 = node.contents();
        oldNodes.replaceWith(nodes1014);
      }));
      callback(root1278); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1013;
      nodes1013 = node.contents();
      oldNodes.replaceWith(nodes1013);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(4, function(result__) {
                       var tmp1007 = result__;
                       var result__ = mobl.alert("Trig integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp929 = mobl.ref(result__);
    
    var nodes1015 = $("<span>");
    root1275.append(nodes1015);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp929, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1280 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1016 = $("<span>");
      root1280.append(nodes1016);
      subs__.addSub((mobl.label)(mobl.ref("+Trig integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1281 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1281); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1016;
        nodes1016 = node.contents();
        oldNodes.replaceWith(nodes1016);
      }));
      callback(root1280); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1015;
      nodes1015 = node.contents();
      oldNodes.replaceWith(nodes1015);
    }));
    callback(root1275); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1010;
    nodes1010 = node.contents();
    oldNodes.replaceWith(nodes1010);
  }));
  callback(root1272); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root1282 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1017 = $("<span>");
  root1282.append(nodes1017);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1283 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp931 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp930 = mobl.ref(result__);
    
    var nodes1018 = $("<span>");
    root1283.append(nodes1018);
    subs__.addSub((ui.backButton)(tmp930, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp931, function(_, callback) {
      var root1284 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1284); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1018;
      nodes1018 = node.contents();
      oldNodes.replaceWith(nodes1018);
    }));
    callback(root1283); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1017;
    nodes1017 = node.contents();
    oldNodes.replaceWith(nodes1017);
  }));
  var nodes1019 = $("<span>");
  root1282.append(nodes1019);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1285 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(29, function(result__) {
                       var tmp1010 = result__;
                       var result__ = mobl.alert("Differential equations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp932 = mobl.ref(result__);
    
    var nodes1020 = $("<span>");
    root1285.append(nodes1020);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp932, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1286 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1021 = $("<span>");
      root1286.append(nodes1021);
      subs__.addSub((mobl.label)(mobl.ref("+Diff equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1287 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1287); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1021;
        nodes1021 = node.contents();
        oldNodes.replaceWith(nodes1021);
      }));
      callback(root1286); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1020;
      nodes1020 = node.contents();
      oldNodes.replaceWith(nodes1020);
    }));
    callback(root1285); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1019;
    nodes1019 = node.contents();
    oldNodes.replaceWith(nodes1019);
  }));
  callback(root1282); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root1288 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1022 = $("<span>");
  root1288.append(nodes1022);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1289 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F1", function(result__) {
                       var tmp1023 = result__;
                       var result__ = mobl.alert("Complex arithmetic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp933 = mobl.ref(result__);
    
    var nodes1023 = $("<span>");
    root1289.append(nodes1023);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp933, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1290 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1024 = $("<span>");
      root1290.append(nodes1024);
      subs__.addSub((mobl.label)(mobl.ref("+Complex arithmetic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1291 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1291); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1024;
        nodes1024 = node.contents();
        oldNodes.replaceWith(nodes1024);
      }));
      callback(root1290); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1023;
      nodes1023 = node.contents();
      oldNodes.replaceWith(nodes1023);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F2", function(result__) {
                       var tmp1022 = result__;
                       var result__ = mobl.alert("Modulus argument Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp934 = mobl.ref(result__);
    
    var nodes1025 = $("<span>");
    root1289.append(nodes1025);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp934, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1292 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1026 = $("<span>");
      root1292.append(nodes1026);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus argument"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1293 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1293); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1026;
        nodes1026 = node.contents();
        oldNodes.replaceWith(nodes1026);
      }));
      callback(root1292); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1025;
      nodes1025 = node.contents();
      oldNodes.replaceWith(nodes1025);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F3a", function(result__) {
                       var tmp1021 = result__;
                       var result__ = mobl.alert("2nd order DE Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp935 = mobl.ref(result__);
    
    var nodes1027 = $("<span>");
    root1289.append(nodes1027);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp935, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1294 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1028 = $("<span>");
      root1294.append(nodes1028);
      subs__.addSub((mobl.label)(mobl.ref("+2nd order DEs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1295 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1295); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1028;
        nodes1028 = node.contents();
        oldNodes.replaceWith(nodes1028);
      }));
      callback(root1294); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1027;
      nodes1027 = node.contents();
      oldNodes.replaceWith(nodes1027);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F4", function(result__) {
                       var tmp1020 = result__;
                       var result__ = mobl.alert("Rank 2 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp936 = mobl.ref(result__);
    
    var nodes1029 = $("<span>");
    root1289.append(nodes1029);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp936, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1296 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1030 = $("<span>");
      root1296.append(nodes1030);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 2 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1297 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1297); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1030;
        nodes1030 = node.contents();
        oldNodes.replaceWith(nodes1030);
      }));
      callback(root1296); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1029;
      nodes1029 = node.contents();
      oldNodes.replaceWith(nodes1029);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F5", function(result__) {
                       var tmp1019 = result__;
                       var result__ = mobl.alert("Taylor Series Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp937 = mobl.ref(result__);
    
    var nodes1031 = $("<span>");
    root1289.append(nodes1031);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp937, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1298 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1032 = $("<span>");
      root1298.append(nodes1032);
      subs__.addSub((mobl.label)(mobl.ref("+Taylor Series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1299 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1299); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1032;
        nodes1032 = node.contents();
        oldNodes.replaceWith(nodes1032);
      }));
      callback(root1298); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1031;
      nodes1031 = node.contents();
      oldNodes.replaceWith(nodes1031);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F6", function(result__) {
                       var tmp1018 = result__;
                       var result__ = mobl.alert("Polar Coordinates Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp938 = mobl.ref(result__);
    
    var nodes1033 = $("<span>");
    root1289.append(nodes1033);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp938, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1300 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1034 = $("<span>");
      root1300.append(nodes1034);
      subs__.addSub((mobl.label)(mobl.ref("+Polar Coordinates"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1301 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1301); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1034;
        nodes1034 = node.contents();
        oldNodes.replaceWith(nodes1034);
      }));
      callback(root1300); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1033;
      nodes1033 = node.contents();
      oldNodes.replaceWith(nodes1033);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F7", function(result__) {
                       var tmp1017 = result__;
                       var result__ = mobl.alert("Rank 3 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp939 = mobl.ref(result__);
    
    var nodes1035 = $("<span>");
    root1289.append(nodes1035);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp939, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1302 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1036 = $("<span>");
      root1302.append(nodes1036);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 3 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1303 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1303); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1036;
        nodes1036 = node.contents();
        oldNodes.replaceWith(nodes1036);
      }));
      callback(root1302); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1035;
      nodes1035 = node.contents();
      oldNodes.replaceWith(nodes1035);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F8", function(result__) {
                       var tmp1016 = result__;
                       var result__ = mobl.alert("Further vectors added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp940 = mobl.ref(result__);
    
    var nodes1037 = $("<span>");
    root1289.append(nodes1037);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp940, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1304 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1038 = $("<span>");
      root1304.append(nodes1038);
      subs__.addSub((mobl.label)(mobl.ref("+Further vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1305 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1305); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1038;
        nodes1038 = node.contents();
        oldNodes.replaceWith(nodes1038);
      }));
      callback(root1304); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1037;
      nodes1037 = node.contents();
      oldNodes.replaceWith(nodes1037);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F9", function(result__) {
                       var tmp1015 = result__;
                       var result__ = mobl.alert("Newton-Raphson added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp941 = mobl.ref(result__);
    
    var nodes1039 = $("<span>");
    root1289.append(nodes1039);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp941, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1306 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1040 = $("<span>");
      root1306.append(nodes1040);
      subs__.addSub((mobl.label)(mobl.ref("+Newton-Raphson"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1307 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1307); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1040;
        nodes1040 = node.contents();
        oldNodes.replaceWith(nodes1040);
      }));
      callback(root1306); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1039;
      nodes1039 = node.contents();
      oldNodes.replaceWith(nodes1039);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F10", function(result__) {
                       var tmp1014 = result__;
                       var result__ = mobl.alert("Further inequalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp942 = mobl.ref(result__);
    
    var nodes1041 = $("<span>");
    root1289.append(nodes1041);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp942, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1308 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1042 = $("<span>");
      root1308.append(nodes1042);
      subs__.addSub((mobl.label)(mobl.ref("+Further inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1309 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1309); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1042;
        nodes1042 = node.contents();
        oldNodes.replaceWith(nodes1042);
      }));
      callback(root1308); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1041;
      nodes1041 = node.contents();
      oldNodes.replaceWith(nodes1041);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F11", function(result__) {
                       var tmp1013 = result__;
                       var result__ = mobl.alert("Integration by substitution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp943 = mobl.ref(result__);
    
    var nodes1043 = $("<span>");
    root1289.append(nodes1043);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp943, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1310 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1044 = $("<span>");
      root1310.append(nodes1044);
      subs__.addSub((mobl.label)(mobl.ref("+Integration by substitution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1311 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1311); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1044;
        nodes1044 = node.contents();
        oldNodes.replaceWith(nodes1044);
      }));
      callback(root1310); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1043;
      nodes1043 = node.contents();
      oldNodes.replaceWith(nodes1043);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F12", function(result__) {
                       var tmp1012 = result__;
                       var result__ = mobl.alert("Figures of revolution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp944 = mobl.ref(result__);
    
    var nodes1045 = $("<span>");
    root1289.append(nodes1045);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp944, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1312 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1046 = $("<span>");
      root1312.append(nodes1046);
      subs__.addSub((mobl.label)(mobl.ref("+Figures of revolution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1313 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1313); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1046;
        nodes1046 = node.contents();
        oldNodes.replaceWith(nodes1046);
      }));
      callback(root1312); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1045;
      nodes1045 = node.contents();
      oldNodes.replaceWith(nodes1045);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F13", function(result__) {
                       var tmp1011 = result__;
                       var result__ = mobl.alert("Matrix transformations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp945 = mobl.ref(result__);
    
    var nodes1047 = $("<span>");
    root1289.append(nodes1047);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp945, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1314 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1048 = $("<span>");
      root1314.append(nodes1048);
      subs__.addSub((mobl.label)(mobl.ref("+Matrix transformations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1315 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1315); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1048;
        nodes1048 = node.contents();
        oldNodes.replaceWith(nodes1048);
      }));
      callback(root1314); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1047;
      nodes1047 = node.contents();
      oldNodes.replaceWith(nodes1047);
    }));
    callback(root1289); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1022;
    nodes1022 = node.contents();
    oldNodes.replaceWith(nodes1022);
  }));
  callback(root1288); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root1316 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1049 = $("<span>");
  root1316.append(nodes1049);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1317 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S1", function(result__) {
                       var tmp1029 = result__;
                       var result__ = mobl.alert("Discrete Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp946 = mobl.ref(result__);
    
    var nodes1050 = $("<span>");
    root1317.append(nodes1050);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp946, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1318 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1051 = $("<span>");
      root1318.append(nodes1051);
      subs__.addSub((mobl.label)(mobl.ref("+Discrete Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1319 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1319); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1051;
        nodes1051 = node.contents();
        oldNodes.replaceWith(nodes1051);
      }));
      callback(root1318); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1050;
      nodes1050 = node.contents();
      oldNodes.replaceWith(nodes1050);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S2", function(result__) {
                       var tmp1028 = result__;
                       var result__ = mobl.alert("Continuous Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp947 = mobl.ref(result__);
    
    var nodes1052 = $("<span>");
    root1317.append(nodes1052);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp947, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1320 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1053 = $("<span>");
      root1320.append(nodes1053);
      subs__.addSub((mobl.label)(mobl.ref("+Continuous Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1321 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1321); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1053;
        nodes1053 = node.contents();
        oldNodes.replaceWith(nodes1053);
      }));
      callback(root1320); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1052;
      nodes1052 = node.contents();
      oldNodes.replaceWith(nodes1052);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S3", function(result__) {
                       var tmp1027 = result__;
                       var result__ = mobl.alert("Hypothesis Testing Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp948 = mobl.ref(result__);
    
    var nodes1054 = $("<span>");
    root1317.append(nodes1054);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp948, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1322 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1055 = $("<span>");
      root1322.append(nodes1055);
      subs__.addSub((mobl.label)(mobl.ref("+Hypothesis Testing"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1323 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1323); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1055;
        nodes1055 = node.contents();
        oldNodes.replaceWith(nodes1055);
      }));
      callback(root1322); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1054;
      nodes1054 = node.contents();
      oldNodes.replaceWith(nodes1054);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S4", function(result__) {
                       var tmp1026 = result__;
                       var result__ = mobl.alert("Confidence Intervals Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp949 = mobl.ref(result__);
    
    var nodes1056 = $("<span>");
    root1317.append(nodes1056);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp949, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1324 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1057 = $("<span>");
      root1324.append(nodes1057);
      subs__.addSub((mobl.label)(mobl.ref("+Confidence Intervals"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1325 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1325); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1057;
        nodes1057 = node.contents();
        oldNodes.replaceWith(nodes1057);
      }));
      callback(root1324); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1056;
      nodes1056 = node.contents();
      oldNodes.replaceWith(nodes1056);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S5", function(result__) {
                       var tmp1025 = result__;
                       var result__ = mobl.alert("Chi Squared Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp950 = mobl.ref(result__);
    
    var nodes1058 = $("<span>");
    root1317.append(nodes1058);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp950, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1326 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1059 = $("<span>");
      root1326.append(nodes1059);
      subs__.addSub((mobl.label)(mobl.ref("+Chi Squared"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1327 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1327); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1059;
        nodes1059 = node.contents();
        oldNodes.replaceWith(nodes1059);
      }));
      callback(root1326); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1058;
      nodes1058 = node.contents();
      oldNodes.replaceWith(nodes1058);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S6", function(result__) {
                       var tmp1024 = result__;
                       var result__ = mobl.alert("Product Moment Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp951 = mobl.ref(result__);
    
    var nodes1060 = $("<span>");
    root1317.append(nodes1060);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp951, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1328 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1061 = $("<span>");
      root1328.append(nodes1061);
      subs__.addSub((mobl.label)(mobl.ref("+Product Moments"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1329 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1329); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1061;
        nodes1061 = node.contents();
        oldNodes.replaceWith(nodes1061);
      }));
      callback(root1328); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1060;
      nodes1060 = node.contents();
      oldNodes.replaceWith(nodes1060);
    }));
    callback(root1317); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1049;
    nodes1049 = node.contents();
    oldNodes.replaceWith(nodes1049);
  }));
  callback(root1316); return subs__;
  
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
  var root1330 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node344 = $("<div>");
  
  var ref365 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref365.get() !== null) {
    node344.attr('class', ref365.get());
    subs__.addSub(ref365.addEventListener('change', function(_, ref, val) {
      node344.attr('class', val);
    }));
    
  }
  subs__.addSub(ref365.rebind());
  
  var val177 = onclick.get();
  if(val177 !== null) {
    subs__.addSub(mobl.domBind(node344, 'tap', val177));
  }
  
  
  var node345 = $("<div>");
  
  var ref364 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref364.get() !== null) {
    node345.attr('class', ref364.get());
    subs__.addSub(ref364.addEventListener('change', function(_, ref, val) {
      node345.attr('class', val);
    }));
    
  }
  subs__.addSub(ref364.rebind());
  
  
  var node346 = $("<div>");
  
  var ref362 = text;
  node346.text(""+ref362.get());
  var ignore69 = false;
  subs__.addSub(ref362.addEventListener('change', function(_, ref, val) {
    if(ignore69) return;
    node346.text(""+val);
  }));
  subs__.addSub(ref362.rebind());
  
  
  var ref363 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref363.get() !== null) {
    node346.attr('class', ref363.get());
    subs__.addSub(ref363.addEventListener('change', function(_, ref, val) {
      node346.attr('class', val);
    }));
    
  }
  subs__.addSub(ref363.rebind());
  
  node345.append(node346);
  node344.append(node345);
  var nodes1062 = $("<span>");
  node344.append(nodes1062);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl148();
  }));
  
  function renderControl148() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1331 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1331); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1062;
      nodes1062 = node.contents();
      oldNodes.replaceWith(nodes1062);
    }));
  }
  renderControl148();
  root1330.append(node344);
  callback(root1330); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mathJAX.renderMaths(function(result__) {
    var tmp1030 = result__;
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
  var root1332 = $("<span>");
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
  var tmp956 = mobl.ref(result__);
  
  var result__ = qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle;
  var tmp955 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    tmp955.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.agreeStyle).addEventListener('change', function() {
    tmp955.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.disagreeStyle).addEventListener('change', function() {
    tmp955.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  
  var nodes1063 = $("<span>");
  root1332.append(nodes1063);
  subs__.addSub((mobl.block)(tmp955, mobl.ref(null), tmp956, mobl.ref(null), function(_, callback) {
    var root1333 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = "A" + number.get() + ". ";
    var tmp952 = mobl.ref(result__);
    subs__.addSub(number.addEventListener('change', function() {
      tmp952.set("A" + number.get() + ". ");
    }));
    
    var nodes1064 = $("<span>");
    root1333.append(nodes1064);
    subs__.addSub((mobl.label)(tmp952, mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root1334 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1334); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1064;
      nodes1064 = node.contents();
      oldNodes.replaceWith(nodes1064);
    }));
    var result__ = qa.get().answer != "%GRAPH%";
    var tmp954 = mobl.ref(result__);
    subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
      tmp954.set(qa.get().answer != "%GRAPH%");
    }));
    
    
    var node347 = $("<span>");
    root1333.append(node347);
    var condSubs84 = new mobl.CompSubscription();
    subs__.addSub(condSubs84);
    var oldValue84;
    var renderCond84 = function() {
      var value304 = tmp954.get();
      if(oldValue84 === value304) return;
      oldValue84 = value304;
      var subs__ = condSubs84;
      subs__.unsubscribe();
      node347.empty();
      if(value304) {
        
        var node348 = $("<span>");
        
        var ref366 = mobl.ref("answer-block-" + number.get());
        if(ref366.get() !== null) {
          node348.attr('id', ref366.get());
          subs__.addSub(ref366.addEventListener('change', function(_, ref, val) {
            node348.attr('id', val);
          }));
          subs__.addSub(number.addEventListener('change', function() {
            node348.attr('id', "answer-block-" + number.get());
          }));
          
        }
        subs__.addSub(ref366.rebind());
        
        var result__ = plot.blank(qa.get().answerHtml) ? qa.get().answer : qa.get().answerHtml;
        var tmp953 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp953.set(plot.blank(qa.get().answerHtml) ? qa.get().answer : qa.get().answerHtml);
        }));
        subs__.addSub(mobl.ref(qa, 'answerHtml').addEventListener('change', function() {
          tmp953.set(plot.blank(qa.get().answerHtml) ? qa.get().answer : qa.get().answerHtml);
        }));
        
        var nodes1065 = $("<span>");
        node348.append(nodes1065);
        subs__.addSub((mobl.html)(tmp953, function(_, callback) {
          var root1335 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1335); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1065;
          nodes1065 = node.contents();
          oldNodes.replaceWith(nodes1065);
        }));
        node347.append(node348);
        
        
        
      } else {
        var nodes1066 = $("<span>");
        node347.append(nodes1066);
        subs__.addSub((plot.plot)(qa, mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
          var root1336 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1336); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1066;
          nodes1066 = node.contents();
          oldNodes.replaceWith(nodes1066);
        }));
        
        
      }
    };
    renderCond84();
    subs__.addSub(tmp954.addEventListener('change', function() {
      renderCond84();
    }));
    
    callback(root1333); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1063;
    nodes1063 = node.contents();
    oldNodes.replaceWith(nodes1063);
  }));
  var nodes1067 = $("<span>");
  root1332.append(nodes1067);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root1337 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes1068 = $("<span>");
    root1337.append(nodes1068);
    subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root1338 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1338); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1068;
      nodes1068 = node.contents();
      oldNodes.replaceWith(nodes1068);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = true;
                     qa.get().correct = result__;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp957 = mobl.ref(result__);
    
    var nodes1069 = $("<span>");
    root1337.append(nodes1069);
    subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp957, function(_, callback) {
      var root1339 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1339); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1069;
      nodes1069 = node.contents();
      oldNodes.replaceWith(nodes1069);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = false;
                     qa.get().correct = result__;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp958 = mobl.ref(result__);
    
    var nodes1070 = $("<span>");
    root1337.append(nodes1070);
    subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp958, function(_, callback) {
      var root1340 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1340); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1070;
      nodes1070 = node.contents();
      oldNodes.replaceWith(nodes1070);
    }));
    callback(root1337); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1067;
    nodes1067 = node.contents();
    oldNodes.replaceWith(nodes1067);
  }));
  callback(root1332); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp1031 = result__;
    var result__ = tmp1031;
    var qa2 = result__;
    var result__ = qa2;
    if(callback && callback.apply) callback(result__);
    return;
    if(callback && callback.apply) callback(); return;
  });
};


nrichRPG.coreWorkout.showQA = function(qa, number, elements, callback) {
  var root1341 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp1037 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp960 = mobl.ref(result__);
  
  var nodes1071 = $("<span>");
  root1341.append(nodes1071);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(mobl.ref(qa, 'topic'), tmp960, function(_, callback) {
    var root1342 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp1032 = result__;
                       var result__ = tmp1032;
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
                             var tmp1033 = result__;
                             if(callback && callback.apply) callback(); return;
                           });
                         }
                       }
                     });
                   };
    var tmp959 = mobl.ref(result__);
    
    var nodes1072 = $("<span>");
    root1342.append(nodes1072);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp959, function(_, callback) {
      var root1343 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1343); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1072;
      nodes1072 = node.contents();
      oldNodes.replaceWith(nodes1072);
    }));
    callback(root1342); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1071;
    nodes1071 = node.contents();
    oldNodes.replaceWith(nodes1071);
  }));
  var nodes1073 = $("<span>");
  root1341.append(nodes1073);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1344 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp1036 = result__;
                       var result__ = nrichRPG.coreWorkout.removeMathJaxIncidentElements();
                       var result__ = mobl.$("#question-block-" + number.get()).children("span:first").html();
                       qa.get().questionHtml = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp963 = mobl.ref(result__);
    
    var nodes1074 = $("<span>");
    root1344.append(nodes1074);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp963, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root1345 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + number.get() + ". ";
      var tmp961 = mobl.ref(result__);
      subs__.addSub(number.addEventListener('change', function() {
        tmp961.set("Q" + number.get() + ". ");
      }));
      
      var nodes1075 = $("<span>");
      root1345.append(nodes1075);
      subs__.addSub((mobl.html)(tmp961, function(_, callback) {
        var root1346 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1346); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1075;
        nodes1075 = node.contents();
        oldNodes.replaceWith(nodes1075);
      }));
      
      var node349 = $("<span>");
      
      var ref367 = mobl.ref("question-block-" + number.get());
      if(ref367.get() !== null) {
        node349.attr('id', ref367.get());
        subs__.addSub(ref367.addEventListener('change', function(_, ref, val) {
          node349.attr('id', val);
        }));
        subs__.addSub(number.addEventListener('change', function() {
          node349.attr('id', "question-block-" + number.get());
        }));
        
      }
      subs__.addSub(ref367.rebind());
      
      var result__ = plot.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml;
      var tmp962 = mobl.ref(result__);
      subs__.addSub(mobl.ref(qa, 'question').addEventListener('change', function() {
        tmp962.set(plot.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml);
      }));
      subs__.addSub(mobl.ref(qa, 'questionHtml').addEventListener('change', function() {
        tmp962.set(plot.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml);
      }));
      
      var nodes1076 = $("<span>");
      node349.append(nodes1076);
      subs__.addSub((mobl.html)(tmp962, function(_, callback) {
        var root1347 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1347); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1076;
        nodes1076 = node.contents();
        oldNodes.replaceWith(nodes1076);
      }));
      root1345.append(node349);
      callback(root1345); return subs__;
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1074;
      nodes1074 = node.contents();
      oldNodes.replaceWith(nodes1074);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp1035 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp965 = mobl.ref(result__);
    
    var nodes1077 = $("<span>");
    root1344.append(nodes1077);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp965, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root1348 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1078 = $("<span>");
      root1348.append(nodes1078);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1349 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                           var tmp1034 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp964 = mobl.ref(result__);
        
        var nodes1079 = $("<span>");
        root1349.append(nodes1079);
        subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp964, function(_, callback) {
          var root1350 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1350); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1079;
          nodes1079 = node.contents();
          oldNodes.replaceWith(nodes1079);
        }));
        callback(root1349); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1078;
        nodes1078 = node.contents();
        oldNodes.replaceWith(nodes1078);
      }));
      
      var node350 = $("<span>");
      root1348.append(node350);
      var condSubs85 = new mobl.CompSubscription();
      subs__.addSub(condSubs85);
      var oldValue85;
      var renderCond85 = function() {
        var value305 = qa.get().done;
        if(oldValue85 === value305) return;
        oldValue85 = value305;
        var subs__ = condSubs85;
        subs__.unsubscribe();
        node350.empty();
        if(value305) {
          var nodes1080 = $("<span>");
          node350.append(nodes1080);
          subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, number, function(_, callback) {
            var root1351 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root1351); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes1080;
            nodes1080 = node.contents();
            oldNodes.replaceWith(nodes1080);
          }));
          
          
        } else {
          
        }
      };
      renderCond85();
      subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
        renderCond85();
      }));
      
      callback(root1348); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1077;
      nodes1077 = node.contents();
      oldNodes.replaceWith(nodes1077);
    }));
    callback(root1344); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1073;
    nodes1073 = node.contents();
    oldNodes.replaceWith(nodes1073);
  }));
  callback(root1341); return subs__;
  
  
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
  qas.list(function(coll369) {
    coll369 = coll369.reverse();
    function processOne39() {
      var item;
      item = coll369.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll369.length > 0) processOne39(); else rest39();
      
    }
    function rest39() {
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
    if(coll369.length > 0) processOne39(); else rest39();
  });
  
};

nrichRPG.coreWorkout.makeQAStar = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll370) {
    coll370 = coll370.reverse();
    function processOne40() {
      var item;
      item = coll370.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll370.length > 0) processOne40(); else rest40();
      
    }
    function rest40() {
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
    if(coll370.length > 0) processOne40(); else rest40();
  });
  
};

nrichRPG.coreWorkout.makeQAStats = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll371) {
    coll371 = coll371.reverse();
    function processOne41() {
      var item;
      item = coll371.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll371.length > 0) processOne41(); else rest41();
      
    }
    function rest41() {
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
    if(coll371.length > 0) processOne41(); else rest41();
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