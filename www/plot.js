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
  var root716 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node37 = $("<span>");
  node37.attr('id', "plot-wrapper");
  
  var result__ = plot.blank(qa.get().plotHtml) ? "<div id=id class=s></div>" : qa.get().plotHtml;
  var tmp681 = mobl.ref(result__);
  subs__.addSub(mobl.ref(qa, 'plotHtml').addEventListener('change', function() {
    tmp681.set(plot.blank(qa.get().plotHtml) ? "<div id=id class=s></div>" : qa.get().plotHtml);
  }));
  
  var nodes654 = $("<span>");
  node37.append(nodes654);
  subs__.addSub((mobl.html)(tmp681, function(_, callback) {
    var root717 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root717); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes654;
    nodes654 = node.contents();
    oldNodes.replaceWith(nodes654);
  }));
  root716.append(node37);
  callback(root716); return subs__;
  
  
  return subs__;
};
(function(__ns) {
__ns.lineChart = function(id, data) {
                   var d = data;
                   var el = $("#" + id);
                   $.plot(el, data);
                 };
}(plot));