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
    var tmp5479 = result__;
    var result__ = tmp5479;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp5480 = result__;
      var result__ = tmp5480;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicId, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll3878) {
    coll3878 = coll3878.reverse();
    function processOne248() {
      var i;
      i = coll3878.pop();
      nrichRPG.coreWorkout.makeQA(topicId, function(result__) {
        var tmp5481 = result__;
        
        if(coll3878.length > 0) processOne248(); else rest248();
        
      });
    }
    function rest248() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll3878.length > 0) processOne248(); else rest248();
  });
  
};

nrichRPG.coreWorkout.randomQStar = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll3879) {
    coll3879 = coll3879.reverse();
    function processOne249() {
      var i;
      i = coll3879.pop();
      var result__ = mobl.Math.floor(13 * mobl.Math.random());
      var r = result__;
      var result__ = "F" + (1 + r);
      var tid = result__;
      var result__ = tid == "F3";
      if(result__) {
        var result__ = "F3a";
        tid = result__;
        nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
          var tmp5482 = result__;
          
          if(coll3879.length > 0) processOne249(); else rest249();
          
        });
      } else {
        {
          nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
            var tmp5482 = result__;
            
            if(coll3879.length > 0) processOne249(); else rest249();
            
          });
        }
      }
    }
    function rest249() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll3879.length > 0) processOne249(); else rest249();
  });
  
};

nrichRPG.coreWorkout.randomQStats = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll3880) {
    coll3880 = coll3880.reverse();
    function processOne250() {
      var i;
      i = coll3880.pop();
      var result__ = mobl.Math.floor(6 * mobl.Math.random());
      var r = result__;
      var result__ = "S" + (1 + r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
        var tmp5483 = result__;
        
        if(coll3880.length > 0) processOne250(); else rest250();
        
      });
    }
    function rest250() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll3880.length > 0) processOne250(); else rest250();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root7939 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes5922 = $("<span>");
  root7939.append(nodes5922);
  subs__.addSub((ui.group)(function(_, callback) {
    var root7940 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp5491 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5385 = mobl.ref(result__);
    
    var nodes5923 = $("<span>");
    root7940.append(nodes5923);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5385, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7941 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes5924 = $("<span>");
      root7941.append(nodes5924);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7942 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7942); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes5924;
        nodes5924 = node.contents();
        oldNodes.replaceWith(nodes5924);
      }));
      callback(root7941); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes5923;
      nodes5923 = node.contents();
      oldNodes.replaceWith(nodes5923);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp5490 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5386 = mobl.ref(result__);
    
    var nodes5925 = $("<span>");
    root7940.append(nodes5925);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5386, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7943 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes5926 = $("<span>");
      root7943.append(nodes5926);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7944 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7944); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes5926;
        nodes5926 = node.contents();
        oldNodes.replaceWith(nodes5926);
      }));
      callback(root7943); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes5925;
      nodes5925 = node.contents();
      oldNodes.replaceWith(nodes5925);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp5489 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5387 = mobl.ref(result__);
    
    var nodes5927 = $("<span>");
    root7940.append(nodes5927);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5387, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7945 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes5928 = $("<span>");
      root7945.append(nodes5928);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7946 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7946); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes5928;
        nodes5928 = node.contents();
        oldNodes.replaceWith(nodes5928);
      }));
      callback(root7945); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes5927;
      nodes5927 = node.contents();
      oldNodes.replaceWith(nodes5927);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp5488 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5388 = mobl.ref(result__);
    
    var nodes5929 = $("<span>");
    root7940.append(nodes5929);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5388, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7947 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes5930 = $("<span>");
      root7947.append(nodes5930);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7948 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7948); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes5930;
        nodes5930 = node.contents();
        oldNodes.replaceWith(nodes5930);
      }));
      callback(root7947); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes5929;
      nodes5929 = node.contents();
      oldNodes.replaceWith(nodes5929);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp5487 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5389 = mobl.ref(result__);
    
    var nodes5931 = $("<span>");
    root7940.append(nodes5931);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5389, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7949 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes5932 = $("<span>");
      root7949.append(nodes5932);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7950 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7950); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes5932;
        nodes5932 = node.contents();
        oldNodes.replaceWith(nodes5932);
      }));
      callback(root7949); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes5931;
      nodes5931 = node.contents();
      oldNodes.replaceWith(nodes5931);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp5486 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5390 = mobl.ref(result__);
    
    var nodes5933 = $("<span>");
    root7940.append(nodes5933);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5390, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7951 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes5934 = $("<span>");
      root7951.append(nodes5934);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7952 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7952); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes5934;
        nodes5934 = node.contents();
        oldNodes.replaceWith(nodes5934);
      }));
      callback(root7951); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes5933;
      nodes5933 = node.contents();
      oldNodes.replaceWith(nodes5933);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp5485 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5391 = mobl.ref(result__);
    
    var nodes5935 = $("<span>");
    root7940.append(nodes5935);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5391, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7953 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes5936 = $("<span>");
      root7953.append(nodes5936);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7954 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7954); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes5936;
        nodes5936 = node.contents();
        oldNodes.replaceWith(nodes5936);
      }));
      callback(root7953); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes5935;
      nodes5935 = node.contents();
      oldNodes.replaceWith(nodes5935);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp5484 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5392 = mobl.ref(result__);
    
    var nodes5937 = $("<span>");
    root7940.append(nodes5937);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5392, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7955 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes5938 = $("<span>");
      root7955.append(nodes5938);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7956 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7956); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes5938;
        nodes5938 = node.contents();
        oldNodes.replaceWith(nodes5938);
      }));
      callback(root7955); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes5937;
      nodes5937 = node.contents();
      oldNodes.replaceWith(nodes5937);
    }));
    callback(root7940); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes5922;
    nodes5922 = node.contents();
    oldNodes.replaceWith(nodes5922);
  }));
  callback(root7939); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root7957 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes5939 = $("<span>");
  root7957.append(nodes5939);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root7958 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp5394 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp5393 = mobl.ref(result__);
    
    var nodes5940 = $("<span>");
    root7958.append(nodes5940);
    subs__.addSub((ui.backButton)(tmp5393, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp5394, function(_, callback) {
      var root7959 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7959); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5940;
      nodes5940 = node.contents();
      oldNodes.replaceWith(nodes5940);
    }));
    callback(root7958); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes5939;
    nodes5939 = node.contents();
    oldNodes.replaceWith(nodes5939);
  }));
  var nodes5941 = $("<span>");
  root7957.append(nodes5941);
  subs__.addSub((ui.group)(function(_, callback) {
    var root7960 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(10, function(result__) {
                       var tmp5499 = result__;
                       var result__ = mobl.alert("Quadratic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5395 = mobl.ref(result__);
    
    var nodes5942 = $("<span>");
    root7960.append(nodes5942);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5395, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7961 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes5943 = $("<span>");
      root7961.append(nodes5943);
      subs__.addSub((mobl.label)(mobl.ref("+Quadratic equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7962 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7962); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes5943;
        nodes5943 = node.contents();
        oldNodes.replaceWith(nodes5943);
      }));
      callback(root7961); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes5942;
      nodes5942 = node.contents();
      oldNodes.replaceWith(nodes5942);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(11, function(result__) {
                       var tmp5498 = result__;
                       var result__ = mobl.alert("Completing the Square Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5396 = mobl.ref(result__);
    
    var nodes5944 = $("<span>");
    root7960.append(nodes5944);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5396, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7963 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes5945 = $("<span>");
      root7963.append(nodes5945);
      subs__.addSub((mobl.label)(mobl.ref("+Completing the square"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7964 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7964); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes5945;
        nodes5945 = node.contents();
        oldNodes.replaceWith(nodes5945);
      }));
      callback(root7963); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes5944;
      nodes5944 = node.contents();
      oldNodes.replaceWith(nodes5944);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(7, function(result__) {
                       var tmp5497 = result__;
                       var result__ = mobl.alert("Ineqalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5397 = mobl.ref(result__);
    
    var nodes5946 = $("<span>");
    root7960.append(nodes5946);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5397, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7965 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes5947 = $("<span>");
      root7965.append(nodes5947);
      subs__.addSub((mobl.label)(mobl.ref("+Inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7966 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7966); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes5947;
        nodes5947 = node.contents();
        oldNodes.replaceWith(nodes5947);
      }));
      callback(root7965); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes5946;
      nodes5946 = node.contents();
      oldNodes.replaceWith(nodes5946);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(9, function(result__) {
                       var tmp5496 = result__;
                       var result__ = mobl.alert("Factor theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5398 = mobl.ref(result__);
    
    var nodes5948 = $("<span>");
    root7960.append(nodes5948);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5398, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7967 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes5949 = $("<span>");
      root7967.append(nodes5949);
      subs__.addSub((mobl.label)(mobl.ref("+Factor theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7968 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7968); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes5949;
        nodes5949 = node.contents();
        oldNodes.replaceWith(nodes5949);
      }));
      callback(root7967); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes5948;
      nodes5948 = node.contents();
      oldNodes.replaceWith(nodes5948);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(1, function(result__) {
                       var tmp5495 = result__;
                       var result__ = mobl.alert("Partial fraction Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5399 = mobl.ref(result__);
    
    var nodes5950 = $("<span>");
    root7960.append(nodes5950);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5399, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7969 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes5951 = $("<span>");
      root7969.append(nodes5951);
      subs__.addSub((mobl.label)(mobl.ref("+Partial fractions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7970 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7970); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes5951;
        nodes5951 = node.contents();
        oldNodes.replaceWith(nodes5951);
      }));
      callback(root7969); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes5950;
      nodes5950 = node.contents();
      oldNodes.replaceWith(nodes5950);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(30, function(result__) {
                       var tmp5494 = result__;
                       var result__ = mobl.alert("Powers Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5400 = mobl.ref(result__);
    
    var nodes5952 = $("<span>");
    root7960.append(nodes5952);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5400, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7971 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes5953 = $("<span>");
      root7971.append(nodes5953);
      subs__.addSub((mobl.label)(mobl.ref("+Powers"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7972 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7972); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes5953;
        nodes5953 = node.contents();
        oldNodes.replaceWith(nodes5953);
      }));
      callback(root7971); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes5952;
      nodes5952 = node.contents();
      oldNodes.replaceWith(nodes5952);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(13, function(result__) {
                       var tmp5493 = result__;
                       var result__ = mobl.alert("Logarithm Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5401 = mobl.ref(result__);
    
    var nodes5954 = $("<span>");
    root7960.append(nodes5954);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5401, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7973 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes5955 = $("<span>");
      root7973.append(nodes5955);
      subs__.addSub((mobl.label)(mobl.ref("+Logarithms"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7974 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7974); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes5955;
        nodes5955 = node.contents();
        oldNodes.replaceWith(nodes5955);
      }));
      callback(root7973); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes5954;
      nodes5954 = node.contents();
      oldNodes.replaceWith(nodes5954);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(17, function(result__) {
                       var tmp5492 = result__;
                       var result__ = mobl.alert("Trig equation Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5402 = mobl.ref(result__);
    
    var nodes5956 = $("<span>");
    root7960.append(nodes5956);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5402, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7975 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes5957 = $("<span>");
      root7975.append(nodes5957);
      subs__.addSub((mobl.label)(mobl.ref("+Trig equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7976 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7976); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes5957;
        nodes5957 = node.contents();
        oldNodes.replaceWith(nodes5957);
      }));
      callback(root7975); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes5956;
      nodes5956 = node.contents();
      oldNodes.replaceWith(nodes5956);
    }));
    callback(root7960); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes5941;
    nodes5941 = node.contents();
    oldNodes.replaceWith(nodes5941);
  }));
  callback(root7957); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root7977 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes5958 = $("<span>");
  root7977.append(nodes5958);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root7978 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp5404 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp5403 = mobl.ref(result__);
    
    var nodes5959 = $("<span>");
    root7978.append(nodes5959);
    subs__.addSub((ui.backButton)(tmp5403, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp5404, function(_, callback) {
      var root7979 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7979); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5959;
      nodes5959 = node.contents();
      oldNodes.replaceWith(nodes5959);
    }));
    callback(root7978); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes5958;
    nodes5958 = node.contents();
    oldNodes.replaceWith(nodes5958);
  }));
  var nodes5960 = $("<span>");
  root7977.append(nodes5960);
  subs__.addSub((ui.group)(function(_, callback) {
    var root7980 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(24, function(result__) {
                       var tmp5504 = result__;
                       var result__ = mobl.alert("Modulus Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5405 = mobl.ref(result__);
    
    var nodes5961 = $("<span>");
    root7980.append(nodes5961);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5405, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7981 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes5962 = $("<span>");
      root7981.append(nodes5962);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus function"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7982 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7982); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes5962;
        nodes5962 = node.contents();
        oldNodes.replaceWith(nodes5962);
      }));
      callback(root7981); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes5961;
      nodes5961 = node.contents();
      oldNodes.replaceWith(nodes5961);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(25, function(result__) {
                       var tmp5503 = result__;
                       var result__ = mobl.alert("Transformations of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5406 = mobl.ref(result__);
    
    var nodes5963 = $("<span>");
    root7980.append(nodes5963);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5406, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7983 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes5964 = $("<span>");
      root7983.append(nodes5964);
      subs__.addSub((mobl.label)(mobl.ref("+Transformations of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7984 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7984); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes5964;
        nodes5964 = node.contents();
        oldNodes.replaceWith(nodes5964);
      }));
      callback(root7983); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes5963;
      nodes5963 = node.contents();
      oldNodes.replaceWith(nodes5963);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(26, function(result__) {
                       var tmp5502 = result__;
                       var result__ = mobl.alert("Composition of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5407 = mobl.ref(result__);
    
    var nodes5965 = $("<span>");
    root7980.append(nodes5965);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5407, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7985 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes5966 = $("<span>");
      root7985.append(nodes5966);
      subs__.addSub((mobl.label)(mobl.ref("+Composition of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7986 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7986); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes5966;
        nodes5966 = node.contents();
        oldNodes.replaceWith(nodes5966);
      }));
      callback(root7985); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes5965;
      nodes5965 = node.contents();
      oldNodes.replaceWith(nodes5965);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(270, function(result__) {
                       var tmp5501 = result__;
                       var result__ = mobl.alert("Implicit functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5408 = mobl.ref(result__);
    
    var nodes5967 = $("<span>");
    root7980.append(nodes5967);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5408, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7987 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes5968 = $("<span>");
      root7987.append(nodes5968);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7988 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7988); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes5968;
        nodes5968 = node.contents();
        oldNodes.replaceWith(nodes5968);
      }));
      callback(root7987); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes5967;
      nodes5967 = node.contents();
      oldNodes.replaceWith(nodes5967);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(27, function(result__) {
                       var tmp5500 = result__;
                       var result__ = mobl.alert("Parametric functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5409 = mobl.ref(result__);
    
    var nodes5969 = $("<span>");
    root7980.append(nodes5969);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5409, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7989 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes5970 = $("<span>");
      root7989.append(nodes5970);
      subs__.addSub((mobl.label)(mobl.ref("+Parametric functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7990 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7990); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes5970;
        nodes5970 = node.contents();
        oldNodes.replaceWith(nodes5970);
      }));
      callback(root7989); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes5969;
      nodes5969 = node.contents();
      oldNodes.replaceWith(nodes5969);
    }));
    callback(root7980); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes5960;
    nodes5960 = node.contents();
    oldNodes.replaceWith(nodes5960);
  }));
  callback(root7977); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root7991 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes5971 = $("<span>");
  root7991.append(nodes5971);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root7992 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp5411 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp5410 = mobl.ref(result__);
    
    var nodes5972 = $("<span>");
    root7992.append(nodes5972);
    subs__.addSub((ui.backButton)(tmp5410, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp5411, function(_, callback) {
      var root7993 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7993); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5972;
      nodes5972 = node.contents();
      oldNodes.replaceWith(nodes5972);
    }));
    callback(root7992); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes5971;
    nodes5971 = node.contents();
    oldNodes.replaceWith(nodes5971);
  }));
  var nodes5973 = $("<span>");
  root7991.append(nodes5973);
  subs__.addSub((ui.group)(function(_, callback) {
    var root7994 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(15, function(result__) {
                       var tmp5507 = result__;
                       var result__ = mobl.alert("Triangles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5412 = mobl.ref(result__);
    
    var nodes5974 = $("<span>");
    root7994.append(nodes5974);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5412, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7995 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes5975 = $("<span>");
      root7995.append(nodes5975);
      subs__.addSub((mobl.label)(mobl.ref("+Triangles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7996 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7996); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes5975;
        nodes5975 = node.contents();
        oldNodes.replaceWith(nodes5975);
      }));
      callback(root7995); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes5974;
      nodes5974 = node.contents();
      oldNodes.replaceWith(nodes5974);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(16, function(result__) {
                       var tmp5506 = result__;
                       var result__ = mobl.alert("Circles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5413 = mobl.ref(result__);
    
    var nodes5976 = $("<span>");
    root7994.append(nodes5976);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5413, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7997 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes5977 = $("<span>");
      root7997.append(nodes5977);
      subs__.addSub((mobl.label)(mobl.ref("+Circles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7998 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7998); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes5977;
        nodes5977 = node.contents();
        oldNodes.replaceWith(nodes5977);
      }));
      callback(root7997); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes5976;
      nodes5976 = node.contents();
      oldNodes.replaceWith(nodes5976);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(6, function(result__) {
                       var tmp5505 = result__;
                       var result__ = mobl.alert("3D lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5414 = mobl.ref(result__);
    
    var nodes5978 = $("<span>");
    root7994.append(nodes5978);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5414, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7999 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes5979 = $("<span>");
      root7999.append(nodes5979);
      subs__.addSub((mobl.label)(mobl.ref("+ 3D lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8000 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8000); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes5979;
        nodes5979 = node.contents();
        oldNodes.replaceWith(nodes5979);
      }));
      callback(root7999); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes5978;
      nodes5978 = node.contents();
      oldNodes.replaceWith(nodes5978);
    }));
    callback(root7994); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes5973;
    nodes5973 = node.contents();
    oldNodes.replaceWith(nodes5973);
  }));
  callback(root7991); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root8001 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes5980 = $("<span>");
  root8001.append(nodes5980);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root8002 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp5416 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp5415 = mobl.ref(result__);
    
    var nodes5981 = $("<span>");
    root8002.append(nodes5981);
    subs__.addSub((ui.backButton)(tmp5415, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp5416, function(_, callback) {
      var root8003 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8003); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5981;
      nodes5981 = node.contents();
      oldNodes.replaceWith(nodes5981);
    }));
    callback(root8002); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes5980;
    nodes5980 = node.contents();
    oldNodes.replaceWith(nodes5980);
  }));
  var nodes5982 = $("<span>");
  root8001.append(nodes5982);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8004 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(8, function(result__) {
                       var tmp5511 = result__;
                       var result__ = mobl.alert("Arithmetic Progressions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5417 = mobl.ref(result__);
    
    var nodes5983 = $("<span>");
    root8004.append(nodes5983);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5417, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8005 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes5984 = $("<span>");
      root8005.append(nodes5984);
      subs__.addSub((mobl.label)(mobl.ref("+Arithmetic progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8006 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8006); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes5984;
        nodes5984 = node.contents();
        oldNodes.replaceWith(nodes5984);
      }));
      callback(root8005); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes5983;
      nodes5983 = node.contents();
      oldNodes.replaceWith(nodes5983);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(12, function(result__) {
                       var tmp5510 = result__;
                       var result__ = mobl.alert("Binomial Expansion Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5418 = mobl.ref(result__);
    
    var nodes5985 = $("<span>");
    root8004.append(nodes5985);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5418, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8007 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes5986 = $("<span>");
      root8007.append(nodes5986);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial expansion"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8008 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8008); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes5986;
        nodes5986 = node.contents();
        oldNodes.replaceWith(nodes5986);
      }));
      callback(root8007); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes5985;
      nodes5985 = node.contents();
      oldNodes.replaceWith(nodes5985);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(23, function(result__) {
                       var tmp5509 = result__;
                       var result__ = mobl.alert("Geometric Progression Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5419 = mobl.ref(result__);
    
    var nodes5987 = $("<span>");
    root8004.append(nodes5987);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5419, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8009 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes5988 = $("<span>");
      root8009.append(nodes5988);
      subs__.addSub((mobl.label)(mobl.ref("+Geometric progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8010 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8010); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes5988;
        nodes5988 = node.contents();
        oldNodes.replaceWith(nodes5988);
      }));
      callback(root8009); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes5987;
      nodes5987 = node.contents();
      oldNodes.replaceWith(nodes5987);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(2, function(result__) {
                       var tmp5508 = result__;
                       var result__ = mobl.alert("Binomial theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5420 = mobl.ref(result__);
    
    var nodes5989 = $("<span>");
    root8004.append(nodes5989);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5420, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8011 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes5990 = $("<span>");
      root8011.append(nodes5990);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8012 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8012); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes5990;
        nodes5990 = node.contents();
        oldNodes.replaceWith(nodes5990);
      }));
      callback(root8011); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes5989;
      nodes5989 = node.contents();
      oldNodes.replaceWith(nodes5989);
    }));
    callback(root8004); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes5982;
    nodes5982 = node.contents();
    oldNodes.replaceWith(nodes5982);
  }));
  callback(root8001); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root8013 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes5991 = $("<span>");
  root8013.append(nodes5991);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root8014 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp5422 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp5421 = mobl.ref(result__);
    
    var nodes5992 = $("<span>");
    root8014.append(nodes5992);
    subs__.addSub((ui.backButton)(tmp5421, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp5422, function(_, callback) {
      var root8015 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8015); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5992;
      nodes5992 = node.contents();
      oldNodes.replaceWith(nodes5992);
    }));
    callback(root8014); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes5991;
    nodes5991 = node.contents();
    oldNodes.replaceWith(nodes5991);
  }));
  var nodes5993 = $("<span>");
  root8013.append(nodes5993);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8016 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(5, function(result__) {
                       var tmp5513 = result__;
                       var result__ = mobl.alert("Scalar product Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5423 = mobl.ref(result__);
    
    var nodes5994 = $("<span>");
    root8016.append(nodes5994);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5423, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8017 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes5995 = $("<span>");
      root8017.append(nodes5995);
      subs__.addSub((mobl.label)(mobl.ref("+Scalar products"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8018 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8018); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes5995;
        nodes5995 = node.contents();
        oldNodes.replaceWith(nodes5995);
      }));
      callback(root8017); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes5994;
      nodes5994 = node.contents();
      oldNodes.replaceWith(nodes5994);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(18, function(result__) {
                       var tmp5512 = result__;
                       var result__ = mobl.alert("Vector equation of lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5424 = mobl.ref(result__);
    
    var nodes5996 = $("<span>");
    root8016.append(nodes5996);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5424, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8019 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes5997 = $("<span>");
      root8019.append(nodes5997);
      subs__.addSub((mobl.label)(mobl.ref("+Vector equation of lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8020 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8020); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes5997;
        nodes5997 = node.contents();
        oldNodes.replaceWith(nodes5997);
      }));
      callback(root8019); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes5996;
      nodes5996 = node.contents();
      oldNodes.replaceWith(nodes5996);
    }));
    callback(root8016); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes5993;
    nodes5993 = node.contents();
    oldNodes.replaceWith(nodes5993);
  }));
  callback(root8013); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root8021 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes5998 = $("<span>");
  root8021.append(nodes5998);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root8022 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp5426 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp5425 = mobl.ref(result__);
    
    var nodes5999 = $("<span>");
    root8022.append(nodes5999);
    subs__.addSub((ui.backButton)(tmp5425, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp5426, function(_, callback) {
      var root8023 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8023); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5999;
      nodes5999 = node.contents();
      oldNodes.replaceWith(nodes5999);
    }));
    callback(root8022); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes5998;
    nodes5998 = node.contents();
    oldNodes.replaceWith(nodes5998);
  }));
  var nodes6000 = $("<span>");
  root8021.append(nodes6000);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8024 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(14, function(result__) {
                       var tmp5518 = result__;
                       var result__ = mobl.alert("Stationary points Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5427 = mobl.ref(result__);
    
    var nodes6001 = $("<span>");
    root8024.append(nodes6001);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5427, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8025 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6002 = $("<span>");
      root8025.append(nodes6002);
      subs__.addSub((mobl.label)(mobl.ref("+Stationary points"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8026 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8026); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6002;
        nodes6002 = node.contents();
        oldNodes.replaceWith(nodes6002);
      }));
      callback(root8025); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6001;
      nodes6001 = node.contents();
      oldNodes.replaceWith(nodes6001);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(20, function(result__) {
                       var tmp5517 = result__;
                       var result__ = mobl.alert("Chain rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5428 = mobl.ref(result__);
    
    var nodes6003 = $("<span>");
    root8024.append(nodes6003);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5428, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8027 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6004 = $("<span>");
      root8027.append(nodes6004);
      subs__.addSub((mobl.label)(mobl.ref("+Chain rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8028 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8028); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6004;
        nodes6004 = node.contents();
        oldNodes.replaceWith(nodes6004);
      }));
      callback(root8027); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6003;
      nodes6003 = node.contents();
      oldNodes.replaceWith(nodes6003);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(21, function(result__) {
                       var tmp5516 = result__;
                       var result__ = mobl.alert("Product rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5429 = mobl.ref(result__);
    
    var nodes6005 = $("<span>");
    root8024.append(nodes6005);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5429, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8029 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6006 = $("<span>");
      root8029.append(nodes6006);
      subs__.addSub((mobl.label)(mobl.ref("+Product rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8030 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8030); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6006;
        nodes6006 = node.contents();
        oldNodes.replaceWith(nodes6006);
      }));
      callback(root8029); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6005;
      nodes6005 = node.contents();
      oldNodes.replaceWith(nodes6005);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(22, function(result__) {
                       var tmp5515 = result__;
                       var result__ = mobl.alert("Quotient rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5430 = mobl.ref(result__);
    
    var nodes6007 = $("<span>");
    root8024.append(nodes6007);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5430, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8031 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6008 = $("<span>");
      root8031.append(nodes6008);
      subs__.addSub((mobl.label)(mobl.ref("+Quotient rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8032 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8032); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6008;
        nodes6008 = node.contents();
        oldNodes.replaceWith(nodes6008);
      }));
      callback(root8031); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6007;
      nodes6007 = node.contents();
      oldNodes.replaceWith(nodes6007);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(19, function(result__) {
                       var tmp5514 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5431 = mobl.ref(result__);
    
    var nodes6009 = $("<span>");
    root8024.append(nodes6009);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5431, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8033 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6010 = $("<span>");
      root8033.append(nodes6010);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8034 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8034); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6010;
        nodes6010 = node.contents();
        oldNodes.replaceWith(nodes6010);
      }));
      callback(root8033); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6009;
      nodes6009 = node.contents();
      oldNodes.replaceWith(nodes6009);
    }));
    callback(root8024); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6000;
    nodes6000 = node.contents();
    oldNodes.replaceWith(nodes6000);
  }));
  callback(root8021); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root8035 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes6011 = $("<span>");
  root8035.append(nodes6011);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root8036 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp5433 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp5432 = mobl.ref(result__);
    
    var nodes6012 = $("<span>");
    root8036.append(nodes6012);
    subs__.addSub((ui.backButton)(tmp5432, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp5433, function(_, callback) {
      var root8037 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8037); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6012;
      nodes6012 = node.contents();
      oldNodes.replaceWith(nodes6012);
    }));
    callback(root8036); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6011;
    nodes6011 = node.contents();
    oldNodes.replaceWith(nodes6011);
  }));
  var nodes6013 = $("<span>");
  root8035.append(nodes6013);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8038 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(28, function(result__) {
                       var tmp5521 = result__;
                       var result__ = mobl.alert("Integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5434 = mobl.ref(result__);
    
    var nodes6014 = $("<span>");
    root8038.append(nodes6014);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5434, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8039 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6015 = $("<span>");
      root8039.append(nodes6015);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8040 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8040); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6015;
        nodes6015 = node.contents();
        oldNodes.replaceWith(nodes6015);
      }));
      callback(root8039); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6014;
      nodes6014 = node.contents();
      oldNodes.replaceWith(nodes6014);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(3, function(result__) {
                       var tmp5520 = result__;
                       var result__ = mobl.alert("Polynomial integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5435 = mobl.ref(result__);
    
    var nodes6016 = $("<span>");
    root8038.append(nodes6016);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5435, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8041 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6017 = $("<span>");
      root8041.append(nodes6017);
      subs__.addSub((mobl.label)(mobl.ref("+Polynomial integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8042 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8042); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6017;
        nodes6017 = node.contents();
        oldNodes.replaceWith(nodes6017);
      }));
      callback(root8041); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6016;
      nodes6016 = node.contents();
      oldNodes.replaceWith(nodes6016);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(4, function(result__) {
                       var tmp5519 = result__;
                       var result__ = mobl.alert("Trig integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5436 = mobl.ref(result__);
    
    var nodes6018 = $("<span>");
    root8038.append(nodes6018);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5436, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8043 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6019 = $("<span>");
      root8043.append(nodes6019);
      subs__.addSub((mobl.label)(mobl.ref("+Trig integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8044 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8044); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6019;
        nodes6019 = node.contents();
        oldNodes.replaceWith(nodes6019);
      }));
      callback(root8043); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6018;
      nodes6018 = node.contents();
      oldNodes.replaceWith(nodes6018);
    }));
    callback(root8038); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6013;
    nodes6013 = node.contents();
    oldNodes.replaceWith(nodes6013);
  }));
  callback(root8035); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root8045 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes6020 = $("<span>");
  root8045.append(nodes6020);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root8046 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp5438 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp5437 = mobl.ref(result__);
    
    var nodes6021 = $("<span>");
    root8046.append(nodes6021);
    subs__.addSub((ui.backButton)(tmp5437, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp5438, function(_, callback) {
      var root8047 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8047); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6021;
      nodes6021 = node.contents();
      oldNodes.replaceWith(nodes6021);
    }));
    callback(root8046); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6020;
    nodes6020 = node.contents();
    oldNodes.replaceWith(nodes6020);
  }));
  var nodes6022 = $("<span>");
  root8045.append(nodes6022);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8048 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(29, function(result__) {
                       var tmp5522 = result__;
                       var result__ = mobl.alert("Differential equations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5439 = mobl.ref(result__);
    
    var nodes6023 = $("<span>");
    root8048.append(nodes6023);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5439, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8049 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6024 = $("<span>");
      root8049.append(nodes6024);
      subs__.addSub((mobl.label)(mobl.ref("+Diff equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8050 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8050); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6024;
        nodes6024 = node.contents();
        oldNodes.replaceWith(nodes6024);
      }));
      callback(root8049); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6023;
      nodes6023 = node.contents();
      oldNodes.replaceWith(nodes6023);
    }));
    callback(root8048); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6022;
    nodes6022 = node.contents();
    oldNodes.replaceWith(nodes6022);
  }));
  callback(root8045); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root8051 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes6025 = $("<span>");
  root8051.append(nodes6025);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8052 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F1", function(result__) {
                       var tmp5535 = result__;
                       var result__ = mobl.alert("Complex arithmetic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5440 = mobl.ref(result__);
    
    var nodes6026 = $("<span>");
    root8052.append(nodes6026);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5440, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8053 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6027 = $("<span>");
      root8053.append(nodes6027);
      subs__.addSub((mobl.label)(mobl.ref("+Complex arithmetic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8054 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8054); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6027;
        nodes6027 = node.contents();
        oldNodes.replaceWith(nodes6027);
      }));
      callback(root8053); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6026;
      nodes6026 = node.contents();
      oldNodes.replaceWith(nodes6026);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F2", function(result__) {
                       var tmp5534 = result__;
                       var result__ = mobl.alert("Modulus argument Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5441 = mobl.ref(result__);
    
    var nodes6028 = $("<span>");
    root8052.append(nodes6028);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5441, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8055 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6029 = $("<span>");
      root8055.append(nodes6029);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus argument"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8056 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8056); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6029;
        nodes6029 = node.contents();
        oldNodes.replaceWith(nodes6029);
      }));
      callback(root8055); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6028;
      nodes6028 = node.contents();
      oldNodes.replaceWith(nodes6028);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F3a", function(result__) {
                       var tmp5533 = result__;
                       var result__ = mobl.alert("2nd order DE Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5442 = mobl.ref(result__);
    
    var nodes6030 = $("<span>");
    root8052.append(nodes6030);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5442, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8057 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6031 = $("<span>");
      root8057.append(nodes6031);
      subs__.addSub((mobl.label)(mobl.ref("+2nd order DEs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8058 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8058); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6031;
        nodes6031 = node.contents();
        oldNodes.replaceWith(nodes6031);
      }));
      callback(root8057); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6030;
      nodes6030 = node.contents();
      oldNodes.replaceWith(nodes6030);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F4", function(result__) {
                       var tmp5532 = result__;
                       var result__ = mobl.alert("Rank 2 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5443 = mobl.ref(result__);
    
    var nodes6032 = $("<span>");
    root8052.append(nodes6032);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5443, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8059 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6033 = $("<span>");
      root8059.append(nodes6033);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 2 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8060 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8060); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6033;
        nodes6033 = node.contents();
        oldNodes.replaceWith(nodes6033);
      }));
      callback(root8059); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6032;
      nodes6032 = node.contents();
      oldNodes.replaceWith(nodes6032);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F5", function(result__) {
                       var tmp5531 = result__;
                       var result__ = mobl.alert("Taylor Series Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5444 = mobl.ref(result__);
    
    var nodes6034 = $("<span>");
    root8052.append(nodes6034);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5444, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8061 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6035 = $("<span>");
      root8061.append(nodes6035);
      subs__.addSub((mobl.label)(mobl.ref("+Taylor Series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8062 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8062); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6035;
        nodes6035 = node.contents();
        oldNodes.replaceWith(nodes6035);
      }));
      callback(root8061); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6034;
      nodes6034 = node.contents();
      oldNodes.replaceWith(nodes6034);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F6", function(result__) {
                       var tmp5530 = result__;
                       var result__ = mobl.alert("Polar Coordinates Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5445 = mobl.ref(result__);
    
    var nodes6036 = $("<span>");
    root8052.append(nodes6036);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5445, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8063 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6037 = $("<span>");
      root8063.append(nodes6037);
      subs__.addSub((mobl.label)(mobl.ref("+Polar Coordinates"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8064 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8064); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6037;
        nodes6037 = node.contents();
        oldNodes.replaceWith(nodes6037);
      }));
      callback(root8063); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6036;
      nodes6036 = node.contents();
      oldNodes.replaceWith(nodes6036);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F7", function(result__) {
                       var tmp5529 = result__;
                       var result__ = mobl.alert("Rank 3 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5446 = mobl.ref(result__);
    
    var nodes6038 = $("<span>");
    root8052.append(nodes6038);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5446, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8065 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6039 = $("<span>");
      root8065.append(nodes6039);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 3 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8066 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8066); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6039;
        nodes6039 = node.contents();
        oldNodes.replaceWith(nodes6039);
      }));
      callback(root8065); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6038;
      nodes6038 = node.contents();
      oldNodes.replaceWith(nodes6038);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F8", function(result__) {
                       var tmp5528 = result__;
                       var result__ = mobl.alert("Further vectors added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5447 = mobl.ref(result__);
    
    var nodes6040 = $("<span>");
    root8052.append(nodes6040);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5447, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8067 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6041 = $("<span>");
      root8067.append(nodes6041);
      subs__.addSub((mobl.label)(mobl.ref("+Further vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8068 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8068); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6041;
        nodes6041 = node.contents();
        oldNodes.replaceWith(nodes6041);
      }));
      callback(root8067); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6040;
      nodes6040 = node.contents();
      oldNodes.replaceWith(nodes6040);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F9", function(result__) {
                       var tmp5527 = result__;
                       var result__ = mobl.alert("Newton-Raphson added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5448 = mobl.ref(result__);
    
    var nodes6042 = $("<span>");
    root8052.append(nodes6042);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5448, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8069 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6043 = $("<span>");
      root8069.append(nodes6043);
      subs__.addSub((mobl.label)(mobl.ref("+Newton-Raphson"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8070 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8070); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6043;
        nodes6043 = node.contents();
        oldNodes.replaceWith(nodes6043);
      }));
      callback(root8069); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6042;
      nodes6042 = node.contents();
      oldNodes.replaceWith(nodes6042);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F10", function(result__) {
                       var tmp5526 = result__;
                       var result__ = mobl.alert("Further inequalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5449 = mobl.ref(result__);
    
    var nodes6044 = $("<span>");
    root8052.append(nodes6044);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5449, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8071 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6045 = $("<span>");
      root8071.append(nodes6045);
      subs__.addSub((mobl.label)(mobl.ref("+Further inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8072 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8072); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6045;
        nodes6045 = node.contents();
        oldNodes.replaceWith(nodes6045);
      }));
      callback(root8071); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6044;
      nodes6044 = node.contents();
      oldNodes.replaceWith(nodes6044);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F11", function(result__) {
                       var tmp5525 = result__;
                       var result__ = mobl.alert("Integration by substitution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5450 = mobl.ref(result__);
    
    var nodes6046 = $("<span>");
    root8052.append(nodes6046);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5450, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8073 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6047 = $("<span>");
      root8073.append(nodes6047);
      subs__.addSub((mobl.label)(mobl.ref("+Integration by substitution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8074 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8074); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6047;
        nodes6047 = node.contents();
        oldNodes.replaceWith(nodes6047);
      }));
      callback(root8073); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6046;
      nodes6046 = node.contents();
      oldNodes.replaceWith(nodes6046);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F12", function(result__) {
                       var tmp5524 = result__;
                       var result__ = mobl.alert("Figures of revolution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5451 = mobl.ref(result__);
    
    var nodes6048 = $("<span>");
    root8052.append(nodes6048);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5451, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8075 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6049 = $("<span>");
      root8075.append(nodes6049);
      subs__.addSub((mobl.label)(mobl.ref("+Figures of revolution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8076 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8076); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6049;
        nodes6049 = node.contents();
        oldNodes.replaceWith(nodes6049);
      }));
      callback(root8075); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6048;
      nodes6048 = node.contents();
      oldNodes.replaceWith(nodes6048);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F13", function(result__) {
                       var tmp5523 = result__;
                       var result__ = mobl.alert("Matrix transformations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5452 = mobl.ref(result__);
    
    var nodes6050 = $("<span>");
    root8052.append(nodes6050);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5452, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8077 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6051 = $("<span>");
      root8077.append(nodes6051);
      subs__.addSub((mobl.label)(mobl.ref("+Matrix transformations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8078 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8078); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6051;
        nodes6051 = node.contents();
        oldNodes.replaceWith(nodes6051);
      }));
      callback(root8077); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6050;
      nodes6050 = node.contents();
      oldNodes.replaceWith(nodes6050);
    }));
    callback(root8052); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6025;
    nodes6025 = node.contents();
    oldNodes.replaceWith(nodes6025);
  }));
  callback(root8051); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root8079 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes6052 = $("<span>");
  root8079.append(nodes6052);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8080 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S1", function(result__) {
                       var tmp5541 = result__;
                       var result__ = mobl.alert("Discrete Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5453 = mobl.ref(result__);
    
    var nodes6053 = $("<span>");
    root8080.append(nodes6053);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5453, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8081 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6054 = $("<span>");
      root8081.append(nodes6054);
      subs__.addSub((mobl.label)(mobl.ref("+Discrete Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8082 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8082); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6054;
        nodes6054 = node.contents();
        oldNodes.replaceWith(nodes6054);
      }));
      callback(root8081); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6053;
      nodes6053 = node.contents();
      oldNodes.replaceWith(nodes6053);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S2", function(result__) {
                       var tmp5540 = result__;
                       var result__ = mobl.alert("Continuous Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5454 = mobl.ref(result__);
    
    var nodes6055 = $("<span>");
    root8080.append(nodes6055);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5454, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8083 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6056 = $("<span>");
      root8083.append(nodes6056);
      subs__.addSub((mobl.label)(mobl.ref("+Continuous Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8084 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8084); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6056;
        nodes6056 = node.contents();
        oldNodes.replaceWith(nodes6056);
      }));
      callback(root8083); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6055;
      nodes6055 = node.contents();
      oldNodes.replaceWith(nodes6055);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S3", function(result__) {
                       var tmp5539 = result__;
                       var result__ = mobl.alert("Hypothesis Testing Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5455 = mobl.ref(result__);
    
    var nodes6057 = $("<span>");
    root8080.append(nodes6057);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5455, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8085 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6058 = $("<span>");
      root8085.append(nodes6058);
      subs__.addSub((mobl.label)(mobl.ref("+Hypothesis Testing"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8086 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8086); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6058;
        nodes6058 = node.contents();
        oldNodes.replaceWith(nodes6058);
      }));
      callback(root8085); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6057;
      nodes6057 = node.contents();
      oldNodes.replaceWith(nodes6057);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S4", function(result__) {
                       var tmp5538 = result__;
                       var result__ = mobl.alert("Confidence Intervals Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5456 = mobl.ref(result__);
    
    var nodes6059 = $("<span>");
    root8080.append(nodes6059);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5456, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8087 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6060 = $("<span>");
      root8087.append(nodes6060);
      subs__.addSub((mobl.label)(mobl.ref("+Confidence Intervals"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8088 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8088); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6060;
        nodes6060 = node.contents();
        oldNodes.replaceWith(nodes6060);
      }));
      callback(root8087); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6059;
      nodes6059 = node.contents();
      oldNodes.replaceWith(nodes6059);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S5", function(result__) {
                       var tmp5537 = result__;
                       var result__ = mobl.alert("Chi Squared Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5457 = mobl.ref(result__);
    
    var nodes6061 = $("<span>");
    root8080.append(nodes6061);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5457, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8089 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6062 = $("<span>");
      root8089.append(nodes6062);
      subs__.addSub((mobl.label)(mobl.ref("+Chi Squared"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8090 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8090); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6062;
        nodes6062 = node.contents();
        oldNodes.replaceWith(nodes6062);
      }));
      callback(root8089); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6061;
      nodes6061 = node.contents();
      oldNodes.replaceWith(nodes6061);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S6", function(result__) {
                       var tmp5536 = result__;
                       var result__ = mobl.alert("Product Moment Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5458 = mobl.ref(result__);
    
    var nodes6063 = $("<span>");
    root8080.append(nodes6063);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5458, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8091 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6064 = $("<span>");
      root8091.append(nodes6064);
      subs__.addSub((mobl.label)(mobl.ref("+Product Moments"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8092 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8092); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6064;
        nodes6064 = node.contents();
        oldNodes.replaceWith(nodes6064);
      }));
      callback(root8091); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6063;
      nodes6063 = node.contents();
      oldNodes.replaceWith(nodes6063);
    }));
    callback(root8080); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6052;
    nodes6052 = node.contents();
    oldNodes.replaceWith(nodes6052);
  }));
  callback(root8079); return subs__;
  
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
  var root8093 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3166 = $("<div>");
  
  var ref3141 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref3141.get() !== null) {
    node3166.attr('class', ref3141.get());
    subs__.addSub(ref3141.addEventListener('change', function(_, ref, val) {
      node3166.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3141.rebind());
  
  var val1607 = onclick.get();
  if(val1607 !== null) {
    subs__.addSub(mobl.domBind(node3166, 'tap', val1607));
  }
  
  
  var node3167 = $("<div>");
  
  var ref3140 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref3140.get() !== null) {
    node3167.attr('class', ref3140.get());
    subs__.addSub(ref3140.addEventListener('change', function(_, ref, val) {
      node3167.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3140.rebind());
  
  
  var node3168 = $("<div>");
  
  var ref3138 = text;
  node3168.text(""+ref3138.get());
  var ignore617 = false;
  subs__.addSub(ref3138.addEventListener('change', function(_, ref, val) {
    if(ignore617) return;
    node3168.text(""+val);
  }));
  subs__.addSub(ref3138.rebind());
  
  
  var ref3139 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref3139.get() !== null) {
    node3168.attr('class', ref3139.get());
    subs__.addSub(ref3139.addEventListener('change', function(_, ref, val) {
      node3168.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3139.rebind());
  
  node3167.append(node3168);
  node3166.append(node3167);
  var nodes6065 = $("<span>");
  node3166.append(nodes6065);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1281();
  }));
  
  function renderControl1281() {
    subs__.addSub((elements)(function(elements, callback) {
      var root8094 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8094); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6065;
      nodes6065 = node.contents();
      oldNodes.replaceWith(nodes6065);
    }));
  }
  renderControl1281();
  root8093.append(node3166);
  callback(root8093); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mobl.sleep(100, function(result__) {
    var tmp5542 = result__;
    mathJAX.renderMaths(function(result__) {
      var tmp5543 = result__;
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
  var root8095 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3169 = $("<span>");
  root8095.append(node3169);
  var condSubs770 = new mobl.CompSubscription();
  subs__.addSub(condSubs770);
  var oldValue770;
  var renderCond770 = function() {
    var value3190 = qa.get().correct;
    if(oldValue770 === value3190) return;
    oldValue770 = value3190;
    var subs__ = condSubs770;
    subs__.unsubscribe();
    node3169.empty();
    if(value3190) {
      var nodes6066 = $("<span>");
      node3169.append(nodes6066);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.agreeStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8096 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = qa.get().answer != "%GRAPH%";
        var tmp5462 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp5462.set(qa.get().answer != "%GRAPH%");
        }));
        
        
        var node3170 = $("<span>");
        root8096.append(node3170);
        var condSubs771 = new mobl.CompSubscription();
        subs__.addSub(condSubs771);
        var oldValue771;
        var renderCond771 = function() {
          var value3191 = tmp5462.get();
          if(oldValue771 === value3191) return;
          oldValue771 = value3191;
          var subs__ = condSubs771;
          subs__.unsubscribe();
          node3170.empty();
          if(value3191) {
            var result__ = "A" + qa.get().number + ". ";
            var tmp5459 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp5459.set("A" + qa.get().number + ". ");
            }));
            
            var nodes6067 = $("<span>");
            node3170.append(nodes6067);
            subs__.addSub((mobl.label)(tmp5459, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root8097 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root8097); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes6067;
              nodes6067 = node.contents();
              oldNodes.replaceWith(nodes6067);
            }));
            var nodes6068 = $("<span>");
            node3170.append(nodes6068);
            subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
              var root8098 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root8098); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes6068;
              nodes6068 = node.contents();
              oldNodes.replaceWith(nodes6068);
            }));
            
            
            
          } else {
            var result__ = "A" + qa.get().number + ". ";
            var tmp5460 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp5460.set("A" + qa.get().number + ". ");
            }));
            
            var nodes6069 = $("<span>");
            node3170.append(nodes6069);
            subs__.addSub((mobl.label)(tmp5460, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root8099 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root8099); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes6069;
              nodes6069 = node.contents();
              oldNodes.replaceWith(nodes6069);
            }));
            var nodes6070 = $("<span>");
            node3170.append(nodes6070);
            subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
              var root8100 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root8100); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes6070;
              nodes6070 = node.contents();
              oldNodes.replaceWith(nodes6070);
            }));
            
            var node3171 = $("<span>");
            node3171.attr('style', "display:none");
            
            nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
              var tmp5545 = result__;
              var tmp5461 = mobl.ref(result__);
              subs__.addSub(qa.addEventListener('change', function() {
                nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                  var tmp5544 = result__;
                  var result__ = tmp5544;
                  tmp5461.set(result__);
                  
                });
              }));
              
              var nodes6071 = $("<span>");
              node3171.append(nodes6071);
              subs__.addSub((mobl.html)(tmp5461, function(_, callback) {
                var root8101 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root8101); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes6071;
                nodes6071 = node.contents();
                oldNodes.replaceWith(nodes6071);
              }));
              node3170.append(node3171);
              
              
            });
            
            
            
          }
        };
        renderCond771();
        subs__.addSub(tmp5462.addEventListener('change', function() {
          renderCond771();
        }));
        
        callback(root8096); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes6066;
        nodes6066 = node.contents();
        oldNodes.replaceWith(nodes6066);
      }));
      
      
    } else {
      var nodes6072 = $("<span>");
      node3169.append(nodes6072);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.disagreeStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8102 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = qa.get().answer != "%GRAPH%";
        var tmp5466 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp5466.set(qa.get().answer != "%GRAPH%");
        }));
        
        
        var node3172 = $("<span>");
        root8102.append(node3172);
        var condSubs772 = new mobl.CompSubscription();
        subs__.addSub(condSubs772);
        var oldValue772;
        var renderCond772 = function() {
          var value3192 = tmp5466.get();
          if(oldValue772 === value3192) return;
          oldValue772 = value3192;
          var subs__ = condSubs772;
          subs__.unsubscribe();
          node3172.empty();
          if(value3192) {
            var result__ = "A" + qa.get().number + ". ";
            var tmp5463 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp5463.set("A" + qa.get().number + ". ");
            }));
            
            var nodes6073 = $("<span>");
            node3172.append(nodes6073);
            subs__.addSub((mobl.label)(tmp5463, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root8103 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root8103); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes6073;
              nodes6073 = node.contents();
              oldNodes.replaceWith(nodes6073);
            }));
            var nodes6074 = $("<span>");
            node3172.append(nodes6074);
            subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
              var root8104 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root8104); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes6074;
              nodes6074 = node.contents();
              oldNodes.replaceWith(nodes6074);
            }));
            
            
            
          } else {
            var result__ = "A" + qa.get().number + ". ";
            var tmp5464 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp5464.set("A" + qa.get().number + ". ");
            }));
            
            var nodes6075 = $("<span>");
            node3172.append(nodes6075);
            subs__.addSub((mobl.label)(tmp5464, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root8105 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root8105); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes6075;
              nodes6075 = node.contents();
              oldNodes.replaceWith(nodes6075);
            }));
            var nodes6076 = $("<span>");
            node3172.append(nodes6076);
            subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
              var root8106 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root8106); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes6076;
              nodes6076 = node.contents();
              oldNodes.replaceWith(nodes6076);
            }));
            
            var node3173 = $("<span>");
            node3173.attr('style', "display:none");
            
            nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
              var tmp5547 = result__;
              var tmp5465 = mobl.ref(result__);
              subs__.addSub(qa.addEventListener('change', function() {
                nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                  var tmp5546 = result__;
                  var result__ = tmp5546;
                  tmp5465.set(result__);
                  
                });
              }));
              
              var nodes6077 = $("<span>");
              node3173.append(nodes6077);
              subs__.addSub((mobl.html)(tmp5465, function(_, callback) {
                var root8107 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root8107); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes6077;
                nodes6077 = node.contents();
                oldNodes.replaceWith(nodes6077);
              }));
              node3172.append(node3173);
              
              
            });
            
            
            
          }
        };
        renderCond772();
        subs__.addSub(tmp5466.addEventListener('change', function() {
          renderCond772();
        }));
        
        callback(root8102); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes6072;
        nodes6072 = node.contents();
        oldNodes.replaceWith(nodes6072);
      }));
      
      
    }
  };
  renderCond770();
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    renderCond770();
  }));
  
  var nodes6078 = $("<span>");
  root8095.append(nodes6078);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root8108 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node3174 = $("<span>");
    node3174.attr('style', "display:none");
    
    nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
      var tmp5549 = result__;
      var tmp5467 = mobl.ref(result__);
      subs__.addSub(qa.addEventListener('change', function() {
        nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
          var tmp5548 = result__;
          var result__ = tmp5548;
          tmp5467.set(result__);
          
        });
      }));
      
      var nodes6082 = $("<span>");
      node3174.append(nodes6082);
      subs__.addSub((mobl.html)(tmp5467, function(_, callback) {
        var root8112 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8112); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6082;
        nodes6082 = node.contents();
        oldNodes.replaceWith(nodes6082);
      }));
      root8108.append(node3174);
      var nodes6079 = $("<span>");
      root8108.append(nodes6079);
      subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8109 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8109); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6079;
        nodes6079 = node.contents();
        oldNodes.replaceWith(nodes6079);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = true;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp5468 = mobl.ref(result__);
      
      var nodes6080 = $("<span>");
      root8108.append(nodes6080);
      subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp5468, function(_, callback) {
        var root8110 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8110); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6080;
        nodes6080 = node.contents();
        oldNodes.replaceWith(nodes6080);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = false;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp5469 = mobl.ref(result__);
      
      var nodes6081 = $("<span>");
      root8108.append(nodes6081);
      subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp5469, function(_, callback) {
        var root8111 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8111); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6081;
        nodes6081 = node.contents();
        oldNodes.replaceWith(nodes6081);
      }));
      callback(root8108); return subs__;
      
      
      
      
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6078;
    nodes6078 = node.contents();
    oldNodes.replaceWith(nodes6078);
  }));
  callback(root8095); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp5550 = result__;
    var result__ = tmp5550;
    var qa2 = result__;
    var result__ = qa2 == null;
    if(result__) {
      nrichRPG.questionAnswer.QA.all().one(function(result__) {
        var tmp5551 = result__;
        var result__ = tmp5551;
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
  var root8113 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3175 = $("<span>");
  
  var ref3142 = mobl.ref("color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
  if(ref3142.get() !== null) {
    node3175.attr('style', ref3142.get());
    subs__.addSub(ref3142.addEventListener('change', function(_, ref, val) {
      node3175.attr('style', val);
    }));
    subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
      node3175.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
      node3175.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    
  }
  subs__.addSub(ref3142.rebind());
  
  var result__ = "Q" + number.get() + ". " + qa.get().topic;
  var tmp5470 = mobl.ref(result__);
  subs__.addSub(number.addEventListener('change', function() {
    tmp5470.set("Q" + number.get() + ". " + qa.get().topic);
  }));
  subs__.addSub(mobl.ref(qa, 'topic').addEventListener('change', function() {
    tmp5470.set("Q" + number.get() + ". " + qa.get().topic);
  }));
  
  var nodes6083 = $("<span>");
  node3175.append(nodes6083);
  subs__.addSub((mobl.html)(tmp5470, function(_, callback) {
    var root8114 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8114); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6083;
    nodes6083 = node.contents();
    oldNodes.replaceWith(nodes6083);
  }));
  root8113.append(node3175);
  callback(root8113); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.showQA = function(qa, elements, callback) {
  var root8115 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp5559 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp5473 = mobl.ref(result__);
  
  var result__ = qa.get().topic.toLowerCase();
  var tmp5472 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'topic').addEventListener('change', function() {
    tmp5472.set(qa.get().topic.toLowerCase());
  }));
  
  var nodes6084 = $("<span>");
  root8115.append(nodes6084);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(tmp5472, tmp5473, function(_, callback) {
    var root8116 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp5552 = result__;
                       var result__ = tmp5552;
                       var qa2 = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp5553 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp5471 = mobl.ref(result__);
    
    var nodes6085 = $("<span>");
    root8116.append(nodes6085);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp5471, function(_, callback) {
      var root8117 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8117); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6085;
      nodes6085 = node.contents();
      oldNodes.replaceWith(nodes6085);
    }));
    callback(root8116); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6084;
    nodes6084 = node.contents();
    oldNodes.replaceWith(nodes6084);
  }));
  var nodes6086 = $("<span>");
  root8115.append(nodes6086);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8118 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp5558 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5476 = mobl.ref(result__);
    
    var nodes6087 = $("<span>");
    root8118.append(nodes6087);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp5476, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root8119 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + qa.get().number + ". " + qa.get().question;
      var tmp5474 = mobl.ref(result__);
      subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
        tmp5474.set("Q" + qa.get().number + ". " + qa.get().question);
      }));
      subs__.addSub(mobl.ref(qa, 'question').addEventListener('change', function() {
        tmp5474.set("Q" + qa.get().number + ". " + qa.get().question);
      }));
      
      var nodes6088 = $("<span>");
      root8119.append(nodes6088);
      subs__.addSub((mobl.html)(tmp5474, function(_, callback) {
        var root8120 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8120); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6088;
        nodes6088 = node.contents();
        oldNodes.replaceWith(nodes6088);
      }));
      
      var node3176 = $("<span>");
      node3176.attr('style', "display:none");
      
      nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
        var tmp5555 = result__;
        var tmp5475 = mobl.ref(result__);
        subs__.addSub(qa.addEventListener('change', function() {
          nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
            var tmp5554 = result__;
            var result__ = tmp5554;
            tmp5475.set(result__);
            
          });
        }));
        
        var nodes6089 = $("<span>");
        node3176.append(nodes6089);
        subs__.addSub((mobl.html)(tmp5475, function(_, callback) {
          var root8121 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8121); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes6089;
          nodes6089 = node.contents();
          oldNodes.replaceWith(nodes6089);
        }));
        root8119.append(node3176);
        callback(root8119); return subs__;
        
      });
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6087;
      nodes6087 = node.contents();
      oldNodes.replaceWith(nodes6087);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp5557 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5478 = mobl.ref(result__);
    
    var nodes6090 = $("<span>");
    root8118.append(nodes6090);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5478, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root8122 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6091 = $("<span>");
      root8122.append(nodes6091);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8123 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                           var tmp5556 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp5477 = mobl.ref(result__);
        
        var nodes6092 = $("<span>");
        root8123.append(nodes6092);
        subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp5477, function(_, callback) {
          var root8124 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8124); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes6092;
          nodes6092 = node.contents();
          oldNodes.replaceWith(nodes6092);
        }));
        callback(root8123); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes6091;
        nodes6091 = node.contents();
        oldNodes.replaceWith(nodes6091);
      }));
      
      var node3177 = $("<span>");
      root8122.append(node3177);
      var condSubs773 = new mobl.CompSubscription();
      subs__.addSub(condSubs773);
      var oldValue773;
      var renderCond773 = function() {
        var value3193 = qa.get().done;
        if(oldValue773 === value3193) return;
        oldValue773 = value3193;
        var subs__ = condSubs773;
        subs__.unsubscribe();
        node3177.empty();
        if(value3193) {
          var nodes6093 = $("<span>");
          node3177.append(nodes6093);
          subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, function(_, callback) {
            var root8125 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root8125); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes6093;
            nodes6093 = node.contents();
            oldNodes.replaceWith(nodes6093);
          }));
          
          
        } else {
          
        }
      };
      renderCond773();
      subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
        renderCond773();
      }));
      
      callback(root8122); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6090;
      nodes6090 = node.contents();
      oldNodes.replaceWith(nodes6090);
    }));
    callback(root8118); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6086;
    nodes6086 = node.contents();
    oldNodes.replaceWith(nodes6086);
  }));
  callback(root8115); return subs__;
  
  
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
  qas.list(function(coll3881) {
    coll3881 = coll3881.reverse();
    function processOne251() {
      var item;
      item = coll3881.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll3881.length > 0) processOne251(); else rest251();
      
    }
    function rest251() {
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
    if(coll3881.length > 0) processOne251(); else rest251();
  });
  
};

nrichRPG.coreWorkout.makeQAStar = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll3882) {
    coll3882 = coll3882.reverse();
    function processOne252() {
      var item;
      item = coll3882.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll3882.length > 0) processOne252(); else rest252();
      
    }
    function rest252() {
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
    if(coll3882.length > 0) processOne252(); else rest252();
  });
  
};

nrichRPG.coreWorkout.makeQAStats = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll3883) {
    coll3883 = coll3883.reverse();
    function processOne253() {
      var item;
      item = coll3883.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll3883.length > 0) processOne253(); else rest253();
      
    }
    function rest253() {
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
    if(coll3883.length > 0) processOne253(); else rest253();
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