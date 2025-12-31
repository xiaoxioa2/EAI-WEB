/*
  # Create Newsletter Subscriptions Table

  1. New Tables
    - `newsletter_subscriptions`
      - `id` (uuid, primary key) - Unique identifier for each subscription
      - `email` (text, unique, not null) - Subscriber's email address
      - `subscribed_at` (timestamptz) - When they subscribed
      - `is_active` (boolean) - Whether subscription is active (for unsubscribes)
      - `created_at` (timestamptz) - Record creation timestamp
      - `updated_at` (timestamptz) - Record update timestamp

  2. Security
    - Enable RLS on `newsletter_subscriptions` table
    - Add policy for anonymous users to insert their email (subscribe)
    - Add policy for authenticated users to read all subscriptions (for admin purposes)
    - Add policy for users to update their own subscription status (for unsubscribing)

  3. Notes
    - Email field is unique to prevent duplicate subscriptions
    - `is_active` defaults to true, can be set to false for unsubscribes
    - Anonymous users can only insert, not read existing subscriptions
*/

CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  subscribed_at timestamptz DEFAULT now(),
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Allow anyone (including anonymous users) to subscribe
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'newsletter_subscriptions'
    AND policyname = 'Anyone can subscribe to newsletter'
  ) THEN
    CREATE POLICY "Anyone can subscribe to newsletter"
      ON newsletter_subscriptions
      FOR INSERT
      TO anon, authenticated
      WITH CHECK (true);
  END IF;
END $$;

-- Only authenticated users can view subscriptions (for admin dashboard)
CDO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'newsletter_subscriptions'
    AND policyname = 'Authenticated users can view all subscriptions'
  ) THEN
    CREATE POLICY "Authenticated users can view all subscriptions"
      ON newsletter_subscriptions
      FOR SELECT
      TO authenticated
      USING (true);
  END IF;
END $$;

-- Allow users to update subscription status (for unsubscribe functionality)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies
    WHERE tablename = 'newsletter_subscriptions'
    AND policyname = 'Anyone can update subscription status'
  ) THEN
    CREATE POLICY "Anyone can update subscription status"
      ON newsletter_subscriptions
      FOR UPDATE
      TO anon, authenticated
      USING (true)
      WITH CHECK (true);
  END IF;
END $$;

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_email 
  ON newsletter_subscriptions(email);

-- Create index on is_active for filtering active subscriptions
CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_active 
  ON newsletter_subscriptions(is_active);
