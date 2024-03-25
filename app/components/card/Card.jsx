import Image from "next/image";
import SingleCard from "./SingleCard";
const Card = () => {
  return (
    <div className="py-10">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-3 items-center justify-center">
          <div className="">
            <SingleCard
              title={"Picture number 1"}
              image={"/images/1.png"}
              price={300}
            />
          </div>
          <div className="">
            <SingleCard
              title={"Picture number 1"}
              image={"/images/2.png"}
              price={300}
            />
          </div>
          <div className="">
            <SingleCard
              title={"Picture number 1"}
              image={"/images/bg.png"}
              price={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
