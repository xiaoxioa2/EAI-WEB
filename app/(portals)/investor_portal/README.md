# Investor Portal

This directory contains the **Investor Portal** - a dedicated workspace for investors in the network.

## Status: 🚧 Under Development

This portal is currently being planned and built.

## Planned Features

### 1. Deal Flow Management
- **Startup Pipeline** - Browse and filter startups
- **Investment Opportunities** - Review pitch decks and requests
- **Due Diligence Tools** - Track evaluation process

### 2. Portfolio Management
- **Portfolio Dashboard** - Track all investments
- **Performance Analytics** - Monitor startup progress
- **Exit Tracking** - Track exits and returns

### 3. Investment Thesis
- **Thesis Profile** - Define investment criteria
- **Matching Algorithm** - Get matched with relevant startups
- **Deal Notifications** - Alerts for matching opportunities

### 4. Network & Collaboration
- **Investor Network** - Connect with co-investors
- **Syndicate Management** - Create and manage syndicates
- **Deal Sharing** - Share opportunities with network

## Directory Structure (Planned)

```
investor/
├── dashboard/              # Investor-specific dashboard
├── pipeline/               # Deal pipeline
├── portfolio/              # Portfolio management
├── analytics/              # Performance analytics
├── profile/                # Investor profile
└── network/                # Investor network
```

## Database Tables (Planned)

```sql
investor_profiles (
  id uuid PRIMARY KEY,
  user_id uuid REFERENCES user_profiles(id),
  thesis text,
  investment_range_min bigint,
  investment_range_max bigint,
  industries text[],
  stages text[], -- seed, series-a, etc
  check_size bigint
)

investments (
  id uuid PRIMARY KEY,
  investor_id uuid REFERENCES investor_profiles(id),
  startup_id uuid REFERENCES founder_profiles(id),
  amount bigint,
  date timestamptz,
  status text
)

deal_pipeline (
  id uuid PRIMARY KEY,
  investor_id uuid REFERENCES investor_profiles(id),
  startup_id uuid REFERENCES founder_profiles(id),
  stage text, -- reviewing, diligence, negotiation, closed
  notes text
)
```

## Current Access

Investors can currently access:
- General dashboard at `/dashboard`
- Profile management at `/profile`
- Browse programs at `/programs`

New investor-specific features will be added under `/investor/*` routes as they're developed.
