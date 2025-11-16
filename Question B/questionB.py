"""
CargoCraft Fleet Solution

Problem: Determine the minimum and maximum number of crafts that can make up
a total of n propulsion units, where:
- Type A crafts have 4 propulsion units
- Type B crafts have 6 propulsion units

Mathematical Analysis:
- We need to express n as: 4*a + 6*b where a, b >= 0
- Simplify: n = 2*(2*a + 3*b)
- Therefore, n must be even for a solution to exist

For valid n (even):
- Minimum crafts: Use as many Type B (6 units) as possible
- Maximum crafts: Use as many Type A (4 units) as possible

Edge cases:
- n = 2: impossible (can't make with 4s and 6s)
- n % 2 == 1: impossible (odd numbers can't be made)
"""

def solve_cargocraft(n):
    """
    Find minimum and maximum number of crafts for n propulsion units.
    
    Args:
        n: Total propulsion units
    
    Returns:
        Tuple (min_crafts, max_crafts) or (-1, -1) if impossible
    """
    # If n is odd, impossible
    if n % 2 == 1:
        return -1, -1
    
    # Special case: n = 2 is impossible
    if n == 2:
        return -1, -1
    
    # For minimum crafts: maximize use of Type B (6 units each)
    # Try to use as many Type B crafts as possible
    if n % 6 == 0:
        # n is divisible by 6, use only Type B
        min_crafts = n // 6
    elif n % 6 == 2:
        # n = 6*b + 2, we need 2 more units
        # We can't make 2 with 4s and 6s alone, but we can use 2*4 = 8
        # So: n = 6*(b-1) + 6 + 2 = 6*(b-1) + 8 = 6*(b-1) + 2*4
        if n >= 8:
            min_crafts = (n - 8) // 6 + 2
        else:
            return -1, -1
    else:  # n % 6 == 4
        # n = 6*b + 4, use one Type A craft for the remainder
        min_crafts = n // 6 + 1
    
    # For maximum crafts: maximize use of Type A (4 units each)
    # Since n is even and n > 2, we can always use Type A crafts
    max_crafts = n // 4
    
    return min_crafts, max_crafts


def main():
    # Read number of test cases
    t = int(input())
    
    # Process each test case
    for _ in range(t):
        n = int(input())
        min_crafts, max_crafts = solve_cargocraft(n)
        
        if min_crafts == -1:
            print(-1)
        else:
            print(min_crafts, max_crafts)


if __name__ == "__main__":
    main()
