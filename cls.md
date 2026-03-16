# CLS Fix Instructions вЂ” airport-pickups-london.com

**Priority:** CRITICAL вЂ” This is the only metric failing Core Web Vitals  
**Current CLS:** 1.0 (mobile) / 0.48 (desktop) вЂ” Target: under 0.1  
**Impact:** Fixing CLS alone flips the entire Core Web Vitals assessment from FAILED to PASSED  

---

## Issue 1: Taxi Deals Skeleton Loader (PRIMARY CAUSE)

### Location in source
Homepage вЂ” `styles_taxideals__NnN_G` component, rendered between the review badges and the cruise port sections.

### What's happening
The server renders skeleton placeholders with fixed dimensions:
- 5 tab skeletons: each `160px Г— 45px`
- Content skeleton: `300px` tall

```html
<div class="styles_taxideals__NnN_G ltr page" bggray="false" style="background-color:white">
  <div class="styles_tabs__Yz4G_">
    <!-- 5x skeleton tabs: 160px Г— 45px each -->
    <div style="height:45px;width:160px;background:#eae6e6">
      <div class="styles_skeleton__h363K" style="width:100%;height:100%"></div>
    </div>
    <!-- ... repeated 5 times ... -->
  </div>
  <div style="height:300px;background:#eae6e6">
    <div class="styles_skeleton__h363K" style="width:100%;height:100%"></div>
  </div>
</div>
```

When client-side JS hydrates, the real taxi deals content replaces these skeletons. If the real content height differs from the skeleton height (300px + tabs), everything below shifts вЂ” causing massive CLS.

On mobile this is worse because:
- The 5 tabs likely wrap to multiple lines (5 Г— 160px = 800px doesn't fit on a 375px screen)
- The actual taxi deals content may be taller or shorter than 300px on small screens

### Fix options (pick one)

**Option A (Best): Server-side render the taxi deals content**  
Remove the skeleton entirely and SSR the actual taxi deals data so it's in the initial HTML. No swap = no shift.

**Option B: Match skeleton height to real content exactly**  
1. Measure the actual rendered height of the taxi deals component on mobile (375px width) and desktop
2. Set the skeleton container to that exact height using `min-height`
3. On mobile, account for tab wrapping вЂ” the tabs section will be taller when wrapped
4. Use CSS media queries to set different `min-height` values for mobile vs desktop

```css
/* Example вЂ” adjust values to match your actual content height */
.styles_taxideals__NnN_G {
  min-height: 500px; /* desktop */
}

@media (max-width: 768px) {
  .styles_taxideals__NnN_G {
    min-height: 600px; /* mobile вЂ” accounts for tab wrapping + content */
  }
}
```

**Option C: Use CSS `content-visibility` with `contain-intrinsic-size`**  
```css
.styles_taxideals__NnN_G {
  content-visibility: auto;
  contain-intrinsic-size: auto 500px; /* estimated height */
}
```

---

## Issue 2: Bare "Loading..." Div (SECONDARY CAUSE)

### Location in source
Homepage вЂ” a bare `<div>Loading...</div>` sits between the cruise ports section and the main body content (`styles_testimonials__AI8bt`).

```html
<!-- End of cruise port section -->
</div></div></div>

<div>Loading...</div>   <!-- в†ђ THIS IS THE PROBLEM -->

<div class="styles_testimonials__AI8bt ltr page">
<!-- Main body content starts here -->
```

### What's happening
This is a client-rendered component placeholder with:
- No fixed dimensions
- No `min-height`
- No `width`/`height` constraints

When JS hydrates and replaces this with actual content (or removes it), everything below shifts down or up.

### Fix options (pick one)

**Option A (Best): SSR the component**  
Whatever component renders here, server-side render it so it's in the initial HTML response. No placeholder = no shift.

**Option B: Give it a fixed-height container**  
Wrap the loading state in a container with the same dimensions as the final content:

```jsx
// Instead of:
<div>Loading...</div>

// Use:
<div style={{ minHeight: '400px' }}>  {/* match final content height */}
  {isLoaded ? <ActualComponent /> : <div>Loading...</div>}
</div>
```

**Option C: Remove it entirely if not needed**  
If this placeholder is for a component that isn't critical to the initial page view, consider lazy-loading it below the fold without a visible placeholder, or removing the loading text altogether.

---

## Verification

After deploying fixes:

1. Run PageSpeed Insights on mobile: https://pagespeed.web.dev/
2. Check the "Avoid large layout shifts" diagnostic вЂ” it should disappear
3. CLS in field data (CrUX) takes 28 days to update, but lab data will show improvement immediately
4. Use Chrome DevTools в†’ Performance tab в†’ check "Web Vitals" в†’ reload page в†’ look for CLS markers (red diamonds). There should be none or very small ones.

---

## Current Scores Reference (March 14, 2026)

| Metric | Mobile (This URL) | Target | Status |
|--------|-------------------|--------|--------|
| **CLS** | **1.0** | < 0.1 | вќЊ FAILING |
| LCP | 2.6s | < 2.5s | вљ пёЏ Borderline |
| INP | 153ms | < 200ms | вњ… Good |
| FCP | 1.6s | < 1.8s | вњ… Good |
| TTFB | 1.0s | < 0.8s | вљ пёЏ Borderline |

**CLS is the only blocker.** Fix it and Core Web Vitals flips to PASSED.

---

*Report generated for Airport Pickups London вЂ” March 2026*