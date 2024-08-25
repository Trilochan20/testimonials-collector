interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="h-screen max-w-screen-xl mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-12 h-full ">
        {/* Sidebar */}
        <aside
          className={`
            md:col-span-4 lg:col-span-3 bg-gray-100 p-4
            transition-all duration-300 ease-in-out
             "block" md:max-w-[300px] overflow-y-auto
          `}
        >
          {/* Sidebar content */}
          <nav className="mt-32">
            <ul>
              <li className="mb-2 ">
                <a
                  href="/dashboard"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Profile
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/dashboard/settings"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Site Settings
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/dashboard/list"
                  className="text-blue-600 hover:text-blue-800"
                >
                  Collected Testimonials
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        <main className="md:col-span-8 lg:col-span-9 p-4 overflow-y-auto ">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
