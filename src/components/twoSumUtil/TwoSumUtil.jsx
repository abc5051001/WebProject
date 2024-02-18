import React from 'react';

export default function TwoSumUtil(nums, target) {
    console.log("this is in twosumutil", nums, target)

    const findTwoSum = (nums, target) => {
        console.log("this is nums in findTwoSum", nums)
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

    const result = findTwoSum(nums, target);
    console.log("this is result", result)

    return (
        <div>
        <h3>Result:</h3>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            {console.log(nums.length)}
            {/* {nums.length > 0 ? 
                (
                    nums.map((num, index) => (
                    <div key={index} style={{ position: 'relative', margin: '0 5px' }}>
                        {console.log(num, index)}
                        {index === result[0] && <span>&#8592;</span>}
                        {index === result[1] && <span>&#8594;</span>}
                        <input type="number" value={num} readOnly />
                    </div>
                ))
                ) : (<div></div>)} */}
        </div>

        {result.length > 0 ? (
            <p>Indices: {result.join(', ')}</p>
        ) : (
            <p>No indices found.</p>
        )}
        
        </div>
    );
}