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
  var root900 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node50 = $("<div>");
  
  var ref46 = id;
  if(ref46.get() !== null) {
    node50.attr('id', ref46.get());
    subs__.addSub(ref46.addEventListener('change', function(_, ref, val) {
      node50.attr('id', val);
    }));
    
  }
  subs__.addSub(ref46.rebind());
  
  var ref47 = s;
  if(ref47.get() !== null) {
    node50.attr('class', ref47.get());
    subs__.addSub(ref47.addEventListener('change', function(_, ref, val) {
      node50.attr('class', val);
    }));
    
  }
  subs__.addSub(ref47.rebind());
  
  root900.append(node50);
  callback(root900); return subs__;
  
  return subs__;
};
(function(__ns) {
__ns.lineChart = function(id, data) {
                   var d = data;
                   var el = $("#" + id);
                   $.plot(el, data);
                 };
}(plot));