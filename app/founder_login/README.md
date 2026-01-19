# Founder Portal

This directory contains the **Founder Portal** - a dedicated workspace for founders in the Founder's Network.

## Status: 🚧 Under Development

This portal is currently being planned and built. The dashboard currently provides role-based access to founder-specific features.

## Planned Features

### 1. Profile & Matching
- **Founder Profile Builder** - Create comprehensive founder profiles
- **Needs-Based Matching** - AI-powered matching with mentors, investors, and resources
- **Skill & Experience Tracking** - Showcase expertise and track growth

### 2. Content & Communication
- **Blog/Vlog Creation** - Share insights and updates
- **Content Management** - Manage posts, articles, and videos
- **Engagement Analytics** - Track content performance

### 3. Social Rooms
- **Meeting Rooms** - Virtual spaces for collaboration
- **Deal Rooms** - Secure spaces for investment discussions
- **Game Rooms** - Casual networking and team building
- **Chat Rooms** - Topic-based discussions

### 4. Resources & Tools
- **Resource Library** - Access templates, guides, and tools
- **Mentor Directory** - Find and connect with mentors
- **Investor Database** - Browse investor profiles and interests
- **Event Calendar** - Upcoming workshops, pitch events, and networking

## Directory Structure (Planned)

```
founder_login/
├── dashboard/              # Founder-specific dashboard
│   └── page.tsx
├── profile/                # Profile management
│   ├── page.tsx           # View/edit profile
│   ├── edit/              # Profile editor
│   └── preview/           # Public profile view
├── matching/               # Matching engine
│   ├── page.tsx           # Browse matches
│   ├── recommendations/   # AI recommendations
│   └── requests/          # Match requests
├── blog/                   # Content creation
│   ├── page.tsx           # Blog list
│   ├── new/               # Create post
│   ├── [slug]/            # View post
│   └── edit/[id]/         # Edit post
├── rooms/                  # Social rooms
│   ├── page.tsx           # Rooms hub
│   ├── meeting/           # Meeting rooms
│   ├── deals/             # Deal rooms
│   ├── games/             # Game rooms
│   └── chat/              # Chat rooms
└── resources/              # Resource library
    ├── page.tsx           # Resource hub
    ├── mentors/           # Mentor directory
    ├── investors/         # Investor directory
    └── events/            # Event calendar
```

## Component Structure (Planned)

```
components/portals/founder/
├── profile/
│   ├── ProfileCard.tsx
│   ├── ProfileForm.tsx
│   └── ProfilePreview.tsx
├── matching/
│   ├── MatchCard.tsx
│   ├── MatchingEngine.tsx
│   └── RecommendationList.tsx
├── blog/
│   ├── BlogEditor.tsx
│   ├── BlogCard.tsx
│   └── BlogList.tsx
└── rooms/
    ├── RoomCard.tsx
    ├── MeetingRoom.tsx
    ├── DealRoom.tsx
    └── ChatRoom.tsx
```

## Database Tables (Planned)

```sql
-- Founder profiles
founder_profiles (
  id uuid PRIMARY KEY,
  user_id uuid REFERENCES user_profiles(id),
  bio text,
  skills text[],
  needs text[],
  stage text, -- ideation, mvp, growth, scale
  industry text[],
  seeking text[], -- mentorship, investment, co-founder
  created_at timestamptz,
  updated_at timestamptz
)

-- Matching system
founder_matches (
  id uuid PRIMARY KEY,
  founder_id uuid REFERENCES founder_profiles(id),
  matched_user_id uuid REFERENCES user_profiles(id),
  match_type text, -- mentor, investor, co-founder
  score float,
  status text, -- pending, accepted, rejected
  created_at timestamptz
)

-- Blog/content
founder_posts (
  id uuid PRIMARY KEY,
  author_id uuid REFERENCES user_profiles(id),
  title text,
  content text,
  type text, -- blog, vlog, update
  status text, -- draft, published
  created_at timestamptz,
  published_at timestamptz
)

-- Social rooms
social_rooms (
  id uuid PRIMARY KEY,
  name text,
  type text, -- meeting, deal, game, chat
  creator_id uuid REFERENCES user_profiles(id),
  participants uuid[],
  created_at timestamptz
)

-- Room messages
room_messages (
  id uuid PRIMARY KEY,
  room_id uuid REFERENCES social_rooms(id),
  sender_id uuid REFERENCES user_profiles(id),
  content text,
  created_at timestamptz
)
```

## Development Guidelines

### Adding a New Feature

1. **Create the page:**
   ```bash
   # Example: Adding a mentor directory
   mkdir -p app/founder/mentors
   touch app/founder/mentors/page.tsx
   ```

2. **Create components:**
   ```bash
   mkdir -p components/portals/founder/mentors
   touch components/portals/founder/mentors/MentorCard.tsx
   ```

3. **Create service layer:**
   ```bash
   mkdir -p lib/services/founder
   touch lib/services/founder/mentor-service.ts
   ```

4. **Create database migration:**
   ```typescript
   // Use Supabase MCP tools
   // mcp__supabase__apply_migration
   ```

5. **Update dashboard:**
   - Add link in `app/dashboard/page.tsx` under founder config

### Best Practices

- **Role Check:** Always verify user is a founder
- **Data Isolation:** Use RLS to ensure founders only see their data
- **Shared Components:** Use `components/portals/shared/` for cross-portal components
- **Type Safety:** Create types in `lib/types/founder.ts`
- **Testing:** Test all features with founder role

### Code Example

```typescript
// app/founder/profile/page.tsx
'use client';

import { useAuth } from '@/contexts/AuthContext';
import { useEffect, useState } from 'react';
import { FounderProfileService } from '@/lib/services/founder/profile-service';

export default function FounderProfilePage() {
  const { user, profile } = useAuth();
  const [founderProfile, setFounderProfile] = useState(null);

  // Verify user is a founder
  if (profile?.role !== 'founder') {
    return <div>Access denied. Founder role required.</div>;
  }

  useEffect(() => {
    async function loadProfile() {
      const data = await FounderProfileService.getProfile(user.id);
      setFounderProfile(data);
    }
    loadProfile();
  }, [user]);

  return (
    <div>
      <h1>Founder Profile</h1>
      {/* Profile UI */}
    </div>
  );
}
```

## Current Access

For now, founders can access:
- General dashboard at `/dashboard`
- Profile management at `/profile`
- Application to programs at `/programs/apply`
- Founder network form at `/founders/network-form`

New founder-specific features will be added under `/founder/*` routes as they're developed.
