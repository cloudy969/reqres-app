import React, {useState} from "react";

import CalcInput from "../../../UI/CalcInput/CalcInput";
import style from "./FormBlock.module.css";

const FormBlock = () => {
    const [estatePrice, setEstatePrice] = useState(500000);
    const [firstPayment, setFirstPayment] = useState(0);
    const [creditTerm, setCreditTerm] = useState(1);
    const [percentage, setPercentage] = useState(1);

    return (
        <form className={style.form}>
            <label className={style.label}>
                Стоимость недвижимости
                <CalcInput
                    value={estatePrice}
                    setValue={setEstatePrice}
                    className={style.input}
                    minValue={500000}
                    maxValue={99999999}
                    step={20000}
                />
            </label>
            <label className={style.label}>
                Первоначальный взнос
                <CalcInput
                    className={style.input}
                    minValue={0}
                    maxValue={estatePrice - 500000}
                    step={20000}
                    value={firstPayment}
                    setValue={setFirstPayment}
                />
            </label>
            <label>
                Срок кредита
                <CalcInput
                    className={style.input}
                    minValue={1}
                    maxValue={30}
                    step={1}
                    value={creditTerm}
                    setValue={setCreditTerm}
                />
            </label>
            <label>
                Процентная ставка
                <CalcInput
                    className={style.input}
                    minValue={1}
                    maxValue={30}
                    step={.1}
                    value={percentage}
                    setValue={setPercentage}
                />
            </label>

        </form>
    );
};

export default FormBlock;
