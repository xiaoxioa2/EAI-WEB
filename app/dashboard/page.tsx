'use client';

import { useAuth } from '@/contexts/AuthContext';

export const dynamic = 'force-dynamic';
import ProtectedRoute from '@/components/ProtectedRoute';
import { Container } from '@/components/Container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Briefcase, TrendingUp, UserCircle, Calendar, MessageSquare, BookOpen } from 'lucide-react';
import Link from 'next/link';

function DashboardContent() {
  const { profile } = useAuth();

  if (!profile) return null;

  const roleConfig = {
    founder: {
      title: 'Founder Dashboard',
      description: 'Manage your startup journey and connect with investors and mentors',
      icon: Users,
      color: 'bg-blue-600',
      cards: [
        {
          title: 'Apply to Accelerators',
          description: 'Submit your application to join our startup accelerator program',
          icon: TrendingUp,
          link: '/programs/apply',
        },
        {
          title: 'Join Founder Network',
          description: 'Connect with fellow founders and share experiences',
          icon: Users,
          link: '/founders/network-form',
        },
        {
          title: 'Find Mentors',
          description: 'Get guidance from experienced experts in your industry',
          icon: UserCircle,
          link: '/founders#experts',
        },
        {
          title: 'Connect with Investors',
          description: 'Pitch your startup to potential investors',
          icon: TrendingUp,
          link: '/founders#investors',
        },
      ],
    },
    expert: {
      title: 'Expert Dashboard',
      description: 'Share your knowledge and mentor the next generation of founders',
      icon: UserCircle,
      color: 'bg-green-600',
      cards: [
        {
          title: 'View Founders',
          description: 'See founders looking for mentorship in your expertise area',
          icon: Users,
          link: '/founders',
        },
        {
          title: 'Schedule Sessions',
          description: 'Set up mentorship sessions and workshops',
          icon: Calendar,
          link: '/experts/schedule',
        },
        {
          title: 'Resources',
          description: 'Access mentorship guides and best practices',
          icon: BookOpen,
          link: '/resources',
        },
        {
          title: 'Community',
          description: 'Connect with other experts and advisors',
          icon: MessageSquare,
          link: '/experts/community',
        },
      ],
    },
    investor: {
      title: 'Investor Dashboard',
      description: 'Discover promising startups and manage your investment portfolio',
      icon: TrendingUp,
      color: 'bg-purple-600',
      cards: [
        {
          title: 'Browse Startups',
          description: 'View startups seeking investment',
          icon: Briefcase,
          link: '/programs',
        },
        {
          title: 'Accelerator Cohorts',
          description: 'See companies in our accelerator programs',
          icon: TrendingUp,
          link: '/programs/cohorts',
        },
        {
          title: 'Investment Opportunities',
          description: 'Review pitch decks and funding requests',
          icon: TrendingUp,
          link: '/investors/opportunities',
        },
        {
          title: 'Portfolio',
          description: 'Track your investments and portfolio performance',
          icon: Briefcase,
          link: '/investors/portfolio',
        },
      ],
    },
    interested: {
      title: 'Welcome Dashboard',
      description: 'Explore the entrepreneurship ecosystem and find your path',
      icon: Briefcase,
      color: 'bg-slate-600',
      cards: [
        {
          title: 'Learn About Programs',
          description: 'Discover our accelerator programs and how they work',
          icon: BookOpen,
          link: '/programs',
        },
        {
          title: 'Founder Stories',
          description: 'Read success stories from our community',
          icon: Users,
          link: '/founders',
        },
        {
          title: 'Become a Partner',
          description: 'Learn about partnership opportunities',
          icon: Briefcase,
          link: '/partners',
        },
        {
          title: 'Support the Mission',
          description: 'Contribute to empowering entrepreneurs',
          icon: TrendingUp,
          link: '/donate',
        },
      ],
    },
  };

  const config = roleConfig[profile.role];
  const Icon = config.icon;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12">
      <Container>
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <div className={`${config.color} p-3 rounded-xl text-white`}>
              <Icon className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">{config.title}</h1>
              <p className="text-slate-600 mt-1">{config.description}</p>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 border border-slate-200">
            <p className="text-sm text-slate-600">
              Welcome back, <span className="font-semibold text-slate-900">{profile.full_name || profile.email}</span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {config.cards.map((card, index) => {
            const CardIcon = card.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="bg-slate-100 p-2 rounded-lg">
                        <CardIcon className="h-5 w-5 text-slate-700" />
                      </div>
                      <CardTitle className="text-lg">{card.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="mt-2">{card.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href={card.link}>Explore</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Quick Links</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">
              <Button asChild variant="outline">
                <Link href="/profile">Edit Profile</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/">Back to Home</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  );
}
