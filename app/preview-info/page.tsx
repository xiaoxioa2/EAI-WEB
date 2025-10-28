"use client";

import React from 'react';
import { ArrowLeft, Users, MessageCircle, Shield, Clock } from 'lucide-react';
import Link from 'next/link';

export default function PreviewInfo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Website
            </Link>
          </div>

          <div className="text-center mb-12">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Preview Information
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Thank you for reviewing the EverythingAI Foundation website preview. 
              Your feedback is valuable to us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50 rounded-2xl p-6">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Who Can Access</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Board members and advisors</li>
                <li>• Design and development team</li>
                <li>• Selected stakeholders</li>
                <li>• Marketing review committee</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-2xl p-6">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Feedback Areas</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Overall design and branding</li>
                <li>• Content clarity and messaging</li>
                <li>• User experience and navigation</li>
                <li>• Call-to-action effectiveness</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-gray-600" />
              <h3 className="text-xl font-semibold text-gray-900">Preview Timeline</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-blue-600"></div>
                <div>
                  <p className="font-medium text-gray-900">Phase 1: Internal Review</p>
                  <p className="text-gray-600 text-sm">Team feedback and initial revisions</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-purple-600"></div>
                <div>
                  <p className="font-medium text-gray-900">Phase 2: Stakeholder Review</p>
                  <p className="text-gray-600 text-sm">Board and advisor feedback</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-green-600"></div>
                <div>
                  <p className="font-medium text-gray-900">Phase 3: Public Launch</p>
                  <p className="text-gray-600 text-sm">Live website deployment</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Share Your Feedback</h3>
            <p className="mb-6 opacity-90">
              Please send your thoughts, suggestions, and any concerns to the development team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:feedback@everythingaifoundation.org?subject=Website Preview Feedback"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200"
              >
                <MessageCircle className="w-5 h-5" />
                Send Feedback
              </a>
              <Link 
                href="/"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                Continue Reviewing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
