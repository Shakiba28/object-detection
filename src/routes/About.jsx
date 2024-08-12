import me from '../assets/me.jpg'


export default function About() {

    return (
        <>
            <div id="about" className="container mx-auto">
                <div className=" sm:flex justify-between my-40">
                    <p className="w-full mb-2 text-justify sm:w-1/2">
                        <h1 className="text-xl font-bold mb-2">About</h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, autem delectus sint doloremque libero aliquam necessitatibus molestiae incidunt veritatis suscipit possimus eos totam natus ratione! Dolorum laboriosam praesentium aspernatur aliquam?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, autem delectus sint doloremque libero aliquam necessitatibus molestiae incidunt veritatis suscipit possimus eos totam natus ratione! Dolorum laboriosam praesentium aspernatur aliquam?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, autem delectus sint doloremque libero aliquam necessitatibus molestiae incidunt veritatis suscipit possimus eos totam natus ratione! Dolorum laboriosam praesentium aspernatur aliquam?
                    </p>
                    <img className="w-full rounded-md sm:w-1/3" src={me} alt="" />
                </div>

            </div>
        </>
    )
}