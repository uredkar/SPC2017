/// <reference path="../../../../../typings/crossfilter/crossfilter.d.ts" />
/// <reference path="../../../../../typings/d3/d3.d.ts" />
/// <reference path="../../../../../typings/dcjs/dc.d.ts" />




import { Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChange } from '@angular/core';

import { D3Service, D3, ScaleTime, D3DragEvent, D3ZoomEvent, DSVRowString, Selection, Line } from 'd3-ng2-service';

import { D3DataService } from '../../d3js.data.service';




import  * as dc from 'dc';




export interface LineDatum {
    FID : string,
    publicid : string,
    origintime : string,
    long : number,
    lat : number,
    depth : number,
    mag : number,
    magnitudetype : string,
    status : string,
    phases : string,
    type: string,
    agency: string,
    updatetime : Date,
    origin_geom: string,
    dtg1: string,
    dtg: Date
    
}

export class CLineTempData implements LineDatum {
    FID: string;
    publicid: string;
    origintime: string;
    long: number;
    lat: number;
    depth: number;
    mag: number;
    magnitudetype: string;
    status: string;
    phases: string;
    type: string;
    agency: string;
    updatetime: Date;
    origin_geom: string;
    dtg1: string;
    dtg: Date;
}


@Component({
    selector: 'app-crossfilter-eq-graph',
    templateUrl: './crossfilter.component.html',

    providers: [D3DataService]

})
export class CrossFilterComponent implements OnInit, OnDestroy {

    private width: number = 1060;
    private height: number = 800;
    private d3dataservice: D3DataService;
    private d3: D3;
    //private parentNativeElement: any;
    //private d3Svg: any;
    //private d3G: Selection<SVGGElement, any, null, undefined>;
    private d2: DC.Base;
    private valueline: any;
    private margin: any;
    
    
    // Create the dc.js chart objects & link to div
    

    constructor(element: ElementRef, d3Service: D3Service, d3dataservice: D3DataService) {
        this.d3dataservice = d3dataservice;
        this.d3 = d3Service.getD3();
        //this.parentNativeElement = element.nativeElement;
        
        
    }

    ngOnDestroy() {
        
    }

    ngOnInit() {

        
        
        let d3 = this.d3;
        
        //let d3ParentElement: Selection<HTMLElement, any, null, undefined>;
        //let d3G: Selection<SVGGElement, any, null, undefined>;
        let dc2 = dc;
  
        
        //var dataTable = dc2.dataTable("#dc-table-graph");
        //var magnitudeChart = dc2.barChart("#dc-magnitude-chart");
        //var depthChart = dc2.barChart("#dc-depth-chart");
        //var dayOfWeekChart = dc2.rowChart("#dc-dayweek-chart");
        //var islandChart = dc2.pieChart("#dc-island-chart");
        //var timeChart = dc2.lineChart("#dc-time-chart");


        var magnitudeChart = dc.barChart("#dc-magnitude-chart");
        var depthChart = dc.barChart("#dc-depth-chart");
        var timeChart = dc.lineChart("#dc-time-chart");
        var dataTable = dc.dataTable("#dc-table-graph");
        
        var qs = crossfilter.quicksort;

        //if (this.parentNativeElement !== null) {

            //d3ParentElement = d3.select(this.parentNativeElement);


            // set the dimensions and margins of the graph
            this.margin = { top: 20, right: 10, bottom: 30, left: 50 };
            this.width = 960 - this.margin.left - this.margin.right;
            this.height = 500 - this.margin.top - this.margin.bottom;

            // parse the date / time
            var parseTime = d3.timeParse("%d-%b-%y");



            //this.d3Svg = d3ParentElement.select<SVGSVGElement>('svg')
            //    .attr('width', this.width + this.margin.left + this.margin.right)
            //    .attr('height', this.height + this.margin.top + this.margin.bottom)
            //    .append("g")
            //    .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");

            var dtgFormat = d3.timeParse("%Y-%m-%dT%H:%M:%S");
            var dtgFormat2 = d3.timeParse("%a %e %b %H:%M");
            // load data from a csv file
            var dataCsv = this.d3dataservice.getEq();

            var data = d3.csvParse(dataCsv, (row : DSVRowString, index, columns): LineDatum => {

                // format our data

                
                var d = new CLineTempData();
                d.dtg1 = row["origintime"].substr(0, 10) + " " + row["origintime"].substr(11, 8);
                d.dtg = dtgFormat(row["origintime"].substr(0, 19));
                d.lat = +row["latitude"];
                d.long = +row["longitude"];

                d.mag = Math.round(+row["magnitude"]);
                d.depth = Math.round(+row["depth"]);

                return d;
            });

            // Run the data through crossfilter and load our 'facts'
            
            
            var facts = crossfilter(data);

                   
            var all = facts.groupAll();

            // for Magnitude
            var magValue = facts.dimension(function (d) {
                return d.mag;       // add the magnitude dimension
            });
            var magValueGroupSum = magValue.group()
                .reduceSum(function (d) { return d.mag; });	// sums 

            var magValueGroupCount = magValue.group().reduceCount();

            // For datatable
            var timeDimension = facts.dimension(function (d) {
                return d.dtg;
            });
            // for Depth
            var depthValue = facts.dimension(function (d) {
                return d.depth;
            });
            var depthValueGroup = depthValue.group();

            // time chart
            var volumeByHour = facts.dimension(function (d) {
                return d3.timeHour(d.dtg);
            });

            // define a daily volume Dimension
            var volumeByDay = facts.dimension(function (d) {
                return d3.timeDay(d.dtg);
            });
            // map/reduce to group sum
            var volumeByDayGroup = volumeByDay.group()
                .reduceCount();


            var volumeByHourGroup = volumeByHour.group().reduceCount();

            // row chart Day of Week
            var dayOfWeek = facts.dimension(function (d) {
                var day = d.dtg.getDay();
                switch (day) {
                    case 0:
                        return "0.Sun";
                    case 1:
                        return "1.Mon";
                    case 2:
                        return "2.Tue";
                    case 3:
                        return "3.Wed";
                    case 4:
                        return "4.Thu";
                    case 5:
                        return "5.Fri";
                    case 6:
                        return "6.Sat";
                }
            });
            var dayOfWeekGroup = dayOfWeek.group();

            // Pie Chart
            var islands = facts.dimension(function (d) {
                if (d.lat <= -40.555907 && d.long <= 174.590607)
                    return "South";
                else
                    return "North";
            });
            var islandsGroup = islands.group();

            // Create datatable dimension
            var timeDimension = facts.dimension(function (d) {
                return d.dtg;
            });

            // Setup the charts

            // count all the facts
            dc2.dataCount(".dc-data-count")
                .dimension(facts)
                .group(all);


            // Magnitide Bar Graph Counted
            magnitudeChart.width(480)
                .height(150)
                .margins({ top: 10, right: 10, bottom: 20, left: 40 })
                .dimension(magValue)
                .group(magValueGroupCount)
                .transitionDuration(500)
                .centerBar(true)
                .gap(65)  // 65 = norm
                //    .filter([3, 5])
                .x(d3.scaleLinear().domain([0.5, 7.5]))
                .elasticY(true)
                .xAxis().tickFormat();

            // Depth bar graph
            depthChart.width(480)
                .height(150)
                .margins({ top: 10, right: 10, bottom: 20, left: 40 })
                .dimension(depthValue)
                .group(depthValueGroup)
                .transitionDuration(500)
                .centerBar(true)
                .gap(1)
                .x(d3.scaleLinear().domain([0, 100]))
                .elasticY(true)
                .xAxis().tickFormat(function (v) { return v; });

            
            // format the data
            var dtdata = data.map((d) => {
                return d.dtg;
            });

            var xdomain = d3.extent<Date>(dtdata);
            // time graph
            timeChart.width(960)
                .height(150)
                .transitionDuration(500)
                //    .mouseZoomable(true)
                .margins({ top: 10, right: 10, bottom: 20, left: 40 })
                .dimension(volumeByHour)
                .group(volumeByHourGroup)
                //    .brushOn(false)			// added for title
                
                .elasticY(true)
                .x(d3.scaleTime().domain(xdomain))
                .xAxis();

            
            

            
            // Table of earthquake data
            dataTable.width(960).height(800)
                .dimension(timeDimension)
                .group(function (d) {
                    return "Earthquake Table"
                })
                .size(10)
                .columns([
                    function (d) { return d.dtg; },
                    function (d) { return d.lat; },
                    function (d) { return d.long; },
                    function (d) { return d.depth; },
                    function (d) { return d.mag; },
                    function (d) { return '<a href=\"http://maps.google.com/maps?z=12&t=m&q=loc:' + d.lat + '+' + d.long + "\" target=\"_blank\">Google Map</a>" },
                    function (d) { return '<a href=\"http://www.openstreetmap.org/?mlat=' + d.lat + '&mlon=' + d.long + '&zoom=12' + "\" target=\"_blank\"> OSM Map</a>" }
                ])
                .sortBy(function (d) { return d.dtg; })
                .order(d3.ascending);

            // Render the Charts
            dc2.renderAll();





        //}

    }

}
