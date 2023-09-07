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
          of audio assets within the editor.
        </p>
        <p>
          On release, PutSound will be a Unity Asset Store product. This tool
          relieves the need for creatives and developers to use an external
          audio application for placeholder sound effects and music. PutSound
          also aims to facilitate better communication with game audio
          professionals, as mock audio can be immediately implemented into the
          game and demoed with its relevant context.
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
        startDate={makeDateForCVEntry(1, 2000)}
        endDate={makeDateForCVEntry(1, 2000)}
      >
        <p>TODO</p>
      </CVEntry>

      <CVEntry
        projectName="Git Flow"
        companyName="Zappos"
        rolesOnProject={['Jenkins CI Programmer', 'Operations Manager', 'Project Planner', 'Technical Writer']}
        startDate={makeDateForCVEntry(5, 2021)}
        endDate={makeDateForCVEntry(2, 2022)}
      >
        <p>TODO</p>
      </CVEntry>

      <CVEntry
        projectName="Grid Layout for Product Dimension Selector"
        companyName="Zappos"
        rolesOnProject={['React Developer']}
        startDate={makeDateForCVEntry(3, 2021)}
        endDate={makeDateForCVEntry(9, 2021)}
      >
        <p>TODO</p>
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
        startDate={makeDateForCVEntry(1, 2000)}
        endDate={makeDateForCVEntry(1, 2000)}
      >
        <p>TODO</p>
      </CVEntry>

      <CVEntry
        projectName="Customer Survey Application"
        companyName="Zappos"
        rolesOnProject={['Elixir Developer']}
        startDate={makeDateForCVEntry(1, 2000)}
        endDate={makeDateForCVEntry(1, 2000)}
      >
        <p>TODO</p>
      </CVEntry>

      <CVEntry
        projectName="6PM.com Redesign"
        companyName="Zappos"
        rolesOnProject={['React Developer']}
        startDate={makeDateForCVEntry(1, 2000)}
        endDate={makeDateForCVEntry(1, 2000)}
      >
        <p>TODO</p>
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
