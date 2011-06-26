mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mathJAX');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root11226 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node688 = $("<span>");
  root11226.append(node688);
  var condSubs279 = new mobl.CompSubscription();
  subs__.addSub(condSubs279);
  var oldValue279;
  var renderCond279 = function() {
    var value463 = value.get();
    if(oldValue279 === value463) return;
    oldValue279 = value463;
    var subs__ = condSubs279;
    subs__.unsubscribe();
    node688.empty();
    if(value463) {
      var nodes10261 = $("<span>");
      node688.append(nodes10261);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl139();
      }));
      
      function renderControl139() {
        subs__.addSub((elements)(function(elements, callback) {
          var root11227 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root11227); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes10261;
          nodes10261 = node.contents();
          oldNodes.replaceWith(nodes10261);
        }));
      }
      renderControl139();
      
      
    } else {
      var nodes10262 = $("<span>");
      node688.append(nodes10262);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11228 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes10263 = $("<span>");
        root11228.append(nodes10263);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root11229 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root11229); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes10263;
          nodes10263 = node.contents();
          oldNodes.replaceWith(nodes10263);
        }));
        var nodes10264 = $("<span>");
        root11228.append(nodes10264);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,R0lGODlhIAAgAOf2AAAAAAEBAQICAgMDAwQEBAUFBQYGBgcHBwgICAkJCQoKCgsLCwwMDA0NDQ4ODg8PDxAQEBERERISEhMTExQUFBUVFRYWFhcXFxgYGBkZGRoaGhsbGxwcHB0dHR4eHh8fHyAgICEhISIiIiMjIyQkJCUlJSYmJicnJygoKCkpKSoqKisrKywsLC0tLS4uLi8vLzAwMDExMTIyMjMzMzQ0NDU1NTY2Njc3Nzg4ODk5OTo6Ojs7Ozw8PD09PT4+Pj8/P0BAQEFBQUJCQkNDQ0REREVFRUZGRkdHR0hISElJSUpKSktLS0xMTE1NTU5OTk9PT1BQUFFRUVJSUlNTU1RUVFVVVVZWVldXV1hYWFlZWVpaWltbW1xcXF1dXV5eXl9fX2BgYGFhYWJiYmNjY2RkZGVlZWZmZmdnZ2hoaGlpaWpqamtra2xsbG1tbW5ubm9vb3BwcHFxcXJycnNzc3R0dHV1dXZ2dnd3d3h4eHl5eXp6ent7e3x8fH19fX5+fn9/f4CAgIGBgYKCgoODg4SEhIWFhYaGhoeHh4iIiImJiYqKiouLi4yMjI2NjY6Ojo+Pj5CQkJGRkZKSkpOTk5SUlJWVlZaWlpeXl5iYmJmZmZqampubm5ycnJ2dnZ6enp+fn6CgoKGhoaKioqOjo6SkpKWlpaampqenp6ioqKmpqaqqqqurq6ysrK2tra6urq+vr7CwsLGxsbKysrOzs7S0tLW1tba2tre3t7i4uLm5ubq6uru7u7y8vL29vb6+vr+/v8DAwMHBwcLCwsPDw8TExMXFxcbGxsfHx8jIyMnJycrKysvLy8zMzM3Nzc7Ozs/Pz9DQ0NHR0dLS0tPT09TU1NXV1dbW1tfX19jY2NnZ2dra2tvb29zc3N3d3d7e3t/f3+Dg4OHh4eLi4uPj4+Tk5OXl5ebm5ufn5+jo6Onp6erq6uvr6+zs7O3t7e7u7u/v7/Dw8PHx8fLy8vPz8/T09PX19f///////////////////////////////////////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBQD/ACwAAAAAIAAgAAAI/gABCBxIsKDBgwgTKlzIsKHDhxAjSiSoYc+bCBMFbqCSY4DAApTgyQOUcUGkZcXAeHxQLB49SgI+xnSYAdYxZsjCDHgQLN48NAEEaFAh4oDDA3+EIXO2rAiAN96owQBQ4YVVCg87XBKWLNofAAROlAgAwIPVFxAgmrAkzJgWgxZcvADhESKGKk2MFhTgIAKBhwweNCjAMICBvwoPHMkDCNCYBwoLhFhxIm3CFYEIGUKkiIfCC2dLzDyI4k6e03hqKLQQerTBAkHCgOFCREHkDydGQFYoYAGDBK4RBiX78ACFBsQJBoAAIThDAyVguMBaEIPcEIgbBjBrtQOAAAoSTAgEcXZ3QwEnrLqQAMD6CgdUz1J3yOFFCwwBBqR/ESJoBhUk6OXQABAwQBYBKVhFAnEF1JURAB9YhcGDByHgwQUOUqjhhhx26KGGAQEAIfkEBQUA/wAsBQADABQAGAAACMwA/wkcSDDABg8BCCpc+I+KMmhKGEpcAAsdu1MFJGZwUmOgg14WgS1gqIDQLltZBoJsB0wBwwugbPXSpeXfAlro3LXKONCAQANzYt361QvIPzXZvHlROGGghkSxcgm7IzBGjQESBYpAFMsWlawMLTQx4hOsQAUNFhAwOzBAjTJs2lRhwPYfhDBs3MCRI6NuAilfAn9RUReACCFIisxAUBgAAQQGEtZVaKDp5IEkXjQGAIDDZYIlPg+84EL0PwEOTC/0ILDCZwMZKAhYGBAAIfkEBQUA/wAsBQADABIAFgAACMsA/wkcSBBDnDMQCCokGOBPt295FkpsEKubOFsKFlowAkOAwAi4uo3zxUBhgjupTEXx6GCWyFwCCTgQSOERqVWqpghQsKobuVP/GADSIrCAmU6lWrXa8e8MtWtb/r3pVGPghTyeTsFq8+9ADh3/Aqj5odADHk+lmiwMIXECEbISCRJQkCBAXIIAMBSxYgVIxrv/BuyQQsVKFhOAA9MgwpjIh8T/IKx40SJEAcj/BBQggLlz3Mue/2UIHWBE6H8UWEAGwJq1gr8ERRAMCAAh+QQFBQD/ACwFAAMAFAAWAAAIzgD/CRxI8IKaMA8IKlz47w60aXMYSmRgCpq1VhL/GUhBYiAEVtCu1VrAcEAVSJKSCGyAKiSsBAI3OBho4M2jS5iWCPwEDdsngYSswfogMMAURJA0bbLxLwwyZlf+tXFHLx2QgRTOIJLUSYxGGzcEbqL3jY4EghnMIIpEZOEcaGUYQtBxo8BCBCIUCjBwICPDBC14/IDR169AACBs4NDRI4Phwx1gSIYx4bFABCBUpPBAwHJRz6BDh8bAsLBCAKgBeGCowjCEFSxE/zuAwHJAACH5BAUFAP8ALAYAAwATABgAAAjSAP8JHDiwwhcpDggqXNgGWDE2CyP+W5AJGDJRCRQC2KiAwUYADjwFQ6Zq4UYOZuT4EMhAU7BkpgZqmPBvoxA8gQYF+ZdAUrBllggs+OOsVomNM+DkIYToxb8suX5J+ZemHLt3ZwQ2oBJnDyIrAmXMEGiJHbx3UwZSmNJ1x8I36uKRgkCwwQsXBBYqQHLFgsAABAh8HEwYgMACHlKo+JBXIkEKLyK/iOD4seQXEioPLPBBYIcBmkOLHk1a4oXSnlH/Y4BihWYRCgsY0BxAdejTEQMCACH5BAUFAP8ALAYAAwAVABYAAAjMAP8JHDhwgpUlCwgqXChwzCtaWhhK/KdA0atblhAwBMARQICBDRy9wtVJgUAFLTgQJDBjyYuPCxa9yqVJYwZI1X7JGOihC5o2NwIgGPRqFyOBj76NMxdnYAcrYNjIQfEPSipYTP6d2bb0HJSBCX5cEQMnyb8CLl4IOABKnLl0nyAQfNDjypgYC+eUSwcKw8IEI0YMWAjhypcKAzlO/PvAwD8BGFCg6LD4nwEbNlA4kFtZ4oPOEgWoBD1QRAPSqFOrXs1wA2uKJ14TSB0QACH5BAUFAP8ALAYAAwAWABYAAAjdAP8JHDiwAAsWAggqBMCwYcMlljYVUUiRYoI8m0oFKlDxn0OHC/pwMvUogcAERqI8ENjwwgsOJ/NwOsXowL8LiJxZo0NwgQ8nVFj8OzCHE6o/Ag1Ju7bNFIKBDXIUiaIFxD8jlj5NDOOMabczBAmY2HHEig6BKVb8M2DJ2rZvmFYSTIBiRxITFNlo+5bpQkUDFzIkVPhgyhYKHRMTVPDB778AihV6SMXtGJJ/DFxEHuiGnDZqmxIs0Lz534klQnioeJwhRYrSAxd4BECAAOzbuHPr3r1ZhWPdBRjCDggAIfkEBQUA/wAsBgADABYAFQAACNQAAQgcSFDBAYIIAfxbyJDhCDZoRDScSHEhAS6GIHFJOLDivwNnDEXSc2AhgiBLHEw0YCGCSTOGJAVC8K+CH2DI2jQcQGJGjg//DIQxRIlOAQV8iCVz1qmkyRYwbPzA8C+Hn0U2/mn5hcwZtDANBYh4EUOHin8COoRYuKirNEgqJ5ogq4FimWbTIlXwWEFCAIoOnliZ4LFwwwQeLDBUbJhhh1HVghn5l6BFY4Z13sGDx2tB5csL6dAbfUsBaIYcENGapeP0xAM0XcueTbu27X8hDDAMCAAh+QQFBQD/ACwGAAMAFgAVAAAIywABCBxIsKBBAP8SKlS4AEcOBgsjSkwo4IebPEUmakxoQIobPWgMKORRpEHEAQ0WCDwwxQ2fNwf+TZgDCxeZhQE8uGBRAeETN37IEEgQZ1YuX5EWFlDx4kWLB/9aoLnj4l8UV7h8CdMisekLDv8CYABb4M8tX8MMmZzogoLELr2IHXI7kQJUiQ2SQJGwsa/CDhUSAgjsN+EGTsx6MfmHgEXhhHDMnTtXS0Hjx//gsNtsK6EFFI83eDImawlmpXdPq17NurXrfx8KKAwIACH5BAUFAP8ALAYABAAXABMAAAjSAP8JHDhQAIYMAQgq/AegoUOHJaJoUbGwokICO6iEiTJA4IEWPhgsDKAggcACPKiM2WLgXwQznExtGegQw78VAgngoFJmygAEZD6dakWoZUETCkNAAYMUySZTrWJNodnww0IJFwIQiFOq1aw9Ii3+k7BwCitafMiKtchgiJIIa+P+Q8CBRAWjcgeGmBQsGa9HEg7gzNtnGzdu3bQZMTBY7h1xkMVxOwKAwom8HDD98uVLDgKBHfP+c0A6tOgdUhyIXijk0SYKqxXGEPMi9sIKBAMCACH5BAUFAP8ALAYABAAYABUAAAjRAAEIHEhQAQKCCAf+W8iQoYUZPDA0nEix4YATOIzsELDQQIkQHCsmMLBwQAocSIwQ+OcAC6JENipaaKGiJEYlQAQYqKJIUqYwBCsutGDjiId/PQxFyuQpidCGAhlEWBgGUiZQbhY8fZoEUyg4U7cKVcBjyAOxaP9pEBECQtqJJRzR4tXL04u3CwPwaebsGTRokgoQQPHWj7XDhyWtnPD2Q6RatWg5IoyXYYPLBSoniBKl8kQx7tqV8szwhq5675yQXnhkWD0zqxcaKdQhdkmKAQEAIfkEBQUA/wAsBgAEABgAFQAACNgA/wkcSLAAAYIIEyZ8kOIEA4UQCQoo8QJGiQACBSQwAKCjR48FCJ6o2ELAvwVBylB5mDBCCoQvYrD4V8DInD2CXiQMMCIhixcU/sl4o2cQIRMRBWoQqGABgAFQ8gxS5CVkUggJewhiJMZB0ogJaOho8LXsAQwfPjwYOKGsQBGCSrFyJWnFPwIo3P6b4+sXMGDBDh3U+88OMmTHDiMSiNVtB0SrVKUqhJQwQgaD9SJw4oSsZYEB8pwr96nt5wGk4rU7t+SzQDfw4rkT4/rkIGudagsksOFAwoAAIfkEBQUA/wAsBwAEABYAFQAACMIA/wkcODBAAIIIExJkICLEAYUQBQYI8eLFBgAYAQTIiDFixRICDaz4geIgQQcJK44IQIBGFjFhIiAEMRDlPxYsIPwjUSXMGjUTEHYYmEEgAgX/AuwAs2bOEwIRFcZQU2cKg6gKD6RgsQBrVAMVOGxo8E+n138e6lDa1InQibMC0bBq5eoVrD1w/7G5xZdvn7wb/Hjq1GnPiLz/CDBYjFiJEsQD63TTdkkC5E/oyHFDAnkNusxeIP/78wwVSNEaEiAMCAAh+QQFBQD/ACwIAAQAFgAXAAAIzQD/CRw4EIDBgwgPEhy4IMSHhRAj/gNRMGFCiQsHYCgB4SJGgQJC8DiSQwBBAB4+XtBhBMqSAws5SDRYoggULTkCLDxQAiOIJ1yEKPgYccCHEQmIfiwgAQMGBEoJajATCFEiNyKiCuSCKdMmTpzcDNAaplQpUmbhjI2KYc6jR47ePNQqcMGCoVohXJnigO5AOtWeObKgNUKAA6i6YZvGiEHUR0z+ufHWLRu0IVERrSrw7xG4yl2iltn8T8KhZ7ZWRKVSZmCBEhi0ZsCLMSAAIfkEBQUA/wAsCQAEABUAFwAACNgAAQgcSLCgwX8IEx7woKFAwocQIX5AmCGiRQIWEQp4QAHjwwYnUmT818EFjA8BRkas8AJGDRcCHmpQ6cGlDxEFDai0UAMIDIcqIQqokEFn0IwEHkxoYPToPwtV2Mh5s6WC039OBA0qZOiQEgBOqUAaO7YJ2KMVzPzx4yfMhKv/BiSYO8ApBStMGsBF+AZZsEEUggqYUeLfgn/QlBET5EClCGXXlPxLMw3aMmJeVLpIJs/UPwWHqEFjZunAyBrU5CWsEGmaMzSas8FjkxACkyV6R0KYoyb3yIAAIfkEBQUA/wAsCQAFABQAFgAACMsA/wkcaADDBQIDEypcyHDhgIYDGzQQkHCBCRQQ/7lwcQGARwAcMv57QXJEgIEZRJJ8UUGkQpIgHrocCCECwpkKByx4kMDjTAdArGyxIoOiwI9IP/JIs6aNmzMRZv7IQzXPmwkzIVxxA8eMjJM4ESw44DOjBCdFGOAUeAYXrDsSMiKwQeKfgk7BdNGy06BhgD3mnh35J6ZYsF20rDSEoAxeuk//EvwxFoyXIgMML0iDp46UwAmIiv0C03DAJsdoBj44YkRtQw90zogMCAAh+QQFBQD/ACwIAAUAFQAWAAAIswD/CRz4rwDBgwgPekjIsKHAAAoUAJg40eHADf9YRLAoUMWDgx8oAmB44ADHkyhTohSAQIEBlQha9BCyw8LIkyqeRJlCZcgAlDLACAVzhECJkw2QZMHSBAMAASsPGPh5MoKRHgpU/utiipMaCBxpiPiXABIsVKHSLHB4p1uxIf+20IKVKlQTh8TOfbsksE4tWKr4NLTA7Bw4TgIl9Jnl6opDS+e8jRnoAAeQtQ07vBHDwGFAACH5BAUFAP8ALAkABQAUABgAAAjRAP8JHCiwwgCCCP8BWMiQQ8KHEBEmMBAxYgsVDipGdKixY0cXHhNmDJkwgAEDAkgaCLGChQgEITnQqHEDxwcAHkcU2VmEBM6OCWwQGSIjAcl/BQqk7OiABw2jD2XoYMhwSqRDW0YKpCBwTiOBOmAMQCCI06RFWxQgvAKtyz851IYh+SdFFKdKjYIQdNFJD4IHvLZJSyQAgZpRnCydOSgQQYaDH55xm/bvwD8IcUBtagJRQzJu1DhZ/sdARg61Dx/Y4latz1Eqw2jhOBqAwwWNAQEAIfkEBQUA/wAsCQAFABMAGAAACMwA/wkc+O8CBYIIExK8oLChwgMOHbJAoSDivxQJNVgsYLGjx48fCQQAKTDFBwIeM7xY+QJCShgwXzzwaIBEixUfBnwMMGDAyIEjECRM8EIFRIIl1jxDk9BIHjhKFgy0cEecPEn/DtxoIeCAHEN96CwR+k/LuXnptPxjc6yWkH9IHBnyY8eGQBzIqtn550CWs2F+snZxdOgPEwAACnIQiMGXs2KQDPD9osiPDIUXejkzNklyVhUjBCikgMvZMUUoOw44tPkKSA1jrkhtGBAAIfkEBQUA/wAsCQAFABMAGAAACMMA/wkc+K/CBIIIEypcyHCgAQINFa4wgSCiQgsWE0LIyLGjRwAAPP7TIECkCwcZLbxY6aJBxgIfTpioEKCjAAEg/4UgU0ThARIfChD0sGueOTIJc4SxgqOiQDXy3qlrJHBGin8EtLwhs8UGxH+K3q0DZ+VfGVyldvzzceeNGS4cBNoI1kyOQFO/ZMkJYOBJWzMhBlrQINBCrF+0BAlUoAQNEgUXD9cyNHBAgwEgQxKUsOqXLT8DOPb5VetJRwxcoEBeGBAAIfkEBQUA/wAsCQAHABMAFgAACLcA/wkcSPAfAAAFBhRcWFCDChIHGEqcSLGixYsYM2q8EEDjPxYRNa4IibGEBAAeB4IQM4TkwAEYKCgc2KHWum5gFqoosoNEgYFz1JkDZ+ifARck/gUYUiXJjxEd/x0yF65alH9dTk2i8S/GlypLfCgQSCPXMDYHGGRq9YnMvwJAvFQhkmBghQwCKYxqFWrOTwQugoA4iJIgBVGtRtkpQFgA4cIDI3RqRQoORgFzEh/JaGEKkroSAwIAIfkEBQUA/wAsBwAHABUAFgAACMwA/wkcSLDgPwEGEyYUYUChw4EQHj58ILGixYsYMxYYWAEAxgsDVRhg0UOIE5AWRdoYdStRA4sjBjaosNFigIIfzERRYFDAhAkJR7gKZ02MQQ4wXoQoiGEUOG3T/vwrgOJDgAAwcsR4sQGA139ivmmrlswKgCmU/rD4R4KIVhQDBv7ZZs1ZnX8LFGVSVOXfgBdDcpRAKFAGrF9sXkqYpImRGAL/DIQIsaAghQ6Q/0mIpMlRGQJeQ4dO+KCRpkdgMv4Lc7qHaghFdiBwGBAAIfkEBQUA/wAsBgAOABYADwAACLwA/1lYkeKfwYMIE/6bIFCVLUqAVCic+A8FAQzO6NGLx4WiwhMD/lHx1WwSBI8JHyCkgLLlvw5gmrhUGKIUtWRbFGJ48WKihU3TmhWrY1CEhn8ARPB8kQFhADnSmhnT9eRfkj9pRvy7sLSEgIMKUDU79kuMAQV5CMkh8k9ABxcvOACY+2+AnmPB4ij4BwEQoTpPQgp4MIFASiNEGBh84IfQnSghZxpMYIcQHiUBJB9EEkiOCc0HDZj4kJliQAAh+QQFBQD/ACwGAAcAFgAWAAAIzAD/CRxIsOA/AgYHkkg4EAMKhhAjSpxIsaLFgRUsDLj4L0AVZtEyYagYQeCyeCivVDwx4AIyduzUaalYQsC/KLeKOeIokMEEngQ5aEGSwGAACBBsGvywyViuKQldMKwQiVgvWmoOYvj5LwRENcN62UJ15F+PM1E0/LMwUEQAgpx63XKVpQACM2uyyADwj8O/FhUICohzC5aZohHesNmyQ6kDBm8JOgDiY4FAB2vYdOmhtOIBLmy+wABAurTp06U/TBFSkiFq0wUEvC4dEAAh+QQFBQD/ACwGAA0AFgAQAAAIsAD//aNQQaDBgwgRSjG2rNKFhBBPQPhXgRi6dOmoQIRYQoCFX+LEgbuysWQTV7wOPSjJUgLLl/8yTAmCACbCDo5qoVrCkgDCCYVosQrl5d8ACQwAADhoAWEYWaxGVfLxL0aTGysPdlC6NIEjVqQ0Ofl3IEqUHiAMtmAx8aAZUpuw1HSQJQoQEwEELlDAdem/BjlqGBCoYIoUIXhtGgywQ8oQDYoPMlDhYUDJvpgzaw4IACH5BAUFAP8ALAUACQAWABMAAAjDAP8J/FekxsCDCBMK3CPJoMKHA0PkgjQDokUQYjRYRGhgwoV/BzYivPBIGLJilyyIFOjACzdu3bx9C7NSoBZrOK1V61JzBIZFuHLJIkRhpYgF/wpYwDCBQE2FF5boCPn0n4ZAoigFqRoBTyhMjKD8E8AgAUQAaK98wuQIEI1/I2iscIBQ40AEfzBBKjSEQIEdNmCECCCQBQqkB7VAMrQkJIIegUsIDHCgQMIFMlpYToojsIiqAkPQaAEB9NgHDNCqXh0QACH5BAUFAP8ALAQABwAYABUAAAjaAP8JHNigwMCDCBMOxIHrjMKHCRvRc4YEosV/f+LR+8Th4kMQu+J9m+Hx4YczTAyWHCjBAoWVCHdgutVrF6QLKxv8U/Dp2TNo0aS5WTkiQIJLyJImDbNSRIB/NS6tYlVKD86SCgYqqGAhAkyIFITMMPB14IU4jfzYKPvvQZpFguoE+Rcgq0AQLBUyUSToDhoV/zC4GFhhYIaEBMoIytPGxoABKF68MLziRIKBADID8FGHTQ+DBVRIJvEvM9mHBDxwGCBwwAnJHzTLnk07s4UVKBhArD3bgMqHAQEAIfkEBQUA/wAsBAAHABUAFQAACLYA/wkc+MBCgIEIEya08c8ZmwEDFEoUiIgdPHRIJk7Uk65dPEAaJX6glY7clJASPYxJgnJggQgVJBhoOfBGo1WxXh2yQDPBpF/AggkjZoYmgkW3buFKqoXmvxiJNnGq9KaC038JJlB4cFVhBBwqCnSdAMbOGRVXE1yhk2YLjJAREMKQk8aLkw0hLwDYC+BFGjBUVgj4d4ImAyJMUhBoyXcvgQMHBZoQqKHrPwgmSiSw/G/AYIUBAQAh+QQFBQD/ACwEAAcAFwAVAAAIswD/CRwoocLAgwgTDsx1LI3ChwcFiTsHzghEiHS8jUPH5+LDDqu8bYPi8aMXiyUPQpgQISVCGYE6jRLFR4LLBQgKuXIFK5YsKi5FHOhTqmjRKC4FrtCjSBEhMTaT/kMAIYKDAVITOmgRQkDWfxCadGGyIeuAIVueAAFx8UHCC1WeDKER9SGFhBSYFMHBIcBDFSQOJBQQYsUFrA8LIP4HoLHjAI4FjPh6kMEIDwYo/wvg92FAACH5BAUFAP8ALAQABQAVABcAAAjRAP8JHEjw34YpFAQUXJihQwCBAR7dirGwIJBdxMgM+PcgWS0ZFQcGMGRNWzUz/yAgWxWSoJxo1rhdQ/JPDqeWAzeQinbNm6F/BDrgHJhiVLRpYIYu3MBlygGlQB1EeFAAqsAWdBpJkhQnAtQDdjRt4uTp0xKoBtpAWrv2iNUSau7ciUMFgtV/Bxw8WKDwLsEFHyo8vKsgh5AZFO4KaPGDBgyhVhfkcOzCb4EVMFxgwPmhAIDPnxlkoPCQQIqKD0GrBh0ghF+CCDxALri6tm3QAQEAIfkEAQUA/wAsBAAFABUAFgAACMYA/wkcSPCfhjVZGBQsaIFKjgEDF8V7N2fhwAOBlhUDM3BYPHqKLAqUgOpYs2Rh/j0IFm9eGZH/BOQRhuzZsiL/3nh7BgPmvw6XhCWL9kfgCQ4BfP4zYUmYMS1KF2Ko0iTqQAYPHFgdWOHLHkCAxjywGiAKoUKHECkKQtZJnrdveWylwCRMGC5EGmyNuYBBgr0LD1DQC9hACRguAAfwAOPFC8ADTjiOCoGggBAvWkQlUNAABYVRAYgeTRrAB4EYAAvkcAFiwYAAOw=="), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root11230 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root11230); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes10264;
          nodes10264 = node.contents();
          oldNodes.replaceWith(nodes10264);
        }));
        callback(root11228); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes10262;
        nodes10262 = node.contents();
        oldNodes.replaceWith(nodes10262);
      }));
      
      
    }
  };
  renderCond279();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond279();
  }));
  
  callback(root11226); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
  var root11231 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node689 = $("<div>");
  
  var ref520 = mobl.ref(ui.headerStyle);
  if(ref520.get() !== null) {
    node689.attr('class', ref520.get());
    subs__.addSub(ref520.addEventListener('change', function(_, ref, val) {
      node689.attr('class', val);
    }));
    
  }
  subs__.addSub(ref520.rebind());
  
  var val190 = onclick.get();
  if(val190 !== null) {
    subs__.addSub(mobl.domBind(node689, 'tap', val190));
  }
  
  var ref521 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref521.get() !== null) {
    node689.attr('style', ref521.get());
    subs__.addSub(ref521.addEventListener('change', function(_, ref, val) {
      node689.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node689.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref521.rebind());
  
  
  var node692 = $("<div>");
  
  var ref519 = mobl.ref(ui.headerContainerStyle);
  if(ref519.get() !== null) {
    node692.attr('class', ref519.get());
    subs__.addSub(ref519.addEventListener('change', function(_, ref, val) {
      node692.attr('class', val);
    }));
    
  }
  subs__.addSub(ref519.rebind());
  
  
  var node693 = $("<div>");
  
  var ref517 = text;
  node693.text(""+ref517.get());
  var ignore115 = false;
  subs__.addSub(ref517.addEventListener('change', function(_, ref, val) {
    if(ignore115) return;
    node693.text(""+val);
  }));
  subs__.addSub(ref517.rebind());
  
  
  var ref518 = mobl.ref(ui.headerTextStyle);
  if(ref518.get() !== null) {
    node693.attr('class', ref518.get());
    subs__.addSub(ref518.addEventListener('change', function(_, ref, val) {
      node693.attr('class', val);
    }));
    
  }
  subs__.addSub(ref518.rebind());
  
  node692.append(node693);
  node689.append(node692);
  var nodes10265 = $("<span>");
  node689.append(nodes10265);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl140();
  }));
  
  function renderControl140() {
    subs__.addSub((elements)(function(elements, callback) {
      var root11232 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11232); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10265;
      nodes10265 = node.contents();
      oldNodes.replaceWith(nodes10265);
    }));
  }
  renderControl140();
  root11231.append(node689);
  
  var node690 = $("<span>");
  root11231.append(node690);
  var condSubs280 = new mobl.CompSubscription();
  subs__.addSub(condSubs280);
  var oldValue280;
  var renderCond280 = function() {
    var value464 = fixedPosition.get();
    if(oldValue280 === value464) return;
    oldValue280 = value464;
    var subs__ = condSubs280;
    subs__.unsubscribe();
    node690.empty();
    if(value464) {
      
      var node691 = $("<div>");
      node691.attr('id', "hello");
      node691.attr('style', "height: 2.9em;");
      
      node690.append(node691);
      
      
    } else {
      
    }
  };
  renderCond280();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond280();
  }));
  
  callback(root11231); return subs__;
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root11233 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref522 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref522.get() !== null) {
    sp.attr('class', ref522.get());
    subs__.addSub(ref522.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref522.rebind());
  
  var val191 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val191 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val191));
  }
  
  var val192 = function(event, callback) {
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
  if(val192 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val192));
  }
  
  var val193 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after27(result__) {
                    var tmp10126 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after27);if(result__ !== undefined) after27(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val193 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val193));
  }
  
  var val194 = function(event, callback) {
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
  if(val194 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val194));
  }
  
  var ref523 = text;
  sp.text(""+ref523.get());
  var ignore116 = false;
  subs__.addSub(ref523.addEventListener('change', function(_, ref, val) {
    if(ignore116) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref523.rebind());
  
  
  root11233.append(sp);
  callback(root11233); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root11234 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes10266 = $("<span>");
  root11234.append(nodes10266);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root11235 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root11235); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes10266;
    nodes10266 = node.contents();
    oldNodes.replaceWith(nodes10266);
  }));
  callback(root11234); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root11236 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes10267 = $("<span>");
  root11236.append(nodes10267);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root11237 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root11237); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes10267;
    nodes10267 = node.contents();
    oldNodes.replaceWith(nodes10267);
  }));
  callback(root11236); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root11238 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node694 = $("<ul>");
  
  var ref524 = mobl.ref(ui.groupStyle);
  if(ref524.get() !== null) {
    node694.attr('class', ref524.get());
    subs__.addSub(ref524.addEventListener('change', function(_, ref, val) {
      node694.attr('class', val);
    }));
    
  }
  subs__.addSub(ref524.rebind());
  
  var nodes10268 = $("<span>");
  node694.append(nodes10268);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl141();
  }));
  
  function renderControl141() {
    subs__.addSub((elements)(function(elements, callback) {
      var root11239 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11239); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10268;
      nodes10268 = node.contents();
      oldNodes.replaceWith(nodes10268);
    }));
  }
  renderControl141();
  root11238.append(node694);
  callback(root11238); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root11240 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node695 = $("<img>");
  
  var ref525 = url;
  if(ref525.get() !== null) {
    node695.attr('src', ref525.get());
    subs__.addSub(ref525.addEventListener('change', function(_, ref, val) {
      node695.attr('src', val);
    }));
    
  }
  subs__.addSub(ref525.rebind());
  
  var ref526 = width;
  if(ref526.get() !== null) {
    node695.attr('width', ref526.get());
    subs__.addSub(ref526.addEventListener('change', function(_, ref, val) {
      node695.attr('width', val);
    }));
    
  }
  subs__.addSub(ref526.rebind());
  
  var ref527 = height;
  if(ref527.get() !== null) {
    node695.attr('height', ref527.get());
    subs__.addSub(ref527.addEventListener('change', function(_, ref, val) {
      node695.attr('height', val);
    }));
    
  }
  subs__.addSub(ref527.rebind());
  
  var ref528 = style;
  if(ref528.get() !== null) {
    node695.attr('class', ref528.get());
    subs__.addSub(ref528.addEventListener('change', function(_, ref, val) {
      node695.attr('class', val);
    }));
    
  }
  subs__.addSub(ref528.rebind());
  
  var val195 = onclick.get();
  if(val195 !== null) {
    subs__.addSub(mobl.domBind(node695, 'tap', val195));
  }
  
  var ref529 = valign;
  if(ref529.get() !== null) {
    node695.attr('valign', ref529.get());
    subs__.addSub(ref529.addEventListener('change', function(_, ref, val) {
      node695.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref529.rebind());
  
  var ref530 = align;
  if(ref530.get() !== null) {
    node695.attr('align', ref530.get());
    subs__.addSub(ref530.addEventListener('change', function(_, ref, val) {
      node695.attr('align', val);
    }));
    
  }
  subs__.addSub(ref530.rebind());
  
  root11240.append(node695);
  callback(root11240); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root11241 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref531 = mobl.ref(ui.itemStyle);
  if(ref531.get() !== null) {
    el.attr('class', ref531.get());
    subs__.addSub(ref531.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref531.rebind());
  
  var ref532 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref532.get() !== null) {
    el.attr('class', ref532.get());
    subs__.addSub(ref532.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref532.rebind());
  
  var val196 = onswipe.get();
  if(val196 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val196));
  }
  
  var val197 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp10127 = result__;
                                           function after28(result__) {
                                             var tmp10128 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after28);if(result__ !== undefined) after28(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp10129 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val197 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val197));
  }
  
  var nodes10269 = $("<span>");
  el.append(nodes10269);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl142();
  }));
  
  function renderControl142() {
    subs__.addSub((elements)(function(elements, callback) {
      var root11242 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11242); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10269;
      nodes10269 = node.contents();
      oldNodes.replaceWith(nodes10269);
    }));
  }
  renderControl142();
  root11241.append(el);
  callback(root11241); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root11243 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node696 = $("<input>");
  node696.attr('type', "checkbox");
  
  var ref534 = b;
  node696.attr('checked', !!ref534.get());
  subs__.addSub(ref534.addEventListener('change', function(_, ref, val) {
    if(ref === ref534) node696.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node696, 'change', function() {
    b.set(!!node696.attr('checked'));
  }));
  
  var val199 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val199 !== null) {
    subs__.addSub(mobl.domBind(node696, 'tap', val199));
  }
  
  var val200 = onchange.get();
  if(val200 !== null) {
    subs__.addSub(mobl.domBind(node696, 'change', val200));
  }
  
  root11243.append(node696);
  
  root11243.append(" ");
  
  var node697 = $("<span>");
  
  var ref533 = label;
  node697.text(""+ref533.get());
  var ignore117 = false;
  subs__.addSub(ref533.addEventListener('change', function(_, ref, val) {
    if(ignore117) return;
    node697.text(""+val);
  }));
  subs__.addSub(ref533.rebind());
  
  
  var val198 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after29(result__) {
                    var tmp10130 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after29);if(result__ !== undefined) after29(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val198 !== null) {
    subs__.addSub(mobl.domBind(node697, 'tap', val198));
  }
  
  root11243.append(node697);
  callback(root11243); return subs__;
  
  
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
  var root11244 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node698 = $("<span>");
  root11244.append(node698);
  var condSubs281 = new mobl.CompSubscription();
  subs__.addSub(condSubs281);
  var oldValue281;
  var renderCond281 = function() {
    var value465 = label.get();
    if(oldValue281 === value465) return;
    oldValue281 = value465;
    var subs__ = condSubs281;
    subs__.unsubscribe();
    node698.empty();
    if(value465) {
      var nodes10270 = $("<span>");
      node698.append(nodes10270);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root11245 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11245); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10270;
        nodes10270 = node.contents();
        oldNodes.replaceWith(nodes10270);
      }));
      
      
    } else {
      
    }
  };
  renderCond281();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond281();
  }));
  
  
  var node699 = $("<span>");
  root11244.append(node699);
  var condSubs282 = new mobl.CompSubscription();
  subs__.addSub(condSubs282);
  var oldValue282;
  var renderCond282 = function() {
    var value466 = validator.get();
    if(oldValue282 === value466) return;
    oldValue282 = value466;
    var subs__ = condSubs282;
    subs__.unsubscribe();
    node699.empty();
    if(value466) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after33(result__) {
        var tmp10131 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp10132 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node700 = $("<input>");
        
        var ref535 = inputType;
        if(ref535.get() !== null) {
          node700.attr('type', ref535.get());
          subs__.addSub(ref535.addEventListener('change', function(_, ref, val) {
            node700.attr('type', val);
          }));
          
        }
        subs__.addSub(ref535.rebind());
        
        var ref536 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref536.get() !== null) {
          node700.attr('class', ref536.get());
          subs__.addSub(ref536.addEventListener('change', function(_, ref, val) {
            node700.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node700.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node700.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node700.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref536.rebind());
        
        var ref537 = placeholder;
        if(ref537.get() !== null) {
          node700.attr('placeholder', ref537.get());
          subs__.addSub(ref537.addEventListener('change', function(_, ref, val) {
            node700.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref537.rebind());
        
        var ref538 = temp;
        node700.val(""+ref538.get());
        var ignore118 = false;
        subs__.addSub(ref538.addEventListener('change', function(_, ref, val) {
          if(ignore118) return;
          node700.val(""+val);
        }));
        subs__.addSub(ref538.rebind());
        
        subs__.addSub(mobl.domBind(node700, 'keyup change', function() {
          ignore118 = true;
          temp.set(mobl.stringTomobl__String(node700.val()));
          ignore118 = false;
        }));
        
        
        var val201 = onchange.get();
        if(val201 !== null) {
          subs__.addSub(mobl.domBind(node700, 'change', val201));
        }
        
        var val202 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after30(result__) {
                          var tmp10133 = result__;
                          function after31(result__) {
                            var tmp10134 = result__;
                            var result__ = tmp10134;
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
                          var result__ = validator.get()(temp.get(), after31);if(result__ !== undefined) after31(result__);
                        }
                        var result__ = onkeyup.get()(event, after30);if(result__ !== undefined) after30(result__);
                      } else {
                        {
                          function after32(result__) {
                            var tmp10134 = result__;
                            var result__ = tmp10134;
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
                          var result__ = validator.get()(temp.get(), after32);if(result__ !== undefined) after32(result__);
                        }
                      }
                    };
        if(val202 !== null) {
          subs__.addSub(mobl.domBind(node700, 'keyup', val202));
        }
        
        var val203 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val203 !== null) {
          subs__.addSub(mobl.domBind(node700, 'blur', val203));
        }
        
        node699.append(node700);
        var nodes10271 = $("<span>");
        node699.append(nodes10271);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root11246 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root11246); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes10271;
          nodes10271 = node.contents();
          oldNodes.replaceWith(nodes10271);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after33);if(result__ !== undefined) after33(result__);
    } else {
      
      var node701 = $("<input>");
      
      var ref539 = inputType;
      if(ref539.get() !== null) {
        node701.attr('type', ref539.get());
        subs__.addSub(ref539.addEventListener('change', function(_, ref, val) {
          node701.attr('type', val);
        }));
        
      }
      subs__.addSub(ref539.rebind());
      
      var ref540 = style;
      if(ref540.get() !== null) {
        node701.attr('class', ref540.get());
        subs__.addSub(ref540.addEventListener('change', function(_, ref, val) {
          node701.attr('class', val);
        }));
        
      }
      subs__.addSub(ref540.rebind());
      
      var ref541 = placeholder;
      if(ref541.get() !== null) {
        node701.attr('placeholder', ref541.get());
        subs__.addSub(ref541.addEventListener('change', function(_, ref, val) {
          node701.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref541.rebind());
      
      var ref542 = s;
      node701.val(""+ref542.get());
      var ignore119 = false;
      subs__.addSub(ref542.addEventListener('change', function(_, ref, val) {
        if(ignore119) return;
        node701.val(""+val);
      }));
      subs__.addSub(ref542.rebind());
      
      subs__.addSub(mobl.domBind(node701, 'keyup change', function() {
        ignore119 = true;
        s.set(mobl.stringTomobl__String(node701.val()));
        ignore119 = false;
      }));
      
      
      var val204 = onchange.get();
      if(val204 !== null) {
        subs__.addSub(mobl.domBind(node701, 'change', val204));
      }
      
      var val205 = onkeyup.get();
      if(val205 !== null) {
        subs__.addSub(mobl.domBind(node701, 'keyup', val205));
      }
      
      var val206 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val206 !== null) {
        subs__.addSub(mobl.domBind(node701, 'blur', val206));
      }
      
      node699.append(node701);
      
      
    }
  };
  renderCond282();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond282();
  }));
  
  callback(root11244); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root11247 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes10272 = $("<span>");
  root11247.append(nodes10272);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root11248 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root11248); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes10272;
    nodes10272 = node.contents();
    oldNodes.replaceWith(nodes10272);
  }));
  callback(root11247); return subs__;
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root11249 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes10273 = $("<span>");
  root11249.append(nodes10273);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root11250 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root11250); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes10273;
    nodes10273 = node.contents();
    oldNodes.replaceWith(nodes10273);
  }));
  callback(root11249); return subs__;
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root11251 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node702 = $("<span>");
  root11251.append(node702);
  var condSubs283 = new mobl.CompSubscription();
  subs__.addSub(condSubs283);
  var oldValue283;
  var renderCond283 = function() {
    var value467 = label.get();
    if(oldValue283 === value467) return;
    oldValue283 = value467;
    var subs__ = condSubs283;
    subs__.unsubscribe();
    node702.empty();
    if(value467) {
      var nodes10274 = $("<span>");
      node702.append(nodes10274);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root11252 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11252); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10274;
        nodes10274 = node.contents();
        oldNodes.replaceWith(nodes10274);
      }));
      
      
    } else {
      
    }
  };
  renderCond283();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond283();
  }));
  
  
  var node703 = $("<input>");
  node703.attr('type', "range");
  
  var ref543 = n;
  node703.val(""+ref543.get());
  var ignore120 = false;
  subs__.addSub(ref543.addEventListener('change', function(_, ref, val) {
    if(ignore120) return;
    node703.val(""+val);
  }));
  subs__.addSub(ref543.rebind());
  
  subs__.addSub(mobl.domBind(node703, 'keyup change', function() {
    ignore120 = true;
    n.set(mobl.stringTomobl__Num(node703.val()));
    ignore120 = false;
  }));
  
  
  var ref544 = min;
  if(ref544.get() !== null) {
    node703.attr('min', ref544.get());
    subs__.addSub(ref544.addEventListener('change', function(_, ref, val) {
      node703.attr('min', val);
    }));
    
  }
  subs__.addSub(ref544.rebind());
  
  var ref545 = max;
  if(ref545.get() !== null) {
    node703.attr('max', ref545.get());
    subs__.addSub(ref545.addEventListener('change', function(_, ref, val) {
      node703.attr('max', val);
    }));
    
  }
  subs__.addSub(ref545.rebind());
  
  var ref546 = step;
  if(ref546.get() !== null) {
    node703.attr('step', ref546.get());
    subs__.addSub(ref546.addEventListener('change', function(_, ref, val) {
      node703.attr('step', val);
    }));
    
  }
  subs__.addSub(ref546.rebind());
  node703.attr('style', "width: 99%;");
  
  var val207 = onchange.get();
  if(val207 !== null) {
    subs__.addSub(mobl.domBind(node703, 'change', val207));
  }
  
  var val208 = onkeyup.get();
  if(val208 !== null) {
    subs__.addSub(mobl.domBind(node703, 'keyup', val208));
  }
  
  var ref547 = placeholder;
  if(ref547.get() !== null) {
    node703.attr('placeholder', ref547.get());
    subs__.addSub(ref547.addEventListener('change', function(_, ref, val) {
      node703.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref547.rebind());
  
  root11251.append(node703);
  callback(root11251); return subs__;
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root11253 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after34(result__) {
      var tmp10135 = result__;
      var result__ = tmp10135;
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
    var result__ = validator.get()(n2, after34);if(result__ !== undefined) after34(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes10275 = $("<span>");
  root11253.append(nodes10275);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root11254 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root11254); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes10275;
    nodes10275 = node.contents();
    oldNodes.replaceWith(nodes10275);
  }));
  callback(root11253); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root11255 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node704 = $("<span>");
  root11255.append(node704);
  var condSubs284 = new mobl.CompSubscription();
  subs__.addSub(condSubs284);
  var oldValue284;
  var renderCond284 = function() {
    var value468 = label.get();
    if(oldValue284 === value468) return;
    oldValue284 = value468;
    var subs__ = condSubs284;
    subs__.unsubscribe();
    node704.empty();
    if(value468) {
      
      var node705 = $("<span>");
      node705.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref551 = label;
      node705.text(""+ref551.get());
      var ignore122 = false;
      subs__.addSub(ref551.addEventListener('change', function(_, ref, val) {
        if(ignore122) return;
        node705.text(""+val);
      }));
      subs__.addSub(ref551.rebind());
      
      
      node704.append(node705);
      
      var node706 = $("<span>");
      node706.attr('style', "float: left");
      
      
      var node707 = $("<input>");
      node707.attr('type', "password");
      
      var ref548 = style;
      if(ref548.get() !== null) {
        node707.attr('class', ref548.get());
        subs__.addSub(ref548.addEventListener('change', function(_, ref, val) {
          node707.attr('class', val);
        }));
        
      }
      subs__.addSub(ref548.rebind());
      
      var ref549 = placeholder;
      if(ref549.get() !== null) {
        node707.attr('placeholder', ref549.get());
        subs__.addSub(ref549.addEventListener('change', function(_, ref, val) {
          node707.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref549.rebind());
      
      var ref550 = s;
      node707.val(""+ref550.get());
      var ignore121 = false;
      subs__.addSub(ref550.addEventListener('change', function(_, ref, val) {
        if(ignore121) return;
        node707.val(""+val);
      }));
      subs__.addSub(ref550.rebind());
      
      subs__.addSub(mobl.domBind(node707, 'keyup change', function() {
        ignore121 = true;
        s.set(mobl.stringTomobl__String(node707.val()));
        ignore121 = false;
      }));
      
      
      var val209 = onchange.get();
      if(val209 !== null) {
        subs__.addSub(mobl.domBind(node707, 'change', val209));
      }
      
      var val210 = onkeyup.get();
      if(val210 !== null) {
        subs__.addSub(mobl.domBind(node707, 'keyup', val210));
      }
      
      var val211 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val211 !== null) {
        subs__.addSub(mobl.domBind(node707, 'blur', val211));
      }
      
      node706.append(node707);
      node704.append(node706);
      
      
      
      
    } else {
      
      var node708 = $("<input>");
      node708.attr('type', "password");
      
      var ref552 = style;
      if(ref552.get() !== null) {
        node708.attr('class', ref552.get());
        subs__.addSub(ref552.addEventListener('change', function(_, ref, val) {
          node708.attr('class', val);
        }));
        
      }
      subs__.addSub(ref552.rebind());
      
      var ref553 = placeholder;
      if(ref553.get() !== null) {
        node708.attr('placeholder', ref553.get());
        subs__.addSub(ref553.addEventListener('change', function(_, ref, val) {
          node708.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref553.rebind());
      
      var ref554 = s;
      node708.val(""+ref554.get());
      var ignore123 = false;
      subs__.addSub(ref554.addEventListener('change', function(_, ref, val) {
        if(ignore123) return;
        node708.val(""+val);
      }));
      subs__.addSub(ref554.rebind());
      
      subs__.addSub(mobl.domBind(node708, 'keyup change', function() {
        ignore123 = true;
        s.set(mobl.stringTomobl__String(node708.val()));
        ignore123 = false;
      }));
      
      
      var val212 = onchange.get();
      if(val212 !== null) {
        subs__.addSub(mobl.domBind(node708, 'change', val212));
      }
      
      var val213 = onkeyup.get();
      if(val213 !== null) {
        subs__.addSub(mobl.domBind(node708, 'keyup', val213));
      }
      
      var val214 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val214 !== null) {
        subs__.addSub(mobl.domBind(node708, 'blur', val214));
      }
      
      node704.append(node708);
      
      
    }
  };
  renderCond284();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond284();
  }));
  
  callback(root11255); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root11256 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref559 = style;
  if(ref559.get() !== null) {
    sel.attr('class', ref559.get());
    subs__.addSub(ref559.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref559.rebind());
  
  var val215 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after35(result__) {
                    var tmp10137 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after35);if(result__ !== undefined) after35(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val215 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val215));
  }
  
  
  var node709 = mobl.loadingSpan();
  sel.append(node709);
  var list30;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList30 = function() {
    var subs__ = listSubs__;
    list30 = options.get();
    list30.list(function(results30) {
      node709.empty();
      for(var i2394 = 0; i2394 < results30.length; i2394++) {
        (function() {
          var iternode30 = $("<span>");
          node709.append(iternode30);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results30), i2394), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results30), i2394), "_2");
          
          var node710 = $("<option>");
          
          var ref555 = optionDescription;
          node710.text(""+ref555.get());
          var ignore124 = false;
          subs__.addSub(ref555.addEventListener('change', function(_, ref, val) {
            if(ignore124) return;
            node710.text(""+val);
          }));
          subs__.addSub(ref555.rebind());
          
          
          var ref556 = optionStyle;
          if(ref556.get() !== null) {
            node710.attr('class', ref556.get());
            subs__.addSub(ref556.addEventListener('change', function(_, ref, val) {
              node710.attr('class', val);
            }));
            
          }
          subs__.addSub(ref556.rebind());
          
          var ref557 = optionValue;
          if(ref557.get() !== null) {
            node710.attr('value', ref557.get());
            subs__.addSub(ref557.addEventListener('change', function(_, ref, val) {
              node710.attr('value', val);
            }));
            
          }
          subs__.addSub(ref557.rebind());
          
          var ref558 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref558.get() !== null) {
            node710.attr('selected', ref558.get());
            subs__.addSub(ref558.addEventListener('change', function(_, ref, val) {
              node710.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node710.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node710.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref558.rebind());
          
          iternode30.append(node710);
          
          var oldNodes = iternode30;
          iternode30 = iternode30.contents();
          oldNodes.replaceWith(iternode30);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list30.addEventListener('change', function() { listSubs__.unsubscribe(); renderList30(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList30(true); }));
    });
  };
  renderList30();
  
  root11256.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root11256); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root11257 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes10276 = $("<span>");
    root11257.append(nodes10276);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root11258 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node711 = mobl.loadingSpan();
      root11258.append(node711);
      var list31;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList31 = function() {
        var subs__ = listSubs__;
        list31 = tabs.get();
        list31.list(function(results31) {
          node711.empty();
          for(var i2395 = 0; i2395 < results31.length; i2395++) {
            (function() {
              var iternode31 = $("<span>");
              node711.append(iternode31);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results31), i2395), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results31), i2395), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results31), i2395), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp10092 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp10092.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp10092.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp10092.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp10092.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp10091 = mobl.ref(result__);
              
              var nodes10277 = $("<span>");
              iternode31.append(nodes10277);
              subs__.addSub((mobl.span)(tmp10092, mobl.ref(null), tmp10091, mobl.ref(null), function(_, callback) {
                var root11259 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes10278 = $("<span>");
                root11259.append(nodes10278);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root11260 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root11260); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes10278;
                  nodes10278 = node.contents();
                  oldNodes.replaceWith(nodes10278);
                }));
                callback(root11259); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes10277;
                nodes10277 = node.contents();
                oldNodes.replaceWith(nodes10277);
              }));
              
              var oldNodes = iternode31;
              iternode31 = iternode31.contents();
              oldNodes.replaceWith(iternode31);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list31.addEventListener('change', function() { listSubs__.unsubscribe(); renderList31(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList31(true); }));
        });
      };
      renderList31();
      
      callback(root11258); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes10276;
      nodes10276 = node.contents();
      oldNodes.replaceWith(nodes10276);
    }));
    
    var node712 = mobl.loadingSpan();
    root11257.append(node712);
    var list32;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList32 = function() {
      var subs__ = listSubs__;
      list32 = tabs.get();
      list32.list(function(results32) {
        node712.empty();
        for(var i2396 = 0; i2396 < results32.length; i2396++) {
          (function() {
            var iternode32 = $("<span>");
            node712.append(iternode32);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results32), i2396), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results32), i2396), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results32), i2396), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp10093 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp10093.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp10093.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp10093.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp10093.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes10279 = $("<span>");
            iternode32.append(nodes10279);
            subs__.addSub((mobl.block)(tmp10093, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root11261 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes10280 = $("<span>");
              root11261.append(nodes10280);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root11262 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes10281 = $("<span>");
                root11262.append(nodes10281);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl143();
                }));
                
                function renderControl143() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root11263 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root11263); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes10281;
                    nodes10281 = node.contents();
                    oldNodes.replaceWith(nodes10281);
                  }));
                }
                renderControl143();
                callback(root11262); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes10280;
                nodes10280 = node.contents();
                oldNodes.replaceWith(nodes10280);
              }));
              callback(root11261); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes10279;
              nodes10279 = node.contents();
              oldNodes.replaceWith(nodes10279);
            }));
            
            var oldNodes = iternode32;
            iternode32 = iternode32.contents();
            oldNodes.replaceWith(iternode32);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list32.addEventListener('change', function() { listSubs__.unsubscribe(); renderList32(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList32(true); }));
      });
    };
    renderList32();
    
    callback(root11257); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes10276 = $("<span>");
      root11257.append(nodes10276);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root11258 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node711 = mobl.loadingSpan();
        root11258.append(node711);
        var list31;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList31 = function() {
          var subs__ = listSubs__;
          list31 = tabs.get();
          list31.list(function(results31) {
            node711.empty();
            for(var i2395 = 0; i2395 < results31.length; i2395++) {
              (function() {
                var iternode31 = $("<span>");
                node711.append(iternode31);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results31), i2395), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results31), i2395), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results31), i2395), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp10092 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp10092.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp10092.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp10092.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp10092.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp10091 = mobl.ref(result__);
                
                var nodes10277 = $("<span>");
                iternode31.append(nodes10277);
                subs__.addSub((mobl.span)(tmp10092, mobl.ref(null), tmp10091, mobl.ref(null), function(_, callback) {
                  var root11259 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes10278 = $("<span>");
                  root11259.append(nodes10278);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root11260 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root11260); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes10278;
                    nodes10278 = node.contents();
                    oldNodes.replaceWith(nodes10278);
                  }));
                  callback(root11259); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes10277;
                  nodes10277 = node.contents();
                  oldNodes.replaceWith(nodes10277);
                }));
                
                var oldNodes = iternode31;
                iternode31 = iternode31.contents();
                oldNodes.replaceWith(iternode31);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list31.addEventListener('change', function() { listSubs__.unsubscribe(); renderList31(true); }));
            subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList31(true); }));
          });
        };
        renderList31();
        
        callback(root11258); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes10276;
        nodes10276 = node.contents();
        oldNodes.replaceWith(nodes10276);
      }));
      
      var node712 = mobl.loadingSpan();
      root11257.append(node712);
      var list32;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList32 = function() {
        var subs__ = listSubs__;
        list32 = tabs.get();
        list32.list(function(results32) {
          node712.empty();
          for(var i2396 = 0; i2396 < results32.length; i2396++) {
            (function() {
              var iternode32 = $("<span>");
              node712.append(iternode32);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results32), i2396), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results32), i2396), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results32), i2396), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp10093 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp10093.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp10093.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp10093.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp10093.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes10279 = $("<span>");
              iternode32.append(nodes10279);
              subs__.addSub((mobl.block)(tmp10093, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root11261 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes10280 = $("<span>");
                root11261.append(nodes10280);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root11262 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes10281 = $("<span>");
                  root11262.append(nodes10281);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl143();
                  }));
                  
                  function renderControl143() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root11263 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root11263); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes10281;
                      nodes10281 = node.contents();
                      oldNodes.replaceWith(nodes10281);
                    }));
                  }
                  renderControl143();
                  callback(root11262); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes10280;
                  nodes10280 = node.contents();
                  oldNodes.replaceWith(nodes10280);
                }));
                callback(root11261); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes10279;
                nodes10279 = node.contents();
                oldNodes.replaceWith(nodes10279);
              }));
              
              var oldNodes = iternode32;
              iternode32 = iternode32.contents();
              oldNodes.replaceWith(iternode32);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list32.addEventListener('change', function() { listSubs__.unsubscribe(); renderList32(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList32(true); }));
        });
      };
      renderList32();
      
      callback(root11257); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root11264 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node713 = $("<div>");
  
  var ref563 = mobl.ref(ui.searchboxStyle);
  if(ref563.get() !== null) {
    node713.attr('class', ref563.get());
    subs__.addSub(ref563.addEventListener('change', function(_, ref, val) {
      node713.attr('class', val);
    }));
    
  }
  subs__.addSub(ref563.rebind());
  
  
  var node714 = $("<input>");
  node714.attr('type', "search");
  
  var ref560 = mobl.ref(ui.searchBoxInputStyle);
  if(ref560.get() !== null) {
    node714.attr('class', ref560.get());
    subs__.addSub(ref560.addEventListener('change', function(_, ref, val) {
      node714.attr('class', val);
    }));
    
  }
  subs__.addSub(ref560.rebind());
  
  var ref561 = placeholder;
  if(ref561.get() !== null) {
    node714.attr('placeholder', ref561.get());
    subs__.addSub(ref561.addEventListener('change', function(_, ref, val) {
      node714.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref561.rebind());
  
  var ref562 = s;
  node714.val(""+ref562.get());
  var ignore125 = false;
  subs__.addSub(ref562.addEventListener('change', function(_, ref, val) {
    if(ignore125) return;
    node714.val(""+val);
  }));
  subs__.addSub(ref562.rebind());
  
  subs__.addSub(mobl.domBind(node714, 'keyup change', function() {
    ignore125 = true;
    s.set(mobl.stringTomobl__String(node714.val()));
    ignore125 = false;
  }));
  
  
  var val216 = onsearch.get();
  if(val216 !== null) {
    subs__.addSub(mobl.domBind(node714, 'change', val216));
  }
  
  var val217 = onkeyup.get();
  if(val217 !== null) {
    subs__.addSub(mobl.domBind(node714, 'keyup', val217));
  }
  node714.attr('autocorrect', false);
  node714.attr('autocapitalize', false);
  node714.attr('autocomplete', false);
  
  node713.append(node714);
  root11264.append(node713);
  callback(root11264); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root11265 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref564 = mobl.ref(ui.contextMenuStyle);
  if(ref564.get() !== null) {
    menu.attr('class', ref564.get());
    subs__.addSub(ref564.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref564.rebind());
  
  var nodes10282 = $("<span>");
  menu.append(nodes10282);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl144();
  }));
  
  function renderControl144() {
    subs__.addSub((elements)(function(elements, callback) {
      var root11266 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11266); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10282;
      nodes10282 = node.contents();
      oldNodes.replaceWith(nodes10282);
    }));
  }
  renderControl144();
  root11265.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val218 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp10140 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val218 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val218));
  }
  
  root11265.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root11265); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root11267 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp10124 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp10124.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node715 = $("<span>");
  root11267.append(node715);
  var condSubs285 = new mobl.CompSubscription();
  subs__.addSub(condSubs285);
  var oldValue285;
  var renderCond285 = function() {
    var value469 = tmp10124.get();
    if(oldValue285 === value469) return;
    oldValue285 = value469;
    var subs__ = condSubs285;
    subs__.unsubscribe();
    node715.empty();
    if(value469) {
      items.get().one(function(result__) {
        var tmp10141 = result__;
        var current = mobl.ref(result__);
        
        var node716 = $("<div>");
        node716.attr('width', "100%");
        
        
        var node717 = $("<div>");
        node717.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes10285 = $("<span>");
        node717.append(nodes10285);
        subs__.addSub((ui.group)(function(_, callback) {
          var root11270 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node720 = mobl.loadingSpan();
          root11270.append(node720);
          var list33;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList33 = function() {
            var subs__ = listSubs__;
            list33 = items.get();
            list33.list(function(results33) {
              node720.empty();
              for(var i2397 = 0; i2397 < results33.length; i2397++) {
                (function() {
                  var iternode33 = $("<span>");
                  node720.append(iternode33);
                  var it;
                  it = mobl.ref(mobl.ref(results33), i2397);
                  var result__ = it.get() == current.get();
                  var tmp10099 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp10099.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp10099.set(it.get() == current.get());
                  }));
                  
                  
                  var node721 = $("<span>");
                  iternode33.append(node721);
                  var condSubs287 = new mobl.CompSubscription();
                  subs__.addSub(condSubs287);
                  var oldValue287;
                  var renderCond287 = function() {
                    var value471 = tmp10099.get();
                    if(oldValue287 === value471) return;
                    oldValue287 = value471;
                    var subs__ = condSubs287;
                    subs__.unsubscribe();
                    node721.empty();
                    if(value471) {
                      var nodes10286 = $("<span>");
                      node721.append(nodes10286);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root11271 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes10287 = $("<span>");
                        root11271.append(nodes10287);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl146();
                        }));
                        
                        function renderControl146() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root11272 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root11272); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes10287;
                            nodes10287 = node.contents();
                            oldNodes.replaceWith(nodes10287);
                          }));
                        }
                        renderControl146();
                        callback(root11271); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes10286;
                        nodes10286 = node.contents();
                        oldNodes.replaceWith(nodes10286);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp10098 = mobl.ref(result__);
                      
                      var nodes10288 = $("<span>");
                      node721.append(nodes10288);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10098, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root11273 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes10289 = $("<span>");
                        root11273.append(nodes10289);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl147();
                        }));
                        
                        function renderControl147() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root11274 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root11274); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes10289;
                            nodes10289 = node.contents();
                            oldNodes.replaceWith(nodes10289);
                          }));
                        }
                        renderControl147();
                        callback(root11273); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes10288;
                        nodes10288 = node.contents();
                        oldNodes.replaceWith(nodes10288);
                      }));
                      
                      
                    }
                  };
                  renderCond287();
                  subs__.addSub(tmp10099.addEventListener('change', function() {
                    renderCond287();
                  }));
                  
                  
                  var oldNodes = iternode33;
                  iternode33 = iternode33.contents();
                  oldNodes.replaceWith(iternode33);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list33.addEventListener('change', function() { listSubs__.unsubscribe(); renderList33(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList33(true); }));
            });
          };
          renderList33();
          
          callback(root11270); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes10285;
          nodes10285 = node.contents();
          oldNodes.replaceWith(nodes10285);
        }));
        node716.append(node717);
        
        var node718 = $("<div>");
        node718.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node719 = $("<span>");
        node718.append(node719);
        var condSubs286 = new mobl.CompSubscription();
        subs__.addSub(condSubs286);
        var oldValue286;
        var renderCond286 = function() {
          var value470 = current.get();
          if(oldValue286 === value470) return;
          oldValue286 = value470;
          var subs__ = condSubs286;
          subs__.unsubscribe();
          node719.empty();
          if(value470) {
            var nodes10283 = $("<span>");
            node719.append(nodes10283);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl145();
            }));
            
            function renderControl145() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root11268 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root11268); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes10283;
                nodes10283 = node.contents();
                oldNodes.replaceWith(nodes10283);
              }));
            }
            renderControl145();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp10100 = mobl.ref(result__);
            
            var nodes10284 = $("<span>");
            node719.append(nodes10284);
            subs__.addSub((mobl.label)(tmp10100, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root11269 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root11269); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes10284;
              nodes10284 = node.contents();
              oldNodes.replaceWith(nodes10284);
            }));
            
            
          }
        };
        renderCond286();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond286();
        }));
        
        node716.append(node718);
        node715.append(node716);
        
        
        
        
        
        
      });
    } else {
      var nodes10290 = $("<span>");
      node715.append(nodes10290);
      subs__.addSub((ui.group)(function(_, callback) {
        var root11275 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node722 = mobl.loadingSpan();
        root11275.append(node722);
        var list34;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList34 = function() {
          var subs__ = listSubs__;
          list34 = items.get();
          list34.list(function(results34) {
            node722.empty();
            for(var i2398 = 0; i2398 < results34.length; i2398++) {
              (function() {
                var iternode34 = $("<span>");
                node722.append(iternode34);
                var it;
                it = mobl.ref(mobl.ref(results34), i2398);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp10142 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp10094 = mobl.ref(result__);
                
                var nodes10291 = $("<span>");
                iternode34.append(nodes10291);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10094, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root11276 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes10292 = $("<span>");
                  root11276.append(nodes10292);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl148();
                  }));
                  
                  function renderControl148() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root11277 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root11277); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes10292;
                      nodes10292 = node.contents();
                      oldNodes.replaceWith(nodes10292);
                    }));
                  }
                  renderControl148();
                  callback(root11276); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes10291;
                  nodes10291 = node.contents();
                  oldNodes.replaceWith(nodes10291);
                }));
                
                var oldNodes = iternode34;
                iternode34 = iternode34.contents();
                oldNodes.replaceWith(iternode34);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list34.addEventListener('change', function() { listSubs__.unsubscribe(); renderList34(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList34(true); }));
          });
        };
        renderList34();
        
        callback(root11275); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes10290;
        nodes10290 = node.contents();
        oldNodes.replaceWith(nodes10290);
      }));
      
      
    }
  };
  renderCond285();
  subs__.addSub(tmp10124.addEventListener('change', function() {
    renderCond285();
  }));
  
  callback(root11267); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root11278 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp10097 = mobl.ref(result__);
  
  var nodes10293 = $("<span>");
  root11278.append(nodes10293);
  subs__.addSub((ui.header)(tmp10097, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root11279 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp10096 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp10095 = mobl.ref(result__);
    
    var nodes10294 = $("<span>");
    root11279.append(nodes10294);
    subs__.addSub((ui.backButton)(tmp10095, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp10096, function(_, callback) {
      var root11280 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11280); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10294;
      nodes10294 = node.contents();
      oldNodes.replaceWith(nodes10294);
    }));
    callback(root11279); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10293;
    nodes10293 = node.contents();
    oldNodes.replaceWith(nodes10293);
  }));
  var nodes10295 = $("<span>");
  root11278.append(nodes10295);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl149();
  }));
  
  function renderControl149() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root11281 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11281); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10295;
      nodes10295 = node.contents();
      oldNodes.replaceWith(nodes10295);
    }));
  }
  renderControl149();
  callback(root11278); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root11282 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes10296 = $("<span>");
  root11282.append(nodes10296);
  subs__.addSub((ui.group)(function(_, callback) {
    var root11283 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node723 = mobl.loadingSpan();
    root11283.append(node723);
    var list35;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList35 = function() {
      var subs__ = listSubs__;
      list35 = coll.get();
      list35.list(function(results35) {
        node723.empty();
        for(var i2399 = 0; i2399 < results35.length; i2399++) {
          (function() {
            var iternode35 = $("<span>");
            node723.append(iternode35);
            var it;
            it = mobl.ref(mobl.ref(results35), i2399);
            var result__ = it.get() == selected.get();
            var tmp10102 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp10102.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp10102.set(it.get() == selected.get());
            }));
            
            
            var node724 = $("<span>");
            iternode35.append(node724);
            var condSubs288 = new mobl.CompSubscription();
            subs__.addSub(condSubs288);
            var oldValue288;
            var renderCond288 = function() {
              var value472 = tmp10102.get();
              if(oldValue288 === value472) return;
              oldValue288 = value472;
              var subs__ = condSubs288;
              subs__.unsubscribe();
              node724.empty();
              if(value472) {
                var nodes10297 = $("<span>");
                node724.append(nodes10297);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root11284 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes10298 = $("<span>");
                  root11284.append(nodes10298);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl150();
                  }));
                  
                  function renderControl150() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root11285 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root11285); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes10298;
                      nodes10298 = node.contents();
                      oldNodes.replaceWith(nodes10298);
                    }));
                  }
                  renderControl150();
                  callback(root11284); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes10297;
                  nodes10297 = node.contents();
                  oldNodes.replaceWith(nodes10297);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp10101 = mobl.ref(result__);
                
                var nodes10299 = $("<span>");
                node724.append(nodes10299);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10101, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root11286 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes10300 = $("<span>");
                  root11286.append(nodes10300);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl151();
                  }));
                  
                  function renderControl151() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root11287 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root11287); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes10300;
                      nodes10300 = node.contents();
                      oldNodes.replaceWith(nodes10300);
                    }));
                  }
                  renderControl151();
                  callback(root11286); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes10299;
                  nodes10299 = node.contents();
                  oldNodes.replaceWith(nodes10299);
                }));
                
                
              }
            };
            renderCond288();
            subs__.addSub(tmp10102.addEventListener('change', function() {
              renderCond288();
            }));
            
            
            var oldNodes = iternode35;
            iternode35 = iternode35.contents();
            oldNodes.replaceWith(iternode35);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list35.addEventListener('change', function() { listSubs__.unsubscribe(); renderList35(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList35(true); }));
      });
    };
    renderList35();
    
    callback(root11283); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10296;
    nodes10296 = node.contents();
    oldNodes.replaceWith(nodes10296);
  }));
  callback(root11282); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root11288 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp10143 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp10103 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp10103.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp10103.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp10103.set(coll.get().limit(n.get()));
    }));
    
    
    var node725 = mobl.loadingSpan();
    root11288.append(node725);
    var list36;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList36 = function() {
      var subs__ = listSubs__;
      list36 = tmp10103.get();
      list36.list(function(results36) {
        node725.empty();
        for(var i2400 = 0; i2400 < results36.length; i2400++) {
          (function() {
            var iternode36 = $("<span>");
            node725.append(iternode36);
            var it;
            it = mobl.ref(mobl.ref(results36), i2400);
            var nodes10301 = $("<span>");
            iternode36.append(nodes10301);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl152();
            }));
            
            function renderControl152() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root11289 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root11289); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes10301;
                nodes10301 = node.contents();
                oldNodes.replaceWith(nodes10301);
              }));
            }
            renderControl152();
            
            var oldNodes = iternode36;
            iternode36 = iternode36.contents();
            oldNodes.replaceWith(iternode36);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list36.addEventListener('change', function() { listSubs__.unsubscribe(); renderList36(true); }));
        subs__.addSub(tmp10103.addEventListener('change', function() { listSubs__.unsubscribe(); renderList36(true); }));
      });
    };
    renderList36();
    
    var result__ = n.get() < total.get();
    var tmp10105 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp10105.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp10105.set(n.get() < total.get());
    }));
    
    
    var node726 = $("<span>");
    root11288.append(node726);
    var condSubs289 = new mobl.CompSubscription();
    subs__.addSub(condSubs289);
    var oldValue289;
    var renderCond289 = function() {
      var value473 = tmp10105.get();
      if(oldValue289 === value473) return;
      oldValue289 = value473;
      var subs__ = condSubs289;
      subs__.unsubscribe();
      node726.empty();
      if(value473) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp10104 = mobl.ref(result__);
        
        var nodes10302 = $("<span>");
        node726.append(nodes10302);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp10104, mobl.ref(null), function(_, callback) {
          var root11290 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes10303 = $("<span>");
          root11290.append(nodes10303);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root11291 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root11291); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes10303;
            nodes10303 = node.contents();
            oldNodes.replaceWith(nodes10303);
          }));
          callback(root11290); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes10302;
          nodes10302 = node.contents();
          oldNodes.replaceWith(nodes10302);
        }));
        
        
      } else {
        
      }
    };
    renderCond289();
    subs__.addSub(tmp10105.addEventListener('change', function() {
      renderCond289();
    }));
    
    callback(root11288); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root11292 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes10304 = $("<span>");
  root11292.append(nodes10304);
  subs__.addSub((ui.group)(function(_, callback) {
    var root11293 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node727 = mobl.loadingSpan();
    root11293.append(node727);
    var list37;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList37 = function() {
      var subs__ = listSubs__;
      list37 = items.get();
      list37.list(function(results37) {
        node727.empty();
        for(var i2401 = 0; i2401 < results37.length; i2401++) {
          (function() {
            var iternode37 = $("<span>");
            node727.append(iternode37);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results37), i2401), "_1");it = mobl.ref(mobl.ref(mobl.ref(results37), i2401), "_2");
            var nodes10305 = $("<span>");
            iternode37.append(nodes10305);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root11294 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes10306 = $("<span>");
              root11294.append(nodes10306);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root11295 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root11295); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes10306;
                nodes10306 = node.contents();
                oldNodes.replaceWith(nodes10306);
              }));
              callback(root11294); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes10305;
              nodes10305 = node.contents();
              oldNodes.replaceWith(nodes10305);
            }));
            
            var oldNodes = iternode37;
            iternode37 = iternode37.contents();
            oldNodes.replaceWith(iternode37);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list37.addEventListener('change', function() { listSubs__.unsubscribe(); renderList37(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList37(true); }));
      });
    };
    renderList37();
    
    callback(root11293); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10304;
    nodes10304 = node.contents();
    oldNodes.replaceWith(nodes10304);
  }));
  callback(root11292); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root11296 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll643) {
    coll643 = coll643.reverse();
    function processOne367() {
      var it;
      it = coll643.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll643.length > 0) processOne367(); else rest367();
      
    }
    function rest367() {
      var nodes10307 = $("<span>");
      root11296.append(nodes10307);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root11297 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp10106 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp10107 = mobl.ref(result__);
        
        var nodes10308 = $("<span>");
        root11297.append(nodes10308);
        subs__.addSub((ui.backButton)(tmp10107, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp10106, function(_, callback) {
          var root11298 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root11298); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes10308;
          nodes10308 = node.contents();
          oldNodes.replaceWith(nodes10308);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll642) {
                           coll642 = coll642.reverse();
                           function processOne366() {
                             var checked;var it;
                             var tmp10145 = coll642.pop();
                             checked = tmp10145._1;it = tmp10145._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll642.length > 0) processOne366(); else rest366();
                               
                             } else {
                               {
                                 
                                 if(coll642.length > 0) processOne366(); else rest366();
                                 
                               }
                             }
                           }
                           function rest366() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll642.length > 0) processOne366(); else rest366();
                         });
                         
                       };
        var tmp10108 = mobl.ref(result__);
        
        var nodes10309 = $("<span>");
        root11297.append(nodes10309);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp10108, function(_, callback) {
          var root11299 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root11299); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes10309;
          nodes10309 = node.contents();
          oldNodes.replaceWith(nodes10309);
        }));
        callback(root11297); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes10307;
        nodes10307 = node.contents();
        oldNodes.replaceWith(nodes10307);
      }));
      var nodes10310 = $("<span>");
      root11296.append(nodes10310);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root11300 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root11300); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes10310;
        nodes10310 = node.contents();
        oldNodes.replaceWith(nodes10310);
      }));
      callback(root11296); return subs__;
      
      
    }
    if(coll643.length > 0) processOne367(); else rest367();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root11301 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes10311 = $("<span>");
  root11301.append(nodes10311);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root11302 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root11302); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes10311;
    nodes10311 = node.contents();
    oldNodes.replaceWith(nodes10311);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp10109 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp10109.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp10109.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp10109.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp10109.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp10109.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes10312 = $("<span>");
  root11301.append(nodes10312);
  subs__.addSub((ui.masterDetail)(tmp10109, masterItem, detailItem, function(_, callback) {
    var root11303 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root11303); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes10312;
    nodes10312 = node.contents();
    oldNodes.replaceWith(nodes10312);
  }));
  callback(root11301); return subs__;
  
  
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
  var root11304 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes10313 = $("<span>");
  root11304.append(nodes10313);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root11305 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node728 = mobl.loadingSpan();
    root11305.append(node728);
    var list38;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList38 = function() {
      var subs__ = listSubs__;
      list38 = sections.get();
      list38.list(function(results38) {
        node728.empty();
        for(var i2402 = 0; i2402 < results38.length; i2402++) {
          (function() {
            var iternode38 = $("<span>");
            node728.append(iternode38);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results38), i2402), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results38), i2402), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp10111 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp10111.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp10111.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp10111.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp10111.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp10110 = mobl.ref(result__);
            
            var nodes10314 = $("<span>");
            iternode38.append(nodes10314);
            subs__.addSub((mobl.span)(tmp10111, mobl.ref(null), tmp10110, mobl.ref(null), function(_, callback) {
              var root11306 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes10315 = $("<span>");
              root11306.append(nodes10315);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root11307 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root11307); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes10315;
                nodes10315 = node.contents();
                oldNodes.replaceWith(nodes10315);
              }));
              callback(root11306); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes10314;
              nodes10314 = node.contents();
              oldNodes.replaceWith(nodes10314);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp10112 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp10112.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp10112.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp10112.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp10112.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes10316 = $("<span>");
            iternode38.append(nodes10316);
            subs__.addSub((mobl.block)(tmp10112, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root11308 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes10317 = $("<span>");
              root11308.append(nodes10317);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl153();
              }));
              
              function renderControl153() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root11309 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root11309); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes10317;
                  nodes10317 = node.contents();
                  oldNodes.replaceWith(nodes10317);
                }));
              }
              renderControl153();
              callback(root11308); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes10316;
              nodes10316 = node.contents();
              oldNodes.replaceWith(nodes10316);
            }));
            
            var oldNodes = iternode38;
            iternode38 = iternode38.contents();
            oldNodes.replaceWith(iternode38);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list38.addEventListener('change', function() { listSubs__.unsubscribe(); renderList38(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList38(true); }));
      });
    };
    renderList38();
    
    callback(root11305); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes10313;
    nodes10313 = node.contents();
    oldNodes.replaceWith(nodes10313);
  }));
  callback(root11304); return subs__;
  
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
  var root11310 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node729 = $("<table>");
  
  var ref565 = style;
  if(ref565.get() !== null) {
    node729.attr('class', ref565.get());
    subs__.addSub(ref565.addEventListener('change', function(_, ref, val) {
      node729.attr('class', val);
    }));
    
  }
  subs__.addSub(ref565.rebind());
  
  var nodes10318 = $("<span>");
  node729.append(nodes10318);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl154();
  }));
  
  function renderControl154() {
    subs__.addSub((elements)(function(elements, callback) {
      var root11311 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11311); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10318;
      nodes10318 = node.contents();
      oldNodes.replaceWith(nodes10318);
    }));
  }
  renderControl154();
  root11310.append(node729);
  callback(root11310); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root11312 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node730 = $("<tr>");
  
  var ref566 = style;
  if(ref566.get() !== null) {
    node730.attr('class', ref566.get());
    subs__.addSub(ref566.addEventListener('change', function(_, ref, val) {
      node730.attr('class', val);
    }));
    
  }
  subs__.addSub(ref566.rebind());
  
  var nodes10319 = $("<span>");
  node730.append(nodes10319);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl155();
  }));
  
  function renderControl155() {
    subs__.addSub((elements)(function(elements, callback) {
      var root11313 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11313); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10319;
      nodes10319 = node.contents();
      oldNodes.replaceWith(nodes10319);
    }));
  }
  renderControl155();
  root11312.append(node730);
  callback(root11312); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root11314 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node731 = $("<td>");
  
  var ref567 = width;
  if(ref567.get() !== null) {
    node731.attr('width', ref567.get());
    subs__.addSub(ref567.addEventListener('change', function(_, ref, val) {
      node731.attr('width', val);
    }));
    
  }
  subs__.addSub(ref567.rebind());
  
  var ref568 = style;
  if(ref568.get() !== null) {
    node731.attr('class', ref568.get());
    subs__.addSub(ref568.addEventListener('change', function(_, ref, val) {
      node731.attr('class', val);
    }));
    
  }
  subs__.addSub(ref568.rebind());
  
  var nodes10320 = $("<span>");
  node731.append(nodes10320);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl156();
  }));
  
  function renderControl156() {
    subs__.addSub((elements)(function(elements, callback) {
      var root11315 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11315); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10320;
      nodes10320 = node.contents();
      oldNodes.replaceWith(nodes10320);
    }));
  }
  renderControl156();
  root11314.append(node731);
  callback(root11314); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root11316 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node732 = $("<td>");
  
  var ref569 = width;
  if(ref569.get() !== null) {
    node732.attr('width', ref569.get());
    subs__.addSub(ref569.addEventListener('change', function(_, ref, val) {
      node732.attr('width', val);
    }));
    
  }
  subs__.addSub(ref569.rebind());
  
  var ref570 = style;
  if(ref570.get() !== null) {
    node732.attr('class', ref570.get());
    subs__.addSub(ref570.addEventListener('change', function(_, ref, val) {
      node732.attr('class', val);
    }));
    
  }
  subs__.addSub(ref570.rebind());
  
  var nodes10321 = $("<span>");
  node732.append(nodes10321);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl157();
  }));
  
  function renderControl157() {
    subs__.addSub((elements)(function(elements, callback) {
      var root11317 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11317); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10321;
      nodes10321 = node.contents();
      oldNodes.replaceWith(nodes10321);
    }));
  }
  renderControl157();
  root11316.append(node732);
  callback(root11316); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root11318 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node733 = $("<td>");
  
  var ref571 = width;
  if(ref571.get() !== null) {
    node733.attr('width', ref571.get());
    subs__.addSub(ref571.addEventListener('change', function(_, ref, val) {
      node733.attr('width', val);
    }));
    
  }
  subs__.addSub(ref571.rebind());
  
  var ref572 = style;
  if(ref572.get() !== null) {
    node733.attr('class', ref572.get());
    subs__.addSub(ref572.addEventListener('change', function(_, ref, val) {
      node733.attr('class', val);
    }));
    
  }
  subs__.addSub(ref572.rebind());
  
  
  var node734 = $("<strong>");
  
  var nodes10322 = $("<span>");
  node734.append(nodes10322);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl158();
  }));
  
  function renderControl158() {
    subs__.addSub((elements)(function(elements, callback) {
      var root11319 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11319); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10322;
      nodes10322 = node.contents();
      oldNodes.replaceWith(nodes10322);
    }));
  }
  renderControl158();
  node733.append(node734);
  root11318.append(node733);
  callback(root11318); return subs__;
  
  
  
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
  items.list(function(coll644) {
    coll644 = coll644.reverse();
    function processOne368() {
      var item;
      item = coll644.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = counter;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = counter + 1;
        counter = result__;
        
        if(coll644.length > 0) processOne368(); else rest368();
        
      } else {
        {
          var result__ = counter + 1;
          counter = result__;
          
          if(coll644.length > 0) processOne368(); else rest368();
          
        }
      }
    }
    function rest368() {
      var result__ = -1;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll644.length > 0) processOne368(); else rest368();
  });
  
};

ui.visible = mobl.ref(true);
ui.hideCurrent = function() {
   var __this = this;
  ui.visible.set(false);
};


ui.mMasterDetail = function(items, masterItem, detail, elements, callback) {
  var root11320 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp10125 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp10125.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node735 = $("<span>");
  root11320.append(node735);
  var condSubs290 = new mobl.CompSubscription();
  subs__.addSub(condSubs290);
  var oldValue290;
  var renderCond290 = function() {
    var value474 = tmp10125.get();
    if(oldValue290 === value474) return;
    oldValue290 = value474;
    var subs__ = condSubs290;
    subs__.unsubscribe();
    node735.empty();
    if(value474) {
      items.get().one(function(result__) {
        var tmp10147 = result__;
        var current = mobl.ref(result__);
        
        var node736 = $("<div>");
        node736.attr('width', "100%");
        
        
        var node737 = $("<div>");
        node737.attr('style', "float:left; width:45%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes10324 = $("<span>");
        node737.append(nodes10324);
        subs__.addSub((ui.group)(function(_, callback) {
          var root11322 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node740 = mobl.loadingSpan();
          root11322.append(node740);
          var list39;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList39 = function() {
            var subs__ = listSubs__;
            list39 = items.get();
            list39.list(function(results39) {
              node740.empty();
              for(var i2403 = 0; i2403 < results39.length; i2403++) {
                (function() {
                  var iternode39 = $("<span>");
                  node740.append(iternode39);
                  var it;
                  it = mobl.ref(mobl.ref(results39), i2403);
                  var result__ = it.get() == current.get();
                  var tmp10121 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp10121.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp10121.set(it.get() == current.get());
                  }));
                  
                  
                  var node741 = $("<span>");
                  iternode39.append(node741);
                  var condSubs292 = new mobl.CompSubscription();
                  subs__.addSub(condSubs292);
                  var oldValue292;
                  var renderCond292 = function() {
                    var value476 = tmp10121.get();
                    if(oldValue292 === value476) return;
                    oldValue292 = value476;
                    var subs__ = condSubs292;
                    subs__.unsubscribe();
                    node741.empty();
                    if(value476) {
                      var nodes10325 = $("<span>");
                      node741.append(nodes10325);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root11323 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp10153 = result__;
                          var tmp10118 = mobl.ref(result__);
                          subs__.addSub(it.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp10151 = result__;
                              var result__ = tmp10151;
                              tmp10118.set(result__);
                              
                            });
                          }));
                          subs__.addSub(items.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp10152 = result__;
                              var result__ = tmp10152;
                              tmp10118.set(result__);
                              
                            });
                          }));
                          
                          var nodes10326 = $("<span>");
                          root11323.append(nodes10326);
                          subs__.addSub(masterItem.addEventListener('change', function() {
                            renderControl160();
                          }));
                          
                          function renderControl160() {
                            subs__.addSub((masterItem.get())(it, tmp10118, function(elements, callback) {
                              var root11324 = $("<span>");
                              var subs__ = new mobl.CompSubscription();
                              callback(root11324); return subs__;
                              return subs__;
                            }, function(node) {
                              var oldNodes = nodes10326;
                              nodes10326 = node.contents();
                              oldNodes.replaceWith(nodes10326);
                            }));
                          }
                          renderControl160();
                          callback(root11323); return subs__;
                          
                        });
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes10325;
                        nodes10325 = node.contents();
                        oldNodes.replaceWith(nodes10325);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = true;
                                       ui.visible.set(result__);
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp10120 = mobl.ref(result__);
                      
                      var nodes10327 = $("<span>");
                      node741.append(nodes10327);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10120, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root11325 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp10156 = result__;
                          var tmp10119 = mobl.ref(result__);
                          subs__.addSub(it.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp10154 = result__;
                              var result__ = tmp10154;
                              tmp10119.set(result__);
                              
                            });
                          }));
                          subs__.addSub(items.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp10155 = result__;
                              var result__ = tmp10155;
                              tmp10119.set(result__);
                              
                            });
                          }));
                          
                          var nodes10328 = $("<span>");
                          root11325.append(nodes10328);
                          subs__.addSub(masterItem.addEventListener('change', function() {
                            renderControl161();
                          }));
                          
                          function renderControl161() {
                            subs__.addSub((masterItem.get())(it, tmp10119, function(elements, callback) {
                              var root11326 = $("<span>");
                              var subs__ = new mobl.CompSubscription();
                              callback(root11326); return subs__;
                              return subs__;
                            }, function(node) {
                              var oldNodes = nodes10328;
                              nodes10328 = node.contents();
                              oldNodes.replaceWith(nodes10328);
                            }));
                          }
                          renderControl161();
                          callback(root11325); return subs__;
                          
                        });
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes10327;
                        nodes10327 = node.contents();
                        oldNodes.replaceWith(nodes10327);
                      }));
                      
                      
                    }
                  };
                  renderCond292();
                  subs__.addSub(tmp10121.addEventListener('change', function() {
                    renderCond292();
                  }));
                  
                  
                  var oldNodes = iternode39;
                  iternode39 = iternode39.contents();
                  oldNodes.replaceWith(iternode39);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list39.addEventListener('change', function() { listSubs__.unsubscribe(); renderList39(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList39(true); }));
            });
          };
          renderList39();
          
          callback(root11322); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes10324;
          nodes10324 = node.contents();
          oldNodes.replaceWith(nodes10324);
        }));
        node736.append(node737);
        
        var node738 = $("<div>");
        node738.attr('style', "float:left; width:53%; position:relative; margin-left: 1%;");
        
        var result__ = current.get() && ui.visible.get();
        var tmp10123 = mobl.ref(result__);
        subs__.addSub(current.addEventListener('change', function() {
          tmp10123.set(current.get() && ui.visible.get());
        }));
        subs__.addSub(ui.visible.addEventListener('change', function() {
          tmp10123.set(current.get() && ui.visible.get());
        }));
        
        
        var node739 = $("<span>");
        node738.append(node739);
        var condSubs291 = new mobl.CompSubscription();
        subs__.addSub(condSubs291);
        var oldValue291;
        var renderCond291 = function() {
          var value475 = tmp10123.get();
          if(oldValue291 === value475) return;
          oldValue291 = value475;
          var subs__ = condSubs291;
          subs__.unsubscribe();
          node739.empty();
          if(value475) {
            ui.indexOf(current.get(), items.get(), function(result__) {
              var tmp10150 = result__;
              var tmp10122 = mobl.ref(result__);
              subs__.addSub(current.addEventListener('change', function() {
                ui.indexOf(current.get(), items.get(), function(result__) {
                  var tmp10148 = result__;
                  var result__ = tmp10148;
                  tmp10122.set(result__);
                  
                });
              }));
              subs__.addSub(items.addEventListener('change', function() {
                ui.indexOf(current.get(), items.get(), function(result__) {
                  var tmp10149 = result__;
                  var result__ = tmp10149;
                  tmp10122.set(result__);
                  
                });
              }));
              
              var nodes10323 = $("<span>");
              node739.append(nodes10323);
              subs__.addSub(detail.addEventListener('change', function() {
                renderControl159();
              }));
              
              function renderControl159() {
                subs__.addSub((detail.get())(current, tmp10122, function(elements, callback) {
                  var root11321 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root11321); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes10323;
                  nodes10323 = node.contents();
                  oldNodes.replaceWith(nodes10323);
                }));
              }
              renderControl159();
              
              
            });
          } else {
            
          }
        };
        renderCond291();
        subs__.addSub(tmp10123.addEventListener('change', function() {
          renderCond291();
        }));
        
        node736.append(node738);
        node735.append(node736);
        
        
        
        
        
        
      });
    } else {
      var nodes10329 = $("<span>");
      node735.append(nodes10329);
      subs__.addSub((ui.group)(function(_, callback) {
        var root11327 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node742 = mobl.loadingSpan();
        root11327.append(node742);
        var list40;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList40 = function() {
          var subs__ = listSubs__;
          list40 = items.get();
          list40.list(function(results40) {
            node742.empty();
            for(var i2404 = 0; i2404 < results40.length; i2404++) {
              (function() {
                var iternode40 = $("<span>");
                node742.append(iternode40);
                var it;
                it = mobl.ref(mobl.ref(results40), i2404);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp10160 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp10114 = mobl.ref(result__);
                
                var nodes10330 = $("<span>");
                iternode40.append(nodes10330);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp10114, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root11328 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  ui.indexOf(it.get(), items.get(), function(result__) {
                    var tmp10159 = result__;
                    var tmp10113 = mobl.ref(result__);
                    subs__.addSub(it.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp10157 = result__;
                        var result__ = tmp10157;
                        tmp10113.set(result__);
                        
                      });
                    }));
                    subs__.addSub(items.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp10158 = result__;
                        var result__ = tmp10158;
                        tmp10113.set(result__);
                        
                      });
                    }));
                    
                    var nodes10331 = $("<span>");
                    root11328.append(nodes10331);
                    subs__.addSub(masterItem.addEventListener('change', function() {
                      renderControl162();
                    }));
                    
                    function renderControl162() {
                      subs__.addSub((masterItem.get())(it, tmp10113, function(elements, callback) {
                        var root11329 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        callback(root11329); return subs__;
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes10331;
                        nodes10331 = node.contents();
                        oldNodes.replaceWith(nodes10331);
                      }));
                    }
                    renderControl162();
                    callback(root11328); return subs__;
                    
                  });
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes10330;
                  nodes10330 = node.contents();
                  oldNodes.replaceWith(nodes10330);
                }));
                
                var oldNodes = iternode40;
                iternode40 = iternode40.contents();
                oldNodes.replaceWith(iternode40);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list40.addEventListener('change', function() { listSubs__.unsubscribe(); renderList40(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList40(true); }));
          });
        };
        renderList40();
        
        callback(root11327); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes10329;
        nodes10329 = node.contents();
        oldNodes.replaceWith(nodes10329);
      }));
      
      
    }
  };
  renderCond290();
  subs__.addSub(tmp10125.addEventListener('change', function() {
    renderCond290();
  }));
  
  callback(root11320); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root11330 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp10117 = mobl.ref(result__);
  
  var nodes10332 = $("<span>");
  root11330.append(nodes10332);
  subs__.addSub((ui.header)(tmp10117, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root11331 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    mobl.sleep(100, function(result__) {
      var tmp10161 = result__;
      mathJAX.renderMaths(function(result__) {
        var tmp10162 = result__;
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         if(screenCallback) screenCallback();
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp10116 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp10115 = mobl.ref(result__);
        
        var nodes10333 = $("<span>");
        root11331.append(nodes10333);
        subs__.addSub((ui.backButton)(tmp10115, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp10116, function(_, callback) {
          var root11332 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root11332); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes10333;
          nodes10333 = node.contents();
          oldNodes.replaceWith(nodes10333);
        }));
        callback(root11331); return subs__;
        
      });
    });
    return subs__;
  }, function(node) {
    var oldNodes = nodes10332;
    nodes10332 = node.contents();
    oldNodes.replaceWith(nodes10332);
  }));
  var nodes10334 = $("<span>");
  root11330.append(nodes10334);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl163();
  }));
  
  function renderControl163() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root11333 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root11333); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes10334;
      nodes10334 = node.contents();
      oldNodes.replaceWith(nodes10334);
    }));
  }
  renderControl163();
  callback(root11330); return subs__;
  
  
  return subs__;
};
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.section = 'ui__section';
ui.logoStyle = 'ui__logoStyle';
ui.delStyle = 'ui__delStyle';
ui.delPushedStyle = 'ui__delPushedStyle';
ui.itemStyle = 'ui__itemStyle';
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
