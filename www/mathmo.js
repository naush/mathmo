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
  var root8908 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes6681 = $("<span>");
  root8908.append(nodes6681);
  subs__.addSub((ui.header)(mobl.ref("Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root8909 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = mobl.openUrl(mathmo.resourceUrl.get());
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp6069 = mobl.ref(result__);
    
    var nodes6682 = $("<span>");
    root8909.append(nodes6682);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), tmp6069, mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root8910 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8910); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6682;
      nodes6682 = node.contents();
      oldNodes.replaceWith(nodes6682);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = mobl.openUrl(mathmo.homeUrl.get());
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp6070 = mobl.ref(result__);
    
    var nodes6683 = $("<span>");
    root8909.append(nodes6683);
    subs__.addSub((ui.image)(mobl.ref("nrichIcon.png"), mobl.ref(35), mobl.ref(35), tmp6070, mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root8911 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8911); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6683;
      nodes6683 = node.contents();
      oldNodes.replaceWith(nodes6683);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = ui.deleteCurrentQ();
                     nrichRPG.coreWorkout.clearAllQ(function(result__) {
                       var tmp6078 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6071 = mobl.ref(result__);
    
    var nodes6684 = $("<span>");
    root8909.append(nodes6684);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp6071, function(_, callback) {
      var root8912 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8912); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6684;
      nodes6684 = node.contents();
      oldNodes.replaceWith(nodes6684);
    }));
    callback(root8909); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6681;
    nodes6681 = node.contents();
    oldNodes.replaceWith(nodes6681);
  }));
  var result__ = nrichRPG.questionAnswer.QA.all().order("number", true);
  var tmp6072 = mobl.ref(result__);
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all().order("number", true)).addEventListener('change', function() {
    tmp6072.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all()).addEventListener('change', function() {
    tmp6072.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA).addEventListener('change', function() {
    tmp6072.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  
  var nodes6685 = $("<span>");
  root8908.append(nodes6685);
  subs__.addSub((ui.mMasterDetail)(tmp6072, mobl.ref(nrichRPG.coreWorkout.qaItem), mobl.ref(nrichRPG.coreWorkout.showQA), function(_, callback) {
    var root8913 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8913); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6685;
    nodes6685 = node.contents();
    oldNodes.replaceWith(nodes6685);
  }));
  callback(root8908); return subs__;
  
  
  return subs__;
};

mathmo.coreTab = function(elements, callback) {
  var root8914 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes6686 = $("<span>");
  root8914.append(nodes6686);
  subs__.addSub((ui.header)(mobl.ref("Q on topic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root8915 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = ui.deleteCurrentQ();
                     nrichRPG.coreWorkout.clearAllQ(function(result__) {
                       var tmp6079 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6073 = mobl.ref(result__);
    
    var nodes6687 = $("<span>");
    root8915.append(nodes6687);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp6073, function(_, callback) {
      var root8916 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8916); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6687;
      nodes6687 = node.contents();
      oldNodes.replaceWith(nodes6687);
    }));
    callback(root8915); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6686;
    nodes6686 = node.contents();
    oldNodes.replaceWith(nodes6686);
  }));
  var nodes6688 = $("<span>");
  root8914.append(nodes6688);
  subs__.addSub((ui.group)(function(_, callback) {
    var root8917 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQ(5, 1000, function(result__) {
                       var tmp6082 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6074 = mobl.ref(result__);
    
    var nodes6689 = $("<span>");
    root8917.append(nodes6689);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6074, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8918 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6690 = $("<span>");
      root8918.append(nodes6690);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 core Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8919 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8919); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6690;
        nodes6690 = node.contents();
        oldNodes.replaceWith(nodes6690);
      }));
      callback(root8918); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6689;
      nodes6689 = node.contents();
      oldNodes.replaceWith(nodes6689);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQStar(5, function(result__) {
                       var tmp6081 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6075 = mobl.ref(result__);
    
    var nodes6691 = $("<span>");
    root8917.append(nodes6691);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6075, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8920 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6692 = $("<span>");
      root8920.append(nodes6692);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 further Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8921 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8921); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6692;
        nodes6692 = node.contents();
        oldNodes.replaceWith(nodes6692);
      }));
      callback(root8920); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6691;
      nodes6691 = node.contents();
      oldNodes.replaceWith(nodes6691);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQStats(5, function(result__) {
                       var tmp6080 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp6076 = mobl.ref(result__);
    
    var nodes6693 = $("<span>");
    root8917.append(nodes6693);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6076, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root8922 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes6694 = $("<span>");
      root8922.append(nodes6694);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 stats Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root8923 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root8923); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes6694;
        nodes6694 = node.contents();
        oldNodes.replaceWith(nodes6694);
      }));
      callback(root8922); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes6693;
      nodes6693 = node.contents();
      oldNodes.replaceWith(nodes6693);
    }));
    callback(root8917); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes6688;
    nodes6688 = node.contents();
    oldNodes.replaceWith(nodes6688);
  }));
  var nodes6695 = $("<span>");
  root8914.append(nodes6695);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Core topics</section>"), function(_, callback) {
    var root8924 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8924); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6695;
    nodes6695 = node.contents();
    oldNodes.replaceWith(nodes6695);
  }));
  var nodes6696 = $("<span>");
  root8914.append(nodes6696);
  subs__.addSub((nrichRPG.coreWorkout.addQA)(function(_, callback) {
    var root8925 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8925); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6696;
    nodes6696 = node.contents();
    oldNodes.replaceWith(nodes6696);
  }));
  var nodes6697 = $("<span>");
  root8914.append(nodes6697);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Further topics</section>"), function(_, callback) {
    var root8926 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8926); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6697;
    nodes6697 = node.contents();
    oldNodes.replaceWith(nodes6697);
  }));
  var nodes6698 = $("<span>");
  root8914.append(nodes6698);
  subs__.addSub((nrichRPG.coreWorkout.addQAPlus)(function(_, callback) {
    var root8927 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8927); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6698;
    nodes6698 = node.contents();
    oldNodes.replaceWith(nodes6698);
  }));
  var nodes6699 = $("<span>");
  root8914.append(nodes6699);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Stats topics</section>"), function(_, callback) {
    var root8928 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8928); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6699;
    nodes6699 = node.contents();
    oldNodes.replaceWith(nodes6699);
  }));
  var nodes6700 = $("<span>");
  root8914.append(nodes6700);
  subs__.addSub((nrichRPG.coreWorkout.addQAStats)(function(_, callback) {
    var root8929 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8929); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6700;
    nodes6700 = node.contents();
    oldNodes.replaceWith(nodes6700);
  }));
  callback(root8914); return subs__;
  
  
  
  
  
  
  
  
  return subs__;
};

mathmo.furtherTab = function(elements, callback) {
  var root8930 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes6701 = $("<span>");
  root8930.append(nodes6701);
  subs__.addSub((ui.header)(mobl.ref("+Q on *topic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root8931 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8931); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6701;
    nodes6701 = node.contents();
    oldNodes.replaceWith(nodes6701);
  }));
  var nodes6702 = $("<span>");
  root8930.append(nodes6702);
  subs__.addSub((nrichRPG.coreWorkout.addQAPlus)(function(_, callback) {
    var root8932 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8932); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6702;
    nodes6702 = node.contents();
    oldNodes.replaceWith(nodes6702);
  }));
  callback(root8930); return subs__;
  
  
  return subs__;
};

mathmo.aboutTab = function(elements, callback) {
  var root8933 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes6703 = $("<span>");
  root8933.append(nodes6703);
  subs__.addSub((ui.header)(mobl.ref("About Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root8934 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8934); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6703;
    nodes6703 = node.contents();
    oldNodes.replaceWith(nodes6703);
  }));
  
  var credits = mobl.ref("\n<div style=\"padding:20px\">\n<h2>\n<img src=\"icon.png\" style=\"width:50px;height:50px\"/>\nMathmo v0.3 by the <a href=\"http://nrich.maths.org\">NRICH team</a>, University of Cambridge\n</h2>\n<h3>Help</h3>\nOn the 'My Qs' tab you'll find your current set of Questions (abbr. Qs)<br>\nTouch [Clear] to delete all your current Qs.<br>\n<br>\nOn the 'Add' tab you can add 5 random core, further or stats questions, or choose them singly.\nFurther and Stats sections are at the bottom of the topic list.<br>\n<br>\nWhen a question is displayed, touch [Check Answer] to check working and then\nreply to 'Did you agree?' [Yes] [No]. You may need to do a little more work to see whether your answer is really the same or not.\nThe questions will change colour (red == No/Not answered; green == Yes, black == not checked) so you can track how you are doing.\n\n<h3>Updates</h3>\nMathmo is a web application, and should update itself when you reload the app after it has been updated on the server. It's web address is <a href=\"http://nrich.maths.org/mobl/mathmo/mathmo.html\">http://nrich.maths.org/mobl/mathmo/mathmo.html</a>.\n\n<h3>Credits</h3>\n<p>\nIdea: Stephen Hewson\n</p>\n<p>\n<a href=\"http://nrich.maths.org/public/titlesearch.php?search=interactive%20workout\">Desktop Implementation:</a>\n Tom White, Edward Cree\n</p>\n<p>\n<a href=\"http://github.com/gmp26/mathmo\">Mobile Implementation:</a> Mike Pearson\n</p>\n\n<p>\nThe following have been important in developing mathmo\n<ul>\n<li>\n<a href=\"http://www.mobl-lang.org\">Mobl-lang</a> by Zef Hemel, University of Delft.\n</li>\n<li>\nThe <a href=\"http://code.google.com/p/flot/\">flot plotting library</a>\n</li>\n\n</ul>\n<a href=\"http://www.mathjax.org/\">\n  <img title=\"Powered by MathJax\"\n       src=\"http://www.mathjax.org/badge.gif\"\n       border=\"0\" alt=\"Powered by MathJax\" />\n</a>\n\n<h3>License</h3>\n<a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\"><img alt=\"Creative Commons License\" style=\"border-width:0\" src=\"http://i.creativecommons.org/l/by-sa/3.0/88x31.png\" /></a><br /><span xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://purl.org/dc/dcmitype/InteractiveResource\" property=\"dct:title\" rel=\"dct:type\">Mathmo</span> by <a xmlns:cc=\"http://creativecommons.org/ns#\" href=\"http://nrich.maths.org\" property=\"cc:attributionName\" rel=\"cc:attributionURL\">NRICH Project, University of Cambridge</a> is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://github.com/gmp26/mathmo\" rel=\"dct:source\">github.com</a>.\n\n</div>\n");
  var nodes6704 = $("<span>");
  root8933.append(nodes6704);
  subs__.addSub((mobl.html)(credits, function(_, callback) {
    var root8935 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root8935); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes6704;
    nodes6704 = node.contents();
    oldNodes.replaceWith(nodes6704);
  }));
  callback(root8933); return subs__;
  
  
  return subs__;
};

mathmo.root = function(callback, screenCallback) {
  var root8936 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  mobl.fetchLanguageBundle("english.json", function(result__) {
    var tmp6083 = result__;
    var result__ = [new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)];
    var tmp6077 = mobl.ref(result__);
    subs__.addSub(mobl.ref(mathmo.qTab).addEventListener('change', function() {
      tmp6077.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    subs__.addSub(mobl.ref(mathmo.coreTab).addEventListener('change', function() {
      tmp6077.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    subs__.addSub(mobl.ref(mathmo.aboutTab).addEventListener('change', function() {
      tmp6077.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    
    var nodes6705 = $("<span>");
    root8936.append(nodes6705);
    subs__.addSub((ui.tabSet)(tmp6077, mobl.ref(null), function(_, callback) {
      var root8937 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root8937); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes6705;
      nodes6705 = node.contents();
      oldNodes.replaceWith(nodes6705);
    }));
    callback(root8936); return subs__;
    
  });
  return subs__;
};
