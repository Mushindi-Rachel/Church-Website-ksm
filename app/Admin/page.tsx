export default function AdminDashboard() {
  return (
    <div className="space-y-6">

      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      <div className="grid grid-cols-2 gap-4">

        <div className="bg-white p-5 rounded shadow">
          <h2 className="font-semibold">Events</h2>
          <p className="text-sm text-gray-500">Manage all events</p>
        </div>

        <div className="bg-white p-5 rounded shadow">
          <h2 className="font-semibold">Create Event</h2>
          <p className="text-sm text-gray-500">Add new events</p>
        </div>

      </div>

    </div>
  );
}