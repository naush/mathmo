mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root765 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node241 = $("<span>");
  root765.append(node241);
  var condSubs59 = new mobl.CompSubscription();
  subs__.addSub(condSubs59);
  var oldValue59;
  var renderCond59 = function() {
    var value551 = value.get();
    if(oldValue59 === value551) return;
    oldValue59 = value551;
    var subs__ = condSubs59;
    subs__.unsubscribe();
    node241.empty();
    if(value551) {
      var nodes605 = $("<span>");
      node241.append(nodes605);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl94();
      }));
      
      function renderControl94() {
        subs__.addSub((elements)(function(elements, callback) {
          var root766 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root766); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes605;
          nodes605 = node.contents();
          oldNodes.replaceWith(nodes605);
        }));
      }
      renderControl94();
      
      
    } else {
      var nodes606 = $("<span>");
      node241.append(nodes606);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root767 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes607 = $("<span>");
        root767.append(nodes607);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root768 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root768); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes607;
          nodes607 = node.contents();
          oldNodes.replaceWith(nodes607);
        }));
        var nodes608 = $("<span>");
        root767.append(nodes608);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,R0lGODlhIAAgAOf2AAAAAAEBAQICAgMDAwQEBAUFBQYGBgcHBwgICAkJCQoKCgsLCwwMDA0NDQ4ODg8PDxAQEBERERISEhMTExQUFBUVFRYWFhcXFxgYGBkZGRoaGhsbGxwcHB0dHR4eHh8fHyAgICEhISIiIiMjIyQkJCUlJSYmJicnJygoKCkpKSoqKisrKywsLC0tLS4uLi8vLzAwMDExMTIyMjMzMzQ0NDU1NTY2Njc3Nzg4ODk5OTo6Ojs7Ozw8PD09PT4+Pj8/P0BAQEFBQUJCQkNDQ0REREVFRUZGRkdHR0hISElJSUpKSktLS0xMTE1NTU5OTk9PT1BQUFFRUVJSUlNTU1RUVFVVVVZWVldXV1hYWFlZWVpaWltbW1xcXF1dXV5eXl9fX2BgYGFhYWJiYmNjY2RkZGVlZWZmZmdnZ2hoaGlpaWpqamtra2xsbG1tbW5ubm9vb3BwcHFxcXJycnNzc3R0dHV1dXZ2dnd3d3h4eHl5eXp6ent7e3x8fH19fX5+fn9/f4CAgIGBgYKCgoODg4SEhIWFhYaGhoeHh4iIiImJiYqKiouLi4yMjI2NjY6Ojo+Pj5CQkJGRkZKSkpOTk5SUlJWVlZaWlpeXl5iYmJmZmZqampubm5ycnJ2dnZ6enp+fn6CgoKGhoaKioqOjo6SkpKWlpaampqenp6ioqKmpqaqqqqurq6ysrK2tra6urq+vr7CwsLGxsbKysrOzs7S0tLW1tba2tre3t7i4uLm5ubq6uru7u7y8vL29vb6+vr+/v8DAwMHBwcLCwsPDw8TExMXFxcbGxsfHx8jIyMnJycrKysvLy8zMzM3Nzc7Ozs/Pz9DQ0NHR0dLS0tPT09TU1NXV1dbW1tfX19jY2NnZ2dra2tvb29zc3N3d3d7e3t/f3+Dg4OHh4eLi4uPj4+Tk5OXl5ebm5ufn5+jo6Onp6erq6uvr6+zs7O3t7e7u7u/v7/Dw8PHx8fLy8vPz8/T09PX19f///////////////////////////////////////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBQD/ACwAAAAAIAAgAAAI/gABCBxIsKDBgwgTKlzIsKHDhxAjSiSoYc+bCBMFbqCSY4DAApTgyQOUcUGkZcXAeHxQLB49SgI+xnSYAdYxZsjCDHgQLN48NAEEaFAh4oDDA3+EIXO2rAiAN96owQBQ4YVVCg87XBKWLNofAAROlAgAwIPVFxAgmrAkzJgWgxZcvADhESKGKk2MFhTgIAKBhwweNCjAMICBvwoPHMkDCNCYBwoLhFhxIm3CFYEIGUKkiIfCC2dLzDyI4k6e03hqKLQQerTBAkHCgOFCREHkDydGQFYoYAGDBK4RBiX78ACFBsQJBoAAIThDAyVguMBaEIPcEIgbBjBrtQOAAAoSTAgEcXZ3QwEnrLqQAMD6CgdUz1J3yOFFCwwBBqR/ESJoBhUk6OXQABAwQBYBKVhFAnEF1JURAB9YhcGDByHgwQUOUqjhhhx26KGGAQEAIfkEBQUA/wAsBQADABQAGAAACMwA/wkcSDDABg8BCCpc+I+KMmhKGEpcAAsdu1MFJGZwUmOgg14WgS1gqIDQLltZBoJsB0wBwwugbPXSpeXfAlro3LXKONCAQANzYt361QvIPzXZvHlROGGghkSxcgm7IzBGjQESBYpAFMsWlawMLTQx4hOsQAUNFhAwOzBAjTJs2lRhwPYfhDBs3MCRI6NuAilfAn9RUReACCFIisxAUBgAAQQGEtZVaKDp5IEkXjQGAIDDZYIlPg+84EL0PwEOTC/0ILDCZwMZKAhYGBAAIfkEBQUA/wAsBQADABIAFgAACMsA/wkcSBBDnDMQCCokGOBPt295FkpsEKubOFsKFlowAkOAwAi4uo3zxUBhgjupTEXx6GCWyFwCCTgQSOERqVWqpghQsKobuVP/GADSIrCAmU6lWrXa8e8MtWtb/r3pVGPghTyeTsFq8+9ADh3/Aqj5odADHk+lmiwMIXECEbISCRJQkCBAXIIAMBSxYgVIxrv/BuyQQsVKFhOAA9MgwpjIh8T/IKx40SJEAcj/BBQggLlz3Mue/2UIHWBE6H8UWEAGwJq1gr8ERRAMCAAh+QQFBQD/ACwFAAMAFAAWAAAIzgD/CRxI8IKaMA8IKlz47w60aXMYSmRgCpq1VhL/GUhBYiAEVtCu1VrAcEAVSJKSCGyAKiSsBAI3OBho4M2jS5iWCPwEDdsngYSswfogMMAURJA0bbLxLwwyZlf+tXFHLx2QgRTOIJLUSYxGGzcEbqL3jY4EghnMIIpEZOEcaGUYQtBxo8BCBCIUCjBwICPDBC14/IDR169AACBs4NDRI4Phwx1gSIYx4bFABCBUpPBAwHJRz6BDh8bAsLBCAKgBeGCowjCEFSxE/zuAwHJAACH5BAUFAP8ALAYAAwATABgAAAjSAP8JHDiwwhcpDggqXNgGWDE2CyP+W5AJGDJRCRQC2KiAwUYADjwFQ6Zq4UYOZuT4EMhAU7BkpgZqmPBvoxA8gQYF+ZdAUrBllggs+OOsVomNM+DkIYToxb8suX5J+ZemHLt3ZwQ2oBJnDyIrAmXMEGiJHbx3UwZSmNJ1x8I36uKRgkCwwQsXBBYqQHLFgsAABAh8HEwYgMACHlKo+JBXIkEKLyK/iOD4seQXEioPLPBBYIcBmkOLHk1a4oXSnlH/Y4BihWYRCgsY0BxAdejTEQMCACH5BAUFAP8ALAYAAwAVABYAAAjMAP8JHDhwgpUlCwgqXChwzCtaWhhK/KdA0atblhAwBMARQICBDRy9wtVJgUAFLTgQJDBjyYuPCxa9yqVJYwZI1X7JGOihC5o2NwIgGPRqFyOBj76NMxdnYAcrYNjIQfEPSipYTP6d2bb0HJSBCX5cEQMnyb8CLl4IOABKnLl0nyAQfNDjypgYC+eUSwcKw8IEI0YMWAjhypcKAzlO/PvAwD8BGFCg6LD4nwEbNlA4kFtZ4oPOEgWoBD1QRAPSqFOrXs1wA2uKJ14TSB0QACH5BAUFAP8ALAYAAwAWABYAAAjdAP8JHDiwAAsWAggqBMCwYcMlljYVUUiRYoI8m0oFKlDxn0OHC/pwMvUogcAERqI8ENjwwgsOJ/NwOsXowL8LiJxZo0NwgQ8nVFj8OzCHE6o/Ag1Ju7bNFIKBDXIUiaIFxD8jlj5NDOOMabczBAmY2HHEig6BKVb8M2DJ2rZvmFYSTIBiRxITFNlo+5bpQkUDFzIkVPhgyhYKHRMTVPDB778AihV6SMXtGJJ/DFxEHuiGnDZqmxIs0Lz534klQnioeJwhRYrSAxd4BECAAOzbuHPr3r1ZhWPdBRjCDggAIfkEBQUA/wAsBgADABYAFQAACNQAAQgcSFDBAYIIAfxbyJDhCDZoRDScSHEhAS6GIHFJOLDivwNnDEXSc2AhgiBLHEw0YCGCSTOGJAVC8K+CH2DI2jQcQGJGjg//DIQxRIlOAQV8iCVz1qmkyRYwbPzA8C+Hn0U2/mn5hcwZtDANBYh4EUOHin8COoRYuKirNEgqJ5ogq4FimWbTIlXwWEFCAIoOnliZ4LFwwwQeLDBUbJhhh1HVghn5l6BFY4Z13sGDx2tB5csL6dAbfUsBaIYcENGapeP0xAM0XcueTbu27X8hDDAMCAAh+QQFBQD/ACwGAAMAFgAVAAAIywABCBxIsKBBAP8SKlS4AEcOBgsjSkwo4IebPEUmakxoQIobPWgMKORRpEHEAQ0WCDwwxQ2fNwf+TZgDCxeZhQE8uGBRAeETN37IEEgQZ1YuX5EWFlDx4kWLB/9aoLnj4l8UV7h8CdMisekLDv8CYABb4M8tX8MMmZzogoLELr2IHXI7kQJUiQ2SQJGwsa/CDhUSAgjsN+EGTsx6MfmHgEXhhHDMnTtXS0Hjx//gsNtsK6EFFI83eDImawlmpXdPq17NurXrfx8KKAwIACH5BAUFAP8ALAYABAAXABMAAAjSAP8JHDhQAIYMAQgq/AegoUOHJaJoUbGwokICO6iEiTJA4IEWPhgsDKAggcACPKiM2WLgXwQznExtGegQw78VAgngoFJmygAEZD6dakWoZUETCkNAAYMUySZTrWJNodnww0IJFwIQiFOq1aw9Ii3+k7BwCitafMiKtchgiJIIa+P+Q8CBRAWjcgeGmBQsGa9HEg7gzNtnGzdu3bQZMTBY7h1xkMVxOwKAwom8HDD98uVLDgKBHfP+c0A6tOgdUhyIXijk0SYKqxXGEPMi9sIKBAMCACH5BAUFAP8ALAYABAAYABUAAAjRAAEIHEhQAQKCCAf+W8iQoYUZPDA0nEix4YATOIzsELDQQIkQHCsmMLBwQAocSIwQ+OcAC6JENipaaKGiJEYlQAQYqKJIUqYwBCsutGDjiId/PQxFyuQpidCGAhlEWBgGUiZQbhY8fZoEUyg4U7cKVcBjyAOxaP9pEBECQtqJJRzR4tXL04u3CwPwaebsGTRokgoQQPHWj7XDhyWtnPD2Q6RatWg5IoyXYYPLBSoniBKl8kQx7tqV8szwhq5675yQXnhkWD0zqxcaKdQhdkmKAQEAIfkEBQUA/wAsBgAEABgAFQAACNgA/wkcSLAAAYIIEyZ8kOIEA4UQCQoo8QJGiQACBSQwAKCjR48FCJ6o2ELAvwVBylB5mDBCCoQvYrD4V8DInD2CXiQMMCIhixcU/sl4o2cQIRMRBWoQqGABgAFQ8gxS5CVkUggJewhiJMZB0ogJaOho8LXsAQwfPjwYOKGsQBGCSrFyJWnFPwIo3P6b4+sXMGDBDh3U+88OMmTHDiMSiNVtB0SrVKUqhJQwQgaD9SJw4oSsZYEB8pwr96nt5wGk4rU7t+SzQDfw4rkT4/rkIGudagsksOFAwoAAIfkEBQUA/wAsBwAEABYAFQAACMIA/wkcODBAAIIIExJkICLEAYUQBQYI8eLFBgAYAQTIiDFixRICDaz4geIgQQcJK44IQIBGFjFhIiAEMRDlPxYsIPwjUSXMGjUTEHYYmEEgAgX/AuwAs2bOEwIRFcZQU2cKg6gKD6RgsQBrVAMVOGxo8E+n138e6lDa1InQibMC0bBq5eoVrD1w/7G5xZdvn7wb/Hjq1GnPiLz/CDBYjFiJEsQD63TTdkkC5E/oyHFDAnkNusxeIP/78wwVSNEaEiAMCAAh+QQFBQD/ACwIAAQAFgAXAAAIzQD/CRw4EIDBgwgPEhy4IMSHhRAj/gNRMGFCiQsHYCgB4SJGgQJC8DiSQwBBAB4+XtBhBMqSAws5SDRYoggULTkCLDxQAiOIJ1yEKPgYccCHEQmIfiwgAQMGBEoJajATCFEiNyKiCuSCKdMmTpzcDNAaplQpUmbhjI2KYc6jR47ePNQqcMGCoVohXJnigO5AOtWeObKgNUKAA6i6YZvGiEHUR0z+ufHWLRu0IVERrSrw7xG4yl2iltn8T8KhZ7ZWRKVSZmCBEhi0ZsCLMSAAIfkEBQUA/wAsCQAEABUAFwAACNgAAQgcSLCgwX8IEx7woKFAwocQIX5AmCGiRQIWEQp4QAHjwwYnUmT818EFjA8BRkas8AJGDRcCHmpQ6cGlDxEFDai0UAMIDIcqIQqokEFn0IwEHkxoYPToPwtV2Mh5s6WC039OBA0qZOiQEgBOqUAaO7YJ2KMVzPzx4yfMhKv/BiSYO8ApBStMGsBF+AZZsEEUggqYUeLfgn/QlBET5EClCGXXlPxLMw3aMmJeVLpIJs/UPwWHqEFjZunAyBrU5CWsEGmaMzSas8FjkxACkyV6R0KYoyb3yIAAIfkEBQUA/wAsCQAFABQAFgAACMsA/wkcaADDBQIDEypcyHDhgIYDGzQQkHCBCRQQ/7lwcQGARwAcMv57QXJEgIEZRJJ8UUGkQpIgHrocCCECwpkKByx4kMDjTAdArGyxIoOiwI9IP/JIs6aNmzMRZv7IQzXPmwkzIVxxA8eMjJM4ESw44DOjBCdFGOAUeAYXrDsSMiKwQeKfgk7BdNGy06BhgD3mnh35J6ZYsF20rDSEoAxeuk//EvwxFoyXIgMML0iDp46UwAmIiv0C03DAJsdoBj44YkRtQw90zogMCAAh+QQFBQD/ACwIAAUAFQAWAAAIswD/CRz4rwDBgwgPekjIsKHAAAoUAJg40eHADf9YRLAoUMWDgx8oAmB44ADHkyhTohSAQIEBlQha9BCyw8LIkyqeRJlCZcgAlDLACAVzhECJkw2QZMHSBAMAASsPGPh5MoKRHgpU/utiipMaCBxpiPiXABIsVKHSLHB4p1uxIf+20IKVKlQTh8TOfbsksE4tWKr4NLTA7Bw4TgIl9Jnl6opDS+e8jRnoAAeQtQ07vBHDwGFAACH5BAUFAP8ALAkABQAUABgAAAjRAP8JHCiwwgCCCP8BWMiQQ8KHEBEmMBAxYgsVDipGdKixY0cXHhNmDJkwgAEDAkgaCLGChQgEITnQqHEDxwcAHkcU2VmEBM6OCWwQGSIjAcl/BQqk7OiABw2jD2XoYMhwSqRDW0YKpCBwTiOBOmAMQCCI06RFWxQgvAKtyz851IYh+SdFFKdKjYIQdNFJD4IHvLZJSyQAgZpRnCydOSgQQYaDH55xm/bvwD8IcUBtagJRQzJu1DhZ/sdARg61Dx/Y4latz1Eqw2jhOBqAwwWNAQEAIfkEBQUA/wAsCQAFABMAGAAACMwA/wkc+O8CBYIIExK8oLChwgMOHbJAoSDivxQJNVgsYLGjx48fCQQAKTDFBwIeM7xY+QJCShgwXzzwaIBEixUfBnwMMGDAyIEjECRM8EIFRIIl1jxDk9BIHjhKFgy0cEecPEn/DtxoIeCAHEN96CwR+k/LuXnptPxjc6yWkH9IHBnyY8eGQBzIqtn550CWs2F+snZxdOgPEwAACnIQiMGXs2KQDPD9osiPDIUXejkzNklyVhUjBCikgMvZMUUoOw44tPkKSA1jrkhtGBAAIfkEBQUA/wAsCQAFABMAGAAACMMA/wkc+K/CBIIIEypcyHCgAQINFa4wgSCiQgsWE0LIyLGjRwAAPP7TIECkCwcZLbxY6aJBxgIfTpioEKCjAAEg/4UgU0ThARIfChD0sGueOTIJc4SxgqOiQDXy3qlrJHBGin8EtLwhs8UGxH+K3q0DZ+VfGVyldvzzceeNGS4cBNoI1kyOQFO/ZMkJYOBJWzMhBlrQINBCrF+0BAlUoAQNEgUXD9cyNHBAgwEgQxKUsOqXLT8DOPb5VetJRwxcoEBeGBAAIfkEBQUA/wAsCQAHABMAFgAACLcA/wkcSPAfAAAFBhRcWFCDChIHGEqcSLGixYsYM2q8EEDjPxYRNa4IibGEBAAeB4IQM4TkwAEYKCgc2KHWum5gFqoosoNEgYFz1JkDZ+ifARck/gUYUiXJjxEd/x0yF65alH9dTk2i8S/GlypLfCgQSCPXMDYHGGRq9YnMvwJAvFQhkmBghQwCKYxqFWrOTwQugoA4iJIgBVGtRtkpQFgA4cIDI3RqRQoORgFzEh/JaGEKkroSAwIAIfkEBQUA/wAsBwAHABUAFgAACMwA/wkcSLDgPwEGEyYUYUChw4EQHj58ILGixYsYMxYYWAEAxgsDVRhg0UOIE5AWRdoYdStRA4sjBjaosNFigIIfzERRYFDAhAkJR7gKZ02MQQ4wXoQoiGEUOG3T/vwrgOJDgAAwcsR4sQGA139ivmmrlswKgCmU/rD4R4KIVhQDBv7ZZs1ZnX8LFGVSVOXfgBdDcpRAKFAGrF9sXkqYpImRGAL/DIQIsaAghQ6Q/0mIpMlRGQJeQ4dO+KCRpkdgMv4Lc7qHaghFdiBwGBAAIfkEBQUA/wAsBgAOABYADwAACLwA/1lYkeKfwYMIE/6bIFCVLUqAVCic+A8FAQzO6NGLx4WiwhMD/lHx1WwSBI8JHyCkgLLlvw5gmrhUGKIUtWRbFGJ48WKihU3TmhWrY1CEhn8ARPB8kQFhADnSmhnT9eRfkj9pRvy7sLSEgIMKUDU79kuMAQV5CMkh8k9ABxcvOACY+2+AnmPB4ij4BwEQoTpPQgp4MIFASiNEGBh84IfQnSghZxpMYIcQHiUBJB9EEkiOCc0HDZj4kJliQAAh+QQFBQD/ACwGAAcAFgAWAAAIzAD/CRxIsOA/AgYHkkg4EAMKhhAjSpxIsaLFgRUsDLj4L0AVZtEyYagYQeCyeCivVDwx4AIyduzUaalYQsC/KLeKOeIokMEEngQ5aEGSwGAACBBsGvywyViuKQldMKwQiVgvWmoOYvj5LwRENcN62UJ15F+PM1E0/LMwUEQAgpx63XKVpQACM2uyyADwj8O/FhUICohzC5aZohHesNmyQ6kDBm8JOgDiY4FAB2vYdOmhtOIBLmy+wABAurTp06U/TBFSkiFq0wUEvC4dEAAh+QQFBQD/ACwGAA0AFgAQAAAIsAD//aNQQaDBgwgRSjG2rNKFhBBPQPhXgRi6dOmoQIRYQoCFX+LEgbuysWQTV7wOPSjJUgLLl/8yTAmCACbCDo5qoVrCkgDCCYVosQrl5d8ACQwAADhoAWEYWaxGVfLxL0aTGysPdlC6NIEjVqQ0Ofl3IEqUHiAMtmAx8aAZUpuw1HSQJQoQEwEELlDAdem/BjlqGBCoYIoUIXhtGgywQ8oQDYoPMlDhYUDJvpgzaw4IACH5BAUFAP8ALAUACQAWABMAAAjDAP8J/FekxsCDCBMK3CPJoMKHA0PkgjQDokUQYjRYRGhgwoV/BzYivPBIGLJilyyIFOjACzdu3bx9C7NSoBZrOK1V61JzBIZFuHLJIkRhpYgF/wpYwDCBQE2FF5boCPn0n4ZAoigFqRoBTyhMjKD8E8AgAUQAaK98wuQIEI1/I2iscIBQ40AEfzBBKjSEQIEdNmCECCCQBQqkB7VAMrQkJIIegUsIDHCgQMIFMlpYToojsIiqAkPQaAEB9NgHDNCqXh0QACH5BAUFAP8ALAQABwAYABUAAAjaAP8JHNigwMCDCBMOxIHrjMKHCRvRc4YEosV/f+LR+8Th4kMQu+J9m+Hx4YczTAyWHCjBAoWVCHdgutVrF6QLKxv8U/Dp2TNo0aS5WTkiQIJLyJImDbNSRIB/NS6tYlVKD86SCgYqqGAhAkyIFITMMPB14IU4jfzYKPvvQZpFguoE+Rcgq0AQLBUyUSToDhoV/zC4GFhhYIaEBMoIytPGxoABKF68MLziRIKBADID8FGHTQ+DBVRIJvEvM9mHBDxwGCBwwAnJHzTLnk07s4UVKBhArD3bgMqHAQEAIfkEBQUA/wAsBAAHABUAFQAACLYA/wkc+MBCgIEIEya08c8ZmwEDFEoUiIgdPHRIJk7Uk65dPEAaJX6glY7clJASPYxJgnJggQgVJBhoOfBGo1WxXh2yQDPBpF/AggkjZoYmgkW3buFKqoXmvxiJNnGq9KaC038JJlB4cFVhBBwqCnSdAMbOGRVXE1yhk2YLjJAREMKQk8aLkw0hLwDYC+BFGjBUVgj4d4ImAyJMUhBoyXcvgQMHBZoQqKHrPwgmSiSw/G/AYIUBAQAh+QQFBQD/ACwEAAcAFwAVAAAIswD/CRwoocLAgwgTDsx1LI3ChwcFiTsHzghEiHS8jUPH5+LDDqu8bYPi8aMXiyUPQpgQISVCGYE6jRLFR4LLBQgKuXIFK5YsKi5FHOhTqmjRKC4FrtCjSBEhMTaT/kMAIYKDAVITOmgRQkDWfxCadGGyIeuAIVueAAFx8UHCC1WeDKER9SGFhBSYFMHBIcBDFSQOJBQQYsUFrA8LIP4HoLHjAI4FjPh6kMEIDwYo/wvg92FAACH5BAUFAP8ALAQABQAVABcAAAjRAP8JHEjw34YpFAQUXJihQwCBAR7dirGwIJBdxMgM+PcgWS0ZFQcGMGRNWzUz/yAgWxWSoJxo1rhdQ/JPDqeWAzeQinbNm6F/BDrgHJhiVLRpYIYu3MBlygGlQB1EeFAAqsAWdBpJkhQnAtQDdjRt4uTp0xKoBtpAWrv2iNUSau7ciUMFgtV/Bxw8WKDwLsEFHyo8vKsgh5AZFO4KaPGDBgyhVhfkcOzCb4EVMFxgwPmhAIDPnxlkoPCQQIqKD0GrBh0ghF+CCDxALri6tm3QAQEAIfkEAQUA/wAsBAAFABUAFgAACMYA/wkcSPCfhjVZGBQsaIFKjgEDF8V7N2fhwAOBlhUDM3BYPHqKLAqUgOpYs2Rh/j0IFm9eGZH/BOQRhuzZsiL/3nh7BgPmvw6XhCWL9kfgCQ4BfP4zYUmYMS1KF2Ko0iTqQAYPHFgdWOHLHkCAxjywGiAKoUKHECkKQtZJnrdveWylwCRMGC5EGmyNuYBBgr0LD1DQC9hACRguAAfwAOPFC8ADTjiOCoGggBAvWkQlUNAABYVRAYgeTRrAB4EYAAvkcAFiwYAAOw=="), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root769 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root769); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes608;
          nodes608 = node.contents();
          oldNodes.replaceWith(nodes608);
        }));
        callback(root767); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes606;
        nodes606 = node.contents();
        oldNodes.replaceWith(nodes606);
      }));
      
      
    }
  };
  renderCond59();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond59();
  }));
  
  callback(root765); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
  var root770 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node242 = $("<div>");
  
  var ref236 = mobl.ref(ui.headerStyle);
  if(ref236.get() !== null) {
    node242.attr('class', ref236.get());
    subs__.addSub(ref236.addEventListener('change', function(_, ref, val) {
      node242.attr('class', val);
    }));
    
  }
  subs__.addSub(ref236.rebind());
  
  var val118 = onclick.get();
  if(val118 !== null) {
    subs__.addSub(mobl.domBind(node242, 'tap', val118));
  }
  
  var ref237 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref237.get() !== null) {
    node242.attr('style', ref237.get());
    subs__.addSub(ref237.addEventListener('change', function(_, ref, val) {
      node242.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node242.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref237.rebind());
  
  
  var node245 = $("<div>");
  
  var ref235 = mobl.ref(ui.headerContainerStyle);
  if(ref235.get() !== null) {
    node245.attr('class', ref235.get());
    subs__.addSub(ref235.addEventListener('change', function(_, ref, val) {
      node245.attr('class', val);
    }));
    
  }
  subs__.addSub(ref235.rebind());
  
  
  var node246 = $("<div>");
  
  var ref233 = text;
  node246.text(""+ref233.get());
  var ignore46 = false;
  subs__.addSub(ref233.addEventListener('change', function(_, ref, val) {
    if(ignore46) return;
    node246.text(""+val);
  }));
  subs__.addSub(ref233.rebind());
  
  
  var ref234 = mobl.ref(ui.headerTextStyle);
  if(ref234.get() !== null) {
    node246.attr('class', ref234.get());
    subs__.addSub(ref234.addEventListener('change', function(_, ref, val) {
      node246.attr('class', val);
    }));
    
  }
  subs__.addSub(ref234.rebind());
  
  node245.append(node246);
  node242.append(node245);
  var nodes609 = $("<span>");
  node242.append(nodes609);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl95();
  }));
  
  function renderControl95() {
    subs__.addSub((elements)(function(elements, callback) {
      var root771 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root771); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes609;
      nodes609 = node.contents();
      oldNodes.replaceWith(nodes609);
    }));
  }
  renderControl95();
  root770.append(node242);
  
  var node243 = $("<span>");
  root770.append(node243);
  var condSubs60 = new mobl.CompSubscription();
  subs__.addSub(condSubs60);
  var oldValue60;
  var renderCond60 = function() {
    var value552 = fixedPosition.get();
    if(oldValue60 === value552) return;
    oldValue60 = value552;
    var subs__ = condSubs60;
    subs__.unsubscribe();
    node243.empty();
    if(value552) {
      
      var node244 = $("<div>");
      node244.attr('id', "hello");
      node244.attr('style', "height: 2.9em;");
      
      node243.append(node244);
      
      
    } else {
      
    }
  };
  renderCond60();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond60();
  }));
  
  callback(root770); return subs__;
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root772 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref238 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref238.get() !== null) {
    sp.attr('class', ref238.get());
    subs__.addSub(ref238.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref238.rebind());
  
  var val119 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val119 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val119));
  }
  
  var val120 = function(event, callback) {
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
  if(val120 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val120));
  }
  
  var val121 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after36(result__) {
                    var tmp626 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after36);if(result__ !== undefined) after36(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val121 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val121));
  }
  
  var val122 = function(event, callback) {
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
  if(val122 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val122));
  }
  
  var ref239 = text;
  sp.text(""+ref239.get());
  var ignore47 = false;
  subs__.addSub(ref239.addEventListener('change', function(_, ref, val) {
    if(ignore47) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref239.rebind());
  
  
  root772.append(sp);
  callback(root772); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root773 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes610 = $("<span>");
  root773.append(nodes610);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root774 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root774); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes610;
    nodes610 = node.contents();
    oldNodes.replaceWith(nodes610);
  }));
  callback(root773); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root775 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes611 = $("<span>");
  root775.append(nodes611);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root776 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root776); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes611;
    nodes611 = node.contents();
    oldNodes.replaceWith(nodes611);
  }));
  callback(root775); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root777 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node247 = $("<ul>");
  
  var ref240 = mobl.ref(ui.groupStyle);
  if(ref240.get() !== null) {
    node247.attr('class', ref240.get());
    subs__.addSub(ref240.addEventListener('change', function(_, ref, val) {
      node247.attr('class', val);
    }));
    
  }
  subs__.addSub(ref240.rebind());
  
  var nodes612 = $("<span>");
  node247.append(nodes612);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl96();
  }));
  
  function renderControl96() {
    subs__.addSub((elements)(function(elements, callback) {
      var root778 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root778); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes612;
      nodes612 = node.contents();
      oldNodes.replaceWith(nodes612);
    }));
  }
  renderControl96();
  root777.append(node247);
  callback(root777); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root779 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node248 = $("<img>");
  
  var ref241 = url;
  if(ref241.get() !== null) {
    node248.attr('src', ref241.get());
    subs__.addSub(ref241.addEventListener('change', function(_, ref, val) {
      node248.attr('src', val);
    }));
    
  }
  subs__.addSub(ref241.rebind());
  
  var ref242 = width;
  if(ref242.get() !== null) {
    node248.attr('width', ref242.get());
    subs__.addSub(ref242.addEventListener('change', function(_, ref, val) {
      node248.attr('width', val);
    }));
    
  }
  subs__.addSub(ref242.rebind());
  
  var ref243 = height;
  if(ref243.get() !== null) {
    node248.attr('height', ref243.get());
    subs__.addSub(ref243.addEventListener('change', function(_, ref, val) {
      node248.attr('height', val);
    }));
    
  }
  subs__.addSub(ref243.rebind());
  
  var ref244 = style;
  if(ref244.get() !== null) {
    node248.attr('class', ref244.get());
    subs__.addSub(ref244.addEventListener('change', function(_, ref, val) {
      node248.attr('class', val);
    }));
    
  }
  subs__.addSub(ref244.rebind());
  
  var val123 = onclick.get();
  if(val123 !== null) {
    subs__.addSub(mobl.domBind(node248, 'tap', val123));
  }
  
  var ref245 = valign;
  if(ref245.get() !== null) {
    node248.attr('valign', ref245.get());
    subs__.addSub(ref245.addEventListener('change', function(_, ref, val) {
      node248.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref245.rebind());
  
  var ref246 = align;
  if(ref246.get() !== null) {
    node248.attr('align', ref246.get());
    subs__.addSub(ref246.addEventListener('change', function(_, ref, val) {
      node248.attr('align', val);
    }));
    
  }
  subs__.addSub(ref246.rebind());
  
  root779.append(node248);
  callback(root779); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root780 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref247 = mobl.ref(ui.itemStyle);
  if(ref247.get() !== null) {
    el.attr('class', ref247.get());
    subs__.addSub(ref247.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref247.rebind());
  
  var ref248 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref248.get() !== null) {
    el.attr('class', ref248.get());
    subs__.addSub(ref248.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref248.rebind());
  
  var val124 = onswipe.get();
  if(val124 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val124));
  }
  
  var val125 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp627 = result__;
                                           function after37(result__) {
                                             var tmp628 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after37);if(result__ !== undefined) after37(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp629 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val125 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val125));
  }
  
  var nodes613 = $("<span>");
  el.append(nodes613);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl97();
  }));
  
  function renderControl97() {
    subs__.addSub((elements)(function(elements, callback) {
      var root781 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root781); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes613;
      nodes613 = node.contents();
      oldNodes.replaceWith(nodes613);
    }));
  }
  renderControl97();
  root780.append(el);
  callback(root780); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root782 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node249 = $("<input>");
  node249.attr('type', "checkbox");
  
  var ref250 = b;
  node249.attr('checked', !!ref250.get());
  subs__.addSub(ref250.addEventListener('change', function(_, ref, val) {
    if(ref === ref250) node249.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node249, 'change', function() {
    b.set(!!node249.attr('checked'));
  }));
  
  var val127 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val127 !== null) {
    subs__.addSub(mobl.domBind(node249, 'tap', val127));
  }
  
  var val128 = onchange.get();
  if(val128 !== null) {
    subs__.addSub(mobl.domBind(node249, 'change', val128));
  }
  
  root782.append(node249);
  
  root782.append(" ");
  
  var node250 = $("<span>");
  
  var ref249 = label;
  node250.text(""+ref249.get());
  var ignore48 = false;
  subs__.addSub(ref249.addEventListener('change', function(_, ref, val) {
    if(ignore48) return;
    node250.text(""+val);
  }));
  subs__.addSub(ref249.rebind());
  
  
  var val126 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after38(result__) {
                    var tmp630 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after38);if(result__ !== undefined) after38(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val126 !== null) {
    subs__.addSub(mobl.domBind(node250, 'tap', val126));
  }
  
  root782.append(node250);
  callback(root782); return subs__;
  
  
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
  var root783 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node251 = $("<span>");
  root783.append(node251);
  var condSubs61 = new mobl.CompSubscription();
  subs__.addSub(condSubs61);
  var oldValue61;
  var renderCond61 = function() {
    var value553 = label.get();
    if(oldValue61 === value553) return;
    oldValue61 = value553;
    var subs__ = condSubs61;
    subs__.unsubscribe();
    node251.empty();
    if(value553) {
      var nodes614 = $("<span>");
      node251.append(nodes614);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root784 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root784); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes614;
        nodes614 = node.contents();
        oldNodes.replaceWith(nodes614);
      }));
      
      
    } else {
      
    }
  };
  renderCond61();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond61();
  }));
  
  
  var node252 = $("<span>");
  root783.append(node252);
  var condSubs62 = new mobl.CompSubscription();
  subs__.addSub(condSubs62);
  var oldValue62;
  var renderCond62 = function() {
    var value554 = validator.get();
    if(oldValue62 === value554) return;
    oldValue62 = value554;
    var subs__ = condSubs62;
    subs__.unsubscribe();
    node252.empty();
    if(value554) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after42(result__) {
        var tmp631 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp632 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node253 = $("<input>");
        
        var ref251 = inputType;
        if(ref251.get() !== null) {
          node253.attr('type', ref251.get());
          subs__.addSub(ref251.addEventListener('change', function(_, ref, val) {
            node253.attr('type', val);
          }));
          
        }
        subs__.addSub(ref251.rebind());
        
        var ref252 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref252.get() !== null) {
          node253.attr('class', ref252.get());
          subs__.addSub(ref252.addEventListener('change', function(_, ref, val) {
            node253.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node253.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node253.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node253.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref252.rebind());
        
        var ref253 = placeholder;
        if(ref253.get() !== null) {
          node253.attr('placeholder', ref253.get());
          subs__.addSub(ref253.addEventListener('change', function(_, ref, val) {
            node253.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref253.rebind());
        
        var ref254 = temp;
        node253.val(""+ref254.get());
        var ignore49 = false;
        subs__.addSub(ref254.addEventListener('change', function(_, ref, val) {
          if(ignore49) return;
          node253.val(""+val);
        }));
        subs__.addSub(ref254.rebind());
        
        subs__.addSub(mobl.domBind(node253, 'keyup change', function() {
          ignore49 = true;
          temp.set(mobl.stringTomobl__String(node253.val()));
          ignore49 = false;
        }));
        
        
        var val129 = onchange.get();
        if(val129 !== null) {
          subs__.addSub(mobl.domBind(node253, 'change', val129));
        }
        
        var val130 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after39(result__) {
                          var tmp633 = result__;
                          function after40(result__) {
                            var tmp634 = result__;
                            var result__ = tmp634;
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
                          var result__ = validator.get()(temp.get(), after40);if(result__ !== undefined) after40(result__);
                        }
                        var result__ = onkeyup.get()(event, after39);if(result__ !== undefined) after39(result__);
                      } else {
                        {
                          function after41(result__) {
                            var tmp634 = result__;
                            var result__ = tmp634;
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
                          var result__ = validator.get()(temp.get(), after41);if(result__ !== undefined) after41(result__);
                        }
                      }
                    };
        if(val130 !== null) {
          subs__.addSub(mobl.domBind(node253, 'keyup', val130));
        }
        
        var val131 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val131 !== null) {
          subs__.addSub(mobl.domBind(node253, 'blur', val131));
        }
        
        node252.append(node253);
        var nodes615 = $("<span>");
        node252.append(nodes615);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root785 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root785); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes615;
          nodes615 = node.contents();
          oldNodes.replaceWith(nodes615);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after42);if(result__ !== undefined) after42(result__);
    } else {
      
      var node254 = $("<input>");
      
      var ref255 = inputType;
      if(ref255.get() !== null) {
        node254.attr('type', ref255.get());
        subs__.addSub(ref255.addEventListener('change', function(_, ref, val) {
          node254.attr('type', val);
        }));
        
      }
      subs__.addSub(ref255.rebind());
      
      var ref256 = style;
      if(ref256.get() !== null) {
        node254.attr('class', ref256.get());
        subs__.addSub(ref256.addEventListener('change', function(_, ref, val) {
          node254.attr('class', val);
        }));
        
      }
      subs__.addSub(ref256.rebind());
      
      var ref257 = placeholder;
      if(ref257.get() !== null) {
        node254.attr('placeholder', ref257.get());
        subs__.addSub(ref257.addEventListener('change', function(_, ref, val) {
          node254.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref257.rebind());
      
      var ref258 = s;
      node254.val(""+ref258.get());
      var ignore50 = false;
      subs__.addSub(ref258.addEventListener('change', function(_, ref, val) {
        if(ignore50) return;
        node254.val(""+val);
      }));
      subs__.addSub(ref258.rebind());
      
      subs__.addSub(mobl.domBind(node254, 'keyup change', function() {
        ignore50 = true;
        s.set(mobl.stringTomobl__String(node254.val()));
        ignore50 = false;
      }));
      
      
      var val132 = onchange.get();
      if(val132 !== null) {
        subs__.addSub(mobl.domBind(node254, 'change', val132));
      }
      
      var val133 = onkeyup.get();
      if(val133 !== null) {
        subs__.addSub(mobl.domBind(node254, 'keyup', val133));
      }
      
      var val134 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val134 !== null) {
        subs__.addSub(mobl.domBind(node254, 'blur', val134));
      }
      
      node252.append(node254);
      
      
    }
  };
  renderCond62();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond62();
  }));
  
  callback(root783); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root786 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes616 = $("<span>");
  root786.append(nodes616);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root787 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root787); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes616;
    nodes616 = node.contents();
    oldNodes.replaceWith(nodes616);
  }));
  callback(root786); return subs__;
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root788 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes617 = $("<span>");
  root788.append(nodes617);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root789 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root789); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes617;
    nodes617 = node.contents();
    oldNodes.replaceWith(nodes617);
  }));
  callback(root788); return subs__;
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root790 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node255 = $("<span>");
  root790.append(node255);
  var condSubs63 = new mobl.CompSubscription();
  subs__.addSub(condSubs63);
  var oldValue63;
  var renderCond63 = function() {
    var value555 = label.get();
    if(oldValue63 === value555) return;
    oldValue63 = value555;
    var subs__ = condSubs63;
    subs__.unsubscribe();
    node255.empty();
    if(value555) {
      var nodes618 = $("<span>");
      node255.append(nodes618);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root791 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root791); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes618;
        nodes618 = node.contents();
        oldNodes.replaceWith(nodes618);
      }));
      
      
    } else {
      
    }
  };
  renderCond63();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond63();
  }));
  
  
  var node256 = $("<input>");
  node256.attr('type', "range");
  
  var ref259 = n;
  node256.val(""+ref259.get());
  var ignore51 = false;
  subs__.addSub(ref259.addEventListener('change', function(_, ref, val) {
    if(ignore51) return;
    node256.val(""+val);
  }));
  subs__.addSub(ref259.rebind());
  
  subs__.addSub(mobl.domBind(node256, 'keyup change', function() {
    ignore51 = true;
    n.set(mobl.stringTomobl__Num(node256.val()));
    ignore51 = false;
  }));
  
  
  var ref260 = min;
  if(ref260.get() !== null) {
    node256.attr('min', ref260.get());
    subs__.addSub(ref260.addEventListener('change', function(_, ref, val) {
      node256.attr('min', val);
    }));
    
  }
  subs__.addSub(ref260.rebind());
  
  var ref261 = max;
  if(ref261.get() !== null) {
    node256.attr('max', ref261.get());
    subs__.addSub(ref261.addEventListener('change', function(_, ref, val) {
      node256.attr('max', val);
    }));
    
  }
  subs__.addSub(ref261.rebind());
  
  var ref262 = step;
  if(ref262.get() !== null) {
    node256.attr('step', ref262.get());
    subs__.addSub(ref262.addEventListener('change', function(_, ref, val) {
      node256.attr('step', val);
    }));
    
  }
  subs__.addSub(ref262.rebind());
  node256.attr('style', "width: 99%;");
  
  var val135 = onchange.get();
  if(val135 !== null) {
    subs__.addSub(mobl.domBind(node256, 'change', val135));
  }
  
  var val136 = onkeyup.get();
  if(val136 !== null) {
    subs__.addSub(mobl.domBind(node256, 'keyup', val136));
  }
  
  var ref263 = placeholder;
  if(ref263.get() !== null) {
    node256.attr('placeholder', ref263.get());
    subs__.addSub(ref263.addEventListener('change', function(_, ref, val) {
      node256.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref263.rebind());
  
  root790.append(node256);
  callback(root790); return subs__;
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root792 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after43(result__) {
      var tmp635 = result__;
      var result__ = tmp635;
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
    var result__ = validator.get()(n2, after43);if(result__ !== undefined) after43(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes619 = $("<span>");
  root792.append(nodes619);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root793 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root793); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes619;
    nodes619 = node.contents();
    oldNodes.replaceWith(nodes619);
  }));
  callback(root792); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root794 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node257 = $("<span>");
  root794.append(node257);
  var condSubs64 = new mobl.CompSubscription();
  subs__.addSub(condSubs64);
  var oldValue64;
  var renderCond64 = function() {
    var value556 = label.get();
    if(oldValue64 === value556) return;
    oldValue64 = value556;
    var subs__ = condSubs64;
    subs__.unsubscribe();
    node257.empty();
    if(value556) {
      
      var node258 = $("<span>");
      node258.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref267 = label;
      node258.text(""+ref267.get());
      var ignore53 = false;
      subs__.addSub(ref267.addEventListener('change', function(_, ref, val) {
        if(ignore53) return;
        node258.text(""+val);
      }));
      subs__.addSub(ref267.rebind());
      
      
      node257.append(node258);
      
      var node259 = $("<span>");
      node259.attr('style', "float: left");
      
      
      var node260 = $("<input>");
      node260.attr('type', "password");
      
      var ref264 = style;
      if(ref264.get() !== null) {
        node260.attr('class', ref264.get());
        subs__.addSub(ref264.addEventListener('change', function(_, ref, val) {
          node260.attr('class', val);
        }));
        
      }
      subs__.addSub(ref264.rebind());
      
      var ref265 = placeholder;
      if(ref265.get() !== null) {
        node260.attr('placeholder', ref265.get());
        subs__.addSub(ref265.addEventListener('change', function(_, ref, val) {
          node260.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref265.rebind());
      
      var ref266 = s;
      node260.val(""+ref266.get());
      var ignore52 = false;
      subs__.addSub(ref266.addEventListener('change', function(_, ref, val) {
        if(ignore52) return;
        node260.val(""+val);
      }));
      subs__.addSub(ref266.rebind());
      
      subs__.addSub(mobl.domBind(node260, 'keyup change', function() {
        ignore52 = true;
        s.set(mobl.stringTomobl__String(node260.val()));
        ignore52 = false;
      }));
      
      
      var val137 = onchange.get();
      if(val137 !== null) {
        subs__.addSub(mobl.domBind(node260, 'change', val137));
      }
      
      var val138 = onkeyup.get();
      if(val138 !== null) {
        subs__.addSub(mobl.domBind(node260, 'keyup', val138));
      }
      
      var val139 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val139 !== null) {
        subs__.addSub(mobl.domBind(node260, 'blur', val139));
      }
      
      node259.append(node260);
      node257.append(node259);
      
      
      
      
    } else {
      
      var node261 = $("<input>");
      node261.attr('type', "password");
      
      var ref268 = style;
      if(ref268.get() !== null) {
        node261.attr('class', ref268.get());
        subs__.addSub(ref268.addEventListener('change', function(_, ref, val) {
          node261.attr('class', val);
        }));
        
      }
      subs__.addSub(ref268.rebind());
      
      var ref269 = placeholder;
      if(ref269.get() !== null) {
        node261.attr('placeholder', ref269.get());
        subs__.addSub(ref269.addEventListener('change', function(_, ref, val) {
          node261.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref269.rebind());
      
      var ref270 = s;
      node261.val(""+ref270.get());
      var ignore54 = false;
      subs__.addSub(ref270.addEventListener('change', function(_, ref, val) {
        if(ignore54) return;
        node261.val(""+val);
      }));
      subs__.addSub(ref270.rebind());
      
      subs__.addSub(mobl.domBind(node261, 'keyup change', function() {
        ignore54 = true;
        s.set(mobl.stringTomobl__String(node261.val()));
        ignore54 = false;
      }));
      
      
      var val140 = onchange.get();
      if(val140 !== null) {
        subs__.addSub(mobl.domBind(node261, 'change', val140));
      }
      
      var val141 = onkeyup.get();
      if(val141 !== null) {
        subs__.addSub(mobl.domBind(node261, 'keyup', val141));
      }
      
      var val142 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val142 !== null) {
        subs__.addSub(mobl.domBind(node261, 'blur', val142));
      }
      
      node257.append(node261);
      
      
    }
  };
  renderCond64();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond64();
  }));
  
  callback(root794); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root795 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref275 = style;
  if(ref275.get() !== null) {
    sel.attr('class', ref275.get());
    subs__.addSub(ref275.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref275.rebind());
  
  var val143 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after44(result__) {
                    var tmp637 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after44);if(result__ !== undefined) after44(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val143 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val143));
  }
  
  
  var node262 = mobl.loadingSpan();
  sel.append(node262);
  var list40;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList40 = function() {
    var subs__ = listSubs__;
    list40 = options.get();
    list40.list(function(results40) {
      node262.empty();
      for(var i172 = 0; i172 < results40.length; i172++) {
        (function() {
          var iternode40 = $("<span>");
          node262.append(iternode40);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results40), i172), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results40), i172), "_2");
          
          var node263 = $("<option>");
          
          var ref271 = optionDescription;
          node263.text(""+ref271.get());
          var ignore55 = false;
          subs__.addSub(ref271.addEventListener('change', function(_, ref, val) {
            if(ignore55) return;
            node263.text(""+val);
          }));
          subs__.addSub(ref271.rebind());
          
          
          var ref272 = optionStyle;
          if(ref272.get() !== null) {
            node263.attr('class', ref272.get());
            subs__.addSub(ref272.addEventListener('change', function(_, ref, val) {
              node263.attr('class', val);
            }));
            
          }
          subs__.addSub(ref272.rebind());
          
          var ref273 = optionValue;
          if(ref273.get() !== null) {
            node263.attr('value', ref273.get());
            subs__.addSub(ref273.addEventListener('change', function(_, ref, val) {
              node263.attr('value', val);
            }));
            
          }
          subs__.addSub(ref273.rebind());
          
          var ref274 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref274.get() !== null) {
            node263.attr('selected', ref274.get());
            subs__.addSub(ref274.addEventListener('change', function(_, ref, val) {
              node263.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node263.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node263.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref274.rebind());
          
          iternode40.append(node263);
          
          var oldNodes = iternode40;
          iternode40 = iternode40.contents();
          oldNodes.replaceWith(iternode40);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list40.addEventListener('change', function() { listSubs__.unsubscribe(); renderList40(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList40(true); }));
    });
  };
  renderList40();
  
  root795.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root795); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root796 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes620 = $("<span>");
    root796.append(nodes620);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root797 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node264 = mobl.loadingSpan();
      root797.append(node264);
      var list41;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList41 = function() {
        var subs__ = listSubs__;
        list41 = tabs.get();
        list41.list(function(results41) {
          node264.empty();
          for(var i173 = 0; i173 < results41.length; i173++) {
            (function() {
              var iternode41 = $("<span>");
              node264.append(iternode41);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results41), i173), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results41), i173), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results41), i173), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp599 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp599.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp599.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp599.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp599.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp598 = mobl.ref(result__);
              
              var nodes621 = $("<span>");
              iternode41.append(nodes621);
              subs__.addSub((mobl.span)(tmp599, mobl.ref(null), tmp598, mobl.ref(null), function(_, callback) {
                var root798 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes622 = $("<span>");
                root798.append(nodes622);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root799 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root799); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes622;
                  nodes622 = node.contents();
                  oldNodes.replaceWith(nodes622);
                }));
                callback(root798); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes621;
                nodes621 = node.contents();
                oldNodes.replaceWith(nodes621);
              }));
              
              var oldNodes = iternode41;
              iternode41 = iternode41.contents();
              oldNodes.replaceWith(iternode41);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list41.addEventListener('change', function() { listSubs__.unsubscribe(); renderList41(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList41(true); }));
        });
      };
      renderList41();
      
      callback(root797); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes620;
      nodes620 = node.contents();
      oldNodes.replaceWith(nodes620);
    }));
    
    var node265 = mobl.loadingSpan();
    root796.append(node265);
    var list42;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList42 = function() {
      var subs__ = listSubs__;
      list42 = tabs.get();
      list42.list(function(results42) {
        node265.empty();
        for(var i174 = 0; i174 < results42.length; i174++) {
          (function() {
            var iternode42 = $("<span>");
            node265.append(iternode42);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results42), i174), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results42), i174), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results42), i174), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp600 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp600.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp600.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp600.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp600.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes623 = $("<span>");
            iternode42.append(nodes623);
            subs__.addSub((mobl.block)(tmp600, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root800 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes624 = $("<span>");
              root800.append(nodes624);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root801 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes625 = $("<span>");
                root801.append(nodes625);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl98();
                }));
                
                function renderControl98() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root802 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root802); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes625;
                    nodes625 = node.contents();
                    oldNodes.replaceWith(nodes625);
                  }));
                }
                renderControl98();
                callback(root801); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes624;
                nodes624 = node.contents();
                oldNodes.replaceWith(nodes624);
              }));
              callback(root800); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes623;
              nodes623 = node.contents();
              oldNodes.replaceWith(nodes623);
            }));
            
            var oldNodes = iternode42;
            iternode42 = iternode42.contents();
            oldNodes.replaceWith(iternode42);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list42.addEventListener('change', function() { listSubs__.unsubscribe(); renderList42(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList42(true); }));
      });
    };
    renderList42();
    
    callback(root796); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes620 = $("<span>");
      root796.append(nodes620);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root797 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node264 = mobl.loadingSpan();
        root797.append(node264);
        var list41;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList41 = function() {
          var subs__ = listSubs__;
          list41 = tabs.get();
          list41.list(function(results41) {
            node264.empty();
            for(var i173 = 0; i173 < results41.length; i173++) {
              (function() {
                var iternode41 = $("<span>");
                node264.append(iternode41);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results41), i173), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results41), i173), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results41), i173), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp599 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp599.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp599.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp599.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp599.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp598 = mobl.ref(result__);
                
                var nodes621 = $("<span>");
                iternode41.append(nodes621);
                subs__.addSub((mobl.span)(tmp599, mobl.ref(null), tmp598, mobl.ref(null), function(_, callback) {
                  var root798 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes622 = $("<span>");
                  root798.append(nodes622);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root799 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root799); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes622;
                    nodes622 = node.contents();
                    oldNodes.replaceWith(nodes622);
                  }));
                  callback(root798); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes621;
                  nodes621 = node.contents();
                  oldNodes.replaceWith(nodes621);
                }));
                
                var oldNodes = iternode41;
                iternode41 = iternode41.contents();
                oldNodes.replaceWith(iternode41);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list41.addEventListener('change', function() { listSubs__.unsubscribe(); renderList41(true); }));
            subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList41(true); }));
          });
        };
        renderList41();
        
        callback(root797); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes620;
        nodes620 = node.contents();
        oldNodes.replaceWith(nodes620);
      }));
      
      var node265 = mobl.loadingSpan();
      root796.append(node265);
      var list42;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList42 = function() {
        var subs__ = listSubs__;
        list42 = tabs.get();
        list42.list(function(results42) {
          node265.empty();
          for(var i174 = 0; i174 < results42.length; i174++) {
            (function() {
              var iternode42 = $("<span>");
              node265.append(iternode42);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results42), i174), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results42), i174), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results42), i174), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp600 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp600.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp600.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp600.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp600.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes623 = $("<span>");
              iternode42.append(nodes623);
              subs__.addSub((mobl.block)(tmp600, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root800 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes624 = $("<span>");
                root800.append(nodes624);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root801 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes625 = $("<span>");
                  root801.append(nodes625);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl98();
                  }));
                  
                  function renderControl98() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root802 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root802); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes625;
                      nodes625 = node.contents();
                      oldNodes.replaceWith(nodes625);
                    }));
                  }
                  renderControl98();
                  callback(root801); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes624;
                  nodes624 = node.contents();
                  oldNodes.replaceWith(nodes624);
                }));
                callback(root800); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes623;
                nodes623 = node.contents();
                oldNodes.replaceWith(nodes623);
              }));
              
              var oldNodes = iternode42;
              iternode42 = iternode42.contents();
              oldNodes.replaceWith(iternode42);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list42.addEventListener('change', function() { listSubs__.unsubscribe(); renderList42(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList42(true); }));
        });
      };
      renderList42();
      
      callback(root796); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root803 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node266 = $("<div>");
  
  var ref279 = mobl.ref(ui.searchboxStyle);
  if(ref279.get() !== null) {
    node266.attr('class', ref279.get());
    subs__.addSub(ref279.addEventListener('change', function(_, ref, val) {
      node266.attr('class', val);
    }));
    
  }
  subs__.addSub(ref279.rebind());
  
  
  var node267 = $("<input>");
  node267.attr('type', "search");
  
  var ref276 = mobl.ref(ui.searchBoxInputStyle);
  if(ref276.get() !== null) {
    node267.attr('class', ref276.get());
    subs__.addSub(ref276.addEventListener('change', function(_, ref, val) {
      node267.attr('class', val);
    }));
    
  }
  subs__.addSub(ref276.rebind());
  
  var ref277 = placeholder;
  if(ref277.get() !== null) {
    node267.attr('placeholder', ref277.get());
    subs__.addSub(ref277.addEventListener('change', function(_, ref, val) {
      node267.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref277.rebind());
  
  var ref278 = s;
  node267.val(""+ref278.get());
  var ignore56 = false;
  subs__.addSub(ref278.addEventListener('change', function(_, ref, val) {
    if(ignore56) return;
    node267.val(""+val);
  }));
  subs__.addSub(ref278.rebind());
  
  subs__.addSub(mobl.domBind(node267, 'keyup change', function() {
    ignore56 = true;
    s.set(mobl.stringTomobl__String(node267.val()));
    ignore56 = false;
  }));
  
  
  var val144 = onsearch.get();
  if(val144 !== null) {
    subs__.addSub(mobl.domBind(node267, 'change', val144));
  }
  
  var val145 = onkeyup.get();
  if(val145 !== null) {
    subs__.addSub(mobl.domBind(node267, 'keyup', val145));
  }
  node267.attr('autocorrect', false);
  node267.attr('autocapitalize', false);
  node267.attr('autocomplete', false);
  
  node266.append(node267);
  root803.append(node266);
  callback(root803); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root804 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref280 = mobl.ref(ui.contextMenuStyle);
  if(ref280.get() !== null) {
    menu.attr('class', ref280.get());
    subs__.addSub(ref280.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref280.rebind());
  
  var nodes626 = $("<span>");
  menu.append(nodes626);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl99();
  }));
  
  function renderControl99() {
    subs__.addSub((elements)(function(elements, callback) {
      var root805 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root805); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes626;
      nodes626 = node.contents();
      oldNodes.replaceWith(nodes626);
    }));
  }
  renderControl99();
  root804.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val146 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp640 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val146 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val146));
  }
  
  root804.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root804); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root806 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp625 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp625.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node268 = $("<span>");
  root806.append(node268);
  var condSubs65 = new mobl.CompSubscription();
  subs__.addSub(condSubs65);
  var oldValue65;
  var renderCond65 = function() {
    var value557 = tmp625.get();
    if(oldValue65 === value557) return;
    oldValue65 = value557;
    var subs__ = condSubs65;
    subs__.unsubscribe();
    node268.empty();
    if(value557) {
      items.get().one(function(result__) {
        var tmp641 = result__;
        var current = mobl.ref(result__);
        
        var node269 = $("<div>");
        node269.attr('width', "100%");
        
        
        var node270 = $("<div>");
        node270.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes629 = $("<span>");
        node270.append(nodes629);
        subs__.addSub((ui.group)(function(_, callback) {
          var root809 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node273 = mobl.loadingSpan();
          root809.append(node273);
          var list43;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList43 = function() {
            var subs__ = listSubs__;
            list43 = items.get();
            list43.list(function(results43) {
              node273.empty();
              for(var i175 = 0; i175 < results43.length; i175++) {
                (function() {
                  var iternode43 = $("<span>");
                  node273.append(iternode43);
                  var it;
                  it = mobl.ref(mobl.ref(results43), i175);
                  var result__ = it.get() == current.get();
                  var tmp606 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp606.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp606.set(it.get() == current.get());
                  }));
                  
                  
                  var node274 = $("<span>");
                  iternode43.append(node274);
                  var condSubs67 = new mobl.CompSubscription();
                  subs__.addSub(condSubs67);
                  var oldValue67;
                  var renderCond67 = function() {
                    var value559 = tmp606.get();
                    if(oldValue67 === value559) return;
                    oldValue67 = value559;
                    var subs__ = condSubs67;
                    subs__.unsubscribe();
                    node274.empty();
                    if(value559) {
                      var nodes630 = $("<span>");
                      node274.append(nodes630);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root810 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes631 = $("<span>");
                        root810.append(nodes631);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl101();
                        }));
                        
                        function renderControl101() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root811 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root811); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes631;
                            nodes631 = node.contents();
                            oldNodes.replaceWith(nodes631);
                          }));
                        }
                        renderControl101();
                        callback(root810); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes630;
                        nodes630 = node.contents();
                        oldNodes.replaceWith(nodes630);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp605 = mobl.ref(result__);
                      
                      var nodes632 = $("<span>");
                      node274.append(nodes632);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp605, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root812 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes633 = $("<span>");
                        root812.append(nodes633);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl103();
                        }));
                        
                        function renderControl103() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root813 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root813); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes633;
                            nodes633 = node.contents();
                            oldNodes.replaceWith(nodes633);
                          }));
                        }
                        renderControl103();
                        callback(root812); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes632;
                        nodes632 = node.contents();
                        oldNodes.replaceWith(nodes632);
                      }));
                      
                      
                    }
                  };
                  renderCond67();
                  subs__.addSub(tmp606.addEventListener('change', function() {
                    renderCond67();
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
          
          callback(root809); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes629;
          nodes629 = node.contents();
          oldNodes.replaceWith(nodes629);
        }));
        node269.append(node270);
        
        var node271 = $("<div>");
        node271.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node272 = $("<span>");
        node271.append(node272);
        var condSubs66 = new mobl.CompSubscription();
        subs__.addSub(condSubs66);
        var oldValue66;
        var renderCond66 = function() {
          var value558 = current.get();
          if(oldValue66 === value558) return;
          oldValue66 = value558;
          var subs__ = condSubs66;
          subs__.unsubscribe();
          node272.empty();
          if(value558) {
            var nodes627 = $("<span>");
            node272.append(nodes627);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl100();
            }));
            
            function renderControl100() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root807 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root807); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes627;
                nodes627 = node.contents();
                oldNodes.replaceWith(nodes627);
              }));
            }
            renderControl100();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp607 = mobl.ref(result__);
            
            var nodes628 = $("<span>");
            node272.append(nodes628);
            subs__.addSub((mobl.label)(tmp607, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root808 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root808); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes628;
              nodes628 = node.contents();
              oldNodes.replaceWith(nodes628);
            }));
            
            
          }
        };
        renderCond66();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond66();
        }));
        
        node269.append(node271);
        node268.append(node269);
        
        
        
        
        
        
      });
    } else {
      var nodes634 = $("<span>");
      node268.append(nodes634);
      subs__.addSub((ui.group)(function(_, callback) {
        var root814 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node275 = mobl.loadingSpan();
        root814.append(node275);
        var list44;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList44 = function() {
          var subs__ = listSubs__;
          list44 = items.get();
          list44.list(function(results44) {
            node275.empty();
            for(var i176 = 0; i176 < results44.length; i176++) {
              (function() {
                var iternode44 = $("<span>");
                node275.append(iternode44);
                var it;
                it = mobl.ref(mobl.ref(results44), i176);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp642 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp601 = mobl.ref(result__);
                
                var nodes635 = $("<span>");
                iternode44.append(nodes635);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp601, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root815 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes636 = $("<span>");
                  root815.append(nodes636);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl104();
                  }));
                  
                  function renderControl104() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root816 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root816); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes636;
                      nodes636 = node.contents();
                      oldNodes.replaceWith(nodes636);
                    }));
                  }
                  renderControl104();
                  callback(root815); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes635;
                  nodes635 = node.contents();
                  oldNodes.replaceWith(nodes635);
                }));
                
                var oldNodes = iternode44;
                iternode44 = iternode44.contents();
                oldNodes.replaceWith(iternode44);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list44.addEventListener('change', function() { listSubs__.unsubscribe(); renderList44(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList44(true); }));
          });
        };
        renderList44();
        
        callback(root814); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes634;
        nodes634 = node.contents();
        oldNodes.replaceWith(nodes634);
      }));
      
      
    }
  };
  renderCond65();
  subs__.addSub(tmp625.addEventListener('change', function() {
    renderCond65();
  }));
  
  callback(root806); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root817 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp604 = mobl.ref(result__);
  
  var nodes637 = $("<span>");
  root817.append(nodes637);
  subs__.addSub((ui.header)(tmp604, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root818 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp603 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp602 = mobl.ref(result__);
    
    var nodes638 = $("<span>");
    root818.append(nodes638);
    subs__.addSub((ui.backButton)(tmp602, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp603, function(_, callback) {
      var root819 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root819); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes638;
      nodes638 = node.contents();
      oldNodes.replaceWith(nodes638);
    }));
    callback(root818); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes637;
    nodes637 = node.contents();
    oldNodes.replaceWith(nodes637);
  }));
  var nodes639 = $("<span>");
  root817.append(nodes639);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl105();
  }));
  
  function renderControl105() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root820 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root820); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes639;
      nodes639 = node.contents();
      oldNodes.replaceWith(nodes639);
    }));
  }
  renderControl105();
  callback(root817); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root821 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes640 = $("<span>");
  root821.append(nodes640);
  subs__.addSub((ui.group)(function(_, callback) {
    var root822 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node276 = mobl.loadingSpan();
    root822.append(node276);
    var list45;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList45 = function() {
      var subs__ = listSubs__;
      list45 = coll.get();
      list45.list(function(results45) {
        node276.empty();
        for(var i177 = 0; i177 < results45.length; i177++) {
          (function() {
            var iternode45 = $("<span>");
            node276.append(iternode45);
            var it;
            it = mobl.ref(mobl.ref(results45), i177);
            var result__ = it.get() == selected.get();
            var tmp609 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp609.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp609.set(it.get() == selected.get());
            }));
            
            
            var node277 = $("<span>");
            iternode45.append(node277);
            var condSubs68 = new mobl.CompSubscription();
            subs__.addSub(condSubs68);
            var oldValue68;
            var renderCond68 = function() {
              var value560 = tmp609.get();
              if(oldValue68 === value560) return;
              oldValue68 = value560;
              var subs__ = condSubs68;
              subs__.unsubscribe();
              node277.empty();
              if(value560) {
                var nodes641 = $("<span>");
                node277.append(nodes641);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root823 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes642 = $("<span>");
                  root823.append(nodes642);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl106();
                  }));
                  
                  function renderControl106() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root824 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root824); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes642;
                      nodes642 = node.contents();
                      oldNodes.replaceWith(nodes642);
                    }));
                  }
                  renderControl106();
                  callback(root823); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes641;
                  nodes641 = node.contents();
                  oldNodes.replaceWith(nodes641);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp608 = mobl.ref(result__);
                
                var nodes643 = $("<span>");
                node277.append(nodes643);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp608, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root825 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes644 = $("<span>");
                  root825.append(nodes644);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl107();
                  }));
                  
                  function renderControl107() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root826 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root826); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes644;
                      nodes644 = node.contents();
                      oldNodes.replaceWith(nodes644);
                    }));
                  }
                  renderControl107();
                  callback(root825); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes643;
                  nodes643 = node.contents();
                  oldNodes.replaceWith(nodes643);
                }));
                
                
              }
            };
            renderCond68();
            subs__.addSub(tmp609.addEventListener('change', function() {
              renderCond68();
            }));
            
            
            var oldNodes = iternode45;
            iternode45 = iternode45.contents();
            oldNodes.replaceWith(iternode45);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list45.addEventListener('change', function() { listSubs__.unsubscribe(); renderList45(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList45(true); }));
      });
    };
    renderList45();
    
    callback(root822); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes640;
    nodes640 = node.contents();
    oldNodes.replaceWith(nodes640);
  }));
  callback(root821); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root827 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp643 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp610 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp610.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp610.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp610.set(coll.get().limit(n.get()));
    }));
    
    
    var node278 = mobl.loadingSpan();
    root827.append(node278);
    var list46;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList46 = function() {
      var subs__ = listSubs__;
      list46 = tmp610.get();
      list46.list(function(results46) {
        node278.empty();
        for(var i178 = 0; i178 < results46.length; i178++) {
          (function() {
            var iternode46 = $("<span>");
            node278.append(iternode46);
            var it;
            it = mobl.ref(mobl.ref(results46), i178);
            var nodes645 = $("<span>");
            iternode46.append(nodes645);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl108();
            }));
            
            function renderControl108() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root828 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root828); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes645;
                nodes645 = node.contents();
                oldNodes.replaceWith(nodes645);
              }));
            }
            renderControl108();
            
            var oldNodes = iternode46;
            iternode46 = iternode46.contents();
            oldNodes.replaceWith(iternode46);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list46.addEventListener('change', function() { listSubs__.unsubscribe(); renderList46(true); }));
        subs__.addSub(tmp610.addEventListener('change', function() { listSubs__.unsubscribe(); renderList46(true); }));
      });
    };
    renderList46();
    
    var result__ = n.get() < total.get();
    var tmp612 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp612.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp612.set(n.get() < total.get());
    }));
    
    
    var node279 = $("<span>");
    root827.append(node279);
    var condSubs69 = new mobl.CompSubscription();
    subs__.addSub(condSubs69);
    var oldValue69;
    var renderCond69 = function() {
      var value561 = tmp612.get();
      if(oldValue69 === value561) return;
      oldValue69 = value561;
      var subs__ = condSubs69;
      subs__.unsubscribe();
      node279.empty();
      if(value561) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp611 = mobl.ref(result__);
        
        var nodes646 = $("<span>");
        node279.append(nodes646);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp611, mobl.ref(null), function(_, callback) {
          var root829 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes647 = $("<span>");
          root829.append(nodes647);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root830 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root830); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes647;
            nodes647 = node.contents();
            oldNodes.replaceWith(nodes647);
          }));
          callback(root829); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes646;
          nodes646 = node.contents();
          oldNodes.replaceWith(nodes646);
        }));
        
        
      } else {
        
      }
    };
    renderCond69();
    subs__.addSub(tmp612.addEventListener('change', function() {
      renderCond69();
    }));
    
    callback(root827); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root831 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes648 = $("<span>");
  root831.append(nodes648);
  subs__.addSub((ui.group)(function(_, callback) {
    var root832 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node281 = mobl.loadingSpan();
    root832.append(node281);
    var list47;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList47 = function() {
      var subs__ = listSubs__;
      list47 = items.get();
      list47.list(function(results47) {
        node281.empty();
        for(var i179 = 0; i179 < results47.length; i179++) {
          (function() {
            var iternode47 = $("<span>");
            node281.append(iternode47);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results47), i179), "_1");it = mobl.ref(mobl.ref(mobl.ref(results47), i179), "_2");
            var nodes649 = $("<span>");
            iternode47.append(nodes649);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root833 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes650 = $("<span>");
              root833.append(nodes650);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root834 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root834); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes650;
                nodes650 = node.contents();
                oldNodes.replaceWith(nodes650);
              }));
              callback(root833); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes649;
              nodes649 = node.contents();
              oldNodes.replaceWith(nodes649);
            }));
            
            var oldNodes = iternode47;
            iternode47 = iternode47.contents();
            oldNodes.replaceWith(iternode47);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list47.addEventListener('change', function() { listSubs__.unsubscribe(); renderList47(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList47(true); }));
      });
    };
    renderList47();
    
    callback(root832); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes648;
    nodes648 = node.contents();
    oldNodes.replaceWith(nodes648);
  }));
  callback(root831); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root835 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll764) {
    coll764 = coll764.reverse();
    function processOne26() {
      var it;
      it = coll764.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll764.length > 0) processOne26(); else rest26();
      
    }
    function rest26() {
      var nodes651 = $("<span>");
      root835.append(nodes651);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root836 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp613 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp614 = mobl.ref(result__);
        
        var nodes652 = $("<span>");
        root836.append(nodes652);
        subs__.addSub((ui.backButton)(tmp614, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp613, function(_, callback) {
          var root837 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root837); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes652;
          nodes652 = node.contents();
          oldNodes.replaceWith(nodes652);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll763) {
                           coll763 = coll763.reverse();
                           function processOne25() {
                             var checked;var it;
                             var tmp645 = coll763.pop();
                             checked = tmp645._1;it = tmp645._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll763.length > 0) processOne25(); else rest25();
                               
                             } else {
                               {
                                 
                                 if(coll763.length > 0) processOne25(); else rest25();
                                 
                               }
                             }
                           }
                           function rest25() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll763.length > 0) processOne25(); else rest25();
                         });
                         
                       };
        var tmp615 = mobl.ref(result__);
        
        var nodes653 = $("<span>");
        root836.append(nodes653);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp615, function(_, callback) {
          var root838 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root838); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes653;
          nodes653 = node.contents();
          oldNodes.replaceWith(nodes653);
        }));
        callback(root836); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes651;
        nodes651 = node.contents();
        oldNodes.replaceWith(nodes651);
      }));
      var nodes654 = $("<span>");
      root835.append(nodes654);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root839 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root839); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes654;
        nodes654 = node.contents();
        oldNodes.replaceWith(nodes654);
      }));
      callback(root835); return subs__;
      
      
    }
    if(coll764.length > 0) processOne26(); else rest26();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root840 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes655 = $("<span>");
  root840.append(nodes655);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root841 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root841); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes655;
    nodes655 = node.contents();
    oldNodes.replaceWith(nodes655);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp616 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp616.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp616.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp616.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp616.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp616.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes656 = $("<span>");
  root840.append(nodes656);
  subs__.addSub((ui.masterDetail)(tmp616, masterItem, detailItem, function(_, callback) {
    var root842 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root842); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes656;
    nodes656 = node.contents();
    oldNodes.replaceWith(nodes656);
  }));
  callback(root840); return subs__;
  
  
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
  var root843 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes657 = $("<span>");
  root843.append(nodes657);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root844 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node282 = mobl.loadingSpan();
    root844.append(node282);
    var list48;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList48 = function() {
      var subs__ = listSubs__;
      list48 = sections.get();
      list48.list(function(results48) {
        node282.empty();
        for(var i180 = 0; i180 < results48.length; i180++) {
          (function() {
            var iternode48 = $("<span>");
            node282.append(iternode48);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results48), i180), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results48), i180), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp618 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp618.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp618.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp618.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp618.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp617 = mobl.ref(result__);
            
            var nodes658 = $("<span>");
            iternode48.append(nodes658);
            subs__.addSub((mobl.span)(tmp618, mobl.ref(null), tmp617, mobl.ref(null), function(_, callback) {
              var root845 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes659 = $("<span>");
              root845.append(nodes659);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root846 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root846); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes659;
                nodes659 = node.contents();
                oldNodes.replaceWith(nodes659);
              }));
              callback(root845); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes658;
              nodes658 = node.contents();
              oldNodes.replaceWith(nodes658);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp619 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp619.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp619.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp619.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp619.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes660 = $("<span>");
            iternode48.append(nodes660);
            subs__.addSub((mobl.block)(tmp619, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root847 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes661 = $("<span>");
              root847.append(nodes661);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl109();
              }));
              
              function renderControl109() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root848 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root848); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes661;
                  nodes661 = node.contents();
                  oldNodes.replaceWith(nodes661);
                }));
              }
              renderControl109();
              callback(root847); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes660;
              nodes660 = node.contents();
              oldNodes.replaceWith(nodes660);
            }));
            
            var oldNodes = iternode48;
            iternode48 = iternode48.contents();
            oldNodes.replaceWith(iternode48);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list48.addEventListener('change', function() { listSubs__.unsubscribe(); renderList48(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList48(true); }));
      });
    };
    renderList48();
    
    callback(root844); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes657;
    nodes657 = node.contents();
    oldNodes.replaceWith(nodes657);
  }));
  callback(root843); return subs__;
  
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
  var root849 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node283 = $("<table>");
  
  var ref281 = style;
  if(ref281.get() !== null) {
    node283.attr('class', ref281.get());
    subs__.addSub(ref281.addEventListener('change', function(_, ref, val) {
      node283.attr('class', val);
    }));
    
  }
  subs__.addSub(ref281.rebind());
  
  var nodes662 = $("<span>");
  node283.append(nodes662);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl110();
  }));
  
  function renderControl110() {
    subs__.addSub((elements)(function(elements, callback) {
      var root850 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root850); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes662;
      nodes662 = node.contents();
      oldNodes.replaceWith(nodes662);
    }));
  }
  renderControl110();
  root849.append(node283);
  callback(root849); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root851 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node284 = $("<tr>");
  
  var ref282 = style;
  if(ref282.get() !== null) {
    node284.attr('class', ref282.get());
    subs__.addSub(ref282.addEventListener('change', function(_, ref, val) {
      node284.attr('class', val);
    }));
    
  }
  subs__.addSub(ref282.rebind());
  
  var nodes663 = $("<span>");
  node284.append(nodes663);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl111();
  }));
  
  function renderControl111() {
    subs__.addSub((elements)(function(elements, callback) {
      var root852 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root852); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes663;
      nodes663 = node.contents();
      oldNodes.replaceWith(nodes663);
    }));
  }
  renderControl111();
  root851.append(node284);
  callback(root851); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root853 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node285 = $("<td>");
  
  var ref283 = width;
  if(ref283.get() !== null) {
    node285.attr('width', ref283.get());
    subs__.addSub(ref283.addEventListener('change', function(_, ref, val) {
      node285.attr('width', val);
    }));
    
  }
  subs__.addSub(ref283.rebind());
  
  var ref284 = style;
  if(ref284.get() !== null) {
    node285.attr('class', ref284.get());
    subs__.addSub(ref284.addEventListener('change', function(_, ref, val) {
      node285.attr('class', val);
    }));
    
  }
  subs__.addSub(ref284.rebind());
  
  var nodes664 = $("<span>");
  node285.append(nodes664);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl112();
  }));
  
  function renderControl112() {
    subs__.addSub((elements)(function(elements, callback) {
      var root854 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root854); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes664;
      nodes664 = node.contents();
      oldNodes.replaceWith(nodes664);
    }));
  }
  renderControl112();
  root853.append(node285);
  callback(root853); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root855 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node286 = $("<td>");
  
  var ref285 = width;
  if(ref285.get() !== null) {
    node286.attr('width', ref285.get());
    subs__.addSub(ref285.addEventListener('change', function(_, ref, val) {
      node286.attr('width', val);
    }));
    
  }
  subs__.addSub(ref285.rebind());
  
  var ref286 = style;
  if(ref286.get() !== null) {
    node286.attr('class', ref286.get());
    subs__.addSub(ref286.addEventListener('change', function(_, ref, val) {
      node286.attr('class', val);
    }));
    
  }
  subs__.addSub(ref286.rebind());
  
  var nodes665 = $("<span>");
  node286.append(nodes665);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl113();
  }));
  
  function renderControl113() {
    subs__.addSub((elements)(function(elements, callback) {
      var root856 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root856); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes665;
      nodes665 = node.contents();
      oldNodes.replaceWith(nodes665);
    }));
  }
  renderControl113();
  root855.append(node286);
  callback(root855); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root857 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node287 = $("<td>");
  
  var ref287 = width;
  if(ref287.get() !== null) {
    node287.attr('width', ref287.get());
    subs__.addSub(ref287.addEventListener('change', function(_, ref, val) {
      node287.attr('width', val);
    }));
    
  }
  subs__.addSub(ref287.rebind());
  
  var ref288 = style;
  if(ref288.get() !== null) {
    node287.attr('class', ref288.get());
    subs__.addSub(ref288.addEventListener('change', function(_, ref, val) {
      node287.attr('class', val);
    }));
    
  }
  subs__.addSub(ref288.rebind());
  
  
  var node288 = $("<strong>");
  
  var nodes666 = $("<span>");
  node288.append(nodes666);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl114();
  }));
  
  function renderControl114() {
    subs__.addSub((elements)(function(elements, callback) {
      var root858 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root858); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes666;
      nodes666 = node.contents();
      oldNodes.replaceWith(nodes666);
    }));
  }
  renderControl114();
  node287.append(node288);
  root857.append(node287);
  callback(root857); return subs__;
  
  
  
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
  items.list(function(coll765) {
    coll765 = coll765.reverse();
    function processOne27() {
      var item;
      item = coll765.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = counter;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = counter + 1;
        counter = result__;
        
        if(coll765.length > 0) processOne27(); else rest27();
        
      } else {
        {
          var result__ = counter + 1;
          counter = result__;
          
          if(coll765.length > 0) processOne27(); else rest27();
          
        }
      }
    }
    function rest27() {
      var result__ = -1;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll765.length > 0) processOne27(); else rest27();
  });
  
};

ui.hasItem = function(it, items, callback) {
  var __this = this;
  var result__ = items;
  items.list(function(coll766) {
    coll766 = coll766.reverse();
    function processOne28() {
      var item;
      item = coll766.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = true;
        if(callback && callback.apply) callback(result__);
        return;
        
        if(coll766.length > 0) processOne28(); else rest28();
        
      } else {
        {
          
          if(coll766.length > 0) processOne28(); else rest28();
          
        }
      }
    }
    function rest28() {
      var result__ = false;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll766.length > 0) processOne28(); else rest28();
  });
  
};


ui.mMasterDetail = function(items, masterItem, detail, elements, callback) {
  var root859 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  items.get().one(function(result__) {
    var tmp647 = result__;
    var current = mobl.ref(result__);
    
    var node289 = $("<div>");
    node289.attr('width', "100%");
    
    
    var node290 = $("<div>");
    node290.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
    
    var nodes668 = $("<span>");
    node290.append(nodes668);
    subs__.addSub((ui.group)(function(_, callback) {
      var root861 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node295 = mobl.loadingSpan();
      root861.append(node295);
      var list49;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList49 = function() {
        var subs__ = listSubs__;
        list49 = items.get();
        list49.list(function(results49) {
          node295.empty();
          for(var i181 = 0; i181 < results49.length; i181++) {
            (function() {
              var iternode49 = $("<span>");
              node295.append(iternode49);
              var it;
              it = mobl.ref(mobl.ref(results49), i181);
              var result__ = it.get() == current.get();
              var tmp623 = mobl.ref(result__);
              subs__.addSub(it.addEventListener('change', function() {
                tmp623.set(it.get() == current.get());
              }));
              subs__.addSub(current.addEventListener('change', function() {
                tmp623.set(it.get() == current.get());
              }));
              
              
              var node296 = $("<span>");
              iternode49.append(node296);
              var condSubs71 = new mobl.CompSubscription();
              subs__.addSub(condSubs71);
              var oldValue71;
              var renderCond71 = function() {
                var value563 = tmp623.get();
                if(oldValue71 === value563) return;
                oldValue71 = value563;
                var subs__ = condSubs71;
                subs__.unsubscribe();
                node296.empty();
                if(value563) {
                  var nodes669 = $("<span>");
                  node296.append(nodes669);
                  subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                    var root862 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    ui.indexOf(it.get(), items.get(), function(result__) {
                      var tmp656 = result__;
                      var tmp620 = mobl.ref(result__);
                      subs__.addSub(it.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp654 = result__;
                          var result__ = tmp654;
                          tmp620.set(result__);
                          
                        });
                      }));
                      subs__.addSub(items.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp655 = result__;
                          var result__ = tmp655;
                          tmp620.set(result__);
                          
                        });
                      }));
                      
                      var nodes670 = $("<span>");
                      root862.append(nodes670);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl116();
                      }));
                      
                      function renderControl116() {
                        subs__.addSub((masterItem.get())(it, tmp620, function(elements, callback) {
                          var root863 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root863); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes670;
                          nodes670 = node.contents();
                          oldNodes.replaceWith(nodes670);
                        }));
                      }
                      renderControl116();
                      callback(root862); return subs__;
                      
                    });
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes669;
                    nodes669 = node.contents();
                    oldNodes.replaceWith(nodes669);
                  }));
                  
                  
                } else {
                  var result__ = function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   var result__ = it.get();
                                   current.set(result__);
                                   var result__ = ui.scrollUp();
                                   if(callback && callback.apply) callback(); return;
                                 };
                  var tmp622 = mobl.ref(result__);
                  
                  var nodes671 = $("<span>");
                  node296.append(nodes671);
                  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp622, mobl.ref(null), mobl.ref(true), function(_, callback) {
                    var root864 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    ui.indexOf(it.get(), items.get(), function(result__) {
                      var tmp659 = result__;
                      var tmp621 = mobl.ref(result__);
                      subs__.addSub(it.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp657 = result__;
                          var result__ = tmp657;
                          tmp621.set(result__);
                          
                        });
                      }));
                      subs__.addSub(items.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp658 = result__;
                          var result__ = tmp658;
                          tmp621.set(result__);
                          
                        });
                      }));
                      
                      var nodes672 = $("<span>");
                      root864.append(nodes672);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl117();
                      }));
                      
                      function renderControl117() {
                        subs__.addSub((masterItem.get())(it, tmp621, function(elements, callback) {
                          var root865 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root865); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes672;
                          nodes672 = node.contents();
                          oldNodes.replaceWith(nodes672);
                        }));
                      }
                      renderControl117();
                      callback(root864); return subs__;
                      
                    });
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes671;
                    nodes671 = node.contents();
                    oldNodes.replaceWith(nodes671);
                  }));
                  
                  
                }
              };
              renderCond71();
              subs__.addSub(tmp623.addEventListener('change', function() {
                renderCond71();
              }));
              
              
              var oldNodes = iternode49;
              iternode49 = iternode49.contents();
              oldNodes.replaceWith(iternode49);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list49.addEventListener('change', function() { listSubs__.unsubscribe(); renderList49(true); }));
          subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList49(true); }));
        });
      };
      renderList49();
      
      callback(root861); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes668;
      nodes668 = node.contents();
      oldNodes.replaceWith(nodes668);
    }));
    node289.append(node290);
    
    var node291 = $("<div>");
    node291.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
    
    ui.hasItem(current.get(), items.get(), function(result__) {
      var tmp653 = result__;
      var result__ = current.get() && tmp653;
      var tmp652 = result__;
      var tmp624 = mobl.ref(result__);
      subs__.addSub(current.addEventListener('change', function() {
        ui.hasItem(current.get(), items.get(), function(result__) {
          var tmp649 = result__;
          var result__ = current.get() && tmp649;
          var tmp648 = result__;
          var result__ = tmp648;
          tmp624.set(result__);
          
        });
      }));
      subs__.addSub(items.addEventListener('change', function() {
        ui.hasItem(current.get(), items.get(), function(result__) {
          var tmp651 = result__;
          var result__ = current.get() && tmp651;
          var tmp650 = result__;
          var result__ = tmp650;
          tmp624.set(result__);
          
        });
      }));
      
      
      var node292 = $("<span>");
      node291.append(node292);
      var condSubs70 = new mobl.CompSubscription();
      subs__.addSub(condSubs70);
      var oldValue70;
      var renderCond70 = function() {
        var value562 = tmp624.get();
        if(oldValue70 === value562) return;
        oldValue70 = value562;
        var subs__ = condSubs70;
        subs__.unsubscribe();
        node292.empty();
        if(value562) {
          var nodes667 = $("<span>");
          node292.append(nodes667);
          subs__.addSub(detail.addEventListener('change', function() {
            renderControl115();
          }));
          
          function renderControl115() {
            subs__.addSub((detail.get())(current, function(elements, callback) {
              var root860 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root860); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes667;
              nodes667 = node.contents();
              oldNodes.replaceWith(nodes667);
            }));
          }
          renderControl115();
          
          
        } else {
          
          var node293 = $("<div>");
          node293.attr('style', "padding:20px");
          
          
          var node294 = $("<h2>");
          
          
          node294.append("Add more questions.");
          node293.append(node294);
          node292.append(node293);
          
          
          
        }
      };
      renderCond70();
      subs__.addSub(tmp624.addEventListener('change', function() {
        renderCond70();
      }));
      
      node289.append(node291);
      root859.append(node289);
      callback(root859); return subs__;
      
    });
    
    
    
    
  });
  return subs__;
};
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.section = 'ui__section';
ui.logoStyle = 'ui__logoStyle';
