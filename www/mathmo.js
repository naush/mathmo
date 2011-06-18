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
  var root5169 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes4048 = $("<span>");
  root5169.append(nodes4048);
  subs__.addSub((ui.header)(mobl.ref("Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root5170 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = mobl.openUrl(mathmo.resourceUrl.get());
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp3761 = mobl.ref(result__);
    
    var nodes4049 = $("<span>");
    root5170.append(nodes4049);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), tmp3761, mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root5171 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5171); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4049;
      nodes4049 = node.contents();
      oldNodes.replaceWith(nodes4049);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = mobl.openUrl(mathmo.homeUrl.get());
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp3762 = mobl.ref(result__);
    
    var nodes4050 = $("<span>");
    root5170.append(nodes4050);
    subs__.addSub((ui.image)(mobl.ref("nrichIcon.png"), mobl.ref(35), mobl.ref(35), tmp3762, mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root5172 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5172); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4050;
      nodes4050 = node.contents();
      oldNodes.replaceWith(nodes4050);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.clearAllQ(function(result__) {
                       var tmp3770 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3763 = mobl.ref(result__);
    
    var nodes4051 = $("<span>");
    root5170.append(nodes4051);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp3763, function(_, callback) {
      var root5173 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5173); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4051;
      nodes4051 = node.contents();
      oldNodes.replaceWith(nodes4051);
    }));
    callback(root5170); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4048;
    nodes4048 = node.contents();
    oldNodes.replaceWith(nodes4048);
  }));
  var result__ = nrichRPG.questionAnswer.QA.all().order("number", true);
  var tmp3764 = mobl.ref(result__);
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all().order("number", true)).addEventListener('change', function() {
    tmp3764.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all()).addEventListener('change', function() {
    tmp3764.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA).addEventListener('change', function() {
    tmp3764.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  
  var nodes4052 = $("<span>");
  root5169.append(nodes4052);
  subs__.addSub((ui.mMasterDetail)(tmp3764, mobl.ref(nrichRPG.coreWorkout.qaItem), mobl.ref(nrichRPG.coreWorkout.showQA), function(_, callback) {
    var root5174 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5174); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4052;
    nodes4052 = node.contents();
    oldNodes.replaceWith(nodes4052);
  }));
  callback(root5169); return subs__;
  
  
  return subs__;
};

mathmo.coreTab = function(elements, callback) {
  var root5175 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes4053 = $("<span>");
  root5175.append(nodes4053);
  subs__.addSub((ui.header)(mobl.ref("Q on topic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root5176 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.clearAllQ(function(result__) {
                       var tmp3771 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3765 = mobl.ref(result__);
    
    var nodes4054 = $("<span>");
    root5176.append(nodes4054);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp3765, function(_, callback) {
      var root5177 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5177); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4054;
      nodes4054 = node.contents();
      oldNodes.replaceWith(nodes4054);
    }));
    callback(root5176); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4053;
    nodes4053 = node.contents();
    oldNodes.replaceWith(nodes4053);
  }));
  var nodes4055 = $("<span>");
  root5175.append(nodes4055);
  subs__.addSub((ui.group)(function(_, callback) {
    var root5178 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQ(5, 1000, function(result__) {
                       var tmp3774 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3766 = mobl.ref(result__);
    
    var nodes4056 = $("<span>");
    root5178.append(nodes4056);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3766, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5179 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4057 = $("<span>");
      root5179.append(nodes4057);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 core Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5180 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5180); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4057;
        nodes4057 = node.contents();
        oldNodes.replaceWith(nodes4057);
      }));
      callback(root5179); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4056;
      nodes4056 = node.contents();
      oldNodes.replaceWith(nodes4056);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQStar(5, function(result__) {
                       var tmp3773 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3767 = mobl.ref(result__);
    
    var nodes4058 = $("<span>");
    root5178.append(nodes4058);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3767, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5181 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4059 = $("<span>");
      root5181.append(nodes4059);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 further Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5182 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5182); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4059;
        nodes4059 = node.contents();
        oldNodes.replaceWith(nodes4059);
      }));
      callback(root5181); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4058;
      nodes4058 = node.contents();
      oldNodes.replaceWith(nodes4058);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQStats(5, function(result__) {
                       var tmp3772 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3768 = mobl.ref(result__);
    
    var nodes4060 = $("<span>");
    root5178.append(nodes4060);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3768, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root5183 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes4061 = $("<span>");
      root5183.append(nodes4061);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 stats Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root5184 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root5184); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4061;
        nodes4061 = node.contents();
        oldNodes.replaceWith(nodes4061);
      }));
      callback(root5183); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4060;
      nodes4060 = node.contents();
      oldNodes.replaceWith(nodes4060);
    }));
    callback(root5178); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4055;
    nodes4055 = node.contents();
    oldNodes.replaceWith(nodes4055);
  }));
  var nodes4062 = $("<span>");
  root5175.append(nodes4062);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Core topics</section>"), function(_, callback) {
    var root5185 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5185); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4062;
    nodes4062 = node.contents();
    oldNodes.replaceWith(nodes4062);
  }));
  var nodes4063 = $("<span>");
  root5175.append(nodes4063);
  subs__.addSub((nrichRPG.coreWorkout.addQA)(function(_, callback) {
    var root5186 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5186); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4063;
    nodes4063 = node.contents();
    oldNodes.replaceWith(nodes4063);
  }));
  var nodes4064 = $("<span>");
  root5175.append(nodes4064);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Further topics</section>"), function(_, callback) {
    var root5187 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5187); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4064;
    nodes4064 = node.contents();
    oldNodes.replaceWith(nodes4064);
  }));
  var nodes4065 = $("<span>");
  root5175.append(nodes4065);
  subs__.addSub((nrichRPG.coreWorkout.addQAPlus)(function(_, callback) {
    var root5188 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5188); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4065;
    nodes4065 = node.contents();
    oldNodes.replaceWith(nodes4065);
  }));
  var nodes4066 = $("<span>");
  root5175.append(nodes4066);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Stats topics</section>"), function(_, callback) {
    var root5189 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5189); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4066;
    nodes4066 = node.contents();
    oldNodes.replaceWith(nodes4066);
  }));
  var nodes4067 = $("<span>");
  root5175.append(nodes4067);
  subs__.addSub((nrichRPG.coreWorkout.addQAStats)(function(_, callback) {
    var root5190 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5190); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4067;
    nodes4067 = node.contents();
    oldNodes.replaceWith(nodes4067);
  }));
  callback(root5175); return subs__;
  
  
  
  
  
  
  
  
  return subs__;
};

mathmo.furtherTab = function(elements, callback) {
  var root5191 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes4068 = $("<span>");
  root5191.append(nodes4068);
  subs__.addSub((ui.header)(mobl.ref("+Q on *topic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root5192 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5192); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4068;
    nodes4068 = node.contents();
    oldNodes.replaceWith(nodes4068);
  }));
  var nodes4069 = $("<span>");
  root5191.append(nodes4069);
  subs__.addSub((nrichRPG.coreWorkout.addQAPlus)(function(_, callback) {
    var root5193 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5193); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4069;
    nodes4069 = node.contents();
    oldNodes.replaceWith(nodes4069);
  }));
  callback(root5191); return subs__;
  
  
  return subs__;
};

mathmo.aboutTab = function(elements, callback) {
  var root5194 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes4070 = $("<span>");
  root5194.append(nodes4070);
  subs__.addSub((ui.header)(mobl.ref("About Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root5195 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5195); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4070;
    nodes4070 = node.contents();
    oldNodes.replaceWith(nodes4070);
  }));
  
  var credits = mobl.ref("\n<div style=\"padding:20px\">\n<h2>\n<img src=\"icon.png\" style=\"width:50px;height:50px\"/>\nMathmo v0.3 by the <a href=\"http://nrich.maths.org\">NRICH team</a>, University of Cambridge\n</h2>\n<h3>Help</h3>\nOn the 'My Qs' tab you'll find your current set of Questions (abbr. Qs)<br>\nTouch [Clear] to delete all your current Qs.<br>\n<br>\nOn the 'Add' tab you can add 5 random core, further or stats questions, or choose them singly.\nFurther and Stats sections are at the bottom of the topic list.<br>\n<br>\nWhen a question is displayed, touch [Check Answer] to check working and then\nreply to 'Did you agree?' [Yes] [No]. You may need to do a little more work to see whether your answer is really the same or not.\nThe questions will change colour (red == No/Not answered; green == Yes, black == not checked) so you can track how you are doing.\n\n<h3>Updates</h3>\nMathmo is a web application, and should update itself when you reload the app after it has been updated on the server. It's web address is <a href=\"http://nrich.maths.org/mobl/mathmo/mathmo.html\">http://nrich.maths.org/mobl/mathmo/mathmo.html</a>.\n\n<h3>Credits</h3>\n<p>\nIdea: Stephen Hewson\n</p>\n<p>\n<a href=\"http://nrich.maths.org/public/titlesearch.php?search=interactive%20workout\">Desktop Implementation:</a>\n Tom White, Edward Cree\n</p>\n<p>\n<a href=\"http://github.com/gmp26/mathmo\">Mobile Implementation:</a> Mike Pearson\n</p>\n\n<p>\nThe following have been important in developing mathmo\n<ul>\n<li>\n<a href=\"http://www.mobl-lang.org\">Mobl-lang</a> by Zef Hemel, University of Delft.\n</li>\n<li>\nThe <a href=\"http://code.google.com/p/flot/\">flot plotting library</a>\n</li>\n\n</ul>\n<a href=\"http://www.mathjax.org/\">\n  <img title=\"Powered by MathJax\"\n       src=\"http://www.mathjax.org/badge.gif\"\n       border=\"0\" alt=\"Powered by MathJax\" />\n</a>\n\n<h3>License</h3>\n<a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\"><img alt=\"Creative Commons License\" style=\"border-width:0\" src=\"http://i.creativecommons.org/l/by-sa/3.0/88x31.png\" /></a><br /><span xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://purl.org/dc/dcmitype/InteractiveResource\" property=\"dct:title\" rel=\"dct:type\">Mathmo</span> by <a xmlns:cc=\"http://creativecommons.org/ns#\" href=\"http://nrich.maths.org\" property=\"cc:attributionName\" rel=\"cc:attributionURL\">NRICH Project, University of Cambridge</a> is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://github.com/gmp26/mathmo\" rel=\"dct:source\">github.com</a>.\n\n</div>\n");
  var nodes4071 = $("<span>");
  root5194.append(nodes4071);
  subs__.addSub((mobl.html)(credits, function(_, callback) {
    var root5196 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root5196); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4071;
    nodes4071 = node.contents();
    oldNodes.replaceWith(nodes4071);
  }));
  callback(root5194); return subs__;
  
  
  return subs__;
};

mathmo.root = function(callback, screenCallback) {
  var root5197 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  mobl.fetchLanguageBundle("english.json", function(result__) {
    var tmp3775 = result__;
    var result__ = [new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)];
    var tmp3769 = mobl.ref(result__);
    subs__.addSub(mobl.ref(mathmo.qTab).addEventListener('change', function() {
      tmp3769.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    subs__.addSub(mobl.ref(mathmo.coreTab).addEventListener('change', function() {
      tmp3769.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    subs__.addSub(mobl.ref(mathmo.aboutTab).addEventListener('change', function() {
      tmp3769.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    
    var nodes4072 = $("<span>");
    root5197.append(nodes4072);
    subs__.addSub((ui.tabSet)(tmp3769, mobl.ref(null), function(_, callback) {
      var root5198 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root5198); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4072;
      nodes4072 = node.contents();
      oldNodes.replaceWith(nodes4072);
    }));
    callback(root5197); return subs__;
    
  });
  return subs__;
};
