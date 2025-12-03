interface Props {
  rol: string;
  description: string;
}
export const ProjectsTable = ({ rol, description }: Props) => {
  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Rol</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>{rol}</th>
            <td>{description}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
