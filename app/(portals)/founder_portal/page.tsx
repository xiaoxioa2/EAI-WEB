'use client';

import { useAuth } from '@/contexts/AuthContext';
import ProtectedRoute from '@/components/ProtectedRoute';
import { Container } from '@/components/Container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Users,
  UserCircle,
  TrendingUp,
  Calendar,
  MessageSquare,
  BookOpen,
  Video,
  FileText,
  Briefcase,
  Target,
  Lightbulb,
  Rocket,
  DollarSign,
  Award,
  Globe,
  Heart,
  Zap,
  Search,
  Filter
} from 'lucide-react';
import Link from 'next/link';

function FounderPortalContent() {
  const { profile } = useAuth();

  if (!profile || profile.role !== 'founder') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12">
        <Container>
          <div className="text-center">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">Access Denied</h1>
            <p className="text-slate-600 mb-8">This portal is only accessible to founders.</p>
            <Button asChild>
              <Link href="/dashboard">Go to Dashboard</Link>
            </Button>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12">
      <Container>
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 p-3 rounded-xl text-white">
                <Rocket className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-slate-900">Founder's Network Portal</h1>
                <p className="text-slate-600 mt-1">Your hub for growth, connections, and resources</p>
              </div>
            </div>
            <Badge variant="outline" className="text-blue-600 border-blue-600 px-4 py-2">
              <Users className="h-4 w-4 mr-2" />
              Founder
            </Badge>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">Welcome back, {profile.full_name || 'Founder'}!</h2>
                <p className="text-blue-100">Continue building your network and growing your startup</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold mb-1">85%</div>
                <div className="text-sm text-blue-100">Profile Complete</div>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:inline-grid">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="matching">Matching</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="rooms">Rooms</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Target className="h-6 w-6 text-green-600" />
                    </div>
                    <Badge variant="outline" className="text-green-600 border-green-600">Active</Badge>
                  </div>
                  <CardTitle>12 Matches</CardTitle>
                  <CardDescription>New connections available</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">View Matches</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <MessageSquare className="h-6 w-6 text-blue-600" />
                    </div>
                    <Badge variant="outline" className="text-blue-600 border-blue-600">3 New</Badge>
                  </div>
                  <CardTitle>5 Active Chats</CardTitle>
                  <CardDescription>Ongoing conversations</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">Open Messages</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <Calendar className="h-6 w-6 text-purple-600" />
                    </div>
                    <Badge variant="outline" className="text-purple-600 border-purple-600">Tomorrow</Badge>
                  </div>
                  <CardTitle>2 Events</CardTitle>
                  <CardDescription>Upcoming this week</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">View Calendar</Button>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Get started with these essential features</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button variant="outline" className="flex flex-col h-auto py-6 gap-2">
                    <UserCircle className="h-8 w-8 text-slate-600" />
                    <span className="text-sm">Update Profile</span>
                  </Button>
                  <Button variant="outline" className="flex flex-col h-auto py-6 gap-2">
                    <Search className="h-8 w-8 text-slate-600" />
                    <span className="text-sm">Find Mentors</span>
                  </Button>
                  <Button variant="outline" className="flex flex-col h-auto py-6 gap-2">
                    <DollarSign className="h-8 w-8 text-slate-600" />
                    <span className="text-sm">Seek Investment</span>
                  </Button>
                  <Button variant="outline" className="flex flex-col h-auto py-6 gap-2">
                    <FileText className="h-8 w-8 text-slate-600" />
                    <span className="text-sm">Create Post</span>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your latest interactions and updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { icon: Users, text: "You matched with Sarah Chen (Investor)", time: "2 hours ago", color: "text-green-600" },
                    { icon: MessageSquare, text: "New message from Michael Lee (Mentor)", time: "5 hours ago", color: "text-blue-600" },
                    { icon: FileText, text: "Your blog post received 15 likes", time: "1 day ago", color: "text-purple-600" },
                    { icon: Calendar, text: "Pitch event reminder: Tomorrow at 2 PM", time: "1 day ago", color: "text-orange-600" },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className={`p-2 rounded-lg bg-slate-100`}>
                        <activity.icon className={`h-5 w-5 ${activity.color}`} />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-slate-900">{activity.text}</p>
                        <p className="text-xs text-slate-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="matching" className="space-y-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">AI-Powered Matching</h2>
                <p className="text-slate-600">Connect with mentors, investors, and co-founders</p>
              </div>
              <Button>
                <Filter className="h-4 w-4 mr-2" />
                Filter Matches
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Sarah Chen", role: "Angel Investor", type: "Investor", match: 95, focus: "AI in Healthcare", avatar: "SC", color: "bg-blue-500" },
                { name: "Michael Lee", role: "Senior Mentor", type: "Mentor", match: 92, focus: "Product Strategy", avatar: "ML", color: "bg-green-500" },
                { name: "Emma Rodriguez", role: "Technical Co-founder", type: "Co-founder", match: 88, focus: "AI & Machine Learning", avatar: "ER", color: "bg-purple-500" },
                { name: "David Park", role: "Growth Advisor", type: "Mentor", match: 85, focus: "Marketing & Sales", avatar: "DP", color: "bg-orange-500" },
                { name: "Lisa Zhang", role: "VC Partner", type: "Investor", match: 82, focus: "Early Stage Startups", avatar: "LZ", color: "bg-pink-500" },
                { name: "James Wilson", role: "Industry Expert", type: "Mentor", match: 80, focus: "AI Ethics", avatar: "JW", color: "bg-teal-500" },
              ].map((match, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`${match.color} text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold`}>
                        {match.avatar}
                      </div>
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        {match.match}% Match
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{match.name}</CardTitle>
                    <CardDescription>{match.role}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Briefcase className="h-4 w-4" />
                      {match.type}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Target className="h-4 w-4" />
                      {match.focus}
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1">Connect</Button>
                      <Button variant="outline" size="icon">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Content Hub</h2>
                <p className="text-slate-600">Share your journey and insights</p>
              </div>
              <Button>
                <FileText className="h-4 w-4 mr-2" />
                Create New Post
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <FileText className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Blog Posts</CardTitle>
                      <CardDescription>8 Published</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">Manage Posts</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <Video className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Vlogs</CardTitle>
                      <CardDescription>3 Published</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">Manage Videos</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Updates</CardTitle>
                      <CardDescription>12 Published</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">Manage Updates</Button>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Content</CardTitle>
                <CardDescription>Your latest posts and updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { type: "Blog", title: "Building an AI-Powered Health Solution", date: "Jan 20, 2026", views: 245, likes: 32 },
                    { type: "Vlog", title: "Behind the Scenes: Product Development", date: "Jan 18, 2026", views: 189, likes: 28 },
                    { type: "Update", title: "We just hit 1,000 users!", date: "Jan 15, 2026", views: 412, likes: 67 },
                    { type: "Blog", title: "Lessons Learned from Our First Pivot", date: "Jan 12, 2026", views: 356, likes: 51 },
                  ].map((content, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-lg border hover:shadow-md transition-shadow">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline">{content.type}</Badge>
                          <h3 className="font-semibold text-slate-900">{content.title}</h3>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-slate-500">
                          <span>{content.date}</span>
                          <span>{content.views} views</span>
                          <span>{content.likes} likes</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Edit</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rooms" className="space-y-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Social Rooms</h2>
                <p className="text-slate-600">Connect and collaborate in virtual spaces</p>
              </div>
              <Button>
                <Zap className="h-4 w-4 mr-2" />
                Create Room
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow border-2 border-blue-200">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-blue-600 p-3 rounded-xl text-white">
                      <Video className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle>Meeting Rooms</CardTitle>
                      <CardDescription>Virtual collaboration spaces</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <span className="font-medium text-slate-900">Weekly Standup</span>
                      <Badge variant="outline" className="text-green-600 border-green-600">3 Active</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <span className="font-medium text-slate-900">1-on-1 with Mentor</span>
                      <Badge variant="outline">Scheduled</Badge>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">View All Meetings</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-2 border-purple-200">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-purple-600 p-3 rounded-xl text-white">
                      <Briefcase className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle>Deal Rooms</CardTitle>
                      <CardDescription>Secure investment discussions</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <span className="font-medium text-slate-900">Series A Discussion</span>
                      <Badge variant="outline" className="text-orange-600 border-orange-600">Confidential</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <span className="font-medium text-slate-900">Angel Round</span>
                      <Badge variant="outline">In Progress</Badge>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">View All Deals</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-2 border-green-200">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-green-600 p-3 rounded-xl text-white">
                      <MessageSquare className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle>Chat Rooms</CardTitle>
                      <CardDescription>Topic-based discussions</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <span className="font-medium text-slate-900">AI Healthcare</span>
                      <Badge variant="outline">127 Members</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <span className="font-medium text-slate-900">Fundraising Tips</span>
                      <Badge variant="outline">89 Members</Badge>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">Browse All Chats</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-2 border-orange-200">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-orange-600 p-3 rounded-xl text-white">
                      <Award className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle>Game Rooms</CardTitle>
                      <CardDescription>Casual networking and fun</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <span className="font-medium text-slate-900">Friday Trivia Night</span>
                      <Badge variant="outline">This Friday</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                      <span className="font-medium text-slate-900">Virtual Coffee Chat</span>
                      <Badge variant="outline">12 Online</Badge>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">Join a Game</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="resources" className="space-y-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-slate-900">Resource Library</h2>
              <p className="text-slate-600">Tools, guides, and connections to help you succeed</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <UserCircle className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle>Mentor Directory</CardTitle>
                  </div>
                  <CardDescription>Connect with experienced advisors</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-2xl font-bold text-slate-900">48 Mentors</div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Product</Badge>
                    <Badge variant="outline">Tech</Badge>
                    <Badge variant="outline">Marketing</Badge>
                  </div>
                  <Button className="w-full">Browse Mentors</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <DollarSign className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle>Investor Database</CardTitle>
                  </div>
                  <CardDescription>Find the right investors for your startup</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-2xl font-bold text-slate-900">32 Investors</div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Angel</Badge>
                    <Badge variant="outline">VC</Badge>
                    <Badge variant="outline">Corporate</Badge>
                  </div>
                  <Button className="w-full">Browse Investors</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <Calendar className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle>Event Calendar</CardTitle>
                  </div>
                  <CardDescription>Workshops, pitch events, and networking</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-2xl font-bold text-slate-900">8 Events</div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">This Week</Badge>
                    <Badge variant="outline">Virtual</Badge>
                  </div>
                  <Button className="w-full">View Calendar</Button>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Featured Resources</CardTitle>
                <CardDescription>Curated guides and templates for founders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { icon: BookOpen, title: "Pitch Deck Template", description: "Professional template for investor pitches", badge: "Template" },
                    { icon: FileText, title: "Fundraising Guide", description: "Complete guide to raising capital", badge: "Guide" },
                    { icon: Lightbulb, title: "Product-Market Fit Framework", description: "Find your ideal customer profile", badge: "Framework" },
                    { icon: Globe, title: "Go-to-Market Strategy", description: "Launch and scale your product", badge: "Strategy" },
                  ].map((resource, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 rounded-lg border hover:shadow-md transition-shadow">
                      <div className="bg-slate-100 p-3 rounded-lg">
                        <resource.icon className="h-6 w-6 text-slate-700" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-slate-900">{resource.title}</h3>
                          <Badge variant="outline">{resource.badge}</Badge>
                        </div>
                        <p className="text-sm text-slate-600">{resource.description}</p>
                      </div>
                      <Button variant="outline" size="sm">Download</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
              <CardDescription>Our support team is here to assist you</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">
              <Button variant="outline">
                <MessageSquare className="h-4 w-4 mr-2" />
                Contact Support
              </Button>
              <Button variant="outline">
                <BookOpen className="h-4 w-4 mr-2" />
                View Documentation
              </Button>
              <Button variant="outline" asChild>
                <Link href="/dashboard">Back to Dashboard</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default function FounderPortalPage() {
  return (
    <ProtectedRoute>
      <FounderPortalContent />
    </ProtectedRoute>
  );
}
