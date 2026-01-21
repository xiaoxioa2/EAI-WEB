# Project Architecture: Marketing Site + Founder's Network Portal

## Overview

This project contains **two distinct applications** that share authentication and database:

1. **Marketing Site** (Public) - For visitors and lead generation
2. **Founder's Network Portal** (Protected) - Role-based member portals

## Directory Structure

```
app/
├── layout.tsx               # Root layout with Header/Footer
├── page.tsx                 # Homepage
├── programs/                # Programs overview (public)
│   ├── page.tsx            # Programs landing page
│   └── apply/              # Accelerator application
│       └── page.tsx
├── partners/                # Partners page
├── faq/                     # FAQ
├── donate/                  # Donation page
├── platform/                # Platform info
├── preview-info/            # Preview information
│
├── founders/                # Founder-related public pages
│   ├── page.tsx            # Founders landing page
│   ├── join/               # Founder network info
│   │   └── page.tsx
│   └── network-form/       # Founder application form
│       └── page.tsx
│
├── info/                    # Legal & informational pages
│   ├── terms/
│   ├── privacy/
│   ├── code-of-conduct/
│   ├── responsible-ai/
│   └── financials/
│
├── (auth)/                  # AUTHENTICATION FLOWS (Public)
│   ├── login/
│   │   └── page.tsx
│   └── signup/
│       └── page.tsx
│
├── (portals)/              # PROTECTED MEMBER PORTALS
│   ├── dashboard/          # Universal dashboard (role-based)
│   │   └── page.tsx
│   ├── profile/            # User profile management
│   │   └── page.tsx
│   ├── admin/              # Admin portal
│   │   └── page.tsx
│   │
│   ├── founder_portal/     # FOUNDER PORTAL (Future)
│   │   └── README.md
│   │
│   ├── expert_portal/      # EXPERT PORTAL (Future)
│   │   └── README.md
│   │
│   └── investor_portal/    # INVESTOR PORTAL (Future)
│       └── README.md

components/
├── Header.tsx               # Site header
├── Footer.tsx               # Site footer
├── ClientLayout.tsx         # Client-side layout wrapper
├── ProtectedRoute.tsx       # Auth protection wrapper
│
├── portals/                 # Portal-specific components
│   ├── shared/              # Used across all portals
│   ├── founder/             # Founder-specific
│   ├── expert/              # Expert-specific
│   └── investor/            # Investor-specific
│
└── ui/                      # Shared UI components (shadcn/ui)
```

## Key Principles

### 1. Route Groups (Next.js 13+ feature)

Route groups using `(groupName)` syntax create **logical separation without affecting URLs**.

- **Root level** - Public marketing pages (default, no route group needed)
- `(auth)` - Authentication flows (login, signup)
- `(portals)` - Protected member portals

**Benefits:**
- Each group can have its own layout
- URLs remain clean (no group name in URL)
- Clear separation of concerns
- Minimal restructuring needed for existing marketing pages

**Note:** Application forms currently reside at root level (`app/founders/`, `app/programs/apply/`) and will be moved to an `(apply)` route group when needed for better organization.

### 2. Separation of Concerns

| Concern | Location | Protection |
|---------|----------|------------|
| Marketing content | `app/` (root level) | Public |
| Auth flows | `app/(auth)/` | Public |
| Application forms | `app/founders/`, `app/programs/apply/` | Public (but create records) |
| Member portals | `app/(portals)/` | Protected by `ProtectedRoute` |
| Admin portal | `app/(portals)/admin/` | Protected (admin only) |

### 3. Middleware for Role-Based Access

```typescript
// middleware.ts
// Protects portal routes based on user role
// Redirects unauthorized access to appropriate pages
```

### 4. Component Organization

**Root Components** (`components/`)
- Site-wide components (Header, Footer, etc.)
- Shared utilities and wrappers
- No marketing-specific folder needed

**Portal Components** (`components/portals/`)
- Used in authenticated portals
- Role-aware
- Feature-rich, interactive

**Shared UI Components** (`components/ui/`)
- Design system components (shadcn/ui)
- Used across entire site

## Development Workflow

### Working on Marketing Site

```bash
# Files to modify:
app/**  (root level pages)
components/**  (shared components)
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

### Working on Member Portals

```bash
# Files to modify:
app/(portals)/**
components/portals/**
lib/services/**
```

**Safe to change:**
- Portal features
- Portal-specific UI
- Business logic
- Role-based functionality

**Will NOT affect:**
- Marketing pages
- Other portal types
- Authentication system (unless explicitly modifying auth)

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
   mkdir -p app/(portals)/founder_portal/new-feature
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
   - Modify `app/(portals)/dashboard/page.tsx` to add new feature link

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
A: `app/new-page/page.tsx` (at root level)

**Q: Where do I add a new portal feature?**
A: `app/(portals)/portal_name/new-feature/page.tsx`

**Q: Where do authentication pages go?**
A: `app/(auth)/page-name/page.tsx` (e.g., login, signup, password-reset)

**Q: Where do application forms go?**
A: Currently at root level: `app/founders/network-form/page.tsx`, `app/programs/apply/page.tsx`. These will be moved to an `(apply)` route group when needed.

**Q: Will changing marketing pages affect portals?**
A: No, they're completely separated. Marketing is at root level, portals are in `(portals)` route group.

**Q: Can I share components between marketing and portals?**
A: Yes, use `components/ui/` for shared UI components. Keep portal-specific components in `components/portals/`.

**Q: How do I add a new user role?**
A:
1. Update `user_profiles` table enum
2. Add role configuration in dashboard
3. Create portal directory in `app/(portals)/new_role_portal/`
4. Update middleware for role-based routing

**Q: Should I create separate projects for each portal?**
A: No! Keep them in one project because:
- Shared authentication
- Cross-portal interactions (founder ↔ expert ↔ investor)
- Unified database
- Consistent design system
