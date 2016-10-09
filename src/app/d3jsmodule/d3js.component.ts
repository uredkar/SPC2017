/// <reference path="../../../typings/d3-v4/src/d3-selection/index.d.ts" />


import { Component, Renderer, ViewChild, ViewChildren, AfterViewInit, OnChanges, ElementRef, OnInit } from '@angular/core';
import { Input } from '@angular/core';

import * as d3 from 'd3';

import { Selection, select } from 'd3-selection';

// webpack html imports
//let template = require('./d3.component.html');


// Exports the visualization module
export class BubblesChart {
    target: HTMLElement;
    constructor(target: HTMLElement) {
        this.target = target;
    }

    render(values: number[]) {
        select(this.target)
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
        this.chart = new BubblesChart(this.target.nativeElement);
        this.values = [1000, 25000, 3000000, 120000, 25, 10203];
        this.chart.render(this.values);
    }

}


