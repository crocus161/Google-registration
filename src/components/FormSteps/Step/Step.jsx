import React from 'react'
import styles from './Step.module.scss';
import { useNavigate } from 'react-router-dom';
import Button from '../../../common/Button/Button';
import { useData } from '../../../context/DataContext';
import {ReactComponent as LogoIcon} from '../../../assets/logo.svg';
import ButtonGroup from '../../../common/FormBlocks/ButtonGroup/ButtonGroup';

const Step = ({title, children, handleSubmit, path, isFirst}) => {
    const {setValues} = useData();
    const navigate = useNavigate(path);

    const submit = data => {
        setValues(data);
        navigate(path);
    }

    return (
        <form onSubmit={handleSubmit(submit)}>

            <LogoIcon className={styles.logo} />
            <h1 className={styles.title}>{title}</h1>

            {children}

            {
                isFirst
                    ? <Button type='submit' fill>Далее</Button>
                    : <ButtonGroup />
            }
        </form>
    )
}

export default Step
