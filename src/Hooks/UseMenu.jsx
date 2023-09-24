/** @format */

import { useQuery } from "@tanstack/react-query";
const UseMenu = () => {
    const {
        data: menu = [],
        isLoading: loading,
        refetch,
    } = useQuery({
        queryKey: ["menu"],
        queryFn: async () => {
            const res = await fetch(
                "https://bistro-boss-server-6v0burgjz-hrfahimm.vercel.app/menu"
            );
            return res.json();
        },
    });
    return [menu, loading, refetch];
};
export default UseMenu;

// import { useEffect, useState } from 'react';
//  const [menu, setMenu] = useState([]);
//  const [loading, setLoading] = useState(true);
//  useEffect(() => {
//    fetch("https://bistro-boss-server-6v0burgjz-hrfahimm.vercel.app/menu")
//      .then((res) => res.json())
//      .then((data) => {
//        setMenu(data);
//        setLoading(false);
//      });
//  }, []);
