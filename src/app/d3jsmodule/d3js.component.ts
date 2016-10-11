
// use @types and not typings
 

import { Component, Renderer, ViewChild, ViewChildren, AfterViewInit, OnChanges, ElementRef, OnInit } from '@angular/core';
import { Input } from '@angular/core';

 
import {
    D3Service,
    D3,
    Axis,

    BrushBehavior,
    BrushSelection,
    D3BrushEvent,
    ScaleLinear,
    ScaleOrdinal,
    Selection,
    Transition
} from 'd3-ng2-service';
 





// Exports the visualization module
export class BubblesChart {
    private d3: D3; // <-- Define the private member which will hold the d3 reference
    target: HTMLElement;
    //constructor(target: HTMLElement) {
    //    this.target = target;
    //}

    constructor(element: ElementRef, d3Service: D3Service) { // <-- pass the D3 Service into the constructor
        this.d3 = d3Service.getD3(); // <-- obtain the d3 object from the D3 Service
        this.target = element.nativeElement;
    }

    private drawXAxis()
    {
        var range = new Range();
       
        
        


        
        
        
        
    }
    ngOnInit() {
        let d3 = this.d3; // <-- for convenience use a block scope variable
        let d3ParentElement: Selection<any, any, any, any>; // <-- Use the Selection interface (very basic here for illustration only)

        // ...

        if (this.target !== null) {

            d3ParentElement = d3.select(this.target); // <-- use the D3 select method 

            // Do more D3 things 

        }
    }
    render(values: number[]) {
        // set the dimensions and margins of the graph
        var margin = { top: 20, right: 20, bottom: 30, left: 50 },
            width = 960 - margin.left - margin.right,
            height = 500 - margin.top - margin.bottom;

     
        this.d3.select(this.target)
            // Get the old circles
            .selectAll('circle')
            .data(values)
            .enter()
            // For each new data point, append a circle to the target SVG
            .append('circle')
            // Apply several style attributes to the circle
            .attr('r', d => Math.log(d))
            .attr('fill', '#5fc')
            .attr('stroke', '#333')
            .attr('transform', (d, i) => {
                // This moves the circle based on its value
                var offset = i * 20 + 2 * Math.log(d);
                return `translate(${offset}, ${offset})`;
            });


 
        
        //select(this.target)
        //    .append("g")
        //    .attr("transform", "translate(0," + height + ")")
        //    .call(axisBottom(x));

        //select(this.target)
        //    .append("g")
        //    .call(axisLeft(y));
        
    }

    destroy() {
    }
}

let template = require('./d3js.component.html');

@Component({
    selector: 'bubbles',
    template: template

    
})
export class D3Component implements OnChanges, AfterViewInit {
    // Declares values as a data-bound property
    @Input() values: number[];
    // Gets a reference to the child DOM node
    //@ViewChildren('target') target;
    @ViewChild('target') target;
    // An instance of the BubblesChart
    chart: BubblesChart;

    constructor() {
    }

    // Lifecycle hook that is invoked when data-bound properties change
    ngOnChanges(changes) {
        if (this.chart) {
            this.chart.render(changes.values);
        }
    }

    // Lifecycle hook for when the component's view has been fully initialized
    ngAfterViewInit() {
        // We have to wait until the view has been initialized before we can get the
        console.log("After view init");
        //DOM element to bind the chart to it
     //   this.chart = new BubblesChart(this.target.nativeElement);
        this.values = [1000, 25000, 3000000, 120000, 25, 10203];
      //  this.chart.render(this.values);
    }

}


