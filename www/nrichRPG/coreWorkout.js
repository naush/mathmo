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
    var tmp1886 = result__;
    var result__ = tmp1886;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp1887 = result__;
      var result__ = tmp1887;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  nrichRPG.questionAnswer.QA.all().destroyAll(function(result__) {
    var tmp1888 = result__;
    if(callback && callback.apply) callback(); return;
  });
};

nrichRPG.coreWorkout.randomQ = function(n, topicId, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll249) {
    coll249 = coll249.reverse();
    function processOne63() {
      var i;
      i = coll249.pop();
      nrichRPG.coreWorkout.makeQA(topicId, function(result__) {
        var tmp1889 = result__;
        
        if(coll249.length > 0) processOne63(); else rest63();
        
      });
    }
    function rest63() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll249.length > 0) processOne63(); else rest63();
  });
  
};

nrichRPG.coreWorkout.randomQStar = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll250) {
    coll250 = coll250.reverse();
    function processOne64() {
      var i;
      i = coll250.pop();
      var result__ = mobl.Math.floor(13 * mobl.Math.random());
      var r = result__;
      var result__ = "F" + (1 + r);
      var tid = result__;
      var result__ = tid == "F3";
      if(result__) {
        var result__ = "F3a";
        tid = result__;
        nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
          var tmp1890 = result__;
          
          if(coll250.length > 0) processOne64(); else rest64();
          
        });
      } else {
        {
          nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
            var tmp1890 = result__;
            
            if(coll250.length > 0) processOne64(); else rest64();
            
          });
        }
      }
    }
    function rest64() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll250.length > 0) processOne64(); else rest64();
  });
  
};

nrichRPG.coreWorkout.randomQStats = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll251) {
    coll251 = coll251.reverse();
    function processOne65() {
      var i;
      i = coll251.pop();
      var result__ = mobl.Math.floor(6 * mobl.Math.random());
      var r = result__;
      var result__ = "S" + (1 + r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
        var tmp1891 = result__;
        
        if(coll251.length > 0) processOne65(); else rest65();
        
      });
    }
    function rest65() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll251.length > 0) processOne65(); else rest65();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root2221 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1861 = $("<span>");
  root2221.append(nodes1861);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2222 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1899 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1798 = mobl.ref(result__);
    
    var nodes1862 = $("<span>");
    root2222.append(nodes1862);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1798, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2223 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1863 = $("<span>");
      root2223.append(nodes1863);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2224 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2224); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1863;
        nodes1863 = node.contents();
        oldNodes.replaceWith(nodes1863);
      }));
      callback(root2223); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1862;
      nodes1862 = node.contents();
      oldNodes.replaceWith(nodes1862);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1898 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1799 = mobl.ref(result__);
    
    var nodes1864 = $("<span>");
    root2222.append(nodes1864);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1799, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2225 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1865 = $("<span>");
      root2225.append(nodes1865);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2226 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2226); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1865;
        nodes1865 = node.contents();
        oldNodes.replaceWith(nodes1865);
      }));
      callback(root2225); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1864;
      nodes1864 = node.contents();
      oldNodes.replaceWith(nodes1864);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1897 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1800 = mobl.ref(result__);
    
    var nodes1866 = $("<span>");
    root2222.append(nodes1866);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1800, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2227 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1867 = $("<span>");
      root2227.append(nodes1867);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2228 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2228); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1867;
        nodes1867 = node.contents();
        oldNodes.replaceWith(nodes1867);
      }));
      callback(root2227); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1866;
      nodes1866 = node.contents();
      oldNodes.replaceWith(nodes1866);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1896 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1801 = mobl.ref(result__);
    
    var nodes1868 = $("<span>");
    root2222.append(nodes1868);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1801, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2229 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1869 = $("<span>");
      root2229.append(nodes1869);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2230 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2230); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1869;
        nodes1869 = node.contents();
        oldNodes.replaceWith(nodes1869);
      }));
      callback(root2229); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1868;
      nodes1868 = node.contents();
      oldNodes.replaceWith(nodes1868);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1895 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1802 = mobl.ref(result__);
    
    var nodes1870 = $("<span>");
    root2222.append(nodes1870);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1802, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2231 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1871 = $("<span>");
      root2231.append(nodes1871);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2232 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2232); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1871;
        nodes1871 = node.contents();
        oldNodes.replaceWith(nodes1871);
      }));
      callback(root2231); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1870;
      nodes1870 = node.contents();
      oldNodes.replaceWith(nodes1870);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1894 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1803 = mobl.ref(result__);
    
    var nodes1872 = $("<span>");
    root2222.append(nodes1872);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1803, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2233 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1873 = $("<span>");
      root2233.append(nodes1873);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2234 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2234); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1873;
        nodes1873 = node.contents();
        oldNodes.replaceWith(nodes1873);
      }));
      callback(root2233); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1872;
      nodes1872 = node.contents();
      oldNodes.replaceWith(nodes1872);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1893 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1804 = mobl.ref(result__);
    
    var nodes1874 = $("<span>");
    root2222.append(nodes1874);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1804, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2235 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1875 = $("<span>");
      root2235.append(nodes1875);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2236 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2236); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1875;
        nodes1875 = node.contents();
        oldNodes.replaceWith(nodes1875);
      }));
      callback(root2235); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1874;
      nodes1874 = node.contents();
      oldNodes.replaceWith(nodes1874);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1892 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1805 = mobl.ref(result__);
    
    var nodes1876 = $("<span>");
    root2222.append(nodes1876);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1805, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2237 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1877 = $("<span>");
      root2237.append(nodes1877);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2238 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2238); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1877;
        nodes1877 = node.contents();
        oldNodes.replaceWith(nodes1877);
      }));
      callback(root2237); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1876;
      nodes1876 = node.contents();
      oldNodes.replaceWith(nodes1876);
    }));
    callback(root2222); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1861;
    nodes1861 = node.contents();
    oldNodes.replaceWith(nodes1861);
  }));
  callback(root2221); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root2239 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes1878 = $("<span>");
  root2239.append(nodes1878);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2240 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1807 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1806 = mobl.ref(result__);
    
    var nodes1879 = $("<span>");
    root2240.append(nodes1879);
    subs__.addSub((ui.backButton)(tmp1806, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1807, function(_, callback) {
      var root2241 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2241); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1879;
      nodes1879 = node.contents();
      oldNodes.replaceWith(nodes1879);
    }));
    callback(root2240); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1878;
    nodes1878 = node.contents();
    oldNodes.replaceWith(nodes1878);
  }));
  var nodes1880 = $("<span>");
  root2239.append(nodes1880);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2242 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(10, function(result__) {
                       var tmp1907 = result__;
                       var result__ = mobl.alert("Quadratic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1808 = mobl.ref(result__);
    
    var nodes1881 = $("<span>");
    root2242.append(nodes1881);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1808, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2243 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1882 = $("<span>");
      root2243.append(nodes1882);
      subs__.addSub((mobl.label)(mobl.ref("+Quadratic equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2244 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2244); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1882;
        nodes1882 = node.contents();
        oldNodes.replaceWith(nodes1882);
      }));
      callback(root2243); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1881;
      nodes1881 = node.contents();
      oldNodes.replaceWith(nodes1881);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(11, function(result__) {
                       var tmp1906 = result__;
                       var result__ = mobl.alert("Completing the Square Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1809 = mobl.ref(result__);
    
    var nodes1883 = $("<span>");
    root2242.append(nodes1883);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1809, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2245 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1884 = $("<span>");
      root2245.append(nodes1884);
      subs__.addSub((mobl.label)(mobl.ref("+Completing the square"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2246 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2246); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1884;
        nodes1884 = node.contents();
        oldNodes.replaceWith(nodes1884);
      }));
      callback(root2245); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1883;
      nodes1883 = node.contents();
      oldNodes.replaceWith(nodes1883);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(7, function(result__) {
                       var tmp1905 = result__;
                       var result__ = mobl.alert("Ineqalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1810 = mobl.ref(result__);
    
    var nodes1885 = $("<span>");
    root2242.append(nodes1885);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1810, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2247 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1886 = $("<span>");
      root2247.append(nodes1886);
      subs__.addSub((mobl.label)(mobl.ref("+Inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2248 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2248); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1886;
        nodes1886 = node.contents();
        oldNodes.replaceWith(nodes1886);
      }));
      callback(root2247); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1885;
      nodes1885 = node.contents();
      oldNodes.replaceWith(nodes1885);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(9, function(result__) {
                       var tmp1904 = result__;
                       var result__ = mobl.alert("Factor theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1811 = mobl.ref(result__);
    
    var nodes1887 = $("<span>");
    root2242.append(nodes1887);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1811, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2249 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1888 = $("<span>");
      root2249.append(nodes1888);
      subs__.addSub((mobl.label)(mobl.ref("+Factor theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2250 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2250); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1888;
        nodes1888 = node.contents();
        oldNodes.replaceWith(nodes1888);
      }));
      callback(root2249); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1887;
      nodes1887 = node.contents();
      oldNodes.replaceWith(nodes1887);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(1, function(result__) {
                       var tmp1903 = result__;
                       var result__ = mobl.alert("Partial fraction Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1812 = mobl.ref(result__);
    
    var nodes1889 = $("<span>");
    root2242.append(nodes1889);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1812, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2251 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1890 = $("<span>");
      root2251.append(nodes1890);
      subs__.addSub((mobl.label)(mobl.ref("+Partial fractions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2252 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2252); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1890;
        nodes1890 = node.contents();
        oldNodes.replaceWith(nodes1890);
      }));
      callback(root2251); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1889;
      nodes1889 = node.contents();
      oldNodes.replaceWith(nodes1889);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(30, function(result__) {
                       var tmp1902 = result__;
                       var result__ = mobl.alert("Powers Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1813 = mobl.ref(result__);
    
    var nodes1891 = $("<span>");
    root2242.append(nodes1891);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1813, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2253 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1892 = $("<span>");
      root2253.append(nodes1892);
      subs__.addSub((mobl.label)(mobl.ref("+Powers"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2254 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2254); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1892;
        nodes1892 = node.contents();
        oldNodes.replaceWith(nodes1892);
      }));
      callback(root2253); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1891;
      nodes1891 = node.contents();
      oldNodes.replaceWith(nodes1891);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(13, function(result__) {
                       var tmp1901 = result__;
                       var result__ = mobl.alert("Logarithm Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1814 = mobl.ref(result__);
    
    var nodes1893 = $("<span>");
    root2242.append(nodes1893);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1814, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2255 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1894 = $("<span>");
      root2255.append(nodes1894);
      subs__.addSub((mobl.label)(mobl.ref("+Logarithms"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2256 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2256); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1894;
        nodes1894 = node.contents();
        oldNodes.replaceWith(nodes1894);
      }));
      callback(root2255); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1893;
      nodes1893 = node.contents();
      oldNodes.replaceWith(nodes1893);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(17, function(result__) {
                       var tmp1900 = result__;
                       var result__ = mobl.alert("Trig equation Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1815 = mobl.ref(result__);
    
    var nodes1895 = $("<span>");
    root2242.append(nodes1895);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1815, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2257 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1896 = $("<span>");
      root2257.append(nodes1896);
      subs__.addSub((mobl.label)(mobl.ref("+Trig equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2258 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2258); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1896;
        nodes1896 = node.contents();
        oldNodes.replaceWith(nodes1896);
      }));
      callback(root2257); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1895;
      nodes1895 = node.contents();
      oldNodes.replaceWith(nodes1895);
    }));
    callback(root2242); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1880;
    nodes1880 = node.contents();
    oldNodes.replaceWith(nodes1880);
  }));
  callback(root2239); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root2259 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1897 = $("<span>");
  root2259.append(nodes1897);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2260 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1817 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1816 = mobl.ref(result__);
    
    var nodes1898 = $("<span>");
    root2260.append(nodes1898);
    subs__.addSub((ui.backButton)(tmp1816, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1817, function(_, callback) {
      var root2261 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2261); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1898;
      nodes1898 = node.contents();
      oldNodes.replaceWith(nodes1898);
    }));
    callback(root2260); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1897;
    nodes1897 = node.contents();
    oldNodes.replaceWith(nodes1897);
  }));
  var nodes1899 = $("<span>");
  root2259.append(nodes1899);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2262 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(24, function(result__) {
                       var tmp1912 = result__;
                       var result__ = mobl.alert("Modulus Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1818 = mobl.ref(result__);
    
    var nodes1900 = $("<span>");
    root2262.append(nodes1900);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1818, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2263 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1901 = $("<span>");
      root2263.append(nodes1901);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus function"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2264 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2264); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1901;
        nodes1901 = node.contents();
        oldNodes.replaceWith(nodes1901);
      }));
      callback(root2263); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1900;
      nodes1900 = node.contents();
      oldNodes.replaceWith(nodes1900);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(25, function(result__) {
                       var tmp1911 = result__;
                       var result__ = mobl.alert("Transformations of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1819 = mobl.ref(result__);
    
    var nodes1902 = $("<span>");
    root2262.append(nodes1902);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1819, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2265 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1903 = $("<span>");
      root2265.append(nodes1903);
      subs__.addSub((mobl.label)(mobl.ref("+Transformations of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2266 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2266); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1903;
        nodes1903 = node.contents();
        oldNodes.replaceWith(nodes1903);
      }));
      callback(root2265); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1902;
      nodes1902 = node.contents();
      oldNodes.replaceWith(nodes1902);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(26, function(result__) {
                       var tmp1910 = result__;
                       var result__ = mobl.alert("Composition of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1820 = mobl.ref(result__);
    
    var nodes1904 = $("<span>");
    root2262.append(nodes1904);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1820, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2267 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1905 = $("<span>");
      root2267.append(nodes1905);
      subs__.addSub((mobl.label)(mobl.ref("+Composition of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2268 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2268); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1905;
        nodes1905 = node.contents();
        oldNodes.replaceWith(nodes1905);
      }));
      callback(root2267); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1904;
      nodes1904 = node.contents();
      oldNodes.replaceWith(nodes1904);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(270, function(result__) {
                       var tmp1909 = result__;
                       var result__ = mobl.alert("Implicit functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1821 = mobl.ref(result__);
    
    var nodes1906 = $("<span>");
    root2262.append(nodes1906);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1821, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2269 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1907 = $("<span>");
      root2269.append(nodes1907);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2270 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2270); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1907;
        nodes1907 = node.contents();
        oldNodes.replaceWith(nodes1907);
      }));
      callback(root2269); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1906;
      nodes1906 = node.contents();
      oldNodes.replaceWith(nodes1906);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(27, function(result__) {
                       var tmp1908 = result__;
                       var result__ = mobl.alert("Parametric functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1822 = mobl.ref(result__);
    
    var nodes1908 = $("<span>");
    root2262.append(nodes1908);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1822, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2271 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1909 = $("<span>");
      root2271.append(nodes1909);
      subs__.addSub((mobl.label)(mobl.ref("+Parametric functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2272 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2272); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1909;
        nodes1909 = node.contents();
        oldNodes.replaceWith(nodes1909);
      }));
      callback(root2271); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1908;
      nodes1908 = node.contents();
      oldNodes.replaceWith(nodes1908);
    }));
    callback(root2262); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1899;
    nodes1899 = node.contents();
    oldNodes.replaceWith(nodes1899);
  }));
  callback(root2259); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root2273 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1910 = $("<span>");
  root2273.append(nodes1910);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2274 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1824 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1823 = mobl.ref(result__);
    
    var nodes1911 = $("<span>");
    root2274.append(nodes1911);
    subs__.addSub((ui.backButton)(tmp1823, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1824, function(_, callback) {
      var root2275 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2275); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1911;
      nodes1911 = node.contents();
      oldNodes.replaceWith(nodes1911);
    }));
    callback(root2274); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1910;
    nodes1910 = node.contents();
    oldNodes.replaceWith(nodes1910);
  }));
  var nodes1912 = $("<span>");
  root2273.append(nodes1912);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2276 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(15, function(result__) {
                       var tmp1915 = result__;
                       var result__ = mobl.alert("Triangles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1825 = mobl.ref(result__);
    
    var nodes1913 = $("<span>");
    root2276.append(nodes1913);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1825, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2277 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1914 = $("<span>");
      root2277.append(nodes1914);
      subs__.addSub((mobl.label)(mobl.ref("+Triangles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2278 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2278); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1914;
        nodes1914 = node.contents();
        oldNodes.replaceWith(nodes1914);
      }));
      callback(root2277); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1913;
      nodes1913 = node.contents();
      oldNodes.replaceWith(nodes1913);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(16, function(result__) {
                       var tmp1914 = result__;
                       var result__ = mobl.alert("Circles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1826 = mobl.ref(result__);
    
    var nodes1915 = $("<span>");
    root2276.append(nodes1915);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1826, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2279 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1916 = $("<span>");
      root2279.append(nodes1916);
      subs__.addSub((mobl.label)(mobl.ref("+Circles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2280 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2280); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1916;
        nodes1916 = node.contents();
        oldNodes.replaceWith(nodes1916);
      }));
      callback(root2279); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1915;
      nodes1915 = node.contents();
      oldNodes.replaceWith(nodes1915);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(6, function(result__) {
                       var tmp1913 = result__;
                       var result__ = mobl.alert("3D lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1827 = mobl.ref(result__);
    
    var nodes1917 = $("<span>");
    root2276.append(nodes1917);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1827, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2281 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1918 = $("<span>");
      root2281.append(nodes1918);
      subs__.addSub((mobl.label)(mobl.ref("+ 3D lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2282 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2282); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1918;
        nodes1918 = node.contents();
        oldNodes.replaceWith(nodes1918);
      }));
      callback(root2281); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1917;
      nodes1917 = node.contents();
      oldNodes.replaceWith(nodes1917);
    }));
    callback(root2276); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1912;
    nodes1912 = node.contents();
    oldNodes.replaceWith(nodes1912);
  }));
  callback(root2273); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root2283 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1919 = $("<span>");
  root2283.append(nodes1919);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2284 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1829 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1828 = mobl.ref(result__);
    
    var nodes1920 = $("<span>");
    root2284.append(nodes1920);
    subs__.addSub((ui.backButton)(tmp1828, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1829, function(_, callback) {
      var root2285 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2285); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1920;
      nodes1920 = node.contents();
      oldNodes.replaceWith(nodes1920);
    }));
    callback(root2284); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1919;
    nodes1919 = node.contents();
    oldNodes.replaceWith(nodes1919);
  }));
  var nodes1921 = $("<span>");
  root2283.append(nodes1921);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2286 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(8, function(result__) {
                       var tmp1919 = result__;
                       var result__ = mobl.alert("Arithmetic Progressions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1830 = mobl.ref(result__);
    
    var nodes1922 = $("<span>");
    root2286.append(nodes1922);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1830, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2287 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1923 = $("<span>");
      root2287.append(nodes1923);
      subs__.addSub((mobl.label)(mobl.ref("+Arithmetic progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2288 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2288); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1923;
        nodes1923 = node.contents();
        oldNodes.replaceWith(nodes1923);
      }));
      callback(root2287); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1922;
      nodes1922 = node.contents();
      oldNodes.replaceWith(nodes1922);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(12, function(result__) {
                       var tmp1918 = result__;
                       var result__ = mobl.alert("Binomial Expansion Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1831 = mobl.ref(result__);
    
    var nodes1924 = $("<span>");
    root2286.append(nodes1924);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1831, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2289 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1925 = $("<span>");
      root2289.append(nodes1925);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial expansion"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2290 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2290); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1925;
        nodes1925 = node.contents();
        oldNodes.replaceWith(nodes1925);
      }));
      callback(root2289); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1924;
      nodes1924 = node.contents();
      oldNodes.replaceWith(nodes1924);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(23, function(result__) {
                       var tmp1917 = result__;
                       var result__ = mobl.alert("Geometric Progression Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1832 = mobl.ref(result__);
    
    var nodes1926 = $("<span>");
    root2286.append(nodes1926);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1832, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2291 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1927 = $("<span>");
      root2291.append(nodes1927);
      subs__.addSub((mobl.label)(mobl.ref("+Geometric progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2292 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2292); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1927;
        nodes1927 = node.contents();
        oldNodes.replaceWith(nodes1927);
      }));
      callback(root2291); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1926;
      nodes1926 = node.contents();
      oldNodes.replaceWith(nodes1926);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(2, function(result__) {
                       var tmp1916 = result__;
                       var result__ = mobl.alert("Binomial theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1833 = mobl.ref(result__);
    
    var nodes1928 = $("<span>");
    root2286.append(nodes1928);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1833, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2293 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1929 = $("<span>");
      root2293.append(nodes1929);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2294 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2294); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1929;
        nodes1929 = node.contents();
        oldNodes.replaceWith(nodes1929);
      }));
      callback(root2293); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1928;
      nodes1928 = node.contents();
      oldNodes.replaceWith(nodes1928);
    }));
    callback(root2286); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1921;
    nodes1921 = node.contents();
    oldNodes.replaceWith(nodes1921);
  }));
  callback(root2283); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root2295 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1930 = $("<span>");
  root2295.append(nodes1930);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2296 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1835 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1834 = mobl.ref(result__);
    
    var nodes1931 = $("<span>");
    root2296.append(nodes1931);
    subs__.addSub((ui.backButton)(tmp1834, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1835, function(_, callback) {
      var root2297 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2297); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1931;
      nodes1931 = node.contents();
      oldNodes.replaceWith(nodes1931);
    }));
    callback(root2296); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1930;
    nodes1930 = node.contents();
    oldNodes.replaceWith(nodes1930);
  }));
  var nodes1932 = $("<span>");
  root2295.append(nodes1932);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2298 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(5, function(result__) {
                       var tmp1921 = result__;
                       var result__ = mobl.alert("Scalar product Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1836 = mobl.ref(result__);
    
    var nodes1933 = $("<span>");
    root2298.append(nodes1933);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1836, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2299 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1934 = $("<span>");
      root2299.append(nodes1934);
      subs__.addSub((mobl.label)(mobl.ref("+Scalar products"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2300 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2300); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1934;
        nodes1934 = node.contents();
        oldNodes.replaceWith(nodes1934);
      }));
      callback(root2299); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1933;
      nodes1933 = node.contents();
      oldNodes.replaceWith(nodes1933);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(18, function(result__) {
                       var tmp1920 = result__;
                       var result__ = mobl.alert("Vector equation of lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1837 = mobl.ref(result__);
    
    var nodes1935 = $("<span>");
    root2298.append(nodes1935);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1837, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2301 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1936 = $("<span>");
      root2301.append(nodes1936);
      subs__.addSub((mobl.label)(mobl.ref("+Vector equation of lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2302 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2302); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1936;
        nodes1936 = node.contents();
        oldNodes.replaceWith(nodes1936);
      }));
      callback(root2301); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1935;
      nodes1935 = node.contents();
      oldNodes.replaceWith(nodes1935);
    }));
    callback(root2298); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1932;
    nodes1932 = node.contents();
    oldNodes.replaceWith(nodes1932);
  }));
  callback(root2295); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root2303 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1937 = $("<span>");
  root2303.append(nodes1937);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2304 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1839 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1838 = mobl.ref(result__);
    
    var nodes1938 = $("<span>");
    root2304.append(nodes1938);
    subs__.addSub((ui.backButton)(tmp1838, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1839, function(_, callback) {
      var root2305 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2305); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1938;
      nodes1938 = node.contents();
      oldNodes.replaceWith(nodes1938);
    }));
    callback(root2304); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1937;
    nodes1937 = node.contents();
    oldNodes.replaceWith(nodes1937);
  }));
  var nodes1939 = $("<span>");
  root2303.append(nodes1939);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2306 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(14, function(result__) {
                       var tmp1926 = result__;
                       var result__ = mobl.alert("Stationary points Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1840 = mobl.ref(result__);
    
    var nodes1940 = $("<span>");
    root2306.append(nodes1940);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1840, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2307 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1941 = $("<span>");
      root2307.append(nodes1941);
      subs__.addSub((mobl.label)(mobl.ref("+Stationary points"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2308 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2308); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1941;
        nodes1941 = node.contents();
        oldNodes.replaceWith(nodes1941);
      }));
      callback(root2307); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1940;
      nodes1940 = node.contents();
      oldNodes.replaceWith(nodes1940);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(20, function(result__) {
                       var tmp1925 = result__;
                       var result__ = mobl.alert("Chain rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1841 = mobl.ref(result__);
    
    var nodes1942 = $("<span>");
    root2306.append(nodes1942);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1841, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2309 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1943 = $("<span>");
      root2309.append(nodes1943);
      subs__.addSub((mobl.label)(mobl.ref("+Chain rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2310 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2310); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1943;
        nodes1943 = node.contents();
        oldNodes.replaceWith(nodes1943);
      }));
      callback(root2309); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1942;
      nodes1942 = node.contents();
      oldNodes.replaceWith(nodes1942);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(21, function(result__) {
                       var tmp1924 = result__;
                       var result__ = mobl.alert("Product rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1842 = mobl.ref(result__);
    
    var nodes1944 = $("<span>");
    root2306.append(nodes1944);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1842, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2311 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1945 = $("<span>");
      root2311.append(nodes1945);
      subs__.addSub((mobl.label)(mobl.ref("+Product rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2312 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2312); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1945;
        nodes1945 = node.contents();
        oldNodes.replaceWith(nodes1945);
      }));
      callback(root2311); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1944;
      nodes1944 = node.contents();
      oldNodes.replaceWith(nodes1944);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(22, function(result__) {
                       var tmp1923 = result__;
                       var result__ = mobl.alert("Quotient rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1843 = mobl.ref(result__);
    
    var nodes1946 = $("<span>");
    root2306.append(nodes1946);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1843, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2313 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1947 = $("<span>");
      root2313.append(nodes1947);
      subs__.addSub((mobl.label)(mobl.ref("+Quotient rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2314 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2314); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1947;
        nodes1947 = node.contents();
        oldNodes.replaceWith(nodes1947);
      }));
      callback(root2313); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1946;
      nodes1946 = node.contents();
      oldNodes.replaceWith(nodes1946);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(19, function(result__) {
                       var tmp1922 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1844 = mobl.ref(result__);
    
    var nodes1948 = $("<span>");
    root2306.append(nodes1948);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1844, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2315 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1949 = $("<span>");
      root2315.append(nodes1949);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2316 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2316); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1949;
        nodes1949 = node.contents();
        oldNodes.replaceWith(nodes1949);
      }));
      callback(root2315); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1948;
      nodes1948 = node.contents();
      oldNodes.replaceWith(nodes1948);
    }));
    callback(root2306); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1939;
    nodes1939 = node.contents();
    oldNodes.replaceWith(nodes1939);
  }));
  callback(root2303); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root2317 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1950 = $("<span>");
  root2317.append(nodes1950);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2318 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1846 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1845 = mobl.ref(result__);
    
    var nodes1951 = $("<span>");
    root2318.append(nodes1951);
    subs__.addSub((ui.backButton)(tmp1845, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1846, function(_, callback) {
      var root2319 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2319); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1951;
      nodes1951 = node.contents();
      oldNodes.replaceWith(nodes1951);
    }));
    callback(root2318); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1950;
    nodes1950 = node.contents();
    oldNodes.replaceWith(nodes1950);
  }));
  var nodes1952 = $("<span>");
  root2317.append(nodes1952);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2320 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(28, function(result__) {
                       var tmp1929 = result__;
                       var result__ = mobl.alert("Integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1847 = mobl.ref(result__);
    
    var nodes1953 = $("<span>");
    root2320.append(nodes1953);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1847, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2321 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1954 = $("<span>");
      root2321.append(nodes1954);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2322 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2322); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1954;
        nodes1954 = node.contents();
        oldNodes.replaceWith(nodes1954);
      }));
      callback(root2321); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1953;
      nodes1953 = node.contents();
      oldNodes.replaceWith(nodes1953);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(3, function(result__) {
                       var tmp1928 = result__;
                       var result__ = mobl.alert("Polynomial integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1848 = mobl.ref(result__);
    
    var nodes1955 = $("<span>");
    root2320.append(nodes1955);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1848, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2323 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1956 = $("<span>");
      root2323.append(nodes1956);
      subs__.addSub((mobl.label)(mobl.ref("+Polynomial integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2324 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2324); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1956;
        nodes1956 = node.contents();
        oldNodes.replaceWith(nodes1956);
      }));
      callback(root2323); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1955;
      nodes1955 = node.contents();
      oldNodes.replaceWith(nodes1955);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(4, function(result__) {
                       var tmp1927 = result__;
                       var result__ = mobl.alert("Trig integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1849 = mobl.ref(result__);
    
    var nodes1957 = $("<span>");
    root2320.append(nodes1957);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1849, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2325 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1958 = $("<span>");
      root2325.append(nodes1958);
      subs__.addSub((mobl.label)(mobl.ref("+Trig integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2326 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2326); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1958;
        nodes1958 = node.contents();
        oldNodes.replaceWith(nodes1958);
      }));
      callback(root2325); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1957;
      nodes1957 = node.contents();
      oldNodes.replaceWith(nodes1957);
    }));
    callback(root2320); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1952;
    nodes1952 = node.contents();
    oldNodes.replaceWith(nodes1952);
  }));
  callback(root2317); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root2327 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1959 = $("<span>");
  root2327.append(nodes1959);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2328 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1851 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1850 = mobl.ref(result__);
    
    var nodes1960 = $("<span>");
    root2328.append(nodes1960);
    subs__.addSub((ui.backButton)(tmp1850, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1851, function(_, callback) {
      var root2329 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2329); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1960;
      nodes1960 = node.contents();
      oldNodes.replaceWith(nodes1960);
    }));
    callback(root2328); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1959;
    nodes1959 = node.contents();
    oldNodes.replaceWith(nodes1959);
  }));
  var nodes1961 = $("<span>");
  root2327.append(nodes1961);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2330 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(29, function(result__) {
                       var tmp1930 = result__;
                       var result__ = mobl.alert("Differential equations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1852 = mobl.ref(result__);
    
    var nodes1962 = $("<span>");
    root2330.append(nodes1962);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1852, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2331 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1963 = $("<span>");
      root2331.append(nodes1963);
      subs__.addSub((mobl.label)(mobl.ref("+Diff equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2332 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2332); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1963;
        nodes1963 = node.contents();
        oldNodes.replaceWith(nodes1963);
      }));
      callback(root2331); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1962;
      nodes1962 = node.contents();
      oldNodes.replaceWith(nodes1962);
    }));
    callback(root2330); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1961;
    nodes1961 = node.contents();
    oldNodes.replaceWith(nodes1961);
  }));
  callback(root2327); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root2333 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1964 = $("<span>");
  root2333.append(nodes1964);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2334 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F1", function(result__) {
                       var tmp1943 = result__;
                       var result__ = mobl.alert("Complex arithmetic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1853 = mobl.ref(result__);
    
    var nodes1965 = $("<span>");
    root2334.append(nodes1965);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1853, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2335 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1966 = $("<span>");
      root2335.append(nodes1966);
      subs__.addSub((mobl.label)(mobl.ref("+Complex arithmetic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2336 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2336); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1966;
        nodes1966 = node.contents();
        oldNodes.replaceWith(nodes1966);
      }));
      callback(root2335); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1965;
      nodes1965 = node.contents();
      oldNodes.replaceWith(nodes1965);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F2", function(result__) {
                       var tmp1942 = result__;
                       var result__ = mobl.alert("Modulus argument Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1854 = mobl.ref(result__);
    
    var nodes1967 = $("<span>");
    root2334.append(nodes1967);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1854, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2337 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1968 = $("<span>");
      root2337.append(nodes1968);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus argument"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2338 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2338); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1968;
        nodes1968 = node.contents();
        oldNodes.replaceWith(nodes1968);
      }));
      callback(root2337); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1967;
      nodes1967 = node.contents();
      oldNodes.replaceWith(nodes1967);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F3a", function(result__) {
                       var tmp1941 = result__;
                       var result__ = mobl.alert("2nd order DE Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1855 = mobl.ref(result__);
    
    var nodes1969 = $("<span>");
    root2334.append(nodes1969);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1855, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2339 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1970 = $("<span>");
      root2339.append(nodes1970);
      subs__.addSub((mobl.label)(mobl.ref("+2nd order DEs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2340 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2340); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1970;
        nodes1970 = node.contents();
        oldNodes.replaceWith(nodes1970);
      }));
      callback(root2339); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1969;
      nodes1969 = node.contents();
      oldNodes.replaceWith(nodes1969);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F4", function(result__) {
                       var tmp1940 = result__;
                       var result__ = mobl.alert("Rank 2 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1856 = mobl.ref(result__);
    
    var nodes1971 = $("<span>");
    root2334.append(nodes1971);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1856, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2341 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1972 = $("<span>");
      root2341.append(nodes1972);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 2 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2342 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2342); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1972;
        nodes1972 = node.contents();
        oldNodes.replaceWith(nodes1972);
      }));
      callback(root2341); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1971;
      nodes1971 = node.contents();
      oldNodes.replaceWith(nodes1971);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F5", function(result__) {
                       var tmp1939 = result__;
                       var result__ = mobl.alert("Taylor Series Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1857 = mobl.ref(result__);
    
    var nodes1973 = $("<span>");
    root2334.append(nodes1973);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1857, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2343 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1974 = $("<span>");
      root2343.append(nodes1974);
      subs__.addSub((mobl.label)(mobl.ref("+Taylor Series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2344 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2344); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1974;
        nodes1974 = node.contents();
        oldNodes.replaceWith(nodes1974);
      }));
      callback(root2343); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1973;
      nodes1973 = node.contents();
      oldNodes.replaceWith(nodes1973);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F6", function(result__) {
                       var tmp1938 = result__;
                       var result__ = mobl.alert("Polar Coordinates Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1858 = mobl.ref(result__);
    
    var nodes1975 = $("<span>");
    root2334.append(nodes1975);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1858, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2345 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1976 = $("<span>");
      root2345.append(nodes1976);
      subs__.addSub((mobl.label)(mobl.ref("+Polar Coordinates"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2346 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2346); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1976;
        nodes1976 = node.contents();
        oldNodes.replaceWith(nodes1976);
      }));
      callback(root2345); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1975;
      nodes1975 = node.contents();
      oldNodes.replaceWith(nodes1975);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F7", function(result__) {
                       var tmp1937 = result__;
                       var result__ = mobl.alert("Rank 3 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1859 = mobl.ref(result__);
    
    var nodes1977 = $("<span>");
    root2334.append(nodes1977);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1859, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2347 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1978 = $("<span>");
      root2347.append(nodes1978);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 3 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2348 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2348); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1978;
        nodes1978 = node.contents();
        oldNodes.replaceWith(nodes1978);
      }));
      callback(root2347); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1977;
      nodes1977 = node.contents();
      oldNodes.replaceWith(nodes1977);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F8", function(result__) {
                       var tmp1936 = result__;
                       var result__ = mobl.alert("Further vectors added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1860 = mobl.ref(result__);
    
    var nodes1979 = $("<span>");
    root2334.append(nodes1979);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1860, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2349 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1980 = $("<span>");
      root2349.append(nodes1980);
      subs__.addSub((mobl.label)(mobl.ref("+Further vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2350 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2350); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1980;
        nodes1980 = node.contents();
        oldNodes.replaceWith(nodes1980);
      }));
      callback(root2349); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1979;
      nodes1979 = node.contents();
      oldNodes.replaceWith(nodes1979);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F9", function(result__) {
                       var tmp1935 = result__;
                       var result__ = mobl.alert("Newton-Raphson added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1861 = mobl.ref(result__);
    
    var nodes1981 = $("<span>");
    root2334.append(nodes1981);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1861, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2351 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1982 = $("<span>");
      root2351.append(nodes1982);
      subs__.addSub((mobl.label)(mobl.ref("+Newton-Raphson"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2352 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2352); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1982;
        nodes1982 = node.contents();
        oldNodes.replaceWith(nodes1982);
      }));
      callback(root2351); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1981;
      nodes1981 = node.contents();
      oldNodes.replaceWith(nodes1981);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F10", function(result__) {
                       var tmp1934 = result__;
                       var result__ = mobl.alert("Further inequalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1862 = mobl.ref(result__);
    
    var nodes1983 = $("<span>");
    root2334.append(nodes1983);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1862, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2353 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1984 = $("<span>");
      root2353.append(nodes1984);
      subs__.addSub((mobl.label)(mobl.ref("+Further inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2354 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2354); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1984;
        nodes1984 = node.contents();
        oldNodes.replaceWith(nodes1984);
      }));
      callback(root2353); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1983;
      nodes1983 = node.contents();
      oldNodes.replaceWith(nodes1983);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F11", function(result__) {
                       var tmp1933 = result__;
                       var result__ = mobl.alert("Integration by substitution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1863 = mobl.ref(result__);
    
    var nodes1985 = $("<span>");
    root2334.append(nodes1985);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1863, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2355 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1986 = $("<span>");
      root2355.append(nodes1986);
      subs__.addSub((mobl.label)(mobl.ref("+Integration by substitution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2356 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2356); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1986;
        nodes1986 = node.contents();
        oldNodes.replaceWith(nodes1986);
      }));
      callback(root2355); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1985;
      nodes1985 = node.contents();
      oldNodes.replaceWith(nodes1985);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F12", function(result__) {
                       var tmp1932 = result__;
                       var result__ = mobl.alert("Figures of revolution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1864 = mobl.ref(result__);
    
    var nodes1987 = $("<span>");
    root2334.append(nodes1987);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1864, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2357 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1988 = $("<span>");
      root2357.append(nodes1988);
      subs__.addSub((mobl.label)(mobl.ref("+Figures of revolution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2358 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2358); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1988;
        nodes1988 = node.contents();
        oldNodes.replaceWith(nodes1988);
      }));
      callback(root2357); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1987;
      nodes1987 = node.contents();
      oldNodes.replaceWith(nodes1987);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F13", function(result__) {
                       var tmp1931 = result__;
                       var result__ = mobl.alert("Matrix transformations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1865 = mobl.ref(result__);
    
    var nodes1989 = $("<span>");
    root2334.append(nodes1989);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1865, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2359 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1990 = $("<span>");
      root2359.append(nodes1990);
      subs__.addSub((mobl.label)(mobl.ref("+Matrix transformations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2360 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2360); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1990;
        nodes1990 = node.contents();
        oldNodes.replaceWith(nodes1990);
      }));
      callback(root2359); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1989;
      nodes1989 = node.contents();
      oldNodes.replaceWith(nodes1989);
    }));
    callback(root2334); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1964;
    nodes1964 = node.contents();
    oldNodes.replaceWith(nodes1964);
  }));
  callback(root2333); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root2361 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1991 = $("<span>");
  root2361.append(nodes1991);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2362 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S1", function(result__) {
                       var tmp1949 = result__;
                       var result__ = mobl.alert("Discrete Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1866 = mobl.ref(result__);
    
    var nodes1992 = $("<span>");
    root2362.append(nodes1992);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1866, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2363 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1993 = $("<span>");
      root2363.append(nodes1993);
      subs__.addSub((mobl.label)(mobl.ref("+Discrete Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2364 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2364); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1993;
        nodes1993 = node.contents();
        oldNodes.replaceWith(nodes1993);
      }));
      callback(root2363); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1992;
      nodes1992 = node.contents();
      oldNodes.replaceWith(nodes1992);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S2", function(result__) {
                       var tmp1948 = result__;
                       var result__ = mobl.alert("Continuous Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1867 = mobl.ref(result__);
    
    var nodes1994 = $("<span>");
    root2362.append(nodes1994);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1867, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2365 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1995 = $("<span>");
      root2365.append(nodes1995);
      subs__.addSub((mobl.label)(mobl.ref("+Continuous Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2366 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2366); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1995;
        nodes1995 = node.contents();
        oldNodes.replaceWith(nodes1995);
      }));
      callback(root2365); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1994;
      nodes1994 = node.contents();
      oldNodes.replaceWith(nodes1994);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S3", function(result__) {
                       var tmp1947 = result__;
                       var result__ = mobl.alert("Hypothesis Testing Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1868 = mobl.ref(result__);
    
    var nodes1996 = $("<span>");
    root2362.append(nodes1996);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1868, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2367 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1997 = $("<span>");
      root2367.append(nodes1997);
      subs__.addSub((mobl.label)(mobl.ref("+Hypothesis Testing"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2368 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2368); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1997;
        nodes1997 = node.contents();
        oldNodes.replaceWith(nodes1997);
      }));
      callback(root2367); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1996;
      nodes1996 = node.contents();
      oldNodes.replaceWith(nodes1996);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S4", function(result__) {
                       var tmp1946 = result__;
                       var result__ = mobl.alert("Confidence Intervals Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1869 = mobl.ref(result__);
    
    var nodes1998 = $("<span>");
    root2362.append(nodes1998);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1869, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2369 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1999 = $("<span>");
      root2369.append(nodes1999);
      subs__.addSub((mobl.label)(mobl.ref("+Confidence Intervals"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2370 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2370); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1999;
        nodes1999 = node.contents();
        oldNodes.replaceWith(nodes1999);
      }));
      callback(root2369); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1998;
      nodes1998 = node.contents();
      oldNodes.replaceWith(nodes1998);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S5", function(result__) {
                       var tmp1945 = result__;
                       var result__ = mobl.alert("Chi Squared Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1870 = mobl.ref(result__);
    
    var nodes2000 = $("<span>");
    root2362.append(nodes2000);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1870, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2371 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2001 = $("<span>");
      root2371.append(nodes2001);
      subs__.addSub((mobl.label)(mobl.ref("+Chi Squared"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2372 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2372); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2001;
        nodes2001 = node.contents();
        oldNodes.replaceWith(nodes2001);
      }));
      callback(root2371); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2000;
      nodes2000 = node.contents();
      oldNodes.replaceWith(nodes2000);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S6", function(result__) {
                       var tmp1944 = result__;
                       var result__ = mobl.alert("Product Moment Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1871 = mobl.ref(result__);
    
    var nodes2002 = $("<span>");
    root2362.append(nodes2002);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1871, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2373 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2003 = $("<span>");
      root2373.append(nodes2003);
      subs__.addSub((mobl.label)(mobl.ref("+Product Moments"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2374 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2374); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2003;
        nodes2003 = node.contents();
        oldNodes.replaceWith(nodes2003);
      }));
      callback(root2373); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2002;
      nodes2002 = node.contents();
      oldNodes.replaceWith(nodes2002);
    }));
    callback(root2362); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1991;
    nodes1991 = node.contents();
    oldNodes.replaceWith(nodes1991);
  }));
  callback(root2361); return subs__;
  
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
  var root2375 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node392 = $("<div>");
  
  var ref396 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref396.get() !== null) {
    node392.attr('class', ref396.get());
    subs__.addSub(ref396.addEventListener('change', function(_, ref, val) {
      node392.attr('class', val);
    }));
    
  }
  subs__.addSub(ref396.rebind());
  
  var val183 = onclick.get();
  if(val183 !== null) {
    subs__.addSub(mobl.domBind(node392, 'tap', val183));
  }
  
  
  var node393 = $("<div>");
  
  var ref395 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref395.get() !== null) {
    node393.attr('class', ref395.get());
    subs__.addSub(ref395.addEventListener('change', function(_, ref, val) {
      node393.attr('class', val);
    }));
    
  }
  subs__.addSub(ref395.rebind());
  
  
  var node394 = $("<div>");
  
  var ref393 = text;
  node394.text(""+ref393.get());
  var ignore70 = false;
  subs__.addSub(ref393.addEventListener('change', function(_, ref, val) {
    if(ignore70) return;
    node394.text(""+val);
  }));
  subs__.addSub(ref393.rebind());
  
  
  var ref394 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref394.get() !== null) {
    node394.attr('class', ref394.get());
    subs__.addSub(ref394.addEventListener('change', function(_, ref, val) {
      node394.attr('class', val);
    }));
    
  }
  subs__.addSub(ref394.rebind());
  
  node393.append(node394);
  node392.append(node393);
  var nodes2004 = $("<span>");
  node392.append(nodes2004);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl158();
  }));
  
  function renderControl158() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2376 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2376); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2004;
      nodes2004 = node.contents();
      oldNodes.replaceWith(nodes2004);
    }));
  }
  renderControl158();
  root2375.append(node392);
  callback(root2375); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mathJAX.renderMaths(function(result__) {
    var tmp1950 = result__;
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
  var root2377 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   var result__ = mobl.$("span").remove(".MathJax_Preview");
                   var result__ = mobl.$("script").remove("#MathJax-Element-*");
                   var result__ = qa.get().answer != "%GRAPH%";
                   if(result__) {
                     var result__ = mobl.$("#answer-block-" + number.get()).children("span:first").html();
                     qa.get().answer = result__;
                     if(callback && callback.apply) callback(); return;
                   } else {
                     {
                       if(callback && callback.apply) callback(); return;
                     }
                   }
                 };
  var tmp1875 = mobl.ref(result__);
  
  var result__ = qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle;
  var tmp1874 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    tmp1874.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.agreeStyle).addEventListener('change', function() {
    tmp1874.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  subs__.addSub(mobl.ref(nrichRPG.coreWorkout.disagreeStyle).addEventListener('change', function() {
    tmp1874.set(qa.get().correct ? nrichRPG.coreWorkout.agreeStyle : nrichRPG.coreWorkout.disagreeStyle);
  }));
  
  var nodes2005 = $("<span>");
  root2377.append(nodes2005);
  subs__.addSub((mobl.block)(tmp1874, mobl.ref(null), tmp1875, mobl.ref(null), function(_, callback) {
    var root2378 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = "A" + number.get() + ". ";
    var tmp1872 = mobl.ref(result__);
    subs__.addSub(number.addEventListener('change', function() {
      tmp1872.set("A" + number.get() + ". ");
    }));
    
    var nodes2006 = $("<span>");
    root2378.append(nodes2006);
    subs__.addSub((mobl.label)(tmp1872, mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root2379 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2379); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2006;
      nodes2006 = node.contents();
      oldNodes.replaceWith(nodes2006);
    }));
    var result__ = qa.get().answer != "%GRAPH%";
    var tmp1873 = mobl.ref(result__);
    subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
      tmp1873.set(qa.get().answer != "%GRAPH%");
    }));
    
    
    var node395 = $("<span>");
    root2378.append(node395);
    var condSubs86 = new mobl.CompSubscription();
    subs__.addSub(condSubs86);
    var oldValue86;
    var renderCond86 = function() {
      var value210 = tmp1873.get();
      if(oldValue86 === value210) return;
      oldValue86 = value210;
      var subs__ = condSubs86;
      subs__.unsubscribe();
      node395.empty();
      if(value210) {
        
        var node396 = $("<span>");
        
        var ref397 = mobl.ref("answer-block-" + number.get());
        if(ref397.get() !== null) {
          node396.attr('id', ref397.get());
          subs__.addSub(ref397.addEventListener('change', function(_, ref, val) {
            node396.attr('id', val);
          }));
          subs__.addSub(number.addEventListener('change', function() {
            node396.attr('id', "answer-block-" + number.get());
          }));
          
        }
        subs__.addSub(ref397.rebind());
        
        var nodes2007 = $("<span>");
        node396.append(nodes2007);
        subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
          var root2380 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2380); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2007;
          nodes2007 = node.contents();
          oldNodes.replaceWith(nodes2007);
        }));
        node395.append(node396);
        
        
        
      } else {
        var nodes2008 = $("<span>");
        node395.append(nodes2008);
        subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
          var root2381 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2381); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2008;
          nodes2008 = node.contents();
          oldNodes.replaceWith(nodes2008);
        }));
        
        
      }
    };
    renderCond86();
    subs__.addSub(tmp1873.addEventListener('change', function() {
      renderCond86();
    }));
    
    callback(root2378); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2005;
    nodes2005 = node.contents();
    oldNodes.replaceWith(nodes2005);
  }));
  var nodes2009 = $("<span>");
  root2377.append(nodes2009);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root2382 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node397 = $("<span>");
    node397.attr('style', "display:none");
    
    nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
      var tmp1952 = result__;
      var tmp1876 = mobl.ref(result__);
      subs__.addSub(qa.addEventListener('change', function() {
        nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
          var tmp1951 = result__;
          var result__ = tmp1951;
          tmp1876.set(result__);
          
        });
      }));
      
      var nodes2013 = $("<span>");
      node397.append(nodes2013);
      subs__.addSub((mobl.html)(tmp1876, function(_, callback) {
        var root2386 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2386); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2013;
        nodes2013 = node.contents();
        oldNodes.replaceWith(nodes2013);
      }));
      root2382.append(node397);
      var nodes2010 = $("<span>");
      root2382.append(nodes2010);
      subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2383 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2383); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2010;
        nodes2010 = node.contents();
        oldNodes.replaceWith(nodes2010);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = true;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp1877 = mobl.ref(result__);
      
      var nodes2011 = $("<span>");
      root2382.append(nodes2011);
      subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp1877, function(_, callback) {
        var root2384 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2384); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2011;
        nodes2011 = node.contents();
        oldNodes.replaceWith(nodes2011);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = false;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp1878 = mobl.ref(result__);
      
      var nodes2012 = $("<span>");
      root2382.append(nodes2012);
      subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp1878, function(_, callback) {
        var root2385 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2385); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2012;
        nodes2012 = node.contents();
        oldNodes.replaceWith(nodes2012);
      }));
      callback(root2382); return subs__;
      
      
      
      
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2009;
    nodes2009 = node.contents();
    oldNodes.replaceWith(nodes2009);
  }));
  callback(root2377); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp1953 = result__;
    var result__ = tmp1953;
    var qa2 = result__;
    var result__ = qa2 == null;
    if(result__) {
      nrichRPG.questionAnswer.QA.all().one(function(result__) {
        var tmp1954 = result__;
        var result__ = tmp1954;
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
  var root2387 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp1962 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp1880 = mobl.ref(result__);
  
  var nodes2014 = $("<span>");
  root2387.append(nodes2014);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(mobl.ref(qa, 'topic'), tmp1880, function(_, callback) {
    var root2388 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp1955 = result__;
                       var result__ = tmp1955;
                       var qa2 = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp1956 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp1879 = mobl.ref(result__);
    
    var nodes2015 = $("<span>");
    root2388.append(nodes2015);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp1879, function(_, callback) {
      var root2389 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2389); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2015;
      nodes2015 = node.contents();
      oldNodes.replaceWith(nodes2015);
    }));
    callback(root2388); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2014;
    nodes2014 = node.contents();
    oldNodes.replaceWith(nodes2014);
  }));
  var nodes2016 = $("<span>");
  root2387.append(nodes2016);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2390 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp1961 = result__;
                       var result__ = mobl.$("#question-block-" + number.get()).children("span:first").html();
                       qa.get().question = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1883 = mobl.ref(result__);
    
    var nodes2017 = $("<span>");
    root2390.append(nodes2017);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp1883, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root2391 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + number.get() + ". ";
      var tmp1881 = mobl.ref(result__);
      subs__.addSub(number.addEventListener('change', function() {
        tmp1881.set("Q" + number.get() + ". ");
      }));
      
      var nodes2018 = $("<span>");
      root2391.append(nodes2018);
      subs__.addSub((mobl.html)(tmp1881, function(_, callback) {
        var root2392 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2392); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2018;
        nodes2018 = node.contents();
        oldNodes.replaceWith(nodes2018);
      }));
      
      var node398 = $("<span>");
      
      var ref398 = mobl.ref("question-block-" + number.get());
      if(ref398.get() !== null) {
        node398.attr('id', ref398.get());
        subs__.addSub(ref398.addEventListener('change', function(_, ref, val) {
          node398.attr('id', val);
        }));
        subs__.addSub(number.addEventListener('change', function() {
          node398.attr('id', "question-block-" + number.get());
        }));
        
      }
      subs__.addSub(ref398.rebind());
      
      var nodes2020 = $("<span>");
      node398.append(nodes2020);
      subs__.addSub((mobl.html)(mobl.ref(qa, 'question'), function(_, callback) {
        var root2394 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2394); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2020;
        nodes2020 = node.contents();
        oldNodes.replaceWith(nodes2020);
      }));
      root2391.append(node398);
      
      var node399 = $("<span>");
      node399.attr('style', "display:none");
      
      nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
        var tmp1958 = result__;
        var tmp1882 = mobl.ref(result__);
        subs__.addSub(qa.addEventListener('change', function() {
          nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
            var tmp1957 = result__;
            var result__ = tmp1957;
            tmp1882.set(result__);
            
          });
        }));
        
        var nodes2019 = $("<span>");
        node399.append(nodes2019);
        subs__.addSub((mobl.html)(tmp1882, function(_, callback) {
          var root2393 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2393); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2019;
          nodes2019 = node.contents();
          oldNodes.replaceWith(nodes2019);
        }));
        root2391.append(node399);
        callback(root2391); return subs__;
        
      });
      
      
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2017;
      nodes2017 = node.contents();
      oldNodes.replaceWith(nodes2017);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp1960 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1885 = mobl.ref(result__);
    
    var nodes2021 = $("<span>");
    root2390.append(nodes2021);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1885, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root2395 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2022 = $("<span>");
      root2395.append(nodes2022);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2396 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                           var tmp1959 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp1884 = mobl.ref(result__);
        
        var nodes2023 = $("<span>");
        root2396.append(nodes2023);
        subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp1884, function(_, callback) {
          var root2397 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2397); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2023;
          nodes2023 = node.contents();
          oldNodes.replaceWith(nodes2023);
        }));
        callback(root2396); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2022;
        nodes2022 = node.contents();
        oldNodes.replaceWith(nodes2022);
      }));
      
      var node400 = $("<span>");
      root2395.append(node400);
      var condSubs87 = new mobl.CompSubscription();
      subs__.addSub(condSubs87);
      var oldValue87;
      var renderCond87 = function() {
        var value211 = qa.get().done;
        if(oldValue87 === value211) return;
        oldValue87 = value211;
        var subs__ = condSubs87;
        subs__.unsubscribe();
        node400.empty();
        if(value211) {
          var nodes2024 = $("<span>");
          node400.append(nodes2024);
          subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, number, function(_, callback) {
            var root2398 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root2398); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes2024;
            nodes2024 = node.contents();
            oldNodes.replaceWith(nodes2024);
          }));
          
          
        } else {
          
        }
      };
      renderCond87();
      subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
        renderCond87();
      }));
      
      callback(root2395); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2021;
      nodes2021 = node.contents();
      oldNodes.replaceWith(nodes2021);
    }));
    callback(root2390); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2016;
    nodes2016 = node.contents();
    oldNodes.replaceWith(nodes2016);
  }));
  callback(root2387); return subs__;
  
  
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
  qas.list(function(coll252) {
    coll252 = coll252.reverse();
    function processOne66() {
      var item;
      item = coll252.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll252.length > 0) processOne66(); else rest66();
      
    }
    function rest66() {
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
    if(coll252.length > 0) processOne66(); else rest66();
  });
  
};

nrichRPG.coreWorkout.makeQAStar = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll253) {
    coll253 = coll253.reverse();
    function processOne67() {
      var item;
      item = coll253.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll253.length > 0) processOne67(); else rest67();
      
    }
    function rest67() {
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
    if(coll253.length > 0) processOne67(); else rest67();
  });
  
};

nrichRPG.coreWorkout.makeQAStats = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll254) {
    coll254 = coll254.reverse();
    function processOne68() {
      var item;
      item = coll254.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll254.length > 0) processOne68(); else rest68();
      
    }
    function rest68() {
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
    if(coll254.length > 0) processOne68(); else rest68();
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