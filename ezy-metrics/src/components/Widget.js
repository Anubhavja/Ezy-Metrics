// Home.js or wherever Widget is being used
import Widget from '../components/Widget';

const Home = () => {
  const widgetData = {
    title: "Leads Overview",
    value: "150",
  };

  return (
    <div>
      {/* Render the Widget component with the data prop */}
      <Widget data={widgetData} />
    </div>
  );
};

export default Home;
