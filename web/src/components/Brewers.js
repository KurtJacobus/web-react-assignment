import useAxios from "axios-hooks";
import "../index.css";
const API_URL = "http://localhost:8080";

const Brewers = () => {
  let [{ data }] = useAxios({
    method: "GET",
    url: `${API_URL}/brewers/`,
  });
  console.log(data);

  const handleClick = (brewer) => {
    alert(
      `Bean Type: ${data.bean_type} Brew Method: ${data.brew_method} Brew Time:${data.brew_time}`
    );
  };

//   Having difficulty posting data correctly in the Recipe component
//   After the form is submitted, I can see the name and id in the console,
//   But the recipe array is empty hence the title and description are not showing
//   In addition the refresh rate after changes have be made takes up to 5 mins at a time,
//   The changes in the browser is no immediate.(Not sure if thats normal) I built the app in a separate react folder and 
//   transfered the code over.  
  return (
    <div className="brewers">
      <h1>Legend Brewers</h1>
      {/* Will only load list of brewers once a list is avail */}
      {data &&
        data.map((brewer) => (
          <div className="brewers-preview" key={brewer.id}>
            <h2>{brewer.title}</h2>
            <p>{brewer.description}</p>
            <p>Created by {brewer.name}</p>
            <div>
              <button onClick={() => handleClick(data)}>More info</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Brewers;
