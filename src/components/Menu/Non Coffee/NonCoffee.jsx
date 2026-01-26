export default function NonCoffee({ noncoffee }) {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow duration-300 group">
      <div className="relative w-full h-48 overflow-hidden bg-gray-100">
        
        <img
          src={noncoffee.image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover blur-lg scale-110 transition-transform duration-300 group-hover:scale-125"
        />
       
        <img
          src={noncoffee.image}
          alt={noncoffee.name}
          className="relative z-10 w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">
          {noncoffee.name}
        </h3>
        <p className="text-xl font-bold text-primary">₱{noncoffee.price}</p>
      </div>
    </div>
  );
}
