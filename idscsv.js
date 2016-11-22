
 function IDS(){
  var polygonDataI="https://gigigirl.github.io/Software-Engineering/dataI.csv"

  var polygonDataD1="https://gigigirl.github.io/Software-Engineering/dataD1.csv"
  var polygonDataD2="https://gigigirl.github.io/Software-Engineering/dataD2.csv"

  var polygonDataS="https://gigigirl.github.io/Software-Engineering/dataS.csv"

  function pologonWord(I,color)
  {
   //var svgrect = d3.select("body").append("svg")
       //.attr("height",320)
       //.attr("width",130);
   var polygonFunction = d3.line()
         .x(function(d) { return d.x; })
         .y(function(d) { return d.y; });
   var pologon = svgrect.append("path")
        .attr("d",polygonFunction(I))
        .attr("stroke","none")
        .attr("fill",color)
        .attr("stroke-width",1)
  }

  d3.csv(pologonWord(polygonDataI,"brown"),function(data){
      var svgrect = d3.select("body").append("svg")
       .attr("height",227);
       .attr("width",460);
  });
  d3.csv(pologonWord(polygonDataD1,"black"),function(data){
      var svgrect = d3.select("body").append("svg")
       .attr("height",227);
       .attr("width",460);
  });
  d3.csv(pologonWord(polygonDataD2,"purple"),function(data){
      var svgrect = d3.select("body").append("svg")
       .attr("height",227);
       .attr("width",460);
  });
  d3.csv(pologonWord(polygonDataS,"purple"),function(data){
      var svgrect = d3.select("body").append("svg")
       .attr("height",227);
       .attr("width",460);
  });
 }
  
