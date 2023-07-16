import React from "react";
import Layout from "./../Layout/Layout";
import Head from "../Components/Head";
const AboutUs = () => {
  return (
    <Layout>
      <div className="min-height-screen container mx-auto px-2 my-6">
        <Head title="About Us" />
        <div className="xl:py-20 py-10 px-4">
          <div className="grid grid-flow-row xl:grid-cols-2 gap-4 xl:gap-16 items-center">
            <div>
              <h3 className="text-xl lg:text-3xl mb-4 font-semibold">
                Welcome to our Cineverse
              </h3>
              <div className="mt-3 text-sm leading_8 text-text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti voluptatum enim aut sed sit voluptates rem in maiores
                  tempore voluptate et sapiente nulla nostrum expedita autem,
                  quaerat facilis explicabo laborum?
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Impedit incidunt autem adipisci ipsam voluptatum esse repellat
                  veniam, distinctio, neque, atque tempore minus tenetur vitae
                  quaerat. Modi quo perferendis culpa totam?
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="p-8 bg-dry rounded-lg">
                    <span className="text-3xl block font-extrabold ">10k</span>
                    <h4 className="text-lg font-semibold my-2">
                      {" "}
                      Listed Movies
                    </h4>
                    <p className="mb-0 text-text leading-7 text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                  <div className="p-8 bg-dry rounded-lg">
                    <span className="text-3xl block font-extrabold ">18k</span>
                    <h4 className="text-lg font-semibold my-2">Lovely Users</h4>
                    <p className="mb-0 text-text leading-7 text-sm">
                      Completely free, Without registeration!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dqzabjiql/image/upload/v1689121374/aboutus_s1wviu.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
