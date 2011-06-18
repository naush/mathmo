mobl.provides('ui');
mobl.provides('mobl.ui');
mobl.provides('mobl.ui.stylemixin');
mobl.provides('mobl');
mobl.provides('ui');
ui.loadingStyle = 'ui__loadingStyle';

ui.whenLoaded = function(value, style, loadingMessage, elements, callback) {
  var root6319 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2290 = $("<span>");
  root6319.append(node2290);
  var condSubs562 = new mobl.CompSubscription();
  subs__.addSub(condSubs562);
  var oldValue562;
  var renderCond562 = function() {
    var value2546 = value.get();
    if(oldValue562 === value2546) return;
    oldValue562 = value2546;
    var subs__ = condSubs562;
    subs__.unsubscribe();
    node2290.empty();
    if(value2546) {
      var nodes4830 = $("<span>");
      node2290.append(nodes4830);
      subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
        renderControl913();
      }));
      
      function renderControl913() {
        subs__.addSub((elements)(function(elements, callback) {
          var root6320 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root6320); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4830;
          nodes4830 = node.contents();
          oldNodes.replaceWith(nodes4830);
        }));
      }
      renderControl913();
      
      
    } else {
      var nodes4831 = $("<span>");
      node2290.append(nodes4831);
      subs__.addSub((mobl.block)(style, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root6321 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var nodes4832 = $("<span>");
        root6321.append(nodes4832);
        subs__.addSub((mobl.label)(loadingMessage, mobl.ref(null), mobl.ref(null), function(_, callback) {
          var root6322 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root6322); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4832;
          nodes4832 = node.contents();
          oldNodes.replaceWith(nodes4832);
        }));
        var nodes4833 = $("<span>");
        root6321.append(nodes4833);
        subs__.addSub((ui.image)(mobl.ref("data:image/gif;base64,R0lGODlhIAAgAOf2AAAAAAEBAQICAgMDAwQEBAUFBQYGBgcHBwgICAkJCQoKCgsLCwwMDA0NDQ4ODg8PDxAQEBERERISEhMTExQUFBUVFRYWFhcXFxgYGBkZGRoaGhsbGxwcHB0dHR4eHh8fHyAgICEhISIiIiMjIyQkJCUlJSYmJicnJygoKCkpKSoqKisrKywsLC0tLS4uLi8vLzAwMDExMTIyMjMzMzQ0NDU1NTY2Njc3Nzg4ODk5OTo6Ojs7Ozw8PD09PT4+Pj8/P0BAQEFBQUJCQkNDQ0REREVFRUZGRkdHR0hISElJSUpKSktLS0xMTE1NTU5OTk9PT1BQUFFRUVJSUlNTU1RUVFVVVVZWVldXV1hYWFlZWVpaWltbW1xcXF1dXV5eXl9fX2BgYGFhYWJiYmNjY2RkZGVlZWZmZmdnZ2hoaGlpaWpqamtra2xsbG1tbW5ubm9vb3BwcHFxcXJycnNzc3R0dHV1dXZ2dnd3d3h4eHl5eXp6ent7e3x8fH19fX5+fn9/f4CAgIGBgYKCgoODg4SEhIWFhYaGhoeHh4iIiImJiYqKiouLi4yMjI2NjY6Ojo+Pj5CQkJGRkZKSkpOTk5SUlJWVlZaWlpeXl5iYmJmZmZqampubm5ycnJ2dnZ6enp+fn6CgoKGhoaKioqOjo6SkpKWlpaampqenp6ioqKmpqaqqqqurq6ysrK2tra6urq+vr7CwsLGxsbKysrOzs7S0tLW1tba2tre3t7i4uLm5ubq6uru7u7y8vL29vb6+vr+/v8DAwMHBwcLCwsPDw8TExMXFxcbGxsfHx8jIyMnJycrKysvLy8zMzM3Nzc7Ozs/Pz9DQ0NHR0dLS0tPT09TU1NXV1dbW1tfX19jY2NnZ2dra2tvb29zc3N3d3d7e3t/f3+Dg4OHh4eLi4uPj4+Tk5OXl5ebm5ufn5+jo6Onp6erq6uvr6+zs7O3t7e7u7u/v7/Dw8PHx8fLy8vPz8/T09PX19f///////////////////////////////////////yH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBQD/ACwAAAAAIAAgAAAI/gABCBxIsKDBgwgTKlzIsKHDhxAjSiSoYc+bCBMFbqCSY4DAApTgyQOUcUGkZcXAeHxQLB49SgI+xnSYAdYxZsjCDHgQLN48NAEEaFAh4oDDA3+EIXO2rAiAN96owQBQ4YVVCg87XBKWLNofAAROlAgAwIPVFxAgmrAkzJgWgxZcvADhESKGKk2MFhTgIAKBhwweNCjAMICBvwoPHMkDCNCYBwoLhFhxIm3CFYEIGUKkiIfCC2dLzDyI4k6e03hqKLQQerTBAkHCgOFCREHkDydGQFYoYAGDBK4RBiX78ACFBsQJBoAAIThDAyVguMBaEIPcEIgbBjBrtQOAAAoSTAgEcXZ3QwEnrLqQAMD6CgdUz1J3yOFFCwwBBqR/ESJoBhUk6OXQABAwQBYBKVhFAnEF1JURAB9YhcGDByHgwQUOUqjhhhx26KGGAQEAIfkEBQUA/wAsBQADABQAGAAACMwA/wkcSDDABg8BCCpc+I+KMmhKGEpcAAsdu1MFJGZwUmOgg14WgS1gqIDQLltZBoJsB0wBwwugbPXSpeXfAlro3LXKONCAQANzYt361QvIPzXZvHlROGGghkSxcgm7IzBGjQESBYpAFMsWlawMLTQx4hOsQAUNFhAwOzBAjTJs2lRhwPYfhDBs3MCRI6NuAilfAn9RUReACCFIisxAUBgAAQQGEtZVaKDp5IEkXjQGAIDDZYIlPg+84EL0PwEOTC/0ILDCZwMZKAhYGBAAIfkEBQUA/wAsBQADABIAFgAACMsA/wkcSBBDnDMQCCokGOBPt295FkpsEKubOFsKFlowAkOAwAi4uo3zxUBhgjupTEXx6GCWyFwCCTgQSOERqVWqpghQsKobuVP/GADSIrCAmU6lWrXa8e8MtWtb/r3pVGPghTyeTsFq8+9ADh3/Aqj5odADHk+lmiwMIXECEbISCRJQkCBAXIIAMBSxYgVIxrv/BuyQQsVKFhOAA9MgwpjIh8T/IKx40SJEAcj/BBQggLlz3Mue/2UIHWBE6H8UWEAGwJq1gr8ERRAMCAAh+QQFBQD/ACwFAAMAFAAWAAAIzgD/CRxI8IKaMA8IKlz47w60aXMYSmRgCpq1VhL/GUhBYiAEVtCu1VrAcEAVSJKSCGyAKiSsBAI3OBho4M2jS5iWCPwEDdsngYSswfogMMAURJA0bbLxLwwyZlf+tXFHLx2QgRTOIJLUSYxGGzcEbqL3jY4EghnMIIpEZOEcaGUYQtBxo8BCBCIUCjBwICPDBC14/IDR169AACBs4NDRI4Phwx1gSIYx4bFABCBUpPBAwHJRz6BDh8bAsLBCAKgBeGCowjCEFSxE/zuAwHJAACH5BAUFAP8ALAYAAwATABgAAAjSAP8JHDiwwhcpDggqXNgGWDE2CyP+W5AJGDJRCRQC2KiAwUYADjwFQ6Zq4UYOZuT4EMhAU7BkpgZqmPBvoxA8gQYF+ZdAUrBllggs+OOsVomNM+DkIYToxb8suX5J+ZemHLt3ZwQ2oBJnDyIrAmXMEGiJHbx3UwZSmNJ1x8I36uKRgkCwwQsXBBYqQHLFgsAABAh8HEwYgMACHlKo+JBXIkEKLyK/iOD4seQXEioPLPBBYIcBmkOLHk1a4oXSnlH/Y4BihWYRCgsY0BxAdejTEQMCACH5BAUFAP8ALAYAAwAVABYAAAjMAP8JHDhwgpUlCwgqXChwzCtaWhhK/KdA0atblhAwBMARQICBDRy9wtVJgUAFLTgQJDBjyYuPCxa9yqVJYwZI1X7JGOihC5o2NwIgGPRqFyOBj76NMxdnYAcrYNjIQfEPSipYTP6d2bb0HJSBCX5cEQMnyb8CLl4IOABKnLl0nyAQfNDjypgYC+eUSwcKw8IEI0YMWAjhypcKAzlO/PvAwD8BGFCg6LD4nwEbNlA4kFtZ4oPOEgWoBD1QRAPSqFOrXs1wA2uKJ14TSB0QACH5BAUFAP8ALAYAAwAWABYAAAjdAP8JHDiwAAsWAggqBMCwYcMlljYVUUiRYoI8m0oFKlDxn0OHC/pwMvUogcAERqI8ENjwwgsOJ/NwOsXowL8LiJxZo0NwgQ8nVFj8OzCHE6o/Ag1Ju7bNFIKBDXIUiaIFxD8jlj5NDOOMabczBAmY2HHEig6BKVb8M2DJ2rZvmFYSTIBiRxITFNlo+5bpQkUDFzIkVPhgyhYKHRMTVPDB778AihV6SMXtGJJ/DFxEHuiGnDZqmxIs0Lz534klQnioeJwhRYrSAxd4BECAAOzbuHPr3r1ZhWPdBRjCDggAIfkEBQUA/wAsBgADABYAFQAACNQAAQgcSFDBAYIIAfxbyJDhCDZoRDScSHEhAS6GIHFJOLDivwNnDEXSc2AhgiBLHEw0YCGCSTOGJAVC8K+CH2DI2jQcQGJGjg//DIQxRIlOAQV8iCVz1qmkyRYwbPzA8C+Hn0U2/mn5hcwZtDANBYh4EUOHin8COoRYuKirNEgqJ5ogq4FimWbTIlXwWEFCAIoOnliZ4LFwwwQeLDBUbJhhh1HVghn5l6BFY4Z13sGDx2tB5csL6dAbfUsBaIYcENGapeP0xAM0XcueTbu27X8hDDAMCAAh+QQFBQD/ACwGAAMAFgAVAAAIywABCBxIsKBBAP8SKlS4AEcOBgsjSkwo4IebPEUmakxoQIobPWgMKORRpEHEAQ0WCDwwxQ2fNwf+TZgDCxeZhQE8uGBRAeETN37IEEgQZ1YuX5EWFlDx4kWLB/9aoLnj4l8UV7h8CdMisekLDv8CYABb4M8tX8MMmZzogoLELr2IHXI7kQJUiQ2SQJGwsa/CDhUSAgjsN+EGTsx6MfmHgEXhhHDMnTtXS0Hjx//gsNtsK6EFFI83eDImawlmpXdPq17NurXrfx8KKAwIACH5BAUFAP8ALAYABAAXABMAAAjSAP8JHDhQAIYMAQgq/AegoUOHJaJoUbGwokICO6iEiTJA4IEWPhgsDKAggcACPKiM2WLgXwQznExtGegQw78VAgngoFJmygAEZD6dakWoZUETCkNAAYMUySZTrWJNodnww0IJFwIQiFOq1aw9Ii3+k7BwCitafMiKtchgiJIIa+P+Q8CBRAWjcgeGmBQsGa9HEg7gzNtnGzdu3bQZMTBY7h1xkMVxOwKAwom8HDD98uVLDgKBHfP+c0A6tOgdUhyIXijk0SYKqxXGEPMi9sIKBAMCACH5BAUFAP8ALAYABAAYABUAAAjRAAEIHEhQAQKCCAf+W8iQoYUZPDA0nEix4YATOIzsELDQQIkQHCsmMLBwQAocSIwQ+OcAC6JENipaaKGiJEYlQAQYqKJIUqYwBCsutGDjiId/PQxFyuQpidCGAhlEWBgGUiZQbhY8fZoEUyg4U7cKVcBjyAOxaP9pEBECQtqJJRzR4tXL04u3CwPwaebsGTRokgoQQPHWj7XDhyWtnPD2Q6RatWg5IoyXYYPLBSoniBKl8kQx7tqV8szwhq5675yQXnhkWD0zqxcaKdQhdkmKAQEAIfkEBQUA/wAsBgAEABgAFQAACNgA/wkcSLAAAYIIEyZ8kOIEA4UQCQoo8QJGiQACBSQwAKCjR48FCJ6o2ELAvwVBylB5mDBCCoQvYrD4V8DInD2CXiQMMCIhixcU/sl4o2cQIRMRBWoQqGABgAFQ8gxS5CVkUggJewhiJMZB0ogJaOho8LXsAQwfPjwYOKGsQBGCSrFyJWnFPwIo3P6b4+sXMGDBDh3U+88OMmTHDiMSiNVtB0SrVKUqhJQwQgaD9SJw4oSsZYEB8pwr96nt5wGk4rU7t+SzQDfw4rkT4/rkIGudagsksOFAwoAAIfkEBQUA/wAsBwAEABYAFQAACMIA/wkcODBAAIIIExJkICLEAYUQBQYI8eLFBgAYAQTIiDFixRICDaz4geIgQQcJK44IQIBGFjFhIiAEMRDlPxYsIPwjUSXMGjUTEHYYmEEgAgX/AuwAs2bOEwIRFcZQU2cKg6gKD6RgsQBrVAMVOGxo8E+n138e6lDa1InQibMC0bBq5eoVrD1w/7G5xZdvn7wb/Hjq1GnPiLz/CDBYjFiJEsQD63TTdkkC5E/oyHFDAnkNusxeIP/78wwVSNEaEiAMCAAh+QQFBQD/ACwIAAQAFgAXAAAIzQD/CRw4EIDBgwgPEhy4IMSHhRAj/gNRMGFCiQsHYCgB4SJGgQJC8DiSQwBBAB4+XtBhBMqSAws5SDRYoggULTkCLDxQAiOIJ1yEKPgYccCHEQmIfiwgAQMGBEoJajATCFEiNyKiCuSCKdMmTpzcDNAaplQpUmbhjI2KYc6jR47ePNQqcMGCoVohXJnigO5AOtWeObKgNUKAA6i6YZvGiEHUR0z+ufHWLRu0IVERrSrw7xG4yl2iltn8T8KhZ7ZWRKVSZmCBEhi0ZsCLMSAAIfkEBQUA/wAsCQAEABUAFwAACNgAAQgcSLCgwX8IEx7woKFAwocQIX5AmCGiRQIWEQp4QAHjwwYnUmT818EFjA8BRkas8AJGDRcCHmpQ6cGlDxEFDai0UAMIDIcqIQqokEFn0IwEHkxoYPToPwtV2Mh5s6WC039OBA0qZOiQEgBOqUAaO7YJ2KMVzPzx4yfMhKv/BiSYO8ApBStMGsBF+AZZsEEUggqYUeLfgn/QlBET5EClCGXXlPxLMw3aMmJeVLpIJs/UPwWHqEFjZunAyBrU5CWsEGmaMzSas8FjkxACkyV6R0KYoyb3yIAAIfkEBQUA/wAsCQAFABQAFgAACMsA/wkcaADDBQIDEypcyHDhgIYDGzQQkHCBCRQQ/7lwcQGARwAcMv57QXJEgIEZRJJ8UUGkQpIgHrocCCECwpkKByx4kMDjTAdArGyxIoOiwI9IP/JIs6aNmzMRZv7IQzXPmwkzIVxxA8eMjJM4ESw44DOjBCdFGOAUeAYXrDsSMiKwQeKfgk7BdNGy06BhgD3mnh35J6ZYsF20rDSEoAxeuk//EvwxFoyXIgMML0iDp46UwAmIiv0C03DAJsdoBj44YkRtQw90zogMCAAh+QQFBQD/ACwIAAUAFQAWAAAIswD/CRz4rwDBgwgPekjIsKHAAAoUAJg40eHADf9YRLAoUMWDgx8oAmB44ADHkyhTohSAQIEBlQha9BCyw8LIkyqeRJlCZcgAlDLACAVzhECJkw2QZMHSBAMAASsPGPh5MoKRHgpU/utiipMaCBxpiPiXABIsVKHSLHB4p1uxIf+20IKVKlQTh8TOfbsksE4tWKr4NLTA7Bw4TgIl9Jnl6opDS+e8jRnoAAeQtQ07vBHDwGFAACH5BAUFAP8ALAkABQAUABgAAAjRAP8JHCiwwgCCCP8BWMiQQ8KHEBEmMBAxYgsVDipGdKixY0cXHhNmDJkwgAEDAkgaCLGChQgEITnQqHEDxwcAHkcU2VmEBM6OCWwQGSIjAcl/BQqk7OiABw2jD2XoYMhwSqRDW0YKpCBwTiOBOmAMQCCI06RFWxQgvAKtyz851IYh+SdFFKdKjYIQdNFJD4IHvLZJSyQAgZpRnCydOSgQQYaDH55xm/bvwD8IcUBtagJRQzJu1DhZ/sdARg61Dx/Y4latz1Eqw2jhOBqAwwWNAQEAIfkEBQUA/wAsCQAFABMAGAAACMwA/wkc+O8CBYIIExK8oLChwgMOHbJAoSDivxQJNVgsYLGjx48fCQQAKTDFBwIeM7xY+QJCShgwXzzwaIBEixUfBnwMMGDAyIEjECRM8EIFRIIl1jxDk9BIHjhKFgy0cEecPEn/DtxoIeCAHEN96CwR+k/LuXnptPxjc6yWkH9IHBnyY8eGQBzIqtn550CWs2F+snZxdOgPEwAACnIQiMGXs2KQDPD9osiPDIUXejkzNklyVhUjBCikgMvZMUUoOw44tPkKSA1jrkhtGBAAIfkEBQUA/wAsCQAFABMAGAAACMMA/wkc+K/CBIIIEypcyHCgAQINFa4wgSCiQgsWE0LIyLGjRwAAPP7TIECkCwcZLbxY6aJBxgIfTpioEKCjAAEg/4UgU0ThARIfChD0sGueOTIJc4SxgqOiQDXy3qlrJHBGin8EtLwhs8UGxH+K3q0DZ+VfGVyldvzzceeNGS4cBNoI1kyOQFO/ZMkJYOBJWzMhBlrQINBCrF+0BAlUoAQNEgUXD9cyNHBAgwEgQxKUsOqXLT8DOPb5VetJRwxcoEBeGBAAIfkEBQUA/wAsCQAHABMAFgAACLcA/wkcSPAfAAAFBhRcWFCDChIHGEqcSLGixYsYM2q8EEDjPxYRNa4IibGEBAAeB4IQM4TkwAEYKCgc2KHWum5gFqoosoNEgYFz1JkDZ+ifARck/gUYUiXJjxEd/x0yF65alH9dTk2i8S/GlypLfCgQSCPXMDYHGGRq9YnMvwJAvFQhkmBghQwCKYxqFWrOTwQugoA4iJIgBVGtRtkpQFgA4cIDI3RqRQoORgFzEh/JaGEKkroSAwIAIfkEBQUA/wAsBwAHABUAFgAACMwA/wkcSLDgPwEGEyYUYUChw4EQHj58ILGixYsYMxYYWAEAxgsDVRhg0UOIE5AWRdoYdStRA4sjBjaosNFigIIfzERRYFDAhAkJR7gKZ02MQQ4wXoQoiGEUOG3T/vwrgOJDgAAwcsR4sQGA139ivmmrlswKgCmU/rD4R4KIVhQDBv7ZZs1ZnX8LFGVSVOXfgBdDcpRAKFAGrF9sXkqYpImRGAL/DIQIsaAghQ6Q/0mIpMlRGQJeQ4dO+KCRpkdgMv4Lc7qHaghFdiBwGBAAIfkEBQUA/wAsBgAOABYADwAACLwA/1lYkeKfwYMIE/6bIFCVLUqAVCic+A8FAQzO6NGLx4WiwhMD/lHx1WwSBI8JHyCkgLLlvw5gmrhUGKIUtWRbFGJ48WKihU3TmhWrY1CEhn8ARPB8kQFhADnSmhnT9eRfkj9pRvy7sLSEgIMKUDU79kuMAQV5CMkh8k9ABxcvOACY+2+AnmPB4ij4BwEQoTpPQgp4MIFASiNEGBh84IfQnSghZxpMYIcQHiUBJB9EEkiOCc0HDZj4kJliQAAh+QQFBQD/ACwGAAcAFgAWAAAIzAD/CRxIsOA/AgYHkkg4EAMKhhAjSpxIsaLFgRUsDLj4L0AVZtEyYagYQeCyeCivVDwx4AIyduzUaalYQsC/KLeKOeIokMEEngQ5aEGSwGAACBBsGvywyViuKQldMKwQiVgvWmoOYvj5LwRENcN62UJ15F+PM1E0/LMwUEQAgpx63XKVpQACM2uyyADwj8O/FhUICohzC5aZohHesNmyQ6kDBm8JOgDiY4FAB2vYdOmhtOIBLmy+wABAurTp06U/TBFSkiFq0wUEvC4dEAAh+QQFBQD/ACwGAA0AFgAQAAAIsAD//aNQQaDBgwgRSjG2rNKFhBBPQPhXgRi6dOmoQIRYQoCFX+LEgbuysWQTV7wOPSjJUgLLl/8yTAmCACbCDo5qoVrCkgDCCYVosQrl5d8ACQwAADhoAWEYWaxGVfLxL0aTGysPdlC6NIEjVqQ0Ofl3IEqUHiAMtmAx8aAZUpuw1HSQJQoQEwEELlDAdem/BjlqGBCoYIoUIXhtGgywQ8oQDYoPMlDhYUDJvpgzaw4IACH5BAUFAP8ALAUACQAWABMAAAjDAP8J/FekxsCDCBMK3CPJoMKHA0PkgjQDokUQYjRYRGhgwoV/BzYivPBIGLJilyyIFOjACzdu3bx9C7NSoBZrOK1V61JzBIZFuHLJIkRhpYgF/wpYwDCBQE2FF5boCPn0n4ZAoigFqRoBTyhMjKD8E8AgAUQAaK98wuQIEI1/I2iscIBQ40AEfzBBKjSEQIEdNmCECCCQBQqkB7VAMrQkJIIegUsIDHCgQMIFMlpYToojsIiqAkPQaAEB9NgHDNCqXh0QACH5BAUFAP8ALAQABwAYABUAAAjaAP8JHNigwMCDCBMOxIHrjMKHCRvRc4YEosV/f+LR+8Th4kMQu+J9m+Hx4YczTAyWHCjBAoWVCHdgutVrF6QLKxv8U/Dp2TNo0aS5WTkiQIJLyJImDbNSRIB/NS6tYlVKD86SCgYqqGAhAkyIFITMMPB14IU4jfzYKPvvQZpFguoE+Rcgq0AQLBUyUSToDhoV/zC4GFhhYIaEBMoIytPGxoABKF68MLziRIKBADID8FGHTQ+DBVRIJvEvM9mHBDxwGCBwwAnJHzTLnk07s4UVKBhArD3bgMqHAQEAIfkEBQUA/wAsBAAHABUAFQAACLYA/wkc+MBCgIEIEya08c8ZmwEDFEoUiIgdPHRIJk7Uk65dPEAaJX6glY7clJASPYxJgnJggQgVJBhoOfBGo1WxXh2yQDPBpF/AggkjZoYmgkW3buFKqoXmvxiJNnGq9KaC038JJlB4cFVhBBwqCnSdAMbOGRVXE1yhk2YLjJAREMKQk8aLkw0hLwDYC+BFGjBUVgj4d4ImAyJMUhBoyXcvgQMHBZoQqKHrPwgmSiSw/G/AYIUBAQAh+QQFBQD/ACwEAAcAFwAVAAAIswD/CRwoocLAgwgTDsx1LI3ChwcFiTsHzghEiHS8jUPH5+LDDqu8bYPi8aMXiyUPQpgQISVCGYE6jRLFR4LLBQgKuXIFK5YsKi5FHOhTqmjRKC4FrtCjSBEhMTaT/kMAIYKDAVITOmgRQkDWfxCadGGyIeuAIVueAAFx8UHCC1WeDKER9SGFhBSYFMHBIcBDFSQOJBQQYsUFrA8LIP4HoLHjAI4FjPh6kMEIDwYo/wvg92FAACH5BAUFAP8ALAQABQAVABcAAAjRAP8JHEjw34YpFAQUXJihQwCBAR7dirGwIJBdxMgM+PcgWS0ZFQcGMGRNWzUz/yAgWxWSoJxo1rhdQ/JPDqeWAzeQinbNm6F/BDrgHJhiVLRpYIYu3MBlygGlQB1EeFAAqsAWdBpJkhQnAtQDdjRt4uTp0xKoBtpAWrv2iNUSau7ciUMFgtV/Bxw8WKDwLsEFHyo8vKsgh5AZFO4KaPGDBgyhVhfkcOzCb4EVMFxgwPmhAIDPnxlkoPCQQIqKD0GrBh0ghF+CCDxALri6tm3QAQEAIfkEAQUA/wAsBAAFABUAFgAACMYA/wkcSPCfhjVZGBQsaIFKjgEDF8V7N2fhwAOBlhUDM3BYPHqKLAqUgOpYs2Rh/j0IFm9eGZH/BOQRhuzZsiL/3nh7BgPmvw6XhCWL9kfgCQ4BfP4zYUmYMS1KF2Ko0iTqQAYPHFgdWOHLHkCAxjywGiAKoUKHECkKQtZJnrdveWylwCRMGC5EGmyNuYBBgr0LD1DQC9hACRguAAfwAOPFC8ADTjiOCoGggBAvWkQlUNAABYVRAYgeTRrAB4EYAAvkcAFiwYAAOw=="), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref(null), mobl.ref("middle"), mobl.ref(null), function(_, callback) {
          var root6323 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root6323); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4833;
          nodes4833 = node.contents();
          oldNodes.replaceWith(nodes4833);
        }));
        callback(root6321); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes4831;
        nodes4831 = node.contents();
        oldNodes.replaceWith(nodes4831);
      }));
      
      
    }
  };
  renderCond562();
  subs__.addSub(value.addEventListener('change', function() {
    renderCond562();
  }));
  
  callback(root6319); return subs__;
  
  return subs__;
};
ui.headerStyle = 'ui__headerStyle';
ui.headerContainerStyle = 'ui__headerContainerStyle';
ui.headerTextStyle = 'ui__headerTextStyle';

ui.header = function(text, fixedPosition, onclick, elements, callback) {
  var root6324 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2291 = $("<div>");
  
  var ref2245 = mobl.ref(ui.headerStyle);
  if(ref2245.get() !== null) {
    node2291.attr('class', ref2245.get());
    subs__.addSub(ref2245.addEventListener('change', function(_, ref, val) {
      node2291.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2245.rebind());
  
  var val1143 = onclick.get();
  if(val1143 !== null) {
    subs__.addSub(mobl.domBind(node2291, 'tap', val1143));
  }
  
  var ref2246 = mobl.ref(fixedPosition.get() ? "position:fixed;" : null);
  if(ref2246.get() !== null) {
    node2291.attr('style', ref2246.get());
    subs__.addSub(ref2246.addEventListener('change', function(_, ref, val) {
      node2291.attr('style', val);
    }));
    subs__.addSub(fixedPosition.addEventListener('change', function() {
      node2291.attr('style', fixedPosition.get() ? "position:fixed;" : null);
    }));
    
  }
  subs__.addSub(ref2246.rebind());
  
  
  var node2294 = $("<div>");
  
  var ref2244 = mobl.ref(ui.headerContainerStyle);
  if(ref2244.get() !== null) {
    node2294.attr('class', ref2244.get());
    subs__.addSub(ref2244.addEventListener('change', function(_, ref, val) {
      node2294.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2244.rebind());
  
  
  var node2295 = $("<div>");
  
  var ref2242 = text;
  node2295.text(""+ref2242.get());
  var ignore441 = false;
  subs__.addSub(ref2242.addEventListener('change', function(_, ref, val) {
    if(ignore441) return;
    node2295.text(""+val);
  }));
  subs__.addSub(ref2242.rebind());
  
  
  var ref2243 = mobl.ref(ui.headerTextStyle);
  if(ref2243.get() !== null) {
    node2295.attr('class', ref2243.get());
    subs__.addSub(ref2243.addEventListener('change', function(_, ref, val) {
      node2295.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2243.rebind());
  
  node2294.append(node2295);
  node2291.append(node2294);
  var nodes4834 = $("<span>");
  node2291.append(nodes4834);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl914();
  }));
  
  function renderControl914() {
    subs__.addSub((elements)(function(elements, callback) {
      var root6325 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6325); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4834;
      nodes4834 = node.contents();
      oldNodes.replaceWith(nodes4834);
    }));
  }
  renderControl914();
  root6324.append(node2291);
  
  var node2292 = $("<span>");
  root6324.append(node2292);
  var condSubs563 = new mobl.CompSubscription();
  subs__.addSub(condSubs563);
  var oldValue563;
  var renderCond563 = function() {
    var value2547 = fixedPosition.get();
    if(oldValue563 === value2547) return;
    oldValue563 = value2547;
    var subs__ = condSubs563;
    subs__.unsubscribe();
    node2292.empty();
    if(value2547) {
      
      var node2293 = $("<div>");
      node2293.attr('id', "hello");
      node2293.attr('style', "height: 2.9em;");
      
      node2292.append(node2293);
      
      
    } else {
      
    }
  };
  renderCond563();
  subs__.addSub(fixedPosition.addEventListener('change', function() {
    renderCond563();
  }));
  
  callback(root6324); return subs__;
  
  
  
  
  
  return subs__;
};
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.button = function(text, style, pushedStyle, onclick, elements, callback) {
  var root6326 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var sp = $("<span>");
  
  var ref2247 = mobl.ref(pushed.get() ? pushedStyle.get() : style.get());
  if(ref2247.get() !== null) {
    sp.attr('class', ref2247.get());
    subs__.addSub(ref2247.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref2247.rebind());
  
  var val1144 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = event.preventDefault();
                var result__ = true;
                pushed.set(result__);
                if(callback && callback.apply) callback(); return;
              };
  if(val1144 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdown', val1144));
  }
  
  var val1145 = function(event, callback) {
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
  if(val1145 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchdrag', val1145));
  }
  
  var val1146 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = pushed.get();
                if(result__) {
                  var result__ = false;
                  pushed.set(result__);
                  function after351(result__) {
                    var tmp4466 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onclick.get()(event, after351);if(result__ !== undefined) after351(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1146 !== null) {
    subs__.addSub(mobl.domBind(sp, 'touchup', val1146));
  }
  
  var val1147 = function(event, callback) {
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
  if(val1147 !== null) {
    subs__.addSub(mobl.domBind(sp, 'mouseout', val1147));
  }
  
  var ref2248 = text;
  sp.text(""+ref2248.get());
  var ignore442 = false;
  subs__.addSub(ref2248.addEventListener('change', function(_, ref, val) {
    if(ignore442) return;
    sp.text(""+val);
  }));
  subs__.addSub(ref2248.rebind());
  
  
  root6326.append(sp);
  callback(root6326); return subs__;
  
  return subs__;
};
ui.sideButtonStyle = 'ui__sideButtonStyle';
ui.sideButtonPushedStyle = 'ui__sideButtonPushedStyle';

ui.sideButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root6327 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes4835 = $("<span>");
  root6327.append(nodes4835);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root6328 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6328); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4835;
    nodes4835 = node.contents();
    oldNodes.replaceWith(nodes4835);
  }));
  callback(root6327); return subs__;
  
  return subs__;
};
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';
ui.backButtonStyle = 'ui__backButtonStyle';
ui.backButtonPushedStyle = 'ui__backButtonPushedStyle';

ui.backButton = function(text, style, pushedStyle, onclick, elements, callback) {
  var root6329 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes4836 = $("<span>");
  root6329.append(nodes4836);
  subs__.addSub((ui.button)(text, style, pushedStyle, onclick, function(_, callback) {
    var root6330 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6330); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4836;
    nodes4836 = node.contents();
    oldNodes.replaceWith(nodes4836);
  }));
  callback(root6329); return subs__;
  
  return subs__;
};
ui.groupStyle = 'ui__groupStyle';

ui.group = function(elements, callback) {
  var root6331 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2296 = $("<ul>");
  
  var ref2249 = mobl.ref(ui.groupStyle);
  if(ref2249.get() !== null) {
    node2296.attr('class', ref2249.get());
    subs__.addSub(ref2249.addEventListener('change', function(_, ref, val) {
      node2296.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2249.rebind());
  
  var nodes4837 = $("<span>");
  node2296.append(nodes4837);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl915();
  }));
  
  function renderControl915() {
    subs__.addSub((elements)(function(elements, callback) {
      var root6332 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6332); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4837;
      nodes4837 = node.contents();
      oldNodes.replaceWith(nodes4837);
    }));
  }
  renderControl915();
  root6331.append(node2296);
  callback(root6331); return subs__;
  
  
  return subs__;
};

ui.image = function(url, width, height, onclick, style, valign, align, elements, callback) {
  var root6333 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2297 = $("<img>");
  
  var ref2250 = url;
  if(ref2250.get() !== null) {
    node2297.attr('src', ref2250.get());
    subs__.addSub(ref2250.addEventListener('change', function(_, ref, val) {
      node2297.attr('src', val);
    }));
    
  }
  subs__.addSub(ref2250.rebind());
  
  var ref2251 = width;
  if(ref2251.get() !== null) {
    node2297.attr('width', ref2251.get());
    subs__.addSub(ref2251.addEventListener('change', function(_, ref, val) {
      node2297.attr('width', val);
    }));
    
  }
  subs__.addSub(ref2251.rebind());
  
  var ref2252 = height;
  if(ref2252.get() !== null) {
    node2297.attr('height', ref2252.get());
    subs__.addSub(ref2252.addEventListener('change', function(_, ref, val) {
      node2297.attr('height', val);
    }));
    
  }
  subs__.addSub(ref2252.rebind());
  
  var ref2253 = style;
  if(ref2253.get() !== null) {
    node2297.attr('class', ref2253.get());
    subs__.addSub(ref2253.addEventListener('change', function(_, ref, val) {
      node2297.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2253.rebind());
  
  var val1148 = onclick.get();
  if(val1148 !== null) {
    subs__.addSub(mobl.domBind(node2297, 'tap', val1148));
  }
  
  var ref2254 = valign;
  if(ref2254.get() !== null) {
    node2297.attr('valign', ref2254.get());
    subs__.addSub(ref2254.addEventListener('change', function(_, ref, val) {
      node2297.attr('valign', val);
    }));
    
  }
  subs__.addSub(ref2254.rebind());
  
  var ref2255 = align;
  if(ref2255.get() !== null) {
    node2297.attr('align', ref2255.get());
    subs__.addSub(ref2255.addEventListener('change', function(_, ref, val) {
      node2297.attr('align', val);
    }));
    
  }
  subs__.addSub(ref2255.rebind());
  
  root6333.append(node2297);
  callback(root6333); return subs__;
  
  return subs__;
};
ui.itemStyle = 'ui__itemStyle';
ui.itemPushedStyle = 'ui__itemPushedStyle';
ui.itemArrowStyle = 'ui__itemArrowStyle';
ui.itemDownArrowStyle = 'ui__itemDownArrowStyle';

ui.item = function(style, pushedStyle, onclick, onswipe, hideArrow, elements, callback) {
  var root6334 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var pushed = mobl.ref(false);
  
  var el = $("<li>");
  
  var ref2256 = mobl.ref(ui.itemStyle);
  if(ref2256.get() !== null) {
    el.attr('class', ref2256.get());
    subs__.addSub(ref2256.addEventListener('change', function(_, ref, val) {
      el.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2256.rebind());
  
  var ref2257 = mobl.ref(onclick.get() && hideArrow.get() == false ? mobl.mergeStyles([pushed.get() ? pushedStyle.get() : style.get(), ui.itemArrowStyle]) : (pushed.get() ? pushedStyle.get() : style.get()));
  if(ref2257.get() !== null) {
    el.attr('class', ref2257.get());
    subs__.addSub(ref2257.addEventListener('change', function(_, ref, val) {
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
  subs__.addSub(ref2257.rebind());
  
  var val1149 = onswipe.get();
  if(val1149 !== null) {
    subs__.addSub(mobl.domBind(el, 'swipe', val1149));
  }
  
  var val1150 = onclick.get() ? function(event, callback) {
                                         if(event && event.stopPropagation) event.stopPropagation();
                                         var result__ = true;
                                         pushed.set(result__);
                                         mobl.sleep(100, function(result__) {
                                           var tmp4467 = result__;
                                           function after352(result__) {
                                             var tmp4468 = result__;
                                             
                                           }
                                           var result__ = onclick.get()(event, after352);if(result__ !== undefined) after352(result__);
                                           mobl.sleep(200, function(result__) {
                                             var tmp4469 = result__;
                                             var result__ = false;
                                             pushed.set(result__);
                                             if(callback && callback.apply) callback(); return;
                                           });
                                           
                                         });
                                       } : null;
  if(val1150 !== null) {
    subs__.addSub(mobl.domBind(el, 'tap', val1150));
  }
  
  var nodes4838 = $("<span>");
  el.append(nodes4838);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl916();
  }));
  
  function renderControl916() {
    subs__.addSub((elements)(function(elements, callback) {
      var root6335 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6335); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4838;
      nodes4838 = node.contents();
      oldNodes.replaceWith(nodes4838);
    }));
  }
  renderControl916();
  root6334.append(el);
  callback(root6334); return subs__;
  
  
  return subs__;
};

ui.checkBox = function(b, label, onchange, elements, callback) {
  var root6336 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2298 = $("<input>");
  node2298.attr('type', "checkbox");
  
  var ref2259 = b;
  node2298.attr('checked', !!ref2259.get());
  subs__.addSub(ref2259.addEventListener('change', function(_, ref, val) {
    if(ref === ref2259) node2298.attr('checked', !!val);
  }));
  subs__.addSub(mobl.domBind(node2298, 'change', function() {
    b.set(!!node2298.attr('checked'));
  }));
  
  var val1152 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                if(callback && callback.apply) callback(); return;
              };
  if(val1152 !== null) {
    subs__.addSub(mobl.domBind(node2298, 'tap', val1152));
  }
  
  var val1153 = onchange.get();
  if(val1153 !== null) {
    subs__.addSub(mobl.domBind(node2298, 'change', val1153));
  }
  
  root6336.append(node2298);
  
  root6336.append(" ");
  
  var node2299 = $("<span>");
  
  var ref2258 = label;
  node2299.text(""+ref2258.get());
  var ignore443 = false;
  subs__.addSub(ref2258.addEventListener('change', function(_, ref, val) {
    if(ignore443) return;
    node2299.text(""+val);
  }));
  subs__.addSub(ref2258.rebind());
  
  
  var val1151 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = !b.get();
                b.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after353(result__) {
                    var tmp4470 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(null, after353);if(result__ !== undefined) after353(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1151 !== null) {
    subs__.addSub(mobl.domBind(node2299, 'tap', val1151));
  }
  
  root6336.append(node2299);
  callback(root6336); return subs__;
  
  
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
  var root6337 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2300 = $("<span>");
  root6337.append(node2300);
  var condSubs564 = new mobl.CompSubscription();
  subs__.addSub(condSubs564);
  var oldValue564;
  var renderCond564 = function() {
    var value2548 = label.get();
    if(oldValue564 === value2548) return;
    oldValue564 = value2548;
    var subs__ = condSubs564;
    subs__.unsubscribe();
    node2300.empty();
    if(value2548) {
      var nodes4839 = $("<span>");
      node2300.append(nodes4839);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root6338 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root6338); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4839;
        nodes4839 = node.contents();
        oldNodes.replaceWith(nodes4839);
      }));
      
      
    } else {
      
    }
  };
  renderCond564();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond564();
  }));
  
  
  var node2301 = $("<span>");
  root6337.append(node2301);
  var condSubs565 = new mobl.CompSubscription();
  subs__.addSub(condSubs565);
  var oldValue565;
  var renderCond565 = function() {
    var value2549 = validator.get();
    if(oldValue565 === value2549) return;
    oldValue565 = value2549;
    var subs__ = condSubs565;
    subs__.unsubscribe();
    node2301.empty();
    if(value2549) {
      
      var temp = mobl.ref(s.get());
      
      var identifier = mobl.ref(mobl.random(999));
      function after357(result__) {
        var tmp4471 = result__;
        var validationMessage = mobl.ref(result__);
        mobl.sleep(200, function(result__) {
          var tmp4472 = result__;
          var result__ = mobl.setValidationError(identifier.get(), !validationMessage.get());
          
        });
        
        var node2302 = $("<input>");
        
        var ref2260 = inputType;
        if(ref2260.get() !== null) {
          node2302.attr('type', ref2260.get());
          subs__.addSub(ref2260.addEventListener('change', function(_, ref, val) {
            node2302.attr('type', val);
          }));
          
        }
        subs__.addSub(ref2260.rebind());
        
        var ref2261 = mobl.ref(validationMessage.get() ? invalidStyle.get() : style.get());
        if(ref2261.get() !== null) {
          node2302.attr('class', ref2261.get());
          subs__.addSub(ref2261.addEventListener('change', function(_, ref, val) {
            node2302.attr('class', val);
          }));
          subs__.addSub(validationMessage.addEventListener('change', function() {
            node2302.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(invalidStyle.addEventListener('change', function() {
            node2302.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          subs__.addSub(style.addEventListener('change', function() {
            node2302.attr('class', validationMessage.get() ? invalidStyle.get() : style.get());
          }));
          
        }
        subs__.addSub(ref2261.rebind());
        
        var ref2262 = placeholder;
        if(ref2262.get() !== null) {
          node2302.attr('placeholder', ref2262.get());
          subs__.addSub(ref2262.addEventListener('change', function(_, ref, val) {
            node2302.attr('placeholder', val);
          }));
          
        }
        subs__.addSub(ref2262.rebind());
        
        var ref2263 = temp;
        node2302.val(""+ref2263.get());
        var ignore444 = false;
        subs__.addSub(ref2263.addEventListener('change', function(_, ref, val) {
          if(ignore444) return;
          node2302.val(""+val);
        }));
        subs__.addSub(ref2263.rebind());
        
        subs__.addSub(mobl.domBind(node2302, 'keyup change', function() {
          ignore444 = true;
          temp.set(mobl.stringTomobl__String(node2302.val()));
          ignore444 = false;
        }));
        
        
        var val1154 = onchange.get();
        if(val1154 !== null) {
          subs__.addSub(mobl.domBind(node2302, 'change', val1154));
        }
        
        var val1155 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = onkeyup.get();
                      if(result__) {
                        function after354(result__) {
                          var tmp4473 = result__;
                          function after355(result__) {
                            var tmp4474 = result__;
                            var result__ = tmp4474;
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
                          var result__ = validator.get()(temp.get(), after355);if(result__ !== undefined) after355(result__);
                        }
                        var result__ = onkeyup.get()(event, after354);if(result__ !== undefined) after354(result__);
                      } else {
                        {
                          function after356(result__) {
                            var tmp4474 = result__;
                            var result__ = tmp4474;
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
                          var result__ = validator.get()(temp.get(), after356);if(result__ !== undefined) after356(result__);
                        }
                      }
                    };
        if(val1155 !== null) {
          subs__.addSub(mobl.domBind(node2302, 'keyup', val1155));
        }
        
        var val1156 = function(event, callback) {
                      if(event && event.stopPropagation) event.stopPropagation();
                      var result__ = ui.scrollUp();
                      if(callback && callback.apply) callback(); return;
                    };
        if(val1156 !== null) {
          subs__.addSub(mobl.domBind(node2302, 'blur', val1156));
        }
        
        node2301.append(node2302);
        var nodes4840 = $("<span>");
        node2301.append(nodes4840);
        subs__.addSub((mobl.label)(validationMessage, mobl.ref(ui.validationMessageStyle), mobl.ref(null), function(_, callback) {
          var root6339 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root6339); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4840;
          nodes4840 = node.contents();
          oldNodes.replaceWith(nodes4840);
        }));
        
        
        
        
      }
      var result__ = validator.get()(s.get(), after357);if(result__ !== undefined) after357(result__);
    } else {
      
      var node2303 = $("<input>");
      
      var ref2264 = inputType;
      if(ref2264.get() !== null) {
        node2303.attr('type', ref2264.get());
        subs__.addSub(ref2264.addEventListener('change', function(_, ref, val) {
          node2303.attr('type', val);
        }));
        
      }
      subs__.addSub(ref2264.rebind());
      
      var ref2265 = style;
      if(ref2265.get() !== null) {
        node2303.attr('class', ref2265.get());
        subs__.addSub(ref2265.addEventListener('change', function(_, ref, val) {
          node2303.attr('class', val);
        }));
        
      }
      subs__.addSub(ref2265.rebind());
      
      var ref2266 = placeholder;
      if(ref2266.get() !== null) {
        node2303.attr('placeholder', ref2266.get());
        subs__.addSub(ref2266.addEventListener('change', function(_, ref, val) {
          node2303.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref2266.rebind());
      
      var ref2267 = s;
      node2303.val(""+ref2267.get());
      var ignore445 = false;
      subs__.addSub(ref2267.addEventListener('change', function(_, ref, val) {
        if(ignore445) return;
        node2303.val(""+val);
      }));
      subs__.addSub(ref2267.rebind());
      
      subs__.addSub(mobl.domBind(node2303, 'keyup change', function() {
        ignore445 = true;
        s.set(mobl.stringTomobl__String(node2303.val()));
        ignore445 = false;
      }));
      
      
      var val1157 = onchange.get();
      if(val1157 !== null) {
        subs__.addSub(mobl.domBind(node2303, 'change', val1157));
      }
      
      var val1158 = onkeyup.get();
      if(val1158 !== null) {
        subs__.addSub(mobl.domBind(node2303, 'keyup', val1158));
      }
      
      var val1159 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1159 !== null) {
        subs__.addSub(mobl.domBind(node2303, 'blur', val1159));
      }
      
      node2301.append(node2303);
      
      
    }
  };
  renderCond565();
  subs__.addSub(validator.addEventListener('change', function() {
    renderCond565();
  }));
  
  callback(root6337); return subs__;
  
  
  return subs__;
};

ui.emailField = function(s, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root6340 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes4841 = $("<span>");
  root6340.append(nodes4841);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("email"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root6341 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6341); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4841;
    nodes4841 = node.contents();
    oldNodes.replaceWith(nodes4841);
  }));
  callback(root6340); return subs__;
  
  return subs__;
};

ui.telField = function(phoneNumber, placeholder, label, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root6342 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes4842 = $("<span>");
  root6342.append(nodes4842);
  subs__.addSub((ui.textField)(phoneNumber, placeholder, label, mobl.ref("tel"), validator, style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root6343 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6343); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4842;
    nodes4842 = node.contents();
    oldNodes.replaceWith(nodes4842);
  }));
  callback(root6342); return subs__;
  
  return subs__;
};

ui.rangeField = function(n, min, max, step, placeholder, label, onchange, onkeyup, elements, callback) {
  var root6344 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2304 = $("<span>");
  root6344.append(node2304);
  var condSubs566 = new mobl.CompSubscription();
  subs__.addSub(condSubs566);
  var oldValue566;
  var renderCond566 = function() {
    var value2550 = label.get();
    if(oldValue566 === value2550) return;
    oldValue566 = value2550;
    var subs__ = condSubs566;
    subs__.unsubscribe();
    node2304.empty();
    if(value2550) {
      var nodes4843 = $("<span>");
      node2304.append(nodes4843);
      subs__.addSub((mobl.label)(label, mobl.ref(ui.textFieldLabelStyle), mobl.ref(null), function(_, callback) {
        var root6345 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root6345); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4843;
        nodes4843 = node.contents();
        oldNodes.replaceWith(nodes4843);
      }));
      
      
    } else {
      
    }
  };
  renderCond566();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond566();
  }));
  
  
  var node2305 = $("<input>");
  node2305.attr('type', "range");
  
  var ref2268 = n;
  node2305.val(""+ref2268.get());
  var ignore446 = false;
  subs__.addSub(ref2268.addEventListener('change', function(_, ref, val) {
    if(ignore446) return;
    node2305.val(""+val);
  }));
  subs__.addSub(ref2268.rebind());
  
  subs__.addSub(mobl.domBind(node2305, 'keyup change', function() {
    ignore446 = true;
    n.set(mobl.stringTomobl__Num(node2305.val()));
    ignore446 = false;
  }));
  
  
  var ref2269 = min;
  if(ref2269.get() !== null) {
    node2305.attr('min', ref2269.get());
    subs__.addSub(ref2269.addEventListener('change', function(_, ref, val) {
      node2305.attr('min', val);
    }));
    
  }
  subs__.addSub(ref2269.rebind());
  
  var ref2270 = max;
  if(ref2270.get() !== null) {
    node2305.attr('max', ref2270.get());
    subs__.addSub(ref2270.addEventListener('change', function(_, ref, val) {
      node2305.attr('max', val);
    }));
    
  }
  subs__.addSub(ref2270.rebind());
  
  var ref2271 = step;
  if(ref2271.get() !== null) {
    node2305.attr('step', ref2271.get());
    subs__.addSub(ref2271.addEventListener('change', function(_, ref, val) {
      node2305.attr('step', val);
    }));
    
  }
  subs__.addSub(ref2271.rebind());
  node2305.attr('style', "width: 99%;");
  
  var val1160 = onchange.get();
  if(val1160 !== null) {
    subs__.addSub(mobl.domBind(node2305, 'change', val1160));
  }
  
  var val1161 = onkeyup.get();
  if(val1161 !== null) {
    subs__.addSub(mobl.domBind(node2305, 'keyup', val1161));
  }
  
  var ref2272 = placeholder;
  if(ref2272.get() !== null) {
    node2305.attr('placeholder', ref2272.get());
    subs__.addSub(ref2272.addEventListener('change', function(_, ref, val) {
      node2305.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref2272.rebind());
  
  root6344.append(node2305);
  callback(root6344); return subs__;
  
  
  return subs__;
};
ui.validateNum = function(n) {
   var __this = this;
  return mobl.Math.isNaN(n) ? mobl._("Not a valid numeric value", []) : "";
};


ui.numField = function(n, label, placeholder, validator, style, invalidStyle, onchange, onkeyup, elements, callback) {
  var root6346 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var validator2 = function(s, callback) {
    var __this = this;
    var result__ = mobl.parseNum(s);
    var n2 = result__;
    function after358(result__) {
      var tmp4475 = result__;
      var result__ = tmp4475;
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
    var result__ = validator.get()(n2, after358);if(result__ !== undefined) after358(result__);
  };
  
  
  
  var s = mobl.ref("" + n.get());
  var nodes4844 = $("<span>");
  root6346.append(nodes4844);
  subs__.addSub((ui.textField)(s, placeholder, label, mobl.ref("number"), mobl.ref(validator2), style, invalidStyle, onchange, onkeyup, function(_, callback) {
    var root6347 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6347); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4844;
    nodes4844 = node.contents();
    oldNodes.replaceWith(nodes4844);
  }));
  callback(root6346); return subs__;
  
  return subs__;
};

ui.passwordField = function(s, placeholder, label, style, onchange, onkeyup, elements, callback) {
  var root6348 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2306 = $("<span>");
  root6348.append(node2306);
  var condSubs567 = new mobl.CompSubscription();
  subs__.addSub(condSubs567);
  var oldValue567;
  var renderCond567 = function() {
    var value2551 = label.get();
    if(oldValue567 === value2551) return;
    oldValue567 = value2551;
    var subs__ = condSubs567;
    subs__.unsubscribe();
    node2306.empty();
    if(value2551) {
      
      var node2307 = $("<span>");
      node2307.attr('style', "float: left; margin-top: 0.2em; width: 5em; color: #666;");
      
      var ref2276 = label;
      node2307.text(""+ref2276.get());
      var ignore448 = false;
      subs__.addSub(ref2276.addEventListener('change', function(_, ref, val) {
        if(ignore448) return;
        node2307.text(""+val);
      }));
      subs__.addSub(ref2276.rebind());
      
      
      node2306.append(node2307);
      
      var node2308 = $("<span>");
      node2308.attr('style', "float: left");
      
      
      var node2309 = $("<input>");
      node2309.attr('type', "password");
      
      var ref2273 = style;
      if(ref2273.get() !== null) {
        node2309.attr('class', ref2273.get());
        subs__.addSub(ref2273.addEventListener('change', function(_, ref, val) {
          node2309.attr('class', val);
        }));
        
      }
      subs__.addSub(ref2273.rebind());
      
      var ref2274 = placeholder;
      if(ref2274.get() !== null) {
        node2309.attr('placeholder', ref2274.get());
        subs__.addSub(ref2274.addEventListener('change', function(_, ref, val) {
          node2309.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref2274.rebind());
      
      var ref2275 = s;
      node2309.val(""+ref2275.get());
      var ignore447 = false;
      subs__.addSub(ref2275.addEventListener('change', function(_, ref, val) {
        if(ignore447) return;
        node2309.val(""+val);
      }));
      subs__.addSub(ref2275.rebind());
      
      subs__.addSub(mobl.domBind(node2309, 'keyup change', function() {
        ignore447 = true;
        s.set(mobl.stringTomobl__String(node2309.val()));
        ignore447 = false;
      }));
      
      
      var val1162 = onchange.get();
      if(val1162 !== null) {
        subs__.addSub(mobl.domBind(node2309, 'change', val1162));
      }
      
      var val1163 = onkeyup.get();
      if(val1163 !== null) {
        subs__.addSub(mobl.domBind(node2309, 'keyup', val1163));
      }
      
      var val1164 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1164 !== null) {
        subs__.addSub(mobl.domBind(node2309, 'blur', val1164));
      }
      
      node2308.append(node2309);
      node2306.append(node2308);
      
      
      
      
    } else {
      
      var node2310 = $("<input>");
      node2310.attr('type', "password");
      
      var ref2277 = style;
      if(ref2277.get() !== null) {
        node2310.attr('class', ref2277.get());
        subs__.addSub(ref2277.addEventListener('change', function(_, ref, val) {
          node2310.attr('class', val);
        }));
        
      }
      subs__.addSub(ref2277.rebind());
      
      var ref2278 = placeholder;
      if(ref2278.get() !== null) {
        node2310.attr('placeholder', ref2278.get());
        subs__.addSub(ref2278.addEventListener('change', function(_, ref, val) {
          node2310.attr('placeholder', val);
        }));
        
      }
      subs__.addSub(ref2278.rebind());
      
      var ref2279 = s;
      node2310.val(""+ref2279.get());
      var ignore449 = false;
      subs__.addSub(ref2279.addEventListener('change', function(_, ref, val) {
        if(ignore449) return;
        node2310.val(""+val);
      }));
      subs__.addSub(ref2279.rebind());
      
      subs__.addSub(mobl.domBind(node2310, 'keyup change', function() {
        ignore449 = true;
        s.set(mobl.stringTomobl__String(node2310.val()));
        ignore449 = false;
      }));
      
      
      var val1165 = onchange.get();
      if(val1165 !== null) {
        subs__.addSub(mobl.domBind(node2310, 'change', val1165));
      }
      
      var val1166 = onkeyup.get();
      if(val1166 !== null) {
        subs__.addSub(mobl.domBind(node2310, 'keyup', val1166));
      }
      
      var val1167 = function(event, callback) {
                    if(event && event.stopPropagation) event.stopPropagation();
                    var result__ = ui.scrollUp();
                    if(callback && callback.apply) callback(); return;
                  };
      if(val1167 !== null) {
        subs__.addSub(mobl.domBind(node2310, 'blur', val1167));
      }
      
      node2306.append(node2310);
      
      
    }
  };
  renderCond567();
  subs__.addSub(label.addEventListener('change', function() {
    renderCond567();
  }));
  
  callback(root6348); return subs__;
  
  return subs__;
};
ui.selectFieldStyle = 'ui__selectFieldStyle';

ui.selectField = function(value, options, onchange, style, optionStyle, elements, callback) {
  var root6349 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var sel = $("<select>");
  
  var ref2284 = style;
  if(ref2284.get() !== null) {
    sel.attr('class', ref2284.get());
    subs__.addSub(ref2284.addEventListener('change', function(_, ref, val) {
      sel.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2284.rebind());
  
  var val1168 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = sel.val();
                value.set(result__);
                var result__ = onchange.get();
                if(result__) {
                  function after359(result__) {
                    var tmp4477 = result__;
                    if(callback && callback.apply) callback(); return;
                  }
                  var result__ = onchange.get()(event, after359);if(result__ !== undefined) after359(result__);
                } else {
                  {
                    if(callback && callback.apply) callback(); return;
                  }
                }
              };
  if(val1168 !== null) {
    subs__.addSub(mobl.domBind(sel, 'change', val1168));
  }
  
  
  var node2311 = mobl.loadingSpan();
  sel.append(node2311);
  var list397;
  var listSubs__ = new mobl.CompSubscription();
  subs__.addSub(listSubs__);
  var renderList397 = function() {
    var subs__ = listSubs__;
    list397 = options.get();
    list397.list(function(results397) {
      node2311.empty();
      for(var i1243 = 0; i1243 < results397.length; i1243++) {
        (function() {
          var iternode397 = $("<span>");
          node2311.append(iternode397);
          var optionValue;var optionDescription;
          optionValue = mobl.ref(mobl.ref(mobl.ref(results397), i1243), "_1");optionDescription = mobl.ref(mobl.ref(mobl.ref(results397), i1243), "_2");
          
          var node2312 = $("<option>");
          
          var ref2280 = optionDescription;
          node2312.text(""+ref2280.get());
          var ignore450 = false;
          subs__.addSub(ref2280.addEventListener('change', function(_, ref, val) {
            if(ignore450) return;
            node2312.text(""+val);
          }));
          subs__.addSub(ref2280.rebind());
          
          
          var ref2281 = optionStyle;
          if(ref2281.get() !== null) {
            node2312.attr('class', ref2281.get());
            subs__.addSub(ref2281.addEventListener('change', function(_, ref, val) {
              node2312.attr('class', val);
            }));
            
          }
          subs__.addSub(ref2281.rebind());
          
          var ref2282 = optionValue;
          if(ref2282.get() !== null) {
            node2312.attr('value', ref2282.get());
            subs__.addSub(ref2282.addEventListener('change', function(_, ref, val) {
              node2312.attr('value', val);
            }));
            
          }
          subs__.addSub(ref2282.rebind());
          
          var ref2283 = mobl.ref(value.get() == optionValue.get() ? "selected" : "");
          if(ref2283.get() !== null) {
            node2312.attr('selected', ref2283.get());
            subs__.addSub(ref2283.addEventListener('change', function(_, ref, val) {
              node2312.attr('selected', val);
            }));
            subs__.addSub(value.addEventListener('change', function() {
              node2312.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            subs__.addSub(optionValue.addEventListener('change', function() {
              node2312.attr('selected', value.get() == optionValue.get() ? "selected" : "");
            }));
            
          }
          subs__.addSub(ref2283.rebind());
          
          iternode397.append(node2312);
          
          var oldNodes = iternode397;
          iternode397 = iternode397.contents();
          oldNodes.replaceWith(iternode397);
          
          
        }());
      }
      mobl.delayedUpdateScrollers();
      subs__.addSub(list397.addEventListener('change', function() { listSubs__.unsubscribe(); renderList397(true); }));
      subs__.addSub(options.addEventListener('change', function() { listSubs__.unsubscribe(); renderList397(true); }));
    });
  };
  renderList397();
  
  root6349.append(sel);
  var result__ = sel.append(sel.children().eq(0).children());
  callback(root6349); return subs__;
  
  
  return subs__;
};
ui.tabbarStyle = 'ui__tabbarStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabStyle = 'ui__inActiveTabStyle';
ui.activeTabStyle = 'ui__activeTabStyle';

ui.tabSet = function(tabs, activeTab, elements, callback) {
  var root6350 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = activeTab.get() == null;
  if(result__) {
    var result__ = tabs.get().get(0)._1;
    activeTab.set(result__);
    
    var s = mobl.ref("");
    var nodes4845 = $("<span>");
    root6350.append(nodes4845);
    subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
      var root6351 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node2313 = mobl.loadingSpan();
      root6351.append(node2313);
      var list398;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList398 = function() {
        var subs__ = listSubs__;
        list398 = tabs.get();
        list398.list(function(results398) {
          node2313.empty();
          for(var i1244 = 0; i1244 < results398.length; i1244++) {
            (function() {
              var iternode398 = $("<span>");
              node2313.append(iternode398);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results398), i1244), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results398), i1244), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results398), i1244), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
              var tmp4439 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp4439.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp4439.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                tmp4439.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                tmp4439.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
              }));
              
              var result__ = function(event, callback) {
                               if(event && event.stopPropagation) event.stopPropagation();
                               var result__ = tabName.get();
                               activeTab.set(result__);
                               if(callback && callback.apply) callback(); return;
                             };
              var tmp4438 = mobl.ref(result__);
              
              var nodes4846 = $("<span>");
              iternode398.append(nodes4846);
              subs__.addSub((mobl.span)(tmp4439, mobl.ref(null), tmp4438, mobl.ref(null), function(_, callback) {
                var root6352 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes4847 = $("<span>");
                root6352.append(nodes4847);
                subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                  var root6353 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root6353); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4847;
                  nodes4847 = node.contents();
                  oldNodes.replaceWith(nodes4847);
                }));
                callback(root6352); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes4846;
                nodes4846 = node.contents();
                oldNodes.replaceWith(nodes4846);
              }));
              
              var oldNodes = iternode398;
              iternode398 = iternode398.contents();
              oldNodes.replaceWith(iternode398);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list398.addEventListener('change', function() { listSubs__.unsubscribe(); renderList398(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList398(true); }));
        });
      };
      renderList398();
      
      callback(root6351); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4845;
      nodes4845 = node.contents();
      oldNodes.replaceWith(nodes4845);
    }));
    
    var node2314 = mobl.loadingSpan();
    root6350.append(node2314);
    var list399;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList399 = function() {
      var subs__ = listSubs__;
      list399 = tabs.get();
      list399.list(function(results399) {
        node2314.empty();
        for(var i1245 = 0; i1245 < results399.length; i1245++) {
          (function() {
            var iternode399 = $("<span>");
            node2314.append(iternode399);
            var tabName;var tabIcon;var tabControl;
            tabName = mobl.ref(mobl.ref(mobl.ref(results399), i1245), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results399), i1245), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results399), i1245), "_3");
            var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
            var tmp4440 = mobl.ref(result__);
            subs__.addSub(activeTab.addEventListener('change', function() {
              tmp4440.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(tabName.addEventListener('change', function() {
              tmp4440.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
              tmp4440.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
              tmp4440.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
            }));
            
            var nodes4848 = $("<span>");
            iternode399.append(nodes4848);
            subs__.addSub((mobl.block)(tmp4440, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root6354 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes4849 = $("<span>");
              root6354.append(nodes4849);
              subs__.addSub((mobl.screenContext)(function(_, callback) {
                var root6355 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes4850 = $("<span>");
                root6355.append(nodes4850);
                subs__.addSub(tabControl.addEventListener('change', function() {
                  renderControl917();
                }));
                
                function renderControl917() {
                  subs__.addSub((tabControl.get())(function(elements, callback) {
                    var root6356 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root6356); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes4850;
                    nodes4850 = node.contents();
                    oldNodes.replaceWith(nodes4850);
                  }));
                }
                renderControl917();
                callback(root6355); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes4849;
                nodes4849 = node.contents();
                oldNodes.replaceWith(nodes4849);
              }));
              callback(root6354); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes4848;
              nodes4848 = node.contents();
              oldNodes.replaceWith(nodes4848);
            }));
            
            var oldNodes = iternode399;
            iternode399 = iternode399.contents();
            oldNodes.replaceWith(iternode399);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list399.addEventListener('change', function() { listSubs__.unsubscribe(); renderList399(true); }));
        subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList399(true); }));
      });
    };
    renderList399();
    
    callback(root6350); return subs__;
    
    
  } else {
    {
      
      var s = mobl.ref("");
      var nodes4845 = $("<span>");
      root6350.append(nodes4845);
      subs__.addSub((mobl.block)(mobl.ref(ui.tabbarStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
        var root6351 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node2313 = mobl.loadingSpan();
        root6351.append(node2313);
        var list398;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList398 = function() {
          var subs__ = listSubs__;
          list398 = tabs.get();
          list398.list(function(results398) {
            node2313.empty();
            for(var i1244 = 0; i1244 < results398.length; i1244++) {
              (function() {
                var iternode398 = $("<span>");
                node2313.append(iternode398);
                var tabName;var tabIcon;var tabControl;
                tabName = mobl.ref(mobl.ref(mobl.ref(results398), i1244), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results398), i1244), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results398), i1244), "_3");
                var result__ = activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle;
                var tmp4439 = mobl.ref(result__);
                subs__.addSub(activeTab.addEventListener('change', function() {
                  tmp4439.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(tabName.addEventListener('change', function() {
                  tmp4439.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.activeTabButtonStyle).addEventListener('change', function() {
                  tmp4439.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                subs__.addSub(mobl.ref(ui.inActiveTabButtonStyle).addEventListener('change', function() {
                  tmp4439.set(activeTab.get() == tabName.get() ? ui.activeTabButtonStyle : ui.inActiveTabButtonStyle);
                }));
                
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = tabName.get();
                                 activeTab.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp4438 = mobl.ref(result__);
                
                var nodes4846 = $("<span>");
                iternode398.append(nodes4846);
                subs__.addSub((mobl.span)(tmp4439, mobl.ref(null), tmp4438, mobl.ref(null), function(_, callback) {
                  var root6352 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes4847 = $("<span>");
                  root6352.append(nodes4847);
                  subs__.addSub((mobl.label)(tabName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                    var root6353 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    callback(root6353); return subs__;
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes4847;
                    nodes4847 = node.contents();
                    oldNodes.replaceWith(nodes4847);
                  }));
                  callback(root6352); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4846;
                  nodes4846 = node.contents();
                  oldNodes.replaceWith(nodes4846);
                }));
                
                var oldNodes = iternode398;
                iternode398 = iternode398.contents();
                oldNodes.replaceWith(iternode398);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list398.addEventListener('change', function() { listSubs__.unsubscribe(); renderList398(true); }));
            subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList398(true); }));
          });
        };
        renderList398();
        
        callback(root6351); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes4845;
        nodes4845 = node.contents();
        oldNodes.replaceWith(nodes4845);
      }));
      
      var node2314 = mobl.loadingSpan();
      root6350.append(node2314);
      var list399;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList399 = function() {
        var subs__ = listSubs__;
        list399 = tabs.get();
        list399.list(function(results399) {
          node2314.empty();
          for(var i1245 = 0; i1245 < results399.length; i1245++) {
            (function() {
              var iternode399 = $("<span>");
              node2314.append(iternode399);
              var tabName;var tabIcon;var tabControl;
              tabName = mobl.ref(mobl.ref(mobl.ref(results399), i1245), "_1");tabIcon = mobl.ref(mobl.ref(mobl.ref(results399), i1245), "_2");tabControl = mobl.ref(mobl.ref(mobl.ref(results399), i1245), "_3");
              var result__ = activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle;
              var tmp4440 = mobl.ref(result__);
              subs__.addSub(activeTab.addEventListener('change', function() {
                tmp4440.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(tabName.addEventListener('change', function() {
                tmp4440.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.activeTabStyle).addEventListener('change', function() {
                tmp4440.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              subs__.addSub(mobl.ref(ui.inActiveTabStyle).addEventListener('change', function() {
                tmp4440.set(activeTab.get() == tabName.get() ? ui.activeTabStyle : ui.inActiveTabStyle);
              }));
              
              var nodes4848 = $("<span>");
              iternode399.append(nodes4848);
              subs__.addSub((mobl.block)(tmp4440, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root6354 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                var nodes4849 = $("<span>");
                root6354.append(nodes4849);
                subs__.addSub((mobl.screenContext)(function(_, callback) {
                  var root6355 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes4850 = $("<span>");
                  root6355.append(nodes4850);
                  subs__.addSub(tabControl.addEventListener('change', function() {
                    renderControl917();
                  }));
                  
                  function renderControl917() {
                    subs__.addSub((tabControl.get())(function(elements, callback) {
                      var root6356 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root6356); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes4850;
                      nodes4850 = node.contents();
                      oldNodes.replaceWith(nodes4850);
                    }));
                  }
                  renderControl917();
                  callback(root6355); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4849;
                  nodes4849 = node.contents();
                  oldNodes.replaceWith(nodes4849);
                }));
                callback(root6354); return subs__;
                
                return subs__;
              }, function(node) {
                var oldNodes = nodes4848;
                nodes4848 = node.contents();
                oldNodes.replaceWith(nodes4848);
              }));
              
              var oldNodes = iternode399;
              iternode399 = iternode399.contents();
              oldNodes.replaceWith(iternode399);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list399.addEventListener('change', function() { listSubs__.unsubscribe(); renderList399(true); }));
          subs__.addSub(tabs.addEventListener('change', function() { listSubs__.unsubscribe(); renderList399(true); }));
        });
      };
      renderList399();
      
      callback(root6350); return subs__;
      
      
    }
  }
  return subs__;
};
ui.searchboxStyle = 'ui__searchboxStyle';
ui.searchBoxInputStyle = 'ui__searchBoxInputStyle';

ui.searchBox = function(s, placeholder, onsearch, onkeyup, elements, callback) {
  var root6357 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2315 = $("<div>");
  
  var ref2288 = mobl.ref(ui.searchboxStyle);
  if(ref2288.get() !== null) {
    node2315.attr('class', ref2288.get());
    subs__.addSub(ref2288.addEventListener('change', function(_, ref, val) {
      node2315.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2288.rebind());
  
  
  var node2316 = $("<input>");
  node2316.attr('type', "search");
  
  var ref2285 = mobl.ref(ui.searchBoxInputStyle);
  if(ref2285.get() !== null) {
    node2316.attr('class', ref2285.get());
    subs__.addSub(ref2285.addEventListener('change', function(_, ref, val) {
      node2316.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2285.rebind());
  
  var ref2286 = placeholder;
  if(ref2286.get() !== null) {
    node2316.attr('placeholder', ref2286.get());
    subs__.addSub(ref2286.addEventListener('change', function(_, ref, val) {
      node2316.attr('placeholder', val);
    }));
    
  }
  subs__.addSub(ref2286.rebind());
  
  var ref2287 = s;
  node2316.val(""+ref2287.get());
  var ignore451 = false;
  subs__.addSub(ref2287.addEventListener('change', function(_, ref, val) {
    if(ignore451) return;
    node2316.val(""+val);
  }));
  subs__.addSub(ref2287.rebind());
  
  subs__.addSub(mobl.domBind(node2316, 'keyup change', function() {
    ignore451 = true;
    s.set(mobl.stringTomobl__String(node2316.val()));
    ignore451 = false;
  }));
  
  
  var val1169 = onsearch.get();
  if(val1169 !== null) {
    subs__.addSub(mobl.domBind(node2316, 'change', val1169));
  }
  
  var val1170 = onkeyup.get();
  if(val1170 !== null) {
    subs__.addSub(mobl.domBind(node2316, 'keyup', val1170));
  }
  node2316.attr('autocorrect', false);
  node2316.attr('autocapitalize', false);
  node2316.attr('autocomplete', false);
  
  node2315.append(node2316);
  root6357.append(node2315);
  callback(root6357); return subs__;
  
  
  return subs__;
};
ui.contextMenuStyle = 'ui__contextMenuStyle';
ui.buttonStyle = 'ui__buttonStyle';
ui.buttonPushedStyle = 'ui__buttonPushedStyle';

ui.contextMenu = function(elements, callback) {
  var root6358 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var menu = $("<div>");
  
  var ref2289 = mobl.ref(ui.contextMenuStyle);
  if(ref2289.get() !== null) {
    menu.attr('class', ref2289.get());
    subs__.addSub(ref2289.addEventListener('change', function(_, ref, val) {
      menu.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2289.rebind());
  
  var nodes4851 = $("<span>");
  menu.append(nodes4851);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl918();
  }));
  
  function renderControl918() {
    subs__.addSub((elements)(function(elements, callback) {
      var root6359 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6359); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4851;
      nodes4851 = node.contents();
      oldNodes.replaceWith(nodes4851);
    }));
  }
  renderControl918();
  root6358.append(menu);
  var result__ = menu.hide();
  
  var img = $("<img>");
  img.attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA0AAAANABeWPPlAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEuSURBVDiNrdSrTkNBEMbx35aLIhUNEl4CsCSkmgfBoOoJz0B4BhSSBEcQSMA3GBJE34Br6CA6heWUA4huMuLszvc/c9stEaG5Sil97GADm7l9g1tcRsTFjCgiPg09nCDSxhimjav9E/S+aSvINkbpeIU+utV5N/eu0meE7W+gjGSEFwzQqf/WiLqTPi+p6dWgaTqDNsAPwME0zWmd+1U6rZG0RDZNs9/J7sBBRIxnutGy0vcgP3cWTVocuC6lLGD9H5z3iHjAdWo3ZMGGVchHvtrcZnuV/zAZM6CCUzz9AHjGYaNWn6Azk2GrZ2YJlw3YI44bkG5qzzomY1+wVRXyDbu4w2sCz7HfqNVWam/5pf1YxX2eLf/W/j8HEmtY+XMg53pF5nZp5/GMlHk9bB8Ws56C3JDK8wAAAABJRU5ErkJggg==");
  img.attr('style', "float: right;");
  
  var val1171 = function(event, callback) {
                if(event && event.stopPropagation) event.stopPropagation();
                var result__ = img.parent();
                var target = result__;
                var result__ = target.css("position", "relative");
                var result__ = img.hide();
                var result__ = menu.css("right", "5px");
                var result__ = menu.css("top", "5px");
                var result__ = menu.show();
                mobl.sleep(500, function(result__) {
                  var tmp4480 = result__;
                  var result__ = mobl.$("body").bind("tap", removeMenu);
                  if(callback && callback.apply) callback(); return;
                });
              };
  if(val1171 !== null) {
    subs__.addSub(mobl.domBind(img, 'tap', val1171));
  }
  
  root6358.append(img);
  
  var removeMenu = function(evt) {
     var __this = this;
    menu.hide();
    img.show();
    mobl.$("body").unbind("tap", removeMenu);
  };
  
  
  callback(root6358); return subs__;
  
  
  
  return subs__;
};

ui.masterDetail = function(items, masterItem, detail, elements, callback) {
  var root6360 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl.window.get().innerWidth > 500;
  var tmp4465 = mobl.ref(result__);
  subs__.addSub(mobl.ref(mobl.window, 'innerWidth').addEventListener('change', function() {
    tmp4465.set(mobl.window.get().innerWidth > 500);
  }));
  
  
  var node2317 = $("<span>");
  root6360.append(node2317);
  var condSubs568 = new mobl.CompSubscription();
  subs__.addSub(condSubs568);
  var oldValue568;
  var renderCond568 = function() {
    var value2552 = tmp4465.get();
    if(oldValue568 === value2552) return;
    oldValue568 = value2552;
    var subs__ = condSubs568;
    subs__.unsubscribe();
    node2317.empty();
    if(value2552) {
      items.get().one(function(result__) {
        var tmp4481 = result__;
        var current = mobl.ref(result__);
        
        var node2318 = $("<div>");
        node2318.attr('width', "100%");
        
        
        var node2319 = $("<div>");
        node2319.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
        
        var nodes4854 = $("<span>");
        node2319.append(nodes4854);
        subs__.addSub((ui.group)(function(_, callback) {
          var root6363 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          
          var node2322 = mobl.loadingSpan();
          root6363.append(node2322);
          var list400;
          var listSubs__ = new mobl.CompSubscription();
          subs__.addSub(listSubs__);
          var renderList400 = function() {
            var subs__ = listSubs__;
            list400 = items.get();
            list400.list(function(results400) {
              node2322.empty();
              for(var i1246 = 0; i1246 < results400.length; i1246++) {
                (function() {
                  var iternode400 = $("<span>");
                  node2322.append(iternode400);
                  var it;
                  it = mobl.ref(mobl.ref(results400), i1246);
                  var result__ = it.get() == current.get();
                  var tmp4446 = mobl.ref(result__);
                  subs__.addSub(it.addEventListener('change', function() {
                    tmp4446.set(it.get() == current.get());
                  }));
                  subs__.addSub(current.addEventListener('change', function() {
                    tmp4446.set(it.get() == current.get());
                  }));
                  
                  
                  var node2323 = $("<span>");
                  iternode400.append(node2323);
                  var condSubs570 = new mobl.CompSubscription();
                  subs__.addSub(condSubs570);
                  var oldValue570;
                  var renderCond570 = function() {
                    var value2554 = tmp4446.get();
                    if(oldValue570 === value2554) return;
                    oldValue570 = value2554;
                    var subs__ = condSubs570;
                    subs__.unsubscribe();
                    node2323.empty();
                    if(value2554) {
                      var nodes4855 = $("<span>");
                      node2323.append(nodes4855);
                      subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                        var root6364 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes4856 = $("<span>");
                        root6364.append(nodes4856);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl920();
                        }));
                        
                        function renderControl920() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root6365 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root6365); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes4856;
                            nodes4856 = node.contents();
                            oldNodes.replaceWith(nodes4856);
                          }));
                        }
                        renderControl920();
                        callback(root6364); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes4855;
                        nodes4855 = node.contents();
                        oldNodes.replaceWith(nodes4855);
                      }));
                      
                      
                    } else {
                      var result__ = function(event, callback) {
                                       if(event && event.stopPropagation) event.stopPropagation();
                                       var result__ = it.get();
                                       current.set(result__);
                                       var result__ = ui.scrollUp();
                                       if(callback && callback.apply) callback(); return;
                                     };
                      var tmp4445 = mobl.ref(result__);
                      
                      var nodes4857 = $("<span>");
                      node2323.append(nodes4857);
                      subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4445, mobl.ref(null), mobl.ref(true), function(_, callback) {
                        var root6366 = $("<span>");
                        var subs__ = new mobl.CompSubscription();
                        var nodes4858 = $("<span>");
                        root6366.append(nodes4858);
                        subs__.addSub(masterItem.addEventListener('change', function() {
                          renderControl921();
                        }));
                        
                        function renderControl921() {
                          subs__.addSub((masterItem.get())(it, function(elements, callback) {
                            var root6367 = $("<span>");
                            var subs__ = new mobl.CompSubscription();
                            callback(root6367); return subs__;
                            return subs__;
                          }, function(node) {
                            var oldNodes = nodes4858;
                            nodes4858 = node.contents();
                            oldNodes.replaceWith(nodes4858);
                          }));
                        }
                        renderControl921();
                        callback(root6366); return subs__;
                        
                        return subs__;
                      }, function(node) {
                        var oldNodes = nodes4857;
                        nodes4857 = node.contents();
                        oldNodes.replaceWith(nodes4857);
                      }));
                      
                      
                    }
                  };
                  renderCond570();
                  subs__.addSub(tmp4446.addEventListener('change', function() {
                    renderCond570();
                  }));
                  
                  
                  var oldNodes = iternode400;
                  iternode400 = iternode400.contents();
                  oldNodes.replaceWith(iternode400);
                  
                  
                }());
              }
              mobl.delayedUpdateScrollers();
              subs__.addSub(list400.addEventListener('change', function() { listSubs__.unsubscribe(); renderList400(true); }));
              subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList400(true); }));
            });
          };
          renderList400();
          
          callback(root6363); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes4854;
          nodes4854 = node.contents();
          oldNodes.replaceWith(nodes4854);
        }));
        node2318.append(node2319);
        
        var node2320 = $("<div>");
        node2320.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
        
        
        var node2321 = $("<span>");
        node2320.append(node2321);
        var condSubs569 = new mobl.CompSubscription();
        subs__.addSub(condSubs569);
        var oldValue569;
        var renderCond569 = function() {
          var value2553 = current.get();
          if(oldValue569 === value2553) return;
          oldValue569 = value2553;
          var subs__ = condSubs569;
          subs__.unsubscribe();
          node2321.empty();
          if(value2553) {
            var nodes4852 = $("<span>");
            node2321.append(nodes4852);
            subs__.addSub(detail.addEventListener('change', function() {
              renderControl919();
            }));
            
            function renderControl919() {
              subs__.addSub((detail.get())(current, function(elements, callback) {
                var root6361 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root6361); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes4852;
                nodes4852 = node.contents();
                oldNodes.replaceWith(nodes4852);
              }));
            }
            renderControl919();
            
            
          } else {
            var result__ = mobl._("Select an item on the left", []);
            var tmp4447 = mobl.ref(result__);
            
            var nodes4853 = $("<span>");
            node2321.append(nodes4853);
            subs__.addSub((mobl.label)(tmp4447, mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root6362 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              callback(root6362); return subs__;
              return subs__;
            }, function(node) {
              var oldNodes = nodes4853;
              nodes4853 = node.contents();
              oldNodes.replaceWith(nodes4853);
            }));
            
            
          }
        };
        renderCond569();
        subs__.addSub(current.addEventListener('change', function() {
          renderCond569();
        }));
        
        node2318.append(node2320);
        node2317.append(node2318);
        
        
        
        
        
        
      });
    } else {
      var nodes4859 = $("<span>");
      node2317.append(nodes4859);
      subs__.addSub((ui.group)(function(_, callback) {
        var root6368 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        
        var node2324 = mobl.loadingSpan();
        root6368.append(node2324);
        var list401;
        var listSubs__ = new mobl.CompSubscription();
        subs__.addSub(listSubs__);
        var renderList401 = function() {
          var subs__ = listSubs__;
          list401 = items.get();
          list401.list(function(results401) {
            node2324.empty();
            for(var i1247 = 0; i1247 < results401.length; i1247++) {
              (function() {
                var iternode401 = $("<span>");
                node2324.append(iternode401);
                var it;
                it = mobl.ref(mobl.ref(results401), i1247);
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 mobl.call('ui.detailScreen', [it, detail, mobl.ref(false), mobl.ref("slide")], function(result__) {
                                 var tmp4482 = result__;
                                 if(callback && callback.apply) callback(); return;
                                 });
                               };
                var tmp4441 = mobl.ref(result__);
                
                var nodes4860 = $("<span>");
                iternode401.append(nodes4860);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4441, mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root6369 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes4861 = $("<span>");
                  root6369.append(nodes4861);
                  subs__.addSub(masterItem.addEventListener('change', function() {
                    renderControl922();
                  }));
                  
                  function renderControl922() {
                    subs__.addSub((masterItem.get())(it, function(elements, callback) {
                      var root6370 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root6370); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes4861;
                      nodes4861 = node.contents();
                      oldNodes.replaceWith(nodes4861);
                    }));
                  }
                  renderControl922();
                  callback(root6369); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4860;
                  nodes4860 = node.contents();
                  oldNodes.replaceWith(nodes4860);
                }));
                
                var oldNodes = iternode401;
                iternode401 = iternode401.contents();
                oldNodes.replaceWith(iternode401);
                
                
              }());
            }
            mobl.delayedUpdateScrollers();
            subs__.addSub(list401.addEventListener('change', function() { listSubs__.unsubscribe(); renderList401(true); }));
            subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList401(true); }));
          });
        };
        renderList401();
        
        callback(root6368); return subs__;
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes4859;
        nodes4859 = node.contents();
        oldNodes.replaceWith(nodes4859);
      }));
      
      
    }
  };
  renderCond568();
  subs__.addSub(tmp4465.addEventListener('change', function() {
    renderCond568();
  }));
  
  callback(root6360); return subs__;
  
  return subs__;
};

ui.detailScreen = function(it, detail, callback, screenCallback) {
  var root6371 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  var result__ = mobl._("Detail", []);
  var tmp4444 = mobl.ref(result__);
  
  var nodes4862 = $("<span>");
  root6371.append(nodes4862);
  subs__.addSub((ui.header)(tmp4444, mobl.ref(false), mobl.ref(null), function(_, callback) {
    var root6372 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    var result__ = function(event, callback) {
                     if(event && event.stopPropagation) event.stopPropagation();
                     if(screenCallback) screenCallback();
                     return;
                     if(callback && callback.apply) callback(); return;
                   };
    var tmp4443 = mobl.ref(result__);
    
    var result__ = mobl._("Back", []);
    var tmp4442 = mobl.ref(result__);
    
    var nodes4863 = $("<span>");
    root6372.append(nodes4863);
    subs__.addSub((ui.backButton)(tmp4442, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp4443, function(_, callback) {
      var root6373 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6373); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4863;
      nodes4863 = node.contents();
      oldNodes.replaceWith(nodes4863);
    }));
    callback(root6372); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4862;
    nodes4862 = node.contents();
    oldNodes.replaceWith(nodes4862);
  }));
  var nodes4864 = $("<span>");
  root6371.append(nodes4864);
  subs__.addSub(detail.addEventListener('change', function() {
    renderControl923();
  }));
  
  function renderControl923() {
    subs__.addSub((detail.get())(it, function(elements, callback) {
      var root6374 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6374); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4864;
      nodes4864 = node.contents();
      oldNodes.replaceWith(nodes4864);
    }));
  }
  renderControl923();
  callback(root6371); return subs__;
  
  
  return subs__;
};
ui.selectedItemStyle = 'ui__selectedItemStyle';

ui.zoomList = function(coll, listCtrl, zoomCtrl, elements, callback) {
  var root6375 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var selected = mobl.ref(null);
  var nodes4865 = $("<span>");
  root6375.append(nodes4865);
  subs__.addSub((ui.group)(function(_, callback) {
    var root6376 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node2325 = mobl.loadingSpan();
    root6376.append(node2325);
    var list402;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList402 = function() {
      var subs__ = listSubs__;
      list402 = coll.get();
      list402.list(function(results402) {
        node2325.empty();
        for(var i1248 = 0; i1248 < results402.length; i1248++) {
          (function() {
            var iternode402 = $("<span>");
            node2325.append(iternode402);
            var it;
            it = mobl.ref(mobl.ref(results402), i1248);
            var result__ = it.get() == selected.get();
            var tmp4449 = mobl.ref(result__);
            subs__.addSub(it.addEventListener('change', function() {
              tmp4449.set(it.get() == selected.get());
            }));
            subs__.addSub(selected.addEventListener('change', function() {
              tmp4449.set(it.get() == selected.get());
            }));
            
            
            var node2326 = $("<span>");
            iternode402.append(node2326);
            var condSubs571 = new mobl.CompSubscription();
            subs__.addSub(condSubs571);
            var oldValue571;
            var renderCond571 = function() {
              var value2555 = tmp4449.get();
              if(oldValue571 === value2555) return;
              oldValue571 = value2555;
              var subs__ = condSubs571;
              subs__.unsubscribe();
              node2326.empty();
              if(value2555) {
                var nodes4866 = $("<span>");
                node2326.append(nodes4866);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                  var root6377 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes4867 = $("<span>");
                  root6377.append(nodes4867);
                  subs__.addSub(zoomCtrl.addEventListener('change', function() {
                    renderControl924();
                  }));
                  
                  function renderControl924() {
                    subs__.addSub((zoomCtrl.get())(it, function(elements, callback) {
                      var root6378 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root6378); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes4867;
                      nodes4867 = node.contents();
                      oldNodes.replaceWith(nodes4867);
                    }));
                  }
                  renderControl924();
                  callback(root6377); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4866;
                  nodes4866 = node.contents();
                  oldNodes.replaceWith(nodes4866);
                }));
                
                
              } else {
                var result__ = function(event, callback) {
                                 if(event && event.stopPropagation) event.stopPropagation();
                                 var result__ = it.get();
                                 selected.set(result__);
                                 if(callback && callback.apply) callback(); return;
                               };
                var tmp4448 = mobl.ref(result__);
                
                var nodes4868 = $("<span>");
                node2326.append(nodes4868);
                subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4448, mobl.ref(null), mobl.ref(true), function(_, callback) {
                  var root6379 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  var nodes4869 = $("<span>");
                  root6379.append(nodes4869);
                  subs__.addSub(listCtrl.addEventListener('change', function() {
                    renderControl925();
                  }));
                  
                  function renderControl925() {
                    subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                      var root6380 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root6380); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes4869;
                      nodes4869 = node.contents();
                      oldNodes.replaceWith(nodes4869);
                    }));
                  }
                  renderControl925();
                  callback(root6379); return subs__;
                  
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4868;
                  nodes4868 = node.contents();
                  oldNodes.replaceWith(nodes4868);
                }));
                
                
              }
            };
            renderCond571();
            subs__.addSub(tmp4449.addEventListener('change', function() {
              renderCond571();
            }));
            
            
            var oldNodes = iternode402;
            iternode402 = iternode402.contents();
            oldNodes.replaceWith(iternode402);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list402.addEventListener('change', function() { listSubs__.unsubscribe(); renderList402(true); }));
        subs__.addSub(coll.addEventListener('change', function() { listSubs__.unsubscribe(); renderList402(true); }));
      });
    };
    renderList402();
    
    callback(root6376); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4865;
    nodes4865 = node.contents();
    oldNodes.replaceWith(nodes4865);
  }));
  callback(root6375); return subs__;
  
  return subs__;
};
ui.loadMoreStyle = 'ui__loadMoreStyle';

ui.stagedList = function(coll, listCtrl, initialItems, step, moreLabel, moreStyle, elements, callback) {
  var root6381 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var n = mobl.ref(initialItems.get());
  coll.get().count(function(result__) {
    var tmp4483 = result__;
    var total = mobl.ref(result__);
    var result__ = coll.get().limit(n.get());
    var tmp4450 = mobl.ref(result__);
    subs__.addSub(mobl.ref(coll.get().limit(n.get())).addEventListener('change', function() {
      tmp4450.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(coll.addEventListener('change', function() {
      tmp4450.set(coll.get().limit(n.get()));
    }));
    subs__.addSub(n.addEventListener('change', function() {
      tmp4450.set(coll.get().limit(n.get()));
    }));
    
    
    var node2327 = mobl.loadingSpan();
    root6381.append(node2327);
    var list403;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList403 = function() {
      var subs__ = listSubs__;
      list403 = tmp4450.get();
      list403.list(function(results403) {
        node2327.empty();
        for(var i1249 = 0; i1249 < results403.length; i1249++) {
          (function() {
            var iternode403 = $("<span>");
            node2327.append(iternode403);
            var it;
            it = mobl.ref(mobl.ref(results403), i1249);
            var nodes4870 = $("<span>");
            iternode403.append(nodes4870);
            subs__.addSub(listCtrl.addEventListener('change', function() {
              renderControl926();
            }));
            
            function renderControl926() {
              subs__.addSub((listCtrl.get())(it, function(elements, callback) {
                var root6382 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root6382); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes4870;
                nodes4870 = node.contents();
                oldNodes.replaceWith(nodes4870);
              }));
            }
            renderControl926();
            
            var oldNodes = iternode403;
            iternode403 = iternode403.contents();
            oldNodes.replaceWith(iternode403);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list403.addEventListener('change', function() { listSubs__.unsubscribe(); renderList403(true); }));
        subs__.addSub(tmp4450.addEventListener('change', function() { listSubs__.unsubscribe(); renderList403(true); }));
      });
    };
    renderList403();
    
    var result__ = n.get() < total.get();
    var tmp4452 = mobl.ref(result__);
    subs__.addSub(n.addEventListener('change', function() {
      tmp4452.set(n.get() < total.get());
    }));
    subs__.addSub(total.addEventListener('change', function() {
      tmp4452.set(n.get() < total.get());
    }));
    
    
    var node2328 = $("<span>");
    root6381.append(node2328);
    var condSubs572 = new mobl.CompSubscription();
    subs__.addSub(condSubs572);
    var oldValue572;
    var renderCond572 = function() {
      var value2556 = tmp4452.get();
      if(oldValue572 === value2556) return;
      oldValue572 = value2556;
      var subs__ = condSubs572;
      subs__.unsubscribe();
      node2328.empty();
      if(value2556) {
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = n.get() + step.get();
                         n.set(result__);
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp4451 = mobl.ref(result__);
        
        var nodes4871 = $("<span>");
        node2328.append(nodes4871);
        subs__.addSub((mobl.block)(moreStyle, mobl.ref(null), tmp4451, mobl.ref(null), function(_, callback) {
          var root6383 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          var nodes4872 = $("<span>");
          root6383.append(nodes4872);
          subs__.addSub((mobl.label)(moreLabel, mobl.ref(null), mobl.ref(null), function(_, callback) {
            var root6384 = $("<span>");
            var subs__ = new mobl.CompSubscription();
            callback(root6384); return subs__;
            return subs__;
          }, function(node) {
            var oldNodes = nodes4872;
            nodes4872 = node.contents();
            oldNodes.replaceWith(nodes4872);
          }));
          callback(root6383); return subs__;
          
          return subs__;
        }, function(node) {
          var oldNodes = nodes4871;
          nodes4871 = node.contents();
          oldNodes.replaceWith(nodes4871);
        }));
        
        
      } else {
        
      }
    };
    renderCond572();
    subs__.addSub(tmp4452.addEventListener('change', function() {
      renderCond572();
    }));
    
    callback(root6381); return subs__;
    
    
  });
  return subs__;
};

ui.markableList = function(items, elements, callback) {
  var root6385 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  var nodes4873 = $("<span>");
  root6385.append(nodes4873);
  subs__.addSub((ui.group)(function(_, callback) {
    var root6386 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node2329 = mobl.loadingSpan();
    root6386.append(node2329);
    var list404;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList404 = function() {
      var subs__ = listSubs__;
      list404 = items.get();
      list404.list(function(results404) {
        node2329.empty();
        for(var i1250 = 0; i1250 < results404.length; i1250++) {
          (function() {
            var iternode404 = $("<span>");
            node2329.append(iternode404);
            var checked;var it;
            checked = mobl.ref(mobl.ref(mobl.ref(results404), i1250), "_1");it = mobl.ref(mobl.ref(mobl.ref(results404), i1250), "_2");
            var nodes4874 = $("<span>");
            iternode404.append(nodes4874);
            subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
              var root6387 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes4875 = $("<span>");
              root6387.append(nodes4875);
              subs__.addSub((ui.checkBox)(checked, it, mobl.ref(null), function(_, callback) {
                var root6388 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root6388); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes4875;
                nodes4875 = node.contents();
                oldNodes.replaceWith(nodes4875);
              }));
              callback(root6387); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes4874;
              nodes4874 = node.contents();
              oldNodes.replaceWith(nodes4874);
            }));
            
            var oldNodes = iternode404;
            iternode404 = iternode404.contents();
            oldNodes.replaceWith(iternode404);
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list404.addEventListener('change', function() { listSubs__.unsubscribe(); renderList404(true); }));
        subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList404(true); }));
      });
    };
    renderList404();
    
    callback(root6386); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4873;
    nodes4873 = node.contents();
    oldNodes.replaceWith(nodes4873);
  }));
  callback(root6385); return subs__;
  
  return subs__;
};

ui.selectList = function(title, coll, doneButtonLabel, callback, screenCallback) {
  var root6389 = $("<div>");
  var subs__ = new mobl.CompSubscription();
  
  var items = mobl.ref([]);
  var result__ = coll.get();
  coll.get().list(function(coll3177) {
    coll3177 = coll3177.reverse();
    function processOne201() {
      var it;
      it = coll3177.pop();
      var result__ = items.get().push(new mobl.Tuple(false, it));
      
      if(coll3177.length > 0) processOne201(); else rest201();
      
    }
    function rest201() {
      var nodes4876 = $("<span>");
      root6389.append(nodes4876);
      subs__.addSub((ui.header)(title, mobl.ref(false), mobl.ref(null), function(_, callback) {
        var root6390 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = null;
                         if(callback && callback.apply) callback(result__);
                         return;
                         if(callback && callback.apply) callback(); return;
                       };
        var tmp4453 = mobl.ref(result__);
        
        var result__ = mobl._("Back", []);
        var tmp4454 = mobl.ref(result__);
        
        var nodes4877 = $("<span>");
        root6390.append(nodes4877);
        subs__.addSub((ui.backButton)(tmp4454, mobl.ref(ui.backButtonStyle), mobl.ref(ui.backButtonPushedStyle), tmp4453, function(_, callback) {
          var root6391 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root6391); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4877;
          nodes4877 = node.contents();
          oldNodes.replaceWith(nodes4877);
        }));
        var result__ = function(event, callback) {
                         if(event && event.stopPropagation) event.stopPropagation();
                         var result__ = [];
                         var selected = result__;
                         var result__ = items.get();
                         items.get().list(function(coll3176) {
                           coll3176 = coll3176.reverse();
                           function processOne200() {
                             var checked;var it;
                             var tmp4485 = coll3176.pop();
                             checked = tmp4485._1;it = tmp4485._2;
                             var result__ = checked;
                             if(result__) {
                               var result__ = selected.push(it);
                               
                               if(coll3176.length > 0) processOne200(); else rest200();
                               
                             } else {
                               {
                                 
                                 if(coll3176.length > 0) processOne200(); else rest200();
                                 
                               }
                             }
                           }
                           function rest200() {
                             var result__ = selected;
                             if(screenCallback) screenCallback(result__);
                             return;
                             if(callback && callback.apply) callback(); return;
                           }
                           if(coll3176.length > 0) processOne200(); else rest200();
                         });
                         
                       };
        var tmp4455 = mobl.ref(result__);
        
        var nodes4878 = $("<span>");
        root6390.append(nodes4878);
        subs__.addSub((ui.button)(doneButtonLabel, mobl.ref(ui.buttonStyle), mobl.ref(ui.buttonPushedStyle), tmp4455, function(_, callback) {
          var root6392 = $("<span>");
          var subs__ = new mobl.CompSubscription();
          callback(root6392); return subs__;
          return subs__;
        }, function(node) {
          var oldNodes = nodes4878;
          nodes4878 = node.contents();
          oldNodes.replaceWith(nodes4878);
        }));
        callback(root6390); return subs__;
        
        
        return subs__;
      }, function(node) {
        var oldNodes = nodes4876;
        nodes4876 = node.contents();
        oldNodes.replaceWith(nodes4876);
      }));
      var nodes4879 = $("<span>");
      root6389.append(nodes4879);
      subs__.addSub((ui.markableList)(items, function(_, callback) {
        var root6393 = $("<span>");
        var subs__ = new mobl.CompSubscription();
        callback(root6393); return subs__;
        return subs__;
      }, function(node) {
        var oldNodes = nodes4879;
        nodes4879 = node.contents();
        oldNodes.replaceWith(nodes4879);
      }));
      callback(root6389); return subs__;
      
      
    }
    if(coll3177.length > 0) processOne201(); else rest201();
  });
  
  return subs__;
};

ui.searchList = function(Ent, masterItem, detailItem, resultLimit, searchTermPlaceholder, elements, callback) {
  var root6394 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var phrase = mobl.ref("");
  var nodes4880 = $("<span>");
  root6394.append(nodes4880);
  subs__.addSub((ui.searchBox)(phrase, searchTermPlaceholder, mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root6395 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6395); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4880;
    nodes4880 = node.contents();
    oldNodes.replaceWith(nodes4880);
  }));
  var result__ = Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get());
  var tmp4456 = mobl.ref(result__);
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get())).addEventListener('change', function() {
    tmp4456.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(mobl.ref(Ent.get().searchPrefix(phrase.get())).addEventListener('change', function() {
    tmp4456.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(Ent.addEventListener('change', function() {
    tmp4456.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(phrase.addEventListener('change', function() {
    tmp4456.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  subs__.addSub(resultLimit.addEventListener('change', function() {
    tmp4456.set(Ent.get().searchPrefix(phrase.get()).limit(resultLimit.get()));
  }));
  
  var nodes4881 = $("<span>");
  root6394.append(nodes4881);
  subs__.addSub((ui.masterDetail)(tmp4456, masterItem, detailItem, function(_, callback) {
    var root6396 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    callback(root6396); return subs__;
    return subs__;
  }, function(node) {
    var oldNodes = nodes4881;
    nodes4881 = node.contents();
    oldNodes.replaceWith(nodes4881);
  }));
  callback(root6394); return subs__;
  
  
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
  var root6397 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var activeSection = mobl.ref(activeSection.get() ? activeSection.get() : sections.get().get(0)._1);
  var nodes4882 = $("<span>");
  root6397.append(nodes4882);
  subs__.addSub((mobl.block)(mobl.ref(ui.accordionStyle), mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
    var root6398 = $("<span>");
    var subs__ = new mobl.CompSubscription();
    
    var node2330 = mobl.loadingSpan();
    root6398.append(node2330);
    var list405;
    var listSubs__ = new mobl.CompSubscription();
    subs__.addSub(listSubs__);
    var renderList405 = function() {
      var subs__ = listSubs__;
      list405 = sections.get();
      list405.list(function(results405) {
        node2330.empty();
        for(var i1251 = 0; i1251 < results405.length; i1251++) {
          (function() {
            var iternode405 = $("<span>");
            node2330.append(iternode405);
            var sectionName;var sectionControl;
            sectionName = mobl.ref(mobl.ref(mobl.ref(results405), i1251), "_1");sectionControl = mobl.ref(mobl.ref(mobl.ref(results405), i1251), "_2");
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle;
            var tmp4458 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp4458.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp4458.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionHeaderStyle).addEventListener('change', function() {
              tmp4458.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionHeaderStyle).addEventListener('change', function() {
              tmp4458.set(activeSection.get() == sectionName.get() ? ui.activeSectionHeaderStyle : ui.inActiveSectionHeaderStyle);
            }));
            
            var result__ = function(event, callback) {
                             if(event && event.stopPropagation) event.stopPropagation();
                             var result__ = sectionName.get();
                             activeSection.set(result__);
                             if(callback && callback.apply) callback(); return;
                           };
            var tmp4457 = mobl.ref(result__);
            
            var nodes4883 = $("<span>");
            iternode405.append(nodes4883);
            subs__.addSub((mobl.span)(tmp4458, mobl.ref(null), tmp4457, mobl.ref(null), function(_, callback) {
              var root6399 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes4884 = $("<span>");
              root6399.append(nodes4884);
              subs__.addSub((mobl.label)(sectionName, mobl.ref(null), mobl.ref(null), function(_, callback) {
                var root6400 = $("<span>");
                var subs__ = new mobl.CompSubscription();
                callback(root6400); return subs__;
                return subs__;
              }, function(node) {
                var oldNodes = nodes4884;
                nodes4884 = node.contents();
                oldNodes.replaceWith(nodes4884);
              }));
              callback(root6399); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes4883;
              nodes4883 = node.contents();
              oldNodes.replaceWith(nodes4883);
            }));
            var result__ = activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle;
            var tmp4459 = mobl.ref(result__);
            subs__.addSub(activeSection.addEventListener('change', function() {
              tmp4459.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(sectionName.addEventListener('change', function() {
              tmp4459.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.activeSectionStyle).addEventListener('change', function() {
              tmp4459.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            subs__.addSub(mobl.ref(ui.inActiveSectionStyle).addEventListener('change', function() {
              tmp4459.set(activeSection.get() == sectionName.get() ? ui.activeSectionStyle : ui.inActiveSectionStyle);
            }));
            
            var nodes4885 = $("<span>");
            iternode405.append(nodes4885);
            subs__.addSub((mobl.block)(tmp4459, mobl.ref(null), mobl.ref(null), mobl.ref(null), function(_, callback) {
              var root6401 = $("<span>");
              var subs__ = new mobl.CompSubscription();
              var nodes4886 = $("<span>");
              root6401.append(nodes4886);
              subs__.addSub(sectionControl.addEventListener('change', function() {
                renderControl927();
              }));
              
              function renderControl927() {
                subs__.addSub((sectionControl.get())(function(elements, callback) {
                  var root6402 = $("<span>");
                  var subs__ = new mobl.CompSubscription();
                  callback(root6402); return subs__;
                  return subs__;
                }, function(node) {
                  var oldNodes = nodes4886;
                  nodes4886 = node.contents();
                  oldNodes.replaceWith(nodes4886);
                }));
              }
              renderControl927();
              callback(root6401); return subs__;
              
              return subs__;
            }, function(node) {
              var oldNodes = nodes4885;
              nodes4885 = node.contents();
              oldNodes.replaceWith(nodes4885);
            }));
            
            var oldNodes = iternode405;
            iternode405 = iternode405.contents();
            oldNodes.replaceWith(iternode405);
            
            
            
          }());
        }
        mobl.delayedUpdateScrollers();
        subs__.addSub(list405.addEventListener('change', function() { listSubs__.unsubscribe(); renderList405(true); }));
        subs__.addSub(sections.addEventListener('change', function() { listSubs__.unsubscribe(); renderList405(true); }));
      });
    };
    renderList405();
    
    callback(root6398); return subs__;
    
    return subs__;
  }, function(node) {
    var oldNodes = nodes4882;
    nodes4882 = node.contents();
    oldNodes.replaceWith(nodes4882);
  }));
  callback(root6397); return subs__;
  
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
  var root6403 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2331 = $("<table>");
  
  var ref2290 = style;
  if(ref2290.get() !== null) {
    node2331.attr('class', ref2290.get());
    subs__.addSub(ref2290.addEventListener('change', function(_, ref, val) {
      node2331.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2290.rebind());
  
  var nodes4887 = $("<span>");
  node2331.append(nodes4887);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl928();
  }));
  
  function renderControl928() {
    subs__.addSub((elements)(function(elements, callback) {
      var root6404 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6404); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4887;
      nodes4887 = node.contents();
      oldNodes.replaceWith(nodes4887);
    }));
  }
  renderControl928();
  root6403.append(node2331);
  callback(root6403); return subs__;
  
  
  return subs__;
};

ui.row = function(style, elements, callback) {
  var root6405 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2332 = $("<tr>");
  
  var ref2291 = style;
  if(ref2291.get() !== null) {
    node2332.attr('class', ref2291.get());
    subs__.addSub(ref2291.addEventListener('change', function(_, ref, val) {
      node2332.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2291.rebind());
  
  var nodes4888 = $("<span>");
  node2332.append(nodes4888);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl929();
  }));
  
  function renderControl929() {
    subs__.addSub((elements)(function(elements, callback) {
      var root6406 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6406); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4888;
      nodes4888 = node.contents();
      oldNodes.replaceWith(nodes4888);
    }));
  }
  renderControl929();
  root6405.append(node2332);
  callback(root6405); return subs__;
  
  
  return subs__;
};

ui.cell = function(width, style, elements, callback) {
  var root6407 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2333 = $("<td>");
  
  var ref2292 = width;
  if(ref2292.get() !== null) {
    node2333.attr('width', ref2292.get());
    subs__.addSub(ref2292.addEventListener('change', function(_, ref, val) {
      node2333.attr('width', val);
    }));
    
  }
  subs__.addSub(ref2292.rebind());
  
  var ref2293 = style;
  if(ref2293.get() !== null) {
    node2333.attr('class', ref2293.get());
    subs__.addSub(ref2293.addEventListener('change', function(_, ref, val) {
      node2333.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2293.rebind());
  
  var nodes4889 = $("<span>");
  node2333.append(nodes4889);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl930();
  }));
  
  function renderControl930() {
    subs__.addSub((elements)(function(elements, callback) {
      var root6408 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6408); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4889;
      nodes4889 = node.contents();
      oldNodes.replaceWith(nodes4889);
    }));
  }
  renderControl930();
  root6407.append(node2333);
  callback(root6407); return subs__;
  
  
  return subs__;
};

ui.col = function(width, style, elements, callback) {
  var root6409 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2334 = $("<td>");
  
  var ref2294 = width;
  if(ref2294.get() !== null) {
    node2334.attr('width', ref2294.get());
    subs__.addSub(ref2294.addEventListener('change', function(_, ref, val) {
      node2334.attr('width', val);
    }));
    
  }
  subs__.addSub(ref2294.rebind());
  
  var ref2295 = style;
  if(ref2295.get() !== null) {
    node2334.attr('class', ref2295.get());
    subs__.addSub(ref2295.addEventListener('change', function(_, ref, val) {
      node2334.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2295.rebind());
  
  var nodes4890 = $("<span>");
  node2334.append(nodes4890);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl931();
  }));
  
  function renderControl931() {
    subs__.addSub((elements)(function(elements, callback) {
      var root6410 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6410); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4890;
      nodes4890 = node.contents();
      oldNodes.replaceWith(nodes4890);
    }));
  }
  renderControl931();
  root6409.append(node2334);
  callback(root6409); return subs__;
  
  
  return subs__;
};

ui.headerCol = function(width, style, elements, callback) {
  var root6411 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  
  var node2335 = $("<td>");
  
  var ref2296 = width;
  if(ref2296.get() !== null) {
    node2335.attr('width', ref2296.get());
    subs__.addSub(ref2296.addEventListener('change', function(_, ref, val) {
      node2335.attr('width', val);
    }));
    
  }
  subs__.addSub(ref2296.rebind());
  
  var ref2297 = style;
  if(ref2297.get() !== null) {
    node2335.attr('class', ref2297.get());
    subs__.addSub(ref2297.addEventListener('change', function(_, ref, val) {
      node2335.attr('class', val);
    }));
    
  }
  subs__.addSub(ref2297.rebind());
  
  
  var node2336 = $("<strong>");
  
  var nodes4891 = $("<span>");
  node2336.append(nodes4891);
  subs__.addSub(mobl.ref(elements).addEventListener('change', function() {
    renderControl932();
  }));
  
  function renderControl932() {
    subs__.addSub((elements)(function(elements, callback) {
      var root6412 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      callback(root6412); return subs__;
      return subs__;
    }, function(node) {
      var oldNodes = nodes4891;
      nodes4891 = node.contents();
      oldNodes.replaceWith(nodes4891);
    }));
  }
  renderControl932();
  node2335.append(node2336);
  root6411.append(node2335);
  callback(root6411); return subs__;
  
  
  
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
  items.list(function(coll3178) {
    coll3178 = coll3178.reverse();
    function processOne202() {
      var item;
      item = coll3178.pop();
      var result__ = item == it;
      if(result__) {
        var result__ = counter;
        if(callback && callback.apply) callback(result__);
        return;
        var result__ = counter + 1;
        counter = result__;
        
        if(coll3178.length > 0) processOne202(); else rest202();
        
      } else {
        {
          var result__ = counter + 1;
          counter = result__;
          
          if(coll3178.length > 0) processOne202(); else rest202();
          
        }
      }
    }
    function rest202() {
      var result__ = -1;
      if(callback && callback.apply) callback(result__);
      return;
      if(callback && callback.apply) callback(); return;
    }
    if(coll3178.length > 0) processOne202(); else rest202();
  });
  
};


ui.mMasterDetail = function(items, masterItem, detail, elements, callback) {
  var root6413 = $("<span>");
  var subs__ = new mobl.CompSubscription();
  items.get().one(function(result__) {
    var tmp4487 = result__;
    var current = mobl.ref(result__);
    
    var node2337 = $("<div>");
    node2337.attr('width', "100%");
    
    
    var node2338 = $("<div>");
    node2338.attr('style', "float:left; width:33%; position:relative; border-right: solid 1px #cccccc;");
    
    var nodes4894 = $("<span>");
    node2338.append(nodes4894);
    subs__.addSub((ui.group)(function(_, callback) {
      var root6416 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node2342 = mobl.loadingSpan();
      root6416.append(node2342);
      var list407;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList407 = function() {
        var subs__ = listSubs__;
        list407 = items.get();
        list407.list(function(results407) {
          node2342.empty();
          for(var i1253 = 0; i1253 < results407.length; i1253++) {
            (function() {
              var iternode407 = $("<span>");
              node2342.append(iternode407);
              var it;
              it = mobl.ref(mobl.ref(results407), i1253);
              var result__ = it.get() == current.get();
              var tmp4463 = mobl.ref(result__);
              subs__.addSub(it.addEventListener('change', function() {
                tmp4463.set(it.get() == current.get());
              }));
              subs__.addSub(current.addEventListener('change', function() {
                tmp4463.set(it.get() == current.get());
              }));
              
              
              var node2343 = $("<span>");
              iternode407.append(node2343);
              var condSubs574 = new mobl.CompSubscription();
              subs__.addSub(condSubs574);
              var oldValue574;
              var renderCond574 = function() {
                var value2558 = tmp4463.get();
                if(oldValue574 === value2558) return;
                oldValue574 = value2558;
                var subs__ = condSubs574;
                subs__.unsubscribe();
                node2343.empty();
                if(value2558) {
                  var nodes4895 = $("<span>");
                  node2343.append(nodes4895);
                  subs__.addSub((ui.item)(mobl.ref(ui.selectedItemStyle), mobl.ref(ui.itemPushedStyle), mobl.ref(null), mobl.ref(null), mobl.ref(false), function(_, callback) {
                    var root6417 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    ui.indexOf(it.get(), items.get(), function(result__) {
                      var tmp4490 = result__;
                      var tmp4460 = mobl.ref(result__);
                      subs__.addSub(it.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp4488 = result__;
                          var result__ = tmp4488;
                          tmp4460.set(result__);
                          
                        });
                      }));
                      subs__.addSub(items.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp4489 = result__;
                          var result__ = tmp4489;
                          tmp4460.set(result__);
                          
                        });
                      }));
                      
                      var nodes4896 = $("<span>");
                      root6417.append(nodes4896);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl934();
                      }));
                      
                      function renderControl934() {
                        subs__.addSub((masterItem.get())(it, tmp4460, function(elements, callback) {
                          var root6418 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root6418); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes4896;
                          nodes4896 = node.contents();
                          oldNodes.replaceWith(nodes4896);
                        }));
                      }
                      renderControl934();
                      callback(root6417); return subs__;
                      
                    });
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes4895;
                    nodes4895 = node.contents();
                    oldNodes.replaceWith(nodes4895);
                  }));
                  
                  
                } else {
                  var result__ = function(event, callback) {
                                   if(event && event.stopPropagation) event.stopPropagation();
                                   var result__ = it.get();
                                   current.set(result__);
                                   var result__ = ui.scrollUp();
                                   if(callback && callback.apply) callback(); return;
                                 };
                  var tmp4462 = mobl.ref(result__);
                  
                  var nodes4897 = $("<span>");
                  node2343.append(nodes4897);
                  subs__.addSub((ui.item)(mobl.ref(ui.itemStyle), mobl.ref(ui.itemPushedStyle), tmp4462, mobl.ref(null), mobl.ref(true), function(_, callback) {
                    var root6419 = $("<span>");
                    var subs__ = new mobl.CompSubscription();
                    ui.indexOf(it.get(), items.get(), function(result__) {
                      var tmp4493 = result__;
                      var tmp4461 = mobl.ref(result__);
                      subs__.addSub(it.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp4491 = result__;
                          var result__ = tmp4491;
                          tmp4461.set(result__);
                          
                        });
                      }));
                      subs__.addSub(items.addEventListener('change', function() {
                        ui.indexOf(it.get(), items.get(), function(result__) {
                          var tmp4492 = result__;
                          var result__ = tmp4492;
                          tmp4461.set(result__);
                          
                        });
                      }));
                      
                      var nodes4898 = $("<span>");
                      root6419.append(nodes4898);
                      subs__.addSub(masterItem.addEventListener('change', function() {
                        renderControl935();
                      }));
                      
                      function renderControl935() {
                        subs__.addSub((masterItem.get())(it, tmp4461, function(elements, callback) {
                          var root6420 = $("<span>");
                          var subs__ = new mobl.CompSubscription();
                          callback(root6420); return subs__;
                          return subs__;
                        }, function(node) {
                          var oldNodes = nodes4898;
                          nodes4898 = node.contents();
                          oldNodes.replaceWith(nodes4898);
                        }));
                      }
                      renderControl935();
                      callback(root6419); return subs__;
                      
                    });
                    return subs__;
                  }, function(node) {
                    var oldNodes = nodes4897;
                    nodes4897 = node.contents();
                    oldNodes.replaceWith(nodes4897);
                  }));
                  
                  
                }
              };
              renderCond574();
              subs__.addSub(tmp4463.addEventListener('change', function() {
                renderCond574();
              }));
              
              
              var oldNodes = iternode407;
              iternode407 = iternode407.contents();
              oldNodes.replaceWith(iternode407);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list407.addEventListener('change', function() { listSubs__.unsubscribe(); renderList407(true); }));
          subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList407(true); }));
        });
      };
      renderList407();
      
      callback(root6416); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4894;
      nodes4894 = node.contents();
      oldNodes.replaceWith(nodes4894);
    }));
    node2337.append(node2338);
    
    var node2339 = $("<div>");
    node2339.attr('style', "float:left; width:66.5%; position:relative; margin-left: 0.5%;");
    
    var nodes4892 = $("<span>");
    node2339.append(nodes4892);
    subs__.addSub((ui.group)(function(_, callback) {
      var root6414 = $("<span>");
      var subs__ = new mobl.CompSubscription();
      
      var node2340 = mobl.loadingSpan();
      root6414.append(node2340);
      var list406;
      var listSubs__ = new mobl.CompSubscription();
      subs__.addSub(listSubs__);
      var renderList406 = function() {
        var subs__ = listSubs__;
        list406 = items.get();
        list406.list(function(results406) {
          node2340.empty();
          for(var i1252 = 0; i1252 < results406.length; i1252++) {
            (function() {
              var iternode406 = $("<span>");
              node2340.append(iternode406);
              var it;
              it = mobl.ref(mobl.ref(results406), i1252);
              var result__ = it.get() == current.get();
              var tmp4464 = mobl.ref(result__);
              subs__.addSub(it.addEventListener('change', function() {
                tmp4464.set(it.get() == current.get());
              }));
              subs__.addSub(current.addEventListener('change', function() {
                tmp4464.set(it.get() == current.get());
              }));
              
              
              var node2341 = $("<span>");
              iternode406.append(node2341);
              var condSubs573 = new mobl.CompSubscription();
              subs__.addSub(condSubs573);
              var oldValue573;
              var renderCond573 = function() {
                var value2557 = tmp4464.get();
                if(oldValue573 === value2557) return;
                oldValue573 = value2557;
                var subs__ = condSubs573;
                subs__.unsubscribe();
                node2341.empty();
                if(value2557) {
                  var nodes4893 = $("<span>");
                  node2341.append(nodes4893);
                  subs__.addSub(detail.addEventListener('change', function() {
                    renderControl933();
                  }));
                  
                  function renderControl933() {
                    subs__.addSub((detail.get())(current, function(elements, callback) {
                      var root6415 = $("<span>");
                      var subs__ = new mobl.CompSubscription();
                      callback(root6415); return subs__;
                      return subs__;
                    }, function(node) {
                      var oldNodes = nodes4893;
                      nodes4893 = node.contents();
                      oldNodes.replaceWith(nodes4893);
                    }));
                  }
                  renderControl933();
                  
                  
                } else {
                  
                }
              };
              renderCond573();
              subs__.addSub(tmp4464.addEventListener('change', function() {
                renderCond573();
              }));
              
              
              var oldNodes = iternode406;
              iternode406 = iternode406.contents();
              oldNodes.replaceWith(iternode406);
              
              
            }());
          }
          mobl.delayedUpdateScrollers();
          subs__.addSub(list406.addEventListener('change', function() { listSubs__.unsubscribe(); renderList406(true); }));
          subs__.addSub(items.addEventListener('change', function() { listSubs__.unsubscribe(); renderList406(true); }));
        });
      };
      renderList406();
      
      callback(root6414); return subs__;
      
      return subs__;
    }, function(node) {
      var oldNodes = nodes4892;
      nodes4892 = node.contents();
      oldNodes.replaceWith(nodes4892);
    }));
    node2337.append(node2339);
    root6413.append(node2337);
    callback(root6413); return subs__;
    
    
    
    
    
  });
  return subs__;
};
ui.activeTabButtonStyle = 'ui__activeTabButtonStyle';
ui.inActiveTabButtonStyle = 'ui__inActiveTabButtonStyle';
ui.section = 'ui__section';
ui.logoStyle = 'ui__logoStyle';
