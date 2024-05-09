
export default function LandingPage() {

    return (
        <>
            <div className="">
                <div className="flex flex-col py-4 my-12 sm:flex-row">
                    <div className=" text-center self-center my-10 w-full sm:w-1/3">
                        <p className="text-blue-950 text-3xl">
                            You Don't Know What?
                        </p>
                        <p className="text-blue-950 text-xl">
                            Enter The Photo And I Will Tell You!
                        </p>
                    </div>
                    <img src={"./../assets/asset-selection-animate.svg"} className="sm:w-2/3" alt="" />

                </div>
                <div className="flex justify-center mb-20">
                    <button className="duration-700 p-4 bg-blue-950 text-white border rounded-lg"><a className="" href="#object-detector">Get Start ↓</a> </button>
                </div>
            </div>
        </>
    )
}