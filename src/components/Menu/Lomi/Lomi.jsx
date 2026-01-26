export default function Lomi ({lomi}){
    return (
        <div className="flex flex-col rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative w-full h-48 overflow-hidden bg-gray-100">
            <img
                src={lomi.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover blur-lg scale-110"
            />
            <img
                src={lomi.image}
                alt={lomi.name}
                className="relative z-10 w-full h-full object-contain"
            />
            </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">
          {lomi.name}
        </h3>
        <p className="text-xl font-bold text-primary">₱{lomi.price}</p>
      </div>
    </div>
    );
}