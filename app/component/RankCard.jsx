const RankCard =()=>{
    return(
        <div className=" w-64 h-96 bg-slate-100 rounded-2xl drop-shadow-2xl ">
            <div className="text-center text-2xl text-white font-black  border-2 rounded-2xl bg-slate-700">
                <h1>Rank Card</h1>
            </div>
            <div className="h-1/6 w-1/4  flex  justify-center mt-5 ml-24  ">
                <img src="student img.jpg" className="rounded-full drop-shadow-2xl" alt=""/>
                </div>
                <hr/>
                <div>
                    <h1>Name</h1>
                </div>

             
        </div>
    )
}
export default RankCard;