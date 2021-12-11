import NextLink from 'next/link';

export default function Thoughts() {
  return (
    <div className="pb-8">
      <div className="text-sm pb-4 text-gray-700">
        Last updated on January 10, 2021
      </div>
      This is a list of some things that have crossed my mind. Some are deep,
      some are not. Items are placed in reverse chronological order. Thoughts I
      find especially important are bolded.
      <ul className="list-disc list-inside pt-4 grid gap-y-2">
        <li>
          The{' '}
          <a
            aria-label="Google nest hub link"
            className="underline"
            href="https://store.google.com/us/product/google_nest_hub"
            target="_blank"
          >
            Google nest hub
          </a>{' '}
          is great in the kitchen for viewing multiple cooking timers at once.
        </li>
        <li>
          Raising money from a great investor provides you with not just money,
          but an influential group/individual having a vested interest in the
          success of your company.
        </li>
        <li>
          Whenever messaging someone at work and referring to a document (e.g.
          design doc, pull request) always send a link with it. It save the
          recipient the time of trying to find the referenced item.
        </li>
        <li>
          It's a good idea to work for the money-earning portion of a company.
          The company will hold that portion to a higher bar than, say, internal
          tools, that don't have as high of an ROI. More money = more reason to
          build high-quality software.
        </li>
        <li>
          There are too many valuable things to learn to waste time learning
          things that are not valuable
        </li>
        <li>
          Happiness is when you can view the present the same way you view a
          fond memory
        </li>
        <li className="font-semibold">
          Embrace small activities that you know you'll never regret doing (some
          examples for me are brushing my teeth, doing the dishes). You will
          always feel better after doing them.
        </li>
        <li>
          Having a roommate teaches you to compromise and sets you up to be a
          more reasonable person.
        </li>
        <li>
          I find "maturing" an enjoyable process when I embrace it instead of
          fight it.
        </li>
        <li>
          I only say "buh-bye" over the phone. Especially if it's with a
          stranger (like a customer service representative)
        </li>
        <li className="font-semibold">
          It's hard for me to have insightful or creative thoughts when sitting
          idly - my brain tends to think about all of the things that I should
          be doing instead of sitting down and thinking. But when I'm performing
          a menial task (showering, washing the dishes), that part of my brain
          turns off and allows for more unbound thinking.
        </li>
        <li className="font-semibold">
          The only difference between a bad life and a good life is perspective.
        </li>
        <li>
          We often think we have 2 choices when making a decision. Too many
          people forget about the third option (
          <NextLink href="/writing/1">
            <span className="underline cursor-pointer">door #3</span>
          </NextLink>
          ), which is to collect more information before making a decision.
        </li>
        <li>
          It is important to be able to cringe when looking back at things you
          did/said. It shows that you can be critical of your own behavior, and
          looking back at actions you regret is a good way to prevent behavior
          like that from surfacing again.
        </li>
        <li>
          I'm the happiest when I have a plan and feel like my life is in order.
        </li>
        <li>
          Don't shy away from doing the hard things. At some point you'll have
          to face the music.
        </li>
        <li className="font-semibold">
          You'll never have more time left in your life than you do right now.
        </li>
        <li>
          Journaling allows you to take a snapshot of your mental state at a
          given moment in time. This provides a solid reference point, as it can
          often be hard to recall exactly what we were thinking or how we were
          feeling in the past.
        </li>
        <li>
          Being observant allows you to learn so much more about the world.
        </li>
        <li>There's almost no better feeling than a fresh start.</li>
        <li>
          I dislike listening to music all the time. Sometimes silence is a good
          thing.
        </li>
        <li>
          Being in my early twenties, I am more self-aware of my own faults than
          ever before.
        </li>
        <li className="font-semibold">
          If you feel like you need help, ask for it. You almost certainly won't
          regret it.
        </li>
        <li className="font-semibold">
          Whether something is morally sound and whether it should be legal are
          two separate questions that may not have the same answer.
        </li>
        <li>
          Fulfillment and pleasure are almost always at odds with each other.
        </li>
        <li>
          It makes sense that most successful businesses were built by teams
          rather than individuals. Interdependence allows teams to stay
          motivated despite encountered setbacks — something much harder to do
          alone.
        </li>
        <li>
          You can expedite personal growth by learning to love stepping outside
          your comfort zone.
        </li>
        <li>Gratitude is a precursor to happiness.</li>
        <li className="font-semibold">
          Let people do nice things for you. Don't fight it, be grateful
          instead. It's a win for both parties.
        </li>
        <li>
          Who you spend your time around has an enormous effect on who you are.
          Try to surround yourself with people who inspire you.
        </li>
      </ul>
    </div>
  );
}
