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
    var tmp880 = result__;
    var result__ = tmp880;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp881 = result__;
      var result__ = tmp881;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp882 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicId, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll614) {
    coll614 = coll614.reverse();
    function processOne32() {
      var i;
      i = coll614.pop();
      nrichRPG.coreWorkout.makeQA(topicId, function(result__) {
        var tmp883 = result__;
        
        if(coll614.length > 0) processOne32(); else rest32();
        
      });
    }
    function rest32() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll614.length > 0) processOne32(); else rest32();
  });
  
};

nrichRPG.coreWorkout.randomQStar = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll615) {
    coll615 = coll615.reverse();
    function processOne33() {
      var i;
      i = coll615.pop();
      var result__ = mobl.Math.floor(13 * mobl.Math.random());
      var r = result__;
      var result__ = "F" + (1 + r);
      var tid = result__;
      var result__ = tid == "F3";
      if(result__) {
        var result__ = "F3a";
        tid = result__;
        nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
          var tmp884 = result__;
          
          if(coll615.length > 0) processOne33(); else rest33();
          
        });
      } else {
        {
          nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
            var tmp884 = result__;
            
            if(coll615.length > 0) processOne33(); else rest33();
            
          });
        }
      }
    }
    function rest33() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll615.length > 0) processOne33(); else rest33();
  });
  
};

nrichRPG.coreWorkout.randomQStats = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll616) {
    coll616 = coll616.reverse();
    function processOne34() {
      var i;
      i = coll616.pop();
      var result__ = mobl.Math.floor(6 * mobl.Math.random());
      var r = result__;
      var result__ = "S" + (1 + r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
        var tmp885 = result__;
        
        if(coll616.length > 0) processOne34(); else rest34();
        
      });
    }
    function rest34() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll616.length > 0) processOne34(); else rest34();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root1238 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes883 = $("<span>");
  root1238.append(nodes883);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1239 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp893 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp792 = mobl.ref(result__);
    
    var nodes884 = $("<span>");
    root1239.append(nodes884);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp792, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1240 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes885 = $("<span>");
      root1240.append(nodes885);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1241 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1241); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes885;
        nodes885 = node.contents();
        oldNodes.replaceWith(nodes885);
      }));
      callback(root1240); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes884;
      nodes884 = node.contents();
      oldNodes.replaceWith(nodes884);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp892 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp793 = mobl.ref(result__);
    
    var nodes886 = $("<span>");
    root1239.append(nodes886);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp793, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1242 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes887 = $("<span>");
      root1242.append(nodes887);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1243 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1243); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes887;
        nodes887 = node.contents();
        oldNodes.replaceWith(nodes887);
      }));
      callback(root1242); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes886;
      nodes886 = node.contents();
      oldNodes.replaceWith(nodes886);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp891 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp794 = mobl.ref(result__);
    
    var nodes888 = $("<span>");
    root1239.append(nodes888);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp794, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1244 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes889 = $("<span>");
      root1244.append(nodes889);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1245 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1245); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes889;
        nodes889 = node.contents();
        oldNodes.replaceWith(nodes889);
      }));
      callback(root1244); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes888;
      nodes888 = node.contents();
      oldNodes.replaceWith(nodes888);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp890 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp795 = mobl.ref(result__);
    
    var nodes890 = $("<span>");
    root1239.append(nodes890);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp795, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1246 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes891 = $("<span>");
      root1246.append(nodes891);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1247 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1247); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes891;
        nodes891 = node.contents();
        oldNodes.replaceWith(nodes891);
      }));
      callback(root1246); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes890;
      nodes890 = node.contents();
      oldNodes.replaceWith(nodes890);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp889 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp796 = mobl.ref(result__);
    
    var nodes892 = $("<span>");
    root1239.append(nodes892);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp796, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1248 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes893 = $("<span>");
      root1248.append(nodes893);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1249 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1249); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes893;
        nodes893 = node.contents();
        oldNodes.replaceWith(nodes893);
      }));
      callback(root1248); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes892;
      nodes892 = node.contents();
      oldNodes.replaceWith(nodes892);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp888 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp797 = mobl.ref(result__);
    
    var nodes894 = $("<span>");
    root1239.append(nodes894);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp797, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1250 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes895 = $("<span>");
      root1250.append(nodes895);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1251 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1251); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes895;
        nodes895 = node.contents();
        oldNodes.replaceWith(nodes895);
      }));
      callback(root1250); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes894;
      nodes894 = node.contents();
      oldNodes.replaceWith(nodes894);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp887 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp798 = mobl.ref(result__);
    
    var nodes896 = $("<span>");
    root1239.append(nodes896);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp798, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1252 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes897 = $("<span>");
      root1252.append(nodes897);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1253 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1253); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes897;
        nodes897 = node.contents();
        oldNodes.replaceWith(nodes897);
      }));
      callback(root1252); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes896;
      nodes896 = node.contents();
      oldNodes.replaceWith(nodes896);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp886 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp799 = mobl.ref(result__);
    
    var nodes898 = $("<span>");
    root1239.append(nodes898);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp799, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1254 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes899 = $("<span>");
      root1254.append(nodes899);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1255 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1255); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes899;
        nodes899 = node.contents();
        oldNodes.replaceWith(nodes899);
      }));
      callback(root1254); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes898;
      nodes898 = node.contents();
      oldNodes.replaceWith(nodes898);
    }));
    callback(root1239); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes883;
    nodes883 = node.contents();
    oldNodes.replaceWith(nodes883);
  }));
  callback(root1238); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root1256 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes900 = $("<span>");
  root1256.append(nodes900);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1257 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp801 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp800 = mobl.ref(result__);
    
    var nodes901 = $("<span>");
    root1257.append(nodes901);
    subs__.addSub((ui.backButton)(tmp800, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp801, function(_, callback) {
      var root1258 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1258); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes901;
      nodes901 = node.contents();
      oldNodes.replaceWith(nodes901);
    }));
    callback(root1257); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes900;
    nodes900 = node.contents();
    oldNodes.replaceWith(nodes900);
  }));
  var nodes902 = $("<span>");
  root1256.append(nodes902);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1259 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(10, function(result__) {
                       var tmp901 = result__;
                       var result__ = mobl.alert("Quadratic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp802 = mobl.ref(result__);
    
    var nodes903 = $("<span>");
    root1259.append(nodes903);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp802, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1260 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes904 = $("<span>");
      root1260.append(nodes904);
      subs__.addSub((mobl.label)(mobl.ref("+Quadratic equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1261 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1261); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes904;
        nodes904 = node.contents();
        oldNodes.replaceWith(nodes904);
      }));
      callback(root1260); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes903;
      nodes903 = node.contents();
      oldNodes.replaceWith(nodes903);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(11, function(result__) {
                       var tmp900 = result__;
                       var result__ = mobl.alert("Completing the Square Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp803 = mobl.ref(result__);
    
    var nodes905 = $("<span>");
    root1259.append(nodes905);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp803, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1262 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes906 = $("<span>");
      root1262.append(nodes906);
      subs__.addSub((mobl.label)(mobl.ref("+Completing the square"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1263 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1263); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes906;
        nodes906 = node.contents();
        oldNodes.replaceWith(nodes906);
      }));
      callback(root1262); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes905;
      nodes905 = node.contents();
      oldNodes.replaceWith(nodes905);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(7, function(result__) {
                       var tmp899 = result__;
                       var result__ = mobl.alert("Ineqalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp804 = mobl.ref(result__);
    
    var nodes907 = $("<span>");
    root1259.append(nodes907);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp804, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1264 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes908 = $("<span>");
      root1264.append(nodes908);
      subs__.addSub((mobl.label)(mobl.ref("+Inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1265 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1265); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes908;
        nodes908 = node.contents();
        oldNodes.replaceWith(nodes908);
      }));
      callback(root1264); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes907;
      nodes907 = node.contents();
      oldNodes.replaceWith(nodes907);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(9, function(result__) {
                       var tmp898 = result__;
                       var result__ = mobl.alert("Factor theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp805 = mobl.ref(result__);
    
    var nodes909 = $("<span>");
    root1259.append(nodes909);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp805, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1266 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes910 = $("<span>");
      root1266.append(nodes910);
      subs__.addSub((mobl.label)(mobl.ref("+Factor theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1267 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1267); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes910;
        nodes910 = node.contents();
        oldNodes.replaceWith(nodes910);
      }));
      callback(root1266); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes909;
      nodes909 = node.contents();
      oldNodes.replaceWith(nodes909);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(1, function(result__) {
                       var tmp897 = result__;
                       var result__ = mobl.alert("Partial fraction Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp806 = mobl.ref(result__);
    
    var nodes911 = $("<span>");
    root1259.append(nodes911);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp806, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1268 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes912 = $("<span>");
      root1268.append(nodes912);
      subs__.addSub((mobl.label)(mobl.ref("+Partial fractions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1269 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1269); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes912;
        nodes912 = node.contents();
        oldNodes.replaceWith(nodes912);
      }));
      callback(root1268); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes911;
      nodes911 = node.contents();
      oldNodes.replaceWith(nodes911);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(30, function(result__) {
                       var tmp896 = result__;
                       var result__ = mobl.alert("Powers Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp807 = mobl.ref(result__);
    
    var nodes913 = $("<span>");
    root1259.append(nodes913);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp807, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1270 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes914 = $("<span>");
      root1270.append(nodes914);
      subs__.addSub((mobl.label)(mobl.ref("+Powers"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1271 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1271); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes914;
        nodes914 = node.contents();
        oldNodes.replaceWith(nodes914);
      }));
      callback(root1270); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes913;
      nodes913 = node.contents();
      oldNodes.replaceWith(nodes913);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(13, function(result__) {
                       var tmp895 = result__;
                       var result__ = mobl.alert("Logarithm Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp808 = mobl.ref(result__);
    
    var nodes915 = $("<span>");
    root1259.append(nodes915);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp808, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1272 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes916 = $("<span>");
      root1272.append(nodes916);
      subs__.addSub((mobl.label)(mobl.ref("+Logarithms"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1273 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1273); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes916;
        nodes916 = node.contents();
        oldNodes.replaceWith(nodes916);
      }));
      callback(root1272); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes915;
      nodes915 = node.contents();
      oldNodes.replaceWith(nodes915);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(17, function(result__) {
                       var tmp894 = result__;
                       var result__ = mobl.alert("Trig equation Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp809 = mobl.ref(result__);
    
    var nodes917 = $("<span>");
    root1259.append(nodes917);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp809, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1274 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes918 = $("<span>");
      root1274.append(nodes918);
      subs__.addSub((mobl.label)(mobl.ref("+Trig equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1275 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1275); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes918;
        nodes918 = node.contents();
        oldNodes.replaceWith(nodes918);
      }));
      callback(root1274); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes917;
      nodes917 = node.contents();
      oldNodes.replaceWith(nodes917);
    }));
    callback(root1259); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes902;
    nodes902 = node.contents();
    oldNodes.replaceWith(nodes902);
  }));
  callback(root1256); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root1276 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes919 = $("<span>");
  root1276.append(nodes919);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1277 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp811 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp810 = mobl.ref(result__);
    
    var nodes920 = $("<span>");
    root1277.append(nodes920);
    subs__.addSub((ui.backButton)(tmp810, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp811, function(_, callback) {
      var root1278 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1278); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes920;
      nodes920 = node.contents();
      oldNodes.replaceWith(nodes920);
    }));
    callback(root1277); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes919;
    nodes919 = node.contents();
    oldNodes.replaceWith(nodes919);
  }));
  var nodes921 = $("<span>");
  root1276.append(nodes921);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1279 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(24, function(result__) {
                       var tmp906 = result__;
                       var result__ = mobl.alert("Modulus Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp812 = mobl.ref(result__);
    
    var nodes922 = $("<span>");
    root1279.append(nodes922);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp812, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1280 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes923 = $("<span>");
      root1280.append(nodes923);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus function"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1281 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1281); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes923;
        nodes923 = node.contents();
        oldNodes.replaceWith(nodes923);
      }));
      callback(root1280); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes922;
      nodes922 = node.contents();
      oldNodes.replaceWith(nodes922);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(25, function(result__) {
                       var tmp905 = result__;
                       var result__ = mobl.alert("Transformations of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp813 = mobl.ref(result__);
    
    var nodes924 = $("<span>");
    root1279.append(nodes924);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp813, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1282 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes925 = $("<span>");
      root1282.append(nodes925);
      subs__.addSub((mobl.label)(mobl.ref("+Transformations of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1283 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1283); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes925;
        nodes925 = node.contents();
        oldNodes.replaceWith(nodes925);
      }));
      callback(root1282); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes924;
      nodes924 = node.contents();
      oldNodes.replaceWith(nodes924);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(26, function(result__) {
                       var tmp904 = result__;
                       var result__ = mobl.alert("Composition of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp814 = mobl.ref(result__);
    
    var nodes926 = $("<span>");
    root1279.append(nodes926);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp814, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1284 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes927 = $("<span>");
      root1284.append(nodes927);
      subs__.addSub((mobl.label)(mobl.ref("+Composition of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1285 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1285); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes927;
        nodes927 = node.contents();
        oldNodes.replaceWith(nodes927);
      }));
      callback(root1284); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes926;
      nodes926 = node.contents();
      oldNodes.replaceWith(nodes926);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(270, function(result__) {
                       var tmp903 = result__;
                       var result__ = mobl.alert("Implicit functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp815 = mobl.ref(result__);
    
    var nodes928 = $("<span>");
    root1279.append(nodes928);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp815, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1286 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes929 = $("<span>");
      root1286.append(nodes929);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1287 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1287); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes929;
        nodes929 = node.contents();
        oldNodes.replaceWith(nodes929);
      }));
      callback(root1286); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes928;
      nodes928 = node.contents();
      oldNodes.replaceWith(nodes928);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(27, function(result__) {
                       var tmp902 = result__;
                       var result__ = mobl.alert("Parametric functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp816 = mobl.ref(result__);
    
    var nodes930 = $("<span>");
    root1279.append(nodes930);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp816, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1288 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes931 = $("<span>");
      root1288.append(nodes931);
      subs__.addSub((mobl.label)(mobl.ref("+Parametric functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1289 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1289); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes931;
        nodes931 = node.contents();
        oldNodes.replaceWith(nodes931);
      }));
      callback(root1288); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes930;
      nodes930 = node.contents();
      oldNodes.replaceWith(nodes930);
    }));
    callback(root1279); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes921;
    nodes921 = node.contents();
    oldNodes.replaceWith(nodes921);
  }));
  callback(root1276); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root1290 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes932 = $("<span>");
  root1290.append(nodes932);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1291 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp818 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp817 = mobl.ref(result__);
    
    var nodes933 = $("<span>");
    root1291.append(nodes933);
    subs__.addSub((ui.backButton)(tmp817, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp818, function(_, callback) {
      var root1292 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1292); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes933;
      nodes933 = node.contents();
      oldNodes.replaceWith(nodes933);
    }));
    callback(root1291); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes932;
    nodes932 = node.contents();
    oldNodes.replaceWith(nodes932);
  }));
  var nodes934 = $("<span>");
  root1290.append(nodes934);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1293 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(15, function(result__) {
                       var tmp909 = result__;
                       var result__ = mobl.alert("Triangles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp819 = mobl.ref(result__);
    
    var nodes935 = $("<span>");
    root1293.append(nodes935);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp819, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1294 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes936 = $("<span>");
      root1294.append(nodes936);
      subs__.addSub((mobl.label)(mobl.ref("+Triangles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1295 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1295); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes936;
        nodes936 = node.contents();
        oldNodes.replaceWith(nodes936);
      }));
      callback(root1294); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes935;
      nodes935 = node.contents();
      oldNodes.replaceWith(nodes935);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(16, function(result__) {
                       var tmp908 = result__;
                       var result__ = mobl.alert("Circles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp820 = mobl.ref(result__);
    
    var nodes937 = $("<span>");
    root1293.append(nodes937);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp820, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1296 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes938 = $("<span>");
      root1296.append(nodes938);
      subs__.addSub((mobl.label)(mobl.ref("+Circles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1297 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1297); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes938;
        nodes938 = node.contents();
        oldNodes.replaceWith(nodes938);
      }));
      callback(root1296); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes937;
      nodes937 = node.contents();
      oldNodes.replaceWith(nodes937);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(6, function(result__) {
                       var tmp907 = result__;
                       var result__ = mobl.alert("3D lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp821 = mobl.ref(result__);
    
    var nodes939 = $("<span>");
    root1293.append(nodes939);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp821, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1298 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes940 = $("<span>");
      root1298.append(nodes940);
      subs__.addSub((mobl.label)(mobl.ref("+ 3D lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1299 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1299); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes940;
        nodes940 = node.contents();
        oldNodes.replaceWith(nodes940);
      }));
      callback(root1298); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes939;
      nodes939 = node.contents();
      oldNodes.replaceWith(nodes939);
    }));
    callback(root1293); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes934;
    nodes934 = node.contents();
    oldNodes.replaceWith(nodes934);
  }));
  callback(root1290); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root1300 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes941 = $("<span>");
  root1300.append(nodes941);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1301 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp823 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp822 = mobl.ref(result__);
    
    var nodes942 = $("<span>");
    root1301.append(nodes942);
    subs__.addSub((ui.backButton)(tmp822, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp823, function(_, callback) {
      var root1302 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1302); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes942;
      nodes942 = node.contents();
      oldNodes.replaceWith(nodes942);
    }));
    callback(root1301); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes941;
    nodes941 = node.contents();
    oldNodes.replaceWith(nodes941);
  }));
  var nodes943 = $("<span>");
  root1300.append(nodes943);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1303 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(8, function(result__) {
                       var tmp913 = result__;
                       var result__ = mobl.alert("Arithmetic Progressions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp824 = mobl.ref(result__);
    
    var nodes944 = $("<span>");
    root1303.append(nodes944);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp824, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1304 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes945 = $("<span>");
      root1304.append(nodes945);
      subs__.addSub((mobl.label)(mobl.ref("+Arithmetic progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1305 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1305); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes945;
        nodes945 = node.contents();
        oldNodes.replaceWith(nodes945);
      }));
      callback(root1304); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes944;
      nodes944 = node.contents();
      oldNodes.replaceWith(nodes944);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(12, function(result__) {
                       var tmp912 = result__;
                       var result__ = mobl.alert("Binomial Expansion Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp825 = mobl.ref(result__);
    
    var nodes946 = $("<span>");
    root1303.append(nodes946);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp825, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1306 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes947 = $("<span>");
      root1306.append(nodes947);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial expansion"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1307 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1307); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes947;
        nodes947 = node.contents();
        oldNodes.replaceWith(nodes947);
      }));
      callback(root1306); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes946;
      nodes946 = node.contents();
      oldNodes.replaceWith(nodes946);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(23, function(result__) {
                       var tmp911 = result__;
                       var result__ = mobl.alert("Geometric Progression Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp826 = mobl.ref(result__);
    
    var nodes948 = $("<span>");
    root1303.append(nodes948);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp826, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1308 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes949 = $("<span>");
      root1308.append(nodes949);
      subs__.addSub((mobl.label)(mobl.ref("+Geometric progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1309 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1309); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes949;
        nodes949 = node.contents();
        oldNodes.replaceWith(nodes949);
      }));
      callback(root1308); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes948;
      nodes948 = node.contents();
      oldNodes.replaceWith(nodes948);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(2, function(result__) {
                       var tmp910 = result__;
                       var result__ = mobl.alert("Binomial theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp827 = mobl.ref(result__);
    
    var nodes950 = $("<span>");
    root1303.append(nodes950);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp827, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1310 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes951 = $("<span>");
      root1310.append(nodes951);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1311 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1311); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes951;
        nodes951 = node.contents();
        oldNodes.replaceWith(nodes951);
      }));
      callback(root1310); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes950;
      nodes950 = node.contents();
      oldNodes.replaceWith(nodes950);
    }));
    callback(root1303); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes943;
    nodes943 = node.contents();
    oldNodes.replaceWith(nodes943);
  }));
  callback(root1300); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root1312 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes952 = $("<span>");
  root1312.append(nodes952);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1313 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp829 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp828 = mobl.ref(result__);
    
    var nodes953 = $("<span>");
    root1313.append(nodes953);
    subs__.addSub((ui.backButton)(tmp828, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp829, function(_, callback) {
      var root1314 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1314); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes953;
      nodes953 = node.contents();
      oldNodes.replaceWith(nodes953);
    }));
    callback(root1313); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes952;
    nodes952 = node.contents();
    oldNodes.replaceWith(nodes952);
  }));
  var nodes954 = $("<span>");
  root1312.append(nodes954);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1315 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(5, function(result__) {
                       var tmp915 = result__;
                       var result__ = mobl.alert("Scalar product Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp830 = mobl.ref(result__);
    
    var nodes955 = $("<span>");
    root1315.append(nodes955);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp830, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1316 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes956 = $("<span>");
      root1316.append(nodes956);
      subs__.addSub((mobl.label)(mobl.ref("+Scalar products"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1317 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1317); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes956;
        nodes956 = node.contents();
        oldNodes.replaceWith(nodes956);
      }));
      callback(root1316); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes955;
      nodes955 = node.contents();
      oldNodes.replaceWith(nodes955);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(18, function(result__) {
                       var tmp914 = result__;
                       var result__ = mobl.alert("Vector equation of lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp831 = mobl.ref(result__);
    
    var nodes957 = $("<span>");
    root1315.append(nodes957);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp831, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1318 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes958 = $("<span>");
      root1318.append(nodes958);
      subs__.addSub((mobl.label)(mobl.ref("+Vector equation of lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1319 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1319); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes958;
        nodes958 = node.contents();
        oldNodes.replaceWith(nodes958);
      }));
      callback(root1318); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes957;
      nodes957 = node.contents();
      oldNodes.replaceWith(nodes957);
    }));
    callback(root1315); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes954;
    nodes954 = node.contents();
    oldNodes.replaceWith(nodes954);
  }));
  callback(root1312); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root1320 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes959 = $("<span>");
  root1320.append(nodes959);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1321 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp833 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp832 = mobl.ref(result__);
    
    var nodes960 = $("<span>");
    root1321.append(nodes960);
    subs__.addSub((ui.backButton)(tmp832, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp833, function(_, callback) {
      var root1322 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1322); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes960;
      nodes960 = node.contents();
      oldNodes.replaceWith(nodes960);
    }));
    callback(root1321); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes959;
    nodes959 = node.contents();
    oldNodes.replaceWith(nodes959);
  }));
  var nodes961 = $("<span>");
  root1320.append(nodes961);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1323 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(14, function(result__) {
                       var tmp920 = result__;
                       var result__ = mobl.alert("Stationary points Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp834 = mobl.ref(result__);
    
    var nodes962 = $("<span>");
    root1323.append(nodes962);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp834, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1324 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes963 = $("<span>");
      root1324.append(nodes963);
      subs__.addSub((mobl.label)(mobl.ref("+Stationary points"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1325 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1325); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes963;
        nodes963 = node.contents();
        oldNodes.replaceWith(nodes963);
      }));
      callback(root1324); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes962;
      nodes962 = node.contents();
      oldNodes.replaceWith(nodes962);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(20, function(result__) {
                       var tmp919 = result__;
                       var result__ = mobl.alert("Chain rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp835 = mobl.ref(result__);
    
    var nodes964 = $("<span>");
    root1323.append(nodes964);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp835, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1326 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes965 = $("<span>");
      root1326.append(nodes965);
      subs__.addSub((mobl.label)(mobl.ref("+Chain rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1327 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1327); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes965;
        nodes965 = node.contents();
        oldNodes.replaceWith(nodes965);
      }));
      callback(root1326); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes964;
      nodes964 = node.contents();
      oldNodes.replaceWith(nodes964);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(21, function(result__) {
                       var tmp918 = result__;
                       var result__ = mobl.alert("Product rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp836 = mobl.ref(result__);
    
    var nodes966 = $("<span>");
    root1323.append(nodes966);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp836, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1328 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes967 = $("<span>");
      root1328.append(nodes967);
      subs__.addSub((mobl.label)(mobl.ref("+Product rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1329 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1329); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes967;
        nodes967 = node.contents();
        oldNodes.replaceWith(nodes967);
      }));
      callback(root1328); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes966;
      nodes966 = node.contents();
      oldNodes.replaceWith(nodes966);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(22, function(result__) {
                       var tmp917 = result__;
                       var result__ = mobl.alert("Quotient rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp837 = mobl.ref(result__);
    
    var nodes968 = $("<span>");
    root1323.append(nodes968);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp837, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1330 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes969 = $("<span>");
      root1330.append(nodes969);
      subs__.addSub((mobl.label)(mobl.ref("+Quotient rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1331 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1331); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes969;
        nodes969 = node.contents();
        oldNodes.replaceWith(nodes969);
      }));
      callback(root1330); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes968;
      nodes968 = node.contents();
      oldNodes.replaceWith(nodes968);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(19, function(result__) {
                       var tmp916 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp838 = mobl.ref(result__);
    
    var nodes970 = $("<span>");
    root1323.append(nodes970);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp838, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1332 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes971 = $("<span>");
      root1332.append(nodes971);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1333 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1333); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes971;
        nodes971 = node.contents();
        oldNodes.replaceWith(nodes971);
      }));
      callback(root1332); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes970;
      nodes970 = node.contents();
      oldNodes.replaceWith(nodes970);
    }));
    callback(root1323); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes961;
    nodes961 = node.contents();
    oldNodes.replaceWith(nodes961);
  }));
  callback(root1320); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root1334 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes972 = $("<span>");
  root1334.append(nodes972);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1335 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp840 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp839 = mobl.ref(result__);
    
    var nodes973 = $("<span>");
    root1335.append(nodes973);
    subs__.addSub((ui.backButton)(tmp839, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp840, function(_, callback) {
      var root1336 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1336); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes973;
      nodes973 = node.contents();
      oldNodes.replaceWith(nodes973);
    }));
    callback(root1335); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes972;
    nodes972 = node.contents();
    oldNodes.replaceWith(nodes972);
  }));
  var nodes974 = $("<span>");
  root1334.append(nodes974);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1337 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(28, function(result__) {
                       var tmp923 = result__;
                       var result__ = mobl.alert("Integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp841 = mobl.ref(result__);
    
    var nodes975 = $("<span>");
    root1337.append(nodes975);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp841, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1338 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes976 = $("<span>");
      root1338.append(nodes976);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1339 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1339); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes976;
        nodes976 = node.contents();
        oldNodes.replaceWith(nodes976);
      }));
      callback(root1338); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes975;
      nodes975 = node.contents();
      oldNodes.replaceWith(nodes975);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(3, function(result__) {
                       var tmp922 = result__;
                       var result__ = mobl.alert("Polynomial integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp842 = mobl.ref(result__);
    
    var nodes977 = $("<span>");
    root1337.append(nodes977);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp842, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1340 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes978 = $("<span>");
      root1340.append(nodes978);
      subs__.addSub((mobl.label)(mobl.ref("+Polynomial integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1341 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1341); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes978;
        nodes978 = node.contents();
        oldNodes.replaceWith(nodes978);
      }));
      callback(root1340); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes977;
      nodes977 = node.contents();
      oldNodes.replaceWith(nodes977);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(4, function(result__) {
                       var tmp921 = result__;
                       var result__ = mobl.alert("Trig integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp843 = mobl.ref(result__);
    
    var nodes979 = $("<span>");
    root1337.append(nodes979);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp843, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1342 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes980 = $("<span>");
      root1342.append(nodes980);
      subs__.addSub((mobl.label)(mobl.ref("+Trig integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1343 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1343); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes980;
        nodes980 = node.contents();
        oldNodes.replaceWith(nodes980);
      }));
      callback(root1342); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes979;
      nodes979 = node.contents();
      oldNodes.replaceWith(nodes979);
    }));
    callback(root1337); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes974;
    nodes974 = node.contents();
    oldNodes.replaceWith(nodes974);
  }));
  callback(root1334); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root1344 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes981 = $("<span>");
  root1344.append(nodes981);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root1345 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp845 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp844 = mobl.ref(result__);
    
    var nodes982 = $("<span>");
    root1345.append(nodes982);
    subs__.addSub((ui.backButton)(tmp844, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp845, function(_, callback) {
      var root1346 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1346); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes982;
      nodes982 = node.contents();
      oldNodes.replaceWith(nodes982);
    }));
    callback(root1345); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes981;
    nodes981 = node.contents();
    oldNodes.replaceWith(nodes981);
  }));
  var nodes983 = $("<span>");
  root1344.append(nodes983);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1347 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(29, function(result__) {
                       var tmp924 = result__;
                       var result__ = mobl.alert("Differential equations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp846 = mobl.ref(result__);
    
    var nodes984 = $("<span>");
    root1347.append(nodes984);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp846, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1348 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes985 = $("<span>");
      root1348.append(nodes985);
      subs__.addSub((mobl.label)(mobl.ref("+Diff equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1349 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1349); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes985;
        nodes985 = node.contents();
        oldNodes.replaceWith(nodes985);
      }));
      callback(root1348); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes984;
      nodes984 = node.contents();
      oldNodes.replaceWith(nodes984);
    }));
    callback(root1347); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes983;
    nodes983 = node.contents();
    oldNodes.replaceWith(nodes983);
  }));
  callback(root1344); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root1350 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes986 = $("<span>");
  root1350.append(nodes986);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1351 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F1", function(result__) {
                       var tmp937 = result__;
                       var result__ = mobl.alert("Complex arithmetic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp847 = mobl.ref(result__);
    
    var nodes987 = $("<span>");
    root1351.append(nodes987);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp847, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1352 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes988 = $("<span>");
      root1352.append(nodes988);
      subs__.addSub((mobl.label)(mobl.ref("+Complex arithmetic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1353 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1353); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes988;
        nodes988 = node.contents();
        oldNodes.replaceWith(nodes988);
      }));
      callback(root1352); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes987;
      nodes987 = node.contents();
      oldNodes.replaceWith(nodes987);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F2", function(result__) {
                       var tmp936 = result__;
                       var result__ = mobl.alert("Modulus argument Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp848 = mobl.ref(result__);
    
    var nodes989 = $("<span>");
    root1351.append(nodes989);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp848, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1354 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes990 = $("<span>");
      root1354.append(nodes990);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus argument"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1355 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1355); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes990;
        nodes990 = node.contents();
        oldNodes.replaceWith(nodes990);
      }));
      callback(root1354); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes989;
      nodes989 = node.contents();
      oldNodes.replaceWith(nodes989);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F3a", function(result__) {
                       var tmp935 = result__;
                       var result__ = mobl.alert("2nd order DE Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp849 = mobl.ref(result__);
    
    var nodes991 = $("<span>");
    root1351.append(nodes991);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp849, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1356 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes992 = $("<span>");
      root1356.append(nodes992);
      subs__.addSub((mobl.label)(mobl.ref("+2nd order DEs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1357 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1357); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes992;
        nodes992 = node.contents();
        oldNodes.replaceWith(nodes992);
      }));
      callback(root1356); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes991;
      nodes991 = node.contents();
      oldNodes.replaceWith(nodes991);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F4", function(result__) {
                       var tmp934 = result__;
                       var result__ = mobl.alert("Rank 2 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp850 = mobl.ref(result__);
    
    var nodes993 = $("<span>");
    root1351.append(nodes993);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp850, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1358 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes994 = $("<span>");
      root1358.append(nodes994);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 2 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1359 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1359); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes994;
        nodes994 = node.contents();
        oldNodes.replaceWith(nodes994);
      }));
      callback(root1358); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes993;
      nodes993 = node.contents();
      oldNodes.replaceWith(nodes993);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F5", function(result__) {
                       var tmp933 = result__;
                       var result__ = mobl.alert("Taylor Series Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp851 = mobl.ref(result__);
    
    var nodes995 = $("<span>");
    root1351.append(nodes995);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp851, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1360 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes996 = $("<span>");
      root1360.append(nodes996);
      subs__.addSub((mobl.label)(mobl.ref("+Taylor Series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1361 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1361); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes996;
        nodes996 = node.contents();
        oldNodes.replaceWith(nodes996);
      }));
      callback(root1360); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes995;
      nodes995 = node.contents();
      oldNodes.replaceWith(nodes995);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F6", function(result__) {
                       var tmp932 = result__;
                       var result__ = mobl.alert("Polar Coordinates Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp852 = mobl.ref(result__);
    
    var nodes997 = $("<span>");
    root1351.append(nodes997);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp852, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1362 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes998 = $("<span>");
      root1362.append(nodes998);
      subs__.addSub((mobl.label)(mobl.ref("+Polar Coordinates"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1363 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1363); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes998;
        nodes998 = node.contents();
        oldNodes.replaceWith(nodes998);
      }));
      callback(root1362); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes997;
      nodes997 = node.contents();
      oldNodes.replaceWith(nodes997);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F7", function(result__) {
                       var tmp931 = result__;
                       var result__ = mobl.alert("Rank 3 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp853 = mobl.ref(result__);
    
    var nodes999 = $("<span>");
    root1351.append(nodes999);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp853, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1364 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1000 = $("<span>");
      root1364.append(nodes1000);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 3 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1365 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1365); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1000;
        nodes1000 = node.contents();
        oldNodes.replaceWith(nodes1000);
      }));
      callback(root1364); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes999;
      nodes999 = node.contents();
      oldNodes.replaceWith(nodes999);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F8", function(result__) {
                       var tmp930 = result__;
                       var result__ = mobl.alert("Further vectors added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp854 = mobl.ref(result__);
    
    var nodes1001 = $("<span>");
    root1351.append(nodes1001);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp854, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1366 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1002 = $("<span>");
      root1366.append(nodes1002);
      subs__.addSub((mobl.label)(mobl.ref("+Further vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1367 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1367); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1002;
        nodes1002 = node.contents();
        oldNodes.replaceWith(nodes1002);
      }));
      callback(root1366); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1001;
      nodes1001 = node.contents();
      oldNodes.replaceWith(nodes1001);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F9", function(result__) {
                       var tmp929 = result__;
                       var result__ = mobl.alert("Newton-Raphson added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp855 = mobl.ref(result__);
    
    var nodes1003 = $("<span>");
    root1351.append(nodes1003);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp855, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1368 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1004 = $("<span>");
      root1368.append(nodes1004);
      subs__.addSub((mobl.label)(mobl.ref("+Newton-Raphson"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1369 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1369); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1004;
        nodes1004 = node.contents();
        oldNodes.replaceWith(nodes1004);
      }));
      callback(root1368); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1003;
      nodes1003 = node.contents();
      oldNodes.replaceWith(nodes1003);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F10", function(result__) {
                       var tmp928 = result__;
                       var result__ = mobl.alert("Further inequalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp856 = mobl.ref(result__);
    
    var nodes1005 = $("<span>");
    root1351.append(nodes1005);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp856, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1370 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1006 = $("<span>");
      root1370.append(nodes1006);
      subs__.addSub((mobl.label)(mobl.ref("+Further inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1371 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1371); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1006;
        nodes1006 = node.contents();
        oldNodes.replaceWith(nodes1006);
      }));
      callback(root1370); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1005;
      nodes1005 = node.contents();
      oldNodes.replaceWith(nodes1005);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F11", function(result__) {
                       var tmp927 = result__;
                       var result__ = mobl.alert("Integration by substitution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp857 = mobl.ref(result__);
    
    var nodes1007 = $("<span>");
    root1351.append(nodes1007);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp857, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1372 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1008 = $("<span>");
      root1372.append(nodes1008);
      subs__.addSub((mobl.label)(mobl.ref("+Integration by substitution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1373 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1373); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1008;
        nodes1008 = node.contents();
        oldNodes.replaceWith(nodes1008);
      }));
      callback(root1372); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1007;
      nodes1007 = node.contents();
      oldNodes.replaceWith(nodes1007);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F12", function(result__) {
                       var tmp926 = result__;
                       var result__ = mobl.alert("Figures of revolution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp858 = mobl.ref(result__);
    
    var nodes1009 = $("<span>");
    root1351.append(nodes1009);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp858, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1374 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1010 = $("<span>");
      root1374.append(nodes1010);
      subs__.addSub((mobl.label)(mobl.ref("+Figures of revolution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1375 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1375); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1010;
        nodes1010 = node.contents();
        oldNodes.replaceWith(nodes1010);
      }));
      callback(root1374); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1009;
      nodes1009 = node.contents();
      oldNodes.replaceWith(nodes1009);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F13", function(result__) {
                       var tmp925 = result__;
                       var result__ = mobl.alert("Matrix transformations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp859 = mobl.ref(result__);
    
    var nodes1011 = $("<span>");
    root1351.append(nodes1011);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp859, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1376 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1012 = $("<span>");
      root1376.append(nodes1012);
      subs__.addSub((mobl.label)(mobl.ref("+Matrix transformations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1377 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1377); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1012;
        nodes1012 = node.contents();
        oldNodes.replaceWith(nodes1012);
      }));
      callback(root1376); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1011;
      nodes1011 = node.contents();
      oldNodes.replaceWith(nodes1011);
    }));
    callback(root1351); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes986;
    nodes986 = node.contents();
    oldNodes.replaceWith(nodes986);
  }));
  callback(root1350); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root1378 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1013 = $("<span>");
  root1378.append(nodes1013);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1379 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S1", function(result__) {
                       var tmp943 = result__;
                       var result__ = mobl.alert("Discrete Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp860 = mobl.ref(result__);
    
    var nodes1014 = $("<span>");
    root1379.append(nodes1014);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp860, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1380 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1015 = $("<span>");
      root1380.append(nodes1015);
      subs__.addSub((mobl.label)(mobl.ref("+Discrete Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1381 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1381); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1015;
        nodes1015 = node.contents();
        oldNodes.replaceWith(nodes1015);
      }));
      callback(root1380); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1014;
      nodes1014 = node.contents();
      oldNodes.replaceWith(nodes1014);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S2", function(result__) {
                       var tmp942 = result__;
                       var result__ = mobl.alert("Continuous Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp861 = mobl.ref(result__);
    
    var nodes1016 = $("<span>");
    root1379.append(nodes1016);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp861, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1382 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1017 = $("<span>");
      root1382.append(nodes1017);
      subs__.addSub((mobl.label)(mobl.ref("+Continuous Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1383 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1383); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1017;
        nodes1017 = node.contents();
        oldNodes.replaceWith(nodes1017);
      }));
      callback(root1382); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1016;
      nodes1016 = node.contents();
      oldNodes.replaceWith(nodes1016);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S3", function(result__) {
                       var tmp941 = result__;
                       var result__ = mobl.alert("Hypothesis Testing Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp862 = mobl.ref(result__);
    
    var nodes1018 = $("<span>");
    root1379.append(nodes1018);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp862, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1384 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1019 = $("<span>");
      root1384.append(nodes1019);
      subs__.addSub((mobl.label)(mobl.ref("+Hypothesis Testing"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1385 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1385); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1019;
        nodes1019 = node.contents();
        oldNodes.replaceWith(nodes1019);
      }));
      callback(root1384); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1018;
      nodes1018 = node.contents();
      oldNodes.replaceWith(nodes1018);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S4", function(result__) {
                       var tmp940 = result__;
                       var result__ = mobl.alert("Confidence Intervals Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp863 = mobl.ref(result__);
    
    var nodes1020 = $("<span>");
    root1379.append(nodes1020);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp863, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1386 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1021 = $("<span>");
      root1386.append(nodes1021);
      subs__.addSub((mobl.label)(mobl.ref("+Confidence Intervals"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1387 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1387); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1021;
        nodes1021 = node.contents();
        oldNodes.replaceWith(nodes1021);
      }));
      callback(root1386); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1020;
      nodes1020 = node.contents();
      oldNodes.replaceWith(nodes1020);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S5", function(result__) {
                       var tmp939 = result__;
                       var result__ = mobl.alert("Chi Squared Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp864 = mobl.ref(result__);
    
    var nodes1022 = $("<span>");
    root1379.append(nodes1022);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp864, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1388 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1023 = $("<span>");
      root1388.append(nodes1023);
      subs__.addSub((mobl.label)(mobl.ref("+Chi Squared"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1389 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1389); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1023;
        nodes1023 = node.contents();
        oldNodes.replaceWith(nodes1023);
      }));
      callback(root1388); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1022;
      nodes1022 = node.contents();
      oldNodes.replaceWith(nodes1022);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S6", function(result__) {
                       var tmp938 = result__;
                       var result__ = mobl.alert("Product Moment Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp865 = mobl.ref(result__);
    
    var nodes1024 = $("<span>");
    root1379.append(nodes1024);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp865, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root1390 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1025 = $("<span>");
      root1390.append(nodes1025);
      subs__.addSub((mobl.label)(mobl.ref("+Product Moments"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1391 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1391); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1025;
        nodes1025 = node.contents();
        oldNodes.replaceWith(nodes1025);
      }));
      callback(root1390); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1024;
      nodes1024 = node.contents();
      oldNodes.replaceWith(nodes1024);
    }));
    callback(root1379); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1013;
    nodes1013 = node.contents();
    oldNodes.replaceWith(nodes1013);
  }));
  callback(root1378); return subs__;
  
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
  var root1392 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node513 = $("<div>");
  
  var ref535 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref535.get() !== null) {
    node513.attr('class', ref535.get());
    subs__.addSub(ref535.addEventListener('change', function(_, ref, val) {
      node513.attr('class', val);
    }));
    
  }
  subs__.addSub(ref535.rebind());
  
  var val275 = onclick.get();
  if(val275 !== null) {
    subs__.addSub(mobl.domBind(node513, 'tap', val275));
  }
  
  
  var node514 = $("<div>");
  
  var ref534 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref534.get() !== null) {
    node514.attr('class', ref534.get());
    subs__.addSub(ref534.addEventListener('change', function(_, ref, val) {
      node514.attr('class', val);
    }));
    
  }
  subs__.addSub(ref534.rebind());
  
  
  var node515 = $("<div>");
  
  var ref532 = text;
  node515.text(""+ref532.get());
  var ignore102 = false;
  subs__.addSub(ref532.addEventListener('change', function(_, ref, val) {
    if(ignore102) return;
    node515.text(""+val);
  }));
  subs__.addSub(ref532.rebind());
  
  
  var ref533 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref533.get() !== null) {
    node515.attr('class', ref533.get());
    subs__.addSub(ref533.addEventListener('change', function(_, ref, val) {
      node515.attr('class', val);
    }));
    
  }
  subs__.addSub(ref533.rebind());
  
  node514.append(node515);
  node513.append(node514);
  var nodes1026 = $("<span>");
  node513.append(nodes1026);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl234();
  }));
  
  function renderControl234() {
    subs__.addSub((elements)(function(elements, callback) {
      var root1393 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1393); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1026;
      nodes1026 = node.contents();
      oldNodes.replaceWith(nodes1026);
    }));
  }
  renderControl234();
  root1392.append(node513);
  callback(root1392); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mathJAX.renderMaths(function(result__) {
    var tmp944 = result__;
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
  var root1394 = $("<span>");
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
  var tmp870 = mobl.ref(result__);
  
  var result__ = qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle;
  var tmp869 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    tmp869.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.agreeStyle).addEventListener('change', function() {
    tmp869.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.disagreeStyle).addEventListener('change', function() {
    tmp869.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  
  var nodes1027 = $("<span>");
  root1394.append(nodes1027);
  subs__.addSub((mobl.block)(tmp869, mobl.ref(null), tmp870, mobl.ref(null), function(_, callback) {
    var root1395 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = "A" + number.get() + ". ";
    var tmp866 = mobl.ref(result__);
    subs__.addSub(number.addEventListener('change', function() {
      tmp866.set("A" + number.get() + ". ");
    }));
    
    var nodes1028 = $("<span>");
    root1395.append(nodes1028);
    subs__.addSub((mobl.label)(tmp866, mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root1396 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1396); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1028;
      nodes1028 = node.contents();
      oldNodes.replaceWith(nodes1028);
    }));
    var result__ = qa.get().answer != "%GRAPH%";
    var tmp868 = mobl.ref(result__);
    subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
      tmp868.set(qa.get().answer != "%GRAPH%");
    }));
    
    
    var node516 = $("<span>");
    root1395.append(node516);
    var condSubs123 = new mobl.CompSubscription();
    subs__.addSub(condSubs123);
    var oldValue123;
    var renderCond123 = function() {
      var value511 = tmp868.get();
      if(oldValue123 === value511) return;
      oldValue123 = value511;
      var subs__ = condSubs123;
      subs__.unsubscribe();
      node516.empty();
      if(value511) {
        
        var node517 = $("<span>");
        
        var ref536 = mobl.ref("answer-block-" + number.get());
        if(ref536.get() !== null) {
          node517.attr('id', ref536.get());
          subs__.addSub(ref536.addEventListener('change', function(_, ref, val) {
            node517.attr('id', val);
          }));
          subs__.addSub(number.addEventListener('change', function() {
            node517.attr('id', "answer-block-" + number.get());
          }));
          
        }
        subs__.addSub(ref536.rebind());
        
        var result__ = plot.blank(qa.get().answerHtml) ? qa.get().answer : qa.get().answerHtml;
        var tmp867 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp867.set(plot.blank(qa.get().answerHtml) ? qa.get().answer : qa.get().answerHtml);
        }));
        subs__.addSub(mobl.ref(qa, 'answerHtml').addEventListener('change', function() {
          tmp867.set(plot.blank(qa.get().answerHtml) ? qa.get().answer : qa.get().answerHtml);
        }));
        
        var nodes1029 = $("<span>");
        node517.append(nodes1029);
        subs__.addSub((mobl.html)(tmp867, function(_, callback) {
          var root1397 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1397); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1029;
          nodes1029 = node.contents();
          oldNodes.replaceWith(nodes1029);
        }));
        node516.append(node517);
        
        
        
      } else {
        var nodes1030 = $("<span>");
        node516.append(nodes1030);
        subs__.addSub((plot.plot)(qa, mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
          var root1398 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1398); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1030;
          nodes1030 = node.contents();
          oldNodes.replaceWith(nodes1030);
        }));
        
        
      }
    };
    renderCond123();
    subs__.addSub(tmp868.addEventListener('change', function() {
      renderCond123();
    }));
    
    callback(root1395); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1027;
    nodes1027 = node.contents();
    oldNodes.replaceWith(nodes1027);
  }));
  var nodes1031 = $("<span>");
  root1394.append(nodes1031);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root1399 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes1032 = $("<span>");
    root1399.append(nodes1032);
    subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root1400 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1400); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1032;
      nodes1032 = node.contents();
      oldNodes.replaceWith(nodes1032);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = true;
                     qa.get().correct = result__;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp871 = mobl.ref(result__);
    
    var nodes1033 = $("<span>");
    root1399.append(nodes1033);
    subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp871, function(_, callback) {
      var root1401 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1401); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1033;
      nodes1033 = node.contents();
      oldNodes.replaceWith(nodes1033);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = false;
                     qa.get().correct = result__;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp872 = mobl.ref(result__);
    
    var nodes1034 = $("<span>");
    root1399.append(nodes1034);
    subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp872, function(_, callback) {
      var root1402 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1402); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1034;
      nodes1034 = node.contents();
      oldNodes.replaceWith(nodes1034);
    }));
    callback(root1399); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1031;
    nodes1031 = node.contents();
    oldNodes.replaceWith(nodes1031);
  }));
  callback(root1394); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp945 = result__;
    var result__ = tmp945;
    var qa2 = result__;
    var result__ = qa2;
    if(callback && callback.apply) callback(result__);
    return;
    if(callback && callback.apply) callback(); return;
  });
};


nrichRPG.coreWorkout.showQA = function(qa, number, elements, callback) {
  var root1403 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp951 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp874 = mobl.ref(result__);
  
  var nodes1035 = $("<span>");
  root1403.append(nodes1035);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(mobl.ref(qa, 'topic'), tmp874, function(_, callback) {
    var root1404 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp946 = result__;
                       var result__ = tmp946;
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
                             var tmp947 = result__;
                             if(callback && callback.apply) callback(); return;
                           });
                         }
                       }
                     });
                   };
    var tmp873 = mobl.ref(result__);
    
    var nodes1036 = $("<span>");
    root1404.append(nodes1036);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp873, function(_, callback) {
      var root1405 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root1405); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1036;
      nodes1036 = node.contents();
      oldNodes.replaceWith(nodes1036);
    }));
    callback(root1404); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1035;
    nodes1035 = node.contents();
    oldNodes.replaceWith(nodes1035);
  }));
  var nodes1037 = $("<span>");
  root1403.append(nodes1037);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1406 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp950 = result__;
                       var result__ = nrichRPG.coreWorkout.removeMathJaxIncidentElements();
                       var result__ = mobl.$("#question-block-" + number.get()).children("span:first").html();
                       qa.get().questionHtml = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp877 = mobl.ref(result__);
    
    var nodes1038 = $("<span>");
    root1406.append(nodes1038);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp877, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root1407 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + number.get() + ". ";
      var tmp875 = mobl.ref(result__);
      subs__.addSub(number.addEventListener('change', function() {
        tmp875.set("Q" + number.get() + ". ");
      }));
      
      var nodes1039 = $("<span>");
      root1407.append(nodes1039);
      subs__.addSub((mobl.html)(tmp875, function(_, callback) {
        var root1408 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1408); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1039;
        nodes1039 = node.contents();
        oldNodes.replaceWith(nodes1039);
      }));
      
      var node518 = $("<span>");
      
      var ref537 = mobl.ref("question-block-" + number.get());
      if(ref537.get() !== null) {
        node518.attr('id', ref537.get());
        subs__.addSub(ref537.addEventListener('change', function(_, ref, val) {
          node518.attr('id', val);
        }));
        subs__.addSub(number.addEventListener('change', function() {
          node518.attr('id', "question-block-" + number.get());
        }));
        
      }
      subs__.addSub(ref537.rebind());
      
      var result__ = plot.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml;
      var tmp876 = mobl.ref(result__);
      subs__.addSub(mobl.ref(qa, 'question').addEventListener('change', function() {
        tmp876.set(plot.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml);
      }));
      subs__.addSub(mobl.ref(qa, 'questionHtml').addEventListener('change', function() {
        tmp876.set(plot.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml);
      }));
      
      var nodes1040 = $("<span>");
      node518.append(nodes1040);
      subs__.addSub((mobl.html)(tmp876, function(_, callback) {
        var root1409 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root1409); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1040;
        nodes1040 = node.contents();
        oldNodes.replaceWith(nodes1040);
      }));
      root1407.append(node518);
      callback(root1407); return subs__;
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1038;
      nodes1038 = node.contents();
      oldNodes.replaceWith(nodes1038);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp949 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp879 = mobl.ref(result__);
    
    var nodes1041 = $("<span>");
    root1406.append(nodes1041);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp879, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root1410 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1042 = $("<span>");
      root1410.append(nodes1042);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root1411 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                           var tmp948 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp878 = mobl.ref(result__);
        
        var nodes1043 = $("<span>");
        root1411.append(nodes1043);
        subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp878, function(_, callback) {
          var root1412 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root1412); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1043;
          nodes1043 = node.contents();
          oldNodes.replaceWith(nodes1043);
        }));
        callback(root1411); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1042;
        nodes1042 = node.contents();
        oldNodes.replaceWith(nodes1042);
      }));
      
      var node519 = $("<span>");
      root1410.append(node519);
      var condSubs124 = new mobl.CompSubscription();
      subs__.addSub(condSubs124);
      var oldValue124;
      var renderCond124 = function() {
        var value512 = qa.get().done;
        if(oldValue124 === value512) return;
        oldValue124 = value512;
        var subs__ = condSubs124;
        subs__.unsubscribe();
        node519.empty();
        if(value512) {
          var nodes1044 = $("<span>");
          node519.append(nodes1044);
          subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, number, function(_, callback) {
            var root1413 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root1413); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes1044;
            nodes1044 = node.contents();
            oldNodes.replaceWith(nodes1044);
          }));
          
          
        } else {
          
        }
      };
      renderCond124();
      subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
        renderCond124();
      }));
      
      callback(root1410); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1041;
      nodes1041 = node.contents();
      oldNodes.replaceWith(nodes1041);
    }));
    callback(root1406); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1037;
    nodes1037 = node.contents();
    oldNodes.replaceWith(nodes1037);
  }));
  callback(root1403); return subs__;
  
  
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
  qas.list(function(coll617) {
    coll617 = coll617.reverse();
    function processOne35() {
      var item;
      item = coll617.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll617.length > 0) processOne35(); else rest35();
      
    }
    function rest35() {
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
    if(coll617.length > 0) processOne35(); else rest35();
  });
  
};

nrichRPG.coreWorkout.makeQAStar = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll618) {
    coll618 = coll618.reverse();
    function processOne36() {
      var item;
      item = coll618.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll618.length > 0) processOne36(); else rest36();
      
    }
    function rest36() {
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
    if(coll618.length > 0) processOne36(); else rest36();
  });
  
};

nrichRPG.coreWorkout.makeQAStats = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll619) {
    coll619 = coll619.reverse();
    function processOne37() {
      var item;
      item = coll619.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll619.length > 0) processOne37(); else rest37();
      
    }
    function rest37() {
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
    if(coll619.length > 0) processOne37(); else rest37();
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