# Question B: CargoCraft Fleet

## Problem Description

In the futuristic world of Aerion, the CargoCraft company operates a fleet of transport vehicles designed to carry supplies between colonies.

There are two types of crafts in the fleet:
- **Type A crafts** have 4 propulsion units
- **Type B crafts** have 6 propulsion units

Given that the fleet's crafts together have `n` propulsion units in total, determine the **minimum** and **maximum** number of crafts that can make up this total. If the total `n` cannot be made using only crafts of Type A and Type B, report that it's impossible.

## Solution Approach

### Mathematical Analysis

We need to express `n` as: `n = 4*a + 6*b` where `a, b >= 0`

Key observations:
1. Both 4 and 6 are even, so `n` must be even for any solution to exist
2. Special case: `n = 2` is impossible (can't be made with 4s and 6s)

### Strategy

**For minimum crafts**: Maximize use of Type B crafts (6 units each) since they have more units
- If `n % 6 == 0`: Use only Type B crafts → `n / 6` crafts
- If `n % 6 == 4`: Use Type B for most, one Type A for remainder → `n / 6 + 1` crafts
- If `n % 6 == 2`: Use `(n - 8) / 6` Type B crafts + 2 Type A crafts (if `n >= 8`)

**For maximum crafts**: Maximize use of Type A crafts (4 units each) since they have fewer units
- Simply use: `n / 4` crafts

## Setup Instructions

### Prerequisites
- Python 3.6 or higher

### Installation
No additional packages are required. Python standard library is sufficient.

## How to Run

### Running the Solution

1. Navigate to the Question B folder:
   ```powershell
   cd "c:\Users\ntinl\Downloads\Technical submission\Question B"
   ```

2. Run the Python script:
   ```powershell
   python cargocraft_fleet.py
   ```

3. Enter the input when prompted:
   - First line: number of test cases `t`
   - Next `t` lines: one integer `n` (total propulsion units) for each test case

### Example Usage

**Input:**
```
4
4
7
24
998244353998244352
```

**Output:**
```
1 1
-1
4 6
166374058999707392 249561088499561088
```

### Running with Input File

If you have an input file, you can redirect it:
```powershell
python cargocraft_fleet.py < input.txt
```

## Test Cases Explanation

### Test Case 1: `n = 4`
- Only one Type A craft (4 units)
- **Output**: `1 1`

### Test Case 2: `n = 7`
- Odd number, impossible to make with 4s and 6s
- **Output**: `-1`

### Test Case 3: `n = 24`
- **Minimum**: 4 crafts (4 Type B: 6×4 = 24)
- **Maximum**: 6 crafts (6 Type A: 4×6 = 24)
- Other combinations: 3 Type A + 2 Type B (3×4 + 2×6 = 24)
- **Output**: `4 6`

### Test Case 4: `n = 998244353998244352`
- Very large number
- **Minimum**: 166374058999707392 crafts
- **Maximum**: 249561088499561088 crafts
- **Output**: `166374058999707392 249561088499561088`

## Complexity Analysis

- **Time Complexity**: O(1) per test case, O(t) overall
- **Space Complexity**: O(1)
- Handles very large numbers up to 10^18 efficiently
