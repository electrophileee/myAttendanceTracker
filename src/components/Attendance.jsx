import title from "./Images/title.png";

const Attendance =()=>{
     return(
        <div className="w-full bg-white py-16 px-4">
           <div className="max-width-[1240px] mx-auto grid md:grid-cols-2">
            <div className="flex flex-col justify-center">
                <h1 className="text-[#ecbe41]  text-xl font-bold">Why we use attendance tracker ? </h1>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia dolores ut illum et vero laborum, eveniet quam at mollitia odio sed in nihil temporibus ab ipsum voluptates nulla recusandae, ipsam voluptatem dolorem neque quasi. Exercitationem eveniet cumque culpa repellat, quaerat eos officiis obcaecati id quia perspiciatis eaque ad illo reiciendis consequatur, nam inventore? Commodi explicabo, amet doloremque accusamus dolore dignissimos maiores cumque earum quisquam eius repellat illum, obcaecati ut. Minima distinctio animi voluptatibus iste unde! Aut eum illum temporibus at quidem placeat eaque quae asperiores omnis? Autem minus, ipsam sunt dolor corporis illo unde dignissimos dolores atque perspiciatis omnis blanditiis.
                </p>
            </div>
            <img className="w-500px mx-auto my-4" src={title} alt="/" /> 
           </div>
        </div>
     )
}

export default Attendance;