var app = angular.module("app", []);

var width = 323;
var hieght = 200;
var xOrigin = $("html").width() / 2;
var yOrigin = $("html").height() / 2;
var xlist = [0, 1, -1];
var ylist = [0, 1, -1];
var coordslist = [
	{x:0, y:0},
	{x:1, y:0},
	{x:-1, y:0},
	{x:0, y:1},
	{x:0, y:-1},
	{x:1, y:1},
	{x:1, y:2},
	{x:2, y:1},
	{x:1, y:-2},
	{x:-1, y:2},
	{x:2, y:1},
	{x:-2, y:1},
	{x:2, y:-1},
];

app.controller("appController", ["$scope", function($scope){
	$scope.tiles = [];
	$scope.addTile = function(){
		var coords = coordslist.shift();
		$scope.tiles.push(new Tile(coords.x, coords.y));
	};
}]);

// yo so: what you gotta do is have 2 arrays with 0 to infinity. check to see if the current combo exists and if not create it and add that touple to the array of tiles.
//
class Tile{
	constructor(x, y){
		this.x = x;
		this.y = y;
		this.text = "Lorem Ipsum";
	}

	getCssX(){
		return	(xOrigin - 161.5) + 323 * this.x;
	}

	getCssY(){
		return	(yOrigin - 100) + -200 * this.y;
	}
}
