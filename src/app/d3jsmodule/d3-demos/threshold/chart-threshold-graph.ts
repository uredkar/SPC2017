
import { Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChange } from '@angular/core';

import { D3Service, D3, ScaleTime, D3DragEvent, D3ZoomEvent, Selection, Line } from 'd3-ng2-service';

import { D3DataService } from '../../d3js.data.service';

interface LineDatum {
    date: Date;
    high: number;
    low:  number;
    close: number;
   
}

class LineData implements LineDatum
{
    date: Date;
    high: number;
    low: number;
    close: number;
}




@Component({
    selector: 'threshold-line-graph',
    template: '<svg></svg>',
    providers: [D3DataService]
    
    
})
export class ChartThresholdGraph implements OnInit, OnDestroy {

    private width: number = 500;
    private height: number = 800;
    private d3dataservice: D3DataService;
    private d3: D3;
    private parentNativeElement: any;
    private d3Svg: any;
    private d3G: Selection<SVGGElement, any, null, undefined>;

    private valueline: any;
    private area: any;
    private defs: any;
    private margin: any;
    private pattern: any;

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
            this.width = 800 - this.margin.left - this.margin.right;
            this.height = 500 - this.margin.top - this.margin.bottom;

            // parse the date / time
            var parseTime = d3.timeParse("%d-%b-%y");

            this.valueline = d3.line<LineDatum>()
                .x((d) => { return x(d.date); })
                .y((d) => { return y(d.close); });


            this.area = d3.area<LineDatum>()
                .x((d) => { return x(d.date); })
                .y0((d) => { return y(d.low); })
                .y1((d) => { return y(d.high); });

            this.d3Svg = d3ParentElement.select<SVGSVGElement>('svg')
                .attr('width', this.width + this.margin.left + this.margin.right)
                .attr('height', this.height + this.margin.top + this.margin.bottom)
                .append("g")
                .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");

                
            // Get the data
            var data1 = this.d3dataservice.getClosingPrice();
            var data = data1.map((d) => {
                var dat = new LineData();
                dat.date = parseTime(d.date);
                dat.close = +d.close;
                dat.high = +d.high;
                dat.low = +d.low;
                return dat;
           
            });

            // format the data
            var dtdata = data.map((d) => {
                return d.date;
            });

            var xdomain = d3.extent<Date>(dtdata);

            // set the ranges
            var x = d3.scaleTime().range([0, this.width]);
            var y = d3.scaleLinear().range([this.height, 0]);
            x.domain(xdomain);
            y.domain([0, d3.max(data, (d) => { return d.close; })]);

            this.d3Svg.append("linearGradient")
                .attr("id", "line-gradient")                // change from line to area
                .attr("gradientUnits", "userSpaceOnUse")
                .attr("x1", 0).attr("y1", y(0))
                .attr("x2", 0).attr("y2", y(600))
                .selectAll("stop")
                .data([
                    { offset: "0%", color: "red" },
                    { offset: "30%", color: "red" },
                    { offset: "45%", color: "black" },
                    { offset: "55%", color: "black" },
                    { offset: "60%", color: "lawngreen" },
                    { offset: "100%", color: "lawngreen" }
                ])
                .enter().append("stop")
                .attr("offset", function (d) { return d.offset; })
                .attr("stop-color", function (d) { return d.color; });   


            //this.defs = this.d3Svg.append("defs");
            //this.pattern = this.defs.append("pattern")
            //    .data([data]) //add the data to the <pattern> element
            //    //so it will be inherited by each <path> we append
            //    .attr("patternUnits", "userSpaceOnUse")
            //    .attr("patternContentUnits", "userSpaceOnUse")
            //    .attr("width", this.width)
            //    .attr("height", this.height)
            //    .attr("id", "strokePattern");

            // this.pattern.append("path")
            //    .attr("class", "historicRange between")
            //    .attr("d", this.area);

            //this.pattern.append("path")
            //    .attr("class", "historicRange above")
            //    .attr("d", this.area.y1(0)
            //        .y0((d) => { return y(d.high); })
            //    );

            //this.pattern.append("path")
            //    .attr("class", "historicRange below")
            //    .attr("d", this.area.y1((d) => { return y(d.low); })
            //        .y0(this.height)
            //    );


            // Add the valueline path.
            this.d3Svg.append("path")
                .datum(data) //add the data to the <pattern> element
                .attr("class", "thresholdline")
                .attr("d", this.valueline);
                

            // Add the X Axis
            this.d3Svg.append("g")
                .attr("transform", "translate(0," + this.height + ")")
                .call(d3.axisBottom(x));

            // Add the Y Axis
            this.d3Svg.append("g")
                .call(d3.axisLeft(y));



        }

    }
    ngOnInit2() {
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
            var parseTime = d3.timeParse("%d-%b-%y");

            this.valueline = d3.line<LineDatum>()
                .x(function (d) { return x(d.date); })
                .y(function (d) { return y(d.close); });


            this.area = d3.area<LineDatum>()
                .x(function (d) { return x(d.date); })
                .y0(function (d) { return y(d.low); })
                .y1(function (d) { return y(d.high); });

            this.d3Svg = d3ParentElement.select<SVGSVGElement>('svg')
                .attr('width', this.width + this.margin.left + this.margin.right)
                .attr('height', this.height + this.margin.top + this.margin.bottom)
                .append("g")
                .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");


            // Get the data
            var data1 = this.d3dataservice.getClosingPrice();
            var data = data1.map((d) => {
                
                return { date: parseTime(d.date), close: +d.close, high: +d.high, low: +d.low };
            });

            // format the data
            var dtdata = data.map((d) => {
                return d.date;
            });

            var xdomain = d3.extent<Date>(dtdata);

            // set the ranges
            var x = d3.scaleTime().range([0, this.width]);
            var y = d3.scaleLinear().range([this.height, 0]);
            x.domain(xdomain);
            y.domain([0, d3.max(data, (d) => { return d.close; })]);

            //this.defs = this.d3Svg.append("defs");
            
            //this.pattern = this.defs.append("pattern")
            //    .data([data])
            //    //so it will be inherited by each <path> we append
            //    .attr("patternUnits", "userSpaceOnUse")
            //    .attr("patternContentUnits", "userSpaceOnUse")
            //    .attr("width", this.width)
            //    .attr("height", this.height)
            //    .attr("id", "strokePattern");

            //this.pattern.append("path")
            //    .attr("class", "historicRange between")
            //    .attr("d", this.area);

            //this.pattern.append("path")
            //    .attr("class", "historicRange above")
            //    .attr("d", this.area.y1(0)
            //        .y0(function (d) { return y(d.high); })
            //    );

            //this.pattern.append("path")
            //    .attr("class", "historicRange below")
            //    .attr("d", this.area.y1(function (d) { return y(d.low); })
            //        .y0(this.height)
            //    );

  

            // Add the valueline path.
            this.d3Svg.append("path")
                .data([data])
                .attr("class", "line")
                .attr("d", this.valueline)
                .style("stroke", "url(#strokePattern)");

            // Add the X Axis
            this.d3Svg.append("g")
                .attr("transform", "translate(0," + this.height + ")")
                .call(d3.axisBottom(x));

            // Add the Y Axis
            this.d3Svg.append("g")
                .call(d3.axisLeft(y));



        }

    }

}


