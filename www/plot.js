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
  var root722 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node42 = $("<span>");
  node42.attr('id', "plot-wrapper");
  
  var result__ = plot.blank(qa.get().plotHtml) ? "<div id=" + id.get() + " class=" + s.get() + "></div>" : qa.get().plotHtml;
  var tmp684 = mobl.ref(result__);
  subs__.addSub(id.addEventListener('change', function() {
    tmp684.set(plot.blank(qa.get().plotHtml) ? "<div id=" + id.get() + " class=" + s.get() + "></div>" : qa.get().plotHtml);
  }));
  subs__.addSub(s.addEventListener('change', function() {
    tmp684.set(plot.blank(qa.get().plotHtml) ? "<div id=" + id.get() + " class=" + s.get() + "></div>" : qa.get().plotHtml);
  }));
  subs__.addSub(mobl.ref(qa, 'plotHtml').addEventListener('change', function() {
    tmp684.set(plot.blank(qa.get().plotHtml) ? "<div id=" + id.get() + " class=" + s.get() + "></div>" : qa.get().plotHtml);
  }));
  
  var nodes657 = $("<span>");
  node42.append(nodes657);
  subs__.addSub((mobl.html)(tmp684, function(_, callback) {
    var root723 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root723); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes657;
    nodes657 = node.contents();
    oldNodes.replaceWith(nodes657);
  }));
  root722.append(node42);
  callback(root722); return subs__;
  
  
  return subs__;
};
(function(__ns) {
__ns.lineChart = function(id, data) {
                   var d = data;
                   var el = $("#" + id);
                   $.plot(el, data);
                 };
}(plot));