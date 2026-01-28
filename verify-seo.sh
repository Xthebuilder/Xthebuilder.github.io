#!/bin/bash
# SEO Verification Script for Xavier Martin Cofield Portfolio

echo "🔍 SEO Verification for Xavier Martin Cofield Portfolio"
echo "=================================================="

BASE_URL="https://xthebuilder.github.io"

echo ""
echo "📋 Checking Core SEO Files..."

# Check robots.txt
echo "• Checking robots.txt..."
curl -s -o /dev/null -w "%{http_code}" "${BASE_URL}/robots.txt" | grep -q "200" && echo "  ✅ robots.txt accessible" || echo "  ❌ robots.txt not found"

# Check sitemap.xml  
echo "• Checking sitemap.xml..."
curl -s -o /dev/null -w "%{http_code}" "${BASE_URL}/sitemap.xml" | grep -q "200" && echo "  ✅ sitemap.xml accessible" || echo "  ❌ sitemap.xml not found"

echo ""
echo "🎯 SEO Content Verification..."

# Check if homepage contains name in title
echo "• Checking homepage title for 'Xavier Martin Cofield'..."
curl -s "${BASE_URL}/" | grep -q "Xavier Martin Cofield" && echo "  ✅ Name found in homepage" || echo "  ❌ Name not found in homepage"

echo ""
echo "📊 Technical SEO Tools (Manual Check Required):"
echo "  🔗 Google Rich Results Test: https://search.google.com/test/rich-results"
echo "  🔗 Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/"
echo "  🔗 Twitter Card Validator: https://cards-dev.twitter.com/validator"  
echo "  🔗 Google PageSpeed Insights: https://pagespeed.web.dev/"

echo ""
echo "📈 SEO Monitoring Recommendations:"
echo "  1. Set up Google Search Console property for ${BASE_URL}"
echo "  2. Submit sitemap: ${BASE_URL}/sitemap.xml"
echo "  3. Request indexing for main pages"
echo "  4. Monitor rankings for 'Xavier Martin Cofield'"
echo "  5. Track organic traffic growth over 4-6 weeks"

echo ""
echo "✨ SEO Optimization Complete!"
echo "Next: Deploy to GitHub Pages and run manual verification checks."