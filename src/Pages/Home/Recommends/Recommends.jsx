/** @format */

import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";
import RecommendsItem from "../../Shared/RecommendsItem/RecommendsItem";

const Recommends = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch("https://bistro-boss-server-6v0burgjz-hrfahimm.vercel.app/menu")
            .then((res) => res.json())
            .then((data) => setMenu(data.slice(1, 4)));
    }, []);
    return (
        <section className=''>
            <SectionTitle
                heading='  CHEF RECOMMENDES'
                subHeading=' Should Try'></SectionTitle>

            <div className='grid md:grid-cols-3 gap-4'>
                {menu.map((item) => (
                    <RecommendsItem
                        key={item._id}
                        item={item}></RecommendsItem>
                ))}
            </div>
        </section>
    );
};

export default Recommends;
