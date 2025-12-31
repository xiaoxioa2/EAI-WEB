'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Container } from '@/components/Container';
import { Users, Briefcase, TrendingUp, UserCircle } from 'lucide-react';

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

export default function SignupPage() {
  const router = useRouter();
  const { signUp } = useAuth();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('interested');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    setLoading(true);

    const result = await signUp(email, password, role, fullName);

    if (result.error) {
      setError(result.error.message);
      setLoading(false);
    } else if (result.session) {
      // User is immediately logged in (email confirmation disabled)
      router.push('/dashboard');
    } else {
      // Email confirmation required
      setSuccess('Account created! Please check your email to confirm your account before signing in.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12">
      <Container>
        <div className="flex justify-center items-center min-h-[calc(100vh-12rem)]">
          <Card className="w-full max-w-2xl">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">Create Your Account</CardTitle>
              <CardDescription className="text-center">
                Join the entrepreneurship community
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-6">
                {error && (
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                {success && (
                  <Alert className="border-green-500 bg-green-50">
                    <AlertDescription className="text-green-800">{success}</AlertDescription>
                  </Alert>
                )}

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

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={loading}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Min 6 characters"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      disabled={loading}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                      disabled={loading}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label>I am a...</Label>
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
                              id={roleOption.value}
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
              </CardContent>

              <CardFooter className="flex flex-col space-y-4">
                <Button
                  type="submit"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? 'Creating account...' : 'Create Account'}
                </Button>

                <div className="text-sm text-center text-slate-600">
                  Already have an account?{' '}
                  <Link href="/login" className="text-blue-600 hover:underline font-medium">
                    Sign in
                  </Link>
                </div>
              </CardFooter>
            </form>
          </Card>
        </div>
      </Container>
    </div>
  );
}
