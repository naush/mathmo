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
  var root8968 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes6731 = $("<span>");
  root8968.append(nodes6731);
  subs__.addSub((ui.header)(mobl.ref("Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root8969 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = mobl.openUrl(mathmo.resourceUrl.get());
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp6099 = mobl.ref(result__);
    
    var nodes6732 = $("<span>");
    root8969.append(nodes6732);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), tmp6099, mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root8970 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8970); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6732;
      nodes6732 = node.contents();
      oldNodes.replaceWith(nodes6732);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = mobl.openUrl(mathmo.homeUrl.get());
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp6100 = mobl.ref(result__);
    
    var nodes6733 = $("<span>");
    root8969.append(nodes6733);
    subs__.addSub((ui.image)(mobl.ref("nrichIcon.png"), mobl.ref(35), mobl.ref(35), tmp6100, mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root8971 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8971); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6733;
      nodes6733 = node.contents();
      oldNodes.replaceWith(nodes6733);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.clearAllQ(function(result__) {
                       var tmp6108 = result__;
                       var result__ = ui.deleteCurrentQ();
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6101 = mobl.ref(result__);
    
    var nodes6734 = $("<span>");
    root8969.append(nodes6734);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp6101, function(_, callback) {
      var root8972 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8972); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6734;
      nodes6734 = node.contents();
      oldNodes.replaceWith(nodes6734);
    }));
    callback(root8969); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6731;
    nodes6731 = node.contents();
    oldNodes.replaceWith(nodes6731);
  }));
  var result__ = nrichRPG.questionAnswer.QA.all().order("number", true);
  var tmp6102 = mobl.ref(result__);
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all().order("number", true)).addEventListener('change', function() {
    tmp6102.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all()).addEventListener('change', function() {
    tmp6102.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA).addEventListener('change', function() {
    tmp6102.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  
  var nodes6735 = $("<span>");
  root8968.append(nodes6735);
  subs__.addSub((ui.mMasterDetail)(tmp6102, mobl.ref(nrichRPG.coreWorkout.qaItem), mobl.ref(nrichRPG.coreWorkout.showQA), function(_, callback) {
    var root8973 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8973); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6735;
    nodes6735 = node.contents();
    oldNodes.replaceWith(nodes6735);
  }));
  callback(root8968); return subs__;
  
  
  return subs__;
};

mathmo.coreTab = function(elements, callback) {
  var root8974 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes6736 = $("<span>");
  root8974.append(nodes6736);
  subs__.addSub((ui.header)(mobl.ref("Q on topic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root8975 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.clearAllQ(function(result__) {
                       var tmp6109 = result__;
                       var result__ = ui.deleteCurrentQ();
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6103 = mobl.ref(result__);
    
    var nodes6737 = $("<span>");
    root8975.append(nodes6737);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp6103, function(_, callback) {
      var root8976 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8976); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6737;
      nodes6737 = node.contents();
      oldNodes.replaceWith(nodes6737);
    }));
    callback(root8975); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6736;
    nodes6736 = node.contents();
    oldNodes.replaceWith(nodes6736);
  }));
  var nodes6738 = $("<span>");
  root8974.append(nodes6738);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8977 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQ(5, 1000, function(result__) {
                       var tmp6112 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6104 = mobl.ref(result__);
    
    var nodes6739 = $("<span>");
    root8977.append(nodes6739);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6104, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8978 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6740 = $("<span>");
      root8978.append(nodes6740);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 core Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8979 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8979); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6740;
        nodes6740 = node.contents();
        oldNodes.replaceWith(nodes6740);
      }));
      callback(root8978); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6739;
      nodes6739 = node.contents();
      oldNodes.replaceWith(nodes6739);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQStar(5, function(result__) {
                       var tmp6111 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6105 = mobl.ref(result__);
    
    var nodes6741 = $("<span>");
    root8977.append(nodes6741);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6105, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8980 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6742 = $("<span>");
      root8980.append(nodes6742);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 further Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8981 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8981); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6742;
        nodes6742 = node.contents();
        oldNodes.replaceWith(nodes6742);
      }));
      callback(root8980); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6741;
      nodes6741 = node.contents();
      oldNodes.replaceWith(nodes6741);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQStats(5, function(result__) {
                       var tmp6110 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6106 = mobl.ref(result__);
    
    var nodes6743 = $("<span>");
    root8977.append(nodes6743);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6106, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8982 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6744 = $("<span>");
      root8982.append(nodes6744);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 stats Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8983 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8983); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6744;
        nodes6744 = node.contents();
        oldNodes.replaceWith(nodes6744);
      }));
      callback(root8982); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6743;
      nodes6743 = node.contents();
      oldNodes.replaceWith(nodes6743);
    }));
    callback(root8977); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6738;
    nodes6738 = node.contents();
    oldNodes.replaceWith(nodes6738);
  }));
  var nodes6745 = $("<span>");
  root8974.append(nodes6745);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Core topics</section>"), function(_, callback) {
    var root8984 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8984); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6745;
    nodes6745 = node.contents();
    oldNodes.replaceWith(nodes6745);
  }));
  var nodes6746 = $("<span>");
  root8974.append(nodes6746);
  subs__.addSub((nrichRPG.coreWorkout.addQA)(function(_, callback) {
    var root8985 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8985); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6746;
    nodes6746 = node.contents();
    oldNodes.replaceWith(nodes6746);
  }));
  var nodes6747 = $("<span>");
  root8974.append(nodes6747);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Further topics</section>"), function(_, callback) {
    var root8986 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8986); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6747;
    nodes6747 = node.contents();
    oldNodes.replaceWith(nodes6747);
  }));
  var nodes6748 = $("<span>");
  root8974.append(nodes6748);
  subs__.addSub((nrichRPG.coreWorkout.addQAPlus)(function(_, callback) {
    var root8987 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8987); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6748;
    nodes6748 = node.contents();
    oldNodes.replaceWith(nodes6748);
  }));
  var nodes6749 = $("<span>");
  root8974.append(nodes6749);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Stats topics</section>"), function(_, callback) {
    var root8988 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8988); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6749;
    nodes6749 = node.contents();
    oldNodes.replaceWith(nodes6749);
  }));
  var nodes6750 = $("<span>");
  root8974.append(nodes6750);
  subs__.addSub((nrichRPG.coreWorkout.addQAStats)(function(_, callback) {
    var root8989 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8989); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6750;
    nodes6750 = node.contents();
    oldNodes.replaceWith(nodes6750);
  }));
  callback(root8974); return subs__;
  
  
  
  
  
  
  
  
  return subs__;
};

mathmo.furtherTab = function(elements, callback) {
  var root8990 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes6751 = $("<span>");
  root8990.append(nodes6751);
  subs__.addSub((ui.header)(mobl.ref("+Q on *topic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root8991 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8991); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6751;
    nodes6751 = node.contents();
    oldNodes.replaceWith(nodes6751);
  }));
  var nodes6752 = $("<span>");
  root8990.append(nodes6752);
  subs__.addSub((nrichRPG.coreWorkout.addQAPlus)(function(_, callback) {
    var root8992 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8992); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6752;
    nodes6752 = node.contents();
    oldNodes.replaceWith(nodes6752);
  }));
  callback(root8990); return subs__;
  
  
  return subs__;
};

mathmo.aboutTab = function(elements, callback) {
  var root8993 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes6753 = $("<span>");
  root8993.append(nodes6753);
  subs__.addSub((ui.header)(mobl.ref("About Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root8994 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8994); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6753;
    nodes6753 = node.contents();
    oldNodes.replaceWith(nodes6753);
  }));
  
  var credits = mobl.ref("\n<div style=\"padding:20px\">\n<h2>\n<img src=\"icon.png\" style=\"width:50px;height:50px\"/>\nMathmo v0.3 by the <a href=\"http://nrich.maths.org\">NRICH team</a>, University of Cambridge\n</h2>\n<h3>Help</h3>\nOn the 'My Qs' tab you'll find your current set of Questions (abbr. Qs)<br>\nTouch [Clear] to delete all your current Qs.<br>\n<br>\nOn the 'Add' tab you can add 5 random core, further or stats questions, or choose them singly.\nFurther and Stats sections are at the bottom of the topic list.<br>\n<br>\nWhen a question is displayed, touch [Check Answer] to check working and then\nreply to 'Did you agree?' [Yes] [No]. You may need to do a little more work to see whether your answer is really the same or not.\nThe questions will change colour (red == No/Not answered; green == Yes, black == not checked) so you can track how you are doing.\n\n<h3>Updates</h3>\nMathmo is a web application, and should update itself when you reload the app after it has been updated on the server. It's web address is <a href=\"http://nrich.maths.org/mobl/mathmo/mathmo.html\">http://nrich.maths.org/mobl/mathmo/mathmo.html</a>.\n\n<h3>Credits</h3>\n<p>\nIdea: Stephen Hewson\n</p>\n<p>\n<a href=\"http://nrich.maths.org/public/titlesearch.php?search=interactive%20workout\">Desktop Implementation:</a>\n Tom White, Edward Cree\n</p>\n<p>\n<a href=\"http://github.com/gmp26/mathmo\">Mobile Implementation:</a> Mike Pearson\n</p>\n\n<p>\nThe following have been important in developing mathmo\n<ul>\n<li>\n<a href=\"http://www.mobl-lang.org\">Mobl-lang</a> by Zef Hemel, University of Delft.\n</li>\n<li>\nThe <a href=\"http://code.google.com/p/flot/\">flot plotting library</a>\n</li>\n\n</ul>\n<a href=\"http://www.mathjax.org/\">\n  <img title=\"Powered by MathJax\"\n       src=\"http://www.mathjax.org/badge.gif\"\n       border=\"0\" alt=\"Powered by MathJax\" />\n</a>\n\n<h3>License</h3>\n<a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\"><img alt=\"Creative Commons License\" style=\"border-width:0\" src=\"http://i.creativecommons.org/l/by-sa/3.0/88x31.png\" /></a><br /><span xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://purl.org/dc/dcmitype/InteractiveResource\" property=\"dct:title\" rel=\"dct:type\">Mathmo</span> by <a xmlns:cc=\"http://creativecommons.org/ns#\" href=\"http://nrich.maths.org\" property=\"cc:attributionName\" rel=\"cc:attributionURL\">NRICH Project, University of Cambridge</a> is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://github.com/gmp26/mathmo\" rel=\"dct:source\">github.com</a>.\n\n</div>\n");
  var nodes6754 = $("<span>");
  root8993.append(nodes6754);
  subs__.addSub((mobl.html)(credits, function(_, callback) {
    var root8995 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8995); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6754;
    nodes6754 = node.contents();
    oldNodes.replaceWith(nodes6754);
  }));
  callback(root8993); return subs__;
  
  
  return subs__;
};

mathmo.root = function(callback, screenCallback) {
  var root8996 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  mobl.fetchLanguageBundle("english.json", function(result__) {
    var tmp6113 = result__;
    var result__ = [new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)];
    var tmp6107 = mobl.ref(result__);
    subs__.addSub(mobl.ref(mathmo.qTab).addEventListener('change', function() {
      tmp6107.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    subs__.addSub(mobl.ref(mathmo.coreTab).addEventListener('change', function() {
      tmp6107.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    subs__.addSub(mobl.ref(mathmo.aboutTab).addEventListener('change', function() {
      tmp6107.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    
    var nodes6755 = $("<span>");
    root8996.append(nodes6755);
    subs__.addSub((ui.tabSet)(tmp6107, mobl.ref(null), function(_, callback) {
      var root8997 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8997); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6755;
      nodes6755 = node.contents();
      oldNodes.replaceWith(nodes6755);
    }));
    callback(root8996); return subs__;
    
  });
  return subs__;
};
