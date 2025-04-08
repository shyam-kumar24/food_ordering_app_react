import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems,setShowIndex}) => {

    const handleClick = ()=>{
        setShowIndex()
    }
    
    return <div>
        <div className="w-10/12 bg-gray-200 p-4 mx-auto my-3 shadow-xl ">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{data?.title}({data?.itemCards?.length || data?.carousel?.length })</span> 
                <span>{data?.title ? '⬇' : ''}</span>
            </div>

            {showItems && <ItemList items={data?.itemCards}/>}
        </div>
        
    </div>
}

export default RestaurantCategory   