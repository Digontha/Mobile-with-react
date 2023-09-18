

const Phones = ({ data ,handleName}) => {
    const { brand, phone_name, image } = data
    
      
    return (
       
            <div className="card card-compact  bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{phone_name}</h2>
                    <p>Brand: {brand}</p>
                    <div onClick={()=>{handleName(data)}} className="card-actions">
                        <button className="btn btn-primary w-full">Add</button>
                    </div>
                </div>
            </div>
       
    );
};

export default Phones;