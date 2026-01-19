# Project Architecture: Marketing Site + Founder's Network Portal

## Overview

This project contains **two distinct applications** that share authentication and database:

1. **Marketing Site** (Public) - For visitors and lead generation
2. **Founder's Network Portal** (Protected) - Role-based member portals

## Directory Structure

```
app/
├── (marketing)/              # PUBLIC MARKETING SITE
│   ├── layout.tsx           # Marketing layout with Header/Footer
│   ├── page.tsx             # Homepage
│   ├── programs/            # Programs overview (public)
│   ├── partners/            # Partners page
│   ├── faq/                 # FAQ
│   ├── info/                # Legal & informational pages
│   │   ├── terms/
│   │   ├── privacy/
│   │   ├── code-of-conduct/
│   │   ├── responsible-ai/
│   │   └── financials/
│   └── donate/
│
├── (auth)/                   # AUTHENTICATION FLOWS (Public)
│   ├── login/
│   └── signup/
│
├── (applications)/          # PUBLIC APPLICATION FORMS
│   ├── founders/
│   │   ├── join/            # Founder network info
│   │   └── network-form/    # Founder application
│   └── programs/
│       └── apply/           # Accelerator application
│
├── (portals)/               # PROTECTED MEMBER PORTALS
│   ├── layout.tsx           # Shared portal layout + auth check
│   │
│   ├── dashboard/           # Universal dashboard (role-based)
│   ├── profile/             # User profile management
│   │
│   ├── founder_login/       # FOUNDER PORTAL (Future)
│   │   ├── dashboard/
│   │   ├── profile/
│   │   ├── matching/
│   │   ├── blog/
│   │   └── rooms/
│   │
│   ├── mentor_portal/       # MENTOR PORTAL (Future)
│   │   ├── dashboard/
│   │   ├── mentees/
│   │   └── sessions/
│   │
│   └── investor_portal/     # INVESTOR PORTAL (Future)
│       ├── dashboard/
│       ├── portfolio/
│       └── deals/
│
└── admin/                   # ADMIN AREA (Protected)
    └── page.tsx

components/
├── marketing/               # Marketing-specific components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ...
│
├── portals/                 # Portal-specific components
│   ├── shared/              # Used across all portals
│   ├── founder/             # Founder-specific (for founder_login portal)
│   ├── mentor/              # Mentor-specific (for mentor_portal)
│   └── investor/            # Investor-specific (for investor_portal)
│
└── ui/                      # Shared UI components (shadcn/ui)
```

## Key Principles

### 1. Route Groups (Next.js 13+ feature)

Route groups using `(groupName)` syntax create **logical separation without affecting URLs**.

- `(marketing)` - Public pages for visitors
- `(portals)` - Protected pages requiring authentication
- `(auth)` - Authentication flows
- `(applications)` - Public application forms

**Benefits:**
- Each group can have its own layout
- URLs remain clean (no `marketing` or `portals` in URL)
- Clear separation of concerns

### 2. Separation of Concerns

| Concern | Location | Protection |
|---------|----------|------------|
| Marketing content | `app/(marketing)/` | Public |
| Auth flows | `app/(auth)/` | Public |
| Application forms | `app/(applications)/` | Public (but create records) |
| Member portals | `app/(portals)/` | Protected by `ProtectedRoute` |
| Admin tools | `app/admin/` | Protected (admin only) |

### 3. Middleware for Role-Based Access

```typescript
// middleware.ts
// Protects portal routes based on user role
// Redirects unauthorized access to appropriate pages
```

### 4. Component Organization

**Marketing Components** (`components/marketing/`)
- Used only in marketing site
- No authentication dependencies
- Focus on lead generation and information

**Portal Components** (`components/portals/`)
- Used in authenticated portals
- Role-aware
- Feature-rich, interactive

**Shared Components** (`components/ui/`)
- Design system components (shadcn/ui)
- Used across both marketing and portals

## Development Workflow

### Working on Marketing Site

```bash
# Files to modify:
app/(marketing)/**
components/marketing/**
```

**Safe to change:**
- Page content and copy
- Marketing styles and layouts
- Public forms and CTAs
- SEO and metadata

**Will NOT affect:**
- Portal functionality
- User dashboards
- Authentication flows

### Working on Founder's Network Portal

```bash
# Files to modify:
app/founder_login/**
components/portals/founder/**
lib/services/founder/**
```

**Safe to change:**
- Founder portal features
- Founder-specific UI
- Matching algorithms
- Blog/vlog functionality

**Will NOT affect:**
- Marketing pages
- Other portal types (mentor, investor)
- Authentication system

### Working on Database

```bash
# Files to modify:
supabase/migrations/**
lib/services/**
```

**Guidelines:**
- Create separate tables for portal-specific data
- Use RLS to enforce access control
- Test migrations thoroughly
- Document schema changes

## Database Structure

```sql
-- Core tables (shared across all)
auth.users                    # Managed by Supabase Auth
user_profiles                 # Basic profile (role, name, email)

-- Portal-specific tables
founder_profiles              # Founder-specific data
mentor_profiles               # Mentor-specific data
investor_profiles             # Investor-specific data

-- Shared features
founder_network_submissions   # Network applications
accelerator_applications      # Program applications
newsletter_subscriptions      # Newsletter signups
```

## Future Portal Development

When adding new portal features:

1. **Create portal directory:**
   ```bash
   mkdir -p app/founder_login/new-feature
   ```

2. **Add components:**
   ```bash
   mkdir -p components/portals/founder/new-feature
   ```

3. **Add services:**
   ```bash
   mkdir -p lib/services/founder
   # Create service file for business logic
   ```

4. **Create migration if needed:**
   ```bash
   # Use Supabase MCP tool to create migration
   ```

5. **Update dashboard links:**
   - Modify `app/dashboard/page.tsx` to add new feature link

## Testing Strategy

### Marketing Site Testing
- Test all public pages render correctly
- Verify CTAs and forms submit
- Check SEO and metadata
- Ensure responsive design

### Portal Testing
- Test role-based access control
- Verify data isolation between roles
- Check permission boundaries
- Test feature functionality per role

### Integration Testing
- Ensure authentication flow works
- Verify role assignment on signup
- Test dashboard redirection based on role
- Check data persistence across portals

## Deployment Notes

- Single deployment for both marketing and portals
- Shared authentication and database
- Same domain (no subdomain needed)
- Consistent design system

## FAQ for Developers

**Q: Where do I add a new marketing page?**
A: `app/new-page/page.tsx`

**Q: Where do I add a new founder portal feature?**
A: `app/founder_login/new-feature/page.tsx`

**Q: Will changing marketing pages affect portals?**
A: No, they're completely separated by route groups and layouts.

**Q: Can I share components between marketing and portals?**
A: Yes, use `components/ui/` for shared UI components. Keep domain-specific components separate.

**Q: How do I add a new user role?**
A:
1. Update `user_profiles` table enum
2. Add role configuration in dashboard
3. Create portal directory in `app/new-role_portal/`
4. Update middleware for role-based routing

**Q: Should I create separate projects for each portal?**
A: No! Keep them in one project because:
- Shared authentication
- Cross-portal interactions (founder ↔ mentor ↔ investor)
- Unified database
- Consistent design system
