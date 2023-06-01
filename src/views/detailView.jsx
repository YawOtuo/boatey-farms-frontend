import { useParams } from "react-router-dom"
import { Navbar } from "../components/navbar"
import { useEffect, useState } from "react"
import axios from "axios"
import { url } from "../weburl"
import cattleIcon from '../icons/cattle.png'
import goatIcon from '../icons/goat.png'
import sheepIcon from '../icons/sheep.png'
import { Button } from "@mui/material"
import AlertDialogSlide from "../components/add-record-modal"
export const DetailView = (props) => {

    const params = useParams()
    const [animal, setAnimal] = useState([])
    const [recordEditted, setRecordEditted] = useState(0)

    useEffect(() => {
        axios
            .get(`${url}records/${params.id}`)
            .then((res) => {
                setAnimal(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [recordEditted])



    const info = ['Name/Tag', 'Tag Colour',
        'Sire: ', 'Dam', "Type",
        'Number of Kids', 'Gender',
        "Colour", "Castrated", "Health Condition", "Remarks"]

    const displayInfo = () => {
        if (animal) {

            return (
                <div className=" items-center justify-center w-4/5 md:w-2/4">
                    <div className=" flex  flex-col md:flex-row justify-center text-left capitalize ">
                        <div className=" w-full">
                            <p> name: {animal['name'] || "N/A"} </p>
                            <p> type: {animal['type'] || "N/A"} </p>
                            <p> tag_colour: {animal['tag_colour'] || "N/A"}</p>
                            <p> number of kids: {animal['number_of_kids'] || "N/A"}</p>

                        </div>
                        <div className="w-full">
                            <p> colour: {animal['colour'] || "N/A"}</p>
                            <p> castrated: {animal['castrated'] || "N/A"}</p>
                            <p> health condition: {animal['health_condition'] || "N/A"}</p>
                            <hr />
                            <p> remarks: <span className="brand-green-font font-bold">{animal['remarks'] || "N/A"}</span></p>

                        </div>


                    </div>

                </div>

            )
        }
    }

    return (
        <div className="justify-center text-center">
            <Navbar />
            <div className=" justify-center">
                <div className="flex flex-row justify-center items-center text-uppercase">
                    {animal && animal.type == "goat" &&
                        <img src={goatIcon} className="w-100" />}
                    {animal && animal.type == "sheep" &&
                        <img src={sheepIcon} className="w-100" />}
                    {animal && animal.type == "cattle" &&
                        <img src={cattleIcon} className="w-100" />}
                    <h1 className="font-xl font-bold uppercase"> {!animal ? params.id : animal.name}</h1>
                </div>
                <div className="justify-center flex flex-row ">
                    <AlertDialogSlide edit={true} record={animal}
                        setRecordEditted={setRecordEditted} recordEditted={recordEditted} />
                    <Button sx={{ color: "red" }}>Delete</Button>

                </div>

                <div className=" mt-6 flex flex-col">
                    <div className="
                    justify-center items-center flex ">
                        {displayInfo()}
                    </div>
                </div>


            </div>
        </div>
    )
}