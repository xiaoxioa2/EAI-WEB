# Portal Naming Convention

## Directory Names

To avoid confusion between marketing pages and portal features, we use this naming convention:

### Marketing (Public)
```
app/founders/           # Public: Founder network overview (marketing)
├── page.tsx            # Public info about the network
├── join/               # Join the network CTA
└── network-form/       # Network application form
```

### Portals (Protected)
```
app/founder_login/      # Protected: Founder portal (requires login)
├── profile/
├── matching/
├── blog/
└── rooms/

app/mentor_portal/      # Protected: Mentor portal (requires login)
├── dashboard/
├── mentees/
└── sessions/

app/investor_portal/    # Protected: Investor portal (requires login)
├── pipeline/
├── portfolio/
└── analytics/
```

## Naming Pattern

**Marketing Pages:** Use descriptive names (`/founders`, `/programs`, `/partners`, `/info`)
- Public-facing
- Information and lead generation
- No authentication required
- Legal/informational pages grouped under `/info`

**Portal Pages:** Use singular + `_portal` or `_login` suffix
- Protected routes
- Require authentication
- Role-specific features

## Examples

| Marketing Route | Purpose | Portal Route | Purpose |
|----------------|---------|--------------|---------|
| `/founders` | Public info about network | `/founder_login` | Founder's personal portal |
| `/programs` | Program overview | `/dashboard` | Role-based dashboard |
| `/partners` | Partnership info | N/A | - |
| `/info/terms` | Legal pages | N/A | - |
| `/info/privacy` | Privacy policy | N/A | - |

## Middleware Protection

The middleware automatically protects these routes:
- `/dashboard`
- `/profile`
- `/founder_login`
- `/mentor_portal`
- `/investor_portal`
- `/admin`

All other routes are public by default.

## Organizational Structure

### Info Directory
Legal and informational pages are grouped under `/info`:
- `/info/terms` - Terms of Use
- `/info/privacy` - Privacy Policy
- `/info/code-of-conduct` - Code of Conduct
- `/info/responsible-ai` - Responsible AI Guidelines
- `/info/financials` - Financial Information

This keeps related pages organized and makes the root directory cleaner.

## Why This Naming?

1. **Clarity:** Immediately obvious which is marketing vs. portal
2. **No Conflicts:** `/founders` (marketing) vs. `/founder_login` (portal)
3. **SEO Friendly:** Marketing URLs remain clean and descriptive
4. **Maintainable:** Clear separation makes codebase easier to navigate
5. **Organized:** Related pages grouped under common directories (`/info`)

## Quick Reference

**Adding marketing content about founders?**
→ Use `app/founders/`

**Adding founder portal feature?**
→ Use `app/founder_login/`

**Adding mentor portal feature?**
→ Use `app/mentor_portal/`

**Adding investor portal feature?**
→ Use `app/investor_portal/`
