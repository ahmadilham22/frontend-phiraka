import React, { useState } from 'react';

function FibonacciTable() {
  const [rows, setRows] = useState(6);
  const [columns, setColumns] = useState(6);
  const [fibonacci, setFibonacci] = useState([]);

  const generateFibonacci = (n) => {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalNumbers = rows * columns;
    setFibonacci(generateFibonacci(totalNumbers));
  };

  return (
    <div className="container">
      <h2>Generator Tabel Fibonacci</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Baris</label>
          <input
            type="number"
            className="form-control"
            value={rows}
            onChange={(e) => setRows(parseInt(e.target.value))}
          />
        </div>
        <div className="form-group">
          <label>Kolom</label>
          <input
            type="number"
            className="form-control"
            value={columns}
            onChange={(e) => setColumns(parseInt(e.target.value))}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>

      <table className="table table-bordered table-striped mt-4">
        <tbody>
          {Array.from({ length: rows }, (_, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: columns }, (_, colIndex) => (
                <td key={colIndex}>
                  {fibonacci[rowIndex * columns + colIndex]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FibonacciTable;
