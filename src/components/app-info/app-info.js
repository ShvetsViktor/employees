import './app-info.css';


const AppInfo = ({employees, increased}) => {
    return (
        <div className="app-info">
            <h1>Employee Management in Company N</h1>
            <h2>Total number of employees: {employees}</h2>
            <h2>The bonus will be awarded to: {increased}</h2>
        </div>
    );
}

export default AppInfo;