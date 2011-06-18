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
  var root9503 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7096 = $("<span>");
  root9503.append(nodes7096);
  subs__.addSub((ui.header)(mobl.ref("Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9504 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = mobl.openUrl(mathmo.resourceUrl.get());
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp6390 = mobl.ref(result__);
    
    var nodes7097 = $("<span>");
    root9504.append(nodes7097);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), tmp6390, mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root9505 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9505); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7097;
      nodes7097 = node.contents();
      oldNodes.replaceWith(nodes7097);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = mobl.openUrl(mathmo.homeUrl.get());
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp6391 = mobl.ref(result__);
    
    var nodes7098 = $("<span>");
    root9504.append(nodes7098);
    subs__.addSub((ui.image)(mobl.ref("nrichIcon.png"), mobl.ref(35), mobl.ref(35), tmp6391, mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root9506 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9506); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7098;
      nodes7098 = node.contents();
      oldNodes.replaceWith(nodes7098);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.clearAllQ(function(result__) {
                       var tmp6399 = result__;
                       var result__ = ui.hideCurrentQ();
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6392 = mobl.ref(result__);
    
    var nodes7099 = $("<span>");
    root9504.append(nodes7099);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp6392, function(_, callback) {
      var root9507 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9507); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7099;
      nodes7099 = node.contents();
      oldNodes.replaceWith(nodes7099);
    }));
    callback(root9504); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7096;
    nodes7096 = node.contents();
    oldNodes.replaceWith(nodes7096);
  }));
  var result__ = nrichRPG.questionAnswer.QA.all().order("number", true);
  var tmp6393 = mobl.ref(result__);
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all().order("number", true)).addEventListener('change', function() {
    tmp6393.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all()).addEventListener('change', function() {
    tmp6393.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA).addEventListener('change', function() {
    tmp6393.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  
  var nodes7100 = $("<span>");
  root9503.append(nodes7100);
  subs__.addSub((ui.mMasterDetail)(tmp6393, mobl.ref(nrichRPG.coreWorkout.qaItem), mobl.ref(nrichRPG.coreWorkout.showQA), function(_, callback) {
    var root9508 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9508); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7100;
    nodes7100 = node.contents();
    oldNodes.replaceWith(nodes7100);
  }));
  callback(root9503); return subs__;
  
  
  return subs__;
};

mathmo.coreTab = function(elements, callback) {
  var root9509 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7101 = $("<span>");
  root9509.append(nodes7101);
  subs__.addSub((ui.header)(mobl.ref("Q on topic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9510 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.clearAllQ(function(result__) {
                       var tmp6400 = result__;
                       var result__ = ui.hideCurrentQ();
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6394 = mobl.ref(result__);
    
    var nodes7102 = $("<span>");
    root9510.append(nodes7102);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp6394, function(_, callback) {
      var root9511 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9511); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7102;
      nodes7102 = node.contents();
      oldNodes.replaceWith(nodes7102);
    }));
    callback(root9510); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7101;
    nodes7101 = node.contents();
    oldNodes.replaceWith(nodes7101);
  }));
  var nodes7103 = $("<span>");
  root9509.append(nodes7103);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9512 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQ(5, 1000, function(result__) {
                       var tmp6403 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6395 = mobl.ref(result__);
    
    var nodes7104 = $("<span>");
    root9512.append(nodes7104);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6395, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9513 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7105 = $("<span>");
      root9513.append(nodes7105);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 core Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9514 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9514); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7105;
        nodes7105 = node.contents();
        oldNodes.replaceWith(nodes7105);
      }));
      callback(root9513); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7104;
      nodes7104 = node.contents();
      oldNodes.replaceWith(nodes7104);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQStar(5, function(result__) {
                       var tmp6402 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6396 = mobl.ref(result__);
    
    var nodes7106 = $("<span>");
    root9512.append(nodes7106);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6396, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9515 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7107 = $("<span>");
      root9515.append(nodes7107);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 further Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9516 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9516); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7107;
        nodes7107 = node.contents();
        oldNodes.replaceWith(nodes7107);
      }));
      callback(root9515); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7106;
      nodes7106 = node.contents();
      oldNodes.replaceWith(nodes7106);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQStats(5, function(result__) {
                       var tmp6401 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6397 = mobl.ref(result__);
    
    var nodes7108 = $("<span>");
    root9512.append(nodes7108);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6397, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root9517 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes7109 = $("<span>");
      root9517.append(nodes7109);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 stats Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9518 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9518); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7109;
        nodes7109 = node.contents();
        oldNodes.replaceWith(nodes7109);
      }));
      callback(root9517); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7108;
      nodes7108 = node.contents();
      oldNodes.replaceWith(nodes7108);
    }));
    callback(root9512); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7103;
    nodes7103 = node.contents();
    oldNodes.replaceWith(nodes7103);
  }));
  var nodes7110 = $("<span>");
  root9509.append(nodes7110);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Core topics</section>"), function(_, callback) {
    var root9519 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9519); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7110;
    nodes7110 = node.contents();
    oldNodes.replaceWith(nodes7110);
  }));
  var nodes7111 = $("<span>");
  root9509.append(nodes7111);
  subs__.addSub((nrichRPG.coreWorkout.addQA)(function(_, callback) {
    var root9520 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9520); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7111;
    nodes7111 = node.contents();
    oldNodes.replaceWith(nodes7111);
  }));
  var nodes7112 = $("<span>");
  root9509.append(nodes7112);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Further topics</section>"), function(_, callback) {
    var root9521 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9521); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7112;
    nodes7112 = node.contents();
    oldNodes.replaceWith(nodes7112);
  }));
  var nodes7113 = $("<span>");
  root9509.append(nodes7113);
  subs__.addSub((nrichRPG.coreWorkout.addQAPlus)(function(_, callback) {
    var root9522 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9522); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7113;
    nodes7113 = node.contents();
    oldNodes.replaceWith(nodes7113);
  }));
  var nodes7114 = $("<span>");
  root9509.append(nodes7114);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Stats topics</section>"), function(_, callback) {
    var root9523 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9523); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7114;
    nodes7114 = node.contents();
    oldNodes.replaceWith(nodes7114);
  }));
  var nodes7115 = $("<span>");
  root9509.append(nodes7115);
  subs__.addSub((nrichRPG.coreWorkout.addQAStats)(function(_, callback) {
    var root9524 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9524); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7115;
    nodes7115 = node.contents();
    oldNodes.replaceWith(nodes7115);
  }));
  callback(root9509); return subs__;
  
  
  
  
  
  
  
  
  return subs__;
};

mathmo.furtherTab = function(elements, callback) {
  var root9525 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7116 = $("<span>");
  root9525.append(nodes7116);
  subs__.addSub((ui.header)(mobl.ref("+Q on *topic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9526 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9526); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7116;
    nodes7116 = node.contents();
    oldNodes.replaceWith(nodes7116);
  }));
  var nodes7117 = $("<span>");
  root9525.append(nodes7117);
  subs__.addSub((nrichRPG.coreWorkout.addQAPlus)(function(_, callback) {
    var root9527 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9527); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7117;
    nodes7117 = node.contents();
    oldNodes.replaceWith(nodes7117);
  }));
  callback(root9525); return subs__;
  
  
  return subs__;
};

mathmo.aboutTab = function(elements, callback) {
  var root9528 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7118 = $("<span>");
  root9528.append(nodes7118);
  subs__.addSub((ui.header)(mobl.ref("About Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9529 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9529); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7118;
    nodes7118 = node.contents();
    oldNodes.replaceWith(nodes7118);
  }));
  
  var credits = mobl.ref("\n<div style=\"padding:20px\">\n<h2>\n<img src=\"icon.png\" style=\"width:50px;height:50px\"/>\nMathmo v0.3 by the <a href=\"http://nrich.maths.org\">NRICH team</a>, University of Cambridge\n</h2>\n<h3>Help</h3>\nOn the 'My Qs' tab you'll find your current set of Questions (abbr. Qs)<br>\nTouch [Clear] to delete all your current Qs.<br>\n<br>\nOn the 'Add' tab you can add 5 random core, further or stats questions, or choose them singly.\nFurther and Stats sections are at the bottom of the topic list.<br>\n<br>\nWhen a question is displayed, touch [Check Answer] to check working and then\nreply to 'Did you agree?' [Yes] [No]. You may need to do a little more work to see whether your answer is really the same or not.\nThe questions will change colour (red == No/Not answered; green == Yes, black == not checked) so you can track how you are doing.\n\n<h3>Updates</h3>\nMathmo is a web application, and should update itself when you reload the app after it has been updated on the server. It's web address is <a href=\"http://nrich.maths.org/mobl/mathmo/mathmo.html\">http://nrich.maths.org/mobl/mathmo/mathmo.html</a>.\n\n<h3>Credits</h3>\n<p>\nIdea: Stephen Hewson\n</p>\n<p>\n<a href=\"http://nrich.maths.org/public/titlesearch.php?search=interactive%20workout\">Desktop Implementation:</a>\n Tom White, Edward Cree\n</p>\n<p>\n<a href=\"http://github.com/gmp26/mathmo\">Mobile Implementation:</a> Mike Pearson\n</p>\n\n<p>\nThe following have been important in developing mathmo\n<ul>\n<li>\n<a href=\"http://www.mobl-lang.org\">Mobl-lang</a> by Zef Hemel, University of Delft.\n</li>\n<li>\nThe <a href=\"http://code.google.com/p/flot/\">flot plotting library</a>\n</li>\n\n</ul>\n<a href=\"http://www.mathjax.org/\">\n  <img title=\"Powered by MathJax\"\n       src=\"http://www.mathjax.org/badge.gif\"\n       border=\"0\" alt=\"Powered by MathJax\" />\n</a>\n\n<h3>License</h3>\n<a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\"><img alt=\"Creative Commons License\" style=\"border-width:0\" src=\"http://i.creativecommons.org/l/by-sa/3.0/88x31.png\" /></a><br /><span xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://purl.org/dc/dcmitype/InteractiveResource\" property=\"dct:title\" rel=\"dct:type\">Mathmo</span> by <a xmlns:cc=\"http://creativecommons.org/ns#\" href=\"http://nrich.maths.org\" property=\"cc:attributionName\" rel=\"cc:attributionURL\">NRICH Project, University of Cambridge</a> is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://github.com/gmp26/mathmo\" rel=\"dct:source\">github.com</a>.\n\n</div>\n");
  var nodes7119 = $("<span>");
  root9528.append(nodes7119);
  subs__.addSub((mobl.html)(credits, function(_, callback) {
    var root9530 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9530); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7119;
    nodes7119 = node.contents();
    oldNodes.replaceWith(nodes7119);
  }));
  callback(root9528); return subs__;
  
  
  return subs__;
};

mathmo.root = function(callback, screenCallback) {
  var root9531 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  mobl.fetchLanguageBundle("english.json", function(result__) {
    var tmp6404 = result__;
    var result__ = [new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)];
    var tmp6398 = mobl.ref(result__);
    subs__.addSub(mobl.ref(mathmo.qTab).addEventListener('change', function() {
      tmp6398.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    subs__.addSub(mobl.ref(mathmo.coreTab).addEventListener('change', function() {
      tmp6398.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    subs__.addSub(mobl.ref(mathmo.aboutTab).addEventListener('change', function() {
      tmp6398.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    
    var nodes7120 = $("<span>");
    root9531.append(nodes7120);
    subs__.addSub((ui.tabSet)(tmp6398, mobl.ref(null), function(_, callback) {
      var root9532 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9532); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7120;
      nodes7120 = node.contents();
      oldNodes.replaceWith(nodes7120);
    }));
    callback(root9531); return subs__;
    
  });
  return subs__;
};
