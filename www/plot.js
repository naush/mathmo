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
  var root356 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node16 = $("<div>");
  
  var ref16 = id;
  if(ref16.get() !== null) {
    node16.attr('id', ref16.get());
    subs__.addSub(ref16.addEventListener('change', function(_, ref, val) {
      node16.attr('id', val);
    }));
    
  }
  subs__.addSub(ref16.rebind());
  
  var ref17 = s;
  if(ref17.get() !== null) {
    node16.attr('class', ref17.get());
    subs__.addSub(ref17.addEventListener('change', function(_, ref, val) {
      node16.attr('class', val);
    }));
    
  }
  subs__.addSub(ref17.rebind());
  
  var result__ = plot.blank(qa.get().plotHtml) ? "" : qa.get().plotHtml;
  var tmp347 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'plotHtml').addEventListener('change', function() {
    tmp347.set(plot.blank(qa.get().plotHtml) ? "" : qa.get().plotHtml);
  }));
  
  var nodes326 = $("<span>");
  node16.append(nodes326);
  subs__.addSub((mobl.html)(tmp347, function(_, callback) {
    var root357 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root357); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes326;
    nodes326 = node.contents();
    oldNodes.replaceWith(nodes326);
  }));
  root356.append(node16);
  callback(root356); return subs__;
  
  
  return subs__;
};
(function(__ns) {
__ns.lineChart = function(id, data) {
                   var d = data;
                   var el = $("#" + id);
                   $.plot(el, data);
                 };
}(plot));