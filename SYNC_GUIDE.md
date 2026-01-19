# Sync Guide

## Git Repository Initialized

A git repository has been initialized to track all future changes. From now on, you can use git commands to see what's changed.

## Checking Changes

To see what files have changed since the last commit:
```bash
git status
```

To see detailed changes:
```bash
git diff
```

To see commit history:
```bash
git log --oneline
```

## Key Files Added Since Nov 24, 2024

### Database (Supabase Migrations)
- `supabase/migrations/20251101204140_create_founders_network_submissions.sql`
- `supabase/migrations/20251101204759_create_founders_network_submissions.sql`
- `supabase/migrations/20251101225021_add_job_role_to_founders_network.sql`
- `supabase/migrations/20251101225932_add_company_segment_to_founders_network.sql`
- `supabase/migrations/20251101231007_add_company_segment_other_field.sql`
- `supabase/migrations/20251102013805_add_anon_read_policy_founders_network.sql`

### Pages
- `app/founders/join/page.tsx` - Join founders network page
- `app/founders/network-form/page.tsx` - Network form submission

### Recent Updates (Dec 3, 2024)
- `app/page.tsx` - Updated logo
- `public/eai_logo.png` - New EAI logo

## Syncing with Local VSC

### Option 1: Manual File Copy
Copy the files listed above from this environment to your local VSC project.

### Option 2: Create a Remote Repository
1. Create a new repository on GitHub/GitLab
2. Add remote:
   ```bash
   git remote add origin <your-repo-url>
   ```
3. Push changes:
   ```bash
   git branch -M main
   git push -u origin main
   ```
4. Clone or pull in your local VSC

### Option 3: Export as Patch
Create a patch file to apply in your local environment:
```bash
git format-patch --root HEAD --stdout > changes.patch
```

Then in your local environment:
```bash
git apply changes.patch
```

## Future Workflow

1. Make changes in this environment
2. Commit changes:
   ```bash
   git add .
   git commit -m "Description of changes"
   ```
3. Check what changed:
   ```bash
   git show
   ```
4. Export and sync to your local VSC using one of the methods above
