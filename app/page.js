
import Connect from "./Connect";
import Alert from "./component/Alert";
import Rcard from "./models/Rcard";

export default function page(){
  async function insertRcard(fromData){
    "use server"
await Connect();

await Rcard.create({
            name:fromData.get("name"),
            father:fromData.get("father"),
            standard:fromData.get("standard"),
            contact:fromData.get("contact"),
            maths:fromData.get("maths"),
            sci:fromData.get("sci"),
            sst:fromData.get("sst"),
            hindi:fromData.get("hindi"),
            eng:fromData.get("eng"),
          })
    
  }
  return(
    <div className="bg-lime-100 flex items-center justify-center gap-20   ">
      <div className=" w-64 h-96 bg-slate-100 rounded-2xl drop-shadow-2xl ">
        <img src="https://img.freepik.com/free-vector/back-school-background-with-happy-students_23-2147858427.jpg" className="rounded-2xl h-full hover:animate-pulse" alt="school img" />
      </div>
    <div className=" h-screen flex items-center justify-center ">
      <div className=" bg-opacity-40 bg-white rounded-2xl drop-shadow-2xl ">
      <div className="text-center text-xl border-2 border-slate-100 text-white font-black   rounded-2xl  bg-lime-500">
                <h1>Registration</h1>
            </div>
            <div className="text-sm px-2 ">
              <form action={insertRcard} method="POST" className="" >
                <div className="flex px-2 justify-between items-center mt-1 bg-lime-100 rounded-xl  py-1 ">
                  <label htmlFor="name" className="font-serif text-sm ">Name</label>
                  <input type="text" placeholder="Enter name" className="  bg-transparent   " id="name" name="name"/>
                </div>
                <div className="flex px-2 justify-between items-center mt-1 bg-lime-200 rounded-xl  py-1 ">
                  <label htmlFor="father" className="font-serif text-sm">Father</label>
                  <input type="text" placeholder="Enter name" className="  bg-transparent   " id="father" name="father"/>
                </div>
                <div className="flex px-2 justify-between items-center mt-1 gap-2 bg-lime-100 rounded-xl  py-1 ">
                  <label htmlFor="standard" className="font-serif text-sm  "> Standard</label>
                  <input type="text" placeholder="Enter Standard" className="  bg-transparent   " id="standard" name="standard"/>
                </div>
      
                <div className="flex px-2 justify-between items-center mt-1 bg-lime-200 rounded-xl  py-1 ">
                  <label htmlFor="contact" className="font-serif text-sm ">Contact</label>
                  <input type="text" placeholder="Enter ph ." className="  bg-transparent   " id="contact" name="contact"/>
                </div>
                <div className="felx flex-row  ">
                <div className="flex px-2  justify-between items-center mt-1 bg-lime-100 rounded-xl  py-1 ">
                  <label htmlFor="maths" className="font-serif text-sm ">Maths</label>
                  <input type="text" placeholder="Enter marks" className="  bg-transparent   " id="maths" name="maths"/>
                </div>
                <div className="flex px-2 justify-between items-center mt-1 bg-lime-200 rounded-xl  py-1 ">
                  <label htmlFor="sci" className="font-serif text-sm ">Science</label>
                  <input type="text" placeholder="Enter marks" className="  bg-transparent   " id="sci" name="sci"/>
                </div>
                <div className="flex px-2 justify-between items-center mt-1 bg-lime-100 rounded-xl  py-1 ">
                  <label htmlFor="sst" className="font-serif text-sm "> SST</label>
                  <input type="text" placeholder="Enter marks" className="  bg-transparent   " id="sst" name="sst"/>
                </div>
                <div className="flex px-2 justify-between items-center mt-1 bg-lime-200 rounded-xl  py-1 ">
                  <label htmlFor="hindi" className="font-serif text-sm "> Hindi</label>
                  <input type="text" placeholder="Enter marks" className="  bg-transparent   " id="hindi" name="hindi"/>
                </div>
                <div className="flex px-2  justify-between items-center mt-1 bg-lime-100 rounded-xl  py-1 ">
                  <label htmlFor="eng" className="font-serif text-sm "> English</label>
                  <input type="text" placeholder="Enter marks" className="  bg-transparent   " id="eng" name="eng"/>
                </div>
      

                </div>
                <Alert/>
              </form>
            </div>
      </div>
      
    </div>
    </div>
  )
}