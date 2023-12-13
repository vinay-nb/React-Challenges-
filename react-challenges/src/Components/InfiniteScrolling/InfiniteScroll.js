import React, { useEffect, useState } from "react";
import "../InfiniteScrolling/style.css";

function InfiniteScroll() {
  const [count, setCount] = useState(50);

  const onScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      window.document.body.offsetHeight - 30
    ) {
      setCount(count + 50);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [count]);

  const elements = [];
  for (let i = 0; i < count; i++) {
    elements.push(<div key={i}>{i}</div>);
  }
  return <main className="containerScroll">{elements}</main>;
}

export default InfiniteScroll;
