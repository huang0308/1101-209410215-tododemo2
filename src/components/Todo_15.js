import { useState } from 'react';
import Modal_15 from '../components/Modal_15'
import Backdrop_15 from '../components/Backdrop_15'

function Todo_15(props){
    const [showModal, setShowModal ] = useState();

    function showModalHandler(){
        setShowModal(true);
    }

    function closeModalHandler(){
        setShowModal(false);
    }
    return(
        <div>
            <div className="card">
                <h2>{props.text}</h2>
                <div className="actions">
                    <button className="btn" onClick={showModalHandler}>Delete</button>
                </div>
            </div>
            {showModal && <Backdrop_15 onClick={closeModalHandler}/>}
            {showModal && <Modal_15 text='Are you sure?' onClose={closeModalHandler}/>}
        </div>

    );
}

export default Todo_15;