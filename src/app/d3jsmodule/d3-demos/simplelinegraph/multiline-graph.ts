
import { Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChange } from '@angular/core';

import { D3Service, D3,  ScaleTime, D3DragEvent, D3ZoomEvent, Selection, Line } from 'd3-ng2-service';

import { D3DataService } from '../../d3js.data.service';


export interface LineTempDatum {
    date: Date;
    temperature: number;
    
}



@Component({
    selector: 'app-multi-line-graph',
    template: '<svg></svg>',
    providers: [ D3DataService ]

})
export class MultiLineGraph implements OnInit,  OnDestroy {

    private width: number = 1060;
    private height: number = 800;
    private d3dataservice: D3DataService;
    private d3: D3;
    private parentNativeElement: any;
    private d3Svg: Selection<SVGSVGElement, any, null, undefined>;
    private d3G: Selection<SVGGElement, any, null, undefined>;

    private valueline: any;
    private margin: any;
    constructor(element: ElementRef, d3Service: D3Service, d3dataservice: D3DataService) {
        this.d3dataservice = d3dataservice;
        this.d3 = d3Service.getD3();
        this.parentNativeElement = element.nativeElement;
    }

    ngOnDestroy() {
        if (this.d3Svg.empty && !this.d3Svg.empty()) {
            this.d3Svg.selectAll('*').remove();
        }
    }

    ngOnInit() {
        let d3 = this.d3;
        let d3ParentElement: Selection<HTMLElement, any, null, undefined>;
        let d3G: Selection<SVGGElement, any, null, undefined>;


        
        if (this.parentNativeElement !== null) {


            
            d3ParentElement = d3.select(this.parentNativeElement);
            // set the dimensions and margins of the graph
            this.margin = { top: 120, right: 120, bottom: 120, left: 120 };
            this.width = 1060 - this.margin.left - this.margin.right;
            this.height = 800 - this.margin.top - this.margin.bottom;

            // parse the date / time
            var parseTime = d3.timeParse("%Y%m%d");

            var x = d3.scaleTime().range([0, this.width]),
                y = d3.scaleLinear().range([this.height, 0]),
                z = d3.scaleOrdinal(d3.schemeCategory10);

            this.valueline = d3.line<LineTempDatum>()
                .x(function (d) { return x(d.date); })
                .y(function (d) { return y(d.temperature); });


            let svg = d3ParentElement.select<SVGSVGElement>('svg')
                            .attr('width', this.width + this.margin.left + this.margin.right)
                            .attr('height', this.height + this.margin.top + this.margin.bottom)
                            .append("g")
                            .attr("transform","translate(" + this.margin.left + "," + this.margin.top + ")");

                        
            // Get the data
            var data1 = this.d3dataservice.getMultiCityWeather();
           
           
            
            

/*
var svg = d3.select("svg"),
    margin = {top: 20, right: 80, bottom: 30, left: 50},
    width = svg.attr("width") - margin.left - margin.right,
    height = svg.attr("height") - margin.top - margin.bottom,
    g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var parseTime = d3.timeParse("%Y%m%d");

var x = d3.scaleTime().range([0, width]),
    y = d3.scaleLinear().range([height, 0]),
    z = d3.scaleOrdinal(d3.schemeCategory10);

var line = d3.line()
    .curve(d3.curveBasis)
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.temperature); });

d3.tsv("data.tsv", type, function(error, data) {
  if (error) throw error;

  var cities = data.columns.slice(1).map(function(id) {
    return {
      id: id,
      values: data.map(function(d) {
        return {date: d.date, temperature: d[id]};
      })
    };
  });

  x.domain(d3.extent(data, function(d) { return d.date; }));

  y.domain([
    d3.min(cities, function(c) { return d3.min(c.values, function(d) { return d.temperature; }); }),
    d3.max(cities, function(c) { return d3.max(c.values, function(d) { return d.temperature; }); })
  ]);

  z.domain(cities.map(function(c) { return c.id; }));

  g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  g.append("g")
      .attr("class", "axis axis--y")
      .call(d3.axisLeft(y))
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("fill", "#000")
      .text("Temperature, ºF");

  var city = g.selectAll(".city")
    .data(cities)
    .enter().append("g")
      .attr("class", "city");

  city.append("path")
      .attr("class", "line")
      .attr("d", function(d) { return line(d.values); })
      .style("stroke", function(d) { return z(d.id); });

  city.append("text")
      .datum(function(d) { return {id: d.id, value: d.values[d.values.length - 1]}; })
      .attr("transform", function(d) { return "translate(" + x(d.value.date) + "," + y(d.value.temperature) + ")"; })
      .attr("x", 3)
      .attr("dy", "0.35em")
      .style("font", "10px sans-serif")
      .text(function(d) { return d.id; });
});

function type(d, _, columns) {
  d.date = parseTime(d.date);
  for (var i = 1, n = columns.length, c; i < n; ++i) d[c = columns[i]] = +d[c];
  return d;
}

            */            
            
        }

    }

}
