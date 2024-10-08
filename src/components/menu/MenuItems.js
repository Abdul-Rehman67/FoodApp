export default function MenuItems(){
    return (
        <div className="bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-md hover:shadow-black/25 cursor-pointer">
    <div className="text-center">
        <img src="/pizza.png" alt="pizza" className="max-h-auto max-h-24 block mx-auto"/>

    </div>
        <h4 className="font-semibold my-2 text-xl">Pepproni Pizza</h4>
        <p className="text-gray-500 text-sm">
        Pizza is the missing piece that makes every day complete, a simple yet
        delicious joy in life 
        </p>
        <button className="mt-4 bg-primary text-white rounded-full text-sm px-8 py-2">Add to cart $12</button>

    </div>
    )
}