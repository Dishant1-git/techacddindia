import { CONTACT } from "@/data/content";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="shell topbar__inner">
        <span className="topbar__pill">
          <span className="dot" /> Admissions Open
        </span>
        <span className="topbar__sep">|</span>
        <span className="topbar__rating">
          <strong>4.9★</strong> on Google (<a href="#reviews">556+ reviews</a>)
        </span>
        <div className="topbar__right">
          <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
          <span className="topbar__sep">|</span>
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </div>
      </div>
    </div>
  );
}
