import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-base-200 border-t border-base-300 text-base-content">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-16 pb-8">
        {/* Top Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-base-300">
          {/* Brand */}
          <div className="lg:col-span-4 space-y-5">
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl font-bold"
            >
              <span className="text-primary text-3xl">🐾</span>

              <span>
                Pen<span className="text-primary">Haven</span>
              </span>
            </Link>

            <p className="text-base-content/70 leading-relaxed max-w-sm">
              Connecting loving families with pets who deserve a forever home.
              Discover, adopt, and change lives with PawHaven.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                className="btn btn-circle btn-sm btn-ghost hover:btn-primary"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              <a
                href="#"
                className="btn btn-circle btn-sm btn-ghost hover:btn-primary"
              >
                <i className="fab fa-instagram"></i>
              </a>

              <a
                href="#"
                className="btn btn-circle btn-sm btn-ghost hover:btn-primary"
              >
                <i className="fab fa-twitter"></i>
              </a>

              <a
                href="#"
                className="btn btn-circle btn-sm btn-ghost hover:btn-primary"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="footer-title text-base-content">Quick Links</h4>

            <ul className="space-y-3 mt-4">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/all-pets"
                  className="hover:text-primary transition-colors"
                >
                  All Pets
                </Link>
              </li>

              <li>
                <Link
                  href="/my-requests"
                  className="hover:text-primary transition-colors"
                >
                  My Requests
                </Link>
              </li>

              <li>
                <Link
                  href="/add-pet"
                  className="hover:text-primary transition-colors"
                >
                  Add Pet
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-3">
            <h4 className="footer-title text-base-content">Support</h4>

            <ul className="space-y-3 mt-4">
              <li>
                <Link
                  href="/faqs"
                  className="hover:text-primary transition-colors"
                >
                  FAQs
                </Link>
              </li>

              <li>
                <Link
                  href="/adoption-guide"
                  className="hover:text-primary transition-colors"
                >
                  Adoption Guide
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms-conditions"
                  className="hover:text-primary transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="footer-title text-base-content">Contact</h4>

            <div className="space-y-4 mt-4 text-base-content/70">
              <div className="flex items-start gap-3">
                <span className="text-primary text-lg">📍</span>

                <p>
                  123 Paw Street <br />
                  New York, USA
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-primary">✉️</span>

                <a
                  href="mailto:support@pawhaven.com"
                  className="hover:text-primary transition-colors"
                >
                  support@pawhaven.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-primary">📞</span>

                <a
                  href="tel:+15551234567"
                  className="hover:text-primary transition-colors"
                >
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-base-content/60">
          <p>© 2026 PawHaven. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <Link
              href="/privacy-policy"
              className="hover:text-primary transition-colors"
            >
              Privacy
            </Link>

            <Link
              href="/terms-conditions"
              className="hover:text-primary transition-colors"
            >
              Terms
            </Link>

            <Link
              href="/sitemap"
              className="hover:text-primary transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
