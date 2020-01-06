/*
 Highcharts JS v7.2.1 (2019-10-31)

 Dependency wheel module

 (c) 2010-2018 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/modules/dependency-wheel",["highcharts","highcharts/modules/sankey"],function(d){a(d);a.Highcharts=d;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function d(a,d,n,b){a.hasOwnProperty(d)||(a[d]=b.apply(null,n))}a=a?a._modules:{};d(a,"modules/dependency-wheel.src.js",[a["parts/Globals.js"]],function(a){var d=a.seriesTypes.sankey.prototype;
a.seriesType("dependencywheel","sankey",{center:[null,null],curveFactor:.6,startAngle:0},{orderNodes:!1,getCenter:a.seriesTypes.pie.prototype.getCenter,createNodeColumns:function(){var a=[this.createNodeColumn()];this.nodes.forEach(function(b){b.column=0;a[0].push(b)});return a},getNodePadding:function(){return this.options.nodePadding/Math.PI},createNode:function(a){var b=d.createNode.call(this,a);b.index=this.nodes.length-1;b.getSum=function(){return b.linksFrom.concat(b.linksTo).reduce(function(a,
b){return a+b.weight},0)};b.offset=function(a){function h(a){return a.fromNode===b?a.toNode:a.fromNode}var f=0,c,g=b.linksFrom.concat(b.linksTo);g.sort(function(a,b){return h(a).index-h(b).index});for(c=0;c<g.length;c++)if(h(g[c]).index>b.index){g=g.slice(0,c).reverse().concat(g.slice(c).reverse());var m=!0;break}m||g.reverse();for(c=0;c<g.length;c++){if(g[c]===a)return f;f+=g[c].weight}};return b},translate:function(){var n=this.options,b=2*Math.PI/(this.chart.plotHeight+this.getNodePadding()),m=
this.getCenter(),h=(n.startAngle-90)*a.deg2rad;d.translate.call(this);this.nodeColumns[0].forEach(function(a){var c=a.shapeArgs,g=m[0],d=m[1],f=m[2]/2,k=f-n.nodeWidth,l=h+b*c.y;c=h+b*(c.y+c.height);a.angle=l+(c-l)/2;a.shapeType="arc";a.shapeArgs={x:g,y:d,r:f,innerR:k,start:l,end:c};a.dlBox={x:g+Math.cos((l+c)/2)*(f+k)/2,y:d+Math.sin((l+c)/2)*(f+k)/2,width:1,height:1};a.linksFrom.forEach(function(a){var c,e=a.linkBase.map(function(e,m){e*=b;var f=Math.cos(h+e)*(k+1),l=Math.sin(h+e)*(k+1),p=n.curveFactor;
c=Math.abs(a.linkBase[3-m]*b-e);c>Math.PI&&(c=2*Math.PI-c);c*=k;c<k&&(p*=c/k);return{x:g+f,y:d+l,cpX:g+(1-p)*f,cpY:d+(1-p)*l}});a.shapeArgs={d:["M",e[0].x,e[0].y,"A",k,k,0,0,1,e[1].x,e[1].y,"C",e[1].cpX,e[1].cpY,e[2].cpX,e[2].cpY,e[2].x,e[2].y,"A",k,k,0,0,1,e[3].x,e[3].y,"C",e[3].cpX,e[3].cpY,e[0].cpX,e[0].cpY,e[0].x,e[0].y]}})})},animate:function(d){if(!d){var b=a.animObject(this.options.animation).duration/2/this.nodes.length;this.nodes.forEach(function(a,d){var f=a.graphic;f&&(f.attr({opacity:0}),
setTimeout(function(){f.animate({opacity:1},{duration:b})},b*d))},this);this.points.forEach(function(a){var b=a.graphic;!a.isNode&&b&&b.attr({opacity:0}).animate({opacity:1},this.options.animation)},this);this.animate=null}}},{setState:a.NodesMixin.setNodeState,getDataLabelPath:function(a){var b=this.series.chart.renderer,d=this.shapeArgs,h=0>this.angle||this.angle>Math.PI,f=d.start,c=d.end;this.dataLabelPath||(this.dataLabelPath=b.arc({open:!0}).add(a));this.dataLabelPath.attr({x:d.x,y:d.y,r:d.r+
(this.dataLabel.options.distance||0),start:h?f:c,end:h?c:f,clockwise:+h});return this.dataLabelPath},isValid:function(){return!0}});""});d(a,"masters/modules/dependency-wheel.src.js",[],function(){})});
//# sourceMappingURL=dependency-wheel.js.map