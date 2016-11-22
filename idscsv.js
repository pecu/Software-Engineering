
 function IDS(color){
  d3.csv("https://gigigirl.github.io/Software-Engineering/dataI.csv", 

  // function pologonWord(color)
  // {
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
  var svgrect = d3.select("body").append("svg")
       .attr("height",227);
       .attr("width",460);
  // pologonWord("brown");
  // pologonWord(polygonDataD1,"black");
  // pologonWord(polygonDataD2,"purple");
  // pologonWord(polygonDataS,"purple");
});


