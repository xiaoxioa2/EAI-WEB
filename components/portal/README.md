# Portal Components

This directory contains components specific to the **Founder's Network Portal** features.

## Structure

```
portals/
├── shared/              # Components used across multiple portal types
│   ├── PortalHeader.tsx
│   ├── PortalSidebar.tsx
│   ├── RoleCheck.tsx
│   └── ...
│
├── founder/             # Founder portal components
│   ├── profile/
│   ├── matching/
│   ├── blog/
│   └── rooms/
│
├── mentor/              # Mentor portal components
│   ├── profile/
│   ├── mentees/
│   └── sessions/
│
└── investor/            # Investor portal components
    ├── profile/
    ├── portfolio/
    └── analytics/
```

## Guidelines

### When to Create a Portal Component

Create a component in `portals/` if:
- It's used exclusively in authenticated portal pages
- It requires role-based logic
- It handles portal-specific data (profiles, matches, etc.)

### When to Use Shared UI Components

Use `components/ui/` if:
- It's a generic design system component (button, card, etc.)
- It's used in both marketing AND portals
- It has no business logic

### Example: Portal Component

```typescript
// components/portals/founder/matching/MatchCard.tsx
'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

interface MatchCardProps {
  match: {
    id: string;
    name: string;
    role: string;
    score: number;
  };
  onAccept: (id: string) => void;
}

export function MatchCard({ match, onAccept }: MatchCardProps) {
  const { profile } = useAuth();

  // Role check
  if (profile?.role !== 'founder') {
    return null;
  }

  return (
    <Card>
      <h3>{match.name}</h3>
      <p>Role: {match.role}</p>
      <p>Match Score: {match.score}%</p>
      <Button onClick={() => onAccept(match.id)}>
        Connect
      </Button>
    </Card>
  );
}
```

### Example: Shared Component

```typescript
// components/portals/shared/RoleCheck.tsx
'use client';

import { useAuth } from '@/contexts/AuthContext';
import { ReactNode } from 'react';

interface RoleCheckProps {
  allowedRoles: string[];
  children: ReactNode;
  fallback?: ReactNode;
}

export function RoleCheck({ allowedRoles, children, fallback }: RoleCheckProps) {
  const { profile } = useAuth();

  if (!profile || !allowedRoles.includes(profile.role)) {
    return <>{fallback || <div>Access denied</div>}</>;
  }

  return <>{children}</>;
}

// Usage:
<RoleCheck allowedRoles={['founder', 'mentor']}>
  <FounderMentorFeature />
</RoleCheck>
```

## Component Naming Conventions

- **Descriptive:** `FounderProfileCard` not `Card1`
- **Role Prefix:** When role-specific, include role: `FounderMatchingEngine`
- **Feature Grouping:** Group by feature: `blog/BlogEditor.tsx`, not `BlogEditor.tsx`

## Testing Portal Components

```typescript
// components/portals/founder/matching/MatchCard.test.tsx
import { render, screen } from '@testing-library/react';
import { MatchCard } from './MatchCard';

describe('MatchCard', () => {
  it('renders match information', () => {
    const match = {
      id: '1',
      name: 'Jane Mentor',
      role: 'mentor',
      score: 95
    };

    render(<MatchCard match={match} onAccept={jest.fn()} />);

    expect(screen.getByText('Jane Mentor')).toBeInTheDocument();
    expect(screen.getByText('Match Score: 95%')).toBeInTheDocument();
  });
});
```

## Status

- `shared/` - Not yet implemented
- `founder/` - Not yet implemented
- `mentor/` - Not yet implemented
- `investor/` - Not yet implemented

Portal components will be added as features are developed. Start with the most critical features first.
