import React, { useState } from 'react';
import './twoSumstyle/TwoSum.css'; // Import CSS file for styling
export default function TwoSum() {
    const [nums, setNums] = useState([]);
    const [target, setTarget] = useState(0);
    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(nums.length - 1);
    const [result, setResult] = useState([]);

    const findTwoSum = (nums, target) => {
        let left = 0;
        let right = nums.length - 1;
        const animations = [];
        while (left < right) {
            const sum = nums[left] + nums[right];
            animations.push([left, right]);
            if (sum === target) {
                return animations.concat([[left, right]]);
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
        return animations;
    };

    const handleInputChange = (e) => {
        const input = e.target.value;
        const parts = input.split(',');
        const newNums = parts.map(part => {
            const trimmedPart = part.trim();
            return !isNaN(trimmedPart) && trimmedPart !== '' ? parseInt(trimmedPart) : null;
        }).filter(num => num !== null);
        setNums(newNums);
        setLeft(0);
        setRight(newNums.length - 1);
        setResult([]);
    };

    const handleTargetChange = (e) => {
        setTarget(parseInt(e.target.value) || 0);
    };

    const handleClick = () => {
        if (nums.length === 0 || target === 0) {
            alert('Please enter array and target');
            return;
        }
        const animations = findTwoSum(nums, target);
        setResult(animations[animations.length - 1]);
        let step = 0;
        const animate = () => {
            if (step < animations.length - 1) {
                const [leftIndex, rightIndex] = animations[step];
                setLeft(leftIndex);
                setRight(rightIndex);
                step++;
                setTimeout(animate, 500); // Delay of 1 second between each step
            }
        };
        animate();
    };

    return (
        <div>
            <h1>TwoSum 2pointer visualization</h1>
            <h2>Enter Array and Target</h2>
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Enter array of numbers"
                    onChange={handleInputChange}
                />
                <input
                    type="number"
                    placeholder="Enter target"
                    value={target}
                    onChange={handleTargetChange}
                />
                
            </div>
            <button onClick={handleClick}>Find Two Sum</button>
            <div className="visualization-container">
                {nums.map((num, index) => (
                    <div key={index} className="pointer" style={{ position: 'relative' }}>
                        <input
                            type="number"
                            value={num}
                            readOnly
                            style={{ margin: '0 5px' }}
                        />
                        {index === left && <div className="arrow arrow-left"></div>}
                        {index === right && <div className="arrow arrow-right"></div>}
                    </div>
                ))}
            </div>
            <div>
                <h3>Result:</h3>
                {result.length > 0 ? (
                    <p>Indices: {result.join(', ')}</p>
                ) : (
                    <p>No indices found.</p>
                )}
            </div>
        </div>
    );
}