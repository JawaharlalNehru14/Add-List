import React from "react";
import { MdDeleteForever } from "react-icons/md";
const Content = ({ item, handleDelete }) => {
  /*how to map------------------------------
  const numbers = [-2,-1,0,1,2]
  const itemss = numbers.filter(n=> n>=0).map(n=>({number:n}))
  consolog.log(itemss)
*/

  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Gmail</th>
            <th>Course</th>
            <th>Planning</th>
            <th>Finished</th>
            <th>Delete</th>
          </tr>
        </thead>
        {item.length ? (
          <tbody>
            {item.map((myList) => (
              <tr key={myList.id}>
                <td>{myList.id}</td>
                <td>{myList.name}</td>
                <td>{myList.gmail}</td>
                <td>{myList.course}</td>
                <td>{myList.planning}</td>
                <td>{myList.finished}</td>
                <td>
                  <MdDeleteForever
                    role="button"
                    tabIndex={0}
                    onClick={() => handleDelete(myList.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td colSpan="7" className="text-center">
                <h4>Your List Is Empty</h4>
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </>
  );
};

export default Content;
