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
import { Container } from '@/components/Container';

export default function LoginPage() {
  const router = useRouter();
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const { error } = await signIn(email, password);

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push('/dashboard');
    }
  };

   return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-12">
      <Container>
        <div className="flex justify-center items-center min-h-[calc(100vh-12rem)]">
          <Card className="w-full max-w-lg shadow-2xl border-2 border-blue-100 bg-white/90 backdrop-blur-sm">
            <CardHeader className="space-y-3 pb-8">
              <CardTitle className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Welcome Back
              </CardTitle>
              <CardDescription className="text-center text-lg text-gray-600">
                Sign in to your account to continue
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-6 px-8">
                {error && (
                  <Alert variant="destructive" className="text-base">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <div className="space-y-3">
                  <Label htmlFor="email" className="text-base font-semibold text-gray-700">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={loading}
                    className="h-12 text-base bg-blue-50/50 border-blue-200 focus:border-blue-400 focus:ring-blue-400"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="password" className="text-base font-semibold text-gray-700">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={loading}
                    className="h-12 text-base bg-blue-50/50 border-blue-200 focus:border-blue-400 focus:ring-blue-400"
                  />
                </div>
              </CardContent>

              <CardFooter className="flex flex-col space-y-5 px-8 pb-8">
                <Button
                  type="submit"
                  className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  disabled={loading}
                >
                  {loading ? 'Signing in...' : 'Sign In'}
                </Button>

                <div className="text-base text-center text-gray-600">
                  Don't have an account?{' '}
                  <Link href="/signup" className="text-blue-600 hover:text-blue-700 hover:underline font-semibold">
                    Sign up
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
