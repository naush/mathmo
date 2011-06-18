mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
<<<<<<< HEAD
  var root9634 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3795 = $("<span>");
  root9634.append(node3795);
  var condSubs921 = new mobl.CompSubscription();
  subs__.addSub(condSubs921);
  var oldValue921;
  var renderCond921 = function() {
    var value4141 = value.get();
    if(oldValue921 === value4141) return;
    oldValue921 = value4141;
    var subs__ = condSubs921;
    subs__.unsubscribe();
    node3795.empty();
    if(value4141) {
      var nodes7189 = $("<span>");
      node3795.append(nodes7189);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl1536();
      }));
      
      function renderControl1536() {
        subs__.addSub((elements)(function(elements, callback) {
          var root9635 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9635); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7189;
          nodes7189 = node.contents();
          oldNodes.replaceWith(nodes7189);
        }));
      }
      renderControl1536();
      
      
    } else {
      var nodes7190 = $("<span>");
      node3795.append(nodes7190);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9636 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes7191 = $("<span>");
        root9636.append(nodes7191);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root9637 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9637); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7191;
          nodes7191 = node.contents();
          oldNodes.replaceWith(nodes7191);
        }));
        var nodes7192 = $("<span>");
        root9636.append(nodes7192);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,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"), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root9638 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9638); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7192;
          nodes7192 = node.contents();
          oldNodes.replaceWith(nodes7192);
        }));
        callback(root9636); return subs__;
=======
  var root361 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node21 = $("<span>");
  root361.append(node21);
  var condSubs7 = new mobl.CompSubscription();
  subs__.addSub(condSubs7);
  var oldValue7;
  var renderCond7 = function() {
    var value103 = value.get();
    if(oldValue7 === value103) return;
    oldValue7 = value103;
    var subs__ = condSubs7;
    subs__.unsubscribe();
    node21.empty();
    if(value103) {
      var nodes333 = $("<span>");
      node21.append(nodes333);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl2();
      }));
      
      function renderControl2() {
        subs__.addSub((elements)(function(elements, callback) {
          var root362 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root362); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes333;
          nodes333 = node.contents();
          oldNodes.replaceWith(nodes333);
        }));
      }
      renderControl2();
      
      
    } else {
      var nodes334 = $("<span>");
      node21.append(nodes334);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root363 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes335 = $("<span>");
        root363.append(nodes335);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root364 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root364); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes335;
          nodes335 = node.contents();
          oldNodes.replaceWith(nodes335);
        }));
        var nodes336 = $("<span>");
        root363.append(nodes336);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,R0lGODlhIAAgAOf2AAAAAAEBAQICAgMDAwQEBAUFBQYGBgcHBwgICAkJCQoKCgsLCwwMDA0NDQ4ODg8PDxAQEBERERISEhMTExQUFBUVFRYWFhcXFxgYGBkZGRoaGhsbGxwcHB0dHR4eHh8fHyAgICEhISIiIiMjIyQkJCUlJSYmJicnJygoKCkpKSoqKisrKywsLC0tLS4uLi8vLzAwMDExMTIyMjMzMzQ0NDU1NTY2Njc3Nzg4ODk5OTo6Ojs7Ozw8PD09PT4+Pj8/P0BAQEFBQUJCQkNDQ0REREVFRUZGRkdHR0hISElJSUpKSktLS0xMTE1NTU5OTk9PT1BQUFFRUVJSUlNTU1RUVFVVVVZWVldXV1hYWFlZWVpaWltbW1xcXF1dXV5eXl9fX2BgYGFhYWJiYmNjY2RkZGVlZWZmZmdnZ2hoaGlpaWpqamtra2xsbG1tbW5ubm9vb3BwcHFxcXJycnNzc3R0dHV1dXZ2dnd3d3h4eHl5eXp6ent7e3x8fH19fX5+fn9/f4CAgIGBgYKCgoODg4SEhIWFhYaGhoeHh4iIiImJiYqKiouLi4yMjI2NjY6Ojo+Pj5CQkJGRkZKSkpOTk5SUlJWVlZaWlpeXl5iYmJmZmZqampubm5ycnJ2dnZ6enp+fn6CgoKGhoaKioqOjo6SkpKWlpaampqenp6ioqKmpqaqqqqurq6ysrK2tra6urq+vr7CwsLGxsbKysrOzs7S0tLW1tba2tre3t7i4uLm5ubq6uru7u7y8vL29vb6+vr+/v8DAwMHBwcLCwsPDw8TExMXFxcbGxsfHx8jIyMnJycrKysvLy8zMzM3Nzc7Ozs/Pz9DQ0NHR0dLS0tPT09TU1NXV1dbW1tfX19jY2NnZ2dra2tvb29zc3N3d3d7e3t/f3+Dg4OHh4eLi4uPj4+Tk5OXl5ebm5ufn5+jo6Onp6erq6uvr6+zs7O3t7e7u7u/v7/Dw8PHx8fLy8vPz8/T09PX19f///////////////////////////////////////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBQD/ACwAAAAAIAAgAAAI/gABCBxIsKDBgwgTKlzIsKHDhxAjSiSoYc+bCBMFbqCSY4DAApTgyQOUcUGkZcXAeHxQLB49SgI+xnSYAdYxZsjCDHgQLN48NAEEaFAh4oDDA3+EIXO2rAiAN96owQBQ4YVVCg87XBKWLNofAAROlAgAwIPVFxAgmrAkzJgWgxZcvADhESKGKk2MFhTgIAKBhwweNCjAMICBvwoPHMkDCNCYBwoLhFhxIm3CFYEIGUKkiIfCC2dLzDyI4k6e03hqKLQQerTBAkHCgOFCREHkDydGQFYoYAGDBK4RBiX78ACFBsQJBoAAIThDAyVguMBaEIPcEIgbBjBrtQOAAAoSTAgEcXZ3QwEnrLqQAMD6CgdUz1J3yOFFCwwBBqR/ESJoBhUk6OXQABAwQBYBKVhFAnEF1JURAB9YhcGDByHgwQUOUqjhhhx26KGGAQEAIfkEBQUA/wAsBQADABQAGAAACMwA/wkcSDDABg8BCCpc+I+KMmhKGEpcAAsdu1MFJGZwUmOgg14WgS1gqIDQLltZBoJsB0wBwwugbPXSpeXfAlro3LXKONCAQANzYt361QvIPzXZvHlROGGghkSxcgm7IzBGjQESBYpAFMsWlawMLTQx4hOsQAUNFhAwOzBAjTJs2lRhwPYfhDBs3MCRI6NuAilfAn9RUReACCFIisxAUBgAAQQGEtZVaKDp5IEkXjQGAIDDZYIlPg+84EL0PwEOTC/0ILDCZwMZKAhYGBAAIfkEBQUA/wAsBQADABIAFgAACMsA/wkcSBBDnDMQCCokGOBPt295FkpsEKubOFsKFlowAkOAwAi4uo3zxUBhgjupTEXx6GCWyFwCCTgQSOERqVWqpghQsKobuVP/GADSIrCAmU6lWrXa8e8MtWtb/r3pVGPghTyeTsFq8+9ADh3/Aqj5odADHk+lmiwMIXECEbISCRJQkCBAXIIAMBSxYgVIxrv/BuyQQsVKFhOAA9MgwpjIh8T/IKx40SJEAcj/BBQggLlz3Mue/2UIHWBE6H8UWEAGwJq1gr8ERRAMCAAh+QQFBQD/ACwFAAMAFAAWAAAIzgD/CRxI8IKaMA8IKlz47w60aXMYSmRgCpq1VhL/GUhBYiAEVtCu1VrAcEAVSJKSCGyAKiSsBAI3OBho4M2jS5iWCPwEDdsngYSswfogMMAURJA0bbLxLwwyZlf+tXFHLx2QgRTOIJLUSYxGGzcEbqL3jY4EghnMIIpEZOEcaGUYQtBxo8BCBCIUCjBwICPDBC14/IDR169AACBs4NDRI4Phwx1gSIYx4bFABCBUpPBAwHJRz6BDh8bAsLBCAKgBeGCowjCEFSxE/zuAwHJAACH5BAUFAP8ALAYAAwATABgAAAjSAP8JHDiwwhcpDggqXNgGWDE2CyP+W5AJGDJRCRQC2KiAwUYADjwFQ6Zq4UYOZuT4EMhAU7BkpgZqmPBvoxA8gQYF+ZdAUrBllggs+OOsVomNM+DkIYToxb8suX5J+ZemHLt3ZwQ2oBJnDyIrAmXMEGiJHbx3UwZSmNJ1x8I36uKRgkCwwQsXBBYqQHLFgsAABAh8HEwYgMACHlKo+JBXIkEKLyK/iOD4seQXEioPLPBBYIcBmkOLHk1a4oXSnlH/Y4BihWYRCgsY0BxAdejTEQMCACH5BAUFAP8ALAYAAwAVABYAAAjMAP8JHDhwgpUlCwgqXChwzCtaWhhK/KdA0atblhAwBMARQICBDRy9wtVJgUAFLTgQJDBjyYuPCxa9yqVJYwZI1X7JGOihC5o2NwIgGPRqFyOBj76NMxdnYAcrYNjIQfEPSipYTP6d2bb0HJSBCX5cEQMnyb8CLl4IOABKnLl0nyAQfNDjypgYC+eUSwcKw8IEI0YMWAjhypcKAzlO/PvAwD8BGFCg6LD4nwEbNlA4kFtZ4oPOEgWoBD1QRAPSqFOrXs1wA2uKJ14TSB0QACH5BAUFAP8ALAYAAwAWABYAAAjdAP8JHDiwAAsWAggqBMCwYcMlljYVUUiRYoI8m0oFKlDxn0OHC/pwMvUogcAERqI8ENjwwgsOJ/NwOsXowL8LiJxZo0NwgQ8nVFj8OzCHE6o/Ag1Ju7bNFIKBDXIUiaIFxD8jlj5NDOOMabczBAmY2HHEig6BKVb8M2DJ2rZvmFYSTIBiRxITFNlo+5bpQkUDFzIkVPhgyhYKHRMTVPDB778AihV6SMXtGJJ/DFxEHuiGnDZqmxIs0Lz534klQnioeJwhRYrSAxd4BECAAOzbuHPr3r1ZhWPdBRjCDggAIfkEBQUA/wAsBgADABYAFQAACNQAAQgcSFDBAYIIAfxbyJDhCDZoRDScSHEhAS6GIHFJOLDivwNnDEXSc2AhgiBLHEw0YCGCSTOGJAVC8K+CH2DI2jQcQGJGjg//DIQxRIlOAQV8iCVz1qmkyRYwbPzA8C+Hn0U2/mn5hcwZtDANBYh4EUOHin8COoRYuKirNEgqJ5ogq4FimWbTIlXwWEFCAIoOnliZ4LFwwwQeLDBUbJhhh1HVghn5l6BFY4Z13sGDx2tB5csL6dAbfUsBaIYcENGapeP0xAM0XcueTbu27X8hDDAMCAAh+QQFBQD/ACwGAAMAFgAVAAAIywABCBxIsKBBAP8SKlS4AEcOBgsjSkwo4IebPEUmakxoQIobPWgMKORRpEHEAQ0WCDwwxQ2fNwf+TZgDCxeZhQE8uGBRAeETN37IEEgQZ1YuX5EWFlDx4kWLB/9aoLnj4l8UV7h8CdMisekLDv8CYABb4M8tX8MMmZzogoLELr2IHXI7kQJUiQ2SQJGwsa/CDhUSAgjsN+EGTsx6MfmHgEXhhHDMnTtXS0Hjx//gsNtsK6EFFI83eDImawlmpXdPq17NurXrfx8KKAwIACH5BAUFAP8ALAYABAAXABMAAAjSAP8JHDhQAIYMAQgq/AegoUOHJaJoUbGwokICO6iEiTJA4IEWPhgsDKAggcACPKiM2WLgXwQznExtGegQw78VAgngoFJmygAEZD6dakWoZUETCkNAAYMUySZTrWJNodnww0IJFwIQiFOq1aw9Ii3+k7BwCitafMiKtchgiJIIa+P+Q8CBRAWjcgeGmBQsGa9HEg7gzNtnGzdu3bQZMTBY7h1xkMVxOwKAwom8HDD98uVLDgKBHfP+c0A6tOgdUhyIXijk0SYKqxXGEPMi9sIKBAMCACH5BAUFAP8ALAYABAAYABUAAAjRAAEIHEhQAQKCCAf+W8iQoYUZPDA0nEix4YATOIzsELDQQIkQHCsmMLBwQAocSIwQ+OcAC6JENipaaKGiJEYlQAQYqKJIUqYwBCsutGDjiId/PQxFyuQpidCGAhlEWBgGUiZQbhY8fZoEUyg4U7cKVcBjyAOxaP9pEBECQtqJJRzR4tXL04u3CwPwaebsGTRokgoQQPHWj7XDhyWtnPD2Q6RatWg5IoyXYYPLBSoniBKl8kQx7tqV8szwhq5675yQXnhkWD0zqxcaKdQhdkmKAQEAIfkEBQUA/wAsBgAEABgAFQAACNgA/wkcSLAAAYIIEyZ8kOIEA4UQCQoo8QJGiQACBSQwAKCjR48FCJ6o2ELAvwVBylB5mDBCCoQvYrD4V8DInD2CXiQMMCIhixcU/sl4o2cQIRMRBWoQqGABgAFQ8gxS5CVkUggJewhiJMZB0ogJaOho8LXsAQwfPjwYOKGsQBGCSrFyJWnFPwIo3P6b4+sXMGDBDh3U+88OMmTHDiMSiNVtB0SrVKUqhJQwQgaD9SJw4oSsZYEB8pwr96nt5wGk4rU7t+SzQDfw4rkT4/rkIGudagsksOFAwoAAIfkEBQUA/wAsBwAEABYAFQAACMIA/wkcODBAAIIIExJkICLEAYUQBQYI8eLFBgAYAQTIiDFixRICDaz4geIgQQcJK44IQIBGFjFhIiAEMRDlPxYsIPwjUSXMGjUTEHYYmEEgAgX/AuwAs2bOEwIRFcZQU2cKg6gKD6RgsQBrVAMVOGxo8E+n138e6lDa1InQibMC0bBq5eoVrD1w/7G5xZdvn7wb/Hjq1GnPiLz/CDBYjFiJEsQD63TTdkkC5E/oyHFDAnkNusxeIP/78wwVSNEaEiAMCAAh+QQFBQD/ACwIAAQAFgAXAAAIzQD/CRw4EIDBgwgPEhy4IMSHhRAj/gNRMGFCiQsHYCgB4SJGgQJC8DiSQwBBAB4+XtBhBMqSAws5SDRYoggULTkCLDxQAiOIJ1yEKPgYccCHEQmIfiwgAQMGBEoJajATCFEiNyKiCuSCKdMmTpzcDNAaplQpUmbhjI2KYc6jR47ePNQqcMGCoVohXJnigO5AOtWeObKgNUKAA6i6YZvGiEHUR0z+ufHWLRu0IVERrSrw7xG4yl2iltn8T8KhZ7ZWRKVSZmCBEhi0ZsCLMSAAIfkEBQUA/wAsCQAEABUAFwAACNgAAQgcSLCgwX8IEx7woKFAwocQIX5AmCGiRQIWEQp4QAHjwwYnUmT818EFjA8BRkas8AJGDRcCHmpQ6cGlDxEFDai0UAMIDIcqIQqokEFn0IwEHkxoYPToPwtV2Mh5s6WC039OBA0qZOiQEgBOqUAaO7YJ2KMVzPzx4yfMhKv/BiSYO8ApBStMGsBF+AZZsEEUggqYUeLfgn/QlBET5EClCGXXlPxLMw3aMmJeVLpIJs/UPwWHqEFjZunAyBrU5CWsEGmaMzSas8FjkxACkyV6R0KYoyb3yIAAIfkEBQUA/wAsCQAFABQAFgAACMsA/wkcaADDBQIDEypcyHDhgIYDGzQQkHCBCRQQ/7lwcQGARwAcMv57QXJEgIEZRJJ8UUGkQpIgHrocCCECwpkKByx4kMDjTAdArGyxIoOiwI9IP/JIs6aNmzMRZv7IQzXPmwkzIVxxA8eMjJM4ESw44DOjBCdFGOAUeAYXrDsSMiKwQeKfgk7BdNGy06BhgD3mnh35J6ZYsF20rDSEoAxeuk//EvwxFoyXIgMML0iDp46UwAmIiv0C03DAJsdoBj44YkRtQw90zogMCAAh+QQFBQD/ACwIAAUAFQAWAAAIswD/CRz4rwDBgwgPekjIsKHAAAoUAJg40eHADf9YRLAoUMWDgx8oAmB44ADHkyhTohSAQIEBlQha9BCyw8LIkyqeRJlCZcgAlDLACAVzhECJkw2QZMHSBAMAASsPGPh5MoKRHgpU/utiipMaCBxpiPiXABIsVKHSLHB4p1uxIf+20IKVKlQTh8TOfbsksE4tWKr4NLTA7Bw4TgIl9Jnl6opDS+e8jRnoAAeQtQ07vBHDwGFAACH5BAUFAP8ALAkABQAUABgAAAjRAP8JHCiwwgCCCP8BWMiQQ8KHEBEmMBAxYgsVDipGdKixY0cXHhNmDJkwgAEDAkgaCLGChQgEITnQqHEDxwcAHkcU2VmEBM6OCWwQGSIjAcl/BQqk7OiABw2jD2XoYMhwSqRDW0YKpCBwTiOBOmAMQCCI06RFWxQgvAKtyz851IYh+SdFFKdKjYIQdNFJD4IHvLZJSyQAgZpRnCydOSgQQYaDH55xm/bvwD8IcUBtagJRQzJu1DhZ/sdARg61Dx/Y4latz1Eqw2jhOBqAwwWNAQEAIfkEBQUA/wAsCQAFABMAGAAACMwA/wkc+O8CBYIIExK8oLChwgMOHbJAoSDivxQJNVgsYLGjx48fCQQAKTDFBwIeM7xY+QJCShgwXzzwaIBEixUfBnwMMGDAyIEjECRM8EIFRIIl1jxDk9BIHjhKFgy0cEecPEn/DtxoIeCAHEN96CwR+k/LuXnptPxjc6yWkH9IHBnyY8eGQBzIqtn550CWs2F+snZxdOgPEwAACnIQiMGXs2KQDPD9osiPDIUXejkzNklyVhUjBCikgMvZMUUoOw44tPkKSA1jrkhtGBAAIfkEBQUA/wAsCQAFABMAGAAACMMA/wkc+K/CBIIIEypcyHCgAQINFa4wgSCiQgsWE0LIyLGjRwAAPP7TIECkCwcZLbxY6aJBxgIfTpioEKCjAAEg/4UgU0ThARIfChD0sGueOTIJc4SxgqOiQDXy3qlrJHBGin8EtLwhs8UGxH+K3q0DZ+VfGVyldvzzceeNGS4cBNoI1kyOQFO/ZMkJYOBJWzMhBlrQINBCrF+0BAlUoAQNEgUXD9cyNHBAgwEgQxKUsOqXLT8DOPb5VetJRwxcoEBeGBAAIfkEBQUA/wAsCQAHABMAFgAACLcA/wkcSPAfAAAFBhRcWFCDChIHGEqcSLGixYsYM2q8EEDjPxYRNa4IibGEBAAeB4IQM4TkwAEYKCgc2KHWum5gFqoosoNEgYFz1JkDZ+ifARck/gUYUiXJjxEd/x0yF65alH9dTk2i8S/GlypLfCgQSCPXMDYHGGRq9YnMvwJAvFQhkmBghQwCKYxqFWrOTwQugoA4iJIgBVGtRtkpQFgA4cIDI3RqRQoORgFzEh/JaGEKkroSAwIAIfkEBQUA/wAsBwAHABUAFgAACMwA/wkcSLDgPwEGEyYUYUChw4EQHj58ILGixYsYMxYYWAEAxgsDVRhg0UOIE5AWRdoYdStRA4sjBjaosNFigIIfzERRYFDAhAkJR7gKZ02MQQ4wXoQoiGEUOG3T/vwrgOJDgAAwcsR4sQGA139ivmmrlswKgCmU/rD4R4KIVhQDBv7ZZs1ZnX8LFGVSVOXfgBdDcpRAKFAGrF9sXkqYpImRGAL/DIQIsaAghQ6Q/0mIpMlRGQJeQ4dO+KCRpkdgMv4Lc7qHaghFdiBwGBAAIfkEBQUA/wAsBgAOABYADwAACLwA/1lYkeKfwYMIE/6bIFCVLUqAVCic+A8FAQzO6NGLx4WiwhMD/lHx1WwSBI8JHyCkgLLlvw5gmrhUGKIUtWRbFGJ48WKihU3TmhWrY1CEhn8ARPB8kQFhADnSmhnT9eRfkj9pRvy7sLSEgIMKUDU79kuMAQV5CMkh8k9ABxcvOACY+2+AnmPB4ij4BwEQoTpPQgp4MIFASiNEGBh84IfQnSghZxpMYIcQHiUBJB9EEkiOCc0HDZj4kJliQAAh+QQFBQD/ACwGAAcAFgAWAAAIzAD/CRxIsOA/AgYHkkg4EAMKhhAjSpxIsaLFgRUsDLj4L0AVZtEyYagYQeCyeCivVDwx4AIyduzUaalYQsC/KLeKOeIokMEEngQ5aEGSwGAACBBsGvywyViuKQldMKwQiVgvWmoOYvj5LwRENcN62UJ15F+PM1E0/LMwUEQAgpx63XKVpQACM2uyyADwj8O/FhUICohzC5aZohHesNmyQ6kDBm8JOgDiY4FAB2vYdOmhtOIBLmy+wABAurTp06U/TBFSkiFq0wUEvC4dEAAh+QQFBQD/ACwGAA0AFgAQAAAIsAD//aNQQaDBgwgRSjG2rNKFhBBPQPhXgRi6dOmoQIRYQoCFX+LEgbuysWQTV7wOPSjJUgLLl/8yTAmCACbCDo5qoVrCkgDCCYVosQrl5d8ACQwAADhoAWEYWaxGVfLxL0aTGysPdlC6NIEjVqQ0Ofl3IEqUHiAMtmAx8aAZUpuw1HSQJQoQEwEELlDAdem/BjlqGBCoYIoUIXhtGgywQ8oQDYoPMlDhYUDJvpgzaw4IACH5BAUFAP8ALAUACQAWABMAAAjDAP8J/FekxsCDCBMK3CPJoMKHA0PkgjQDokUQYjRYRGhgwoV/BzYivPBIGLJilyyIFOjACzdu3bx9C7NSoBZrOK1V61JzBIZFuHLJIkRhpYgF/wpYwDCBQE2FF5boCPn0n4ZAoigFqRoBTyhMjKD8E8AgAUQAaK98wuQIEI1/I2iscIBQ40AEfzBBKjSEQIEdNmCECCCQBQqkB7VAMrQkJIIegUsIDHCgQMIFMlpYToojsIiqAkPQaAEB9NgHDNCqXh0QACH5BAUFAP8ALAQABwAYABUAAAjaAP8JHNigwMCDCBMOxIHrjMKHCRvRc4YEosV/f+LR+8Th4kMQu+J9m+Hx4YczTAyWHCjBAoWVCHdgutVrF6QLKxv8U/Dp2TNo0aS5WTkiQIJLyJImDbNSRIB/NS6tYlVKD86SCgYqqGAhAkyIFITMMPB14IU4jfzYKPvvQZpFguoE+Rcgq0AQLBUyUSToDhoV/zC4GFhhYIaEBMoIytPGxoABKF68MLziRIKBADID8FGHTQ+DBVRIJvEvM9mHBDxwGCBwwAnJHzTLnk07s4UVKBhArD3bgMqHAQEAIfkEBQUA/wAsBAAHABUAFQAACLYA/wkc+MBCgIEIEya08c8ZmwEDFEoUiIgdPHRIJk7Uk65dPEAaJX6glY7clJASPYxJgnJggQgVJBhoOfBGo1WxXh2yQDPBpF/AggkjZoYmgkW3buFKqoXmvxiJNnGq9KaC038JJlB4cFVhBBwqCnSdAMbOGRVXE1yhk2YLjJAREMKQk8aLkw0hLwDYC+BFGjBUVgj4d4ImAyJMUhBoyXcvgQMHBZoQqKHrPwgmSiSw/G/AYIUBAQAh+QQFBQD/ACwEAAcAFwAVAAAIswD/CRwoocLAgwgTDsx1LI3ChwcFiTsHzghEiHS8jUPH5+LDDqu8bYPi8aMXiyUPQpgQISVCGYE6jRLFR4LLBQgKuXIFK5YsKi5FHOhTqmjRKC4FrtCjSBEhMTaT/kMAIYKDAVITOmgRQkDWfxCadGGyIeuAIVueAAFx8UHCC1WeDKER9SGFhBSYFMHBIcBDFSQOJBQQYsUFrA8LIP4HoLHjAI4FjPh6kMEIDwYo/wvg92FAACH5BAUFAP8ALAQABQAVABcAAAjRAP8JHEjw34YpFAQUXJihQwCBAR7dirGwIJBdxMgM+PcgWS0ZFQcGMGRNWzUz/yAgWxWSoJxo1rhdQ/JPDqeWAzeQinbNm6F/BDrgHJhiVLRpYIYu3MBlygGlQB1EeFAAqsAWdBpJkhQnAtQDdjRt4uTp0xKoBtpAWrv2iNUSau7ciUMFgtV/Bxw8WKDwLsEFHyo8vKsgh5AZFO4KaPGDBgyhVhfkcOzCb4EVMFxgwPmhAIDPnxlkoPCQQIqKD0GrBh0ghF+CCDxALri6tm3QAQEAIfkEAQUA/wAsBAAFABUAFgAACMYA/wkcSPCfhjVZGBQsaIFKjgEDF8V7N2fhwAOBlhUDM3BYPHqKLAqUgOpYs2Rh/j0IFm9eGZH/BOQRhuzZsiL/3nh7BgPmvw6XhCWL9kfgCQ4BfP4zYUmYMS1KF2Ko0iTqQAYPHFgdWOHLHkCAxjywGiAKoUKHECkKQtZJnrdveWylwCRMGC5EGmyNuYBBgr0LD1DQC9hACRguAAfwAOPFC8ADTjiOCoGggBAvWkQlUNAABYVRAYgeTRrAB4EYAAvkcAFiwYAAOw=="), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root365 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root365); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes336;
          nodes336 = node.contents();
          oldNodes.replaceWith(nodes336);
        }));
        callback(root363); return subs__;
>>>>>>> ce8fc3b... more specific condition for rendering detail
        
        
        return subs__;
      }, function(node) {
<<<<<<< HEAD
        var oldNodes = nodes7190;
        nodes7190 = node.contents();
        oldNodes.replaceWith(nodes7190);
=======
        var oldNodes = nodes334;
        nodes334 = node.contents();
        oldNodes.replaceWith(nodes334);
>>>>>>> ce8fc3b... more specific condition for rendering detail
      }));
      
      
    }
  };
<<<<<<< HEAD
  renderCond921();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond921();
  }));
  
  callback(root9634); return subs__;
=======
  renderCond7();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond7();
  }));
  
  callback(root361); return subs__;
>>>>>>> ce8fc3b... more specific condition for rendering detail
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
<<<<<<< HEAD
  var root9639 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3796 = $("<div>");
  
  var ref3767 = mobl.ref(ui.headerStyle);
  if(ref3767.get() !== null) {
    node3796.attr('class', ref3767.get());
    subs__.addSub(ref3767.addEventListener('change', function(_, ref, val) {
      node3796.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3767.rebind());
  
  var val1928 = onclick.get();
  if(val1928 !== null) {
    subs__.addSub(mobl.domBind(node3796, 'tap', val1928));
  }
  
  var ref3768 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref3768.get() !== null) {
    node3796.attr('style', ref3768.get());
    subs__.addSub(ref3768.addEventListener('change', function(_, ref, val) {
      node3796.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node3796.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref3768.rebind());
  
  
  var node3799 = $("<div>");
  
  var ref3766 = mobl.ref(ui.headerContainerStyle);
  if(ref3766.get() !== null) {
    node3799.attr('class', ref3766.get());
    subs__.addSub(ref3766.addEventListener('change', function(_, ref, val) {
      node3799.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3766.rebind());
  
  
  var node3800 = $("<div>");
  
  var ref3764 = text;
  node3800.text(""+ref3764.get());
  var ignore740 = false;
  subs__.addSub(ref3764.addEventListener('change', function(_, ref, val) {
    if(ignore740) return;
    node3800.text(""+val);
  }));
  subs__.addSub(ref3764.rebind());
  
  
  var ref3765 = mobl.ref(ui.headerTextStyle);
  if(ref3765.get() !== null) {
    node3800.attr('class', ref3765.get());
    subs__.addSub(ref3765.addEventListener('change', function(_, ref, val) {
      node3800.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3765.rebind());
  
  node3799.append(node3800);
  node3796.append(node3799);
  var nodes7193 = $("<span>");
  node3796.append(nodes7193);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1537();
  }));
  
  function renderControl1537() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9640 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9640); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7193;
      nodes7193 = node.contents();
      oldNodes.replaceWith(nodes7193);
    }));
  }
  renderControl1537();
  root9639.append(node3796);
  
  var node3797 = $("<span>");
  root9639.append(node3797);
  var condSubs922 = new mobl.CompSubscription();
  subs__.addSub(condSubs922);
  var oldValue922;
  var renderCond922 = function() {
    var value4142 = fixedPosition.get();
    if(oldValue922 === value4142) return;
    oldValue922 = value4142;
    var subs__ = condSubs922;
    subs__.unsubscribe();
    node3797.empty();
    if(value4142) {
      
      var node3798 = $("<div>");
      node3798.attr('id', "hello");
      node3798.attr('style', "height: 2.9em;");
      
      node3797.append(node3798);
=======
  var root366 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node22 = $("<div>");
  
  var ref12 = mobl.ref(ui.headerStyle);
  if(ref12.get() !== null) {
    node22.attr('class', ref12.get());
    subs__.addSub(ref12.addEventListener('change', function(_, ref, val) {
      node22.attr('class', val);
    }));
    
  }
  subs__.addSub(ref12.rebind());
  
  var val2 = onclick.get();
  if(val2 !== null) {
    subs__.addSub(mobl.domBind(node22, 'tap', val2));
  }
  
  var ref13 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref13.get() !== null) {
    node22.attr('style', ref13.get());
    subs__.addSub(ref13.addEventListener('change', function(_, ref, val) {
      node22.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node22.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref13.rebind());
  
  
  var node25 = $("<div>");
  
  var ref11 = mobl.ref(ui.headerContainerStyle);
  if(ref11.get() !== null) {
    node25.attr('class', ref11.get());
    subs__.addSub(ref11.addEventListener('change', function(_, ref, val) {
      node25.attr('class', val);
    }));
    
  }
  subs__.addSub(ref11.rebind());
  
  
  var node26 = $("<div>");
  
  var ref9 = text;
  node26.text(""+ref9.get());
  var ignore2 = false;
  subs__.addSub(ref9.addEventListener('change', function(_, ref, val) {
    if(ignore2) return;
    node26.text(""+val);
  }));
  subs__.addSub(ref9.rebind());
  
  
  var ref10 = mobl.ref(ui.headerTextStyle);
  if(ref10.get() !== null) {
    node26.attr('class', ref10.get());
    subs__.addSub(ref10.addEventListener('change', function(_, ref, val) {
      node26.attr('class', val);
    }));
    
  }
  subs__.addSub(ref10.rebind());
  
  node25.append(node26);
  node22.append(node25);
  var nodes337 = $("<span>");
  node22.append(nodes337);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl3();
  }));
  
  function renderControl3() {
    subs__.addSub((elements)(function(elements, callback) {
      var root367 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root367); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes337;
      nodes337 = node.contents();
      oldNodes.replaceWith(nodes337);
    }));
  }
  renderControl3();
  root366.append(node22);
  
  var node23 = $("<span>");
  root366.append(node23);
  var condSubs8 = new mobl.CompSubscription();
  subs__.addSub(condSubs8);
  var oldValue8;
  var renderCond8 = function() {
    var value104 = fixedPosition.get();
    if(oldValue8 === value104) return;
    oldValue8 = value104;
    var subs__ = condSubs8;
    subs__.unsubscribe();
    node23.empty();
    if(value104) {
      
      var node24 = $("<div>");
      node24.attr('id', "hello");
      node24.attr('style', "height: 2.9em;");
      
      node23.append(node24);
>>>>>>> ce8fc3b... more specific condition for rendering detail
      
      
    } else {
      
    }
  };
<<<<<<< HEAD
  renderCond922();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond922();
  }));
  
  callback(root9639); return subs__;
=======
  renderCond8();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond8();
  }));
  
  callback(root366); return subs__;
>>>>>>> ce8fc3b... more specific condition for rendering detail
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
<<<<<<< HEAD
  var root9641 = $("<span>");
=======
  var root368 = $("<span>");
>>>>>>> ce8fc3b... more specific condition for rendering detail
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
<<<<<<< HEAD
  var ref3769 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref3769.get() !== null) {
    sp.attr('class', ref3769.get());
    subs__.addSub(ref3769.addEventListener('change', function(_, ref, val) {
=======
  var ref14 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref14.get() !== null) {
    sp.attr('class', ref14.get());
    subs__.addSub(ref14.addEventListener('change', function(_, ref, val) {
>>>>>>> ce8fc3b... more specific condition for rendering detail
      sp.attr('class', val);
    }));
    subs__.addSub(pushed.addEventListener('change', function() {
      sp.attr('class', pushed.get() ? pushedStyle.get() : style.get());
    }));
    subs__.addSub(pushedStyle.addEventListener('change', function() {
      sp.attr('class', pushed.get() ? pushedStyle.get() : style.get());
    }));
    subs__.addSub(style.addEventListener('change', function() {
      sp.attr('class', pushed.get() ? pushedStyle.get() : style.get());
    }));
    
  }
<<<<<<< HEAD
  subs__.addSub(ref3769.rebind());
  
  var val1929 = function(event, callback) {
=======
  subs__.addSub(ref14.rebind());
  
  var val3 = function(event, callback) {
>>>>>>> ce8fc3b... more specific condition for rendering detail
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
<<<<<<< HEAD
  if(val1929 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val1929));
  }
  
  var val1930 = function(event, callback) {
=======
  if(val3 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val3));
  }
  
  var val4 = function(event, callback) {
>>>>>>> ce8fc3b... more specific condition for rendering detail
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.y < 0 || event.y > sp.outerHeight() || event.x < 0 || event.x > sp.outerWidth();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  if(callback && callback.apply) callback(); return;
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
<<<<<<< HEAD
  if(val1930 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val1930));
  }
  
  var val1931 = function(event, callback) {
=======
  if(val4 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val4));
  }
  
  var val5 = function(event, callback) {
>>>>>>> ce8fc3b... more specific condition for rendering detail
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
<<<<<<< HEAD
                  function after594(result__) {
                    var tmp6489 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after594);if(result__ !== undefined) after594(result__);
=======
                  function after0(result__) {
                    var tmp396 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after0);if(result__ !== undefined) after0(result__);
>>>>>>> ce8fc3b... more specific condition for rendering detail
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
<<<<<<< HEAD
  if(val1931 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val1931));
  }
  
  var val1932 = function(event, callback) {
=======
  if(val5 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val5));
  }
  
  var val6 = function(event, callback) {
>>>>>>> ce8fc3b... more specific condition for rendering detail
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  if(callback && callback.apply) callback(); return;
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
<<<<<<< HEAD
  if(val1932 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val1932));
  }
  
  var ref3770 = text;
  sp.text(""+ref3770.get());
  var ignore741 = false;
  subs__.addSub(ref3770.addEventListener('change', function(_, ref, val) {
    if(ignore741) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref3770.rebind());
  
  
  root9641.append(sp);
  callback(root9641); return subs__;
=======
  if(val6 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val6));
  }
  
  var ref15 = text;
  sp.text(""+ref15.get());
  var ignore3 = false;
  subs__.addSub(ref15.addEventListener('change', function(_, ref, val) {
    if(ignore3) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref15.rebind());
  
  
  root368.append(sp);
  callback(root368); return subs__;
>>>>>>> ce8fc3b... more specific condition for rendering detail
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
<<<<<<< HEAD
  var root9642 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7194 = $("<span>");
  root9642.append(nodes7194);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root9643 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9643); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7194;
    nodes7194 = node.contents();
    oldNodes.replaceWith(nodes7194);
  }));
  callback(root9642); return subs__;
=======
  var root369 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes338 = $("<span>");
  root369.append(nodes338);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root370 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root370); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes338;
    nodes338 = node.contents();
    oldNodes.replaceWith(nodes338);
  }));
  callback(root369); return subs__;
>>>>>>> ce8fc3b... more specific condition for rendering detail
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
<<<<<<< HEAD
  var root9644 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7195 = $("<span>");
  root9644.append(nodes7195);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root9645 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9645); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7195;
    nodes7195 = node.contents();
    oldNodes.replaceWith(nodes7195);
  }));
  callback(root9644); return subs__;
=======
  var root371 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes339 = $("<span>");
  root371.append(nodes339);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root372 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root372); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes339;
    nodes339 = node.contents();
    oldNodes.replaceWith(nodes339);
  }));
  callback(root371); return subs__;
>>>>>>> ce8fc3b... more specific condition for rendering detail
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
<<<<<<< HEAD
  var root9646 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3801 = $("<ul>");
  
  var ref3771 = mobl.ref(ui.groupStyle);
  if(ref3771.get() !== null) {
    node3801.attr('class', ref3771.get());
    subs__.addSub(ref3771.addEventListener('change', function(_, ref, val) {
      node3801.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3771.rebind());
  
  var nodes7196 = $("<span>");
  node3801.append(nodes7196);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1538();
  }));
  
  function renderControl1538() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9647 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9647); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7196;
      nodes7196 = node.contents();
      oldNodes.replaceWith(nodes7196);
    }));
  }
  renderControl1538();
  root9646.append(node3801);
  callback(root9646); return subs__;
=======
  var root373 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node27 = $("<ul>");
  
  var ref16 = mobl.ref(ui.groupStyle);
  if(ref16.get() !== null) {
    node27.attr('class', ref16.get());
    subs__.addSub(ref16.addEventListener('change', function(_, ref, val) {
      node27.attr('class', val);
    }));
    
  }
  subs__.addSub(ref16.rebind());
  
  var nodes340 = $("<span>");
  node27.append(nodes340);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl4();
  }));
  
  function renderControl4() {
    subs__.addSub((elements)(function(elements, callback) {
      var root374 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root374); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes340;
      nodes340 = node.contents();
      oldNodes.replaceWith(nodes340);
    }));
  }
  renderControl4();
  root373.append(node27);
  callback(root373); return subs__;
>>>>>>> ce8fc3b... more specific condition for rendering detail
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
<<<<<<< HEAD
  var root9648 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3802 = $("<img>");
  
  var ref3772 = url;
  if(ref3772.get() !== null) {
    node3802.attr('src', ref3772.get());
    subs__.addSub(ref3772.addEventListener('change', function(_, ref, val) {
      node3802.attr('src', val);
    }));
    
  }
  subs__.addSub(ref3772.rebind());
  
  var ref3773 = width;
  if(ref3773.get() !== null) {
    node3802.attr('width', ref3773.get());
    subs__.addSub(ref3773.addEventListener('change', function(_, ref, val) {
      node3802.attr('width', val);
    }));
    
  }
  subs__.addSub(ref3773.rebind());
  
  var ref3774 = height;
  if(ref3774.get() !== null) {
    node3802.attr('height', ref3774.get());
    subs__.addSub(ref3774.addEventListener('change', function(_, ref, val) {
      node3802.attr('height', val);
    }));
    
  }
  subs__.addSub(ref3774.rebind());
  
  var ref3775 = style;
  if(ref3775.get() !== null) {
    node3802.attr('class', ref3775.get());
    subs__.addSub(ref3775.addEventListener('change', function(_, ref, val) {
      node3802.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3775.rebind());
  
  var val1933 = onclick.get();
  if(val1933 !== null) {
    subs__.addSub(mobl.domBind(node3802, 'tap', val1933));
  }
  
  var ref3776 = valign;
  if(ref3776.get() !== null) {
    node3802.attr('valign', ref3776.get());
    subs__.addSub(ref3776.addEventListener('change', function(_, ref, val) {
      node3802.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref3776.rebind());
  
  var ref3777 = align;
  if(ref3777.get() !== null) {
    node3802.attr('align', ref3777.get());
    subs__.addSub(ref3777.addEventListener('change', function(_, ref, val) {
      node3802.attr('align', val);
    }));
    
  }
  subs__.addSub(ref3777.rebind());
  
  root9648.append(node3802);
  callback(root9648); return subs__;
=======
  var root375 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node28 = $("<img>");
  
  var ref17 = url;
  if(ref17.get() !== null) {
    node28.attr('src', ref17.get());
    subs__.addSub(ref17.addEventListener('change', function(_, ref, val) {
      node28.attr('src', val);
    }));
    
  }
  subs__.addSub(ref17.rebind());
  
  var ref18 = width;
  if(ref18.get() !== null) {
    node28.attr('width', ref18.get());
    subs__.addSub(ref18.addEventListener('change', function(_, ref, val) {
      node28.attr('width', val);
    }));
    
  }
  subs__.addSub(ref18.rebind());
  
  var ref19 = height;
  if(ref19.get() !== null) {
    node28.attr('height', ref19.get());
    subs__.addSub(ref19.addEventListener('change', function(_, ref, val) {
      node28.attr('height', val);
    }));
    
  }
  subs__.addSub(ref19.rebind());
  
  var ref20 = style;
  if(ref20.get() !== null) {
    node28.attr('class', ref20.get());
    subs__.addSub(ref20.addEventListener('change', function(_, ref, val) {
      node28.attr('class', val);
    }));
    
  }
  subs__.addSub(ref20.rebind());
  
  var val7 = onclick.get();
  if(val7 !== null) {
    subs__.addSub(mobl.domBind(node28, 'tap', val7));
  }
  
  var ref21 = valign;
  if(ref21.get() !== null) {
    node28.attr('valign', ref21.get());
    subs__.addSub(ref21.addEventListener('change', function(_, ref, val) {
      node28.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref21.rebind());
  
  var ref22 = align;
  if(ref22.get() !== null) {
    node28.attr('align', ref22.get());
    subs__.addSub(ref22.addEventListener('change', function(_, ref, val) {
      node28.attr('align', val);
    }));
    
  }
  subs__.addSub(ref22.rebind());
  
  root375.append(node28);
  callback(root375); return subs__;
>>>>>>> ce8fc3b... more specific condition for rendering detail
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
<<<<<<< HEAD
  var root9649 = $("<span>");
=======
  var root376 = $("<span>");
>>>>>>> ce8fc3b... more specific condition for rendering detail
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
<<<<<<< HEAD
  var ref3778 = mobl.ref(ui.itemStyle);
  if(ref3778.get() !== null) {
    el.attr('class', ref3778.get());
    subs__.addSub(ref3778.addEventListener('change', function(_, ref, val) {
=======
  var ref23 = mobl.ref(ui.itemStyle);
  if(ref23.get() !== null) {
    el.attr('class', ref23.get());
    subs__.addSub(ref23.addEventListener('change', function(_, ref, val) {
>>>>>>> ce8fc3b... more specific condition for rendering detail
      el.attr('class', val);
    }));
    
  }
<<<<<<< HEAD
  subs__.addSub(ref3778.rebind());
  
  var ref3779 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref3779.get() !== null) {
    el.attr('class', ref3779.get());
    subs__.addSub(ref3779.addEventListener('change', function(_, ref, val) {
=======
  subs__.addSub(ref23.rebind());
  
  var ref24 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref24.get() !== null) {
    el.attr('class', ref24.get());
    subs__.addSub(ref24.addEventListener('change', function(_, ref, val) {
>>>>>>> ce8fc3b... more specific condition for rendering detail
      el.attr('class', val);
    }));
    subs__.addSub(onclick.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(hideArrow.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(mobl.ref(ui.itemArrowStyle).addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(pushed.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(pushedStyle.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    subs__.addSub(style.addEventListener('change', function() {
      el.attr('class', onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
    }));
    
  }
<<<<<<< HEAD
  subs__.addSub(ref3779.rebind());
  
  var val1934 = onswipe.get();
  if(val1934 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val1934));
  }
  
  var val1935 = onclick.get() ? function(event, callback) {
=======
  subs__.addSub(ref24.rebind());
  
  var val8 = onswipe.get();
  if(val8 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val8));
  }
  
  var val9 = onclick.get() ? function(event, callback) {
>>>>>>> ce8fc3b... more specific condition for rendering detail
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
<<<<<<< HEAD
                                           var tmp6490 = result__;
                                           function after595(result__) {
                                             var tmp6491 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after595);if(result__ !== undefined) after595(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp6492 = result__;
=======
                                           var tmp397 = result__;
                                           function after1(result__) {
                                             var tmp398 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after1);if(result__ !== undefined) after1(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp399 = result__;
>>>>>>> ce8fc3b... more specific condition for rendering detail
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
<<<<<<< HEAD
  if(val1935 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val1935));
  }
  
  var nodes7197 = $("<span>");
  el.append(nodes7197);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1539();
  }));
  
  function renderControl1539() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9650 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9650); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7197;
      nodes7197 = node.contents();
      oldNodes.replaceWith(nodes7197);
    }));
  }
  renderControl1539();
  root9649.append(el);
  callback(root9649); return subs__;
=======
  if(val9 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val9));
  }
  
  var nodes341 = $("<span>");
  el.append(nodes341);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl5();
  }));
  
  function renderControl5() {
    subs__.addSub((elements)(function(elements, callback) {
      var root377 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root377); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes341;
      nodes341 = node.contents();
      oldNodes.replaceWith(nodes341);
    }));
  }
  renderControl5();
  root376.append(el);
  callback(root376); return subs__;
>>>>>>> ce8fc3b... more specific condition for rendering detail
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
<<<<<<< HEAD
  var root9651 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3803 = $("<input>");
  node3803.attr('type', "checkbox");
  
  var ref3781 = b;
  node3803.attr('checked', !!ref3781.get());
  subs__.addSub(ref3781.addEventListener('change', function(_, ref, val) {
    if(ref === ref3781) node3803.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node3803, 'change', function() {
    b.set(!!node3803.attr('checked'));
  }));
  
  var val1937 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val1937 !== null) {
    subs__.addSub(mobl.domBind(node3803, 'tap', val1937));
  }
  
  var val1938 = onchange.get();
  if(val1938 !== null) {
    subs__.addSub(mobl.domBind(node3803, 'change', val1938));
  }
  
  root9651.append(node3803);
  
  root9651.append(" ");
  
  var node3804 = $("<span>");
  
  var ref3780 = label;
  node3804.text(""+ref3780.get());
  var ignore742 = false;
  subs__.addSub(ref3780.addEventListener('change', function(_, ref, val) {
    if(ignore742) return;
    node3804.text(""+val);
  }));
  subs__.addSub(ref3780.rebind());
  
  
  var val1936 = function(event, callback) {
=======
  var root378 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node29 = $("<input>");
  node29.attr('type', "checkbox");
  
  var ref26 = b;
  node29.attr('checked', !!ref26.get());
  subs__.addSub(ref26.addEventListener('change', function(_, ref, val) {
    if(ref === ref26) node29.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node29, 'change', function() {
    b.set(!!node29.attr('checked'));
  }));
  
  var val11 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val11 !== null) {
    subs__.addSub(mobl.domBind(node29, 'tap', val11));
  }
  
  var val12 = onchange.get();
  if(val12 !== null) {
    subs__.addSub(mobl.domBind(node29, 'change', val12));
  }
  
  root378.append(node29);
  
  root378.append(" ");
  
  var node30 = $("<span>");
  
  var ref25 = label;
  node30.text(""+ref25.get());
  var ignore4 = false;
  subs__.addSub(ref25.addEventListener('change', function(_, ref, val) {
    if(ignore4) return;
    node30.text(""+val);
  }));
  subs__.addSub(ref25.rebind());
  
  
  var val10 = function(event, callback) {
>>>>>>> ce8fc3b... more specific condition for rendering detail
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
<<<<<<< HEAD
                  function after596(result__) {
                    var tmp6493 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after596);if(result__ !== undefined) after596(result__);
=======
                  function after2(result__) {
                    var tmp400 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after2);if(result__ !== undefined) after2(result__);
>>>>>>> ce8fc3b... more specific condition for rendering detail
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
<<<<<<< HEAD
  if(val1936 !== null) {
    subs__.addSub(mobl.domBind(node3804, 'tap', val1936));
  }
  
  root9651.append(node3804);
  callback(root9651); return subs__;
=======
  if(val10 !== null) {
    subs__.addSub(mobl.domBind(node30, 'tap', val10));
  }
  
  root378.append(node30);
  callback(root378); return subs__;
>>>>>>> ce8fc3b... more specific condition for rendering detail
  
  
  return subs__;
};
ui.textFieldStyle = 'ui__textFieldStyle';
ui.textFieldInvalidStyle = 'ui__textFieldInvalidStyle';
ui.textFieldLabelStyle = 'ui__textFieldLabelStyle';
ui.validationMessageStyle = 'ui__validationMessageStyle';
ui.alwaysOkValidator = function(s) {
   var __this = this;
  return "";
};


ui.textField = function(s, placeholder, label, inputType, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
<<<<<<< HEAD
  var root9652 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3805 = $("<span>");
  root9652.append(node3805);
  var condSubs923 = new mobl.CompSubscription();
  subs__.addSub(condSubs923);
  var oldValue923;
  var renderCond923 = function() {
    var value4143 = label.get();
    if(oldValue923 === value4143) return;
    oldValue923 = value4143;
    var subs__ = condSubs923;
    subs__.unsubscribe();
    node3805.empty();
    if(value4143) {
      var nodes7198 = $("<span>");
      node3805.append(nodes7198);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root9653 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9653); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7198;
        nodes7198 = node.contents();
        oldNodes.replaceWith(nodes7198);
=======
  var root379 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node31 = $("<span>");
  root379.append(node31);
  var condSubs9 = new mobl.CompSubscription();
  subs__.addSub(condSubs9);
  var oldValue9;
  var renderCond9 = function() {
    var value105 = label.get();
    if(oldValue9 === value105) return;
    oldValue9 = value105;
    var subs__ = condSubs9;
    subs__.unsubscribe();
    node31.empty();
    if(value105) {
      var nodes342 = $("<span>");
      node31.append(nodes342);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root380 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root380); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes342;
        nodes342 = node.contents();
        oldNodes.replaceWith(nodes342);
>>>>>>> ce8fc3b... more specific condition for rendering detail
      }));
      
      
    } else {
      
    }
  };
<<<<<<< HEAD
  renderCond923();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond923();
  }));
  
  
  var node3806 = $("<span>");
  root9652.append(node3806);
  var condSubs924 = new mobl.CompSubscription();
  subs__.addSub(condSubs924);
  var oldValue924;
  var renderCond924 = function() {
    var value4144 = validator.get();
    if(oldValue924 === value4144) return;
    oldValue924 = value4144;
    var subs__ = condSubs924;
    subs__.unsubscribe();
    node3806.empty();
    if(value4144) {
=======
  renderCond9();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond9();
  }));
  
  
  var node32 = $("<span>");
  root379.append(node32);
  var condSubs10 = new mobl.CompSubscription();
  subs__.addSub(condSubs10);
  var oldValue10;
  var renderCond10 = function() {
    var value106 = validator.get();
    if(oldValue10 === value106) return;
    oldValue10 = value106;
    var subs__ = condSubs10;
    subs__.unsubscribe();
    node32.empty();
    if(value106) {
>>>>>>> ce8fc3b... more specific condition for rendering detail
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
<<<<<<< HEAD
      function after600(result__) {
        var tmp6494 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp6495 = result__;
=======
      function after6(result__) {
        var tmp401 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp402 = result__;
>>>>>>> ce8fc3b... more specific condition for rendering detail
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
<<<<<<< HEAD
        var node3807 = $("<input>");
        
        var ref3782 = inputType;
        if(ref3782.get() !== null) {
          node3807.attr('type', ref3782.get());
          subs__.addSub(ref3782.addEventListener('change', function(_, ref, val) {
            node3807.attr('type', val);
          }));
          
        }
        subs__.addSub(ref3782.rebind());
        
        var ref3783 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref3783.get() !== null) {
          node3807.attr('class', ref3783.get());
          subs__.addSub(ref3783.addEventListener('change', function(_, ref, val) {
            node3807.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node3807.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node3807.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node3807.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref3783.rebind());
        
        var ref3784 = placeholder;
        if(ref3784.get() !== null) {
          node3807.attr('placeholder', ref3784.get());
          subs__.addSub(ref3784.addEventListener('change', function(_, ref, val) {
            node3807.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref3784.rebind());
        
        var ref3785 = temp;
        node3807.val(""+ref3785.get());
        var ignore743 = false;
        subs__.addSub(ref3785.addEventListener('change', function(_, ref, val) {
          if(ignore743) return;
          node3807.val(""+val);
        }));
        subs__.addSub(ref3785.rebind());
        
        subs__.addSub(mobl.domBind(node3807, 'keyup change', function() {
          ignore743 = true;
          temp.set(mobl.stringTomobl__String(node3807.val()));
          ignore743 = false;
        }));
        
        
        var val1939 = onchange.get();
        if(val1939 !== null) {
          subs__.addSub(mobl.domBind(node3807, 'change', val1939));
        }
        
        var val1940 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after597(result__) {
                          var tmp6496 = result__;
                          function after598(result__) {
                            var tmp6497 = result__;
                            var result__ = tmp6497;
=======
        var node33 = $("<input>");
        
        var ref27 = inputType;
        if(ref27.get() !== null) {
          node33.attr('type', ref27.get());
          subs__.addSub(ref27.addEventListener('change', function(_, ref, val) {
            node33.attr('type', val);
          }));
          
        }
        subs__.addSub(ref27.rebind());
        
        var ref28 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref28.get() !== null) {
          node33.attr('class', ref28.get());
          subs__.addSub(ref28.addEventListener('change', function(_, ref, val) {
            node33.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node33.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node33.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node33.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref28.rebind());
        
        var ref29 = placeholder;
        if(ref29.get() !== null) {
          node33.attr('placeholder', ref29.get());
          subs__.addSub(ref29.addEventListener('change', function(_, ref, val) {
            node33.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref29.rebind());
        
        var ref30 = temp;
        node33.val(""+ref30.get());
        var ignore5 = false;
        subs__.addSub(ref30.addEventListener('change', function(_, ref, val) {
          if(ignore5) return;
          node33.val(""+val);
        }));
        subs__.addSub(ref30.rebind());
        
        subs__.addSub(mobl.domBind(node33, 'keyup change', function() {
          ignore5 = true;
          temp.set(mobl.stringTomobl__String(node33.val()));
          ignore5 = false;
        }));
        
        
        var val13 = onchange.get();
        if(val13 !== null) {
          subs__.addSub(mobl.domBind(node33, 'change', val13));
        }
        
        var val14 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after3(result__) {
                          var tmp403 = result__;
                          function after4(result__) {
                            var tmp404 = result__;
                            var result__ = tmp404;
>>>>>>> ce8fc3b... more specific condition for rendering detail
                            validationMessage.set(result__);
                            var result__ = !validationMessage.get();
                            if(result__) {
                              var result__ = temp.get();
                              s.set(result__);
                              var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
                              if(callback && callback.apply) callback(); return;
                            } else {
                              {
                                var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
                                if(callback && callback.apply) callback(); return;
                              }
                            }
                          }
<<<<<<< HEAD
                          var result__ = validator.get()(temp.get(), after598);if(result__ !== undefined) after598(result__);
                        }
                        var result__ = onkeyup.get()(event, after597);if(result__ !== undefined) after597(result__);
                      } else {
                        {
                          function after599(result__) {
                            var tmp6497 = result__;
                            var result__ = tmp6497;
=======
                          var result__ = validator.get()(temp.get(), after4);if(result__ !== undefined) after4(result__);
                        }
                        var result__ = onkeyup.get()(event, after3);if(result__ !== undefined) after3(result__);
                      } else {
                        {
                          function after5(result__) {
                            var tmp404 = result__;
                            var result__ = tmp404;
>>>>>>> ce8fc3b... more specific condition for rendering detail
                            validationMessage.set(result__);
                            var result__ = !validationMessage.get();
                            if(result__) {
                              var result__ = temp.get();
                              s.set(result__);
                              var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
                              if(callback && callback.apply) callback(); return;
                            } else {
                              {
                                var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
                                if(callback && callback.apply) callback(); return;
                              }
                            }
                          }
<<<<<<< HEAD
                          var result__ = validator.get()(temp.get(), after599);if(result__ !== undefined) after599(result__);
                        }
                      }
                    };
        if(val1940 !== null) {
          subs__.addSub(mobl.domBind(node3807, 'keyup', val1940));
        }
        
        var val1941 = function(event, callback) {
=======
                          var result__ = validator.get()(temp.get(), after5);if(result__ !== undefined) after5(result__);
                        }
                      }
                    };
        if(val14 !== null) {
          subs__.addSub(mobl.domBind(node33, 'keyup', val14));
        }
        
        var val15 = function(event, callback) {
>>>>>>> ce8fc3b... more specific condition for rendering detail
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
<<<<<<< HEAD
        if(val1941 !== null) {
          subs__.addSub(mobl.domBind(node3807, 'blur', val1941));
        }
        
        node3806.append(node3807);
        var nodes7199 = $("<span>");
        node3806.append(nodes7199);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root9654 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9654); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7199;
          nodes7199 = node.contents();
          oldNodes.replaceWith(nodes7199);
=======
        if(val15 !== null) {
          subs__.addSub(mobl.domBind(node33, 'blur', val15));
        }
        
        node32.append(node33);
        var nodes343 = $("<span>");
        node32.append(nodes343);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root381 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root381); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes343;
          nodes343 = node.contents();
          oldNodes.replaceWith(nodes343);
>>>>>>> ce8fc3b... more specific condition for rendering detail
        }));
        
        
        
        
      }
<<<<<<< HEAD
      var result__ = validator.get()(s.get(), after600);if(result__ !== undefined) after600(result__);
    } else {
      
      var node3808 = $("<input>");
      
      var ref3786 = inputType;
      if(ref3786.get() !== null) {
        node3808.attr('type', ref3786.get());
        subs__.addSub(ref3786.addEventListener('change', function(_, ref, val) {
          node3808.attr('type', val);
        }));
        
      }
      subs__.addSub(ref3786.rebind());
      
      var ref3787 = style;
      if(ref3787.get() !== null) {
        node3808.attr('class', ref3787.get());
        subs__.addSub(ref3787.addEventListener('change', function(_, ref, val) {
          node3808.attr('class', val);
        }));
        
      }
      subs__.addSub(ref3787.rebind());
      
      var ref3788 = placeholder;
      if(ref3788.get() !== null) {
        node3808.attr('placeholder', ref3788.get());
        subs__.addSub(ref3788.addEventListener('change', function(_, ref, val) {
          node3808.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref3788.rebind());
      
      var ref3789 = s;
      node3808.val(""+ref3789.get());
      var ignore744 = false;
      subs__.addSub(ref3789.addEventListener('change', function(_, ref, val) {
        if(ignore744) return;
        node3808.val(""+val);
      }));
      subs__.addSub(ref3789.rebind());
      
      subs__.addSub(mobl.domBind(node3808, 'keyup change', function() {
        ignore744 = true;
        s.set(mobl.stringTomobl__String(node3808.val()));
        ignore744 = false;
      }));
      
      
      var val1942 = onchange.get();
      if(val1942 !== null) {
        subs__.addSub(mobl.domBind(node3808, 'change', val1942));
      }
      
      var val1943 = onkeyup.get();
      if(val1943 !== null) {
        subs__.addSub(mobl.domBind(node3808, 'keyup', val1943));
      }
      
      var val1944 = function(event, callback) {
=======
      var result__ = validator.get()(s.get(), after6);if(result__ !== undefined) after6(result__);
    } else {
      
      var node34 = $("<input>");
      
      var ref31 = inputType;
      if(ref31.get() !== null) {
        node34.attr('type', ref31.get());
        subs__.addSub(ref31.addEventListener('change', function(_, ref, val) {
          node34.attr('type', val);
        }));
        
      }
      subs__.addSub(ref31.rebind());
      
      var ref32 = style;
      if(ref32.get() !== null) {
        node34.attr('class', ref32.get());
        subs__.addSub(ref32.addEventListener('change', function(_, ref, val) {
          node34.attr('class', val);
        }));
        
      }
      subs__.addSub(ref32.rebind());
      
      var ref33 = placeholder;
      if(ref33.get() !== null) {
        node34.attr('placeholder', ref33.get());
        subs__.addSub(ref33.addEventListener('change', function(_, ref, val) {
          node34.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref33.rebind());
      
      var ref34 = s;
      node34.val(""+ref34.get());
      var ignore6 = false;
      subs__.addSub(ref34.addEventListener('change', function(_, ref, val) {
        if(ignore6) return;
        node34.val(""+val);
      }));
      subs__.addSub(ref34.rebind());
      
      subs__.addSub(mobl.domBind(node34, 'keyup change', function() {
        ignore6 = true;
        s.set(mobl.stringTomobl__String(node34.val()));
        ignore6 = false;
      }));
      
      
      var val16 = onchange.get();
      if(val16 !== null) {
        subs__.addSub(mobl.domBind(node34, 'change', val16));
      }
      
      var val17 = onkeyup.get();
      if(val17 !== null) {
        subs__.addSub(mobl.domBind(node34, 'keyup', val17));
      }
      
      var val18 = function(event, callback) {
>>>>>>> ce8fc3b... more specific condition for rendering detail
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
<<<<<<< HEAD
      if(val1944 !== null) {
        subs__.addSub(mobl.domBind(node3808, 'blur', val1944));
      }
      
      node3806.append(node3808);
=======
      if(val18 !== null) {
        subs__.addSub(mobl.domBind(node34, 'blur', val18));
      }
      
      node32.append(node34);
>>>>>>> ce8fc3b... more specific condition for rendering detail
      
      
    }
  };
<<<<<<< HEAD
  renderCond924();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond924();
  }));
  
  callback(root9652); return subs__;
=======
  renderCond10();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond10();
  }));
  
  callback(root379); return subs__;
>>>>>>> ce8fc3b... more specific condition for rendering detail
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
<<<<<<< HEAD
  var root9655 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7200 = $("<span>");
  root9655.append(nodes7200);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root9656 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9656); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7200;
    nodes7200 = node.contents();
    oldNodes.replaceWith(nodes7200);
  }));
  callback(root9655); return subs__;
=======
  var root382 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes344 = $("<span>");
  root382.append(nodes344);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root383 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root383); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes344;
    nodes344 = node.contents();
    oldNodes.replaceWith(nodes344);
  }));
  callback(root382); return subs__;
>>>>>>> ce8fc3b... more specific condition for rendering detail
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
<<<<<<< HEAD
  var root9657 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7201 = $("<span>");
  root9657.append(nodes7201);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root9658 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9658); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7201;
    nodes7201 = node.contents();
    oldNodes.replaceWith(nodes7201);
  }));
  callback(root9657); return subs__;
=======
  var root384 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes345 = $("<span>");
  root384.append(nodes345);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root385 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root385); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes345;
    nodes345 = node.contents();
    oldNodes.replaceWith(nodes345);
  }));
  callback(root384); return subs__;
>>>>>>> ce8fc3b... more specific condition for rendering detail
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
<<<<<<< HEAD
  var root9659 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3809 = $("<span>");
  root9659.append(node3809);
  var condSubs925 = new mobl.CompSubscription();
  subs__.addSub(condSubs925);
  var oldValue925;
  var renderCond925 = function() {
    var value4145 = label.get();
    if(oldValue925 === value4145) return;
    oldValue925 = value4145;
    var subs__ = condSubs925;
    subs__.unsubscribe();
    node3809.empty();
    if(value4145) {
      var nodes7202 = $("<span>");
      node3809.append(nodes7202);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root9660 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9660); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7202;
        nodes7202 = node.contents();
        oldNodes.replaceWith(nodes7202);
=======
  var root386 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node35 = $("<span>");
  root386.append(node35);
  var condSubs11 = new mobl.CompSubscription();
  subs__.addSub(condSubs11);
  var oldValue11;
  var renderCond11 = function() {
    var value107 = label.get();
    if(oldValue11 === value107) return;
    oldValue11 = value107;
    var subs__ = condSubs11;
    subs__.unsubscribe();
    node35.empty();
    if(value107) {
      var nodes346 = $("<span>");
      node35.append(nodes346);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root387 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root387); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes346;
        nodes346 = node.contents();
        oldNodes.replaceWith(nodes346);
>>>>>>> ce8fc3b... more specific condition for rendering detail
      }));
      
      
    } else {
      
    }
  };
<<<<<<< HEAD
  renderCond925();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond925();
  }));
  
  
  var node3810 = $("<input>");
  node3810.attr('type', "range");
  
  var ref3790 = n;
  node3810.val(""+ref3790.get());
  var ignore745 = false;
  subs__.addSub(ref3790.addEventListener('change', function(_, ref, val) {
    if(ignore745) return;
    node3810.val(""+val);
  }));
  subs__.addSub(ref3790.rebind());
  
  subs__.addSub(mobl.domBind(node3810, 'keyup change', function() {
    ignore745 = true;
    n.set(mobl.stringTomobl__Num(node3810.val()));
    ignore745 = false;
  }));
  
  
  var ref3791 = min;
  if(ref3791.get() !== null) {
    node3810.attr('min', ref3791.get());
    subs__.addSub(ref3791.addEventListener('change', function(_, ref, val) {
      node3810.attr('min', val);
    }));
    
  }
  subs__.addSub(ref3791.rebind());
  
  var ref3792 = max;
  if(ref3792.get() !== null) {
    node3810.attr('max', ref3792.get());
    subs__.addSub(ref3792.addEventListener('change', function(_, ref, val) {
      node3810.attr('max', val);
    }));
    
  }
  subs__.addSub(ref3792.rebind());
  
  var ref3793 = step;
  if(ref3793.get() !== null) {
    node3810.attr('step', ref3793.get());
    subs__.addSub(ref3793.addEventListener('change', function(_, ref, val) {
      node3810.attr('step', val);
    }));
    
  }
  subs__.addSub(ref3793.rebind());
  node3810.attr('style', "width: 99%;");
  
  var val1945 = onchange.get();
  if(val1945 !== null) {
    subs__.addSub(mobl.domBind(node3810, 'change', val1945));
  }
  
  var val1946 = onkeyup.get();
  if(val1946 !== null) {
    subs__.addSub(mobl.domBind(node3810, 'keyup', val1946));
  }
  
  var ref3794 = placeholder;
  if(ref3794.get() !== null) {
    node3810.attr('placeholder', ref3794.get());
    subs__.addSub(ref3794.addEventListener('change', function(_, ref, val) {
      node3810.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref3794.rebind());
  
  root9659.append(node3810);
  callback(root9659); return subs__;
=======
  renderCond11();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond11();
  }));
  
  
  var node36 = $("<input>");
  node36.attr('type', "range");
  
  var ref35 = n;
  node36.val(""+ref35.get());
  var ignore7 = false;
  subs__.addSub(ref35.addEventListener('change', function(_, ref, val) {
    if(ignore7) return;
    node36.val(""+val);
  }));
  subs__.addSub(ref35.rebind());
  
  subs__.addSub(mobl.domBind(node36, 'keyup change', function() {
    ignore7 = true;
    n.set(mobl.stringTomobl__Num(node36.val()));
    ignore7 = false;
  }));
  
  
  var ref36 = min;
  if(ref36.get() !== null) {
    node36.attr('min', ref36.get());
    subs__.addSub(ref36.addEventListener('change', function(_, ref, val) {
      node36.attr('min', val);
    }));
    
  }
  subs__.addSub(ref36.rebind());
  
  var ref37 = max;
  if(ref37.get() !== null) {
    node36.attr('max', ref37.get());
    subs__.addSub(ref37.addEventListener('change', function(_, ref, val) {
      node36.attr('max', val);
    }));
    
  }
  subs__.addSub(ref37.rebind());
  
  var ref38 = step;
  if(ref38.get() !== null) {
    node36.attr('step', ref38.get());
    subs__.addSub(ref38.addEventListener('change', function(_, ref, val) {
      node36.attr('step', val);
    }));
    
  }
  subs__.addSub(ref38.rebind());
  node36.attr('style', "width: 99%;");
  
  var val19 = onchange.get();
  if(val19 !== null) {
    subs__.addSub(mobl.domBind(node36, 'change', val19));
  }
  
  var val20 = onkeyup.get();
  if(val20 !== null) {
    subs__.addSub(mobl.domBind(node36, 'keyup', val20));
  }
  
  var ref39 = placeholder;
  if(ref39.get() !== null) {
    node36.attr('placeholder', ref39.get());
    subs__.addSub(ref39.addEventListener('change', function(_, ref, val) {
      node36.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref39.rebind());
  
  root386.append(node36);
  callback(root386); return subs__;
>>>>>>> ce8fc3b... more specific condition for rendering detail
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
<<<<<<< HEAD
  var root9661 = $("<span>");
=======
  var root388 = $("<span>");
>>>>>>> ce8fc3b... more specific condition for rendering detail
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
<<<<<<< HEAD
    function after601(result__) {
      var tmp6498 = result__;
      var result__ = tmp6498;
=======
    function after7(result__) {
      var tmp405 = result__;
      var result__ = tmp405;
>>>>>>> ce8fc3b... more specific condition for rendering detail
      var m = result__;
      var result__ = !m;
      if(result__) {
        var result__ = n2;
        n.set(result__);
        var result__ = m;
        if(callback && callback.apply) callback(result__);
        return;
        if(callback && callback.apply) callback(); return;
      } else {
        {
          var result__ = m;
          if(callback && callback.apply) callback(result__);
          return;
          if(callback && callback.apply) callback(); return;
        }
      }
    }
<<<<<<< HEAD
    var result__ = validator.get()(n2, after601);if(result__ !== undefined) after601(result__);
=======
    var result__ = validator.get()(n2, after7);if(result__ !== undefined) after7(result__);
>>>>>>> ce8fc3b... more specific condition for rendering detail
  };
  
  
  
  var s = mobl.ref("" + n.get());
<<<<<<< HEAD
  var nodes7203 = $("<span>");
  root9661.append(nodes7203);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root9662 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9662); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7203;
    nodes7203 = node.contents();
    oldNodes.replaceWith(nodes7203);
  }));
  callback(root9661); return subs__;
=======
  var nodes347 = $("<span>");
  root388.append(nodes347);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root389 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root389); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes347;
    nodes347 = node.contents();
    oldNodes.replaceWith(nodes347);
  }));
  callback(root388); return subs__;
>>>>>>> ce8fc3b... more specific condition for rendering detail
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
<<<<<<< HEAD
  var root9663 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3811 = $("<span>");
  root9663.append(node3811);
  var condSubs926 = new mobl.CompSubscription();
  subs__.addSub(condSubs926);
  var oldValue926;
  var renderCond926 = function() {
    var value4146 = label.get();
    if(oldValue926 === value4146) return;
    oldValue926 = value4146;
    var subs__ = condSubs926;
    subs__.unsubscribe();
    node3811.empty();
    if(value4146) {
      
      var node3812 = $("<span>");
      node3812.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref3798 = label;
      node3812.text(""+ref3798.get());
      var ignore747 = false;
      subs__.addSub(ref3798.addEventListener('change', function(_, ref, val) {
        if(ignore747) return;
        node3812.text(""+val);
      }));
      subs__.addSub(ref3798.rebind());
      
      
      node3811.append(node3812);
      
      var node3813 = $("<span>");
      node3813.attr('style', "float: left");
      
      
      var node3814 = $("<input>");
      node3814.attr('type', "password");
      
      var ref3795 = style;
      if(ref3795.get() !== null) {
        node3814.attr('class', ref3795.get());
        subs__.addSub(ref3795.addEventListener('change', function(_, ref, val) {
          node3814.attr('class', val);
        }));
        
      }
      subs__.addSub(ref3795.rebind());
      
      var ref3796 = placeholder;
      if(ref3796.get() !== null) {
        node3814.attr('placeholder', ref3796.get());
        subs__.addSub(ref3796.addEventListener('change', function(_, ref, val) {
          node3814.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref3796.rebind());
      
      var ref3797 = s;
      node3814.val(""+ref3797.get());
      var ignore746 = false;
      subs__.addSub(ref3797.addEventListener('change', function(_, ref, val) {
        if(ignore746) return;
        node3814.val(""+val);
      }));
      subs__.addSub(ref3797.rebind());
      
      subs__.addSub(mobl.domBind(node3814, 'keyup change', function() {
        ignore746 = true;
        s.set(mobl.stringTomobl__String(node3814.val()));
        ignore746 = false;
      }));
      
      
      var val1947 = onchange.get();
      if(val1947 !== null) {
        subs__.addSub(mobl.domBind(node3814, 'change', val1947));
      }
      
      var val1948 = onkeyup.get();
      if(val1948 !== null) {
        subs__.addSub(mobl.domBind(node3814, 'keyup', val1948));
      }
      
      var val1949 = function(event, callback) {
=======
  var root390 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node37 = $("<span>");
  root390.append(node37);
  var condSubs12 = new mobl.CompSubscription();
  subs__.addSub(condSubs12);
  var oldValue12;
  var renderCond12 = function() {
    var value108 = label.get();
    if(oldValue12 === value108) return;
    oldValue12 = value108;
    var subs__ = condSubs12;
    subs__.unsubscribe();
    node37.empty();
    if(value108) {
      
      var node38 = $("<span>");
      node38.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref43 = label;
      node38.text(""+ref43.get());
      var ignore9 = false;
      subs__.addSub(ref43.addEventListener('change', function(_, ref, val) {
        if(ignore9) return;
        node38.text(""+val);
      }));
      subs__.addSub(ref43.rebind());
      
      
      node37.append(node38);
      
      var node39 = $("<span>");
      node39.attr('style', "float: left");
      
      
      var node40 = $("<input>");
      node40.attr('type', "password");
      
      var ref40 = style;
      if(ref40.get() !== null) {
        node40.attr('class', ref40.get());
        subs__.addSub(ref40.addEventListener('change', function(_, ref, val) {
          node40.attr('class', val);
        }));
        
      }
      subs__.addSub(ref40.rebind());
      
      var ref41 = placeholder;
      if(ref41.get() !== null) {
        node40.attr('placeholder', ref41.get());
        subs__.addSub(ref41.addEventListener('change', function(_, ref, val) {
          node40.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref41.rebind());
      
      var ref42 = s;
      node40.val(""+ref42.get());
      var ignore8 = false;
      subs__.addSub(ref42.addEventListener('change', function(_, ref, val) {
        if(ignore8) return;
        node40.val(""+val);
      }));
      subs__.addSub(ref42.rebind());
      
      subs__.addSub(mobl.domBind(node40, 'keyup change', function() {
        ignore8 = true;
        s.set(mobl.stringTomobl__String(node40.val()));
        ignore8 = false;
      }));
      
      
      var val21 = onchange.get();
      if(val21 !== null) {
        subs__.addSub(mobl.domBind(node40, 'change', val21));
      }
      
      var val22 = onkeyup.get();
      if(val22 !== null) {
        subs__.addSub(mobl.domBind(node40, 'keyup', val22));
      }
      
      var val23 = function(event, callback) {
>>>>>>> ce8fc3b... more specific condition for rendering detail
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
<<<<<<< HEAD
      if(val1949 !== null) {
        subs__.addSub(mobl.domBind(node3814, 'blur', val1949));
      }
      
      node3813.append(node3814);
      node3811.append(node3813);
=======
      if(val23 !== null) {
        subs__.addSub(mobl.domBind(node40, 'blur', val23));
      }
      
      node39.append(node40);
      node37.append(node39);
>>>>>>> ce8fc3b... more specific condition for rendering detail
      
      
      
      
    } else {
      
<<<<<<< HEAD
      var node3815 = $("<input>");
      node3815.attr('type', "password");
      
      var ref3799 = style;
      if(ref3799.get() !== null) {
        node3815.attr('class', ref3799.get());
        subs__.addSub(ref3799.addEventListener('change', function(_, ref, val) {
          node3815.attr('class', val);
        }));
        
      }
      subs__.addSub(ref3799.rebind());
      
      var ref3800 = placeholder;
      if(ref3800.get() !== null) {
        node3815.attr('placeholder', ref3800.get());
        subs__.addSub(ref3800.addEventListener('change', function(_, ref, val) {
          node3815.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref3800.rebind());
      
      var ref3801 = s;
      node3815.val(""+ref3801.get());
      var ignore748 = false;
      subs__.addSub(ref3801.addEventListener('change', function(_, ref, val) {
        if(ignore748) return;
        node3815.val(""+val);
      }));
      subs__.addSub(ref3801.rebind());
      
      subs__.addSub(mobl.domBind(node3815, 'keyup change', function() {
        ignore748 = true;
        s.set(mobl.stringTomobl__String(node3815.val()));
        ignore748 = false;
      }));
      
      
      var val1950 = onchange.get();
      if(val1950 !== null) {
        subs__.addSub(mobl.domBind(node3815, 'change', val1950));
      }
      
      var val1951 = onkeyup.get();
      if(val1951 !== null) {
        subs__.addSub(mobl.domBind(node3815, 'keyup', val1951));
      }
      
      var val1952 = function(event, callback) {
=======
      var node41 = $("<input>");
      node41.attr('type', "password");
      
      var ref44 = style;
      if(ref44.get() !== null) {
        node41.attr('class', ref44.get());
        subs__.addSub(ref44.addEventListener('change', function(_, ref, val) {
          node41.attr('class', val);
        }));
        
      }
      subs__.addSub(ref44.rebind());
      
      var ref45 = placeholder;
      if(ref45.get() !== null) {
        node41.attr('placeholder', ref45.get());
        subs__.addSub(ref45.addEventListener('change', function(_, ref, val) {
          node41.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref45.rebind());
      
      var ref46 = s;
      node41.val(""+ref46.get());
      var ignore10 = false;
      subs__.addSub(ref46.addEventListener('change', function(_, ref, val) {
        if(ignore10) return;
        node41.val(""+val);
      }));
      subs__.addSub(ref46.rebind());
      
      subs__.addSub(mobl.domBind(node41, 'keyup change', function() {
        ignore10 = true;
        s.set(mobl.stringTomobl__String(node41.val()));
        ignore10 = false;
      }));
      
      
      var val24 = onchange.get();
      if(val24 !== null) {
        subs__.addSub(mobl.domBind(node41, 'change', val24));
      }
      
      var val25 = onkeyup.get();
      if(val25 !== null) {
        subs__.addSub(mobl.domBind(node41, 'keyup', val25));
      }
      
      var val26 = function(event, callback) {
>>>>>>> ce8fc3b... more specific condition for rendering detail
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
<<<<<<< HEAD
      if(val1952 !== null) {
        subs__.addSub(mobl.domBind(node3815, 'blur', val1952));
      }
      
      node3811.append(node3815);
=======
      if(val26 !== null) {
        subs__.addSub(mobl.domBind(node41, 'blur', val26));
      }
      
      node37.append(node41);
>>>>>>> ce8fc3b... more specific condition for rendering detail
      
      
    }
  };
<<<<<<< HEAD
  renderCond926();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond926();
  }));
  
  callback(root9663); return subs__;
=======
  renderCond12();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond12();
  }));
  
  callback(root390); return subs__;
>>>>>>> ce8fc3b... more specific condition for rendering detail
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
<<<<<<< HEAD
  var root9664 = $("<span>");
=======
  var root391 = $("<span>");
>>>>>>> ce8fc3b... more specific condition for rendering detail
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
<<<<<<< HEAD
  var ref3806 = style;
  if(ref3806.get() !== null) {
    sel.attr('class', ref3806.get());
    subs__.addSub(ref3806.addEventListener('change', function(_, ref, val) {
=======
  var ref51 = style;
  if(ref51.get() !== null) {
    sel.attr('class', ref51.get());
    subs__.addSub(ref51.addEventListener('change', function(_, ref, val) {
>>>>>>> ce8fc3b... more specific condition for rendering detail
      sel.attr('class', val);
    }));
    
  }
<<<<<<< HEAD
  subs__.addSub(ref3806.rebind());
  
  var val1953 = function(event, callback) {
=======
  subs__.addSub(ref51.rebind());
  
  var val27 = function(event, callback) {
>>>>>>> ce8fc3b... more specific condition for rendering detail
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
<<<<<<< HEAD
                  function after602(result__) {
                    var tmp6500 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after602);if(result__ !== undefined) after602(result__);
=======
                  function after8(result__) {
                    var tmp407 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after8);if(result__ !== undefined) after8(result__);
>>>>>>> ce8fc3b... more specific condition for rendering detail
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
<<<<<<< HEAD
  if(val1953 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val1953));
  }
  
  
  var node3816 = mobl.loadingSpan();
  sel.append(node3816);
  var list671;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList671 = function() {
    var subs__ = listSubs__;
    list671 = options.get();
    list671.list(function(results671) {
      node3816.empty();
      for(var i1595 = 0; i1595 < results671.length; i1595++) {
        (function() {
          var iternode671 = $("<span>");
          node3816.append(iternode671);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results671), i1595), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results671), i1595), "_2");
          
          var node3817 = $("<option>");
          
          var ref3802 = optionDescription;
          node3817.text(""+ref3802.get());
          var ignore749 = false;
          subs__.addSub(ref3802.addEventListener('change', function(_, ref, val) {
            if(ignore749) return;
            node3817.text(""+val);
          }));
          subs__.addSub(ref3802.rebind());
          
          
          var ref3803 = optionStyle;
          if(ref3803.get() !== null) {
            node3817.attr('class', ref3803.get());
            subs__.addSub(ref3803.addEventListener('change', function(_, ref, val) {
              node3817.attr('class', val);
            }));
            
          }
          subs__.addSub(ref3803.rebind());
          
          var ref3804 = optionValue;
          if(ref3804.get() !== null) {
            node3817.attr('value', ref3804.get());
            subs__.addSub(ref3804.addEventListener('change', function(_, ref, val) {
              node3817.attr('value', val);
            }));
            
          }
          subs__.addSub(ref3804.rebind());
          
          var ref3805 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref3805.get() !== null) {
            node3817.attr('selected', ref3805.get());
            subs__.addSub(ref3805.addEventListener('change', function(_, ref, val) {
              node3817.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node3817.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node3817.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref3805.rebind());
          
          iternode671.append(node3817);
          
          var oldNodes = iternode671;
          iternode671 = iternode671.contents();
          oldNodes.replaceWith(iternode671);
=======
  if(val27 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val27));
  }
  
  
  var node42 = mobl.loadingSpan();
  sel.append(node42);
  var list0;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList0 = function() {
    var subs__ = listSubs__;
    list0 = options.get();
    list0.list(function(results0) {
      node42.empty();
      for(var i126 = 0; i126 < results0.length; i126++) {
        (function() {
          var iternode0 = $("<span>");
          node42.append(iternode0);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results0), i126), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results0), i126), "_2");
          
          var node43 = $("<option>");
          
          var ref47 = optionDescription;
          node43.text(""+ref47.get());
          var ignore11 = false;
          subs__.addSub(ref47.addEventListener('change', function(_, ref, val) {
            if(ignore11) return;
            node43.text(""+val);
          }));
          subs__.addSub(ref47.rebind());
          
          
          var ref48 = optionStyle;
          if(ref48.get() !== null) {
            node43.attr('class', ref48.get());
            subs__.addSub(ref48.addEventListener('change', function(_, ref, val) {
              node43.attr('class', val);
            }));
            
          }
          subs__.addSub(ref48.rebind());
          
          var ref49 = optionValue;
          if(ref49.get() !== null) {
            node43.attr('value', ref49.get());
            subs__.addSub(ref49.addEventListener('change', function(_, ref, val) {
              node43.attr('value', val);
            }));
            
          }
          subs__.addSub(ref49.rebind());
          
          var ref50 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref50.get() !== null) {
            node43.attr('selected', ref50.get());
            subs__.addSub(ref50.addEventListener('change', function(_, ref, val) {
              node43.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node43.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node43.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref50.rebind());
          
          iternode0.append(node43);
          
          var oldNodes = iternode0;
          iternode0 = iternode0.contents();
          oldNodes.replaceWith(iternode0);
>>>>>>> ce8fc3b... more specific condition for rendering detail
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
<<<<<<< HEAD
      subs__.addSub(list671.addEventListener('change', function() { listSubs__.unsubscribe(); renderList671(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList671(true); }));
    });
  };
  renderList671();
  
  root9664.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root9664); return subs__;
=======
      subs__.addSub(list0.addEventListener('change', function() { listSubs__.unsubscribe(); renderList0(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList0(true); }));
    });
  };
  renderList0();
  
  root391.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root391); return subs__;
>>>>>>> ce8fc3b... more specific condition for rendering detail
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
<<<<<<< HEAD
  var root9665 = $("<span>");
=======
  var root392 = $("<span>");
>>>>>>> ce8fc3b... more specific condition for rendering detail
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
<<<<<<< HEAD
    var nodes7204 = $("<span>");
    root9665.append(nodes7204);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root9666 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node3818 = mobl.loadingSpan();
      root9666.append(node3818);
      var list672;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList672 = function() {
        var subs__ = listSubs__;
        list672 = tabs.get();
        list672.list(function(results672) {
          node3818.empty();
          for(var i1596 = 0; i1596 < results672.length; i1596++) {
            (function() {
              var iternode672 = $("<span>");
              node3818.append(iternode672);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results672), i1596), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results672), i1596), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results672), i1596), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp6462 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp6462.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp6462.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp6462.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp6462.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
=======
    var nodes348 = $("<span>");
    root392.append(nodes348);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root393 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node44 = mobl.loadingSpan();
      root393.append(node44);
      var list1;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList1 = function() {
        var subs__ = listSubs__;
        list1 = tabs.get();
        list1.list(function(results1) {
          node44.empty();
          for(var i127 = 0; i127 < results1.length; i127++) {
            (function() {
              var iternode1 = $("<span>");
              node44.append(iternode1);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results1), i127), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results1), i127), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results1), i127), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp369 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp369.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp369.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp369.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp369.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
>>>>>>> ce8fc3b... more specific condition for rendering detail
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
<<<<<<< HEAD
              var tmp6461 = mobl.ref(result__);
              
              var nodes7205 = $("<span>");
              iternode672.append(nodes7205);
              subs__.addSub((mobl.span)(tmp6462, mobl.ref(null), tmp6461, mobl.ref(null), function(_, callback) {
                var root9667 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes7206 = $("<span>");
                root9667.append(nodes7206);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root9668 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root9668); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7206;
                  nodes7206 = node.contents();
                  oldNodes.replaceWith(nodes7206);
                }));
                callback(root9667); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes7205;
                nodes7205 = node.contents();
                oldNodes.replaceWith(nodes7205);
              }));
              
              var oldNodes = iternode672;
              iternode672 = iternode672.contents();
              oldNodes.replaceWith(iternode672);
=======
              var tmp368 = mobl.ref(result__);
              
              var nodes349 = $("<span>");
              iternode1.append(nodes349);
              subs__.addSub((mobl.span)(tmp369, mobl.ref(null), tmp368, mobl.ref(null), function(_, callback) {
                var root394 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes350 = $("<span>");
                root394.append(nodes350);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root395 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root395); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes350;
                  nodes350 = node.contents();
                  oldNodes.replaceWith(nodes350);
                }));
                callback(root394); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes349;
                nodes349 = node.contents();
                oldNodes.replaceWith(nodes349);
              }));
              
              var oldNodes = iternode1;
              iternode1 = iternode1.contents();
              oldNodes.replaceWith(iternode1);
>>>>>>> ce8fc3b... more specific condition for rendering detail
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
<<<<<<< HEAD
          subs__.addSub(list672.addEventListener('change', function() { listSubs__.unsubscribe(); renderList672(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList672(true); }));
        });
      };
      renderList672();
      
      callback(root9666); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7204;
      nodes7204 = node.contents();
      oldNodes.replaceWith(nodes7204);
    }));
    
    var node3819 = mobl.loadingSpan();
    root9665.append(node3819);
    var list673;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList673 = function() {
      var subs__ = listSubs__;
      list673 = tabs.get();
      list673.list(function(results673) {
        node3819.empty();
        for(var i1597 = 0; i1597 < results673.length; i1597++) {
          (function() {
            var iternode673 = $("<span>");
            node3819.append(iternode673);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results673), i1597), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results673), i1597), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results673), i1597), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp6463 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp6463.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp6463.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp6463.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp6463.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes7207 = $("<span>");
            iternode673.append(nodes7207);
            subs__.addSub((mobl.block)(tmp6463, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root9669 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes7208 = $("<span>");
              root9669.append(nodes7208);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root9670 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes7209 = $("<span>");
                root9670.append(nodes7209);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl1540();
                }));
                
                function renderControl1540() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root9671 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root9671); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes7209;
                    nodes7209 = node.contents();
                    oldNodes.replaceWith(nodes7209);
                  }));
                }
                renderControl1540();
                callback(root9670); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes7208;
                nodes7208 = node.contents();
                oldNodes.replaceWith(nodes7208);
              }));
              callback(root9669); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes7207;
              nodes7207 = node.contents();
              oldNodes.replaceWith(nodes7207);
            }));
            
            var oldNodes = iternode673;
            iternode673 = iternode673.contents();
            oldNodes.replaceWith(iternode673);
=======
          subs__.addSub(list1.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1(true); }));
        });
      };
      renderList1();
      
      callback(root393); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes348;
      nodes348 = node.contents();
      oldNodes.replaceWith(nodes348);
    }));
    
    var node45 = mobl.loadingSpan();
    root392.append(node45);
    var list2;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList2 = function() {
      var subs__ = listSubs__;
      list2 = tabs.get();
      list2.list(function(results2) {
        node45.empty();
        for(var i128 = 0; i128 < results2.length; i128++) {
          (function() {
            var iternode2 = $("<span>");
            node45.append(iternode2);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results2), i128), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results2), i128), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results2), i128), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp370 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp370.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp370.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp370.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp370.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes351 = $("<span>");
            iternode2.append(nodes351);
            subs__.addSub((mobl.block)(tmp370, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root396 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes352 = $("<span>");
              root396.append(nodes352);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root397 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes353 = $("<span>");
                root397.append(nodes353);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl6();
                }));
                
                function renderControl6() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root398 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root398); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes353;
                    nodes353 = node.contents();
                    oldNodes.replaceWith(nodes353);
                  }));
                }
                renderControl6();
                callback(root397); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes352;
                nodes352 = node.contents();
                oldNodes.replaceWith(nodes352);
              }));
              callback(root396); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes351;
              nodes351 = node.contents();
              oldNodes.replaceWith(nodes351);
            }));
            
            var oldNodes = iternode2;
            iternode2 = iternode2.contents();
            oldNodes.replaceWith(iternode2);
>>>>>>> ce8fc3b... more specific condition for rendering detail
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
<<<<<<< HEAD
        subs__.addSub(list673.addEventListener('change', function() { listSubs__.unsubscribe(); renderList673(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList673(true); }));
      });
    };
    renderList673();
    
    callback(root9665); return subs__;
=======
        subs__.addSub(list2.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2(true); }));
      });
    };
    renderList2();
    
    callback(root392); return subs__;
>>>>>>> ce8fc3b... more specific condition for rendering detail
    
    
  } else {
    {
      
      var s = mobl.ref("");
<<<<<<< HEAD
      var nodes7204 = $("<span>");
      root9665.append(nodes7204);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root9666 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node3818 = mobl.loadingSpan();
        root9666.append(node3818);
        var list672;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList672 = function() {
          var subs__ = listSubs__;
          list672 = tabs.get();
          list672.list(function(results672) {
            node3818.empty();
            for(var i1596 = 0; i1596 < results672.length; i1596++) {
              (function() {
                var iternode672 = $("<span>");
                node3818.append(iternode672);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results672), i1596), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results672), i1596), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results672), i1596), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp6462 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp6462.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp6462.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp6462.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp6462.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
=======
      var nodes348 = $("<span>");
      root392.append(nodes348);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root393 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node44 = mobl.loadingSpan();
        root393.append(node44);
        var list1;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList1 = function() {
          var subs__ = listSubs__;
          list1 = tabs.get();
          list1.list(function(results1) {
            node44.empty();
            for(var i127 = 0; i127 < results1.length; i127++) {
              (function() {
                var iternode1 = $("<span>");
                node44.append(iternode1);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results1), i127), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results1), i127), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results1), i127), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp369 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp369.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp369.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp369.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp369.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
>>>>>>> ce8fc3b... more specific condition for rendering detail
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
<<<<<<< HEAD
                var tmp6461 = mobl.ref(result__);
                
                var nodes7205 = $("<span>");
                iternode672.append(nodes7205);
                subs__.addSub((mobl.span)(tmp6462, mobl.ref(null), tmp6461, mobl.ref(null), function(_, callback) {
                  var root9667 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes7206 = $("<span>");
                  root9667.append(nodes7206);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root9668 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root9668); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes7206;
                    nodes7206 = node.contents();
                    oldNodes.replaceWith(nodes7206);
                  }));
                  callback(root9667); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7205;
                  nodes7205 = node.contents();
                  oldNodes.replaceWith(nodes7205);
                }));
                
                var oldNodes = iternode672;
                iternode672 = iternode672.contents();
                oldNodes.replaceWith(iternode672);
=======
                var tmp368 = mobl.ref(result__);
                
                var nodes349 = $("<span>");
                iternode1.append(nodes349);
                subs__.addSub((mobl.span)(tmp369, mobl.ref(null), tmp368, mobl.ref(null), function(_, callback) {
                  var root394 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes350 = $("<span>");
                  root394.append(nodes350);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root395 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root395); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes350;
                    nodes350 = node.contents();
                    oldNodes.replaceWith(nodes350);
                  }));
                  callback(root394); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes349;
                  nodes349 = node.contents();
                  oldNodes.replaceWith(nodes349);
                }));
                
                var oldNodes = iternode1;
                iternode1 = iternode1.contents();
                oldNodes.replaceWith(iternode1);
>>>>>>> ce8fc3b... more specific condition for rendering detail
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
<<<<<<< HEAD
            subs__.addSub(list672.addEventListener('change', function() { listSubs__.unsubscribe(); renderList672(true); }));
            subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList672(true); }));
          });
        };
        renderList672();
        
        callback(root9666); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7204;
        nodes7204 = node.contents();
        oldNodes.replaceWith(nodes7204);
      }));
      
      var node3819 = mobl.loadingSpan();
      root9665.append(node3819);
      var list673;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList673 = function() {
        var subs__ = listSubs__;
        list673 = tabs.get();
        list673.list(function(results673) {
          node3819.empty();
          for(var i1597 = 0; i1597 < results673.length; i1597++) {
            (function() {
              var iternode673 = $("<span>");
              node3819.append(iternode673);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results673), i1597), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results673), i1597), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results673), i1597), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp6463 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp6463.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp6463.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp6463.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp6463.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes7207 = $("<span>");
              iternode673.append(nodes7207);
              subs__.addSub((mobl.block)(tmp6463, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root9669 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes7208 = $("<span>");
                root9669.append(nodes7208);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root9670 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes7209 = $("<span>");
                  root9670.append(nodes7209);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl1540();
                  }));
                  
                  function renderControl1540() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root9671 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root9671); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes7209;
                      nodes7209 = node.contents();
                      oldNodes.replaceWith(nodes7209);
                    }));
                  }
                  renderControl1540();
                  callback(root9670); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7208;
                  nodes7208 = node.contents();
                  oldNodes.replaceWith(nodes7208);
                }));
                callback(root9669); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes7207;
                nodes7207 = node.contents();
                oldNodes.replaceWith(nodes7207);
              }));
              
              var oldNodes = iternode673;
              iternode673 = iternode673.contents();
              oldNodes.replaceWith(iternode673);
=======
            subs__.addSub(list1.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1(true); }));
            subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList1(true); }));
          });
        };
        renderList1();
        
        callback(root393); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes348;
        nodes348 = node.contents();
        oldNodes.replaceWith(nodes348);
      }));
      
      var node45 = mobl.loadingSpan();
      root392.append(node45);
      var list2;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList2 = function() {
        var subs__ = listSubs__;
        list2 = tabs.get();
        list2.list(function(results2) {
          node45.empty();
          for(var i128 = 0; i128 < results2.length; i128++) {
            (function() {
              var iternode2 = $("<span>");
              node45.append(iternode2);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results2), i128), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results2), i128), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results2), i128), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp370 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp370.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp370.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp370.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp370.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes351 = $("<span>");
              iternode2.append(nodes351);
              subs__.addSub((mobl.block)(tmp370, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root396 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes352 = $("<span>");
                root396.append(nodes352);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root397 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes353 = $("<span>");
                  root397.append(nodes353);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl6();
                  }));
                  
                  function renderControl6() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root398 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root398); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes353;
                      nodes353 = node.contents();
                      oldNodes.replaceWith(nodes353);
                    }));
                  }
                  renderControl6();
                  callback(root397); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes352;
                  nodes352 = node.contents();
                  oldNodes.replaceWith(nodes352);
                }));
                callback(root396); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes351;
                nodes351 = node.contents();
                oldNodes.replaceWith(nodes351);
              }));
              
              var oldNodes = iternode2;
              iternode2 = iternode2.contents();
              oldNodes.replaceWith(iternode2);
>>>>>>> ce8fc3b... more specific condition for rendering detail
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
<<<<<<< HEAD
          subs__.addSub(list673.addEventListener('change', function() { listSubs__.unsubscribe(); renderList673(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList673(true); }));
        });
      };
      renderList673();
      
      callback(root9665); return subs__;
=======
          subs__.addSub(list2.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList2(true); }));
        });
      };
      renderList2();
      
      callback(root392); return subs__;
>>>>>>> ce8fc3b... more specific condition for rendering detail
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
<<<<<<< HEAD
  var root9672 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3820 = $("<div>");
  
  var ref3810 = mobl.ref(ui.searchboxStyle);
  if(ref3810.get() !== null) {
    node3820.attr('class', ref3810.get());
    subs__.addSub(ref3810.addEventListener('change', function(_, ref, val) {
      node3820.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3810.rebind());
  
  
  var node3821 = $("<input>");
  node3821.attr('type', "search");
  
  var ref3807 = mobl.ref(ui.searchBoxInputStyle);
  if(ref3807.get() !== null) {
    node3821.attr('class', ref3807.get());
    subs__.addSub(ref3807.addEventListener('change', function(_, ref, val) {
      node3821.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3807.rebind());
  
  var ref3808 = placeholder;
  if(ref3808.get() !== null) {
    node3821.attr('placeholder', ref3808.get());
    subs__.addSub(ref3808.addEventListener('change', function(_, ref, val) {
      node3821.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref3808.rebind());
  
  var ref3809 = s;
  node3821.val(""+ref3809.get());
  var ignore750 = false;
  subs__.addSub(ref3809.addEventListener('change', function(_, ref, val) {
    if(ignore750) return;
    node3821.val(""+val);
  }));
  subs__.addSub(ref3809.rebind());
  
  subs__.addSub(mobl.domBind(node3821, 'keyup change', function() {
    ignore750 = true;
    s.set(mobl.stringTomobl__String(node3821.val()));
    ignore750 = false;
  }));
  
  
  var val1954 = onsearch.get();
  if(val1954 !== null) {
    subs__.addSub(mobl.domBind(node3821, 'change', val1954));
  }
  
  var val1955 = onkeyup.get();
  if(val1955 !== null) {
    subs__.addSub(mobl.domBind(node3821, 'keyup', val1955));
  }
  node3821.attr('autocorrect', false);
  node3821.attr('autocapitalize', false);
  node3821.attr('autocomplete', false);
  
  node3820.append(node3821);
  root9672.append(node3820);
  callback(root9672); return subs__;
=======
  var root399 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node46 = $("<div>");
  
  var ref55 = mobl.ref(ui.searchboxStyle);
  if(ref55.get() !== null) {
    node46.attr('class', ref55.get());
    subs__.addSub(ref55.addEventListener('change', function(_, ref, val) {
      node46.attr('class', val);
    }));
    
  }
  subs__.addSub(ref55.rebind());
  
  
  var node47 = $("<input>");
  node47.attr('type', "search");
  
  var ref52 = mobl.ref(ui.searchBoxInputStyle);
  if(ref52.get() !== null) {
    node47.attr('class', ref52.get());
    subs__.addSub(ref52.addEventListener('change', function(_, ref, val) {
      node47.attr('class', val);
    }));
    
  }
  subs__.addSub(ref52.rebind());
  
  var ref53 = placeholder;
  if(ref53.get() !== null) {
    node47.attr('placeholder', ref53.get());
    subs__.addSub(ref53.addEventListener('change', function(_, ref, val) {
      node47.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref53.rebind());
  
  var ref54 = s;
  node47.val(""+ref54.get());
  var ignore12 = false;
  subs__.addSub(ref54.addEventListener('change', function(_, ref, val) {
    if(ignore12) return;
    node47.val(""+val);
  }));
  subs__.addSub(ref54.rebind());
  
  subs__.addSub(mobl.domBind(node47, 'keyup change', function() {
    ignore12 = true;
    s.set(mobl.stringTomobl__String(node47.val()));
    ignore12 = false;
  }));
  
  
  var val28 = onsearch.get();
  if(val28 !== null) {
    subs__.addSub(mobl.domBind(node47, 'change', val28));
  }
  
  var val29 = onkeyup.get();
  if(val29 !== null) {
    subs__.addSub(mobl.domBind(node47, 'keyup', val29));
  }
  node47.attr('autocorrect', false);
  node47.attr('autocapitalize', false);
  node47.attr('autocomplete', false);
  
  node46.append(node47);
  root399.append(node46);
  callback(root399); return subs__;
>>>>>>> ce8fc3b... more specific condition for rendering detail
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
<<<<<<< HEAD
  var root9673 = $("<span>");
=======
  var root400 = $("<span>");
>>>>>>> ce8fc3b... more specific condition for rendering detail
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
<<<<<<< HEAD
  var ref3811 = mobl.ref(ui.contextMenuStyle);
  if(ref3811.get() !== null) {
    menu.attr('class', ref3811.get());
    subs__.addSub(ref3811.addEventListener('change', function(_, ref, val) {
=======
  var ref56 = mobl.ref(ui.contextMenuStyle);
  if(ref56.get() !== null) {
    menu.attr('class', ref56.get());
    subs__.addSub(ref56.addEventListener('change', function(_, ref, val) {
>>>>>>> ce8fc3b... more specific condition for rendering detail
      menu.attr('class', val);
    }));
    
  }
<<<<<<< HEAD
  subs__.addSub(ref3811.rebind());
  
  var nodes7210 = $("<span>");
  menu.append(nodes7210);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1541();
  }));
  
  function renderControl1541() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9674 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9674); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7210;
      nodes7210 = node.contents();
      oldNodes.replaceWith(nodes7210);
    }));
  }
  renderControl1541();
  root9673.append(menu);
=======
  subs__.addSub(ref56.rebind());
  
  var nodes354 = $("<span>");
  menu.append(nodes354);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl7();
  }));
  
  function renderControl7() {
    subs__.addSub((elements)(function(elements, callback) {
      var root401 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root401); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes354;
      nodes354 = node.contents();
      oldNodes.replaceWith(nodes354);
    }));
  }
  renderControl7();
  root400.append(menu);
>>>>>>> ce8fc3b... more specific condition for rendering detail
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
<<<<<<< HEAD
  var val1956 = function(event, callback) {
=======
  var val30 = function(event, callback) {
>>>>>>> ce8fc3b... more specific condition for rendering detail
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
<<<<<<< HEAD
                  var tmp6503 = result__;
=======
                  var tmp410 = result__;
>>>>>>> ce8fc3b... more specific condition for rendering detail
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
<<<<<<< HEAD
  if(val1956 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val1956));
  }
  
  root9673.append(img);
=======
  if(val30 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val30));
  }
  
  root400.append(img);
>>>>>>> ce8fc3b... more specific condition for rendering detail
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
<<<<<<< HEAD
  callback(root9673); return subs__;
=======
  callback(root400); return subs__;
>>>>>>> ce8fc3b... more specific condition for rendering detail
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
<<<<<<< HEAD
  var root9675 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp6488 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp6488.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node3822 = $("<span>");
  root9675.append(node3822);
  var condSubs927 = new mobl.CompSubscription();
  subs__.addSub(condSubs927);
  var oldValue927;
  var renderCond927 = function() {
    var value4147 = tmp6488.get();
    if(oldValue927 === value4147) return;
    oldValue927 = value4147;
    var subs__ = condSubs927;
    subs__.unsubscribe();
    node3822.empty();
    if(value4147) {
      items.get().one(function(result__) {
        var tmp6504 = result__;
        var current = mobl.ref(result__);
        
        var node3823 = $("<div>");
        node3823.attr('width', "100%");
        
        
        var node3824 = $("<div>");
        node3824.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes7213 = $("<span>");
        node3824.append(nodes7213);
        subs__.addSub((ui.group)(function(_, callback) {
          var root9678 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node3827 = mobl.loadingSpan();
          root9678.append(node3827);
          var list674;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList674 = function() {
            var subs__ = listSubs__;
            list674 = items.get();
            list674.list(function(results674) {
              node3827.empty();
              for(var i1598 = 0; i1598 < results674.length; i1598++) {
                (function() {
                  var iternode674 = $("<span>");
                  node3827.append(iternode674);
                  var it;
                  it = mobl.ref(mobl.ref(results674), i1598);
                  var result__ = it.get() == current.get();
                  var tmp6469 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp6469.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp6469.set(it.get() == current.get());
                  }));
                  
                  
                  var node3828 = $("<span>");
                  iternode674.append(node3828);
                  var condSubs929 = new mobl.CompSubscription();
                  subs__.addSub(condSubs929);
                  var oldValue929;
                  var renderCond929 = function() {
                    var value4149 = tmp6469.get();
                    if(oldValue929 === value4149) return;
                    oldValue929 = value4149;
                    var subs__ = condSubs929;
                    subs__.unsubscribe();
                    node3828.empty();
                    if(value4149) {
                      var nodes7214 = $("<span>");
                      node3828.append(nodes7214);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root9679 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes7215 = $("<span>");
                        root9679.append(nodes7215);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl1543();
                        }));
                        
                        function renderControl1543() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root9680 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root9680); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes7215;
                            nodes7215 = node.contents();
                            oldNodes.replaceWith(nodes7215);
                          }));
                        }
                        renderControl1543();
                        callback(root9679); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes7214;
                        nodes7214 = node.contents();
                        oldNodes.replaceWith(nodes7214);
=======
  var root402 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp395 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp395.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node48 = $("<span>");
  root402.append(node48);
  var condSubs13 = new mobl.CompSubscription();
  subs__.addSub(condSubs13);
  var oldValue13;
  var renderCond13 = function() {
    var value109 = tmp395.get();
    if(oldValue13 === value109) return;
    oldValue13 = value109;
    var subs__ = condSubs13;
    subs__.unsubscribe();
    node48.empty();
    if(value109) {
      items.get().one(function(result__) {
        var tmp411 = result__;
        var current = mobl.ref(result__);
        
        var node49 = $("<div>");
        node49.attr('width', "100%");
        
        
        var node50 = $("<div>");
        node50.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes357 = $("<span>");
        node50.append(nodes357);
        subs__.addSub((ui.group)(function(_, callback) {
          var root405 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node53 = mobl.loadingSpan();
          root405.append(node53);
          var list3;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList3 = function() {
            var subs__ = listSubs__;
            list3 = items.get();
            list3.list(function(results3) {
              node53.empty();
              for(var i129 = 0; i129 < results3.length; i129++) {
                (function() {
                  var iternode3 = $("<span>");
                  node53.append(iternode3);
                  var it;
                  it = mobl.ref(mobl.ref(results3), i129);
                  var result__ = it.get() == current.get();
                  var tmp376 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp376.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp376.set(it.get() == current.get());
                  }));
                  
                  
                  var node54 = $("<span>");
                  iternode3.append(node54);
                  var condSubs15 = new mobl.CompSubscription();
                  subs__.addSub(condSubs15);
                  var oldValue15;
                  var renderCond15 = function() {
                    var value111 = tmp376.get();
                    if(oldValue15 === value111) return;
                    oldValue15 = value111;
                    var subs__ = condSubs15;
                    subs__.unsubscribe();
                    node54.empty();
                    if(value111) {
                      var nodes358 = $("<span>");
                      node54.append(nodes358);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root406 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes359 = $("<span>");
                        root406.append(nodes359);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl9();
                        }));
                        
                        function renderControl9() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root407 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root407); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes359;
                            nodes359 = node.contents();
                            oldNodes.replaceWith(nodes359);
                          }));
                        }
                        renderControl9();
                        callback(root406); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes358;
                        nodes358 = node.contents();
                        oldNodes.replaceWith(nodes358);
>>>>>>> ce8fc3b... more specific condition for rendering detail
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
<<<<<<< HEAD
                      var tmp6468 = mobl.ref(result__);
                      
                      var nodes7216 = $("<span>");
                      node3828.append(nodes7216);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6468, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root9681 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes7217 = $("<span>");
                        root9681.append(nodes7217);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl1544();
                        }));
                        
                        function renderControl1544() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root9682 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root9682); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes7217;
                            nodes7217 = node.contents();
                            oldNodes.replaceWith(nodes7217);
                          }));
                        }
                        renderControl1544();
                        callback(root9681); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes7216;
                        nodes7216 = node.contents();
                        oldNodes.replaceWith(nodes7216);
=======
                      var tmp375 = mobl.ref(result__);
                      
                      var nodes360 = $("<span>");
                      node54.append(nodes360);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp375, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root408 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes361 = $("<span>");
                        root408.append(nodes361);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl10();
                        }));
                        
                        function renderControl10() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root409 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root409); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes361;
                            nodes361 = node.contents();
                            oldNodes.replaceWith(nodes361);
                          }));
                        }
                        renderControl10();
                        callback(root408); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes360;
                        nodes360 = node.contents();
                        oldNodes.replaceWith(nodes360);
>>>>>>> ce8fc3b... more specific condition for rendering detail
                      }));
                      
                      
                    }
                  };
<<<<<<< HEAD
                  renderCond929();
                  subs__.addSub(tmp6469.addEventListener('change', function() {
                    renderCond929();
                  }));
                  
                  
                  var oldNodes = iternode674;
                  iternode674 = iternode674.contents();
                  oldNodes.replaceWith(iternode674);
=======
                  renderCond15();
                  subs__.addSub(tmp376.addEventListener('change', function() {
                    renderCond15();
                  }));
                  
                  
                  var oldNodes = iternode3;
                  iternode3 = iternode3.contents();
                  oldNodes.replaceWith(iternode3);
>>>>>>> ce8fc3b... more specific condition for rendering detail
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
<<<<<<< HEAD
              subs__.addSub(list674.addEventListener('change', function() { listSubs__.unsubscribe(); renderList674(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList674(true); }));
            });
          };
          renderList674();
          
          callback(root9678); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes7213;
          nodes7213 = node.contents();
          oldNodes.replaceWith(nodes7213);
        }));
        node3823.append(node3824);
        
        var node3825 = $("<div>");
        node3825.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node3826 = $("<span>");
        node3825.append(node3826);
        var condSubs928 = new mobl.CompSubscription();
        subs__.addSub(condSubs928);
        var oldValue928;
        var renderCond928 = function() {
          var value4148 = current.get();
          if(oldValue928 === value4148) return;
          oldValue928 = value4148;
          var subs__ = condSubs928;
          subs__.unsubscribe();
          node3826.empty();
          if(value4148) {
            var nodes7211 = $("<span>");
            node3826.append(nodes7211);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl1542();
            }));
            
            function renderControl1542() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root9676 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root9676); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes7211;
                nodes7211 = node.contents();
                oldNodes.replaceWith(nodes7211);
              }));
            }
            renderControl1542();
=======
              subs__.addSub(list3.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList3(true); }));
            });
          };
          renderList3();
          
          callback(root405); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes357;
          nodes357 = node.contents();
          oldNodes.replaceWith(nodes357);
        }));
        node49.append(node50);
        
        var node51 = $("<div>");
        node51.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node52 = $("<span>");
        node51.append(node52);
        var condSubs14 = new mobl.CompSubscription();
        subs__.addSub(condSubs14);
        var oldValue14;
        var renderCond14 = function() {
          var value110 = current.get();
          if(oldValue14 === value110) return;
          oldValue14 = value110;
          var subs__ = condSubs14;
          subs__.unsubscribe();
          node52.empty();
          if(value110) {
            var nodes355 = $("<span>");
            node52.append(nodes355);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl8();
            }));
            
            function renderControl8() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root403 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root403); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes355;
                nodes355 = node.contents();
                oldNodes.replaceWith(nodes355);
              }));
            }
            renderControl8();
>>>>>>> ce8fc3b... more specific condition for rendering detail
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
<<<<<<< HEAD
            var tmp6470 = mobl.ref(result__);
            
            var nodes7212 = $("<span>");
            node3826.append(nodes7212);
            subs__.addSub((mobl.label)(tmp6470, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root9677 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root9677); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes7212;
              nodes7212 = node.contents();
              oldNodes.replaceWith(nodes7212);
=======
            var tmp377 = mobl.ref(result__);
            
            var nodes356 = $("<span>");
            node52.append(nodes356);
            subs__.addSub((mobl.label)(tmp377, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root404 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root404); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes356;
              nodes356 = node.contents();
              oldNodes.replaceWith(nodes356);
>>>>>>> ce8fc3b... more specific condition for rendering detail
            }));
            
            
          }
        };
<<<<<<< HEAD
        renderCond928();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond928();
        }));
        
        node3823.append(node3825);
        node3822.append(node3823);
=======
        renderCond14();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond14();
        }));
        
        node49.append(node51);
        node48.append(node49);
>>>>>>> ce8fc3b... more specific condition for rendering detail
        
        
        
        
        
        
      });
    } else {
<<<<<<< HEAD
      var nodes7218 = $("<span>");
      node3822.append(nodes7218);
      subs__.addSub((ui.group)(function(_, callback) {
        var root9683 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node3829 = mobl.loadingSpan();
        root9683.append(node3829);
        var list675;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList675 = function() {
          var subs__ = listSubs__;
          list675 = items.get();
          list675.list(function(results675) {
            node3829.empty();
            for(var i1599 = 0; i1599 < results675.length; i1599++) {
              (function() {
                var iternode675 = $("<span>");
                node3829.append(iternode675);
                var it;
                it = mobl.ref(mobl.ref(results675), i1599);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp6505 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp6464 = mobl.ref(result__);
                
                var nodes7219 = $("<span>");
                iternode675.append(nodes7219);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6464, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root9684 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes7220 = $("<span>");
                  root9684.append(nodes7220);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl1545();
                  }));
                  
                  function renderControl1545() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root9685 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root9685); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes7220;
                      nodes7220 = node.contents();
                      oldNodes.replaceWith(nodes7220);
                    }));
                  }
                  renderControl1545();
                  callback(root9684); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7219;
                  nodes7219 = node.contents();
                  oldNodes.replaceWith(nodes7219);
                }));
                
                var oldNodes = iternode675;
                iternode675 = iternode675.contents();
                oldNodes.replaceWith(iternode675);
=======
      var nodes362 = $("<span>");
      node48.append(nodes362);
      subs__.addSub((ui.group)(function(_, callback) {
        var root410 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node55 = mobl.loadingSpan();
        root410.append(node55);
        var list4;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList4 = function() {
          var subs__ = listSubs__;
          list4 = items.get();
          list4.list(function(results4) {
            node55.empty();
            for(var i130 = 0; i130 < results4.length; i130++) {
              (function() {
                var iternode4 = $("<span>");
                node55.append(iternode4);
                var it;
                it = mobl.ref(mobl.ref(results4), i130);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp412 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp371 = mobl.ref(result__);
                
                var nodes363 = $("<span>");
                iternode4.append(nodes363);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp371, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root411 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes364 = $("<span>");
                  root411.append(nodes364);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl11();
                  }));
                  
                  function renderControl11() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root412 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root412); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes364;
                      nodes364 = node.contents();
                      oldNodes.replaceWith(nodes364);
                    }));
                  }
                  renderControl11();
                  callback(root411); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes363;
                  nodes363 = node.contents();
                  oldNodes.replaceWith(nodes363);
                }));
                
                var oldNodes = iternode4;
                iternode4 = iternode4.contents();
                oldNodes.replaceWith(iternode4);
>>>>>>> ce8fc3b... more specific condition for rendering detail
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
<<<<<<< HEAD
            subs__.addSub(list675.addEventListener('change', function() { listSubs__.unsubscribe(); renderList675(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList675(true); }));
          });
        };
        renderList675();
        
        callback(root9683); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes7218;
        nodes7218 = node.contents();
        oldNodes.replaceWith(nodes7218);
=======
            subs__.addSub(list4.addEventListener('change', function() { listSubs__.unsubscribe(); renderList4(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList4(true); }));
          });
        };
        renderList4();
        
        callback(root410); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes362;
        nodes362 = node.contents();
        oldNodes.replaceWith(nodes362);
>>>>>>> ce8fc3b... more specific condition for rendering detail
      }));
      
      
    }
  };
<<<<<<< HEAD
  renderCond927();
  subs__.addSub(tmp6488.addEventListener('change', function() {
    renderCond927();
  }));
  
  callback(root9675); return subs__;
=======
  renderCond13();
  subs__.addSub(tmp395.addEventListener('change', function() {
    renderCond13();
  }));
  
  callback(root402); return subs__;
>>>>>>> ce8fc3b... more specific condition for rendering detail
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
<<<<<<< HEAD
  var root9686 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp6467 = mobl.ref(result__);
  
  var nodes7221 = $("<span>");
  root9686.append(nodes7221);
  subs__.addSub((ui.header)(tmp6467, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root9687 = $("<span>");
=======
  var root413 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp374 = mobl.ref(result__);
  
  var nodes365 = $("<span>");
  root413.append(nodes365);
  subs__.addSub((ui.header)(tmp374, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root414 = $("<span>");
>>>>>>> ce8fc3b... more specific condition for rendering detail
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
<<<<<<< HEAD
    var tmp6466 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp6465 = mobl.ref(result__);
    
    var nodes7222 = $("<span>");
    root9687.append(nodes7222);
    subs__.addSub((ui.backButton)(tmp6465, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp6466, function(_, callback) {
      var root9688 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9688); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7222;
      nodes7222 = node.contents();
      oldNodes.replaceWith(nodes7222);
    }));
    callback(root9687); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7221;
    nodes7221 = node.contents();
    oldNodes.replaceWith(nodes7221);
  }));
  var nodes7223 = $("<span>");
  root9686.append(nodes7223);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl1546();
  }));
  
  function renderControl1546() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root9689 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9689); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7223;
      nodes7223 = node.contents();
      oldNodes.replaceWith(nodes7223);
    }));
  }
  renderControl1546();
  callback(root9686); return subs__;
=======
    var tmp373 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp372 = mobl.ref(result__);
    
    var nodes366 = $("<span>");
    root414.append(nodes366);
    subs__.addSub((ui.backButton)(tmp372, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp373, function(_, callback) {
      var root415 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root415); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes366;
      nodes366 = node.contents();
      oldNodes.replaceWith(nodes366);
    }));
    callback(root414); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes365;
    nodes365 = node.contents();
    oldNodes.replaceWith(nodes365);
  }));
  var nodes367 = $("<span>");
  root413.append(nodes367);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl12();
  }));
  
  function renderControl12() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root416 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root416); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes367;
      nodes367 = node.contents();
      oldNodes.replaceWith(nodes367);
    }));
  }
  renderControl12();
  callback(root413); return subs__;
>>>>>>> ce8fc3b... more specific condition for rendering detail
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
<<<<<<< HEAD
  var root9690 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes7224 = $("<span>");
  root9690.append(nodes7224);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9691 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node3830 = mobl.loadingSpan();
    root9691.append(node3830);
    var list676;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList676 = function() {
      var subs__ = listSubs__;
      list676 = coll.get();
      list676.list(function(results676) {
        node3830.empty();
        for(var i1600 = 0; i1600 < results676.length; i1600++) {
          (function() {
            var iternode676 = $("<span>");
            node3830.append(iternode676);
            var it;
            it = mobl.ref(mobl.ref(results676), i1600);
            var result__ = it.get() == selected.get();
            var tmp6472 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp6472.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp6472.set(it.get() == selected.get());
            }));
            
            
            var node3831 = $("<span>");
            iternode676.append(node3831);
            var condSubs930 = new mobl.CompSubscription();
            subs__.addSub(condSubs930);
            var oldValue930;
            var renderCond930 = function() {
              var value4150 = tmp6472.get();
              if(oldValue930 === value4150) return;
              oldValue930 = value4150;
              var subs__ = condSubs930;
              subs__.unsubscribe();
              node3831.empty();
              if(value4150) {
                var nodes7225 = $("<span>");
                node3831.append(nodes7225);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root9692 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes7226 = $("<span>");
                  root9692.append(nodes7226);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl1547();
                  }));
                  
                  function renderControl1547() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root9693 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root9693); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes7226;
                      nodes7226 = node.contents();
                      oldNodes.replaceWith(nodes7226);
                    }));
                  }
                  renderControl1547();
                  callback(root9692); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7225;
                  nodes7225 = node.contents();
                  oldNodes.replaceWith(nodes7225);
=======
  var root417 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes368 = $("<span>");
  root417.append(nodes368);
  subs__.addSub((ui.group)(function(_, callback) {
    var root418 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node56 = mobl.loadingSpan();
    root418.append(node56);
    var list5;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList5 = function() {
      var subs__ = listSubs__;
      list5 = coll.get();
      list5.list(function(results5) {
        node56.empty();
        for(var i131 = 0; i131 < results5.length; i131++) {
          (function() {
            var iternode5 = $("<span>");
            node56.append(iternode5);
            var it;
            it = mobl.ref(mobl.ref(results5), i131);
            var result__ = it.get() == selected.get();
            var tmp379 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp379.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp379.set(it.get() == selected.get());
            }));
            
            
            var node57 = $("<span>");
            iternode5.append(node57);
            var condSubs16 = new mobl.CompSubscription();
            subs__.addSub(condSubs16);
            var oldValue16;
            var renderCond16 = function() {
              var value112 = tmp379.get();
              if(oldValue16 === value112) return;
              oldValue16 = value112;
              var subs__ = condSubs16;
              subs__.unsubscribe();
              node57.empty();
              if(value112) {
                var nodes369 = $("<span>");
                node57.append(nodes369);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root419 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes370 = $("<span>");
                  root419.append(nodes370);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl13();
                  }));
                  
                  function renderControl13() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root420 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root420); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes370;
                      nodes370 = node.contents();
                      oldNodes.replaceWith(nodes370);
                    }));
                  }
                  renderControl13();
                  callback(root419); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes369;
                  nodes369 = node.contents();
                  oldNodes.replaceWith(nodes369);
>>>>>>> ce8fc3b... more specific condition for rendering detail
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
<<<<<<< HEAD
                var tmp6471 = mobl.ref(result__);
                
                var nodes7227 = $("<span>");
                node3831.append(nodes7227);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6471, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root9694 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes7228 = $("<span>");
                  root9694.append(nodes7228);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl1548();
                  }));
                  
                  function renderControl1548() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root9695 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root9695); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes7228;
                      nodes7228 = node.contents();
                      oldNodes.replaceWith(nodes7228);
                    }));
                  }
                  renderControl1548();
                  callback(root9694); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7227;
                  nodes7227 = node.contents();
                  oldNodes.replaceWith(nodes7227);
=======
                var tmp378 = mobl.ref(result__);
                
                var nodes371 = $("<span>");
                node57.append(nodes371);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp378, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root421 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes372 = $("<span>");
                  root421.append(nodes372);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl14();
                  }));
                  
                  function renderControl14() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root422 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root422); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes372;
                      nodes372 = node.contents();
                      oldNodes.replaceWith(nodes372);
                    }));
                  }
                  renderControl14();
                  callback(root421); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes371;
                  nodes371 = node.contents();
                  oldNodes.replaceWith(nodes371);
>>>>>>> ce8fc3b... more specific condition for rendering detail
                }));
                
                
              }
            };
<<<<<<< HEAD
            renderCond930();
            subs__.addSub(tmp6472.addEventListener('change', function() {
              renderCond930();
            }));
            
            
            var oldNodes = iternode676;
            iternode676 = iternode676.contents();
            oldNodes.replaceWith(iternode676);
=======
            renderCond16();
            subs__.addSub(tmp379.addEventListener('change', function() {
              renderCond16();
            }));
            
            
            var oldNodes = iternode5;
            iternode5 = iternode5.contents();
            oldNodes.replaceWith(iternode5);
>>>>>>> ce8fc3b... more specific condition for rendering detail
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
<<<<<<< HEAD
        subs__.addSub(list676.addEventListener('change', function() { listSubs__.unsubscribe(); renderList676(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList676(true); }));
      });
    };
    renderList676();
    
    callback(root9691); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7224;
    nodes7224 = node.contents();
    oldNodes.replaceWith(nodes7224);
  }));
  callback(root9690); return subs__;
=======
        subs__.addSub(list5.addEventListener('change', function() { listSubs__.unsubscribe(); renderList5(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList5(true); }));
      });
    };
    renderList5();
    
    callback(root418); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes368;
    nodes368 = node.contents();
    oldNodes.replaceWith(nodes368);
  }));
  callback(root417); return subs__;
>>>>>>> ce8fc3b... more specific condition for rendering detail
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
<<<<<<< HEAD
  var root9696 = $("<span>");
=======
  var root423 = $("<span>");
>>>>>>> ce8fc3b... more specific condition for rendering detail
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
<<<<<<< HEAD
    var tmp6506 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp6473 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp6473.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp6473.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp6473.set(coll.get().limit(n.get()));
    }));
    
    
    var node3832 = mobl.loadingSpan();
    root9696.append(node3832);
    var list677;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList677 = function() {
      var subs__ = listSubs__;
      list677 = tmp6473.get();
      list677.list(function(results677) {
        node3832.empty();
        for(var i1601 = 0; i1601 < results677.length; i1601++) {
          (function() {
            var iternode677 = $("<span>");
            node3832.append(iternode677);
            var it;
            it = mobl.ref(mobl.ref(results677), i1601);
            var nodes7229 = $("<span>");
            iternode677.append(nodes7229);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl1549();
            }));
            
            function renderControl1549() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root9697 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root9697); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes7229;
                nodes7229 = node.contents();
                oldNodes.replaceWith(nodes7229);
              }));
            }
            renderControl1549();
            
            var oldNodes = iternode677;
            iternode677 = iternode677.contents();
            oldNodes.replaceWith(iternode677);
=======
    var tmp413 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp380 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp380.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp380.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp380.set(coll.get().limit(n.get()));
    }));
    
    
    var node58 = mobl.loadingSpan();
    root423.append(node58);
    var list6;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList6 = function() {
      var subs__ = listSubs__;
      list6 = tmp380.get();
      list6.list(function(results6) {
        node58.empty();
        for(var i132 = 0; i132 < results6.length; i132++) {
          (function() {
            var iternode6 = $("<span>");
            node58.append(iternode6);
            var it;
            it = mobl.ref(mobl.ref(results6), i132);
            var nodes373 = $("<span>");
            iternode6.append(nodes373);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl15();
            }));
            
            function renderControl15() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root424 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root424); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes373;
                nodes373 = node.contents();
                oldNodes.replaceWith(nodes373);
              }));
            }
            renderControl15();
            
            var oldNodes = iternode6;
            iternode6 = iternode6.contents();
            oldNodes.replaceWith(iternode6);
>>>>>>> ce8fc3b... more specific condition for rendering detail
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
<<<<<<< HEAD
        subs__.addSub(list677.addEventListener('change', function() { listSubs__.unsubscribe(); renderList677(true); }));
        subs__.addSub(tmp6473.addEventListener('change', function() { listSubs__.unsubscribe(); renderList677(true); }));
      });
    };
    renderList677();
    
    var result__ = n.get() < total.get();
    var tmp6475 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp6475.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp6475.set(n.get() < total.get());
    }));
    
    
    var node3833 = $("<span>");
    root9696.append(node3833);
    var condSubs931 = new mobl.CompSubscription();
    subs__.addSub(condSubs931);
    var oldValue931;
    var renderCond931 = function() {
      var value4151 = tmp6475.get();
      if(oldValue931 === value4151) return;
      oldValue931 = value4151;
      var subs__ = condSubs931;
      subs__.unsubscribe();
      node3833.empty();
      if(value4151) {
=======
        subs__.addSub(list6.addEventListener('change', function() { listSubs__.unsubscribe(); renderList6(true); }));
        subs__.addSub(tmp380.addEventListener('change', function() { listSubs__.unsubscribe(); renderList6(true); }));
      });
    };
    renderList6();
    
    var result__ = n.get() < total.get();
    var tmp382 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp382.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp382.set(n.get() < total.get());
    }));
    
    
    var node59 = $("<span>");
    root423.append(node59);
    var condSubs17 = new mobl.CompSubscription();
    subs__.addSub(condSubs17);
    var oldValue17;
    var renderCond17 = function() {
      var value113 = tmp382.get();
      if(oldValue17 === value113) return;
      oldValue17 = value113;
      var subs__ = condSubs17;
      subs__.unsubscribe();
      node59.empty();
      if(value113) {
>>>>>>> ce8fc3b... more specific condition for rendering detail
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
<<<<<<< HEAD
        var tmp6474 = mobl.ref(result__);
        
        var nodes7230 = $("<span>");
        node3833.append(nodes7230);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp6474, mobl.ref(null), function(_, callback) {
          var root9698 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes7231 = $("<span>");
          root9698.append(nodes7231);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root9699 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root9699); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes7231;
            nodes7231 = node.contents();
            oldNodes.replaceWith(nodes7231);
          }));
          callback(root9698); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes7230;
          nodes7230 = node.contents();
          oldNodes.replaceWith(nodes7230);
=======
        var tmp381 = mobl.ref(result__);
        
        var nodes374 = $("<span>");
        node59.append(nodes374);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp381, mobl.ref(null), function(_, callback) {
          var root425 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes375 = $("<span>");
          root425.append(nodes375);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root426 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root426); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes375;
            nodes375 = node.contents();
            oldNodes.replaceWith(nodes375);
          }));
          callback(root425); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes374;
          nodes374 = node.contents();
          oldNodes.replaceWith(nodes374);
>>>>>>> ce8fc3b... more specific condition for rendering detail
        }));
        
        
      } else {
        
      }
    };
<<<<<<< HEAD
    renderCond931();
    subs__.addSub(tmp6475.addEventListener('change', function() {
      renderCond931();
    }));
    
    callback(root9696); return subs__;
=======
    renderCond17();
    subs__.addSub(tmp382.addEventListener('change', function() {
      renderCond17();
    }));
    
    callback(root423); return subs__;
>>>>>>> ce8fc3b... more specific condition for rendering detail
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
<<<<<<< HEAD
  var root9700 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes7232 = $("<span>");
  root9700.append(nodes7232);
  subs__.addSub((ui.group)(function(_, callback) {
    var root9701 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node3834 = mobl.loadingSpan();
    root9701.append(node3834);
    var list678;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList678 = function() {
      var subs__ = listSubs__;
      list678 = items.get();
      list678.list(function(results678) {
        node3834.empty();
        for(var i1602 = 0; i1602 < results678.length; i1602++) {
          (function() {
            var iternode678 = $("<span>");
            node3834.append(iternode678);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results678), i1602), "_1");it = mobl.ref(mobl.ref(mobl.ref(results678), i1602), "_2");
            var nodes7233 = $("<span>");
            iternode678.append(nodes7233);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root9702 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes7234 = $("<span>");
              root9702.append(nodes7234);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root9703 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root9703); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes7234;
                nodes7234 = node.contents();
                oldNodes.replaceWith(nodes7234);
              }));
              callback(root9702); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes7233;
              nodes7233 = node.contents();
              oldNodes.replaceWith(nodes7233);
            }));
            
            var oldNodes = iternode678;
            iternode678 = iternode678.contents();
            oldNodes.replaceWith(iternode678);
=======
  var root427 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes376 = $("<span>");
  root427.append(nodes376);
  subs__.addSub((ui.group)(function(_, callback) {
    var root428 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node60 = mobl.loadingSpan();
    root428.append(node60);
    var list7;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList7 = function() {
      var subs__ = listSubs__;
      list7 = items.get();
      list7.list(function(results7) {
        node60.empty();
        for(var i133 = 0; i133 < results7.length; i133++) {
          (function() {
            var iternode7 = $("<span>");
            node60.append(iternode7);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results7), i133), "_1");it = mobl.ref(mobl.ref(mobl.ref(results7), i133), "_2");
            var nodes377 = $("<span>");
            iternode7.append(nodes377);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root429 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes378 = $("<span>");
              root429.append(nodes378);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root430 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root430); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes378;
                nodes378 = node.contents();
                oldNodes.replaceWith(nodes378);
              }));
              callback(root429); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes377;
              nodes377 = node.contents();
              oldNodes.replaceWith(nodes377);
            }));
            
            var oldNodes = iternode7;
            iternode7 = iternode7.contents();
            oldNodes.replaceWith(iternode7);
>>>>>>> ce8fc3b... more specific condition for rendering detail
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
<<<<<<< HEAD
        subs__.addSub(list678.addEventListener('change', function() { listSubs__.unsubscribe(); renderList678(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList678(true); }));
      });
    };
    renderList678();
    
    callback(root9701); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7232;
    nodes7232 = node.contents();
    oldNodes.replaceWith(nodes7232);
  }));
  callback(root9700); return subs__;
=======
        subs__.addSub(list7.addEventListener('change', function() { listSubs__.unsubscribe(); renderList7(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList7(true); }));
      });
    };
    renderList7();
    
    callback(root428); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes376;
    nodes376 = node.contents();
    oldNodes.replaceWith(nodes376);
  }));
  callback(root427); return subs__;
>>>>>>> ce8fc3b... more specific condition for rendering detail
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
<<<<<<< HEAD
  var root9704 = $("<div>");
=======
  var root431 = $("<div>");
>>>>>>> ce8fc3b... more specific condition for rendering detail
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
<<<<<<< HEAD
  coll.get().list(function(coll5124) {
    coll5124 = coll5124.reverse();
    function processOne294() {
      var it;
      it = coll5124.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll5124.length > 0) processOne294(); else rest294();
      
    }
    function rest294() {
      var nodes7235 = $("<span>");
      root9704.append(nodes7235);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root9705 = $("<span>");
=======
  coll.get().list(function(coll157) {
    coll157 = coll157.reverse();
    function processOne13() {
      var it;
      it = coll157.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll157.length > 0) processOne13(); else rest13();
      
    }
    function rest13() {
      var nodes379 = $("<span>");
      root431.append(nodes379);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root432 = $("<span>");
>>>>>>> ce8fc3b... more specific condition for rendering detail
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
<<<<<<< HEAD
        var tmp6476 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp6477 = mobl.ref(result__);
        
        var nodes7236 = $("<span>");
        root9705.append(nodes7236);
        subs__.addSub((ui.backButton)(tmp6477, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp6476, function(_, callback) {
          var root9706 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9706); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7236;
          nodes7236 = node.contents();
          oldNodes.replaceWith(nodes7236);
=======
        var tmp383 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp384 = mobl.ref(result__);
        
        var nodes380 = $("<span>");
        root432.append(nodes380);
        subs__.addSub((ui.backButton)(tmp384, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp383, function(_, callback) {
          var root433 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root433); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes380;
          nodes380 = node.contents();
          oldNodes.replaceWith(nodes380);
>>>>>>> ce8fc3b... more specific condition for rendering detail
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
<<<<<<< HEAD
                         items.get().list(function(coll5123) {
                           coll5123 = coll5123.reverse();
                           function processOne293() {
                             var checked;var it;
                             var tmp6508 = coll5123.pop();
                             checked = tmp6508._1;it = tmp6508._2;
=======
                         items.get().list(function(coll156) {
                           coll156 = coll156.reverse();
                           function processOne12() {
                             var checked;var it;
                             var tmp415 = coll156.pop();
                             checked = tmp415._1;it = tmp415._2;
>>>>>>> ce8fc3b... more specific condition for rendering detail
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
<<<<<<< HEAD
                               if(coll5123.length > 0) processOne293(); else rest293();
=======
                               if(coll156.length > 0) processOne12(); else rest12();
>>>>>>> ce8fc3b... more specific condition for rendering detail
                               
                             } else {
                               {
                                 
<<<<<<< HEAD
                                 if(coll5123.length > 0) processOne293(); else rest293();
=======
                                 if(coll156.length > 0) processOne12(); else rest12();
>>>>>>> ce8fc3b... more specific condition for rendering detail
                                 
                               }
                             }
                           }
<<<<<<< HEAD
                           function rest293() {
=======
                           function rest12() {
>>>>>>> ce8fc3b... more specific condition for rendering detail
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
<<<<<<< HEAD
                           if(coll5123.length > 0) processOne293(); else rest293();
                         });
                         
                       };
        var tmp6478 = mobl.ref(result__);
        
        var nodes7237 = $("<span>");
        root9705.append(nodes7237);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp6478, function(_, callback) {
          var root9707 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root9707); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes7237;
          nodes7237 = node.contents();
          oldNodes.replaceWith(nodes7237);
        }));
        callback(root9705); return subs__;
=======
                           if(coll156.length > 0) processOne12(); else rest12();
                         });
                         
                       };
        var tmp385 = mobl.ref(result__);
        
        var nodes381 = $("<span>");
        root432.append(nodes381);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp385, function(_, callback) {
          var root434 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root434); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes381;
          nodes381 = node.contents();
          oldNodes.replaceWith(nodes381);
        }));
        callback(root432); return subs__;
>>>>>>> ce8fc3b... more specific condition for rendering detail
        
        
        return subs__;
      }, function(node) {
<<<<<<< HEAD
        var oldNodes = nodes7235;
        nodes7235 = node.contents();
        oldNodes.replaceWith(nodes7235);
      }));
      var nodes7238 = $("<span>");
      root9704.append(nodes7238);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root9708 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root9708); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes7238;
        nodes7238 = node.contents();
        oldNodes.replaceWith(nodes7238);
      }));
      callback(root9704); return subs__;
      
      
    }
    if(coll5124.length > 0) processOne294(); else rest294();
=======
        var oldNodes = nodes379;
        nodes379 = node.contents();
        oldNodes.replaceWith(nodes379);
      }));
      var nodes382 = $("<span>");
      root431.append(nodes382);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root435 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root435); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes382;
        nodes382 = node.contents();
        oldNodes.replaceWith(nodes382);
      }));
      callback(root431); return subs__;
      
      
    }
    if(coll157.length > 0) processOne13(); else rest13();
>>>>>>> ce8fc3b... more specific condition for rendering detail
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
<<<<<<< HEAD
  var root9709 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes7239 = $("<span>");
  root9709.append(nodes7239);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root9710 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9710); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7239;
    nodes7239 = node.contents();
    oldNodes.replaceWith(nodes7239);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp6479 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp6479.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp6479.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp6479.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp6479.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp6479.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes7240 = $("<span>");
  root9709.append(nodes7240);
  subs__.addSub((ui.masterDetail)(tmp6479, masterItem, detailItem, function(_, callback) {
    var root9711 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root9711); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes7240;
    nodes7240 = node.contents();
    oldNodes.replaceWith(nodes7240);
  }));
  callback(root9709); return subs__;
=======
  var root436 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes383 = $("<span>");
  root436.append(nodes383);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root437 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root437); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes383;
    nodes383 = node.contents();
    oldNodes.replaceWith(nodes383);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp386 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp386.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp386.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp386.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp386.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp386.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes384 = $("<span>");
  root436.append(nodes384);
  subs__.addSub((ui.masterDetail)(tmp386, masterItem, detailItem, function(_, callback) {
    var root438 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root438); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes384;
    nodes384 = node.contents();
    oldNodes.replaceWith(nodes384);
  }));
  callback(root436); return subs__;
>>>>>>> ce8fc3b... more specific condition for rendering detail
  
  
  return subs__;
};
ui.progressStyle = 'ui__progressStyle';
ui.startLoading = function(loadingMessage, style) {
   var __this = this;
  var loading = mobl.$("<div id='progress' class='" + style + "'>" + loadingMessage + "</div>");
  
  mobl.$("body").prepend(loading);
};

ui.endLoading = function() {
   var __this = this;
  mobl.$("#progress").remove();
};

(function(__ns) {
__ns.floatBox = function(top, right, bottom, left, elements, callback) {
                  var root928 = $("<span>");
                  var node280 = $("<div style=\"position: absolute;\">");
                  var nodes681 = $("<span>");
                  node280.append(nodes681);
                  mobl.ref(elements).addEventListener('change', function() {
                                                                  renderControl102();
                                                                });
                  function renderControl102 ( ) {
                    (elements)(function(elements, callback) {
                                 var root929 = $("<span>");
                                 callback(root929);
                                 return;
                               }, function(node) {
                                    var oldNodes = nodes681;
                                    nodes681 = node.contents();
                                    oldNodes.replaceWith(nodes681);
                                  });
                  }
                  renderControl102();
                  root928.append(node280);
                  var box = node280;
                  if(top.get() !== null)
                  box.css("top", "" + top.get() + "px");
                  if(right.get() !== null)
                  box.css("right", "" + right.get() + "px");
                  if(bottom.get() !== null)
                  box.css("top", "" + ( window.pageYOffset + window.innerHeight - box.outerHeight() - bottom.get() ) + "px");
                  if(left.get() !== null)
                  box.css("left", "" + left.get() + "px");
                  function updateLocation ( ) {
                    if(top.get() !== null)
                    {
                      box.css("top", "" + ( window.pageYOffset + top.get() ) + "px");
                    }
                    if(bottom.get() !== null)
                    {
                      box.css("top", "" + ( window.pageYOffset + window.innerHeight - box.outerHeight() - bottom.get() ) + "px");
                    }
                  }
                  $(window).bind('scroll', updateLocation);
                  $(window).bind('resize', updateLocation);
                  callback(root928);
                  return;
                };
}(ui));ui.accordionStyle = 'ui__accordionStyle';
ui.activeSectionHeaderStyle = 'ui__activeSectionHeaderStyle';
ui.inActiveSectionHeaderStyle = 'ui__inActiveSectionHeaderStyle';
ui.activeSectionHeaderStyle = 'ui__activeSectionHeaderStyle';
ui.inActiveSectionHeaderStyle = 'ui__inActiveSectionHeaderStyle';
ui.inActiveSectionStyle = 'ui__inActiveSectionStyle';
ui.activeSectionStyle = 'ui__activeSectionStyle';

ui.accordion = function(sections, activeSection, elements, callback) {
<<<<<<< HEAD
  var root9712 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes7241 = $("<span>");
  root9712.append(nodes7241);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root9713 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node3835 = mobl.loadingSpan();
    root9713.append(node3835);
    var list679;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList679 = function() {
      var subs__ = listSubs__;
      list679 = sections.get();
      list679.list(function(results679) {
        node3835.empty();
        for(var i1603 = 0; i1603 < results679.length; i1603++) {
          (function() {
            var iternode679 = $("<span>");
            node3835.append(iternode679);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results679), i1603), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results679), i1603), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp6481 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp6481.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp6481.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp6481.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp6481.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
=======
  var root439 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes385 = $("<span>");
  root439.append(nodes385);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root440 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node61 = mobl.loadingSpan();
    root440.append(node61);
    var list8;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList8 = function() {
      var subs__ = listSubs__;
      list8 = sections.get();
      list8.list(function(results8) {
        node61.empty();
        for(var i134 = 0; i134 < results8.length; i134++) {
          (function() {
            var iternode8 = $("<span>");
            node61.append(iternode8);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results8), i134), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results8), i134), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp388 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp388.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp388.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp388.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp388.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
>>>>>>> ce8fc3b... more specific condition for rendering detail
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
<<<<<<< HEAD
            var tmp6480 = mobl.ref(result__);
            
            var nodes7242 = $("<span>");
            iternode679.append(nodes7242);
            subs__.addSub((mobl.span)(tmp6481, mobl.ref(null), tmp6480, mobl.ref(null), function(_, callback) {
              var root9714 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes7243 = $("<span>");
              root9714.append(nodes7243);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root9715 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root9715); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes7243;
                nodes7243 = node.contents();
                oldNodes.replaceWith(nodes7243);
              }));
              callback(root9714); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes7242;
              nodes7242 = node.contents();
              oldNodes.replaceWith(nodes7242);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp6482 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp6482.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp6482.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp6482.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp6482.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes7244 = $("<span>");
            iternode679.append(nodes7244);
            subs__.addSub((mobl.block)(tmp6482, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root9716 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes7245 = $("<span>");
              root9716.append(nodes7245);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl1550();
              }));
              
              function renderControl1550() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root9717 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root9717); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes7245;
                  nodes7245 = node.contents();
                  oldNodes.replaceWith(nodes7245);
                }));
              }
              renderControl1550();
              callback(root9716); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes7244;
              nodes7244 = node.contents();
              oldNodes.replaceWith(nodes7244);
            }));
            
            var oldNodes = iternode679;
            iternode679 = iternode679.contents();
            oldNodes.replaceWith(iternode679);
=======
            var tmp387 = mobl.ref(result__);
            
            var nodes386 = $("<span>");
            iternode8.append(nodes386);
            subs__.addSub((mobl.span)(tmp388, mobl.ref(null), tmp387, mobl.ref(null), function(_, callback) {
              var root441 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes387 = $("<span>");
              root441.append(nodes387);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root442 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root442); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes387;
                nodes387 = node.contents();
                oldNodes.replaceWith(nodes387);
              }));
              callback(root441); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes386;
              nodes386 = node.contents();
              oldNodes.replaceWith(nodes386);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp389 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp389.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp389.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp389.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp389.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes388 = $("<span>");
            iternode8.append(nodes388);
            subs__.addSub((mobl.block)(tmp389, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root443 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes389 = $("<span>");
              root443.append(nodes389);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl16();
              }));
              
              function renderControl16() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root444 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root444); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes389;
                  nodes389 = node.contents();
                  oldNodes.replaceWith(nodes389);
                }));
              }
              renderControl16();
              callback(root443); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes388;
              nodes388 = node.contents();
              oldNodes.replaceWith(nodes388);
            }));
            
            var oldNodes = iternode8;
            iternode8 = iternode8.contents();
            oldNodes.replaceWith(iternode8);
>>>>>>> ce8fc3b... more specific condition for rendering detail
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
<<<<<<< HEAD
        subs__.addSub(list679.addEventListener('change', function() { listSubs__.unsubscribe(); renderList679(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList679(true); }));
      });
    };
    renderList679();
    
    callback(root9713); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes7241;
    nodes7241 = node.contents();
    oldNodes.replaceWith(nodes7241);
  }));
  callback(root9712); return subs__;
=======
        subs__.addSub(list8.addEventListener('change', function() { listSubs__.unsubscribe(); renderList8(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList8(true); }));
      });
    };
    renderList8();
    
    callback(root440); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes385;
    nodes385 = node.contents();
    oldNodes.replaceWith(nodes385);
  }));
  callback(root439); return subs__;
>>>>>>> ce8fc3b... more specific condition for rendering detail
  
  return subs__;
};
ui.tableStyle = 'ui__tableStyle';
ui.tdStyle = 'ui__tdStyle';
ui.trStyle = 'ui__trStyle';
ui.trStyle = 'ui__trStyle';
ui.trStyle = 'ui__trStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';
ui.tdStyle = 'ui__tdStyle';

ui.table = function(style, elements, callback) {
<<<<<<< HEAD
  var root9718 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3836 = $("<table>");
  
  var ref3812 = style;
  if(ref3812.get() !== null) {
    node3836.attr('class', ref3812.get());
    subs__.addSub(ref3812.addEventListener('change', function(_, ref, val) {
      node3836.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3812.rebind());
  
  var nodes7246 = $("<span>");
  node3836.append(nodes7246);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1551();
  }));
  
  function renderControl1551() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9719 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9719); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7246;
      nodes7246 = node.contents();
      oldNodes.replaceWith(nodes7246);
    }));
  }
  renderControl1551();
  root9718.append(node3836);
  callback(root9718); return subs__;
=======
  var root445 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node62 = $("<table>");
  
  var ref57 = style;
  if(ref57.get() !== null) {
    node62.attr('class', ref57.get());
    subs__.addSub(ref57.addEventListener('change', function(_, ref, val) {
      node62.attr('class', val);
    }));
    
  }
  subs__.addSub(ref57.rebind());
  
  var nodes390 = $("<span>");
  node62.append(nodes390);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl17();
  }));
  
  function renderControl17() {
    subs__.addSub((elements)(function(elements, callback) {
      var root446 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root446); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes390;
      nodes390 = node.contents();
      oldNodes.replaceWith(nodes390);
    }));
  }
  renderControl17();
  root445.append(node62);
  callback(root445); return subs__;
>>>>>>> ce8fc3b... more specific condition for rendering detail
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
<<<<<<< HEAD
  var root9720 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3837 = $("<tr>");
  
  var ref3813 = style;
  if(ref3813.get() !== null) {
    node3837.attr('class', ref3813.get());
    subs__.addSub(ref3813.addEventListener('change', function(_, ref, val) {
      node3837.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3813.rebind());
  
  var nodes7247 = $("<span>");
  node3837.append(nodes7247);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1552();
  }));
  
  function renderControl1552() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9721 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9721); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7247;
      nodes7247 = node.contents();
      oldNodes.replaceWith(nodes7247);
    }));
  }
  renderControl1552();
  root9720.append(node3837);
  callback(root9720); return subs__;
=======
  var root447 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node63 = $("<tr>");
  
  var ref58 = style;
  if(ref58.get() !== null) {
    node63.attr('class', ref58.get());
    subs__.addSub(ref58.addEventListener('change', function(_, ref, val) {
      node63.attr('class', val);
    }));
    
  }
  subs__.addSub(ref58.rebind());
  
  var nodes391 = $("<span>");
  node63.append(nodes391);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl18();
  }));
  
  function renderControl18() {
    subs__.addSub((elements)(function(elements, callback) {
      var root448 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root448); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes391;
      nodes391 = node.contents();
      oldNodes.replaceWith(nodes391);
    }));
  }
  renderControl18();
  root447.append(node63);
  callback(root447); return subs__;
>>>>>>> ce8fc3b... more specific condition for rendering detail
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
<<<<<<< HEAD
  var root9722 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3838 = $("<td>");
  
  var ref3814 = width;
  if(ref3814.get() !== null) {
    node3838.attr('width', ref3814.get());
    subs__.addSub(ref3814.addEventListener('change', function(_, ref, val) {
      node3838.attr('width', val);
    }));
    
  }
  subs__.addSub(ref3814.rebind());
  
  var ref3815 = style;
  if(ref3815.get() !== null) {
    node3838.attr('class', ref3815.get());
    subs__.addSub(ref3815.addEventListener('change', function(_, ref, val) {
      node3838.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3815.rebind());
  
  var nodes7248 = $("<span>");
  node3838.append(nodes7248);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1553();
  }));
  
  function renderControl1553() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9723 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9723); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7248;
      nodes7248 = node.contents();
      oldNodes.replaceWith(nodes7248);
    }));
  }
  renderControl1553();
  root9722.append(node3838);
  callback(root9722); return subs__;
=======
  var root449 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node64 = $("<td>");
  
  var ref59 = width;
  if(ref59.get() !== null) {
    node64.attr('width', ref59.get());
    subs__.addSub(ref59.addEventListener('change', function(_, ref, val) {
      node64.attr('width', val);
    }));
    
  }
  subs__.addSub(ref59.rebind());
  
  var ref60 = style;
  if(ref60.get() !== null) {
    node64.attr('class', ref60.get());
    subs__.addSub(ref60.addEventListener('change', function(_, ref, val) {
      node64.attr('class', val);
    }));
    
  }
  subs__.addSub(ref60.rebind());
  
  var nodes392 = $("<span>");
  node64.append(nodes392);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl19();
  }));
  
  function renderControl19() {
    subs__.addSub((elements)(function(elements, callback) {
      var root450 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root450); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes392;
      nodes392 = node.contents();
      oldNodes.replaceWith(nodes392);
    }));
  }
  renderControl19();
  root449.append(node64);
  callback(root449); return subs__;
>>>>>>> ce8fc3b... more specific condition for rendering detail
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
<<<<<<< HEAD
  var root9724 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3839 = $("<td>");
  
  var ref3816 = width;
  if(ref3816.get() !== null) {
    node3839.attr('width', ref3816.get());
    subs__.addSub(ref3816.addEventListener('change', function(_, ref, val) {
      node3839.attr('width', val);
    }));
    
  }
  subs__.addSub(ref3816.rebind());
  
  var ref3817 = style;
  if(ref3817.get() !== null) {
    node3839.attr('class', ref3817.get());
    subs__.addSub(ref3817.addEventListener('change', function(_, ref, val) {
      node3839.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3817.rebind());
  
  var nodes7249 = $("<span>");
  node3839.append(nodes7249);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1554();
  }));
  
  function renderControl1554() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9725 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9725); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7249;
      nodes7249 = node.contents();
      oldNodes.replaceWith(nodes7249);
    }));
  }
  renderControl1554();
  root9724.append(node3839);
  callback(root9724); return subs__;
=======
  var root451 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node65 = $("<td>");
  
  var ref61 = width;
  if(ref61.get() !== null) {
    node65.attr('width', ref61.get());
    subs__.addSub(ref61.addEventListener('change', function(_, ref, val) {
      node65.attr('width', val);
    }));
    
  }
  subs__.addSub(ref61.rebind());
  
  var ref62 = style;
  if(ref62.get() !== null) {
    node65.attr('class', ref62.get());
    subs__.addSub(ref62.addEventListener('change', function(_, ref, val) {
      node65.attr('class', val);
    }));
    
  }
  subs__.addSub(ref62.rebind());
  
  var nodes393 = $("<span>");
  node65.append(nodes393);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl20();
  }));
  
  function renderControl20() {
    subs__.addSub((elements)(function(elements, callback) {
      var root452 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root452); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes393;
      nodes393 = node.contents();
      oldNodes.replaceWith(nodes393);
    }));
  }
  renderControl20();
  root451.append(node65);
  callback(root451); return subs__;
>>>>>>> ce8fc3b... more specific condition for rendering detail
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
<<<<<<< HEAD
  var root9726 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node3840 = $("<td>");
  
  var ref3818 = width;
  if(ref3818.get() !== null) {
    node3840.attr('width', ref3818.get());
    subs__.addSub(ref3818.addEventListener('change', function(_, ref, val) {
      node3840.attr('width', val);
    }));
    
  }
  subs__.addSub(ref3818.rebind());
  
  var ref3819 = style;
  if(ref3819.get() !== null) {
    node3840.attr('class', ref3819.get());
    subs__.addSub(ref3819.addEventListener('change', function(_, ref, val) {
      node3840.attr('class', val);
    }));
    
  }
  subs__.addSub(ref3819.rebind());
  
  
  var node3841 = $("<strong>");
  
  var nodes7250 = $("<span>");
  node3841.append(nodes7250);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl1555();
  }));
  
  function renderControl1555() {
    subs__.addSub((elements)(function(elements, callback) {
      var root9727 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root9727); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes7250;
      nodes7250 = node.contents();
      oldNodes.replaceWith(nodes7250);
    }));
  }
  renderControl1555();
  node3840.append(node3841);
  root9726.append(node3840);
  callback(root9726); return subs__;
=======
  var root453 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node66 = $("<td>");
  
  var ref63 = width;
  if(ref63.get() !== null) {
    node66.attr('width', ref63.get());
    subs__.addSub(ref63.addEventListener('change', function(_, ref, val) {
      node66.attr('width', val);
    }));
    
  }
  subs__.addSub(ref63.rebind());
  
  var ref64 = style;
  if(ref64.get() !== null) {
    node66.attr('class', ref64.get());
    subs__.addSub(ref64.addEventListener('change', function(_, ref, val) {
      node66.attr('class', val);
    }));
    
  }
  subs__.addSub(ref64.rebind());
  
  
  var node67 = $("<strong>");
  
  var nodes394 = $("<span>");
  node67.append(nodes394);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl21();
  }));
  
  function renderControl21() {
    subs__.addSub((elements)(function(elements, callback) {
      var root454 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root454); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes394;
      nodes394 = node.contents();
      oldNodes.replaceWith(nodes394);
    }));
  }
  renderControl21();
  node66.append(node67);
  root453.append(node66);
  callback(root453); return subs__;
>>>>>>> ce8fc3b... more specific condition for rendering detail
  
  
  
  return subs__;
};
(function(__ns) {
setTimeout(function() {
             scrollTo(0, -1);
           }, 250);
__ns.scrollUp = function() {
                  scrollTo(0, 0);
                };
__ns.setupScrollers = function() {
                        setTimeout(function() {
                                     var allScrollers = $("div.scroller");
                                     for(var i = 0; i < allScrollers.length; i++)
                                     {
                                       var scroller = allScrollers.eq(i);
                                       if(!scroller.data("scroller"))
                                       {
                                         scroller.data("scroller", new TouchScroll(scroller[0],{
                                                                                                 elastic: true
                                                                                               }));
                                       }
                                     }
                                   }, 250);
                      };
}(ui));ui.indexOf = function(it, items, callback) {
  var __this = this;
  var result__ = 1;
  var counter = result__;
  var result__ = items;
<<<<<<< HEAD
  items.list(function(coll5125) {
    coll5125 = coll5125.reverse();
    function processOne295() {
      var item;
      item = coll5125.pop();
=======
  items.list(function(coll158) {
    coll158 = coll158.reverse();
    function processOne14() {
      var item;
      item = coll158.pop();
>>>>>>> ce8fc3b... more specific condition for rendering detail
      var result__ = item == it;
      if(result__) {
        var result__ = counter;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = counter + 1;
        counter = result__;
        
<<<<<<< HEAD
        if(coll5125.length > 0) processOne295(); else rest295();
=======
        if(coll158.length > 0) processOne14(); else rest14();
>>>>>>> ce8fc3b... more specific condition for rendering detail
        
      } else {
        {
          var result__ = counter + 1;
          counter = result__;
          
<<<<<<< HEAD
          if(coll5125.length > 0) processOne295(); else rest295();
=======
          if(coll158.length > 0) processOne14(); else rest14();
>>>>>>> ce8fc3b... more specific condition for rendering detail
          
        }
      }
    }
<<<<<<< HEAD
    function rest295() {
=======
    function rest14() {
>>>>>>> ce8fc3b... more specific condition for rendering detail
      var result__ = -1;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
<<<<<<< HEAD
    if(coll5125.length > 0) processOne295(); else rest295();
=======
    if(coll158.length > 0) processOne14(); else rest14();
>>>>>>> ce8fc3b... more specific condition for rendering detail
  });
  
};

ui.visible = mobl.ref(true);
ui.hideCurrentQ = function() {
   var __this = this;
  ui.visible.set(false);
};


ui.mMasterDetail = function(items, masterItem, detail, elements, callback) {
<<<<<<< HEAD
  var root9728 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  items.get().one(function(result__) {
    var tmp6510 = result__;
    var current = mobl.ref(result__);
    
    var node3842 = $("<div>");
    node3842.attr('width', "100%");
    
    
    var node3843 = $("<div>");
    node3843.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
    
    var nodes7252 = $("<span>");
    node3843.append(nodes7252);
    subs__.addSub((ui.group)(function(_, callback) {
      var root9730 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node3848 = mobl.loadingSpan();
      root9730.append(node3848);
      var list680;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList680 = function() {
        var subs__ = listSubs__;
        list680 = items.get();
        list680.list(function(results680) {
          node3848.empty();
          for(var i1604 = 0; i1604 < results680.length; i1604++) {
            (function() {
              var iternode680 = $("<span>");
              node3848.append(iternode680);
              var it;
              it = mobl.ref(mobl.ref(results680), i1604);
              var result__ = it.get() == current.get();
              var tmp6486 = mobl.ref(result__);
              subs__.addSub(it.addEventListener('change', function() {
                tmp6486.set(it.get() == current.get());
              }));
              subs__.addSub(current.addEventListener('change', function() {
                tmp6486.set(it.get() == current.get());
              }));
              
              
              var node3849 = $("<span>");
              iternode680.append(node3849);
              var condSubs933 = new mobl.CompSubscription();
              subs__.addSub(condSubs933);
              var oldValue933;
              var renderCond933 = function() {
                var value4153 = tmp6486.get();
                if(oldValue933 === value4153) return;
                oldValue933 = value4153;
                var subs__ = condSubs933;
                subs__.unsubscribe();
                node3849.empty();
                if(value4153) {
                  var nodes7253 = $("<span>");
                  node3849.append(nodes7253);
                  subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                    var root9731 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    ui.indexOf(it.get(), items.get(), function(result__) {
                      var tmp6513 = result__;
                      var tmp6483 = mobl.ref(result__);
                      subs__.addSub(it.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp6511 = result__;
                          var result__ = tmp6511;
                          tmp6483.set(result__);
=======
  var root455 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  items.get().one(function(result__) {
    var tmp417 = result__;
    var current = mobl.ref(result__);
    
    var node68 = $("<div>");
    node68.attr('width', "100%");
    
    
    var node69 = $("<div>");
    node69.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
    
    var nodes396 = $("<span>");
    node69.append(nodes396);
    subs__.addSub((ui.group)(function(_, callback) {
      var root457 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node74 = mobl.loadingSpan();
      root457.append(node74);
      var list9;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList9 = function() {
        var subs__ = listSubs__;
        list9 = items.get();
        list9.list(function(results9) {
          node74.empty();
          for(var i135 = 0; i135 < results9.length; i135++) {
            (function() {
              var iternode9 = $("<span>");
              node74.append(iternode9);
              var it;
              it = mobl.ref(mobl.ref(results9), i135);
              var result__ = it.get() == current.get();
              var tmp393 = mobl.ref(result__);
              subs__.addSub(it.addEventListener('change', function() {
                tmp393.set(it.get() == current.get());
              }));
              subs__.addSub(current.addEventListener('change', function() {
                tmp393.set(it.get() == current.get());
              }));
              
              
              var node75 = $("<span>");
              iternode9.append(node75);
              var condSubs19 = new mobl.CompSubscription();
              subs__.addSub(condSubs19);
              var oldValue19;
              var renderCond19 = function() {
                var value115 = tmp393.get();
                if(oldValue19 === value115) return;
                oldValue19 = value115;
                var subs__ = condSubs19;
                subs__.unsubscribe();
                node75.empty();
                if(value115) {
                  var nodes397 = $("<span>");
                  node75.append(nodes397);
                  subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                    var root458 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    ui.indexOf(it.get(), items.get(), function(result__) {
                      var tmp429 = result__;
                      var tmp390 = mobl.ref(result__);
                      subs__.addSub(it.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp427 = result__;
                          var result__ = tmp427;
                          tmp390.set(result__);
>>>>>>> ce8fc3b... more specific condition for rendering detail
                          
                        });
                      }));
                      subs__.addSub(items.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
<<<<<<< HEAD
                          var tmp6512 = result__;
                          var result__ = tmp6512;
                          tmp6483.set(result__);
=======
                          var tmp428 = result__;
                          var result__ = tmp428;
                          tmp390.set(result__);
>>>>>>> ce8fc3b... more specific condition for rendering detail
                          
                        });
                      }));
                      
<<<<<<< HEAD
                      var nodes7254 = $("<span>");
                      root9731.append(nodes7254);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl1557();
                      }));
                      
                      function renderControl1557() {
                        subs__.addSub((masterItem.get())(it, tmp6483, function(elements, callback) {
                          var root9732 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root9732); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes7254;
                          nodes7254 = node.contents();
                          oldNodes.replaceWith(nodes7254);
                        }));
                      }
                      renderControl1557();
                      callback(root9731); return subs__;
=======
                      var nodes398 = $("<span>");
                      root458.append(nodes398);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl23();
                      }));
                      
                      function renderControl23() {
                        subs__.addSub((masterItem.get())(it, tmp390, function(elements, callback) {
                          var root459 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root459); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes398;
                          nodes398 = node.contents();
                          oldNodes.replaceWith(nodes398);
                        }));
                      }
                      renderControl23();
                      callback(root458); return subs__;
>>>>>>> ce8fc3b... more specific condition for rendering detail
                      
                    });
                    return subs__;
                  }, function(node) {
<<<<<<< HEAD
                    var oldNodes = nodes7253;
                    nodes7253 = node.contents();
                    oldNodes.replaceWith(nodes7253);
=======
                    var oldNodes = nodes397;
                    nodes397 = node.contents();
                    oldNodes.replaceWith(nodes397);
>>>>>>> ce8fc3b... more specific condition for rendering detail
                  }));
                  
                  
                } else {
                  var result__ = function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   var result__ = it.get();
                                   current.set(result__);
                                   var result__ = true;
                                   ui.visible.set(result__);
                                   var result__ = ui.scrollUp();
                                   if(callback && callback.apply) callback(); return;
                                 };
<<<<<<< HEAD
                  var tmp6485 = mobl.ref(result__);
                  
                  var nodes7255 = $("<span>");
                  node3849.append(nodes7255);
                  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp6485, mobl.ref(null), mobl.ref(true), function(_, callback) {
                    var root9733 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    ui.indexOf(it.get(), items.get(), function(result__) {
                      var tmp6516 = result__;
                      var tmp6484 = mobl.ref(result__);
                      subs__.addSub(it.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp6514 = result__;
                          var result__ = tmp6514;
                          tmp6484.set(result__);
=======
                  var tmp392 = mobl.ref(result__);
                  
                  var nodes399 = $("<span>");
                  node75.append(nodes399);
                  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp392, mobl.ref(null), mobl.ref(true), function(_, callback) {
                    var root460 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    ui.indexOf(it.get(), items.get(), function(result__) {
                      var tmp432 = result__;
                      var tmp391 = mobl.ref(result__);
                      subs__.addSub(it.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp430 = result__;
                          var result__ = tmp430;
                          tmp391.set(result__);
>>>>>>> ce8fc3b... more specific condition for rendering detail
                          
                        });
                      }));
                      subs__.addSub(items.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
<<<<<<< HEAD
                          var tmp6515 = result__;
                          var result__ = tmp6515;
                          tmp6484.set(result__);
=======
                          var tmp431 = result__;
                          var result__ = tmp431;
                          tmp391.set(result__);
>>>>>>> ce8fc3b... more specific condition for rendering detail
                          
                        });
                      }));
                      
<<<<<<< HEAD
                      var nodes7256 = $("<span>");
                      root9733.append(nodes7256);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl1558();
                      }));
                      
                      function renderControl1558() {
                        subs__.addSub((masterItem.get())(it, tmp6484, function(elements, callback) {
                          var root9734 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root9734); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes7256;
                          nodes7256 = node.contents();
                          oldNodes.replaceWith(nodes7256);
                        }));
                      }
                      renderControl1558();
                      callback(root9733); return subs__;
=======
                      var nodes400 = $("<span>");
                      root460.append(nodes400);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl24();
                      }));
                      
                      function renderControl24() {
                        subs__.addSub((masterItem.get())(it, tmp391, function(elements, callback) {
                          var root461 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root461); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes400;
                          nodes400 = node.contents();
                          oldNodes.replaceWith(nodes400);
                        }));
                      }
                      renderControl24();
                      callback(root460); return subs__;
>>>>>>> ce8fc3b... more specific condition for rendering detail
                      
                    });
                    return subs__;
                  }, function(node) {
<<<<<<< HEAD
                    var oldNodes = nodes7255;
                    nodes7255 = node.contents();
                    oldNodes.replaceWith(nodes7255);
=======
                    var oldNodes = nodes399;
                    nodes399 = node.contents();
                    oldNodes.replaceWith(nodes399);
>>>>>>> ce8fc3b... more specific condition for rendering detail
                  }));
                  
                  
                }
              };
<<<<<<< HEAD
              renderCond933();
              subs__.addSub(tmp6486.addEventListener('change', function() {
                renderCond933();
              }));
              
              
              var oldNodes = iternode680;
              iternode680 = iternode680.contents();
              oldNodes.replaceWith(iternode680);
=======
              renderCond19();
              subs__.addSub(tmp393.addEventListener('change', function() {
                renderCond19();
              }));
              
              
              var oldNodes = iternode9;
              iternode9 = iternode9.contents();
              oldNodes.replaceWith(iternode9);
>>>>>>> ce8fc3b... more specific condition for rendering detail
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
<<<<<<< HEAD
          subs__.addSub(list680.addEventListener('change', function() { listSubs__.unsubscribe(); renderList680(true); }));
          subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList680(true); }));
        });
      };
      renderList680();
      
      callback(root9730); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes7252;
      nodes7252 = node.contents();
      oldNodes.replaceWith(nodes7252);
    }));
    node3842.append(node3843);
    
    var node3844 = $("<div>");
    node3844.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
    
    var result__ = current.get() && ui.visible.get();
    var tmp6487 = mobl.ref(result__);
    subs__.addSub(current.addEventListener('change', function() {
      tmp6487.set(current.get() && ui.visible.get());
    }));
    subs__.addSub(ui.visible.addEventListener('change', function() {
      tmp6487.set(current.get() && ui.visible.get());
    }));
    
    
    var node3845 = $("<span>");
    node3844.append(node3845);
    var condSubs932 = new mobl.CompSubscription();
    subs__.addSub(condSubs932);
    var oldValue932;
    var renderCond932 = function() {
      var value4152 = tmp6487.get();
      if(oldValue932 === value4152) return;
      oldValue932 = value4152;
      var subs__ = condSubs932;
      subs__.unsubscribe();
      node3845.empty();
      if(value4152) {
        var nodes7251 = $("<span>");
        node3845.append(nodes7251);
        subs__.addSub(detail.addEventListener('change', function() {
          renderControl1556();
        }));
        
        function renderControl1556() {
          subs__.addSub((detail.get())(current, function(elements, callback) {
            var root9729 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root9729); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes7251;
            nodes7251 = node.contents();
            oldNodes.replaceWith(nodes7251);
=======
          subs__.addSub(list9.addEventListener('change', function() { listSubs__.unsubscribe(); renderList9(true); }));
          subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList9(true); }));
        });
      };
      renderList9();
      
      callback(root457); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes396;
      nodes396 = node.contents();
      oldNodes.replaceWith(nodes396);
    }));
    node68.append(node69);
    
    var node70 = $("<div>");
    node70.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
    
    items.get().count(function(result__) {
      var tmp426 = result__;
      var result__ = tmp426 > 0;
      var tmp425 = result__;
      var result__ = current.get() && tmp425;
      var tmp424 = result__;
      var tmp394 = mobl.ref(result__);
      subs__.addSub(current.addEventListener('change', function() {
        items.get().count(function(result__) {
          var tmp420 = result__;
          var result__ = tmp420 > 0;
          var tmp419 = result__;
          var result__ = current.get() && tmp419;
          var tmp418 = result__;
          var result__ = tmp418;
          tmp394.set(result__);
          
        });
      }));
      subs__.addSub(items.addEventListener('change', function() {
        items.get().count(function(result__) {
          var tmp423 = result__;
          var result__ = tmp423 > 0;
          var tmp422 = result__;
          var result__ = current.get() && tmp422;
          var tmp421 = result__;
          var result__ = tmp421;
          tmp394.set(result__);
          
        });
      }));
      
      
      var node71 = $("<span>");
      node70.append(node71);
      var condSubs18 = new mobl.CompSubscription();
      subs__.addSub(condSubs18);
      var oldValue18;
      var renderCond18 = function() {
        var value114 = tmp394.get();
        if(oldValue18 === value114) return;
        oldValue18 = value114;
        var subs__ = condSubs18;
        subs__.unsubscribe();
        node71.empty();
        if(value114) {
          var nodes395 = $("<span>");
          node71.append(nodes395);
          subs__.addSub(detail.addEventListener('change', function() {
            renderControl22();
>>>>>>> ce8fc3b... more specific condition for rendering detail
          }));
          
          function renderControl22() {
            subs__.addSub((detail.get())(current, function(elements, callback) {
              var root456 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root456); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes395;
              nodes395 = node.contents();
              oldNodes.replaceWith(nodes395);
            }));
          }
          renderControl22();
          
          
        } else {
          
          var node72 = $("<div>");
          node72.attr('style', "padding:20px");
          
          
          var node73 = $("<h2>");
          
          
          node73.append("Add more questions.");
          node72.append(node73);
          node71.append(node72);
          
          
          
        }
<<<<<<< HEAD
        renderControl1556();
        
        
      } else {
        
        var node3846 = $("<div>");
        node3846.attr('style', "padding:20px");
        
        
        var node3847 = $("<h2>");
        
        
        node3847.append("Add more questions.");
        node3846.append(node3847);
        node3845.append(node3846);
        
        
        
      }
    };
    renderCond932();
    subs__.addSub(tmp6487.addEventListener('change', function() {
      renderCond932();
    }));
    
    node3842.append(node3844);
    root9728.append(node3842);
    callback(root9728); return subs__;
    
=======
      };
      renderCond18();
      subs__.addSub(tmp394.addEventListener('change', function() {
        renderCond18();
      }));
      
      node68.append(node70);
      root455.append(node68);
      callback(root455); return subs__;
      
    });
>>>>>>> ce8fc3b... more specific condition for rendering detail
    
    
    
    
  });
  return subs__;
};
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.section = 'ui__section';
ui.logoStyle = 'ui__logoStyle';
