'use client';

import Link from 'next/link';
import {
  XLogo,
  LinkedinLogo,
  GithubLogo,
  DiscordLogo,
} from '@phosphor-icons/react';
import Logo from '@/components/Logo';

const Footer = () => (
  <footer className="py-16 relative bg-gradient-to-tr from-oOrange-500/45 to-transparent to-40%">
    <div className="container-base space-y-8">
      <Logo />
      <p className="text-gGray-300 max-w-sm">
        Eliminate bias in AI with LLM-agnostic, tamper-proof datasets secured by
        blockchain
      </p>

      {/* Navigation Links */}
      <div className="flex space-x-6 text-gGray-300">
        {[
          { name: 'Datasets', url: '/' },
          { name: 'About', url: '#' },
          { name: 'Docs', url: '#' },
          { name: 'Careers', url: '#' },
          { name: 'Privacy', url: '#' },
        ].map((nav) => (
          <Link
            key={nav.name}
            href={nav.url}
            className="hover:text-white transition-colors"
          >
            {nav.name}
          </Link>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 pt-7 flex align-center justify-between">
        <p className="text-sm text-gGray-300">
          &copy; ASIMOV Protocol - {new Date().getFullYear()}
        </p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4">
          {[
            {
              name: 'X, formally Twitter',
              icon: XLogo,
              url: 'https://x.com/asimov_protocol',
            },
            {
              name: 'LinkedIn',
              icon: LinkedinLogo,
              url: 'https://www.linkedin.com/company/asimov-protocol',
            },
            {
              name: 'GitHub',
              icon: GithubLogo,
              url: 'https://github.com/asimov-protocol',
            },
            {
              name: 'Discord',
              icon: DiscordLogo,
              url: 'https://discord.com/invite/QSdEnmTG78',
            },
          ].map(({ name, icon: Icon, url }) => (
            <Link
              key={name}
              href={url}
              aria-label={name}
              className="text-gGray-100 hover:text-white transition-colors"
              target="_blank"
            >
              <Icon size={24} weight="fill" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
