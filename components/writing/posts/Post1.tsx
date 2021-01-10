import PostHeader from "components/writing/PostHeader";
import PostBody from "components/writing/PostBody";

export default function Post1() {
  return (
    <>
      <PostHeader
        title="Large Company vs Startup & Door #3"
        date="January 10, 2021"
      />
      <PostBody>
        I recently made the decision to leave my job as a software engineer at{" "}
        <a
          className="underline"
          aria-label="Airbnb link"
          href="https://www.airbnb.com/"
          target="_blank"
        >
          Airbnb
        </a>{" "}
        to join{" "}
        <a
          className="underline"
          aria-label="Explo link"
          href="https://explo.co/"
          target="_blank"
        >
          Explo
        </a>{" "}
        full-time as a founding engineer. I thought it could be helpful to share
        how I went about making the decision, the different considerations I
        made, and what I learned from the process.
      </PostBody>
      <PostBody header="Background">
        <div>
          When I was first approached about the opening for a founding engineer
          at Explo, I almost rejected the opportunity immediately. This is
          because I was (and still am) working on building{" "}
          <a
            className="underline"
            aria-label="momo link"
            href="https://www.momo.credit/"
            target="_blank"
          >
            momo
          </a>{" "}
          outside of my day job, which appeared to me as a conflict of interest.
          How could I possibly take on this position at an early stage company
          while simultaneously building another company on the side? It wasn't
          that I didn't want to attempt both, but I figured that naturally
          they'd be at odds with each other (and assumed the Explo's founders
          wouldn't want me working on both projects at once). After all, there's
          onboarding, the standard 1-year vesting cliff, and the hectic nature
          of working at an early stage startup - which can be a lot to focus on
          without building anything else on the side.
        </div>
        <div className="mt-2">
          Even though I was resolved that this almost certainly could not work,
          I couldn't seem to immediately say no. It did seem like a great
          opportunity, and I was afraid to close the door. I spoke with my dad
          about my dilemma, and his advice changed my outlook.
        </div>
      </PostBody>
      <PostBody header="Door #3">
        I have a habit of viewing things as black and white once I understand
        the premise of a decision. So, when this Explo opportunity came around,
        I viewed myself as having 2 "doors" to choose from:
        <div className="my-2">
          <div className="ml-4">
            1. Say no to Explo, stay at Airbnb, and continue to work on momo on
            the side
          </div>
          <div className="ml-4">
            2. Say yes to Explo, leave my job at Airbnb, and quit working on
            momo
          </div>
        </div>
        My dad explained that there's actually a third option,{" "}
        <span className="font-semibold">Door #3</span>, which is to{" "}
        <span className="font-semibold">
          gather more information before making a decision
        </span>
        . When I analyzed my decision-making process, much of it was based on
        assumptions. I <span className="italic">assumed</span> that Explo
        wouldn't want me working on momo, and even if they did, I{" "}
        <span className="italic">assumed</span> that the precarity of momo
        taking off would leave too much up in the air for me to provide a solid
        long-term commitment (even deeper, I{" "}
        <span className="italic">assumed</span> that a relatively long-term
        commitment to Explo was necessary for this to work). I decided to
        discuss my situation with the founders instead of stick with these
        assumptions. I'm glad I did - turns out all of my assumptions were
        unfounded.
      </PostBody>
      <PostBody header="Established Company vs Startup">
        Once I spoke with the founders and discovered that my assumptions
        regarding Explo/momo were untrue, I began to think about whether
        pursuing this opportunity was the right choice. The big question in my
        mind was:{" "}
        <span className="font-semibold">
          Which opportunity will allow me to grow the most?
        </span>{" "}
        In my mind, growth as an engineer has two dimensions:
        <div className="my-2">
          <div className="ml-4">
            1. Vertical growth (i.e. going <span className="italic">deep</span>)
          </div>
          <div className="ml-4">
            2. Horizontal growth (i.e. going{" "}
            <span className="italic">broad</span>)
          </div>
        </div>
        I asked a few mentors for guidance prior to making a decision, and one
        point resounded: Larger companies are better for vertical growth, and
        startups are better for horizontal growth. This made sense to me. On the
        whole, I think this tends to be true. But by thinking through my own
        situation, something else became clear:{" "}
        <span className="font-semibold">
          I was focused on the <span className="italic">idea</span> of a large
          company vs startup instead of my{" "}
          <span className="italic">personal circumstance</span>
        </span>
        . I switched from "Large company vs Startup" to "Airbnb vs Explo". I
        wasn't comparing the two companies, but rather comparing the
        opportunities I had at each company. I won't get into the details here,
        but when I began thinking this way, I was able to reach a decision
        fairly quickly.
      </PostBody>
      <PostBody header="Conclusion">
        I learned a lot from this experience and hope to utilize these learnings
        when making decisions in the future. Combining these principles with the{" "}
        <a
          className="underline"
          aria-label="Regret Minimization Framework link"
          href="https://www.youtube.com/watch?v=jwG_qR6XmDQ&ab_channel=MickyThompson"
          target="_blank"
        >
          Regret Minimization Framework
        </a>{" "}
        provides a solid foundation for making good choices. If you found this
        post interesting, have any questions, or just want to chat, feel free to
        shoot me an email at apiel51@gmail.com (I respond to all personal emails
        :-) ).
      </PostBody>
    </>
  );
}
