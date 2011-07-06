mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mathJAX');
mobl.provides('plot');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root330 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node165 = $("<span>");
  root330.append(node165);
  var condSubs42 = new mobl.CompSubscription();
  subs__.addSub(condSubs42);
  var oldValue42;
  var renderCond42 = function() {
    var value110 = value.get();
    if(oldValue42 === value110) return;
    oldValue42 = value110;
    var subs__ = condSubs42;
    subs__.unsubscribe();
    node165.empty();
    if(value110) {
      var nodes225 = $("<span>");
      node165.append(nodes225);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl75();
      }));
      
      function renderControl75() {
        subs__.addSub((elements)(function(elements, callback) {
          var root331 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root331); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes225;
          nodes225 = node.contents();
          oldNodes.replaceWith(nodes225);
        }));
      }
      renderControl75();
      
      
    } else {
      var nodes226 = $("<span>");
      node165.append(nodes226);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root332 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes227 = $("<span>");
        root332.append(nodes227);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root333 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root333); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes227;
          nodes227 = node.contents();
          oldNodes.replaceWith(nodes227);
        }));
        var nodes228 = $("<span>");
        root332.append(nodes228);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,R0lGODlhIAAgAOf2AAAAAAEBAQICAgMDAwQEBAUFBQYGBgcHBwgICAkJCQoKCgsLCwwMDA0NDQ4ODg8PDxAQEBERERISEhMTExQUFBUVFRYWFhcXFxgYGBkZGRoaGhsbGxwcHB0dHR4eHh8fHyAgICEhISIiIiMjIyQkJCUlJSYmJicnJygoKCkpKSoqKisrKywsLC0tLS4uLi8vLzAwMDExMTIyMjMzMzQ0NDU1NTY2Njc3Nzg4ODk5OTo6Ojs7Ozw8PD09PT4+Pj8/P0BAQEFBQUJCQkNDQ0REREVFRUZGRkdHR0hISElJSUpKSktLS0xMTE1NTU5OTk9PT1BQUFFRUVJSUlNTU1RUVFVVVVZWVldXV1hYWFlZWVpaWltbW1xcXF1dXV5eXl9fX2BgYGFhYWJiYmNjY2RkZGVlZWZmZmdnZ2hoaGlpaWpqamtra2xsbG1tbW5ubm9vb3BwcHFxcXJycnNzc3R0dHV1dXZ2dnd3d3h4eHl5eXp6ent7e3x8fH19fX5+fn9/f4CAgIGBgYKCgoODg4SEhIWFhYaGhoeHh4iIiImJiYqKiouLi4yMjI2NjY6Ojo+Pj5CQkJGRkZKSkpOTk5SUlJWVlZaWlpeXl5iYmJmZmZqampubm5ycnJ2dnZ6enp+fn6CgoKGhoaKioqOjo6SkpKWlpaampqenp6ioqKmpqaqqqqurq6ysrK2tra6urq+vr7CwsLGxsbKysrOzs7S0tLW1tba2tre3t7i4uLm5ubq6uru7u7y8vL29vb6+vr+/v8DAwMHBwcLCwsPDw8TExMXFxcbGxsfHx8jIyMnJycrKysvLy8zMzM3Nzc7Ozs/Pz9DQ0NHR0dLS0tPT09TU1NXV1dbW1tfX19jY2NnZ2dra2tvb29zc3N3d3d7e3t/f3+Dg4OHh4eLi4uPj4+Tk5OXl5ebm5ufn5+jo6Onp6erq6uvr6+zs7O3t7e7u7u/v7/Dw8PHx8fLy8vPz8/T09PX19f///////////////////////////////////////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBQD/ACwAAAAAIAAgAAAI/gABCBxIsKDBgwgTKlzIsKHDhxAjSiSoYc+bCBMFbqCSY4DAApTgyQOUcUGkZcXAeHxQLB49SgI+xnSYAdYxZsjCDHgQLN48NAEEaFAh4oDDA3+EIXO2rAiAN96owQBQ4YVVCg87XBKWLNofAAROlAgAwIPVFxAgmrAkzJgWgxZcvADhESKGKk2MFhTgIAKBhwweNCjAMICBvwoPHMkDCNCYBwoLhFhxIm3CFYEIGUKkiIfCC2dLzDyI4k6e03hqKLQQerTBAkHCgOFCREHkDydGQFYoYAGDBK4RBiX78ACFBsQJBoAAIThDAyVguMBaEIPcEIgbBjBrtQOAAAoSTAgEcXZ3QwEnrLqQAMD6CgdUz1J3yOFFCwwBBqR/ESJoBhUk6OXQABAwQBYBKVhFAnEF1JURAB9YhcGDByHgwQUOUqjhhhx26KGGAQEAIfkEBQUA/wAsBQADABQAGAAACMwA/wkcSDDABg8BCCpc+I+KMmhKGEpcAAsdu1MFJGZwUmOgg14WgS1gqIDQLltZBoJsB0wBwwugbPXSpeXfAlro3LXKONCAQANzYt361QvIPzXZvHlROGGghkSxcgm7IzBGjQESBYpAFMsWlawMLTQx4hOsQAUNFhAwOzBAjTJs2lRhwPYfhDBs3MCRI6NuAilfAn9RUReACCFIisxAUBgAAQQGEtZVaKDp5IEkXjQGAIDDZYIlPg+84EL0PwEOTC/0ILDCZwMZKAhYGBAAIfkEBQUA/wAsBQADABIAFgAACMsA/wkcSBBDnDMQCCokGOBPt295FkpsEKubOFsKFlowAkOAwAi4uo3zxUBhgjupTEXx6GCWyFwCCTgQSOERqVWqpghQsKobuVP/GADSIrCAmU6lWrXa8e8MtWtb/r3pVGPghTyeTsFq8+9ADh3/Aqj5odADHk+lmiwMIXECEbISCRJQkCBAXIIAMBSxYgVIxrv/BuyQQsVKFhOAA9MgwpjIh8T/IKx40SJEAcj/BBQggLlz3Mue/2UIHWBE6H8UWEAGwJq1gr8ERRAMCAAh+QQFBQD/ACwFAAMAFAAWAAAIzgD/CRxI8IKaMA8IKlz47w60aXMYSmRgCpq1VhL/GUhBYiAEVtCu1VrAcEAVSJKSCGyAKiSsBAI3OBho4M2jS5iWCPwEDdsngYSswfogMMAURJA0bbLxLwwyZlf+tXFHLx2QgRTOIJLUSYxGGzcEbqL3jY4EghnMIIpEZOEcaGUYQtBxo8BCBCIUCjBwICPDBC14/IDR169AACBs4NDRI4Phwx1gSIYx4bFABCBUpPBAwHJRz6BDh8bAsLBCAKgBeGCowjCEFSxE/zuAwHJAACH5BAUFAP8ALAYAAwATABgAAAjSAP8JHDiwwhcpDggqXNgGWDE2CyP+W5AJGDJRCRQC2KiAwUYADjwFQ6Zq4UYOZuT4EMhAU7BkpgZqmPBvoxA8gQYF+ZdAUrBllggs+OOsVomNM+DkIYToxb8suX5J+ZemHLt3ZwQ2oBJnDyIrAmXMEGiJHbx3UwZSmNJ1x8I36uKRgkCwwQsXBBYqQHLFgsAABAh8HEwYgMACHlKo+JBXIkEKLyK/iOD4seQXEioPLPBBYIcBmkOLHk1a4oXSnlH/Y4BihWYRCgsY0BxAdejTEQMCACH5BAUFAP8ALAYAAwAVABYAAAjMAP8JHDhwgpUlCwgqXChwzCtaWhhK/KdA0atblhAwBMARQICBDRy9wtVJgUAFLTgQJDBjyYuPCxa9yqVJYwZI1X7JGOihC5o2NwIgGPRqFyOBj76NMxdnYAcrYNjIQfEPSipYTP6d2bb0HJSBCX5cEQMnyb8CLl4IOABKnLl0nyAQfNDjypgYC+eUSwcKw8IEI0YMWAjhypcKAzlO/PvAwD8BGFCg6LD4nwEbNlA4kFtZ4oPOEgWoBD1QRAPSqFOrXs1wA2uKJ14TSB0QACH5BAUFAP8ALAYAAwAWABYAAAjdAP8JHDiwAAsWAggqBMCwYcMlljYVUUiRYoI8m0oFKlDxn0OHC/pwMvUogcAERqI8ENjwwgsOJ/NwOsXowL8LiJxZo0NwgQ8nVFj8OzCHE6o/Ag1Ju7bNFIKBDXIUiaIFxD8jlj5NDOOMabczBAmY2HHEig6BKVb8M2DJ2rZvmFYSTIBiRxITFNlo+5bpQkUDFzIkVPhgyhYKHRMTVPDB778AihV6SMXtGJJ/DFxEHuiGnDZqmxIs0Lz534klQnioeJwhRYrSAxd4BECAAOzbuHPr3r1ZhWPdBRjCDggAIfkEBQUA/wAsBgADABYAFQAACNQAAQgcSFDBAYIIAfxbyJDhCDZoRDScSHEhAS6GIHFJOLDivwNnDEXSc2AhgiBLHEw0YCGCSTOGJAVC8K+CH2DI2jQcQGJGjg//DIQxRIlOAQV8iCVz1qmkyRYwbPzA8C+Hn0U2/mn5hcwZtDANBYh4EUOHin8COoRYuKirNEgqJ5ogq4FimWbTIlXwWEFCAIoOnliZ4LFwwwQeLDBUbJhhh1HVghn5l6BFY4Z13sGDx2tB5csL6dAbfUsBaIYcENGapeP0xAM0XcueTbu27X8hDDAMCAAh+QQFBQD/ACwGAAMAFgAVAAAIywABCBxIsKBBAP8SKlS4AEcOBgsjSkwo4IebPEUmakxoQIobPWgMKORRpEHEAQ0WCDwwxQ2fNwf+TZgDCxeZhQE8uGBRAeETN37IEEgQZ1YuX5EWFlDx4kWLB/9aoLnj4l8UV7h8CdMisekLDv8CYABb4M8tX8MMmZzogoLELr2IHXI7kQJUiQ2SQJGwsa/CDhUSAgjsN+EGTsx6MfmHgEXhhHDMnTtXS0Hjx//gsNtsK6EFFI83eDImawlmpXdPq17NurXrfx8KKAwIACH5BAUFAP8ALAYABAAXABMAAAjSAP8JHDhQAIYMAQgq/AegoUOHJaJoUbGwokICO6iEiTJA4IEWPhgsDKAggcACPKiM2WLgXwQznExtGegQw78VAgngoFJmygAEZD6dakWoZUETCkNAAYMUySZTrWJNodnww0IJFwIQiFOq1aw9Ii3+k7BwCitafMiKtchgiJIIa+P+Q8CBRAWjcgeGmBQsGa9HEg7gzNtnGzdu3bQZMTBY7h1xkMVxOwKAwom8HDD98uVLDgKBHfP+c0A6tOgdUhyIXijk0SYKqxXGEPMi9sIKBAMCACH5BAUFAP8ALAYABAAYABUAAAjRAAEIHEhQAQKCCAf+W8iQoYUZPDA0nEix4YATOIzsELDQQIkQHCsmMLBwQAocSIwQ+OcAC6JENipaaKGiJEYlQAQYqKJIUqYwBCsutGDjiId/PQxFyuQpidCGAhlEWBgGUiZQbhY8fZoEUyg4U7cKVcBjyAOxaP9pEBECQtqJJRzR4tXL04u3CwPwaebsGTRokgoQQPHWj7XDhyWtnPD2Q6RatWg5IoyXYYPLBSoniBKl8kQx7tqV8szwhq5675yQXnhkWD0zqxcaKdQhdkmKAQEAIfkEBQUA/wAsBgAEABgAFQAACNgA/wkcSLAAAYIIEyZ8kOIEA4UQCQoo8QJGiQACBSQwAKCjR48FCJ6o2ELAvwVBylB5mDBCCoQvYrD4V8DInD2CXiQMMCIhixcU/sl4o2cQIRMRBWoQqGABgAFQ8gxS5CVkUggJewhiJMZB0ogJaOho8LXsAQwfPjwYOKGsQBGCSrFyJWnFPwIo3P6b4+sXMGDBDh3U+88OMmTHDiMSiNVtB0SrVKUqhJQwQgaD9SJw4oSsZYEB8pwr96nt5wGk4rU7t+SzQDfw4rkT4/rkIGudagsksOFAwoAAIfkEBQUA/wAsBwAEABYAFQAACMIA/wkcODBAAIIIExJkICLEAYUQBQYI8eLFBgAYAQTIiDFixRICDaz4geIgQQcJK44IQIBGFjFhIiAEMRDlPxYsIPwjUSXMGjUTEHYYmEEgAgX/AuwAs2bOEwIRFcZQU2cKg6gKD6RgsQBrVAMVOGxo8E+n138e6lDa1InQibMC0bBq5eoVrD1w/7G5xZdvn7wb/Hjq1GnPiLz/CDBYjFiJEsQD63TTdkkC5E/oyHFDAnkNusxeIP/78wwVSNEaEiAMCAAh+QQFBQD/ACwIAAQAFgAXAAAIzQD/CRw4EIDBgwgPEhy4IMSHhRAj/gNRMGFCiQsHYCgB4SJGgQJC8DiSQwBBAB4+XtBhBMqSAws5SDRYoggULTkCLDxQAiOIJ1yEKPgYccCHEQmIfiwgAQMGBEoJajATCFEiNyKiCuSCKdMmTpzcDNAaplQpUmbhjI2KYc6jR47ePNQqcMGCoVohXJnigO5AOtWeObKgNUKAA6i6YZvGiEHUR0z+ufHWLRu0IVERrSrw7xG4yl2iltn8T8KhZ7ZWRKVSZmCBEhi0ZsCLMSAAIfkEBQUA/wAsCQAEABUAFwAACNgAAQgcSLCgwX8IEx7woKFAwocQIX5AmCGiRQIWEQp4QAHjwwYnUmT818EFjA8BRkas8AJGDRcCHmpQ6cGlDxEFDai0UAMIDIcqIQqokEFn0IwEHkxoYPToPwtV2Mh5s6WC039OBA0qZOiQEgBOqUAaO7YJ2KMVzPzx4yfMhKv/BiSYO8ApBStMGsBF+AZZsEEUggqYUeLfgn/QlBET5EClCGXXlPxLMw3aMmJeVLpIJs/UPwWHqEFjZunAyBrU5CWsEGmaMzSas8FjkxACkyV6R0KYoyb3yIAAIfkEBQUA/wAsCQAFABQAFgAACMsA/wkcaADDBQIDEypcyHDhgIYDGzQQkHCBCRQQ/7lwcQGARwAcMv57QXJEgIEZRJJ8UUGkQpIgHrocCCECwpkKByx4kMDjTAdArGyxIoOiwI9IP/JIs6aNmzMRZv7IQzXPmwkzIVxxA8eMjJM4ESw44DOjBCdFGOAUeAYXrDsSMiKwQeKfgk7BdNGy06BhgD3mnh35J6ZYsF20rDSEoAxeuk//EvwxFoyXIgMML0iDp46UwAmIiv0C03DAJsdoBj44YkRtQw90zogMCAAh+QQFBQD/ACwIAAUAFQAWAAAIswD/CRz4rwDBgwgPekjIsKHAAAoUAJg40eHADf9YRLAoUMWDgx8oAmB44ADHkyhTohSAQIEBlQha9BCyw8LIkyqeRJlCZcgAlDLACAVzhECJkw2QZMHSBAMAASsPGPh5MoKRHgpU/utiipMaCBxpiPiXABIsVKHSLHB4p1uxIf+20IKVKlQTh8TOfbsksE4tWKr4NLTA7Bw4TgIl9Jnl6opDS+e8jRnoAAeQtQ07vBHDwGFAACH5BAUFAP8ALAkABQAUABgAAAjRAP8JHCiwwgCCCP8BWMiQQ8KHEBEmMBAxYgsVDipGdKixY0cXHhNmDJkwgAEDAkgaCLGChQgEITnQqHEDxwcAHkcU2VmEBM6OCWwQGSIjAcl/BQqk7OiABw2jD2XoYMhwSqRDW0YKpCBwTiOBOmAMQCCI06RFWxQgvAKtyz851IYh+SdFFKdKjYIQdNFJD4IHvLZJSyQAgZpRnCydOSgQQYaDH55xm/bvwD8IcUBtagJRQzJu1DhZ/sdARg61Dx/Y4latz1Eqw2jhOBqAwwWNAQEAIfkEBQUA/wAsCQAFABMAGAAACMwA/wkc+O8CBYIIExK8oLChwgMOHbJAoSDivxQJNVgsYLGjx48fCQQAKTDFBwIeM7xY+QJCShgwXzzwaIBEixUfBnwMMGDAyIEjECRM8EIFRIIl1jxDk9BIHjhKFgy0cEecPEn/DtxoIeCAHEN96CwR+k/LuXnptPxjc6yWkH9IHBnyY8eGQBzIqtn550CWs2F+snZxdOgPEwAACnIQiMGXs2KQDPD9osiPDIUXejkzNklyVhUjBCikgMvZMUUoOw44tPkKSA1jrkhtGBAAIfkEBQUA/wAsCQAFABMAGAAACMMA/wkc+K/CBIIIEypcyHCgAQINFa4wgSCiQgsWE0LIyLGjRwAAPP7TIECkCwcZLbxY6aJBxgIfTpioEKCjAAEg/4UgU0ThARIfChD0sGueOTIJc4SxgqOiQDXy3qlrJHBGin8EtLwhs8UGxH+K3q0DZ+VfGVyldvzzceeNGS4cBNoI1kyOQFO/ZMkJYOBJWzMhBlrQINBCrF+0BAlUoAQNEgUXD9cyNHBAgwEgQxKUsOqXLT8DOPb5VetJRwxcoEBeGBAAIfkEBQUA/wAsCQAHABMAFgAACLcA/wkcSPAfAAAFBhRcWFCDChIHGEqcSLGixYsYM2q8EEDjPxYRNa4IibGEBAAeB4IQM4TkwAEYKCgc2KHWum5gFqoosoNEgYFz1JkDZ+ifARck/gUYUiXJjxEd/x0yF65alH9dTk2i8S/GlypLfCgQSCPXMDYHGGRq9YnMvwJAvFQhkmBghQwCKYxqFWrOTwQugoA4iJIgBVGtRtkpQFgA4cIDI3RqRQoORgFzEh/JaGEKkroSAwIAIfkEBQUA/wAsBwAHABUAFgAACMwA/wkcSLDgPwEGEyYUYUChw4EQHj58ILGixYsYMxYYWAEAxgsDVRhg0UOIE5AWRdoYdStRA4sjBjaosNFigIIfzERRYFDAhAkJR7gKZ02MQQ4wXoQoiGEUOG3T/vwrgOJDgAAwcsR4sQGA139ivmmrlswKgCmU/rD4R4KIVhQDBv7ZZs1ZnX8LFGVSVOXfgBdDcpRAKFAGrF9sXkqYpImRGAL/DIQIsaAghQ6Q/0mIpMlRGQJeQ4dO+KCRpkdgMv4Lc7qHaghFdiBwGBAAIfkEBQUA/wAsBgAOABYADwAACLwA/1lYkeKfwYMIE/6bIFCVLUqAVCic+A8FAQzO6NGLx4WiwhMD/lHx1WwSBI8JHyCkgLLlvw5gmrhUGKIUtWRbFGJ48WKihU3TmhWrY1CEhn8ARPB8kQFhADnSmhnT9eRfkj9pRvy7sLSEgIMKUDU79kuMAQV5CMkh8k9ABxcvOACY+2+AnmPB4ij4BwEQoTpPQgp4MIFASiNEGBh84IfQnSghZxpMYIcQHiUBJB9EEkiOCc0HDZj4kJliQAAh+QQFBQD/ACwGAAcAFgAWAAAIzAD/CRxIsOA/AgYHkkg4EAMKhhAjSpxIsaLFgRUsDLj4L0AVZtEyYagYQeCyeCivVDwx4AIyduzUaalYQsC/KLeKOeIokMEEngQ5aEGSwGAACBBsGvywyViuKQldMKwQiVgvWmoOYvj5LwRENcN62UJ15F+PM1E0/LMwUEQAgpx63XKVpQACM2uyyADwj8O/FhUICohzC5aZohHesNmyQ6kDBm8JOgDiY4FAB2vYdOmhtOIBLmy+wABAurTp06U/TBFSkiFq0wUEvC4dEAAh+QQFBQD/ACwGAA0AFgAQAAAIsAD//aNQQaDBgwgRSjG2rNKFhBBPQPhXgRi6dOmoQIRYQoCFX+LEgbuysWQTV7wOPSjJUgLLl/8yTAmCACbCDo5qoVrCkgDCCYVosQrl5d8ACQwAADhoAWEYWaxGVfLxL0aTGysPdlC6NIEjVqQ0Ofl3IEqUHiAMtmAx8aAZUpuw1HSQJQoQEwEELlDAdem/BjlqGBCoYIoUIXhtGgywQ8oQDYoPMlDhYUDJvpgzaw4IACH5BAUFAP8ALAUACQAWABMAAAjDAP8J/FekxsCDCBMK3CPJoMKHA0PkgjQDokUQYjRYRGhgwoV/BzYivPBIGLJilyyIFOjACzdu3bx9C7NSoBZrOK1V61JzBIZFuHLJIkRhpYgF/wpYwDCBQE2FF5boCPn0n4ZAoigFqRoBTyhMjKD8E8AgAUQAaK98wuQIEI1/I2iscIBQ40AEfzBBKjSEQIEdNmCECCCQBQqkB7VAMrQkJIIegUsIDHCgQMIFMlpYToojsIiqAkPQaAEB9NgHDNCqXh0QACH5BAUFAP8ALAQABwAYABUAAAjaAP8JHNigwMCDCBMOxIHrjMKHCRvRc4YEosV/f+LR+8Th4kMQu+J9m+Hx4YczTAyWHCjBAoWVCHdgutVrF6QLKxv8U/Dp2TNo0aS5WTkiQIJLyJImDbNSRIB/NS6tYlVKD86SCgYqqGAhAkyIFITMMPB14IU4jfzYKPvvQZpFguoE+Rcgq0AQLBUyUSToDhoV/zC4GFhhYIaEBMoIytPGxoABKF68MLziRIKBADID8FGHTQ+DBVRIJvEvM9mHBDxwGCBwwAnJHzTLnk07s4UVKBhArD3bgMqHAQEAIfkEBQUA/wAsBAAHABUAFQAACLYA/wkc+MBCgIEIEya08c8ZmwEDFEoUiIgdPHRIJk7Uk65dPEAaJX6glY7clJASPYxJgnJggQgVJBhoOfBGo1WxXh2yQDPBpF/AggkjZoYmgkW3buFKqoXmvxiJNnGq9KaC038JJlB4cFVhBBwqCnSdAMbOGRVXE1yhk2YLjJAREMKQk8aLkw0hLwDYC+BFGjBUVgj4d4ImAyJMUhBoyXcvgQMHBZoQqKHrPwgmSiSw/G/AYIUBAQAh+QQFBQD/ACwEAAcAFwAVAAAIswD/CRwoocLAgwgTDsx1LI3ChwcFiTsHzghEiHS8jUPH5+LDDqu8bYPi8aMXiyUPQpgQISVCGYE6jRLFR4LLBQgKuXIFK5YsKi5FHOhTqmjRKC4FrtCjSBEhMTaT/kMAIYKDAVITOmgRQkDWfxCadGGyIeuAIVueAAFx8UHCC1WeDKER9SGFhBSYFMHBIcBDFSQOJBQQYsUFrA8LIP4HoLHjAI4FjPh6kMEIDwYo/wvg92FAACH5BAUFAP8ALAQABQAVABcAAAjRAP8JHEjw34YpFAQUXJihQwCBAR7dirGwIJBdxMgM+PcgWS0ZFQcGMGRNWzUz/yAgWxWSoJxo1rhdQ/JPDqeWAzeQinbNm6F/BDrgHJhiVLRpYIYu3MBlygGlQB1EeFAAqsAWdBpJkhQnAtQDdjRt4uTp0xKoBtpAWrv2iNUSau7ciUMFgtV/Bxw8WKDwLsEFHyo8vKsgh5AZFO4KaPGDBgyhVhfkcOzCb4EVMFxgwPmhAIDPnxlkoPCQQIqKD0GrBh0ghF+CCDxALri6tm3QAQEAIfkEAQUA/wAsBAAFABUAFgAACMYA/wkcSPCfhjVZGBQsaIFKjgEDF8V7N2fhwAOBlhUDM3BYPHqKLAqUgOpYs2Rh/j0IFm9eGZH/BOQRhuzZsiL/3nh7BgPmvw6XhCWL9kfgCQ4BfP4zYUmYMS1KF2Ko0iTqQAYPHFgdWOHLHkCAxjywGiAKoUKHECkKQtZJnrdveWylwCRMGC5EGmyNuYBBgr0LD1DQC9hACRguAAfwAOPFC8ADTjiOCoGggBAvWkQlUNAABYVRAYgeTRrAB4EYAAvkcAFiwYAAOw=="), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root334 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root334); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes228;
          nodes228 = node.contents();
          oldNodes.replaceWith(nodes228);
        }));
        callback(root332); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes226;
        nodes226 = node.contents();
        oldNodes.replaceWith(nodes226);
      }));
      
      
    }
  };
  renderCond42();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond42();
  }));
  
  callback(root330); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
  var root335 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node166 = $("<div>");
  
  var ref171 = mobl.ref(ui.headerStyle);
  if(ref171.get() !== null) {
    node166.attr('class', ref171.get());
    subs__.addSub(ref171.addEventListener('change', function(_, ref, val) {
      node166.attr('class', val);
    }));
    
  }
  subs__.addSub(ref171.rebind());
  
  var val87 = onclick.get();
  if(val87 !== null) {
    subs__.addSub(mobl.domBind(node166, 'tap', val87));
  }
  
  var ref172 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref172.get() !== null) {
    node166.attr('style', ref172.get());
    subs__.addSub(ref172.addEventListener('change', function(_, ref, val) {
      node166.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node166.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref172.rebind());
  
  
  var node169 = $("<div>");
  
  var ref170 = mobl.ref(ui.headerContainerStyle);
  if(ref170.get() !== null) {
    node169.attr('class', ref170.get());
    subs__.addSub(ref170.addEventListener('change', function(_, ref, val) {
      node169.attr('class', val);
    }));
    
  }
  subs__.addSub(ref170.rebind());
  
  
  var node170 = $("<div>");
  
  var ref168 = text;
  node170.text(""+ref168.get());
  var ignore33 = false;
  subs__.addSub(ref168.addEventListener('change', function(_, ref, val) {
    if(ignore33) return;
    node170.text(""+val);
  }));
  subs__.addSub(ref168.rebind());
  
  
  var ref169 = mobl.ref(ui.headerTextStyle);
  if(ref169.get() !== null) {
    node170.attr('class', ref169.get());
    subs__.addSub(ref169.addEventListener('change', function(_, ref, val) {
      node170.attr('class', val);
    }));
    
  }
  subs__.addSub(ref169.rebind());
  
  node169.append(node170);
  node166.append(node169);
  var nodes229 = $("<span>");
  node166.append(nodes229);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl76();
  }));
  
  function renderControl76() {
    subs__.addSub((elements)(function(elements, callback) {
      var root336 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root336); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes229;
      nodes229 = node.contents();
      oldNodes.replaceWith(nodes229);
    }));
  }
  renderControl76();
  root335.append(node166);
  
  var node167 = $("<span>");
  root335.append(node167);
  var condSubs43 = new mobl.CompSubscription();
  subs__.addSub(condSubs43);
  var oldValue43;
  var renderCond43 = function() {
    var value111 = fixedPosition.get();
    if(oldValue43 === value111) return;
    oldValue43 = value111;
    var subs__ = condSubs43;
    subs__.unsubscribe();
    node167.empty();
    if(value111) {
      
      var node168 = $("<div>");
      node168.attr('id', "hello");
      node168.attr('style', "height: 2.9em;");
      
      node167.append(node168);
      
      
    } else {
      
    }
  };
  renderCond43();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond43();
  }));
  
  callback(root335); return subs__;
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root337 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref173 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref173.get() !== null) {
    sp.attr('class', ref173.get());
    subs__.addSub(ref173.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref173.rebind());
  
  var val88 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val88 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val88));
  }
  
  var val89 = function(event, callback) {
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
  if(val89 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val89));
  }
  
  var val90 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after27(result__) {
                    var tmp242 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after27);if(result__ !== undefined) after27(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val90 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val90));
  }
  
  var val91 = function(event, callback) {
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
  if(val91 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val91));
  }
  
  var ref174 = text;
  sp.text(""+ref174.get());
  var ignore34 = false;
  subs__.addSub(ref174.addEventListener('change', function(_, ref, val) {
    if(ignore34) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref174.rebind());
  
  
  root337.append(sp);
  callback(root337); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root338 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes230 = $("<span>");
  root338.append(nodes230);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root339 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root339); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes230;
    nodes230 = node.contents();
    oldNodes.replaceWith(nodes230);
  }));
  callback(root338); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root340 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes231 = $("<span>");
  root340.append(nodes231);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root341 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root341); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes231;
    nodes231 = node.contents();
    oldNodes.replaceWith(nodes231);
  }));
  callback(root340); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root342 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node171 = $("<ul>");
  
  var ref175 = mobl.ref(ui.groupStyle);
  if(ref175.get() !== null) {
    node171.attr('class', ref175.get());
    subs__.addSub(ref175.addEventListener('change', function(_, ref, val) {
      node171.attr('class', val);
    }));
    
  }
  subs__.addSub(ref175.rebind());
  
  var nodes232 = $("<span>");
  node171.append(nodes232);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl77();
  }));
  
  function renderControl77() {
    subs__.addSub((elements)(function(elements, callback) {
      var root343 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root343); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes232;
      nodes232 = node.contents();
      oldNodes.replaceWith(nodes232);
    }));
  }
  renderControl77();
  root342.append(node171);
  callback(root342); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root344 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node172 = $("<img>");
  
  var ref176 = url;
  if(ref176.get() !== null) {
    node172.attr('src', ref176.get());
    subs__.addSub(ref176.addEventListener('change', function(_, ref, val) {
      node172.attr('src', val);
    }));
    
  }
  subs__.addSub(ref176.rebind());
  
  var ref177 = width;
  if(ref177.get() !== null) {
    node172.attr('width', ref177.get());
    subs__.addSub(ref177.addEventListener('change', function(_, ref, val) {
      node172.attr('width', val);
    }));
    
  }
  subs__.addSub(ref177.rebind());
  
  var ref178 = height;
  if(ref178.get() !== null) {
    node172.attr('height', ref178.get());
    subs__.addSub(ref178.addEventListener('change', function(_, ref, val) {
      node172.attr('height', val);
    }));
    
  }
  subs__.addSub(ref178.rebind());
  
  var ref179 = style;
  if(ref179.get() !== null) {
    node172.attr('class', ref179.get());
    subs__.addSub(ref179.addEventListener('change', function(_, ref, val) {
      node172.attr('class', val);
    }));
    
  }
  subs__.addSub(ref179.rebind());
  
  var val92 = onclick.get();
  if(val92 !== null) {
    subs__.addSub(mobl.domBind(node172, 'tap', val92));
  }
  
  var ref180 = valign;
  if(ref180.get() !== null) {
    node172.attr('valign', ref180.get());
    subs__.addSub(ref180.addEventListener('change', function(_, ref, val) {
      node172.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref180.rebind());
  
  var ref181 = align;
  if(ref181.get() !== null) {
    node172.attr('align', ref181.get());
    subs__.addSub(ref181.addEventListener('change', function(_, ref, val) {
      node172.attr('align', val);
    }));
    
  }
  subs__.addSub(ref181.rebind());
  
  root344.append(node172);
  callback(root344); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root345 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref182 = mobl.ref(ui.itemStyle);
  if(ref182.get() !== null) {
    el.attr('class', ref182.get());
    subs__.addSub(ref182.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref182.rebind());
  
  var ref183 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref183.get() !== null) {
    el.attr('class', ref183.get());
    subs__.addSub(ref183.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref183.rebind());
  
  var val93 = onswipe.get();
  if(val93 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val93));
  }
  
  var val94 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp243 = result__;
                                           function after28(result__) {
                                             var tmp244 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after28);if(result__ !== undefined) after28(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp245 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val94 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val94));
  }
  
  var nodes233 = $("<span>");
  el.append(nodes233);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl78();
  }));
  
  function renderControl78() {
    subs__.addSub((elements)(function(elements, callback) {
      var root346 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root346); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes233;
      nodes233 = node.contents();
      oldNodes.replaceWith(nodes233);
    }));
  }
  renderControl78();
  root345.append(el);
  callback(root345); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root347 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node173 = $("<input>");
  node173.attr('type', "checkbox");
  
  var ref185 = b;
  node173.attr('checked', !!ref185.get());
  subs__.addSub(ref185.addEventListener('change', function(_, ref, val) {
    if(ref === ref185) node173.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node173, 'change', function() {
    b.set(!!node173.attr('checked'));
  }));
  
  var val96 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val96 !== null) {
    subs__.addSub(mobl.domBind(node173, 'tap', val96));
  }
  
  var val97 = onchange.get();
  if(val97 !== null) {
    subs__.addSub(mobl.domBind(node173, 'change', val97));
  }
  
  root347.append(node173);
  
  root347.append(" ");
  
  var node174 = $("<span>");
  
  var ref184 = label;
  node174.text(""+ref184.get());
  var ignore35 = false;
  subs__.addSub(ref184.addEventListener('change', function(_, ref, val) {
    if(ignore35) return;
    node174.text(""+val);
  }));
  subs__.addSub(ref184.rebind());
  
  
  var val95 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after29(result__) {
                    var tmp246 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after29);if(result__ !== undefined) after29(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val95 !== null) {
    subs__.addSub(mobl.domBind(node174, 'tap', val95));
  }
  
  root347.append(node174);
  callback(root347); return subs__;
  
  
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
  var root348 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node175 = $("<span>");
  root348.append(node175);
  var condSubs44 = new mobl.CompSubscription();
  subs__.addSub(condSubs44);
  var oldValue44;
  var renderCond44 = function() {
    var value112 = label.get();
    if(oldValue44 === value112) return;
    oldValue44 = value112;
    var subs__ = condSubs44;
    subs__.unsubscribe();
    node175.empty();
    if(value112) {
      var nodes234 = $("<span>");
      node175.append(nodes234);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root349 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root349); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes234;
        nodes234 = node.contents();
        oldNodes.replaceWith(nodes234);
      }));
      
      
    } else {
      
    }
  };
  renderCond44();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond44();
  }));
  
  
  var node176 = $("<span>");
  root348.append(node176);
  var condSubs45 = new mobl.CompSubscription();
  subs__.addSub(condSubs45);
  var oldValue45;
  var renderCond45 = function() {
    var value113 = validator.get();
    if(oldValue45 === value113) return;
    oldValue45 = value113;
    var subs__ = condSubs45;
    subs__.unsubscribe();
    node176.empty();
    if(value113) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after33(result__) {
        var tmp247 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp248 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node177 = $("<input>");
        
        var ref186 = inputType;
        if(ref186.get() !== null) {
          node177.attr('type', ref186.get());
          subs__.addSub(ref186.addEventListener('change', function(_, ref, val) {
            node177.attr('type', val);
          }));
          
        }
        subs__.addSub(ref186.rebind());
        
        var ref187 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref187.get() !== null) {
          node177.attr('class', ref187.get());
          subs__.addSub(ref187.addEventListener('change', function(_, ref, val) {
            node177.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node177.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node177.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node177.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref187.rebind());
        
        var ref188 = placeholder;
        if(ref188.get() !== null) {
          node177.attr('placeholder', ref188.get());
          subs__.addSub(ref188.addEventListener('change', function(_, ref, val) {
            node177.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref188.rebind());
        
        var ref189 = temp;
        node177.val(""+ref189.get());
        var ignore36 = false;
        subs__.addSub(ref189.addEventListener('change', function(_, ref, val) {
          if(ignore36) return;
          node177.val(""+val);
        }));
        subs__.addSub(ref189.rebind());
        
        subs__.addSub(mobl.domBind(node177, 'keyup change', function() {
          ignore36 = true;
          temp.set(mobl.stringTomobl__String(node177.val()));
          ignore36 = false;
        }));
        
        
        var val98 = onchange.get();
        if(val98 !== null) {
          subs__.addSub(mobl.domBind(node177, 'change', val98));
        }
        
        var val99 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after30(result__) {
                          var tmp249 = result__;
                          function after31(result__) {
                            var tmp250 = result__;
                            var result__ = tmp250;
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
                            var tmp250 = result__;
                            var result__ = tmp250;
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
        if(val99 !== null) {
          subs__.addSub(mobl.domBind(node177, 'keyup', val99));
        }
        
        var val100 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val100 !== null) {
          subs__.addSub(mobl.domBind(node177, 'blur', val100));
        }
        
        node176.append(node177);
        var nodes235 = $("<span>");
        node176.append(nodes235);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root350 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root350); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes235;
          nodes235 = node.contents();
          oldNodes.replaceWith(nodes235);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after33);if(result__ !== undefined) after33(result__);
    } else {
      
      var node178 = $("<input>");
      
      var ref190 = inputType;
      if(ref190.get() !== null) {
        node178.attr('type', ref190.get());
        subs__.addSub(ref190.addEventListener('change', function(_, ref, val) {
          node178.attr('type', val);
        }));
        
      }
      subs__.addSub(ref190.rebind());
      
      var ref191 = style;
      if(ref191.get() !== null) {
        node178.attr('class', ref191.get());
        subs__.addSub(ref191.addEventListener('change', function(_, ref, val) {
          node178.attr('class', val);
        }));
        
      }
      subs__.addSub(ref191.rebind());
      
      var ref192 = placeholder;
      if(ref192.get() !== null) {
        node178.attr('placeholder', ref192.get());
        subs__.addSub(ref192.addEventListener('change', function(_, ref, val) {
          node178.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref192.rebind());
      
      var ref193 = s;
      node178.val(""+ref193.get());
      var ignore37 = false;
      subs__.addSub(ref193.addEventListener('change', function(_, ref, val) {
        if(ignore37) return;
        node178.val(""+val);
      }));
      subs__.addSub(ref193.rebind());
      
      subs__.addSub(mobl.domBind(node178, 'keyup change', function() {
        ignore37 = true;
        s.set(mobl.stringTomobl__String(node178.val()));
        ignore37 = false;
      }));
      
      
      var val101 = onchange.get();
      if(val101 !== null) {
        subs__.addSub(mobl.domBind(node178, 'change', val101));
      }
      
      var val102 = onkeyup.get();
      if(val102 !== null) {
        subs__.addSub(mobl.domBind(node178, 'keyup', val102));
      }
      
      var val103 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val103 !== null) {
        subs__.addSub(mobl.domBind(node178, 'blur', val103));
      }
      
      node176.append(node178);
      
      
    }
  };
  renderCond45();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond45();
  }));
  
  callback(root348); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root351 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes236 = $("<span>");
  root351.append(nodes236);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root352 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root352); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes236;
    nodes236 = node.contents();
    oldNodes.replaceWith(nodes236);
  }));
  callback(root351); return subs__;
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root353 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes237 = $("<span>");
  root353.append(nodes237);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root354 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root354); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes237;
    nodes237 = node.contents();
    oldNodes.replaceWith(nodes237);
  }));
  callback(root353); return subs__;
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root355 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node179 = $("<span>");
  root355.append(node179);
  var condSubs46 = new mobl.CompSubscription();
  subs__.addSub(condSubs46);
  var oldValue46;
  var renderCond46 = function() {
    var value114 = label.get();
    if(oldValue46 === value114) return;
    oldValue46 = value114;
    var subs__ = condSubs46;
    subs__.unsubscribe();
    node179.empty();
    if(value114) {
      var nodes238 = $("<span>");
      node179.append(nodes238);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root356 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root356); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes238;
        nodes238 = node.contents();
        oldNodes.replaceWith(nodes238);
      }));
      
      
    } else {
      
    }
  };
  renderCond46();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond46();
  }));
  
  
  var node180 = $("<input>");
  node180.attr('type', "range");
  
  var ref194 = n;
  node180.val(""+ref194.get());
  var ignore38 = false;
  subs__.addSub(ref194.addEventListener('change', function(_, ref, val) {
    if(ignore38) return;
    node180.val(""+val);
  }));
  subs__.addSub(ref194.rebind());
  
  subs__.addSub(mobl.domBind(node180, 'keyup change', function() {
    ignore38 = true;
    n.set(mobl.stringTomobl__Num(node180.val()));
    ignore38 = false;
  }));
  
  
  var ref195 = min;
  if(ref195.get() !== null) {
    node180.attr('min', ref195.get());
    subs__.addSub(ref195.addEventListener('change', function(_, ref, val) {
      node180.attr('min', val);
    }));
    
  }
  subs__.addSub(ref195.rebind());
  
  var ref196 = max;
  if(ref196.get() !== null) {
    node180.attr('max', ref196.get());
    subs__.addSub(ref196.addEventListener('change', function(_, ref, val) {
      node180.attr('max', val);
    }));
    
  }
  subs__.addSub(ref196.rebind());
  
  var ref197 = step;
  if(ref197.get() !== null) {
    node180.attr('step', ref197.get());
    subs__.addSub(ref197.addEventListener('change', function(_, ref, val) {
      node180.attr('step', val);
    }));
    
  }
  subs__.addSub(ref197.rebind());
  node180.attr('style', "width: 99%;");
  
  var val104 = onchange.get();
  if(val104 !== null) {
    subs__.addSub(mobl.domBind(node180, 'change', val104));
  }
  
  var val105 = onkeyup.get();
  if(val105 !== null) {
    subs__.addSub(mobl.domBind(node180, 'keyup', val105));
  }
  
  var ref198 = placeholder;
  if(ref198.get() !== null) {
    node180.attr('placeholder', ref198.get());
    subs__.addSub(ref198.addEventListener('change', function(_, ref, val) {
      node180.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref198.rebind());
  
  root355.append(node180);
  callback(root355); return subs__;
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root357 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after34(result__) {
      var tmp251 = result__;
      var result__ = tmp251;
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
  var nodes239 = $("<span>");
  root357.append(nodes239);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root358 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root358); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes239;
    nodes239 = node.contents();
    oldNodes.replaceWith(nodes239);
  }));
  callback(root357); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root359 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node181 = $("<span>");
  root359.append(node181);
  var condSubs47 = new mobl.CompSubscription();
  subs__.addSub(condSubs47);
  var oldValue47;
  var renderCond47 = function() {
    var value115 = label.get();
    if(oldValue47 === value115) return;
    oldValue47 = value115;
    var subs__ = condSubs47;
    subs__.unsubscribe();
    node181.empty();
    if(value115) {
      
      var node182 = $("<span>");
      node182.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref202 = label;
      node182.text(""+ref202.get());
      var ignore40 = false;
      subs__.addSub(ref202.addEventListener('change', function(_, ref, val) {
        if(ignore40) return;
        node182.text(""+val);
      }));
      subs__.addSub(ref202.rebind());
      
      
      node181.append(node182);
      
      var node183 = $("<span>");
      node183.attr('style', "float: left");
      
      
      var node184 = $("<input>");
      node184.attr('type', "password");
      
      var ref199 = style;
      if(ref199.get() !== null) {
        node184.attr('class', ref199.get());
        subs__.addSub(ref199.addEventListener('change', function(_, ref, val) {
          node184.attr('class', val);
        }));
        
      }
      subs__.addSub(ref199.rebind());
      
      var ref200 = placeholder;
      if(ref200.get() !== null) {
        node184.attr('placeholder', ref200.get());
        subs__.addSub(ref200.addEventListener('change', function(_, ref, val) {
          node184.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref200.rebind());
      
      var ref201 = s;
      node184.val(""+ref201.get());
      var ignore39 = false;
      subs__.addSub(ref201.addEventListener('change', function(_, ref, val) {
        if(ignore39) return;
        node184.val(""+val);
      }));
      subs__.addSub(ref201.rebind());
      
      subs__.addSub(mobl.domBind(node184, 'keyup change', function() {
        ignore39 = true;
        s.set(mobl.stringTomobl__String(node184.val()));
        ignore39 = false;
      }));
      
      
      var val106 = onchange.get();
      if(val106 !== null) {
        subs__.addSub(mobl.domBind(node184, 'change', val106));
      }
      
      var val107 = onkeyup.get();
      if(val107 !== null) {
        subs__.addSub(mobl.domBind(node184, 'keyup', val107));
      }
      
      var val108 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val108 !== null) {
        subs__.addSub(mobl.domBind(node184, 'blur', val108));
      }
      
      node183.append(node184);
      node181.append(node183);
      
      
      
      
    } else {
      
      var node185 = $("<input>");
      node185.attr('type', "password");
      
      var ref203 = style;
      if(ref203.get() !== null) {
        node185.attr('class', ref203.get());
        subs__.addSub(ref203.addEventListener('change', function(_, ref, val) {
          node185.attr('class', val);
        }));
        
      }
      subs__.addSub(ref203.rebind());
      
      var ref204 = placeholder;
      if(ref204.get() !== null) {
        node185.attr('placeholder', ref204.get());
        subs__.addSub(ref204.addEventListener('change', function(_, ref, val) {
          node185.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref204.rebind());
      
      var ref205 = s;
      node185.val(""+ref205.get());
      var ignore41 = false;
      subs__.addSub(ref205.addEventListener('change', function(_, ref, val) {
        if(ignore41) return;
        node185.val(""+val);
      }));
      subs__.addSub(ref205.rebind());
      
      subs__.addSub(mobl.domBind(node185, 'keyup change', function() {
        ignore41 = true;
        s.set(mobl.stringTomobl__String(node185.val()));
        ignore41 = false;
      }));
      
      
      var val109 = onchange.get();
      if(val109 !== null) {
        subs__.addSub(mobl.domBind(node185, 'change', val109));
      }
      
      var val110 = onkeyup.get();
      if(val110 !== null) {
        subs__.addSub(mobl.domBind(node185, 'keyup', val110));
      }
      
      var val111 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val111 !== null) {
        subs__.addSub(mobl.domBind(node185, 'blur', val111));
      }
      
      node181.append(node185);
      
      
    }
  };
  renderCond47();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond47();
  }));
  
  callback(root359); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root360 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref210 = style;
  if(ref210.get() !== null) {
    sel.attr('class', ref210.get());
    subs__.addSub(ref210.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref210.rebind());
  
  var val112 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after35(result__) {
                    var tmp253 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after35);if(result__ !== undefined) after35(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val112 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val112));
  }
  
  
  var node186 = mobl.loadingSpan();
  sel.append(node186);
  var list33;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList33 = function() {
    var subs__ = listSubs__;
    list33 = options.get();
    list33.list(function(results33) {
      node186.empty();
      for(var i33 = 0; i33 < results33.length; i33++) {
        (function() {
          var iternode33 = $("<span>");
          node186.append(iternode33);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results33), i33), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results33), i33), "_2");
          
          var node187 = $("<option>");
          
          var ref206 = optionDescription;
          node187.text(""+ref206.get());
          var ignore42 = false;
          subs__.addSub(ref206.addEventListener('change', function(_, ref, val) {
            if(ignore42) return;
            node187.text(""+val);
          }));
          subs__.addSub(ref206.rebind());
          
          
          var ref207 = optionStyle;
          if(ref207.get() !== null) {
            node187.attr('class', ref207.get());
            subs__.addSub(ref207.addEventListener('change', function(_, ref, val) {
              node187.attr('class', val);
            }));
            
          }
          subs__.addSub(ref207.rebind());
          
          var ref208 = optionValue;
          if(ref208.get() !== null) {
            node187.attr('value', ref208.get());
            subs__.addSub(ref208.addEventListener('change', function(_, ref, val) {
              node187.attr('value', val);
            }));
            
          }
          subs__.addSub(ref208.rebind());
          
          var ref209 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref209.get() !== null) {
            node187.attr('selected', ref209.get());
            subs__.addSub(ref209.addEventListener('change', function(_, ref, val) {
              node187.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node187.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node187.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref209.rebind());
          
          iternode33.append(node187);
          
          var oldNodes = iternode33;
          iternode33 = iternode33.contents();
          oldNodes.replaceWith(iternode33);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list33.addEventListener('change', function() { listSubs__.unsubscribe(); renderList33(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList33(true); }));
    });
  };
  renderList33();
  
  root360.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root360); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root361 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes240 = $("<span>");
    root361.append(nodes240);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root362 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node188 = mobl.loadingSpan();
      root362.append(node188);
      var list34;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList34 = function() {
        var subs__ = listSubs__;
        list34 = tabs.get();
        list34.list(function(results34) {
          node188.empty();
          for(var i34 = 0; i34 < results34.length; i34++) {
            (function() {
              var iternode34 = $("<span>");
              node188.append(iternode34);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results34), i34), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results34), i34), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results34), i34), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp211 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp211.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp211.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp211.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp211.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp210 = mobl.ref(result__);
              
              var nodes241 = $("<span>");
              iternode34.append(nodes241);
              subs__.addSub((mobl.span)(tmp211, mobl.ref(null), tmp210, mobl.ref(null), function(_, callback) {
                var root363 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes242 = $("<span>");
                root363.append(nodes242);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root364 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root364); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes242;
                  nodes242 = node.contents();
                  oldNodes.replaceWith(nodes242);
                }));
                callback(root363); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes241;
                nodes241 = node.contents();
                oldNodes.replaceWith(nodes241);
              }));
              
              var oldNodes = iternode34;
              iternode34 = iternode34.contents();
              oldNodes.replaceWith(iternode34);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list34.addEventListener('change', function() { listSubs__.unsubscribe(); renderList34(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList34(true); }));
        });
      };
      renderList34();
      
      callback(root362); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes240;
      nodes240 = node.contents();
      oldNodes.replaceWith(nodes240);
    }));
    
    var node189 = mobl.loadingSpan();
    root361.append(node189);
    var list35;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList35 = function() {
      var subs__ = listSubs__;
      list35 = tabs.get();
      list35.list(function(results35) {
        node189.empty();
        for(var i35 = 0; i35 < results35.length; i35++) {
          (function() {
            var iternode35 = $("<span>");
            node189.append(iternode35);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results35), i35), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results35), i35), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results35), i35), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp212 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp212.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp212.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp212.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp212.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes243 = $("<span>");
            iternode35.append(nodes243);
            subs__.addSub((mobl.block)(tmp212, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root365 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes244 = $("<span>");
              root365.append(nodes244);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root366 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes245 = $("<span>");
                root366.append(nodes245);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl79();
                }));
                
                function renderControl79() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root367 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root367); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes245;
                    nodes245 = node.contents();
                    oldNodes.replaceWith(nodes245);
                  }));
                }
                renderControl79();
                callback(root366); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes244;
                nodes244 = node.contents();
                oldNodes.replaceWith(nodes244);
              }));
              callback(root365); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes243;
              nodes243 = node.contents();
              oldNodes.replaceWith(nodes243);
            }));
            
            var oldNodes = iternode35;
            iternode35 = iternode35.contents();
            oldNodes.replaceWith(iternode35);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list35.addEventListener('change', function() { listSubs__.unsubscribe(); renderList35(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList35(true); }));
      });
    };
    renderList35();
    
    callback(root361); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes240 = $("<span>");
      root361.append(nodes240);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root362 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node188 = mobl.loadingSpan();
        root362.append(node188);
        var list34;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList34 = function() {
          var subs__ = listSubs__;
          list34 = tabs.get();
          list34.list(function(results34) {
            node188.empty();
            for(var i34 = 0; i34 < results34.length; i34++) {
              (function() {
                var iternode34 = $("<span>");
                node188.append(iternode34);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results34), i34), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results34), i34), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results34), i34), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp211 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp211.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp211.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp211.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp211.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp210 = mobl.ref(result__);
                
                var nodes241 = $("<span>");
                iternode34.append(nodes241);
                subs__.addSub((mobl.span)(tmp211, mobl.ref(null), tmp210, mobl.ref(null), function(_, callback) {
                  var root363 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes242 = $("<span>");
                  root363.append(nodes242);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root364 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root364); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes242;
                    nodes242 = node.contents();
                    oldNodes.replaceWith(nodes242);
                  }));
                  callback(root363); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes241;
                  nodes241 = node.contents();
                  oldNodes.replaceWith(nodes241);
                }));
                
                var oldNodes = iternode34;
                iternode34 = iternode34.contents();
                oldNodes.replaceWith(iternode34);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list34.addEventListener('change', function() { listSubs__.unsubscribe(); renderList34(true); }));
            subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList34(true); }));
          });
        };
        renderList34();
        
        callback(root362); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes240;
        nodes240 = node.contents();
        oldNodes.replaceWith(nodes240);
      }));
      
      var node189 = mobl.loadingSpan();
      root361.append(node189);
      var list35;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList35 = function() {
        var subs__ = listSubs__;
        list35 = tabs.get();
        list35.list(function(results35) {
          node189.empty();
          for(var i35 = 0; i35 < results35.length; i35++) {
            (function() {
              var iternode35 = $("<span>");
              node189.append(iternode35);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results35), i35), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results35), i35), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results35), i35), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp212 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp212.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp212.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp212.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp212.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes243 = $("<span>");
              iternode35.append(nodes243);
              subs__.addSub((mobl.block)(tmp212, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root365 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes244 = $("<span>");
                root365.append(nodes244);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root366 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes245 = $("<span>");
                  root366.append(nodes245);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl79();
                  }));
                  
                  function renderControl79() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root367 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root367); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes245;
                      nodes245 = node.contents();
                      oldNodes.replaceWith(nodes245);
                    }));
                  }
                  renderControl79();
                  callback(root366); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes244;
                  nodes244 = node.contents();
                  oldNodes.replaceWith(nodes244);
                }));
                callback(root365); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes243;
                nodes243 = node.contents();
                oldNodes.replaceWith(nodes243);
              }));
              
              var oldNodes = iternode35;
              iternode35 = iternode35.contents();
              oldNodes.replaceWith(iternode35);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list35.addEventListener('change', function() { listSubs__.unsubscribe(); renderList35(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList35(true); }));
        });
      };
      renderList35();
      
      callback(root361); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root368 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node190 = $("<div>");
  
  var ref214 = mobl.ref(ui.searchboxStyle);
  if(ref214.get() !== null) {
    node190.attr('class', ref214.get());
    subs__.addSub(ref214.addEventListener('change', function(_, ref, val) {
      node190.attr('class', val);
    }));
    
  }
  subs__.addSub(ref214.rebind());
  
  
  var node191 = $("<input>");
  node191.attr('type', "search");
  
  var ref211 = mobl.ref(ui.searchBoxInputStyle);
  if(ref211.get() !== null) {
    node191.attr('class', ref211.get());
    subs__.addSub(ref211.addEventListener('change', function(_, ref, val) {
      node191.attr('class', val);
    }));
    
  }
  subs__.addSub(ref211.rebind());
  
  var ref212 = placeholder;
  if(ref212.get() !== null) {
    node191.attr('placeholder', ref212.get());
    subs__.addSub(ref212.addEventListener('change', function(_, ref, val) {
      node191.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref212.rebind());
  
  var ref213 = s;
  node191.val(""+ref213.get());
  var ignore43 = false;
  subs__.addSub(ref213.addEventListener('change', function(_, ref, val) {
    if(ignore43) return;
    node191.val(""+val);
  }));
  subs__.addSub(ref213.rebind());
  
  subs__.addSub(mobl.domBind(node191, 'keyup change', function() {
    ignore43 = true;
    s.set(mobl.stringTomobl__String(node191.val()));
    ignore43 = false;
  }));
  
  
  var val113 = onsearch.get();
  if(val113 !== null) {
    subs__.addSub(mobl.domBind(node191, 'change', val113));
  }
  
  var val114 = onkeyup.get();
  if(val114 !== null) {
    subs__.addSub(mobl.domBind(node191, 'keyup', val114));
  }
  node191.attr('autocorrect', false);
  node191.attr('autocapitalize', false);
  node191.attr('autocomplete', false);
  
  node190.append(node191);
  root368.append(node190);
  callback(root368); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root369 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref215 = mobl.ref(ui.contextMenuStyle);
  if(ref215.get() !== null) {
    menu.attr('class', ref215.get());
    subs__.addSub(ref215.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref215.rebind());
  
  var nodes246 = $("<span>");
  menu.append(nodes246);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl80();
  }));
  
  function renderControl80() {
    subs__.addSub((elements)(function(elements, callback) {
      var root370 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root370); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes246;
      nodes246 = node.contents();
      oldNodes.replaceWith(nodes246);
    }));
  }
  renderControl80();
  root369.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val115 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp256 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val115 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val115));
  }
  
  root369.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root369); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root371 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp240 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp240.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node192 = $("<span>");
  root371.append(node192);
  var condSubs48 = new mobl.CompSubscription();
  subs__.addSub(condSubs48);
  var oldValue48;
  var renderCond48 = function() {
    var value116 = tmp240.get();
    if(oldValue48 === value116) return;
    oldValue48 = value116;
    var subs__ = condSubs48;
    subs__.unsubscribe();
    node192.empty();
    if(value116) {
      items.get().one(function(result__) {
        var tmp257 = result__;
        var current = mobl.ref(result__);
        
        var node193 = $("<div>");
        node193.attr('width', "100%");
        
        
        var node194 = $("<div>");
        node194.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes249 = $("<span>");
        node194.append(nodes249);
        subs__.addSub((ui.group)(function(_, callback) {
          var root374 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node197 = mobl.loadingSpan();
          root374.append(node197);
          var list36;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList36 = function() {
            var subs__ = listSubs__;
            list36 = items.get();
            list36.list(function(results36) {
              node197.empty();
              for(var i36 = 0; i36 < results36.length; i36++) {
                (function() {
                  var iternode36 = $("<span>");
                  node197.append(iternode36);
                  var it;
                  it = mobl.ref(mobl.ref(results36), i36);
                  var result__ = it.get() == current.get();
                  var tmp218 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp218.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp218.set(it.get() == current.get());
                  }));
                  
                  
                  var node198 = $("<span>");
                  iternode36.append(node198);
                  var condSubs50 = new mobl.CompSubscription();
                  subs__.addSub(condSubs50);
                  var oldValue50;
                  var renderCond50 = function() {
                    var value118 = tmp218.get();
                    if(oldValue50 === value118) return;
                    oldValue50 = value118;
                    var subs__ = condSubs50;
                    subs__.unsubscribe();
                    node198.empty();
                    if(value118) {
                      var nodes250 = $("<span>");
                      node198.append(nodes250);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root375 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes251 = $("<span>");
                        root375.append(nodes251);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl82();
                        }));
                        
                        function renderControl82() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root376 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root376); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes251;
                            nodes251 = node.contents();
                            oldNodes.replaceWith(nodes251);
                          }));
                        }
                        renderControl82();
                        callback(root375); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes250;
                        nodes250 = node.contents();
                        oldNodes.replaceWith(nodes250);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp217 = mobl.ref(result__);
                      
                      var nodes252 = $("<span>");
                      node198.append(nodes252);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp217, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root377 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes253 = $("<span>");
                        root377.append(nodes253);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl83();
                        }));
                        
                        function renderControl83() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root378 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root378); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes253;
                            nodes253 = node.contents();
                            oldNodes.replaceWith(nodes253);
                          }));
                        }
                        renderControl83();
                        callback(root377); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes252;
                        nodes252 = node.contents();
                        oldNodes.replaceWith(nodes252);
                      }));
                      
                      
                    }
                  };
                  renderCond50();
                  subs__.addSub(tmp218.addEventListener('change', function() {
                    renderCond50();
                  }));
                  
                  
                  var oldNodes = iternode36;
                  iternode36 = iternode36.contents();
                  oldNodes.replaceWith(iternode36);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list36.addEventListener('change', function() { listSubs__.unsubscribe(); renderList36(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList36(true); }));
            });
          };
          renderList36();
          
          callback(root374); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes249;
          nodes249 = node.contents();
          oldNodes.replaceWith(nodes249);
        }));
        node193.append(node194);
        
        var node195 = $("<div>");
        node195.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node196 = $("<span>");
        node195.append(node196);
        var condSubs49 = new mobl.CompSubscription();
        subs__.addSub(condSubs49);
        var oldValue49;
        var renderCond49 = function() {
          var value117 = current.get();
          if(oldValue49 === value117) return;
          oldValue49 = value117;
          var subs__ = condSubs49;
          subs__.unsubscribe();
          node196.empty();
          if(value117) {
            var nodes247 = $("<span>");
            node196.append(nodes247);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl81();
            }));
            
            function renderControl81() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root372 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root372); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes247;
                nodes247 = node.contents();
                oldNodes.replaceWith(nodes247);
              }));
            }
            renderControl81();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp219 = mobl.ref(result__);
            
            var nodes248 = $("<span>");
            node196.append(nodes248);
            subs__.addSub((mobl.label)(tmp219, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root373 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root373); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes248;
              nodes248 = node.contents();
              oldNodes.replaceWith(nodes248);
            }));
            
            
          }
        };
        renderCond49();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond49();
        }));
        
        node193.append(node195);
        node192.append(node193);
        
        
        
        
        
        
      });
    } else {
      var nodes254 = $("<span>");
      node192.append(nodes254);
      subs__.addSub((ui.group)(function(_, callback) {
        var root379 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node199 = mobl.loadingSpan();
        root379.append(node199);
        var list37;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList37 = function() {
          var subs__ = listSubs__;
          list37 = items.get();
          list37.list(function(results37) {
            node199.empty();
            for(var i37 = 0; i37 < results37.length; i37++) {
              (function() {
                var iternode37 = $("<span>");
                node199.append(iternode37);
                var it;
                it = mobl.ref(mobl.ref(results37), i37);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp258 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp213 = mobl.ref(result__);
                
                var nodes255 = $("<span>");
                iternode37.append(nodes255);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp213, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root380 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes256 = $("<span>");
                  root380.append(nodes256);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl84();
                  }));
                  
                  function renderControl84() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root381 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root381); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes256;
                      nodes256 = node.contents();
                      oldNodes.replaceWith(nodes256);
                    }));
                  }
                  renderControl84();
                  callback(root380); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes255;
                  nodes255 = node.contents();
                  oldNodes.replaceWith(nodes255);
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
        
        callback(root379); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes254;
        nodes254 = node.contents();
        oldNodes.replaceWith(nodes254);
      }));
      
      
    }
  };
  renderCond48();
  subs__.addSub(tmp240.addEventListener('change', function() {
    renderCond48();
  }));
  
  callback(root371); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root382 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp216 = mobl.ref(result__);
  
  var nodes257 = $("<span>");
  root382.append(nodes257);
  subs__.addSub((ui.header)(tmp216, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root383 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp215 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp214 = mobl.ref(result__);
    
    var nodes258 = $("<span>");
    root383.append(nodes258);
    subs__.addSub((ui.backButton)(tmp214, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp215, function(_, callback) {
      var root384 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root384); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes258;
      nodes258 = node.contents();
      oldNodes.replaceWith(nodes258);
    }));
    callback(root383); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes257;
    nodes257 = node.contents();
    oldNodes.replaceWith(nodes257);
  }));
  var nodes259 = $("<span>");
  root382.append(nodes259);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl85();
  }));
  
  function renderControl85() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root385 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root385); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes259;
      nodes259 = node.contents();
      oldNodes.replaceWith(nodes259);
    }));
  }
  renderControl85();
  callback(root382); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root386 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes260 = $("<span>");
  root386.append(nodes260);
  subs__.addSub((ui.group)(function(_, callback) {
    var root387 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node200 = mobl.loadingSpan();
    root387.append(node200);
    var list38;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList38 = function() {
      var subs__ = listSubs__;
      list38 = coll.get();
      list38.list(function(results38) {
        node200.empty();
        for(var i38 = 0; i38 < results38.length; i38++) {
          (function() {
            var iternode38 = $("<span>");
            node200.append(iternode38);
            var it;
            it = mobl.ref(mobl.ref(results38), i38);
            var result__ = it.get() == selected.get();
            var tmp221 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp221.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp221.set(it.get() == selected.get());
            }));
            
            
            var node201 = $("<span>");
            iternode38.append(node201);
            var condSubs51 = new mobl.CompSubscription();
            subs__.addSub(condSubs51);
            var oldValue51;
            var renderCond51 = function() {
              var value119 = tmp221.get();
              if(oldValue51 === value119) return;
              oldValue51 = value119;
              var subs__ = condSubs51;
              subs__.unsubscribe();
              node201.empty();
              if(value119) {
                var nodes261 = $("<span>");
                node201.append(nodes261);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root388 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes262 = $("<span>");
                  root388.append(nodes262);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl86();
                  }));
                  
                  function renderControl86() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root389 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root389); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes262;
                      nodes262 = node.contents();
                      oldNodes.replaceWith(nodes262);
                    }));
                  }
                  renderControl86();
                  callback(root388); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes261;
                  nodes261 = node.contents();
                  oldNodes.replaceWith(nodes261);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp220 = mobl.ref(result__);
                
                var nodes263 = $("<span>");
                node201.append(nodes263);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp220, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root390 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes264 = $("<span>");
                  root390.append(nodes264);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl87();
                  }));
                  
                  function renderControl87() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root391 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root391); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes264;
                      nodes264 = node.contents();
                      oldNodes.replaceWith(nodes264);
                    }));
                  }
                  renderControl87();
                  callback(root390); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes263;
                  nodes263 = node.contents();
                  oldNodes.replaceWith(nodes263);
                }));
                
                
              }
            };
            renderCond51();
            subs__.addSub(tmp221.addEventListener('change', function() {
              renderCond51();
            }));
            
            
            var oldNodes = iternode38;
            iternode38 = iternode38.contents();
            oldNodes.replaceWith(iternode38);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list38.addEventListener('change', function() { listSubs__.unsubscribe(); renderList38(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList38(true); }));
      });
    };
    renderList38();
    
    callback(root387); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes260;
    nodes260 = node.contents();
    oldNodes.replaceWith(nodes260);
  }));
  callback(root386); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root392 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp259 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp222 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp222.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp222.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp222.set(coll.get().limit(n.get()));
    }));
    
    
    var node202 = mobl.loadingSpan();
    root392.append(node202);
    var list39;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList39 = function() {
      var subs__ = listSubs__;
      list39 = tmp222.get();
      list39.list(function(results39) {
        node202.empty();
        for(var i39 = 0; i39 < results39.length; i39++) {
          (function() {
            var iternode39 = $("<span>");
            node202.append(iternode39);
            var it;
            it = mobl.ref(mobl.ref(results39), i39);
            var nodes265 = $("<span>");
            iternode39.append(nodes265);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl88();
            }));
            
            function renderControl88() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root393 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root393); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes265;
                nodes265 = node.contents();
                oldNodes.replaceWith(nodes265);
              }));
            }
            renderControl88();
            
            var oldNodes = iternode39;
            iternode39 = iternode39.contents();
            oldNodes.replaceWith(iternode39);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list39.addEventListener('change', function() { listSubs__.unsubscribe(); renderList39(true); }));
        subs__.addSub(tmp222.addEventListener('change', function() { listSubs__.unsubscribe(); renderList39(true); }));
      });
    };
    renderList39();
    
    var result__ = n.get() < total.get();
    var tmp224 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp224.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp224.set(n.get() < total.get());
    }));
    
    
    var node203 = $("<span>");
    root392.append(node203);
    var condSubs52 = new mobl.CompSubscription();
    subs__.addSub(condSubs52);
    var oldValue52;
    var renderCond52 = function() {
      var value120 = tmp224.get();
      if(oldValue52 === value120) return;
      oldValue52 = value120;
      var subs__ = condSubs52;
      subs__.unsubscribe();
      node203.empty();
      if(value120) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp223 = mobl.ref(result__);
        
        var nodes266 = $("<span>");
        node203.append(nodes266);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp223, mobl.ref(null), function(_, callback) {
          var root394 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes267 = $("<span>");
          root394.append(nodes267);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root395 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root395); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes267;
            nodes267 = node.contents();
            oldNodes.replaceWith(nodes267);
          }));
          callback(root394); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes266;
          nodes266 = node.contents();
          oldNodes.replaceWith(nodes266);
        }));
        
        
      } else {
        
      }
    };
    renderCond52();
    subs__.addSub(tmp224.addEventListener('change', function() {
      renderCond52();
    }));
    
    callback(root392); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root396 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes268 = $("<span>");
  root396.append(nodes268);
  subs__.addSub((ui.group)(function(_, callback) {
    var root397 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node204 = mobl.loadingSpan();
    root397.append(node204);
    var list40;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList40 = function() {
      var subs__ = listSubs__;
      list40 = items.get();
      list40.list(function(results40) {
        node204.empty();
        for(var i40 = 0; i40 < results40.length; i40++) {
          (function() {
            var iternode40 = $("<span>");
            node204.append(iternode40);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results40), i40), "_1");it = mobl.ref(mobl.ref(mobl.ref(results40), i40), "_2");
            var nodes269 = $("<span>");
            iternode40.append(nodes269);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root398 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes270 = $("<span>");
              root398.append(nodes270);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root399 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root399); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes270;
                nodes270 = node.contents();
                oldNodes.replaceWith(nodes270);
              }));
              callback(root398); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes269;
              nodes269 = node.contents();
              oldNodes.replaceWith(nodes269);
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
    
    callback(root397); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes268;
    nodes268 = node.contents();
    oldNodes.replaceWith(nodes268);
  }));
  callback(root396); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root400 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll112) {
    coll112 = coll112.reverse();
    function processOne10() {
      var it;
      it = coll112.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll112.length > 0) processOne10(); else rest10();
      
    }
    function rest10() {
      var nodes271 = $("<span>");
      root400.append(nodes271);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root401 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp225 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp226 = mobl.ref(result__);
        
        var nodes272 = $("<span>");
        root401.append(nodes272);
        subs__.addSub((ui.backButton)(tmp226, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp225, function(_, callback) {
          var root402 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root402); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes272;
          nodes272 = node.contents();
          oldNodes.replaceWith(nodes272);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll111) {
                           coll111 = coll111.reverse();
                           function processOne9() {
                             var checked;var it;
                             var tmp261 = coll111.pop();
                             checked = tmp261._1;it = tmp261._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll111.length > 0) processOne9(); else rest9();
                               
                             } else {
                               {
                                 
                                 if(coll111.length > 0) processOne9(); else rest9();
                                 
                               }
                             }
                           }
                           function rest9() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll111.length > 0) processOne9(); else rest9();
                         });
                         
                       };
        var tmp227 = mobl.ref(result__);
        
        var nodes273 = $("<span>");
        root401.append(nodes273);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp227, function(_, callback) {
          var root403 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root403); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes273;
          nodes273 = node.contents();
          oldNodes.replaceWith(nodes273);
        }));
        callback(root401); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes271;
        nodes271 = node.contents();
        oldNodes.replaceWith(nodes271);
      }));
      var nodes274 = $("<span>");
      root400.append(nodes274);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root404 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root404); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes274;
        nodes274 = node.contents();
        oldNodes.replaceWith(nodes274);
      }));
      callback(root400); return subs__;
      
      
    }
    if(coll112.length > 0) processOne10(); else rest10();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root405 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes275 = $("<span>");
  root405.append(nodes275);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root406 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root406); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes275;
    nodes275 = node.contents();
    oldNodes.replaceWith(nodes275);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp228 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp228.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp228.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp228.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp228.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp228.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes276 = $("<span>");
  root405.append(nodes276);
  subs__.addSub((ui.masterDetail)(tmp228, masterItem, detailItem, function(_, callback) {
    var root407 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root407); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes276;
    nodes276 = node.contents();
    oldNodes.replaceWith(nodes276);
  }));
  callback(root405); return subs__;
  
  
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
  var root408 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes277 = $("<span>");
  root408.append(nodes277);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root409 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node205 = mobl.loadingSpan();
    root409.append(node205);
    var list41;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList41 = function() {
      var subs__ = listSubs__;
      list41 = sections.get();
      list41.list(function(results41) {
        node205.empty();
        for(var i41 = 0; i41 < results41.length; i41++) {
          (function() {
            var iternode41 = $("<span>");
            node205.append(iternode41);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results41), i41), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results41), i41), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp230 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp230.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp230.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp230.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp230.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp229 = mobl.ref(result__);
            
            var nodes278 = $("<span>");
            iternode41.append(nodes278);
            subs__.addSub((mobl.span)(tmp230, mobl.ref(null), tmp229, mobl.ref(null), function(_, callback) {
              var root410 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes279 = $("<span>");
              root410.append(nodes279);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root411 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root411); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes279;
                nodes279 = node.contents();
                oldNodes.replaceWith(nodes279);
              }));
              callback(root410); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes278;
              nodes278 = node.contents();
              oldNodes.replaceWith(nodes278);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp231 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp231.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp231.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp231.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp231.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes280 = $("<span>");
            iternode41.append(nodes280);
            subs__.addSub((mobl.block)(tmp231, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root412 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes281 = $("<span>");
              root412.append(nodes281);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl89();
              }));
              
              function renderControl89() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root413 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root413); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes281;
                  nodes281 = node.contents();
                  oldNodes.replaceWith(nodes281);
                }));
              }
              renderControl89();
              callback(root412); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes280;
              nodes280 = node.contents();
              oldNodes.replaceWith(nodes280);
            }));
            
            var oldNodes = iternode41;
            iternode41 = iternode41.contents();
            oldNodes.replaceWith(iternode41);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list41.addEventListener('change', function() { listSubs__.unsubscribe(); renderList41(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList41(true); }));
      });
    };
    renderList41();
    
    callback(root409); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes277;
    nodes277 = node.contents();
    oldNodes.replaceWith(nodes277);
  }));
  callback(root408); return subs__;
  
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
  var root414 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node206 = $("<table>");
  
  var ref216 = style;
  if(ref216.get() !== null) {
    node206.attr('class', ref216.get());
    subs__.addSub(ref216.addEventListener('change', function(_, ref, val) {
      node206.attr('class', val);
    }));
    
  }
  subs__.addSub(ref216.rebind());
  
  var nodes282 = $("<span>");
  node206.append(nodes282);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl90();
  }));
  
  function renderControl90() {
    subs__.addSub((elements)(function(elements, callback) {
      var root415 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root415); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes282;
      nodes282 = node.contents();
      oldNodes.replaceWith(nodes282);
    }));
  }
  renderControl90();
  root414.append(node206);
  callback(root414); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root416 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node207 = $("<tr>");
  
  var ref217 = style;
  if(ref217.get() !== null) {
    node207.attr('class', ref217.get());
    subs__.addSub(ref217.addEventListener('change', function(_, ref, val) {
      node207.attr('class', val);
    }));
    
  }
  subs__.addSub(ref217.rebind());
  
  var nodes283 = $("<span>");
  node207.append(nodes283);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl91();
  }));
  
  function renderControl91() {
    subs__.addSub((elements)(function(elements, callback) {
      var root417 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root417); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes283;
      nodes283 = node.contents();
      oldNodes.replaceWith(nodes283);
    }));
  }
  renderControl91();
  root416.append(node207);
  callback(root416); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root418 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node208 = $("<td>");
  
  var ref218 = width;
  if(ref218.get() !== null) {
    node208.attr('width', ref218.get());
    subs__.addSub(ref218.addEventListener('change', function(_, ref, val) {
      node208.attr('width', val);
    }));
    
  }
  subs__.addSub(ref218.rebind());
  
  var ref219 = style;
  if(ref219.get() !== null) {
    node208.attr('class', ref219.get());
    subs__.addSub(ref219.addEventListener('change', function(_, ref, val) {
      node208.attr('class', val);
    }));
    
  }
  subs__.addSub(ref219.rebind());
  
  var nodes284 = $("<span>");
  node208.append(nodes284);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl92();
  }));
  
  function renderControl92() {
    subs__.addSub((elements)(function(elements, callback) {
      var root419 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root419); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes284;
      nodes284 = node.contents();
      oldNodes.replaceWith(nodes284);
    }));
  }
  renderControl92();
  root418.append(node208);
  callback(root418); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root420 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node209 = $("<td>");
  
  var ref220 = width;
  if(ref220.get() !== null) {
    node209.attr('width', ref220.get());
    subs__.addSub(ref220.addEventListener('change', function(_, ref, val) {
      node209.attr('width', val);
    }));
    
  }
  subs__.addSub(ref220.rebind());
  
  var ref221 = style;
  if(ref221.get() !== null) {
    node209.attr('class', ref221.get());
    subs__.addSub(ref221.addEventListener('change', function(_, ref, val) {
      node209.attr('class', val);
    }));
    
  }
  subs__.addSub(ref221.rebind());
  
  var nodes285 = $("<span>");
  node209.append(nodes285);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl93();
  }));
  
  function renderControl93() {
    subs__.addSub((elements)(function(elements, callback) {
      var root421 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root421); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes285;
      nodes285 = node.contents();
      oldNodes.replaceWith(nodes285);
    }));
  }
  renderControl93();
  root420.append(node209);
  callback(root420); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root422 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node210 = $("<td>");
  
  var ref222 = width;
  if(ref222.get() !== null) {
    node210.attr('width', ref222.get());
    subs__.addSub(ref222.addEventListener('change', function(_, ref, val) {
      node210.attr('width', val);
    }));
    
  }
  subs__.addSub(ref222.rebind());
  
  var ref223 = style;
  if(ref223.get() !== null) {
    node210.attr('class', ref223.get());
    subs__.addSub(ref223.addEventListener('change', function(_, ref, val) {
      node210.attr('class', val);
    }));
    
  }
  subs__.addSub(ref223.rebind());
  
  
  var node211 = $("<strong>");
  
  var nodes286 = $("<span>");
  node211.append(nodes286);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl94();
  }));
  
  function renderControl94() {
    subs__.addSub((elements)(function(elements, callback) {
      var root423 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root423); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes286;
      nodes286 = node.contents();
      oldNodes.replaceWith(nodes286);
    }));
  }
  renderControl94();
  node210.append(node211);
  root422.append(node210);
  callback(root422); return subs__;
  
  
  
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
  items.list(function(coll113) {
    coll113 = coll113.reverse();
    function processOne11() {
      var item;
      item = coll113.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = counter;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = counter + 1;
        counter = result__;
        
        if(coll113.length > 0) processOne11(); else rest11();
        
      } else {
        {
          var result__ = counter + 1;
          counter = result__;
          
          if(coll113.length > 0) processOne11(); else rest11();
          
        }
      }
    }
    function rest11() {
      var result__ = -1;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll113.length > 0) processOne11(); else rest11();
  });
  
};

ui.visible = mobl.ref(true);
ui.hideCurrent = function() {
   var __this = this;
  ui.visible.set(false);
};


ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root424 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var nodes287 = $("<span>");
  root424.append(nodes287);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl95();
  }));
  
  function renderControl95() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root425 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root425); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes287;
      nodes287 = node.contents();
      oldNodes.replaceWith(nodes287);
    }));
  }
  renderControl95();
  callback(root424); return subs__;
  
  return subs__;
};

ui.mMasterDetail = function(items, masterItem, detail, elements, callback) {
  var root426 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp241 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp241.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node212 = $("<span>");
  root426.append(node212);
  var condSubs53 = new mobl.CompSubscription();
  subs__.addSub(condSubs53);
  var oldValue53;
  var renderCond53 = function() {
    var value121 = tmp241.get();
    if(oldValue53 === value121) return;
    oldValue53 = value121;
    var subs__ = condSubs53;
    subs__.unsubscribe();
    node212.empty();
    if(value121) {
      
      var current = mobl.ref(null);
      
      var node213 = $("<div>");
      node213.attr('width', "100%");
      
      
      var node214 = $("<div>");
      node214.attr('style', "float:left; width:45%; position:relative; border-right: solid 1px #cccccc;");
      
      var nodes289 = $("<span>");
      node214.append(nodes289);
      subs__.addSub((ui.group)(function(_, callback) {
        var root428 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node217 = mobl.loadingSpan();
        root428.append(node217);
        var list42;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList42 = function() {
          var subs__ = listSubs__;
          list42 = items.get();
          list42.list(function(results42) {
            node217.empty();
            for(var i42 = 0; i42 < results42.length; i42++) {
              (function() {
                var iternode42 = $("<span>");
                node217.append(iternode42);
                var it;
                it = mobl.ref(mobl.ref(results42), i42);
                var result__ = it.get() == current.get();
                var tmp237 = mobl.ref(result__);
                subs__.addSub(it.addEventListener('change', function() {
                  tmp237.set(it.get() == current.get());
                }));
                subs__.addSub(current.addEventListener('change', function() {
                  tmp237.set(it.get() == current.get());
                }));
                
                
                var node218 = $("<span>");
                iternode42.append(node218);
                var condSubs55 = new mobl.CompSubscription();
                subs__.addSub(condSubs55);
                var oldValue55;
                var renderCond55 = function() {
                  var value123 = tmp237.get();
                  if(oldValue55 === value123) return;
                  oldValue55 = value123;
                  var subs__ = condSubs55;
                  subs__.unsubscribe();
                  node218.empty();
                  if(value123) {
                    var nodes290 = $("<span>");
                    node218.append(nodes290);
                    subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                      var root429 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp268 = result__;
                        var tmp234 = mobl.ref(result__);
                        subs__.addSub(it.addEventListener('change', function() {
                          ui.indexOf(it.get(), items.get(), function(result__) {
                            var tmp266 = result__;
                            var result__ = tmp266;
                            tmp234.set(result__);
                            
                          });
                        }));
                        subs__.addSub(items.addEventListener('change', function() {
                          ui.indexOf(it.get(), items.get(), function(result__) {
                            var tmp267 = result__;
                            var result__ = tmp267;
                            tmp234.set(result__);
                            
                          });
                        }));
                        
                        var nodes291 = $("<span>");
                        root429.append(nodes291);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl97();
                        }));
                        
                        function renderControl97() {
                          subs__.addSub((masterItem.get())(it, tmp234, function(elements, callback) {
                            var root430 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root430); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes291;
                            nodes291 = node.contents();
                            oldNodes.replaceWith(nodes291);
                          }));
                        }
                        renderControl97();
                        callback(root429); return subs__;
                        
                      });
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes290;
                      nodes290 = node.contents();
                      oldNodes.replaceWith(nodes290);
                    }));
                    
                    
                  } else {
                    var result__ = function(event, callback) {
                                     if(event && event.stopPropagation) event.stopPropagation();
                                     var result__ = it.get();
                                     current.set(result__);
                                     var result__ = true;
                                     ui.visible.set(result__);
                                     mathJAX.renderMaths(function(result__) {
                                       var tmp272 = result__;
                                       var result__ = plot.renderPlot("corePlotArea", current.get());
                                       if(callback && callback.apply) callback(); return;
                                     });
                                   };
                    var tmp236 = mobl.ref(result__);
                    
                    var nodes292 = $("<span>");
                    node218.append(nodes292);
                    subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp236, mobl.ref(null), mobl.ref(true), function(_, callback) {
                      var root431 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp271 = result__;
                        var tmp235 = mobl.ref(result__);
                        subs__.addSub(it.addEventListener('change', function() {
                          ui.indexOf(it.get(), items.get(), function(result__) {
                            var tmp269 = result__;
                            var result__ = tmp269;
                            tmp235.set(result__);
                            
                          });
                        }));
                        subs__.addSub(items.addEventListener('change', function() {
                          ui.indexOf(it.get(), items.get(), function(result__) {
                            var tmp270 = result__;
                            var result__ = tmp270;
                            tmp235.set(result__);
                            
                          });
                        }));
                        
                        var nodes293 = $("<span>");
                        root431.append(nodes293);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl98();
                        }));
                        
                        function renderControl98() {
                          subs__.addSub((masterItem.get())(it, tmp235, function(elements, callback) {
                            var root432 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root432); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes293;
                            nodes293 = node.contents();
                            oldNodes.replaceWith(nodes293);
                          }));
                        }
                        renderControl98();
                        callback(root431); return subs__;
                        
                      });
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes292;
                      nodes292 = node.contents();
                      oldNodes.replaceWith(nodes292);
                    }));
                    
                    
                  }
                };
                renderCond55();
                subs__.addSub(tmp237.addEventListener('change', function() {
                  renderCond55();
                }));
                
                
                var oldNodes = iternode42;
                iternode42 = iternode42.contents();
                oldNodes.replaceWith(iternode42);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list42.addEventListener('change', function() { listSubs__.unsubscribe(); renderList42(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList42(true); }));
          });
        };
        renderList42();
        
        callback(root428); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes289;
        nodes289 = node.contents();
        oldNodes.replaceWith(nodes289);
      }));
      node213.append(node214);
      
      var node215 = $("<div>");
      node215.attr('style', "float:left; width:53%; position:relative; margin-left: 1%;");
      
      var result__ = current.get() && ui.visible.get();
      var tmp239 = mobl.ref(result__);
      subs__.addSub(current.addEventListener('change', function() {
        tmp239.set(current.get() && ui.visible.get());
      }));
      subs__.addSub(ui.visible.addEventListener('change', function() {
        tmp239.set(current.get() && ui.visible.get());
      }));
      
      
      var node216 = $("<span>");
      node215.append(node216);
      var condSubs54 = new mobl.CompSubscription();
      subs__.addSub(condSubs54);
      var oldValue54;
      var renderCond54 = function() {
        var value122 = tmp239.get();
        if(oldValue54 === value122) return;
        oldValue54 = value122;
        var subs__ = condSubs54;
        subs__.unsubscribe();
        node216.empty();
        if(value122) {
          ui.indexOf(current.get(), items.get(), function(result__) {
            var tmp265 = result__;
            var tmp238 = mobl.ref(result__);
            subs__.addSub(current.addEventListener('change', function() {
              ui.indexOf(current.get(), items.get(), function(result__) {
                var tmp263 = result__;
                var result__ = tmp263;
                tmp238.set(result__);
                
              });
            }));
            subs__.addSub(items.addEventListener('change', function() {
              ui.indexOf(current.get(), items.get(), function(result__) {
                var tmp264 = result__;
                var result__ = tmp264;
                tmp238.set(result__);
                
              });
            }));
            
            var nodes288 = $("<span>");
            node216.append(nodes288);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl96();
            }));
            
            function renderControl96() {
              subs__.addSub((detail.get())(current, tmp238, function(elements, callback) {
                var root427 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root427); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes288;
                nodes288 = node.contents();
                oldNodes.replaceWith(nodes288);
              }));
            }
            renderControl96();
            
            
          });
        } else {
          
        }
      };
      renderCond54();
      subs__.addSub(tmp239.addEventListener('change', function() {
        renderCond54();
      }));
      
      node213.append(node215);
      node212.append(node213);
      
      
      
      
      
      
    } else {
      var nodes294 = $("<span>");
      node212.append(nodes294);
      subs__.addSub((ui.group)(function(_, callback) {
        var root433 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node219 = mobl.loadingSpan();
        root433.append(node219);
        var list43;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList43 = function() {
          var subs__ = listSubs__;
          list43 = items.get();
          list43.list(function(results43) {
            node219.empty();
            for(var i43 = 0; i43 < results43.length; i43++) {
              (function() {
                var iternode43 = $("<span>");
                node219.append(iternode43);
                var it;
                it = mobl.ref(mobl.ref(results43), i43);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp276 = result__;
                                 mathJAX.renderMaths(function(result__) {
                                   var tmp277 = result__;
                                   var result__ = plot.renderPlot("corePlotArea", it.get());
                                   if(callback && callback.apply) callback(); return;
                                 });
                                 });
                               };
                var tmp233 = mobl.ref(result__);
                
                var nodes295 = $("<span>");
                iternode43.append(nodes295);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp233, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root434 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  ui.indexOf(it.get(), items.get(), function(result__) {
                    var tmp275 = result__;
                    var tmp232 = mobl.ref(result__);
                    subs__.addSub(it.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp273 = result__;
                        var result__ = tmp273;
                        tmp232.set(result__);
                        
                      });
                    }));
                    subs__.addSub(items.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp274 = result__;
                        var result__ = tmp274;
                        tmp232.set(result__);
                        
                      });
                    }));
                    
                    var nodes296 = $("<span>");
                    root434.append(nodes296);
                    subs__.addSub(masterItem.addEventListener('change', function() {
                      renderControl99();
                    }));
                    
                    function renderControl99() {
                      subs__.addSub((masterItem.get())(it, tmp232, function(elements, callback) {
                        var root435 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        callback(root435); return subs__;
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes296;
                        nodes296 = node.contents();
                        oldNodes.replaceWith(nodes296);
                      }));
                    }
                    renderControl99();
                    callback(root434); return subs__;
                    
                  });
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes295;
                  nodes295 = node.contents();
                  oldNodes.replaceWith(nodes295);
                }));
                
                var oldNodes = iternode43;
                iternode43 = iternode43.contents();
                oldNodes.replaceWith(iternode43);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list43.addEventListener('change', function() { listSubs__.unsubscribe(); renderList43(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList43(true); }));
          });
        };
        renderList43();
        
        callback(root433); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes294;
        nodes294 = node.contents();
        oldNodes.replaceWith(nodes294);
      }));
      
      
    }
  };
  renderCond53();
  subs__.addSub(tmp241.addEventListener('change', function() {
    renderCond53();
  }));
  
  callback(root426); return subs__;
  
  return subs__;
};

ui.introduction = function(elements, callback) {
  var root436 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes297 = $("<span>");
  root436.append(nodes297);
  subs__.addSub((ui.header)(mobl.ref("Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root437 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes298 = $("<span>");
    root437.append(nodes298);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), mobl.ref(null), mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root438 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root438); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes298;
      nodes298 = node.contents();
      oldNodes.replaceWith(nodes298);
    }));
    callback(root437); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes297;
    nodes297 = node.contents();
    oldNodes.replaceWith(nodes297);
  }));
  
  var intro = mobl.ref("\n<div style=\"padding:20px\">\n<img src=\"icon.png\" style=\"width:30px;height:30px; float:left; padding:5px 5px 5px 0px\"/> Mathmo is designed to give you extra practice.\n<br />\n<br />\nOn the <b>My Qs</b> tab you'll find your current set of questions under a list of topics. \nThese stay with you till you clear them or delete them individually. They'll be the same questions even if you close Mathmo and return to it later.\nTap one of the question topics to see the question itself.\n<br /><br />\nWhen you have completed a question, touch <b>Check Answer</b> to check your work and\nreply to <b>Did you agree?</b>. You may need to do a little more work to see whether your answer really is the same or not.\nThe questions will change colour according to your answer. Red means 'I didn't agree'. Green means 'I agreed'. Black means 'Answer not checked'. \n<br /><br />\nOn the <b>Add</b> tab you can generate 5 more random core, further or stats questions, or generate them singly on selected topics.\n\n<h3>Updates</h3>\nMathmo is a web application, and should update itself when you reload the app after it has been updated on the server. \n<a href=\"http://nrich.maths.org/7088\" target=\"_blank\">Further info here</a>.\n\n<h3>Credits</h3>\n<p>\nSyllabus hugging ideas: Stephen Hewson\n</p>\n<p>\nQuestion and Answer generators:\n Tom White, Edward Cree\n</p>\n<p>\n<a href=\"http://github.com/gmp26/mathmo\">Mobile Implementation:</a> Mike Pearson with contributions from\n<a href=\"http://github.com/naush/mathmo\">Li Hsuan</a>.</p>\n\n<p>\nThe following have also been important in developing mathmo\n<ul>\n<li>\n<a href=\"http://www.mobl-lang.org\">Mobl-lang</a> by Zef Hemel, University of Delft.\n</li>\n<li>\nThe <a href=\"http://code.google.com/p/flot/\">flot plotting library</a>\n</li>\n\n</ul>\n<a href=\"http://www.mathjax.org/\">\n  <img title=\"Powered by MathJax\"\n       src=\"http://www.mathjax.org/badge.gif\"\n       border=\"0\" alt=\"Powered by MathJax\" />\n</a>\n\n<h3>License</h3>\n<a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\"><img alt=\"Creative Commons License\" style=\"border-width:0\" src=\"http://i.creativecommons.org/l/by-sa/3.0/88x31.png\" /></a><br /><span xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://purl.org/dc/dcmitype/InteractiveResource\" property=\"dct:title\" rel=\"dct:type\">Mathmo</span> by <a xmlns:cc=\"http://creativecommons.org/ns#\" href=\"http://nrich.maths.org\" property=\"cc:attributionName\" rel=\"cc:attributionURL\">NRICH Project, University of Cambridge</a> is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://github.com/gmp26/mathmo\" rel=\"dct:source\">github.com</a>.\n\n\n</div>\n");
  var nodes299 = $("<span>");
  root436.append(nodes299);
  subs__.addSub((mobl.html)(intro, function(_, callback) {
    var root439 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root439); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes299;
    nodes299 = node.contents();
    oldNodes.replaceWith(nodes299);
  }));
  callback(root436); return subs__;
  
  
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
