import { Mail, MapPin, Shield, Users } from "lucide-react";
import React from "react";

export default function ContactUs() {
  return (
    <div className="my-12">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-6 text-2xl font-bold text-white">Get in Touch</h2>
          <p className="mb-8 text-gray-200">
            We're here to help! Reach out to us through any of the following channels, and we'll get
            back to you as soon as possible.
          </p>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-primary-100 mr-4 rounded-lg p-3">
                <Mail className="h-6 w-6 text-[#E83A57]" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-white">Email Support</h3>
                <p className="mb-2 text-gray-200">For general inquiries and support</p>
                <a href="mailto:support@reelshort.com" className="text-[#E83A57] hover:underline">
                  support@reelshort.com
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary-100 mr-4 rounded-lg p-3">
                <Shield className="h-6 w-6 text-[#E83A57]" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-white">Legal & Privacy</h3>
                <p className="mb-2 text-gray-200">For legal matters and privacy concerns</p>
                <a href="mailto:legal@reelshort.com" className="text-[#E83A57] hover:underline">
                  legal@reelshort.com
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary-100 mr-4 rounded-lg p-3">
                <Users className="h-6 w-6 text-[#E83A57]" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-white">Creator Support</h3>
                <p className="mb-2 text-gray-200">For content creators and partnerships</p>
                <a href="mailto:creators@reelshort.com" className="text-[#E83A57] hover:underline">
                  creators@reelshort.com
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary-100 mr-4 rounded-lg p-3">
                <MapPin className="h-6 w-6 text-[#E83A57]" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-white">Office Address</h3>
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

        <div className="rounded-xl bg-gray-50 p-6">
          <h3 className="mb-6 text-xl font-bold text-black">Send us a Message</h3>
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                className="focus:ring-primary-500 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                className="focus:ring-primary-500 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">Subject</label>
              <select className="focus:ring-primary-500 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2">
                <option>General Inquiry</option>
                <option>Technical Support</option>
                <option>Account Issues</option>
                <option>Content Removal Request</option>
                <option>Partnership Inquiry</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows={5}
                className="focus:ring-primary-500 w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2"
                placeholder="Tell us how we can help you..."
              ></textarea>
            </div>

            <button
              // onClick={() => alert("Thank you for your message! We will get back to you soon.")}
              className="w-full cursor-pointer rounded-lg bg-[#E83A57] px-6 py-3 font-medium text-white"
            >
              Send Message
            </button>
          </div>

          <div className="mt-6 rounded-lg bg-blue-50 p-4">
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
