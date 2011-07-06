mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mathJAX');
mobl.provides('plot');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root550 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node275 = $("<span>");
  root550.append(node275);
  var condSubs70 = new mobl.CompSubscription();
  subs__.addSub(condSubs70);
  var oldValue70;
  var renderCond70 = function() {
    var value162 = value.get();
    if(oldValue70 === value162) return;
    oldValue70 = value162;
    var subs__ = condSubs70;
    subs__.unsubscribe();
    node275.empty();
    if(value162) {
      var nodes375 = $("<span>");
      node275.append(nodes375);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl126();
      }));
      
      function renderControl126() {
        subs__.addSub((elements)(function(elements, callback) {
          var root551 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root551); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes375;
          nodes375 = node.contents();
          oldNodes.replaceWith(nodes375);
        }));
      }
      renderControl126();
      
      
    } else {
      var nodes376 = $("<span>");
      node275.append(nodes376);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root552 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes377 = $("<span>");
        root552.append(nodes377);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root553 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root553); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes377;
          nodes377 = node.contents();
          oldNodes.replaceWith(nodes377);
        }));
        var nodes378 = $("<span>");
        root552.append(nodes378);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,R0lGODlhIAAgAOf2AAAAAAEBAQICAgMDAwQEBAUFBQYGBgcHBwgICAkJCQoKCgsLCwwMDA0NDQ4ODg8PDxAQEBERERISEhMTExQUFBUVFRYWFhcXFxgYGBkZGRoaGhsbGxwcHB0dHR4eHh8fHyAgICEhISIiIiMjIyQkJCUlJSYmJicnJygoKCkpKSoqKisrKywsLC0tLS4uLi8vLzAwMDExMTIyMjMzMzQ0NDU1NTY2Njc3Nzg4ODk5OTo6Ojs7Ozw8PD09PT4+Pj8/P0BAQEFBQUJCQkNDQ0REREVFRUZGRkdHR0hISElJSUpKSktLS0xMTE1NTU5OTk9PT1BQUFFRUVJSUlNTU1RUVFVVVVZWVldXV1hYWFlZWVpaWltbW1xcXF1dXV5eXl9fX2BgYGFhYWJiYmNjY2RkZGVlZWZmZmdnZ2hoaGlpaWpqamtra2xsbG1tbW5ubm9vb3BwcHFxcXJycnNzc3R0dHV1dXZ2dnd3d3h4eHl5eXp6ent7e3x8fH19fX5+fn9/f4CAgIGBgYKCgoODg4SEhIWFhYaGhoeHh4iIiImJiYqKiouLi4yMjI2NjY6Ojo+Pj5CQkJGRkZKSkpOTk5SUlJWVlZaWlpeXl5iYmJmZmZqampubm5ycnJ2dnZ6enp+fn6CgoKGhoaKioqOjo6SkpKWlpaampqenp6ioqKmpqaqqqqurq6ysrK2tra6urq+vr7CwsLGxsbKysrOzs7S0tLW1tba2tre3t7i4uLm5ubq6uru7u7y8vL29vb6+vr+/v8DAwMHBwcLCwsPDw8TExMXFxcbGxsfHx8jIyMnJycrKysvLy8zMzM3Nzc7Ozs/Pz9DQ0NHR0dLS0tPT09TU1NXV1dbW1tfX19jY2NnZ2dra2tvb29zc3N3d3d7e3t/f3+Dg4OHh4eLi4uPj4+Tk5OXl5ebm5ufn5+jo6Onp6erq6uvr6+zs7O3t7e7u7u/v7/Dw8PHx8fLy8vPz8/T09PX19f///////////////////////////////////////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBQD/ACwAAAAAIAAgAAAI/gABCBxIsKDBgwgTKlzIsKHDhxAjSiSoYc+bCBMFbqCSY4DAApTgyQOUcUGkZcXAeHxQLB49SgI+xnSYAdYxZsjCDHgQLN48NAEEaFAh4oDDA3+EIXO2rAiAN96owQBQ4YVVCg87XBKWLNofAAROlAgAwIPVFxAgmrAkzJgWgxZcvADhESKGKk2MFhTgIAKBhwweNCjAMICBvwoPHMkDCNCYBwoLhFhxIm3CFYEIGUKkiIfCC2dLzDyI4k6e03hqKLQQerTBAkHCgOFCREHkDydGQFYoYAGDBK4RBiX78ACFBsQJBoAAIThDAyVguMBaEIPcEIgbBjBrtQOAAAoSTAgEcXZ3QwEnrLqQAMD6CgdUz1J3yOFFCwwBBqR/ESJoBhUk6OXQABAwQBYBKVhFAnEF1JURAB9YhcGDByHgwQUOUqjhhhx26KGGAQEAIfkEBQUA/wAsBQADABQAGAAACMwA/wkcSDDABg8BCCpc+I+KMmhKGEpcAAsdu1MFJGZwUmOgg14WgS1gqIDQLltZBoJsB0wBwwugbPXSpeXfAlro3LXKONCAQANzYt361QvIPzXZvHlROGGghkSxcgm7IzBGjQESBYpAFMsWlawMLTQx4hOsQAUNFhAwOzBAjTJs2lRhwPYfhDBs3MCRI6NuAilfAn9RUReACCFIisxAUBgAAQQGEtZVaKDp5IEkXjQGAIDDZYIlPg+84EL0PwEOTC/0ILDCZwMZKAhYGBAAIfkEBQUA/wAsBQADABIAFgAACMsA/wkcSBBDnDMQCCokGOBPt295FkpsEKubOFsKFlowAkOAwAi4uo3zxUBhgjupTEXx6GCWyFwCCTgQSOERqVWqpghQsKobuVP/GADSIrCAmU6lWrXa8e8MtWtb/r3pVGPghTyeTsFq8+9ADh3/Aqj5odADHk+lmiwMIXECEbISCRJQkCBAXIIAMBSxYgVIxrv/BuyQQsVKFhOAA9MgwpjIh8T/IKx40SJEAcj/BBQggLlz3Mue/2UIHWBE6H8UWEAGwJq1gr8ERRAMCAAh+QQFBQD/ACwFAAMAFAAWAAAIzgD/CRxI8IKaMA8IKlz47w60aXMYSmRgCpq1VhL/GUhBYiAEVtCu1VrAcEAVSJKSCGyAKiSsBAI3OBho4M2jS5iWCPwEDdsngYSswfogMMAURJA0bbLxLwwyZlf+tXFHLx2QgRTOIJLUSYxGGzcEbqL3jY4EghnMIIpEZOEcaGUYQtBxo8BCBCIUCjBwICPDBC14/IDR169AACBs4NDRI4Phwx1gSIYx4bFABCBUpPBAwHJRz6BDh8bAsLBCAKgBeGCowjCEFSxE/zuAwHJAACH5BAUFAP8ALAYAAwATABgAAAjSAP8JHDiwwhcpDggqXNgGWDE2CyP+W5AJGDJRCRQC2KiAwUYADjwFQ6Zq4UYOZuT4EMhAU7BkpgZqmPBvoxA8gQYF+ZdAUrBllggs+OOsVomNM+DkIYToxb8suX5J+ZemHLt3ZwQ2oBJnDyIrAmXMEGiJHbx3UwZSmNJ1x8I36uKRgkCwwQsXBBYqQHLFgsAABAh8HEwYgMACHlKo+JBXIkEKLyK/iOD4seQXEioPLPBBYIcBmkOLHk1a4oXSnlH/Y4BihWYRCgsY0BxAdejTEQMCACH5BAUFAP8ALAYAAwAVABYAAAjMAP8JHDhwgpUlCwgqXChwzCtaWhhK/KdA0atblhAwBMARQICBDRy9wtVJgUAFLTgQJDBjyYuPCxa9yqVJYwZI1X7JGOihC5o2NwIgGPRqFyOBj76NMxdnYAcrYNjIQfEPSipYTP6d2bb0HJSBCX5cEQMnyb8CLl4IOABKnLl0nyAQfNDjypgYC+eUSwcKw8IEI0YMWAjhypcKAzlO/PvAwD8BGFCg6LD4nwEbNlA4kFtZ4oPOEgWoBD1QRAPSqFOrXs1wA2uKJ14TSB0QACH5BAUFAP8ALAYAAwAWABYAAAjdAP8JHDiwAAsWAggqBMCwYcMlljYVUUiRYoI8m0oFKlDxn0OHC/pwMvUogcAERqI8ENjwwgsOJ/NwOsXowL8LiJxZo0NwgQ8nVFj8OzCHE6o/Ag1Ju7bNFIKBDXIUiaIFxD8jlj5NDOOMabczBAmY2HHEig6BKVb8M2DJ2rZvmFYSTIBiRxITFNlo+5bpQkUDFzIkVPhgyhYKHRMTVPDB778AihV6SMXtGJJ/DFxEHuiGnDZqmxIs0Lz534klQnioeJwhRYrSAxd4BECAAOzbuHPr3r1ZhWPdBRjCDggAIfkEBQUA/wAsBgADABYAFQAACNQAAQgcSFDBAYIIAfxbyJDhCDZoRDScSHEhAS6GIHFJOLDivwNnDEXSc2AhgiBLHEw0YCGCSTOGJAVC8K+CH2DI2jQcQGJGjg//DIQxRIlOAQV8iCVz1qmkyRYwbPzA8C+Hn0U2/mn5hcwZtDANBYh4EUOHin8COoRYuKirNEgqJ5ogq4FimWbTIlXwWEFCAIoOnliZ4LFwwwQeLDBUbJhhh1HVghn5l6BFY4Z13sGDx2tB5csL6dAbfUsBaIYcENGapeP0xAM0XcueTbu27X8hDDAMCAAh+QQFBQD/ACwGAAMAFgAVAAAIywABCBxIsKBBAP8SKlS4AEcOBgsjSkwo4IebPEUmakxoQIobPWgMKORRpEHEAQ0WCDwwxQ2fNwf+TZgDCxeZhQE8uGBRAeETN37IEEgQZ1YuX5EWFlDx4kWLB/9aoLnj4l8UV7h8CdMisekLDv8CYABb4M8tX8MMmZzogoLELr2IHXI7kQJUiQ2SQJGwsa/CDhUSAgjsN+EGTsx6MfmHgEXhhHDMnTtXS0Hjx//gsNtsK6EFFI83eDImawlmpXdPq17NurXrfx8KKAwIACH5BAUFAP8ALAYABAAXABMAAAjSAP8JHDhQAIYMAQgq/AegoUOHJaJoUbGwokICO6iEiTJA4IEWPhgsDKAggcACPKiM2WLgXwQznExtGegQw78VAgngoFJmygAEZD6dakWoZUETCkNAAYMUySZTrWJNodnww0IJFwIQiFOq1aw9Ii3+k7BwCitafMiKtchgiJIIa+P+Q8CBRAWjcgeGmBQsGa9HEg7gzNtnGzdu3bQZMTBY7h1xkMVxOwKAwom8HDD98uVLDgKBHfP+c0A6tOgdUhyIXijk0SYKqxXGEPMi9sIKBAMCACH5BAUFAP8ALAYABAAYABUAAAjRAAEIHEhQAQKCCAf+W8iQoYUZPDA0nEix4YATOIzsELDQQIkQHCsmMLBwQAocSIwQ+OcAC6JENipaaKGiJEYlQAQYqKJIUqYwBCsutGDjiId/PQxFyuQpidCGAhlEWBgGUiZQbhY8fZoEUyg4U7cKVcBjyAOxaP9pEBECQtqJJRzR4tXL04u3CwPwaebsGTRokgoQQPHWj7XDhyWtnPD2Q6RatWg5IoyXYYPLBSoniBKl8kQx7tqV8szwhq5675yQXnhkWD0zqxcaKdQhdkmKAQEAIfkEBQUA/wAsBgAEABgAFQAACNgA/wkcSLAAAYIIEyZ8kOIEA4UQCQoo8QJGiQACBSQwAKCjR48FCJ6o2ELAvwVBylB5mDBCCoQvYrD4V8DInD2CXiQMMCIhixcU/sl4o2cQIRMRBWoQqGABgAFQ8gxS5CVkUggJewhiJMZB0ogJaOho8LXsAQwfPjwYOKGsQBGCSrFyJWnFPwIo3P6b4+sXMGDBDh3U+88OMmTHDiMSiNVtB0SrVKUqhJQwQgaD9SJw4oSsZYEB8pwr96nt5wGk4rU7t+SzQDfw4rkT4/rkIGudagsksOFAwoAAIfkEBQUA/wAsBwAEABYAFQAACMIA/wkcODBAAIIIExJkICLEAYUQBQYI8eLFBgAYAQTIiDFixRICDaz4geIgQQcJK44IQIBGFjFhIiAEMRDlPxYsIPwjUSXMGjUTEHYYmEEgAgX/AuwAs2bOEwIRFcZQU2cKg6gKD6RgsQBrVAMVOGxo8E+n138e6lDa1InQibMC0bBq5eoVrD1w/7G5xZdvn7wb/Hjq1GnPiLz/CDBYjFiJEsQD63TTdkkC5E/oyHFDAnkNusxeIP/78wwVSNEaEiAMCAAh+QQFBQD/ACwIAAQAFgAXAAAIzQD/CRw4EIDBgwgPEhy4IMSHhRAj/gNRMGFCiQsHYCgB4SJGgQJC8DiSQwBBAB4+XtBhBMqSAws5SDRYoggULTkCLDxQAiOIJ1yEKPgYccCHEQmIfiwgAQMGBEoJajATCFEiNyKiCuSCKdMmTpzcDNAaplQpUmbhjI2KYc6jR47ePNQqcMGCoVohXJnigO5AOtWeObKgNUKAA6i6YZvGiEHUR0z+ufHWLRu0IVERrSrw7xG4yl2iltn8T8KhZ7ZWRKVSZmCBEhi0ZsCLMSAAIfkEBQUA/wAsCQAEABUAFwAACNgAAQgcSLCgwX8IEx7woKFAwocQIX5AmCGiRQIWEQp4QAHjwwYnUmT818EFjA8BRkas8AJGDRcCHmpQ6cGlDxEFDai0UAMIDIcqIQqokEFn0IwEHkxoYPToPwtV2Mh5s6WC039OBA0qZOiQEgBOqUAaO7YJ2KMVzPzx4yfMhKv/BiSYO8ApBStMGsBF+AZZsEEUggqYUeLfgn/QlBET5EClCGXXlPxLMw3aMmJeVLpIJs/UPwWHqEFjZunAyBrU5CWsEGmaMzSas8FjkxACkyV6R0KYoyb3yIAAIfkEBQUA/wAsCQAFABQAFgAACMsA/wkcaADDBQIDEypcyHDhgIYDGzQQkHCBCRQQ/7lwcQGARwAcMv57QXJEgIEZRJJ8UUGkQpIgHrocCCECwpkKByx4kMDjTAdArGyxIoOiwI9IP/JIs6aNmzMRZv7IQzXPmwkzIVxxA8eMjJM4ESw44DOjBCdFGOAUeAYXrDsSMiKwQeKfgk7BdNGy06BhgD3mnh35J6ZYsF20rDSEoAxeuk//EvwxFoyXIgMML0iDp46UwAmIiv0C03DAJsdoBj44YkRtQw90zogMCAAh+QQFBQD/ACwIAAUAFQAWAAAIswD/CRz4rwDBgwgPekjIsKHAAAoUAJg40eHADf9YRLAoUMWDgx8oAmB44ADHkyhTohSAQIEBlQha9BCyw8LIkyqeRJlCZcgAlDLACAVzhECJkw2QZMHSBAMAASsPGPh5MoKRHgpU/utiipMaCBxpiPiXABIsVKHSLHB4p1uxIf+20IKVKlQTh8TOfbsksE4tWKr4NLTA7Bw4TgIl9Jnl6opDS+e8jRnoAAeQtQ07vBHDwGFAACH5BAUFAP8ALAkABQAUABgAAAjRAP8JHCiwwgCCCP8BWMiQQ8KHEBEmMBAxYgsVDipGdKixY0cXHhNmDJkwgAEDAkgaCLGChQgEITnQqHEDxwcAHkcU2VmEBM6OCWwQGSIjAcl/BQqk7OiABw2jD2XoYMhwSqRDW0YKpCBwTiOBOmAMQCCI06RFWxQgvAKtyz851IYh+SdFFKdKjYIQdNFJD4IHvLZJSyQAgZpRnCydOSgQQYaDH55xm/bvwD8IcUBtagJRQzJu1DhZ/sdARg61Dx/Y4latz1Eqw2jhOBqAwwWNAQEAIfkEBQUA/wAsCQAFABMAGAAACMwA/wkc+O8CBYIIExK8oLChwgMOHbJAoSDivxQJNVgsYLGjx48fCQQAKTDFBwIeM7xY+QJCShgwXzzwaIBEixUfBnwMMGDAyIEjECRM8EIFRIIl1jxDk9BIHjhKFgy0cEecPEn/DtxoIeCAHEN96CwR+k/LuXnptPxjc6yWkH9IHBnyY8eGQBzIqtn550CWs2F+snZxdOgPEwAACnIQiMGXs2KQDPD9osiPDIUXejkzNklyVhUjBCikgMvZMUUoOw44tPkKSA1jrkhtGBAAIfkEBQUA/wAsCQAFABMAGAAACMMA/wkc+K/CBIIIEypcyHCgAQINFa4wgSCiQgsWE0LIyLGjRwAAPP7TIECkCwcZLbxY6aJBxgIfTpioEKCjAAEg/4UgU0ThARIfChD0sGueOTIJc4SxgqOiQDXy3qlrJHBGin8EtLwhs8UGxH+K3q0DZ+VfGVyldvzzceeNGS4cBNoI1kyOQFO/ZMkJYOBJWzMhBlrQINBCrF+0BAlUoAQNEgUXD9cyNHBAgwEgQxKUsOqXLT8DOPb5VetJRwxcoEBeGBAAIfkEBQUA/wAsCQAHABMAFgAACLcA/wkcSPAfAAAFBhRcWFCDChIHGEqcSLGixYsYM2q8EEDjPxYRNa4IibGEBAAeB4IQM4TkwAEYKCgc2KHWum5gFqoosoNEgYFz1JkDZ+ifARck/gUYUiXJjxEd/x0yF65alH9dTk2i8S/GlypLfCgQSCPXMDYHGGRq9YnMvwJAvFQhkmBghQwCKYxqFWrOTwQugoA4iJIgBVGtRtkpQFgA4cIDI3RqRQoORgFzEh/JaGEKkroSAwIAIfkEBQUA/wAsBwAHABUAFgAACMwA/wkcSLDgPwEGEyYUYUChw4EQHj58ILGixYsYMxYYWAEAxgsDVRhg0UOIE5AWRdoYdStRA4sjBjaosNFigIIfzERRYFDAhAkJR7gKZ02MQQ4wXoQoiGEUOG3T/vwrgOJDgAAwcsR4sQGA139ivmmrlswKgCmU/rD4R4KIVhQDBv7ZZs1ZnX8LFGVSVOXfgBdDcpRAKFAGrF9sXkqYpImRGAL/DIQIsaAghQ6Q/0mIpMlRGQJeQ4dO+KCRpkdgMv4Lc7qHaghFdiBwGBAAIfkEBQUA/wAsBgAOABYADwAACLwA/1lYkeKfwYMIE/6bIFCVLUqAVCic+A8FAQzO6NGLx4WiwhMD/lHx1WwSBI8JHyCkgLLlvw5gmrhUGKIUtWRbFGJ48WKihU3TmhWrY1CEhn8ARPB8kQFhADnSmhnT9eRfkj9pRvy7sLSEgIMKUDU79kuMAQV5CMkh8k9ABxcvOACY+2+AnmPB4ij4BwEQoTpPQgp4MIFASiNEGBh84IfQnSghZxpMYIcQHiUBJB9EEkiOCc0HDZj4kJliQAAh+QQFBQD/ACwGAAcAFgAWAAAIzAD/CRxIsOA/AgYHkkg4EAMKhhAjSpxIsaLFgRUsDLj4L0AVZtEyYagYQeCyeCivVDwx4AIyduzUaalYQsC/KLeKOeIokMEEngQ5aEGSwGAACBBsGvywyViuKQldMKwQiVgvWmoOYvj5LwRENcN62UJ15F+PM1E0/LMwUEQAgpx63XKVpQACM2uyyADwj8O/FhUICohzC5aZohHesNmyQ6kDBm8JOgDiY4FAB2vYdOmhtOIBLmy+wABAurTp06U/TBFSkiFq0wUEvC4dEAAh+QQFBQD/ACwGAA0AFgAQAAAIsAD//aNQQaDBgwgRSjG2rNKFhBBPQPhXgRi6dOmoQIRYQoCFX+LEgbuysWQTV7wOPSjJUgLLl/8yTAmCACbCDo5qoVrCkgDCCYVosQrl5d8ACQwAADhoAWEYWaxGVfLxL0aTGysPdlC6NIEjVqQ0Ofl3IEqUHiAMtmAx8aAZUpuw1HSQJQoQEwEELlDAdem/BjlqGBCoYIoUIXhtGgywQ8oQDYoPMlDhYUDJvpgzaw4IACH5BAUFAP8ALAUACQAWABMAAAjDAP8J/FekxsCDCBMK3CPJoMKHA0PkgjQDokUQYjRYRGhgwoV/BzYivPBIGLJilyyIFOjACzdu3bx9C7NSoBZrOK1V61JzBIZFuHLJIkRhpYgF/wpYwDCBQE2FF5boCPn0n4ZAoigFqRoBTyhMjKD8E8AgAUQAaK98wuQIEI1/I2iscIBQ40AEfzBBKjSEQIEdNmCECCCQBQqkB7VAMrQkJIIegUsIDHCgQMIFMlpYToojsIiqAkPQaAEB9NgHDNCqXh0QACH5BAUFAP8ALAQABwAYABUAAAjaAP8JHNigwMCDCBMOxIHrjMKHCRvRc4YEosV/f+LR+8Th4kMQu+J9m+Hx4YczTAyWHCjBAoWVCHdgutVrF6QLKxv8U/Dp2TNo0aS5WTkiQIJLyJImDbNSRIB/NS6tYlVKD86SCgYqqGAhAkyIFITMMPB14IU4jfzYKPvvQZpFguoE+Rcgq0AQLBUyUSToDhoV/zC4GFhhYIaEBMoIytPGxoABKF68MLziRIKBADID8FGHTQ+DBVRIJvEvM9mHBDxwGCBwwAnJHzTLnk07s4UVKBhArD3bgMqHAQEAIfkEBQUA/wAsBAAHABUAFQAACLYA/wkc+MBCgIEIEya08c8ZmwEDFEoUiIgdPHRIJk7Uk65dPEAaJX6glY7clJASPYxJgnJggQgVJBhoOfBGo1WxXh2yQDPBpF/AggkjZoYmgkW3buFKqoXmvxiJNnGq9KaC038JJlB4cFVhBBwqCnSdAMbOGRVXE1yhk2YLjJAREMKQk8aLkw0hLwDYC+BFGjBUVgj4d4ImAyJMUhBoyXcvgQMHBZoQqKHrPwgmSiSw/G/AYIUBAQAh+QQFBQD/ACwEAAcAFwAVAAAIswD/CRwoocLAgwgTDsx1LI3ChwcFiTsHzghEiHS8jUPH5+LDDqu8bYPi8aMXiyUPQpgQISVCGYE6jRLFR4LLBQgKuXIFK5YsKi5FHOhTqmjRKC4FrtCjSBEhMTaT/kMAIYKDAVITOmgRQkDWfxCadGGyIeuAIVueAAFx8UHCC1WeDKER9SGFhBSYFMHBIcBDFSQOJBQQYsUFrA8LIP4HoLHjAI4FjPh6kMEIDwYo/wvg92FAACH5BAUFAP8ALAQABQAVABcAAAjRAP8JHEjw34YpFAQUXJihQwCBAR7dirGwIJBdxMgM+PcgWS0ZFQcGMGRNWzUz/yAgWxWSoJxo1rhdQ/JPDqeWAzeQinbNm6F/BDrgHJhiVLRpYIYu3MBlygGlQB1EeFAAqsAWdBpJkhQnAtQDdjRt4uTp0xKoBtpAWrv2iNUSau7ciUMFgtV/Bxw8WKDwLsEFHyo8vKsgh5AZFO4KaPGDBgyhVhfkcOzCb4EVMFxgwPmhAIDPnxlkoPCQQIqKD0GrBh0ghF+CCDxALri6tm3QAQEAIfkEAQUA/wAsBAAFABUAFgAACMYA/wkcSPCfhjVZGBQsaIFKjgEDF8V7N2fhwAOBlhUDM3BYPHqKLAqUgOpYs2Rh/j0IFm9eGZH/BOQRhuzZsiL/3nh7BgPmvw6XhCWL9kfgCQ4BfP4zYUmYMS1KF2Ko0iTqQAYPHFgdWOHLHkCAxjywGiAKoUKHECkKQtZJnrdveWylwCRMGC5EGmyNuYBBgr0LD1DQC9hACRguAAfwAOPFC8ADTjiOCoGggBAvWkQlUNAABYVRAYgeTRrAB4EYAAvkcAFiwYAAOw=="), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root554 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root554); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes378;
          nodes378 = node.contents();
          oldNodes.replaceWith(nodes378);
        }));
        callback(root552); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes376;
        nodes376 = node.contents();
        oldNodes.replaceWith(nodes376);
      }));
      
      
    }
  };
  renderCond70();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond70();
  }));
  
  callback(root550); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
  var root555 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node276 = $("<div>");
  
  var ref283 = mobl.ref(ui.headerStyle);
  if(ref283.get() !== null) {
    node276.attr('class', ref283.get());
    subs__.addSub(ref283.addEventListener('change', function(_, ref, val) {
      node276.attr('class', val);
    }));
    
  }
  subs__.addSub(ref283.rebind());
  
  var val145 = onclick.get();
  if(val145 !== null) {
    subs__.addSub(mobl.domBind(node276, 'tap', val145));
  }
  
  var ref284 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref284.get() !== null) {
    node276.attr('style', ref284.get());
    subs__.addSub(ref284.addEventListener('change', function(_, ref, val) {
      node276.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node276.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref284.rebind());
  
  
  var node279 = $("<div>");
  
  var ref282 = mobl.ref(ui.headerContainerStyle);
  if(ref282.get() !== null) {
    node279.attr('class', ref282.get());
    subs__.addSub(ref282.addEventListener('change', function(_, ref, val) {
      node279.attr('class', val);
    }));
    
  }
  subs__.addSub(ref282.rebind());
  
  
  var node281 = $("<div>");
  
  var ref280 = text;
  node281.text(""+ref280.get());
  var ignore55 = false;
  subs__.addSub(ref280.addEventListener('change', function(_, ref, val) {
    if(ignore55) return;
    node281.text(""+val);
  }));
  subs__.addSub(ref280.rebind());
  
  
  var ref281 = mobl.ref(ui.headerTextStyle);
  if(ref281.get() !== null) {
    node281.attr('class', ref281.get());
    subs__.addSub(ref281.addEventListener('change', function(_, ref, val) {
      node281.attr('class', val);
    }));
    
  }
  subs__.addSub(ref281.rebind());
  
  node279.append(node281);
  node276.append(node279);
  var nodes379 = $("<span>");
  node276.append(nodes379);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl127();
  }));
  
  function renderControl127() {
    subs__.addSub((elements)(function(elements, callback) {
      var root556 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root556); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes379;
      nodes379 = node.contents();
      oldNodes.replaceWith(nodes379);
    }));
  }
  renderControl127();
  root555.append(node276);
  
  var node277 = $("<span>");
  root555.append(node277);
  var condSubs71 = new mobl.CompSubscription();
  subs__.addSub(condSubs71);
  var oldValue71;
  var renderCond71 = function() {
    var value163 = fixedPosition.get();
    if(oldValue71 === value163) return;
    oldValue71 = value163;
    var subs__ = condSubs71;
    subs__.unsubscribe();
    node277.empty();
    if(value163) {
      
      var node278 = $("<div>");
      node278.attr('id', "hello");
      node278.attr('style', "height: 2.9em;");
      
      node277.append(node278);
      
      
    } else {
      
    }
  };
  renderCond71();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond71();
  }));
  
  callback(root555); return subs__;
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root557 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref285 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref285.get() !== null) {
    sp.attr('class', ref285.get());
    subs__.addSub(ref285.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref285.rebind());
  
  var val146 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val146 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val146));
  }
  
  var val147 = function(event, callback) {
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
  if(val147 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val147));
  }
  
  var val148 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after45(result__) {
                    var tmp377 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after45);if(result__ !== undefined) after45(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val148 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val148));
  }
  
  var val149 = function(event, callback) {
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
  if(val149 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val149));
  }
  
  var ref286 = text;
  sp.text(""+ref286.get());
  var ignore56 = false;
  subs__.addSub(ref286.addEventListener('change', function(_, ref, val) {
    if(ignore56) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref286.rebind());
  
  
  root557.append(sp);
  callback(root557); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root558 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes380 = $("<span>");
  root558.append(nodes380);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root559 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root559); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes380;
    nodes380 = node.contents();
    oldNodes.replaceWith(nodes380);
  }));
  callback(root558); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root560 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes381 = $("<span>");
  root560.append(nodes381);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root561 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root561); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes381;
    nodes381 = node.contents();
    oldNodes.replaceWith(nodes381);
  }));
  callback(root560); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root562 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node282 = $("<ul>");
  
  var ref287 = mobl.ref(ui.groupStyle);
  if(ref287.get() !== null) {
    node282.attr('class', ref287.get());
    subs__.addSub(ref287.addEventListener('change', function(_, ref, val) {
      node282.attr('class', val);
    }));
    
  }
  subs__.addSub(ref287.rebind());
  
  var nodes382 = $("<span>");
  node282.append(nodes382);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl128();
  }));
  
  function renderControl128() {
    subs__.addSub((elements)(function(elements, callback) {
      var root563 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root563); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes382;
      nodes382 = node.contents();
      oldNodes.replaceWith(nodes382);
    }));
  }
  renderControl128();
  root562.append(node282);
  callback(root562); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root564 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node283 = $("<img>");
  
  var ref288 = url;
  if(ref288.get() !== null) {
    node283.attr('src', ref288.get());
    subs__.addSub(ref288.addEventListener('change', function(_, ref, val) {
      node283.attr('src', val);
    }));
    
  }
  subs__.addSub(ref288.rebind());
  
  var ref289 = width;
  if(ref289.get() !== null) {
    node283.attr('width', ref289.get());
    subs__.addSub(ref289.addEventListener('change', function(_, ref, val) {
      node283.attr('width', val);
    }));
    
  }
  subs__.addSub(ref289.rebind());
  
  var ref290 = height;
  if(ref290.get() !== null) {
    node283.attr('height', ref290.get());
    subs__.addSub(ref290.addEventListener('change', function(_, ref, val) {
      node283.attr('height', val);
    }));
    
  }
  subs__.addSub(ref290.rebind());
  
  var ref291 = style;
  if(ref291.get() !== null) {
    node283.attr('class', ref291.get());
    subs__.addSub(ref291.addEventListener('change', function(_, ref, val) {
      node283.attr('class', val);
    }));
    
  }
  subs__.addSub(ref291.rebind());
  
  var val150 = onclick.get();
  if(val150 !== null) {
    subs__.addSub(mobl.domBind(node283, 'tap', val150));
  }
  
  var ref292 = valign;
  if(ref292.get() !== null) {
    node283.attr('valign', ref292.get());
    subs__.addSub(ref292.addEventListener('change', function(_, ref, val) {
      node283.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref292.rebind());
  
  var ref293 = align;
  if(ref293.get() !== null) {
    node283.attr('align', ref293.get());
    subs__.addSub(ref293.addEventListener('change', function(_, ref, val) {
      node283.attr('align', val);
    }));
    
  }
  subs__.addSub(ref293.rebind());
  
  root564.append(node283);
  callback(root564); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root565 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref294 = mobl.ref(ui.itemStyle);
  if(ref294.get() !== null) {
    el.attr('class', ref294.get());
    subs__.addSub(ref294.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref294.rebind());
  
  var ref295 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref295.get() !== null) {
    el.attr('class', ref295.get());
    subs__.addSub(ref295.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref295.rebind());
  
  var val151 = onswipe.get();
  if(val151 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val151));
  }
  
  var val152 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp378 = result__;
                                           function after46(result__) {
                                             var tmp379 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after46);if(result__ !== undefined) after46(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp380 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val152 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val152));
  }
  
  var nodes383 = $("<span>");
  el.append(nodes383);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl129();
  }));
  
  function renderControl129() {
    subs__.addSub((elements)(function(elements, callback) {
      var root566 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root566); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes383;
      nodes383 = node.contents();
      oldNodes.replaceWith(nodes383);
    }));
  }
  renderControl129();
  root565.append(el);
  callback(root565); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root567 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node284 = $("<input>");
  node284.attr('type', "checkbox");
  
  var ref297 = b;
  node284.attr('checked', !!ref297.get());
  subs__.addSub(ref297.addEventListener('change', function(_, ref, val) {
    if(ref === ref297) node284.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node284, 'change', function() {
    b.set(!!node284.attr('checked'));
  }));
  
  var val154 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val154 !== null) {
    subs__.addSub(mobl.domBind(node284, 'tap', val154));
  }
  
  var val155 = onchange.get();
  if(val155 !== null) {
    subs__.addSub(mobl.domBind(node284, 'change', val155));
  }
  
  root567.append(node284);
  
  root567.append(" ");
  
  var node285 = $("<span>");
  
  var ref296 = label;
  node285.text(""+ref296.get());
  var ignore57 = false;
  subs__.addSub(ref296.addEventListener('change', function(_, ref, val) {
    if(ignore57) return;
    node285.text(""+val);
  }));
  subs__.addSub(ref296.rebind());
  
  
  var val153 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after47(result__) {
                    var tmp381 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after47);if(result__ !== undefined) after47(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val153 !== null) {
    subs__.addSub(mobl.domBind(node285, 'tap', val153));
  }
  
  root567.append(node285);
  callback(root567); return subs__;
  
  
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
  var root568 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node286 = $("<span>");
  root568.append(node286);
  var condSubs72 = new mobl.CompSubscription();
  subs__.addSub(condSubs72);
  var oldValue72;
  var renderCond72 = function() {
    var value164 = label.get();
    if(oldValue72 === value164) return;
    oldValue72 = value164;
    var subs__ = condSubs72;
    subs__.unsubscribe();
    node286.empty();
    if(value164) {
      var nodes384 = $("<span>");
      node286.append(nodes384);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root569 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root569); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes384;
        nodes384 = node.contents();
        oldNodes.replaceWith(nodes384);
      }));
      
      
    } else {
      
    }
  };
  renderCond72();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond72();
  }));
  
  
  var node287 = $("<span>");
  root568.append(node287);
  var condSubs73 = new mobl.CompSubscription();
  subs__.addSub(condSubs73);
  var oldValue73;
  var renderCond73 = function() {
    var value165 = validator.get();
    if(oldValue73 === value165) return;
    oldValue73 = value165;
    var subs__ = condSubs73;
    subs__.unsubscribe();
    node287.empty();
    if(value165) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after51(result__) {
        var tmp382 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp383 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node288 = $("<input>");
        
        var ref298 = inputType;
        if(ref298.get() !== null) {
          node288.attr('type', ref298.get());
          subs__.addSub(ref298.addEventListener('change', function(_, ref, val) {
            node288.attr('type', val);
          }));
          
        }
        subs__.addSub(ref298.rebind());
        
        var ref299 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref299.get() !== null) {
          node288.attr('class', ref299.get());
          subs__.addSub(ref299.addEventListener('change', function(_, ref, val) {
            node288.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node288.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node288.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node288.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref299.rebind());
        
        var ref300 = placeholder;
        if(ref300.get() !== null) {
          node288.attr('placeholder', ref300.get());
          subs__.addSub(ref300.addEventListener('change', function(_, ref, val) {
            node288.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref300.rebind());
        
        var ref301 = temp;
        node288.val(""+ref301.get());
        var ignore58 = false;
        subs__.addSub(ref301.addEventListener('change', function(_, ref, val) {
          if(ignore58) return;
          node288.val(""+val);
        }));
        subs__.addSub(ref301.rebind());
        
        subs__.addSub(mobl.domBind(node288, 'keyup change', function() {
          ignore58 = true;
          temp.set(mobl.stringTomobl__String(node288.val()));
          ignore58 = false;
        }));
        
        
        var val156 = onchange.get();
        if(val156 !== null) {
          subs__.addSub(mobl.domBind(node288, 'change', val156));
        }
        
        var val157 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after48(result__) {
                          var tmp384 = result__;
                          function after49(result__) {
                            var tmp385 = result__;
                            var result__ = tmp385;
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
                          var result__ = validator.get()(temp.get(), after49);if(result__ !== undefined) after49(result__);
                        }
                        var result__ = onkeyup.get()(event, after48);if(result__ !== undefined) after48(result__);
                      } else {
                        {
                          function after50(result__) {
                            var tmp385 = result__;
                            var result__ = tmp385;
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
                          var result__ = validator.get()(temp.get(), after50);if(result__ !== undefined) after50(result__);
                        }
                      }
                    };
        if(val157 !== null) {
          subs__.addSub(mobl.domBind(node288, 'keyup', val157));
        }
        
        var val158 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val158 !== null) {
          subs__.addSub(mobl.domBind(node288, 'blur', val158));
        }
        
        node287.append(node288);
        var nodes385 = $("<span>");
        node287.append(nodes385);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root570 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root570); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes385;
          nodes385 = node.contents();
          oldNodes.replaceWith(nodes385);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after51);if(result__ !== undefined) after51(result__);
    } else {
      
      var node289 = $("<input>");
      
      var ref302 = inputType;
      if(ref302.get() !== null) {
        node289.attr('type', ref302.get());
        subs__.addSub(ref302.addEventListener('change', function(_, ref, val) {
          node289.attr('type', val);
        }));
        
      }
      subs__.addSub(ref302.rebind());
      
      var ref303 = style;
      if(ref303.get() !== null) {
        node289.attr('class', ref303.get());
        subs__.addSub(ref303.addEventListener('change', function(_, ref, val) {
          node289.attr('class', val);
        }));
        
      }
      subs__.addSub(ref303.rebind());
      
      var ref304 = placeholder;
      if(ref304.get() !== null) {
        node289.attr('placeholder', ref304.get());
        subs__.addSub(ref304.addEventListener('change', function(_, ref, val) {
          node289.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref304.rebind());
      
      var ref305 = s;
      node289.val(""+ref305.get());
      var ignore59 = false;
      subs__.addSub(ref305.addEventListener('change', function(_, ref, val) {
        if(ignore59) return;
        node289.val(""+val);
      }));
      subs__.addSub(ref305.rebind());
      
      subs__.addSub(mobl.domBind(node289, 'keyup change', function() {
        ignore59 = true;
        s.set(mobl.stringTomobl__String(node289.val()));
        ignore59 = false;
      }));
      
      
      var val159 = onchange.get();
      if(val159 !== null) {
        subs__.addSub(mobl.domBind(node289, 'change', val159));
      }
      
      var val160 = onkeyup.get();
      if(val160 !== null) {
        subs__.addSub(mobl.domBind(node289, 'keyup', val160));
      }
      
      var val161 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val161 !== null) {
        subs__.addSub(mobl.domBind(node289, 'blur', val161));
      }
      
      node287.append(node289);
      
      
    }
  };
  renderCond73();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond73();
  }));
  
  callback(root568); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root571 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes386 = $("<span>");
  root571.append(nodes386);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root572 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root572); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes386;
    nodes386 = node.contents();
    oldNodes.replaceWith(nodes386);
  }));
  callback(root571); return subs__;
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root573 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes387 = $("<span>");
  root573.append(nodes387);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root574 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root574); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes387;
    nodes387 = node.contents();
    oldNodes.replaceWith(nodes387);
  }));
  callback(root573); return subs__;
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root575 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node290 = $("<span>");
  root575.append(node290);
  var condSubs74 = new mobl.CompSubscription();
  subs__.addSub(condSubs74);
  var oldValue74;
  var renderCond74 = function() {
    var value166 = label.get();
    if(oldValue74 === value166) return;
    oldValue74 = value166;
    var subs__ = condSubs74;
    subs__.unsubscribe();
    node290.empty();
    if(value166) {
      var nodes388 = $("<span>");
      node290.append(nodes388);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root576 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root576); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes388;
        nodes388 = node.contents();
        oldNodes.replaceWith(nodes388);
      }));
      
      
    } else {
      
    }
  };
  renderCond74();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond74();
  }));
  
  
  var node291 = $("<input>");
  node291.attr('type', "range");
  
  var ref306 = n;
  node291.val(""+ref306.get());
  var ignore60 = false;
  subs__.addSub(ref306.addEventListener('change', function(_, ref, val) {
    if(ignore60) return;
    node291.val(""+val);
  }));
  subs__.addSub(ref306.rebind());
  
  subs__.addSub(mobl.domBind(node291, 'keyup change', function() {
    ignore60 = true;
    n.set(mobl.stringTomobl__Num(node291.val()));
    ignore60 = false;
  }));
  
  
  var ref307 = min;
  if(ref307.get() !== null) {
    node291.attr('min', ref307.get());
    subs__.addSub(ref307.addEventListener('change', function(_, ref, val) {
      node291.attr('min', val);
    }));
    
  }
  subs__.addSub(ref307.rebind());
  
  var ref308 = max;
  if(ref308.get() !== null) {
    node291.attr('max', ref308.get());
    subs__.addSub(ref308.addEventListener('change', function(_, ref, val) {
      node291.attr('max', val);
    }));
    
  }
  subs__.addSub(ref308.rebind());
  
  var ref309 = step;
  if(ref309.get() !== null) {
    node291.attr('step', ref309.get());
    subs__.addSub(ref309.addEventListener('change', function(_, ref, val) {
      node291.attr('step', val);
    }));
    
  }
  subs__.addSub(ref309.rebind());
  node291.attr('style', "width: 99%;");
  
  var val162 = onchange.get();
  if(val162 !== null) {
    subs__.addSub(mobl.domBind(node291, 'change', val162));
  }
  
  var val163 = onkeyup.get();
  if(val163 !== null) {
    subs__.addSub(mobl.domBind(node291, 'keyup', val163));
  }
  
  var ref310 = placeholder;
  if(ref310.get() !== null) {
    node291.attr('placeholder', ref310.get());
    subs__.addSub(ref310.addEventListener('change', function(_, ref, val) {
      node291.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref310.rebind());
  
  root575.append(node291);
  callback(root575); return subs__;
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root577 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after52(result__) {
      var tmp386 = result__;
      var result__ = tmp386;
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
    var result__ = validator.get()(n2, after52);if(result__ !== undefined) after52(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes389 = $("<span>");
  root577.append(nodes389);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root578 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root578); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes389;
    nodes389 = node.contents();
    oldNodes.replaceWith(nodes389);
  }));
  callback(root577); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root579 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node292 = $("<span>");
  root579.append(node292);
  var condSubs75 = new mobl.CompSubscription();
  subs__.addSub(condSubs75);
  var oldValue75;
  var renderCond75 = function() {
    var value167 = label.get();
    if(oldValue75 === value167) return;
    oldValue75 = value167;
    var subs__ = condSubs75;
    subs__.unsubscribe();
    node292.empty();
    if(value167) {
      
      var node293 = $("<span>");
      node293.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref314 = label;
      node293.text(""+ref314.get());
      var ignore62 = false;
      subs__.addSub(ref314.addEventListener('change', function(_, ref, val) {
        if(ignore62) return;
        node293.text(""+val);
      }));
      subs__.addSub(ref314.rebind());
      
      
      node292.append(node293);
      
      var node294 = $("<span>");
      node294.attr('style', "float: left");
      
      
      var node295 = $("<input>");
      node295.attr('type', "password");
      
      var ref311 = style;
      if(ref311.get() !== null) {
        node295.attr('class', ref311.get());
        subs__.addSub(ref311.addEventListener('change', function(_, ref, val) {
          node295.attr('class', val);
        }));
        
      }
      subs__.addSub(ref311.rebind());
      
      var ref312 = placeholder;
      if(ref312.get() !== null) {
        node295.attr('placeholder', ref312.get());
        subs__.addSub(ref312.addEventListener('change', function(_, ref, val) {
          node295.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref312.rebind());
      
      var ref313 = s;
      node295.val(""+ref313.get());
      var ignore61 = false;
      subs__.addSub(ref313.addEventListener('change', function(_, ref, val) {
        if(ignore61) return;
        node295.val(""+val);
      }));
      subs__.addSub(ref313.rebind());
      
      subs__.addSub(mobl.domBind(node295, 'keyup change', function() {
        ignore61 = true;
        s.set(mobl.stringTomobl__String(node295.val()));
        ignore61 = false;
      }));
      
      
      var val164 = onchange.get();
      if(val164 !== null) {
        subs__.addSub(mobl.domBind(node295, 'change', val164));
      }
      
      var val165 = onkeyup.get();
      if(val165 !== null) {
        subs__.addSub(mobl.domBind(node295, 'keyup', val165));
      }
      
      var val166 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val166 !== null) {
        subs__.addSub(mobl.domBind(node295, 'blur', val166));
      }
      
      node294.append(node295);
      node292.append(node294);
      
      
      
      
    } else {
      
      var node296 = $("<input>");
      node296.attr('type', "password");
      
      var ref315 = style;
      if(ref315.get() !== null) {
        node296.attr('class', ref315.get());
        subs__.addSub(ref315.addEventListener('change', function(_, ref, val) {
          node296.attr('class', val);
        }));
        
      }
      subs__.addSub(ref315.rebind());
      
      var ref316 = placeholder;
      if(ref316.get() !== null) {
        node296.attr('placeholder', ref316.get());
        subs__.addSub(ref316.addEventListener('change', function(_, ref, val) {
          node296.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref316.rebind());
      
      var ref317 = s;
      node296.val(""+ref317.get());
      var ignore63 = false;
      subs__.addSub(ref317.addEventListener('change', function(_, ref, val) {
        if(ignore63) return;
        node296.val(""+val);
      }));
      subs__.addSub(ref317.rebind());
      
      subs__.addSub(mobl.domBind(node296, 'keyup change', function() {
        ignore63 = true;
        s.set(mobl.stringTomobl__String(node296.val()));
        ignore63 = false;
      }));
      
      
      var val167 = onchange.get();
      if(val167 !== null) {
        subs__.addSub(mobl.domBind(node296, 'change', val167));
      }
      
      var val168 = onkeyup.get();
      if(val168 !== null) {
        subs__.addSub(mobl.domBind(node296, 'keyup', val168));
      }
      
      var val169 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val169 !== null) {
        subs__.addSub(mobl.domBind(node296, 'blur', val169));
      }
      
      node292.append(node296);
      
      
    }
  };
  renderCond75();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond75();
  }));
  
  callback(root579); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root580 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref322 = style;
  if(ref322.get() !== null) {
    sel.attr('class', ref322.get());
    subs__.addSub(ref322.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref322.rebind());
  
  var val170 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after53(result__) {
                    var tmp388 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after53);if(result__ !== undefined) after53(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val170 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val170));
  }
  
  
  var node297 = mobl.loadingSpan();
  sel.append(node297);
  var list55;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList55 = function() {
    var subs__ = listSubs__;
    list55 = options.get();
    list55.list(function(results55) {
      node297.empty();
      for(var i55 = 0; i55 < results55.length; i55++) {
        (function() {
          var iternode55 = $("<span>");
          node297.append(iternode55);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results55), i55), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results55), i55), "_2");
          
          var node298 = $("<option>");
          
          var ref318 = optionDescription;
          node298.text(""+ref318.get());
          var ignore64 = false;
          subs__.addSub(ref318.addEventListener('change', function(_, ref, val) {
            if(ignore64) return;
            node298.text(""+val);
          }));
          subs__.addSub(ref318.rebind());
          
          
          var ref319 = optionStyle;
          if(ref319.get() !== null) {
            node298.attr('class', ref319.get());
            subs__.addSub(ref319.addEventListener('change', function(_, ref, val) {
              node298.attr('class', val);
            }));
            
          }
          subs__.addSub(ref319.rebind());
          
          var ref320 = optionValue;
          if(ref320.get() !== null) {
            node298.attr('value', ref320.get());
            subs__.addSub(ref320.addEventListener('change', function(_, ref, val) {
              node298.attr('value', val);
            }));
            
          }
          subs__.addSub(ref320.rebind());
          
          var ref321 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref321.get() !== null) {
            node298.attr('selected', ref321.get());
            subs__.addSub(ref321.addEventListener('change', function(_, ref, val) {
              node298.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node298.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node298.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref321.rebind());
          
          iternode55.append(node298);
          
          var oldNodes = iternode55;
          iternode55 = iternode55.contents();
          oldNodes.replaceWith(iternode55);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list55.addEventListener('change', function() { listSubs__.unsubscribe(); renderList55(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList55(true); }));
    });
  };
  renderList55();
  
  root580.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root580); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root581 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes390 = $("<span>");
    root581.append(nodes390);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root582 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node299 = mobl.loadingSpan();
      root582.append(node299);
      var list56;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList56 = function() {
        var subs__ = listSubs__;
        list56 = tabs.get();
        list56.list(function(results56) {
          node299.empty();
          for(var i56 = 0; i56 < results56.length; i56++) {
            (function() {
              var iternode56 = $("<span>");
              node299.append(iternode56);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results56), i56), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results56), i56), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results56), i56), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp346 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp346.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp346.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp346.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp346.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp345 = mobl.ref(result__);
              
              var nodes391 = $("<span>");
              iternode56.append(nodes391);
              subs__.addSub((mobl.span)(tmp346, mobl.ref(null), tmp345, mobl.ref(null), function(_, callback) {
                var root583 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes392 = $("<span>");
                root583.append(nodes392);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root584 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root584); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes392;
                  nodes392 = node.contents();
                  oldNodes.replaceWith(nodes392);
                }));
                callback(root583); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes391;
                nodes391 = node.contents();
                oldNodes.replaceWith(nodes391);
              }));
              
              var oldNodes = iternode56;
              iternode56 = iternode56.contents();
              oldNodes.replaceWith(iternode56);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list56.addEventListener('change', function() { listSubs__.unsubscribe(); renderList56(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList56(true); }));
        });
      };
      renderList56();
      
      callback(root582); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes390;
      nodes390 = node.contents();
      oldNodes.replaceWith(nodes390);
    }));
    
    var node300 = mobl.loadingSpan();
    root581.append(node300);
    var list57;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList57 = function() {
      var subs__ = listSubs__;
      list57 = tabs.get();
      list57.list(function(results57) {
        node300.empty();
        for(var i57 = 0; i57 < results57.length; i57++) {
          (function() {
            var iternode57 = $("<span>");
            node300.append(iternode57);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results57), i57), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results57), i57), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results57), i57), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp347 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp347.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp347.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp347.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp347.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes393 = $("<span>");
            iternode57.append(nodes393);
            subs__.addSub((mobl.block)(tmp347, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root585 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes394 = $("<span>");
              root585.append(nodes394);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root586 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes395 = $("<span>");
                root586.append(nodes395);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl130();
                }));
                
                function renderControl130() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root587 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root587); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes395;
                    nodes395 = node.contents();
                    oldNodes.replaceWith(nodes395);
                  }));
                }
                renderControl130();
                callback(root586); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes394;
                nodes394 = node.contents();
                oldNodes.replaceWith(nodes394);
              }));
              callback(root585); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes393;
              nodes393 = node.contents();
              oldNodes.replaceWith(nodes393);
            }));
            
            var oldNodes = iternode57;
            iternode57 = iternode57.contents();
            oldNodes.replaceWith(iternode57);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list57.addEventListener('change', function() { listSubs__.unsubscribe(); renderList57(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList57(true); }));
      });
    };
    renderList57();
    
    callback(root581); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes390 = $("<span>");
      root581.append(nodes390);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root582 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node299 = mobl.loadingSpan();
        root582.append(node299);
        var list56;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList56 = function() {
          var subs__ = listSubs__;
          list56 = tabs.get();
          list56.list(function(results56) {
            node299.empty();
            for(var i56 = 0; i56 < results56.length; i56++) {
              (function() {
                var iternode56 = $("<span>");
                node299.append(iternode56);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results56), i56), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results56), i56), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results56), i56), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp346 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp346.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp346.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp346.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp346.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp345 = mobl.ref(result__);
                
                var nodes391 = $("<span>");
                iternode56.append(nodes391);
                subs__.addSub((mobl.span)(tmp346, mobl.ref(null), tmp345, mobl.ref(null), function(_, callback) {
                  var root583 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes392 = $("<span>");
                  root583.append(nodes392);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root584 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root584); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes392;
                    nodes392 = node.contents();
                    oldNodes.replaceWith(nodes392);
                  }));
                  callback(root583); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes391;
                  nodes391 = node.contents();
                  oldNodes.replaceWith(nodes391);
                }));
                
                var oldNodes = iternode56;
                iternode56 = iternode56.contents();
                oldNodes.replaceWith(iternode56);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list56.addEventListener('change', function() { listSubs__.unsubscribe(); renderList56(true); }));
            subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList56(true); }));
          });
        };
        renderList56();
        
        callback(root582); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes390;
        nodes390 = node.contents();
        oldNodes.replaceWith(nodes390);
      }));
      
      var node300 = mobl.loadingSpan();
      root581.append(node300);
      var list57;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList57 = function() {
        var subs__ = listSubs__;
        list57 = tabs.get();
        list57.list(function(results57) {
          node300.empty();
          for(var i57 = 0; i57 < results57.length; i57++) {
            (function() {
              var iternode57 = $("<span>");
              node300.append(iternode57);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results57), i57), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results57), i57), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results57), i57), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp347 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp347.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp347.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp347.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp347.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes393 = $("<span>");
              iternode57.append(nodes393);
              subs__.addSub((mobl.block)(tmp347, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root585 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes394 = $("<span>");
                root585.append(nodes394);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root586 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes395 = $("<span>");
                  root586.append(nodes395);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl130();
                  }));
                  
                  function renderControl130() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root587 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root587); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes395;
                      nodes395 = node.contents();
                      oldNodes.replaceWith(nodes395);
                    }));
                  }
                  renderControl130();
                  callback(root586); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes394;
                  nodes394 = node.contents();
                  oldNodes.replaceWith(nodes394);
                }));
                callback(root585); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes393;
                nodes393 = node.contents();
                oldNodes.replaceWith(nodes393);
              }));
              
              var oldNodes = iternode57;
              iternode57 = iternode57.contents();
              oldNodes.replaceWith(iternode57);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list57.addEventListener('change', function() { listSubs__.unsubscribe(); renderList57(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList57(true); }));
        });
      };
      renderList57();
      
      callback(root581); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root588 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node301 = $("<div>");
  
  var ref326 = mobl.ref(ui.searchboxStyle);
  if(ref326.get() !== null) {
    node301.attr('class', ref326.get());
    subs__.addSub(ref326.addEventListener('change', function(_, ref, val) {
      node301.attr('class', val);
    }));
    
  }
  subs__.addSub(ref326.rebind());
  
  
  var node302 = $("<input>");
  node302.attr('type', "search");
  
  var ref323 = mobl.ref(ui.searchBoxInputStyle);
  if(ref323.get() !== null) {
    node302.attr('class', ref323.get());
    subs__.addSub(ref323.addEventListener('change', function(_, ref, val) {
      node302.attr('class', val);
    }));
    
  }
  subs__.addSub(ref323.rebind());
  
  var ref324 = placeholder;
  if(ref324.get() !== null) {
    node302.attr('placeholder', ref324.get());
    subs__.addSub(ref324.addEventListener('change', function(_, ref, val) {
      node302.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref324.rebind());
  
  var ref325 = s;
  node302.val(""+ref325.get());
  var ignore65 = false;
  subs__.addSub(ref325.addEventListener('change', function(_, ref, val) {
    if(ignore65) return;
    node302.val(""+val);
  }));
  subs__.addSub(ref325.rebind());
  
  subs__.addSub(mobl.domBind(node302, 'keyup change', function() {
    ignore65 = true;
    s.set(mobl.stringTomobl__String(node302.val()));
    ignore65 = false;
  }));
  
  
  var val171 = onsearch.get();
  if(val171 !== null) {
    subs__.addSub(mobl.domBind(node302, 'change', val171));
  }
  
  var val172 = onkeyup.get();
  if(val172 !== null) {
    subs__.addSub(mobl.domBind(node302, 'keyup', val172));
  }
  node302.attr('autocorrect', false);
  node302.attr('autocapitalize', false);
  node302.attr('autocomplete', false);
  
  node301.append(node302);
  root588.append(node301);
  callback(root588); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root589 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref327 = mobl.ref(ui.contextMenuStyle);
  if(ref327.get() !== null) {
    menu.attr('class', ref327.get());
    subs__.addSub(ref327.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref327.rebind());
  
  var nodes396 = $("<span>");
  menu.append(nodes396);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl131();
  }));
  
  function renderControl131() {
    subs__.addSub((elements)(function(elements, callback) {
      var root590 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root590); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes396;
      nodes396 = node.contents();
      oldNodes.replaceWith(nodes396);
    }));
  }
  renderControl131();
  root589.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val173 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp391 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val173 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val173));
  }
  
  root589.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root589); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root591 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp375 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp375.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node303 = $("<span>");
  root591.append(node303);
  var condSubs76 = new mobl.CompSubscription();
  subs__.addSub(condSubs76);
  var oldValue76;
  var renderCond76 = function() {
    var value168 = tmp375.get();
    if(oldValue76 === value168) return;
    oldValue76 = value168;
    var subs__ = condSubs76;
    subs__.unsubscribe();
    node303.empty();
    if(value168) {
      items.get().one(function(result__) {
        var tmp392 = result__;
        var current = mobl.ref(result__);
        
        var node304 = $("<div>");
        node304.attr('width', "100%");
        
        
        var node305 = $("<div>");
        node305.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes399 = $("<span>");
        node305.append(nodes399);
        subs__.addSub((ui.group)(function(_, callback) {
          var root594 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node308 = mobl.loadingSpan();
          root594.append(node308);
          var list58;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList58 = function() {
            var subs__ = listSubs__;
            list58 = items.get();
            list58.list(function(results58) {
              node308.empty();
              for(var i58 = 0; i58 < results58.length; i58++) {
                (function() {
                  var iternode58 = $("<span>");
                  node308.append(iternode58);
                  var it;
                  it = mobl.ref(mobl.ref(results58), i58);
                  var result__ = it.get() == current.get();
                  var tmp353 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp353.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp353.set(it.get() == current.get());
                  }));
                  
                  
                  var node309 = $("<span>");
                  iternode58.append(node309);
                  var condSubs78 = new mobl.CompSubscription();
                  subs__.addSub(condSubs78);
                  var oldValue78;
                  var renderCond78 = function() {
                    var value170 = tmp353.get();
                    if(oldValue78 === value170) return;
                    oldValue78 = value170;
                    var subs__ = condSubs78;
                    subs__.unsubscribe();
                    node309.empty();
                    if(value170) {
                      var nodes400 = $("<span>");
                      node309.append(nodes400);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root595 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes401 = $("<span>");
                        root595.append(nodes401);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl133();
                        }));
                        
                        function renderControl133() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root596 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root596); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes401;
                            nodes401 = node.contents();
                            oldNodes.replaceWith(nodes401);
                          }));
                        }
                        renderControl133();
                        callback(root595); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes400;
                        nodes400 = node.contents();
                        oldNodes.replaceWith(nodes400);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp352 = mobl.ref(result__);
                      
                      var nodes402 = $("<span>");
                      node309.append(nodes402);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp352, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root597 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes403 = $("<span>");
                        root597.append(nodes403);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl134();
                        }));
                        
                        function renderControl134() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root598 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root598); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes403;
                            nodes403 = node.contents();
                            oldNodes.replaceWith(nodes403);
                          }));
                        }
                        renderControl134();
                        callback(root597); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes402;
                        nodes402 = node.contents();
                        oldNodes.replaceWith(nodes402);
                      }));
                      
                      
                    }
                  };
                  renderCond78();
                  subs__.addSub(tmp353.addEventListener('change', function() {
                    renderCond78();
                  }));
                  
                  
                  var oldNodes = iternode58;
                  iternode58 = iternode58.contents();
                  oldNodes.replaceWith(iternode58);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list58.addEventListener('change', function() { listSubs__.unsubscribe(); renderList58(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList58(true); }));
            });
          };
          renderList58();
          
          callback(root594); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes399;
          nodes399 = node.contents();
          oldNodes.replaceWith(nodes399);
        }));
        node304.append(node305);
        
        var node306 = $("<div>");
        node306.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node307 = $("<span>");
        node306.append(node307);
        var condSubs77 = new mobl.CompSubscription();
        subs__.addSub(condSubs77);
        var oldValue77;
        var renderCond77 = function() {
          var value169 = current.get();
          if(oldValue77 === value169) return;
          oldValue77 = value169;
          var subs__ = condSubs77;
          subs__.unsubscribe();
          node307.empty();
          if(value169) {
            var nodes397 = $("<span>");
            node307.append(nodes397);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl132();
            }));
            
            function renderControl132() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root592 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root592); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes397;
                nodes397 = node.contents();
                oldNodes.replaceWith(nodes397);
              }));
            }
            renderControl132();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp354 = mobl.ref(result__);
            
            var nodes398 = $("<span>");
            node307.append(nodes398);
            subs__.addSub((mobl.label)(tmp354, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root593 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root593); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes398;
              nodes398 = node.contents();
              oldNodes.replaceWith(nodes398);
            }));
            
            
          }
        };
        renderCond77();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond77();
        }));
        
        node304.append(node306);
        node303.append(node304);
        
        
        
        
        
        
      });
    } else {
      var nodes404 = $("<span>");
      node303.append(nodes404);
      subs__.addSub((ui.group)(function(_, callback) {
        var root599 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node310 = mobl.loadingSpan();
        root599.append(node310);
        var list59;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList59 = function() {
          var subs__ = listSubs__;
          list59 = items.get();
          list59.list(function(results59) {
            node310.empty();
            for(var i59 = 0; i59 < results59.length; i59++) {
              (function() {
                var iternode59 = $("<span>");
                node310.append(iternode59);
                var it;
                it = mobl.ref(mobl.ref(results59), i59);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp393 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp348 = mobl.ref(result__);
                
                var nodes405 = $("<span>");
                iternode59.append(nodes405);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp348, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root600 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes406 = $("<span>");
                  root600.append(nodes406);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl135();
                  }));
                  
                  function renderControl135() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root601 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root601); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes406;
                      nodes406 = node.contents();
                      oldNodes.replaceWith(nodes406);
                    }));
                  }
                  renderControl135();
                  callback(root600); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes405;
                  nodes405 = node.contents();
                  oldNodes.replaceWith(nodes405);
                }));
                
                var oldNodes = iternode59;
                iternode59 = iternode59.contents();
                oldNodes.replaceWith(iternode59);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list59.addEventListener('change', function() { listSubs__.unsubscribe(); renderList59(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList59(true); }));
          });
        };
        renderList59();
        
        callback(root599); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes404;
        nodes404 = node.contents();
        oldNodes.replaceWith(nodes404);
      }));
      
      
    }
  };
  renderCond76();
  subs__.addSub(tmp375.addEventListener('change', function() {
    renderCond76();
  }));
  
  callback(root591); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root602 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp351 = mobl.ref(result__);
  
  var nodes407 = $("<span>");
  root602.append(nodes407);
  subs__.addSub((ui.header)(tmp351, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root603 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp350 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp349 = mobl.ref(result__);
    
    var nodes408 = $("<span>");
    root603.append(nodes408);
    subs__.addSub((ui.backButton)(tmp349, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp350, function(_, callback) {
      var root604 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root604); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes408;
      nodes408 = node.contents();
      oldNodes.replaceWith(nodes408);
    }));
    callback(root603); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes407;
    nodes407 = node.contents();
    oldNodes.replaceWith(nodes407);
  }));
  var nodes409 = $("<span>");
  root602.append(nodes409);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl136();
  }));
  
  function renderControl136() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root605 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root605); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes409;
      nodes409 = node.contents();
      oldNodes.replaceWith(nodes409);
    }));
  }
  renderControl136();
  callback(root602); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root606 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes410 = $("<span>");
  root606.append(nodes410);
  subs__.addSub((ui.group)(function(_, callback) {
    var root607 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node311 = mobl.loadingSpan();
    root607.append(node311);
    var list60;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList60 = function() {
      var subs__ = listSubs__;
      list60 = coll.get();
      list60.list(function(results60) {
        node311.empty();
        for(var i60 = 0; i60 < results60.length; i60++) {
          (function() {
            var iternode60 = $("<span>");
            node311.append(iternode60);
            var it;
            it = mobl.ref(mobl.ref(results60), i60);
            var result__ = it.get() == selected.get();
            var tmp356 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp356.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp356.set(it.get() == selected.get());
            }));
            
            
            var node312 = $("<span>");
            iternode60.append(node312);
            var condSubs79 = new mobl.CompSubscription();
            subs__.addSub(condSubs79);
            var oldValue79;
            var renderCond79 = function() {
              var value171 = tmp356.get();
              if(oldValue79 === value171) return;
              oldValue79 = value171;
              var subs__ = condSubs79;
              subs__.unsubscribe();
              node312.empty();
              if(value171) {
                var nodes411 = $("<span>");
                node312.append(nodes411);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root608 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes412 = $("<span>");
                  root608.append(nodes412);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl137();
                  }));
                  
                  function renderControl137() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root609 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root609); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes412;
                      nodes412 = node.contents();
                      oldNodes.replaceWith(nodes412);
                    }));
                  }
                  renderControl137();
                  callback(root608); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes411;
                  nodes411 = node.contents();
                  oldNodes.replaceWith(nodes411);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp355 = mobl.ref(result__);
                
                var nodes413 = $("<span>");
                node312.append(nodes413);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp355, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root610 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes414 = $("<span>");
                  root610.append(nodes414);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl138();
                  }));
                  
                  function renderControl138() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root611 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root611); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes414;
                      nodes414 = node.contents();
                      oldNodes.replaceWith(nodes414);
                    }));
                  }
                  renderControl138();
                  callback(root610); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes413;
                  nodes413 = node.contents();
                  oldNodes.replaceWith(nodes413);
                }));
                
                
              }
            };
            renderCond79();
            subs__.addSub(tmp356.addEventListener('change', function() {
              renderCond79();
            }));
            
            
            var oldNodes = iternode60;
            iternode60 = iternode60.contents();
            oldNodes.replaceWith(iternode60);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list60.addEventListener('change', function() { listSubs__.unsubscribe(); renderList60(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList60(true); }));
      });
    };
    renderList60();
    
    callback(root607); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes410;
    nodes410 = node.contents();
    oldNodes.replaceWith(nodes410);
  }));
  callback(root606); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root612 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp394 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp357 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp357.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp357.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp357.set(coll.get().limit(n.get()));
    }));
    
    
    var node313 = mobl.loadingSpan();
    root612.append(node313);
    var list61;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList61 = function() {
      var subs__ = listSubs__;
      list61 = tmp357.get();
      list61.list(function(results61) {
        node313.empty();
        for(var i61 = 0; i61 < results61.length; i61++) {
          (function() {
            var iternode61 = $("<span>");
            node313.append(iternode61);
            var it;
            it = mobl.ref(mobl.ref(results61), i61);
            var nodes415 = $("<span>");
            iternode61.append(nodes415);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl139();
            }));
            
            function renderControl139() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root613 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root613); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes415;
                nodes415 = node.contents();
                oldNodes.replaceWith(nodes415);
              }));
            }
            renderControl139();
            
            var oldNodes = iternode61;
            iternode61 = iternode61.contents();
            oldNodes.replaceWith(iternode61);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list61.addEventListener('change', function() { listSubs__.unsubscribe(); renderList61(true); }));
        subs__.addSub(tmp357.addEventListener('change', function() { listSubs__.unsubscribe(); renderList61(true); }));
      });
    };
    renderList61();
    
    var result__ = n.get() < total.get();
    var tmp359 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp359.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp359.set(n.get() < total.get());
    }));
    
    
    var node314 = $("<span>");
    root612.append(node314);
    var condSubs80 = new mobl.CompSubscription();
    subs__.addSub(condSubs80);
    var oldValue80;
    var renderCond80 = function() {
      var value172 = tmp359.get();
      if(oldValue80 === value172) return;
      oldValue80 = value172;
      var subs__ = condSubs80;
      subs__.unsubscribe();
      node314.empty();
      if(value172) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp358 = mobl.ref(result__);
        
        var nodes416 = $("<span>");
        node314.append(nodes416);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp358, mobl.ref(null), function(_, callback) {
          var root614 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes417 = $("<span>");
          root614.append(nodes417);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root615 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root615); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes417;
            nodes417 = node.contents();
            oldNodes.replaceWith(nodes417);
          }));
          callback(root614); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes416;
          nodes416 = node.contents();
          oldNodes.replaceWith(nodes416);
        }));
        
        
      } else {
        
      }
    };
    renderCond80();
    subs__.addSub(tmp359.addEventListener('change', function() {
      renderCond80();
    }));
    
    callback(root612); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root616 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes418 = $("<span>");
  root616.append(nodes418);
  subs__.addSub((ui.group)(function(_, callback) {
    var root617 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node315 = mobl.loadingSpan();
    root617.append(node315);
    var list62;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList62 = function() {
      var subs__ = listSubs__;
      list62 = items.get();
      list62.list(function(results62) {
        node315.empty();
        for(var i62 = 0; i62 < results62.length; i62++) {
          (function() {
            var iternode62 = $("<span>");
            node315.append(iternode62);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results62), i62), "_1");it = mobl.ref(mobl.ref(mobl.ref(results62), i62), "_2");
            var nodes419 = $("<span>");
            iternode62.append(nodes419);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root618 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes420 = $("<span>");
              root618.append(nodes420);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root619 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root619); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes420;
                nodes420 = node.contents();
                oldNodes.replaceWith(nodes420);
              }));
              callback(root618); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes419;
              nodes419 = node.contents();
              oldNodes.replaceWith(nodes419);
            }));
            
            var oldNodes = iternode62;
            iternode62 = iternode62.contents();
            oldNodes.replaceWith(iternode62);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list62.addEventListener('change', function() { listSubs__.unsubscribe(); renderList62(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList62(true); }));
      });
    };
    renderList62();
    
    callback(root617); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes418;
    nodes418 = node.contents();
    oldNodes.replaceWith(nodes418);
  }));
  callback(root616); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root620 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll154) {
    coll154 = coll154.reverse();
    function processOne16() {
      var it;
      it = coll154.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll154.length > 0) processOne16(); else rest16();
      
    }
    function rest16() {
      var nodes421 = $("<span>");
      root620.append(nodes421);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root621 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp360 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp361 = mobl.ref(result__);
        
        var nodes422 = $("<span>");
        root621.append(nodes422);
        subs__.addSub((ui.backButton)(tmp361, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp360, function(_, callback) {
          var root622 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root622); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes422;
          nodes422 = node.contents();
          oldNodes.replaceWith(nodes422);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll153) {
                           coll153 = coll153.reverse();
                           function processOne15() {
                             var checked;var it;
                             var tmp396 = coll153.pop();
                             checked = tmp396._1;it = tmp396._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll153.length > 0) processOne15(); else rest15();
                               
                             } else {
                               {
                                 
                                 if(coll153.length > 0) processOne15(); else rest15();
                                 
                               }
                             }
                           }
                           function rest15() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll153.length > 0) processOne15(); else rest15();
                         });
                         
                       };
        var tmp362 = mobl.ref(result__);
        
        var nodes423 = $("<span>");
        root621.append(nodes423);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp362, function(_, callback) {
          var root623 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root623); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes423;
          nodes423 = node.contents();
          oldNodes.replaceWith(nodes423);
        }));
        callback(root621); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes421;
        nodes421 = node.contents();
        oldNodes.replaceWith(nodes421);
      }));
      var nodes424 = $("<span>");
      root620.append(nodes424);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root624 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root624); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes424;
        nodes424 = node.contents();
        oldNodes.replaceWith(nodes424);
      }));
      callback(root620); return subs__;
      
      
    }
    if(coll154.length > 0) processOne16(); else rest16();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root625 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes425 = $("<span>");
  root625.append(nodes425);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root626 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root626); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes425;
    nodes425 = node.contents();
    oldNodes.replaceWith(nodes425);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp363 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp363.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp363.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp363.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp363.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp363.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes426 = $("<span>");
  root625.append(nodes426);
  subs__.addSub((ui.masterDetail)(tmp363, masterItem, detailItem, function(_, callback) {
    var root627 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root627); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes426;
    nodes426 = node.contents();
    oldNodes.replaceWith(nodes426);
  }));
  callback(root625); return subs__;
  
  
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
  var root628 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes427 = $("<span>");
  root628.append(nodes427);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root629 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node316 = mobl.loadingSpan();
    root629.append(node316);
    var list63;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList63 = function() {
      var subs__ = listSubs__;
      list63 = sections.get();
      list63.list(function(results63) {
        node316.empty();
        for(var i63 = 0; i63 < results63.length; i63++) {
          (function() {
            var iternode63 = $("<span>");
            node316.append(iternode63);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results63), i63), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results63), i63), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp365 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp365.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp365.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp365.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp365.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp364 = mobl.ref(result__);
            
            var nodes428 = $("<span>");
            iternode63.append(nodes428);
            subs__.addSub((mobl.span)(tmp365, mobl.ref(null), tmp364, mobl.ref(null), function(_, callback) {
              var root630 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes429 = $("<span>");
              root630.append(nodes429);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root631 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root631); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes429;
                nodes429 = node.contents();
                oldNodes.replaceWith(nodes429);
              }));
              callback(root630); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes428;
              nodes428 = node.contents();
              oldNodes.replaceWith(nodes428);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp366 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp366.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp366.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp366.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp366.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes430 = $("<span>");
            iternode63.append(nodes430);
            subs__.addSub((mobl.block)(tmp366, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root632 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes431 = $("<span>");
              root632.append(nodes431);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl140();
              }));
              
              function renderControl140() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root633 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root633); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes431;
                  nodes431 = node.contents();
                  oldNodes.replaceWith(nodes431);
                }));
              }
              renderControl140();
              callback(root632); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes430;
              nodes430 = node.contents();
              oldNodes.replaceWith(nodes430);
            }));
            
            var oldNodes = iternode63;
            iternode63 = iternode63.contents();
            oldNodes.replaceWith(iternode63);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list63.addEventListener('change', function() { listSubs__.unsubscribe(); renderList63(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList63(true); }));
      });
    };
    renderList63();
    
    callback(root629); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes427;
    nodes427 = node.contents();
    oldNodes.replaceWith(nodes427);
  }));
  callback(root628); return subs__;
  
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
  var root634 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node317 = $("<table>");
  
  var ref328 = style;
  if(ref328.get() !== null) {
    node317.attr('class', ref328.get());
    subs__.addSub(ref328.addEventListener('change', function(_, ref, val) {
      node317.attr('class', val);
    }));
    
  }
  subs__.addSub(ref328.rebind());
  
  var nodes432 = $("<span>");
  node317.append(nodes432);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl141();
  }));
  
  function renderControl141() {
    subs__.addSub((elements)(function(elements, callback) {
      var root635 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root635); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes432;
      nodes432 = node.contents();
      oldNodes.replaceWith(nodes432);
    }));
  }
  renderControl141();
  root634.append(node317);
  callback(root634); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root636 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node318 = $("<tr>");
  
  var ref329 = style;
  if(ref329.get() !== null) {
    node318.attr('class', ref329.get());
    subs__.addSub(ref329.addEventListener('change', function(_, ref, val) {
      node318.attr('class', val);
    }));
    
  }
  subs__.addSub(ref329.rebind());
  
  var nodes433 = $("<span>");
  node318.append(nodes433);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl142();
  }));
  
  function renderControl142() {
    subs__.addSub((elements)(function(elements, callback) {
      var root637 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root637); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes433;
      nodes433 = node.contents();
      oldNodes.replaceWith(nodes433);
    }));
  }
  renderControl142();
  root636.append(node318);
  callback(root636); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root638 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node319 = $("<td>");
  
  var ref330 = width;
  if(ref330.get() !== null) {
    node319.attr('width', ref330.get());
    subs__.addSub(ref330.addEventListener('change', function(_, ref, val) {
      node319.attr('width', val);
    }));
    
  }
  subs__.addSub(ref330.rebind());
  
  var ref331 = style;
  if(ref331.get() !== null) {
    node319.attr('class', ref331.get());
    subs__.addSub(ref331.addEventListener('change', function(_, ref, val) {
      node319.attr('class', val);
    }));
    
  }
  subs__.addSub(ref331.rebind());
  
  var nodes434 = $("<span>");
  node319.append(nodes434);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl143();
  }));
  
  function renderControl143() {
    subs__.addSub((elements)(function(elements, callback) {
      var root639 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root639); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes434;
      nodes434 = node.contents();
      oldNodes.replaceWith(nodes434);
    }));
  }
  renderControl143();
  root638.append(node319);
  callback(root638); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root640 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node320 = $("<td>");
  
  var ref332 = width;
  if(ref332.get() !== null) {
    node320.attr('width', ref332.get());
    subs__.addSub(ref332.addEventListener('change', function(_, ref, val) {
      node320.attr('width', val);
    }));
    
  }
  subs__.addSub(ref332.rebind());
  
  var ref333 = style;
  if(ref333.get() !== null) {
    node320.attr('class', ref333.get());
    subs__.addSub(ref333.addEventListener('change', function(_, ref, val) {
      node320.attr('class', val);
    }));
    
  }
  subs__.addSub(ref333.rebind());
  
  var nodes435 = $("<span>");
  node320.append(nodes435);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl144();
  }));
  
  function renderControl144() {
    subs__.addSub((elements)(function(elements, callback) {
      var root641 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root641); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes435;
      nodes435 = node.contents();
      oldNodes.replaceWith(nodes435);
    }));
  }
  renderControl144();
  root640.append(node320);
  callback(root640); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root642 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node321 = $("<td>");
  
  var ref334 = width;
  if(ref334.get() !== null) {
    node321.attr('width', ref334.get());
    subs__.addSub(ref334.addEventListener('change', function(_, ref, val) {
      node321.attr('width', val);
    }));
    
  }
  subs__.addSub(ref334.rebind());
  
  var ref335 = style;
  if(ref335.get() !== null) {
    node321.attr('class', ref335.get());
    subs__.addSub(ref335.addEventListener('change', function(_, ref, val) {
      node321.attr('class', val);
    }));
    
  }
  subs__.addSub(ref335.rebind());
  
  
  var node322 = $("<strong>");
  
  var nodes436 = $("<span>");
  node322.append(nodes436);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl145();
  }));
  
  function renderControl145() {
    subs__.addSub((elements)(function(elements, callback) {
      var root643 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root643); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes436;
      nodes436 = node.contents();
      oldNodes.replaceWith(nodes436);
    }));
  }
  renderControl145();
  node321.append(node322);
  root642.append(node321);
  callback(root642); return subs__;
  
  
  
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
  items.list(function(coll155) {
    coll155 = coll155.reverse();
    function processOne17() {
      var item;
      item = coll155.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = counter;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = counter + 1;
        counter = result__;
        
        if(coll155.length > 0) processOne17(); else rest17();
        
      } else {
        {
          var result__ = counter + 1;
          counter = result__;
          
          if(coll155.length > 0) processOne17(); else rest17();
          
        }
      }
    }
    function rest17() {
      var result__ = -1;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll155.length > 0) processOne17(); else rest17();
  });
  
};

ui.visible = mobl.ref(true);
ui.hideCurrent = function() {
   var __this = this;
  ui.visible.set(false);
};


ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root644 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes437 = $("<span>");
  root644.append(nodes437);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl146();
  }));
  
  function renderControl146() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root645 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root645); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes437;
      nodes437 = node.contents();
      oldNodes.replaceWith(nodes437);
    }));
  }
  renderControl146();
  callback(root644); return subs__;
  
  return subs__;
};

ui.mMasterDetail = function(items, masterItem, detail, elements, callback) {
  var root646 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp376 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp376.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node323 = $("<span>");
  root646.append(node323);
  var condSubs81 = new mobl.CompSubscription();
  subs__.addSub(condSubs81);
  var oldValue81;
  var renderCond81 = function() {
    var value173 = tmp376.get();
    if(oldValue81 === value173) return;
    oldValue81 = value173;
    var subs__ = condSubs81;
    subs__.unsubscribe();
    node323.empty();
    if(value173) {
      
      var current = mobl.ref(null);
      
      var node324 = $("<div>");
      node324.attr('width', "100%");
      
      
      var node325 = $("<div>");
      node325.attr('style', "float:left; width:45%; position:relative; border-right: solid 1px #cccccc;");
      
      var nodes439 = $("<span>");
      node325.append(nodes439);
      subs__.addSub((ui.group)(function(_, callback) {
        var root648 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node328 = mobl.loadingSpan();
        root648.append(node328);
        var list64;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList64 = function() {
          var subs__ = listSubs__;
          list64 = items.get();
          list64.list(function(results64) {
            node328.empty();
            for(var i64 = 0; i64 < results64.length; i64++) {
              (function() {
                var iternode64 = $("<span>");
                node328.append(iternode64);
                var it;
                it = mobl.ref(mobl.ref(results64), i64);
                var result__ = it.get() == current.get();
                var tmp372 = mobl.ref(result__);
                subs__.addSub(it.addEventListener('change', function() {
                  tmp372.set(it.get() == current.get());
                }));
                subs__.addSub(current.addEventListener('change', function() {
                  tmp372.set(it.get() == current.get());
                }));
                
                
                var node329 = $("<span>");
                iternode64.append(node329);
                var condSubs83 = new mobl.CompSubscription();
                subs__.addSub(condSubs83);
                var oldValue83;
                var renderCond83 = function() {
                  var value175 = tmp372.get();
                  if(oldValue83 === value175) return;
                  oldValue83 = value175;
                  var subs__ = condSubs83;
                  subs__.unsubscribe();
                  node329.empty();
                  if(value175) {
                    var nodes440 = $("<span>");
                    node329.append(nodes440);
                    subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                      var root649 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp403 = result__;
                        var tmp369 = mobl.ref(result__);
                        subs__.addSub(it.addEventListener('change', function() {
                          ui.indexOf(it.get(), items.get(), function(result__) {
                            var tmp401 = result__;
                            var result__ = tmp401;
                            tmp369.set(result__);
                            
                          });
                        }));
                        subs__.addSub(items.addEventListener('change', function() {
                          ui.indexOf(it.get(), items.get(), function(result__) {
                            var tmp402 = result__;
                            var result__ = tmp402;
                            tmp369.set(result__);
                            
                          });
                        }));
                        
                        var nodes441 = $("<span>");
                        root649.append(nodes441);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl148();
                        }));
                        
                        function renderControl148() {
                          subs__.addSub((masterItem.get())(it, tmp369, function(elements, callback) {
                            var root650 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root650); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes441;
                            nodes441 = node.contents();
                            oldNodes.replaceWith(nodes441);
                          }));
                        }
                        renderControl148();
                        callback(root649); return subs__;
                        
                      });
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes440;
                      nodes440 = node.contents();
                      oldNodes.replaceWith(nodes440);
                    }));
                    
                    
                  } else {
                    var result__ = function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     var result__ = it.get();
                                     current.set(result__);
                                     var result__ = true;
                                     ui.visible.set(result__);
                                     mathJAX.renderMaths(function(result__) {
                                       var tmp407 = result__;
                                       var result__ = plot.renderPlot("corePlotArea", current.get());
                                       if(callback && callback.apply) callback(); return;
                                     });
                                   };
                    var tmp371 = mobl.ref(result__);
                    
                    var nodes442 = $("<span>");
                    node329.append(nodes442);
                    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp371, mobl.ref(null), mobl.ref(true), function(_, callback) {
                      var root651 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp406 = result__;
                        var tmp370 = mobl.ref(result__);
                        subs__.addSub(it.addEventListener('change', function() {
                          ui.indexOf(it.get(), items.get(), function(result__) {
                            var tmp404 = result__;
                            var result__ = tmp404;
                            tmp370.set(result__);
                            
                          });
                        }));
                        subs__.addSub(items.addEventListener('change', function() {
                          ui.indexOf(it.get(), items.get(), function(result__) {
                            var tmp405 = result__;
                            var result__ = tmp405;
                            tmp370.set(result__);
                            
                          });
                        }));
                        
                        var nodes443 = $("<span>");
                        root651.append(nodes443);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl149();
                        }));
                        
                        function renderControl149() {
                          subs__.addSub((masterItem.get())(it, tmp370, function(elements, callback) {
                            var root652 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root652); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes443;
                            nodes443 = node.contents();
                            oldNodes.replaceWith(nodes443);
                          }));
                        }
                        renderControl149();
                        callback(root651); return subs__;
                        
                      });
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes442;
                      nodes442 = node.contents();
                      oldNodes.replaceWith(nodes442);
                    }));
                    
                    
                  }
                };
                renderCond83();
                subs__.addSub(tmp372.addEventListener('change', function() {
                  renderCond83();
                }));
                
                
                var oldNodes = iternode64;
                iternode64 = iternode64.contents();
                oldNodes.replaceWith(iternode64);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list64.addEventListener('change', function() { listSubs__.unsubscribe(); renderList64(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList64(true); }));
          });
        };
        renderList64();
        
        callback(root648); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes439;
        nodes439 = node.contents();
        oldNodes.replaceWith(nodes439);
      }));
      node324.append(node325);
      
      var node326 = $("<div>");
      node326.attr('style', "float:left; width:53%; position:relative; margin-left: 1%;");
      
      var result__ = current.get() && ui.visible.get();
      var tmp374 = mobl.ref(result__);
      subs__.addSub(current.addEventListener('change', function() {
        tmp374.set(current.get() && ui.visible.get());
      }));
      subs__.addSub(ui.visible.addEventListener('change', function() {
        tmp374.set(current.get() && ui.visible.get());
      }));
      
      
      var node327 = $("<span>");
      node326.append(node327);
      var condSubs82 = new mobl.CompSubscription();
      subs__.addSub(condSubs82);
      var oldValue82;
      var renderCond82 = function() {
        var value174 = tmp374.get();
        if(oldValue82 === value174) return;
        oldValue82 = value174;
        var subs__ = condSubs82;
        subs__.unsubscribe();
        node327.empty();
        if(value174) {
          ui.indexOf(current.get(), items.get(), function(result__) {
            var tmp400 = result__;
            var tmp373 = mobl.ref(result__);
            subs__.addSub(current.addEventListener('change', function() {
              ui.indexOf(current.get(), items.get(), function(result__) {
                var tmp398 = result__;
                var result__ = tmp398;
                tmp373.set(result__);
                
              });
            }));
            subs__.addSub(items.addEventListener('change', function() {
              ui.indexOf(current.get(), items.get(), function(result__) {
                var tmp399 = result__;
                var result__ = tmp399;
                tmp373.set(result__);
                
              });
            }));
            
            var nodes438 = $("<span>");
            node327.append(nodes438);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl147();
            }));
            
            function renderControl147() {
              subs__.addSub((detail.get())(current, tmp373, function(elements, callback) {
                var root647 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root647); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes438;
                nodes438 = node.contents();
                oldNodes.replaceWith(nodes438);
              }));
            }
            renderControl147();
            
            
          });
        } else {
          
        }
      };
      renderCond82();
      subs__.addSub(tmp374.addEventListener('change', function() {
        renderCond82();
      }));
      
      node324.append(node326);
      node323.append(node324);
      
      
      
      
      
      
    } else {
      var nodes444 = $("<span>");
      node323.append(nodes444);
      subs__.addSub((ui.group)(function(_, callback) {
        var root653 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node330 = mobl.loadingSpan();
        root653.append(node330);
        var list65;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList65 = function() {
          var subs__ = listSubs__;
          list65 = items.get();
          list65.list(function(results65) {
            node330.empty();
            for(var i65 = 0; i65 < results65.length; i65++) {
              (function() {
                var iternode65 = $("<span>");
                node330.append(iternode65);
                var it;
                it = mobl.ref(mobl.ref(results65), i65);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp411 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp368 = mobl.ref(result__);
                
                var nodes445 = $("<span>");
                iternode65.append(nodes445);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp368, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root654 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  ui.indexOf(it.get(), items.get(), function(result__) {
                    var tmp410 = result__;
                    var tmp367 = mobl.ref(result__);
                    subs__.addSub(it.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp408 = result__;
                        var result__ = tmp408;
                        tmp367.set(result__);
                        
                      });
                    }));
                    subs__.addSub(items.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp409 = result__;
                        var result__ = tmp409;
                        tmp367.set(result__);
                        
                      });
                    }));
                    
                    var nodes446 = $("<span>");
                    root654.append(nodes446);
                    subs__.addSub(masterItem.addEventListener('change', function() {
                      renderControl150();
                    }));
                    
                    function renderControl150() {
                      subs__.addSub((masterItem.get())(it, tmp367, function(elements, callback) {
                        var root655 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        callback(root655); return subs__;
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes446;
                        nodes446 = node.contents();
                        oldNodes.replaceWith(nodes446);
                      }));
                    }
                    renderControl150();
                    callback(root654); return subs__;
                    
                  });
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes445;
                  nodes445 = node.contents();
                  oldNodes.replaceWith(nodes445);
                }));
                
                var oldNodes = iternode65;
                iternode65 = iternode65.contents();
                oldNodes.replaceWith(iternode65);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list65.addEventListener('change', function() { listSubs__.unsubscribe(); renderList65(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList65(true); }));
          });
        };
        renderList65();
        
        callback(root653); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes444;
        nodes444 = node.contents();
        oldNodes.replaceWith(nodes444);
      }));
      
      
    }
  };
  renderCond81();
  subs__.addSub(tmp376.addEventListener('change', function() {
    renderCond81();
  }));
  
  callback(root646); return subs__;
  
  return subs__;
};

ui.introduction = function(elements, callback) {
  var root656 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes447 = $("<span>");
  root656.append(nodes447);
  subs__.addSub((ui.header)(mobl.ref("Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root657 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes448 = $("<span>");
    root657.append(nodes448);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), mobl.ref(null), mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root658 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root658); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes448;
      nodes448 = node.contents();
      oldNodes.replaceWith(nodes448);
    }));
    callback(root657); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes447;
    nodes447 = node.contents();
    oldNodes.replaceWith(nodes447);
  }));
  
  var intro = mobl.ref("\n<div style=\"padding:20px\">\n<img src=\"icon.png\" style=\"width:30px;height:30px; float:left; padding:5px 5px 5px 0px\"/> Mathmo is designed to give you extra practice.\n<br />\n<br />\nOn the <b>My Qs</b> tab you'll find your current set of questions under a list of topics. \nThese stay with you till you clear them or delete them individually. They'll be the same questions even if you close Mathmo and return to it later.\nTap one of the question topics to see the question itself.\n<br /><br />\nWhen you have completed a question, touch <b>Check Answer</b> to check your work and\nreply to <b>Did you agree?</b>. You may need to do a little more work to see whether your answer really is the same or not.\nThe questions will change colour according to your answer. Red means 'I didn't agree'. Green means 'I agreed'. Black means 'Answer not checked'. \n<br /><br />\nOn the <b>Add</b> tab you can generate 5 more random core, further or stats questions, or generate them singly on selected topics.\n\n<h3>Updates</h3>\nMathmo is a web application, and should update itself when you reload the app after it has been updated on the server. \n<a href=\"http://nrich.maths.org/7088\" target=\"_blank\">Further info here</a>.\n\n<h3>Credits</h3>\n<p>\nSyllabus hugging ideas: Stephen Hewson\n</p>\n<p>\nQuestion and Answer generators:\n Tom White, Edward Cree\n</p>\n<p>\n<a href=\"http://github.com/gmp26/mathmo\">Mobile Implementation:</a> Mike Pearson with contributions from\n<a href=\"http://github.com/naush/mathmo\">Li Hsuan</a>.</p>\n\n<p>\nThe following have also been important in developing mathmo\n<ul>\n<li>\n<a href=\"http://www.mobl-lang.org\">Mobl-lang</a> by Zef Hemel, University of Delft.\n</li>\n<li>\nThe <a href=\"http://code.google.com/p/flot/\">flot plotting library</a>\n</li>\n\n</ul>\n<a href=\"http://www.mathjax.org/\">\n  <img title=\"Powered by MathJax\"\n       src=\"http://www.mathjax.org/badge.gif\"\n       border=\"0\" alt=\"Powered by MathJax\" />\n</a>\n\n<h3>License</h3>\n<a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\"><img alt=\"Creative Commons License\" style=\"border-width:0\" src=\"http://i.creativecommons.org/l/by-sa/3.0/88x31.png\" /></a><br /><span xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://purl.org/dc/dcmitype/InteractiveResource\" property=\"dct:title\" rel=\"dct:type\">Mathmo</span> by <a xmlns:cc=\"http://creativecommons.org/ns#\" href=\"http://nrich.maths.org\" property=\"cc:attributionName\" rel=\"cc:attributionURL\">NRICH Project, University of Cambridge</a> is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://github.com/gmp26/mathmo\" rel=\"dct:source\">github.com</a>.\n\n\n</div>\n");
  var nodes449 = $("<span>");
  root656.append(nodes449);
  subs__.addSub((mobl.html)(intro, function(_, callback) {
    var root659 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root659); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes449;
    nodes449 = node.contents();
    oldNodes.replaceWith(nodes449);
  }));
  callback(root656); return subs__;
  
  
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
