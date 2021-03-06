function handleMouseOver(d, i, a) {
  g.select("#" + a[0].getAttribute("id"))
    .transition()
    .attr("y", 40)
    .transition()
    .attr("y", document.getElementById('navTop').clientHeight - 23);
}

function highlight(x) {
  x.style.cursor = "pointer";
}

function scrollpage() {
  $(".main").enable();
  $(".main").moveDown();
  $(".main").disable();
}

function jumppage() {
  $(".main").enable();
  $(".main").moveTo(2);
  $(".main").disable();
}

function clickroot(x) {
  d3.selectAll(".node")
    .filter(function(d) {
      return d.parent == null;
    })
    .select("rect")
    .transition()
    .duration(1000)
    .style("fill", "red")
    .transition()
    .duration(1000)
    .style("fill", "#FFD700");
}

function clickleaf(x) {
  d3.selectAll(".node")
    .filter(function(d) {
      return !Object.keys(d).includes("children");
    })
    .select("rect")
    .transition()
    .duration(1000)
    .style("fill", "red")
    .transition()
    .duration(1000)
    .style("fill", "#FFD700");
}

function clickmiddlelayer(x) {
  d3.selectAll(".node")
    .filter(function(d) {
      return d.parent != null && Object.keys(d).includes("children");
    })
    .select("rect")
    .transition()
    .duration(1000)
    .style("fill", "red")
    .transition()
    .duration(1000)
    .style("fill", "#FFD700");
}

function loaddata(x) {
  $(".uniquescrollbar").animate({
    scrollTop: $("#projectSelectorDropdown").offset().top + 80
  });

  $(".scrollable-menu li a").click(function() {
    var selText = $(this).text();
    $(this)
      .parents(".dropdown")
      .find(".dropdown-toggle")
      .val(selText);
    document.querySelector("#page2_go").style.opacity = 1;
  });
}
