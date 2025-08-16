import { Mail, MapPin, Shield, Users } from "lucide-react";
import React from "react";

export default function ContactUs() {
  return (
    <div className="my-12">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
          <p className="text-gray-200 mb-8">
            We're here to help! Reach out to us through any of the following channels, and we'll get
            back to you as soon as possible.
          </p>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-red-100 p-3 rounded-lg mr-4">
                <Mail className="w-6 h-6 text-[#E83A57]" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Email Support</h3>
                <p className="text-gray-200 mb-2">For general inquiries and support</p>
                <a href="mailto:support@reelshort.com" className="text-[#E83A57] hover:underline">
                  support@reelshort.com
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-red-100 p-3 rounded-lg mr-4">
                <Shield className="w-6 h-6 text-[#E83A57]" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Legal & Privacy</h3>
                <p className="text-gray-200 mb-2">For legal matters and privacy concerns</p>
                <a href="mailto:legal@reelshort.com" className="text-[#E83A57] hover:underline">
                  legal@reelshort.com
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-red-100 p-3 rounded-lg mr-4">
                <Users className="w-6 h-6 text-[#E83A57]" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Creator Support</h3>
                <p className="text-gray-200 mb-2">For content creators and partnerships</p>
                <a href="mailto:creators@reelshort.com" className="text-[#E83A57] hover:underline">
                  creators@reelshort.com
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-red-100 p-3 rounded-lg mr-4">
                <MapPin className="w-6 h-6 text-[#E83A57]" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Office Address</h3>
                <p className="text-gray-200">
                  ReelShort Inc.
                  <br />
                  123 Innovation Drive
                  <br />
                  San Francisco, CA 94105
                  <br />
                  United States
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl">
          <h3 className="text-xl font-bold text-black mb-6">Send us a Message</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent">
                <option>General Inquiry</option>
                <option>Technical Support</option>
                <option>Account Issues</option>
                <option>Content Removal Request</option>
                <option>Partnership Inquiry</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Tell us how we can help you..."
              ></textarea>
            </div>

            <button
              // onClick={() => alert("Thank you for your message! We will get back to you soon.")}
              className="w-full cursor-pointer bg-[#E83A57] text-white py-3 px-6 rounded-lg font-medium "
            >
              Send Message
            </button>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Response Time:</strong> We typically respond to inquiries within 24-48 hours
              during business days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
