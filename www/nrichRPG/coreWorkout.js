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
    var tmp1694 = result__;
    var result__ = tmp1694;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp1695 = result__;
      var result__ = tmp1695;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp1696 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicId, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll1576) {
    coll1576 = coll1576.reverse();
    function processOne76() {
      var i;
      i = coll1576.pop();
      nrichRPG.coreWorkout.makeQA(topicId, function(result__) {
        var tmp1697 = result__;
        
        if(coll1576.length > 0) processOne76(); else rest76();
        
      });
    }
    function rest76() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll1576.length > 0) processOne76(); else rest76();
  });
  
};

nrichRPG.coreWorkout.randomQStar = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll1577) {
    coll1577 = coll1577.reverse();
    function processOne77() {
      var i;
      i = coll1577.pop();
      var result__ = mobl.Math.floor(13 * mobl.Math.random());
      var r = result__;
      var result__ = "F" + (1 + r);
      var tid = result__;
      var result__ = tid == "F3";
      if(result__) {
        var result__ = "F3a";
        tid = result__;
        nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
          var tmp1698 = result__;
          
          if(coll1577.length > 0) processOne77(); else rest77();
          
        });
      } else {
        {
          nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
            var tmp1698 = result__;
            
            if(coll1577.length > 0) processOne77(); else rest77();
            
          });
        }
      }
    }
    function rest77() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll1577.length > 0) processOne77(); else rest77();
  });
  
};

nrichRPG.coreWorkout.randomQStats = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll1578) {
    coll1578 = coll1578.reverse();
    function processOne78() {
      var i;
      i = coll1578.pop();
      var result__ = mobl.Math.floor(6 * mobl.Math.random());
      var r = result__;
      var result__ = "S" + (1 + r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
        var tmp1699 = result__;
        
        if(coll1578.length > 0) processOne78(); else rest78();
        
      });
    }
    function rest78() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll1578.length > 0) processOne78(); else rest78();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root2137 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1667 = $("<span>");
  root2137.append(nodes1667);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2138 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1707 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1600 = mobl.ref(result__);
    
    var nodes1668 = $("<span>");
    root2138.append(nodes1668);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1600, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2139 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1669 = $("<span>");
      root2139.append(nodes1669);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2140 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2140); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1669;
        nodes1669 = node.contents();
        oldNodes.replaceWith(nodes1669);
      }));
      callback(root2139); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1668;
      nodes1668 = node.contents();
      oldNodes.replaceWith(nodes1668);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1706 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1601 = mobl.ref(result__);
    
    var nodes1670 = $("<span>");
    root2138.append(nodes1670);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1601, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2141 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1671 = $("<span>");
      root2141.append(nodes1671);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2142 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2142); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1671;
        nodes1671 = node.contents();
        oldNodes.replaceWith(nodes1671);
      }));
      callback(root2141); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1670;
      nodes1670 = node.contents();
      oldNodes.replaceWith(nodes1670);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1705 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1602 = mobl.ref(result__);
    
    var nodes1672 = $("<span>");
    root2138.append(nodes1672);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1602, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2143 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1673 = $("<span>");
      root2143.append(nodes1673);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2144 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2144); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1673;
        nodes1673 = node.contents();
        oldNodes.replaceWith(nodes1673);
      }));
      callback(root2143); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1672;
      nodes1672 = node.contents();
      oldNodes.replaceWith(nodes1672);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1704 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1603 = mobl.ref(result__);
    
    var nodes1674 = $("<span>");
    root2138.append(nodes1674);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1603, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2145 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1675 = $("<span>");
      root2145.append(nodes1675);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2146 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2146); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1675;
        nodes1675 = node.contents();
        oldNodes.replaceWith(nodes1675);
      }));
      callback(root2145); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1674;
      nodes1674 = node.contents();
      oldNodes.replaceWith(nodes1674);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1703 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1604 = mobl.ref(result__);
    
    var nodes1676 = $("<span>");
    root2138.append(nodes1676);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1604, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2147 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1677 = $("<span>");
      root2147.append(nodes1677);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2148 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2148); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1677;
        nodes1677 = node.contents();
        oldNodes.replaceWith(nodes1677);
      }));
      callback(root2147); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1676;
      nodes1676 = node.contents();
      oldNodes.replaceWith(nodes1676);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1702 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1605 = mobl.ref(result__);
    
    var nodes1678 = $("<span>");
    root2138.append(nodes1678);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1605, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2149 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1679 = $("<span>");
      root2149.append(nodes1679);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2150 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2150); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1679;
        nodes1679 = node.contents();
        oldNodes.replaceWith(nodes1679);
      }));
      callback(root2149); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1678;
      nodes1678 = node.contents();
      oldNodes.replaceWith(nodes1678);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1701 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1606 = mobl.ref(result__);
    
    var nodes1680 = $("<span>");
    root2138.append(nodes1680);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1606, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2151 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1681 = $("<span>");
      root2151.append(nodes1681);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2152 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2152); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1681;
        nodes1681 = node.contents();
        oldNodes.replaceWith(nodes1681);
      }));
      callback(root2151); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1680;
      nodes1680 = node.contents();
      oldNodes.replaceWith(nodes1680);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1700 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1607 = mobl.ref(result__);
    
    var nodes1682 = $("<span>");
    root2138.append(nodes1682);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1607, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2153 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1683 = $("<span>");
      root2153.append(nodes1683);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2154 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2154); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1683;
        nodes1683 = node.contents();
        oldNodes.replaceWith(nodes1683);
      }));
      callback(root2153); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1682;
      nodes1682 = node.contents();
      oldNodes.replaceWith(nodes1682);
    }));
    callback(root2138); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1667;
    nodes1667 = node.contents();
    oldNodes.replaceWith(nodes1667);
  }));
  callback(root2137); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root2155 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes1684 = $("<span>");
  root2155.append(nodes1684);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2156 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1609 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1608 = mobl.ref(result__);
    
    var nodes1685 = $("<span>");
    root2156.append(nodes1685);
    subs__.addSub((ui.backButton)(tmp1608, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1609, function(_, callback) {
      var root2157 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2157); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1685;
      nodes1685 = node.contents();
      oldNodes.replaceWith(nodes1685);
    }));
    callback(root2156); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1684;
    nodes1684 = node.contents();
    oldNodes.replaceWith(nodes1684);
  }));
  var nodes1686 = $("<span>");
  root2155.append(nodes1686);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2158 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(10, function(result__) {
                       var tmp1715 = result__;
                       var result__ = mobl.alert("Quadratic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1610 = mobl.ref(result__);
    
    var nodes1687 = $("<span>");
    root2158.append(nodes1687);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1610, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2159 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1688 = $("<span>");
      root2159.append(nodes1688);
      subs__.addSub((mobl.label)(mobl.ref("+Quadratic equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2160 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2160); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1688;
        nodes1688 = node.contents();
        oldNodes.replaceWith(nodes1688);
      }));
      callback(root2159); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1687;
      nodes1687 = node.contents();
      oldNodes.replaceWith(nodes1687);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(11, function(result__) {
                       var tmp1714 = result__;
                       var result__ = mobl.alert("Completing the Square Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1611 = mobl.ref(result__);
    
    var nodes1689 = $("<span>");
    root2158.append(nodes1689);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1611, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2161 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1690 = $("<span>");
      root2161.append(nodes1690);
      subs__.addSub((mobl.label)(mobl.ref("+Completing the square"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2162 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2162); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1690;
        nodes1690 = node.contents();
        oldNodes.replaceWith(nodes1690);
      }));
      callback(root2161); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1689;
      nodes1689 = node.contents();
      oldNodes.replaceWith(nodes1689);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(7, function(result__) {
                       var tmp1713 = result__;
                       var result__ = mobl.alert("Ineqalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1612 = mobl.ref(result__);
    
    var nodes1691 = $("<span>");
    root2158.append(nodes1691);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1612, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2163 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1692 = $("<span>");
      root2163.append(nodes1692);
      subs__.addSub((mobl.label)(mobl.ref("+Inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2164 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2164); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1692;
        nodes1692 = node.contents();
        oldNodes.replaceWith(nodes1692);
      }));
      callback(root2163); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1691;
      nodes1691 = node.contents();
      oldNodes.replaceWith(nodes1691);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(9, function(result__) {
                       var tmp1712 = result__;
                       var result__ = mobl.alert("Factor theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1613 = mobl.ref(result__);
    
    var nodes1693 = $("<span>");
    root2158.append(nodes1693);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1613, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2165 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1694 = $("<span>");
      root2165.append(nodes1694);
      subs__.addSub((mobl.label)(mobl.ref("+Factor theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2166 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2166); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1694;
        nodes1694 = node.contents();
        oldNodes.replaceWith(nodes1694);
      }));
      callback(root2165); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1693;
      nodes1693 = node.contents();
      oldNodes.replaceWith(nodes1693);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(1, function(result__) {
                       var tmp1711 = result__;
                       var result__ = mobl.alert("Partial fraction Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1614 = mobl.ref(result__);
    
    var nodes1695 = $("<span>");
    root2158.append(nodes1695);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1614, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2167 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1696 = $("<span>");
      root2167.append(nodes1696);
      subs__.addSub((mobl.label)(mobl.ref("+Partial fractions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2168 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2168); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1696;
        nodes1696 = node.contents();
        oldNodes.replaceWith(nodes1696);
      }));
      callback(root2167); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1695;
      nodes1695 = node.contents();
      oldNodes.replaceWith(nodes1695);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(30, function(result__) {
                       var tmp1710 = result__;
                       var result__ = mobl.alert("Powers Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1615 = mobl.ref(result__);
    
    var nodes1697 = $("<span>");
    root2158.append(nodes1697);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1615, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2169 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1698 = $("<span>");
      root2169.append(nodes1698);
      subs__.addSub((mobl.label)(mobl.ref("+Powers"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2170 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2170); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1698;
        nodes1698 = node.contents();
        oldNodes.replaceWith(nodes1698);
      }));
      callback(root2169); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1697;
      nodes1697 = node.contents();
      oldNodes.replaceWith(nodes1697);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(13, function(result__) {
                       var tmp1709 = result__;
                       var result__ = mobl.alert("Logarithm Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1616 = mobl.ref(result__);
    
    var nodes1699 = $("<span>");
    root2158.append(nodes1699);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1616, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2171 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1700 = $("<span>");
      root2171.append(nodes1700);
      subs__.addSub((mobl.label)(mobl.ref("+Logarithms"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2172 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2172); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1700;
        nodes1700 = node.contents();
        oldNodes.replaceWith(nodes1700);
      }));
      callback(root2171); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1699;
      nodes1699 = node.contents();
      oldNodes.replaceWith(nodes1699);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(17, function(result__) {
                       var tmp1708 = result__;
                       var result__ = mobl.alert("Trig equation Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1617 = mobl.ref(result__);
    
    var nodes1701 = $("<span>");
    root2158.append(nodes1701);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1617, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2173 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1702 = $("<span>");
      root2173.append(nodes1702);
      subs__.addSub((mobl.label)(mobl.ref("+Trig equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2174 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2174); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1702;
        nodes1702 = node.contents();
        oldNodes.replaceWith(nodes1702);
      }));
      callback(root2173); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1701;
      nodes1701 = node.contents();
      oldNodes.replaceWith(nodes1701);
    }));
    callback(root2158); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1686;
    nodes1686 = node.contents();
    oldNodes.replaceWith(nodes1686);
  }));
  callback(root2155); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root2175 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1703 = $("<span>");
  root2175.append(nodes1703);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2176 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1619 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1618 = mobl.ref(result__);
    
    var nodes1704 = $("<span>");
    root2176.append(nodes1704);
    subs__.addSub((ui.backButton)(tmp1618, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1619, function(_, callback) {
      var root2177 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2177); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1704;
      nodes1704 = node.contents();
      oldNodes.replaceWith(nodes1704);
    }));
    callback(root2176); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1703;
    nodes1703 = node.contents();
    oldNodes.replaceWith(nodes1703);
  }));
  var nodes1705 = $("<span>");
  root2175.append(nodes1705);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2178 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(24, function(result__) {
                       var tmp1720 = result__;
                       var result__ = mobl.alert("Modulus Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1620 = mobl.ref(result__);
    
    var nodes1706 = $("<span>");
    root2178.append(nodes1706);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1620, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2179 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1707 = $("<span>");
      root2179.append(nodes1707);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus function"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2180 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2180); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1707;
        nodes1707 = node.contents();
        oldNodes.replaceWith(nodes1707);
      }));
      callback(root2179); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1706;
      nodes1706 = node.contents();
      oldNodes.replaceWith(nodes1706);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(25, function(result__) {
                       var tmp1719 = result__;
                       var result__ = mobl.alert("Transformations of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1621 = mobl.ref(result__);
    
    var nodes1708 = $("<span>");
    root2178.append(nodes1708);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1621, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2181 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1709 = $("<span>");
      root2181.append(nodes1709);
      subs__.addSub((mobl.label)(mobl.ref("+Transformations of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2182 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2182); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1709;
        nodes1709 = node.contents();
        oldNodes.replaceWith(nodes1709);
      }));
      callback(root2181); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1708;
      nodes1708 = node.contents();
      oldNodes.replaceWith(nodes1708);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(26, function(result__) {
                       var tmp1718 = result__;
                       var result__ = mobl.alert("Composition of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1622 = mobl.ref(result__);
    
    var nodes1710 = $("<span>");
    root2178.append(nodes1710);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1622, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2183 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1711 = $("<span>");
      root2183.append(nodes1711);
      subs__.addSub((mobl.label)(mobl.ref("+Composition of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2184 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2184); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1711;
        nodes1711 = node.contents();
        oldNodes.replaceWith(nodes1711);
      }));
      callback(root2183); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1710;
      nodes1710 = node.contents();
      oldNodes.replaceWith(nodes1710);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(270, function(result__) {
                       var tmp1717 = result__;
                       var result__ = mobl.alert("Implicit functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1623 = mobl.ref(result__);
    
    var nodes1712 = $("<span>");
    root2178.append(nodes1712);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1623, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2185 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1713 = $("<span>");
      root2185.append(nodes1713);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2186 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2186); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1713;
        nodes1713 = node.contents();
        oldNodes.replaceWith(nodes1713);
      }));
      callback(root2185); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1712;
      nodes1712 = node.contents();
      oldNodes.replaceWith(nodes1712);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(27, function(result__) {
                       var tmp1716 = result__;
                       var result__ = mobl.alert("Parametric functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1624 = mobl.ref(result__);
    
    var nodes1714 = $("<span>");
    root2178.append(nodes1714);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1624, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2187 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1715 = $("<span>");
      root2187.append(nodes1715);
      subs__.addSub((mobl.label)(mobl.ref("+Parametric functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2188 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2188); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1715;
        nodes1715 = node.contents();
        oldNodes.replaceWith(nodes1715);
      }));
      callback(root2187); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1714;
      nodes1714 = node.contents();
      oldNodes.replaceWith(nodes1714);
    }));
    callback(root2178); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1705;
    nodes1705 = node.contents();
    oldNodes.replaceWith(nodes1705);
  }));
  callback(root2175); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root2189 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1716 = $("<span>");
  root2189.append(nodes1716);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2190 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1626 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1625 = mobl.ref(result__);
    
    var nodes1717 = $("<span>");
    root2190.append(nodes1717);
    subs__.addSub((ui.backButton)(tmp1625, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1626, function(_, callback) {
      var root2191 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2191); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1717;
      nodes1717 = node.contents();
      oldNodes.replaceWith(nodes1717);
    }));
    callback(root2190); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1716;
    nodes1716 = node.contents();
    oldNodes.replaceWith(nodes1716);
  }));
  var nodes1718 = $("<span>");
  root2189.append(nodes1718);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2192 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(15, function(result__) {
                       var tmp1723 = result__;
                       var result__ = mobl.alert("Triangles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1627 = mobl.ref(result__);
    
    var nodes1719 = $("<span>");
    root2192.append(nodes1719);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1627, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2193 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1720 = $("<span>");
      root2193.append(nodes1720);
      subs__.addSub((mobl.label)(mobl.ref("+Triangles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2194 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2194); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1720;
        nodes1720 = node.contents();
        oldNodes.replaceWith(nodes1720);
      }));
      callback(root2193); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1719;
      nodes1719 = node.contents();
      oldNodes.replaceWith(nodes1719);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(16, function(result__) {
                       var tmp1722 = result__;
                       var result__ = mobl.alert("Circles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1628 = mobl.ref(result__);
    
    var nodes1721 = $("<span>");
    root2192.append(nodes1721);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1628, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2195 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1722 = $("<span>");
      root2195.append(nodes1722);
      subs__.addSub((mobl.label)(mobl.ref("+Circles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2196 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2196); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1722;
        nodes1722 = node.contents();
        oldNodes.replaceWith(nodes1722);
      }));
      callback(root2195); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1721;
      nodes1721 = node.contents();
      oldNodes.replaceWith(nodes1721);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(6, function(result__) {
                       var tmp1721 = result__;
                       var result__ = mobl.alert("3D lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1629 = mobl.ref(result__);
    
    var nodes1723 = $("<span>");
    root2192.append(nodes1723);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1629, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2197 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1724 = $("<span>");
      root2197.append(nodes1724);
      subs__.addSub((mobl.label)(mobl.ref("+ 3D lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2198 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2198); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1724;
        nodes1724 = node.contents();
        oldNodes.replaceWith(nodes1724);
      }));
      callback(root2197); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1723;
      nodes1723 = node.contents();
      oldNodes.replaceWith(nodes1723);
    }));
    callback(root2192); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1718;
    nodes1718 = node.contents();
    oldNodes.replaceWith(nodes1718);
  }));
  callback(root2189); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root2199 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1725 = $("<span>");
  root2199.append(nodes1725);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2200 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1631 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1630 = mobl.ref(result__);
    
    var nodes1726 = $("<span>");
    root2200.append(nodes1726);
    subs__.addSub((ui.backButton)(tmp1630, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1631, function(_, callback) {
      var root2201 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2201); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1726;
      nodes1726 = node.contents();
      oldNodes.replaceWith(nodes1726);
    }));
    callback(root2200); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1725;
    nodes1725 = node.contents();
    oldNodes.replaceWith(nodes1725);
  }));
  var nodes1727 = $("<span>");
  root2199.append(nodes1727);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2202 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(8, function(result__) {
                       var tmp1727 = result__;
                       var result__ = mobl.alert("Arithmetic Progressions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1632 = mobl.ref(result__);
    
    var nodes1728 = $("<span>");
    root2202.append(nodes1728);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1632, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2203 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1729 = $("<span>");
      root2203.append(nodes1729);
      subs__.addSub((mobl.label)(mobl.ref("+Arithmetic progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2204 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2204); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1729;
        nodes1729 = node.contents();
        oldNodes.replaceWith(nodes1729);
      }));
      callback(root2203); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1728;
      nodes1728 = node.contents();
      oldNodes.replaceWith(nodes1728);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(12, function(result__) {
                       var tmp1726 = result__;
                       var result__ = mobl.alert("Binomial Expansion Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1633 = mobl.ref(result__);
    
    var nodes1730 = $("<span>");
    root2202.append(nodes1730);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1633, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2205 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1731 = $("<span>");
      root2205.append(nodes1731);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial expansion"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2206 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2206); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1731;
        nodes1731 = node.contents();
        oldNodes.replaceWith(nodes1731);
      }));
      callback(root2205); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1730;
      nodes1730 = node.contents();
      oldNodes.replaceWith(nodes1730);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(23, function(result__) {
                       var tmp1725 = result__;
                       var result__ = mobl.alert("Geometric Progression Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1634 = mobl.ref(result__);
    
    var nodes1732 = $("<span>");
    root2202.append(nodes1732);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1634, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2207 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1733 = $("<span>");
      root2207.append(nodes1733);
      subs__.addSub((mobl.label)(mobl.ref("+Geometric progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2208 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2208); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1733;
        nodes1733 = node.contents();
        oldNodes.replaceWith(nodes1733);
      }));
      callback(root2207); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1732;
      nodes1732 = node.contents();
      oldNodes.replaceWith(nodes1732);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(2, function(result__) {
                       var tmp1724 = result__;
                       var result__ = mobl.alert("Binomial theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1635 = mobl.ref(result__);
    
    var nodes1734 = $("<span>");
    root2202.append(nodes1734);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1635, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2209 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1735 = $("<span>");
      root2209.append(nodes1735);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2210 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2210); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1735;
        nodes1735 = node.contents();
        oldNodes.replaceWith(nodes1735);
      }));
      callback(root2209); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1734;
      nodes1734 = node.contents();
      oldNodes.replaceWith(nodes1734);
    }));
    callback(root2202); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1727;
    nodes1727 = node.contents();
    oldNodes.replaceWith(nodes1727);
  }));
  callback(root2199); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root2211 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1736 = $("<span>");
  root2211.append(nodes1736);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2212 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1637 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1636 = mobl.ref(result__);
    
    var nodes1737 = $("<span>");
    root2212.append(nodes1737);
    subs__.addSub((ui.backButton)(tmp1636, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1637, function(_, callback) {
      var root2213 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2213); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1737;
      nodes1737 = node.contents();
      oldNodes.replaceWith(nodes1737);
    }));
    callback(root2212); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1736;
    nodes1736 = node.contents();
    oldNodes.replaceWith(nodes1736);
  }));
  var nodes1738 = $("<span>");
  root2211.append(nodes1738);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2214 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(5, function(result__) {
                       var tmp1729 = result__;
                       var result__ = mobl.alert("Scalar product Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1638 = mobl.ref(result__);
    
    var nodes1739 = $("<span>");
    root2214.append(nodes1739);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1638, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2215 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1740 = $("<span>");
      root2215.append(nodes1740);
      subs__.addSub((mobl.label)(mobl.ref("+Scalar products"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2216 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2216); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1740;
        nodes1740 = node.contents();
        oldNodes.replaceWith(nodes1740);
      }));
      callback(root2215); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1739;
      nodes1739 = node.contents();
      oldNodes.replaceWith(nodes1739);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(18, function(result__) {
                       var tmp1728 = result__;
                       var result__ = mobl.alert("Vector equation of lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1639 = mobl.ref(result__);
    
    var nodes1741 = $("<span>");
    root2214.append(nodes1741);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1639, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2217 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1742 = $("<span>");
      root2217.append(nodes1742);
      subs__.addSub((mobl.label)(mobl.ref("+Vector equation of lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2218 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2218); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1742;
        nodes1742 = node.contents();
        oldNodes.replaceWith(nodes1742);
      }));
      callback(root2217); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1741;
      nodes1741 = node.contents();
      oldNodes.replaceWith(nodes1741);
    }));
    callback(root2214); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1738;
    nodes1738 = node.contents();
    oldNodes.replaceWith(nodes1738);
  }));
  callback(root2211); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root2219 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1743 = $("<span>");
  root2219.append(nodes1743);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2220 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1641 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1640 = mobl.ref(result__);
    
    var nodes1744 = $("<span>");
    root2220.append(nodes1744);
    subs__.addSub((ui.backButton)(tmp1640, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1641, function(_, callback) {
      var root2221 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2221); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1744;
      nodes1744 = node.contents();
      oldNodes.replaceWith(nodes1744);
    }));
    callback(root2220); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1743;
    nodes1743 = node.contents();
    oldNodes.replaceWith(nodes1743);
  }));
  var nodes1745 = $("<span>");
  root2219.append(nodes1745);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2222 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(14, function(result__) {
                       var tmp1734 = result__;
                       var result__ = mobl.alert("Stationary points Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1642 = mobl.ref(result__);
    
    var nodes1746 = $("<span>");
    root2222.append(nodes1746);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1642, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2223 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1747 = $("<span>");
      root2223.append(nodes1747);
      subs__.addSub((mobl.label)(mobl.ref("+Stationary points"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2224 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2224); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1747;
        nodes1747 = node.contents();
        oldNodes.replaceWith(nodes1747);
      }));
      callback(root2223); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1746;
      nodes1746 = node.contents();
      oldNodes.replaceWith(nodes1746);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(20, function(result__) {
                       var tmp1733 = result__;
                       var result__ = mobl.alert("Chain rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1643 = mobl.ref(result__);
    
    var nodes1748 = $("<span>");
    root2222.append(nodes1748);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1643, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2225 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1749 = $("<span>");
      root2225.append(nodes1749);
      subs__.addSub((mobl.label)(mobl.ref("+Chain rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2226 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2226); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1749;
        nodes1749 = node.contents();
        oldNodes.replaceWith(nodes1749);
      }));
      callback(root2225); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1748;
      nodes1748 = node.contents();
      oldNodes.replaceWith(nodes1748);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(21, function(result__) {
                       var tmp1732 = result__;
                       var result__ = mobl.alert("Product rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1644 = mobl.ref(result__);
    
    var nodes1750 = $("<span>");
    root2222.append(nodes1750);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1644, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2227 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1751 = $("<span>");
      root2227.append(nodes1751);
      subs__.addSub((mobl.label)(mobl.ref("+Product rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2228 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2228); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1751;
        nodes1751 = node.contents();
        oldNodes.replaceWith(nodes1751);
      }));
      callback(root2227); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1750;
      nodes1750 = node.contents();
      oldNodes.replaceWith(nodes1750);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(22, function(result__) {
                       var tmp1731 = result__;
                       var result__ = mobl.alert("Quotient rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1645 = mobl.ref(result__);
    
    var nodes1752 = $("<span>");
    root2222.append(nodes1752);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1645, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2229 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1753 = $("<span>");
      root2229.append(nodes1753);
      subs__.addSub((mobl.label)(mobl.ref("+Quotient rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2230 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2230); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1753;
        nodes1753 = node.contents();
        oldNodes.replaceWith(nodes1753);
      }));
      callback(root2229); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1752;
      nodes1752 = node.contents();
      oldNodes.replaceWith(nodes1752);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(19, function(result__) {
                       var tmp1730 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1646 = mobl.ref(result__);
    
    var nodes1754 = $("<span>");
    root2222.append(nodes1754);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1646, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2231 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1755 = $("<span>");
      root2231.append(nodes1755);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2232 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2232); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1755;
        nodes1755 = node.contents();
        oldNodes.replaceWith(nodes1755);
      }));
      callback(root2231); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1754;
      nodes1754 = node.contents();
      oldNodes.replaceWith(nodes1754);
    }));
    callback(root2222); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1745;
    nodes1745 = node.contents();
    oldNodes.replaceWith(nodes1745);
  }));
  callback(root2219); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root2233 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1756 = $("<span>");
  root2233.append(nodes1756);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2234 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1648 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1647 = mobl.ref(result__);
    
    var nodes1757 = $("<span>");
    root2234.append(nodes1757);
    subs__.addSub((ui.backButton)(tmp1647, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1648, function(_, callback) {
      var root2235 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2235); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1757;
      nodes1757 = node.contents();
      oldNodes.replaceWith(nodes1757);
    }));
    callback(root2234); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1756;
    nodes1756 = node.contents();
    oldNodes.replaceWith(nodes1756);
  }));
  var nodes1758 = $("<span>");
  root2233.append(nodes1758);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2236 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(28, function(result__) {
                       var tmp1737 = result__;
                       var result__ = mobl.alert("Integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1649 = mobl.ref(result__);
    
    var nodes1759 = $("<span>");
    root2236.append(nodes1759);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1649, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2237 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1760 = $("<span>");
      root2237.append(nodes1760);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2238 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2238); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1760;
        nodes1760 = node.contents();
        oldNodes.replaceWith(nodes1760);
      }));
      callback(root2237); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1759;
      nodes1759 = node.contents();
      oldNodes.replaceWith(nodes1759);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(3, function(result__) {
                       var tmp1736 = result__;
                       var result__ = mobl.alert("Polynomial integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1650 = mobl.ref(result__);
    
    var nodes1761 = $("<span>");
    root2236.append(nodes1761);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1650, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2239 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1762 = $("<span>");
      root2239.append(nodes1762);
      subs__.addSub((mobl.label)(mobl.ref("+Polynomial integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2240 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2240); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1762;
        nodes1762 = node.contents();
        oldNodes.replaceWith(nodes1762);
      }));
      callback(root2239); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1761;
      nodes1761 = node.contents();
      oldNodes.replaceWith(nodes1761);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(4, function(result__) {
                       var tmp1735 = result__;
                       var result__ = mobl.alert("Trig integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1651 = mobl.ref(result__);
    
    var nodes1763 = $("<span>");
    root2236.append(nodes1763);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1651, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2241 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1764 = $("<span>");
      root2241.append(nodes1764);
      subs__.addSub((mobl.label)(mobl.ref("+Trig integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2242 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2242); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1764;
        nodes1764 = node.contents();
        oldNodes.replaceWith(nodes1764);
      }));
      callback(root2241); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1763;
      nodes1763 = node.contents();
      oldNodes.replaceWith(nodes1763);
    }));
    callback(root2236); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1758;
    nodes1758 = node.contents();
    oldNodes.replaceWith(nodes1758);
  }));
  callback(root2233); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root2243 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1765 = $("<span>");
  root2243.append(nodes1765);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2244 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1653 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1652 = mobl.ref(result__);
    
    var nodes1766 = $("<span>");
    root2244.append(nodes1766);
    subs__.addSub((ui.backButton)(tmp1652, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1653, function(_, callback) {
      var root2245 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2245); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1766;
      nodes1766 = node.contents();
      oldNodes.replaceWith(nodes1766);
    }));
    callback(root2244); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1765;
    nodes1765 = node.contents();
    oldNodes.replaceWith(nodes1765);
  }));
  var nodes1767 = $("<span>");
  root2243.append(nodes1767);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2246 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(29, function(result__) {
                       var tmp1738 = result__;
                       var result__ = mobl.alert("Differential equations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1654 = mobl.ref(result__);
    
    var nodes1768 = $("<span>");
    root2246.append(nodes1768);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1654, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2247 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1769 = $("<span>");
      root2247.append(nodes1769);
      subs__.addSub((mobl.label)(mobl.ref("+Diff equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2248 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2248); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1769;
        nodes1769 = node.contents();
        oldNodes.replaceWith(nodes1769);
      }));
      callback(root2247); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1768;
      nodes1768 = node.contents();
      oldNodes.replaceWith(nodes1768);
    }));
    callback(root2246); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1767;
    nodes1767 = node.contents();
    oldNodes.replaceWith(nodes1767);
  }));
  callback(root2243); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root2249 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1770 = $("<span>");
  root2249.append(nodes1770);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2250 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F1", function(result__) {
                       var tmp1751 = result__;
                       var result__ = mobl.alert("Complex arithmetic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1655 = mobl.ref(result__);
    
    var nodes1771 = $("<span>");
    root2250.append(nodes1771);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1655, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2251 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1772 = $("<span>");
      root2251.append(nodes1772);
      subs__.addSub((mobl.label)(mobl.ref("+Complex arithmetic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2252 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2252); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1772;
        nodes1772 = node.contents();
        oldNodes.replaceWith(nodes1772);
      }));
      callback(root2251); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1771;
      nodes1771 = node.contents();
      oldNodes.replaceWith(nodes1771);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F2", function(result__) {
                       var tmp1750 = result__;
                       var result__ = mobl.alert("Modulus argument Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1656 = mobl.ref(result__);
    
    var nodes1773 = $("<span>");
    root2250.append(nodes1773);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1656, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2253 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1774 = $("<span>");
      root2253.append(nodes1774);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus argument"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2254 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2254); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1774;
        nodes1774 = node.contents();
        oldNodes.replaceWith(nodes1774);
      }));
      callback(root2253); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1773;
      nodes1773 = node.contents();
      oldNodes.replaceWith(nodes1773);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F3a", function(result__) {
                       var tmp1749 = result__;
                       var result__ = mobl.alert("2nd order DE Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1657 = mobl.ref(result__);
    
    var nodes1775 = $("<span>");
    root2250.append(nodes1775);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1657, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2255 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1776 = $("<span>");
      root2255.append(nodes1776);
      subs__.addSub((mobl.label)(mobl.ref("+2nd order DEs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2256 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2256); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1776;
        nodes1776 = node.contents();
        oldNodes.replaceWith(nodes1776);
      }));
      callback(root2255); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1775;
      nodes1775 = node.contents();
      oldNodes.replaceWith(nodes1775);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F4", function(result__) {
                       var tmp1748 = result__;
                       var result__ = mobl.alert("Rank 2 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1658 = mobl.ref(result__);
    
    var nodes1777 = $("<span>");
    root2250.append(nodes1777);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1658, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2257 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1778 = $("<span>");
      root2257.append(nodes1778);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 2 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2258 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2258); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1778;
        nodes1778 = node.contents();
        oldNodes.replaceWith(nodes1778);
      }));
      callback(root2257); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1777;
      nodes1777 = node.contents();
      oldNodes.replaceWith(nodes1777);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F5", function(result__) {
                       var tmp1747 = result__;
                       var result__ = mobl.alert("Taylor Series Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1659 = mobl.ref(result__);
    
    var nodes1779 = $("<span>");
    root2250.append(nodes1779);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1659, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2259 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1780 = $("<span>");
      root2259.append(nodes1780);
      subs__.addSub((mobl.label)(mobl.ref("+Taylor Series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2260 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2260); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1780;
        nodes1780 = node.contents();
        oldNodes.replaceWith(nodes1780);
      }));
      callback(root2259); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1779;
      nodes1779 = node.contents();
      oldNodes.replaceWith(nodes1779);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F6", function(result__) {
                       var tmp1746 = result__;
                       var result__ = mobl.alert("Polar Coordinates Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1660 = mobl.ref(result__);
    
    var nodes1781 = $("<span>");
    root2250.append(nodes1781);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1660, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2261 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1782 = $("<span>");
      root2261.append(nodes1782);
      subs__.addSub((mobl.label)(mobl.ref("+Polar Coordinates"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2262 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2262); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1782;
        nodes1782 = node.contents();
        oldNodes.replaceWith(nodes1782);
      }));
      callback(root2261); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1781;
      nodes1781 = node.contents();
      oldNodes.replaceWith(nodes1781);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F7", function(result__) {
                       var tmp1745 = result__;
                       var result__ = mobl.alert("Rank 3 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1661 = mobl.ref(result__);
    
    var nodes1783 = $("<span>");
    root2250.append(nodes1783);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1661, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2263 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1784 = $("<span>");
      root2263.append(nodes1784);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 3 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2264 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2264); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1784;
        nodes1784 = node.contents();
        oldNodes.replaceWith(nodes1784);
      }));
      callback(root2263); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1783;
      nodes1783 = node.contents();
      oldNodes.replaceWith(nodes1783);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F8", function(result__) {
                       var tmp1744 = result__;
                       var result__ = mobl.alert("Further vectors added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1662 = mobl.ref(result__);
    
    var nodes1785 = $("<span>");
    root2250.append(nodes1785);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1662, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2265 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1786 = $("<span>");
      root2265.append(nodes1786);
      subs__.addSub((mobl.label)(mobl.ref("+Further vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2266 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2266); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1786;
        nodes1786 = node.contents();
        oldNodes.replaceWith(nodes1786);
      }));
      callback(root2265); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1785;
      nodes1785 = node.contents();
      oldNodes.replaceWith(nodes1785);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F9", function(result__) {
                       var tmp1743 = result__;
                       var result__ = mobl.alert("Newton-Raphson added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1663 = mobl.ref(result__);
    
    var nodes1787 = $("<span>");
    root2250.append(nodes1787);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1663, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2267 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1788 = $("<span>");
      root2267.append(nodes1788);
      subs__.addSub((mobl.label)(mobl.ref("+Newton-Raphson"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2268 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2268); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1788;
        nodes1788 = node.contents();
        oldNodes.replaceWith(nodes1788);
      }));
      callback(root2267); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1787;
      nodes1787 = node.contents();
      oldNodes.replaceWith(nodes1787);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F10", function(result__) {
                       var tmp1742 = result__;
                       var result__ = mobl.alert("Further inequalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1664 = mobl.ref(result__);
    
    var nodes1789 = $("<span>");
    root2250.append(nodes1789);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1664, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2269 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1790 = $("<span>");
      root2269.append(nodes1790);
      subs__.addSub((mobl.label)(mobl.ref("+Further inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2270 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2270); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1790;
        nodes1790 = node.contents();
        oldNodes.replaceWith(nodes1790);
      }));
      callback(root2269); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1789;
      nodes1789 = node.contents();
      oldNodes.replaceWith(nodes1789);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F11", function(result__) {
                       var tmp1741 = result__;
                       var result__ = mobl.alert("Integration by substitution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1665 = mobl.ref(result__);
    
    var nodes1791 = $("<span>");
    root2250.append(nodes1791);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1665, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2271 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1792 = $("<span>");
      root2271.append(nodes1792);
      subs__.addSub((mobl.label)(mobl.ref("+Integration by substitution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2272 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2272); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1792;
        nodes1792 = node.contents();
        oldNodes.replaceWith(nodes1792);
      }));
      callback(root2271); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1791;
      nodes1791 = node.contents();
      oldNodes.replaceWith(nodes1791);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F12", function(result__) {
                       var tmp1740 = result__;
                       var result__ = mobl.alert("Figures of revolution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1666 = mobl.ref(result__);
    
    var nodes1793 = $("<span>");
    root2250.append(nodes1793);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1666, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2273 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1794 = $("<span>");
      root2273.append(nodes1794);
      subs__.addSub((mobl.label)(mobl.ref("+Figures of revolution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2274 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2274); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1794;
        nodes1794 = node.contents();
        oldNodes.replaceWith(nodes1794);
      }));
      callback(root2273); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1793;
      nodes1793 = node.contents();
      oldNodes.replaceWith(nodes1793);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F13", function(result__) {
                       var tmp1739 = result__;
                       var result__ = mobl.alert("Matrix transformations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1667 = mobl.ref(result__);
    
    var nodes1795 = $("<span>");
    root2250.append(nodes1795);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1667, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2275 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1796 = $("<span>");
      root2275.append(nodes1796);
      subs__.addSub((mobl.label)(mobl.ref("+Matrix transformations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2276 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2276); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1796;
        nodes1796 = node.contents();
        oldNodes.replaceWith(nodes1796);
      }));
      callback(root2275); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1795;
      nodes1795 = node.contents();
      oldNodes.replaceWith(nodes1795);
    }));
    callback(root2250); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1770;
    nodes1770 = node.contents();
    oldNodes.replaceWith(nodes1770);
  }));
  callback(root2249); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root2277 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1797 = $("<span>");
  root2277.append(nodes1797);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2278 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S1", function(result__) {
                       var tmp1757 = result__;
                       var result__ = mobl.alert("Discrete Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1668 = mobl.ref(result__);
    
    var nodes1798 = $("<span>");
    root2278.append(nodes1798);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1668, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2279 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1799 = $("<span>");
      root2279.append(nodes1799);
      subs__.addSub((mobl.label)(mobl.ref("+Discrete Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2280 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2280); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1799;
        nodes1799 = node.contents();
        oldNodes.replaceWith(nodes1799);
      }));
      callback(root2279); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1798;
      nodes1798 = node.contents();
      oldNodes.replaceWith(nodes1798);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S2", function(result__) {
                       var tmp1756 = result__;
                       var result__ = mobl.alert("Continuous Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1669 = mobl.ref(result__);
    
    var nodes1800 = $("<span>");
    root2278.append(nodes1800);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1669, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2281 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1801 = $("<span>");
      root2281.append(nodes1801);
      subs__.addSub((mobl.label)(mobl.ref("+Continuous Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2282 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2282); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1801;
        nodes1801 = node.contents();
        oldNodes.replaceWith(nodes1801);
      }));
      callback(root2281); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1800;
      nodes1800 = node.contents();
      oldNodes.replaceWith(nodes1800);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S3", function(result__) {
                       var tmp1755 = result__;
                       var result__ = mobl.alert("Hypothesis Testing Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1670 = mobl.ref(result__);
    
    var nodes1802 = $("<span>");
    root2278.append(nodes1802);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1670, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2283 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1803 = $("<span>");
      root2283.append(nodes1803);
      subs__.addSub((mobl.label)(mobl.ref("+Hypothesis Testing"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2284 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2284); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1803;
        nodes1803 = node.contents();
        oldNodes.replaceWith(nodes1803);
      }));
      callback(root2283); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1802;
      nodes1802 = node.contents();
      oldNodes.replaceWith(nodes1802);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S4", function(result__) {
                       var tmp1754 = result__;
                       var result__ = mobl.alert("Confidence Intervals Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1671 = mobl.ref(result__);
    
    var nodes1804 = $("<span>");
    root2278.append(nodes1804);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1671, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2285 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1805 = $("<span>");
      root2285.append(nodes1805);
      subs__.addSub((mobl.label)(mobl.ref("+Confidence Intervals"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2286 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2286); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1805;
        nodes1805 = node.contents();
        oldNodes.replaceWith(nodes1805);
      }));
      callback(root2285); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1804;
      nodes1804 = node.contents();
      oldNodes.replaceWith(nodes1804);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S5", function(result__) {
                       var tmp1753 = result__;
                       var result__ = mobl.alert("Chi Squared Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1672 = mobl.ref(result__);
    
    var nodes1806 = $("<span>");
    root2278.append(nodes1806);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1672, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2287 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1807 = $("<span>");
      root2287.append(nodes1807);
      subs__.addSub((mobl.label)(mobl.ref("+Chi Squared"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2288 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2288); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1807;
        nodes1807 = node.contents();
        oldNodes.replaceWith(nodes1807);
      }));
      callback(root2287); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1806;
      nodes1806 = node.contents();
      oldNodes.replaceWith(nodes1806);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S6", function(result__) {
                       var tmp1752 = result__;
                       var result__ = mobl.alert("Product Moment Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1673 = mobl.ref(result__);
    
    var nodes1808 = $("<span>");
    root2278.append(nodes1808);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1673, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2289 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1809 = $("<span>");
      root2289.append(nodes1809);
      subs__.addSub((mobl.label)(mobl.ref("+Product Moments"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2290 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2290); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1809;
        nodes1809 = node.contents();
        oldNodes.replaceWith(nodes1809);
      }));
      callback(root2289); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1808;
      nodes1808 = node.contents();
      oldNodes.replaceWith(nodes1808);
    }));
    callback(root2278); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1797;
    nodes1797 = node.contents();
    oldNodes.replaceWith(nodes1797);
  }));
  callback(root2277); return subs__;
  
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
  var root2291 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node721 = $("<div>");
  
  var ref699 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref699.get() !== null) {
    node721.attr('class', ref699.get());
    subs__.addSub(ref699.addEventListener('change', function(_, ref, val) {
      node721.attr('class', val);
    }));
    
  }
  subs__.addSub(ref699.rebind());
  
  var val353 = onclick.get();
  if(val353 !== null) {
    subs__.addSub(mobl.domBind(node721, 'tap', val353));
  }
  
  
  var node722 = $("<div>");
  
  var ref698 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref698.get() !== null) {
    node722.attr('class', ref698.get());
    subs__.addSub(ref698.addEventListener('change', function(_, ref, val) {
      node722.attr('class', val);
    }));
    
  }
  subs__.addSub(ref698.rebind());
  
  
  var node723 = $("<div>");
  
  var ref696 = text;
  node723.text(""+ref696.get());
  var ignore137 = false;
  subs__.addSub(ref696.addEventListener('change', function(_, ref, val) {
    if(ignore137) return;
    node723.text(""+val);
  }));
  subs__.addSub(ref696.rebind());
  
  
  var ref697 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref697.get() !== null) {
    node723.attr('class', ref697.get());
    subs__.addSub(ref697.addEventListener('change', function(_, ref, val) {
      node723.attr('class', val);
    }));
    
  }
  subs__.addSub(ref697.rebind());
  
  node722.append(node723);
  node721.append(node722);
  var nodes1810 = $("<span>");
  node721.append(nodes1810);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl283();
  }));
  
  function renderControl283() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2292 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2292); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1810;
      nodes1810 = node.contents();
      oldNodes.replaceWith(nodes1810);
    }));
  }
  renderControl283();
  root2291.append(node721);
  callback(root2291); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mobl.sleep(100, function(result__) {
    var tmp1758 = result__;
    mathJAX.renderMaths(function(result__) {
      var tmp1759 = result__;
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
  var root2293 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node724 = $("<span>");
  root2293.append(node724);
  var condSubs179 = new mobl.CompSubscription();
  subs__.addSub(condSubs179);
  var oldValue179;
  var renderCond179 = function() {
    var value1179 = qa.get().correct;
    if(oldValue179 === value1179) return;
    oldValue179 = value1179;
    var subs__ = condSubs179;
    subs__.unsubscribe();
    node724.empty();
    if(value1179) {
      var nodes1811 = $("<span>");
      node724.append(nodes1811);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.agreeStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2294 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = qa.get().answer != "%GRAPH%";
        var tmp1677 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp1677.set(qa.get().answer != "%GRAPH%");
        }));
        
        
        var node725 = $("<span>");
        root2294.append(node725);
        var condSubs180 = new mobl.CompSubscription();
        subs__.addSub(condSubs180);
        var oldValue180;
        var renderCond180 = function() {
          var value1180 = tmp1677.get();
          if(oldValue180 === value1180) return;
          oldValue180 = value1180;
          var subs__ = condSubs180;
          subs__.unsubscribe();
          node725.empty();
          if(value1180) {
            var result__ = "A" + qa.get().number + ". ";
            var tmp1674 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp1674.set("A" + qa.get().number + ". ");
            }));
            
            var nodes1812 = $("<span>");
            node725.append(nodes1812);
            subs__.addSub((mobl.label)(tmp1674, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root2295 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root2295); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1812;
              nodes1812 = node.contents();
              oldNodes.replaceWith(nodes1812);
            }));
            var nodes1813 = $("<span>");
            node725.append(nodes1813);
            subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
              var root2296 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root2296); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1813;
              nodes1813 = node.contents();
              oldNodes.replaceWith(nodes1813);
            }));
            
            
            
          } else {
            var result__ = "A" + qa.get().number + ". ";
            var tmp1675 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp1675.set("A" + qa.get().number + ". ");
            }));
            
            var nodes1814 = $("<span>");
            node725.append(nodes1814);
            subs__.addSub((mobl.label)(tmp1675, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root2297 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root2297); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1814;
              nodes1814 = node.contents();
              oldNodes.replaceWith(nodes1814);
            }));
            var nodes1815 = $("<span>");
            node725.append(nodes1815);
            subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
              var root2298 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root2298); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1815;
              nodes1815 = node.contents();
              oldNodes.replaceWith(nodes1815);
            }));
            
            var node726 = $("<span>");
            node726.attr('style', "display:none");
            
            nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
              var tmp1761 = result__;
              var tmp1676 = mobl.ref(result__);
              subs__.addSub(qa.addEventListener('change', function() {
                nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                  var tmp1760 = result__;
                  var result__ = tmp1760;
                  tmp1676.set(result__);
                  
                });
              }));
              
              var nodes1816 = $("<span>");
              node726.append(nodes1816);
              subs__.addSub((mobl.html)(tmp1676, function(_, callback) {
                var root2299 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root2299); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1816;
                nodes1816 = node.contents();
                oldNodes.replaceWith(nodes1816);
              }));
              node725.append(node726);
              
              
            });
            
            
            
          }
        };
        renderCond180();
        subs__.addSub(tmp1677.addEventListener('change', function() {
          renderCond180();
        }));
        
        callback(root2294); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1811;
        nodes1811 = node.contents();
        oldNodes.replaceWith(nodes1811);
      }));
      
      
    } else {
      var nodes1817 = $("<span>");
      node724.append(nodes1817);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.disagreeStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2300 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = qa.get().answer != "%GRAPH%";
        var tmp1681 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp1681.set(qa.get().answer != "%GRAPH%");
        }));
        
        
        var node727 = $("<span>");
        root2300.append(node727);
        var condSubs181 = new mobl.CompSubscription();
        subs__.addSub(condSubs181);
        var oldValue181;
        var renderCond181 = function() {
          var value1181 = tmp1681.get();
          if(oldValue181 === value1181) return;
          oldValue181 = value1181;
          var subs__ = condSubs181;
          subs__.unsubscribe();
          node727.empty();
          if(value1181) {
            var result__ = "A" + qa.get().number + ". ";
            var tmp1678 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp1678.set("A" + qa.get().number + ". ");
            }));
            
            var nodes1818 = $("<span>");
            node727.append(nodes1818);
            subs__.addSub((mobl.label)(tmp1678, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root2301 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root2301); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1818;
              nodes1818 = node.contents();
              oldNodes.replaceWith(nodes1818);
            }));
            var nodes1819 = $("<span>");
            node727.append(nodes1819);
            subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
              var root2302 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root2302); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1819;
              nodes1819 = node.contents();
              oldNodes.replaceWith(nodes1819);
            }));
            
            
            
          } else {
            var result__ = "A" + qa.get().number + ". ";
            var tmp1679 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp1679.set("A" + qa.get().number + ". ");
            }));
            
            var nodes1820 = $("<span>");
            node727.append(nodes1820);
            subs__.addSub((mobl.label)(tmp1679, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root2303 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root2303); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1820;
              nodes1820 = node.contents();
              oldNodes.replaceWith(nodes1820);
            }));
            var nodes1821 = $("<span>");
            node727.append(nodes1821);
            subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
              var root2304 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root2304); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes1821;
              nodes1821 = node.contents();
              oldNodes.replaceWith(nodes1821);
            }));
            
            var node728 = $("<span>");
            node728.attr('style', "display:none");
            
            nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
              var tmp1763 = result__;
              var tmp1680 = mobl.ref(result__);
              subs__.addSub(qa.addEventListener('change', function() {
                nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                  var tmp1762 = result__;
                  var result__ = tmp1762;
                  tmp1680.set(result__);
                  
                });
              }));
              
              var nodes1822 = $("<span>");
              node728.append(nodes1822);
              subs__.addSub((mobl.html)(tmp1680, function(_, callback) {
                var root2305 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root2305); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes1822;
                nodes1822 = node.contents();
                oldNodes.replaceWith(nodes1822);
              }));
              node727.append(node728);
              
              
            });
            
            
            
          }
        };
        renderCond181();
        subs__.addSub(tmp1681.addEventListener('change', function() {
          renderCond181();
        }));
        
        callback(root2300); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1817;
        nodes1817 = node.contents();
        oldNodes.replaceWith(nodes1817);
      }));
      
      
    }
  };
  renderCond179();
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    renderCond179();
  }));
  
  var nodes1823 = $("<span>");
  root2293.append(nodes1823);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root2306 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node729 = $("<span>");
    node729.attr('style', "display:none");
    
    nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
      var tmp1765 = result__;
      var tmp1682 = mobl.ref(result__);
      subs__.addSub(qa.addEventListener('change', function() {
        nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
          var tmp1764 = result__;
          var result__ = tmp1764;
          tmp1682.set(result__);
          
        });
      }));
      
      var nodes1827 = $("<span>");
      node729.append(nodes1827);
      subs__.addSub((mobl.html)(tmp1682, function(_, callback) {
        var root2310 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2310); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1827;
        nodes1827 = node.contents();
        oldNodes.replaceWith(nodes1827);
      }));
      root2306.append(node729);
      var nodes1824 = $("<span>");
      root2306.append(nodes1824);
      subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2307 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2307); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1824;
        nodes1824 = node.contents();
        oldNodes.replaceWith(nodes1824);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = true;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp1683 = mobl.ref(result__);
      
      var nodes1825 = $("<span>");
      root2306.append(nodes1825);
      subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp1683, function(_, callback) {
        var root2308 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2308); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1825;
        nodes1825 = node.contents();
        oldNodes.replaceWith(nodes1825);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = false;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp1684 = mobl.ref(result__);
      
      var nodes1826 = $("<span>");
      root2306.append(nodes1826);
      subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp1684, function(_, callback) {
        var root2309 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2309); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1826;
        nodes1826 = node.contents();
        oldNodes.replaceWith(nodes1826);
      }));
      callback(root2306); return subs__;
      
      
      
      
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1823;
    nodes1823 = node.contents();
    oldNodes.replaceWith(nodes1823);
  }));
  callback(root2293); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp1766 = result__;
    var result__ = tmp1766;
    var qa2 = result__;
    var result__ = qa2 == null;
    if(result__) {
      nrichRPG.questionAnswer.QA.all().one(function(result__) {
        var tmp1767 = result__;
        var result__ = tmp1767;
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
  var root2311 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node730 = $("<span>");
  
  var ref700 = mobl.ref("color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
  if(ref700.get() !== null) {
    node730.attr('style', ref700.get());
    subs__.addSub(ref700.addEventListener('change', function(_, ref, val) {
      node730.attr('style', val);
    }));
    subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
      node730.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
      node730.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    
  }
  subs__.addSub(ref700.rebind());
  
  var result__ = "Q" + number.get() + ". " + qa.get().topic;
  var tmp1685 = mobl.ref(result__);
  subs__.addSub(number.addEventListener('change', function() {
    tmp1685.set("Q" + number.get() + ". " + qa.get().topic);
  }));
  subs__.addSub(mobl.ref(qa, 'topic').addEventListener('change', function() {
    tmp1685.set("Q" + number.get() + ". " + qa.get().topic);
  }));
  
  var nodes1828 = $("<span>");
  node730.append(nodes1828);
  subs__.addSub((mobl.html)(tmp1685, function(_, callback) {
    var root2312 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2312); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1828;
    nodes1828 = node.contents();
    oldNodes.replaceWith(nodes1828);
  }));
  root2311.append(node730);
  callback(root2311); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.showQA = function(qa, elements, callback) {
  var root2313 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp1775 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp1688 = mobl.ref(result__);
  
  var result__ = qa.get().topic.toLowerCase();
  var tmp1687 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'topic').addEventListener('change', function() {
    tmp1687.set(qa.get().topic.toLowerCase());
  }));
  
  var nodes1829 = $("<span>");
  root2313.append(nodes1829);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(tmp1687, tmp1688, function(_, callback) {
    var root2314 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp1768 = result__;
                       var result__ = tmp1768;
                       var qa2 = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp1769 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp1686 = mobl.ref(result__);
    
    var nodes1830 = $("<span>");
    root2314.append(nodes1830);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp1686, function(_, callback) {
      var root2315 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2315); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1830;
      nodes1830 = node.contents();
      oldNodes.replaceWith(nodes1830);
    }));
    callback(root2314); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1829;
    nodes1829 = node.contents();
    oldNodes.replaceWith(nodes1829);
  }));
  var nodes1831 = $("<span>");
  root2313.append(nodes1831);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2316 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp1774 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1691 = mobl.ref(result__);
    
    var nodes1832 = $("<span>");
    root2316.append(nodes1832);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp1691, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root2317 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + qa.get().number + ". " + qa.get().question;
      var tmp1689 = mobl.ref(result__);
      subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
        tmp1689.set("Q" + qa.get().number + ". " + qa.get().question);
      }));
      subs__.addSub(mobl.ref(qa, 'question').addEventListener('change', function() {
        tmp1689.set("Q" + qa.get().number + ". " + qa.get().question);
      }));
      
      var nodes1833 = $("<span>");
      root2317.append(nodes1833);
      subs__.addSub((mobl.html)(tmp1689, function(_, callback) {
        var root2318 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2318); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1833;
        nodes1833 = node.contents();
        oldNodes.replaceWith(nodes1833);
      }));
      
      var node731 = $("<span>");
      node731.attr('style', "display:none");
      
      nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
        var tmp1771 = result__;
        var tmp1690 = mobl.ref(result__);
        subs__.addSub(qa.addEventListener('change', function() {
          nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
            var tmp1770 = result__;
            var result__ = tmp1770;
            tmp1690.set(result__);
            
          });
        }));
        
        var nodes1834 = $("<span>");
        node731.append(nodes1834);
        subs__.addSub((mobl.html)(tmp1690, function(_, callback) {
          var root2319 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2319); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1834;
          nodes1834 = node.contents();
          oldNodes.replaceWith(nodes1834);
        }));
        root2317.append(node731);
        callback(root2317); return subs__;
        
      });
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1832;
      nodes1832 = node.contents();
      oldNodes.replaceWith(nodes1832);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp1773 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1693 = mobl.ref(result__);
    
    var nodes1835 = $("<span>");
    root2316.append(nodes1835);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1693, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root2320 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1836 = $("<span>");
      root2320.append(nodes1836);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2321 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                           var tmp1772 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp1692 = mobl.ref(result__);
        
        var nodes1837 = $("<span>");
        root2321.append(nodes1837);
        subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp1692, function(_, callback) {
          var root2322 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2322); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes1837;
          nodes1837 = node.contents();
          oldNodes.replaceWith(nodes1837);
        }));
        callback(root2321); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes1836;
        nodes1836 = node.contents();
        oldNodes.replaceWith(nodes1836);
      }));
      
      var node732 = $("<span>");
      root2320.append(node732);
      var condSubs182 = new mobl.CompSubscription();
      subs__.addSub(condSubs182);
      var oldValue182;
      var renderCond182 = function() {
        var value1182 = qa.get().done;
        if(oldValue182 === value1182) return;
        oldValue182 = value1182;
        var subs__ = condSubs182;
        subs__.unsubscribe();
        node732.empty();
        if(value1182) {
          var nodes1838 = $("<span>");
          node732.append(nodes1838);
          subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, function(_, callback) {
            var root2323 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root2323); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes1838;
            nodes1838 = node.contents();
            oldNodes.replaceWith(nodes1838);
          }));
          
          
        } else {
          
        }
      };
      renderCond182();
      subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
        renderCond182();
      }));
      
      callback(root2320); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1835;
      nodes1835 = node.contents();
      oldNodes.replaceWith(nodes1835);
    }));
    callback(root2316); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1831;
    nodes1831 = node.contents();
    oldNodes.replaceWith(nodes1831);
  }));
  callback(root2313); return subs__;
  
  
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
  qas.list(function(coll1579) {
    coll1579 = coll1579.reverse();
    function processOne79() {
      var item;
      item = coll1579.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll1579.length > 0) processOne79(); else rest79();
      
    }
    function rest79() {
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
    if(coll1579.length > 0) processOne79(); else rest79();
  });
  
};

nrichRPG.coreWorkout.makeQAStar = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll1580) {
    coll1580 = coll1580.reverse();
    function processOne80() {
      var item;
      item = coll1580.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll1580.length > 0) processOne80(); else rest80();
      
    }
    function rest80() {
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
    if(coll1580.length > 0) processOne80(); else rest80();
  });
  
};

nrichRPG.coreWorkout.makeQAStats = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll1581) {
    coll1581 = coll1581.reverse();
    function processOne81() {
      var item;
      item = coll1581.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll1581.length > 0) processOne81(); else rest81();
      
    }
    function rest81() {
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
    if(coll1581.length > 0) processOne81(); else rest81();
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