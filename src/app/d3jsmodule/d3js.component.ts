/// <reference path="../../../typings/d3/d3.d.ts" />
import { Component, Renderer, ViewChild, AfterViewInit, OnChanges, ElementRef, OnInit } from '@angular/core';
import { Input } from '@angular/core';


// webpack html imports
//let template = require('./d3.component.html');


// Exports the visualization module
export class BubblesChart {
    target: HTMLElement;
    constructor(target: HTMLElement) {
        this.target = target;
    }

    render(values: number[]) {
        d3.select(this.target)
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

@Component({
    selector: 'bubbles',
    template: '<svg #target width="900" height="300"></svg>'

    
})
export class D3Component implements OnChanges, AfterViewInit {
    // Declares values as a data-bound property
    @Input() values: number[];
    // Gets a reference to the child DOM node
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
        //DOM element to bind the chart to it
        this.chart = new BubblesChart(this.target.nativeElement);
        this.values = [1000, 25000, 3000000, 120000, 25, 10203];
        this.chart.render(this.values);
    }

}


