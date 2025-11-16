# Technical Submission

Hey! This repo has my solutions for three coding challenges. Each one tackles a different type of problem.

## What's Inside

```
Question A/    → Mystic Waves (math puzzle with alternating energy)
Question B/    → CargoCraft Fleet (optimization problem)
Question C/    → Login Page (frontend with validation)
```

## Question A: Mystic Waves

This one's about calculating energy from alternating waves (x, -x, x, -x...). Pretty straightforward once you spot the pattern.

**Tech:** Python  
**Main idea:** If you have an odd number of waves, you end up with x. Even number? They cancel out to 0.

👉 [Full explanation](Question%20A/README.md)

## Question B: CargoCraft Fleet

Given two types of crafts with different propulsion units, figure out the min/max number of crafts needed for a total. It's basically a number theory problem.

**Tech:** Python  
**Approach:** Maximize larger units for minimum crafts, maximize smaller units for maximum crafts.

👉 [Full explanation](Question%20B/README.md)

## Question C: Frontend Login Page

Built a working login page with proper validation. No backend needed - everything runs client-side.

**Tech:** HTML, CSS, JavaScript (vanilla, no frameworks)  
**Features:** Email/password validation, password strength checks, show/hide password, responsive design

👉 [Full explanation](Question%20C/README.md)

## Running the Code

Each folder has its own README with details, but here's the quick version:

**Question A & B (Python):**
```bash
cd "Question A"
python mystic_waves.py

cd "Question B"
python cargocraft_fleet.py
```

**Question C (Frontend):**
Just open `Question C/index.html` in your browser. That's it!

## Test Accounts (for Question C)

You can log in with any of these:
- `test@example.com` / `Test@1234`
- `admin@example.com` / `Admin@5678`
- `user@example.com` / `User#9876`

---

Made with ☕ for a technical assessment
