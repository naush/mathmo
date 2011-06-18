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
  var root4937 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes3887 = $("<span>");
  root4937.append(nodes3887);
  subs__.addSub((ui.header)(mobl.ref("Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root4938 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = mobl.openUrl(mathmo.resourceUrl.get());
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp3633 = mobl.ref(result__);
    
    var nodes3888 = $("<span>");
    root4938.append(nodes3888);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), tmp3633, mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root4939 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4939); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3888;
      nodes3888 = node.contents();
      oldNodes.replaceWith(nodes3888);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     var result__ = mobl.openUrl(mathmo.homeUrl.get());
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp3634 = mobl.ref(result__);
    
    var nodes3889 = $("<span>");
    root4938.append(nodes3889);
    subs__.addSub((ui.image)(mobl.ref("nrichIcon.png"), mobl.ref(35), mobl.ref(35), tmp3634, mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root4940 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4940); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3889;
      nodes3889 = node.contents();
      oldNodes.replaceWith(nodes3889);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.clearAllQ(function(result__) {
                       var tmp3643 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3635 = mobl.ref(result__);
    
    var nodes3890 = $("<span>");
    root4938.append(nodes3890);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp3635, function(_, callback) {
      var root4941 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4941); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3890;
      nodes3890 = node.contents();
      oldNodes.replaceWith(nodes3890);
    }));
    callback(root4938); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3887;
    nodes3887 = node.contents();
    oldNodes.replaceWith(nodes3887);
  }));
  var result__ = nrichRPG.questionAnswer.QA.all().order("number", true);
  var tmp3637 = mobl.ref(result__);
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all().order("number", true)).addEventListener('change', function() {
    tmp3637.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all()).addEventListener('change', function() {
    tmp3637.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA).addEventListener('change', function() {
    tmp3637.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  
  nrichRPG.questionAnswer.QA.all().one(function(result__) {
    var tmp3646 = result__;
    var tmp3636 = mobl.ref(result__);
    subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all()).addEventListener('change', function() {
      nrichRPG.questionAnswer.QA.all().one(function(result__) {
        var tmp3644 = result__;
        var result__ = tmp3644;
        tmp3636.set(result__);
        
      });
    }));
    subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA).addEventListener('change', function() {
      nrichRPG.questionAnswer.QA.all().one(function(result__) {
        var tmp3645 = result__;
        var result__ = tmp3645;
        tmp3636.set(result__);
        
      });
    }));
    
    var nodes3891 = $("<span>");
    root4937.append(nodes3891);
    subs__.addSub((ui.mMasterDetail)(tmp3636, tmp3637, mobl.ref(nrichRPG.coreWorkout.qaItem), mobl.ref(nrichRPG.coreWorkout.showQA), function(_, callback) {
      var root4942 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4942); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3891;
      nodes3891 = node.contents();
      oldNodes.replaceWith(nodes3891);
    }));
    callback(root4937); return subs__;
    
  });
  
  return subs__;
};

mathmo.coreTab = function(elements, callback) {
  var root4943 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes3892 = $("<span>");
  root4943.append(nodes3892);
  subs__.addSub((ui.header)(mobl.ref("Q on topic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root4944 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.clearAllQ(function(result__) {
                       var tmp3647 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3638 = mobl.ref(result__);
    
    var nodes3893 = $("<span>");
    root4944.append(nodes3893);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp3638, function(_, callback) {
      var root4945 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4945); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3893;
      nodes3893 = node.contents();
      oldNodes.replaceWith(nodes3893);
    }));
    callback(root4944); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3892;
    nodes3892 = node.contents();
    oldNodes.replaceWith(nodes3892);
  }));
  var nodes3894 = $("<span>");
  root4943.append(nodes3894);
  subs__.addSub((ui.group)(function(_, callback) {
    var root4946 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQ(5, 1000, function(result__) {
                       var tmp3650 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3639 = mobl.ref(result__);
    
    var nodes3895 = $("<span>");
    root4946.append(nodes3895);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3639, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4947 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3896 = $("<span>");
      root4947.append(nodes3896);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 core Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4948 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4948); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3896;
        nodes3896 = node.contents();
        oldNodes.replaceWith(nodes3896);
      }));
      callback(root4947); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3895;
      nodes3895 = node.contents();
      oldNodes.replaceWith(nodes3895);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQStar(5, function(result__) {
                       var tmp3649 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3640 = mobl.ref(result__);
    
    var nodes3897 = $("<span>");
    root4946.append(nodes3897);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3640, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4949 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3898 = $("<span>");
      root4949.append(nodes3898);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 further Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4950 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4950); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3898;
        nodes3898 = node.contents();
        oldNodes.replaceWith(nodes3898);
      }));
      callback(root4949); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3897;
      nodes3897 = node.contents();
      oldNodes.replaceWith(nodes3897);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQStats(5, function(result__) {
                       var tmp3648 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp3641 = mobl.ref(result__);
    
    var nodes3899 = $("<span>");
    root4946.append(nodes3899);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp3641, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root4951 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes3900 = $("<span>");
      root4951.append(nodes3900);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 stats Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root4952 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root4952); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes3900;
        nodes3900 = node.contents();
        oldNodes.replaceWith(nodes3900);
      }));
      callback(root4951); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes3899;
      nodes3899 = node.contents();
      oldNodes.replaceWith(nodes3899);
    }));
    callback(root4946); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes3894;
    nodes3894 = node.contents();
    oldNodes.replaceWith(nodes3894);
  }));
  var nodes3901 = $("<span>");
  root4943.append(nodes3901);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Core topics</section>"), function(_, callback) {
    var root4953 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4953); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3901;
    nodes3901 = node.contents();
    oldNodes.replaceWith(nodes3901);
  }));
  var nodes3902 = $("<span>");
  root4943.append(nodes3902);
  subs__.addSub((nrichRPG.coreWorkout.addQA)(function(_, callback) {
    var root4954 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4954); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3902;
    nodes3902 = node.contents();
    oldNodes.replaceWith(nodes3902);
  }));
  var nodes3903 = $("<span>");
  root4943.append(nodes3903);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Further topics</section>"), function(_, callback) {
    var root4955 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4955); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3903;
    nodes3903 = node.contents();
    oldNodes.replaceWith(nodes3903);
  }));
  var nodes3904 = $("<span>");
  root4943.append(nodes3904);
  subs__.addSub((nrichRPG.coreWorkout.addQAPlus)(function(_, callback) {
    var root4956 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4956); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3904;
    nodes3904 = node.contents();
    oldNodes.replaceWith(nodes3904);
  }));
  var nodes3905 = $("<span>");
  root4943.append(nodes3905);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Stats topics</section>"), function(_, callback) {
    var root4957 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4957); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3905;
    nodes3905 = node.contents();
    oldNodes.replaceWith(nodes3905);
  }));
  var nodes3906 = $("<span>");
  root4943.append(nodes3906);
  subs__.addSub((nrichRPG.coreWorkout.addQAStats)(function(_, callback) {
    var root4958 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4958); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3906;
    nodes3906 = node.contents();
    oldNodes.replaceWith(nodes3906);
  }));
  callback(root4943); return subs__;
  
  
  
  
  
  
  
  
  return subs__;
};

mathmo.furtherTab = function(elements, callback) {
  var root4959 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes3907 = $("<span>");
  root4959.append(nodes3907);
  subs__.addSub((ui.header)(mobl.ref("+Q on *topic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root4960 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4960); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3907;
    nodes3907 = node.contents();
    oldNodes.replaceWith(nodes3907);
  }));
  var nodes3908 = $("<span>");
  root4959.append(nodes3908);
  subs__.addSub((nrichRPG.coreWorkout.addQAPlus)(function(_, callback) {
    var root4961 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4961); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3908;
    nodes3908 = node.contents();
    oldNodes.replaceWith(nodes3908);
  }));
  callback(root4959); return subs__;
  
  
  return subs__;
};

mathmo.aboutTab = function(elements, callback) {
  var root4962 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes3909 = $("<span>");
  root4962.append(nodes3909);
  subs__.addSub((ui.header)(mobl.ref("About Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root4963 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4963); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3909;
    nodes3909 = node.contents();
    oldNodes.replaceWith(nodes3909);
  }));
  
  var credits = mobl.ref("\n<div style=\"padding:20px\">\n<h2>\n<img src=\"icon.png\" style=\"width:50px;height:50px\"/>\nMathmo v0.3 by the <a href=\"http://nrich.maths.org\">NRICH team</a>, University of Cambridge\n</h2>\n<h3>Help</h3>\nOn the 'My Qs' tab you'll find your current set of Questions (abbr. Qs)<br>\nTouch [Clear] to delete all your current Qs.<br>\n<br>\nOn the 'Add' tab you can add 5 random core, further or stats questions, or choose them singly.\nFurther and Stats sections are at the bottom of the topic list.<br>\n<br>\nWhen a question is displayed, touch [Check Answer] to check working and then\nreply to 'Did you agree?' [Yes] [No]. You may need to do a little more work to see whether your answer is really the same or not.\nThe questions will change colour (red == No/Not answered; green == Yes, black == not checked) so you can track how you are doing.\n\n<h3>Updates</h3>\nMathmo is a web application, and should update itself when you reload the app after it has been updated on the server. It's web address is <a href=\"http://nrich.maths.org/mobl/mathmo/mathmo.html\">http://nrich.maths.org/mobl/mathmo/mathmo.html</a>.\n\n<h3>Credits</h3>\n<p>\nIdea: Stephen Hewson\n</p>\n<p>\n<a href=\"http://nrich.maths.org/public/titlesearch.php?search=interactive%20workout\">Desktop Implementation:</a>\n Tom White, Edward Cree\n</p>\n<p>\n<a href=\"http://github.com/gmp26/mathmo\">Mobile Implementation:</a> Mike Pearson\n</p>\n\n<p>\nThe following have been important in developing mathmo\n<ul>\n<li>\n<a href=\"http://www.mobl-lang.org\">Mobl-lang</a> by Zef Hemel, University of Delft.\n</li>\n<li>\nThe <a href=\"http://code.google.com/p/flot/\">flot plotting library</a>\n</li>\n\n</ul>\n<a href=\"http://www.mathjax.org/\">\n  <img title=\"Powered by MathJax\"\n       src=\"http://www.mathjax.org/badge.gif\"\n       border=\"0\" alt=\"Powered by MathJax\" />\n</a>\n\n<h3>License</h3>\n<a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\"><img alt=\"Creative Commons License\" style=\"border-width:0\" src=\"http://i.creativecommons.org/l/by-sa/3.0/88x31.png\" /></a><br /><span xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://purl.org/dc/dcmitype/InteractiveResource\" property=\"dct:title\" rel=\"dct:type\">Mathmo</span> by <a xmlns:cc=\"http://creativecommons.org/ns#\" href=\"http://nrich.maths.org\" property=\"cc:attributionName\" rel=\"cc:attributionURL\">NRICH Project, University of Cambridge</a> is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://github.com/gmp26/mathmo\" rel=\"dct:source\">github.com</a>.\n\n</div>\n");
  var nodes3910 = $("<span>");
  root4962.append(nodes3910);
  subs__.addSub((mobl.html)(credits, function(_, callback) {
    var root4964 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root4964); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes3910;
    nodes3910 = node.contents();
    oldNodes.replaceWith(nodes3910);
  }));
  callback(root4962); return subs__;
  
  
  return subs__;
};

mathmo.root = function(callback, screenCallback) {
  var root4965 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  mobl.fetchLanguageBundle("english.json", function(result__) {
    var tmp3651 = result__;
    var result__ = [new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)];
    var tmp3642 = mobl.ref(result__);
    subs__.addSub(mobl.ref(mathmo.qTab).addEventListener('change', function() {
      tmp3642.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    subs__.addSub(mobl.ref(mathmo.coreTab).addEventListener('change', function() {
      tmp3642.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    subs__.addSub(mobl.ref(mathmo.aboutTab).addEventListener('change', function() {
      tmp3642.set([new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab), new mobl.Tuple("About", "", mathmo.aboutTab)]);
    }));
    
    var nodes3911 = $("<span>");
    root4965.append(nodes3911);
    subs__.addSub((ui.tabSet)(tmp3642, mobl.ref(null), function(_, callback) {
      var root4966 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root4966); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes3911;
      nodes3911 = node.contents();
      oldNodes.replaceWith(nodes3911);
    }));
    callback(root4965); return subs__;
    
  });
  return subs__;
};
