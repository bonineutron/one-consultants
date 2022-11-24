import LayoutOrganism from '../../organisms/layout/layout.organism';
import UserFormMolecule from '../../molecules/user-form.molecule/user-form.molecule';

export default function HomeTemplate(): JSX.Element {
  return (
    <LayoutOrganism title='Crear Usuario' metaName='description' content='create the user to be saved'>
      <UserFormMolecule />
    </LayoutOrganism>
  );
}
