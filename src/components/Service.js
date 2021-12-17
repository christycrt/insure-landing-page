const Data = [
  {
    icon: "images/icon-snappy-process.svg",
    title: "Snappy Process",
    content:
      "Our application process can be complete in minutes, not hour. Don't get stuck filling in tedious forms.",
  },
  {
    icon: "images/icon-affordable-prices.svg",
    title: "Affordable Price",
    content:
      "We don't want you worrying about high monthly costs. Our prices maybe low, but we still offer the best coverage possible",
  },
  {
    icon: "images/icon-people-first.svg",
    title: "People First",
    content:
      "Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it",
  },
];

const Service = () => {
  return (
    <div className="service">
      <div className="line" />
      <p className="title">We're different</p>
      {Data.map((item, key) => {
        return (
          <div className="container service-content" key={key}>
            <img className="icon" src={item.icon} alt={item.title} />
            <p className="title-2">{item.title}</p>
            <p className="content">{item.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Service;
