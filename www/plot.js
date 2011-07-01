mobl.provides('plot');
mobl.provides('plot');
mobl.provides('mobl');

plot.plot = function(id, s, elements, callback) {
  var root1479 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node354 = $("<div>");
  
  var ref366 = id;
  if(ref366.get() !== null) {
    node354.attr('id', ref366.get());
    subs__.addSub(ref366.addEventListener('change', function(_, ref, val) {
      node354.attr('id', val);
    }));
    
  }
  subs__.addSub(ref366.rebind());
  
  var ref367 = s;
  if(ref367.get() !== null) {
    node354.attr('class', ref367.get());
    subs__.addSub(ref367.addEventListener('change', function(_, ref, val) {
      node354.attr('class', val);
    }));
    
  }
  subs__.addSub(ref367.rebind());
  
  root1479.append(node354);
  callback(root1479); return subs__;
  
  return subs__;
};
(function(__ns) {
__ns.lineChart = function(id, data) {
                   var d = data;
                   var el = $("#" + id);
                   $.plot(el, data);
                 };
}(plot));