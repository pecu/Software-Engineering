
 function IDS(){
  var polygonDataI="https://gigigirl.github.io/Software-Engineering/dataI.csv";
  var polygonDataD1="https://gigigirl.github.io/Software-Engineering/dataD1.csv";
  var polygonDataD2="https://gigigirl.github.io/Software-Engineering/dataD2.csv";
  var polygonDataS="https://gigigirl.github.io/Software-Engineering/dataS.csv";

  function pologonWord(I,color)
  {
   //var svgrect = d3.select("body").append("svg")
       //.attr("height",320)
       //.attr("width",130);
   var polygonFunction = d3.line()
         .x(function(d) { return d.size; })
         .y(function(d) { return d.text; });
   var pologon = svgrect.append("path")
        .attr("d",polygonFunction(I))
        .attr("stroke","none")
        .attr("fill",color)
        .attr("stroke-width",1)

  }
    var svgrect = d3.select(".featured").append("svg")
       .attr("height",227)
       .attr("width",460);


  d3.csv(polygonDataI),function(data){
    pologonWord(data,"brown");
  };
  d3.csv(polygonDataD1),function(data){
    pologonWord(data,"black");
  };
  d3.csv(polygonDataD2),function(data){
    pologonWord(data,"black");
  };
  d3.csv(polygonDataS),function(data){
    pologonWord(data,"purple");
  };

}


