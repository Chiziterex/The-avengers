import { Link } from "react-router-dom";

export default function NoPage() {
    
    return (
        <div className="noPage">
            <h1>Error 404: Not found</h1>
            <span><Link to="/signIn" className="btn">Go back to home page</Link></span>
        </div>
    );
}