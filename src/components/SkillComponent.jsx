import React from 'react';
import PropTypes from 'prop-types';
import styles from './SkillComponent.module.css'; // Correct import for CSS Modules

const SkillComponent = ({ skill_data, onAddSkill, onRemoveSkill, onRemoveSpecificSkill }) => {
    const handleMouseClick = (e) => {
        e.preventDefault();
        if (e.button === 0) {
            onAddSkill(skill_data); // Left mouse button
        } else if (e.button === 2) {
            onRemoveSkill(skill_data); // Right mouse button
        } else if (e.button === 1) {
            onRemoveSpecificSkill(skill_data); // Middle mouse button
        }
    };

    return (
        <div 
            className={styles.skillComponent} 
            onMouseDown={handleMouseClick} 
            onContextMenu={(e) => e.preventDefault()} // Prevent context menu on right click
        >
            <div className={styles.imageContainer}>
                <img src={skill_data.file} alt={skill_data.name} className={styles.skillImage} />
            </div>
            <div className={styles.detailsContainer}>
                <span className={styles.skillName}>{skill_data.name}</span>
                <span className={styles.skillPotency}>{skill_data.potency}</span>
            </div>
        </div>
    );
};

SkillComponent.propTypes = {
    skill_data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        file: PropTypes.string.isRequired,
        level: PropTypes.number.isRequired,
        potency: PropTypes.number.isRequired,
    }).isRequired,
    onAddSkill: PropTypes.func.isRequired,
    onRemoveSkill: PropTypes.func.isRequired,
    onRemoveSpecificSkill: PropTypes.func.isRequired,
};

export default SkillComponent;
