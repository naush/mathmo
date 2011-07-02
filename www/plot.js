mobl.provides('plot');
mobl.provides('nrichRPG');
mobl.provides('nrichRPG.questionAnswer');
mobl.provides('plot');
mobl.provides('mobl');

plot.plot = function(qa, id, s, elements, callback) {
  var root352 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node14 = $("<div>");
  
  var ref12 = id;
  if(ref12.get() !== null) {
    node14.attr('id', ref12.get());
    subs__.addSub(ref12.addEventListener('change', function(_, ref, val) {
      node14.attr('id', val);
    }));
    
  }
  subs__.addSub(ref12.rebind());
  
  var ref13 = s;
  if(ref13.get() !== null) {
    node14.attr('class', ref13.get());
    subs__.addSub(ref13.addEventListener('change', function(_, ref, val) {
      node14.attr('class', val);
    }));
    
  }
  subs__.addSub(ref13.rebind());
  
  var nodes324 = $("<span>");
  node14.append(nodes324);
  subs__.addSub((mobl.html)(mobl.ref(qa, 'plotHtml'), function(_, callback) {
    var root353 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root353); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes324;
    nodes324 = node.contents();
    oldNodes.replaceWith(nodes324);
  }));
  root352.append(node14);
  callback(root352); return subs__;
  
  
  return subs__;
};
(function(__ns) {
__ns.lineChart = function(id, data) {
                   var d = data;
                   var el = $("#" + id);
                   $.plot(el, data);
                 };
}(plot));