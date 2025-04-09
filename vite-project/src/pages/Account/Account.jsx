import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";
import { AccountSidebar } from "../../components/AccountSidebar/AccountSidebar";
import { path } from "../../constants/path";

export default function Account() {
  const { user, setUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  
  useEffect(() => {
          const timer = setTimeout(() => {
              setLoading(false); 
              if(!user) {
                  navigate(path.cocoon);
              }
          }, 500);
          return () => clearTimeout(timer);
      }, []);

  return (
    <>
      {loading ? (
                    <div className="loading-overlay">
                        <div className="loading-logo">
                            <img src="/images/cocoon1.png" alt="Loading" className="logo-image" />
                            <div className="progress-circle"></div>
                        </div>
                    </div>
                ) : (
                  <div className="grid grid-cols-12 max-w-5xl mx-auto p-5 gap-5">
                  <div className="col-span-4">
                   <AccountSidebar user={user} />
                   
                  </div>
                  <div className="col-span-8 rounded-sm">
                    <Outlet context={{ user }} />
                  </div>
                </div>
                )}
    </>
  );
}
