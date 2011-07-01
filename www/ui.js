mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mathJAX');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root10303 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1590 = $("<span>");
  root10303.append(node1590);
  var condSubs394 = new mobl.CompSubscription();
  subs__.addSub(condSubs394);
  var oldValue394;
  var renderCond394 = function() {
    var value974 = value.get();
    if(oldValue394 === value974) return;
    oldValue394 = value974;
    var subs__ = condSubs394;
    subs__.unsubscribe();
    node1590.empty();
    if(value974) {
      var nodes8858 = $("<span>");
      node1590.append(nodes8858);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl618();
      }));
      
      function renderControl618() {
        subs__.addSub((elements)(function(elements, callback) {
          var root10304 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root10304); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes8858;
          nodes8858 = node.contents();
          oldNodes.replaceWith(nodes8858);
        }));
      }
      renderControl618();
      
      
    } else {
      var nodes8859 = $("<span>");
      node1590.append(nodes8859);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10305 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes8860 = $("<span>");
        root10305.append(nodes8860);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root10306 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root10306); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes8860;
          nodes8860 = node.contents();
          oldNodes.replaceWith(nodes8860);
        }));
        var nodes8861 = $("<span>");
        root10305.append(nodes8861);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,R0lGODlhIAAgAOf2AAAAAAEBAQICAgMDAwQEBAUFBQYGBgcHBwgICAkJCQoKCgsLCwwMDA0NDQ4ODg8PDxAQEBERERISEhMTExQUFBUVFRYWFhcXFxgYGBkZGRoaGhsbGxwcHB0dHR4eHh8fHyAgICEhISIiIiMjIyQkJCUlJSYmJicnJygoKCkpKSoqKisrKywsLC0tLS4uLi8vLzAwMDExMTIyMjMzMzQ0NDU1NTY2Njc3Nzg4ODk5OTo6Ojs7Ozw8PD09PT4+Pj8/P0BAQEFBQUJCQkNDQ0REREVFRUZGRkdHR0hISElJSUpKSktLS0xMTE1NTU5OTk9PT1BQUFFRUVJSUlNTU1RUVFVVVVZWVldXV1hYWFlZWVpaWltbW1xcXF1dXV5eXl9fX2BgYGFhYWJiYmNjY2RkZGVlZWZmZmdnZ2hoaGlpaWpqamtra2xsbG1tbW5ubm9vb3BwcHFxcXJycnNzc3R0dHV1dXZ2dnd3d3h4eHl5eXp6ent7e3x8fH19fX5+fn9/f4CAgIGBgYKCgoODg4SEhIWFhYaGhoeHh4iIiImJiYqKiouLi4yMjI2NjY6Ojo+Pj5CQkJGRkZKSkpOTk5SUlJWVlZaWlpeXl5iYmJmZmZqampubm5ycnJ2dnZ6enp+fn6CgoKGhoaKioqOjo6SkpKWlpaampqenp6ioqKmpqaqqqqurq6ysrK2tra6urq+vr7CwsLGxsbKysrOzs7S0tLW1tba2tre3t7i4uLm5ubq6uru7u7y8vL29vb6+vr+/v8DAwMHBwcLCwsPDw8TExMXFxcbGxsfHx8jIyMnJycrKysvLy8zMzM3Nzc7Ozs/Pz9DQ0NHR0dLS0tPT09TU1NXV1dbW1tfX19jY2NnZ2dra2tvb29zc3N3d3d7e3t/f3+Dg4OHh4eLi4uPj4+Tk5OXl5ebm5ufn5+jo6Onp6erq6uvr6+zs7O3t7e7u7u/v7/Dw8PHx8fLy8vPz8/T09PX19f///////////////////////////////////////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBQD/ACwAAAAAIAAgAAAI/gABCBxIsKDBgwgTKlzIsKHDhxAjSiSoYc+bCBMFbqCSY4DAApTgyQOUcUGkZcXAeHxQLB49SgI+xnSYAdYxZsjCDHgQLN48NAEEaFAh4oDDA3+EIXO2rAiAN96owQBQ4YVVCg87XBKWLNofAAROlAgAwIPVFxAgmrAkzJgWgxZcvADhESKGKk2MFhTgIAKBhwweNCjAMICBvwoPHMkDCNCYBwoLhFhxIm3CFYEIGUKkiIfCC2dLzDyI4k6e03hqKLQQerTBAkHCgOFCREHkDydGQFYoYAGDBK4RBiX78ACFBsQJBoAAIThDAyVguMBaEIPcEIgbBjBrtQOAAAoSTAgEcXZ3QwEnrLqQAMD6CgdUz1J3yOFFCwwBBqR/ESJoBhUk6OXQABAwQBYBKVhFAnEF1JURAB9YhcGDByHgwQUOUqjhhhx26KGGAQEAIfkEBQUA/wAsBQADABQAGAAACMwA/wkcSDDABg8BCCpc+I+KMmhKGEpcAAsdu1MFJGZwUmOgg14WgS1gqIDQLltZBoJsB0wBwwugbPXSpeXfAlro3LXKONCAQANzYt361QvIPzXZvHlROGGghkSxcgm7IzBGjQESBYpAFMsWlawMLTQx4hOsQAUNFhAwOzBAjTJs2lRhwPYfhDBs3MCRI6NuAilfAn9RUReACCFIisxAUBgAAQQGEtZVaKDp5IEkXjQGAIDDZYIlPg+84EL0PwEOTC/0ILDCZwMZKAhYGBAAIfkEBQUA/wAsBQADABIAFgAACMsA/wkcSBBDnDMQCCokGOBPt295FkpsEKubOFsKFlowAkOAwAi4uo3zxUBhgjupTEXx6GCWyFwCCTgQSOERqVWqpghQsKobuVP/GADSIrCAmU6lWrXa8e8MtWtb/r3pVGPghTyeTsFq8+9ADh3/Aqj5odADHk+lmiwMIXECEbISCRJQkCBAXIIAMBSxYgVIxrv/BuyQQsVKFhOAA9MgwpjIh8T/IKx40SJEAcj/BBQggLlz3Mue/2UIHWBE6H8UWEAGwJq1gr8ERRAMCAAh+QQFBQD/ACwFAAMAFAAWAAAIzgD/CRxI8IKaMA8IKlz47w60aXMYSmRgCpq1VhL/GUhBYiAEVtCu1VrAcEAVSJKSCGyAKiSsBAI3OBho4M2jS5iWCPwEDdsngYSswfogMMAURJA0bbLxLwwyZlf+tXFHLx2QgRTOIJLUSYxGGzcEbqL3jY4EghnMIIpEZOEcaGUYQtBxo8BCBCIUCjBwICPDBC14/IDR169AACBs4NDRI4Phwx1gSIYx4bFABCBUpPBAwHJRz6BDh8bAsLBCAKgBeGCowjCEFSxE/zuAwHJAACH5BAUFAP8ALAYAAwATABgAAAjSAP8JHDiwwhcpDggqXNgGWDE2CyP+W5AJGDJRCRQC2KiAwUYADjwFQ6Zq4UYOZuT4EMhAU7BkpgZqmPBvoxA8gQYF+ZdAUrBllggs+OOsVomNM+DkIYToxb8suX5J+ZemHLt3ZwQ2oBJnDyIrAmXMEGiJHbx3UwZSmNJ1x8I36uKRgkCwwQsXBBYqQHLFgsAABAh8HEwYgMACHlKo+JBXIkEKLyK/iOD4seQXEioPLPBBYIcBmkOLHk1a4oXSnlH/Y4BihWYRCgsY0BxAdejTEQMCACH5BAUFAP8ALAYAAwAVABYAAAjMAP8JHDhwgpUlCwgqXChwzCtaWhhK/KdA0atblhAwBMARQICBDRy9wtVJgUAFLTgQJDBjyYuPCxa9yqVJYwZI1X7JGOihC5o2NwIgGPRqFyOBj76NMxdnYAcrYNjIQfEPSipYTP6d2bb0HJSBCX5cEQMnyb8CLl4IOABKnLl0nyAQfNDjypgYC+eUSwcKw8IEI0YMWAjhypcKAzlO/PvAwD8BGFCg6LD4nwEbNlA4kFtZ4oPOEgWoBD1QRAPSqFOrXs1wA2uKJ14TSB0QACH5BAUFAP8ALAYAAwAWABYAAAjdAP8JHDiwAAsWAggqBMCwYcMlljYVUUiRYoI8m0oFKlDxn0OHC/pwMvUogcAERqI8ENjwwgsOJ/NwOsXowL8LiJxZo0NwgQ8nVFj8OzCHE6o/Ag1Ju7bNFIKBDXIUiaIFxD8jlj5NDOOMabczBAmY2HHEig6BKVb8M2DJ2rZvmFYSTIBiRxITFNlo+5bpQkUDFzIkVPhgyhYKHRMTVPDB778AihV6SMXtGJJ/DFxEHuiGnDZqmxIs0Lz534klQnioeJwhRYrSAxd4BECAAOzbuHPr3r1ZhWPdBRjCDggAIfkEBQUA/wAsBgADABYAFQAACNQAAQgcSFDBAYIIAfxbyJDhCDZoRDScSHEhAS6GIHFJOLDivwNnDEXSc2AhgiBLHEw0YCGCSTOGJAVC8K+CH2DI2jQcQGJGjg//DIQxRIlOAQV8iCVz1qmkyRYwbPzA8C+Hn0U2/mn5hcwZtDANBYh4EUOHin8COoRYuKirNEgqJ5ogq4FimWbTIlXwWEFCAIoOnliZ4LFwwwQeLDBUbJhhh1HVghn5l6BFY4Z13sGDx2tB5csL6dAbfUsBaIYcENGapeP0xAM0XcueTbu27X8hDDAMCAAh+QQFBQD/ACwGAAMAFgAVAAAIywABCBxIsKBBAP8SKlS4AEcOBgsjSkwo4IebPEUmakxoQIobPWgMKORRpEHEAQ0WCDwwxQ2fNwf+TZgDCxeZhQE8uGBRAeETN37IEEgQZ1YuX5EWFlDx4kWLB/9aoLnj4l8UV7h8CdMisekLDv8CYABb4M8tX8MMmZzogoLELr2IHXI7kQJUiQ2SQJGwsa/CDhUSAgjsN+EGTsx6MfmHgEXhhHDMnTtXS0Hjx//gsNtsK6EFFI83eDImawlmpXdPq17NurXrfx8KKAwIACH5BAUFAP8ALAYABAAXABMAAAjSAP8JHDhQAIYMAQgq/AegoUOHJaJoUbGwokICO6iEiTJA4IEWPhgsDKAggcACPKiM2WLgXwQznExtGegQw78VAgngoFJmygAEZD6dakWoZUETCkNAAYMUySZTrWJNodnww0IJFwIQiFOq1aw9Ii3+k7BwCitafMiKtchgiJIIa+P+Q8CBRAWjcgeGmBQsGa9HEg7gzNtnGzdu3bQZMTBY7h1xkMVxOwKAwom8HDD98uVLDgKBHfP+c0A6tOgdUhyIXijk0SYKqxXGEPMi9sIKBAMCACH5BAUFAP8ALAYABAAYABUAAAjRAAEIHEhQAQKCCAf+W8iQoYUZPDA0nEix4YATOIzsELDQQIkQHCsmMLBwQAocSIwQ+OcAC6JENipaaKGiJEYlQAQYqKJIUqYwBCsutGDjiId/PQxFyuQpidCGAhlEWBgGUiZQbhY8fZoEUyg4U7cKVcBjyAOxaP9pEBECQtqJJRzR4tXL04u3CwPwaebsGTRokgoQQPHWj7XDhyWtnPD2Q6RatWg5IoyXYYPLBSoniBKl8kQx7tqV8szwhq5675yQXnhkWD0zqxcaKdQhdkmKAQEAIfkEBQUA/wAsBgAEABgAFQAACNgA/wkcSLAAAYIIEyZ8kOIEA4UQCQoo8QJGiQACBSQwAKCjR48FCJ6o2ELAvwVBylB5mDBCCoQvYrD4V8DInD2CXiQMMCIhixcU/sl4o2cQIRMRBWoQqGABgAFQ8gxS5CVkUggJewhiJMZB0ogJaOho8LXsAQwfPjwYOKGsQBGCSrFyJWnFPwIo3P6b4+sXMGDBDh3U+88OMmTHDiMSiNVtB0SrVKUqhJQwQgaD9SJw4oSsZYEB8pwr96nt5wGk4rU7t+SzQDfw4rkT4/rkIGudagsksOFAwoAAIfkEBQUA/wAsBwAEABYAFQAACMIA/wkcODBAAIIIExJkICLEAYUQBQYI8eLFBgAYAQTIiDFixRICDaz4geIgQQcJK44IQIBGFjFhIiAEMRDlPxYsIPwjUSXMGjUTEHYYmEEgAgX/AuwAs2bOEwIRFcZQU2cKg6gKD6RgsQBrVAMVOGxo8E+n138e6lDa1InQibMC0bBq5eoVrD1w/7G5xZdvn7wb/Hjq1GnPiLz/CDBYjFiJEsQD63TTdkkC5E/oyHFDAnkNusxeIP/78wwVSNEaEiAMCAAh+QQFBQD/ACwIAAQAFgAXAAAIzQD/CRw4EIDBgwgPEhy4IMSHhRAj/gNRMGFCiQsHYCgB4SJGgQJC8DiSQwBBAB4+XtBhBMqSAws5SDRYoggULTkCLDxQAiOIJ1yEKPgYccCHEQmIfiwgAQMGBEoJajATCFEiNyKiCuSCKdMmTpzcDNAaplQpUmbhjI2KYc6jR47ePNQqcMGCoVohXJnigO5AOtWeObKgNUKAA6i6YZvGiEHUR0z+ufHWLRu0IVERrSrw7xG4yl2iltn8T8KhZ7ZWRKVSZmCBEhi0ZsCLMSAAIfkEBQUA/wAsCQAEABUAFwAACNgAAQgcSLCgwX8IEx7woKFAwocQIX5AmCGiRQIWEQp4QAHjwwYnUmT818EFjA8BRkas8AJGDRcCHmpQ6cGlDxEFDai0UAMIDIcqIQqokEFn0IwEHkxoYPToPwtV2Mh5s6WC039OBA0qZOiQEgBOqUAaO7YJ2KMVzPzx4yfMhKv/BiSYO8ApBStMGsBF+AZZsEEUggqYUeLfgn/QlBET5EClCGXXlPxLMw3aMmJeVLpIJs/UPwWHqEFjZunAyBrU5CWsEGmaMzSas8FjkxACkyV6R0KYoyb3yIAAIfkEBQUA/wAsCQAFABQAFgAACMsA/wkcaADDBQIDEypcyHDhgIYDGzQQkHCBCRQQ/7lwcQGARwAcMv57QXJEgIEZRJJ8UUGkQpIgHrocCCECwpkKByx4kMDjTAdArGyxIoOiwI9IP/JIs6aNmzMRZv7IQzXPmwkzIVxxA8eMjJM4ESw44DOjBCdFGOAUeAYXrDsSMiKwQeKfgk7BdNGy06BhgD3mnh35J6ZYsF20rDSEoAxeuk//EvwxFoyXIgMML0iDp46UwAmIiv0C03DAJsdoBj44YkRtQw90zogMCAAh+QQFBQD/ACwIAAUAFQAWAAAIswD/CRz4rwDBgwgPekjIsKHAAAoUAJg40eHADf9YRLAoUMWDgx8oAmB44ADHkyhTohSAQIEBlQha9BCyw8LIkyqeRJlCZcgAlDLACAVzhECJkw2QZMHSBAMAASsPGPh5MoKRHgpU/utiipMaCBxpiPiXABIsVKHSLHB4p1uxIf+20IKVKlQTh8TOfbsksE4tWKr4NLTA7Bw4TgIl9Jnl6opDS+e8jRnoAAeQtQ07vBHDwGFAACH5BAUFAP8ALAkABQAUABgAAAjRAP8JHCiwwgCCCP8BWMiQQ8KHEBEmMBAxYgsVDipGdKixY0cXHhNmDJkwgAEDAkgaCLGChQgEITnQqHEDxwcAHkcU2VmEBM6OCWwQGSIjAcl/BQqk7OiABw2jD2XoYMhwSqRDW0YKpCBwTiOBOmAMQCCI06RFWxQgvAKtyz851IYh+SdFFKdKjYIQdNFJD4IHvLZJSyQAgZpRnCydOSgQQYaDH55xm/bvwD8IcUBtagJRQzJu1DhZ/sdARg61Dx/Y4latz1Eqw2jhOBqAwwWNAQEAIfkEBQUA/wAsCQAFABMAGAAACMwA/wkc+O8CBYIIExK8oLChwgMOHbJAoSDivxQJNVgsYLGjx48fCQQAKTDFBwIeM7xY+QJCShgwXzzwaIBEixUfBnwMMGDAyIEjECRM8EIFRIIl1jxDk9BIHjhKFgy0cEecPEn/DtxoIeCAHEN96CwR+k/LuXnptPxjc6yWkH9IHBnyY8eGQBzIqtn550CWs2F+snZxdOgPEwAACnIQiMGXs2KQDPD9osiPDIUXejkzNklyVhUjBCikgMvZMUUoOw44tPkKSA1jrkhtGBAAIfkEBQUA/wAsCQAFABMAGAAACMMA/wkc+K/CBIIIEypcyHCgAQINFa4wgSCiQgsWE0LIyLGjRwAAPP7TIECkCwcZLbxY6aJBxgIfTpioEKCjAAEg/4UgU0ThARIfChD0sGueOTIJc4SxgqOiQDXy3qlrJHBGin8EtLwhs8UGxH+K3q0DZ+VfGVyldvzzceeNGS4cBNoI1kyOQFO/ZMkJYOBJWzMhBlrQINBCrF+0BAlUoAQNEgUXD9cyNHBAgwEgQxKUsOqXLT8DOPb5VetJRwxcoEBeGBAAIfkEBQUA/wAsCQAHABMAFgAACLcA/wkcSPAfAAAFBhRcWFCDChIHGEqcSLGixYsYM2q8EEDjPxYRNa4IibGEBAAeB4IQM4TkwAEYKCgc2KHWum5gFqoosoNEgYFz1JkDZ+ifARck/gUYUiXJjxEd/x0yF65alH9dTk2i8S/GlypLfCgQSCPXMDYHGGRq9YnMvwJAvFQhkmBghQwCKYxqFWrOTwQugoA4iJIgBVGtRtkpQFgA4cIDI3RqRQoORgFzEh/JaGEKkroSAwIAIfkEBQUA/wAsBwAHABUAFgAACMwA/wkcSLDgPwEGEyYUYUChw4EQHj58ILGixYsYMxYYWAEAxgsDVRhg0UOIE5AWRdoYdStRA4sjBjaosNFigIIfzERRYFDAhAkJR7gKZ02MQQ4wXoQoiGEUOG3T/vwrgOJDgAAwcsR4sQGA139ivmmrlswKgCmU/rD4R4KIVhQDBv7ZZs1ZnX8LFGVSVOXfgBdDcpRAKFAGrF9sXkqYpImRGAL/DIQIsaAghQ6Q/0mIpMlRGQJeQ4dO+KCRpkdgMv4Lc7qHaghFdiBwGBAAIfkEBQUA/wAsBgAOABYADwAACLwA/1lYkeKfwYMIE/6bIFCVLUqAVCic+A8FAQzO6NGLx4WiwhMD/lHx1WwSBI8JHyCkgLLlvw5gmrhUGKIUtWRbFGJ48WKihU3TmhWrY1CEhn8ARPB8kQFhADnSmhnT9eRfkj9pRvy7sLSEgIMKUDU79kuMAQV5CMkh8k9ABxcvOACY+2+AnmPB4ij4BwEQoTpPQgp4MIFASiNEGBh84IfQnSghZxpMYIcQHiUBJB9EEkiOCc0HDZj4kJliQAAh+QQFBQD/ACwGAAcAFgAWAAAIzAD/CRxIsOA/AgYHkkg4EAMKhhAjSpxIsaLFgRUsDLj4L0AVZtEyYagYQeCyeCivVDwx4AIyduzUaalYQsC/KLeKOeIokMEEngQ5aEGSwGAACBBsGvywyViuKQldMKwQiVgvWmoOYvj5LwRENcN62UJ15F+PM1E0/LMwUEQAgpx63XKVpQACM2uyyADwj8O/FhUICohzC5aZohHesNmyQ6kDBm8JOgDiY4FAB2vYdOmhtOIBLmy+wABAurTp06U/TBFSkiFq0wUEvC4dEAAh+QQFBQD/ACwGAA0AFgAQAAAIsAD//aNQQaDBgwgRSjG2rNKFhBBPQPhXgRi6dOmoQIRYQoCFX+LEgbuysWQTV7wOPSjJUgLLl/8yTAmCACbCDo5qoVrCkgDCCYVosQrl5d8ACQwAADhoAWEYWaxGVfLxL0aTGysPdlC6NIEjVqQ0Ofl3IEqUHiAMtmAx8aAZUpuw1HSQJQoQEwEELlDAdem/BjlqGBCoYIoUIXhtGgywQ8oQDYoPMlDhYUDJvpgzaw4IACH5BAUFAP8ALAUACQAWABMAAAjDAP8J/FekxsCDCBMK3CPJoMKHA0PkgjQDokUQYjRYRGhgwoV/BzYivPBIGLJilyyIFOjACzdu3bx9C7NSoBZrOK1V61JzBIZFuHLJIkRhpYgF/wpYwDCBQE2FF5boCPn0n4ZAoigFqRoBTyhMjKD8E8AgAUQAaK98wuQIEI1/I2iscIBQ40AEfzBBKjSEQIEdNmCECCCQBQqkB7VAMrQkJIIegUsIDHCgQMIFMlpYToojsIiqAkPQaAEB9NgHDNCqXh0QACH5BAUFAP8ALAQABwAYABUAAAjaAP8JHNigwMCDCBMOxIHrjMKHCRvRc4YEosV/f+LR+8Th4kMQu+J9m+Hx4YczTAyWHCjBAoWVCHdgutVrF6QLKxv8U/Dp2TNo0aS5WTkiQIJLyJImDbNSRIB/NS6tYlVKD86SCgYqqGAhAkyIFITMMPB14IU4jfzYKPvvQZpFguoE+Rcgq0AQLBUyUSToDhoV/zC4GFhhYIaEBMoIytPGxoABKF68MLziRIKBADID8FGHTQ+DBVRIJvEvM9mHBDxwGCBwwAnJHzTLnk07s4UVKBhArD3bgMqHAQEAIfkEBQUA/wAsBAAHABUAFQAACLYA/wkc+MBCgIEIEya08c8ZmwEDFEoUiIgdPHRIJk7Uk65dPEAaJX6glY7clJASPYxJgnJggQgVJBhoOfBGo1WxXh2yQDPBpF/AggkjZoYmgkW3buFKqoXmvxiJNnGq9KaC038JJlB4cFVhBBwqCnSdAMbOGRVXE1yhk2YLjJAREMKQk8aLkw0hLwDYC+BFGjBUVgj4d4ImAyJMUhBoyXcvgQMHBZoQqKHrPwgmSiSw/G/AYIUBAQAh+QQFBQD/ACwEAAcAFwAVAAAIswD/CRwoocLAgwgTDsx1LI3ChwcFiTsHzghEiHS8jUPH5+LDDqu8bYPi8aMXiyUPQpgQISVCGYE6jRLFR4LLBQgKuXIFK5YsKi5FHOhTqmjRKC4FrtCjSBEhMTaT/kMAIYKDAVITOmgRQkDWfxCadGGyIeuAIVueAAFx8UHCC1WeDKER9SGFhBSYFMHBIcBDFSQOJBQQYsUFrA8LIP4HoLHjAI4FjPh6kMEIDwYo/wvg92FAACH5BAUFAP8ALAQABQAVABcAAAjRAP8JHEjw34YpFAQUXJihQwCBAR7dirGwIJBdxMgM+PcgWS0ZFQcGMGRNWzUz/yAgWxWSoJxo1rhdQ/JPDqeWAzeQinbNm6F/BDrgHJhiVLRpYIYu3MBlygGlQB1EeFAAqsAWdBpJkhQnAtQDdjRt4uTp0xKoBtpAWrv2iNUSau7ciUMFgtV/Bxw8WKDwLsEFHyo8vKsgh5AZFO4KaPGDBgyhVhfkcOzCb4EVMFxgwPmhAIDPnxlkoPCQQIqKD0GrBh0ghF+CCDxALri6tm3QAQEAIfkEAQUA/wAsBAAFABUAFgAACMYA/wkcSPCfhjVZGBQsaIFKjgEDF8V7N2fhwAOBlhUDM3BYPHqKLAqUgOpYs2Rh/j0IFm9eGZH/BOQRhuzZsiL/3nh7BgPmvw6XhCWL9kfgCQ4BfP4zYUmYMS1KF2Ko0iTqQAYPHFgdWOHLHkCAxjywGiAKoUKHECkKQtZJnrdveWylwCRMGC5EGmyNuYBBgr0LD1DQC9hACRguAAfwAOPFC8ADTjiOCoGggBAvWkQlUNAABYVRAYgeTRrAB4EYAAvkcAFiwYAAOw=="), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root10307 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root10307); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes8861;
          nodes8861 = node.contents();
          oldNodes.replaceWith(nodes8861);
        }));
        callback(root10305); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes8859;
        nodes8859 = node.contents();
        oldNodes.replaceWith(nodes8859);
      }));
      
      
    }
  };
  renderCond394();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond394();
  }));
  
  callback(root10303); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
  var root10308 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1591 = $("<div>");
  
  var ref1558 = mobl.ref(ui.headerStyle);
  if(ref1558.get() !== null) {
    node1591.attr('class', ref1558.get());
    subs__.addSub(ref1558.addEventListener('change', function(_, ref, val) {
      node1591.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1558.rebind());
  
  var val717 = onclick.get();
  if(val717 !== null) {
    subs__.addSub(mobl.domBind(node1591, 'tap', val717));
  }
  
  var ref1559 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref1559.get() !== null) {
    node1591.attr('style', ref1559.get());
    subs__.addSub(ref1559.addEventListener('change', function(_, ref, val) {
      node1591.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node1591.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref1559.rebind());
  
  
  var node1594 = $("<div>");
  
  var ref1557 = mobl.ref(ui.headerContainerStyle);
  if(ref1557.get() !== null) {
    node1594.attr('class', ref1557.get());
    subs__.addSub(ref1557.addEventListener('change', function(_, ref, val) {
      node1594.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1557.rebind());
  
  
  var node1595 = $("<div>");
  
  var ref1555 = text;
  node1595.text(""+ref1555.get());
  var ignore292 = false;
  subs__.addSub(ref1555.addEventListener('change', function(_, ref, val) {
    if(ignore292) return;
    node1595.text(""+val);
  }));
  subs__.addSub(ref1555.rebind());
  
  
  var ref1556 = mobl.ref(ui.headerTextStyle);
  if(ref1556.get() !== null) {
    node1595.attr('class', ref1556.get());
    subs__.addSub(ref1556.addEventListener('change', function(_, ref, val) {
      node1595.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1556.rebind());
  
  node1594.append(node1595);
  node1591.append(node1594);
  var nodes8862 = $("<span>");
  node1591.append(nodes8862);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl619();
  }));
  
  function renderControl619() {
    subs__.addSub((elements)(function(elements, callback) {
      var root10309 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10309); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8862;
      nodes8862 = node.contents();
      oldNodes.replaceWith(nodes8862);
    }));
  }
  renderControl619();
  root10308.append(node1591);
  
  var node1592 = $("<span>");
  root10308.append(node1592);
  var condSubs395 = new mobl.CompSubscription();
  subs__.addSub(condSubs395);
  var oldValue395;
  var renderCond395 = function() {
    var value975 = fixedPosition.get();
    if(oldValue395 === value975) return;
    oldValue395 = value975;
    var subs__ = condSubs395;
    subs__.unsubscribe();
    node1592.empty();
    if(value975) {
      
      var node1593 = $("<div>");
      node1593.attr('id', "hello");
      node1593.attr('style', "height: 2.9em;");
      
      node1592.append(node1593);
      
      
    } else {
      
    }
  };
  renderCond395();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond395();
  }));
  
  callback(root10308); return subs__;
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root10310 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref1560 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref1560.get() !== null) {
    sp.attr('class', ref1560.get());
    subs__.addSub(ref1560.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref1560.rebind());
  
  var val718 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val718 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val718));
  }
  
  var val719 = function(event, callback) {
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
  if(val719 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val719));
  }
  
  var val720 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after198(result__) {
                    var tmp8757 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after198);if(result__ !== undefined) after198(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val720 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val720));
  }
  
  var val721 = function(event, callback) {
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
  if(val721 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val721));
  }
  
  var ref1561 = text;
  sp.text(""+ref1561.get());
  var ignore293 = false;
  subs__.addSub(ref1561.addEventListener('change', function(_, ref, val) {
    if(ignore293) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref1561.rebind());
  
  
  root10310.append(sp);
  callback(root10310); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root10311 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes8863 = $("<span>");
  root10311.append(nodes8863);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root10312 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root10312); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes8863;
    nodes8863 = node.contents();
    oldNodes.replaceWith(nodes8863);
  }));
  callback(root10311); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root10313 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes8864 = $("<span>");
  root10313.append(nodes8864);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root10314 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root10314); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes8864;
    nodes8864 = node.contents();
    oldNodes.replaceWith(nodes8864);
  }));
  callback(root10313); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root10315 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1596 = $("<ul>");
  
  var ref1562 = mobl.ref(ui.groupStyle);
  if(ref1562.get() !== null) {
    node1596.attr('class', ref1562.get());
    subs__.addSub(ref1562.addEventListener('change', function(_, ref, val) {
      node1596.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1562.rebind());
  
  var nodes8865 = $("<span>");
  node1596.append(nodes8865);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl620();
  }));
  
  function renderControl620() {
    subs__.addSub((elements)(function(elements, callback) {
      var root10316 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10316); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8865;
      nodes8865 = node.contents();
      oldNodes.replaceWith(nodes8865);
    }));
  }
  renderControl620();
  root10315.append(node1596);
  callback(root10315); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root10317 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1597 = $("<img>");
  
  var ref1563 = url;
  if(ref1563.get() !== null) {
    node1597.attr('src', ref1563.get());
    subs__.addSub(ref1563.addEventListener('change', function(_, ref, val) {
      node1597.attr('src', val);
    }));
    
  }
  subs__.addSub(ref1563.rebind());
  
  var ref1564 = width;
  if(ref1564.get() !== null) {
    node1597.attr('width', ref1564.get());
    subs__.addSub(ref1564.addEventListener('change', function(_, ref, val) {
      node1597.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1564.rebind());
  
  var ref1565 = height;
  if(ref1565.get() !== null) {
    node1597.attr('height', ref1565.get());
    subs__.addSub(ref1565.addEventListener('change', function(_, ref, val) {
      node1597.attr('height', val);
    }));
    
  }
  subs__.addSub(ref1565.rebind());
  
  var ref1566 = style;
  if(ref1566.get() !== null) {
    node1597.attr('class', ref1566.get());
    subs__.addSub(ref1566.addEventListener('change', function(_, ref, val) {
      node1597.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1566.rebind());
  
  var val722 = onclick.get();
  if(val722 !== null) {
    subs__.addSub(mobl.domBind(node1597, 'tap', val722));
  }
  
  var ref1567 = valign;
  if(ref1567.get() !== null) {
    node1597.attr('valign', ref1567.get());
    subs__.addSub(ref1567.addEventListener('change', function(_, ref, val) {
      node1597.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref1567.rebind());
  
  var ref1568 = align;
  if(ref1568.get() !== null) {
    node1597.attr('align', ref1568.get());
    subs__.addSub(ref1568.addEventListener('change', function(_, ref, val) {
      node1597.attr('align', val);
    }));
    
  }
  subs__.addSub(ref1568.rebind());
  
  root10317.append(node1597);
  callback(root10317); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root10318 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref1569 = mobl.ref(ui.itemStyle);
  if(ref1569.get() !== null) {
    el.attr('class', ref1569.get());
    subs__.addSub(ref1569.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1569.rebind());
  
  var ref1570 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref1570.get() !== null) {
    el.attr('class', ref1570.get());
    subs__.addSub(ref1570.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref1570.rebind());
  
  var val723 = onswipe.get();
  if(val723 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val723));
  }
  
  var val724 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp8758 = result__;
                                           function after199(result__) {
                                             var tmp8759 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after199);if(result__ !== undefined) after199(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp8760 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val724 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val724));
  }
  
  var nodes8866 = $("<span>");
  el.append(nodes8866);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl621();
  }));
  
  function renderControl621() {
    subs__.addSub((elements)(function(elements, callback) {
      var root10319 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10319); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8866;
      nodes8866 = node.contents();
      oldNodes.replaceWith(nodes8866);
    }));
  }
  renderControl621();
  root10318.append(el);
  callback(root10318); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root10320 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1598 = $("<input>");
  node1598.attr('type', "checkbox");
  
  var ref1572 = b;
  node1598.attr('checked', !!ref1572.get());
  subs__.addSub(ref1572.addEventListener('change', function(_, ref, val) {
    if(ref === ref1572) node1598.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node1598, 'change', function() {
    b.set(!!node1598.attr('checked'));
  }));
  
  var val726 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val726 !== null) {
    subs__.addSub(mobl.domBind(node1598, 'tap', val726));
  }
  
  var val727 = onchange.get();
  if(val727 !== null) {
    subs__.addSub(mobl.domBind(node1598, 'change', val727));
  }
  
  root10320.append(node1598);
  
  root10320.append(" ");
  
  var node1599 = $("<span>");
  
  var ref1571 = label;
  node1599.text(""+ref1571.get());
  var ignore294 = false;
  subs__.addSub(ref1571.addEventListener('change', function(_, ref, val) {
    if(ignore294) return;
    node1599.text(""+val);
  }));
  subs__.addSub(ref1571.rebind());
  
  
  var val725 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after200(result__) {
                    var tmp8761 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after200);if(result__ !== undefined) after200(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val725 !== null) {
    subs__.addSub(mobl.domBind(node1599, 'tap', val725));
  }
  
  root10320.append(node1599);
  callback(root10320); return subs__;
  
  
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
  var root10321 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1600 = $("<span>");
  root10321.append(node1600);
  var condSubs396 = new mobl.CompSubscription();
  subs__.addSub(condSubs396);
  var oldValue396;
  var renderCond396 = function() {
    var value976 = label.get();
    if(oldValue396 === value976) return;
    oldValue396 = value976;
    var subs__ = condSubs396;
    subs__.unsubscribe();
    node1600.empty();
    if(value976) {
      var nodes8867 = $("<span>");
      node1600.append(nodes8867);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root10322 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10322); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8867;
        nodes8867 = node.contents();
        oldNodes.replaceWith(nodes8867);
      }));
      
      
    } else {
      
    }
  };
  renderCond396();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond396();
  }));
  
  
  var node1601 = $("<span>");
  root10321.append(node1601);
  var condSubs397 = new mobl.CompSubscription();
  subs__.addSub(condSubs397);
  var oldValue397;
  var renderCond397 = function() {
    var value977 = validator.get();
    if(oldValue397 === value977) return;
    oldValue397 = value977;
    var subs__ = condSubs397;
    subs__.unsubscribe();
    node1601.empty();
    if(value977) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after204(result__) {
        var tmp8762 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp8763 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node1602 = $("<input>");
        
        var ref1573 = inputType;
        if(ref1573.get() !== null) {
          node1602.attr('type', ref1573.get());
          subs__.addSub(ref1573.addEventListener('change', function(_, ref, val) {
            node1602.attr('type', val);
          }));
          
        }
        subs__.addSub(ref1573.rebind());
        
        var ref1574 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref1574.get() !== null) {
          node1602.attr('class', ref1574.get());
          subs__.addSub(ref1574.addEventListener('change', function(_, ref, val) {
            node1602.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node1602.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node1602.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node1602.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref1574.rebind());
        
        var ref1575 = placeholder;
        if(ref1575.get() !== null) {
          node1602.attr('placeholder', ref1575.get());
          subs__.addSub(ref1575.addEventListener('change', function(_, ref, val) {
            node1602.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref1575.rebind());
        
        var ref1576 = temp;
        node1602.val(""+ref1576.get());
        var ignore295 = false;
        subs__.addSub(ref1576.addEventListener('change', function(_, ref, val) {
          if(ignore295) return;
          node1602.val(""+val);
        }));
        subs__.addSub(ref1576.rebind());
        
        subs__.addSub(mobl.domBind(node1602, 'keyup change', function() {
          ignore295 = true;
          temp.set(mobl.stringTomobl__String(node1602.val()));
          ignore295 = false;
        }));
        
        
        var val728 = onchange.get();
        if(val728 !== null) {
          subs__.addSub(mobl.domBind(node1602, 'change', val728));
        }
        
        var val729 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after201(result__) {
                          var tmp8764 = result__;
                          function after202(result__) {
                            var tmp8765 = result__;
                            var result__ = tmp8765;
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
                          var result__ = validator.get()(temp.get(), after202);if(result__ !== undefined) after202(result__);
                        }
                        var result__ = onkeyup.get()(event, after201);if(result__ !== undefined) after201(result__);
                      } else {
                        {
                          function after203(result__) {
                            var tmp8765 = result__;
                            var result__ = tmp8765;
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
                          var result__ = validator.get()(temp.get(), after203);if(result__ !== undefined) after203(result__);
                        }
                      }
                    };
        if(val729 !== null) {
          subs__.addSub(mobl.domBind(node1602, 'keyup', val729));
        }
        
        var val730 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val730 !== null) {
          subs__.addSub(mobl.domBind(node1602, 'blur', val730));
        }
        
        node1601.append(node1602);
        var nodes8868 = $("<span>");
        node1601.append(nodes8868);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root10323 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root10323); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes8868;
          nodes8868 = node.contents();
          oldNodes.replaceWith(nodes8868);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after204);if(result__ !== undefined) after204(result__);
    } else {
      
      var node1603 = $("<input>");
      
      var ref1577 = inputType;
      if(ref1577.get() !== null) {
        node1603.attr('type', ref1577.get());
        subs__.addSub(ref1577.addEventListener('change', function(_, ref, val) {
          node1603.attr('type', val);
        }));
        
      }
      subs__.addSub(ref1577.rebind());
      
      var ref1578 = style;
      if(ref1578.get() !== null) {
        node1603.attr('class', ref1578.get());
        subs__.addSub(ref1578.addEventListener('change', function(_, ref, val) {
          node1603.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1578.rebind());
      
      var ref1579 = placeholder;
      if(ref1579.get() !== null) {
        node1603.attr('placeholder', ref1579.get());
        subs__.addSub(ref1579.addEventListener('change', function(_, ref, val) {
          node1603.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1579.rebind());
      
      var ref1580 = s;
      node1603.val(""+ref1580.get());
      var ignore296 = false;
      subs__.addSub(ref1580.addEventListener('change', function(_, ref, val) {
        if(ignore296) return;
        node1603.val(""+val);
      }));
      subs__.addSub(ref1580.rebind());
      
      subs__.addSub(mobl.domBind(node1603, 'keyup change', function() {
        ignore296 = true;
        s.set(mobl.stringTomobl__String(node1603.val()));
        ignore296 = false;
      }));
      
      
      var val731 = onchange.get();
      if(val731 !== null) {
        subs__.addSub(mobl.domBind(node1603, 'change', val731));
      }
      
      var val732 = onkeyup.get();
      if(val732 !== null) {
        subs__.addSub(mobl.domBind(node1603, 'keyup', val732));
      }
      
      var val733 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val733 !== null) {
        subs__.addSub(mobl.domBind(node1603, 'blur', val733));
      }
      
      node1601.append(node1603);
      
      
    }
  };
  renderCond397();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond397();
  }));
  
  callback(root10321); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root10324 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes8869 = $("<span>");
  root10324.append(nodes8869);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root10325 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root10325); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes8869;
    nodes8869 = node.contents();
    oldNodes.replaceWith(nodes8869);
  }));
  callback(root10324); return subs__;
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root10326 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes8870 = $("<span>");
  root10326.append(nodes8870);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root10327 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root10327); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes8870;
    nodes8870 = node.contents();
    oldNodes.replaceWith(nodes8870);
  }));
  callback(root10326); return subs__;
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root10328 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1604 = $("<span>");
  root10328.append(node1604);
  var condSubs398 = new mobl.CompSubscription();
  subs__.addSub(condSubs398);
  var oldValue398;
  var renderCond398 = function() {
    var value978 = label.get();
    if(oldValue398 === value978) return;
    oldValue398 = value978;
    var subs__ = condSubs398;
    subs__.unsubscribe();
    node1604.empty();
    if(value978) {
      var nodes8871 = $("<span>");
      node1604.append(nodes8871);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root10329 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10329); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8871;
        nodes8871 = node.contents();
        oldNodes.replaceWith(nodes8871);
      }));
      
      
    } else {
      
    }
  };
  renderCond398();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond398();
  }));
  
  
  var node1605 = $("<input>");
  node1605.attr('type', "range");
  
  var ref1581 = n;
  node1605.val(""+ref1581.get());
  var ignore297 = false;
  subs__.addSub(ref1581.addEventListener('change', function(_, ref, val) {
    if(ignore297) return;
    node1605.val(""+val);
  }));
  subs__.addSub(ref1581.rebind());
  
  subs__.addSub(mobl.domBind(node1605, 'keyup change', function() {
    ignore297 = true;
    n.set(mobl.stringTomobl__Num(node1605.val()));
    ignore297 = false;
  }));
  
  
  var ref1582 = min;
  if(ref1582.get() !== null) {
    node1605.attr('min', ref1582.get());
    subs__.addSub(ref1582.addEventListener('change', function(_, ref, val) {
      node1605.attr('min', val);
    }));
    
  }
  subs__.addSub(ref1582.rebind());
  
  var ref1583 = max;
  if(ref1583.get() !== null) {
    node1605.attr('max', ref1583.get());
    subs__.addSub(ref1583.addEventListener('change', function(_, ref, val) {
      node1605.attr('max', val);
    }));
    
  }
  subs__.addSub(ref1583.rebind());
  
  var ref1584 = step;
  if(ref1584.get() !== null) {
    node1605.attr('step', ref1584.get());
    subs__.addSub(ref1584.addEventListener('change', function(_, ref, val) {
      node1605.attr('step', val);
    }));
    
  }
  subs__.addSub(ref1584.rebind());
  node1605.attr('style', "width: 99%;");
  
  var val734 = onchange.get();
  if(val734 !== null) {
    subs__.addSub(mobl.domBind(node1605, 'change', val734));
  }
  
  var val735 = onkeyup.get();
  if(val735 !== null) {
    subs__.addSub(mobl.domBind(node1605, 'keyup', val735));
  }
  
  var ref1585 = placeholder;
  if(ref1585.get() !== null) {
    node1605.attr('placeholder', ref1585.get());
    subs__.addSub(ref1585.addEventListener('change', function(_, ref, val) {
      node1605.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref1585.rebind());
  
  root10328.append(node1605);
  callback(root10328); return subs__;
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root10330 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after205(result__) {
      var tmp8766 = result__;
      var result__ = tmp8766;
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
    var result__ = validator.get()(n2, after205);if(result__ !== undefined) after205(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes8872 = $("<span>");
  root10330.append(nodes8872);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root10331 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root10331); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes8872;
    nodes8872 = node.contents();
    oldNodes.replaceWith(nodes8872);
  }));
  callback(root10330); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root10332 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1606 = $("<span>");
  root10332.append(node1606);
  var condSubs399 = new mobl.CompSubscription();
  subs__.addSub(condSubs399);
  var oldValue399;
  var renderCond399 = function() {
    var value979 = label.get();
    if(oldValue399 === value979) return;
    oldValue399 = value979;
    var subs__ = condSubs399;
    subs__.unsubscribe();
    node1606.empty();
    if(value979) {
      
      var node1607 = $("<span>");
      node1607.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref1589 = label;
      node1607.text(""+ref1589.get());
      var ignore299 = false;
      subs__.addSub(ref1589.addEventListener('change', function(_, ref, val) {
        if(ignore299) return;
        node1607.text(""+val);
      }));
      subs__.addSub(ref1589.rebind());
      
      
      node1606.append(node1607);
      
      var node1608 = $("<span>");
      node1608.attr('style', "float: left");
      
      
      var node1609 = $("<input>");
      node1609.attr('type', "password");
      
      var ref1586 = style;
      if(ref1586.get() !== null) {
        node1609.attr('class', ref1586.get());
        subs__.addSub(ref1586.addEventListener('change', function(_, ref, val) {
          node1609.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1586.rebind());
      
      var ref1587 = placeholder;
      if(ref1587.get() !== null) {
        node1609.attr('placeholder', ref1587.get());
        subs__.addSub(ref1587.addEventListener('change', function(_, ref, val) {
          node1609.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1587.rebind());
      
      var ref1588 = s;
      node1609.val(""+ref1588.get());
      var ignore298 = false;
      subs__.addSub(ref1588.addEventListener('change', function(_, ref, val) {
        if(ignore298) return;
        node1609.val(""+val);
      }));
      subs__.addSub(ref1588.rebind());
      
      subs__.addSub(mobl.domBind(node1609, 'keyup change', function() {
        ignore298 = true;
        s.set(mobl.stringTomobl__String(node1609.val()));
        ignore298 = false;
      }));
      
      
      var val736 = onchange.get();
      if(val736 !== null) {
        subs__.addSub(mobl.domBind(node1609, 'change', val736));
      }
      
      var val737 = onkeyup.get();
      if(val737 !== null) {
        subs__.addSub(mobl.domBind(node1609, 'keyup', val737));
      }
      
      var val738 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val738 !== null) {
        subs__.addSub(mobl.domBind(node1609, 'blur', val738));
      }
      
      node1608.append(node1609);
      node1606.append(node1608);
      
      
      
      
    } else {
      
      var node1610 = $("<input>");
      node1610.attr('type', "password");
      
      var ref1590 = style;
      if(ref1590.get() !== null) {
        node1610.attr('class', ref1590.get());
        subs__.addSub(ref1590.addEventListener('change', function(_, ref, val) {
          node1610.attr('class', val);
        }));
        
      }
      subs__.addSub(ref1590.rebind());
      
      var ref1591 = placeholder;
      if(ref1591.get() !== null) {
        node1610.attr('placeholder', ref1591.get());
        subs__.addSub(ref1591.addEventListener('change', function(_, ref, val) {
          node1610.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref1591.rebind());
      
      var ref1592 = s;
      node1610.val(""+ref1592.get());
      var ignore300 = false;
      subs__.addSub(ref1592.addEventListener('change', function(_, ref, val) {
        if(ignore300) return;
        node1610.val(""+val);
      }));
      subs__.addSub(ref1592.rebind());
      
      subs__.addSub(mobl.domBind(node1610, 'keyup change', function() {
        ignore300 = true;
        s.set(mobl.stringTomobl__String(node1610.val()));
        ignore300 = false;
      }));
      
      
      var val739 = onchange.get();
      if(val739 !== null) {
        subs__.addSub(mobl.domBind(node1610, 'change', val739));
      }
      
      var val740 = onkeyup.get();
      if(val740 !== null) {
        subs__.addSub(mobl.domBind(node1610, 'keyup', val740));
      }
      
      var val741 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val741 !== null) {
        subs__.addSub(mobl.domBind(node1610, 'blur', val741));
      }
      
      node1606.append(node1610);
      
      
    }
  };
  renderCond399();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond399();
  }));
  
  callback(root10332); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root10333 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref1597 = style;
  if(ref1597.get() !== null) {
    sel.attr('class', ref1597.get());
    subs__.addSub(ref1597.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1597.rebind());
  
  var val742 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after206(result__) {
                    var tmp8768 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after206);if(result__ !== undefined) after206(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val742 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val742));
  }
  
  
  var node1611 = mobl.loadingSpan();
  sel.append(node1611);
  var list242;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList242 = function() {
    var subs__ = listSubs__;
    list242 = options.get();
    list242.list(function(results242) {
      node1611.empty();
      for(var i2183 = 0; i2183 < results242.length; i2183++) {
        (function() {
          var iternode242 = $("<span>");
          node1611.append(iternode242);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results242), i2183), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results242), i2183), "_2");
          
          var node1612 = $("<option>");
          
          var ref1593 = optionDescription;
          node1612.text(""+ref1593.get());
          var ignore301 = false;
          subs__.addSub(ref1593.addEventListener('change', function(_, ref, val) {
            if(ignore301) return;
            node1612.text(""+val);
          }));
          subs__.addSub(ref1593.rebind());
          
          
          var ref1594 = optionStyle;
          if(ref1594.get() !== null) {
            node1612.attr('class', ref1594.get());
            subs__.addSub(ref1594.addEventListener('change', function(_, ref, val) {
              node1612.attr('class', val);
            }));
            
          }
          subs__.addSub(ref1594.rebind());
          
          var ref1595 = optionValue;
          if(ref1595.get() !== null) {
            node1612.attr('value', ref1595.get());
            subs__.addSub(ref1595.addEventListener('change', function(_, ref, val) {
              node1612.attr('value', val);
            }));
            
          }
          subs__.addSub(ref1595.rebind());
          
          var ref1596 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref1596.get() !== null) {
            node1612.attr('selected', ref1596.get());
            subs__.addSub(ref1596.addEventListener('change', function(_, ref, val) {
              node1612.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node1612.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node1612.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref1596.rebind());
          
          iternode242.append(node1612);
          
          var oldNodes = iternode242;
          iternode242 = iternode242.contents();
          oldNodes.replaceWith(iternode242);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list242.addEventListener('change', function() { listSubs__.unsubscribe(); renderList242(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList242(true); }));
    });
  };
  renderList242();
  
  root10333.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root10333); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root10334 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes8873 = $("<span>");
    root10334.append(nodes8873);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root10335 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node1613 = mobl.loadingSpan();
      root10335.append(node1613);
      var list243;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList243 = function() {
        var subs__ = listSubs__;
        list243 = tabs.get();
        list243.list(function(results243) {
          node1613.empty();
          for(var i2184 = 0; i2184 < results243.length; i2184++) {
            (function() {
              var iternode243 = $("<span>");
              node1613.append(iternode243);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results243), i2184), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results243), i2184), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results243), i2184), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp8723 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp8723.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp8723.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp8723.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp8723.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp8722 = mobl.ref(result__);
              
              var nodes8874 = $("<span>");
              iternode243.append(nodes8874);
              subs__.addSub((mobl.span)(tmp8723, mobl.ref(null), tmp8722, mobl.ref(null), function(_, callback) {
                var root10336 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes8875 = $("<span>");
                root10336.append(nodes8875);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root10337 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root10337); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes8875;
                  nodes8875 = node.contents();
                  oldNodes.replaceWith(nodes8875);
                }));
                callback(root10336); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes8874;
                nodes8874 = node.contents();
                oldNodes.replaceWith(nodes8874);
              }));
              
              var oldNodes = iternode243;
              iternode243 = iternode243.contents();
              oldNodes.replaceWith(iternode243);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list243.addEventListener('change', function() { listSubs__.unsubscribe(); renderList243(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList243(true); }));
        });
      };
      renderList243();
      
      callback(root10335); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes8873;
      nodes8873 = node.contents();
      oldNodes.replaceWith(nodes8873);
    }));
    
    var node1614 = mobl.loadingSpan();
    root10334.append(node1614);
    var list244;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList244 = function() {
      var subs__ = listSubs__;
      list244 = tabs.get();
      list244.list(function(results244) {
        node1614.empty();
        for(var i2185 = 0; i2185 < results244.length; i2185++) {
          (function() {
            var iternode244 = $("<span>");
            node1614.append(iternode244);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results244), i2185), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results244), i2185), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results244), i2185), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp8724 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp8724.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp8724.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp8724.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp8724.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes8876 = $("<span>");
            iternode244.append(nodes8876);
            subs__.addSub((mobl.block)(tmp8724, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root10338 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes8877 = $("<span>");
              root10338.append(nodes8877);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root10339 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes8878 = $("<span>");
                root10339.append(nodes8878);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl622();
                }));
                
                function renderControl622() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root10340 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root10340); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes8878;
                    nodes8878 = node.contents();
                    oldNodes.replaceWith(nodes8878);
                  }));
                }
                renderControl622();
                callback(root10339); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes8877;
                nodes8877 = node.contents();
                oldNodes.replaceWith(nodes8877);
              }));
              callback(root10338); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes8876;
              nodes8876 = node.contents();
              oldNodes.replaceWith(nodes8876);
            }));
            
            var oldNodes = iternode244;
            iternode244 = iternode244.contents();
            oldNodes.replaceWith(iternode244);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list244.addEventListener('change', function() { listSubs__.unsubscribe(); renderList244(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList244(true); }));
      });
    };
    renderList244();
    
    callback(root10334); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes8873 = $("<span>");
      root10334.append(nodes8873);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root10335 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1613 = mobl.loadingSpan();
        root10335.append(node1613);
        var list243;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList243 = function() {
          var subs__ = listSubs__;
          list243 = tabs.get();
          list243.list(function(results243) {
            node1613.empty();
            for(var i2184 = 0; i2184 < results243.length; i2184++) {
              (function() {
                var iternode243 = $("<span>");
                node1613.append(iternode243);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results243), i2184), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results243), i2184), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results243), i2184), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp8723 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp8723.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp8723.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp8723.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp8723.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp8722 = mobl.ref(result__);
                
                var nodes8874 = $("<span>");
                iternode243.append(nodes8874);
                subs__.addSub((mobl.span)(tmp8723, mobl.ref(null), tmp8722, mobl.ref(null), function(_, callback) {
                  var root10336 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes8875 = $("<span>");
                  root10336.append(nodes8875);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root10337 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root10337); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes8875;
                    nodes8875 = node.contents();
                    oldNodes.replaceWith(nodes8875);
                  }));
                  callback(root10336); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes8874;
                  nodes8874 = node.contents();
                  oldNodes.replaceWith(nodes8874);
                }));
                
                var oldNodes = iternode243;
                iternode243 = iternode243.contents();
                oldNodes.replaceWith(iternode243);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list243.addEventListener('change', function() { listSubs__.unsubscribe(); renderList243(true); }));
            subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList243(true); }));
          });
        };
        renderList243();
        
        callback(root10335); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes8873;
        nodes8873 = node.contents();
        oldNodes.replaceWith(nodes8873);
      }));
      
      var node1614 = mobl.loadingSpan();
      root10334.append(node1614);
      var list244;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList244 = function() {
        var subs__ = listSubs__;
        list244 = tabs.get();
        list244.list(function(results244) {
          node1614.empty();
          for(var i2185 = 0; i2185 < results244.length; i2185++) {
            (function() {
              var iternode244 = $("<span>");
              node1614.append(iternode244);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results244), i2185), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results244), i2185), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results244), i2185), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp8724 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp8724.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp8724.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp8724.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp8724.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes8876 = $("<span>");
              iternode244.append(nodes8876);
              subs__.addSub((mobl.block)(tmp8724, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root10338 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes8877 = $("<span>");
                root10338.append(nodes8877);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root10339 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes8878 = $("<span>");
                  root10339.append(nodes8878);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl622();
                  }));
                  
                  function renderControl622() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root10340 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root10340); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes8878;
                      nodes8878 = node.contents();
                      oldNodes.replaceWith(nodes8878);
                    }));
                  }
                  renderControl622();
                  callback(root10339); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes8877;
                  nodes8877 = node.contents();
                  oldNodes.replaceWith(nodes8877);
                }));
                callback(root10338); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes8876;
                nodes8876 = node.contents();
                oldNodes.replaceWith(nodes8876);
              }));
              
              var oldNodes = iternode244;
              iternode244 = iternode244.contents();
              oldNodes.replaceWith(iternode244);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list244.addEventListener('change', function() { listSubs__.unsubscribe(); renderList244(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList244(true); }));
        });
      };
      renderList244();
      
      callback(root10334); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root10341 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1615 = $("<div>");
  
  var ref1601 = mobl.ref(ui.searchboxStyle);
  if(ref1601.get() !== null) {
    node1615.attr('class', ref1601.get());
    subs__.addSub(ref1601.addEventListener('change', function(_, ref, val) {
      node1615.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1601.rebind());
  
  
  var node1616 = $("<input>");
  node1616.attr('type', "search");
  
  var ref1598 = mobl.ref(ui.searchBoxInputStyle);
  if(ref1598.get() !== null) {
    node1616.attr('class', ref1598.get());
    subs__.addSub(ref1598.addEventListener('change', function(_, ref, val) {
      node1616.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1598.rebind());
  
  var ref1599 = placeholder;
  if(ref1599.get() !== null) {
    node1616.attr('placeholder', ref1599.get());
    subs__.addSub(ref1599.addEventListener('change', function(_, ref, val) {
      node1616.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref1599.rebind());
  
  var ref1600 = s;
  node1616.val(""+ref1600.get());
  var ignore302 = false;
  subs__.addSub(ref1600.addEventListener('change', function(_, ref, val) {
    if(ignore302) return;
    node1616.val(""+val);
  }));
  subs__.addSub(ref1600.rebind());
  
  subs__.addSub(mobl.domBind(node1616, 'keyup change', function() {
    ignore302 = true;
    s.set(mobl.stringTomobl__String(node1616.val()));
    ignore302 = false;
  }));
  
  
  var val743 = onsearch.get();
  if(val743 !== null) {
    subs__.addSub(mobl.domBind(node1616, 'change', val743));
  }
  
  var val744 = onkeyup.get();
  if(val744 !== null) {
    subs__.addSub(mobl.domBind(node1616, 'keyup', val744));
  }
  node1616.attr('autocorrect', false);
  node1616.attr('autocapitalize', false);
  node1616.attr('autocomplete', false);
  
  node1615.append(node1616);
  root10341.append(node1615);
  callback(root10341); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root10342 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref1602 = mobl.ref(ui.contextMenuStyle);
  if(ref1602.get() !== null) {
    menu.attr('class', ref1602.get());
    subs__.addSub(ref1602.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1602.rebind());
  
  var nodes8879 = $("<span>");
  menu.append(nodes8879);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl623();
  }));
  
  function renderControl623() {
    subs__.addSub((elements)(function(elements, callback) {
      var root10343 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10343); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8879;
      nodes8879 = node.contents();
      oldNodes.replaceWith(nodes8879);
    }));
  }
  renderControl623();
  root10342.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val745 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp8771 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val745 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val745));
  }
  
  root10342.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root10342); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root10344 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp8755 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp8755.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node1617 = $("<span>");
  root10344.append(node1617);
  var condSubs400 = new mobl.CompSubscription();
  subs__.addSub(condSubs400);
  var oldValue400;
  var renderCond400 = function() {
    var value980 = tmp8755.get();
    if(oldValue400 === value980) return;
    oldValue400 = value980;
    var subs__ = condSubs400;
    subs__.unsubscribe();
    node1617.empty();
    if(value980) {
      items.get().one(function(result__) {
        var tmp8772 = result__;
        var current = mobl.ref(result__);
        
        var node1618 = $("<div>");
        node1618.attr('width', "100%");
        
        
        var node1619 = $("<div>");
        node1619.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes8882 = $("<span>");
        node1619.append(nodes8882);
        subs__.addSub((ui.group)(function(_, callback) {
          var root10347 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node1622 = mobl.loadingSpan();
          root10347.append(node1622);
          var list245;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList245 = function() {
            var subs__ = listSubs__;
            list245 = items.get();
            list245.list(function(results245) {
              node1622.empty();
              for(var i2186 = 0; i2186 < results245.length; i2186++) {
                (function() {
                  var iternode245 = $("<span>");
                  node1622.append(iternode245);
                  var it;
                  it = mobl.ref(mobl.ref(results245), i2186);
                  var result__ = it.get() == current.get();
                  var tmp8730 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp8730.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp8730.set(it.get() == current.get());
                  }));
                  
                  
                  var node1623 = $("<span>");
                  iternode245.append(node1623);
                  var condSubs402 = new mobl.CompSubscription();
                  subs__.addSub(condSubs402);
                  var oldValue402;
                  var renderCond402 = function() {
                    var value982 = tmp8730.get();
                    if(oldValue402 === value982) return;
                    oldValue402 = value982;
                    var subs__ = condSubs402;
                    subs__.unsubscribe();
                    node1623.empty();
                    if(value982) {
                      var nodes8883 = $("<span>");
                      node1623.append(nodes8883);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root10348 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes8884 = $("<span>");
                        root10348.append(nodes8884);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl625();
                        }));
                        
                        function renderControl625() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root10349 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root10349); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes8884;
                            nodes8884 = node.contents();
                            oldNodes.replaceWith(nodes8884);
                          }));
                        }
                        renderControl625();
                        callback(root10348); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes8883;
                        nodes8883 = node.contents();
                        oldNodes.replaceWith(nodes8883);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp8729 = mobl.ref(result__);
                      
                      var nodes8885 = $("<span>");
                      node1623.append(nodes8885);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8729, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root10350 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes8886 = $("<span>");
                        root10350.append(nodes8886);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl626();
                        }));
                        
                        function renderControl626() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root10351 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root10351); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes8886;
                            nodes8886 = node.contents();
                            oldNodes.replaceWith(nodes8886);
                          }));
                        }
                        renderControl626();
                        callback(root10350); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes8885;
                        nodes8885 = node.contents();
                        oldNodes.replaceWith(nodes8885);
                      }));
                      
                      
                    }
                  };
                  renderCond402();
                  subs__.addSub(tmp8730.addEventListener('change', function() {
                    renderCond402();
                  }));
                  
                  
                  var oldNodes = iternode245;
                  iternode245 = iternode245.contents();
                  oldNodes.replaceWith(iternode245);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list245.addEventListener('change', function() { listSubs__.unsubscribe(); renderList245(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList245(true); }));
            });
          };
          renderList245();
          
          callback(root10347); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes8882;
          nodes8882 = node.contents();
          oldNodes.replaceWith(nodes8882);
        }));
        node1618.append(node1619);
        
        var node1620 = $("<div>");
        node1620.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node1621 = $("<span>");
        node1620.append(node1621);
        var condSubs401 = new mobl.CompSubscription();
        subs__.addSub(condSubs401);
        var oldValue401;
        var renderCond401 = function() {
          var value981 = current.get();
          if(oldValue401 === value981) return;
          oldValue401 = value981;
          var subs__ = condSubs401;
          subs__.unsubscribe();
          node1621.empty();
          if(value981) {
            var nodes8880 = $("<span>");
            node1621.append(nodes8880);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl624();
            }));
            
            function renderControl624() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root10345 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root10345); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes8880;
                nodes8880 = node.contents();
                oldNodes.replaceWith(nodes8880);
              }));
            }
            renderControl624();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp8731 = mobl.ref(result__);
            
            var nodes8881 = $("<span>");
            node1621.append(nodes8881);
            subs__.addSub((mobl.label)(tmp8731, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root10346 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root10346); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes8881;
              nodes8881 = node.contents();
              oldNodes.replaceWith(nodes8881);
            }));
            
            
          }
        };
        renderCond401();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond401();
        }));
        
        node1618.append(node1620);
        node1617.append(node1618);
        
        
        
        
        
        
      });
    } else {
      var nodes8887 = $("<span>");
      node1617.append(nodes8887);
      subs__.addSub((ui.group)(function(_, callback) {
        var root10352 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1624 = mobl.loadingSpan();
        root10352.append(node1624);
        var list246;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList246 = function() {
          var subs__ = listSubs__;
          list246 = items.get();
          list246.list(function(results246) {
            node1624.empty();
            for(var i2187 = 0; i2187 < results246.length; i2187++) {
              (function() {
                var iternode246 = $("<span>");
                node1624.append(iternode246);
                var it;
                it = mobl.ref(mobl.ref(results246), i2187);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp8773 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp8725 = mobl.ref(result__);
                
                var nodes8888 = $("<span>");
                iternode246.append(nodes8888);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8725, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root10353 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes8889 = $("<span>");
                  root10353.append(nodes8889);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl627();
                  }));
                  
                  function renderControl627() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root10354 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root10354); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes8889;
                      nodes8889 = node.contents();
                      oldNodes.replaceWith(nodes8889);
                    }));
                  }
                  renderControl627();
                  callback(root10353); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes8888;
                  nodes8888 = node.contents();
                  oldNodes.replaceWith(nodes8888);
                }));
                
                var oldNodes = iternode246;
                iternode246 = iternode246.contents();
                oldNodes.replaceWith(iternode246);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list246.addEventListener('change', function() { listSubs__.unsubscribe(); renderList246(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList246(true); }));
          });
        };
        renderList246();
        
        callback(root10352); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes8887;
        nodes8887 = node.contents();
        oldNodes.replaceWith(nodes8887);
      }));
      
      
    }
  };
  renderCond400();
  subs__.addSub(tmp8755.addEventListener('change', function() {
    renderCond400();
  }));
  
  callback(root10344); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root10355 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp8728 = mobl.ref(result__);
  
  var nodes8890 = $("<span>");
  root10355.append(nodes8890);
  subs__.addSub((ui.header)(tmp8728, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root10356 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp8727 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp8726 = mobl.ref(result__);
    
    var nodes8891 = $("<span>");
    root10356.append(nodes8891);
    subs__.addSub((ui.backButton)(tmp8726, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp8727, function(_, callback) {
      var root10357 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10357); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8891;
      nodes8891 = node.contents();
      oldNodes.replaceWith(nodes8891);
    }));
    callback(root10356); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8890;
    nodes8890 = node.contents();
    oldNodes.replaceWith(nodes8890);
  }));
  var nodes8892 = $("<span>");
  root10355.append(nodes8892);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl628();
  }));
  
  function renderControl628() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root10358 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10358); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8892;
      nodes8892 = node.contents();
      oldNodes.replaceWith(nodes8892);
    }));
  }
  renderControl628();
  callback(root10355); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root10359 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes8893 = $("<span>");
  root10359.append(nodes8893);
  subs__.addSub((ui.group)(function(_, callback) {
    var root10360 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1625 = mobl.loadingSpan();
    root10360.append(node1625);
    var list247;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList247 = function() {
      var subs__ = listSubs__;
      list247 = coll.get();
      list247.list(function(results247) {
        node1625.empty();
        for(var i2188 = 0; i2188 < results247.length; i2188++) {
          (function() {
            var iternode247 = $("<span>");
            node1625.append(iternode247);
            var it;
            it = mobl.ref(mobl.ref(results247), i2188);
            var result__ = it.get() == selected.get();
            var tmp8733 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp8733.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp8733.set(it.get() == selected.get());
            }));
            
            
            var node1626 = $("<span>");
            iternode247.append(node1626);
            var condSubs403 = new mobl.CompSubscription();
            subs__.addSub(condSubs403);
            var oldValue403;
            var renderCond403 = function() {
              var value983 = tmp8733.get();
              if(oldValue403 === value983) return;
              oldValue403 = value983;
              var subs__ = condSubs403;
              subs__.unsubscribe();
              node1626.empty();
              if(value983) {
                var nodes8894 = $("<span>");
                node1626.append(nodes8894);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root10361 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes8895 = $("<span>");
                  root10361.append(nodes8895);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl629();
                  }));
                  
                  function renderControl629() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root10362 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root10362); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes8895;
                      nodes8895 = node.contents();
                      oldNodes.replaceWith(nodes8895);
                    }));
                  }
                  renderControl629();
                  callback(root10361); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes8894;
                  nodes8894 = node.contents();
                  oldNodes.replaceWith(nodes8894);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp8732 = mobl.ref(result__);
                
                var nodes8896 = $("<span>");
                node1626.append(nodes8896);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8732, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root10363 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes8897 = $("<span>");
                  root10363.append(nodes8897);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl630();
                  }));
                  
                  function renderControl630() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root10364 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root10364); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes8897;
                      nodes8897 = node.contents();
                      oldNodes.replaceWith(nodes8897);
                    }));
                  }
                  renderControl630();
                  callback(root10363); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes8896;
                  nodes8896 = node.contents();
                  oldNodes.replaceWith(nodes8896);
                }));
                
                
              }
            };
            renderCond403();
            subs__.addSub(tmp8733.addEventListener('change', function() {
              renderCond403();
            }));
            
            
            var oldNodes = iternode247;
            iternode247 = iternode247.contents();
            oldNodes.replaceWith(iternode247);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list247.addEventListener('change', function() { listSubs__.unsubscribe(); renderList247(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList247(true); }));
      });
    };
    renderList247();
    
    callback(root10360); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8893;
    nodes8893 = node.contents();
    oldNodes.replaceWith(nodes8893);
  }));
  callback(root10359); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root10365 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp8774 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp8734 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp8734.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp8734.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp8734.set(coll.get().limit(n.get()));
    }));
    
    
    var node1627 = mobl.loadingSpan();
    root10365.append(node1627);
    var list248;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList248 = function() {
      var subs__ = listSubs__;
      list248 = tmp8734.get();
      list248.list(function(results248) {
        node1627.empty();
        for(var i2189 = 0; i2189 < results248.length; i2189++) {
          (function() {
            var iternode248 = $("<span>");
            node1627.append(iternode248);
            var it;
            it = mobl.ref(mobl.ref(results248), i2189);
            var nodes8898 = $("<span>");
            iternode248.append(nodes8898);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl631();
            }));
            
            function renderControl631() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root10366 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root10366); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes8898;
                nodes8898 = node.contents();
                oldNodes.replaceWith(nodes8898);
              }));
            }
            renderControl631();
            
            var oldNodes = iternode248;
            iternode248 = iternode248.contents();
            oldNodes.replaceWith(iternode248);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list248.addEventListener('change', function() { listSubs__.unsubscribe(); renderList248(true); }));
        subs__.addSub(tmp8734.addEventListener('change', function() { listSubs__.unsubscribe(); renderList248(true); }));
      });
    };
    renderList248();
    
    var result__ = n.get() < total.get();
    var tmp8736 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp8736.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp8736.set(n.get() < total.get());
    }));
    
    
    var node1628 = $("<span>");
    root10365.append(node1628);
    var condSubs404 = new mobl.CompSubscription();
    subs__.addSub(condSubs404);
    var oldValue404;
    var renderCond404 = function() {
      var value984 = tmp8736.get();
      if(oldValue404 === value984) return;
      oldValue404 = value984;
      var subs__ = condSubs404;
      subs__.unsubscribe();
      node1628.empty();
      if(value984) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp8735 = mobl.ref(result__);
        
        var nodes8899 = $("<span>");
        node1628.append(nodes8899);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp8735, mobl.ref(null), function(_, callback) {
          var root10367 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes8900 = $("<span>");
          root10367.append(nodes8900);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root10368 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root10368); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes8900;
            nodes8900 = node.contents();
            oldNodes.replaceWith(nodes8900);
          }));
          callback(root10367); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes8899;
          nodes8899 = node.contents();
          oldNodes.replaceWith(nodes8899);
        }));
        
        
      } else {
        
      }
    };
    renderCond404();
    subs__.addSub(tmp8736.addEventListener('change', function() {
      renderCond404();
    }));
    
    callback(root10365); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root10369 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes8901 = $("<span>");
  root10369.append(nodes8901);
  subs__.addSub((ui.group)(function(_, callback) {
    var root10370 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1629 = mobl.loadingSpan();
    root10370.append(node1629);
    var list249;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList249 = function() {
      var subs__ = listSubs__;
      list249 = items.get();
      list249.list(function(results249) {
        node1629.empty();
        for(var i2190 = 0; i2190 < results249.length; i2190++) {
          (function() {
            var iternode249 = $("<span>");
            node1629.append(iternode249);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results249), i2190), "_1");it = mobl.ref(mobl.ref(mobl.ref(results249), i2190), "_2");
            var nodes8902 = $("<span>");
            iternode249.append(nodes8902);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root10371 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes8903 = $("<span>");
              root10371.append(nodes8903);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root10372 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root10372); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes8903;
                nodes8903 = node.contents();
                oldNodes.replaceWith(nodes8903);
              }));
              callback(root10371); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes8902;
              nodes8902 = node.contents();
              oldNodes.replaceWith(nodes8902);
            }));
            
            var oldNodes = iternode249;
            iternode249 = iternode249.contents();
            oldNodes.replaceWith(iternode249);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list249.addEventListener('change', function() { listSubs__.unsubscribe(); renderList249(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList249(true); }));
      });
    };
    renderList249();
    
    callback(root10370); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8901;
    nodes8901 = node.contents();
    oldNodes.replaceWith(nodes8901);
  }));
  callback(root10369); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root10373 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll1195) {
    coll1195 = coll1195.reverse();
    function processOne325() {
      var it;
      it = coll1195.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll1195.length > 0) processOne325(); else rest325();
      
    }
    function rest325() {
      var nodes8904 = $("<span>");
      root10373.append(nodes8904);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root10374 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp8737 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp8738 = mobl.ref(result__);
        
        var nodes8905 = $("<span>");
        root10374.append(nodes8905);
        subs__.addSub((ui.backButton)(tmp8738, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp8737, function(_, callback) {
          var root10375 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root10375); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes8905;
          nodes8905 = node.contents();
          oldNodes.replaceWith(nodes8905);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll1194) {
                           coll1194 = coll1194.reverse();
                           function processOne324() {
                             var checked;var it;
                             var tmp8776 = coll1194.pop();
                             checked = tmp8776._1;it = tmp8776._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll1194.length > 0) processOne324(); else rest324();
                               
                             } else {
                               {
                                 
                                 if(coll1194.length > 0) processOne324(); else rest324();
                                 
                               }
                             }
                           }
                           function rest324() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll1194.length > 0) processOne324(); else rest324();
                         });
                         
                       };
        var tmp8739 = mobl.ref(result__);
        
        var nodes8906 = $("<span>");
        root10374.append(nodes8906);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp8739, function(_, callback) {
          var root10376 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root10376); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes8906;
          nodes8906 = node.contents();
          oldNodes.replaceWith(nodes8906);
        }));
        callback(root10374); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes8904;
        nodes8904 = node.contents();
        oldNodes.replaceWith(nodes8904);
      }));
      var nodes8907 = $("<span>");
      root10373.append(nodes8907);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root10377 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root10377); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes8907;
        nodes8907 = node.contents();
        oldNodes.replaceWith(nodes8907);
      }));
      callback(root10373); return subs__;
      
      
    }
    if(coll1195.length > 0) processOne325(); else rest325();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root10378 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes8908 = $("<span>");
  root10378.append(nodes8908);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root10379 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root10379); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes8908;
    nodes8908 = node.contents();
    oldNodes.replaceWith(nodes8908);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp8740 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp8740.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp8740.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp8740.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp8740.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp8740.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes8909 = $("<span>");
  root10378.append(nodes8909);
  subs__.addSub((ui.masterDetail)(tmp8740, masterItem, detailItem, function(_, callback) {
    var root10380 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root10380); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes8909;
    nodes8909 = node.contents();
    oldNodes.replaceWith(nodes8909);
  }));
  callback(root10378); return subs__;
  
  
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
  var root10381 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes8910 = $("<span>");
  root10381.append(nodes8910);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root10382 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node1630 = mobl.loadingSpan();
    root10382.append(node1630);
    var list250;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList250 = function() {
      var subs__ = listSubs__;
      list250 = sections.get();
      list250.list(function(results250) {
        node1630.empty();
        for(var i2191 = 0; i2191 < results250.length; i2191++) {
          (function() {
            var iternode250 = $("<span>");
            node1630.append(iternode250);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results250), i2191), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results250), i2191), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp8742 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp8742.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp8742.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp8742.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp8742.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp8741 = mobl.ref(result__);
            
            var nodes8911 = $("<span>");
            iternode250.append(nodes8911);
            subs__.addSub((mobl.span)(tmp8742, mobl.ref(null), tmp8741, mobl.ref(null), function(_, callback) {
              var root10383 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes8912 = $("<span>");
              root10383.append(nodes8912);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root10384 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root10384); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes8912;
                nodes8912 = node.contents();
                oldNodes.replaceWith(nodes8912);
              }));
              callback(root10383); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes8911;
              nodes8911 = node.contents();
              oldNodes.replaceWith(nodes8911);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp8743 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp8743.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp8743.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp8743.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp8743.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes8913 = $("<span>");
            iternode250.append(nodes8913);
            subs__.addSub((mobl.block)(tmp8743, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root10385 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes8914 = $("<span>");
              root10385.append(nodes8914);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl632();
              }));
              
              function renderControl632() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root10386 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root10386); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes8914;
                  nodes8914 = node.contents();
                  oldNodes.replaceWith(nodes8914);
                }));
              }
              renderControl632();
              callback(root10385); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes8913;
              nodes8913 = node.contents();
              oldNodes.replaceWith(nodes8913);
            }));
            
            var oldNodes = iternode250;
            iternode250 = iternode250.contents();
            oldNodes.replaceWith(iternode250);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list250.addEventListener('change', function() { listSubs__.unsubscribe(); renderList250(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList250(true); }));
      });
    };
    renderList250();
    
    callback(root10382); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8910;
    nodes8910 = node.contents();
    oldNodes.replaceWith(nodes8910);
  }));
  callback(root10381); return subs__;
  
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
  var root10387 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1631 = $("<table>");
  
  var ref1603 = style;
  if(ref1603.get() !== null) {
    node1631.attr('class', ref1603.get());
    subs__.addSub(ref1603.addEventListener('change', function(_, ref, val) {
      node1631.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1603.rebind());
  
  var nodes8915 = $("<span>");
  node1631.append(nodes8915);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl633();
  }));
  
  function renderControl633() {
    subs__.addSub((elements)(function(elements, callback) {
      var root10388 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10388); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8915;
      nodes8915 = node.contents();
      oldNodes.replaceWith(nodes8915);
    }));
  }
  renderControl633();
  root10387.append(node1631);
  callback(root10387); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root10389 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1632 = $("<tr>");
  
  var ref1604 = style;
  if(ref1604.get() !== null) {
    node1632.attr('class', ref1604.get());
    subs__.addSub(ref1604.addEventListener('change', function(_, ref, val) {
      node1632.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1604.rebind());
  
  var nodes8916 = $("<span>");
  node1632.append(nodes8916);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl634();
  }));
  
  function renderControl634() {
    subs__.addSub((elements)(function(elements, callback) {
      var root10390 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10390); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8916;
      nodes8916 = node.contents();
      oldNodes.replaceWith(nodes8916);
    }));
  }
  renderControl634();
  root10389.append(node1632);
  callback(root10389); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root10391 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1633 = $("<td>");
  
  var ref1605 = width;
  if(ref1605.get() !== null) {
    node1633.attr('width', ref1605.get());
    subs__.addSub(ref1605.addEventListener('change', function(_, ref, val) {
      node1633.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1605.rebind());
  
  var ref1606 = style;
  if(ref1606.get() !== null) {
    node1633.attr('class', ref1606.get());
    subs__.addSub(ref1606.addEventListener('change', function(_, ref, val) {
      node1633.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1606.rebind());
  
  var nodes8917 = $("<span>");
  node1633.append(nodes8917);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl635();
  }));
  
  function renderControl635() {
    subs__.addSub((elements)(function(elements, callback) {
      var root10392 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10392); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8917;
      nodes8917 = node.contents();
      oldNodes.replaceWith(nodes8917);
    }));
  }
  renderControl635();
  root10391.append(node1633);
  callback(root10391); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root10393 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1634 = $("<td>");
  
  var ref1607 = width;
  if(ref1607.get() !== null) {
    node1634.attr('width', ref1607.get());
    subs__.addSub(ref1607.addEventListener('change', function(_, ref, val) {
      node1634.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1607.rebind());
  
  var ref1608 = style;
  if(ref1608.get() !== null) {
    node1634.attr('class', ref1608.get());
    subs__.addSub(ref1608.addEventListener('change', function(_, ref, val) {
      node1634.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1608.rebind());
  
  var nodes8918 = $("<span>");
  node1634.append(nodes8918);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl636();
  }));
  
  function renderControl636() {
    subs__.addSub((elements)(function(elements, callback) {
      var root10394 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10394); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8918;
      nodes8918 = node.contents();
      oldNodes.replaceWith(nodes8918);
    }));
  }
  renderControl636();
  root10393.append(node1634);
  callback(root10393); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root10395 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node1635 = $("<td>");
  
  var ref1609 = width;
  if(ref1609.get() !== null) {
    node1635.attr('width', ref1609.get());
    subs__.addSub(ref1609.addEventListener('change', function(_, ref, val) {
      node1635.attr('width', val);
    }));
    
  }
  subs__.addSub(ref1609.rebind());
  
  var ref1610 = style;
  if(ref1610.get() !== null) {
    node1635.attr('class', ref1610.get());
    subs__.addSub(ref1610.addEventListener('change', function(_, ref, val) {
      node1635.attr('class', val);
    }));
    
  }
  subs__.addSub(ref1610.rebind());
  
  
  var node1636 = $("<strong>");
  
  var nodes8919 = $("<span>");
  node1636.append(nodes8919);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl637();
  }));
  
  function renderControl637() {
    subs__.addSub((elements)(function(elements, callback) {
      var root10396 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10396); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8919;
      nodes8919 = node.contents();
      oldNodes.replaceWith(nodes8919);
    }));
  }
  renderControl637();
  node1635.append(node1636);
  root10395.append(node1635);
  callback(root10395); return subs__;
  
  
  
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
  items.list(function(coll1196) {
    coll1196 = coll1196.reverse();
    function processOne326() {
      var item;
      item = coll1196.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = counter;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = counter + 1;
        counter = result__;
        
        if(coll1196.length > 0) processOne326(); else rest326();
        
      } else {
        {
          var result__ = counter + 1;
          counter = result__;
          
          if(coll1196.length > 0) processOne326(); else rest326();
          
        }
      }
    }
    function rest326() {
      var result__ = -1;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll1196.length > 0) processOne326(); else rest326();
  });
  
};

ui.visible = mobl.ref(true);
ui.hideCurrent = function() {
   var __this = this;
  ui.visible.set(false);
};


ui.mMasterDetail = function(items, masterItem, detail, elements, callback) {
  var root10397 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp8756 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp8756.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node1637 = $("<span>");
  root10397.append(node1637);
  var condSubs405 = new mobl.CompSubscription();
  subs__.addSub(condSubs405);
  var oldValue405;
  var renderCond405 = function() {
    var value985 = tmp8756.get();
    if(oldValue405 === value985) return;
    oldValue405 = value985;
    var subs__ = condSubs405;
    subs__.unsubscribe();
    node1637.empty();
    if(value985) {
      items.get().one(function(result__) {
        var tmp8778 = result__;
        var current = mobl.ref(result__);
        
        var node1638 = $("<div>");
        node1638.attr('width', "100%");
        
        
        var node1639 = $("<div>");
        node1639.attr('style', "float:left; width:45%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes8921 = $("<span>");
        node1639.append(nodes8921);
        subs__.addSub((ui.group)(function(_, callback) {
          var root10399 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node1642 = mobl.loadingSpan();
          root10399.append(node1642);
          var list251;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList251 = function() {
            var subs__ = listSubs__;
            list251 = items.get();
            list251.list(function(results251) {
              node1642.empty();
              for(var i2192 = 0; i2192 < results251.length; i2192++) {
                (function() {
                  var iternode251 = $("<span>");
                  node1642.append(iternode251);
                  var it;
                  it = mobl.ref(mobl.ref(results251), i2192);
                  var result__ = it.get() == current.get();
                  var tmp8752 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp8752.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp8752.set(it.get() == current.get());
                  }));
                  
                  
                  var node1643 = $("<span>");
                  iternode251.append(node1643);
                  var condSubs407 = new mobl.CompSubscription();
                  subs__.addSub(condSubs407);
                  var oldValue407;
                  var renderCond407 = function() {
                    var value987 = tmp8752.get();
                    if(oldValue407 === value987) return;
                    oldValue407 = value987;
                    var subs__ = condSubs407;
                    subs__.unsubscribe();
                    node1643.empty();
                    if(value987) {
                      var nodes8922 = $("<span>");
                      node1643.append(nodes8922);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root10400 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp8784 = result__;
                          var tmp8749 = mobl.ref(result__);
                          subs__.addSub(it.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp8782 = result__;
                              var result__ = tmp8782;
                              tmp8749.set(result__);
                              
                            });
                          }));
                          subs__.addSub(items.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp8783 = result__;
                              var result__ = tmp8783;
                              tmp8749.set(result__);
                              
                            });
                          }));
                          
                          var nodes8923 = $("<span>");
                          root10400.append(nodes8923);
                          subs__.addSub(masterItem.addEventListener('change', function() {
                            renderControl639();
                          }));
                          
                          function renderControl639() {
                            subs__.addSub((masterItem.get())(it, tmp8749, function(elements, callback) {
                              var root10401 = $("<span>");
                              var subs__ = new mobl.CompSubscription();
                              callback(root10401); return subs__;
                              return subs__;
                            }, function(node) {
                              var oldNodes = nodes8923;
                              nodes8923 = node.contents();
                              oldNodes.replaceWith(nodes8923);
                            }));
                          }
                          renderControl639();
                          callback(root10400); return subs__;
                          
                        });
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes8922;
                        nodes8922 = node.contents();
                        oldNodes.replaceWith(nodes8922);
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
                      var tmp8751 = mobl.ref(result__);
                      
                      var nodes8924 = $("<span>");
                      node1643.append(nodes8924);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8751, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root10402 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp8787 = result__;
                          var tmp8750 = mobl.ref(result__);
                          subs__.addSub(it.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp8785 = result__;
                              var result__ = tmp8785;
                              tmp8750.set(result__);
                              
                            });
                          }));
                          subs__.addSub(items.addEventListener('change', function() {
                            ui.indexOf(it.get(), items.get(), function(result__) {
                              var tmp8786 = result__;
                              var result__ = tmp8786;
                              tmp8750.set(result__);
                              
                            });
                          }));
                          
                          var nodes8925 = $("<span>");
                          root10402.append(nodes8925);
                          subs__.addSub(masterItem.addEventListener('change', function() {
                            renderControl640();
                          }));
                          
                          function renderControl640() {
                            subs__.addSub((masterItem.get())(it, tmp8750, function(elements, callback) {
                              var root10403 = $("<span>");
                              var subs__ = new mobl.CompSubscription();
                              callback(root10403); return subs__;
                              return subs__;
                            }, function(node) {
                              var oldNodes = nodes8925;
                              nodes8925 = node.contents();
                              oldNodes.replaceWith(nodes8925);
                            }));
                          }
                          renderControl640();
                          callback(root10402); return subs__;
                          
                        });
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes8924;
                        nodes8924 = node.contents();
                        oldNodes.replaceWith(nodes8924);
                      }));
                      
                      
                    }
                  };
                  renderCond407();
                  subs__.addSub(tmp8752.addEventListener('change', function() {
                    renderCond407();
                  }));
                  
                  
                  var oldNodes = iternode251;
                  iternode251 = iternode251.contents();
                  oldNodes.replaceWith(iternode251);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list251.addEventListener('change', function() { listSubs__.unsubscribe(); renderList251(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList251(true); }));
            });
          };
          renderList251();
          
          callback(root10399); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes8921;
          nodes8921 = node.contents();
          oldNodes.replaceWith(nodes8921);
        }));
        node1638.append(node1639);
        
        var node1640 = $("<div>");
        node1640.attr('style', "float:left; width:53%; position:relative; margin-left: 1%;");
        
        var result__ = current.get() && ui.visible.get();
        var tmp8754 = mobl.ref(result__);
        subs__.addSub(current.addEventListener('change', function() {
          tmp8754.set(current.get() && ui.visible.get());
        }));
        subs__.addSub(ui.visible.addEventListener('change', function() {
          tmp8754.set(current.get() && ui.visible.get());
        }));
        
        
        var node1641 = $("<span>");
        node1640.append(node1641);
        var condSubs406 = new mobl.CompSubscription();
        subs__.addSub(condSubs406);
        var oldValue406;
        var renderCond406 = function() {
          var value986 = tmp8754.get();
          if(oldValue406 === value986) return;
          oldValue406 = value986;
          var subs__ = condSubs406;
          subs__.unsubscribe();
          node1641.empty();
          if(value986) {
            ui.indexOf(current.get(), items.get(), function(result__) {
              var tmp8781 = result__;
              var tmp8753 = mobl.ref(result__);
              subs__.addSub(current.addEventListener('change', function() {
                ui.indexOf(current.get(), items.get(), function(result__) {
                  var tmp8779 = result__;
                  var result__ = tmp8779;
                  tmp8753.set(result__);
                  
                });
              }));
              subs__.addSub(items.addEventListener('change', function() {
                ui.indexOf(current.get(), items.get(), function(result__) {
                  var tmp8780 = result__;
                  var result__ = tmp8780;
                  tmp8753.set(result__);
                  
                });
              }));
              
              var nodes8920 = $("<span>");
              node1641.append(nodes8920);
              subs__.addSub(detail.addEventListener('change', function() {
                renderControl638();
              }));
              
              function renderControl638() {
                subs__.addSub((detail.get())(current, tmp8753, function(elements, callback) {
                  var root10398 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root10398); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes8920;
                  nodes8920 = node.contents();
                  oldNodes.replaceWith(nodes8920);
                }));
              }
              renderControl638();
              
              
            });
          } else {
            
          }
        };
        renderCond406();
        subs__.addSub(tmp8754.addEventListener('change', function() {
          renderCond406();
        }));
        
        node1638.append(node1640);
        node1637.append(node1638);
        
        
        
        
        
        
      });
    } else {
      var nodes8926 = $("<span>");
      node1637.append(nodes8926);
      subs__.addSub((ui.group)(function(_, callback) {
        var root10404 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node1644 = mobl.loadingSpan();
        root10404.append(node1644);
        var list252;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList252 = function() {
          var subs__ = listSubs__;
          list252 = items.get();
          list252.list(function(results252) {
            node1644.empty();
            for(var i2193 = 0; i2193 < results252.length; i2193++) {
              (function() {
                var iternode252 = $("<span>");
                node1644.append(iternode252);
                var it;
                it = mobl.ref(mobl.ref(results252), i2193);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = mobl.alert("Render detailScreen()!");
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp8793 = result__;
                                 var result__ = mobl.alert("Calling renderMaths()!");
                                 mobl.sleep(100, function(result__) {
                                   var tmp8794 = result__;
                                   mathJAX.renderMaths(function(result__) {
                                     var tmp8795 = result__;
                                     var result__ = mobl.alert("Called renderMaths()!");
                                     if(callback && callback.apply) callback(); return;
                                   });
                                 });
                                 });
                               };
                var tmp8745 = mobl.ref(result__);
                
                var nodes8927 = $("<span>");
                iternode252.append(nodes8927);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp8745, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root10405 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  ui.indexOf(it.get(), items.get(), function(result__) {
                    var tmp8790 = result__;
                    var tmp8744 = mobl.ref(result__);
                    subs__.addSub(it.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp8788 = result__;
                        var result__ = tmp8788;
                        tmp8744.set(result__);
                        
                      });
                    }));
                    subs__.addSub(items.addEventListener('change', function() {
                      ui.indexOf(it.get(), items.get(), function(result__) {
                        var tmp8789 = result__;
                        var result__ = tmp8789;
                        tmp8744.set(result__);
                        
                      });
                    }));
                    
                    var nodes8928 = $("<span>");
                    root10405.append(nodes8928);
                    subs__.addSub(masterItem.addEventListener('change', function() {
                      renderControl641();
                    }));
                    
                    function renderControl641() {
                      subs__.addSub((masterItem.get())(it, tmp8744, function(elements, callback) {
                        var root10406 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        callback(root10406); return subs__;
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes8928;
                        nodes8928 = node.contents();
                        oldNodes.replaceWith(nodes8928);
                      }));
                    }
                    renderControl641();
                    mobl.sleep(100, function(result__) {
                      var tmp8791 = result__;
                      mathJAX.renderMaths(function(result__) {
                        var tmp8792 = result__;
                        callback(root10405); return subs__;
                      });
                    });
                    
                  });
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes8927;
                  nodes8927 = node.contents();
                  oldNodes.replaceWith(nodes8927);
                }));
                
                var oldNodes = iternode252;
                iternode252 = iternode252.contents();
                oldNodes.replaceWith(iternode252);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list252.addEventListener('change', function() { listSubs__.unsubscribe(); renderList252(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList252(true); }));
          });
        };
        renderList252();
        
        callback(root10404); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes8926;
        nodes8926 = node.contents();
        oldNodes.replaceWith(nodes8926);
      }));
      
      
    }
  };
  renderCond405();
  subs__.addSub(tmp8756.addEventListener('change', function() {
    renderCond405();
  }));
  
  callback(root10397); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root10407 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp8748 = mobl.ref(result__);
  
  var nodes8929 = $("<span>");
  root10407.append(nodes8929);
  subs__.addSub((ui.header)(tmp8748, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root10408 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp8747 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp8746 = mobl.ref(result__);
    
    var nodes8930 = $("<span>");
    root10408.append(nodes8930);
    subs__.addSub((ui.backButton)(tmp8746, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp8747, function(_, callback) {
      var root10409 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10409); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8930;
      nodes8930 = node.contents();
      oldNodes.replaceWith(nodes8930);
    }));
    callback(root10408); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8929;
    nodes8929 = node.contents();
    oldNodes.replaceWith(nodes8929);
  }));
  var nodes8931 = $("<span>");
  root10407.append(nodes8931);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl642();
  }));
  
  function renderControl642() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root10410 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10410); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8931;
      nodes8931 = node.contents();
      oldNodes.replaceWith(nodes8931);
    }));
  }
  renderControl642();
  callback(root10407); return subs__;
  
  
  return subs__;
};

ui.introduction = function(elements, callback) {
  var root10411 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes8932 = $("<span>");
  root10411.append(nodes8932);
  subs__.addSub((ui.header)(mobl.ref("Mathmo"), mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root10412 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var nodes8933 = $("<span>");
    root10412.append(nodes8933);
    subs__.addSub((ui.image)(mobl.ref("mathmoIcon.png"), mobl.ref(35), mobl.ref(35), mobl.ref(null), mobl.ref(ui.logoStyle), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root10413 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root10413); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes8933;
      nodes8933 = node.contents();
      oldNodes.replaceWith(nodes8933);
    }));
    callback(root10412); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes8932;
    nodes8932 = node.contents();
    oldNodes.replaceWith(nodes8932);
  }));
  
  var intro = mobl.ref("\n<div style=\"padding:20px\">\n<img src=\"icon.png\" style=\"width:30px;height:30px; float:left; padding:5px 5px 5px 0px\"/> Mathmo is designed to give you extra practice.\n<br />\n<br />\nOn the <b>My Qs</b> tab you'll find your current set of questions under a list of topics. \nThese stay with you till you clear them or delete them individually. They'll be the same questions even if you close Mathmo and return to it later.\nTap one of the question topics to see the question itself.\n<br /><br />\nWhen you have completed a question, touch <b>Check Answer</b> to check your work and\nreply to <b>Did you agree?</b>. You may need to do a little more work to see whether your answer really is the same or not.\nThe questions will change colour according to your answer. Red means 'I didn't agree'. Green means 'I agreed'. Black means 'Answer not checked'. \n<br /><br />\nOn the <b>Add</b> tab you can generate 5 more random core, further or stats questions, or generate them singly on selected topics.\n\n<h3>Updates</h3>\nMathmo is a web application, and should update itself when you reload the app after it has been updated on the server. \n<a href=\"http://nrich.maths.org/7088\" target=\"_blank\">Further info here</a>.\n\n<h3>Credits</h3>\n<p>\nSyllabus hugging ideas: Stephen Hewson\n</p>\n<p>\nQuestion and Answer generators:\n Tom White, Edward Cree\n</p>\n<p>\n<a href=\"http://github.com/gmp26/mathmo\">Mobile Implementation:</a> Mike Pearson with contributions from\n<a href=\"http://github.com/naush/mathmo\">Li Hsuan</a>.</p>\n\n<p>\nThe following have also been important in developing mathmo\n<ul>\n<li>\n<a href=\"http://www.mobl-lang.org\">Mobl-lang</a> by Zef Hemel, University of Delft.\n</li>\n<li>\nThe <a href=\"http://code.google.com/p/flot/\">flot plotting library</a>\n</li>\n\n</ul>\n<a href=\"http://www.mathjax.org/\">\n  <img title=\"Powered by MathJax\"\n       src=\"http://www.mathjax.org/badge.gif\"\n       border=\"0\" alt=\"Powered by MathJax\" />\n</a>\n\n<h3>License</h3>\n<a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\"><img alt=\"Creative Commons License\" style=\"border-width:0\" src=\"http://i.creativecommons.org/l/by-sa/3.0/88x31.png\" /></a><br /><span xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://purl.org/dc/dcmitype/InteractiveResource\" property=\"dct:title\" rel=\"dct:type\">Mathmo</span> by <a xmlns:cc=\"http://creativecommons.org/ns#\" href=\"http://nrich.maths.org\" property=\"cc:attributionName\" rel=\"cc:attributionURL\">NRICH Project, University of Cambridge</a> is licensed under a <a rel=\"license\" href=\"http://creativecommons.org/licenses/by-sa/3.0/\">Creative Commons Attribution-ShareAlike 3.0 Unported License</a>.<br />Based on a work at <a xmlns:dct=\"http://purl.org/dc/terms/\" href=\"http://github.com/gmp26/mathmo\" rel=\"dct:source\">github.com</a>.\n\n\n</div>\n");
  var nodes8934 = $("<span>");
  root10411.append(nodes8934);
  subs__.addSub((mobl.html)(intro, function(_, callback) {
    var root10414 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root10414); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes8934;
    nodes8934 = node.contents();
    oldNodes.replaceWith(nodes8934);
  }));
  callback(root10411); return subs__;
  
  
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
