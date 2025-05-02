import taskData from "../Task.json";

const TaskData = () => {
  return (
    <section className="popular-items">
      <div className="container">
        {taskData?.items?.map((item, index) => (
          <div key={item} className="card">
            <div
              key={item}
              className="notification-card"
              style={{ backgroundColor: item.color }}
            >
              <a href={item.link}>{item.text}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TaskData;
