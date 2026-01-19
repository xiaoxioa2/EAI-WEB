# Development Guide: Marketing vs Portal Separation

## Quick Reference

### 🟢 Marketing Site Files (Safe to Change Without Affecting Portals)

```
app/
├── page.tsx                    # Homepage
├── programs/page.tsx           # Programs overview (public)
├── partners/page.tsx           # Partners page
├── founders/page.tsx           # Founder network overview (public)
├── faq/page.tsx                # FAQ
├── terms/page.tsx              # Terms of service
├── privacy/page.tsx            # Privacy policy
├── code-of-conduct/page.tsx    # Code of conduct
├── responsible-ai/page.tsx     # Responsible AI page
├── financials/page.tsx         # Financials
├── donate/page.tsx             # Donation page
└── platform/page.tsx           # Platform info

components/
├── Header.tsx                  # Global header
├── Footer.tsx                  # Global footer
├── Container.tsx               # Layout container
└── Dropdown.tsx                # Navigation dropdown

public/
├── *.png                       # Marketing images
├── *.pdf                       # Documents
└── CNAME                       # Domain config
```

**Changes to these files will NOT affect:**
- User authentication
- Dashboard functionality
- Portal features
- Database operations

**Safe changes include:**
- Content updates
- Copy changes
- Styling and layout
- Images and media
- SEO metadata
- Adding new marketing pages

---

### 🔵 Portal Files (For Building Founder/Mentor/Investor Features)

```
app/
├── dashboard/page.tsx          # Universal dashboard (role-based)
├── profile/page.tsx            # User profile management
├── founder/                    # Founder portal (future)
│   ├── dashboard/
│   ├── profile/
│   ├── matching/
│   ├── blog/
│   └── rooms/
├── mentor/                     # Mentor portal (future)
│   ├── dashboard/
│   ├── mentees/
│   └── sessions/
└── investor/                   # Investor portal (future)
    ├── dashboard/
    ├── portfolio/
    └── analytics/

components/portals/             # Portal-specific components (future)
├── shared/                     # Used across all portals
├── founder/                    # Founder-specific
├── mentor/                     # Mentor-specific
└── investor/                   # Investor-specific

lib/services/                   # Business logic (future)
├── founder/
├── mentor/
└── investor/
```

**Changes to these files will NOT affect:**
- Marketing site pages
- Public application forms
- General website content

---

### 🟡 Shared Infrastructure (Change with Caution)

```
app/
├── layout.tsx                  # Root layout (affects everything)
├── login/page.tsx              # Login flow
├── signup/page.tsx             # Signup flow
└── admin/page.tsx              # Admin area

components/
├── ClientLayout.tsx            # Client-side layout wrapper
├── ProtectedRoute.tsx          # Auth protection
└── ui/                         # Shared UI components

contexts/
└── AuthContext.tsx             # Authentication state

lib/
├── supabase.ts                 # Database client
└── utils.ts                    # Utilities

supabase/migrations/            # Database schema
middleware.ts                   # Route protection
```

**These files are shared:**
- Changes affect both marketing and portals
- Test thoroughly when modifying
- Consider backward compatibility

---

## Development Workflows

### 1. Adding a Marketing Page

**Scenario:** You want to add a "Team" page to the marketing site.

```bash
# 1. Create the page
touch app/team/page.tsx

# 2. Add content (safe, won't affect portals)
# app/team/page.tsx
export default function TeamPage() {
  return (
    <main>
      <Header />
      <Container>
        <h1>Our Team</h1>
        {/* Team content */}
      </Container>
      <Footer />
    </main>
  );
}

# 3. Add to navigation (update Header.tsx if needed)
```

**Impact:** None on portals. Marketing-only change.

---

### 2. Adding a Founder Portal Feature

**Scenario:** You want to add a "Matching Engine" feature for founders.

```bash
# 1. Create the page structure
mkdir -p app/founder/matching
touch app/founder/matching/page.tsx

# 2. Create components
mkdir -p components/portals/founder/matching
touch components/portals/founder/matching/MatchingEngine.tsx
touch components/portals/founder/matching/MatchCard.tsx

# 3. Create service layer
mkdir -p lib/services/founder
touch lib/services/founder/matching-service.ts

# 4. Create database migration
# Use Supabase MCP tools to create tables

# 5. Update dashboard
# Edit app/dashboard/page.tsx to add link in founder config
```

**Impact:** None on marketing site. Portal-only addition.

---

### 3. Updating Shared Components

**Scenario:** You want to update the Header component.

```bash
# Edit components/Header.tsx
```

**Impact:** Affects both marketing AND portals.

**Checklist:**
- [ ] Test on homepage (marketing)
- [ ] Test on dashboard (portal)
- [ ] Test with authenticated user
- [ ] Test with unauthenticated user
- [ ] Check responsive design
- [ ] Verify navigation works

---

### 4. Database Changes

**Scenario:** You want to add a new table for founder profiles.

```bash
# Use Supabase MCP tool
# Create migration with detailed comment
```

```sql
/*
  # Add Founder Profiles Table

  1. New Tables
    - `founder_profiles`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key to user_profiles)
      - `bio` (text)
      - `skills` (text array)

  2. Security
    - Enable RLS
    - Add policies for founder access only
*/

CREATE TABLE IF NOT EXISTS founder_profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES user_profiles(id) NOT NULL,
  bio text,
  skills text[],
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE founder_profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Founders can view own profile"
  ON founder_profiles FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE user_profiles.id = founder_profiles.user_id
      AND user_profiles.id = auth.uid()
      AND user_profiles.role = 'founder'
    )
  );
```

**Impact:** Portal features can use new table. Marketing site unaffected.

---

## File Organization Rules

### Rule 1: Marketing vs Portal Components

**❌ Bad:**
```typescript
// components/FounderMatchingCard.tsx
// Mixing portal feature in shared components
```

**✅ Good:**
```typescript
// components/portals/founder/matching/MatchCard.tsx
// Clear separation in portal-specific directory
```

### Rule 2: Service Layer Separation

**❌ Bad:**
```typescript
// lib/utils.ts - Adding founder matching logic to general utils
export function matchFounders() { ... }
```

**✅ Good:**
```typescript
// lib/services/founder/matching-service.ts
export class FounderMatchingService {
  static async findMatches(founderId: string) { ... }
}
```

### Rule 3: Route Organization

**❌ Bad:**
```typescript
// app/founder-matching/page.tsx - Ambiguous location
```

**✅ Good:**
```typescript
// app/founder/matching/page.tsx - Clear it's a founder portal feature
```

---

## Testing Strategy

### Marketing Site Testing Checklist

```bash
# Run dev server
npm run dev

# Test pages (in browser)
- [ ] Homepage (/)
- [ ] Programs (/programs)
- [ ] Partners (/partners)
- [ ] FAQ (/faq)
- [ ] Donate (/donate)

# Verify:
- [ ] All links work
- [ ] Images load
- [ ] Forms submit (if any)
- [ ] Responsive on mobile
- [ ] No console errors
```

### Portal Testing Checklist

```bash
# Test with different roles

# As Founder:
- [ ] Login as founder
- [ ] Access dashboard
- [ ] See founder-specific options
- [ ] Cannot access /mentor or /investor routes
- [ ] Profile works

# As Mentor:
- [ ] Login as mentor
- [ ] Access dashboard
- [ ] See mentor-specific options
- [ ] Cannot access /founder or /investor routes

# As Investor:
- [ ] Login as investor
- [ ] Access dashboard
- [ ] See investor-specific options
- [ ] Cannot access /founder or /mentor routes

# Unauthenticated:
- [ ] Cannot access /dashboard
- [ ] Redirects to /login
- [ ] Can access marketing pages
```

---

## Common Scenarios

### Scenario A: "I want to change the homepage design"

**Files to modify:**
- `app/page.tsx`

**Impact:** Marketing only

**Test:** Browse homepage as guest and logged-in user

---

### Scenario B: "I want to add a blog feature for founders"

**Files to create:**
```
app/founder/blog/
├── page.tsx
├── new/page.tsx
└── [slug]/page.tsx

components/portals/founder/blog/
├── BlogEditor.tsx
├── BlogCard.tsx
└── BlogList.tsx

lib/services/founder/
└── blog-service.ts
```

**Impact:** Portal only (founder portal)

**Test:** Login as founder and test blog features

---

### Scenario C: "I want to update the authentication flow"

**Files to modify:**
- `app/login/page.tsx`
- `app/signup/page.tsx`
- `contexts/AuthContext.tsx`
- `components/ProtectedRoute.tsx`

**Impact:** Both marketing AND portals

**Test:** Full flow from signup → login → dashboard → logout

---

## Quick Decision Tree

```
┌─ "Where should this feature go?"
│
├─ Is it visible to non-logged-in users?
│  │
│  ├─ YES → Marketing site
│  │         Location: app/feature-name/page.tsx
│  │
│  └─ NO  → Continue...
│
├─ Does it require authentication?
│  │
│  ├─ YES → Continue...
│  │
│  └─ NO  → Marketing site
│           Location: app/feature-name/page.tsx
│
├─ Is it role-specific?
│  │
│  ├─ Founder-only    → app/founder/feature/
│  ├─ Mentor-only     → app/mentor/feature/
│  ├─ Investor-only   → app/investor/feature/
│  └─ All roles       → app/dashboard or app/feature/
│
└─ Done!
```

---

## Emergency: "I Broke Something!"

### Marketing Site Broken
```bash
# Check these files (most likely culprits):
- app/page.tsx
- app/layout.tsx
- components/Header.tsx
- components/Footer.tsx

# View git changes
git diff

# Revert if needed
git checkout -- <filename>
```

### Portal Broken
```bash
# Check these files:
- app/dashboard/page.tsx
- components/ProtectedRoute.tsx
- contexts/AuthContext.tsx
- middleware.ts

# Check for middleware issues
# Disable middleware temporarily to debug:
# Rename middleware.ts to middleware.ts.bak
```

### Both Broken
```bash
# Likely root layout or auth issue:
- app/layout.tsx
- components/ClientLayout.tsx
- contexts/AuthContext.tsx
- lib/supabase.ts

# Check Supabase connection
# Verify .env variables are set
```

---

## Best Practices Summary

1. **Keep it Separated:** Marketing in `app/`, portals in `app/[role]/`
2. **Component Organization:** Portal components in `components/portals/[role]/`
3. **Service Layer:** Business logic in `lib/services/[role]/`
4. **Test Thoroughly:** Different users, different roles, different devices
5. **Document Changes:** Update relevant README when adding features
6. **Use Middleware:** Let middleware handle access control, not component logic
7. **RLS Everything:** Always use Row Level Security for portal data
8. **Isolate Experiments:** Test new portal features without touching marketing

---

## Getting Help

- **Architecture Questions:** See `ARCHITECTURE.md`
- **Database Questions:** See `supabase/migrations/` comments
- **Portal Planning:** See `app/founder/README.md` (and mentor, investor)
- **Deployment:** See `DEPLOYMENT_GUIDE.md`

---

## Future: When to Split Projects?

**Stay in one project if:**
- ✅ Shared authentication system
- ✅ Cross-role interactions (founder ↔ mentor ↔ investor)
- ✅ Unified database
- ✅ Same design system
- ✅ Single deployment pipeline

**Consider splitting if:**
- ❌ Different domains (e.g., marketing.com vs portal.com)
- ❌ Different tech stacks needed
- ❌ Completely independent teams
- ❌ Different scaling requirements
- ❌ No data sharing between systems

**Current recommendation:** Stay in one project. It's maintainable with proper organization.
