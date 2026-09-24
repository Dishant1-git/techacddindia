type Props = { light?: boolean };

export default function Logo({ light = false }: Props) {
  return (
    <a className={light ? "logo logo--light" : "logo"} href="#top">
      <span className="logo__mark">&lt;/&gt;</span>
      <span className="logo__text">
        techcadd<em>Jalandhar</em>
      </span>
    </a>
  );
}
