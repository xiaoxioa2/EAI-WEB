# Quick Reference: Where Does This Go?

**Print this and keep it on your desk!**

---

## 🟢 Marketing Site Files

**Location:** `app/[page-name]/page.tsx`

### Examples:
- Homepage → `app/page.tsx`
- About → `app/about/page.tsx`
- Programs → `app/programs/page.tsx`
- FAQ → `app/faq/page.tsx`

### Components:
- `components/Header.tsx`
- `components/Footer.tsx`
- `components/Container.tsx`

**✅ Safe to change without affecting portals**

---

## 🔵 Founder Portal Files

**Location:** `app/founder_login/[feature]/page.tsx`

### Examples:
- Profile → `app/founder_login/profile/page.tsx`
- Matching → `app/founder_login/matching/page.tsx`
- Blog → `app/founder_login/blog/page.tsx`
- Rooms → `app/founder_login/rooms/page.tsx`

### Components:
- `components/portals/founder/[feature]/`

### Services:
- `lib/services/founder/[feature]-service.ts`

**✅ Safe to change without affecting marketing or other portals**

---

## 🟣 Mentor Portal Files

**Location:** `app/mentor_portal/[feature]/page.tsx`

### Examples:
- Dashboard → `app/mentor_portal/dashboard/page.tsx`
- Mentees → `app/mentor_portal/mentees/page.tsx`
- Sessions → `app/mentor_portal/sessions/page.tsx`

### Components:
- `components/portals/mentor/[feature]/`

### Services:
- `lib/services/mentor/[feature]-service.ts`

**✅ Safe to change without affecting marketing or other portals**

---

## 🟠 Investor Portal Files

**Location:** `app/investor_portal/[feature]/page.tsx`

### Examples:
- Pipeline → `app/investor_portal/pipeline/page.tsx`
- Portfolio → `app/investor_portal/portfolio/page.tsx`
- Analytics → `app/investor_portal/analytics/page.tsx`

### Components:
- `components/portals/investor/[feature]/`

### Services:
- `lib/services/investor/[feature]-service.ts`

**✅ Safe to change without affecting marketing or other portals**

---

## 🟡 Shared Infrastructure (Change with Caution)

### Files that affect EVERYTHING:
- `app/layout.tsx` - Root layout
- `components/Header.tsx` - Global header
- `components/Footer.tsx` - Global footer
- `contexts/AuthContext.tsx` - Authentication
- `lib/supabase.ts` - Database client
- `middleware.ts` - Route protection

**⚠️ Test thoroughly on both marketing and portals**

---

## 📊 Database Tables

### Shared Tables:
```sql
user_profiles              -- All users
auth.users                 -- Supabase auth
```

### Portal Tables:
```sql
founder_profiles           -- Founder data
mentor_profiles            -- Mentor data
investor_profiles          -- Investor data
```

**Always use RLS policies!**

---

## 🚀 Quick Commands

```bash
# Start dev server
npm run dev

# Build project
npm run build

# Create new marketing page
mkdir app/new-page && touch app/new-page/page.tsx

# Create new founder feature
mkdir -p app/founder_login/new-feature
mkdir -p components/portals/founder/new-feature
mkdir -p lib/services/founder
touch app/founder_login/new-feature/page.tsx

# Create new migration
# Use Supabase MCP tools
```

---

## ✅ Testing Checklist

### Marketing Change:
- [ ] Browse page as guest
- [ ] Check links work
- [ ] Verify responsive design
- [ ] Check SEO tags

### Portal Change:
- [ ] Login with correct role
- [ ] Test feature works
- [ ] Verify other roles blocked
- [ ] Check unauthenticated redirects

### Shared Component Change:
- [ ] Test marketing pages
- [ ] Test portal pages
- [ ] Test authenticated state
- [ ] Test unauthenticated state

---

## 🆘 Emergency: I Broke Something!

### Marketing broken?
```bash
git diff app/page.tsx
git diff components/Header.tsx
git diff components/Footer.tsx
```

### Portals broken?
```bash
git diff app/dashboard/
git diff contexts/AuthContext.tsx
git diff middleware.ts
```

### Database broken?
```bash
# Check latest migration
ls -la supabase/migrations/
# Contact database admin
```

---

## 📚 Full Documentation

- **Architecture:** `ARCHITECTURE.md`
- **Development Guide:** `DEVELOPMENT_GUIDE.md`
- **Summary:** `PORTAL_SEPARATION_SUMMARY.md`
- **Founder Portal:** `app/founder_login/README.md`
- **Mentor Portal:** `app/mentor_portal/README.md`
- **Investor Portal:** `app/investor_portal/README.md`

---

## 🎯 Decision Tree

```
Is it public-facing content?
├─ YES → Marketing site (app/page-name/)
└─ NO  → Is it role-specific?
          ├─ Founder  → app/founder_login/
          ├─ Mentor   → app/mentor_portal/
          ├─ Investor → app/investor_portal/
          └─ All      → app/dashboard/
```

---

**Remember:**
- Marketing = Public
- Portal = Protected
- Keep them separated!
