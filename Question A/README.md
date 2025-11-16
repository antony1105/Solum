# Question A: Mystic Waves

## Problem Description

In the land of Elaria, a young mage named Nia experiments with a magical energy value `x`. She casts a spell that produces a sequence of `n` waves of energy — alternating between `x` and `−x`, starting with `x`.

For example, if `n = 5`, the sequence of energies will be: `x, −x, x, −x, x`

The task is to calculate the total magical energy after all `n` waves.

## Solution Approach

The solution uses a simple mathematical pattern:
- **If n is odd**: The total energy is `x` (one more positive wave than negative)
- **If n is even**: The total energy is `0` (equal positive and negative waves cancel out)

## Setup Instructions

### Prerequisites
- Python 3.6 or higher

### Installation
No additional packages are required. Python standard library is sufficient.

## How to Run

### Running the Solution

1. Navigate to the Question A folder:
   ```powershell
   cd "c:\Users\ntinl\Downloads\Technical submission\Question A"
   ```

2. Run the Python script:
   ```powershell
   python mystic_waves.py
   ```

3. Enter the input when prompted:
   - First line: number of test cases `t`
   - Next `t` lines: two integers `x` and `n` for each test case

### Example Usage

**Input:**
```
4
1 4
2 5
3 6
4 7
```

**Output:**
```
0
2
0
4
```

### Running with Input File

If you have an input file, you can redirect it:
```powershell
python mystic_waves.py < input.txt
```

## Test Cases Explanation

- Test 1: `x=1, n=4` → Sequence: 1, -1, 1, -1 → Sum: 0
- Test 2: `x=2, n=5` → Sequence: 2, -2, 2, -2, 2 → Sum: 2
- Test 3: `x=3, n=6` → Sequence: 3, -3, 3, -3, 3, -3 → Sum: 0
- Test 4: `x=4, n=7` → Sequence: 4, -4, 4, -4, 4, -4, 4 → Sum: 4

## Complexity Analysis

- **Time Complexity**: O(1) per test case, O(t) overall
- **Space Complexity**: O(1)
