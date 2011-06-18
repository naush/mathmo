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
  var root2324 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1839 = $("<span>");
  root2324.append(nodes1839);
  subs__.addSub((ui.header)(mobl.ref("Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2325 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = mobl.openUrl(mathmo.resourceUrl.get());
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1776 = mobl.ref(result__);
    
    var nodes1840 = $("<span>");
    root2325.append(nodes1840);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), tmp1776, mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root2326 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2326); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1840;
      nodes1840 = node.contents();
      oldNodes.replaceWith(nodes1840);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = mobl.openUrl(mathmo.homeUrl.get());
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp1777 = mobl.ref(result__);
    
    var nodes1841 = $("<span>");
    root2325.append(nodes1841);
    subs__.addSub((ui.image)(mobl.ref("nrichIcon.png"), mobl.ref(35), mobl.ref(35), tmp1777, mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root2327 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2327); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1841;
      nodes1841 = node.contents();
      oldNodes.replaceWith(nodes1841);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.clearAllQ(function(result__) {
                       var tmp1785 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1778 = mobl.ref(result__);
    
    var nodes1842 = $("<span>");
    root2325.append(nodes1842);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp1778, function(_, callback) {
      var root2328 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2328); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1842;
      nodes1842 = node.contents();
      oldNodes.replaceWith(nodes1842);
    }));
    callback(root2325); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1839;
    nodes1839 = node.contents();
    oldNodes.replaceWith(nodes1839);
  }));
  var result__ = nrichRPG.questionAnswer.QA.all().filter("done", "=", false).order("number", true);
  var tmp1779 = mobl.ref(result__);
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all().filter("done", "=", false).order("number", true)).addEventListener('change', function() {
    tmp1779.set(nrichRPG.questionAnswer.QA.all().filter("done", "=", false).order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all().filter("done", "=", false)).addEventListener('change', function() {
    tmp1779.set(nrichRPG.questionAnswer.QA.all().filter("done", "=", false).order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all()).addEventListener('change', function() {
    tmp1779.set(nrichRPG.questionAnswer.QA.all().filter("done", "=", false).order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA).addEventListener('change', function() {
    tmp1779.set(nrichRPG.questionAnswer.QA.all().filter("done", "=", false).order("number", true));
  }));
  
  var nodes1843 = $("<span>");
  root2324.append(nodes1843);
  subs__.addSub((ui.mMasterDetail)(tmp1779, mobl.ref(nrichRPG.coreWorkout.qaItem), mobl.ref(nrichRPG.coreWorkout.showQA), function(_, callback) {
    var root2329 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2329); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1843;
    nodes1843 = node.contents();
    oldNodes.replaceWith(nodes1843);
  }));
  callback(root2324); return subs__;
  
  
  return subs__;
};

mathmo.coreTab = function(elements, callback) {
  var root2330 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1844 = $("<span>");
  root2330.append(nodes1844);
  subs__.addSub((ui.header)(mobl.ref("Q on topic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2331 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.clearAllQ(function(result__) {
                       var tmp1786 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1780 = mobl.ref(result__);
    
    var nodes1845 = $("<span>");
    root2331.append(nodes1845);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp1780, function(_, callback) {
      var root2332 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2332); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1845;
      nodes1845 = node.contents();
      oldNodes.replaceWith(nodes1845);
    }));
    callback(root2331); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1844;
    nodes1844 = node.contents();
    oldNodes.replaceWith(nodes1844);
  }));
  var nodes1846 = $("<span>");
  root2330.append(nodes1846);
  subs__.addSub((ui.group)(function(_, callback) {
    var root2333 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQ(5, 1000, function(result__) {
                       var tmp1789 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1781 = mobl.ref(result__);
    
    var nodes1847 = $("<span>");
    root2333.append(nodes1847);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1781, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2334 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1848 = $("<span>");
      root2334.append(nodes1848);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 core Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2335 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2335); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1848;
        nodes1848 = node.contents();
        oldNodes.replaceWith(nodes1848);
      }));
      callback(root2334); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1847;
      nodes1847 = node.contents();
      oldNodes.replaceWith(nodes1847);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQStar(5, function(result__) {
                       var tmp1788 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1782 = mobl.ref(result__);
    
    var nodes1849 = $("<span>");
    root2333.append(nodes1849);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1782, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2336 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1850 = $("<span>");
      root2336.append(nodes1850);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 further Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2337 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2337); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1850;
        nodes1850 = node.contents();
        oldNodes.replaceWith(nodes1850);
      }));
      callback(root2336); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1849;
      nodes1849 = node.contents();
      oldNodes.replaceWith(nodes1849);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQStats(5, function(result__) {
                       var tmp1787 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp1783 = mobl.ref(result__);
    
    var nodes1851 = $("<span>");
    root2333.append(nodes1851);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp1783, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root2338 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes1852 = $("<span>");
      root2338.append(nodes1852);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 stats Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root2339 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root2339); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes1852;
        nodes1852 = node.contents();
        oldNodes.replaceWith(nodes1852);
      }));
      callback(root2338); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes1851;
      nodes1851 = node.contents();
      oldNodes.replaceWith(nodes1851);
    }));
    callback(root2333); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes1846;
    nodes1846 = node.contents();
    oldNodes.replaceWith(nodes1846);
  }));
  var nodes1853 = $("<span>");
  root2330.append(nodes1853);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Core topics</section>"), function(_, callback) {
    var root2340 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2340); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1853;
    nodes1853 = node.contents();
    oldNodes.replaceWith(nodes1853);
  }));
  var nodes1854 = $("<span>");
  root2330.append(nodes1854);
  subs__.addSub((nrichRPG.coreWorkout.addQA)(function(_, callback) {
    var root2341 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2341); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1854;
    nodes1854 = node.contents();
    oldNodes.replaceWith(nodes1854);
  }));
  var nodes1855 = $("<span>");
  root2330.append(nodes1855);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Further topics</section>"), function(_, callback) {
    var root2342 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2342); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1855;
    nodes1855 = node.contents();
    oldNodes.replaceWith(nodes1855);
  }));
  var nodes1856 = $("<span>");
  root2330.append(nodes1856);
  subs__.addSub((nrichRPG.coreWorkout.addQAPlus)(function(_, callback) {
    var root2343 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2343); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1856;
    nodes1856 = node.contents();
    oldNodes.replaceWith(nodes1856);
  }));
  var nodes1857 = $("<span>");
  root2330.append(nodes1857);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Stats topics</section>"), function(_, callback) {
    var root2344 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2344); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1857;
    nodes1857 = node.contents();
    oldNodes.replaceWith(nodes1857);
  }));
  var nodes1858 = $("<span>");
  root2330.append(nodes1858);
  subs__.addSub((nrichRPG.coreWorkout.addQAStats)(function(_, callback) {
    var root2345 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2345); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1858;
    nodes1858 = node.contents();
    oldNodes.replaceWith(nodes1858);
  }));
  callback(root2330); return subs__;
  
  
  
  
  
  
  
  
  return subs__;
};

mathmo.furtherTab = function(elements, callback) {
  var root2346 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1859 = $("<span>");
  root2346.append(nodes1859);
  subs__.addSub((ui.header)(mobl.ref("+Q on *topic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2347 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2347); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1859;
    nodes1859 = node.contents();
    oldNodes.replaceWith(nodes1859);
  }));
  var nodes1860 = $("<span>");
  root2346.append(nodes1860);
  subs__.addSub((nrichRPG.coreWorkout.addQAPlus)(function(_, callback) {
    var root2348 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2348); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1860;
    nodes1860 = node.contents();
    oldNodes.replaceWith(nodes1860);
  }));
  callback(root2346); return subs__;
  
  
  return subs__;
};

mathmo.aboutTab = function(elements, callback) {
  var root2349 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes1861 = $("<span>");
  root2349.append(nodes1861);
  subs__.addSub((ui.header)(mobl.ref("About Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root2350 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2350); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1861;
    nodes1861 = node.contents();
    oldNodes.replaceWith(nodes1861);
  }));
  
  var credits = mobl.ref("\n<div style=\"padding:20px\">\n<h2>\n<img src=\"icon.png\" style=\"width:50px;height:50px\"/>\nMathmo v0.3 by the <a href=\"http://nrich.maths.org\">NRICH team</a>, University of Cambridge\n</h2>\n<h3>Help</h3>\nOn the 'My Qs' tab you'll find your current set of Questions (abbr. Qs)<br>\nTouch [Clear] to delete all your current Qs.<br>\n<br>\nOn the 'Add' tab you can add 5 random core, further or stats questions, or choose them singly.\nFurther and Stats sections are at the bottom of the topic list.<br>\n<br>\nWhen a question is displayed, touch [Check Answer] to check working and then\nreply to 'Did you agree?' [Yes] [No]. You may need to do a little more work to see whether your answer is really the same or not.\nThe questions will change colour (red == No/Not answered; green == Yes, black == not checked) so you can track how you are doing.\n\n<h3>Updates</h3>\nMathmo is a web application, and should update itself when you reload the app after it has been updated on the server. It's web address is <a href=\"http://nrich.maths.org/mobl/mathmo/mathmo.html\">http://nrich.maths.org/mobl/mathmo/mathmo.html</a>.\n\n<h3>Credits</h3>\n<p>\nIdea: Stephen Hewson\n</p>\n<p>\n<a href=\"http://nrich.maths.org/public/titlesearch.php?search=interactive%20workout\">Desktop Implementation:</a>\n Tom White, Edward Cree\n</p>\n<p>\n<a href=\"http://github.com/gmp26/mathmo\">Mobile Implementation:</a> Mike Pearson\n</p>\n\n<p>\nThe following have been important in developing mathmo\n<ul>\n<li>\n<a href=\"http://www.mobl-lang.org\">Mobl-lang</a> by Zef Hemel, University of Delft.\n</li>\n<li>\nThe <a href=\"http://code.google.com/p/flot/\">flot plotting library</a>\n</li>\n\n</ul>\n<a href=\"http://www.mathjax.org/\">\n  <img title=\"Powered by MathJax\"\n       src=\"http://www.mathjax.org/badge.gif\"\n       border=\"0\" alt=\"Powered by MathJax\" />\n</a>\n\n<h3>License</h3>\n<a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\"><img alt=\"Creative Commons License\" style=\"border-width:0\" src=\"http://i.creativecommons.org/l/by-sa/3.0/88x31.png\" /></a><br /><span xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://purl.org/dc/dcmitype/InteractiveResource\" property=\"dct:title\" rel=\"dct:type\">Mathmo</span> by <a xmlns:cc=\"http://creativecommons.org/ns#\" href=\"http://nrich.maths.org\" property=\"cc:attributionName\" rel=\"cc:attributionURL\">NRICH Project, University of Cambridge</a> is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://github.com/gmp26/mathmo\" rel=\"dct:source\">github.com</a>.\n\n</div>\n");
  var nodes1862 = $("<span>");
  root2349.append(nodes1862);
  subs__.addSub((mobl.html)(credits, function(_, callback) {
    var root2351 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root2351); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes1862;
    nodes1862 = node.contents();
    oldNodes.replaceWith(nodes1862);
  }));
  callback(root2349); return subs__;
  
  
  return subs__;
};

mathmo.root = function(callback, screenCallback) {
  var root2352 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  mobl.fetchLanguageBundle("english.json", function(result__) {
    var tmp1790 = result__;
    var result__ = [new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)];
    var tmp1784 = mobl.ref(result__);
    subs__.addSub(mobl.ref(mathmo.qTab).addEventListener('change', function() {
      tmp1784.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    subs__.addSub(mobl.ref(mathmo.coreTab).addEventListener('change', function() {
      tmp1784.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    subs__.addSub(mobl.ref(mathmo.aboutTab).addEventListener('change', function() {
      tmp1784.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    
    var nodes1863 = $("<span>");
    root2352.append(nodes1863);
    subs__.addSub((ui.tabSet)(tmp1784, mobl.ref(null), function(_, callback) {
      var root2353 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root2353); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes1863;
      nodes1863 = node.contents();
      oldNodes.replaceWith(nodes1863);
    }));
    callback(root2352); return subs__;
    
  });
  return subs__;
};
