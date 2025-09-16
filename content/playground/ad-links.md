---
title: 'Ad Links Test'
draft: false
---

This page simulates real-world ad links with query parameters in the href.

## Test Links with Query Parameters

These links have `testID` query parameters in their href attributes, simulating real ad traffic:

- [Collector Test - Facebook Ad](/playground/collector/?testID=collector&utm_source=facebook&utm_campaign=ad_campaign_a)
- [Test Page - Google Ad](/playground/test/?testID=test&utm_source=google&utm_campaign=ad_campaign_b)
- [Collector Test - Twitter Ad](/playground/collector/?testID=collector&utm_source=twitter&utm_campaign=ad_campaign_c)

## Freshpaint Configuration

**CSS Selector**: `a[href*="/playground/"]` or `button[onclick*="/playground/"]`

**Property Filter**: `Full URL` contains `testID=`

**Dynamic Property (JavaScript)**:
```javascript
// For links - extract from href
const link = event.target;
const href = link.getAttribute('href');
const url = new URL(href, window.location.origin);
const testID = url.searchParams.get('testID');
return testID || null;

// For buttons - extract from current URL after navigation
const urlParams = new URLSearchParams(window.location.search);
const testID = urlParams.get('testID');
return testID || null;
```
