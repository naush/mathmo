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
  var root8429 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes6298 = $("<span>");
  root8429.append(nodes6298);
  subs__.addSub((ui.header)(mobl.ref("Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root8430 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = mobl.openUrl(mathmo.resourceUrl.get());
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp5739 = mobl.ref(result__);
    
    var nodes6299 = $("<span>");
    root8430.append(nodes6299);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), tmp5739, mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root8431 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8431); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6299;
      nodes6299 = node.contents();
      oldNodes.replaceWith(nodes6299);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = mobl.openUrl(mathmo.homeUrl.get());
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp5740 = mobl.ref(result__);
    
    var nodes6300 = $("<span>");
    root8430.append(nodes6300);
    subs__.addSub((ui.image)(mobl.ref("nrichIcon.png"), mobl.ref(35), mobl.ref(35), tmp5740, mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root8432 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8432); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6300;
      nodes6300 = node.contents();
      oldNodes.replaceWith(nodes6300);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     ui.clearAllQ(function(result__) {
                       var tmp5748 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5741 = mobl.ref(result__);
    
    var nodes6301 = $("<span>");
    root8430.append(nodes6301);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp5741, function(_, callback) {
      var root8433 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8433); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6301;
      nodes6301 = node.contents();
      oldNodes.replaceWith(nodes6301);
    }));
    callback(root8430); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6298;
    nodes6298 = node.contents();
    oldNodes.replaceWith(nodes6298);
  }));
  var result__ = nrichRPG.questionAnswer.QA.all().order("number", true);
  var tmp5742 = mobl.ref(result__);
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all().order("number", true)).addEventListener('change', function() {
    tmp5742.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all()).addEventListener('change', function() {
    tmp5742.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA).addEventListener('change', function() {
    tmp5742.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  
  var nodes6302 = $("<span>");
  root8429.append(nodes6302);
  subs__.addSub((ui.mMasterDetail)(tmp5742, mobl.ref(nrichRPG.coreWorkout.qaItem), mobl.ref(nrichRPG.coreWorkout.showQA), function(_, callback) {
    var root8434 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8434); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6302;
    nodes6302 = node.contents();
    oldNodes.replaceWith(nodes6302);
  }));
  callback(root8429); return subs__;
  
  
  return subs__;
};

mathmo.coreTab = function(elements, callback) {
  var root8435 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes6303 = $("<span>");
  root8435.append(nodes6303);
  subs__.addSub((ui.header)(mobl.ref("Q on topic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root8436 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     ui.clearAllQ(function(result__) {
                       var tmp5749 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5743 = mobl.ref(result__);
    
    var nodes6304 = $("<span>");
    root8436.append(nodes6304);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp5743, function(_, callback) {
      var root8437 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8437); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6304;
      nodes6304 = node.contents();
      oldNodes.replaceWith(nodes6304);
    }));
    callback(root8436); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6303;
    nodes6303 = node.contents();
    oldNodes.replaceWith(nodes6303);
  }));
  var nodes6305 = $("<span>");
  root8435.append(nodes6305);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8438 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQ(5, 1000, function(result__) {
                       var tmp5752 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5744 = mobl.ref(result__);
    
    var nodes6306 = $("<span>");
    root8438.append(nodes6306);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5744, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8439 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6307 = $("<span>");
      root8439.append(nodes6307);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 core Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8440 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8440); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6307;
        nodes6307 = node.contents();
        oldNodes.replaceWith(nodes6307);
      }));
      callback(root8439); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6306;
      nodes6306 = node.contents();
      oldNodes.replaceWith(nodes6306);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQStar(5, function(result__) {
                       var tmp5751 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5745 = mobl.ref(result__);
    
    var nodes6308 = $("<span>");
    root8438.append(nodes6308);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5745, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8441 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6309 = $("<span>");
      root8441.append(nodes6309);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 further Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8442 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8442); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6309;
        nodes6309 = node.contents();
        oldNodes.replaceWith(nodes6309);
      }));
      callback(root8441); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6308;
      nodes6308 = node.contents();
      oldNodes.replaceWith(nodes6308);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQStats(5, function(result__) {
                       var tmp5750 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp5746 = mobl.ref(result__);
    
    var nodes6310 = $("<span>");
    root8438.append(nodes6310);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp5746, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8443 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6311 = $("<span>");
      root8443.append(nodes6311);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 stats Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8444 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8444); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6311;
        nodes6311 = node.contents();
        oldNodes.replaceWith(nodes6311);
      }));
      callback(root8443); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6310;
      nodes6310 = node.contents();
      oldNodes.replaceWith(nodes6310);
    }));
    callback(root8438); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6305;
    nodes6305 = node.contents();
    oldNodes.replaceWith(nodes6305);
  }));
  var nodes6312 = $("<span>");
  root8435.append(nodes6312);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Core topics</section>"), function(_, callback) {
    var root8445 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8445); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6312;
    nodes6312 = node.contents();
    oldNodes.replaceWith(nodes6312);
  }));
  var nodes6313 = $("<span>");
  root8435.append(nodes6313);
  subs__.addSub((nrichRPG.coreWorkout.addQA)(function(_, callback) {
    var root8446 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8446); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6313;
    nodes6313 = node.contents();
    oldNodes.replaceWith(nodes6313);
  }));
  var nodes6314 = $("<span>");
  root8435.append(nodes6314);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Further topics</section>"), function(_, callback) {
    var root8447 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8447); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6314;
    nodes6314 = node.contents();
    oldNodes.replaceWith(nodes6314);
  }));
  var nodes6315 = $("<span>");
  root8435.append(nodes6315);
  subs__.addSub((nrichRPG.coreWorkout.addQAPlus)(function(_, callback) {
    var root8448 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8448); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6315;
    nodes6315 = node.contents();
    oldNodes.replaceWith(nodes6315);
  }));
  var nodes6316 = $("<span>");
  root8435.append(nodes6316);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Stats topics</section>"), function(_, callback) {
    var root8449 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8449); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6316;
    nodes6316 = node.contents();
    oldNodes.replaceWith(nodes6316);
  }));
  var nodes6317 = $("<span>");
  root8435.append(nodes6317);
  subs__.addSub((nrichRPG.coreWorkout.addQAStats)(function(_, callback) {
    var root8450 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8450); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6317;
    nodes6317 = node.contents();
    oldNodes.replaceWith(nodes6317);
  }));
  callback(root8435); return subs__;
  
  
  
  
  
  
  
  
  return subs__;
};

mathmo.furtherTab = function(elements, callback) {
  var root8451 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes6318 = $("<span>");
  root8451.append(nodes6318);
  subs__.addSub((ui.header)(mobl.ref("+Q on *topic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root8452 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8452); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6318;
    nodes6318 = node.contents();
    oldNodes.replaceWith(nodes6318);
  }));
  var nodes6319 = $("<span>");
  root8451.append(nodes6319);
  subs__.addSub((nrichRPG.coreWorkout.addQAPlus)(function(_, callback) {
    var root8453 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8453); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6319;
    nodes6319 = node.contents();
    oldNodes.replaceWith(nodes6319);
  }));
  callback(root8451); return subs__;
  
  
  return subs__;
};

mathmo.aboutTab = function(elements, callback) {
  var root8454 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes6320 = $("<span>");
  root8454.append(nodes6320);
  subs__.addSub((ui.header)(mobl.ref("About Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root8455 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8455); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6320;
    nodes6320 = node.contents();
    oldNodes.replaceWith(nodes6320);
  }));
  
  var credits = mobl.ref("\n<div style=\"padding:20px\">\n<h2>\n<img src=\"icon.png\" style=\"width:50px;height:50px\"/>\nMathmo v0.3 by the <a href=\"http://nrich.maths.org\">NRICH team</a>, University of Cambridge\n</h2>\n<h3>Help</h3>\nOn the 'My Qs' tab you'll find your current set of Questions (abbr. Qs)<br>\nTouch [Clear] to delete all your current Qs.<br>\n<br>\nOn the 'Add' tab you can add 5 random core, further or stats questions, or choose them singly.\nFurther and Stats sections are at the bottom of the topic list.<br>\n<br>\nWhen a question is displayed, touch [Check Answer] to check working and then\nreply to 'Did you agree?' [Yes] [No]. You may need to do a little more work to see whether your answer is really the same or not.\nThe questions will change colour (red == No/Not answered; green == Yes, black == not checked) so you can track how you are doing.\n\n<h3>Updates</h3>\nMathmo is a web application, and should update itself when you reload the app after it has been updated on the server. It's web address is <a href=\"http://nrich.maths.org/mobl/mathmo/mathmo.html\">http://nrich.maths.org/mobl/mathmo/mathmo.html</a>.\n\n<h3>Credits</h3>\n<p>\nIdea: Stephen Hewson\n</p>\n<p>\n<a href=\"http://nrich.maths.org/public/titlesearch.php?search=interactive%20workout\">Desktop Implementation:</a>\n Tom White, Edward Cree\n</p>\n<p>\n<a href=\"http://github.com/gmp26/mathmo\">Mobile Implementation:</a> Mike Pearson\n</p>\n\n<p>\nThe following have been important in developing mathmo\n<ul>\n<li>\n<a href=\"http://www.mobl-lang.org\">Mobl-lang</a> by Zef Hemel, University of Delft.\n</li>\n<li>\nThe <a href=\"http://code.google.com/p/flot/\">flot plotting library</a>\n</li>\n\n</ul>\n<a href=\"http://www.mathjax.org/\">\n  <img title=\"Powered by MathJax\"\n       src=\"http://www.mathjax.org/badge.gif\"\n       border=\"0\" alt=\"Powered by MathJax\" />\n</a>\n\n<h3>License</h3>\n<a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\"><img alt=\"Creative Commons License\" style=\"border-width:0\" src=\"http://i.creativecommons.org/l/by-sa/3.0/88x31.png\" /></a><br /><span xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://purl.org/dc/dcmitype/InteractiveResource\" property=\"dct:title\" rel=\"dct:type\">Mathmo</span> by <a xmlns:cc=\"http://creativecommons.org/ns#\" href=\"http://nrich.maths.org\" property=\"cc:attributionName\" rel=\"cc:attributionURL\">NRICH Project, University of Cambridge</a> is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://github.com/gmp26/mathmo\" rel=\"dct:source\">github.com</a>.\n\n</div>\n");
  var nodes6321 = $("<span>");
  root8454.append(nodes6321);
  subs__.addSub((mobl.html)(credits, function(_, callback) {
    var root8456 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8456); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6321;
    nodes6321 = node.contents();
    oldNodes.replaceWith(nodes6321);
  }));
  callback(root8454); return subs__;
  
  
  return subs__;
};

mathmo.root = function(callback, screenCallback) {
  var root8457 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  mobl.fetchLanguageBundle("english.json", function(result__) {
    var tmp5753 = result__;
    var result__ = [new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)];
    var tmp5747 = mobl.ref(result__);
    subs__.addSub(mobl.ref(mathmo.qTab).addEventListener('change', function() {
      tmp5747.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    subs__.addSub(mobl.ref(mathmo.coreTab).addEventListener('change', function() {
      tmp5747.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    subs__.addSub(mobl.ref(mathmo.aboutTab).addEventListener('change', function() {
      tmp5747.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    
    var nodes6322 = $("<span>");
    root8457.append(nodes6322);
    subs__.addSub((ui.tabSet)(tmp5747, mobl.ref(null), function(_, callback) {
      var root8458 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8458); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6322;
      nodes6322 = node.contents();
      oldNodes.replaceWith(nodes6322);
    }));
    callback(root8457); return subs__;
    
  });
  return subs__;
};
