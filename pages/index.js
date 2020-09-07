import Nav from '../components/nav';
import NearbyJobs from '../components/NearbyJobs';
import ScheduledLessons from '../components/ScheduledLessons';
import MonthlyEarnings from '../components/MonthlyEarnings';

import { TourProvider } from '../contexts/TourProvider';

export default function IndexPage() {
  return (
    <TourProvider>
      <div className="h-screen w-full flex overflow-hidden select-none">
        <Nav />
        <main
          className="my-1 pt-2 pb-2 px-10 flex-1 bg-gray-200 dark:bg-black rounded-l-lg
		transition duration-500 ease-in-out overflow-y-auto"
        >
          <div className="flex">
            <NearbyJobs />
            <ScheduledLessons />
          </div>
        </main>

        <aside
          className="w-1/4 my-1 mr-1 px-6 py-4 flex flex-col bg-gray-200 dark:bg-black
		dark:text-gray-400 rounded-r-lg overflow-y-auto"
        >
          <MonthlyEarnings />
        </aside>
      </div>
    </TourProvider>
  );
}
