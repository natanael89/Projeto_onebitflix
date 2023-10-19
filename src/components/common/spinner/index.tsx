import { Spinner } from "reactstrap";

const PageSpinner = () => {
    return (
        <>
          <div className="vh-100 bg-dark d-flex justify-content-center align-items-center">
            <Spinner animition="border" color="light"/>
          </div>
        </>
    )
}

export default PageSpinner;