import React, { useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

const ShuffleList = () => {
  const [sourceList, setSourceList] = useState([
    { title: "Bangalore" },
    { title: "Iceland" },
    { title: "Germany" },
    { title: "USA" },
    { title: "France" },
  ]);

  const reorderList = (dir, originalList) => {
    const movedItem = originalList.find(
      (item, index) => index === dir.oldIndex
    );

    const remainingItem = originalList.filter(
      (item, index) => index !== dir.oldIndex
    );

    const reOrderSourceList = [
      ...remainingItem.slice(0, dir.newIndex),
      movedItem,
      ...remainingItem.slice(dir.newIndex),
    ];

    return reOrderSourceList;
  };

  const changeOrder = (index, direction) => {
    setSourceList(
      reorderList(
        {
          oldIndex: index,
          newIndex: index + (direction === "UP" ? -1 : 1),
        },
        sourceList
      )
    );
  };

  return (
    <div className="list-wrapper">
      <table className="un-list">
        <thead></thead>
        {sourceList.map((item, index) => {
          return (
            <tbody key={item.title}>
              <tr className="btn-wrapper">
                <td>{item.title}</td>
                <td>
                  {index !== 0 ? (
                    <button onClick={() => changeOrder(index, "UP")}>
                      <FontAwesomeIcon icon={faArrowUp} />
                    </button>
                  ) : (
                    ""
                  )}
                  {index !== sourceList.length - 1 ? (
                    <button onClick={() => changeOrder(index, "DOWN")}>
                      <FontAwesomeIcon icon={faArrowDown} />
                    </button>
                  ) : (
                    ""
                  )}
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default ShuffleList;
