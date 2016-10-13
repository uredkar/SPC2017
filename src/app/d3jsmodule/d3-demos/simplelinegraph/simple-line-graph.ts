/**
 * This component is an adaptation of the "Drag & Zoom II" Example provided by
 * Mike Bostock at https://bl.ocks.org/mbostock/3127661b6f13f9316be745e77fdfb084
 *
 * The implementation has been modified to illustrate the use of inputs to control
 * the layout of the D3 visualization.
 */

import { Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChange } from '@angular/core';

import { D3Service, D3, ScaleTime, D3DragEvent, D3ZoomEvent, Selection, Line } from 'd3-ng2-service';

import { D3DataService } from '../../d3js.data.service';


export interface LineDatum {
    date: Date;
    close: number;
}



@Component({
    selector: 'app-simple-line-graph',
    styles: ['.line {  fill: none; stroke: steelblue; stroke-width: 2px;}'],
    template: '<svg style="stroke-width: 0px; background-color: blue;"> </svg>',
    providers: [ D3DataService]

})
export class SimpleLineGraph implements OnInit,  OnDestroy {

    @Input() width: number = 400;
    @Input() height: number = 400;
    @Input() phylloRadius: number = 7;
    @Input() pointRadius: number = 2;
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


        function zoomed(this: SVGSVGElement) {
            let e: D3ZoomEvent<SVGSVGElement, any> = d3.event;
            d3G.attr('transform', e.transform.toString());
        }

        if (this.parentNativeElement !== null) {



            d3ParentElement = d3.select(this.parentNativeElement);
            // set the dimensions and margins of the graph
            this.margin = { top: 20, right: 20, bottom: 30, left: 50 },
                this.width = 960 - this.margin.left - this.margin.right,
                this.height = 500 - this.margin.top - this.margin.bottom;

            this.d3Svg = d3ParentElement.select<SVGSVGElement>('svg');
                //.attr("width", width + margin.left + margin.right)
                //.attr("height", height + margin.top + margin.bottom)
                //.append("g");
                             //   .attr("transform",
                               /// "translate(" + margin.left + "," + margin.top + ")");

            this.d3Svg.attr('width', this.width);
            this.d3Svg.attr('height', this.height);

            
            // parse the date / time
            var parseTime = d3.timeParse("%d-%b-%y");

            // set the ranges
            var x = d3.scaleTime().range([0, this.width]);
            var y = d3.scaleLinear().range([this.height, 0]);

            // define the line
            this.valueline = d3.line<LineDatum>()
                .x(function (d) { return x(d.date); })
                .y(function (d) { return y(d.close); });

            // append the svg obgect to the body of the page
            // appends a 'group' element to 'svg'
            // moves the 'group' element to the top left margin
            //var svg = d3.select("body").append("svg")
            
            
            // Get the data
            var data1 = this.d3dataservice.getClosingPrice();
            var data = data1.map((d) => {
                return { date: parseTime(d.date), close:  +d.close } ;
            });
            // format the data
            var dtdata = data1.map((d) => {
                return  parseTime(d.date);
            });

            var xdomain = d3.extent<Date>(dtdata);
            // Scale the range of the data
            x.domain(xdomain);
            y.domain([0, d3.max(data,  (d) => { return d.close; })]);
            debugger;
            // Add the valueline path.
            this.d3Svg.append("path")
                .data([data])
                .attr("class", "line")
                .attr("d", this.valueline);

            // Add the X Axis
            this.d3Svg .append("g")
                .attr("transform", "translate(0," + this.height + ")")
                .call(d3.axisBottom(x));

            // Add the Y Axis
            this.d3Svg .append("g")
                .call(d3.axisLeft(y));

            
            
        }

    }

}
