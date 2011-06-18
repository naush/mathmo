mobl.provides('mathmo');
mobl.provides('nrichRPG');
mobl.provides('nrichRPG.questionAnswer');
mobl.provides('nrichRPG.coreWorkout');
mobl.provides('mobl');
mobl.provides('ui');
mobl.provides('mathmo');
persistence.debug = false;mathmo.homeUrl = mobl.ref("http://nrich.maths.org");
mathmo.resourceUrl = mobl.ref("http://nrich.maths.org/7088");

mathmo.qTab = function(elements, callback) {
  var root2354 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1864 = $("<span>");
  root2354.append(nodes1864);
  subs__.addSub((ui.header)(mobl.ref("Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2355 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = mobl.openUrl(mathmo.resourceUrl.get());
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1791 = mobl.ref(result__);
    
    var nodes1865 = $("<span>");
    root2355.append(nodes1865);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), tmp1791, mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root2356 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2356); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1865;
      nodes1865 = node.contents();
      oldNodes.replaceWith(nodes1865);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = mobl.openUrl(mathmo.homeUrl.get());
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1792 = mobl.ref(result__);
    
    var nodes1866 = $("<span>");
    root2355.append(nodes1866);
    subs__.addSub((ui.image)(mobl.ref("nrichIcon.png"), mobl.ref(35), mobl.ref(35), tmp1792, mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root2357 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2357); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1866;
      nodes1866 = node.contents();
      oldNodes.replaceWith(nodes1866);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.clearAllQ(function(result__) {
                       var tmp1800 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1793 = mobl.ref(result__);
    
    var nodes1867 = $("<span>");
    root2355.append(nodes1867);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp1793, function(_, callback) {
      var root2358 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2358); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1867;
      nodes1867 = node.contents();
      oldNodes.replaceWith(nodes1867);
    }));
    callback(root2355); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1864;
    nodes1864 = node.contents();
    oldNodes.replaceWith(nodes1864);
  }));
  var result__ = nrichRPG.questionAnswer.QA.all().order("number", true);
  var tmp1794 = mobl.ref(result__);
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all().order("number", true)).addEventListener('change', function() {
    tmp1794.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all()).addEventListener('change', function() {
    tmp1794.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA).addEventListener('change', function() {
    tmp1794.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  
  var nodes1868 = $("<span>");
  root2354.append(nodes1868);
  subs__.addSub((ui.mMasterDetail)(tmp1794, mobl.ref(nrichRPG.coreWorkout.qaItem), mobl.ref(nrichRPG.coreWorkout.showQA), function(_, callback) {
    var root2359 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2359); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1868;
    nodes1868 = node.contents();
    oldNodes.replaceWith(nodes1868);
  }));
  callback(root2354); return subs__;
  
  
  return subs__;
};

mathmo.coreTab = function(elements, callback) {
  var root2360 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1869 = $("<span>");
  root2360.append(nodes1869);
  subs__.addSub((ui.header)(mobl.ref("Q on topic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2361 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.clearAllQ(function(result__) {
                       var tmp1801 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1795 = mobl.ref(result__);
    
    var nodes1870 = $("<span>");
    root2361.append(nodes1870);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp1795, function(_, callback) {
      var root2362 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2362); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1870;
      nodes1870 = node.contents();
      oldNodes.replaceWith(nodes1870);
    }));
    callback(root2361); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1869;
    nodes1869 = node.contents();
    oldNodes.replaceWith(nodes1869);
  }));
  var nodes1871 = $("<span>");
  root2360.append(nodes1871);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2363 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQ(5, 1000, function(result__) {
                       var tmp1804 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1796 = mobl.ref(result__);
    
    var nodes1872 = $("<span>");
    root2363.append(nodes1872);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1796, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2364 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1873 = $("<span>");
      root2364.append(nodes1873);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 core Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2365 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2365); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1873;
        nodes1873 = node.contents();
        oldNodes.replaceWith(nodes1873);
      }));
      callback(root2364); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1872;
      nodes1872 = node.contents();
      oldNodes.replaceWith(nodes1872);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQStar(5, function(result__) {
                       var tmp1803 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1797 = mobl.ref(result__);
    
    var nodes1874 = $("<span>");
    root2363.append(nodes1874);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1797, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2366 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1875 = $("<span>");
      root2366.append(nodes1875);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 further Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2367 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2367); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1875;
        nodes1875 = node.contents();
        oldNodes.replaceWith(nodes1875);
      }));
      callback(root2366); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1874;
      nodes1874 = node.contents();
      oldNodes.replaceWith(nodes1874);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQStats(5, function(result__) {
                       var tmp1802 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1798 = mobl.ref(result__);
    
    var nodes1876 = $("<span>");
    root2363.append(nodes1876);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1798, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2368 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1877 = $("<span>");
      root2368.append(nodes1877);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 stats Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2369 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2369); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1877;
        nodes1877 = node.contents();
        oldNodes.replaceWith(nodes1877);
      }));
      callback(root2368); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1876;
      nodes1876 = node.contents();
      oldNodes.replaceWith(nodes1876);
    }));
    callback(root2363); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1871;
    nodes1871 = node.contents();
    oldNodes.replaceWith(nodes1871);
  }));
  var nodes1878 = $("<span>");
  root2360.append(nodes1878);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Core topics</section>"), function(_, callback) {
    var root2370 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2370); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1878;
    nodes1878 = node.contents();
    oldNodes.replaceWith(nodes1878);
  }));
  var nodes1879 = $("<span>");
  root2360.append(nodes1879);
  subs__.addSub((nrichRPG.coreWorkout.addQA)(function(_, callback) {
    var root2371 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2371); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1879;
    nodes1879 = node.contents();
    oldNodes.replaceWith(nodes1879);
  }));
  var nodes1880 = $("<span>");
  root2360.append(nodes1880);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Further topics</section>"), function(_, callback) {
    var root2372 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2372); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1880;
    nodes1880 = node.contents();
    oldNodes.replaceWith(nodes1880);
  }));
  var nodes1881 = $("<span>");
  root2360.append(nodes1881);
  subs__.addSub((nrichRPG.coreWorkout.addQAPlus)(function(_, callback) {
    var root2373 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2373); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1881;
    nodes1881 = node.contents();
    oldNodes.replaceWith(nodes1881);
  }));
  var nodes1882 = $("<span>");
  root2360.append(nodes1882);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Stats topics</section>"), function(_, callback) {
    var root2374 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2374); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1882;
    nodes1882 = node.contents();
    oldNodes.replaceWith(nodes1882);
  }));
  var nodes1883 = $("<span>");
  root2360.append(nodes1883);
  subs__.addSub((nrichRPG.coreWorkout.addQAStats)(function(_, callback) {
    var root2375 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2375); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1883;
    nodes1883 = node.contents();
    oldNodes.replaceWith(nodes1883);
  }));
  callback(root2360); return subs__;
  
  
  
  
  
  
  
  
  return subs__;
};

mathmo.furtherTab = function(elements, callback) {
  var root2376 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1884 = $("<span>");
  root2376.append(nodes1884);
  subs__.addSub((ui.header)(mobl.ref("+Q on *topic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2377 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2377); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1884;
    nodes1884 = node.contents();
    oldNodes.replaceWith(nodes1884);
  }));
  var nodes1885 = $("<span>");
  root2376.append(nodes1885);
  subs__.addSub((nrichRPG.coreWorkout.addQAPlus)(function(_, callback) {
    var root2378 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2378); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1885;
    nodes1885 = node.contents();
    oldNodes.replaceWith(nodes1885);
  }));
  callback(root2376); return subs__;
  
  
  return subs__;
};

mathmo.aboutTab = function(elements, callback) {
  var root2379 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1886 = $("<span>");
  root2379.append(nodes1886);
  subs__.addSub((ui.header)(mobl.ref("About Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2380 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2380); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1886;
    nodes1886 = node.contents();
    oldNodes.replaceWith(nodes1886);
  }));
  
  var credits = mobl.ref("\n<div style=\"padding:20px\">\n<h2>\n<img src=\"icon.png\" style=\"width:50px;height:50px\"/>\nMathmo v0.3 by the <a href=\"http://nrich.maths.org\">NRICH team</a>, University of Cambridge\n</h2>\n<h3>Help</h3>\nOn the 'My Qs' tab you'll find your current set of Questions (abbr. Qs)<br>\nTouch [Clear] to delete all your current Qs.<br>\n<br>\nOn the 'Add' tab you can add 5 random core, further or stats questions, or choose them singly.\nFurther and Stats sections are at the bottom of the topic list.<br>\n<br>\nWhen a question is displayed, touch [Check Answer] to check working and then\nreply to 'Did you agree?' [Yes] [No]. You may need to do a little more work to see whether your answer is really the same or not.\nThe questions will change colour (red == No/Not answered; green == Yes, black == not checked) so you can track how you are doing.\n\n<h3>Updates</h3>\nMathmo is a web application, and should update itself when you reload the app after it has been updated on the server. It's web address is <a href=\"http://nrich.maths.org/mobl/mathmo/mathmo.html\">http://nrich.maths.org/mobl/mathmo/mathmo.html</a>.\n\n<h3>Credits</h3>\n<p>\nIdea: Stephen Hewson\n</p>\n<p>\n<a href=\"http://nrich.maths.org/public/titlesearch.php?search=interactive%20workout\">Desktop Implementation:</a>\n Tom White, Edward Cree\n</p>\n<p>\n<a href=\"http://github.com/gmp26/mathmo\">Mobile Implementation:</a> Mike Pearson\n</p>\n\n<p>\nThe following have been important in developing mathmo\n<ul>\n<li>\n<a href=\"http://www.mobl-lang.org\">Mobl-lang</a> by Zef Hemel, University of Delft.\n</li>\n<li>\nThe <a href=\"http://code.google.com/p/flot/\">flot plotting library</a>\n</li>\n\n</ul>\n<a href=\"http://www.mathjax.org/\">\n  <img title=\"Powered by MathJax\"\n       src=\"http://www.mathjax.org/badge.gif\"\n       border=\"0\" alt=\"Powered by MathJax\" />\n</a>\n\n<h3>License</h3>\n<a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\"><img alt=\"Creative Commons License\" style=\"border-width:0\" src=\"http://i.creativecommons.org/l/by-sa/3.0/88x31.png\" /></a><br /><span xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://purl.org/dc/dcmitype/InteractiveResource\" property=\"dct:title\" rel=\"dct:type\">Mathmo</span> by <a xmlns:cc=\"http://creativecommons.org/ns#\" href=\"http://nrich.maths.org\" property=\"cc:attributionName\" rel=\"cc:attributionURL\">NRICH Project, University of Cambridge</a> is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://github.com/gmp26/mathmo\" rel=\"dct:source\">github.com</a>.\n\n</div>\n");
  var nodes1887 = $("<span>");
  root2379.append(nodes1887);
  subs__.addSub((mobl.html)(credits, function(_, callback) {
    var root2381 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2381); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1887;
    nodes1887 = node.contents();
    oldNodes.replaceWith(nodes1887);
  }));
  callback(root2379); return subs__;
  
  
  return subs__;
};

mathmo.root = function(callback, screenCallback) {
  var root2382 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  mobl.fetchLanguageBundle("english.json", function(result__) {
    var tmp1805 = result__;
    var result__ = [new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)];
    var tmp1799 = mobl.ref(result__);
    subs__.addSub(mobl.ref(mathmo.qTab).addEventListener('change', function() {
      tmp1799.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    subs__.addSub(mobl.ref(mathmo.coreTab).addEventListener('change', function() {
      tmp1799.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    subs__.addSub(mobl.ref(mathmo.aboutTab).addEventListener('change', function() {
      tmp1799.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    
    var nodes1888 = $("<span>");
    root2382.append(nodes1888);
    subs__.addSub((ui.tabSet)(tmp1799, mobl.ref(null), function(_, callback) {
      var root2383 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2383); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1888;
      nodes1888 = node.contents();
      oldNodes.replaceWith(nodes1888);
    }));
    callback(root2382); return subs__;
    
  });
  return subs__;
};
