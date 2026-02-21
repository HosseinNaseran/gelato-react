import { Button } from "../base/button"

export const Header:React.FC =()=>{
    return(
        <header>
        <Button variant="contained">کلیک کن</Button>
        <Button variant="text">کلیک کن</Button>
        <Button variant="outlined"> کلیک کن
        </Button>
        </header>
    )
}