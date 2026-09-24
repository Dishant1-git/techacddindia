import Logo from "./Logo";
import {
  ClockIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  YoutubeIcon,
} from "./Icons";
import { CONTACT, FOOTER_COLUMNS } from "@/data/content";

const SOCIALS = [
  { label: "Instagram", Icon: InstagramIcon },
  { label: "YouTube", Icon: YoutubeIcon },
  { label: "LinkedIn", Icon: LinkedinIcon },
  { label: "Facebook", Icon: FacebookIcon },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo light />
            <p className="footer__tag">
              <strong>Your Skill &amp; Technology Partner.</strong> Training students since{" "}
              <strong>2007</strong> with live projects, industry trainers and placement support.
            </p>

            <ul className="footer__contact">
              <li>
                <PinIcon />
                {CONTACT.address}
              </li>
              <li>
                <PhoneIcon />
                <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
              </li>
              <li>
                <MailIcon />
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </li>
              <li>
                <ClockIcon />
                {CONTACT.hours}
              </li>
            </ul>

            <div className="socials">
              {SOCIALS.map(({ label, Icon }) => (
                <a href="#" aria-label={label} key={label}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div className="footer__cols">
            {FOOTER_COLUMNS.map((column) => (
              <div className="fcol" key={column.title}>
                <p className="fcol__title">{column.title}</p>
                {column.links.map((link) => (
                  <a href={link.href} key={link.label}>
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {new Date().getFullYear()} techcadd Computer Education. All rights reserved. Built in{" "}
            <strong>Jalandhar, Punjab</strong>.
          </p>
          <div className="footer__bottomlinks">
            <a href="#">Services</a>
            <a href="#">Gini AI</a>
            <a href="#faq">FAQs</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
