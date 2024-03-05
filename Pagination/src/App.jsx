import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [recivedData, setRecivedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // const recordsPerPage = 5;
  // const lastIndex = currentPage * recordsPerPage;
  // const firstIndex = lastIndex - recordsPerPage;
  // const records = recivedData.slice(firstIndex, lastIndex);
  // const npage = Math.ceil(recivedData.length / recordsPerPage);
  // const numbers = [...Array(npage + 1).key()].slice(1);

  const fetchData = async () => {
    const res = await fetch(
      `https://api.freeapi.app/api/v1/public/randomusers?limit=50`
    );

    const convertedData = await res.json();

    if (convertedData && convertedData.data.data) {
      setRecivedData(convertedData.data.data);
    }

    // console.log("Data: ", convertedData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(recivedData);
  // console.log(recivedData.length);

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= recivedData.length / 5 &&
      selectedPage !== currentPage
    ) {
      setCurrentPage(selectedPage);
    }
  };

  return (
    <>
      <h1>Pagination Project</h1>
      <div>
        {recivedData.length > 0 && (
          <div>
            <table className="table-container">
              <caption>API call Records</caption>
              <thead>
                <th>Name</th>
                <th>Email</th>
                <th>Country</th>
              </thead>
              <tbody>
                {recivedData
                  .slice(currentPage * 5 - 5, currentPage * 5)
                  .map((item) => (
                    <tr key={item.id}>
                      <td>
                        {item.name.title}. {item.name.first}
                      </td>
                      <td>{item.email}</td>
                      <td>{item.location.country}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      {recivedData.length > 0 && (
        <div className="pagination">
          <span
            className={currentPage > 1 ? "" : "pagination__disable"}
            onClick={() => selectPageHandler(currentPage - 1)}
          >
            ◀️
          </span>
          {[...Array(recivedData.length / 5)].map((_, i) => {
            return (
              <span
                className={currentPage === i + 1 ? "pagination__selected" : ""}
                onClick={() => selectPageHandler(i + 1)}
                key={i}
              >
                {i + 1}
              </span>
            );
          })}
          <span
            onClick={() => selectPageHandler(currentPage + 1)}
            className={
              currentPage < recivedData.length / 5 ? "" : "pagination__disable"
            }
          >
            ▶️
          </span>
        </div>
      )}
    </>
  );
}

export default App;
