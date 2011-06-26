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
    var tmp14656 = result__;
    var result__ = tmp14656;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp14657 = result__;
      var result__ = tmp14657;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp14658 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicId, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll888) {
    coll888 = coll888.reverse();
    function processOne522() {
      var i;
      i = coll888.pop();
      nrichRPG.coreWorkout.makeQA(topicId, function(result__) {
        var tmp14659 = result__;
        
        if(coll888.length > 0) processOne522(); else rest522();
        
      });
    }
    function rest522() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll888.length > 0) processOne522(); else rest522();
  });
  
};

nrichRPG.coreWorkout.randomQStar = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll889) {
    coll889 = coll889.reverse();
    function processOne523() {
      var i;
      i = coll889.pop();
      var result__ = mobl.Math.floor(13 * mobl.Math.random());
      var r = result__;
      var result__ = "F" + (1 + r);
      var tid = result__;
      var result__ = tid == "F3";
      if(result__) {
        var result__ = "F3a";
        tid = result__;
        nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
          var tmp14660 = result__;
          
          if(coll889.length > 0) processOne523(); else rest523();
          
        });
      } else {
        {
          nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
            var tmp14660 = result__;
            
            if(coll889.length > 0) processOne523(); else rest523();
            
          });
        }
      }
    }
    function rest523() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll889.length > 0) processOne523(); else rest523();
  });
  
};

nrichRPG.coreWorkout.randomQStats = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll890) {
    coll890 = coll890.reverse();
    function processOne524() {
      var i;
      i = coll890.pop();
      var result__ = mobl.Math.floor(6 * mobl.Math.random());
      var r = result__;
      var result__ = "S" + (1 + r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
        var tmp14661 = result__;
        
        if(coll890.length > 0) processOne524(); else rest524();
        
      });
    }
    function rest524() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll890.length > 0) processOne524(); else rest524();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root16099 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes14708 = $("<span>");
  root16099.append(nodes14708);
  subs__.addSub((ui.group)(function(_, callback) {
    var root16100 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp14669 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14564 = mobl.ref(result__);
    
    var nodes14709 = $("<span>");
    root16100.append(nodes14709);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14564, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16101 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14710 = $("<span>");
      root16101.append(nodes14710);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16102 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16102); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14710;
        nodes14710 = node.contents();
        oldNodes.replaceWith(nodes14710);
      }));
      callback(root16101); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14709;
      nodes14709 = node.contents();
      oldNodes.replaceWith(nodes14709);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp14668 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14565 = mobl.ref(result__);
    
    var nodes14711 = $("<span>");
    root16100.append(nodes14711);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14565, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16103 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14712 = $("<span>");
      root16103.append(nodes14712);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16104 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16104); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14712;
        nodes14712 = node.contents();
        oldNodes.replaceWith(nodes14712);
      }));
      callback(root16103); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14711;
      nodes14711 = node.contents();
      oldNodes.replaceWith(nodes14711);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp14667 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14566 = mobl.ref(result__);
    
    var nodes14713 = $("<span>");
    root16100.append(nodes14713);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14566, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16105 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14714 = $("<span>");
      root16105.append(nodes14714);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16106 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16106); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14714;
        nodes14714 = node.contents();
        oldNodes.replaceWith(nodes14714);
      }));
      callback(root16105); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14713;
      nodes14713 = node.contents();
      oldNodes.replaceWith(nodes14713);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp14666 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14567 = mobl.ref(result__);
    
    var nodes14715 = $("<span>");
    root16100.append(nodes14715);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14567, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16107 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14716 = $("<span>");
      root16107.append(nodes14716);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16108 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16108); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14716;
        nodes14716 = node.contents();
        oldNodes.replaceWith(nodes14716);
      }));
      callback(root16107); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14715;
      nodes14715 = node.contents();
      oldNodes.replaceWith(nodes14715);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp14665 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14568 = mobl.ref(result__);
    
    var nodes14717 = $("<span>");
    root16100.append(nodes14717);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14568, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16109 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14718 = $("<span>");
      root16109.append(nodes14718);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16110 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16110); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14718;
        nodes14718 = node.contents();
        oldNodes.replaceWith(nodes14718);
      }));
      callback(root16109); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14717;
      nodes14717 = node.contents();
      oldNodes.replaceWith(nodes14717);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp14664 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14569 = mobl.ref(result__);
    
    var nodes14719 = $("<span>");
    root16100.append(nodes14719);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14569, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16111 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14720 = $("<span>");
      root16111.append(nodes14720);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16112 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16112); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14720;
        nodes14720 = node.contents();
        oldNodes.replaceWith(nodes14720);
      }));
      callback(root16111); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14719;
      nodes14719 = node.contents();
      oldNodes.replaceWith(nodes14719);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp14663 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14570 = mobl.ref(result__);
    
    var nodes14721 = $("<span>");
    root16100.append(nodes14721);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14570, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16113 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14722 = $("<span>");
      root16113.append(nodes14722);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16114 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16114); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14722;
        nodes14722 = node.contents();
        oldNodes.replaceWith(nodes14722);
      }));
      callback(root16113); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14721;
      nodes14721 = node.contents();
      oldNodes.replaceWith(nodes14721);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp14662 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14571 = mobl.ref(result__);
    
    var nodes14723 = $("<span>");
    root16100.append(nodes14723);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14571, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16115 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14724 = $("<span>");
      root16115.append(nodes14724);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16116 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16116); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14724;
        nodes14724 = node.contents();
        oldNodes.replaceWith(nodes14724);
      }));
      callback(root16115); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14723;
      nodes14723 = node.contents();
      oldNodes.replaceWith(nodes14723);
    }));
    callback(root16100); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14708;
    nodes14708 = node.contents();
    oldNodes.replaceWith(nodes14708);
  }));
  callback(root16099); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root16117 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes14725 = $("<span>");
  root16117.append(nodes14725);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root16118 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp14573 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp14572 = mobl.ref(result__);
    
    var nodes14726 = $("<span>");
    root16118.append(nodes14726);
    subs__.addSub((ui.backButton)(tmp14572, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp14573, function(_, callback) {
      var root16119 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16119); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14726;
      nodes14726 = node.contents();
      oldNodes.replaceWith(nodes14726);
    }));
    callback(root16118); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14725;
    nodes14725 = node.contents();
    oldNodes.replaceWith(nodes14725);
  }));
  var nodes14727 = $("<span>");
  root16117.append(nodes14727);
  subs__.addSub((ui.group)(function(_, callback) {
    var root16120 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(10, function(result__) {
                       var tmp14677 = result__;
                       var result__ = mobl.alert("Quadratic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14574 = mobl.ref(result__);
    
    var nodes14728 = $("<span>");
    root16120.append(nodes14728);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14574, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16121 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14729 = $("<span>");
      root16121.append(nodes14729);
      subs__.addSub((mobl.label)(mobl.ref("+Quadratic equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16122 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16122); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14729;
        nodes14729 = node.contents();
        oldNodes.replaceWith(nodes14729);
      }));
      callback(root16121); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14728;
      nodes14728 = node.contents();
      oldNodes.replaceWith(nodes14728);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(11, function(result__) {
                       var tmp14676 = result__;
                       var result__ = mobl.alert("Completing the Square Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14575 = mobl.ref(result__);
    
    var nodes14730 = $("<span>");
    root16120.append(nodes14730);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14575, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16123 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14731 = $("<span>");
      root16123.append(nodes14731);
      subs__.addSub((mobl.label)(mobl.ref("+Completing the square"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16124 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16124); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14731;
        nodes14731 = node.contents();
        oldNodes.replaceWith(nodes14731);
      }));
      callback(root16123); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14730;
      nodes14730 = node.contents();
      oldNodes.replaceWith(nodes14730);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(7, function(result__) {
                       var tmp14675 = result__;
                       var result__ = mobl.alert("Ineqalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14576 = mobl.ref(result__);
    
    var nodes14732 = $("<span>");
    root16120.append(nodes14732);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14576, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16125 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14733 = $("<span>");
      root16125.append(nodes14733);
      subs__.addSub((mobl.label)(mobl.ref("+Inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16126 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16126); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14733;
        nodes14733 = node.contents();
        oldNodes.replaceWith(nodes14733);
      }));
      callback(root16125); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14732;
      nodes14732 = node.contents();
      oldNodes.replaceWith(nodes14732);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(9, function(result__) {
                       var tmp14674 = result__;
                       var result__ = mobl.alert("Factor theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14577 = mobl.ref(result__);
    
    var nodes14734 = $("<span>");
    root16120.append(nodes14734);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14577, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16127 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14735 = $("<span>");
      root16127.append(nodes14735);
      subs__.addSub((mobl.label)(mobl.ref("+Factor theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16128 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16128); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14735;
        nodes14735 = node.contents();
        oldNodes.replaceWith(nodes14735);
      }));
      callback(root16127); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14734;
      nodes14734 = node.contents();
      oldNodes.replaceWith(nodes14734);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(1, function(result__) {
                       var tmp14673 = result__;
                       var result__ = mobl.alert("Partial fraction Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14578 = mobl.ref(result__);
    
    var nodes14736 = $("<span>");
    root16120.append(nodes14736);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14578, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16129 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14737 = $("<span>");
      root16129.append(nodes14737);
      subs__.addSub((mobl.label)(mobl.ref("+Partial fractions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16130 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16130); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14737;
        nodes14737 = node.contents();
        oldNodes.replaceWith(nodes14737);
      }));
      callback(root16129); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14736;
      nodes14736 = node.contents();
      oldNodes.replaceWith(nodes14736);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(30, function(result__) {
                       var tmp14672 = result__;
                       var result__ = mobl.alert("Powers Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14579 = mobl.ref(result__);
    
    var nodes14738 = $("<span>");
    root16120.append(nodes14738);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14579, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16131 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14739 = $("<span>");
      root16131.append(nodes14739);
      subs__.addSub((mobl.label)(mobl.ref("+Powers"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16132 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16132); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14739;
        nodes14739 = node.contents();
        oldNodes.replaceWith(nodes14739);
      }));
      callback(root16131); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14738;
      nodes14738 = node.contents();
      oldNodes.replaceWith(nodes14738);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(13, function(result__) {
                       var tmp14671 = result__;
                       var result__ = mobl.alert("Logarithm Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14580 = mobl.ref(result__);
    
    var nodes14740 = $("<span>");
    root16120.append(nodes14740);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14580, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16133 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14741 = $("<span>");
      root16133.append(nodes14741);
      subs__.addSub((mobl.label)(mobl.ref("+Logarithms"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16134 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16134); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14741;
        nodes14741 = node.contents();
        oldNodes.replaceWith(nodes14741);
      }));
      callback(root16133); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14740;
      nodes14740 = node.contents();
      oldNodes.replaceWith(nodes14740);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(17, function(result__) {
                       var tmp14670 = result__;
                       var result__ = mobl.alert("Trig equation Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14581 = mobl.ref(result__);
    
    var nodes14742 = $("<span>");
    root16120.append(nodes14742);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14581, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16135 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14743 = $("<span>");
      root16135.append(nodes14743);
      subs__.addSub((mobl.label)(mobl.ref("+Trig equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16136 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16136); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14743;
        nodes14743 = node.contents();
        oldNodes.replaceWith(nodes14743);
      }));
      callback(root16135); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14742;
      nodes14742 = node.contents();
      oldNodes.replaceWith(nodes14742);
    }));
    callback(root16120); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14727;
    nodes14727 = node.contents();
    oldNodes.replaceWith(nodes14727);
  }));
  callback(root16117); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root16137 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes14744 = $("<span>");
  root16137.append(nodes14744);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root16138 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp14583 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp14582 = mobl.ref(result__);
    
    var nodes14745 = $("<span>");
    root16138.append(nodes14745);
    subs__.addSub((ui.backButton)(tmp14582, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp14583, function(_, callback) {
      var root16139 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16139); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14745;
      nodes14745 = node.contents();
      oldNodes.replaceWith(nodes14745);
    }));
    callback(root16138); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14744;
    nodes14744 = node.contents();
    oldNodes.replaceWith(nodes14744);
  }));
  var nodes14746 = $("<span>");
  root16137.append(nodes14746);
  subs__.addSub((ui.group)(function(_, callback) {
    var root16140 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(24, function(result__) {
                       var tmp14682 = result__;
                       var result__ = mobl.alert("Modulus Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14584 = mobl.ref(result__);
    
    var nodes14747 = $("<span>");
    root16140.append(nodes14747);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14584, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16141 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14748 = $("<span>");
      root16141.append(nodes14748);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus function"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16142 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16142); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14748;
        nodes14748 = node.contents();
        oldNodes.replaceWith(nodes14748);
      }));
      callback(root16141); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14747;
      nodes14747 = node.contents();
      oldNodes.replaceWith(nodes14747);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(25, function(result__) {
                       var tmp14681 = result__;
                       var result__ = mobl.alert("Transformations of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14585 = mobl.ref(result__);
    
    var nodes14749 = $("<span>");
    root16140.append(nodes14749);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14585, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16143 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14750 = $("<span>");
      root16143.append(nodes14750);
      subs__.addSub((mobl.label)(mobl.ref("+Transformations of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16144 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16144); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14750;
        nodes14750 = node.contents();
        oldNodes.replaceWith(nodes14750);
      }));
      callback(root16143); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14749;
      nodes14749 = node.contents();
      oldNodes.replaceWith(nodes14749);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(26, function(result__) {
                       var tmp14680 = result__;
                       var result__ = mobl.alert("Composition of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14586 = mobl.ref(result__);
    
    var nodes14751 = $("<span>");
    root16140.append(nodes14751);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14586, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16145 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14752 = $("<span>");
      root16145.append(nodes14752);
      subs__.addSub((mobl.label)(mobl.ref("+Composition of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16146 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16146); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14752;
        nodes14752 = node.contents();
        oldNodes.replaceWith(nodes14752);
      }));
      callback(root16145); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14751;
      nodes14751 = node.contents();
      oldNodes.replaceWith(nodes14751);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(270, function(result__) {
                       var tmp14679 = result__;
                       var result__ = mobl.alert("Implicit functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14587 = mobl.ref(result__);
    
    var nodes14753 = $("<span>");
    root16140.append(nodes14753);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14587, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16147 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14754 = $("<span>");
      root16147.append(nodes14754);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16148 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16148); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14754;
        nodes14754 = node.contents();
        oldNodes.replaceWith(nodes14754);
      }));
      callback(root16147); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14753;
      nodes14753 = node.contents();
      oldNodes.replaceWith(nodes14753);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(27, function(result__) {
                       var tmp14678 = result__;
                       var result__ = mobl.alert("Parametric functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14588 = mobl.ref(result__);
    
    var nodes14755 = $("<span>");
    root16140.append(nodes14755);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14588, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16149 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14756 = $("<span>");
      root16149.append(nodes14756);
      subs__.addSub((mobl.label)(mobl.ref("+Parametric functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16150 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16150); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14756;
        nodes14756 = node.contents();
        oldNodes.replaceWith(nodes14756);
      }));
      callback(root16149); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14755;
      nodes14755 = node.contents();
      oldNodes.replaceWith(nodes14755);
    }));
    callback(root16140); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14746;
    nodes14746 = node.contents();
    oldNodes.replaceWith(nodes14746);
  }));
  callback(root16137); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root16151 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes14757 = $("<span>");
  root16151.append(nodes14757);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root16152 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp14590 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp14589 = mobl.ref(result__);
    
    var nodes14758 = $("<span>");
    root16152.append(nodes14758);
    subs__.addSub((ui.backButton)(tmp14589, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp14590, function(_, callback) {
      var root16153 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16153); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14758;
      nodes14758 = node.contents();
      oldNodes.replaceWith(nodes14758);
    }));
    callback(root16152); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14757;
    nodes14757 = node.contents();
    oldNodes.replaceWith(nodes14757);
  }));
  var nodes14759 = $("<span>");
  root16151.append(nodes14759);
  subs__.addSub((ui.group)(function(_, callback) {
    var root16154 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(15, function(result__) {
                       var tmp14685 = result__;
                       var result__ = mobl.alert("Triangles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14591 = mobl.ref(result__);
    
    var nodes14760 = $("<span>");
    root16154.append(nodes14760);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14591, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16155 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14761 = $("<span>");
      root16155.append(nodes14761);
      subs__.addSub((mobl.label)(mobl.ref("+Triangles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16156 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16156); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14761;
        nodes14761 = node.contents();
        oldNodes.replaceWith(nodes14761);
      }));
      callback(root16155); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14760;
      nodes14760 = node.contents();
      oldNodes.replaceWith(nodes14760);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(16, function(result__) {
                       var tmp14684 = result__;
                       var result__ = mobl.alert("Circles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14592 = mobl.ref(result__);
    
    var nodes14762 = $("<span>");
    root16154.append(nodes14762);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14592, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16157 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14763 = $("<span>");
      root16157.append(nodes14763);
      subs__.addSub((mobl.label)(mobl.ref("+Circles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16158 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16158); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14763;
        nodes14763 = node.contents();
        oldNodes.replaceWith(nodes14763);
      }));
      callback(root16157); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14762;
      nodes14762 = node.contents();
      oldNodes.replaceWith(nodes14762);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(6, function(result__) {
                       var tmp14683 = result__;
                       var result__ = mobl.alert("3D lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14593 = mobl.ref(result__);
    
    var nodes14764 = $("<span>");
    root16154.append(nodes14764);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14593, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16159 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14765 = $("<span>");
      root16159.append(nodes14765);
      subs__.addSub((mobl.label)(mobl.ref("+ 3D lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16160 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16160); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14765;
        nodes14765 = node.contents();
        oldNodes.replaceWith(nodes14765);
      }));
      callback(root16159); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14764;
      nodes14764 = node.contents();
      oldNodes.replaceWith(nodes14764);
    }));
    callback(root16154); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14759;
    nodes14759 = node.contents();
    oldNodes.replaceWith(nodes14759);
  }));
  callback(root16151); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root16161 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes14766 = $("<span>");
  root16161.append(nodes14766);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root16162 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp14595 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp14594 = mobl.ref(result__);
    
    var nodes14767 = $("<span>");
    root16162.append(nodes14767);
    subs__.addSub((ui.backButton)(tmp14594, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp14595, function(_, callback) {
      var root16163 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16163); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14767;
      nodes14767 = node.contents();
      oldNodes.replaceWith(nodes14767);
    }));
    callback(root16162); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14766;
    nodes14766 = node.contents();
    oldNodes.replaceWith(nodes14766);
  }));
  var nodes14768 = $("<span>");
  root16161.append(nodes14768);
  subs__.addSub((ui.group)(function(_, callback) {
    var root16164 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(8, function(result__) {
                       var tmp14689 = result__;
                       var result__ = mobl.alert("Arithmetic Progressions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14596 = mobl.ref(result__);
    
    var nodes14769 = $("<span>");
    root16164.append(nodes14769);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14596, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16165 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14770 = $("<span>");
      root16165.append(nodes14770);
      subs__.addSub((mobl.label)(mobl.ref("+Arithmetic progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16166 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16166); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14770;
        nodes14770 = node.contents();
        oldNodes.replaceWith(nodes14770);
      }));
      callback(root16165); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14769;
      nodes14769 = node.contents();
      oldNodes.replaceWith(nodes14769);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(12, function(result__) {
                       var tmp14688 = result__;
                       var result__ = mobl.alert("Binomial Expansion Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14597 = mobl.ref(result__);
    
    var nodes14771 = $("<span>");
    root16164.append(nodes14771);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14597, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16167 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14772 = $("<span>");
      root16167.append(nodes14772);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial expansion"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16168 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16168); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14772;
        nodes14772 = node.contents();
        oldNodes.replaceWith(nodes14772);
      }));
      callback(root16167); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14771;
      nodes14771 = node.contents();
      oldNodes.replaceWith(nodes14771);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(23, function(result__) {
                       var tmp14687 = result__;
                       var result__ = mobl.alert("Geometric Progression Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14598 = mobl.ref(result__);
    
    var nodes14773 = $("<span>");
    root16164.append(nodes14773);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14598, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16169 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14774 = $("<span>");
      root16169.append(nodes14774);
      subs__.addSub((mobl.label)(mobl.ref("+Geometric progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16170 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16170); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14774;
        nodes14774 = node.contents();
        oldNodes.replaceWith(nodes14774);
      }));
      callback(root16169); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14773;
      nodes14773 = node.contents();
      oldNodes.replaceWith(nodes14773);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(2, function(result__) {
                       var tmp14686 = result__;
                       var result__ = mobl.alert("Binomial theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14599 = mobl.ref(result__);
    
    var nodes14775 = $("<span>");
    root16164.append(nodes14775);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14599, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16171 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14776 = $("<span>");
      root16171.append(nodes14776);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16172 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16172); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14776;
        nodes14776 = node.contents();
        oldNodes.replaceWith(nodes14776);
      }));
      callback(root16171); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14775;
      nodes14775 = node.contents();
      oldNodes.replaceWith(nodes14775);
    }));
    callback(root16164); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14768;
    nodes14768 = node.contents();
    oldNodes.replaceWith(nodes14768);
  }));
  callback(root16161); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root16173 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes14777 = $("<span>");
  root16173.append(nodes14777);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root16174 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp14601 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp14600 = mobl.ref(result__);
    
    var nodes14778 = $("<span>");
    root16174.append(nodes14778);
    subs__.addSub((ui.backButton)(tmp14600, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp14601, function(_, callback) {
      var root16175 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16175); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14778;
      nodes14778 = node.contents();
      oldNodes.replaceWith(nodes14778);
    }));
    callback(root16174); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14777;
    nodes14777 = node.contents();
    oldNodes.replaceWith(nodes14777);
  }));
  var nodes14779 = $("<span>");
  root16173.append(nodes14779);
  subs__.addSub((ui.group)(function(_, callback) {
    var root16176 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(5, function(result__) {
                       var tmp14691 = result__;
                       var result__ = mobl.alert("Scalar product Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14602 = mobl.ref(result__);
    
    var nodes14780 = $("<span>");
    root16176.append(nodes14780);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14602, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16177 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14781 = $("<span>");
      root16177.append(nodes14781);
      subs__.addSub((mobl.label)(mobl.ref("+Scalar products"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16178 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16178); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14781;
        nodes14781 = node.contents();
        oldNodes.replaceWith(nodes14781);
      }));
      callback(root16177); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14780;
      nodes14780 = node.contents();
      oldNodes.replaceWith(nodes14780);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(18, function(result__) {
                       var tmp14690 = result__;
                       var result__ = mobl.alert("Vector equation of lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14603 = mobl.ref(result__);
    
    var nodes14782 = $("<span>");
    root16176.append(nodes14782);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14603, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16179 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14783 = $("<span>");
      root16179.append(nodes14783);
      subs__.addSub((mobl.label)(mobl.ref("+Vector equation of lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16180 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16180); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14783;
        nodes14783 = node.contents();
        oldNodes.replaceWith(nodes14783);
      }));
      callback(root16179); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14782;
      nodes14782 = node.contents();
      oldNodes.replaceWith(nodes14782);
    }));
    callback(root16176); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14779;
    nodes14779 = node.contents();
    oldNodes.replaceWith(nodes14779);
  }));
  callback(root16173); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root16181 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes14784 = $("<span>");
  root16181.append(nodes14784);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root16182 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp14605 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp14604 = mobl.ref(result__);
    
    var nodes14785 = $("<span>");
    root16182.append(nodes14785);
    subs__.addSub((ui.backButton)(tmp14604, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp14605, function(_, callback) {
      var root16183 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16183); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14785;
      nodes14785 = node.contents();
      oldNodes.replaceWith(nodes14785);
    }));
    callback(root16182); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14784;
    nodes14784 = node.contents();
    oldNodes.replaceWith(nodes14784);
  }));
  var nodes14786 = $("<span>");
  root16181.append(nodes14786);
  subs__.addSub((ui.group)(function(_, callback) {
    var root16184 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(14, function(result__) {
                       var tmp14696 = result__;
                       var result__ = mobl.alert("Stationary points Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14606 = mobl.ref(result__);
    
    var nodes14787 = $("<span>");
    root16184.append(nodes14787);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14606, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16185 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14788 = $("<span>");
      root16185.append(nodes14788);
      subs__.addSub((mobl.label)(mobl.ref("+Stationary points"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16186 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16186); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14788;
        nodes14788 = node.contents();
        oldNodes.replaceWith(nodes14788);
      }));
      callback(root16185); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14787;
      nodes14787 = node.contents();
      oldNodes.replaceWith(nodes14787);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(20, function(result__) {
                       var tmp14695 = result__;
                       var result__ = mobl.alert("Chain rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14607 = mobl.ref(result__);
    
    var nodes14789 = $("<span>");
    root16184.append(nodes14789);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14607, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16187 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14790 = $("<span>");
      root16187.append(nodes14790);
      subs__.addSub((mobl.label)(mobl.ref("+Chain rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16188 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16188); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14790;
        nodes14790 = node.contents();
        oldNodes.replaceWith(nodes14790);
      }));
      callback(root16187); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14789;
      nodes14789 = node.contents();
      oldNodes.replaceWith(nodes14789);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(21, function(result__) {
                       var tmp14694 = result__;
                       var result__ = mobl.alert("Product rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14608 = mobl.ref(result__);
    
    var nodes14791 = $("<span>");
    root16184.append(nodes14791);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14608, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16189 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14792 = $("<span>");
      root16189.append(nodes14792);
      subs__.addSub((mobl.label)(mobl.ref("+Product rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16190 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16190); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14792;
        nodes14792 = node.contents();
        oldNodes.replaceWith(nodes14792);
      }));
      callback(root16189); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14791;
      nodes14791 = node.contents();
      oldNodes.replaceWith(nodes14791);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(22, function(result__) {
                       var tmp14693 = result__;
                       var result__ = mobl.alert("Quotient rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14609 = mobl.ref(result__);
    
    var nodes14793 = $("<span>");
    root16184.append(nodes14793);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14609, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16191 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14794 = $("<span>");
      root16191.append(nodes14794);
      subs__.addSub((mobl.label)(mobl.ref("+Quotient rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16192 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16192); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14794;
        nodes14794 = node.contents();
        oldNodes.replaceWith(nodes14794);
      }));
      callback(root16191); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14793;
      nodes14793 = node.contents();
      oldNodes.replaceWith(nodes14793);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(19, function(result__) {
                       var tmp14692 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14610 = mobl.ref(result__);
    
    var nodes14795 = $("<span>");
    root16184.append(nodes14795);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14610, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16193 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14796 = $("<span>");
      root16193.append(nodes14796);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16194 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16194); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14796;
        nodes14796 = node.contents();
        oldNodes.replaceWith(nodes14796);
      }));
      callback(root16193); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14795;
      nodes14795 = node.contents();
      oldNodes.replaceWith(nodes14795);
    }));
    callback(root16184); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14786;
    nodes14786 = node.contents();
    oldNodes.replaceWith(nodes14786);
  }));
  callback(root16181); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root16195 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes14797 = $("<span>");
  root16195.append(nodes14797);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root16196 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp14612 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp14611 = mobl.ref(result__);
    
    var nodes14798 = $("<span>");
    root16196.append(nodes14798);
    subs__.addSub((ui.backButton)(tmp14611, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp14612, function(_, callback) {
      var root16197 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16197); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14798;
      nodes14798 = node.contents();
      oldNodes.replaceWith(nodes14798);
    }));
    callback(root16196); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14797;
    nodes14797 = node.contents();
    oldNodes.replaceWith(nodes14797);
  }));
  var nodes14799 = $("<span>");
  root16195.append(nodes14799);
  subs__.addSub((ui.group)(function(_, callback) {
    var root16198 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(28, function(result__) {
                       var tmp14699 = result__;
                       var result__ = mobl.alert("Integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14613 = mobl.ref(result__);
    
    var nodes14800 = $("<span>");
    root16198.append(nodes14800);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14613, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16199 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14801 = $("<span>");
      root16199.append(nodes14801);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16200 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16200); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14801;
        nodes14801 = node.contents();
        oldNodes.replaceWith(nodes14801);
      }));
      callback(root16199); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14800;
      nodes14800 = node.contents();
      oldNodes.replaceWith(nodes14800);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(3, function(result__) {
                       var tmp14698 = result__;
                       var result__ = mobl.alert("Polynomial integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14614 = mobl.ref(result__);
    
    var nodes14802 = $("<span>");
    root16198.append(nodes14802);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14614, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16201 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14803 = $("<span>");
      root16201.append(nodes14803);
      subs__.addSub((mobl.label)(mobl.ref("+Polynomial integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16202 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16202); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14803;
        nodes14803 = node.contents();
        oldNodes.replaceWith(nodes14803);
      }));
      callback(root16201); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14802;
      nodes14802 = node.contents();
      oldNodes.replaceWith(nodes14802);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(4, function(result__) {
                       var tmp14697 = result__;
                       var result__ = mobl.alert("Trig integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14615 = mobl.ref(result__);
    
    var nodes14804 = $("<span>");
    root16198.append(nodes14804);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14615, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16203 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14805 = $("<span>");
      root16203.append(nodes14805);
      subs__.addSub((mobl.label)(mobl.ref("+Trig integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16204 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16204); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14805;
        nodes14805 = node.contents();
        oldNodes.replaceWith(nodes14805);
      }));
      callback(root16203); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14804;
      nodes14804 = node.contents();
      oldNodes.replaceWith(nodes14804);
    }));
    callback(root16198); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14799;
    nodes14799 = node.contents();
    oldNodes.replaceWith(nodes14799);
  }));
  callback(root16195); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root16205 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes14806 = $("<span>");
  root16205.append(nodes14806);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root16206 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp14617 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp14616 = mobl.ref(result__);
    
    var nodes14807 = $("<span>");
    root16206.append(nodes14807);
    subs__.addSub((ui.backButton)(tmp14616, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp14617, function(_, callback) {
      var root16207 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16207); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14807;
      nodes14807 = node.contents();
      oldNodes.replaceWith(nodes14807);
    }));
    callback(root16206); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14806;
    nodes14806 = node.contents();
    oldNodes.replaceWith(nodes14806);
  }));
  var nodes14808 = $("<span>");
  root16205.append(nodes14808);
  subs__.addSub((ui.group)(function(_, callback) {
    var root16208 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(29, function(result__) {
                       var tmp14700 = result__;
                       var result__ = mobl.alert("Differential equations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14618 = mobl.ref(result__);
    
    var nodes14809 = $("<span>");
    root16208.append(nodes14809);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14618, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16209 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14810 = $("<span>");
      root16209.append(nodes14810);
      subs__.addSub((mobl.label)(mobl.ref("+Diff equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16210 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16210); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14810;
        nodes14810 = node.contents();
        oldNodes.replaceWith(nodes14810);
      }));
      callback(root16209); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14809;
      nodes14809 = node.contents();
      oldNodes.replaceWith(nodes14809);
    }));
    callback(root16208); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14808;
    nodes14808 = node.contents();
    oldNodes.replaceWith(nodes14808);
  }));
  callback(root16205); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root16211 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes14811 = $("<span>");
  root16211.append(nodes14811);
  subs__.addSub((ui.group)(function(_, callback) {
    var root16212 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F1", function(result__) {
                       var tmp14713 = result__;
                       var result__ = mobl.alert("Complex arithmetic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14619 = mobl.ref(result__);
    
    var nodes14812 = $("<span>");
    root16212.append(nodes14812);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14619, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16213 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14813 = $("<span>");
      root16213.append(nodes14813);
      subs__.addSub((mobl.label)(mobl.ref("+Complex arithmetic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16214 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16214); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14813;
        nodes14813 = node.contents();
        oldNodes.replaceWith(nodes14813);
      }));
      callback(root16213); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14812;
      nodes14812 = node.contents();
      oldNodes.replaceWith(nodes14812);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F2", function(result__) {
                       var tmp14712 = result__;
                       var result__ = mobl.alert("Modulus argument Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14620 = mobl.ref(result__);
    
    var nodes14814 = $("<span>");
    root16212.append(nodes14814);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14620, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16215 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14815 = $("<span>");
      root16215.append(nodes14815);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus argument"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16216 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16216); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14815;
        nodes14815 = node.contents();
        oldNodes.replaceWith(nodes14815);
      }));
      callback(root16215); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14814;
      nodes14814 = node.contents();
      oldNodes.replaceWith(nodes14814);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F3a", function(result__) {
                       var tmp14711 = result__;
                       var result__ = mobl.alert("2nd order DE Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14621 = mobl.ref(result__);
    
    var nodes14816 = $("<span>");
    root16212.append(nodes14816);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14621, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16217 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14817 = $("<span>");
      root16217.append(nodes14817);
      subs__.addSub((mobl.label)(mobl.ref("+2nd order DEs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16218 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16218); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14817;
        nodes14817 = node.contents();
        oldNodes.replaceWith(nodes14817);
      }));
      callback(root16217); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14816;
      nodes14816 = node.contents();
      oldNodes.replaceWith(nodes14816);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F4", function(result__) {
                       var tmp14710 = result__;
                       var result__ = mobl.alert("Rank 2 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14622 = mobl.ref(result__);
    
    var nodes14818 = $("<span>");
    root16212.append(nodes14818);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14622, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16219 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14819 = $("<span>");
      root16219.append(nodes14819);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 2 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16220 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16220); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14819;
        nodes14819 = node.contents();
        oldNodes.replaceWith(nodes14819);
      }));
      callback(root16219); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14818;
      nodes14818 = node.contents();
      oldNodes.replaceWith(nodes14818);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F5", function(result__) {
                       var tmp14709 = result__;
                       var result__ = mobl.alert("Taylor Series Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14623 = mobl.ref(result__);
    
    var nodes14820 = $("<span>");
    root16212.append(nodes14820);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14623, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16221 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14821 = $("<span>");
      root16221.append(nodes14821);
      subs__.addSub((mobl.label)(mobl.ref("+Taylor Series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16222 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16222); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14821;
        nodes14821 = node.contents();
        oldNodes.replaceWith(nodes14821);
      }));
      callback(root16221); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14820;
      nodes14820 = node.contents();
      oldNodes.replaceWith(nodes14820);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F6", function(result__) {
                       var tmp14708 = result__;
                       var result__ = mobl.alert("Polar Coordinates Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14624 = mobl.ref(result__);
    
    var nodes14822 = $("<span>");
    root16212.append(nodes14822);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14624, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16223 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14823 = $("<span>");
      root16223.append(nodes14823);
      subs__.addSub((mobl.label)(mobl.ref("+Polar Coordinates"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16224 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16224); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14823;
        nodes14823 = node.contents();
        oldNodes.replaceWith(nodes14823);
      }));
      callback(root16223); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14822;
      nodes14822 = node.contents();
      oldNodes.replaceWith(nodes14822);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F7", function(result__) {
                       var tmp14707 = result__;
                       var result__ = mobl.alert("Rank 3 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14625 = mobl.ref(result__);
    
    var nodes14824 = $("<span>");
    root16212.append(nodes14824);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14625, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16225 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14825 = $("<span>");
      root16225.append(nodes14825);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 3 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16226 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16226); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14825;
        nodes14825 = node.contents();
        oldNodes.replaceWith(nodes14825);
      }));
      callback(root16225); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14824;
      nodes14824 = node.contents();
      oldNodes.replaceWith(nodes14824);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F8", function(result__) {
                       var tmp14706 = result__;
                       var result__ = mobl.alert("Further vectors added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14626 = mobl.ref(result__);
    
    var nodes14826 = $("<span>");
    root16212.append(nodes14826);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14626, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16227 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14827 = $("<span>");
      root16227.append(nodes14827);
      subs__.addSub((mobl.label)(mobl.ref("+Further vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16228 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16228); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14827;
        nodes14827 = node.contents();
        oldNodes.replaceWith(nodes14827);
      }));
      callback(root16227); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14826;
      nodes14826 = node.contents();
      oldNodes.replaceWith(nodes14826);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F9", function(result__) {
                       var tmp14705 = result__;
                       var result__ = mobl.alert("Newton-Raphson added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14627 = mobl.ref(result__);
    
    var nodes14828 = $("<span>");
    root16212.append(nodes14828);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14627, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16229 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14829 = $("<span>");
      root16229.append(nodes14829);
      subs__.addSub((mobl.label)(mobl.ref("+Newton-Raphson"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16230 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16230); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14829;
        nodes14829 = node.contents();
        oldNodes.replaceWith(nodes14829);
      }));
      callback(root16229); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14828;
      nodes14828 = node.contents();
      oldNodes.replaceWith(nodes14828);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F10", function(result__) {
                       var tmp14704 = result__;
                       var result__ = mobl.alert("Further inequalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14628 = mobl.ref(result__);
    
    var nodes14830 = $("<span>");
    root16212.append(nodes14830);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14628, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16231 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14831 = $("<span>");
      root16231.append(nodes14831);
      subs__.addSub((mobl.label)(mobl.ref("+Further inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16232 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16232); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14831;
        nodes14831 = node.contents();
        oldNodes.replaceWith(nodes14831);
      }));
      callback(root16231); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14830;
      nodes14830 = node.contents();
      oldNodes.replaceWith(nodes14830);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F11", function(result__) {
                       var tmp14703 = result__;
                       var result__ = mobl.alert("Integration by substitution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14629 = mobl.ref(result__);
    
    var nodes14832 = $("<span>");
    root16212.append(nodes14832);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14629, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16233 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14833 = $("<span>");
      root16233.append(nodes14833);
      subs__.addSub((mobl.label)(mobl.ref("+Integration by substitution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16234 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16234); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14833;
        nodes14833 = node.contents();
        oldNodes.replaceWith(nodes14833);
      }));
      callback(root16233); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14832;
      nodes14832 = node.contents();
      oldNodes.replaceWith(nodes14832);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F12", function(result__) {
                       var tmp14702 = result__;
                       var result__ = mobl.alert("Figures of revolution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14630 = mobl.ref(result__);
    
    var nodes14834 = $("<span>");
    root16212.append(nodes14834);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14630, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16235 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14835 = $("<span>");
      root16235.append(nodes14835);
      subs__.addSub((mobl.label)(mobl.ref("+Figures of revolution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16236 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16236); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14835;
        nodes14835 = node.contents();
        oldNodes.replaceWith(nodes14835);
      }));
      callback(root16235); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14834;
      nodes14834 = node.contents();
      oldNodes.replaceWith(nodes14834);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F13", function(result__) {
                       var tmp14701 = result__;
                       var result__ = mobl.alert("Matrix transformations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14631 = mobl.ref(result__);
    
    var nodes14836 = $("<span>");
    root16212.append(nodes14836);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14631, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16237 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14837 = $("<span>");
      root16237.append(nodes14837);
      subs__.addSub((mobl.label)(mobl.ref("+Matrix transformations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16238 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16238); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14837;
        nodes14837 = node.contents();
        oldNodes.replaceWith(nodes14837);
      }));
      callback(root16237); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14836;
      nodes14836 = node.contents();
      oldNodes.replaceWith(nodes14836);
    }));
    callback(root16212); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14811;
    nodes14811 = node.contents();
    oldNodes.replaceWith(nodes14811);
  }));
  callback(root16211); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root16239 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes14838 = $("<span>");
  root16239.append(nodes14838);
  subs__.addSub((ui.group)(function(_, callback) {
    var root16240 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S1", function(result__) {
                       var tmp14719 = result__;
                       var result__ = mobl.alert("Discrete Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14632 = mobl.ref(result__);
    
    var nodes14839 = $("<span>");
    root16240.append(nodes14839);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14632, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16241 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14840 = $("<span>");
      root16241.append(nodes14840);
      subs__.addSub((mobl.label)(mobl.ref("+Discrete Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16242 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16242); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14840;
        nodes14840 = node.contents();
        oldNodes.replaceWith(nodes14840);
      }));
      callback(root16241); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14839;
      nodes14839 = node.contents();
      oldNodes.replaceWith(nodes14839);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S2", function(result__) {
                       var tmp14718 = result__;
                       var result__ = mobl.alert("Continuous Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14633 = mobl.ref(result__);
    
    var nodes14841 = $("<span>");
    root16240.append(nodes14841);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14633, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16243 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14842 = $("<span>");
      root16243.append(nodes14842);
      subs__.addSub((mobl.label)(mobl.ref("+Continuous Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16244 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16244); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14842;
        nodes14842 = node.contents();
        oldNodes.replaceWith(nodes14842);
      }));
      callback(root16243); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14841;
      nodes14841 = node.contents();
      oldNodes.replaceWith(nodes14841);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S3", function(result__) {
                       var tmp14717 = result__;
                       var result__ = mobl.alert("Hypothesis Testing Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14634 = mobl.ref(result__);
    
    var nodes14843 = $("<span>");
    root16240.append(nodes14843);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14634, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16245 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14844 = $("<span>");
      root16245.append(nodes14844);
      subs__.addSub((mobl.label)(mobl.ref("+Hypothesis Testing"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16246 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16246); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14844;
        nodes14844 = node.contents();
        oldNodes.replaceWith(nodes14844);
      }));
      callback(root16245); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14843;
      nodes14843 = node.contents();
      oldNodes.replaceWith(nodes14843);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S4", function(result__) {
                       var tmp14716 = result__;
                       var result__ = mobl.alert("Confidence Intervals Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14635 = mobl.ref(result__);
    
    var nodes14845 = $("<span>");
    root16240.append(nodes14845);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14635, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16247 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14846 = $("<span>");
      root16247.append(nodes14846);
      subs__.addSub((mobl.label)(mobl.ref("+Confidence Intervals"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16248 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16248); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14846;
        nodes14846 = node.contents();
        oldNodes.replaceWith(nodes14846);
      }));
      callback(root16247); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14845;
      nodes14845 = node.contents();
      oldNodes.replaceWith(nodes14845);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S5", function(result__) {
                       var tmp14715 = result__;
                       var result__ = mobl.alert("Chi Squared Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14636 = mobl.ref(result__);
    
    var nodes14847 = $("<span>");
    root16240.append(nodes14847);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14636, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16249 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14848 = $("<span>");
      root16249.append(nodes14848);
      subs__.addSub((mobl.label)(mobl.ref("+Chi Squared"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16250 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16250); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14848;
        nodes14848 = node.contents();
        oldNodes.replaceWith(nodes14848);
      }));
      callback(root16249); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14847;
      nodes14847 = node.contents();
      oldNodes.replaceWith(nodes14847);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S6", function(result__) {
                       var tmp14714 = result__;
                       var result__ = mobl.alert("Product Moment Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14637 = mobl.ref(result__);
    
    var nodes14849 = $("<span>");
    root16240.append(nodes14849);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14637, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root16251 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14850 = $("<span>");
      root16251.append(nodes14850);
      subs__.addSub((mobl.label)(mobl.ref("+Product Moments"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16252 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16252); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14850;
        nodes14850 = node.contents();
        oldNodes.replaceWith(nodes14850);
      }));
      callback(root16251); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14849;
      nodes14849 = node.contents();
      oldNodes.replaceWith(nodes14849);
    }));
    callback(root16240); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14838;
    nodes14838 = node.contents();
    oldNodes.replaceWith(nodes14838);
  }));
  callback(root16239); return subs__;
  
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
  var root16253 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1121 = $("<div>");
  
  var ref785 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref785.get() !== null) {
    node1121.attr('class', ref785.get());
    subs__.addSub(ref785.addEventListener('change', function(_, ref, val) {
      node1121.attr('class', val);
    }));
    
  }
  subs__.addSub(ref785.rebind());
  
  var val278 = onclick.get();
  if(val278 !== null) {
    subs__.addSub(mobl.domBind(node1121, 'tap', val278));
  }
  
  
  var node1122 = $("<div>");
  
  var ref784 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref784.get() !== null) {
    node1122.attr('class', ref784.get());
    subs__.addSub(ref784.addEventListener('change', function(_, ref, val) {
      node1122.attr('class', val);
    }));
    
  }
  subs__.addSub(ref784.rebind());
  
  
  var node1123 = $("<div>");
  
  var ref782 = text;
  node1123.text(""+ref782.get());
  var ignore167 = false;
  subs__.addSub(ref782.addEventListener('change', function(_, ref, val) {
    if(ignore167) return;
    node1123.text(""+val);
  }));
  subs__.addSub(ref782.rebind());
  
  
  var ref783 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref783.get() !== null) {
    node1123.attr('class', ref783.get());
    subs__.addSub(ref783.addEventListener('change', function(_, ref, val) {
      node1123.attr('class', val);
    }));
    
  }
  subs__.addSub(ref783.rebind());
  
  node1122.append(node1123);
  node1121.append(node1122);
  var nodes14851 = $("<span>");
  node1121.append(nodes14851);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl218();
  }));
  
  function renderControl218() {
    subs__.addSub((elements)(function(elements, callback) {
      var root16254 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16254); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14851;
      nodes14851 = node.contents();
      oldNodes.replaceWith(nodes14851);
    }));
  }
  renderControl218();
  root16253.append(node1121);
  callback(root16253); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mathJAX.renderMaths(function(result__) {
    var tmp14720 = result__;
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
};


nrichRPG.coreWorkout.answerBlock = function(qa, number, elements, callback) {
  var root16255 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1124 = $("<span>");
  root16255.append(node1124);
  var condSubs407 = new mobl.CompSubscription();
  subs__.addSub(condSubs407);
  var oldValue407;
  var renderCond407 = function() {
    var value651 = qa.get().correct;
    if(oldValue407 === value651) return;
    oldValue407 = value651;
    var subs__ = condSubs407;
    subs__.unsubscribe();
    node1124.empty();
    if(value651) {
      var nodes14852 = $("<span>");
      node1124.append(nodes14852);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.agreeStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16256 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = qa.get().answer != "%GRAPH%";
        var tmp14641 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp14641.set(qa.get().answer != "%GRAPH%");
        }));
        
        
        var node1125 = $("<span>");
        root16256.append(node1125);
        var condSubs408 = new mobl.CompSubscription();
        subs__.addSub(condSubs408);
        var oldValue408;
        var renderCond408 = function() {
          var value652 = tmp14641.get();
          if(oldValue408 === value652) return;
          oldValue408 = value652;
          var subs__ = condSubs408;
          subs__.unsubscribe();
          node1125.empty();
          if(value652) {
            var result__ = "A" + number.get() + ". ";
            var tmp14638 = mobl.ref(result__);
            subs__.addSub(number.addEventListener('change', function() {
              tmp14638.set("A" + number.get() + ". ");
            }));
            
            var nodes14853 = $("<span>");
            node1125.append(nodes14853);
            subs__.addSub((mobl.label)(tmp14638, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root16257 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root16257); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes14853;
              nodes14853 = node.contents();
              oldNodes.replaceWith(nodes14853);
            }));
            
            var node1126 = $("<span>");
            
            var ref786 = mobl.ref("A" + number.get());
            if(ref786.get() !== null) {
              node1126.attr('id', ref786.get());
              subs__.addSub(ref786.addEventListener('change', function(_, ref, val) {
                node1126.attr('id', val);
              }));
              subs__.addSub(number.addEventListener('change', function() {
                node1126.attr('id', "A" + number.get());
              }));
              
            }
            subs__.addSub(ref786.rebind());
            
            var nodes14854 = $("<span>");
            node1126.append(nodes14854);
            subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
              var root16258 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root16258); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes14854;
              nodes14854 = node.contents();
              oldNodes.replaceWith(nodes14854);
            }));
            node1125.append(node1126);
            
            
            
            
          } else {
            var result__ = "A" + number.get() + ". ";
            var tmp14639 = mobl.ref(result__);
            subs__.addSub(number.addEventListener('change', function() {
              tmp14639.set("A" + number.get() + ". ");
            }));
            
            var nodes14855 = $("<span>");
            node1125.append(nodes14855);
            subs__.addSub((mobl.label)(tmp14639, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root16259 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root16259); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes14855;
              nodes14855 = node.contents();
              oldNodes.replaceWith(nodes14855);
            }));
            var nodes14856 = $("<span>");
            node1125.append(nodes14856);
            subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
              var root16260 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root16260); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes14856;
              nodes14856 = node.contents();
              oldNodes.replaceWith(nodes14856);
            }));
            
            var node1127 = $("<span>");
            node1127.attr('style', "display:none");
            
            nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
              var tmp14722 = result__;
              var tmp14640 = mobl.ref(result__);
              subs__.addSub(qa.addEventListener('change', function() {
                nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                  var tmp14721 = result__;
                  var result__ = tmp14721;
                  tmp14640.set(result__);
                  
                });
              }));
              
              var nodes14857 = $("<span>");
              node1127.append(nodes14857);
              subs__.addSub((mobl.html)(tmp14640, function(_, callback) {
                var root16261 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root16261); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes14857;
                nodes14857 = node.contents();
                oldNodes.replaceWith(nodes14857);
              }));
              node1125.append(node1127);
              
              
            });
            
            
            
          }
        };
        renderCond408();
        subs__.addSub(tmp14641.addEventListener('change', function() {
          renderCond408();
        }));
        
        callback(root16256); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes14852;
        nodes14852 = node.contents();
        oldNodes.replaceWith(nodes14852);
      }));
      
      
    } else {
      var nodes14858 = $("<span>");
      node1124.append(nodes14858);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.disagreeStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16262 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = qa.get().answer != "%GRAPH%";
        var tmp14645 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp14645.set(qa.get().answer != "%GRAPH%");
        }));
        
        
        var node1128 = $("<span>");
        root16262.append(node1128);
        var condSubs409 = new mobl.CompSubscription();
        subs__.addSub(condSubs409);
        var oldValue409;
        var renderCond409 = function() {
          var value653 = tmp14645.get();
          if(oldValue409 === value653) return;
          oldValue409 = value653;
          var subs__ = condSubs409;
          subs__.unsubscribe();
          node1128.empty();
          if(value653) {
            var result__ = "A" + number.get() + ". ";
            var tmp14642 = mobl.ref(result__);
            subs__.addSub(number.addEventListener('change', function() {
              tmp14642.set("A" + number.get() + ". ");
            }));
            
            var nodes14859 = $("<span>");
            node1128.append(nodes14859);
            subs__.addSub((mobl.label)(tmp14642, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root16263 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root16263); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes14859;
              nodes14859 = node.contents();
              oldNodes.replaceWith(nodes14859);
            }));
            
            var node1129 = $("<span>");
            
            var ref787 = mobl.ref("A" + number.get());
            if(ref787.get() !== null) {
              node1129.attr('id', ref787.get());
              subs__.addSub(ref787.addEventListener('change', function(_, ref, val) {
                node1129.attr('id', val);
              }));
              subs__.addSub(number.addEventListener('change', function() {
                node1129.attr('id', "A" + number.get());
              }));
              
            }
            subs__.addSub(ref787.rebind());
            
            var nodes14860 = $("<span>");
            node1129.append(nodes14860);
            subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
              var root16264 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root16264); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes14860;
              nodes14860 = node.contents();
              oldNodes.replaceWith(nodes14860);
            }));
            node1128.append(node1129);
            
            
            
            
          } else {
            var result__ = "A" + number.get() + ". ";
            var tmp14643 = mobl.ref(result__);
            subs__.addSub(number.addEventListener('change', function() {
              tmp14643.set("A" + number.get() + ". ");
            }));
            
            var nodes14861 = $("<span>");
            node1128.append(nodes14861);
            subs__.addSub((mobl.label)(tmp14643, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root16265 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root16265); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes14861;
              nodes14861 = node.contents();
              oldNodes.replaceWith(nodes14861);
            }));
            var nodes14862 = $("<span>");
            node1128.append(nodes14862);
            subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
              var root16266 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root16266); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes14862;
              nodes14862 = node.contents();
              oldNodes.replaceWith(nodes14862);
            }));
            
            var node1130 = $("<span>");
            node1130.attr('style', "display:none");
            
            nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
              var tmp14724 = result__;
              var tmp14644 = mobl.ref(result__);
              subs__.addSub(qa.addEventListener('change', function() {
                nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                  var tmp14723 = result__;
                  var result__ = tmp14723;
                  tmp14644.set(result__);
                  
                });
              }));
              
              var nodes14863 = $("<span>");
              node1130.append(nodes14863);
              subs__.addSub((mobl.html)(tmp14644, function(_, callback) {
                var root16267 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root16267); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes14863;
                nodes14863 = node.contents();
                oldNodes.replaceWith(nodes14863);
              }));
              node1128.append(node1130);
              
              
            });
            
            
            
          }
        };
        renderCond409();
        subs__.addSub(tmp14645.addEventListener('change', function() {
          renderCond409();
        }));
        
        callback(root16262); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes14858;
        nodes14858 = node.contents();
        oldNodes.replaceWith(nodes14858);
      }));
      
      
    }
  };
  renderCond407();
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    renderCond407();
  }));
  
  var nodes14864 = $("<span>");
  root16255.append(nodes14864);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root16268 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1131 = $("<span>");
    node1131.attr('style', "display:none");
    
    nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
      var tmp14726 = result__;
      var tmp14646 = mobl.ref(result__);
      subs__.addSub(qa.addEventListener('change', function() {
        nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
          var tmp14725 = result__;
          var result__ = tmp14725;
          tmp14646.set(result__);
          
        });
      }));
      
      var nodes14868 = $("<span>");
      node1131.append(nodes14868);
      subs__.addSub((mobl.html)(tmp14646, function(_, callback) {
        var root16272 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16272); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14868;
        nodes14868 = node.contents();
        oldNodes.replaceWith(nodes14868);
      }));
      root16268.append(node1131);
      var nodes14865 = $("<span>");
      root16268.append(nodes14865);
      subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16269 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16269); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14865;
        nodes14865 = node.contents();
        oldNodes.replaceWith(nodes14865);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = true;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp14647 = mobl.ref(result__);
      
      var nodes14866 = $("<span>");
      root16268.append(nodes14866);
      subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp14647, function(_, callback) {
        var root16270 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16270); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14866;
        nodes14866 = node.contents();
        oldNodes.replaceWith(nodes14866);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = false;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp14648 = mobl.ref(result__);
      
      var nodes14867 = $("<span>");
      root16268.append(nodes14867);
      subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp14648, function(_, callback) {
        var root16271 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16271); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14867;
        nodes14867 = node.contents();
        oldNodes.replaceWith(nodes14867);
      }));
      callback(root16268); return subs__;
      
      
      
      
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14864;
    nodes14864 = node.contents();
    oldNodes.replaceWith(nodes14864);
  }));
  callback(root16255); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp14727 = result__;
    var result__ = tmp14727;
    var qa2 = result__;
    var result__ = qa2 == null;
    if(result__) {
      nrichRPG.questionAnswer.QA.all().one(function(result__) {
        var tmp14728 = result__;
        var result__ = tmp14728;
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


nrichRPG.coreWorkout.showQA = function(qa, number, elements, callback) {
  var root16273 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp14736 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp14650 = mobl.ref(result__);
  
  var nodes14869 = $("<span>");
  root16273.append(nodes14869);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(mobl.ref(qa, 'topic'), tmp14650, function(_, callback) {
    var root16274 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp14729 = result__;
                       var result__ = tmp14729;
                       var qa2 = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp14730 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp14649 = mobl.ref(result__);
    
    var nodes14870 = $("<span>");
    root16274.append(nodes14870);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp14649, function(_, callback) {
      var root16275 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root16275); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes14870;
      nodes14870 = node.contents();
      oldNodes.replaceWith(nodes14870);
    }));
    callback(root16274); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14869;
    nodes14869 = node.contents();
    oldNodes.replaceWith(nodes14869);
  }));
  var nodes14871 = $("<span>");
  root16273.append(nodes14871);
  subs__.addSub((ui.group)(function(_, callback) {
    var root16276 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp14735 = result__;
                       var result__ = mobl.$("#Q" + number.get()).children("span:first").html();
                       qa.get().question = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14653 = mobl.ref(result__);
    
    var nodes14872 = $("<span>");
    root16276.append(nodes14872);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp14653, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root16277 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + number.get() + ". ";
      var tmp14651 = mobl.ref(result__);
      subs__.addSub(number.addEventListener('change', function() {
        tmp14651.set("Q" + number.get() + ". ");
      }));
      
      var nodes14873 = $("<span>");
      root16277.append(nodes14873);
      subs__.addSub((mobl.html)(tmp14651, function(_, callback) {
        var root16278 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16278); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14873;
        nodes14873 = node.contents();
        oldNodes.replaceWith(nodes14873);
      }));
      
      var node1132 = $("<span>");
      
      var ref788 = mobl.ref("Q" + number.get());
      if(ref788.get() !== null) {
        node1132.attr('id', ref788.get());
        subs__.addSub(ref788.addEventListener('change', function(_, ref, val) {
          node1132.attr('id', val);
        }));
        subs__.addSub(number.addEventListener('change', function() {
          node1132.attr('id', "Q" + number.get());
        }));
        
      }
      subs__.addSub(ref788.rebind());
      
      var nodes14875 = $("<span>");
      node1132.append(nodes14875);
      subs__.addSub((mobl.html)(mobl.ref(qa, 'question'), function(_, callback) {
        var root16280 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root16280); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes14875;
        nodes14875 = node.contents();
        oldNodes.replaceWith(nodes14875);
      }));
      root16277.append(node1132);
      
      var node1133 = $("<span>");
      node1133.attr('style', "display:none");
      
      nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
        var tmp14732 = result__;
        var tmp14652 = mobl.ref(result__);
        subs__.addSub(qa.addEventListener('change', function() {
          nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
            var tmp14731 = result__;
            var result__ = tmp14731;
            tmp14652.set(result__);
            
          });
        }));
        
        var nodes14874 = $("<span>");
        node1133.append(nodes14874);
        subs__.addSub((mobl.html)(tmp14652, function(_, callback) {
          var root16279 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root16279); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes14874;
          nodes14874 = node.contents();
          oldNodes.replaceWith(nodes14874);
        }));
        root16277.append(node1133);
        callback(root16277); return subs__;
        
      });
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14872;
      nodes14872 = node.contents();
      oldNodes.replaceWith(nodes14872);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp14734 = result__;
                       var result__ = mobl.$("#A" + number.get()).children("span:first").html();
                       qa.get().answer = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp14655 = mobl.ref(result__);
    
    var nodes14876 = $("<span>");
    root16276.append(nodes14876);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp14655, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root16281 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes14877 = $("<span>");
      root16281.append(nodes14877);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root16282 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                           var tmp14733 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp14654 = mobl.ref(result__);
        
        var nodes14878 = $("<span>");
        root16282.append(nodes14878);
        subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp14654, function(_, callback) {
          var root16283 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root16283); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes14878;
          nodes14878 = node.contents();
          oldNodes.replaceWith(nodes14878);
        }));
        callback(root16282); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes14877;
        nodes14877 = node.contents();
        oldNodes.replaceWith(nodes14877);
      }));
      
      var node1134 = $("<span>");
      root16281.append(node1134);
      var condSubs410 = new mobl.CompSubscription();
      subs__.addSub(condSubs410);
      var oldValue410;
      var renderCond410 = function() {
        var value654 = qa.get().done;
        if(oldValue410 === value654) return;
        oldValue410 = value654;
        var subs__ = condSubs410;
        subs__.unsubscribe();
        node1134.empty();
        if(value654) {
          var nodes14879 = $("<span>");
          node1134.append(nodes14879);
          subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, number, function(_, callback) {
            var root16284 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root16284); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes14879;
            nodes14879 = node.contents();
            oldNodes.replaceWith(nodes14879);
          }));
          
          
        } else {
          
        }
      };
      renderCond410();
      subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
        renderCond410();
      }));
      
      callback(root16281); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes14876;
      nodes14876 = node.contents();
      oldNodes.replaceWith(nodes14876);
    }));
    callback(root16276); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes14871;
    nodes14871 = node.contents();
    oldNodes.replaceWith(nodes14871);
  }));
  callback(root16273); return subs__;
  
  
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
  qas.list(function(coll891) {
    coll891 = coll891.reverse();
    function processOne525() {
      var item;
      item = coll891.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll891.length > 0) processOne525(); else rest525();
      
    }
    function rest525() {
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
    if(coll891.length > 0) processOne525(); else rest525();
  });
  
};

nrichRPG.coreWorkout.makeQAStar = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll892) {
    coll892 = coll892.reverse();
    function processOne526() {
      var item;
      item = coll892.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll892.length > 0) processOne526(); else rest526();
      
    }
    function rest526() {
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
    if(coll892.length > 0) processOne526(); else rest526();
  });
  
};

nrichRPG.coreWorkout.makeQAStats = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll893) {
    coll893 = coll893.reverse();
    function processOne527() {
      var item;
      item = coll893.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll893.length > 0) processOne527(); else rest527();
      
    }
    function rest527() {
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
    if(coll893.length > 0) processOne527(); else rest527();
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