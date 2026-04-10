import { Timeline } from "app/components/timeline"
import work_exp from "../data/work_exp.json";

export default function Experience(){
    
    return(
        <>
            <h1 style={{fontSize: "3rem", textAlign: "center", paddingBottom: "2rem"}}>Work Experience</h1>
            <Timeline data={work_exp}/>
        </>
        
    )

}