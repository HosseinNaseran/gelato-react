import { Button } from "../base/button"

export const Header:React.FC =()=>{
    return(
        <header>
        <Button variant="contained" color="primary" onClick={()=>{}}>کلیک کن</Button>
                <Button variant="outlined" color="primary" onClick={()=>{}}>کلیک کن</Button>

        <Button variant="text" color="primary" onClick={()=>{}}>کلیک کن</Button>

      
        </header>
    )
}