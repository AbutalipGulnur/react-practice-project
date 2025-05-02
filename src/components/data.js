import textdata from "../components/textdata.json";

const Data = () => {

  return (
    <section className="popular-items">
      <div class="container">
        {textdata?.items?.map((number, index) => {
          return <div key={index} className="card">
        <div>
          <h3>{number?.title}</h3>
          <p>{number?.city}</p>
          <p className="price">{number?.price}</p>
        </div>
          </div>
        })}
      </div>
    </section>
  );
};

export default Data;