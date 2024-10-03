import DashboardLayout from "@/layout/dashboard-layout";
import Dashboard from "@/app/dashboard/page";
import {Suspense} from "react";
import Loading from "@/app/loading";

export default function Home() {
  return (
      <DashboardLayout>
          <Suspense fallback={<Loading />}>
              <Dashboard />
          </Suspense>
      </DashboardLayout>
  );
}
