import DefaultPageRoot from "@/app/DefaultPageRoot";
import { Heading2, Heading3 } from "@/app/Heading";
import Link from "@/app/Link";

export default function Services() {
  return (
    <DefaultPageRoot>
      <Heading2>Lessons and Commissions</Heading2>
      <p>I am a programmer and teacher with lots of professional experience. I also know a thing or two about making music for video games.</p>
      <p>As of 2023, I offer a range of services to make my expertise available to others.</p>

      <Heading3>Unity Game Development in C#</Heading3>
      <ul className="pl-2 list-disc list-inside">
        <li>I will teach you game development from the ground up at a rate of $40 per hour</li>
        <li>I will teach you any Unity programming concept at a rate of $40 per hour</li>
        <li>I will build features and fix bugs for your game at a rate of $20 per hour</li>
        <li>I am open to long-term/formal working arrangements (W-9 contracting)
          <ul className="pl-8 list-disc list-inside">
            <li>Rates will vary greatly for long-term arrangements</li>
          </ul>
        </li>
      </ul>

      <Heading3>React Web Development in TypeScript and JavaScript</Heading3>
      <ul className="pl-2 list-disc list-inside">
        <li>I will teach you front-end web development from the ground up at a rate of $40 per hour</li>
        <li>I will teach you any front-end web development concept at a rate of $40 per hour</li>
        <li>I will build front-end features and fix bugs on your website at a rate of $20 per hour</li>
        <li>I am open to long-term/formal working arrangements (W-9 contracting)
          <ul className="pl-8 list-disc list-inside">
            <li>Rates will vary greatly for long-term arrangements</li>
          </ul>
        </li>
      </ul>

      <Heading3>Video Game Music Production</Heading3>
      <ul className="pl-2 list-disc list-inside">
        <li>I will teach you video game music composition & production from the ground up at a rate of $40 per hour</li>
        <li>I will write music for your video game
          <ul className="pl-8 list-disc list-inside">
            <li>$30 for 45 seconds of slow or moderate music (up to 145 BPM)</li>
            <li>$30 for 30 seconds of fast music (above 145 BPM)</li>
            <li>$15 per 60 seconds for variations of music commissioned from me (examples: a winter variant, a night-time variant, a low-health variant)</li>
          </ul>
        </li>
        <li>I am open to long-term/formal working arrangements
          <ul className="pl-8 list-disc list-inside">
            <li>Rates will vary greatly for long-term arrangements</li>
          </ul>
        </li>
      </ul>

      <Heading2>My Commission Process</Heading2>
      <p>To inquire about commissions, please <Link href="https://example.com" target="_blank">send me an email</Link>, <Link href="https://example.com" target="_blank">add me as a friend on Discord</Link>, or <Link href="https://example.com" target="_blank">direct message me on Twitter</Link>.</p>
      <p>I&apos;m happy to answer any questions you have, even if you&apos;re just curious about my services.</p>
      <p>Here is my typical commission process:</p>
      <ol className="pl-2 list-decimal list-inside">
        <li>You provide me with a description of what you want.</li>
        <li>I take a short time to evaluate the commission, and then I tell you what the price and delivery date of the service will be.</li>
        <li>If it sounds like a good deal to you, I get started and bring you a work in progress some time before the delivery date.</li>
        <li>You can give me feedback on what I&apos;ve made and I&apos;ll adjust the work and the timeline but <em>not</em> the cost.
          <ul className="pl-8 list-disc list-inside">
            <li>You will never be charged more than the initially agreed upon amount.</li>
          </ul>
        </li>
        <li>I message you that the work is finished on the delivery date.</li>
        <li>You send payment via Paypal and receive the final product. Thank you for your patronage!</li>
      </ol>
    </DefaultPageRoot>
  );
}


