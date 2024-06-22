import { Bars } from "react-loader-spinner";


const Loader = () => {
    return (
        <div className="flex justify-center items-center mt-16">
            <Bars
                height="200"
                width="150"
                color="#FD650B"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
};

export default Loader;