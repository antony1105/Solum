"""
Mystic Waves Solution

Problem: Calculate the total magical energy after n alternating waves.
The sequence alternates between x and -x, starting with x.

Pattern analysis:
- If n is even: x + (-x) + x + (-x) + ... = 0
- If n is odd: x + (-x) + x + (-x) + ... + x = x

Formula: total_energy = x if n is odd else 0
"""

def solve_mystic_waves(x, n):
    """
    Calculate total energy after n waves alternating between x and -x.
    
    Args:
        x: Initial energy value
        n: Number of waves
    
    Returns:
        Total energy after all waves
    """
    if n % 2 == 1:  # odd number of waves
        return x
    else:  # even number of waves
        return 0


def main():
    # Read number of test cases
    t = int(input())
    
    # Process each test case
    for _ in range(t):
        x, n = map(int, input().split())
        result = solve_mystic_waves(x, n)
        print(result)


if __name__ == "__main__":
    main()
