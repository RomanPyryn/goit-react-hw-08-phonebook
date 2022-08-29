import { TailSpin } from 'react-loader-spinner'
import { LoaderBox } from './Loader.styled';

const Loader = () => {
    return (
        <LoaderBox>
            <TailSpin height="90" width="90" color='red' ariaLabel='loading'/>
        </LoaderBox>
    )
};

export default Loader;