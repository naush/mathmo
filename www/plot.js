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
  var root10 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node6 = $("<div>");
  
  var ref8 = id;
  if(ref8.get() !== null) {
    node6.attr('id', ref8.get());
    subs__.addSub(ref8.addEventListener('change', function(_, ref, val) {
      node6.attr('id', val);
    }));
    
  }
  subs__.addSub(ref8.rebind());
  
  var ref9 = s;
  if(ref9.get() !== null) {
    node6.attr('class', ref9.get());
    subs__.addSub(ref9.addEventListener('change', function(_, ref, val) {
      node6.attr('class', val);
    }));
    
  }
  subs__.addSub(ref9.rebind());
  
  root10.append(node6);
  callback(root10); return subs__;
  
  return subs__;
};
(function(__ns) {
__ns.lineChart = function(id, data) {
                   var d = data;
                   var el = $("#" + id);
                   $.plot(el, data);
                 };
}(plot));