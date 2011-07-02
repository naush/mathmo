mobl.provides('plot');
mobl.provides('nrichRPG');
mobl.provides('nrichRPG.questionAnswer');
mobl.provides('plot');
mobl.provides('mobl');
plot.blank = function(text) {
   var __this = this;
  return (text == null || text.toString() == "");
};


plot.plot = function(qa, id, s, elements, callback) {
  var root538 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node28 = $("<span>");
  node28.attr('id', "plot-wrapper");
  
  
  var node29 = $("<div>");
  
  var ref28 = id;
  if(ref28.get() !== null) {
    node29.attr('id', ref28.get());
    subs__.addSub(ref28.addEventListener('change', function(_, ref, val) {
      node29.attr('id', val);
    }));
    
  }
  subs__.addSub(ref28.rebind());
  
  var ref29 = s;
  if(ref29.get() !== null) {
    node29.attr('class', ref29.get());
    subs__.addSub(ref29.addEventListener('change', function(_, ref, val) {
      node29.attr('class', val);
    }));
    
  }
  subs__.addSub(ref29.rebind());
  
  var result__ = plot.blank(qa.get().plotHtml) ? "" : qa.get().plotHtml;
  var tmp515 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'plotHtml').addEventListener('change', function() {
    tmp515.set(plot.blank(qa.get().plotHtml) ? "" : qa.get().plotHtml);
  }));
  
  var nodes491 = $("<span>");
  node29.append(nodes491);
  subs__.addSub((mobl.html)(tmp515, function(_, callback) {
    var root539 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root539); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes491;
    nodes491 = node.contents();
    oldNodes.replaceWith(nodes491);
  }));
  node28.append(node29);
  root538.append(node28);
  callback(root538); return subs__;
  
  
  
  return subs__;
};
(function(__ns) {
__ns.lineChart = function(id, data) {
                   var d = data;
                   var el = $("#" + id);
                   $.plot(el, data);
                 };
}(plot));