mobl.provides('plot');
mobl.provides('plot');
mobl.provides('mobl');

plot.plot = function(id, s, elements, callback) {
  var root11334 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node743 = $("<div>");
  
  var ref573 = id;
  if(ref573.get() !== null) {
    node743.attr('id', ref573.get());
    subs__.addSub(ref573.addEventListener('change', function(_, ref, val) {
      node743.attr('id', val);
    }));
    
  }
  subs__.addSub(ref573.rebind());
  
  var ref574 = s;
  if(ref574.get() !== null) {
    node743.attr('class', ref574.get());
    subs__.addSub(ref574.addEventListener('change', function(_, ref, val) {
      node743.attr('class', val);
    }));
    
  }
  subs__.addSub(ref574.rebind());
  
  root11334.append(node743);
  callback(root11334); return subs__;
  
  return subs__;
};
(function(__ns) {
__ns.lineChart = function(id, data) {
                   var d = data;
                   var el = $("#" + id);
                   $.plot(el, data);
                 };
}(plot));