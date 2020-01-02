import React, {useState} from 'react';


export default function Donate() {
    const [values, setValues] = useState({donationAmount: 20});

    const onInputChange = e => {
        const {name, value} = e.target;
        setValues({...values, [name]: value});
    }

    return (
        <div>
            <div>
            <h1>Provide Hope to Loved Ones Through Art</h1>
            <q>I think people can support the cause because the cancer angels provide a way to direct good energy to the patient's soul thus helping them or a family member a way to strengthen their souls to continue the battle.</q>
            <p>DONATE</p>
            </div>

            <img src="tokyo.jpg" alt="Ofelia Romero, RN"/>
            <figcaption>-Ofelia Romero, RN<br></br> Cancer Therapy and Research Center (San Antonio, Texas)</figcaption>

            <h1>Thank you for your donation.</h1>

            <button name="donationAmount" value={5} onClick={onInputChange}>$5</button>
            <button name="donationAmount" value={10} onClick={onInputChange}>$10</button>
            <button name="donationAmount" value={20} onClick={onInputChange}>$20</button>
            <input name="donationAmount" type="number" value={values.donationAmount} onChange={onInputChange}></input>
            <button>Donate</button>

        </div>
    );
}
