import "./style.css";

function MyTable(columns, values) {
  return (
    <table
      className="grid"
      style={{ gridTemplateColumns: `repeat(${columns}, 50px)` }}
    >
      <tbody>
        {Array.from(Number(values)).map((row, idx) => (
          <tr key={idx}>
            {row.map((value) => (
              <td key={value} className="cell">
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MyTable;
