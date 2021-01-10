export default function About() {
  return (
    <>
      <div>Hi! I'm Austin 👋</div>
      <div className="pt-4">
        I live in Seattle and work as a software engineer at{" "}
        <a
          aria-label="Explo link"
          className="underline"
          href="https://explo.co/"
          target="_blank"
        >
          Explo
        </a>
        . Previously, I worked on trust agent tooling at{" "}
        <a
          aria-label="Airbnb link"
          className="underline"
          href="https://www.airbnb.com/"
          target="_blank"
        >
          Airbnb
        </a>
        . Prior to that, I studied Computer Science at University of Maryland
        College Park.
      </div>
      <div className="pt-4">
        Professionally, I'm particularly interested in entrepreneurship and
        anything to do with frontend development (backend is kinda cool too).
        I'm currently building{" "}
        <a
          aria-label="momo link"
          className="underline"
          href="https://www.momo.credit/"
          target="_blank"
        >
          momo
        </a>
        , the first dynamic mobile wallet.
      </div>
      <div className="pt-4">
        When I'm not working, you can find me at the gym, learning/messing
        around with new technologies, or walking around downtown with my dog
        Leo.
      </div>
      <div className="pt-4">Feel free to reach out at apiel51@gmail.com</div>
    </>
  );
}
