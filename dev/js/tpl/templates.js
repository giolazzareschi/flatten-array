this["MDL"] = this["MDL"] || {};
this["MDL"]["templates"] = this["MDL"]["templates"] || {};
this["MDL"]["templates"]["index"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<div class=\"home-wrp\">\r\n	<h1>Flatten Array</h1>\r\n	<div class=\"inputs\">\r\n		<input id=\"toflatten\" placeholder=\"insert something like: [2,3,2,3,[2,3,[2,4],[3]],3]\" />\r\n		<button>Flatten!</button>\r\n	</div>\r\n	<div class=\"flatten-result\"></div>\r\n</div>";
},"useData":true});