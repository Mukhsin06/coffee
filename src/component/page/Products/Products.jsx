import React from 'react';
import Fon from "../Products/landing.png";
import Coffee from "../Products/top-view-cup-coffee.jpg";
import Coffee1 from "../Products/Ellipse 2 (1).png";
import Colendar from"../Products/colendar"
function Products(props) {
    return (
        <div className="w-[100%] h-auto justify-center items-center">
            <div className="bg-cover bg-center w-full h-screen" style={{backgroundImage: `url(${Fon})`}}>
                <h2 className={"text-[64px] justify-center items-center w-[30%] text-center  font-bold text-[white] ml-[100px]  pt-[280px]"}>Select your coffee</h2>
            </div>
            <div className="bg-cover bg-center w-full h-screen px-[12%] py-[6%]  "             style={{backgroundImage: `url(${Coffee})` }}>
                <h2 className="text-[45px]  text-[#6F3D28] font-bold mb-12 px-[40%]">All Coffees</h2>
                <div className="w-[1000px] h-auto   grid grid-cols-4 gap-[30%]">
                    <div className="w-[250px]  h-[380px] flex flex-col items-center justify-center text-center p-4">
                        <img src={Coffee1} className="w-[210px] h-[210px] mb-4" alt="Sumatra Mandheling"/>
                        <h2 className="text-[28px] font-bold">Sumatra Mandheling</h2>
                        <h3 className="text-[25px] text-[#E04848]">$18.50 – $87.50 10%</h3>
                        <h2 className="text-[20px]">Milk Chocolate, Blueberry, Brown Sugar</h2>
                    </div>
                    <div className="w-[250px]  h-[380px] flex flex-col items-center justify-center text-center p-4">
                        <img src={Coffee1} className="w-[210px] h-[210px] mb-4" alt="Sumatra Mandheling"/>
                        <h2 className="text-[28px] font-bold">Sumatra Mandheling</h2>
                        <h3 className="text-[25px] text-[#E04848]">$18.50 – $87.50 10%</h3>
                        <h2 className="text-[20px]">Milk Chocolate, Blueberry, Brown Sugar</h2>
                    </div>
                    <div className="w-[250px]  h-[380px] flex flex-col items-center justify-center text-center p-4">
                        <img src={Coffee1} className="w-[210px] h-[210px] mb-4" alt="Sumatra Mandheling"/>
                        <h2 className="text-[28px] font-bold">Sumatra Mandheling</h2>
                        <h3 className="text-[25px] text-[#E04848]">$18.50 – $87.50 10%</h3>
                        <h2 className="text-[20px]">Milk Chocolate, Blueberry, Brown Sugar</h2>
                    </div>
                    <div className="w-[250px]  h-[380px] flex flex-col items-center justify-center text-center p-4">
                        <img src={Coffee1} className="w-[210px] h-[210px] mb-4" alt="Sumatra Mandheling"/>
                        <h2 className="text-[28px] font-bold">Sumatra Mandheling</h2>
                        <h3 className="text-[25px] text-[#E04848]">$18.50 – $87.50 10%</h3>
                        <h2 className="text-[20px]">Milk Chocolate, Blueberry, Brown Sugar</h2>
                    </div>




                </div>


                <div className="w-[1000px] h-auto   grid grid-cols-4 gap-[30%] py-[8%]">
                    <div className="w-[250px]  h-[380px] flex flex-col items-center justify-center text-center p-4">
                        <img src={Coffee1} className="w-[210px] h-[210px] mb-4" alt="Sumatra Mandheling"/>
                        <h2 className="text-[28px] font-bold">Sumatra Mandheling</h2>
                        <h3 className="text-[25px] text-[#E04848]">$18.50 – $87.50 10%</h3>
                        <h2 className="text-[20px]">Milk Chocolate, Blueberry, Brown Sugar</h2>
                    </div>
                    <div className="w-[250px]  h-[380px] flex flex-col items-center justify-center text-center p-4">
                        <img src={Coffee1} className="w-[210px] h-[210px] mb-4" alt="Sumatra Mandheling"/>
                        <h2 className="text-[28px] font-bold">Sumatra Mandheling</h2>
                        <h3 className="text-[25px] text-[#E04848]">$18.50 – $87.50 10%</h3>
                        <h2 className="text-[20px]">Milk Chocolate, Blueberry, Brown Sugar</h2>
                    </div>
                    <div className="w-[250px]  h-[380px] flex flex-col items-center justify-center text-center p-4">
                        <img src={Coffee1} className="w-[210px] h-[210px] mb-4" alt="Sumatra Mandheling"/>
                        <h2 className="text-[28px] font-bold">Sumatra Mandheling</h2>
                        <h3 className="text-[25px] text-[#E04848]">$18.50 – $87.50 10%</h3>
                        <h2 className="text-[20px]">Milk Chocolate, Blueberry, Brown Sugar</h2>
                    </div>
                    <div className="w-[250px]  h-[380px] flex flex-col items-center justify-center text-center p-4">
                        <img src={Coffee1} className="w-[210px] h-[210px] mb-4" alt="Sumatra Mandheling"/>
                        <h2 className="text-[28px] font-bold">Sumatra Mandheling</h2>
                        <h3 className="text-[25px] text-[#E04848]">$18.50 – $87.50 10%</h3>
                        <h2 className="text-[20px]">Milk Chocolate, Blueberry, Brown Sugar</h2>
                    </div>

                </div>


            </div>
<Colendar/>
        </div>
    );
}

export default Products;
