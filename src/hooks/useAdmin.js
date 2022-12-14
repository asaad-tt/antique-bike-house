import { useEffect, useState } from "react";

const useAdmin = (email) => {
  // console.log(email);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  // console.log(isAdmin);
  useEffect(() => {
    if (email) {
      fetch(`https://antique-bike-house-server.vercel.app/users/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsAdmin(data.isAdmin);
          setIsAdminLoading(false);
        });
    }
  }, [email]);
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
