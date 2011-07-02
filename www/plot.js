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
  var root890 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node283 = $("<div>");
  
  var ref298 = id;
  if(ref298.get() !== null) {
    node283.attr('id', ref298.get());
    subs__.addSub(ref298.addEventListener('change', function(_, ref, val) {
      node283.attr('id', val);
    }));
    
  }
  subs__.addSub(ref298.rebind());
  
  var ref299 = s;
  if(ref299.get() !== null) {
    node283.attr('class', ref299.get());
    subs__.addSub(ref299.addEventListener('change', function(_, ref, val) {
      node283.attr('class', val);
    }));
    
  }
  subs__.addSub(ref299.rebind());
  
  root890.append(node283);
  callback(root890); return subs__;
  
  return subs__;
};
(function(__ns) {
__ns.lineChart = function(id, data) {
                   var d = data;
                   var el = $("#" + id);
                   $.plot(el, data);
                 };
}(plot));