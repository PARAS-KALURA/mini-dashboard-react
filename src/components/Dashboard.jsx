const Dashboard = () => {
  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-500">Total Tasks</p>
          <h2 className="text-3xl font-bold">12</h2>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-500">Completed</p>
          <h2 className="text-3xl font-bold text-green-500">5</h2>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <p className="text-gray-500">Pending</p>
          <h2 className="text-3xl font-bold text-red-500">7</h2>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
