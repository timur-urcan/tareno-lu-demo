import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#0a2e74] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <Image 
                src="/tareno-logowhite.png" 
                alt="Tareno S.A. Logo" 
                width={100} 
                height={33}
                className="h-auto"
              />
            </div>
            <p className="text-white/80 mb-4">
              Expert asset management services for individuals and institutions.
            </p>
            <p className="text-white/80">
              {new Date().getFullYear()} Tareno S.A. All rights reserved.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white font-['campaign-serif']">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-white/80 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#asset-management" className="text-white/80 hover:text-white transition-colors">Asset Management</Link></li>
              <li><Link href="#services" className="text-white/80 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="#team" className="text-white/80 hover:text-white transition-colors">Our Team</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white font-['campaign-serif']">Contact</h4>
            <address className="not-italic text-white/80">
              <p className="mb-2">123 Financial District</p>
              <p className="mb-2">Luxembourg City, L-1234</p>
              <p className="mb-2">Luxembourg</p>
              <p className="mb-2">Email: info@tareno.lu</p>
              <p>Phone: +352 123 456 789</p>
            </address>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white font-['campaign-serif']">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-white/80 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-white transition-colors">Cookie Policy</Link></li>
              <li><Link href="#" className="text-white/80 hover:text-white transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
