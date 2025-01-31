'use client';

import Link from 'next/link';
import { XLogo, LinkedinLogo, GithubLogo, DiscordLogo } from "@phosphor-icons/react"
import Logo from "@/components/Logo";

const Footer = () => (
  <footer className="py-16 relative bg-gradient-to-tr from-oOrange-500/45 to-transparent to-40%">
    <div className="container-base">
      <Logo />
      <p className="text-gGray-300 max-w-sm">
        Eliminate bias in AI with LLM-agnostic, tamper-proof datasets secured by blockchain
      </p>

      {/* Navigation Links */}
      <div className="flex space-x-6 text-gGray-300">
        {['Datasets', 'About', 'Docs', 'Careers', 'Privacy'].map((link) => (
          <Link
            key={link}
            href="#"
            className="hover:text-white transition-colors"
          >
            {link}
          </Link>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 pt-4 flex align-center justify-between">
        <p className="text-sm text-gGray-300">&copy; ASIMOV Protocol - {new Date().getFullYear()}</p>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4">
          {[
            { name: 'X, formally Twitter', icon: XLogo },
            { name: 'LinkedIn', icon: LinkedinLogo },
            { name: 'GitHub', icon: GithubLogo },
            { name: 'Discord', icon: DiscordLogo },
          ].map(({ name, icon: Icon }) => (
            <Link
              key={name}
              href="#"
              aria-label={name}
              className="text-gGray-100 hover:text-white transition-colors"
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
