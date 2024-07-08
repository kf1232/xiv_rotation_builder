import React, { useState } from 'react';
import styles from './LevelSlider.module.css'; // Correct import for CSS Modules

const LevelSlider = ({ onLevelChange }) => {
    const [level, setLevel] = useState(1);
    const [inputValue, setInputValue] = useState(1);

    const handleSliderChange = (e) => {
        const newLevel = parseInt(e.target.value, 10);
        setLevel(newLevel);
        setInputValue(newLevel);
        onLevelChange(newLevel);
    };

    const handleInputChange = (e) => {
        const newLevel = e.target.value;
        if (newLevel === '' || /^\d+$/.test(newLevel)) {
            setInputValue(newLevel);
        }
    };

    const handleInputKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleInputBlur();
        }
    };

    const handleInputBlur = () => {
        let newLevel = parseInt(inputValue, 10);
        if (isNaN(newLevel) || newLevel < 1 || newLevel > 100) {
            setInputValue(level);
        } else {
            setLevel(newLevel);
            onLevelChange(newLevel);
        }
    };

    return (
        <div className={styles.levelSlider}>
            <input 
                type="range" 
                min="1" 
                max="100" 
                value={level} 
                onChange={handleSliderChange} 
                className={styles.slider} 
            />
            <input 
                type="text" 
                value={inputValue} 
                onChange={handleInputChange} 
                onKeyPress={handleInputKeyPress} 
                onBlur={handleInputBlur} 
                className={styles.input} 
            />
        </div>
    );
};

export default LevelSlider;
