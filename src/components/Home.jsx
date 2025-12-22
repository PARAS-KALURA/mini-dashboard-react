const Home = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Welcome to KeKKa 👋</h1>
        <p className="text-gray-600 mt-2">
          Your personal mini dashboard to manage tasks and overview.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-5 border rounded-lg hover:shadow-md transition">
          <h3 className="font-semibold text-lg">Dashboard</h3>
          <p className="text-sm text-gray-500 mt-1">
            View stats and overview
          </p>
        </div>

        <div className="p-5 border rounded-lg hover:shadow-md transition">
          <h3 className="font-semibold text-lg">Tasks</h3>
          <p className="text-sm text-gray-500 mt-1">
            Manage your daily tasks
          </p>
        </div>

        <div className="p-5 border rounded-lg hover:shadow-md transition">
          <h3 className="font-semibold text-lg">Settings</h3>
          <p className="text-sm text-gray-500 mt-1">
            Customize your app
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
