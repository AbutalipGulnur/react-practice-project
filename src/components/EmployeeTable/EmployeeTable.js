import table from "./EmployeeTable.json";

const EmployeeTable = () => {
  return (
    <div className="table-wrapper">
      {/* <h2 className="table-title">Список сотрудников</h2>
      <table className="employee-table">
        <thead className="table-head">
          <tr>
            <th className="th p-3">Фото</th>
            <th className="th p-3">Имя</th>
            <th className="th p-3">Должность</th>
            <th className="th p-3">Возраст</th>
            <th className="th p-3">Email</th>
            <th className="th p-3">Город</th>
          </tr>
        </thead>
        <tbody>
          {table?.map((emp) => (
            <tr key={emp?.id} className="tr">
              <td className="td p-2">
                <img src={emp?.photo} alt={emp?.name} className="avatar" />
              </td>
              <td className="td p-2">{emp?.name}</td>
              <td className="td p-2">{emp?.position}</td>
              <td className="td p-2">{emp?.age}</td>
              <td className="td p-2">{emp?.email}</td>
              <td className="td p-2">{emp?.city}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default EmployeeTable;
