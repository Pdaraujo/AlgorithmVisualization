import React, { Component } from 'react'
import "./SortingVisualizer.css"
import "../SortingAlgorithms/SortingAlgorithms"
import { getMergeSort } from '../SortingAlgorithms/SortingAlgorithms';

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 310;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray = () => {
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(this.randomIntFromInterval(5, 710));
        }
        this.setState({array});
    }

    randomIntFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    mergeSort = () => {

        
    }

    quickSort = () => {
        //TODO
    }
    
    heapSort = () => {
        //TODO
    }

    bubbleSort = () => {
        //TODO
    }

    testAlgorithms = () => {
        for (let i = 0; i < 100; i++) {
            const array = [];
            const bound = this.randomIntFromInterval(i, 1000)
            for (let i = 0; i < bound; i++) {
                array.push(this.randomIntFromInterval(-1000, 1000));
            }

            const jsArray = array.slice().sort((a, b) => a - b)
            const mergeArray = getMergeSort(array);

            console.log('MergeSort: ', this.arraysAreEqual(jsArray, mergeArray));
        }
    }

    arraysAreEqual = (array1, array2) => {
        if (array1.length !== array2.length) {
            return false
        }
        for(let i = 0; i < array2.length; i++) {
            if (array1[i] !== array2[i]) {return false}
        }
        return true
    }
    
    render() {
        const {array} = this.state
        return (
            <div className="array-container">
                {array.map((value, idx) => (
                    <div 
                    className="array-bar"
                    key={idx}
                    style={{
                        backgroundColor: PRIMARY_COLOR,
                        height: `${value}px`,
                    }}>
                    </div>
                ))}
                <div>
                    <button className="button-bar" onClick={this.resetArray}>Generate New Array</button>
                    <button className="button-bar" onClick={this.mergeSort}>Merge Sort</button>
                    <button className="button-bar" onClick={this.quickSort}>Quick Sort</button>
                    <button className="button-bar" onClick={this.heapSort}>Heap Sort</button>
                    <button className="button-bar" onClick={this.bubbleSort}>Bubble Sort</button>
                    <button className="button-bar" onClick={this.testAlgorithms}>Test Algorithms</button>
                </div>
            </div>
        )
    }
}

