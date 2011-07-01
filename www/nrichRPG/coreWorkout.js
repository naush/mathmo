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
    var tmp6702 = result__;
    var result__ = tmp6702;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp6703 = result__;
      var result__ = tmp6703;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp6704 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicId, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll693) {
    coll693 = coll693.reverse();
    function processOne243() {
      var i;
      i = coll693.pop();
      nrichRPG.coreWorkout.makeQA(topicId, function(result__) {
        var tmp6705 = result__;
        
        if(coll693.length > 0) processOne243(); else rest243();
        
      });
    }
    function rest243() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll693.length > 0) processOne243(); else rest243();
  });
  
};

nrichRPG.coreWorkout.randomQStar = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll694) {
    coll694 = coll694.reverse();
    function processOne244() {
      var i;
      i = coll694.pop();
      var result__ = mobl.Math.floor(13 * mobl.Math.random());
      var r = result__;
      var result__ = "F" + (1 + r);
      var tid = result__;
      var result__ = tid == "F3";
      if(result__) {
        var result__ = "F3a";
        tid = result__;
        nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
          var tmp6706 = result__;
          
          if(coll694.length > 0) processOne244(); else rest244();
          
        });
      } else {
        {
          nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
            var tmp6706 = result__;
            
            if(coll694.length > 0) processOne244(); else rest244();
            
          });
        }
      }
    }
    function rest244() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll694.length > 0) processOne244(); else rest244();
  });
  
};

nrichRPG.coreWorkout.randomQStats = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll695) {
    coll695 = coll695.reverse();
    function processOne245() {
      var i;
      i = coll695.pop();
      var result__ = mobl.Math.floor(6 * mobl.Math.random());
      var r = result__;
      var result__ = "S" + (1 + r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
        var tmp6707 = result__;
        
        if(coll695.length > 0) processOne245(); else rest245();
        
      });
    }
    function rest245() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll695.length > 0) processOne245(); else rest245();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root7663 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes6715 = $("<span>");
  root7663.append(nodes6715);
  subs__.addSub((ui.group)(function(_, callback) {
    var root7664 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp6715 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6614 = mobl.ref(result__);
    
    var nodes6716 = $("<span>");
    root7664.append(nodes6716);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6614, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7665 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6717 = $("<span>");
      root7665.append(nodes6717);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7666 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7666); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6717;
        nodes6717 = node.contents();
        oldNodes.replaceWith(nodes6717);
      }));
      callback(root7665); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6716;
      nodes6716 = node.contents();
      oldNodes.replaceWith(nodes6716);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp6714 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6615 = mobl.ref(result__);
    
    var nodes6718 = $("<span>");
    root7664.append(nodes6718);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6615, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7667 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6719 = $("<span>");
      root7667.append(nodes6719);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7668 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7668); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6719;
        nodes6719 = node.contents();
        oldNodes.replaceWith(nodes6719);
      }));
      callback(root7667); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6718;
      nodes6718 = node.contents();
      oldNodes.replaceWith(nodes6718);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp6713 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6616 = mobl.ref(result__);
    
    var nodes6720 = $("<span>");
    root7664.append(nodes6720);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6616, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7669 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6721 = $("<span>");
      root7669.append(nodes6721);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7670 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7670); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6721;
        nodes6721 = node.contents();
        oldNodes.replaceWith(nodes6721);
      }));
      callback(root7669); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6720;
      nodes6720 = node.contents();
      oldNodes.replaceWith(nodes6720);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp6712 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6617 = mobl.ref(result__);
    
    var nodes6722 = $("<span>");
    root7664.append(nodes6722);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6617, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7671 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6723 = $("<span>");
      root7671.append(nodes6723);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7672 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7672); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6723;
        nodes6723 = node.contents();
        oldNodes.replaceWith(nodes6723);
      }));
      callback(root7671); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6722;
      nodes6722 = node.contents();
      oldNodes.replaceWith(nodes6722);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp6711 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6618 = mobl.ref(result__);
    
    var nodes6724 = $("<span>");
    root7664.append(nodes6724);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6618, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7673 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6725 = $("<span>");
      root7673.append(nodes6725);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7674 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7674); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6725;
        nodes6725 = node.contents();
        oldNodes.replaceWith(nodes6725);
      }));
      callback(root7673); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6724;
      nodes6724 = node.contents();
      oldNodes.replaceWith(nodes6724);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp6710 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6619 = mobl.ref(result__);
    
    var nodes6726 = $("<span>");
    root7664.append(nodes6726);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6619, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7675 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6727 = $("<span>");
      root7675.append(nodes6727);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7676 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7676); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6727;
        nodes6727 = node.contents();
        oldNodes.replaceWith(nodes6727);
      }));
      callback(root7675); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6726;
      nodes6726 = node.contents();
      oldNodes.replaceWith(nodes6726);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp6709 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6620 = mobl.ref(result__);
    
    var nodes6728 = $("<span>");
    root7664.append(nodes6728);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6620, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7677 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6729 = $("<span>");
      root7677.append(nodes6729);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7678 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7678); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6729;
        nodes6729 = node.contents();
        oldNodes.replaceWith(nodes6729);
      }));
      callback(root7677); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6728;
      nodes6728 = node.contents();
      oldNodes.replaceWith(nodes6728);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp6708 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6621 = mobl.ref(result__);
    
    var nodes6730 = $("<span>");
    root7664.append(nodes6730);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6621, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7679 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6731 = $("<span>");
      root7679.append(nodes6731);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7680 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7680); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6731;
        nodes6731 = node.contents();
        oldNodes.replaceWith(nodes6731);
      }));
      callback(root7679); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6730;
      nodes6730 = node.contents();
      oldNodes.replaceWith(nodes6730);
    }));
    callback(root7664); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6715;
    nodes6715 = node.contents();
    oldNodes.replaceWith(nodes6715);
  }));
  callback(root7663); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root7681 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes6732 = $("<span>");
  root7681.append(nodes6732);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root7682 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp6623 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp6622 = mobl.ref(result__);
    
    var nodes6733 = $("<span>");
    root7682.append(nodes6733);
    subs__.addSub((ui.backButton)(tmp6622, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp6623, function(_, callback) {
      var root7683 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7683); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6733;
      nodes6733 = node.contents();
      oldNodes.replaceWith(nodes6733);
    }));
    callback(root7682); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6732;
    nodes6732 = node.contents();
    oldNodes.replaceWith(nodes6732);
  }));
  var nodes6734 = $("<span>");
  root7681.append(nodes6734);
  subs__.addSub((ui.group)(function(_, callback) {
    var root7684 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(10, function(result__) {
                       var tmp6723 = result__;
                       var result__ = mobl.alert("Quadratic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6624 = mobl.ref(result__);
    
    var nodes6735 = $("<span>");
    root7684.append(nodes6735);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6624, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7685 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6736 = $("<span>");
      root7685.append(nodes6736);
      subs__.addSub((mobl.label)(mobl.ref("+Quadratic equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7686 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7686); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6736;
        nodes6736 = node.contents();
        oldNodes.replaceWith(nodes6736);
      }));
      callback(root7685); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6735;
      nodes6735 = node.contents();
      oldNodes.replaceWith(nodes6735);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(11, function(result__) {
                       var tmp6722 = result__;
                       var result__ = mobl.alert("Completing the Square Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6625 = mobl.ref(result__);
    
    var nodes6737 = $("<span>");
    root7684.append(nodes6737);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6625, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7687 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6738 = $("<span>");
      root7687.append(nodes6738);
      subs__.addSub((mobl.label)(mobl.ref("+Completing the square"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7688 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7688); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6738;
        nodes6738 = node.contents();
        oldNodes.replaceWith(nodes6738);
      }));
      callback(root7687); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6737;
      nodes6737 = node.contents();
      oldNodes.replaceWith(nodes6737);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(7, function(result__) {
                       var tmp6721 = result__;
                       var result__ = mobl.alert("Ineqalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6626 = mobl.ref(result__);
    
    var nodes6739 = $("<span>");
    root7684.append(nodes6739);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6626, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7689 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6740 = $("<span>");
      root7689.append(nodes6740);
      subs__.addSub((mobl.label)(mobl.ref("+Inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7690 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7690); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6740;
        nodes6740 = node.contents();
        oldNodes.replaceWith(nodes6740);
      }));
      callback(root7689); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6739;
      nodes6739 = node.contents();
      oldNodes.replaceWith(nodes6739);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(9, function(result__) {
                       var tmp6720 = result__;
                       var result__ = mobl.alert("Factor theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6627 = mobl.ref(result__);
    
    var nodes6741 = $("<span>");
    root7684.append(nodes6741);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6627, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7691 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6742 = $("<span>");
      root7691.append(nodes6742);
      subs__.addSub((mobl.label)(mobl.ref("+Factor theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7692 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7692); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6742;
        nodes6742 = node.contents();
        oldNodes.replaceWith(nodes6742);
      }));
      callback(root7691); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6741;
      nodes6741 = node.contents();
      oldNodes.replaceWith(nodes6741);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(1, function(result__) {
                       var tmp6719 = result__;
                       var result__ = mobl.alert("Partial fraction Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6628 = mobl.ref(result__);
    
    var nodes6743 = $("<span>");
    root7684.append(nodes6743);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6628, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7693 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6744 = $("<span>");
      root7693.append(nodes6744);
      subs__.addSub((mobl.label)(mobl.ref("+Partial fractions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7694 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7694); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6744;
        nodes6744 = node.contents();
        oldNodes.replaceWith(nodes6744);
      }));
      callback(root7693); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6743;
      nodes6743 = node.contents();
      oldNodes.replaceWith(nodes6743);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(30, function(result__) {
                       var tmp6718 = result__;
                       var result__ = mobl.alert("Powers Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6629 = mobl.ref(result__);
    
    var nodes6745 = $("<span>");
    root7684.append(nodes6745);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6629, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7695 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6746 = $("<span>");
      root7695.append(nodes6746);
      subs__.addSub((mobl.label)(mobl.ref("+Powers"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7696 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7696); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6746;
        nodes6746 = node.contents();
        oldNodes.replaceWith(nodes6746);
      }));
      callback(root7695); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6745;
      nodes6745 = node.contents();
      oldNodes.replaceWith(nodes6745);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(13, function(result__) {
                       var tmp6717 = result__;
                       var result__ = mobl.alert("Logarithm Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6630 = mobl.ref(result__);
    
    var nodes6747 = $("<span>");
    root7684.append(nodes6747);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6630, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7697 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6748 = $("<span>");
      root7697.append(nodes6748);
      subs__.addSub((mobl.label)(mobl.ref("+Logarithms"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7698 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7698); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6748;
        nodes6748 = node.contents();
        oldNodes.replaceWith(nodes6748);
      }));
      callback(root7697); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6747;
      nodes6747 = node.contents();
      oldNodes.replaceWith(nodes6747);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(17, function(result__) {
                       var tmp6716 = result__;
                       var result__ = mobl.alert("Trig equation Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6631 = mobl.ref(result__);
    
    var nodes6749 = $("<span>");
    root7684.append(nodes6749);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6631, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7699 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6750 = $("<span>");
      root7699.append(nodes6750);
      subs__.addSub((mobl.label)(mobl.ref("+Trig equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7700 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7700); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6750;
        nodes6750 = node.contents();
        oldNodes.replaceWith(nodes6750);
      }));
      callback(root7699); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6749;
      nodes6749 = node.contents();
      oldNodes.replaceWith(nodes6749);
    }));
    callback(root7684); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6734;
    nodes6734 = node.contents();
    oldNodes.replaceWith(nodes6734);
  }));
  callback(root7681); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root7701 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes6751 = $("<span>");
  root7701.append(nodes6751);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root7702 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp6633 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp6632 = mobl.ref(result__);
    
    var nodes6752 = $("<span>");
    root7702.append(nodes6752);
    subs__.addSub((ui.backButton)(tmp6632, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp6633, function(_, callback) {
      var root7703 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7703); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6752;
      nodes6752 = node.contents();
      oldNodes.replaceWith(nodes6752);
    }));
    callback(root7702); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6751;
    nodes6751 = node.contents();
    oldNodes.replaceWith(nodes6751);
  }));
  var nodes6753 = $("<span>");
  root7701.append(nodes6753);
  subs__.addSub((ui.group)(function(_, callback) {
    var root7704 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(24, function(result__) {
                       var tmp6728 = result__;
                       var result__ = mobl.alert("Modulus Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6634 = mobl.ref(result__);
    
    var nodes6754 = $("<span>");
    root7704.append(nodes6754);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6634, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7705 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6755 = $("<span>");
      root7705.append(nodes6755);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus function"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7706 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7706); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6755;
        nodes6755 = node.contents();
        oldNodes.replaceWith(nodes6755);
      }));
      callback(root7705); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6754;
      nodes6754 = node.contents();
      oldNodes.replaceWith(nodes6754);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(25, function(result__) {
                       var tmp6727 = result__;
                       var result__ = mobl.alert("Transformations of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6635 = mobl.ref(result__);
    
    var nodes6756 = $("<span>");
    root7704.append(nodes6756);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6635, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7707 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6757 = $("<span>");
      root7707.append(nodes6757);
      subs__.addSub((mobl.label)(mobl.ref("+Transformations of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7708 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7708); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6757;
        nodes6757 = node.contents();
        oldNodes.replaceWith(nodes6757);
      }));
      callback(root7707); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6756;
      nodes6756 = node.contents();
      oldNodes.replaceWith(nodes6756);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(26, function(result__) {
                       var tmp6726 = result__;
                       var result__ = mobl.alert("Composition of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6636 = mobl.ref(result__);
    
    var nodes6758 = $("<span>");
    root7704.append(nodes6758);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6636, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7709 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6759 = $("<span>");
      root7709.append(nodes6759);
      subs__.addSub((mobl.label)(mobl.ref("+Composition of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7710 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7710); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6759;
        nodes6759 = node.contents();
        oldNodes.replaceWith(nodes6759);
      }));
      callback(root7709); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6758;
      nodes6758 = node.contents();
      oldNodes.replaceWith(nodes6758);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(270, function(result__) {
                       var tmp6725 = result__;
                       var result__ = mobl.alert("Implicit functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6637 = mobl.ref(result__);
    
    var nodes6760 = $("<span>");
    root7704.append(nodes6760);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6637, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7711 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6761 = $("<span>");
      root7711.append(nodes6761);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7712 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7712); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6761;
        nodes6761 = node.contents();
        oldNodes.replaceWith(nodes6761);
      }));
      callback(root7711); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6760;
      nodes6760 = node.contents();
      oldNodes.replaceWith(nodes6760);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(27, function(result__) {
                       var tmp6724 = result__;
                       var result__ = mobl.alert("Parametric functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6638 = mobl.ref(result__);
    
    var nodes6762 = $("<span>");
    root7704.append(nodes6762);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6638, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7713 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6763 = $("<span>");
      root7713.append(nodes6763);
      subs__.addSub((mobl.label)(mobl.ref("+Parametric functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7714 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7714); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6763;
        nodes6763 = node.contents();
        oldNodes.replaceWith(nodes6763);
      }));
      callback(root7713); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6762;
      nodes6762 = node.contents();
      oldNodes.replaceWith(nodes6762);
    }));
    callback(root7704); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6753;
    nodes6753 = node.contents();
    oldNodes.replaceWith(nodes6753);
  }));
  callback(root7701); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root7715 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes6764 = $("<span>");
  root7715.append(nodes6764);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root7716 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp6640 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp6639 = mobl.ref(result__);
    
    var nodes6765 = $("<span>");
    root7716.append(nodes6765);
    subs__.addSub((ui.backButton)(tmp6639, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp6640, function(_, callback) {
      var root7717 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7717); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6765;
      nodes6765 = node.contents();
      oldNodes.replaceWith(nodes6765);
    }));
    callback(root7716); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6764;
    nodes6764 = node.contents();
    oldNodes.replaceWith(nodes6764);
  }));
  var nodes6766 = $("<span>");
  root7715.append(nodes6766);
  subs__.addSub((ui.group)(function(_, callback) {
    var root7718 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(15, function(result__) {
                       var tmp6731 = result__;
                       var result__ = mobl.alert("Triangles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6641 = mobl.ref(result__);
    
    var nodes6767 = $("<span>");
    root7718.append(nodes6767);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6641, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7719 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6768 = $("<span>");
      root7719.append(nodes6768);
      subs__.addSub((mobl.label)(mobl.ref("+Triangles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7720 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7720); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6768;
        nodes6768 = node.contents();
        oldNodes.replaceWith(nodes6768);
      }));
      callback(root7719); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6767;
      nodes6767 = node.contents();
      oldNodes.replaceWith(nodes6767);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(16, function(result__) {
                       var tmp6730 = result__;
                       var result__ = mobl.alert("Circles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6642 = mobl.ref(result__);
    
    var nodes6769 = $("<span>");
    root7718.append(nodes6769);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6642, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7721 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6770 = $("<span>");
      root7721.append(nodes6770);
      subs__.addSub((mobl.label)(mobl.ref("+Circles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7722 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7722); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6770;
        nodes6770 = node.contents();
        oldNodes.replaceWith(nodes6770);
      }));
      callback(root7721); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6769;
      nodes6769 = node.contents();
      oldNodes.replaceWith(nodes6769);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(6, function(result__) {
                       var tmp6729 = result__;
                       var result__ = mobl.alert("3D lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6643 = mobl.ref(result__);
    
    var nodes6771 = $("<span>");
    root7718.append(nodes6771);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6643, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7723 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6772 = $("<span>");
      root7723.append(nodes6772);
      subs__.addSub((mobl.label)(mobl.ref("+ 3D lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7724 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7724); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6772;
        nodes6772 = node.contents();
        oldNodes.replaceWith(nodes6772);
      }));
      callback(root7723); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6771;
      nodes6771 = node.contents();
      oldNodes.replaceWith(nodes6771);
    }));
    callback(root7718); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6766;
    nodes6766 = node.contents();
    oldNodes.replaceWith(nodes6766);
  }));
  callback(root7715); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root7725 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes6773 = $("<span>");
  root7725.append(nodes6773);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root7726 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp6645 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp6644 = mobl.ref(result__);
    
    var nodes6774 = $("<span>");
    root7726.append(nodes6774);
    subs__.addSub((ui.backButton)(tmp6644, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp6645, function(_, callback) {
      var root7727 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7727); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6774;
      nodes6774 = node.contents();
      oldNodes.replaceWith(nodes6774);
    }));
    callback(root7726); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6773;
    nodes6773 = node.contents();
    oldNodes.replaceWith(nodes6773);
  }));
  var nodes6775 = $("<span>");
  root7725.append(nodes6775);
  subs__.addSub((ui.group)(function(_, callback) {
    var root7728 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(8, function(result__) {
                       var tmp6735 = result__;
                       var result__ = mobl.alert("Arithmetic Progressions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6646 = mobl.ref(result__);
    
    var nodes6776 = $("<span>");
    root7728.append(nodes6776);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6646, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7729 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6777 = $("<span>");
      root7729.append(nodes6777);
      subs__.addSub((mobl.label)(mobl.ref("+Arithmetic progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7730 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7730); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6777;
        nodes6777 = node.contents();
        oldNodes.replaceWith(nodes6777);
      }));
      callback(root7729); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6776;
      nodes6776 = node.contents();
      oldNodes.replaceWith(nodes6776);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(12, function(result__) {
                       var tmp6734 = result__;
                       var result__ = mobl.alert("Binomial Expansion Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6647 = mobl.ref(result__);
    
    var nodes6778 = $("<span>");
    root7728.append(nodes6778);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6647, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7731 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6779 = $("<span>");
      root7731.append(nodes6779);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial expansion"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7732 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7732); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6779;
        nodes6779 = node.contents();
        oldNodes.replaceWith(nodes6779);
      }));
      callback(root7731); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6778;
      nodes6778 = node.contents();
      oldNodes.replaceWith(nodes6778);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(23, function(result__) {
                       var tmp6733 = result__;
                       var result__ = mobl.alert("Geometric Progression Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6648 = mobl.ref(result__);
    
    var nodes6780 = $("<span>");
    root7728.append(nodes6780);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6648, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7733 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6781 = $("<span>");
      root7733.append(nodes6781);
      subs__.addSub((mobl.label)(mobl.ref("+Geometric progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7734 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7734); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6781;
        nodes6781 = node.contents();
        oldNodes.replaceWith(nodes6781);
      }));
      callback(root7733); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6780;
      nodes6780 = node.contents();
      oldNodes.replaceWith(nodes6780);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(2, function(result__) {
                       var tmp6732 = result__;
                       var result__ = mobl.alert("Binomial theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6649 = mobl.ref(result__);
    
    var nodes6782 = $("<span>");
    root7728.append(nodes6782);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6649, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7735 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6783 = $("<span>");
      root7735.append(nodes6783);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7736 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7736); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6783;
        nodes6783 = node.contents();
        oldNodes.replaceWith(nodes6783);
      }));
      callback(root7735); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6782;
      nodes6782 = node.contents();
      oldNodes.replaceWith(nodes6782);
    }));
    callback(root7728); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6775;
    nodes6775 = node.contents();
    oldNodes.replaceWith(nodes6775);
  }));
  callback(root7725); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root7737 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes6784 = $("<span>");
  root7737.append(nodes6784);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root7738 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp6651 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp6650 = mobl.ref(result__);
    
    var nodes6785 = $("<span>");
    root7738.append(nodes6785);
    subs__.addSub((ui.backButton)(tmp6650, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp6651, function(_, callback) {
      var root7739 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7739); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6785;
      nodes6785 = node.contents();
      oldNodes.replaceWith(nodes6785);
    }));
    callback(root7738); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6784;
    nodes6784 = node.contents();
    oldNodes.replaceWith(nodes6784);
  }));
  var nodes6786 = $("<span>");
  root7737.append(nodes6786);
  subs__.addSub((ui.group)(function(_, callback) {
    var root7740 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(5, function(result__) {
                       var tmp6737 = result__;
                       var result__ = mobl.alert("Scalar product Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6652 = mobl.ref(result__);
    
    var nodes6787 = $("<span>");
    root7740.append(nodes6787);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6652, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7741 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6788 = $("<span>");
      root7741.append(nodes6788);
      subs__.addSub((mobl.label)(mobl.ref("+Scalar products"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7742 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7742); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6788;
        nodes6788 = node.contents();
        oldNodes.replaceWith(nodes6788);
      }));
      callback(root7741); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6787;
      nodes6787 = node.contents();
      oldNodes.replaceWith(nodes6787);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(18, function(result__) {
                       var tmp6736 = result__;
                       var result__ = mobl.alert("Vector equation of lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6653 = mobl.ref(result__);
    
    var nodes6789 = $("<span>");
    root7740.append(nodes6789);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6653, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7743 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6790 = $("<span>");
      root7743.append(nodes6790);
      subs__.addSub((mobl.label)(mobl.ref("+Vector equation of lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7744 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7744); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6790;
        nodes6790 = node.contents();
        oldNodes.replaceWith(nodes6790);
      }));
      callback(root7743); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6789;
      nodes6789 = node.contents();
      oldNodes.replaceWith(nodes6789);
    }));
    callback(root7740); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6786;
    nodes6786 = node.contents();
    oldNodes.replaceWith(nodes6786);
  }));
  callback(root7737); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root7745 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes6791 = $("<span>");
  root7745.append(nodes6791);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root7746 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp6655 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp6654 = mobl.ref(result__);
    
    var nodes6792 = $("<span>");
    root7746.append(nodes6792);
    subs__.addSub((ui.backButton)(tmp6654, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp6655, function(_, callback) {
      var root7747 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7747); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6792;
      nodes6792 = node.contents();
      oldNodes.replaceWith(nodes6792);
    }));
    callback(root7746); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6791;
    nodes6791 = node.contents();
    oldNodes.replaceWith(nodes6791);
  }));
  var nodes6793 = $("<span>");
  root7745.append(nodes6793);
  subs__.addSub((ui.group)(function(_, callback) {
    var root7748 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(14, function(result__) {
                       var tmp6742 = result__;
                       var result__ = mobl.alert("Stationary points Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6656 = mobl.ref(result__);
    
    var nodes6794 = $("<span>");
    root7748.append(nodes6794);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6656, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7749 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6795 = $("<span>");
      root7749.append(nodes6795);
      subs__.addSub((mobl.label)(mobl.ref("+Stationary points"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7750 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7750); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6795;
        nodes6795 = node.contents();
        oldNodes.replaceWith(nodes6795);
      }));
      callback(root7749); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6794;
      nodes6794 = node.contents();
      oldNodes.replaceWith(nodes6794);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(20, function(result__) {
                       var tmp6741 = result__;
                       var result__ = mobl.alert("Chain rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6657 = mobl.ref(result__);
    
    var nodes6796 = $("<span>");
    root7748.append(nodes6796);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6657, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7751 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6797 = $("<span>");
      root7751.append(nodes6797);
      subs__.addSub((mobl.label)(mobl.ref("+Chain rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7752 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7752); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6797;
        nodes6797 = node.contents();
        oldNodes.replaceWith(nodes6797);
      }));
      callback(root7751); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6796;
      nodes6796 = node.contents();
      oldNodes.replaceWith(nodes6796);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(21, function(result__) {
                       var tmp6740 = result__;
                       var result__ = mobl.alert("Product rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6658 = mobl.ref(result__);
    
    var nodes6798 = $("<span>");
    root7748.append(nodes6798);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6658, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7753 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6799 = $("<span>");
      root7753.append(nodes6799);
      subs__.addSub((mobl.label)(mobl.ref("+Product rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7754 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7754); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6799;
        nodes6799 = node.contents();
        oldNodes.replaceWith(nodes6799);
      }));
      callback(root7753); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6798;
      nodes6798 = node.contents();
      oldNodes.replaceWith(nodes6798);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(22, function(result__) {
                       var tmp6739 = result__;
                       var result__ = mobl.alert("Quotient rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6659 = mobl.ref(result__);
    
    var nodes6800 = $("<span>");
    root7748.append(nodes6800);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6659, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7755 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6801 = $("<span>");
      root7755.append(nodes6801);
      subs__.addSub((mobl.label)(mobl.ref("+Quotient rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7756 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7756); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6801;
        nodes6801 = node.contents();
        oldNodes.replaceWith(nodes6801);
      }));
      callback(root7755); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6800;
      nodes6800 = node.contents();
      oldNodes.replaceWith(nodes6800);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(19, function(result__) {
                       var tmp6738 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6660 = mobl.ref(result__);
    
    var nodes6802 = $("<span>");
    root7748.append(nodes6802);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6660, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7757 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6803 = $("<span>");
      root7757.append(nodes6803);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7758 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7758); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6803;
        nodes6803 = node.contents();
        oldNodes.replaceWith(nodes6803);
      }));
      callback(root7757); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6802;
      nodes6802 = node.contents();
      oldNodes.replaceWith(nodes6802);
    }));
    callback(root7748); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6793;
    nodes6793 = node.contents();
    oldNodes.replaceWith(nodes6793);
  }));
  callback(root7745); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root7759 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes6804 = $("<span>");
  root7759.append(nodes6804);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root7760 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp6662 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp6661 = mobl.ref(result__);
    
    var nodes6805 = $("<span>");
    root7760.append(nodes6805);
    subs__.addSub((ui.backButton)(tmp6661, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp6662, function(_, callback) {
      var root7761 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7761); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6805;
      nodes6805 = node.contents();
      oldNodes.replaceWith(nodes6805);
    }));
    callback(root7760); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6804;
    nodes6804 = node.contents();
    oldNodes.replaceWith(nodes6804);
  }));
  var nodes6806 = $("<span>");
  root7759.append(nodes6806);
  subs__.addSub((ui.group)(function(_, callback) {
    var root7762 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(28, function(result__) {
                       var tmp6745 = result__;
                       var result__ = mobl.alert("Integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6663 = mobl.ref(result__);
    
    var nodes6807 = $("<span>");
    root7762.append(nodes6807);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6663, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7763 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6808 = $("<span>");
      root7763.append(nodes6808);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7764 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7764); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6808;
        nodes6808 = node.contents();
        oldNodes.replaceWith(nodes6808);
      }));
      callback(root7763); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6807;
      nodes6807 = node.contents();
      oldNodes.replaceWith(nodes6807);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(3, function(result__) {
                       var tmp6744 = result__;
                       var result__ = mobl.alert("Polynomial integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6664 = mobl.ref(result__);
    
    var nodes6809 = $("<span>");
    root7762.append(nodes6809);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6664, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7765 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6810 = $("<span>");
      root7765.append(nodes6810);
      subs__.addSub((mobl.label)(mobl.ref("+Polynomial integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7766 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7766); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6810;
        nodes6810 = node.contents();
        oldNodes.replaceWith(nodes6810);
      }));
      callback(root7765); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6809;
      nodes6809 = node.contents();
      oldNodes.replaceWith(nodes6809);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(4, function(result__) {
                       var tmp6743 = result__;
                       var result__ = mobl.alert("Trig integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6665 = mobl.ref(result__);
    
    var nodes6811 = $("<span>");
    root7762.append(nodes6811);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6665, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7767 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6812 = $("<span>");
      root7767.append(nodes6812);
      subs__.addSub((mobl.label)(mobl.ref("+Trig integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7768 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7768); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6812;
        nodes6812 = node.contents();
        oldNodes.replaceWith(nodes6812);
      }));
      callback(root7767); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6811;
      nodes6811 = node.contents();
      oldNodes.replaceWith(nodes6811);
    }));
    callback(root7762); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6806;
    nodes6806 = node.contents();
    oldNodes.replaceWith(nodes6806);
  }));
  callback(root7759); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root7769 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes6813 = $("<span>");
  root7769.append(nodes6813);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root7770 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp6667 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp6666 = mobl.ref(result__);
    
    var nodes6814 = $("<span>");
    root7770.append(nodes6814);
    subs__.addSub((ui.backButton)(tmp6666, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp6667, function(_, callback) {
      var root7771 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7771); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6814;
      nodes6814 = node.contents();
      oldNodes.replaceWith(nodes6814);
    }));
    callback(root7770); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6813;
    nodes6813 = node.contents();
    oldNodes.replaceWith(nodes6813);
  }));
  var nodes6815 = $("<span>");
  root7769.append(nodes6815);
  subs__.addSub((ui.group)(function(_, callback) {
    var root7772 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(29, function(result__) {
                       var tmp6746 = result__;
                       var result__ = mobl.alert("Differential equations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6668 = mobl.ref(result__);
    
    var nodes6816 = $("<span>");
    root7772.append(nodes6816);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6668, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7773 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6817 = $("<span>");
      root7773.append(nodes6817);
      subs__.addSub((mobl.label)(mobl.ref("+Diff equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7774 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7774); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6817;
        nodes6817 = node.contents();
        oldNodes.replaceWith(nodes6817);
      }));
      callback(root7773); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6816;
      nodes6816 = node.contents();
      oldNodes.replaceWith(nodes6816);
    }));
    callback(root7772); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6815;
    nodes6815 = node.contents();
    oldNodes.replaceWith(nodes6815);
  }));
  callback(root7769); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root7775 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes6818 = $("<span>");
  root7775.append(nodes6818);
  subs__.addSub((ui.group)(function(_, callback) {
    var root7776 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F1", function(result__) {
                       var tmp6759 = result__;
                       var result__ = mobl.alert("Complex arithmetic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6669 = mobl.ref(result__);
    
    var nodes6819 = $("<span>");
    root7776.append(nodes6819);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6669, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7777 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6820 = $("<span>");
      root7777.append(nodes6820);
      subs__.addSub((mobl.label)(mobl.ref("+Complex arithmetic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7778 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7778); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6820;
        nodes6820 = node.contents();
        oldNodes.replaceWith(nodes6820);
      }));
      callback(root7777); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6819;
      nodes6819 = node.contents();
      oldNodes.replaceWith(nodes6819);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F2", function(result__) {
                       var tmp6758 = result__;
                       var result__ = mobl.alert("Modulus argument Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6670 = mobl.ref(result__);
    
    var nodes6821 = $("<span>");
    root7776.append(nodes6821);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6670, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7779 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6822 = $("<span>");
      root7779.append(nodes6822);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus argument"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7780 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7780); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6822;
        nodes6822 = node.contents();
        oldNodes.replaceWith(nodes6822);
      }));
      callback(root7779); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6821;
      nodes6821 = node.contents();
      oldNodes.replaceWith(nodes6821);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F3a", function(result__) {
                       var tmp6757 = result__;
                       var result__ = mobl.alert("2nd order DE Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6671 = mobl.ref(result__);
    
    var nodes6823 = $("<span>");
    root7776.append(nodes6823);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6671, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7781 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6824 = $("<span>");
      root7781.append(nodes6824);
      subs__.addSub((mobl.label)(mobl.ref("+2nd order DEs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7782 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7782); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6824;
        nodes6824 = node.contents();
        oldNodes.replaceWith(nodes6824);
      }));
      callback(root7781); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6823;
      nodes6823 = node.contents();
      oldNodes.replaceWith(nodes6823);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F4", function(result__) {
                       var tmp6756 = result__;
                       var result__ = mobl.alert("Rank 2 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6672 = mobl.ref(result__);
    
    var nodes6825 = $("<span>");
    root7776.append(nodes6825);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6672, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7783 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6826 = $("<span>");
      root7783.append(nodes6826);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 2 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7784 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7784); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6826;
        nodes6826 = node.contents();
        oldNodes.replaceWith(nodes6826);
      }));
      callback(root7783); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6825;
      nodes6825 = node.contents();
      oldNodes.replaceWith(nodes6825);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F5", function(result__) {
                       var tmp6755 = result__;
                       var result__ = mobl.alert("Taylor Series Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6673 = mobl.ref(result__);
    
    var nodes6827 = $("<span>");
    root7776.append(nodes6827);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6673, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7785 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6828 = $("<span>");
      root7785.append(nodes6828);
      subs__.addSub((mobl.label)(mobl.ref("+Taylor Series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7786 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7786); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6828;
        nodes6828 = node.contents();
        oldNodes.replaceWith(nodes6828);
      }));
      callback(root7785); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6827;
      nodes6827 = node.contents();
      oldNodes.replaceWith(nodes6827);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F6", function(result__) {
                       var tmp6754 = result__;
                       var result__ = mobl.alert("Polar Coordinates Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6674 = mobl.ref(result__);
    
    var nodes6829 = $("<span>");
    root7776.append(nodes6829);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6674, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7787 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6830 = $("<span>");
      root7787.append(nodes6830);
      subs__.addSub((mobl.label)(mobl.ref("+Polar Coordinates"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7788 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7788); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6830;
        nodes6830 = node.contents();
        oldNodes.replaceWith(nodes6830);
      }));
      callback(root7787); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6829;
      nodes6829 = node.contents();
      oldNodes.replaceWith(nodes6829);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F7", function(result__) {
                       var tmp6753 = result__;
                       var result__ = mobl.alert("Rank 3 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6675 = mobl.ref(result__);
    
    var nodes6831 = $("<span>");
    root7776.append(nodes6831);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6675, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7789 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6832 = $("<span>");
      root7789.append(nodes6832);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 3 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7790 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7790); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6832;
        nodes6832 = node.contents();
        oldNodes.replaceWith(nodes6832);
      }));
      callback(root7789); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6831;
      nodes6831 = node.contents();
      oldNodes.replaceWith(nodes6831);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F8", function(result__) {
                       var tmp6752 = result__;
                       var result__ = mobl.alert("Further vectors added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6676 = mobl.ref(result__);
    
    var nodes6833 = $("<span>");
    root7776.append(nodes6833);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6676, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7791 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6834 = $("<span>");
      root7791.append(nodes6834);
      subs__.addSub((mobl.label)(mobl.ref("+Further vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7792 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7792); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6834;
        nodes6834 = node.contents();
        oldNodes.replaceWith(nodes6834);
      }));
      callback(root7791); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6833;
      nodes6833 = node.contents();
      oldNodes.replaceWith(nodes6833);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F9", function(result__) {
                       var tmp6751 = result__;
                       var result__ = mobl.alert("Newton-Raphson added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6677 = mobl.ref(result__);
    
    var nodes6835 = $("<span>");
    root7776.append(nodes6835);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6677, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7793 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6836 = $("<span>");
      root7793.append(nodes6836);
      subs__.addSub((mobl.label)(mobl.ref("+Newton-Raphson"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7794 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7794); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6836;
        nodes6836 = node.contents();
        oldNodes.replaceWith(nodes6836);
      }));
      callback(root7793); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6835;
      nodes6835 = node.contents();
      oldNodes.replaceWith(nodes6835);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F10", function(result__) {
                       var tmp6750 = result__;
                       var result__ = mobl.alert("Further inequalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6678 = mobl.ref(result__);
    
    var nodes6837 = $("<span>");
    root7776.append(nodes6837);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6678, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7795 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6838 = $("<span>");
      root7795.append(nodes6838);
      subs__.addSub((mobl.label)(mobl.ref("+Further inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7796 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7796); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6838;
        nodes6838 = node.contents();
        oldNodes.replaceWith(nodes6838);
      }));
      callback(root7795); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6837;
      nodes6837 = node.contents();
      oldNodes.replaceWith(nodes6837);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F11", function(result__) {
                       var tmp6749 = result__;
                       var result__ = mobl.alert("Integration by substitution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6679 = mobl.ref(result__);
    
    var nodes6839 = $("<span>");
    root7776.append(nodes6839);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6679, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7797 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6840 = $("<span>");
      root7797.append(nodes6840);
      subs__.addSub((mobl.label)(mobl.ref("+Integration by substitution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7798 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7798); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6840;
        nodes6840 = node.contents();
        oldNodes.replaceWith(nodes6840);
      }));
      callback(root7797); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6839;
      nodes6839 = node.contents();
      oldNodes.replaceWith(nodes6839);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F12", function(result__) {
                       var tmp6748 = result__;
                       var result__ = mobl.alert("Figures of revolution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6680 = mobl.ref(result__);
    
    var nodes6841 = $("<span>");
    root7776.append(nodes6841);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6680, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7799 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6842 = $("<span>");
      root7799.append(nodes6842);
      subs__.addSub((mobl.label)(mobl.ref("+Figures of revolution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7800 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7800); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6842;
        nodes6842 = node.contents();
        oldNodes.replaceWith(nodes6842);
      }));
      callback(root7799); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6841;
      nodes6841 = node.contents();
      oldNodes.replaceWith(nodes6841);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F13", function(result__) {
                       var tmp6747 = result__;
                       var result__ = mobl.alert("Matrix transformations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6681 = mobl.ref(result__);
    
    var nodes6843 = $("<span>");
    root7776.append(nodes6843);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6681, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7801 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6844 = $("<span>");
      root7801.append(nodes6844);
      subs__.addSub((mobl.label)(mobl.ref("+Matrix transformations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7802 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7802); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6844;
        nodes6844 = node.contents();
        oldNodes.replaceWith(nodes6844);
      }));
      callback(root7801); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6843;
      nodes6843 = node.contents();
      oldNodes.replaceWith(nodes6843);
    }));
    callback(root7776); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6818;
    nodes6818 = node.contents();
    oldNodes.replaceWith(nodes6818);
  }));
  callback(root7775); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root7803 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes6845 = $("<span>");
  root7803.append(nodes6845);
  subs__.addSub((ui.group)(function(_, callback) {
    var root7804 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S1", function(result__) {
                       var tmp6765 = result__;
                       var result__ = mobl.alert("Discrete Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6682 = mobl.ref(result__);
    
    var nodes6846 = $("<span>");
    root7804.append(nodes6846);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6682, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7805 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6847 = $("<span>");
      root7805.append(nodes6847);
      subs__.addSub((mobl.label)(mobl.ref("+Discrete Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7806 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7806); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6847;
        nodes6847 = node.contents();
        oldNodes.replaceWith(nodes6847);
      }));
      callback(root7805); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6846;
      nodes6846 = node.contents();
      oldNodes.replaceWith(nodes6846);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S2", function(result__) {
                       var tmp6764 = result__;
                       var result__ = mobl.alert("Continuous Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6683 = mobl.ref(result__);
    
    var nodes6848 = $("<span>");
    root7804.append(nodes6848);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6683, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7807 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6849 = $("<span>");
      root7807.append(nodes6849);
      subs__.addSub((mobl.label)(mobl.ref("+Continuous Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7808 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7808); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6849;
        nodes6849 = node.contents();
        oldNodes.replaceWith(nodes6849);
      }));
      callback(root7807); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6848;
      nodes6848 = node.contents();
      oldNodes.replaceWith(nodes6848);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S3", function(result__) {
                       var tmp6763 = result__;
                       var result__ = mobl.alert("Hypothesis Testing Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6684 = mobl.ref(result__);
    
    var nodes6850 = $("<span>");
    root7804.append(nodes6850);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6684, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7809 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6851 = $("<span>");
      root7809.append(nodes6851);
      subs__.addSub((mobl.label)(mobl.ref("+Hypothesis Testing"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7810 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7810); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6851;
        nodes6851 = node.contents();
        oldNodes.replaceWith(nodes6851);
      }));
      callback(root7809); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6850;
      nodes6850 = node.contents();
      oldNodes.replaceWith(nodes6850);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S4", function(result__) {
                       var tmp6762 = result__;
                       var result__ = mobl.alert("Confidence Intervals Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6685 = mobl.ref(result__);
    
    var nodes6852 = $("<span>");
    root7804.append(nodes6852);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6685, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7811 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6853 = $("<span>");
      root7811.append(nodes6853);
      subs__.addSub((mobl.label)(mobl.ref("+Confidence Intervals"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7812 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7812); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6853;
        nodes6853 = node.contents();
        oldNodes.replaceWith(nodes6853);
      }));
      callback(root7811); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6852;
      nodes6852 = node.contents();
      oldNodes.replaceWith(nodes6852);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S5", function(result__) {
                       var tmp6761 = result__;
                       var result__ = mobl.alert("Chi Squared Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6686 = mobl.ref(result__);
    
    var nodes6854 = $("<span>");
    root7804.append(nodes6854);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6686, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7813 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6855 = $("<span>");
      root7813.append(nodes6855);
      subs__.addSub((mobl.label)(mobl.ref("+Chi Squared"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7814 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7814); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6855;
        nodes6855 = node.contents();
        oldNodes.replaceWith(nodes6855);
      }));
      callback(root7813); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6854;
      nodes6854 = node.contents();
      oldNodes.replaceWith(nodes6854);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S6", function(result__) {
                       var tmp6760 = result__;
                       var result__ = mobl.alert("Product Moment Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6687 = mobl.ref(result__);
    
    var nodes6856 = $("<span>");
    root7804.append(nodes6856);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6687, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7815 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6857 = $("<span>");
      root7815.append(nodes6857);
      subs__.addSub((mobl.label)(mobl.ref("+Product Moments"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7816 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7816); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6857;
        nodes6857 = node.contents();
        oldNodes.replaceWith(nodes6857);
      }));
      callback(root7815); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6856;
      nodes6856 = node.contents();
      oldNodes.replaceWith(nodes6856);
    }));
    callback(root7804); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6845;
    nodes6845 = node.contents();
    oldNodes.replaceWith(nodes6845);
  }));
  callback(root7803); return subs__;
  
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
  var root7817 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node929 = $("<div>");
  
  var ref894 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref894.get() !== null) {
    node929.attr('class', ref894.get());
    subs__.addSub(ref894.addEventListener('change', function(_, ref, val) {
      node929.attr('class', val);
    }));
    
  }
  subs__.addSub(ref894.rebind());
  
  var val390 = onclick.get();
  if(val390 !== null) {
    subs__.addSub(mobl.domBind(node929, 'tap', val390));
  }
  
  
  var node930 = $("<div>");
  
  var ref893 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref893.get() !== null) {
    node930.attr('class', ref893.get());
    subs__.addSub(ref893.addEventListener('change', function(_, ref, val) {
      node930.attr('class', val);
    }));
    
  }
  subs__.addSub(ref893.rebind());
  
  
  var node931 = $("<div>");
  
  var ref891 = text;
  node931.text(""+ref891.get());
  var ignore163 = false;
  subs__.addSub(ref891.addEventListener('change', function(_, ref, val) {
    if(ignore163) return;
    node931.text(""+val);
  }));
  subs__.addSub(ref891.rebind());
  
  
  var ref892 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref892.get() !== null) {
    node931.attr('class', ref892.get());
    subs__.addSub(ref892.addEventListener('change', function(_, ref, val) {
      node931.attr('class', val);
    }));
    
  }
  subs__.addSub(ref892.rebind());
  
  node930.append(node931);
  node929.append(node930);
  var nodes6858 = $("<span>");
  node929.append(nodes6858);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl335();
  }));
  
  function renderControl335() {
    subs__.addSub((elements)(function(elements, callback) {
      var root7818 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7818); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6858;
      nodes6858 = node.contents();
      oldNodes.replaceWith(nodes6858);
    }));
  }
  renderControl335();
  root7817.append(node929);
  callback(root7817); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mathJAX.renderMaths(function(result__) {
    var tmp6766 = result__;
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
  var root7819 = $("<span>");
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
  var tmp6692 = mobl.ref(result__);
  
  var result__ = qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle;
  var tmp6691 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    tmp6691.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.agreeStyle).addEventListener('change', function() {
    tmp6691.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.disagreeStyle).addEventListener('change', function() {
    tmp6691.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  
  var nodes6859 = $("<span>");
  root7819.append(nodes6859);
  subs__.addSub((mobl.block)(tmp6691, mobl.ref(null), tmp6692, mobl.ref(null), function(_, callback) {
    var root7820 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = "A" + number.get() + ". ";
    var tmp6688 = mobl.ref(result__);
    subs__.addSub(number.addEventListener('change', function() {
      tmp6688.set("A" + number.get() + ". ");
    }));
    
    var nodes6860 = $("<span>");
    root7820.append(nodes6860);
    subs__.addSub((mobl.label)(tmp6688, mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root7821 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7821); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6860;
      nodes6860 = node.contents();
      oldNodes.replaceWith(nodes6860);
    }));
    var result__ = qa.get().answer != "%GRAPH%";
    var tmp6690 = mobl.ref(result__);
    subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
      tmp6690.set(qa.get().answer != "%GRAPH%");
    }));
    
    
    var node932 = $("<span>");
    root7820.append(node932);
    var condSubs224 = new mobl.CompSubscription();
    subs__.addSub(condSubs224);
    var oldValue224;
    var renderCond224 = function() {
      var value524 = tmp6690.get();
      if(oldValue224 === value524) return;
      oldValue224 = value524;
      var subs__ = condSubs224;
      subs__.unsubscribe();
      node932.empty();
      if(value524) {
        
        var node933 = $("<span>");
        
        var ref895 = mobl.ref("answer-block-" + number.get());
        if(ref895.get() !== null) {
          node933.attr('id', ref895.get());
          subs__.addSub(ref895.addEventListener('change', function(_, ref, val) {
            node933.attr('id', val);
          }));
          subs__.addSub(number.addEventListener('change', function() {
            node933.attr('id', "answer-block-" + number.get());
          }));
          
        }
        subs__.addSub(ref895.rebind());
        
        var result__ = nrichRPG.coreWorkout.blank(qa.get().answerHtml) ? qa.get().answer : qa.get().answerHtml;
        var tmp6689 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp6689.set(nrichRPG.coreWorkout.blank(qa.get().answerHtml) ? qa.get().answer : qa.get().answerHtml);
        }));
        subs__.addSub(mobl.ref(qa, 'answerHtml').addEventListener('change', function() {
          tmp6689.set(nrichRPG.coreWorkout.blank(qa.get().answerHtml) ? qa.get().answer : qa.get().answerHtml);
        }));
        
        var nodes6861 = $("<span>");
        node933.append(nodes6861);
        subs__.addSub((mobl.html)(tmp6689, function(_, callback) {
          var root7822 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root7822); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes6861;
          nodes6861 = node.contents();
          oldNodes.replaceWith(nodes6861);
        }));
        node932.append(node933);
        
        
        
      } else {
        var nodes6862 = $("<span>");
        node932.append(nodes6862);
        subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
          var root7823 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root7823); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes6862;
          nodes6862 = node.contents();
          oldNodes.replaceWith(nodes6862);
        }));
        
        
      }
    };
    renderCond224();
    subs__.addSub(tmp6690.addEventListener('change', function() {
      renderCond224();
    }));
    
    callback(root7820); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6859;
    nodes6859 = node.contents();
    oldNodes.replaceWith(nodes6859);
  }));
  var nodes6863 = $("<span>");
  root7819.append(nodes6863);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root7824 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
      var tmp6767 = result__;
      var nodes6864 = $("<span>");
      root7824.append(nodes6864);
      subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7825 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7825); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6864;
        nodes6864 = node.contents();
        oldNodes.replaceWith(nodes6864);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = true;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp6693 = mobl.ref(result__);
      
      var nodes6865 = $("<span>");
      root7824.append(nodes6865);
      subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp6693, function(_, callback) {
        var root7826 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7826); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6865;
        nodes6865 = node.contents();
        oldNodes.replaceWith(nodes6865);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = false;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp6694 = mobl.ref(result__);
      
      var nodes6866 = $("<span>");
      root7824.append(nodes6866);
      subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp6694, function(_, callback) {
        var root7827 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7827); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6866;
        nodes6866 = node.contents();
        oldNodes.replaceWith(nodes6866);
      }));
      callback(root7824); return subs__;
      
      
      
    });
    return subs__;
  }, function(node) {
    var oldNodes = nodes6863;
    nodes6863 = node.contents();
    oldNodes.replaceWith(nodes6863);
  }));
  callback(root7819); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp6768 = result__;
    var result__ = tmp6768;
    var qa2 = result__;
    var result__ = qa2 == null;
    if(result__) {
      nrichRPG.questionAnswer.QA.all().one(function(result__) {
        var tmp6769 = result__;
        var result__ = tmp6769;
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
  return !(text == null || text.toString() == "");
};


nrichRPG.coreWorkout.showQA = function(qa, number, elements, callback) {
  var root7828 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp6776 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp6696 = mobl.ref(result__);
  
  var nodes6867 = $("<span>");
  root7828.append(nodes6867);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(mobl.ref(qa, 'topic'), tmp6696, function(_, callback) {
    var root7829 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp6770 = result__;
                       var result__ = tmp6770;
                       var qa2 = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp6771 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp6695 = mobl.ref(result__);
    
    var nodes6868 = $("<span>");
    root7829.append(nodes6868);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp6695, function(_, callback) {
      var root7830 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7830); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6868;
      nodes6868 = node.contents();
      oldNodes.replaceWith(nodes6868);
    }));
    callback(root7829); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6867;
    nodes6867 = node.contents();
    oldNodes.replaceWith(nodes6867);
  }));
  var nodes6869 = $("<span>");
  root7828.append(nodes6869);
  subs__.addSub((ui.group)(function(_, callback) {
    var root7831 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp6775 = result__;
                       var result__ = nrichRPG.coreWorkout.removeMathJaxIncidentElements();
                       var result__ = mobl.$("#question-block-" + number.get()).children("span:first").html();
                       qa.get().questionHtml = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6699 = mobl.ref(result__);
    
    var nodes6870 = $("<span>");
    root7831.append(nodes6870);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp6699, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root7832 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + number.get() + ". ";
      var tmp6697 = mobl.ref(result__);
      subs__.addSub(number.addEventListener('change', function() {
        tmp6697.set("Q" + number.get() + ". ");
      }));
      
      var nodes6871 = $("<span>");
      root7832.append(nodes6871);
      subs__.addSub((mobl.html)(tmp6697, function(_, callback) {
        var root7833 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7833); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6871;
        nodes6871 = node.contents();
        oldNodes.replaceWith(nodes6871);
      }));
      
      var node934 = $("<span>");
      
      var ref896 = mobl.ref("question-block-" + number.get());
      if(ref896.get() !== null) {
        node934.attr('id', ref896.get());
        subs__.addSub(ref896.addEventListener('change', function(_, ref, val) {
          node934.attr('id', val);
        }));
        subs__.addSub(number.addEventListener('change', function() {
          node934.attr('id', "question-block-" + number.get());
        }));
        
      }
      subs__.addSub(ref896.rebind());
      
      var result__ = nrichRPG.coreWorkout.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml;
      var tmp6698 = mobl.ref(result__);
      subs__.addSub(mobl.ref(qa, 'question').addEventListener('change', function() {
        tmp6698.set(nrichRPG.coreWorkout.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml);
      }));
      subs__.addSub(mobl.ref(qa, 'questionHtml').addEventListener('change', function() {
        tmp6698.set(nrichRPG.coreWorkout.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml);
      }));
      
      var nodes6872 = $("<span>");
      node934.append(nodes6872);
      subs__.addSub((mobl.html)(tmp6698, function(_, callback) {
        var root7834 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7834); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6872;
        nodes6872 = node.contents();
        oldNodes.replaceWith(nodes6872);
      }));
      root7832.append(node934);
      nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
        var tmp6772 = result__;
        callback(root7832); return subs__;
      });
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6870;
      nodes6870 = node.contents();
      oldNodes.replaceWith(nodes6870);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp6774 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6701 = mobl.ref(result__);
    
    var nodes6873 = $("<span>");
    root7831.append(nodes6873);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6701, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root7835 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6874 = $("<span>");
      root7835.append(nodes6874);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7836 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                           var tmp6773 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp6700 = mobl.ref(result__);
        
        var nodes6875 = $("<span>");
        root7836.append(nodes6875);
        subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp6700, function(_, callback) {
          var root7837 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root7837); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes6875;
          nodes6875 = node.contents();
          oldNodes.replaceWith(nodes6875);
        }));
        callback(root7836); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes6874;
        nodes6874 = node.contents();
        oldNodes.replaceWith(nodes6874);
      }));
      
      var node935 = $("<span>");
      root7835.append(node935);
      var condSubs225 = new mobl.CompSubscription();
      subs__.addSub(condSubs225);
      var oldValue225;
      var renderCond225 = function() {
        var value525 = qa.get().done;
        if(oldValue225 === value525) return;
        oldValue225 = value525;
        var subs__ = condSubs225;
        subs__.unsubscribe();
        node935.empty();
        if(value525) {
          var nodes6876 = $("<span>");
          node935.append(nodes6876);
          subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, number, function(_, callback) {
            var root7838 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root7838); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes6876;
            nodes6876 = node.contents();
            oldNodes.replaceWith(nodes6876);
          }));
          
          
        } else {
          
        }
      };
      renderCond225();
      subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
        renderCond225();
      }));
      
      callback(root7835); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6873;
      nodes6873 = node.contents();
      oldNodes.replaceWith(nodes6873);
    }));
    callback(root7831); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6869;
    nodes6869 = node.contents();
    oldNodes.replaceWith(nodes6869);
  }));
  callback(root7828); return subs__;
  
  
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
  qas.list(function(coll696) {
    coll696 = coll696.reverse();
    function processOne246() {
      var item;
      item = coll696.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll696.length > 0) processOne246(); else rest246();
      
    }
    function rest246() {
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
    if(coll696.length > 0) processOne246(); else rest246();
  });
  
};

nrichRPG.coreWorkout.makeQAStar = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll697) {
    coll697 = coll697.reverse();
    function processOne247() {
      var item;
      item = coll697.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll697.length > 0) processOne247(); else rest247();
      
    }
    function rest247() {
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
    if(coll697.length > 0) processOne247(); else rest247();
  });
  
};

nrichRPG.coreWorkout.makeQAStats = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll698) {
    coll698 = coll698.reverse();
    function processOne248() {
      var item;
      item = coll698.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll698.length > 0) processOne248(); else rest248();
      
    }
    function rest248() {
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
    if(coll698.length > 0) processOne248(); else rest248();
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