interface CVEntryBaseProps {
  companyName?: string,
  projectName: string,
  rolesOnProject: string[],
  startDate: Date,
}

interface CurrentProjectProps extends CVEntryBaseProps {
  isCurrentProject: true,
}

interface OldProjectProps extends CVEntryBaseProps {
  endDate: Date,
  isCurrentProject?: false,
}

export type CVEntryProps = React.PropsWithChildren<CurrentProjectProps | OldProjectProps>;

export function makeDateForCVEntry(month: number, year: number): Date {
  return new Date(Date.UTC(year, month - 1));
}

function formatDate(date: Date): string {
  return date.toLocaleString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' });
}

function getFormattedEndDate(props: CVEntryProps): string {
  if (props.isCurrentProject) {
    return 'Present';
  }
  return formatDate(props.endDate);
}

function makeRolesRow(rolesOnProject: string[]): JSX.Element {
  const prefix = rolesOnProject.length === 1 ? 'Role' : 'Roles';
  const commaSeparatedText = rolesOnProject.join(', ');
  return <p>{prefix}: {commaSeparatedText}</p>;
}

export default function CVEntry(props: CVEntryProps) {
  const {
    children,
    companyName,
    projectName,
    rolesOnProject,
    startDate,
  } = props;

  const formattedStartDate = formatDate(startDate);
  const formattedEndDate = getFormattedEndDate(props);

  return (
    <div>
      <h3>{projectName}</h3>
      {companyName && <p>{companyName}</p>}
      {makeRolesRow(rolesOnProject)}
      <p>{formattedStartDate} &ndash; {formattedEndDate}</p>
      <div>
        {children}
      </div>
    </div>
  );
}
