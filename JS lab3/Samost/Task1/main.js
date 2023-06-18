let svg = d3.select(".graphic")
    .append("svg")
    .attr("width", "600")
    .attr("height", "600");
let centerX = svg.attr("width") / 2;
let centerY = svg.attr("height") / 2;

let RADIUS = 7;
let a = 50;
let flag = true;


function Draw() {
    if (!flag) {
        return;
    }
    flag = false;

    if (svg.selectAll("circle").length !== 0) {   // чистим
        svg.selectAll("circle").remove();
    }

    svg.append("circle")
        .attr("cx", centerX + 2 * a * Math.sin(0) + a * Math.sin(2 * 0))
        .attr("cy", centerY + 2 * a * Math.cos(0) + a * Math.cos(2 * 0))
        .attr("r", RADIUS);

    let t = 0;
    r = setInterval(() => {
        t += Math.PI / 100;
        svg.select("circle")
            .attr("cx", centerX + 2 * a * Math.sin(t) + a * Math.sin(2 * t))
            .attr("cy", centerY + 2 * a * Math.cos(t) + a * Math.cos(2 * t))
            .attr("r", RADIUS);
    }, 10);
}