# Mentor/Expert Portal

This directory contains the **Mentor Portal** - a dedicated workspace for experts and mentors in the network.

## Status: 🚧 Under Development

This portal is currently being planned and built.

## Planned Features

### 1. Mentorship Management
- **Mentee Dashboard** - View and manage mentees
- **Session Scheduling** - Calendar integration for mentorship sessions
- **Progress Tracking** - Track mentee growth and milestones

### 2. Expertise Showcase
- **Expert Profile** - Highlight experience and expertise areas
- **Availability Management** - Set mentorship availability
- **Review System** - Receive and display testimonials

### 3. Resources & Content
- **Mentorship Guides** - Access best practices and templates
- **Resource Sharing** - Share materials with mentees
- **Content Creation** - Create educational content

### 4. Community
- **Expert Network** - Connect with other mentors
- **Group Sessions** - Host workshops and group mentorship
- **Discussion Forums** - Engage in expert discussions

## Directory Structure (Planned)

```
mentor/
├── dashboard/              # Mentor-specific dashboard
├── mentees/                # Mentee management
├── sessions/               # Session scheduling
├── profile/                # Expert profile
├── resources/              # Resource library
└── community/              # Expert community
```

## Database Tables (Planned)

```sql
mentor_profiles (
  id uuid PRIMARY KEY,
  user_id uuid REFERENCES user_profiles(id),
  expertise text[],
  industries text[],
  availability jsonb,
  max_mentees integer,
  bio text
)

mentorship_relationships (
  id uuid PRIMARY KEY,
  mentor_id uuid REFERENCES mentor_profiles(id),
  mentee_id uuid REFERENCES founder_profiles(id),
  status text,
  started_at timestamptz
)

mentorship_sessions (
  id uuid PRIMARY KEY,
  relationship_id uuid REFERENCES mentorship_relationships(id),
  scheduled_at timestamptz,
  duration integer,
  notes text,
  status text
)
```

## Current Access

Mentors/experts can currently access:
- General dashboard at `/dashboard`
- Profile management at `/profile`

New mentor-specific features will be added under `/mentor/*` routes as they're developed.
