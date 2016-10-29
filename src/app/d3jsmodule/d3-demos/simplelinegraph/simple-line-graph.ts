/**
 * This component is an adaptation of the "Drag & Zoom II" Example provided by
 * Mike Bostock at https://bl.ocks.org/mbostock/3127661b6f13f9316be745e77fdfb084
 *
 * The implementation has been modified to illustrate the use of inputs to control
 * the layout of the D3 visualization.
 */

import { Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChange } from '@angular/core';

import { D3Service, D3,  ScaleTime, D3DragEvent, D3ZoomEvent, Selection, Line } from 'd3-ng2-service';

import { D3DataService } from '../../d3js.data.service';


export interface LineDatum {
    date: Date;
    close: number;
}



@Component({
    selector: 'app-simple-line-graph',
    
    template: '<svg></svg>',
    styles: [
`
path.lineg {  
    fill: none; 
    stroke: steelblue; stroke-width: 2px;

}
`
    ],
    providers: [ D3DataService]

})
export class SimpleLineGraph implements OnInit,  OnDestroy {

    private width: number = 800;
    private height: number = 500;
    private d3dataservice: D3DataService;
    private d3: D3;
    private parentNativeElement: any;
    private d3Svg: any;
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
            this.margin = { top: 20, right: 10, bottom: 30, left: 50 };
            this.width = 960 - this.margin.left - this.margin.right;
            this.height = 500 - this.margin.top - this.margin.bottom;

            // parse the date / time
            var parseTime = d3.timeParse("%d-%b-%y");

            this.valueline = d3.line<LineDatum>()
                .x(function (d) { return x(d.date); })
                .y(function (d) { return y(d.close); });


            this.d3Svg = d3ParentElement.select<SVGSVGElement>('svg')
                            .attr('width', this.width + this.margin.left + this.margin.right)
                            .attr('height', this.height + this.margin.top + this.margin.bottom)
                            .append("g")
                            .attr("transform","translate(" + this.margin.left + "," + this.margin.top + ")");

                        
            // Get the data
            var data1 = this.d3dataservice.getClosingPrice();
            var data = data1.map((d) => {
                return { date: parseTime(d.date), close:  +d.close } ;
            });

            // format the data
            var dtdata = data.map((d) => {
                return  d.date;
            });

            var xdomain = d3.extent<Date>(dtdata);

            // set the ranges
            var x = d3.scaleTime().range([0, this.width]);
            var y = d3.scaleLinear().range([this.height, 0]);
            x.domain(xdomain);
            y.domain([0, d3.max(data, (d) => { return d.close; })]);

            // set the gradient
            this.d3Svg.append("linearGradient")
                .attr("id", "line-gradient")
                .attr("gradientUnits", "userSpaceOnUse")
                .attr("x1", 0).attr("y1", y(0))
                .attr("x2", 0).attr("y2", y(1000))
                .selectAll("stop")
                .data([
                    { offset: "0%", color: "red" },
                    { offset: "40%", color: "red" },
                    { offset: "40%", color: "black" },
                    { offset: "62%", color: "black" },
                    { offset: "62%", color: "lawngreen" },
                    { offset: "100%", color: "lawngreen" }
                ])
                .enter().append("stop")
                .attr("offset", function (d) { return d.offset; })
                .attr("stop-color", function (d) { return d.color; });


            // Add the valueline path.
            this.d3Svg.append("path")
                .data([data])
                .attr("class", "linex")
                .attr("d", this.valueline);

            // Add the X Axis
            this.d3Svg.append("g")
                .attr("transform", "translate(0," + this.height + ")")
                .call(d3.axisBottom(x)
                    .tickSizeInner(-this.height)
                    .tickSizeOuter(0)
                    .tickPadding(10)
                );

            // Add the Y Axis
            this.d3Svg.append("g")
                .call(d3.axisLeft(y)
                    .tickSizeInner(-this.width)
                    .tickSizeOuter(0)
                    .tickPadding(10)
                    );

            
            
        }

    }

}
