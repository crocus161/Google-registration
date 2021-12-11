import React from 'react'
import Button from '../../Button/Button';

const PrevButton = () => {
    const handleClick = () => window.history.back();
    return <Button type='button' onClick={handleClick}>Назад</Button>
}

export default PrevButton
