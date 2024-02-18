import React, { useState } from 'react';
import './twoSumstyle/TwoSum.css'; // Import CSS file for styling

export default function TwoSum() {
    function findTwoSum(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        while (left < right) {
            const sum = nums[left] + nums[right];
            setTimeout(() => {
                setLeft(left);
                setRight(right);
            }, 1000);
            if (sum === target) {
                return [left, right];
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
        return [];
    };

    const [nums, setNums] = useState([]);
    const [target, setTarget] = useState(0);
    const [left, setLeft] = useState(-1);
    const [right, setRight] = useState(-1);
    const result = findTwoSum(nums, target);

    const handleInputChange = (e) => {
        const input = e.target.value;
        const parts = input.split(',');

        const newNums = parts.map(part => {
            const trimmedPart = part.trim();
            return !isNaN(trimmedPart) && trimmedPart !== '' ? parseInt(trimmedPart) : null;
        }).filter(num => num !== null);
    
        setNums(newNums);
    };

    const handleTargetChange = (e) => {
        setTarget(parseInt(e.target.value) || 0);
    };

    return (
        <div>

            {nums.map((num, index) => (
                <div key={index} className="pointer" style={{ position: 'relative' }}>
                    <input
                        type="number"
                        value={num}
                        onChange={(e) => {
                            const newNums = [...nums];
                            newNums[index] = parseInt(e.target.value) || 0;
                            setNums(newNums);
                        }}
                        style={{ margin: '0 5px' }}
                    />
                    {index === left && <div className="arrow arrow-left"></div>}
                    {index === right && <div className="arrow arrow-right"></div>}
                </div>
            ))}
                        <h1>This is twoSum visualization</h1>
            <h2>Enter Array and Target</h2>
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