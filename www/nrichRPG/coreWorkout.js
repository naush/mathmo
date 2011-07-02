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
    var tmp97 = result__;
    var result__ = tmp97;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp98 = result__;
      var result__ = tmp98;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp99 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicId, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll0) {
    coll0 = coll0.reverse();
    function processOne0() {
      var i;
      i = coll0.pop();
      nrichRPG.coreWorkout.makeQA(topicId, function(result__) {
        var tmp100 = result__;
        
        if(coll0.length > 0) processOne0(); else rest0();
        
      });
    }
    function rest0() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll0.length > 0) processOne0(); else rest0();
  });
  
};

nrichRPG.coreWorkout.randomQStar = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll1) {
    coll1 = coll1.reverse();
    function processOne1() {
      var i;
      i = coll1.pop();
      var result__ = mobl.Math.floor(13 * mobl.Math.random());
      var r = result__;
      var result__ = "F" + (1 + r);
      var tid = result__;
      var result__ = tid == "F3";
      if(result__) {
        var result__ = "F3a";
        tid = result__;
        nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
          var tmp101 = result__;
          
          if(coll1.length > 0) processOne1(); else rest1();
          
        });
      } else {
        {
          nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
            var tmp101 = result__;
            
            if(coll1.length > 0) processOne1(); else rest1();
            
          });
        }
      }
    }
    function rest1() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll1.length > 0) processOne1(); else rest1();
  });
  
};

nrichRPG.coreWorkout.randomQStats = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll2) {
    coll2 = coll2.reverse();
    function processOne2() {
      var i;
      i = coll2.pop();
      var result__ = mobl.Math.floor(6 * mobl.Math.random());
      var r = result__;
      var result__ = "S" + (1 + r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
        var tmp102 = result__;
        
        if(coll2.length > 0) processOne2(); else rest2();
        
      });
    }
    function rest2() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll2.length > 0) processOne2(); else rest2();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root0 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes0 = $("<span>");
  root0.append(nodes0);
  subs__.addSub((ui.group)(function(_, callback) {
    var root1 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp111 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp0 = mobl.ref(result__);
    
    var nodes1 = $("<span>");
    root1.append(nodes1);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp0, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2 = $("<span>");
      root2.append(nodes2);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root3 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root3); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2;
        nodes2 = node.contents();
        oldNodes.replaceWith(nodes2);
      }));
      callback(root2); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1;
      nodes1 = node.contents();
      oldNodes.replaceWith(nodes1);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp109 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1 = mobl.ref(result__);
    
    var nodes3 = $("<span>");
    root1.append(nodes3);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4 = $("<span>");
      root4.append(nodes4);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4;
        nodes4 = node.contents();
        oldNodes.replaceWith(nodes4);
      }));
      callback(root4); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3;
      nodes3 = node.contents();
      oldNodes.replaceWith(nodes3);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp108 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp2 = mobl.ref(result__);
    
    var nodes5 = $("<span>");
    root1.append(nodes5);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp2, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root6 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6 = $("<span>");
      root6.append(nodes6);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6;
        nodes6 = node.contents();
        oldNodes.replaceWith(nodes6);
      }));
      callback(root6); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes5;
      nodes5 = node.contents();
      oldNodes.replaceWith(nodes5);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp107 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3 = mobl.ref(result__);
    
    var nodes7 = $("<span>");
    root1.append(nodes7);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes8 = $("<span>");
      root8.append(nodes8);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8;
        nodes8 = node.contents();
        oldNodes.replaceWith(nodes8);
      }));
      callback(root8); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7;
      nodes7 = node.contents();
      oldNodes.replaceWith(nodes7);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp106 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4 = mobl.ref(result__);
    
    var nodes9 = $("<span>");
    root1.append(nodes9);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root10 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes10 = $("<span>");
      root10.append(nodes10);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10;
        nodes10 = node.contents();
        oldNodes.replaceWith(nodes10);
      }));
      callback(root10); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes9;
      nodes9 = node.contents();
      oldNodes.replaceWith(nodes9);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp105 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5 = mobl.ref(result__);
    
    var nodes11 = $("<span>");
    root1.append(nodes11);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root12 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes12 = $("<span>");
      root12.append(nodes12);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root13 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root13); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes12;
        nodes12 = node.contents();
        oldNodes.replaceWith(nodes12);
      }));
      callback(root12); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes11;
      nodes11 = node.contents();
      oldNodes.replaceWith(nodes11);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp104 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6 = mobl.ref(result__);
    
    var nodes13 = $("<span>");
    root1.append(nodes13);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root14 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14 = $("<span>");
      root14.append(nodes14);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root15 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root15); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14;
        nodes14 = node.contents();
        oldNodes.replaceWith(nodes14);
      }));
      callback(root14); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes13;
      nodes13 = node.contents();
      oldNodes.replaceWith(nodes13);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp103 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp7 = mobl.ref(result__);
    
    var nodes15 = $("<span>");
    root1.append(nodes15);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp7, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes16 = $("<span>");
      root16.append(nodes16);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root17 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root17); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes16;
        nodes16 = node.contents();
        oldNodes.replaceWith(nodes16);
      }));
      callback(root16); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes15;
      nodes15 = node.contents();
      oldNodes.replaceWith(nodes15);
    }));
    callback(root1); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes0;
    nodes0 = node.contents();
    oldNodes.replaceWith(nodes0);
  }));
  callback(root0); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root18 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes17 = $("<span>");
  root18.append(nodes17);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root19 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp9 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp8 = mobl.ref(result__);
    
    var nodes18 = $("<span>");
    root19.append(nodes18);
    subs__.addSub((ui.backButton)(tmp8, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp9, function(_, callback) {
      var root20 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root20); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes18;
      nodes18 = node.contents();
      oldNodes.replaceWith(nodes18);
    }));
    callback(root19); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes17;
    nodes17 = node.contents();
    oldNodes.replaceWith(nodes17);
  }));
  var nodes19 = $("<span>");
  root18.append(nodes19);
  subs__.addSub((ui.group)(function(_, callback) {
    var root21 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(10, function(result__) {
                       var tmp119 = result__;
                       var result__ = mobl.alert("Quadratic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp11 = mobl.ref(result__);
    
    var nodes20 = $("<span>");
    root21.append(nodes20);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp11, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root22 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes21 = $("<span>");
      root22.append(nodes21);
      subs__.addSub((mobl.label)(mobl.ref("+Quadratic equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root23 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root23); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes21;
        nodes21 = node.contents();
        oldNodes.replaceWith(nodes21);
      }));
      callback(root22); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes20;
      nodes20 = node.contents();
      oldNodes.replaceWith(nodes20);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(11, function(result__) {
                       var tmp118 = result__;
                       var result__ = mobl.alert("Completing the Square Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp12 = mobl.ref(result__);
    
    var nodes22 = $("<span>");
    root21.append(nodes22);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp12, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root24 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes23 = $("<span>");
      root24.append(nodes23);
      subs__.addSub((mobl.label)(mobl.ref("+Completing the square"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root25 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root25); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes23;
        nodes23 = node.contents();
        oldNodes.replaceWith(nodes23);
      }));
      callback(root24); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes22;
      nodes22 = node.contents();
      oldNodes.replaceWith(nodes22);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(7, function(result__) {
                       var tmp117 = result__;
                       var result__ = mobl.alert("Ineqalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp13 = mobl.ref(result__);
    
    var nodes24 = $("<span>");
    root21.append(nodes24);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp13, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root26 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes25 = $("<span>");
      root26.append(nodes25);
      subs__.addSub((mobl.label)(mobl.ref("+Inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root27 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root27); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes25;
        nodes25 = node.contents();
        oldNodes.replaceWith(nodes25);
      }));
      callback(root26); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes24;
      nodes24 = node.contents();
      oldNodes.replaceWith(nodes24);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(9, function(result__) {
                       var tmp116 = result__;
                       var result__ = mobl.alert("Factor theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14 = mobl.ref(result__);
    
    var nodes26 = $("<span>");
    root21.append(nodes26);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root28 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes27 = $("<span>");
      root28.append(nodes27);
      subs__.addSub((mobl.label)(mobl.ref("+Factor theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root29 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root29); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes27;
        nodes27 = node.contents();
        oldNodes.replaceWith(nodes27);
      }));
      callback(root28); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes26;
      nodes26 = node.contents();
      oldNodes.replaceWith(nodes26);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(1, function(result__) {
                       var tmp115 = result__;
                       var result__ = mobl.alert("Partial fraction Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp15 = mobl.ref(result__);
    
    var nodes28 = $("<span>");
    root21.append(nodes28);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp15, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root30 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes29 = $("<span>");
      root30.append(nodes29);
      subs__.addSub((mobl.label)(mobl.ref("+Partial fractions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root31 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root31); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes29;
        nodes29 = node.contents();
        oldNodes.replaceWith(nodes29);
      }));
      callback(root30); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes28;
      nodes28 = node.contents();
      oldNodes.replaceWith(nodes28);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(30, function(result__) {
                       var tmp114 = result__;
                       var result__ = mobl.alert("Powers Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp16 = mobl.ref(result__);
    
    var nodes30 = $("<span>");
    root21.append(nodes30);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp16, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root32 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes31 = $("<span>");
      root32.append(nodes31);
      subs__.addSub((mobl.label)(mobl.ref("+Powers"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root33 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root33); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes31;
        nodes31 = node.contents();
        oldNodes.replaceWith(nodes31);
      }));
      callback(root32); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes30;
      nodes30 = node.contents();
      oldNodes.replaceWith(nodes30);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(13, function(result__) {
                       var tmp113 = result__;
                       var result__ = mobl.alert("Logarithm Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp17 = mobl.ref(result__);
    
    var nodes32 = $("<span>");
    root21.append(nodes32);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp17, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root34 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes33 = $("<span>");
      root34.append(nodes33);
      subs__.addSub((mobl.label)(mobl.ref("+Logarithms"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root35 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root35); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes33;
        nodes33 = node.contents();
        oldNodes.replaceWith(nodes33);
      }));
      callback(root34); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes32;
      nodes32 = node.contents();
      oldNodes.replaceWith(nodes32);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(17, function(result__) {
                       var tmp112 = result__;
                       var result__ = mobl.alert("Trig equation Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp18 = mobl.ref(result__);
    
    var nodes34 = $("<span>");
    root21.append(nodes34);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp18, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root36 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes35 = $("<span>");
      root36.append(nodes35);
      subs__.addSub((mobl.label)(mobl.ref("+Trig equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root37 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root37); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes35;
        nodes35 = node.contents();
        oldNodes.replaceWith(nodes35);
      }));
      callback(root36); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes34;
      nodes34 = node.contents();
      oldNodes.replaceWith(nodes34);
    }));
    callback(root21); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes19;
    nodes19 = node.contents();
    oldNodes.replaceWith(nodes19);
  }));
  callback(root18); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root38 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes36 = $("<span>");
  root38.append(nodes36);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root39 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp21 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp19 = mobl.ref(result__);
    
    var nodes37 = $("<span>");
    root39.append(nodes37);
    subs__.addSub((ui.backButton)(tmp19, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp21, function(_, callback) {
      var root40 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root40); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes37;
      nodes37 = node.contents();
      oldNodes.replaceWith(nodes37);
    }));
    callback(root39); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes36;
    nodes36 = node.contents();
    oldNodes.replaceWith(nodes36);
  }));
  var nodes38 = $("<span>");
  root38.append(nodes38);
  subs__.addSub((ui.group)(function(_, callback) {
    var root41 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(24, function(result__) {
                       var tmp125 = result__;
                       var result__ = mobl.alert("Modulus Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp22 = mobl.ref(result__);
    
    var nodes39 = $("<span>");
    root41.append(nodes39);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp22, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root42 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes40 = $("<span>");
      root42.append(nodes40);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus function"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root43 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root43); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes40;
        nodes40 = node.contents();
        oldNodes.replaceWith(nodes40);
      }));
      callback(root42); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes39;
      nodes39 = node.contents();
      oldNodes.replaceWith(nodes39);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(25, function(result__) {
                       var tmp124 = result__;
                       var result__ = mobl.alert("Transformations of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp23 = mobl.ref(result__);
    
    var nodes41 = $("<span>");
    root41.append(nodes41);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp23, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root44 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes42 = $("<span>");
      root44.append(nodes42);
      subs__.addSub((mobl.label)(mobl.ref("+Transformations of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root45 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root45); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes42;
        nodes42 = node.contents();
        oldNodes.replaceWith(nodes42);
      }));
      callback(root44); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes41;
      nodes41 = node.contents();
      oldNodes.replaceWith(nodes41);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(26, function(result__) {
                       var tmp123 = result__;
                       var result__ = mobl.alert("Composition of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp24 = mobl.ref(result__);
    
    var nodes43 = $("<span>");
    root41.append(nodes43);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp24, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root46 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes44 = $("<span>");
      root46.append(nodes44);
      subs__.addSub((mobl.label)(mobl.ref("+Composition of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root47 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root47); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes44;
        nodes44 = node.contents();
        oldNodes.replaceWith(nodes44);
      }));
      callback(root46); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes43;
      nodes43 = node.contents();
      oldNodes.replaceWith(nodes43);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(270, function(result__) {
                       var tmp122 = result__;
                       var result__ = mobl.alert("Implicit functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp25 = mobl.ref(result__);
    
    var nodes45 = $("<span>");
    root41.append(nodes45);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp25, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root48 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes46 = $("<span>");
      root48.append(nodes46);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root49 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root49); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes46;
        nodes46 = node.contents();
        oldNodes.replaceWith(nodes46);
      }));
      callback(root48); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes45;
      nodes45 = node.contents();
      oldNodes.replaceWith(nodes45);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(27, function(result__) {
                       var tmp121 = result__;
                       var result__ = mobl.alert("Parametric functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp26 = mobl.ref(result__);
    
    var nodes47 = $("<span>");
    root41.append(nodes47);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp26, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root50 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes48 = $("<span>");
      root50.append(nodes48);
      subs__.addSub((mobl.label)(mobl.ref("+Parametric functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root51 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root51); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes48;
        nodes48 = node.contents();
        oldNodes.replaceWith(nodes48);
      }));
      callback(root50); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes47;
      nodes47 = node.contents();
      oldNodes.replaceWith(nodes47);
    }));
    callback(root41); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes38;
    nodes38 = node.contents();
    oldNodes.replaceWith(nodes38);
  }));
  callback(root38); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root52 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes49 = $("<span>");
  root52.append(nodes49);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root53 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp28 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp27 = mobl.ref(result__);
    
    var nodes50 = $("<span>");
    root53.append(nodes50);
    subs__.addSub((ui.backButton)(tmp27, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp28, function(_, callback) {
      var root54 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root54); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes50;
      nodes50 = node.contents();
      oldNodes.replaceWith(nodes50);
    }));
    callback(root53); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes49;
    nodes49 = node.contents();
    oldNodes.replaceWith(nodes49);
  }));
  var nodes51 = $("<span>");
  root52.append(nodes51);
  subs__.addSub((ui.group)(function(_, callback) {
    var root55 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(15, function(result__) {
                       var tmp128 = result__;
                       var result__ = mobl.alert("Triangles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp29 = mobl.ref(result__);
    
    var nodes52 = $("<span>");
    root55.append(nodes52);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp29, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root56 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes53 = $("<span>");
      root56.append(nodes53);
      subs__.addSub((mobl.label)(mobl.ref("+Triangles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root57 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root57); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes53;
        nodes53 = node.contents();
        oldNodes.replaceWith(nodes53);
      }));
      callback(root56); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes52;
      nodes52 = node.contents();
      oldNodes.replaceWith(nodes52);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(16, function(result__) {
                       var tmp127 = result__;
                       var result__ = mobl.alert("Circles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp31 = mobl.ref(result__);
    
    var nodes54 = $("<span>");
    root55.append(nodes54);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp31, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root58 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes55 = $("<span>");
      root58.append(nodes55);
      subs__.addSub((mobl.label)(mobl.ref("+Circles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root59 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root59); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes55;
        nodes55 = node.contents();
        oldNodes.replaceWith(nodes55);
      }));
      callback(root58); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes54;
      nodes54 = node.contents();
      oldNodes.replaceWith(nodes54);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(6, function(result__) {
                       var tmp126 = result__;
                       var result__ = mobl.alert("3D lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp32 = mobl.ref(result__);
    
    var nodes56 = $("<span>");
    root55.append(nodes56);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp32, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root60 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes57 = $("<span>");
      root60.append(nodes57);
      subs__.addSub((mobl.label)(mobl.ref("+ 3D lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root61 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root61); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes57;
        nodes57 = node.contents();
        oldNodes.replaceWith(nodes57);
      }));
      callback(root60); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes56;
      nodes56 = node.contents();
      oldNodes.replaceWith(nodes56);
    }));
    callback(root55); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes51;
    nodes51 = node.contents();
    oldNodes.replaceWith(nodes51);
  }));
  callback(root52); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root62 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes58 = $("<span>");
  root62.append(nodes58);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root63 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp34 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp33 = mobl.ref(result__);
    
    var nodes59 = $("<span>");
    root63.append(nodes59);
    subs__.addSub((ui.backButton)(tmp33, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp34, function(_, callback) {
      var root64 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root64); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes59;
      nodes59 = node.contents();
      oldNodes.replaceWith(nodes59);
    }));
    callback(root63); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes58;
    nodes58 = node.contents();
    oldNodes.replaceWith(nodes58);
  }));
  var nodes60 = $("<span>");
  root62.append(nodes60);
  subs__.addSub((ui.group)(function(_, callback) {
    var root65 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(8, function(result__) {
                       var tmp133 = result__;
                       var result__ = mobl.alert("Arithmetic Progressions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp35 = mobl.ref(result__);
    
    var nodes61 = $("<span>");
    root65.append(nodes61);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp35, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root66 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes62 = $("<span>");
      root66.append(nodes62);
      subs__.addSub((mobl.label)(mobl.ref("+Arithmetic progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root67 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root67); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes62;
        nodes62 = node.contents();
        oldNodes.replaceWith(nodes62);
      }));
      callback(root66); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes61;
      nodes61 = node.contents();
      oldNodes.replaceWith(nodes61);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(12, function(result__) {
                       var tmp132 = result__;
                       var result__ = mobl.alert("Binomial Expansion Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp36 = mobl.ref(result__);
    
    var nodes63 = $("<span>");
    root65.append(nodes63);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp36, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root68 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes64 = $("<span>");
      root68.append(nodes64);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial expansion"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root69 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root69); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes64;
        nodes64 = node.contents();
        oldNodes.replaceWith(nodes64);
      }));
      callback(root68); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes63;
      nodes63 = node.contents();
      oldNodes.replaceWith(nodes63);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(23, function(result__) {
                       var tmp131 = result__;
                       var result__ = mobl.alert("Geometric Progression Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp37 = mobl.ref(result__);
    
    var nodes65 = $("<span>");
    root65.append(nodes65);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp37, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root70 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes66 = $("<span>");
      root70.append(nodes66);
      subs__.addSub((mobl.label)(mobl.ref("+Geometric progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root71 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root71); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes66;
        nodes66 = node.contents();
        oldNodes.replaceWith(nodes66);
      }));
      callback(root70); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes65;
      nodes65 = node.contents();
      oldNodes.replaceWith(nodes65);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(2, function(result__) {
                       var tmp129 = result__;
                       var result__ = mobl.alert("Binomial theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp38 = mobl.ref(result__);
    
    var nodes67 = $("<span>");
    root65.append(nodes67);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp38, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root72 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes68 = $("<span>");
      root72.append(nodes68);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root73 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root73); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes68;
        nodes68 = node.contents();
        oldNodes.replaceWith(nodes68);
      }));
      callback(root72); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes67;
      nodes67 = node.contents();
      oldNodes.replaceWith(nodes67);
    }));
    callback(root65); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes60;
    nodes60 = node.contents();
    oldNodes.replaceWith(nodes60);
  }));
  callback(root62); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root74 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes69 = $("<span>");
  root74.append(nodes69);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root75 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp41 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp39 = mobl.ref(result__);
    
    var nodes70 = $("<span>");
    root75.append(nodes70);
    subs__.addSub((ui.backButton)(tmp39, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp41, function(_, callback) {
      var root76 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root76); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes70;
      nodes70 = node.contents();
      oldNodes.replaceWith(nodes70);
    }));
    callback(root75); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes69;
    nodes69 = node.contents();
    oldNodes.replaceWith(nodes69);
  }));
  var nodes71 = $("<span>");
  root74.append(nodes71);
  subs__.addSub((ui.group)(function(_, callback) {
    var root77 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(5, function(result__) {
                       var tmp135 = result__;
                       var result__ = mobl.alert("Scalar product Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp42 = mobl.ref(result__);
    
    var nodes72 = $("<span>");
    root77.append(nodes72);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp42, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root78 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes73 = $("<span>");
      root78.append(nodes73);
      subs__.addSub((mobl.label)(mobl.ref("+Scalar products"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root79 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root79); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes73;
        nodes73 = node.contents();
        oldNodes.replaceWith(nodes73);
      }));
      callback(root78); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes72;
      nodes72 = node.contents();
      oldNodes.replaceWith(nodes72);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(18, function(result__) {
                       var tmp134 = result__;
                       var result__ = mobl.alert("Vector equation of lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp43 = mobl.ref(result__);
    
    var nodes74 = $("<span>");
    root77.append(nodes74);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp43, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root80 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes75 = $("<span>");
      root80.append(nodes75);
      subs__.addSub((mobl.label)(mobl.ref("+Vector equation of lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root81 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root81); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes75;
        nodes75 = node.contents();
        oldNodes.replaceWith(nodes75);
      }));
      callback(root80); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes74;
      nodes74 = node.contents();
      oldNodes.replaceWith(nodes74);
    }));
    callback(root77); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes71;
    nodes71 = node.contents();
    oldNodes.replaceWith(nodes71);
  }));
  callback(root74); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root82 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes76 = $("<span>");
  root82.append(nodes76);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root83 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp45 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp44 = mobl.ref(result__);
    
    var nodes77 = $("<span>");
    root83.append(nodes77);
    subs__.addSub((ui.backButton)(tmp44, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp45, function(_, callback) {
      var root84 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root84); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes77;
      nodes77 = node.contents();
      oldNodes.replaceWith(nodes77);
    }));
    callback(root83); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes76;
    nodes76 = node.contents();
    oldNodes.replaceWith(nodes76);
  }));
  var nodes78 = $("<span>");
  root82.append(nodes78);
  subs__.addSub((ui.group)(function(_, callback) {
    var root85 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(14, function(result__) {
                       var tmp141 = result__;
                       var result__ = mobl.alert("Stationary points Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp46 = mobl.ref(result__);
    
    var nodes79 = $("<span>");
    root85.append(nodes79);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp46, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root86 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes80 = $("<span>");
      root86.append(nodes80);
      subs__.addSub((mobl.label)(mobl.ref("+Stationary points"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root87 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root87); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes80;
        nodes80 = node.contents();
        oldNodes.replaceWith(nodes80);
      }));
      callback(root86); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes79;
      nodes79 = node.contents();
      oldNodes.replaceWith(nodes79);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(20, function(result__) {
                       var tmp139 = result__;
                       var result__ = mobl.alert("Chain rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp47 = mobl.ref(result__);
    
    var nodes81 = $("<span>");
    root85.append(nodes81);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp47, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root88 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes82 = $("<span>");
      root88.append(nodes82);
      subs__.addSub((mobl.label)(mobl.ref("+Chain rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root89 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root89); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes82;
        nodes82 = node.contents();
        oldNodes.replaceWith(nodes82);
      }));
      callback(root88); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes81;
      nodes81 = node.contents();
      oldNodes.replaceWith(nodes81);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(21, function(result__) {
                       var tmp138 = result__;
                       var result__ = mobl.alert("Product rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp48 = mobl.ref(result__);
    
    var nodes83 = $("<span>");
    root85.append(nodes83);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp48, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root90 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes84 = $("<span>");
      root90.append(nodes84);
      subs__.addSub((mobl.label)(mobl.ref("+Product rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root91 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root91); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes84;
        nodes84 = node.contents();
        oldNodes.replaceWith(nodes84);
      }));
      callback(root90); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes83;
      nodes83 = node.contents();
      oldNodes.replaceWith(nodes83);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(22, function(result__) {
                       var tmp137 = result__;
                       var result__ = mobl.alert("Quotient rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp49 = mobl.ref(result__);
    
    var nodes85 = $("<span>");
    root85.append(nodes85);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp49, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root92 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes86 = $("<span>");
      root92.append(nodes86);
      subs__.addSub((mobl.label)(mobl.ref("+Quotient rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root93 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root93); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes86;
        nodes86 = node.contents();
        oldNodes.replaceWith(nodes86);
      }));
      callback(root92); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes85;
      nodes85 = node.contents();
      oldNodes.replaceWith(nodes85);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(19, function(result__) {
                       var tmp136 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp51 = mobl.ref(result__);
    
    var nodes87 = $("<span>");
    root85.append(nodes87);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp51, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root94 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes88 = $("<span>");
      root94.append(nodes88);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root95 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root95); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes88;
        nodes88 = node.contents();
        oldNodes.replaceWith(nodes88);
      }));
      callback(root94); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes87;
      nodes87 = node.contents();
      oldNodes.replaceWith(nodes87);
    }));
    callback(root85); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes78;
    nodes78 = node.contents();
    oldNodes.replaceWith(nodes78);
  }));
  callback(root82); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root96 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes89 = $("<span>");
  root96.append(nodes89);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root97 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp53 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp52 = mobl.ref(result__);
    
    var nodes90 = $("<span>");
    root97.append(nodes90);
    subs__.addSub((ui.backButton)(tmp52, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp53, function(_, callback) {
      var root98 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root98); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes90;
      nodes90 = node.contents();
      oldNodes.replaceWith(nodes90);
    }));
    callback(root97); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes89;
    nodes89 = node.contents();
    oldNodes.replaceWith(nodes89);
  }));
  var nodes91 = $("<span>");
  root96.append(nodes91);
  subs__.addSub((ui.group)(function(_, callback) {
    var root99 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(28, function(result__) {
                       var tmp144 = result__;
                       var result__ = mobl.alert("Integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp54 = mobl.ref(result__);
    
    var nodes92 = $("<span>");
    root99.append(nodes92);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp54, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root100 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes93 = $("<span>");
      root100.append(nodes93);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root101 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root101); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes93;
        nodes93 = node.contents();
        oldNodes.replaceWith(nodes93);
      }));
      callback(root100); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes92;
      nodes92 = node.contents();
      oldNodes.replaceWith(nodes92);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(3, function(result__) {
                       var tmp143 = result__;
                       var result__ = mobl.alert("Polynomial integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp55 = mobl.ref(result__);
    
    var nodes94 = $("<span>");
    root99.append(nodes94);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp55, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root102 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes95 = $("<span>");
      root102.append(nodes95);
      subs__.addSub((mobl.label)(mobl.ref("+Polynomial integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root103 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root103); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes95;
        nodes95 = node.contents();
        oldNodes.replaceWith(nodes95);
      }));
      callback(root102); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes94;
      nodes94 = node.contents();
      oldNodes.replaceWith(nodes94);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(4, function(result__) {
                       var tmp142 = result__;
                       var result__ = mobl.alert("Trig integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp56 = mobl.ref(result__);
    
    var nodes96 = $("<span>");
    root99.append(nodes96);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp56, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root104 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes97 = $("<span>");
      root104.append(nodes97);
      subs__.addSub((mobl.label)(mobl.ref("+Trig integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root105 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root105); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes97;
        nodes97 = node.contents();
        oldNodes.replaceWith(nodes97);
      }));
      callback(root104); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes96;
      nodes96 = node.contents();
      oldNodes.replaceWith(nodes96);
    }));
    callback(root99); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes91;
    nodes91 = node.contents();
    oldNodes.replaceWith(nodes91);
  }));
  callback(root96); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root106 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes98 = $("<span>");
  root106.append(nodes98);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root107 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp58 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp57 = mobl.ref(result__);
    
    var nodes99 = $("<span>");
    root107.append(nodes99);
    subs__.addSub((ui.backButton)(tmp57, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp58, function(_, callback) {
      var root108 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root108); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes99;
      nodes99 = node.contents();
      oldNodes.replaceWith(nodes99);
    }));
    callback(root107); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes98;
    nodes98 = node.contents();
    oldNodes.replaceWith(nodes98);
  }));
  var nodes100 = $("<span>");
  root106.append(nodes100);
  subs__.addSub((ui.group)(function(_, callback) {
    var root109 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(29, function(result__) {
                       var tmp145 = result__;
                       var result__ = mobl.alert("Differential equations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp59 = mobl.ref(result__);
    
    var nodes101 = $("<span>");
    root109.append(nodes101);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp59, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root110 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes102 = $("<span>");
      root110.append(nodes102);
      subs__.addSub((mobl.label)(mobl.ref("+Diff equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root111 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root111); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes102;
        nodes102 = node.contents();
        oldNodes.replaceWith(nodes102);
      }));
      callback(root110); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes101;
      nodes101 = node.contents();
      oldNodes.replaceWith(nodes101);
    }));
    callback(root109); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes100;
    nodes100 = node.contents();
    oldNodes.replaceWith(nodes100);
  }));
  callback(root106); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root112 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes103 = $("<span>");
  root112.append(nodes103);
  subs__.addSub((ui.group)(function(_, callback) {
    var root113 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F1", function(result__) {
                       var tmp159 = result__;
                       var result__ = mobl.alert("Complex arithmetic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp61 = mobl.ref(result__);
    
    var nodes104 = $("<span>");
    root113.append(nodes104);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp61, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root114 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes105 = $("<span>");
      root114.append(nodes105);
      subs__.addSub((mobl.label)(mobl.ref("+Complex arithmetic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root115 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root115); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes105;
        nodes105 = node.contents();
        oldNodes.replaceWith(nodes105);
      }));
      callback(root114); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes104;
      nodes104 = node.contents();
      oldNodes.replaceWith(nodes104);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F2", function(result__) {
                       var tmp158 = result__;
                       var result__ = mobl.alert("Modulus argument Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp62 = mobl.ref(result__);
    
    var nodes106 = $("<span>");
    root113.append(nodes106);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp62, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root116 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes107 = $("<span>");
      root116.append(nodes107);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus argument"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root117 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root117); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes107;
        nodes107 = node.contents();
        oldNodes.replaceWith(nodes107);
      }));
      callback(root116); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes106;
      nodes106 = node.contents();
      oldNodes.replaceWith(nodes106);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F3a", function(result__) {
                       var tmp157 = result__;
                       var result__ = mobl.alert("2nd order DE Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp63 = mobl.ref(result__);
    
    var nodes108 = $("<span>");
    root113.append(nodes108);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp63, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root118 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes109 = $("<span>");
      root118.append(nodes109);
      subs__.addSub((mobl.label)(mobl.ref("+2nd order DEs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root119 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root119); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes109;
        nodes109 = node.contents();
        oldNodes.replaceWith(nodes109);
      }));
      callback(root118); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes108;
      nodes108 = node.contents();
      oldNodes.replaceWith(nodes108);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F4", function(result__) {
                       var tmp156 = result__;
                       var result__ = mobl.alert("Rank 2 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp64 = mobl.ref(result__);
    
    var nodes110 = $("<span>");
    root113.append(nodes110);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp64, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root120 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes111 = $("<span>");
      root120.append(nodes111);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 2 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root121 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root121); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes111;
        nodes111 = node.contents();
        oldNodes.replaceWith(nodes111);
      }));
      callback(root120); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes110;
      nodes110 = node.contents();
      oldNodes.replaceWith(nodes110);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F5", function(result__) {
                       var tmp155 = result__;
                       var result__ = mobl.alert("Taylor Series Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp65 = mobl.ref(result__);
    
    var nodes112 = $("<span>");
    root113.append(nodes112);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp65, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root122 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes113 = $("<span>");
      root122.append(nodes113);
      subs__.addSub((mobl.label)(mobl.ref("+Taylor Series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root123 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root123); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes113;
        nodes113 = node.contents();
        oldNodes.replaceWith(nodes113);
      }));
      callback(root122); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes112;
      nodes112 = node.contents();
      oldNodes.replaceWith(nodes112);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F6", function(result__) {
                       var tmp154 = result__;
                       var result__ = mobl.alert("Polar Coordinates Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp66 = mobl.ref(result__);
    
    var nodes114 = $("<span>");
    root113.append(nodes114);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp66, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root124 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes115 = $("<span>");
      root124.append(nodes115);
      subs__.addSub((mobl.label)(mobl.ref("+Polar Coordinates"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root125 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root125); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes115;
        nodes115 = node.contents();
        oldNodes.replaceWith(nodes115);
      }));
      callback(root124); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes114;
      nodes114 = node.contents();
      oldNodes.replaceWith(nodes114);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F7", function(result__) {
                       var tmp153 = result__;
                       var result__ = mobl.alert("Rank 3 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp67 = mobl.ref(result__);
    
    var nodes116 = $("<span>");
    root113.append(nodes116);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp67, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root126 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes117 = $("<span>");
      root126.append(nodes117);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 3 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root127 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root127); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes117;
        nodes117 = node.contents();
        oldNodes.replaceWith(nodes117);
      }));
      callback(root126); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes116;
      nodes116 = node.contents();
      oldNodes.replaceWith(nodes116);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F8", function(result__) {
                       var tmp152 = result__;
                       var result__ = mobl.alert("Further vectors added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp68 = mobl.ref(result__);
    
    var nodes118 = $("<span>");
    root113.append(nodes118);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp68, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root128 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes119 = $("<span>");
      root128.append(nodes119);
      subs__.addSub((mobl.label)(mobl.ref("+Further vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root129 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root129); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes119;
        nodes119 = node.contents();
        oldNodes.replaceWith(nodes119);
      }));
      callback(root128); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes118;
      nodes118 = node.contents();
      oldNodes.replaceWith(nodes118);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F9", function(result__) {
                       var tmp151 = result__;
                       var result__ = mobl.alert("Newton-Raphson added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp69 = mobl.ref(result__);
    
    var nodes120 = $("<span>");
    root113.append(nodes120);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp69, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root130 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes121 = $("<span>");
      root130.append(nodes121);
      subs__.addSub((mobl.label)(mobl.ref("+Newton-Raphson"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root131 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root131); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes121;
        nodes121 = node.contents();
        oldNodes.replaceWith(nodes121);
      }));
      callback(root130); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes120;
      nodes120 = node.contents();
      oldNodes.replaceWith(nodes120);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F10", function(result__) {
                       var tmp149 = result__;
                       var result__ = mobl.alert("Further inequalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp71 = mobl.ref(result__);
    
    var nodes122 = $("<span>");
    root113.append(nodes122);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp71, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root132 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes123 = $("<span>");
      root132.append(nodes123);
      subs__.addSub((mobl.label)(mobl.ref("+Further inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root133 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root133); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes123;
        nodes123 = node.contents();
        oldNodes.replaceWith(nodes123);
      }));
      callback(root132); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes122;
      nodes122 = node.contents();
      oldNodes.replaceWith(nodes122);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F11", function(result__) {
                       var tmp148 = result__;
                       var result__ = mobl.alert("Integration by substitution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp72 = mobl.ref(result__);
    
    var nodes124 = $("<span>");
    root113.append(nodes124);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp72, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root134 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes125 = $("<span>");
      root134.append(nodes125);
      subs__.addSub((mobl.label)(mobl.ref("+Integration by substitution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root135 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root135); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes125;
        nodes125 = node.contents();
        oldNodes.replaceWith(nodes125);
      }));
      callback(root134); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes124;
      nodes124 = node.contents();
      oldNodes.replaceWith(nodes124);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F12", function(result__) {
                       var tmp147 = result__;
                       var result__ = mobl.alert("Figures of revolution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp73 = mobl.ref(result__);
    
    var nodes126 = $("<span>");
    root113.append(nodes126);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp73, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root136 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes127 = $("<span>");
      root136.append(nodes127);
      subs__.addSub((mobl.label)(mobl.ref("+Figures of revolution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root137 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root137); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes127;
        nodes127 = node.contents();
        oldNodes.replaceWith(nodes127);
      }));
      callback(root136); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes126;
      nodes126 = node.contents();
      oldNodes.replaceWith(nodes126);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F13", function(result__) {
                       var tmp146 = result__;
                       var result__ = mobl.alert("Matrix transformations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp74 = mobl.ref(result__);
    
    var nodes128 = $("<span>");
    root113.append(nodes128);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp74, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root138 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes129 = $("<span>");
      root138.append(nodes129);
      subs__.addSub((mobl.label)(mobl.ref("+Matrix transformations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root139 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root139); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes129;
        nodes129 = node.contents();
        oldNodes.replaceWith(nodes129);
      }));
      callback(root138); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes128;
      nodes128 = node.contents();
      oldNodes.replaceWith(nodes128);
    }));
    callback(root113); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes103;
    nodes103 = node.contents();
    oldNodes.replaceWith(nodes103);
  }));
  callback(root112); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root140 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes130 = $("<span>");
  root140.append(nodes130);
  subs__.addSub((ui.group)(function(_, callback) {
    var root141 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S1", function(result__) {
                       var tmp166 = result__;
                       var result__ = mobl.alert("Discrete Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp75 = mobl.ref(result__);
    
    var nodes131 = $("<span>");
    root141.append(nodes131);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp75, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root142 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes132 = $("<span>");
      root142.append(nodes132);
      subs__.addSub((mobl.label)(mobl.ref("+Discrete Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root143 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root143); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes132;
        nodes132 = node.contents();
        oldNodes.replaceWith(nodes132);
      }));
      callback(root142); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes131;
      nodes131 = node.contents();
      oldNodes.replaceWith(nodes131);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S2", function(result__) {
                       var tmp165 = result__;
                       var result__ = mobl.alert("Continuous Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp76 = mobl.ref(result__);
    
    var nodes133 = $("<span>");
    root141.append(nodes133);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp76, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root144 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes134 = $("<span>");
      root144.append(nodes134);
      subs__.addSub((mobl.label)(mobl.ref("+Continuous Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root145 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root145); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes134;
        nodes134 = node.contents();
        oldNodes.replaceWith(nodes134);
      }));
      callback(root144); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes133;
      nodes133 = node.contents();
      oldNodes.replaceWith(nodes133);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S3", function(result__) {
                       var tmp164 = result__;
                       var result__ = mobl.alert("Hypothesis Testing Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp77 = mobl.ref(result__);
    
    var nodes135 = $("<span>");
    root141.append(nodes135);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp77, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root146 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes136 = $("<span>");
      root146.append(nodes136);
      subs__.addSub((mobl.label)(mobl.ref("+Hypothesis Testing"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root147 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root147); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes136;
        nodes136 = node.contents();
        oldNodes.replaceWith(nodes136);
      }));
      callback(root146); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes135;
      nodes135 = node.contents();
      oldNodes.replaceWith(nodes135);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S4", function(result__) {
                       var tmp163 = result__;
                       var result__ = mobl.alert("Confidence Intervals Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp78 = mobl.ref(result__);
    
    var nodes137 = $("<span>");
    root141.append(nodes137);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp78, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root148 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes138 = $("<span>");
      root148.append(nodes138);
      subs__.addSub((mobl.label)(mobl.ref("+Confidence Intervals"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root149 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root149); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes138;
        nodes138 = node.contents();
        oldNodes.replaceWith(nodes138);
      }));
      callback(root148); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes137;
      nodes137 = node.contents();
      oldNodes.replaceWith(nodes137);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S5", function(result__) {
                       var tmp162 = result__;
                       var result__ = mobl.alert("Chi Squared Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp79 = mobl.ref(result__);
    
    var nodes139 = $("<span>");
    root141.append(nodes139);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp79, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root150 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes140 = $("<span>");
      root150.append(nodes140);
      subs__.addSub((mobl.label)(mobl.ref("+Chi Squared"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root151 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root151); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes140;
        nodes140 = node.contents();
        oldNodes.replaceWith(nodes140);
      }));
      callback(root150); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes139;
      nodes139 = node.contents();
      oldNodes.replaceWith(nodes139);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S6", function(result__) {
                       var tmp161 = result__;
                       var result__ = mobl.alert("Product Moment Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp81 = mobl.ref(result__);
    
    var nodes141 = $("<span>");
    root141.append(nodes141);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp81, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root152 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes142 = $("<span>");
      root152.append(nodes142);
      subs__.addSub((mobl.label)(mobl.ref("+Product Moments"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root153 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root153); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes142;
        nodes142 = node.contents();
        oldNodes.replaceWith(nodes142);
      }));
      callback(root152); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes141;
      nodes141 = node.contents();
      oldNodes.replaceWith(nodes141);
    }));
    callback(root141); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes130;
    nodes130 = node.contents();
    oldNodes.replaceWith(nodes130);
  }));
  callback(root140); return subs__;
  
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
  var root154 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node0 = $("<div>");
  
  var ref3 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref3.get() !== null) {
    node0.attr('class', ref3.get());
    subs__.addSub(ref3.addEventListener('change', function(_, ref, val) {
      node0.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3.rebind());
  
  var val0 = onclick.get();
  if(val0 !== null) {
    subs__.addSub(mobl.domBind(node0, 'tap', val0));
  }
  
  
  var node1 = $("<div>");
  
  var ref2 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref2.get() !== null) {
    node1.attr('class', ref2.get());
    subs__.addSub(ref2.addEventListener('change', function(_, ref, val) {
      node1.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2.rebind());
  
  
  var node2 = $("<div>");
  
  var ref0 = text;
  node2.text(""+ref0.get());
  var ignore0 = false;
  subs__.addSub(ref0.addEventListener('change', function(_, ref, val) {
    if(ignore0) return;
    node2.text(""+val);
  }));
  subs__.addSub(ref0.rebind());
  
  
  var ref1 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref1.get() !== null) {
    node2.attr('class', ref1.get());
    subs__.addSub(ref1.addEventListener('change', function(_, ref, val) {
      node2.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1.rebind());
  
  node1.append(node2);
  node0.append(node1);
  var nodes143 = $("<span>");
  node0.append(nodes143);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl0();
  }));
  
  function renderControl0() {
    subs__.addSub((elements)(function(elements, callback) {
      var root155 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root155); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes143;
      nodes143 = node.contents();
      oldNodes.replaceWith(nodes143);
    }));
  }
  renderControl0();
  root154.append(node0);
  callback(root154); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mathJAX.renderMaths(function(result__) {
    var tmp167 = result__;
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
  var root156 = $("<span>");
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
  var tmp86 = mobl.ref(result__);
  
  var result__ = qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle;
  var tmp85 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    tmp85.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.agreeStyle).addEventListener('change', function() {
    tmp85.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.disagreeStyle).addEventListener('change', function() {
    tmp85.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  
  var nodes144 = $("<span>");
  root156.append(nodes144);
  subs__.addSub((mobl.block)(tmp85, mobl.ref(null), tmp86, mobl.ref(null), function(_, callback) {
    var root157 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = "A" + number.get() + ". ";
    var tmp82 = mobl.ref(result__);
    subs__.addSub(number.addEventListener('change', function() {
      tmp82.set("A" + number.get() + ". ");
    }));
    
    var nodes145 = $("<span>");
    root157.append(nodes145);
    subs__.addSub((mobl.label)(tmp82, mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root158 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root158); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes145;
      nodes145 = node.contents();
      oldNodes.replaceWith(nodes145);
    }));
    var result__ = qa.get().answer != "%GRAPH%";
    var tmp84 = mobl.ref(result__);
    subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
      tmp84.set(qa.get().answer != "%GRAPH%");
    }));
    
    
    var node3 = $("<span>");
    root157.append(node3);
    var condSubs0 = new mobl.CompSubscription();
    subs__.addSub(condSubs0);
    var oldValue0;
    var renderCond0 = function() {
      var value0 = tmp84.get();
      if(oldValue0 === value0) return;
      oldValue0 = value0;
      var subs__ = condSubs0;
      subs__.unsubscribe();
      node3.empty();
      if(value0) {
        
        var node4 = $("<span>");
        
        var ref4 = mobl.ref("answer-block-" + number.get());
        if(ref4.get() !== null) {
          node4.attr('id', ref4.get());
          subs__.addSub(ref4.addEventListener('change', function(_, ref, val) {
            node4.attr('id', val);
          }));
          subs__.addSub(number.addEventListener('change', function() {
            node4.attr('id', "answer-block-" + number.get());
          }));
          
        }
        subs__.addSub(ref4.rebind());
        
        var result__ = plot.blank(qa.get().answerHtml) ? qa.get().answer : qa.get().answerHtml;
        var tmp83 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp83.set(plot.blank(qa.get().answerHtml) ? qa.get().answer : qa.get().answerHtml);
        }));
        subs__.addSub(mobl.ref(qa, 'answerHtml').addEventListener('change', function() {
          tmp83.set(plot.blank(qa.get().answerHtml) ? qa.get().answer : qa.get().answerHtml);
        }));
        
        var nodes146 = $("<span>");
        node4.append(nodes146);
        subs__.addSub((mobl.html)(tmp83, function(_, callback) {
          var root159 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root159); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes146;
          nodes146 = node.contents();
          oldNodes.replaceWith(nodes146);
        }));
        node3.append(node4);
        
        
        
      } else {
        var nodes147 = $("<span>");
        node3.append(nodes147);
        subs__.addSub((plot.plot)(qa, mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
          var root160 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root160); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes147;
          nodes147 = node.contents();
          oldNodes.replaceWith(nodes147);
        }));
        
        
      }
    };
    renderCond0();
    subs__.addSub(tmp84.addEventListener('change', function() {
      renderCond0();
    }));
    
    callback(root157); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes144;
    nodes144 = node.contents();
    oldNodes.replaceWith(nodes144);
  }));
  var nodes148 = $("<span>");
  root156.append(nodes148);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root161 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes149 = $("<span>");
    root161.append(nodes149);
    subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root162 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root162); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes149;
      nodes149 = node.contents();
      oldNodes.replaceWith(nodes149);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = true;
                     qa.get().correct = result__;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp87 = mobl.ref(result__);
    
    var nodes150 = $("<span>");
    root161.append(nodes150);
    subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp87, function(_, callback) {
      var root163 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root163); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes150;
      nodes150 = node.contents();
      oldNodes.replaceWith(nodes150);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = false;
                     qa.get().correct = result__;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp88 = mobl.ref(result__);
    
    var nodes151 = $("<span>");
    root161.append(nodes151);
    subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp88, function(_, callback) {
      var root164 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root164); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes151;
      nodes151 = node.contents();
      oldNodes.replaceWith(nodes151);
    }));
    callback(root161); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes148;
    nodes148 = node.contents();
    oldNodes.replaceWith(nodes148);
  }));
  callback(root156); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp168 = result__;
    var result__ = tmp168;
    var qa2 = result__;
    var result__ = qa2;
    if(callback && callback.apply) callback(result__);
    return;
    if(callback && callback.apply) callback(); return;
  });
};


nrichRPG.coreWorkout.showQA = function(qa, number, elements, callback) {
  var root165 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp175 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp91 = mobl.ref(result__);
  
  var nodes152 = $("<span>");
  root165.append(nodes152);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(mobl.ref(qa, 'topic'), tmp91, function(_, callback) {
    var root166 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp169 = result__;
                       var result__ = tmp169;
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
                             var tmp171 = result__;
                             if(callback && callback.apply) callback(); return;
                           });
                         }
                       }
                     });
                   };
    var tmp89 = mobl.ref(result__);
    
    var nodes153 = $("<span>");
    root166.append(nodes153);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp89, function(_, callback) {
      var root167 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root167); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes153;
      nodes153 = node.contents();
      oldNodes.replaceWith(nodes153);
    }));
    callback(root166); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes152;
    nodes152 = node.contents();
    oldNodes.replaceWith(nodes152);
  }));
  var nodes154 = $("<span>");
  root165.append(nodes154);
  subs__.addSub((ui.group)(function(_, callback) {
    var root168 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp174 = result__;
                       var result__ = nrichRPG.coreWorkout.removeMathJaxIncidentElements();
                       var result__ = mobl.$("#question-block-" + number.get()).children("span:first").html();
                       qa.get().questionHtml = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp94 = mobl.ref(result__);
    
    var nodes155 = $("<span>");
    root168.append(nodes155);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp94, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root169 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + number.get() + ". ";
      var tmp92 = mobl.ref(result__);
      subs__.addSub(number.addEventListener('change', function() {
        tmp92.set("Q" + number.get() + ". ");
      }));
      
      var nodes156 = $("<span>");
      root169.append(nodes156);
      subs__.addSub((mobl.html)(tmp92, function(_, callback) {
        var root170 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root170); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes156;
        nodes156 = node.contents();
        oldNodes.replaceWith(nodes156);
      }));
      
      var node5 = $("<span>");
      
      var ref5 = mobl.ref("question-block-" + number.get());
      if(ref5.get() !== null) {
        node5.attr('id', ref5.get());
        subs__.addSub(ref5.addEventListener('change', function(_, ref, val) {
          node5.attr('id', val);
        }));
        subs__.addSub(number.addEventListener('change', function() {
          node5.attr('id', "question-block-" + number.get());
        }));
        
      }
      subs__.addSub(ref5.rebind());
      
      var result__ = plot.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml;
      var tmp93 = mobl.ref(result__);
      subs__.addSub(mobl.ref(qa, 'question').addEventListener('change', function() {
        tmp93.set(plot.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml);
      }));
      subs__.addSub(mobl.ref(qa, 'questionHtml').addEventListener('change', function() {
        tmp93.set(plot.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml);
      }));
      
      var nodes157 = $("<span>");
      node5.append(nodes157);
      subs__.addSub((mobl.html)(tmp93, function(_, callback) {
        var root171 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root171); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes157;
        nodes157 = node.contents();
        oldNodes.replaceWith(nodes157);
      }));
      root169.append(node5);
      callback(root169); return subs__;
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes155;
      nodes155 = node.contents();
      oldNodes.replaceWith(nodes155);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp173 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp96 = mobl.ref(result__);
    
    var nodes158 = $("<span>");
    root168.append(nodes158);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp96, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root172 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes159 = $("<span>");
      root172.append(nodes159);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root173 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                           var tmp172 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp95 = mobl.ref(result__);
        
        var nodes160 = $("<span>");
        root173.append(nodes160);
        subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp95, function(_, callback) {
          var root174 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root174); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes160;
          nodes160 = node.contents();
          oldNodes.replaceWith(nodes160);
        }));
        callback(root173); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes159;
        nodes159 = node.contents();
        oldNodes.replaceWith(nodes159);
      }));
      
      var node6 = $("<span>");
      root172.append(node6);
      var condSubs1 = new mobl.CompSubscription();
      subs__.addSub(condSubs1);
      var oldValue1;
      var renderCond1 = function() {
        var value1 = qa.get().done;
        if(oldValue1 === value1) return;
        oldValue1 = value1;
        var subs__ = condSubs1;
        subs__.unsubscribe();
        node6.empty();
        if(value1) {
          var nodes161 = $("<span>");
          node6.append(nodes161);
          subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, number, function(_, callback) {
            var root175 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root175); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes161;
            nodes161 = node.contents();
            oldNodes.replaceWith(nodes161);
          }));
          
          
        } else {
          
        }
      };
      renderCond1();
      subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
        renderCond1();
      }));
      
      callback(root172); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes158;
      nodes158 = node.contents();
      oldNodes.replaceWith(nodes158);
    }));
    callback(root168); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes154;
    nodes154 = node.contents();
    oldNodes.replaceWith(nodes154);
  }));
  callback(root165); return subs__;
  
  
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
  qas.list(function(coll3) {
    coll3 = coll3.reverse();
    function processOne3() {
      var item;
      item = coll3.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll3.length > 0) processOne3(); else rest3();
      
    }
    function rest3() {
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
    if(coll3.length > 0) processOne3(); else rest3();
  });
  
};

nrichRPG.coreWorkout.makeQAStar = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll4) {
    coll4 = coll4.reverse();
    function processOne4() {
      var item;
      item = coll4.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll4.length > 0) processOne4(); else rest4();
      
    }
    function rest4() {
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
    if(coll4.length > 0) processOne4(); else rest4();
  });
  
};

nrichRPG.coreWorkout.makeQAStats = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll5) {
    coll5 = coll5.reverse();
    function processOne5() {
      var item;
      item = coll5.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll5.length > 0) processOne5(); else rest5();
      
    }
    function rest5() {
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
    if(coll5.length > 0) processOne5(); else rest5();
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