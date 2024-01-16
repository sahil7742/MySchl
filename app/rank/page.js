
import Connect from "../Connect";
import Rcard from "../models/Rcard";

export default async function rank (){
    "use server"
    await Connect();
    let callingRcard = await Rcard.find()
    return(
        <div className="bg-cover bg-center h-auto flex items-center justify-center "style={{backgroundImage:"url('https://st.depositphotos.com/1005925/3846/v/450/depositphotos_38460749-stock-illustration-kids-frame.jpg')"}} >
            <div className="  h-auto bg-opacity-50 bg-lime-500 rounded-2xl drop-shadow-2xl  ">
        <div className="text-center text-black font-bold">
            <h1>RANK CARD</h1>
        </div>
        <hr/>
        {
            callingRcard.map((item) =>(
                <div>
                <div className=" px-5 mt-4">
                <h3>Name:  {item.name}</h3>
                <h3>Father: {item.father}</h3>
                <h3>Standard: {item.standard}</h3>
                <h3>Contact: {item.contact}</h3>
                <h3>ID: {item._id}</h3>
            </div>

        
                <div>
        <tr className="flex justify-between">
            <th className="border-sm border-slate-100 text-center p-2">Maths</th>
            <th className="border-sm border-slate-100 text-center p-2">Science</th>
            <th className="border-sm border-slate-100 text-center p-2">SST</th>
            <th className="border-sm border-slate-100 text-center p-2">English</th>
            <th className="border-sm border-slate-100 text-center p-2">Hindi</th>
        </tr>
        
                <tr className="flex justify-between">
            <th className="border-sm border-slate-100 text-center p-2">{item.maths}</th>
            <th className="border-sm border-slate-100 text-center p-2">{item.sci}</th>
            <th className="border-sm border-slate-100 text-center p-2">{item.sst}</th>
            <th className="border-sm border-slate-100 text-center p-2">{item.eng}</th>
            <th className="border-sm border-slate-100 text-center p-2">{item.hindi}</th>
        </tr>
        </div>
        <hr/>
        </div>
        

            ))
        }
        
      </div>

        </div>
    )

    
}