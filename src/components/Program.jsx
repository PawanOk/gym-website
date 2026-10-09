import { Dumbbell, HeartPulse, Flame } from "lucide-react";

const Program = () => {
  return(
    <section className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Our Programs</h2>
        <p className="text-gray-300 mb-10">Choose the right program for your fitness journey.</p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="group h-full bg-gray-800 p-5 rounded-xl hover:bg-red-900 border border-transparent hover:border-red-500 hover:translate-y-2 hover:scale-105 transition-all duration-300">
              <Dumbbell className="mx-auto mb-4 w-10 h-10 text-red-500 group-hover:text-yellow-300 group-hover:scale-125 group-hover:rotate-6 transition-all duration-300 drop-shadow-lg group-hover:translate-y-1"/>
            <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-yellow-300 transition-colors duration-300">Strength Training</h3>
            <p className="text-gray-300">Build muscle and increase strength.</p>
            <a href="#"
             className="inline-flex items-center mt-4 text-red-400 hover:text-yellow-300 transition-colors duration-300">Learn More </a>
          </div>  

          <div className="group h-full bg-gray-800 p-5 rounded-xl hover:bg-red-900 border border-transparent hover:border-red-500 hover:translate-y-2 hover:scale-105 transition-all duration-300 group-hover:translate-y-1">
            <HeartPulse className="mx-auto mb-4 w-10 h-10 text-red-500 group-hover:text-yellow-300 group-hover:scale-125 group-hover:rotate-6 transition-all duration-300 drop-shadow-lg"/>
            <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-yellow-300 transition-colors duration-300">Cardio Fitness</h3>
            <p className="text-gray-300">Improve endurance and heart health.</p>
            <a href="#"
            className="inline-flex items-center mt-4 text-red-400 hover:text-yellow-300 transition-colors duration-300">Learn More</a>
          </div>
          <div className="group h-full bg-gray-800 p-5 rounded-xl hover:bg-red-900 border border-transparent hover:border-red-500 hover:translate-y-2 hover:scale-105 transition-all duration-300 group-hover:translate-y-1">
           <Flame className="mx-auto mb-4 w-10 h-10 text-red-500 group-hover:text-yellow-300 group-hover:scale-125 group-hover:rotate-6 transition-all duration-300 drop-shadow-lg" />
            <h3 className="text-xl font-semibold mb-3 group-hover:text-yellow-300 transition-colors duration-300">Fat Loss</h3>
            <p className="text-gray-300">Burn fat and achieve a lean body.</p>
            <a href="#"
            className="inline-flex items-center mt-4 text-red-400 hover:text-yellow-300 transition-colors duration-300">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;