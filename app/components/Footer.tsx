// components/Footer.tsx
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4>Cupertino Change Agents</h4>
            <p>
              Cupertino, CA 95014<br />
              United States <br /><br />
              <strong>Phone:</strong> +1 669 251 4702<br />
              <strong>Email:</strong> cupertinochangeagents@gmail.com<br />
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/#about">Who We Are</Link></li>
              <li><Link href="/offerings">What Do We Do</Link></li>
              <li><Link href="/#contact">Get Involved</Link></li>
              <li><Link href="/#contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h4>Join Our Newsletter</h4>
            <p>Remain connected with us through the monthly newsletters</p>
            <form action="" method="post">
              <input type="email" name="email" />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="copyright">
            &copy; Copyright <strong><span>Cupertino Change Agents</span></strong>. All Rights Reserved
          </div>
          <div>
            EIN : <Link href="/eid">87-3551549</Link>
          </div>
        </div>

        <div className="social-links text-center mt-4">
          <Link href="https://www.facebook.com/CupertinoChangeAgents" className="facebook"><i className="bx bxl-facebook"></i></Link>
        </div>
      </div>
    </footer>
  )
}