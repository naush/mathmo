mobl.provides('mathmo');
mobl.provides('nrichRPG');
mobl.provides('mobl');
mobl.provides('nrichRPG.questionAnswer');
mobl.provides('nrichRPG.coreWorkout');
mobl.provides('ui');
mobl.provides('mathmo');
persistence.debug = false;mathmo.homeUrl = mobl.ref("http://nrich.maths.org");
mathmo.resourceUrl = mobl.ref("http://nrich.maths.org/7088");

mathmo.qaItem = function(qa, number, elements, callback) {
  var root255 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node69 = $("<span>");
  
  var ref72 = mobl.ref("color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
  if(ref72.get() !== null) {
    node69.attr('style', ref72.get());
    subs__.addSub(ref72.addEventListener('change', function(_, ref, val) {
      node69.attr('style', val);
    }));
    subs__.addSub(mobl.ref(qa, 'done').addEventListener('change', function() {
      node69.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    subs__.addSub(mobl.ref(qa, 'correct').addEventListener('change', function() {
      node69.attr('style', "color:" + (qa.get().done ? (qa.get().correct ? "#480" : "#C00") : "#000") + "\"");
    }));
    
  }
  subs__.addSub(ref72.rebind());
  
  var result__ = "Q" + number.get() + ". " + nrichRPG.coreWorkout.topicName(qa.get().topic);
  var tmp155 = mobl.ref(result__);
  subs__.addSub(number.addEventListener('change', function() {
    tmp155.set("Q" + number.get() + ". " + nrichRPG.coreWorkout.topicName(qa.get().topic));
  }));
  subs__.addSub(mobl.ref(qa, 'topic').addEventListener('change', function() {
    tmp155.set("Q" + number.get() + ". " + nrichRPG.coreWorkout.topicName(qa.get().topic));
  }));
  
  var nodes196 = $("<span>");
  node69.append(nodes196);
  subs__.addSub((mobl.html)(tmp155, function(_, callback) {
    var root256 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root256); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes196;
    nodes196 = node.contents();
    oldNodes.replaceWith(nodes196);
  }));
  root255.append(node69);
  callback(root255); return subs__;
  
  
  return subs__;
};

mathmo.qTab = function(elements, callback) {
  var root257 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes197 = $("<span>");
  root257.append(nodes197);
  subs__.addSub((ui.header)(mobl.ref("Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root258 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes198 = $("<span>");
    root258.append(nodes198);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), mobl.ref(null), mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root259 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root259); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes198;
      nodes198 = node.contents();
      oldNodes.replaceWith(nodes198);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.clearAllQ(function(result__) {
                       var tmp164 = result__;
                       var result__ = ui.hideCurrent();
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp156 = mobl.ref(result__);
    
    var nodes199 = $("<span>");
    root258.append(nodes199);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp156, function(_, callback) {
      var root260 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root260); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes199;
      nodes199 = node.contents();
      oldNodes.replaceWith(nodes199);
    }));
    callback(root258); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes197;
    nodes197 = node.contents();
    oldNodes.replaceWith(nodes197);
  }));
  var result__ = nrichRPG.questionAnswer.QA.all().order("number", true);
  var tmp157 = mobl.ref(result__);
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all().order("number", true)).addEventListener('change', function() {
    tmp157.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA.all()).addEventListener('change', function() {
    tmp157.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  subs__.addSub(mobl.ref(nrichRPG.questionAnswer.QA).addEventListener('change', function() {
    tmp157.set(nrichRPG.questionAnswer.QA.all().order("number", true));
  }));
  
  var nodes200 = $("<span>");
  root257.append(nodes200);
  subs__.addSub((ui.mMasterDetail)(tmp157, mobl.ref(mathmo.qaItem), mobl.ref(nrichRPG.coreWorkout.showQA), function(_, callback) {
    var root261 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root261); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes200;
    nodes200 = node.contents();
    oldNodes.replaceWith(nodes200);
  }));
  callback(root257); return subs__;
  
  
  return subs__;
};

mathmo.coreTab = function(elements, callback) {
  var root262 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes201 = $("<span>");
  root262.append(nodes201);
  subs__.addSub((ui.header)(mobl.ref("Q on topic"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root263 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes202 = $("<span>");
    root263.append(nodes202);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), mobl.ref(null), mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root264 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root264); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes202;
      nodes202 = node.contents();
      oldNodes.replaceWith(nodes202);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.clearAllQ(function(result__) {
                       var tmp165 = result__;
                       var result__ = ui.hideCurrent();
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp158 = mobl.ref(result__);
    
    var nodes203 = $("<span>");
    root263.append(nodes203);
    subs__.addSub((ui.button)(mobl.ref("Clear"), mobl.ref(ui.delStyle), mobl.ref(ui.delPushedStyle), tmp158, function(_, callback) {
      var root265 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root265); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes203;
      nodes203 = node.contents();
      oldNodes.replaceWith(nodes203);
    }));
    callback(root263); return subs__;
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes201;
    nodes201 = node.contents();
    oldNodes.replaceWith(nodes201);
  }));
  var nodes204 = $("<span>");
  root262.append(nodes204);
  subs__.addSub((ui.group)(function(_, callback) {
    var root266 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQ(5, "Core", function(result__) {
                       var tmp168 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp159 = mobl.ref(result__);
    
    var nodes205 = $("<span>");
    root266.append(nodes205);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp159, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root267 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes206 = $("<span>");
      root267.append(nodes206);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 core Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root268 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root268); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes206;
        nodes206 = node.contents();
        oldNodes.replaceWith(nodes206);
      }));
      callback(root267); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes205;
      nodes205 = node.contents();
      oldNodes.replaceWith(nodes205);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQ(5, "Further", function(result__) {
                       var tmp167 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp161 = mobl.ref(result__);
    
    var nodes207 = $("<span>");
    root266.append(nodes207);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp161, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root269 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes208 = $("<span>");
      root269.append(nodes208);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 further Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root270 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root270); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes208;
        nodes208 = node.contents();
        oldNodes.replaceWith(nodes208);
      }));
      callback(root269); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes207;
      nodes207 = node.contents();
      oldNodes.replaceWith(nodes207);
    }));
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     nrichRPG.coreWorkout.randomQ(5, "Stats", function(result__) {
                       var tmp166 = result__;
                       if(callback && callback.apply) callback(); return;
                     });
                   };
    var tmp162 = mobl.ref(result__);
    
    var nodes209 = $("<span>");
    root266.append(nodes209);
    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp162, mobl.ref(null), mobl.ref(false), function(_, callback) {
      var root271 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      var nodes210 = $("<span>");
      root271.append(nodes210);
      subs__.addSub((mobl.label)(mobl.ref("Add 5 stats Qs"), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root272 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root272); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes210;
        nodes210 = node.contents();
        oldNodes.replaceWith(nodes210);
      }));
      callback(root271); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes209;
      nodes209 = node.contents();
      oldNodes.replaceWith(nodes209);
    }));
    callback(root266); return subs__;
    
    
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes204;
    nodes204 = node.contents();
    oldNodes.replaceWith(nodes204);
  }));
  var nodes211 = $("<span>");
  root262.append(nodes211);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Core topics</section>"), function(_, callback) {
    var root273 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root273); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes211;
    nodes211 = node.contents();
    oldNodes.replaceWith(nodes211);
  }));
  var nodes212 = $("<span>");
  root262.append(nodes212);
  subs__.addSub((nrichRPG.coreWorkout.addQA)(function(_, callback) {
    var root274 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root274); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes212;
    nodes212 = node.contents();
    oldNodes.replaceWith(nodes212);
  }));
  var nodes213 = $("<span>");
  root262.append(nodes213);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Further topics</section>"), function(_, callback) {
    var root275 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root275); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes213;
    nodes213 = node.contents();
    oldNodes.replaceWith(nodes213);
  }));
  var nodes214 = $("<span>");
  root262.append(nodes214);
  subs__.addSub((nrichRPG.coreWorkout.addQAPlus)(function(_, callback) {
    var root276 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root276); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes214;
    nodes214 = node.contents();
    oldNodes.replaceWith(nodes214);
  }));
  var nodes215 = $("<span>");
  root262.append(nodes215);
  subs__.addSub((mobl.html)(mobl.ref("<section class=\"ui__section\">Stats topics</section>"), function(_, callback) {
    var root277 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root277); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes215;
    nodes215 = node.contents();
    oldNodes.replaceWith(nodes215);
  }));
  var nodes216 = $("<span>");
  root262.append(nodes216);
  subs__.addSub((nrichRPG.coreWorkout.addQAStats)(function(_, callback) {
    var root278 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root278); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes216;
    nodes216 = node.contents();
    oldNodes.replaceWith(nodes216);
  }));
  callback(root262); return subs__;
  
  
  
  
  
  
  
  
  return subs__;
};

mathmo.root = function(callback, screenCallback) {
  var root279 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  mobl.fetchLanguageBundle("english.json", function(result__) {
    var tmp169 = result__;
    nrichRPG.questionAnswer.QA.all().count(function(result__) {
      var tmp172 = result__;
      var result__ = tmp172 == 0;
      var tmp171 = result__;
      var result__ = tmp171;
      if(result__) {
        {
          nrichRPG.coreWorkout.randomQ(5, "Core", function(result__) {
            var tmp173 = result__;
            var result__ = [new mobl.Tuple("Intro", "", ui.introduction), new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab)];
            var tmp163 = mobl.ref(result__);
            subs__.addSub(mobl.ref(ui.introduction).addEventListener('change', function() {
              tmp163.set([new mobl.Tuple("Intro", "", ui.introduction), new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab)]);
            }));
            subs__.addSub(mobl.ref(mathmo.qTab).addEventListener('change', function() {
              tmp163.set([new mobl.Tuple("Intro", "", ui.introduction), new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab)]);
            }));
            subs__.addSub(mobl.ref(mathmo.coreTab).addEventListener('change', function() {
              tmp163.set([new mobl.Tuple("Intro", "", ui.introduction), new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab)]);
            }));
            
            var nodes217 = $("<span>");
            root279.append(nodes217);
            subs__.addSub((ui.tabSet)(tmp163, mobl.ref(null), function(_, callback) {
              var root280 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root280); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes217;
              nodes217 = node.contents();
              oldNodes.replaceWith(nodes217);
            }));
            callback(root279); return subs__;
            
          });
        }
      } else {
        {
          var result__ = [new mobl.Tuple("Intro", "", ui.introduction), new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab)];
          var tmp163 = mobl.ref(result__);
          subs__.addSub(mobl.ref(ui.introduction).addEventListener('change', function() {
            tmp163.set([new mobl.Tuple("Intro", "", ui.introduction), new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab)]);
          }));
          subs__.addSub(mobl.ref(mathmo.qTab).addEventListener('change', function() {
            tmp163.set([new mobl.Tuple("Intro", "", ui.introduction), new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab)]);
          }));
          subs__.addSub(mobl.ref(mathmo.coreTab).addEventListener('change', function() {
            tmp163.set([new mobl.Tuple("Intro", "", ui.introduction), new mobl.Tuple("My Qs", "", mathmo.qTab), new mobl.Tuple("Add", "", mathmo.coreTab)]);
          }));
          
          var nodes217 = $("<span>");
          root279.append(nodes217);
          subs__.addSub((ui.tabSet)(tmp163, mobl.ref(null), function(_, callback) {
            var root280 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root280); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes217;
            nodes217 = node.contents();
            oldNodes.replaceWith(nodes217);
          }));
          callback(root279); return subs__;
          
        }
      }
    });
  });
  return subs__;
};
