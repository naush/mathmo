mobl.provides('plot');
mobl.provides('nrichRPG');
mobl.provides('nrichRPG.questionAnswer');
mobl.provides('plot');
mobl.provides('mobl');
plot.blank = function(text) {
   var __this = this;
  return (text == null || text.toString() == "");
};

plot.renderPlot = function(id, qa) {
   var __this = this;
  if(qa.done && qa.answer == "%GRAPH%") {
    var jsonData = mobl.JSON.parse(qa.plotData);
    
    plot.lineChart(id, jsonData);
  } else {
    
  }
};


plot.plot = function(qa, id, s, elements, callback) {
  var root1127 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node457 = $("<div>");
  
  var ref474 = id;
  if(ref474.get() !== null) {
    node457.attr('id', ref474.get());
    subs__.addSub(ref474.addEventListener('change', function(_, ref, val) {
      node457.attr('id', val);
    }));
    
  }
  subs__.addSub(ref474.rebind());
  
  var ref475 = s;
  if(ref475.get() !== null) {
    node457.attr('class', ref475.get());
    subs__.addSub(ref475.addEventListener('change', function(_, ref, val) {
      node457.attr('class', val);
    }));
    
  }
  subs__.addSub(ref475.rebind());
  
  root1127.append(node457);
  callback(root1127); return subs__;
  
  return subs__;
};
(function(__ns) {
__ns.lineChart = function(id, data) {
                   var d = data;
                   var el = $("#" + id);
                   $.plot(el, data);
                 };
}(plot));