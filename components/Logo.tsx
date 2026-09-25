import Image from "next/image";
import logo from "@/public/logo-techcadd.png";

type Props = {
  /** Inverts the navy wordmark to white, for use on the dark footer. */
  light?: boolean;
};

export default function Logo({ light = false }: Props) {
  return (
    <a
      className={light ? "logo logo--light" : "logo"}
      href="#top"
      aria-label="techcadd — Your Skill & Technology Partner"
    >
      <Image
        src={logo}
        alt="techcadd"
        className="logo__img"
        priority
        sizes="160px"
      />
    </a>
  );
}
