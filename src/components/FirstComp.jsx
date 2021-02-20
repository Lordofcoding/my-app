import React, {useState, useEffect} from 'react';

const FirstComp = (props) => {

    const [age, setAge] = useState(20)

    const handleClick = () => {
        setAge((oldAge) => {
            return oldAge+1;
        });
    };

    useEffect(() => {
        console.log(age);
    }, [age]);

    return (
        <div>
            <div>My age is {age}</div>
            <button type="button" onClick={handleClick}>
                Update my age
            </button>
            {age >= 18 && <div>You are an adult</div>}
        </div>
    );
};

export default FirstComp;   