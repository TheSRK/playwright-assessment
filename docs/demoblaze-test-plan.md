# QA Engineer Case — Demoblaze (https://www.demoblaze.com/)

## Top 3 most critical test cases

### TC1 — Guest user can purchase a product end-to-end (Most critical)
Flow:
1) Open home page
2) Select a product
3) Add to cart
4) Go to Cart
5) Place Order and complete purchase
6) Verify purchase success confirmation is shown

Why / risk covered:
- This is the core revenue flow (browse → cart → checkout). If it fails, the app is not usable for its primary purpose.
- Covers the highest-risk integration points: product page, cart persistence, checkout modal, and final confirmation.

### TC2 — Cart integrity: correct item(s) and removal behavior
Flow:
1) Add product A, add product B
2) Verify cart shows correct names/prices
3) Delete one item
4) Verify cart updates correctly and remaining item is correct

Why / risk covered:
- Prevents wrong orders, incorrect billing, and trust issues.
- Catches common cart bugs: stale state, incorrect rows, delete not working, incorrect totals.

### TC3 — Product discovery: category navigation + product detail loads correctly
Flow:
1) Switch categories (Phones/Laptops/Monitors)
2) Verify product list updates
3) Open a product detail page
4) Verify title/price/description present

Why / risk covered:
- If users can’t find products or product pages fail to load, conversion drops.
- Covers routing/filtering and critical UI rendering.

## Assumptions / trade-offs (timeboxed)
- Automated only TC1 due to timebox (2 hours) and because it provides the highest business coverage.
- Avoided overly brittle assertions (CSS/layout). Assertions focus on stable business outcomes (item appears in cart, success confirmation).
- No account creation/login coverage because it’s not required for core purchasing flow.
