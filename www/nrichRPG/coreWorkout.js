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
    var tmp6865 = result__;
    var result__ = tmp6865;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp6866 = result__;
      var result__ = tmp6866;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp6867 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicId, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll699) {
    coll699 = coll699.reverse();
    function processOne249() {
      var i;
      i = coll699.pop();
      nrichRPG.coreWorkout.makeQA(topicId, function(result__) {
        var tmp6868 = result__;
        
        if(coll699.length > 0) processOne249(); else rest249();
        
      });
    }
    function rest249() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll699.length > 0) processOne249(); else rest249();
  });
  
};

nrichRPG.coreWorkout.randomQStar = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll700) {
    coll700 = coll700.reverse();
    function processOne250() {
      var i;
      i = coll700.pop();
      var result__ = mobl.Math.floor(13 * mobl.Math.random());
      var r = result__;
      var result__ = "F" + (1 + r);
      var tid = result__;
      var result__ = tid == "F3";
      if(result__) {
        var result__ = "F3a";
        tid = result__;
        nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
          var tmp6869 = result__;
          
          if(coll700.length > 0) processOne250(); else rest250();
          
        });
      } else {
        {
          nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
            var tmp6869 = result__;
            
            if(coll700.length > 0) processOne250(); else rest250();
            
          });
        }
      }
    }
    function rest250() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll700.length > 0) processOne250(); else rest250();
  });
  
};

nrichRPG.coreWorkout.randomQStats = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll701) {
    coll701 = coll701.reverse();
    function processOne251() {
      var i;
      i = coll701.pop();
      var result__ = mobl.Math.floor(6 * mobl.Math.random());
      var r = result__;
      var result__ = "S" + (1 + r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
        var tmp6870 = result__;
        
        if(coll701.length > 0) processOne251(); else rest251();
        
      });
    }
    function rest251() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll701.length > 0) processOne251(); else rest251();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root7839 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes6877 = $("<span>");
  root7839.append(nodes6877);
  subs__.addSub((ui.group)(function(_, callback) {
    var root7840 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp6878 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6777 = mobl.ref(result__);
    
    var nodes6878 = $("<span>");
    root7840.append(nodes6878);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6777, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7841 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6879 = $("<span>");
      root7841.append(nodes6879);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7842 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7842); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6879;
        nodes6879 = node.contents();
        oldNodes.replaceWith(nodes6879);
      }));
      callback(root7841); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6878;
      nodes6878 = node.contents();
      oldNodes.replaceWith(nodes6878);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp6877 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6778 = mobl.ref(result__);
    
    var nodes6880 = $("<span>");
    root7840.append(nodes6880);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6778, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7843 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6881 = $("<span>");
      root7843.append(nodes6881);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7844 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7844); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6881;
        nodes6881 = node.contents();
        oldNodes.replaceWith(nodes6881);
      }));
      callback(root7843); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6880;
      nodes6880 = node.contents();
      oldNodes.replaceWith(nodes6880);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp6876 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6779 = mobl.ref(result__);
    
    var nodes6882 = $("<span>");
    root7840.append(nodes6882);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6779, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7845 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6883 = $("<span>");
      root7845.append(nodes6883);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7846 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7846); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6883;
        nodes6883 = node.contents();
        oldNodes.replaceWith(nodes6883);
      }));
      callback(root7845); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6882;
      nodes6882 = node.contents();
      oldNodes.replaceWith(nodes6882);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp6875 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6780 = mobl.ref(result__);
    
    var nodes6884 = $("<span>");
    root7840.append(nodes6884);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6780, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7847 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6885 = $("<span>");
      root7847.append(nodes6885);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7848 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7848); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6885;
        nodes6885 = node.contents();
        oldNodes.replaceWith(nodes6885);
      }));
      callback(root7847); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6884;
      nodes6884 = node.contents();
      oldNodes.replaceWith(nodes6884);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp6874 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6781 = mobl.ref(result__);
    
    var nodes6886 = $("<span>");
    root7840.append(nodes6886);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6781, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7849 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6887 = $("<span>");
      root7849.append(nodes6887);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7850 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7850); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6887;
        nodes6887 = node.contents();
        oldNodes.replaceWith(nodes6887);
      }));
      callback(root7849); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6886;
      nodes6886 = node.contents();
      oldNodes.replaceWith(nodes6886);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp6873 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6782 = mobl.ref(result__);
    
    var nodes6888 = $("<span>");
    root7840.append(nodes6888);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6782, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7851 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6889 = $("<span>");
      root7851.append(nodes6889);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7852 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7852); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6889;
        nodes6889 = node.contents();
        oldNodes.replaceWith(nodes6889);
      }));
      callback(root7851); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6888;
      nodes6888 = node.contents();
      oldNodes.replaceWith(nodes6888);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp6872 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6783 = mobl.ref(result__);
    
    var nodes6890 = $("<span>");
    root7840.append(nodes6890);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6783, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7853 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6891 = $("<span>");
      root7853.append(nodes6891);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7854 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7854); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6891;
        nodes6891 = node.contents();
        oldNodes.replaceWith(nodes6891);
      }));
      callback(root7853); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6890;
      nodes6890 = node.contents();
      oldNodes.replaceWith(nodes6890);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp6871 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6784 = mobl.ref(result__);
    
    var nodes6892 = $("<span>");
    root7840.append(nodes6892);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6784, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7855 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6893 = $("<span>");
      root7855.append(nodes6893);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7856 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7856); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6893;
        nodes6893 = node.contents();
        oldNodes.replaceWith(nodes6893);
      }));
      callback(root7855); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6892;
      nodes6892 = node.contents();
      oldNodes.replaceWith(nodes6892);
    }));
    callback(root7840); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6877;
    nodes6877 = node.contents();
    oldNodes.replaceWith(nodes6877);
  }));
  callback(root7839); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root7857 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes6894 = $("<span>");
  root7857.append(nodes6894);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root7858 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp6786 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp6785 = mobl.ref(result__);
    
    var nodes6895 = $("<span>");
    root7858.append(nodes6895);
    subs__.addSub((ui.backButton)(tmp6785, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp6786, function(_, callback) {
      var root7859 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7859); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6895;
      nodes6895 = node.contents();
      oldNodes.replaceWith(nodes6895);
    }));
    callback(root7858); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6894;
    nodes6894 = node.contents();
    oldNodes.replaceWith(nodes6894);
  }));
  var nodes6896 = $("<span>");
  root7857.append(nodes6896);
  subs__.addSub((ui.group)(function(_, callback) {
    var root7860 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(10, function(result__) {
                       var tmp6886 = result__;
                       var result__ = mobl.alert("Quadratic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6787 = mobl.ref(result__);
    
    var nodes6897 = $("<span>");
    root7860.append(nodes6897);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6787, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7861 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6898 = $("<span>");
      root7861.append(nodes6898);
      subs__.addSub((mobl.label)(mobl.ref("+Quadratic equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7862 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7862); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6898;
        nodes6898 = node.contents();
        oldNodes.replaceWith(nodes6898);
      }));
      callback(root7861); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6897;
      nodes6897 = node.contents();
      oldNodes.replaceWith(nodes6897);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(11, function(result__) {
                       var tmp6885 = result__;
                       var result__ = mobl.alert("Completing the Square Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6788 = mobl.ref(result__);
    
    var nodes6899 = $("<span>");
    root7860.append(nodes6899);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6788, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7863 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6900 = $("<span>");
      root7863.append(nodes6900);
      subs__.addSub((mobl.label)(mobl.ref("+Completing the square"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7864 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7864); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6900;
        nodes6900 = node.contents();
        oldNodes.replaceWith(nodes6900);
      }));
      callback(root7863); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6899;
      nodes6899 = node.contents();
      oldNodes.replaceWith(nodes6899);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(7, function(result__) {
                       var tmp6884 = result__;
                       var result__ = mobl.alert("Ineqalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6789 = mobl.ref(result__);
    
    var nodes6901 = $("<span>");
    root7860.append(nodes6901);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6789, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7865 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6902 = $("<span>");
      root7865.append(nodes6902);
      subs__.addSub((mobl.label)(mobl.ref("+Inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7866 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7866); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6902;
        nodes6902 = node.contents();
        oldNodes.replaceWith(nodes6902);
      }));
      callback(root7865); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6901;
      nodes6901 = node.contents();
      oldNodes.replaceWith(nodes6901);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(9, function(result__) {
                       var tmp6883 = result__;
                       var result__ = mobl.alert("Factor theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6790 = mobl.ref(result__);
    
    var nodes6903 = $("<span>");
    root7860.append(nodes6903);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6790, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7867 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6904 = $("<span>");
      root7867.append(nodes6904);
      subs__.addSub((mobl.label)(mobl.ref("+Factor theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7868 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7868); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6904;
        nodes6904 = node.contents();
        oldNodes.replaceWith(nodes6904);
      }));
      callback(root7867); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6903;
      nodes6903 = node.contents();
      oldNodes.replaceWith(nodes6903);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(1, function(result__) {
                       var tmp6882 = result__;
                       var result__ = mobl.alert("Partial fraction Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6791 = mobl.ref(result__);
    
    var nodes6905 = $("<span>");
    root7860.append(nodes6905);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6791, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7869 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6906 = $("<span>");
      root7869.append(nodes6906);
      subs__.addSub((mobl.label)(mobl.ref("+Partial fractions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7870 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7870); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6906;
        nodes6906 = node.contents();
        oldNodes.replaceWith(nodes6906);
      }));
      callback(root7869); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6905;
      nodes6905 = node.contents();
      oldNodes.replaceWith(nodes6905);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(30, function(result__) {
                       var tmp6881 = result__;
                       var result__ = mobl.alert("Powers Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6792 = mobl.ref(result__);
    
    var nodes6907 = $("<span>");
    root7860.append(nodes6907);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6792, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7871 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6908 = $("<span>");
      root7871.append(nodes6908);
      subs__.addSub((mobl.label)(mobl.ref("+Powers"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7872 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7872); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6908;
        nodes6908 = node.contents();
        oldNodes.replaceWith(nodes6908);
      }));
      callback(root7871); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6907;
      nodes6907 = node.contents();
      oldNodes.replaceWith(nodes6907);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(13, function(result__) {
                       var tmp6880 = result__;
                       var result__ = mobl.alert("Logarithm Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6793 = mobl.ref(result__);
    
    var nodes6909 = $("<span>");
    root7860.append(nodes6909);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6793, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7873 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6910 = $("<span>");
      root7873.append(nodes6910);
      subs__.addSub((mobl.label)(mobl.ref("+Logarithms"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7874 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7874); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6910;
        nodes6910 = node.contents();
        oldNodes.replaceWith(nodes6910);
      }));
      callback(root7873); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6909;
      nodes6909 = node.contents();
      oldNodes.replaceWith(nodes6909);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(17, function(result__) {
                       var tmp6879 = result__;
                       var result__ = mobl.alert("Trig equation Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6794 = mobl.ref(result__);
    
    var nodes6911 = $("<span>");
    root7860.append(nodes6911);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6794, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7875 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6912 = $("<span>");
      root7875.append(nodes6912);
      subs__.addSub((mobl.label)(mobl.ref("+Trig equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7876 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7876); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6912;
        nodes6912 = node.contents();
        oldNodes.replaceWith(nodes6912);
      }));
      callback(root7875); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6911;
      nodes6911 = node.contents();
      oldNodes.replaceWith(nodes6911);
    }));
    callback(root7860); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6896;
    nodes6896 = node.contents();
    oldNodes.replaceWith(nodes6896);
  }));
  callback(root7857); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root7877 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes6913 = $("<span>");
  root7877.append(nodes6913);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root7878 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp6796 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp6795 = mobl.ref(result__);
    
    var nodes6914 = $("<span>");
    root7878.append(nodes6914);
    subs__.addSub((ui.backButton)(tmp6795, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp6796, function(_, callback) {
      var root7879 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7879); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6914;
      nodes6914 = node.contents();
      oldNodes.replaceWith(nodes6914);
    }));
    callback(root7878); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6913;
    nodes6913 = node.contents();
    oldNodes.replaceWith(nodes6913);
  }));
  var nodes6915 = $("<span>");
  root7877.append(nodes6915);
  subs__.addSub((ui.group)(function(_, callback) {
    var root7880 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(24, function(result__) {
                       var tmp6891 = result__;
                       var result__ = mobl.alert("Modulus Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6797 = mobl.ref(result__);
    
    var nodes6916 = $("<span>");
    root7880.append(nodes6916);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6797, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7881 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6917 = $("<span>");
      root7881.append(nodes6917);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus function"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7882 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7882); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6917;
        nodes6917 = node.contents();
        oldNodes.replaceWith(nodes6917);
      }));
      callback(root7881); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6916;
      nodes6916 = node.contents();
      oldNodes.replaceWith(nodes6916);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(25, function(result__) {
                       var tmp6890 = result__;
                       var result__ = mobl.alert("Transformations of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6798 = mobl.ref(result__);
    
    var nodes6918 = $("<span>");
    root7880.append(nodes6918);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6798, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7883 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6919 = $("<span>");
      root7883.append(nodes6919);
      subs__.addSub((mobl.label)(mobl.ref("+Transformations of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7884 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7884); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6919;
        nodes6919 = node.contents();
        oldNodes.replaceWith(nodes6919);
      }));
      callback(root7883); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6918;
      nodes6918 = node.contents();
      oldNodes.replaceWith(nodes6918);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(26, function(result__) {
                       var tmp6889 = result__;
                       var result__ = mobl.alert("Composition of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6799 = mobl.ref(result__);
    
    var nodes6920 = $("<span>");
    root7880.append(nodes6920);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6799, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7885 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6921 = $("<span>");
      root7885.append(nodes6921);
      subs__.addSub((mobl.label)(mobl.ref("+Composition of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7886 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7886); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6921;
        nodes6921 = node.contents();
        oldNodes.replaceWith(nodes6921);
      }));
      callback(root7885); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6920;
      nodes6920 = node.contents();
      oldNodes.replaceWith(nodes6920);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(270, function(result__) {
                       var tmp6888 = result__;
                       var result__ = mobl.alert("Implicit functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6800 = mobl.ref(result__);
    
    var nodes6922 = $("<span>");
    root7880.append(nodes6922);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6800, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7887 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6923 = $("<span>");
      root7887.append(nodes6923);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7888 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7888); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6923;
        nodes6923 = node.contents();
        oldNodes.replaceWith(nodes6923);
      }));
      callback(root7887); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6922;
      nodes6922 = node.contents();
      oldNodes.replaceWith(nodes6922);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(27, function(result__) {
                       var tmp6887 = result__;
                       var result__ = mobl.alert("Parametric functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6801 = mobl.ref(result__);
    
    var nodes6924 = $("<span>");
    root7880.append(nodes6924);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6801, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7889 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6925 = $("<span>");
      root7889.append(nodes6925);
      subs__.addSub((mobl.label)(mobl.ref("+Parametric functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7890 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7890); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6925;
        nodes6925 = node.contents();
        oldNodes.replaceWith(nodes6925);
      }));
      callback(root7889); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6924;
      nodes6924 = node.contents();
      oldNodes.replaceWith(nodes6924);
    }));
    callback(root7880); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6915;
    nodes6915 = node.contents();
    oldNodes.replaceWith(nodes6915);
  }));
  callback(root7877); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root7891 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes6926 = $("<span>");
  root7891.append(nodes6926);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root7892 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp6803 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp6802 = mobl.ref(result__);
    
    var nodes6927 = $("<span>");
    root7892.append(nodes6927);
    subs__.addSub((ui.backButton)(tmp6802, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp6803, function(_, callback) {
      var root7893 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7893); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6927;
      nodes6927 = node.contents();
      oldNodes.replaceWith(nodes6927);
    }));
    callback(root7892); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6926;
    nodes6926 = node.contents();
    oldNodes.replaceWith(nodes6926);
  }));
  var nodes6928 = $("<span>");
  root7891.append(nodes6928);
  subs__.addSub((ui.group)(function(_, callback) {
    var root7894 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(15, function(result__) {
                       var tmp6894 = result__;
                       var result__ = mobl.alert("Triangles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6804 = mobl.ref(result__);
    
    var nodes6929 = $("<span>");
    root7894.append(nodes6929);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6804, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7895 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6930 = $("<span>");
      root7895.append(nodes6930);
      subs__.addSub((mobl.label)(mobl.ref("+Triangles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7896 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7896); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6930;
        nodes6930 = node.contents();
        oldNodes.replaceWith(nodes6930);
      }));
      callback(root7895); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6929;
      nodes6929 = node.contents();
      oldNodes.replaceWith(nodes6929);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(16, function(result__) {
                       var tmp6893 = result__;
                       var result__ = mobl.alert("Circles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6805 = mobl.ref(result__);
    
    var nodes6931 = $("<span>");
    root7894.append(nodes6931);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6805, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7897 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6932 = $("<span>");
      root7897.append(nodes6932);
      subs__.addSub((mobl.label)(mobl.ref("+Circles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7898 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7898); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6932;
        nodes6932 = node.contents();
        oldNodes.replaceWith(nodes6932);
      }));
      callback(root7897); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6931;
      nodes6931 = node.contents();
      oldNodes.replaceWith(nodes6931);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(6, function(result__) {
                       var tmp6892 = result__;
                       var result__ = mobl.alert("3D lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6806 = mobl.ref(result__);
    
    var nodes6933 = $("<span>");
    root7894.append(nodes6933);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6806, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7899 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6934 = $("<span>");
      root7899.append(nodes6934);
      subs__.addSub((mobl.label)(mobl.ref("+ 3D lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7900 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7900); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6934;
        nodes6934 = node.contents();
        oldNodes.replaceWith(nodes6934);
      }));
      callback(root7899); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6933;
      nodes6933 = node.contents();
      oldNodes.replaceWith(nodes6933);
    }));
    callback(root7894); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6928;
    nodes6928 = node.contents();
    oldNodes.replaceWith(nodes6928);
  }));
  callback(root7891); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root7901 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes6935 = $("<span>");
  root7901.append(nodes6935);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root7902 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp6808 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp6807 = mobl.ref(result__);
    
    var nodes6936 = $("<span>");
    root7902.append(nodes6936);
    subs__.addSub((ui.backButton)(tmp6807, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp6808, function(_, callback) {
      var root7903 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7903); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6936;
      nodes6936 = node.contents();
      oldNodes.replaceWith(nodes6936);
    }));
    callback(root7902); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6935;
    nodes6935 = node.contents();
    oldNodes.replaceWith(nodes6935);
  }));
  var nodes6937 = $("<span>");
  root7901.append(nodes6937);
  subs__.addSub((ui.group)(function(_, callback) {
    var root7904 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(8, function(result__) {
                       var tmp6898 = result__;
                       var result__ = mobl.alert("Arithmetic Progressions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6809 = mobl.ref(result__);
    
    var nodes6938 = $("<span>");
    root7904.append(nodes6938);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6809, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7905 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6939 = $("<span>");
      root7905.append(nodes6939);
      subs__.addSub((mobl.label)(mobl.ref("+Arithmetic progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7906 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7906); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6939;
        nodes6939 = node.contents();
        oldNodes.replaceWith(nodes6939);
      }));
      callback(root7905); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6938;
      nodes6938 = node.contents();
      oldNodes.replaceWith(nodes6938);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(12, function(result__) {
                       var tmp6897 = result__;
                       var result__ = mobl.alert("Binomial Expansion Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6810 = mobl.ref(result__);
    
    var nodes6940 = $("<span>");
    root7904.append(nodes6940);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6810, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7907 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6941 = $("<span>");
      root7907.append(nodes6941);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial expansion"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7908 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7908); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6941;
        nodes6941 = node.contents();
        oldNodes.replaceWith(nodes6941);
      }));
      callback(root7907); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6940;
      nodes6940 = node.contents();
      oldNodes.replaceWith(nodes6940);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(23, function(result__) {
                       var tmp6896 = result__;
                       var result__ = mobl.alert("Geometric Progression Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6811 = mobl.ref(result__);
    
    var nodes6942 = $("<span>");
    root7904.append(nodes6942);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6811, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7909 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6943 = $("<span>");
      root7909.append(nodes6943);
      subs__.addSub((mobl.label)(mobl.ref("+Geometric progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7910 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7910); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6943;
        nodes6943 = node.contents();
        oldNodes.replaceWith(nodes6943);
      }));
      callback(root7909); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6942;
      nodes6942 = node.contents();
      oldNodes.replaceWith(nodes6942);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(2, function(result__) {
                       var tmp6895 = result__;
                       var result__ = mobl.alert("Binomial theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6812 = mobl.ref(result__);
    
    var nodes6944 = $("<span>");
    root7904.append(nodes6944);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6812, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7911 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6945 = $("<span>");
      root7911.append(nodes6945);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7912 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7912); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6945;
        nodes6945 = node.contents();
        oldNodes.replaceWith(nodes6945);
      }));
      callback(root7911); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6944;
      nodes6944 = node.contents();
      oldNodes.replaceWith(nodes6944);
    }));
    callback(root7904); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6937;
    nodes6937 = node.contents();
    oldNodes.replaceWith(nodes6937);
  }));
  callback(root7901); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root7913 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes6946 = $("<span>");
  root7913.append(nodes6946);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root7914 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp6814 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp6813 = mobl.ref(result__);
    
    var nodes6947 = $("<span>");
    root7914.append(nodes6947);
    subs__.addSub((ui.backButton)(tmp6813, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp6814, function(_, callback) {
      var root7915 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7915); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6947;
      nodes6947 = node.contents();
      oldNodes.replaceWith(nodes6947);
    }));
    callback(root7914); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6946;
    nodes6946 = node.contents();
    oldNodes.replaceWith(nodes6946);
  }));
  var nodes6948 = $("<span>");
  root7913.append(nodes6948);
  subs__.addSub((ui.group)(function(_, callback) {
    var root7916 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(5, function(result__) {
                       var tmp6900 = result__;
                       var result__ = mobl.alert("Scalar product Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6815 = mobl.ref(result__);
    
    var nodes6949 = $("<span>");
    root7916.append(nodes6949);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6815, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7917 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6950 = $("<span>");
      root7917.append(nodes6950);
      subs__.addSub((mobl.label)(mobl.ref("+Scalar products"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7918 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7918); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6950;
        nodes6950 = node.contents();
        oldNodes.replaceWith(nodes6950);
      }));
      callback(root7917); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6949;
      nodes6949 = node.contents();
      oldNodes.replaceWith(nodes6949);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(18, function(result__) {
                       var tmp6899 = result__;
                       var result__ = mobl.alert("Vector equation of lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6816 = mobl.ref(result__);
    
    var nodes6951 = $("<span>");
    root7916.append(nodes6951);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6816, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7919 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6952 = $("<span>");
      root7919.append(nodes6952);
      subs__.addSub((mobl.label)(mobl.ref("+Vector equation of lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7920 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7920); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6952;
        nodes6952 = node.contents();
        oldNodes.replaceWith(nodes6952);
      }));
      callback(root7919); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6951;
      nodes6951 = node.contents();
      oldNodes.replaceWith(nodes6951);
    }));
    callback(root7916); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6948;
    nodes6948 = node.contents();
    oldNodes.replaceWith(nodes6948);
  }));
  callback(root7913); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root7921 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes6953 = $("<span>");
  root7921.append(nodes6953);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root7922 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp6818 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp6817 = mobl.ref(result__);
    
    var nodes6954 = $("<span>");
    root7922.append(nodes6954);
    subs__.addSub((ui.backButton)(tmp6817, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp6818, function(_, callback) {
      var root7923 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7923); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6954;
      nodes6954 = node.contents();
      oldNodes.replaceWith(nodes6954);
    }));
    callback(root7922); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6953;
    nodes6953 = node.contents();
    oldNodes.replaceWith(nodes6953);
  }));
  var nodes6955 = $("<span>");
  root7921.append(nodes6955);
  subs__.addSub((ui.group)(function(_, callback) {
    var root7924 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(14, function(result__) {
                       var tmp6905 = result__;
                       var result__ = mobl.alert("Stationary points Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6819 = mobl.ref(result__);
    
    var nodes6956 = $("<span>");
    root7924.append(nodes6956);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6819, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7925 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6957 = $("<span>");
      root7925.append(nodes6957);
      subs__.addSub((mobl.label)(mobl.ref("+Stationary points"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7926 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7926); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6957;
        nodes6957 = node.contents();
        oldNodes.replaceWith(nodes6957);
      }));
      callback(root7925); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6956;
      nodes6956 = node.contents();
      oldNodes.replaceWith(nodes6956);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(20, function(result__) {
                       var tmp6904 = result__;
                       var result__ = mobl.alert("Chain rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6820 = mobl.ref(result__);
    
    var nodes6958 = $("<span>");
    root7924.append(nodes6958);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6820, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7927 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6959 = $("<span>");
      root7927.append(nodes6959);
      subs__.addSub((mobl.label)(mobl.ref("+Chain rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7928 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7928); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6959;
        nodes6959 = node.contents();
        oldNodes.replaceWith(nodes6959);
      }));
      callback(root7927); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6958;
      nodes6958 = node.contents();
      oldNodes.replaceWith(nodes6958);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(21, function(result__) {
                       var tmp6903 = result__;
                       var result__ = mobl.alert("Product rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6821 = mobl.ref(result__);
    
    var nodes6960 = $("<span>");
    root7924.append(nodes6960);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6821, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7929 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6961 = $("<span>");
      root7929.append(nodes6961);
      subs__.addSub((mobl.label)(mobl.ref("+Product rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7930 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7930); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6961;
        nodes6961 = node.contents();
        oldNodes.replaceWith(nodes6961);
      }));
      callback(root7929); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6960;
      nodes6960 = node.contents();
      oldNodes.replaceWith(nodes6960);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(22, function(result__) {
                       var tmp6902 = result__;
                       var result__ = mobl.alert("Quotient rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6822 = mobl.ref(result__);
    
    var nodes6962 = $("<span>");
    root7924.append(nodes6962);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6822, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7931 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6963 = $("<span>");
      root7931.append(nodes6963);
      subs__.addSub((mobl.label)(mobl.ref("+Quotient rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7932 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7932); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6963;
        nodes6963 = node.contents();
        oldNodes.replaceWith(nodes6963);
      }));
      callback(root7931); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6962;
      nodes6962 = node.contents();
      oldNodes.replaceWith(nodes6962);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(19, function(result__) {
                       var tmp6901 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6823 = mobl.ref(result__);
    
    var nodes6964 = $("<span>");
    root7924.append(nodes6964);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6823, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7933 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6965 = $("<span>");
      root7933.append(nodes6965);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7934 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7934); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6965;
        nodes6965 = node.contents();
        oldNodes.replaceWith(nodes6965);
      }));
      callback(root7933); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6964;
      nodes6964 = node.contents();
      oldNodes.replaceWith(nodes6964);
    }));
    callback(root7924); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6955;
    nodes6955 = node.contents();
    oldNodes.replaceWith(nodes6955);
  }));
  callback(root7921); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root7935 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes6966 = $("<span>");
  root7935.append(nodes6966);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root7936 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp6825 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp6824 = mobl.ref(result__);
    
    var nodes6967 = $("<span>");
    root7936.append(nodes6967);
    subs__.addSub((ui.backButton)(tmp6824, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp6825, function(_, callback) {
      var root7937 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7937); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6967;
      nodes6967 = node.contents();
      oldNodes.replaceWith(nodes6967);
    }));
    callback(root7936); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6966;
    nodes6966 = node.contents();
    oldNodes.replaceWith(nodes6966);
  }));
  var nodes6968 = $("<span>");
  root7935.append(nodes6968);
  subs__.addSub((ui.group)(function(_, callback) {
    var root7938 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(28, function(result__) {
                       var tmp6908 = result__;
                       var result__ = mobl.alert("Integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6826 = mobl.ref(result__);
    
    var nodes6969 = $("<span>");
    root7938.append(nodes6969);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6826, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7939 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6970 = $("<span>");
      root7939.append(nodes6970);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7940 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7940); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6970;
        nodes6970 = node.contents();
        oldNodes.replaceWith(nodes6970);
      }));
      callback(root7939); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6969;
      nodes6969 = node.contents();
      oldNodes.replaceWith(nodes6969);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(3, function(result__) {
                       var tmp6907 = result__;
                       var result__ = mobl.alert("Polynomial integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6827 = mobl.ref(result__);
    
    var nodes6971 = $("<span>");
    root7938.append(nodes6971);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6827, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7941 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6972 = $("<span>");
      root7941.append(nodes6972);
      subs__.addSub((mobl.label)(mobl.ref("+Polynomial integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7942 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7942); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6972;
        nodes6972 = node.contents();
        oldNodes.replaceWith(nodes6972);
      }));
      callback(root7941); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6971;
      nodes6971 = node.contents();
      oldNodes.replaceWith(nodes6971);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(4, function(result__) {
                       var tmp6906 = result__;
                       var result__ = mobl.alert("Trig integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6828 = mobl.ref(result__);
    
    var nodes6973 = $("<span>");
    root7938.append(nodes6973);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6828, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7943 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6974 = $("<span>");
      root7943.append(nodes6974);
      subs__.addSub((mobl.label)(mobl.ref("+Trig integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7944 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7944); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6974;
        nodes6974 = node.contents();
        oldNodes.replaceWith(nodes6974);
      }));
      callback(root7943); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6973;
      nodes6973 = node.contents();
      oldNodes.replaceWith(nodes6973);
    }));
    callback(root7938); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6968;
    nodes6968 = node.contents();
    oldNodes.replaceWith(nodes6968);
  }));
  callback(root7935); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root7945 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes6975 = $("<span>");
  root7945.append(nodes6975);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root7946 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp6830 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp6829 = mobl.ref(result__);
    
    var nodes6976 = $("<span>");
    root7946.append(nodes6976);
    subs__.addSub((ui.backButton)(tmp6829, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp6830, function(_, callback) {
      var root7947 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7947); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6976;
      nodes6976 = node.contents();
      oldNodes.replaceWith(nodes6976);
    }));
    callback(root7946); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6975;
    nodes6975 = node.contents();
    oldNodes.replaceWith(nodes6975);
  }));
  var nodes6977 = $("<span>");
  root7945.append(nodes6977);
  subs__.addSub((ui.group)(function(_, callback) {
    var root7948 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(29, function(result__) {
                       var tmp6909 = result__;
                       var result__ = mobl.alert("Differential equations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6831 = mobl.ref(result__);
    
    var nodes6978 = $("<span>");
    root7948.append(nodes6978);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6831, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7949 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6979 = $("<span>");
      root7949.append(nodes6979);
      subs__.addSub((mobl.label)(mobl.ref("+Diff equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7950 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7950); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6979;
        nodes6979 = node.contents();
        oldNodes.replaceWith(nodes6979);
      }));
      callback(root7949); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6978;
      nodes6978 = node.contents();
      oldNodes.replaceWith(nodes6978);
    }));
    callback(root7948); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6977;
    nodes6977 = node.contents();
    oldNodes.replaceWith(nodes6977);
  }));
  callback(root7945); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root7951 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes6980 = $("<span>");
  root7951.append(nodes6980);
  subs__.addSub((ui.group)(function(_, callback) {
    var root7952 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F1", function(result__) {
                       var tmp6922 = result__;
                       var result__ = mobl.alert("Complex arithmetic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6832 = mobl.ref(result__);
    
    var nodes6981 = $("<span>");
    root7952.append(nodes6981);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6832, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7953 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6982 = $("<span>");
      root7953.append(nodes6982);
      subs__.addSub((mobl.label)(mobl.ref("+Complex arithmetic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7954 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7954); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6982;
        nodes6982 = node.contents();
        oldNodes.replaceWith(nodes6982);
      }));
      callback(root7953); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6981;
      nodes6981 = node.contents();
      oldNodes.replaceWith(nodes6981);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F2", function(result__) {
                       var tmp6921 = result__;
                       var result__ = mobl.alert("Modulus argument Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6833 = mobl.ref(result__);
    
    var nodes6983 = $("<span>");
    root7952.append(nodes6983);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6833, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7955 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6984 = $("<span>");
      root7955.append(nodes6984);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus argument"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7956 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7956); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6984;
        nodes6984 = node.contents();
        oldNodes.replaceWith(nodes6984);
      }));
      callback(root7955); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6983;
      nodes6983 = node.contents();
      oldNodes.replaceWith(nodes6983);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F3a", function(result__) {
                       var tmp6920 = result__;
                       var result__ = mobl.alert("2nd order DE Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6834 = mobl.ref(result__);
    
    var nodes6985 = $("<span>");
    root7952.append(nodes6985);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6834, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7957 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6986 = $("<span>");
      root7957.append(nodes6986);
      subs__.addSub((mobl.label)(mobl.ref("+2nd order DEs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7958 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7958); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6986;
        nodes6986 = node.contents();
        oldNodes.replaceWith(nodes6986);
      }));
      callback(root7957); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6985;
      nodes6985 = node.contents();
      oldNodes.replaceWith(nodes6985);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F4", function(result__) {
                       var tmp6919 = result__;
                       var result__ = mobl.alert("Rank 2 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6835 = mobl.ref(result__);
    
    var nodes6987 = $("<span>");
    root7952.append(nodes6987);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6835, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7959 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6988 = $("<span>");
      root7959.append(nodes6988);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 2 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7960 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7960); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6988;
        nodes6988 = node.contents();
        oldNodes.replaceWith(nodes6988);
      }));
      callback(root7959); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6987;
      nodes6987 = node.contents();
      oldNodes.replaceWith(nodes6987);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F5", function(result__) {
                       var tmp6918 = result__;
                       var result__ = mobl.alert("Taylor Series Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6836 = mobl.ref(result__);
    
    var nodes6989 = $("<span>");
    root7952.append(nodes6989);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6836, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7961 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6990 = $("<span>");
      root7961.append(nodes6990);
      subs__.addSub((mobl.label)(mobl.ref("+Taylor Series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7962 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7962); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6990;
        nodes6990 = node.contents();
        oldNodes.replaceWith(nodes6990);
      }));
      callback(root7961); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6989;
      nodes6989 = node.contents();
      oldNodes.replaceWith(nodes6989);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F6", function(result__) {
                       var tmp6917 = result__;
                       var result__ = mobl.alert("Polar Coordinates Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6837 = mobl.ref(result__);
    
    var nodes6991 = $("<span>");
    root7952.append(nodes6991);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6837, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7963 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6992 = $("<span>");
      root7963.append(nodes6992);
      subs__.addSub((mobl.label)(mobl.ref("+Polar Coordinates"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7964 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7964); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6992;
        nodes6992 = node.contents();
        oldNodes.replaceWith(nodes6992);
      }));
      callback(root7963); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6991;
      nodes6991 = node.contents();
      oldNodes.replaceWith(nodes6991);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F7", function(result__) {
                       var tmp6916 = result__;
                       var result__ = mobl.alert("Rank 3 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6838 = mobl.ref(result__);
    
    var nodes6993 = $("<span>");
    root7952.append(nodes6993);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6838, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7965 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6994 = $("<span>");
      root7965.append(nodes6994);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 3 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7966 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7966); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6994;
        nodes6994 = node.contents();
        oldNodes.replaceWith(nodes6994);
      }));
      callback(root7965); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6993;
      nodes6993 = node.contents();
      oldNodes.replaceWith(nodes6993);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F8", function(result__) {
                       var tmp6915 = result__;
                       var result__ = mobl.alert("Further vectors added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6839 = mobl.ref(result__);
    
    var nodes6995 = $("<span>");
    root7952.append(nodes6995);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6839, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7967 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6996 = $("<span>");
      root7967.append(nodes6996);
      subs__.addSub((mobl.label)(mobl.ref("+Further vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7968 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7968); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6996;
        nodes6996 = node.contents();
        oldNodes.replaceWith(nodes6996);
      }));
      callback(root7967); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6995;
      nodes6995 = node.contents();
      oldNodes.replaceWith(nodes6995);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F9", function(result__) {
                       var tmp6914 = result__;
                       var result__ = mobl.alert("Newton-Raphson added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6840 = mobl.ref(result__);
    
    var nodes6997 = $("<span>");
    root7952.append(nodes6997);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6840, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7969 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6998 = $("<span>");
      root7969.append(nodes6998);
      subs__.addSub((mobl.label)(mobl.ref("+Newton-Raphson"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7970 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7970); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6998;
        nodes6998 = node.contents();
        oldNodes.replaceWith(nodes6998);
      }));
      callback(root7969); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6997;
      nodes6997 = node.contents();
      oldNodes.replaceWith(nodes6997);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F10", function(result__) {
                       var tmp6913 = result__;
                       var result__ = mobl.alert("Further inequalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6841 = mobl.ref(result__);
    
    var nodes6999 = $("<span>");
    root7952.append(nodes6999);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6841, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7971 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7000 = $("<span>");
      root7971.append(nodes7000);
      subs__.addSub((mobl.label)(mobl.ref("+Further inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7972 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7972); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7000;
        nodes7000 = node.contents();
        oldNodes.replaceWith(nodes7000);
      }));
      callback(root7971); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6999;
      nodes6999 = node.contents();
      oldNodes.replaceWith(nodes6999);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F11", function(result__) {
                       var tmp6912 = result__;
                       var result__ = mobl.alert("Integration by substitution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6842 = mobl.ref(result__);
    
    var nodes7001 = $("<span>");
    root7952.append(nodes7001);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6842, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7973 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7002 = $("<span>");
      root7973.append(nodes7002);
      subs__.addSub((mobl.label)(mobl.ref("+Integration by substitution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7974 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7974); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7002;
        nodes7002 = node.contents();
        oldNodes.replaceWith(nodes7002);
      }));
      callback(root7973); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7001;
      nodes7001 = node.contents();
      oldNodes.replaceWith(nodes7001);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F12", function(result__) {
                       var tmp6911 = result__;
                       var result__ = mobl.alert("Figures of revolution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6843 = mobl.ref(result__);
    
    var nodes7003 = $("<span>");
    root7952.append(nodes7003);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6843, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7975 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7004 = $("<span>");
      root7975.append(nodes7004);
      subs__.addSub((mobl.label)(mobl.ref("+Figures of revolution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7976 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7976); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7004;
        nodes7004 = node.contents();
        oldNodes.replaceWith(nodes7004);
      }));
      callback(root7975); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7003;
      nodes7003 = node.contents();
      oldNodes.replaceWith(nodes7003);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F13", function(result__) {
                       var tmp6910 = result__;
                       var result__ = mobl.alert("Matrix transformations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6844 = mobl.ref(result__);
    
    var nodes7005 = $("<span>");
    root7952.append(nodes7005);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6844, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7977 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7006 = $("<span>");
      root7977.append(nodes7006);
      subs__.addSub((mobl.label)(mobl.ref("+Matrix transformations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7978 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7978); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7006;
        nodes7006 = node.contents();
        oldNodes.replaceWith(nodes7006);
      }));
      callback(root7977); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7005;
      nodes7005 = node.contents();
      oldNodes.replaceWith(nodes7005);
    }));
    callback(root7952); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6980;
    nodes6980 = node.contents();
    oldNodes.replaceWith(nodes6980);
  }));
  callback(root7951); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root7979 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7007 = $("<span>");
  root7979.append(nodes7007);
  subs__.addSub((ui.group)(function(_, callback) {
    var root7980 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S1", function(result__) {
                       var tmp6928 = result__;
                       var result__ = mobl.alert("Discrete Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6845 = mobl.ref(result__);
    
    var nodes7008 = $("<span>");
    root7980.append(nodes7008);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6845, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7981 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7009 = $("<span>");
      root7981.append(nodes7009);
      subs__.addSub((mobl.label)(mobl.ref("+Discrete Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7982 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7982); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7009;
        nodes7009 = node.contents();
        oldNodes.replaceWith(nodes7009);
      }));
      callback(root7981); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7008;
      nodes7008 = node.contents();
      oldNodes.replaceWith(nodes7008);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S2", function(result__) {
                       var tmp6927 = result__;
                       var result__ = mobl.alert("Continuous Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6846 = mobl.ref(result__);
    
    var nodes7010 = $("<span>");
    root7980.append(nodes7010);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6846, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7983 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7011 = $("<span>");
      root7983.append(nodes7011);
      subs__.addSub((mobl.label)(mobl.ref("+Continuous Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7984 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7984); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7011;
        nodes7011 = node.contents();
        oldNodes.replaceWith(nodes7011);
      }));
      callback(root7983); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7010;
      nodes7010 = node.contents();
      oldNodes.replaceWith(nodes7010);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S3", function(result__) {
                       var tmp6926 = result__;
                       var result__ = mobl.alert("Hypothesis Testing Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6847 = mobl.ref(result__);
    
    var nodes7012 = $("<span>");
    root7980.append(nodes7012);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6847, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7985 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7013 = $("<span>");
      root7985.append(nodes7013);
      subs__.addSub((mobl.label)(mobl.ref("+Hypothesis Testing"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7986 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7986); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7013;
        nodes7013 = node.contents();
        oldNodes.replaceWith(nodes7013);
      }));
      callback(root7985); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7012;
      nodes7012 = node.contents();
      oldNodes.replaceWith(nodes7012);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S4", function(result__) {
                       var tmp6925 = result__;
                       var result__ = mobl.alert("Confidence Intervals Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6848 = mobl.ref(result__);
    
    var nodes7014 = $("<span>");
    root7980.append(nodes7014);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6848, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7987 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7015 = $("<span>");
      root7987.append(nodes7015);
      subs__.addSub((mobl.label)(mobl.ref("+Confidence Intervals"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7988 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7988); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7015;
        nodes7015 = node.contents();
        oldNodes.replaceWith(nodes7015);
      }));
      callback(root7987); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7014;
      nodes7014 = node.contents();
      oldNodes.replaceWith(nodes7014);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S5", function(result__) {
                       var tmp6924 = result__;
                       var result__ = mobl.alert("Chi Squared Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6849 = mobl.ref(result__);
    
    var nodes7016 = $("<span>");
    root7980.append(nodes7016);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6849, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7989 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7017 = $("<span>");
      root7989.append(nodes7017);
      subs__.addSub((mobl.label)(mobl.ref("+Chi Squared"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7990 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7990); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7017;
        nodes7017 = node.contents();
        oldNodes.replaceWith(nodes7017);
      }));
      callback(root7989); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7016;
      nodes7016 = node.contents();
      oldNodes.replaceWith(nodes7016);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S6", function(result__) {
                       var tmp6923 = result__;
                       var result__ = mobl.alert("Product Moment Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6850 = mobl.ref(result__);
    
    var nodes7018 = $("<span>");
    root7980.append(nodes7018);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6850, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7991 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7019 = $("<span>");
      root7991.append(nodes7019);
      subs__.addSub((mobl.label)(mobl.ref("+Product Moments"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7992 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7992); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7019;
        nodes7019 = node.contents();
        oldNodes.replaceWith(nodes7019);
      }));
      callback(root7991); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7018;
      nodes7018 = node.contents();
      oldNodes.replaceWith(nodes7018);
    }));
    callback(root7980); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7007;
    nodes7007 = node.contents();
    oldNodes.replaceWith(nodes7007);
  }));
  callback(root7979); return subs__;
  
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
  var root7993 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node936 = $("<div>");
  
  var ref900 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref900.get() !== null) {
    node936.attr('class', ref900.get());
    subs__.addSub(ref900.addEventListener('change', function(_, ref, val) {
      node936.attr('class', val);
    }));
    
  }
  subs__.addSub(ref900.rebind());
  
  var val391 = onclick.get();
  if(val391 !== null) {
    subs__.addSub(mobl.domBind(node936, 'tap', val391));
  }
  
  
  var node937 = $("<div>");
  
  var ref899 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref899.get() !== null) {
    node937.attr('class', ref899.get());
    subs__.addSub(ref899.addEventListener('change', function(_, ref, val) {
      node937.attr('class', val);
    }));
    
  }
  subs__.addSub(ref899.rebind());
  
  
  var node938 = $("<div>");
  
  var ref897 = text;
  node938.text(""+ref897.get());
  var ignore164 = false;
  subs__.addSub(ref897.addEventListener('change', function(_, ref, val) {
    if(ignore164) return;
    node938.text(""+val);
  }));
  subs__.addSub(ref897.rebind());
  
  
  var ref898 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref898.get() !== null) {
    node938.attr('class', ref898.get());
    subs__.addSub(ref898.addEventListener('change', function(_, ref, val) {
      node938.attr('class', val);
    }));
    
  }
  subs__.addSub(ref898.rebind());
  
  node937.append(node938);
  node936.append(node937);
  var nodes7020 = $("<span>");
  node936.append(nodes7020);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl336();
  }));
  
  function renderControl336() {
    subs__.addSub((elements)(function(elements, callback) {
      var root7994 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7994); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7020;
      nodes7020 = node.contents();
      oldNodes.replaceWith(nodes7020);
    }));
  }
  renderControl336();
  root7993.append(node936);
  callback(root7993); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mathJAX.renderMaths(function(result__) {
    var tmp6929 = result__;
    var result__ = qa.done && qa.answer == "%GRAPH%";
    if(result__) {
      var result__ = mobl.JSON.parse(qa.plotData);
      var jsonData = result__;
      var result__ = plot.lineChart("corePlotArea", jsonData);
      if(callback && callback.apply) callback(); return;
    } else {
      {
        if(callback && callback.apply) callback(); return;
      }
    }
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
  var root7995 = $("<span>");
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
                       if(callback && callback.apply) callback(); return;
                     }
                   }
                 };
  var tmp6855 = mobl.ref(result__);
  
  var result__ = qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle;
  var tmp6854 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    tmp6854.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.agreeStyle).addEventListener('change', function() {
    tmp6854.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.disagreeStyle).addEventListener('change', function() {
    tmp6854.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  
  var nodes7021 = $("<span>");
  root7995.append(nodes7021);
  subs__.addSub((mobl.block)(tmp6854, mobl.ref(null), tmp6855, mobl.ref(null), function(_, callback) {
    var root7996 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = "A" + number.get() + ". ";
    var tmp6851 = mobl.ref(result__);
    subs__.addSub(number.addEventListener('change', function() {
      tmp6851.set("A" + number.get() + ". ");
    }));
    
    var nodes7022 = $("<span>");
    root7996.append(nodes7022);
    subs__.addSub((mobl.label)(tmp6851, mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root7997 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7997); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7022;
      nodes7022 = node.contents();
      oldNodes.replaceWith(nodes7022);
    }));
    var result__ = qa.get().answer != "%GRAPH%";
    var tmp6853 = mobl.ref(result__);
    subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
      tmp6853.set(qa.get().answer != "%GRAPH%");
    }));
    
    
    var node939 = $("<span>");
    root7996.append(node939);
    var condSubs226 = new mobl.CompSubscription();
    subs__.addSub(condSubs226);
    var oldValue226;
    var renderCond226 = function() {
      var value526 = tmp6853.get();
      if(oldValue226 === value526) return;
      oldValue226 = value526;
      var subs__ = condSubs226;
      subs__.unsubscribe();
      node939.empty();
      if(value526) {
        
        var node940 = $("<span>");
        
        var ref901 = mobl.ref("answer-block-" + number.get());
        if(ref901.get() !== null) {
          node940.attr('id', ref901.get());
          subs__.addSub(ref901.addEventListener('change', function(_, ref, val) {
            node940.attr('id', val);
          }));
          subs__.addSub(number.addEventListener('change', function() {
            node940.attr('id', "answer-block-" + number.get());
          }));
          
        }
        subs__.addSub(ref901.rebind());
        
        var result__ = nrichRPG.coreWorkout.blank(qa.get().answerHtml) ? qa.get().answer : qa.get().answerHtml;
        var tmp6852 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp6852.set(nrichRPG.coreWorkout.blank(qa.get().answerHtml) ? qa.get().answer : qa.get().answerHtml);
        }));
        subs__.addSub(mobl.ref(qa, 'answerHtml').addEventListener('change', function() {
          tmp6852.set(nrichRPG.coreWorkout.blank(qa.get().answerHtml) ? qa.get().answer : qa.get().answerHtml);
        }));
        
        var nodes7023 = $("<span>");
        node940.append(nodes7023);
        subs__.addSub((mobl.html)(tmp6852, function(_, callback) {
          var root7998 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root7998); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7023;
          nodes7023 = node.contents();
          oldNodes.replaceWith(nodes7023);
        }));
        node939.append(node940);
        
        
        
      } else {
        var nodes7024 = $("<span>");
        node939.append(nodes7024);
        subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
          var root7999 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root7999); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7024;
          nodes7024 = node.contents();
          oldNodes.replaceWith(nodes7024);
        }));
        
        
      }
    };
    renderCond226();
    subs__.addSub(tmp6853.addEventListener('change', function() {
      renderCond226();
    }));
    
    callback(root7996); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7021;
    nodes7021 = node.contents();
    oldNodes.replaceWith(nodes7021);
  }));
  var nodes7025 = $("<span>");
  root7995.append(nodes7025);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root8000 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
      var tmp6930 = result__;
      var nodes7026 = $("<span>");
      root8000.append(nodes7026);
      subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8001 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8001); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7026;
        nodes7026 = node.contents();
        oldNodes.replaceWith(nodes7026);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = true;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp6856 = mobl.ref(result__);
      
      var nodes7027 = $("<span>");
      root8000.append(nodes7027);
      subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp6856, function(_, callback) {
        var root8002 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8002); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7027;
        nodes7027 = node.contents();
        oldNodes.replaceWith(nodes7027);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = false;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp6857 = mobl.ref(result__);
      
      var nodes7028 = $("<span>");
      root8000.append(nodes7028);
      subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp6857, function(_, callback) {
        var root8003 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8003); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7028;
        nodes7028 = node.contents();
        oldNodes.replaceWith(nodes7028);
      }));
      callback(root8000); return subs__;
      
      
      
    });
    return subs__;
  }, function(node) {
    var oldNodes = nodes7025;
    nodes7025 = node.contents();
    oldNodes.replaceWith(nodes7025);
  }));
  callback(root7995); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp6931 = result__;
    var result__ = tmp6931;
    var qa2 = result__;
    var result__ = qa2 == null;
    if(result__) {
      nrichRPG.questionAnswer.QA.all().one(function(result__) {
        var tmp6932 = result__;
        var result__ = tmp6932;
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

nrichRPG.coreWorkout.blank = function(text) {
   var __this = this;
  return (text == null || text.toString() == "");
};


nrichRPG.coreWorkout.showQA = function(qa, number, elements, callback) {
  var root8004 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp6939 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp6859 = mobl.ref(result__);
  
  var nodes7029 = $("<span>");
  root8004.append(nodes7029);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(mobl.ref(qa, 'topic'), tmp6859, function(_, callback) {
    var root8005 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp6933 = result__;
                       var result__ = tmp6933;
                       var qa2 = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp6934 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp6858 = mobl.ref(result__);
    
    var nodes7030 = $("<span>");
    root8005.append(nodes7030);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp6858, function(_, callback) {
      var root8006 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8006); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7030;
      nodes7030 = node.contents();
      oldNodes.replaceWith(nodes7030);
    }));
    callback(root8005); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7029;
    nodes7029 = node.contents();
    oldNodes.replaceWith(nodes7029);
  }));
  var nodes7031 = $("<span>");
  root8004.append(nodes7031);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8007 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp6938 = result__;
                       var result__ = nrichRPG.coreWorkout.removeMathJaxIncidentElements();
                       var result__ = mobl.$("#question-block-" + number.get()).children("span:first").html();
                       qa.get().questionHtml = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6862 = mobl.ref(result__);
    
    var nodes7032 = $("<span>");
    root8007.append(nodes7032);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp6862, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root8008 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + number.get() + ". ";
      var tmp6860 = mobl.ref(result__);
      subs__.addSub(number.addEventListener('change', function() {
        tmp6860.set("Q" + number.get() + ". ");
      }));
      
      var nodes7033 = $("<span>");
      root8008.append(nodes7033);
      subs__.addSub((mobl.html)(tmp6860, function(_, callback) {
        var root8009 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8009); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7033;
        nodes7033 = node.contents();
        oldNodes.replaceWith(nodes7033);
      }));
      
      var node941 = $("<span>");
      
      var ref902 = mobl.ref("question-block-" + number.get());
      if(ref902.get() !== null) {
        node941.attr('id', ref902.get());
        subs__.addSub(ref902.addEventListener('change', function(_, ref, val) {
          node941.attr('id', val);
        }));
        subs__.addSub(number.addEventListener('change', function() {
          node941.attr('id', "question-block-" + number.get());
        }));
        
      }
      subs__.addSub(ref902.rebind());
      
      var result__ = nrichRPG.coreWorkout.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml;
      var tmp6861 = mobl.ref(result__);
      subs__.addSub(mobl.ref(qa, 'question').addEventListener('change', function() {
        tmp6861.set(nrichRPG.coreWorkout.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml);
      }));
      subs__.addSub(mobl.ref(qa, 'questionHtml').addEventListener('change', function() {
        tmp6861.set(nrichRPG.coreWorkout.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml);
      }));
      
      var nodes7034 = $("<span>");
      node941.append(nodes7034);
      subs__.addSub((mobl.html)(tmp6861, function(_, callback) {
        var root8010 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8010); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7034;
        nodes7034 = node.contents();
        oldNodes.replaceWith(nodes7034);
      }));
      root8008.append(node941);
      nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
        var tmp6935 = result__;
        callback(root8008); return subs__;
      });
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7032;
      nodes7032 = node.contents();
      oldNodes.replaceWith(nodes7032);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp6937 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6864 = mobl.ref(result__);
    
    var nodes7035 = $("<span>");
    root8007.append(nodes7035);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6864, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root8011 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7036 = $("<span>");
      root8011.append(nodes7036);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8012 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                           var tmp6936 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp6863 = mobl.ref(result__);
        
        var nodes7037 = $("<span>");
        root8012.append(nodes7037);
        subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp6863, function(_, callback) {
          var root8013 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root8013); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7037;
          nodes7037 = node.contents();
          oldNodes.replaceWith(nodes7037);
        }));
        callback(root8012); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7036;
        nodes7036 = node.contents();
        oldNodes.replaceWith(nodes7036);
      }));
      
      var node942 = $("<span>");
      root8011.append(node942);
      var condSubs227 = new mobl.CompSubscription();
      subs__.addSub(condSubs227);
      var oldValue227;
      var renderCond227 = function() {
        var value527 = qa.get().done;
        if(oldValue227 === value527) return;
        oldValue227 = value527;
        var subs__ = condSubs227;
        subs__.unsubscribe();
        node942.empty();
        if(value527) {
          var nodes7038 = $("<span>");
          node942.append(nodes7038);
          subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, number, function(_, callback) {
            var root8014 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root8014); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes7038;
            nodes7038 = node.contents();
            oldNodes.replaceWith(nodes7038);
          }));
          
          
        } else {
          
        }
      };
      renderCond227();
      subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
        renderCond227();
      }));
      
      callback(root8011); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7035;
      nodes7035 = node.contents();
      oldNodes.replaceWith(nodes7035);
    }));
    callback(root8007); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7031;
    nodes7031 = node.contents();
    oldNodes.replaceWith(nodes7031);
  }));
  callback(root8004); return subs__;
  
  
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
  qas.list(function(coll702) {
    coll702 = coll702.reverse();
    function processOne252() {
      var item;
      item = coll702.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll702.length > 0) processOne252(); else rest252();
      
    }
    function rest252() {
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
    if(coll702.length > 0) processOne252(); else rest252();
  });
  
};

nrichRPG.coreWorkout.makeQAStar = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll703) {
    coll703 = coll703.reverse();
    function processOne253() {
      var item;
      item = coll703.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll703.length > 0) processOne253(); else rest253();
      
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
    if(coll703.length > 0) processOne253(); else rest253();
  });
  
};

nrichRPG.coreWorkout.makeQAStats = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll704) {
    coll704 = coll704.reverse();
    function processOne254() {
      var item;
      item = coll704.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll704.length > 0) processOne254(); else rest254();
      
    }
    function rest254() {
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
    if(coll704.length > 0) processOne254(); else rest254();
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