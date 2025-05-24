import { useState } from "react";
import { Fragment } from "react/jsx-runtime";

interface Props {
  listItems: string[];
  heading: string;
  //(item:string)=>void
  onSelectItem: (item: string) => void;
}

function ListGroup({ listItems, heading, onSelectItem }: Props) {
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <Fragment>
      <h1>{heading}</h1>
      {listItems.length === 0 && <p>No Items Found</p>}

      <ul className="list-group">
        {listItems.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() =>{ setSelectedIndex(index)
                onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
