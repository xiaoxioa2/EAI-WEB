'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';

export const dynamic = 'force-dynamic';
import ProtectedRoute from '@/components/ProtectedRoute';
import { Container } from '@/components/Container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ArrowLeft, Users, Briefcase, TrendingUp, UserCircle } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const roles = [
  {
    value: 'founder',
    label: 'Founder',
    description: 'Building or leading a startup',
    icon: Users,
  },
  {
    value: 'expert',
    label: 'Expert',
    description: 'Mentor or advisor with expertise to share',
    icon: UserCircle,
  },
  {
    value: 'investor',
    label: 'Investor',
    description: 'Looking to invest in startups',
    icon: TrendingUp,
  },
  {
    value: 'interested',
    label: 'Interested',
    description: 'Exploring the ecosystem',
    icon: Briefcase,
  },
];

function ProfileContent() {
  const { profile, updateProfile } = useAuth();
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [role, setRole] = useState('interested');
  const [company, setCompany] = useState('');
  const [bio, setBio] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (profile) {
      setFullName(profile.full_name || '');
      setRole(profile.role);
      setCompany(profile.company || '');
      setBio(profile.bio || '');
    }
  }, [profile]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    setLoading(true);

    const { error } = await updateProfile({
      full_name: fullName,
      role: role as any,
      company: company || null,
      bio: bio || null,
    });

    if (error) {
      setError(error.message || 'Failed to update profile');
    } else {
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12">
      <Container>
        <div className="max-w-3xl mx-auto">
          <Button
            variant="ghost"
            className="mb-6"
            onClick={() => router.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Edit Profile</CardTitle>
              <CardDescription>
                Update your personal information and preferences
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-6">
                {success && (
                  <Alert className="bg-green-50 border-green-200">
                    <AlertDescription className="text-green-800">
                      Profile updated successfully!
                    </AlertDescription>
                  </Alert>
                )}

                {error && (
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profile?.email || ''}
                    disabled
                    className="bg-slate-50"
                  />
                  <p className="text-xs text-slate-500">Email cannot be changed</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="John Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    disabled={loading}
                  />
                </div>

                <div className="space-y-3">
                  <Label>Role</Label>
                  <RadioGroup value={role} onValueChange={setRole} disabled={loading}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {roles.map((roleOption) => {
                        const Icon = roleOption.icon;
                        return (
                          <label
                            key={roleOption.value}
                            className={`relative flex items-start space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                              role === roleOption.value
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-slate-200 hover:border-slate-300'
                            }`}
                          >
                            <RadioGroupItem
                              value={roleOption.value}
                              id={`role-${roleOption.value}`}
                              className="mt-1"
                            />
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-1">
                                <Icon className="h-4 w-4" />
                                <span className="font-semibold">{roleOption.label}</span>
                              </div>
                              <p className="text-sm text-slate-600">{roleOption.description}</p>
                            </div>
                          </label>
                        );
                      })}
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company (Optional)</Label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Your company name"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    disabled={loading}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio (Optional)</Label>
                  <Textarea
                    id="bio"
                    placeholder="Tell us about yourself..."
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    disabled={loading}
                    rows={4}
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    type="submit"
                    className="flex-1"
                    disabled={loading}
                  >
                    {loading ? 'Saving...' : 'Save Changes'}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => router.push('/dashboard')}
                    disabled={loading}
                  >
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </form>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-slate-600">
              <p>
                <span className="font-medium">Member since:</span>{' '}
                {profile?.created_at ? new Date(profile.created_at).toLocaleDateString() : 'N/A'}
              </p>
              <p>
                <span className="font-medium">Last updated:</span>{' '}
                {profile?.updated_at ? new Date(profile.updated_at).toLocaleDateString() : 'N/A'}
              </p>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default function ProfilePage() {
  return (
    <ProtectedRoute>
      <ProfileContent />
    </ProtectedRoute>
  );
}
