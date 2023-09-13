import Article from '@/components/Article';
import CVEntry, { makeDateForCVEntry } from '@/components/CVEntry';

export default function CV() {
  return (
    <Article>
      <h1>Curriculum Vitae</h1>
      <p>
        Please note that only major projects are listed here. Date range gaps
        are not representative of a lack of employment.
      </p>
      <p>
        Note as well that this C.V. only includes my work as a professional web
        developer and video game producer.
      </p>
      <p>
        To learn more about my work as a musician, please visit my
        {' '}
        <a href="/music">music page</a>.
      </p>

      <CVEntry
        projectName="PutSound"
        isCurrentProject={true}
        rolesOnProject={['Designer', 'Unity Programmer']}
        startDate={makeDateForCVEntry(7, 2023)}
      >
        <p>
          Designer & developer of a Unity extension enabling the swift creation
          of audio assets within the editor. On release, PutSound will be a
          Unity Asset Store product.
        </p>
        <p>
          This tool relieves the need for creatives and developers to use an
          external audio application for placeholder sound effects and music.
          PutSound also aims to facilitate better team communication with game
          audio professionals, as mock audio can be immediately implemented
          into the game and demoed with its relevant context.
        </p>
      </CVEntry>

      <CVEntry
        projectName="Heaven's Shield"
        rolesOnProject={['Composer', 'Designer', 'Unity Programmer']}
        startDate={makeDateForCVEntry(2, 2023)}
        endDate={makeDateForCVEntry(9, 2023)}
      >
        <p>
          Designer and developer of a tower defense game for Android and iOS.
        </p>
        <p>
          Created using C# and Unity. Published on the Google Play Store and
          the iOS App Store.
        </p>
      </CVEntry>

      <CVEntry
        projectName="TypeScript Migration Project"
        companyName="Zappos"
        rolesOnProject={['Operations Manager', 'Project Planner', 'React Developer', 'Technical Writer']}
        startDate={makeDateForCVEntry(2, 2022)}
        endDate={makeDateForCVEntry(6, 2022)}
      >
        <p>
          Performed senior developer duties, planning an incremental codebase
          migration from JavaScript to Typescript, communicating changes to
          peers, and mentoring junior developers on new language idioms.
        </p>
        <p>
          Directly translated a significant portion of the customer-facing
          React website (<a href="https://www.zappos.com" target="_blank">zappos.com</a>) into TypeScript.
        </p>
      </CVEntry>

      <CVEntry
        projectName="SDLC Improvement Project"
        companyName="Zappos"
        rolesOnProject={['Jenkins CI Programmer', 'Operations Manager', 'Project Planner', 'Technical Writer']}
        startDate={makeDateForCVEntry(5, 2021)}
        endDate={makeDateForCVEntry(2, 2022)}
      >
        <p>
          This project was started to make high impact improvements to the
          build and release lifecycle at Zappos.
        </p>
        <p>All of the problems listed below were solved by this project:</p>
        <ul>
          <li>
            Releases were infrequent (improved from once per week to four times
            per week)
          </li>
          <li>Releases were unable to be hotfixed and often rolled back</li>
          <li>
            Code could not be merged while the release was being tested and
            rolled out
          </li>
          <li>Developers needed to manually merge their changes</li>
          <li>
            Developers needed to manually update their unmerged branches each
            time another developer&apos;s branch was merged in
          </li>
          <li>
            There were no test environments where in-progress developer changes
            could be previewed (i.e., no user acceptance testing)
          </li>
          <li>
            Manual QA testing needed to be done in a short window before the
            release rollout, leading to last-minute release cancellations
          </li>
          <li>
            Release notes and git tagging would need to be done manually after
            a successful release
          </li>
        </ul>
      </CVEntry>

      <CVEntry
        projectName="Grid Layout for Product Dimension Selector"
        companyName="Zappos"
        rolesOnProject={['React Developer']}
        startDate={makeDateForCVEntry(3, 2021)}
        endDate={makeDateForCVEntry(9, 2021)}
      >
        <p>
          Implemented a complex caching system for product dimension
          combinations to enable strikethrough styling on buttons for
          unavailable options.
        </p>
        <p>
          Overcame challenges associated with handling legacy catalog data. New
          data standards needed to be designed and code was implemented to
          support migration to new catalog data formats.
        </p>
        <p>
          The system was implemented as a multi-stage A/B test where impact on
          conversion rate was measured. The new experience only rolled out for
          part of the product catalog (shoes) and later iterated on to include
          all on-site products.
        </p>
      </CVEntry>

      <CVEntry
        projectName="Responsive Product Page Redesign"
        companyName="Zappos"
        rolesOnProject={['React Developer']}
        startDate={makeDateForCVEntry(11, 2020)}
        endDate={makeDateForCVEntry(5, 2021)}
      >
        <p>TODO</p>
      </CVEntry>

      <CVEntry
        projectName="Customer Reviews"
        companyName="Zappos"
        rolesOnProject={['React Developer']}
        startDate={makeDateForCVEntry(1, 2000)}
        endDate={makeDateForCVEntry(1, 2000)}
      >
        <p>TODO</p>
      </CVEntry>

      <CVEntry
        projectName="Product Recommendation Redesign"
        companyName="Zappos"
        rolesOnProject={['React Developer']}
        startDate={makeDateForCVEntry(1, 2000)}
        endDate={makeDateForCVEntry(1, 2000)}
      >
        <p>TODO</p>
      </CVEntry>

      <CVEntry
        projectName="Customer Q&A"
        companyName="Zappos"
        rolesOnProject={['React Developer']}
        startDate={makeDateForCVEntry(1, 2000)}
        endDate={makeDateForCVEntry(1, 2000)}
      >
        <p>TODO</p>
      </CVEntry>

      <CVEntry
        projectName="Kid's Size Product Variant Linking"
        companyName="Zappos"
        rolesOnProject={['React Developer']}
        startDate={makeDateForCVEntry(5, 2017)}
        endDate={makeDateForCVEntry(6, 2017)}
      >
        <p>
          Implemented a product page widget to associate and link kids products
          of different age/size ranges, communicating to customers that
          multiple listings represented the same product, and resolving the
          back-end issue of storing these ranges as different catalog entries.
        </p>
      </CVEntry>

      <CVEntry
        projectName="6PM Product Page Redesign"
        companyName="Zappos"
        rolesOnProject={['React Developer']}
        startDate={makeDateForCVEntry(11, 2016)}
        endDate={makeDateForCVEntry(3, 2017)}
      >
        <p>
          Authored a complete redesign for product pages on Zappos&apos;
          liquidation channel and sister site
          {' '}
          <a href="https://www.6pm.com/" target="_blank">6pm.com</a>.
        </p>
        <p>
          Redesign was implemented as an A/B test which measured impact on
          customer conversion and other metrics.
        </p>
      </CVEntry>

      <CVEntry
        projectName="Customer Survey Application"
        companyName="Zappos"
        rolesOnProject={['Elixir Developer']}
        startDate={makeDateForCVEntry(6, 2016)}
        endDate={makeDateForCVEntry(10, 2016)}
      >
        <p>
          Maintained a bespoke, in-house customer survey application written in
          Elixir using the Phoenix web framework.
        </p>
        <p>
          Authored upgrades to administrative UI to enable new data types and
          survey structures to be configured by others in the company for
          response by main website customers.
        </p>
      </CVEntry>

      <CVEntry
        projectName="Docker Images for Legacy C++ Applications"
        companyName="Zappos"
        rolesOnProject={['C++ Programmer', 'Docker Programmer']}
        startDate={makeDateForCVEntry(2, 2016)}
        endDate={makeDateForCVEntry(6, 2016)}
      >
        <p>
          Converted two Linux C++ apps with system dependencies and a custom
          build system into easy-to-run Docker containers. Created an
          intermediate Docker Image shared by both apps containing their common
          dependencies.
        </p>
      </CVEntry>

      <CVEntry
        projectName="Company Partner Data Sharing"
        companyName="Debt Management Partners"
        rolesOnProject={['Python Programmer', 'JavaScript Programmer']}
        startDate={makeDateForCVEntry(12, 2015)}
        endDate={makeDateForCVEntry(1, 2016)}
      >
        <p>Authored Python scripts to automate data processing tasks.</p>
        <p>
          Created web interfaces for company partners to submit data for
          processing.
        </p>
      </CVEntry>

      <CVEntry
        projectName="Computer Science Teacher"
        companyName="SUNY at Buffalo"
        rolesOnProject={['Teaching Assistant']}
        startDate={makeDateForCVEntry(8, 2014)}
        endDate={makeDateForCVEntry(5, 2015)}
      >
        <p>
          Taught applied programming in Java and object-oriented design
          concepts.
        </p>
        <p>
          Held multiple weekly recitations. Occasionally taught full class
          lectures.
        </p>
        <p>
          Aided a visually impaired student with class material via one-on-one
          tutoring.
        </p>
        <p>
          Strived to make subject matter motivated and concrete with real world
          examples. Took great pride in giving energetic lectures, but sought
          out opportunities to teach through open discussion.
        </p>
      </CVEntry>
    </Article>
  );
}
