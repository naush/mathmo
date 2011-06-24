mobl.provides('plot');
mobl.provides('plot');
mobl.provides('mobl');

plot.plot = function(id, s, elements, callback) {
  var root1505 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node185 = $("<div>");
  
  var ref154 = id;
  if(ref154.get() !== null) {
    node185.attr('id', ref154.get());
    subs__.addSub(ref154.addEventListener('change', function(_, ref, val) {
      node185.attr('id', val);
    }));
    
  }
  subs__.addSub(ref154.rebind());
  
  var ref155 = s;
  if(ref155.get() !== null) {
    node185.attr('class', ref155.get());
    subs__.addSub(ref155.addEventListener('change', function(_, ref, val) {
      node185.attr('class', val);
    }));
    
  }
  subs__.addSub(ref155.rebind());
  
  root1505.append(node185);
  callback(root1505); return subs__;
  
  return subs__;
};
(function(__ns) {
__ns.lineChart = function(id, data) {
                   var d = data;
                   var el = $("#" + id);
                   $.plot(el, data);
                 };
}(plot));