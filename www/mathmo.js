mobl.provides('mathmo');
mobl.provides('nrichRPG');
mobl.provides('nrichRPG.questionAnswer');
mobl.provides('nrichRPG.coreWorkout');
mobl.provides('mobl');
mobl.provides('ui');
mobl.provides('mathmo');
persistence.debug = false;mathmo.homeUrl = mobl.ref("http://nrich.maths.org");
mathmo.resourceUrl = mobl.ref("http://nrich.maths.org/7088");

mathmo.qaItem = function(qa, number, elements, callback) {
  var root7169 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3027 = $("<span>");
  
  var ref3459 = mobl.ref("color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
  if(ref3459.get() !== null) {
    node3027.attr('style', ref3459.get());
    subs__.addSub(ref3459.addEventListener('change', function(_, ref, val) {
      node3027.attr('style', val);
    }));
    subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
      node3027.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
      node3027.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    
  }
  subs__.addSub(ref3459.rebind());
  
  var result__ = "Q" + number.get() + ". " + qa.get().topic;
  var tmp4291 = mobl.ref(result__);
  subs__.addSub(number.addEventListener('change', function() {
    tmp4291.set("Q" + number.get() + ". " + qa.get().topic);
  }));
  subs__.addSub(mobl.ref(qa, 'topic').addEventListener('change', function() {
    tmp4291.set("Q" + number.get() + ". " + qa.get().topic);
  }));
  
  var nodes5029 = $("<span>");
  node3027.append(nodes5029);
  subs__.addSub((mobl.html)(tmp4291, function(_, callback) {
    var root7170 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7170); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5029;
    nodes5029 = node.contents();
    oldNodes.replaceWith(nodes5029);
  }));
  root7169.append(node3027);
  callback(root7169); return subs__;
  
  
  return subs__;
};

mathmo.qTab = function(elements, callback) {
  var root7171 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes5030 = $("<span>");
  root7171.append(nodes5030);
  subs__.addSub((ui.header)(mobl.ref("Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root7172 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = mobl.openUrl(mathmo.resourceUrl.get());
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp4292 = mobl.ref(result__);
    
    var nodes5031 = $("<span>");
    root7172.append(nodes5031);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), tmp4292, mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root7173 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7173); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5031;
      nodes5031 = node.contents();
      oldNodes.replaceWith(nodes5031);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = mobl.openUrl(mathmo.homeUrl.get());
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp4293 = mobl.ref(result__);
    
    var nodes5032 = $("<span>");
    root7172.append(nodes5032);
    subs__.addSub((ui.image)(mobl.ref("nrichIcon.png"), mobl.ref(35), mobl.ref(35), tmp4293, mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root7174 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7174); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5032;
      nodes5032 = node.contents();
      oldNodes.replaceWith(nodes5032);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.clearAllQ(function(result__) {
                       var tmp4302 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4294 = mobl.ref(result__);
    
    var nodes5033 = $("<span>");
    root7172.append(nodes5033);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp4294, function(_, callback) {
      var root7175 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7175); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5033;
      nodes5033 = node.contents();
      oldNodes.replaceWith(nodes5033);
    }));
    callback(root7172); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes5030;
    nodes5030 = node.contents();
    oldNodes.replaceWith(nodes5030);
  }));
  var result__ = nrichRPG.questionAnswer.QA.all().order("number", true);
  var tmp4295 = mobl.ref(result__);
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all().order("number", true)).addEventListener('change', function() {
    tmp4295.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all()).addEventListener('change', function() {
    tmp4295.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA).addEventListener('change', function() {
    tmp4295.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  
  var nodes5034 = $("<span>");
  root7171.append(nodes5034);
  subs__.addSub((ui.mMasterDetail)(tmp4295, mobl.ref(mathmo.qaItem), mobl.ref(nrichRPG.coreWorkout.showQA), function(_, callback) {
    var root7176 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7176); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5034;
    nodes5034 = node.contents();
    oldNodes.replaceWith(nodes5034);
  }));
  callback(root7171); return subs__;
  
  
  return subs__;
};

mathmo.coreTab = function(elements, callback) {
  var root7177 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes5035 = $("<span>");
  root7177.append(nodes5035);
  subs__.addSub((ui.header)(mobl.ref("Q on topic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root7178 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.clearAllQ(function(result__) {
                       var tmp4303 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4296 = mobl.ref(result__);
    
    var nodes5036 = $("<span>");
    root7178.append(nodes5036);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp4296, function(_, callback) {
      var root7179 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7179); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5036;
      nodes5036 = node.contents();
      oldNodes.replaceWith(nodes5036);
    }));
    callback(root7178); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes5035;
    nodes5035 = node.contents();
    oldNodes.replaceWith(nodes5035);
  }));
  var nodes5037 = $("<span>");
  root7177.append(nodes5037);
  subs__.addSub((ui.group)(function(_, callback) {
    var root7180 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQ(5, 1000, function(result__) {
                       var tmp4306 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4297 = mobl.ref(result__);
    
    var nodes5038 = $("<span>");
    root7180.append(nodes5038);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4297, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7181 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes5039 = $("<span>");
      root7181.append(nodes5039);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 core Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7182 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7182); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes5039;
        nodes5039 = node.contents();
        oldNodes.replaceWith(nodes5039);
      }));
      callback(root7181); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes5038;
      nodes5038 = node.contents();
      oldNodes.replaceWith(nodes5038);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQStar(5, function(result__) {
                       var tmp4305 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4298 = mobl.ref(result__);
    
    var nodes5040 = $("<span>");
    root7180.append(nodes5040);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4298, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7183 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes5041 = $("<span>");
      root7183.append(nodes5041);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 further Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7184 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7184); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes5041;
        nodes5041 = node.contents();
        oldNodes.replaceWith(nodes5041);
      }));
      callback(root7183); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes5040;
      nodes5040 = node.contents();
      oldNodes.replaceWith(nodes5040);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQStats(5, function(result__) {
                       var tmp4304 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp4299 = mobl.ref(result__);
    
    var nodes5042 = $("<span>");
    root7180.append(nodes5042);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4299, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root7185 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes5043 = $("<span>");
      root7185.append(nodes5043);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 stats Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root7186 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root7186); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes5043;
        nodes5043 = node.contents();
        oldNodes.replaceWith(nodes5043);
      }));
      callback(root7185); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes5042;
      nodes5042 = node.contents();
      oldNodes.replaceWith(nodes5042);
    }));
    callback(root7180); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes5037;
    nodes5037 = node.contents();
    oldNodes.replaceWith(nodes5037);
  }));
  var nodes5044 = $("<span>");
  root7177.append(nodes5044);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Core topics</section>"), function(_, callback) {
    var root7187 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7187); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5044;
    nodes5044 = node.contents();
    oldNodes.replaceWith(nodes5044);
  }));
  var nodes5045 = $("<span>");
  root7177.append(nodes5045);
  subs__.addSub((nrichRPG.coreWorkout.addQA)(function(_, callback) {
    var root7188 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7188); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5045;
    nodes5045 = node.contents();
    oldNodes.replaceWith(nodes5045);
  }));
  var nodes5046 = $("<span>");
  root7177.append(nodes5046);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Further topics</section>"), function(_, callback) {
    var root7189 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7189); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5046;
    nodes5046 = node.contents();
    oldNodes.replaceWith(nodes5046);
  }));
  var nodes5047 = $("<span>");
  root7177.append(nodes5047);
  subs__.addSub((nrichRPG.coreWorkout.addQAPlus)(function(_, callback) {
    var root7190 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7190); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5047;
    nodes5047 = node.contents();
    oldNodes.replaceWith(nodes5047);
  }));
  var nodes5048 = $("<span>");
  root7177.append(nodes5048);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Stats topics</section>"), function(_, callback) {
    var root7191 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7191); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5048;
    nodes5048 = node.contents();
    oldNodes.replaceWith(nodes5048);
  }));
  var nodes5049 = $("<span>");
  root7177.append(nodes5049);
  subs__.addSub((nrichRPG.coreWorkout.addQAStats)(function(_, callback) {
    var root7192 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7192); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5049;
    nodes5049 = node.contents();
    oldNodes.replaceWith(nodes5049);
  }));
  callback(root7177); return subs__;
  
  
  
  
  
  
  
  
  return subs__;
};

mathmo.furtherTab = function(elements, callback) {
  var root7193 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes5050 = $("<span>");
  root7193.append(nodes5050);
  subs__.addSub((ui.header)(mobl.ref("+Q on *topic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root7194 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7194); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5050;
    nodes5050 = node.contents();
    oldNodes.replaceWith(nodes5050);
  }));
  var nodes5051 = $("<span>");
  root7193.append(nodes5051);
  subs__.addSub((nrichRPG.coreWorkout.addQAPlus)(function(_, callback) {
    var root7195 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7195); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5051;
    nodes5051 = node.contents();
    oldNodes.replaceWith(nodes5051);
  }));
  callback(root7193); return subs__;
  
  
  return subs__;
};

mathmo.aboutTab = function(elements, callback) {
  var root7196 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes5052 = $("<span>");
  root7196.append(nodes5052);
  subs__.addSub((ui.header)(mobl.ref("About Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root7197 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7197); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5052;
    nodes5052 = node.contents();
    oldNodes.replaceWith(nodes5052);
  }));
  
  var credits = mobl.ref("\n<div style=\"padding:20px\">\n<h2>\n<img src=\"icon.png\" style=\"width:50px;height:50px\"/>\nMathmo v0.3 by the <a href=\"http://nrich.maths.org\">NRICH team</a>, University of Cambridge\n</h2>\n<h3>Help</h3>\nOn the 'My Qs' tab you'll find your current set of Questions (abbr. Qs)<br>\nTouch [Clear] to delete all your current Qs.<br>\n<br>\nOn the 'Add' tab you can add 5 random core, further or stats questions, or choose them singly.\nFurther and Stats sections are at the bottom of the topic list.<br>\n<br>\nWhen a question is displayed, touch [Check Answer] to check working and then\nreply to 'Did you agree?' [Yes] [No]. You may need to do a little more work to see whether your answer is really the same or not.\nThe questions will change colour (red == No/Not answered; green == Yes, black == not checked) so you can track how you are doing.\n\n<h3>Updates</h3>\nMathmo is a web application, and should update itself when you reload the app after it has been updated on the server. It's web address is <a href=\"http://nrich.maths.org/mobl/mathmo/mathmo.html\">http://nrich.maths.org/mobl/mathmo/mathmo.html</a>.\n\n<h3>Credits</h3>\n<p>\nIdea: Stephen Hewson\n</p>\n<p>\n<a href=\"http://nrich.maths.org/public/titlesearch.php?search=interactive%20workout\">Desktop Implementation:</a>\n Tom White, Edward Cree\n</p>\n<p>\n<a href=\"http://github.com/gmp26/mathmo\">Mobile Implementation:</a> Mike Pearson\n</p>\n\n<p>\nThe following have been important in developing mathmo\n<ul>\n<li>\n<a href=\"http://www.mobl-lang.org\">Mobl-lang</a> by Zef Hemel, University of Delft.\n</li>\n<li>\nThe <a href=\"http://code.google.com/p/flot/\">flot plotting library</a>\n</li>\n\n</ul>\n<a href=\"http://www.mathjax.org/\">\n  <img title=\"Powered by MathJax\"\n       src=\"http://www.mathjax.org/badge.gif\"\n       border=\"0\" alt=\"Powered by MathJax\" />\n</a>\n\n<h3>License</h3>\n<a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\"><img alt=\"Creative Commons License\" style=\"border-width:0\" src=\"http://i.creativecommons.org/l/by-sa/3.0/88x31.png\" /></a><br /><span xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://purl.org/dc/dcmitype/InteractiveResource\" property=\"dct:title\" rel=\"dct:type\">Mathmo</span> by <a xmlns:cc=\"http://creativecommons.org/ns#\" href=\"http://nrich.maths.org\" property=\"cc:attributionName\" rel=\"cc:attributionURL\">NRICH Project, University of Cambridge</a> is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://github.com/gmp26/mathmo\" rel=\"dct:source\">github.com</a>.\n\n</div>\n");
  var nodes5053 = $("<span>");
  root7196.append(nodes5053);
  subs__.addSub((mobl.html)(credits, function(_, callback) {
    var root7198 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root7198); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes5053;
    nodes5053 = node.contents();
    oldNodes.replaceWith(nodes5053);
  }));
  callback(root7196); return subs__;
  
  
  return subs__;
};

mathmo.root = function(callback, screenCallback) {
  var root7199 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  mobl.fetchLanguageBundle("english.json", function(result__) {
    var tmp4307 = result__;
    var result__ = [new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)];
    var tmp4301 = mobl.ref(result__);
    subs__.addSub(mobl.ref(mathmo.qTab).addEventListener('change', function() {
      tmp4301.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    subs__.addSub(mobl.ref(mathmo.coreTab).addEventListener('change', function() {
      tmp4301.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    subs__.addSub(mobl.ref(mathmo.aboutTab).addEventListener('change', function() {
      tmp4301.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    
    var nodes5054 = $("<span>");
    root7199.append(nodes5054);
    subs__.addSub((ui.tabSet)(tmp4301, mobl.ref(null), function(_, callback) {
      var root7200 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root7200); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes5054;
      nodes5054 = node.contents();
      oldNodes.replaceWith(nodes5054);
    }));
    callback(root7199); return subs__;
    
  });
  return subs__;
};
