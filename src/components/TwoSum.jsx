import TwoSumUtil from './twoSumUtil/TwoSumUtil'
import React, { useState, useEffect } from 'react';

export default function TwoSum(){
    function findTwoSum(nums, target){
        let left = 0;
        let right = nums.length;
        right = right - 1;
        console.log("this is nums.length", nums.length)
        console.log("this is left, right", left, right);
        while (left < right) {
            const sum = nums[left] + nums[right];
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
    const result = findTwoSum(nums, target);
    console.log("result", result)
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
            <div>
                <h1>ths is twoSum visualization</h1>
                <h2>Enter Array and Target</h2>
                {Array.isArray(nums) && nums.map((num, index) => (
                    <input
                        key={index}
                        type="number"
                        value={num}
                        readOnly
                        style={{ margin: '0 5px' }}
                    />
                ))}
            </div>

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
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {console.log(result.length)}
                    {result.length > 0 ? 
                        (
                            result.map((num, index) => (
                            <div key={index} style={{ position: 'relative', margin: '0 5px' }}>
                                {console.log(num, index)}
                                {index === result[0]}
                                {index === result[1]}
                                <input type="number" value={num} readOnly />
                            </div>
                        ))
                        ) : (<div></div>)}
                </div>

                {result.length > 0 ? (
                    <p>Indices: {result.join(', ')}</p>
                ) : (
                    <p>No indices found.</p>
                )}
            </div>
        </div>
    )
}