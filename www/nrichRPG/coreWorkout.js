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
    var tmp1900 = result__;
    var result__ = tmp1900;
    nrichRPG.coreWorkout.qCount.set(result__);
    nrichRPG.questionAnswer.QA.all().filter("done", "=", true).count(function(result__) {
      var tmp1901 = result__;
      var result__ = tmp1901;
      nrichRPG.coreWorkout.tickCount.set(result__);
      var result__ = mobl.log("qCount = " + nrichRPG.coreWorkout.qCount.get() + " tickCount = " + nrichRPG.coreWorkout.tickCount.get());
      if(callback && callback.apply) callback(); return;
    });
  });
};

nrichRPG.coreWorkout.clearAllQ = function(callback) {
  var __this = this;
  var result__ = nrichRPG.questionAnswer.QA.all();
  nrichRPG.questionAnswer.QA.all().list(function(coll1594) {
    coll1594 = coll1594.reverse();
    function processOne82() {
      var qa;
      qa = coll1594.pop();
      var result__ = mobl.remove(qa);
      
      if(coll1594.length > 0) processOne82(); else rest82();
      
    }
    function rest82() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll1594.length > 0) processOne82(); else rest82();
  });
  
};

nrichRPG.coreWorkout.randomQ = function(n, topicId, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll1595) {
    coll1595 = coll1595.reverse();
    function processOne83() {
      var i;
      i = coll1595.pop();
      nrichRPG.coreWorkout.makeQA(topicId, function(result__) {
        var tmp1902 = result__;
        
        if(coll1595.length > 0) processOne83(); else rest83();
        
      });
    }
    function rest83() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll1595.length > 0) processOne83(); else rest83();
  });
  
};

nrichRPG.coreWorkout.randomQStar = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll1596) {
    coll1596 = coll1596.reverse();
    function processOne84() {
      var i;
      i = coll1596.pop();
      var result__ = mobl.Math.floor(13 * mobl.Math.random());
      var r = result__;
      var result__ = "F" + (1 + r);
      var tid = result__;
      var result__ = tid == "F3";
      if(result__) {
        var result__ = "F3a";
        tid = result__;
        nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
          var tmp1903 = result__;
          
          if(coll1596.length > 0) processOne84(); else rest84();
          
        });
      } else {
        {
          nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
            var tmp1903 = result__;
            
            if(coll1596.length > 0) processOne84(); else rest84();
            
          });
        }
      }
    }
    function rest84() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll1596.length > 0) processOne84(); else rest84();
  });
  
};

nrichRPG.coreWorkout.randomQStats = function(n, callback) {
  var __this = this;
  var result__ = mobl.range(0, n);
  mobl.range(0, n).list(function(coll1597) {
    coll1597 = coll1597.reverse();
    function processOne85() {
      var i;
      i = coll1597.pop();
      var result__ = mobl.Math.floor(6 * mobl.Math.random());
      var r = result__;
      var result__ = "S" + (1 + r);
      var tid = result__;
      nrichRPG.coreWorkout.makeQAStar(tid, function(result__) {
        var tmp1904 = result__;
        
        if(coll1597.length > 0) processOne85(); else rest85();
        
      });
    }
    function rest85() {
      if(callback && callback.apply) callback(); return;
    }
    if(coll1597.length > 0) processOne85(); else rest85();
  });
  
};


nrichRPG.coreWorkout.addQA = function(elements, callback) {
  var root2384 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1889 = $("<span>");
  root2384.append(nodes1889);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2385 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addAlgebra', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1912 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1806 = mobl.ref(result__);
    
    var nodes1890 = $("<span>");
    root2385.append(nodes1890);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1806, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2386 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1891 = $("<span>");
      root2386.append(nodes1891);
      subs__.addSub((mobl.label)(mobl.ref("+Algebraic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2387 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2387); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1891;
        nodes1891 = node.contents();
        oldNodes.replaceWith(nodes1891);
      }));
      callback(root2386); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1890;
      nodes1890 = node.contents();
      oldNodes.replaceWith(nodes1890);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addCurveSketch', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1911 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1807 = mobl.ref(result__);
    
    var nodes1892 = $("<span>");
    root2385.append(nodes1892);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1807, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2388 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1893 = $("<span>");
      root2388.append(nodes1893);
      subs__.addSub((mobl.label)(mobl.ref("+Curve sketching"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2389 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2389); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1893;
        nodes1893 = node.contents();
        oldNodes.replaceWith(nodes1893);
      }));
      callback(root2388); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1892;
      nodes1892 = node.contents();
      oldNodes.replaceWith(nodes1892);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addGeometry', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1910 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1808 = mobl.ref(result__);
    
    var nodes1894 = $("<span>");
    root2385.append(nodes1894);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1808, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2390 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1895 = $("<span>");
      root2390.append(nodes1895);
      subs__.addSub((mobl.label)(mobl.ref("+Geometry"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2391 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2391); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1895;
        nodes1895 = node.contents();
        oldNodes.replaceWith(nodes1895);
      }));
      callback(root2390); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1894;
      nodes1894 = node.contents();
      oldNodes.replaceWith(nodes1894);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addSequencesAndSeries', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1909 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1809 = mobl.ref(result__);
    
    var nodes1896 = $("<span>");
    root2385.append(nodes1896);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1809, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2392 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1897 = $("<span>");
      root2392.append(nodes1897);
      subs__.addSub((mobl.label)(mobl.ref("+Sequences & series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2393 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2393); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1897;
        nodes1897 = node.contents();
        oldNodes.replaceWith(nodes1897);
      }));
      callback(root2392); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1896;
      nodes1896 = node.contents();
      oldNodes.replaceWith(nodes1896);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addVectors', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1908 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1810 = mobl.ref(result__);
    
    var nodes1898 = $("<span>");
    root2385.append(nodes1898);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1810, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2394 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1899 = $("<span>");
      root2394.append(nodes1899);
      subs__.addSub((mobl.label)(mobl.ref("+Vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2395 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2395); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1899;
        nodes1899 = node.contents();
        oldNodes.replaceWith(nodes1899);
      }));
      callback(root2394); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1898;
      nodes1898 = node.contents();
      oldNodes.replaceWith(nodes1898);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentiation', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1907 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1811 = mobl.ref(result__);
    
    var nodes1900 = $("<span>");
    root2385.append(nodes1900);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1811, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2396 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1901 = $("<span>");
      root2396.append(nodes1901);
      subs__.addSub((mobl.label)(mobl.ref("+Differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2397 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2397); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1901;
        nodes1901 = node.contents();
        oldNodes.replaceWith(nodes1901);
      }));
      callback(root2396); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1900;
      nodes1900 = node.contents();
      oldNodes.replaceWith(nodes1900);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addIntegration', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1906 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1812 = mobl.ref(result__);
    
    var nodes1902 = $("<span>");
    root2385.append(nodes1902);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1812, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2398 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1903 = $("<span>");
      root2398.append(nodes1903);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2399 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2399); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1903;
        nodes1903 = node.contents();
        oldNodes.replaceWith(nodes1903);
      }));
      callback(root2398); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1902;
      nodes1902 = node.contents();
      oldNodes.replaceWith(nodes1902);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mobl.call('nrichRPG.coreWorkout.addDifferentialEquations', [mobl.ref(false), mobl.ref("slide")], function(result__) {
                     var tmp1905 = result__;
                     if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1813 = mobl.ref(result__);
    
    var nodes1904 = $("<span>");
    root2385.append(nodes1904);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1813, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2400 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1905 = $("<span>");
      root2400.append(nodes1905);
      subs__.addSub((mobl.label)(mobl.ref("+Differential equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2401 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2401); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1905;
        nodes1905 = node.contents();
        oldNodes.replaceWith(nodes1905);
      }));
      callback(root2400); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1904;
      nodes1904 = node.contents();
      oldNodes.replaceWith(nodes1904);
    }));
    callback(root2385); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1889;
    nodes1889 = node.contents();
    oldNodes.replaceWith(nodes1889);
  }));
  callback(root2384); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addAlgebra = function(callback, screenCallback) {
  var root2402 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var qa = mobl.ref(new nrichRPG.questionAnswer.QA({}));
  var nodes1906 = $("<span>");
  root2402.append(nodes1906);
  subs__.addSub((ui.header)(mobl.ref("Algebraic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2403 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1815 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1814 = mobl.ref(result__);
    
    var nodes1907 = $("<span>");
    root2403.append(nodes1907);
    subs__.addSub((ui.backButton)(tmp1814, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1815, function(_, callback) {
      var root2404 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2404); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1907;
      nodes1907 = node.contents();
      oldNodes.replaceWith(nodes1907);
    }));
    callback(root2403); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1906;
    nodes1906 = node.contents();
    oldNodes.replaceWith(nodes1906);
  }));
  var nodes1908 = $("<span>");
  root2402.append(nodes1908);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2405 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(10, function(result__) {
                       var tmp1920 = result__;
                       var result__ = mobl.alert("Quadratic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1816 = mobl.ref(result__);
    
    var nodes1909 = $("<span>");
    root2405.append(nodes1909);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1816, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2406 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1910 = $("<span>");
      root2406.append(nodes1910);
      subs__.addSub((mobl.label)(mobl.ref("+Quadratic equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2407 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2407); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1910;
        nodes1910 = node.contents();
        oldNodes.replaceWith(nodes1910);
      }));
      callback(root2406); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1909;
      nodes1909 = node.contents();
      oldNodes.replaceWith(nodes1909);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(11, function(result__) {
                       var tmp1919 = result__;
                       var result__ = mobl.alert("Completing the Square Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1817 = mobl.ref(result__);
    
    var nodes1911 = $("<span>");
    root2405.append(nodes1911);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1817, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2408 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1912 = $("<span>");
      root2408.append(nodes1912);
      subs__.addSub((mobl.label)(mobl.ref("+Completing the square"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2409 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2409); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1912;
        nodes1912 = node.contents();
        oldNodes.replaceWith(nodes1912);
      }));
      callback(root2408); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1911;
      nodes1911 = node.contents();
      oldNodes.replaceWith(nodes1911);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(7, function(result__) {
                       var tmp1918 = result__;
                       var result__ = mobl.alert("Ineqalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1818 = mobl.ref(result__);
    
    var nodes1913 = $("<span>");
    root2405.append(nodes1913);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1818, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2410 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1914 = $("<span>");
      root2410.append(nodes1914);
      subs__.addSub((mobl.label)(mobl.ref("+Inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2411 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2411); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1914;
        nodes1914 = node.contents();
        oldNodes.replaceWith(nodes1914);
      }));
      callback(root2410); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1913;
      nodes1913 = node.contents();
      oldNodes.replaceWith(nodes1913);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(9, function(result__) {
                       var tmp1917 = result__;
                       var result__ = mobl.alert("Factor theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1819 = mobl.ref(result__);
    
    var nodes1915 = $("<span>");
    root2405.append(nodes1915);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1819, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2412 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1916 = $("<span>");
      root2412.append(nodes1916);
      subs__.addSub((mobl.label)(mobl.ref("+Factor theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2413 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2413); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1916;
        nodes1916 = node.contents();
        oldNodes.replaceWith(nodes1916);
      }));
      callback(root2412); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1915;
      nodes1915 = node.contents();
      oldNodes.replaceWith(nodes1915);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(1, function(result__) {
                       var tmp1916 = result__;
                       var result__ = mobl.alert("Partial fraction Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1820 = mobl.ref(result__);
    
    var nodes1917 = $("<span>");
    root2405.append(nodes1917);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1820, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2414 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1918 = $("<span>");
      root2414.append(nodes1918);
      subs__.addSub((mobl.label)(mobl.ref("+Partial fractions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2415 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2415); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1918;
        nodes1918 = node.contents();
        oldNodes.replaceWith(nodes1918);
      }));
      callback(root2414); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1917;
      nodes1917 = node.contents();
      oldNodes.replaceWith(nodes1917);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(30, function(result__) {
                       var tmp1915 = result__;
                       var result__ = mobl.alert("Powers Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1821 = mobl.ref(result__);
    
    var nodes1919 = $("<span>");
    root2405.append(nodes1919);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1821, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2416 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1920 = $("<span>");
      root2416.append(nodes1920);
      subs__.addSub((mobl.label)(mobl.ref("+Powers"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2417 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2417); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1920;
        nodes1920 = node.contents();
        oldNodes.replaceWith(nodes1920);
      }));
      callback(root2416); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1919;
      nodes1919 = node.contents();
      oldNodes.replaceWith(nodes1919);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(13, function(result__) {
                       var tmp1914 = result__;
                       var result__ = mobl.alert("Logarithm Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1822 = mobl.ref(result__);
    
    var nodes1921 = $("<span>");
    root2405.append(nodes1921);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1822, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2418 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1922 = $("<span>");
      root2418.append(nodes1922);
      subs__.addSub((mobl.label)(mobl.ref("+Logarithms"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2419 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2419); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1922;
        nodes1922 = node.contents();
        oldNodes.replaceWith(nodes1922);
      }));
      callback(root2418); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1921;
      nodes1921 = node.contents();
      oldNodes.replaceWith(nodes1921);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(17, function(result__) {
                       var tmp1913 = result__;
                       var result__ = mobl.alert("Trig equation Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1823 = mobl.ref(result__);
    
    var nodes1923 = $("<span>");
    root2405.append(nodes1923);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1823, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2420 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1924 = $("<span>");
      root2420.append(nodes1924);
      subs__.addSub((mobl.label)(mobl.ref("+Trig equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2421 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2421); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1924;
        nodes1924 = node.contents();
        oldNodes.replaceWith(nodes1924);
      }));
      callback(root2420); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1923;
      nodes1923 = node.contents();
      oldNodes.replaceWith(nodes1923);
    }));
    callback(root2405); return subs__;
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1908;
    nodes1908 = node.contents();
    oldNodes.replaceWith(nodes1908);
  }));
  callback(root2402); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addCurveSketch = function(callback, screenCallback) {
  var root2422 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1925 = $("<span>");
  root2422.append(nodes1925);
  subs__.addSub((ui.header)(mobl.ref("Curve Sketching"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2423 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1825 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1824 = mobl.ref(result__);
    
    var nodes1926 = $("<span>");
    root2423.append(nodes1926);
    subs__.addSub((ui.backButton)(tmp1824, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1825, function(_, callback) {
      var root2424 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2424); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1926;
      nodes1926 = node.contents();
      oldNodes.replaceWith(nodes1926);
    }));
    callback(root2423); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1925;
    nodes1925 = node.contents();
    oldNodes.replaceWith(nodes1925);
  }));
  var nodes1927 = $("<span>");
  root2422.append(nodes1927);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2425 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(24, function(result__) {
                       var tmp1925 = result__;
                       var result__ = mobl.alert("Modulus Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1826 = mobl.ref(result__);
    
    var nodes1928 = $("<span>");
    root2425.append(nodes1928);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1826, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2426 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1929 = $("<span>");
      root2426.append(nodes1929);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus function"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2427 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2427); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1929;
        nodes1929 = node.contents();
        oldNodes.replaceWith(nodes1929);
      }));
      callback(root2426); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1928;
      nodes1928 = node.contents();
      oldNodes.replaceWith(nodes1928);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(25, function(result__) {
                       var tmp1924 = result__;
                       var result__ = mobl.alert("Transformations of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1827 = mobl.ref(result__);
    
    var nodes1930 = $("<span>");
    root2425.append(nodes1930);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1827, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2428 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1931 = $("<span>");
      root2428.append(nodes1931);
      subs__.addSub((mobl.label)(mobl.ref("+Transformations of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2429 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2429); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1931;
        nodes1931 = node.contents();
        oldNodes.replaceWith(nodes1931);
      }));
      callback(root2428); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1930;
      nodes1930 = node.contents();
      oldNodes.replaceWith(nodes1930);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(26, function(result__) {
                       var tmp1923 = result__;
                       var result__ = mobl.alert("Composition of functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1828 = mobl.ref(result__);
    
    var nodes1932 = $("<span>");
    root2425.append(nodes1932);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1828, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2430 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1933 = $("<span>");
      root2430.append(nodes1933);
      subs__.addSub((mobl.label)(mobl.ref("+Composition of functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2431 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2431); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1933;
        nodes1933 = node.contents();
        oldNodes.replaceWith(nodes1933);
      }));
      callback(root2430); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1932;
      nodes1932 = node.contents();
      oldNodes.replaceWith(nodes1932);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(270, function(result__) {
                       var tmp1922 = result__;
                       var result__ = mobl.alert("Implicit functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1829 = mobl.ref(result__);
    
    var nodes1934 = $("<span>");
    root2425.append(nodes1934);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1829, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2432 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1935 = $("<span>");
      root2432.append(nodes1935);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2433 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2433); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1935;
        nodes1935 = node.contents();
        oldNodes.replaceWith(nodes1935);
      }));
      callback(root2432); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1934;
      nodes1934 = node.contents();
      oldNodes.replaceWith(nodes1934);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(27, function(result__) {
                       var tmp1921 = result__;
                       var result__ = mobl.alert("Parametric functions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1830 = mobl.ref(result__);
    
    var nodes1936 = $("<span>");
    root2425.append(nodes1936);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1830, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2434 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1937 = $("<span>");
      root2434.append(nodes1937);
      subs__.addSub((mobl.label)(mobl.ref("+Parametric functions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2435 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2435); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1937;
        nodes1937 = node.contents();
        oldNodes.replaceWith(nodes1937);
      }));
      callback(root2434); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1936;
      nodes1936 = node.contents();
      oldNodes.replaceWith(nodes1936);
    }));
    callback(root2425); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1927;
    nodes1927 = node.contents();
    oldNodes.replaceWith(nodes1927);
  }));
  callback(root2422); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addGeometry = function(callback, screenCallback) {
  var root2436 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1938 = $("<span>");
  root2436.append(nodes1938);
  subs__.addSub((ui.header)(mobl.ref("+Geometry"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2437 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1832 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1831 = mobl.ref(result__);
    
    var nodes1939 = $("<span>");
    root2437.append(nodes1939);
    subs__.addSub((ui.backButton)(tmp1831, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1832, function(_, callback) {
      var root2438 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2438); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1939;
      nodes1939 = node.contents();
      oldNodes.replaceWith(nodes1939);
    }));
    callback(root2437); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1938;
    nodes1938 = node.contents();
    oldNodes.replaceWith(nodes1938);
  }));
  var nodes1940 = $("<span>");
  root2436.append(nodes1940);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2439 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(15, function(result__) {
                       var tmp1928 = result__;
                       var result__ = mobl.alert("Triangles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1833 = mobl.ref(result__);
    
    var nodes1941 = $("<span>");
    root2439.append(nodes1941);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1833, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2440 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1942 = $("<span>");
      root2440.append(nodes1942);
      subs__.addSub((mobl.label)(mobl.ref("+Triangles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2441 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2441); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1942;
        nodes1942 = node.contents();
        oldNodes.replaceWith(nodes1942);
      }));
      callback(root2440); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1941;
      nodes1941 = node.contents();
      oldNodes.replaceWith(nodes1941);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(16, function(result__) {
                       var tmp1927 = result__;
                       var result__ = mobl.alert("Circles Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1834 = mobl.ref(result__);
    
    var nodes1943 = $("<span>");
    root2439.append(nodes1943);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1834, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2442 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1944 = $("<span>");
      root2442.append(nodes1944);
      subs__.addSub((mobl.label)(mobl.ref("+Circles"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2443 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2443); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1944;
        nodes1944 = node.contents();
        oldNodes.replaceWith(nodes1944);
      }));
      callback(root2442); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1943;
      nodes1943 = node.contents();
      oldNodes.replaceWith(nodes1943);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(6, function(result__) {
                       var tmp1926 = result__;
                       var result__ = mobl.alert("3D lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1835 = mobl.ref(result__);
    
    var nodes1945 = $("<span>");
    root2439.append(nodes1945);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1835, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2444 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1946 = $("<span>");
      root2444.append(nodes1946);
      subs__.addSub((mobl.label)(mobl.ref("+ 3D lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2445 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2445); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1946;
        nodes1946 = node.contents();
        oldNodes.replaceWith(nodes1946);
      }));
      callback(root2444); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1945;
      nodes1945 = node.contents();
      oldNodes.replaceWith(nodes1945);
    }));
    callback(root2439); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1940;
    nodes1940 = node.contents();
    oldNodes.replaceWith(nodes1940);
  }));
  callback(root2436); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addSequencesAndSeries = function(callback, screenCallback) {
  var root2446 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1947 = $("<span>");
  root2446.append(nodes1947);
  subs__.addSub((ui.header)(mobl.ref("+Sequences and Series"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2447 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1837 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1836 = mobl.ref(result__);
    
    var nodes1948 = $("<span>");
    root2447.append(nodes1948);
    subs__.addSub((ui.backButton)(tmp1836, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1837, function(_, callback) {
      var root2448 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2448); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1948;
      nodes1948 = node.contents();
      oldNodes.replaceWith(nodes1948);
    }));
    callback(root2447); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1947;
    nodes1947 = node.contents();
    oldNodes.replaceWith(nodes1947);
  }));
  var nodes1949 = $("<span>");
  root2446.append(nodes1949);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2449 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(8, function(result__) {
                       var tmp1932 = result__;
                       var result__ = mobl.alert("Arithmetic Progressions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1838 = mobl.ref(result__);
    
    var nodes1950 = $("<span>");
    root2449.append(nodes1950);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1838, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2450 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1951 = $("<span>");
      root2450.append(nodes1951);
      subs__.addSub((mobl.label)(mobl.ref("+Arithmetic progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2451 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2451); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1951;
        nodes1951 = node.contents();
        oldNodes.replaceWith(nodes1951);
      }));
      callback(root2450); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1950;
      nodes1950 = node.contents();
      oldNodes.replaceWith(nodes1950);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(12, function(result__) {
                       var tmp1931 = result__;
                       var result__ = mobl.alert("Binomial Expansion Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1839 = mobl.ref(result__);
    
    var nodes1952 = $("<span>");
    root2449.append(nodes1952);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1839, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2452 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1953 = $("<span>");
      root2452.append(nodes1953);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial expansion"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2453 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2453); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1953;
        nodes1953 = node.contents();
        oldNodes.replaceWith(nodes1953);
      }));
      callback(root2452); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1952;
      nodes1952 = node.contents();
      oldNodes.replaceWith(nodes1952);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(23, function(result__) {
                       var tmp1930 = result__;
                       var result__ = mobl.alert("Geometric Progression Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1840 = mobl.ref(result__);
    
    var nodes1954 = $("<span>");
    root2449.append(nodes1954);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1840, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2454 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1955 = $("<span>");
      root2454.append(nodes1955);
      subs__.addSub((mobl.label)(mobl.ref("+Geometric progressions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2455 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2455); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1955;
        nodes1955 = node.contents();
        oldNodes.replaceWith(nodes1955);
      }));
      callback(root2454); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1954;
      nodes1954 = node.contents();
      oldNodes.replaceWith(nodes1954);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(2, function(result__) {
                       var tmp1929 = result__;
                       var result__ = mobl.alert("Binomial theorem Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1841 = mobl.ref(result__);
    
    var nodes1956 = $("<span>");
    root2449.append(nodes1956);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1841, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2456 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1957 = $("<span>");
      root2456.append(nodes1957);
      subs__.addSub((mobl.label)(mobl.ref("+Binomial theorem"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2457 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2457); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1957;
        nodes1957 = node.contents();
        oldNodes.replaceWith(nodes1957);
      }));
      callback(root2456); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1956;
      nodes1956 = node.contents();
      oldNodes.replaceWith(nodes1956);
    }));
    callback(root2449); return subs__;
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1949;
    nodes1949 = node.contents();
    oldNodes.replaceWith(nodes1949);
  }));
  callback(root2446); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addVectors = function(callback, screenCallback) {
  var root2458 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1958 = $("<span>");
  root2458.append(nodes1958);
  subs__.addSub((ui.header)(mobl.ref("+Vectors"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2459 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1843 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1842 = mobl.ref(result__);
    
    var nodes1959 = $("<span>");
    root2459.append(nodes1959);
    subs__.addSub((ui.backButton)(tmp1842, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1843, function(_, callback) {
      var root2460 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2460); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1959;
      nodes1959 = node.contents();
      oldNodes.replaceWith(nodes1959);
    }));
    callback(root2459); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1958;
    nodes1958 = node.contents();
    oldNodes.replaceWith(nodes1958);
  }));
  var nodes1960 = $("<span>");
  root2458.append(nodes1960);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2461 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(5, function(result__) {
                       var tmp1934 = result__;
                       var result__ = mobl.alert("Scalar product Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1844 = mobl.ref(result__);
    
    var nodes1961 = $("<span>");
    root2461.append(nodes1961);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1844, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2462 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1962 = $("<span>");
      root2462.append(nodes1962);
      subs__.addSub((mobl.label)(mobl.ref("+Scalar products"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2463 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2463); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1962;
        nodes1962 = node.contents();
        oldNodes.replaceWith(nodes1962);
      }));
      callback(root2462); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1961;
      nodes1961 = node.contents();
      oldNodes.replaceWith(nodes1961);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(18, function(result__) {
                       var tmp1933 = result__;
                       var result__ = mobl.alert("Vector equation of lines Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1845 = mobl.ref(result__);
    
    var nodes1963 = $("<span>");
    root2461.append(nodes1963);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1845, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2464 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1964 = $("<span>");
      root2464.append(nodes1964);
      subs__.addSub((mobl.label)(mobl.ref("+Vector equation of lines"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2465 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2465); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1964;
        nodes1964 = node.contents();
        oldNodes.replaceWith(nodes1964);
      }));
      callback(root2464); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1963;
      nodes1963 = node.contents();
      oldNodes.replaceWith(nodes1963);
    }));
    callback(root2461); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1960;
    nodes1960 = node.contents();
    oldNodes.replaceWith(nodes1960);
  }));
  callback(root2458); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentiation = function(callback, screenCallback) {
  var root2466 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1965 = $("<span>");
  root2466.append(nodes1965);
  subs__.addSub((ui.header)(mobl.ref("+Differentiation"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2467 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1847 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1846 = mobl.ref(result__);
    
    var nodes1966 = $("<span>");
    root2467.append(nodes1966);
    subs__.addSub((ui.backButton)(tmp1846, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1847, function(_, callback) {
      var root2468 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2468); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1966;
      nodes1966 = node.contents();
      oldNodes.replaceWith(nodes1966);
    }));
    callback(root2467); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1965;
    nodes1965 = node.contents();
    oldNodes.replaceWith(nodes1965);
  }));
  var nodes1967 = $("<span>");
  root2466.append(nodes1967);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2469 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(14, function(result__) {
                       var tmp1939 = result__;
                       var result__ = mobl.alert("Stationary points Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1848 = mobl.ref(result__);
    
    var nodes1968 = $("<span>");
    root2469.append(nodes1968);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1848, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2470 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1969 = $("<span>");
      root2470.append(nodes1969);
      subs__.addSub((mobl.label)(mobl.ref("+Stationary points"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2471 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2471); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1969;
        nodes1969 = node.contents();
        oldNodes.replaceWith(nodes1969);
      }));
      callback(root2470); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1968;
      nodes1968 = node.contents();
      oldNodes.replaceWith(nodes1968);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(20, function(result__) {
                       var tmp1938 = result__;
                       var result__ = mobl.alert("Chain rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1849 = mobl.ref(result__);
    
    var nodes1970 = $("<span>");
    root2469.append(nodes1970);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1849, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2472 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1971 = $("<span>");
      root2472.append(nodes1971);
      subs__.addSub((mobl.label)(mobl.ref("+Chain rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2473 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2473); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1971;
        nodes1971 = node.contents();
        oldNodes.replaceWith(nodes1971);
      }));
      callback(root2472); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1970;
      nodes1970 = node.contents();
      oldNodes.replaceWith(nodes1970);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(21, function(result__) {
                       var tmp1937 = result__;
                       var result__ = mobl.alert("Product rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1850 = mobl.ref(result__);
    
    var nodes1972 = $("<span>");
    root2469.append(nodes1972);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1850, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2474 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1973 = $("<span>");
      root2474.append(nodes1973);
      subs__.addSub((mobl.label)(mobl.ref("+Product rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2475 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2475); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1973;
        nodes1973 = node.contents();
        oldNodes.replaceWith(nodes1973);
      }));
      callback(root2474); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1972;
      nodes1972 = node.contents();
      oldNodes.replaceWith(nodes1972);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(22, function(result__) {
                       var tmp1936 = result__;
                       var result__ = mobl.alert("Quotient rule Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1851 = mobl.ref(result__);
    
    var nodes1974 = $("<span>");
    root2469.append(nodes1974);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1851, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2476 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1975 = $("<span>");
      root2476.append(nodes1975);
      subs__.addSub((mobl.label)(mobl.ref("+Quotient rule"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2477 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2477); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1975;
        nodes1975 = node.contents();
        oldNodes.replaceWith(nodes1975);
      }));
      callback(root2476); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1974;
      nodes1974 = node.contents();
      oldNodes.replaceWith(nodes1974);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(19, function(result__) {
                       var tmp1935 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1852 = mobl.ref(result__);
    
    var nodes1976 = $("<span>");
    root2469.append(nodes1976);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1852, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2478 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1977 = $("<span>");
      root2478.append(nodes1977);
      subs__.addSub((mobl.label)(mobl.ref("+Implicit differentiation"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2479 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2479); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1977;
        nodes1977 = node.contents();
        oldNodes.replaceWith(nodes1977);
      }));
      callback(root2478); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1976;
      nodes1976 = node.contents();
      oldNodes.replaceWith(nodes1976);
    }));
    callback(root2469); return subs__;
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1967;
    nodes1967 = node.contents();
    oldNodes.replaceWith(nodes1967);
  }));
  callback(root2466); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addIntegration = function(callback, screenCallback) {
  var root2480 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1978 = $("<span>");
  root2480.append(nodes1978);
  subs__.addSub((ui.header)(mobl.ref("+Integration"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2481 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1854 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1853 = mobl.ref(result__);
    
    var nodes1979 = $("<span>");
    root2481.append(nodes1979);
    subs__.addSub((ui.backButton)(tmp1853, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1854, function(_, callback) {
      var root2482 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2482); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1979;
      nodes1979 = node.contents();
      oldNodes.replaceWith(nodes1979);
    }));
    callback(root2481); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1978;
    nodes1978 = node.contents();
    oldNodes.replaceWith(nodes1978);
  }));
  var nodes1980 = $("<span>");
  root2480.append(nodes1980);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2483 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(28, function(result__) {
                       var tmp1942 = result__;
                       var result__ = mobl.alert("Integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1855 = mobl.ref(result__);
    
    var nodes1981 = $("<span>");
    root2483.append(nodes1981);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1855, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2484 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1982 = $("<span>");
      root2484.append(nodes1982);
      subs__.addSub((mobl.label)(mobl.ref("+Integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2485 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2485); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1982;
        nodes1982 = node.contents();
        oldNodes.replaceWith(nodes1982);
      }));
      callback(root2484); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1981;
      nodes1981 = node.contents();
      oldNodes.replaceWith(nodes1981);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(3, function(result__) {
                       var tmp1941 = result__;
                       var result__ = mobl.alert("Polynomial integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1856 = mobl.ref(result__);
    
    var nodes1983 = $("<span>");
    root2483.append(nodes1983);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1856, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2486 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1984 = $("<span>");
      root2486.append(nodes1984);
      subs__.addSub((mobl.label)(mobl.ref("+Polynomial integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2487 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2487); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1984;
        nodes1984 = node.contents();
        oldNodes.replaceWith(nodes1984);
      }));
      callback(root2486); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1983;
      nodes1983 = node.contents();
      oldNodes.replaceWith(nodes1983);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(4, function(result__) {
                       var tmp1940 = result__;
                       var result__ = mobl.alert("Trig integration Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1857 = mobl.ref(result__);
    
    var nodes1985 = $("<span>");
    root2483.append(nodes1985);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1857, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2488 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1986 = $("<span>");
      root2488.append(nodes1986);
      subs__.addSub((mobl.label)(mobl.ref("+Trig integration"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2489 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2489); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1986;
        nodes1986 = node.contents();
        oldNodes.replaceWith(nodes1986);
      }));
      callback(root2488); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1985;
      nodes1985 = node.contents();
      oldNodes.replaceWith(nodes1985);
    }));
    callback(root2483); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1980;
    nodes1980 = node.contents();
    oldNodes.replaceWith(nodes1980);
  }));
  callback(root2480); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addDifferentialEquations = function(callback, screenCallback) {
  var root2490 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes1987 = $("<span>");
  root2490.append(nodes1987);
  subs__.addSub((ui.header)(mobl.ref("+Diff equations"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2491 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1859 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp1858 = mobl.ref(result__);
    
    var nodes1988 = $("<span>");
    root2491.append(nodes1988);
    subs__.addSub((ui.backButton)(tmp1858, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp1859, function(_, callback) {
      var root2492 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2492); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1988;
      nodes1988 = node.contents();
      oldNodes.replaceWith(nodes1988);
    }));
    callback(root2491); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1987;
    nodes1987 = node.contents();
    oldNodes.replaceWith(nodes1987);
  }));
  var nodes1989 = $("<span>");
  root2490.append(nodes1989);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2493 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQA(29, function(result__) {
                       var tmp1943 = result__;
                       var result__ = mobl.alert("Differential equations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1860 = mobl.ref(result__);
    
    var nodes1990 = $("<span>");
    root2493.append(nodes1990);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1860, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2494 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1991 = $("<span>");
      root2494.append(nodes1991);
      subs__.addSub((mobl.label)(mobl.ref("+Diff equations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2495 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2495); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1991;
        nodes1991 = node.contents();
        oldNodes.replaceWith(nodes1991);
      }));
      callback(root2494); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1990;
      nodes1990 = node.contents();
      oldNodes.replaceWith(nodes1990);
    }));
    callback(root2493); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1989;
    nodes1989 = node.contents();
    oldNodes.replaceWith(nodes1989);
  }));
  callback(root2490); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.addQAPlus = function(elements, callback) {
  var root2496 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1992 = $("<span>");
  root2496.append(nodes1992);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2497 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F1", function(result__) {
                       var tmp1956 = result__;
                       var result__ = mobl.alert("Complex arithmetic Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1861 = mobl.ref(result__);
    
    var nodes1993 = $("<span>");
    root2497.append(nodes1993);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1861, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2498 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1994 = $("<span>");
      root2498.append(nodes1994);
      subs__.addSub((mobl.label)(mobl.ref("+Complex arithmetic"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2499 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2499); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1994;
        nodes1994 = node.contents();
        oldNodes.replaceWith(nodes1994);
      }));
      callback(root2498); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1993;
      nodes1993 = node.contents();
      oldNodes.replaceWith(nodes1993);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F2", function(result__) {
                       var tmp1955 = result__;
                       var result__ = mobl.alert("Modulus argument Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1862 = mobl.ref(result__);
    
    var nodes1995 = $("<span>");
    root2497.append(nodes1995);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1862, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2500 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1996 = $("<span>");
      root2500.append(nodes1996);
      subs__.addSub((mobl.label)(mobl.ref("+Modulus argument"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2501 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2501); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1996;
        nodes1996 = node.contents();
        oldNodes.replaceWith(nodes1996);
      }));
      callback(root2500); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1995;
      nodes1995 = node.contents();
      oldNodes.replaceWith(nodes1995);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F3a", function(result__) {
                       var tmp1954 = result__;
                       var result__ = mobl.alert("2nd order DE Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1863 = mobl.ref(result__);
    
    var nodes1997 = $("<span>");
    root2497.append(nodes1997);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1863, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2502 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1998 = $("<span>");
      root2502.append(nodes1998);
      subs__.addSub((mobl.label)(mobl.ref("+2nd order DEs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2503 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2503); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1998;
        nodes1998 = node.contents();
        oldNodes.replaceWith(nodes1998);
      }));
      callback(root2502); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1997;
      nodes1997 = node.contents();
      oldNodes.replaceWith(nodes1997);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F4", function(result__) {
                       var tmp1953 = result__;
                       var result__ = mobl.alert("Rank 2 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1864 = mobl.ref(result__);
    
    var nodes1999 = $("<span>");
    root2497.append(nodes1999);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1864, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2504 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2000 = $("<span>");
      root2504.append(nodes2000);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 2 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2505 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2505); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2000;
        nodes2000 = node.contents();
        oldNodes.replaceWith(nodes2000);
      }));
      callback(root2504); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1999;
      nodes1999 = node.contents();
      oldNodes.replaceWith(nodes1999);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F5", function(result__) {
                       var tmp1952 = result__;
                       var result__ = mobl.alert("Taylor Series Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1865 = mobl.ref(result__);
    
    var nodes2001 = $("<span>");
    root2497.append(nodes2001);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1865, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2506 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2002 = $("<span>");
      root2506.append(nodes2002);
      subs__.addSub((mobl.label)(mobl.ref("+Taylor Series"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2507 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2507); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2002;
        nodes2002 = node.contents();
        oldNodes.replaceWith(nodes2002);
      }));
      callback(root2506); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2001;
      nodes2001 = node.contents();
      oldNodes.replaceWith(nodes2001);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F6", function(result__) {
                       var tmp1951 = result__;
                       var result__ = mobl.alert("Polar Coordinates Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1866 = mobl.ref(result__);
    
    var nodes2003 = $("<span>");
    root2497.append(nodes2003);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1866, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2508 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2004 = $("<span>");
      root2508.append(nodes2004);
      subs__.addSub((mobl.label)(mobl.ref("+Polar Coordinates"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2509 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2509); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2004;
        nodes2004 = node.contents();
        oldNodes.replaceWith(nodes2004);
      }));
      callback(root2508); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2003;
      nodes2003 = node.contents();
      oldNodes.replaceWith(nodes2003);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F7", function(result__) {
                       var tmp1950 = result__;
                       var result__ = mobl.alert("Rank 3 matrices Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1867 = mobl.ref(result__);
    
    var nodes2005 = $("<span>");
    root2497.append(nodes2005);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1867, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2510 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2006 = $("<span>");
      root2510.append(nodes2006);
      subs__.addSub((mobl.label)(mobl.ref("+Rank 3 matrices"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2511 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2511); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2006;
        nodes2006 = node.contents();
        oldNodes.replaceWith(nodes2006);
      }));
      callback(root2510); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2005;
      nodes2005 = node.contents();
      oldNodes.replaceWith(nodes2005);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F8", function(result__) {
                       var tmp1949 = result__;
                       var result__ = mobl.alert("Further vectors added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1868 = mobl.ref(result__);
    
    var nodes2007 = $("<span>");
    root2497.append(nodes2007);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1868, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2512 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2008 = $("<span>");
      root2512.append(nodes2008);
      subs__.addSub((mobl.label)(mobl.ref("+Further vectors"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2513 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2513); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2008;
        nodes2008 = node.contents();
        oldNodes.replaceWith(nodes2008);
      }));
      callback(root2512); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2007;
      nodes2007 = node.contents();
      oldNodes.replaceWith(nodes2007);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F9", function(result__) {
                       var tmp1948 = result__;
                       var result__ = mobl.alert("Newton-Raphson added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1869 = mobl.ref(result__);
    
    var nodes2009 = $("<span>");
    root2497.append(nodes2009);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1869, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2514 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2010 = $("<span>");
      root2514.append(nodes2010);
      subs__.addSub((mobl.label)(mobl.ref("+Newton-Raphson"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2515 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2515); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2010;
        nodes2010 = node.contents();
        oldNodes.replaceWith(nodes2010);
      }));
      callback(root2514); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2009;
      nodes2009 = node.contents();
      oldNodes.replaceWith(nodes2009);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F10", function(result__) {
                       var tmp1947 = result__;
                       var result__ = mobl.alert("Further inequalities Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1870 = mobl.ref(result__);
    
    var nodes2011 = $("<span>");
    root2497.append(nodes2011);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1870, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2516 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2012 = $("<span>");
      root2516.append(nodes2012);
      subs__.addSub((mobl.label)(mobl.ref("+Further inequalities"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2517 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2517); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2012;
        nodes2012 = node.contents();
        oldNodes.replaceWith(nodes2012);
      }));
      callback(root2516); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2011;
      nodes2011 = node.contents();
      oldNodes.replaceWith(nodes2011);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F11", function(result__) {
                       var tmp1946 = result__;
                       var result__ = mobl.alert("Integration by substitution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1871 = mobl.ref(result__);
    
    var nodes2013 = $("<span>");
    root2497.append(nodes2013);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1871, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2518 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2014 = $("<span>");
      root2518.append(nodes2014);
      subs__.addSub((mobl.label)(mobl.ref("+Integration by substitution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2519 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2519); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2014;
        nodes2014 = node.contents();
        oldNodes.replaceWith(nodes2014);
      }));
      callback(root2518); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2013;
      nodes2013 = node.contents();
      oldNodes.replaceWith(nodes2013);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F12", function(result__) {
                       var tmp1945 = result__;
                       var result__ = mobl.alert("Figures of revolution Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1872 = mobl.ref(result__);
    
    var nodes2015 = $("<span>");
    root2497.append(nodes2015);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1872, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2520 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2016 = $("<span>");
      root2520.append(nodes2016);
      subs__.addSub((mobl.label)(mobl.ref("+Figures of revolution"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2521 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2521); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2016;
        nodes2016 = node.contents();
        oldNodes.replaceWith(nodes2016);
      }));
      callback(root2520); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2015;
      nodes2015 = node.contents();
      oldNodes.replaceWith(nodes2015);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStar("F13", function(result__) {
                       var tmp1944 = result__;
                       var result__ = mobl.alert("Matrix transformations Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1873 = mobl.ref(result__);
    
    var nodes2017 = $("<span>");
    root2497.append(nodes2017);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1873, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2522 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2018 = $("<span>");
      root2522.append(nodes2018);
      subs__.addSub((mobl.label)(mobl.ref("+Matrix transformations"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2523 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2523); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2018;
        nodes2018 = node.contents();
        oldNodes.replaceWith(nodes2018);
      }));
      callback(root2522); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2017;
      nodes2017 = node.contents();
      oldNodes.replaceWith(nodes2017);
    }));
    callback(root2497); return subs__;
    
    
    
    
    
    
    
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1992;
    nodes1992 = node.contents();
    oldNodes.replaceWith(nodes1992);
  }));
  callback(root2496); return subs__;
  
  return subs__;
};

nrichRPG.coreWorkout.addQAStats = function(elements, callback) {
  var root2524 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes2019 = $("<span>");
  root2524.append(nodes2019);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2525 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S1", function(result__) {
                       var tmp1962 = result__;
                       var result__ = mobl.alert("Discrete Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1874 = mobl.ref(result__);
    
    var nodes2020 = $("<span>");
    root2525.append(nodes2020);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1874, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2526 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2021 = $("<span>");
      root2526.append(nodes2021);
      subs__.addSub((mobl.label)(mobl.ref("+Discrete Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2527 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2527); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2021;
        nodes2021 = node.contents();
        oldNodes.replaceWith(nodes2021);
      }));
      callback(root2526); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2020;
      nodes2020 = node.contents();
      oldNodes.replaceWith(nodes2020);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S2", function(result__) {
                       var tmp1961 = result__;
                       var result__ = mobl.alert("Continuous Distributions Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1875 = mobl.ref(result__);
    
    var nodes2022 = $("<span>");
    root2525.append(nodes2022);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1875, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2528 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2023 = $("<span>");
      root2528.append(nodes2023);
      subs__.addSub((mobl.label)(mobl.ref("+Continuous Distributions"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2529 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2529); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2023;
        nodes2023 = node.contents();
        oldNodes.replaceWith(nodes2023);
      }));
      callback(root2528); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2022;
      nodes2022 = node.contents();
      oldNodes.replaceWith(nodes2022);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S3", function(result__) {
                       var tmp1960 = result__;
                       var result__ = mobl.alert("Hypothesis Testing Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1876 = mobl.ref(result__);
    
    var nodes2024 = $("<span>");
    root2525.append(nodes2024);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1876, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2530 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2025 = $("<span>");
      root2530.append(nodes2025);
      subs__.addSub((mobl.label)(mobl.ref("+Hypothesis Testing"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2531 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2531); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2025;
        nodes2025 = node.contents();
        oldNodes.replaceWith(nodes2025);
      }));
      callback(root2530); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2024;
      nodes2024 = node.contents();
      oldNodes.replaceWith(nodes2024);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S4", function(result__) {
                       var tmp1959 = result__;
                       var result__ = mobl.alert("Confidence Intervals Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1877 = mobl.ref(result__);
    
    var nodes2026 = $("<span>");
    root2525.append(nodes2026);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1877, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2532 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2027 = $("<span>");
      root2532.append(nodes2027);
      subs__.addSub((mobl.label)(mobl.ref("+Confidence Intervals"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2533 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2533); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2027;
        nodes2027 = node.contents();
        oldNodes.replaceWith(nodes2027);
      }));
      callback(root2532); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2026;
      nodes2026 = node.contents();
      oldNodes.replaceWith(nodes2026);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S5", function(result__) {
                       var tmp1958 = result__;
                       var result__ = mobl.alert("Chi Squared Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1878 = mobl.ref(result__);
    
    var nodes2028 = $("<span>");
    root2525.append(nodes2028);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1878, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2534 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2029 = $("<span>");
      root2534.append(nodes2029);
      subs__.addSub((mobl.label)(mobl.ref("+Chi Squared"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2535 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2535); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2029;
        nodes2029 = node.contents();
        oldNodes.replaceWith(nodes2029);
      }));
      callback(root2534); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2028;
      nodes2028 = node.contents();
      oldNodes.replaceWith(nodes2028);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.makeQAStats("S6", function(result__) {
                       var tmp1957 = result__;
                       var result__ = mobl.alert("Product Moment Q added");
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1879 = mobl.ref(result__);
    
    var nodes2030 = $("<span>");
    root2525.append(nodes2030);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1879, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2536 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2031 = $("<span>");
      root2536.append(nodes2031);
      subs__.addSub((mobl.label)(mobl.ref("+Product Moments"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2537 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2537); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2031;
        nodes2031 = node.contents();
        oldNodes.replaceWith(nodes2031);
      }));
      callback(root2536); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2030;
      nodes2030 = node.contents();
      oldNodes.replaceWith(nodes2030);
    }));
    callback(root2525); return subs__;
    
    
    
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2019;
    nodes2019 = node.contents();
    oldNodes.replaceWith(nodes2019);
  }));
  callback(root2524); return subs__;
  
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
  var root2538 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node733 = $("<div>");
  
  var ref704 = mobl.ref(nrichRPG.coreWorkout.panelHeaderStyle);
  if(ref704.get() !== null) {
    node733.attr('class', ref704.get());
    subs__.addSub(ref704.addEventListener('change', function(_, ref, val) {
      node733.attr('class', val);
    }));
    
  }
  subs__.addSub(ref704.rebind());
  
  var val354 = onclick.get();
  if(val354 !== null) {
    subs__.addSub(mobl.domBind(node733, 'tap', val354));
  }
  
  
  var node734 = $("<div>");
  
  var ref703 = mobl.ref(nrichRPG.coreWorkout.panelHeaderContainerStyle);
  if(ref703.get() !== null) {
    node734.attr('class', ref703.get());
    subs__.addSub(ref703.addEventListener('change', function(_, ref, val) {
      node734.attr('class', val);
    }));
    
  }
  subs__.addSub(ref703.rebind());
  
  
  var node735 = $("<div>");
  
  var ref701 = text;
  node735.text(""+ref701.get());
  var ignore138 = false;
  subs__.addSub(ref701.addEventListener('change', function(_, ref, val) {
    if(ignore138) return;
    node735.text(""+val);
  }));
  subs__.addSub(ref701.rebind());
  
  
  var ref702 = mobl.ref(nrichRPG.coreWorkout.panelHeaderTextStyle);
  if(ref702.get() !== null) {
    node735.attr('class', ref702.get());
    subs__.addSub(ref702.addEventListener('change', function(_, ref, val) {
      node735.attr('class', val);
    }));
    
  }
  subs__.addSub(ref702.rebind());
  
  node734.append(node735);
  node733.append(node734);
  var nodes2032 = $("<span>");
  node733.append(nodes2032);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl284();
  }));
  
  function renderControl284() {
    subs__.addSub((elements)(function(elements, callback) {
      var root2539 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2539); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2032;
      nodes2032 = node.contents();
      oldNodes.replaceWith(nodes2032);
    }));
  }
  renderControl284();
  root2538.append(node733);
  callback(root2538); return subs__;
  
  
  
  
  return subs__;
};
nrichRPG.coreWorkout.renderQA = function(qa, callback) {
  var __this = this;
  mobl.sleep(100, function(result__) {
    var tmp1963 = result__;
    mathJAX.renderMaths(function(result__) {
      var tmp1964 = result__;
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
  var root2540 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node736 = $("<span>");
  root2540.append(node736);
  var condSubs183 = new mobl.CompSubscription();
  subs__.addSub(condSubs183);
  var oldValue183;
  var renderCond183 = function() {
    var value1191 = qa.get().correct;
    if(oldValue183 === value1191) return;
    oldValue183 = value1191;
    var subs__ = condSubs183;
    subs__.unsubscribe();
    node736.empty();
    if(value1191) {
      var nodes2033 = $("<span>");
      node736.append(nodes2033);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.agreeStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2541 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = qa.get().answer != "%GRAPH%";
        var tmp1883 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp1883.set(qa.get().answer != "%GRAPH%");
        }));
        
        
        var node737 = $("<span>");
        root2541.append(node737);
        var condSubs184 = new mobl.CompSubscription();
        subs__.addSub(condSubs184);
        var oldValue184;
        var renderCond184 = function() {
          var value1192 = tmp1883.get();
          if(oldValue184 === value1192) return;
          oldValue184 = value1192;
          var subs__ = condSubs184;
          subs__.unsubscribe();
          node737.empty();
          if(value1192) {
            var result__ = "A" + qa.get().number + ". ";
            var tmp1880 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp1880.set("A" + qa.get().number + ". ");
            }));
            
            var nodes2034 = $("<span>");
            node737.append(nodes2034);
            subs__.addSub((mobl.label)(tmp1880, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root2542 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root2542); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes2034;
              nodes2034 = node.contents();
              oldNodes.replaceWith(nodes2034);
            }));
            var nodes2035 = $("<span>");
            node737.append(nodes2035);
            subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
              var root2543 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root2543); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes2035;
              nodes2035 = node.contents();
              oldNodes.replaceWith(nodes2035);
            }));
            
            
            
          } else {
            var result__ = "A" + qa.get().number + ". ";
            var tmp1881 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp1881.set("A" + qa.get().number + ". ");
            }));
            
            var nodes2036 = $("<span>");
            node737.append(nodes2036);
            subs__.addSub((mobl.label)(tmp1881, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root2544 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root2544); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes2036;
              nodes2036 = node.contents();
              oldNodes.replaceWith(nodes2036);
            }));
            var nodes2037 = $("<span>");
            node737.append(nodes2037);
            subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
              var root2545 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root2545); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes2037;
              nodes2037 = node.contents();
              oldNodes.replaceWith(nodes2037);
            }));
            
            var node738 = $("<span>");
            node738.attr('style', "display:none");
            
            nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
              var tmp1966 = result__;
              var tmp1882 = mobl.ref(result__);
              subs__.addSub(qa.addEventListener('change', function() {
                nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                  var tmp1965 = result__;
                  var result__ = tmp1965;
                  tmp1882.set(result__);
                  
                });
              }));
              
              var nodes2038 = $("<span>");
              node738.append(nodes2038);
              subs__.addSub((mobl.html)(tmp1882, function(_, callback) {
                var root2546 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root2546); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes2038;
                nodes2038 = node.contents();
                oldNodes.replaceWith(nodes2038);
              }));
              node737.append(node738);
              
              
            });
            
            
            
          }
        };
        renderCond184();
        subs__.addSub(tmp1883.addEventListener('change', function() {
          renderCond184();
        }));
        
        callback(root2541); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2033;
        nodes2033 = node.contents();
        oldNodes.replaceWith(nodes2033);
      }));
      
      
    } else {
      var nodes2039 = $("<span>");
      node736.append(nodes2039);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.disagreeStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2547 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = qa.get().answer != "%GRAPH%";
        var tmp1887 = mobl.ref(result__);
        subs__.addSub(mobl.ref(qa, 'answer').addEventListener('change', function() {
          tmp1887.set(qa.get().answer != "%GRAPH%");
        }));
        
        
        var node739 = $("<span>");
        root2547.append(node739);
        var condSubs185 = new mobl.CompSubscription();
        subs__.addSub(condSubs185);
        var oldValue185;
        var renderCond185 = function() {
          var value1193 = tmp1887.get();
          if(oldValue185 === value1193) return;
          oldValue185 = value1193;
          var subs__ = condSubs185;
          subs__.unsubscribe();
          node739.empty();
          if(value1193) {
            var result__ = "A" + qa.get().number + ". ";
            var tmp1884 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp1884.set("A" + qa.get().number + ". ");
            }));
            
            var nodes2040 = $("<span>");
            node739.append(nodes2040);
            subs__.addSub((mobl.label)(tmp1884, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root2548 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root2548); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes2040;
              nodes2040 = node.contents();
              oldNodes.replaceWith(nodes2040);
            }));
            var nodes2041 = $("<span>");
            node739.append(nodes2041);
            subs__.addSub((mobl.html)(mobl.ref(qa, 'answer'), function(_, callback) {
              var root2549 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root2549); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes2041;
              nodes2041 = node.contents();
              oldNodes.replaceWith(nodes2041);
            }));
            
            
            
          } else {
            var result__ = "A" + qa.get().number + ". ";
            var tmp1885 = mobl.ref(result__);
            subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
              tmp1885.set("A" + qa.get().number + ". ");
            }));
            
            var nodes2042 = $("<span>");
            node739.append(nodes2042);
            subs__.addSub((mobl.label)(tmp1885, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root2550 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root2550); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes2042;
              nodes2042 = node.contents();
              oldNodes.replaceWith(nodes2042);
            }));
            var nodes2043 = $("<span>");
            node739.append(nodes2043);
            subs__.addSub((plot.plot)(mobl.ref("corePlotArea"), mobl.ref(nrichRPG.coreWorkout.plotStyle), function(_, callback) {
              var root2551 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root2551); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes2043;
              nodes2043 = node.contents();
              oldNodes.replaceWith(nodes2043);
            }));
            
            var node740 = $("<span>");
            node740.attr('style', "display:none");
            
            nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
              var tmp1968 = result__;
              var tmp1886 = mobl.ref(result__);
              subs__.addSub(qa.addEventListener('change', function() {
                nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                  var tmp1967 = result__;
                  var result__ = tmp1967;
                  tmp1886.set(result__);
                  
                });
              }));
              
              var nodes2044 = $("<span>");
              node740.append(nodes2044);
              subs__.addSub((mobl.html)(tmp1886, function(_, callback) {
                var root2552 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root2552); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes2044;
                nodes2044 = node.contents();
                oldNodes.replaceWith(nodes2044);
              }));
              node739.append(node740);
              
              
            });
            
            
            
          }
        };
        renderCond185();
        subs__.addSub(tmp1887.addEventListener('change', function() {
          renderCond185();
        }));
        
        callback(root2547); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2039;
        nodes2039 = node.contents();
        oldNodes.replaceWith(nodes2039);
      }));
      
      
    }
  };
  renderCond183();
  subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
    renderCond183();
  }));
  
  var nodes2045 = $("<span>");
  root2540.append(nodes2045);
  subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root2553 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node741 = $("<span>");
    node741.attr('style', "display:none");
    
    nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
      var tmp1970 = result__;
      var tmp1888 = mobl.ref(result__);
      subs__.addSub(qa.addEventListener('change', function() {
        nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
          var tmp1969 = result__;
          var result__ = tmp1969;
          tmp1888.set(result__);
          
        });
      }));
      
      var nodes2049 = $("<span>");
      node741.append(nodes2049);
      subs__.addSub((mobl.html)(tmp1888, function(_, callback) {
        var root2557 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2557); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2049;
        nodes2049 = node.contents();
        oldNodes.replaceWith(nodes2049);
      }));
      root2553.append(node741);
      var nodes2046 = $("<span>");
      root2553.append(nodes2046);
      subs__.addSub((mobl.label)(mobl.ref("Did you agree?"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2554 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2554); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2046;
        nodes2046 = node.contents();
        oldNodes.replaceWith(nodes2046);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = true;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp1889 = mobl.ref(result__);
      
      var nodes2047 = $("<span>");
      root2553.append(nodes2047);
      subs__.addSub((ui.sideButton)(mobl.ref("Yes"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp1889, function(_, callback) {
        var root2555 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2555); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2047;
        nodes2047 = node.contents();
        oldNodes.replaceWith(nodes2047);
      }));
      var result__ = function(event, callback) {
                       if(event && event.stopPropagation) event.stopPropagation();
                       var result__ = false;
                       qa.get().correct = result__;
                       if(callback && callback.apply) callback(); return;
                     };
      var tmp1890 = mobl.ref(result__);
      
      var nodes2048 = $("<span>");
      root2553.append(nodes2048);
      subs__.addSub((ui.sideButton)(mobl.ref("No"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp1890, function(_, callback) {
        var root2556 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2556); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2048;
        nodes2048 = node.contents();
        oldNodes.replaceWith(nodes2048);
      }));
      callback(root2553); return subs__;
      
      
      
      
    });
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2045;
    nodes2045 = node.contents();
    oldNodes.replaceWith(nodes2045);
  }));
  callback(root2540); return subs__;
  
  
  return subs__;
};
nrichRPG.coreWorkout.nextQA = function(qa, callback) {
  var __this = this;
  var result__ = qa.number;
  var n = result__;
  (nrichRPG.questionAnswer.QA.all().filter("number", ">", qa.number)).one(function(result__) {
    var tmp1971 = result__;
    var result__ = tmp1971;
    var qa2 = result__;
    var result__ = qa2 == null;
    if(result__) {
      nrichRPG.questionAnswer.QA.all().one(function(result__) {
        var tmp1972 = result__;
        var result__ = tmp1972;
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
  var root2558 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node742 = $("<span>");
  
  var ref705 = mobl.ref("color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
  if(ref705.get() !== null) {
    node742.attr('style', ref705.get());
    subs__.addSub(ref705.addEventListener('change', function(_, ref, val) {
      node742.attr('style', val);
    }));
    subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
      node742.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
      node742.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    
  }
  subs__.addSub(ref705.rebind());
  
  var result__ = "Q" + number.get() + ". " + qa.get().topic;
  var tmp1891 = mobl.ref(result__);
  subs__.addSub(number.addEventListener('change', function() {
    tmp1891.set("Q" + number.get() + ". " + qa.get().topic);
  }));
  subs__.addSub(mobl.ref(qa, 'topic').addEventListener('change', function() {
    tmp1891.set("Q" + number.get() + ". " + qa.get().topic);
  }));
  
  var nodes2050 = $("<span>");
  node742.append(nodes2050);
  subs__.addSub((mobl.html)(tmp1891, function(_, callback) {
    var root2559 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2559); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes2050;
    nodes2050 = node.contents();
    oldNodes.replaceWith(nodes2050);
  }));
  root2558.append(node742);
  callback(root2558); return subs__;
  
  
  return subs__;
};

nrichRPG.coreWorkout.showQA = function(qa, elements, callback) {
  var root2560 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = function(event, callback) {
                   if(event && event.stopPropagation) event.stopPropagation();
                   mathJAX.renderMaths(function(result__) {
                     var tmp1980 = result__;
                     if(callback && callback.apply) callback(); return;
                   });
                 };
  var tmp1894 = mobl.ref(result__);
  
  var result__ = qa.get().topic.toLowerCase();
  var tmp1893 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'topic').addEventListener('change', function() {
    tmp1893.set(qa.get().topic.toLowerCase());
  }));
  
  var nodes2051 = $("<span>");
  root2560.append(nodes2051);
  subs__.addSub((nrichRPG.coreWorkout.panelHeader)(tmp1893, tmp1894, function(_, callback) {
    var root2561 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.nextQA(qa.get(), function(result__) {
                       var tmp1973 = result__;
                       var result__ = tmp1973;
                       var qa2 = result__;
                       var result__ = mobl.remove(qa.get());
                       var result__ = qa2;
                       qa.set(result__);
                       nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                         var tmp1974 = result__;
                         if(callback && callback.apply) callback(); return;
                       });
                     });
                   };
    var tmp1892 = mobl.ref(result__);
    
    var nodes2052 = $("<span>");
    root2561.append(nodes2052);
    subs__.addSub((ui.sideButton)(mobl.ref("Del"), mobl.ref(ui.sideButtonStyle), mobl.ref(ui.sideButtonPushedStyle), tmp1892, function(_, callback) {
      var root2562 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2562); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes2052;
      nodes2052 = node.contents();
      oldNodes.replaceWith(nodes2052);
    }));
    callback(root2561); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2051;
    nodes2051 = node.contents();
    oldNodes.replaceWith(nodes2051);
  }));
  var nodes2053 = $("<span>");
  root2560.append(nodes2053);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2563 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp1979 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1897 = mobl.ref(result__);
    
    var nodes2054 = $("<span>");
    root2563.append(nodes2054);
    subs__.addSub((ui.item)(mobl.ref(nrichRPG.coreWorkout.questionStyle), mobl.ref(ui.itemPushedStyle), tmp1897, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root2564 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var result__ = "Q" + qa.get().number + ". " + qa.get().question;
      var tmp1895 = mobl.ref(result__);
      subs__.addSub(mobl.ref(qa, 'number').addEventListener('change', function() {
        tmp1895.set("Q" + qa.get().number + ". " + qa.get().question);
      }));
      subs__.addSub(mobl.ref(qa, 'question').addEventListener('change', function() {
        tmp1895.set("Q" + qa.get().number + ". " + qa.get().question);
      }));
      
      var nodes2055 = $("<span>");
      root2564.append(nodes2055);
      subs__.addSub((mobl.html)(tmp1895, function(_, callback) {
        var root2565 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2565); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes2055;
        nodes2055 = node.contents();
        oldNodes.replaceWith(nodes2055);
      }));
      
      var node743 = $("<span>");
      node743.attr('style', "display:none");
      
      nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
        var tmp1976 = result__;
        var tmp1896 = mobl.ref(result__);
        subs__.addSub(qa.addEventListener('change', function() {
          nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
            var tmp1975 = result__;
            var result__ = tmp1975;
            tmp1896.set(result__);
            
          });
        }));
        
        var nodes2056 = $("<span>");
        node743.append(nodes2056);
        subs__.addSub((mobl.html)(tmp1896, function(_, callback) {
          var root2566 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2566); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2056;
          nodes2056 = node.contents();
          oldNodes.replaceWith(nodes2056);
        }));
        root2564.append(node743);
        callback(root2564); return subs__;
        
      });
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2054;
      nodes2054 = node.contents();
      oldNodes.replaceWith(nodes2054);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     mathJAX.renderMaths(function(result__) {
                       var tmp1978 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1899 = mobl.ref(result__);
    
    var nodes2057 = $("<span>");
    root2563.append(nodes2057);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1899, mobl.ref(null), mobl.ref(true), function(_, callback) {
      var root2567 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes2058 = $("<span>");
      root2567.append(nodes2058);
      subs__.addSub((mobl.block)(mobl.ref(nrichRPG.coreWorkout.answerStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2568 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         nrichRPG.coreWorkout.renderQA(qa.get(), function(result__) {
                           var tmp1977 = result__;
                           if(callback && callback.apply) callback(); return;
                         });
                       };
        var tmp1898 = mobl.ref(result__);
        
        var nodes2059 = $("<span>");
        root2568.append(nodes2059);
        subs__.addSub((ui.checkBox)(mobl.ref(qa, 'done'), mobl.ref("Check answer"), tmp1898, function(_, callback) {
          var root2569 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root2569); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes2059;
          nodes2059 = node.contents();
          oldNodes.replaceWith(nodes2059);
        }));
        callback(root2568); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes2058;
        nodes2058 = node.contents();
        oldNodes.replaceWith(nodes2058);
      }));
      
      var node744 = $("<span>");
      root2567.append(node744);
      var condSubs186 = new mobl.CompSubscription();
      subs__.addSub(condSubs186);
      var oldValue186;
      var renderCond186 = function() {
        var value1194 = qa.get().done;
        if(oldValue186 === value1194) return;
        oldValue186 = value1194;
        var subs__ = condSubs186;
        subs__.unsubscribe();
        node744.empty();
        if(value1194) {
          var nodes2060 = $("<span>");
          node744.append(nodes2060);
          subs__.addSub((nrichRPG.coreWorkout.answerBlock)(qa, function(_, callback) {
            var root2570 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root2570); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes2060;
            nodes2060 = node.contents();
            oldNodes.replaceWith(nodes2060);
          }));
          
          
        } else {
          
        }
      };
      renderCond186();
      subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
        renderCond186();
      }));
      
      callback(root2567); return subs__;
      
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes2057;
      nodes2057 = node.contents();
      oldNodes.replaceWith(nodes2057);
    }));
    callback(root2563); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes2053;
    nodes2053 = node.contents();
    oldNodes.replaceWith(nodes2053);
  }));
  callback(root2560); return subs__;
  
  
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
  qas.list(function(coll1598) {
    coll1598 = coll1598.reverse();
    function processOne86() {
      var item;
      item = coll1598.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll1598.length > 0) processOne86(); else rest86();
      
    }
    function rest86() {
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
    if(coll1598.length > 0) processOne86(); else rest86();
  });
  
};

nrichRPG.coreWorkout.makeQAStar = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll1599) {
    coll1599 = coll1599.reverse();
    function processOne87() {
      var item;
      item = coll1599.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll1599.length > 0) processOne87(); else rest87();
      
    }
    function rest87() {
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
    if(coll1599.length > 0) processOne87(); else rest87();
  });
  
};

nrichRPG.coreWorkout.makeQAStats = function(s, callback) {
  var __this = this;
  var result__ = new nrichRPG.questionAnswer.QA({});
  var qa = result__;
  var result__ = nrichRPG.questionAnswer.QA.all();
  var qas = result__;
  var result__ = qas;
  qas.list(function(coll1600) {
    coll1600 = coll1600.reverse();
    function processOne88() {
      var item;
      item = coll1600.pop();
      var result__ = mobl.Math.max(nrichRPG.coreWorkout.max.get(), item.number);
      nrichRPG.coreWorkout.max.set(result__);
      
      if(coll1600.length > 0) processOne88(); else rest88();
      
    }
    function rest88() {
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
    if(coll1600.length > 0) processOne88(); else rest88();
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