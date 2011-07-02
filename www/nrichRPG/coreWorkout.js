mobl.provides('nrichRPG.coreWorkout');
mobl.provides('mobl.ui');
mobl.provides('plot');
mobl.provides('ui');
mobl.provides('mathJAX');
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
    var tmp773 = result__;
    var result__ = tmp773;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp774 = result__;
      var result__ = tmp774;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp775 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicId, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll48) {
    coll48 = coll48.reverse();
    function processOne24() {
      var i;
      i = coll48.pop();
      nrichRPG.coreWorkout.makeQA(topicId, function(result__) {
        var tmp776 = result__;
        
        if(coll48.length > 0) processOne24(); else rest24();
        
      });
    }
    function rest24() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll48.length > 0) processOne24(); else rest24();
  });
  
};

nrichRPG.coreWorkout.randomQStar = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll49) {
    coll49 = coll49.reverse();
    function processOne25() {
      var i;
      i = coll49.pop();
      var result__ = mobl.Math.floor(13 * mobl.Math.random());
      var r = result__;
      var result__ = "F" + (1 + r);
      var tid = result__;
      var result__ = tid == "F3";
      if(result__) {
        var result__ = "F3a";
        tid = result__;
        nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
          var tmp777 = result__;
          
          if(coll49.length > 0) processOne25(); else rest25();
          
        });
      } else {
        {
          nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
            var tmp777 = result__;
            
            if(coll49.length > 0) processOne25(); else rest25();
            
          });
        }
      }
    }
    function rest25() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll49.length > 0) processOne25(); else rest25();
  });
  
};

nrichRPG.coreWorkout.randomQStats = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll50) {
    coll50 = coll50.reverse();
    function processOne26() {
      var i;
      i = coll50.pop();
      var result__ = mobl.Math.floor(6 * mobl.Math.random());
      var r = result__;
      var result__ = "S" + (1 + r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
        var tmp778 = result__;
        
        if(coll50.length > 0) processOne26(); else rest26();
        
      });
    }
    function rest26() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll50.length > 0) processOne26(); else rest26();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root724 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes658 = $("<span>");
  root724.append(nodes658);
  subs__.addSub((ui.group)(function(_, callback) {
    var root725 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp786 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp685 = mobl.ref(result__);
    
    var nodes659 = $("<span>");
    root725.append(nodes659);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp685, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root726 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes660 = $("<span>");
      root726.append(nodes660);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root727 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root727); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes660;
        nodes660 = node.contents();
        oldNodes.replaceWith(nodes660);
      }));
      callback(root726); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes659;
      nodes659 = node.contents();
      oldNodes.replaceWith(nodes659);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp785 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp686 = mobl.ref(result__);
    
    var nodes661 = $("<span>");
    root725.append(nodes661);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp686, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root728 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes662 = $("<span>");
      root728.append(nodes662);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root729 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root729); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes662;
        nodes662 = node.contents();
        oldNodes.replaceWith(nodes662);
      }));
      callback(root728); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes661;
      nodes661 = node.contents();
      oldNodes.replaceWith(nodes661);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp784 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp687 = mobl.ref(result__);
    
    var nodes663 = $("<span>");
    root725.append(nodes663);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp687, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root730 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes664 = $("<span>");
      root730.append(nodes664);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root731 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root731); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes664;
        nodes664 = node.contents();
        oldNodes.replaceWith(nodes664);
      }));
      callback(root730); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes663;
      nodes663 = node.contents();
      oldNodes.replaceWith(nodes663);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp783 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp688 = mobl.ref(result__);
    
    var nodes665 = $("<span>");
    root725.append(nodes665);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp688, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root732 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes666 = $("<span>");
      root732.append(nodes666);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root733 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root733); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes666;
        nodes666 = node.contents();
        oldNodes.replaceWith(nodes666);
      }));
      callback(root732); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes665;
      nodes665 = node.contents();
      oldNodes.replaceWith(nodes665);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp782 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp689 = mobl.ref(result__);
    
    var nodes667 = $("<span>");
    root725.append(nodes667);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp689, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root734 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes668 = $("<span>");
      root734.append(nodes668);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root735 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root735); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes668;
        nodes668 = node.contents();
        oldNodes.replaceWith(nodes668);
      }));
      callback(root734); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes667;
      nodes667 = node.contents();
      oldNodes.replaceWith(nodes667);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp781 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp690 = mobl.ref(result__);
    
    var nodes669 = $("<span>");
    root725.append(nodes669);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp690, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root736 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes670 = $("<span>");
      root736.append(nodes670);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root737 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root737); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes670;
        nodes670 = node.contents();
        oldNodes.replaceWith(nodes670);
      }));
      callback(root736); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes669;
      nodes669 = node.contents();
      oldNodes.replaceWith(nodes669);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp780 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp691 = mobl.ref(result__);
    
    var nodes671 = $("<span>");
    root725.append(nodes671);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp691, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root738 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes672 = $("<span>");
      root738.append(nodes672);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root739 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root739); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes672;
        nodes672 = node.contents();
        oldNodes.replaceWith(nodes672);
      }));
      callback(root738); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes671;
      nodes671 = node.contents();
      oldNodes.replaceWith(nodes671);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp779 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp692 = mobl.ref(result__);
    
    var nodes673 = $("<span>");
    root725.append(nodes673);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp692, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root740 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes674 = $("<span>");
      root740.append(nodes674);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root741 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root741); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes674;
        nodes674 = node.contents();
        oldNodes.replaceWith(nodes674);
      }));
      callback(root740); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes673;
      nodes673 = node.contents();
      oldNodes.replaceWith(nodes673);
    }));
    callback(root725); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes658;
    nodes658 = node.contents();
    oldNodes.replaceWith(nodes658);
  }));
  callback(root724); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root742 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes675 = $("<span>");
  root742.append(nodes675);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root743 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp694 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp693 = mobl.ref(result__);
    
    var nodes676 = $("<span>");
    root743.append(nodes676);
    subs__.addSub((ui.backButton)(tmp693, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp694, function(_, callback) {
      var root744 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root744); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes676;
      nodes676 = node.contents();
      oldNodes.replaceWith(nodes676);
    }));
    callback(root743); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes675;
    nodes675 = node.contents();
    oldNodes.replaceWith(nodes675);
  }));
  var nodes677 = $("<span>");
  root742.append(nodes677);
  subs__.addSub((ui.group)(function(_, callback) {
    var root745 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(10, function(result__) {
                       var tmp794 = result__;
                       var result__ = mobl.alert("Quadratic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp695 = mobl.ref(result__);
    
    var nodes678 = $("<span>");
    root745.append(nodes678);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp695, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root746 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes679 = $("<span>");
      root746.append(nodes679);
      subs__.addSub((mobl.label)(mobl.ref("+Quadratic equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root747 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root747); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes679;
        nodes679 = node.contents();
        oldNodes.replaceWith(nodes679);
      }));
      callback(root746); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes678;
      nodes678 = node.contents();
      oldNodes.replaceWith(nodes678);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(11, function(result__) {
                       var tmp793 = result__;
                       var result__ = mobl.alert("Completing the Square Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp696 = mobl.ref(result__);
    
    var nodes680 = $("<span>");
    root745.append(nodes680);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp696, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root748 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes682 = $("<span>");
      root748.append(nodes682);
      subs__.addSub((mobl.label)(mobl.ref("+Completing the square"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root749 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root749); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes682;
        nodes682 = node.contents();
        oldNodes.replaceWith(nodes682);
      }));
      callback(root748); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes680;
      nodes680 = node.contents();
      oldNodes.replaceWith(nodes680);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(7, function(result__) {
                       var tmp792 = result__;
                       var result__ = mobl.alert("Ineqalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp697 = mobl.ref(result__);
    
    var nodes683 = $("<span>");
    root745.append(nodes683);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp697, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root750 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes684 = $("<span>");
      root750.append(nodes684);
      subs__.addSub((mobl.label)(mobl.ref("+Inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root751 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root751); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes684;
        nodes684 = node.contents();
        oldNodes.replaceWith(nodes684);
      }));
      callback(root750); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes683;
      nodes683 = node.contents();
      oldNodes.replaceWith(nodes683);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(9, function(result__) {
                       var tmp791 = result__;
                       var result__ = mobl.alert("Factor theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp698 = mobl.ref(result__);
    
    var nodes685 = $("<span>");
    root745.append(nodes685);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp698, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root752 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes686 = $("<span>");
      root752.append(nodes686);
      subs__.addSub((mobl.label)(mobl.ref("+Factor theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root753 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root753); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes686;
        nodes686 = node.contents();
        oldNodes.replaceWith(nodes686);
      }));
      callback(root752); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes685;
      nodes685 = node.contents();
      oldNodes.replaceWith(nodes685);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(1, function(result__) {
                       var tmp790 = result__;
                       var result__ = mobl.alert("Partial fraction Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp699 = mobl.ref(result__);
    
    var nodes687 = $("<span>");
    root745.append(nodes687);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp699, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root754 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes688 = $("<span>");
      root754.append(nodes688);
      subs__.addSub((mobl.label)(mobl.ref("+Partial fractions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root755 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root755); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes688;
        nodes688 = node.contents();
        oldNodes.replaceWith(nodes688);
      }));
      callback(root754); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes687;
      nodes687 = node.contents();
      oldNodes.replaceWith(nodes687);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(30, function(result__) {
                       var tmp789 = result__;
                       var result__ = mobl.alert("Powers Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp700 = mobl.ref(result__);
    
    var nodes689 = $("<span>");
    root745.append(nodes689);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp700, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root756 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes690 = $("<span>");
      root756.append(nodes690);
      subs__.addSub((mobl.label)(mobl.ref("+Powers"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root757 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root757); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes690;
        nodes690 = node.contents();
        oldNodes.replaceWith(nodes690);
      }));
      callback(root756); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes689;
      nodes689 = node.contents();
      oldNodes.replaceWith(nodes689);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(13, function(result__) {
                       var tmp788 = result__;
                       var result__ = mobl.alert("Logarithm Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp701 = mobl.ref(result__);
    
    var nodes691 = $("<span>");
    root745.append(nodes691);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp701, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root758 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes692 = $("<span>");
      root758.append(nodes692);
      subs__.addSub((mobl.label)(mobl.ref("+Logarithms"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root759 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root759); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes692;
        nodes692 = node.contents();
        oldNodes.replaceWith(nodes692);
      }));
      callback(root758); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes691;
      nodes691 = node.contents();
      oldNodes.replaceWith(nodes691);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(17, function(result__) {
                       var tmp787 = result__;
                       var result__ = mobl.alert("Trig equation Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp702 = mobl.ref(result__);
    
    var nodes693 = $("<span>");
    root745.append(nodes693);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp702, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root760 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes694 = $("<span>");
      root760.append(nodes694);
      subs__.addSub((mobl.label)(mobl.ref("+Trig equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root761 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root761); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes694;
        nodes694 = node.contents();
        oldNodes.replaceWith(nodes694);
      }));
      callback(root760); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes693;
      nodes693 = node.contents();
      oldNodes.replaceWith(nodes693);
    }));
    callback(root745); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes677;
    nodes677 = node.contents();
    oldNodes.replaceWith(nodes677);
  }));
  callback(root742); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root762 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes695 = $("<span>");
  root762.append(nodes695);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root763 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp704 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp703 = mobl.ref(result__);
    
    var nodes696 = $("<span>");
    root763.append(nodes696);
    subs__.addSub((ui.backButton)(tmp703, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp704, function(_, callback) {
      var root764 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root764); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes696;
      nodes696 = node.contents();
      oldNodes.replaceWith(nodes696);
    }));
    callback(root763); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes695;
    nodes695 = node.contents();
    oldNodes.replaceWith(nodes695);
  }));
  var nodes697 = $("<span>");
  root762.append(nodes697);
  subs__.addSub((ui.group)(function(_, callback) {
    var root765 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(24, function(result__) {
                       var tmp799 = result__;
                       var result__ = mobl.alert("Modulus Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp705 = mobl.ref(result__);
    
    var nodes698 = $("<span>");
    root765.append(nodes698);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp705, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root766 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes699 = $("<span>");
      root766.append(nodes699);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus function"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root767 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root767); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes699;
        nodes699 = node.contents();
        oldNodes.replaceWith(nodes699);
      }));
      callback(root766); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes698;
      nodes698 = node.contents();
      oldNodes.replaceWith(nodes698);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(25, function(result__) {
                       var tmp798 = result__;
                       var result__ = mobl.alert("Transformations of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp706 = mobl.ref(result__);
    
    var nodes700 = $("<span>");
    root765.append(nodes700);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp706, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root768 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes701 = $("<span>");
      root768.append(nodes701);
      subs__.addSub((mobl.label)(mobl.ref("+Transformations of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root769 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root769); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes701;
        nodes701 = node.contents();
        oldNodes.replaceWith(nodes701);
      }));
      callback(root768); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes700;
      nodes700 = node.contents();
      oldNodes.replaceWith(nodes700);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(26, function(result__) {
                       var tmp797 = result__;
                       var result__ = mobl.alert("Composition of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp707 = mobl.ref(result__);
    
    var nodes702 = $("<span>");
    root765.append(nodes702);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp707, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root770 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes703 = $("<span>");
      root770.append(nodes703);
      subs__.addSub((mobl.label)(mobl.ref("+Composition of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root771 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root771); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes703;
        nodes703 = node.contents();
        oldNodes.replaceWith(nodes703);
      }));
      callback(root770); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes702;
      nodes702 = node.contents();
      oldNodes.replaceWith(nodes702);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(270, function(result__) {
                       var tmp796 = result__;
                       var result__ = mobl.alert("Implicit functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp708 = mobl.ref(result__);
    
    var nodes704 = $("<span>");
    root765.append(nodes704);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp708, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root772 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes705 = $("<span>");
      root772.append(nodes705);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root773 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root773); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes705;
        nodes705 = node.contents();
        oldNodes.replaceWith(nodes705);
      }));
      callback(root772); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes704;
      nodes704 = node.contents();
      oldNodes.replaceWith(nodes704);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(27, function(result__) {
                       var tmp795 = result__;
                       var result__ = mobl.alert("Parametric functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp709 = mobl.ref(result__);
    
    var nodes706 = $("<span>");
    root765.append(nodes706);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp709, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root774 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes707 = $("<span>");
      root774.append(nodes707);
      subs__.addSub((mobl.label)(mobl.ref("+Parametric functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root775 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root775); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes707;
        nodes707 = node.contents();
        oldNodes.replaceWith(nodes707);
      }));
      callback(root774); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes706;
      nodes706 = node.contents();
      oldNodes.replaceWith(nodes706);
    }));
    callback(root765); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes697;
    nodes697 = node.contents();
    oldNodes.replaceWith(nodes697);
  }));
  callback(root762); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root776 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes708 = $("<span>");
  root776.append(nodes708);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root777 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp711 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp710 = mobl.ref(result__);
    
    var nodes709 = $("<span>");
    root777.append(nodes709);
    subs__.addSub((ui.backButton)(tmp710, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp711, function(_, callback) {
      var root778 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root778); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes709;
      nodes709 = node.contents();
      oldNodes.replaceWith(nodes709);
    }));
    callback(root777); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes708;
    nodes708 = node.contents();
    oldNodes.replaceWith(nodes708);
  }));
  var nodes710 = $("<span>");
  root776.append(nodes710);
  subs__.addSub((ui.group)(function(_, callback) {
    var root779 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(15, function(result__) {
                       var tmp802 = result__;
                       var result__ = mobl.alert("Triangles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp712 = mobl.ref(result__);
    
    var nodes711 = $("<span>");
    root779.append(nodes711);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp712, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root780 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes712 = $("<span>");
      root780.append(nodes712);
      subs__.addSub((mobl.label)(mobl.ref("+Triangles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root781 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root781); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes712;
        nodes712 = node.contents();
        oldNodes.replaceWith(nodes712);
      }));
      callback(root780); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes711;
      nodes711 = node.contents();
      oldNodes.replaceWith(nodes711);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(16, function(result__) {
                       var tmp801 = result__;
                       var result__ = mobl.alert("Circles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp713 = mobl.ref(result__);
    
    var nodes713 = $("<span>");
    root779.append(nodes713);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp713, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root782 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes714 = $("<span>");
      root782.append(nodes714);
      subs__.addSub((mobl.label)(mobl.ref("+Circles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root783 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root783); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes714;
        nodes714 = node.contents();
        oldNodes.replaceWith(nodes714);
      }));
      callback(root782); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes713;
      nodes713 = node.contents();
      oldNodes.replaceWith(nodes713);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(6, function(result__) {
                       var tmp800 = result__;
                       var result__ = mobl.alert("3D lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp714 = mobl.ref(result__);
    
    var nodes715 = $("<span>");
    root779.append(nodes715);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp714, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root784 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes716 = $("<span>");
      root784.append(nodes716);
      subs__.addSub((mobl.label)(mobl.ref("+ 3D lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root785 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root785); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes716;
        nodes716 = node.contents();
        oldNodes.replaceWith(nodes716);
      }));
      callback(root784); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes715;
      nodes715 = node.contents();
      oldNodes.replaceWith(nodes715);
    }));
    callback(root779); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes710;
    nodes710 = node.contents();
    oldNodes.replaceWith(nodes710);
  }));
  callback(root776); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root786 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes717 = $("<span>");
  root786.append(nodes717);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root787 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp716 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp715 = mobl.ref(result__);
    
    var nodes718 = $("<span>");
    root787.append(nodes718);
    subs__.addSub((ui.backButton)(tmp715, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp716, function(_, callback) {
      var root788 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root788); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes718;
      nodes718 = node.contents();
      oldNodes.replaceWith(nodes718);
    }));
    callback(root787); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes717;
    nodes717 = node.contents();
    oldNodes.replaceWith(nodes717);
  }));
  var nodes719 = $("<span>");
  root786.append(nodes719);
  subs__.addSub((ui.group)(function(_, callback) {
    var root789 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(8, function(result__) {
                       var tmp806 = result__;
                       var result__ = mobl.alert("Arithmetic Progressions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp717 = mobl.ref(result__);
    
    var nodes720 = $("<span>");
    root789.append(nodes720);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp717, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root790 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes721 = $("<span>");
      root790.append(nodes721);
      subs__.addSub((mobl.label)(mobl.ref("+Arithmetic progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root791 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root791); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes721;
        nodes721 = node.contents();
        oldNodes.replaceWith(nodes721);
      }));
      callback(root790); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes720;
      nodes720 = node.contents();
      oldNodes.replaceWith(nodes720);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(12, function(result__) {
                       var tmp805 = result__;
                       var result__ = mobl.alert("Binomial Expansion Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp718 = mobl.ref(result__);
    
    var nodes722 = $("<span>");
    root789.append(nodes722);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp718, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root792 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes723 = $("<span>");
      root792.append(nodes723);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial expansion"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root793 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root793); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes723;
        nodes723 = node.contents();
        oldNodes.replaceWith(nodes723);
      }));
      callback(root792); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes722;
      nodes722 = node.contents();
      oldNodes.replaceWith(nodes722);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(23, function(result__) {
                       var tmp804 = result__;
                       var result__ = mobl.alert("Geometric Progression Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp719 = mobl.ref(result__);
    
    var nodes724 = $("<span>");
    root789.append(nodes724);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp719, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root794 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes725 = $("<span>");
      root794.append(nodes725);
      subs__.addSub((mobl.label)(mobl.ref("+Geometric progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root795 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root795); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes725;
        nodes725 = node.contents();
        oldNodes.replaceWith(nodes725);
      }));
      callback(root794); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes724;
      nodes724 = node.contents();
      oldNodes.replaceWith(nodes724);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(2, function(result__) {
                       var tmp803 = result__;
                       var result__ = mobl.alert("Binomial theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp720 = mobl.ref(result__);
    
    var nodes726 = $("<span>");
    root789.append(nodes726);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp720, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root796 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes727 = $("<span>");
      root796.append(nodes727);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root797 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root797); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes727;
        nodes727 = node.contents();
        oldNodes.replaceWith(nodes727);
      }));
      callback(root796); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes726;
      nodes726 = node.contents();
      oldNodes.replaceWith(nodes726);
    }));
    callback(root789); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes719;
    nodes719 = node.contents();
    oldNodes.replaceWith(nodes719);
  }));
  callback(root786); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root798 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes728 = $("<span>");
  root798.append(nodes728);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root799 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp722 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp721 = mobl.ref(result__);
    
    var nodes729 = $("<span>");
    root799.append(nodes729);
    subs__.addSub((ui.backButton)(tmp721, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp722, function(_, callback) {
      var root800 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root800); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes729;
      nodes729 = node.contents();
      oldNodes.replaceWith(nodes729);
    }));
    callback(root799); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes728;
    nodes728 = node.contents();
    oldNodes.replaceWith(nodes728);
  }));
  var nodes730 = $("<span>");
  root798.append(nodes730);
  subs__.addSub((ui.group)(function(_, callback) {
    var root801 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(5, function(result__) {
                       var tmp808 = result__;
                       var result__ = mobl.alert("Scalar product Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp723 = mobl.ref(result__);
    
    var nodes731 = $("<span>");
    root801.append(nodes731);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp723, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root802 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes732 = $("<span>");
      root802.append(nodes732);
      subs__.addSub((mobl.label)(mobl.ref("+Scalar products"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root803 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root803); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes732;
        nodes732 = node.contents();
        oldNodes.replaceWith(nodes732);
      }));
      callback(root802); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes731;
      nodes731 = node.contents();
      oldNodes.replaceWith(nodes731);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(18, function(result__) {
                       var tmp807 = result__;
                       var result__ = mobl.alert("Vector equation of lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp724 = mobl.ref(result__);
    
    var nodes733 = $("<span>");
    root801.append(nodes733);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp724, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root804 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes734 = $("<span>");
      root804.append(nodes734);
      subs__.addSub((mobl.label)(mobl.ref("+Vector equation of lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root805 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root805); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes734;
        nodes734 = node.contents();
        oldNodes.replaceWith(nodes734);
      }));
      callback(root804); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes733;
      nodes733 = node.contents();
      oldNodes.replaceWith(nodes733);
    }));
    callback(root801); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes730;
    nodes730 = node.contents();
    oldNodes.replaceWith(nodes730);
  }));
  callback(root798); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root806 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes735 = $("<span>");
  root806.append(nodes735);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root807 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp726 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp725 = mobl.ref(result__);
    
    var nodes736 = $("<span>");
    root807.append(nodes736);
    subs__.addSub((ui.backButton)(tmp725, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp726, function(_, callback) {
      var root808 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root808); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes736;
      nodes736 = node.contents();
      oldNodes.replaceWith(nodes736);
    }));
    callback(root807); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes735;
    nodes735 = node.contents();
    oldNodes.replaceWith(nodes735);
  }));
  var nodes737 = $("<span>");
  root806.append(nodes737);
  subs__.addSub((ui.group)(function(_, callback) {
    var root809 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(14, function(result__) {
                       var tmp813 = result__;
                       var result__ = mobl.alert("Stationary points Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp727 = mobl.ref(result__);
    
    var nodes738 = $("<span>");
    root809.append(nodes738);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp727, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root810 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes739 = $("<span>");
      root810.append(nodes739);
      subs__.addSub((mobl.label)(mobl.ref("+Stationary points"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root811 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root811); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes739;
        nodes739 = node.contents();
        oldNodes.replaceWith(nodes739);
      }));
      callback(root810); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes738;
      nodes738 = node.contents();
      oldNodes.replaceWith(nodes738);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(20, function(result__) {
                       var tmp812 = result__;
                       var result__ = mobl.alert("Chain rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp728 = mobl.ref(result__);
    
    var nodes740 = $("<span>");
    root809.append(nodes740);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp728, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root812 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes741 = $("<span>");
      root812.append(nodes741);
      subs__.addSub((mobl.label)(mobl.ref("+Chain rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root813 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root813); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes741;
        nodes741 = node.contents();
        oldNodes.replaceWith(nodes741);
      }));
      callback(root812); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes740;
      nodes740 = node.contents();
      oldNodes.replaceWith(nodes740);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(21, function(result__) {
                       var tmp811 = result__;
                       var result__ = mobl.alert("Product rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp729 = mobl.ref(result__);
    
    var nodes742 = $("<span>");
    root809.append(nodes742);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp729, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root814 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes743 = $("<span>");
      root814.append(nodes743);
      subs__.addSub((mobl.label)(mobl.ref("+Product rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root815 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root815); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes743;
        nodes743 = node.contents();
        oldNodes.replaceWith(nodes743);
      }));
      callback(root814); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes742;
      nodes742 = node.contents();
      oldNodes.replaceWith(nodes742);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(22, function(result__) {
                       var tmp810 = result__;
                       var result__ = mobl.alert("Quotient rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp730 = mobl.ref(result__);
    
    var nodes744 = $("<span>");
    root809.append(nodes744);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp730, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root816 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes745 = $("<span>");
      root816.append(nodes745);
      subs__.addSub((mobl.label)(mobl.ref("+Quotient rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root817 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root817); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes745;
        nodes745 = node.contents();
        oldNodes.replaceWith(nodes745);
      }));
      callback(root816); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes744;
      nodes744 = node.contents();
      oldNodes.replaceWith(nodes744);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(19, function(result__) {
                       var tmp809 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp731 = mobl.ref(result__);
    
    var nodes746 = $("<span>");
    root809.append(nodes746);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp731, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root818 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes747 = $("<span>");
      root818.append(nodes747);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root819 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root819); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes747;
        nodes747 = node.contents();
        oldNodes.replaceWith(nodes747);
      }));
      callback(root818); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes746;
      nodes746 = node.contents();
      oldNodes.replaceWith(nodes746);
    }));
    callback(root809); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes737;
    nodes737 = node.contents();
    oldNodes.replaceWith(nodes737);
  }));
  callback(root806); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root820 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes748 = $("<span>");
  root820.append(nodes748);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root821 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp733 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp732 = mobl.ref(result__);
    
    var nodes749 = $("<span>");
    root821.append(nodes749);
    subs__.addSub((ui.backButton)(tmp732, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp733, function(_, callback) {
      var root822 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root822); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes749;
      nodes749 = node.contents();
      oldNodes.replaceWith(nodes749);
    }));
    callback(root821); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes748;
    nodes748 = node.contents();
    oldNodes.replaceWith(nodes748);
  }));
  var nodes750 = $("<span>");
  root820.append(nodes750);
  subs__.addSub((ui.group)(function(_, callback) {
    var root823 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(28, function(result__) {
                       var tmp816 = result__;
                       var result__ = mobl.alert("Integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp734 = mobl.ref(result__);
    
    var nodes751 = $("<span>");
    root823.append(nodes751);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp734, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root824 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes752 = $("<span>");
      root824.append(nodes752);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root825 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root825); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes752;
        nodes752 = node.contents();
        oldNodes.replaceWith(nodes752);
      }));
      callback(root824); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes751;
      nodes751 = node.contents();
      oldNodes.replaceWith(nodes751);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(3, function(result__) {
                       var tmp815 = result__;
                       var result__ = mobl.alert("Polynomial integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp735 = mobl.ref(result__);
    
    var nodes753 = $("<span>");
    root823.append(nodes753);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp735, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root826 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes754 = $("<span>");
      root826.append(nodes754);
      subs__.addSub((mobl.label)(mobl.ref("+Polynomial integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root827 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root827); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes754;
        nodes754 = node.contents();
        oldNodes.replaceWith(nodes754);
      }));
      callback(root826); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes753;
      nodes753 = node.contents();
      oldNodes.replaceWith(nodes753);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(4, function(result__) {
                       var tmp814 = result__;
                       var result__ = mobl.alert("Trig integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp736 = mobl.ref(result__);
    
    var nodes755 = $("<span>");
    root823.append(nodes755);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp736, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root828 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes756 = $("<span>");
      root828.append(nodes756);
      subs__.addSub((mobl.label)(mobl.ref("+Trig integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root829 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root829); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes756;
        nodes756 = node.contents();
        oldNodes.replaceWith(nodes756);
      }));
      callback(root828); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes755;
      nodes755 = node.contents();
      oldNodes.replaceWith(nodes755);
    }));
    callback(root823); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes750;
    nodes750 = node.contents();
    oldNodes.replaceWith(nodes750);
  }));
  callback(root820); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root830 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes757 = $("<span>");
  root830.append(nodes757);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root831 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp738 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp737 = mobl.ref(result__);
    
    var nodes758 = $("<span>");
    root831.append(nodes758);
    subs__.addSub((ui.backButton)(tmp737, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp738, function(_, callback) {
      var root832 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root832); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes758;
      nodes758 = node.contents();
      oldNodes.replaceWith(nodes758);
    }));
    callback(root831); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes757;
    nodes757 = node.contents();
    oldNodes.replaceWith(nodes757);
  }));
  var nodes759 = $("<span>");
  root830.append(nodes759);
  subs__.addSub((ui.group)(function(_, callback) {
    var root833 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(29, function(result__) {
                       var tmp817 = result__;
                       var result__ = mobl.alert("Differential equations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp739 = mobl.ref(result__);
    
    var nodes760 = $("<span>");
    root833.append(nodes760);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp739, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root834 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes761 = $("<span>");
      root834.append(nodes761);
      subs__.addSub((mobl.label)(mobl.ref("+Diff equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root835 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root835); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes761;
        nodes761 = node.contents();
        oldNodes.replaceWith(nodes761);
      }));
      callback(root834); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes760;
      nodes760 = node.contents();
      oldNodes.replaceWith(nodes760);
    }));
    callback(root833); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes759;
    nodes759 = node.contents();
    oldNodes.replaceWith(nodes759);
  }));
  callback(root830); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root836 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes762 = $("<span>");
  root836.append(nodes762);
  subs__.addSub((ui.group)(function(_, callback) {
    var root837 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F1", function(result__) {
                       var tmp830 = result__;
                       var result__ = mobl.alert("Complex arithmetic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp740 = mobl.ref(result__);
    
    var nodes763 = $("<span>");
    root837.append(nodes763);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp740, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root838 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes764 = $("<span>");
      root838.append(nodes764);
      subs__.addSub((mobl.label)(mobl.ref("+Complex arithmetic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root839 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root839); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes764;
        nodes764 = node.contents();
        oldNodes.replaceWith(nodes764);
      }));
      callback(root838); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes763;
      nodes763 = node.contents();
      oldNodes.replaceWith(nodes763);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F2", function(result__) {
                       var tmp829 = result__;
                       var result__ = mobl.alert("Modulus argument Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp741 = mobl.ref(result__);
    
    var nodes765 = $("<span>");
    root837.append(nodes765);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp741, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root840 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes766 = $("<span>");
      root840.append(nodes766);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus argument"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root841 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root841); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes766;
        nodes766 = node.contents();
        oldNodes.replaceWith(nodes766);
      }));
      callback(root840); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes765;
      nodes765 = node.contents();
      oldNodes.replaceWith(nodes765);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F3a", function(result__) {
                       var tmp828 = result__;
                       var result__ = mobl.alert("2nd order DE Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp742 = mobl.ref(result__);
    
    var nodes767 = $("<span>");
    root837.append(nodes767);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp742, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root842 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes768 = $("<span>");
      root842.append(nodes768);
      subs__.addSub((mobl.label)(mobl.ref("+2nd order DEs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root843 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root843); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes768;
        nodes768 = node.contents();
        oldNodes.replaceWith(nodes768);
      }));
      callback(root842); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes767;
      nodes767 = node.contents();
      oldNodes.replaceWith(nodes767);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F4", function(result__) {
                       var tmp827 = result__;
                       var result__ = mobl.alert("Rank 2 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp743 = mobl.ref(result__);
    
    var nodes769 = $("<span>");
    root837.append(nodes769);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp743, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root844 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes770 = $("<span>");
      root844.append(nodes770);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 2 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root845 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root845); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes770;
        nodes770 = node.contents();
        oldNodes.replaceWith(nodes770);
      }));
      callback(root844); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes769;
      nodes769 = node.contents();
      oldNodes.replaceWith(nodes769);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F5", function(result__) {
                       var tmp826 = result__;
                       var result__ = mobl.alert("Taylor Series Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp744 = mobl.ref(result__);
    
    var nodes771 = $("<span>");
    root837.append(nodes771);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp744, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root846 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes772 = $("<span>");
      root846.append(nodes772);
      subs__.addSub((mobl.label)(mobl.ref("+Taylor Series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root847 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root847); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes772;
        nodes772 = node.contents();
        oldNodes.replaceWith(nodes772);
      }));
      callback(root846); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes771;
      nodes771 = node.contents();
      oldNodes.replaceWith(nodes771);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F6", function(result__) {
                       var tmp825 = result__;
                       var result__ = mobl.alert("Polar Coordinates Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp745 = mobl.ref(result__);
    
    var nodes773 = $("<span>");
    root837.append(nodes773);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp745, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root848 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes774 = $("<span>");
      root848.append(nodes774);
      subs__.addSub((mobl.label)(mobl.ref("+Polar Coordinates"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root849 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root849); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes774;
        nodes774 = node.contents();
        oldNodes.replaceWith(nodes774);
      }));
      callback(root848); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes773;
      nodes773 = node.contents();
      oldNodes.replaceWith(nodes773);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F7", function(result__) {
                       var tmp824 = result__;
                       var result__ = mobl.alert("Rank 3 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp746 = mobl.ref(result__);
    
    var nodes775 = $("<span>");
    root837.append(nodes775);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp746, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root850 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes776 = $("<span>");
      root850.append(nodes776);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 3 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root851 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root851); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes776;
        nodes776 = node.contents();
        oldNodes.replaceWith(nodes776);
      }));
      callback(root850); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes775;
      nodes775 = node.contents();
      oldNodes.replaceWith(nodes775);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F8", function(result__) {
                       var tmp823 = result__;
                       var result__ = mobl.alert("Further vectors added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp747 = mobl.ref(result__);
    
    var nodes777 = $("<span>");
    root837.append(nodes777);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp747, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root852 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes778 = $("<span>");
      root852.append(nodes778);
      subs__.addSub((mobl.label)(mobl.ref("+Further vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root853 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root853); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes778;
        nodes778 = node.contents();
        oldNodes.replaceWith(nodes778);
      }));
      callback(root852); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes777;
      nodes777 = node.contents();
      oldNodes.replaceWith(nodes777);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F9", function(result__) {
                       var tmp822 = result__;
                       var result__ = mobl.alert("Newton-Raphson added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp748 = mobl.ref(result__);
    
    var nodes779 = $("<span>");
    root837.append(nodes779);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp748, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root854 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes780 = $("<span>");
      root854.append(nodes780);
      subs__.addSub((mobl.label)(mobl.ref("+Newton-Raphson"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root855 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root855); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes780;
        nodes780 = node.contents();
        oldNodes.replaceWith(nodes780);
      }));
      callback(root854); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes779;
      nodes779 = node.contents();
      oldNodes.replaceWith(nodes779);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F10", function(result__) {
                       var tmp821 = result__;
                       var result__ = mobl.alert("Further inequalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp749 = mobl.ref(result__);
    
    var nodes781 = $("<span>");
    root837.append(nodes781);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp749, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root856 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes782 = $("<span>");
      root856.append(nodes782);
      subs__.addSub((mobl.label)(mobl.ref("+Further inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root857 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root857); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes782;
        nodes782 = node.contents();
        oldNodes.replaceWith(nodes782);
      }));
      callback(root856); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes781;
      nodes781 = node.contents();
      oldNodes.replaceWith(nodes781);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F11", function(result__) {
                       var tmp820 = result__;
                       var result__ = mobl.alert("Integration by substitution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp750 = mobl.ref(result__);
    
    var nodes783 = $("<span>");
    root837.append(nodes783);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp750, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root858 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes784 = $("<span>");
      root858.append(nodes784);
      subs__.addSub((mobl.label)(mobl.ref("+Integration by substitution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root859 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root859); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes784;
        nodes784 = node.contents();
        oldNodes.replaceWith(nodes784);
      }));
      callback(root858); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes783;
      nodes783 = node.contents();
      oldNodes.replaceWith(nodes783);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F12", function(result__) {
                       var tmp819 = result__;
                       var result__ = mobl.alert("Figures of revolution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp751 = mobl.ref(result__);
    
    var nodes785 = $("<span>");
    root837.append(nodes785);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp751, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root860 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes786 = $("<span>");
      root860.append(nodes786);
      subs__.addSub((mobl.label)(mobl.ref("+Figures of revolution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root861 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root861); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes786;
        nodes786 = node.contents();
        oldNodes.replaceWith(nodes786);
      }));
      callback(root860); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes785;
      nodes785 = node.contents();
      oldNodes.replaceWith(nodes785);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F13", function(result__) {
                       var tmp818 = result__;
                       var result__ = mobl.alert("Matrix transformations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp752 = mobl.ref(result__);
    
    var nodes787 = $("<span>");
    root837.append(nodes787);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp752, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root862 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes788 = $("<span>");
      root862.append(nodes788);
      subs__.addSub((mobl.label)(mobl.ref("+Matrix transformations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root863 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root863); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes788;
        nodes788 = node.contents();
        oldNodes.replaceWith(nodes788);
      }));
      callback(root862); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes787;
      nodes787 = node.contents();
      oldNodes.replaceWith(nodes787);
    }));
    callback(root837); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes762;
    nodes762 = node.contents();
    oldNodes.replaceWith(nodes762);
  }));
  callback(root836); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root864 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes789 = $("<span>");
  root864.append(nodes789);
  subs__.addSub((ui.group)(function(_, callback) {
    var root865 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S1", function(result__) {
                       var tmp836 = result__;
                       var result__ = mobl.alert("Discrete Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp753 = mobl.ref(result__);
    
    var nodes790 = $("<span>");
    root865.append(nodes790);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp753, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root866 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes791 = $("<span>");
      root866.append(nodes791);
      subs__.addSub((mobl.label)(mobl.ref("+Discrete Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root867 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root867); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes791;
        nodes791 = node.contents();
        oldNodes.replaceWith(nodes791);
      }));
      callback(root866); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes790;
      nodes790 = node.contents();
      oldNodes.replaceWith(nodes790);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S2", function(result__) {
                       var tmp835 = result__;
                       var result__ = mobl.alert("Continuous Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp754 = mobl.ref(result__);
    
    var nodes792 = $("<span>");
    root865.append(nodes792);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp754, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root868 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes793 = $("<span>");
      root868.append(nodes793);
      subs__.addSub((mobl.label)(mobl.ref("+Continuous Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root869 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root869); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes793;
        nodes793 = node.contents();
        oldNodes.replaceWith(nodes793);
      }));
      callback(root868); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes792;
      nodes792 = node.contents();
      oldNodes.replaceWith(nodes792);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S3", function(result__) {
                       var tmp834 = result__;
                       var result__ = mobl.alert("Hypothesis Testing Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp755 = mobl.ref(result__);
    
    var nodes794 = $("<span>");
    root865.append(nodes794);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp755, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root870 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes795 = $("<span>");
      root870.append(nodes795);
      subs__.addSub((mobl.label)(mobl.ref("+Hypothesis Testing"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root871 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root871); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes795;
        nodes795 = node.contents();
        oldNodes.replaceWith(nodes795);
      }));
      callback(root870); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes794;
      nodes794 = node.contents();
      oldNodes.replaceWith(nodes794);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S4", function(result__) {
                       var tmp833 = result__;
                       var result__ = mobl.alert("Confidence Intervals Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp756 = mobl.ref(result__);
    
    var nodes796 = $("<span>");
    root865.append(nodes796);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp756, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root872 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes797 = $("<span>");
      root872.append(nodes797);
      subs__.addSub((mobl.label)(mobl.ref("+Confidence Intervals"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root873 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root873); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes797;
        nodes797 = node.contents();
        oldNodes.replaceWith(nodes797);
      }));
      callback(root872); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes796;
      nodes796 = node.contents();
      oldNodes.replaceWith(nodes796);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S5", function(result__) {
                       var tmp832 = result__;
                       var result__ = mobl.alert("Chi Squared Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp757 = mobl.ref(result__);
    
    var nodes798 = $("<span>");
    root865.append(nodes798);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp757, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root874 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes799 = $("<span>");
      root874.append(nodes799);
      subs__.addSub((mobl.label)(mobl.ref("+Chi Squared"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root875 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root875); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes799;
        nodes799 = node.contents();
        oldNodes.replaceWith(nodes799);
      }));
      callback(root874); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes798;
      nodes798 = node.contents();
      oldNodes.replaceWith(nodes798);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S6", function(result__) {
                       var tmp831 = result__;
                       var result__ = mobl.alert("Product Moment Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp758 = mobl.ref(result__);
    
    var nodes800 = $("<span>");
    root865.append(nodes800);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp758, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root876 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes801 = $("<span>");
      root876.append(nodes801);
      subs__.addSub((mobl.label)(mobl.ref("+Product Moments"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root877 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root877); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes801;
        nodes801 = node.contents();
        oldNodes.replaceWith(nodes801);
      }));
      callback(root876); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes800;
      nodes800 = node.contents();
      oldNodes.replaceWith(nodes800);
    }));
    callback(root865); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes789;
    nodes789 = node.contents();
    oldNodes.replaceWith(nodes789);
  }));
  callback(root864); return subs__;
  
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
  var root878 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node43 = $("<div>");
  
  var ref43 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref43.get() !== null) {
    node43.attr('class', ref43.get());
    subs__.addSub(ref43.addEventListener('change', function(_, ref, val) {
      node43.attr('class', val);
    }));
    
  }
  subs__.addSub(ref43.rebind());
  
  var val4 = onclick.get();
  if(val4 !== null) {
    subs__.addSub(mobl.domBind(node43, 'tap', val4));
  }
  
  
  var node44 = $("<div>");
  
  var ref42 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref42.get() !== null) {
    node44.attr('class', ref42.get());
    subs__.addSub(ref42.addEventListener('change', function(_, ref, val) {
      node44.attr('class', val);
    }));
    
  }
  subs__.addSub(ref42.rebind());
  
  
  var node45 = $("<div>");
  
  var ref40 = text;
  node45.text(""+ref40.get());
  var ignore4 = false;
  subs__.addSub(ref40.addEventListener('change', function(_, ref, val) {
    if(ignore4) return;
    node45.text(""+val);
  }));
  subs__.addSub(ref40.rebind());
  
  
  var ref41 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref41.get() !== null) {
    node45.attr('class', ref41.get());
    subs__.addSub(ref41.addEventListener('change', function(_, ref, val) {
      node45.attr('class', val);
    }));
    
  }
  subs__.addSub(ref41.rebind());
  
  node44.append(node45);
  node43.append(node44);
  var nodes802 = $("<span>");
  node43.append(nodes802);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl4();
  }));
  
  function renderControl4() {
    subs__.addSub((elements)(function(elements, callback) {
      var root879 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root879); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes802;
      nodes802 = node.contents();
      oldNodes.replaceWith(nodes802);
    }));
  }
  renderControl4();
  root878.append(node43);
  callback(root878); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mathJAX.renderMaths(function(result__) {
    var tmp837 = result__;
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
  var root880 = $("<span>");
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
  var tmp763 = mobl.ref(result__);
  
  var result__ = qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle;
  var tmp762 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    tmp762.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.agreeStyle).addEventListener('change', function() {
    tmp762.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.disagreeStyle).addEventListener('change', function() {
    tmp762.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  
  var nodes803 = $("<span>");
  root880.append(nodes803);
  subs__.addSub((mobl.block)(tmp762, mobl.ref(null), tmp763, mobl.ref(null), function(_, callback) {
    var root881 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = "A" + number.get() + ". ";
    var tmp759 = mobl.ref(result__);
    subs__.addSub(number.addEventListener('change', function() {
      tmp759.set("A" + number.get() + ". ");
    }));
    
    var nodes804 = $("<span>");
    root881.append(nodes804);
    subs__.addSub((mobl.label)(tmp759, mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root882 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root882); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes804;
      nodes804 = node.contents();
      oldNodes.replaceWith(nodes804);
    }));
    var result__ = qa.get().answer != "%GRAPH%";
    var tmp761 = mobl.ref(result__);
    subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
      tmp761.set(qa.get().answer != "%GRAPH%");
    }));
    
    
    var node46 = $("<span>");
    root881.append(node46);
    var condSubs8 = new mobl.CompSubscription();
    subs__.addSub(condSubs8);
    var oldValue8;
    var renderCond8 = function() {
      var value24 = tmp761.get();
      if(oldValue8 === value24) return;
      oldValue8 = value24;
      var subs__ = condSubs8;
      subs__.unsubscribe();
      node46.empty();
      if(value24) {
        
        var node47 = $("<span>");
        
        var ref44 = mobl.ref("answer-block-" + number.get());
        if(ref44.get() !== null) {
          node47.attr('id', ref44.get());
          subs__.addSub(ref44.addEventListener('change', function(_, ref, val) {
            node47.attr('id', val);
          }));
          subs__.addSub(number.addEventListener('change', function() {
            node47.attr('id', "answer-block-" + number.get());
          }));
          
        }
        subs__.addSub(ref44.rebind());
        
        var result__ = plot.blank(qa.get().answerHtml) ? qa.get().answer : qa.get().answerHtml;
        var tmp760 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp760.set(plot.blank(qa.get().answerHtml) ? qa.get().answer : qa.get().answerHtml);
        }));
        subs__.addSub(mobl.ref(qa, 'answerHtml').addEventListener('change', function() {
          tmp760.set(plot.blank(qa.get().answerHtml) ? qa.get().answer : qa.get().answerHtml);
        }));
        
        var nodes805 = $("<span>");
        node47.append(nodes805);
        subs__.addSub((mobl.html)(tmp760, function(_, callback) {
          var root883 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root883); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes805;
          nodes805 = node.contents();
          oldNodes.replaceWith(nodes805);
        }));
        node46.append(node47);
        
        
        
      } else {
        var nodes806 = $("<span>");
        node46.append(nodes806);
        subs__.addSub((plot.plot)(qa, mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
          var root884 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root884); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes806;
          nodes806 = node.contents();
          oldNodes.replaceWith(nodes806);
        }));
        
        
      }
    };
    renderCond8();
    subs__.addSub(tmp761.addEventListener('change', function() {
      renderCond8();
    }));
    
    callback(root881); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes803;
    nodes803 = node.contents();
    oldNodes.replaceWith(nodes803);
  }));
  var nodes807 = $("<span>");
  root880.append(nodes807);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root885 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes808 = $("<span>");
    root885.append(nodes808);
    subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root886 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root886); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes808;
      nodes808 = node.contents();
      oldNodes.replaceWith(nodes808);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = true;
                     qa.get().correct = result__;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp764 = mobl.ref(result__);
    
    var nodes809 = $("<span>");
    root885.append(nodes809);
    subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp764, function(_, callback) {
      var root887 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root887); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes809;
      nodes809 = node.contents();
      oldNodes.replaceWith(nodes809);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = false;
                     qa.get().correct = result__;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp765 = mobl.ref(result__);
    
    var nodes810 = $("<span>");
    root885.append(nodes810);
    subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp765, function(_, callback) {
      var root888 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root888); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes810;
      nodes810 = node.contents();
      oldNodes.replaceWith(nodes810);
    }));
    callback(root885); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes807;
    nodes807 = node.contents();
    oldNodes.replaceWith(nodes807);
  }));
  callback(root880); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp838 = result__;
    var result__ = tmp838;
    var qa2 = result__;
    var result__ = qa2 == null;
    if(result__) {
      nrichRPG.questionAnswer.QA.all().one(function(result__) {
        var tmp839 = result__;
        var result__ = tmp839;
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
  var root889 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp849 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp767 = mobl.ref(result__);
  
  var nodes811 = $("<span>");
  root889.append(nodes811);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(mobl.ref(qa, 'topic'), tmp767, function(_, callback) {
    var root890 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp842 = result__;
                       var result__ = tmp842;
                       var qa2 = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp843 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp766 = mobl.ref(result__);
    
    var nodes812 = $("<span>");
    root890.append(nodes812);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp766, function(_, callback) {
      var root891 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root891); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes812;
      nodes812 = node.contents();
      oldNodes.replaceWith(nodes812);
    }));
    mobl.sleep(100, function(result__) {
      var tmp840 = result__;
      mathJAX.renderMaths(function(result__) {
        var tmp841 = result__;
        callback(root890); return subs__;
      });
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes811;
    nodes811 = node.contents();
    oldNodes.replaceWith(nodes811);
  }));
  var nodes813 = $("<span>");
  root889.append(nodes813);
  subs__.addSub((ui.group)(function(_, callback) {
    var root892 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp846 = result__;
                       var result__ = nrichRPG.coreWorkout.removeMathJaxIncidentElements();
                       var result__ = mobl.$("#question-block-" + number.get()).children("span:first").html();
                       qa.get().questionHtml = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp770 = mobl.ref(result__);
    
    var nodes814 = $("<span>");
    root892.append(nodes814);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp770, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root893 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + number.get() + ". ";
      var tmp768 = mobl.ref(result__);
      subs__.addSub(number.addEventListener('change', function() {
        tmp768.set("Q" + number.get() + ". ");
      }));
      
      var nodes815 = $("<span>");
      root893.append(nodes815);
      subs__.addSub((mobl.html)(tmp768, function(_, callback) {
        var root894 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root894); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes815;
        nodes815 = node.contents();
        oldNodes.replaceWith(nodes815);
      }));
      
      var node48 = $("<span>");
      
      var ref45 = mobl.ref("question-block-" + number.get());
      if(ref45.get() !== null) {
        node48.attr('id', ref45.get());
        subs__.addSub(ref45.addEventListener('change', function(_, ref, val) {
          node48.attr('id', val);
        }));
        subs__.addSub(number.addEventListener('change', function() {
          node48.attr('id', "question-block-" + number.get());
        }));
        
      }
      subs__.addSub(ref45.rebind());
      
      var result__ = plot.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml;
      var tmp769 = mobl.ref(result__);
      subs__.addSub(mobl.ref(qa, 'question').addEventListener('change', function() {
        tmp769.set(plot.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml);
      }));
      subs__.addSub(mobl.ref(qa, 'questionHtml').addEventListener('change', function() {
        tmp769.set(plot.blank(qa.get().questionHtml) ? qa.get().question : qa.get().questionHtml);
      }));
      
      var nodes816 = $("<span>");
      node48.append(nodes816);
      subs__.addSub((mobl.html)(tmp769, function(_, callback) {
        var root895 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root895); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes816;
        nodes816 = node.contents();
        oldNodes.replaceWith(nodes816);
      }));
      root893.append(node48);
      callback(root893); return subs__;
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes814;
      nodes814 = node.contents();
      oldNodes.replaceWith(nodes814);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp845 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp772 = mobl.ref(result__);
    
    var nodes817 = $("<span>");
    root892.append(nodes817);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp772, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root896 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes818 = $("<span>");
      root896.append(nodes818);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root897 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                           var tmp844 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp771 = mobl.ref(result__);
        
        var nodes819 = $("<span>");
        root897.append(nodes819);
        subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp771, function(_, callback) {
          var root898 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root898); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes819;
          nodes819 = node.contents();
          oldNodes.replaceWith(nodes819);
        }));
        callback(root897); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes818;
        nodes818 = node.contents();
        oldNodes.replaceWith(nodes818);
      }));
      
      var node49 = $("<span>");
      root896.append(node49);
      var condSubs9 = new mobl.CompSubscription();
      subs__.addSub(condSubs9);
      var oldValue9;
      var renderCond9 = function() {
        var value25 = qa.get().done;
        if(oldValue9 === value25) return;
        oldValue9 = value25;
        var subs__ = condSubs9;
        subs__.unsubscribe();
        node49.empty();
        if(value25) {
          var nodes820 = $("<span>");
          node49.append(nodes820);
          subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, number, function(_, callback) {
            var root899 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root899); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes820;
            nodes820 = node.contents();
            oldNodes.replaceWith(nodes820);
          }));
          
          
        } else {
          
        }
      };
      renderCond9();
      subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
        renderCond9();
      }));
      
      callback(root896); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes817;
      nodes817 = node.contents();
      oldNodes.replaceWith(nodes817);
    }));
    callback(root892); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes813;
    nodes813 = node.contents();
    oldNodes.replaceWith(nodes813);
  }));
  mobl.sleep(100, function(result__) {
    var tmp847 = result__;
    mathJAX.renderMaths(function(result__) {
      var tmp848 = result__;
      callback(root889); return subs__;
    });
  });
  
  
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
  qas.list(function(coll51) {
    coll51 = coll51.reverse();
    function processOne27() {
      var item;
      item = coll51.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll51.length > 0) processOne27(); else rest27();
      
    }
    function rest27() {
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
    if(coll51.length > 0) processOne27(); else rest27();
  });
  
};

nrichRPG.coreWorkout.makeQAStar = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll52) {
    coll52 = coll52.reverse();
    function processOne28() {
      var item;
      item = coll52.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll52.length > 0) processOne28(); else rest28();
      
    }
    function rest28() {
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
    if(coll52.length > 0) processOne28(); else rest28();
  });
  
};

nrichRPG.coreWorkout.makeQAStats = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll53) {
    coll53 = coll53.reverse();
    function processOne29() {
      var item;
      item = coll53.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll53.length > 0) processOne29(); else rest29();
      
    }
    function rest29() {
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
    if(coll53.length > 0) processOne29(); else rest29();
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