import React, { useState } from 'react';
import { pictomancer } from '../assets/pictomancer/pictomancer-icon-loader';
import SkillComponent from '../components/SkillComponent';
import LevelSlider from '../components/LevelSlider';
import styles from './HomePage.module.css'; // Correct import for CSS Modules

import { FireInRed } from '../components/fire_in_red';
import { FireIIInRed } from '../components/fire_ii_in_red';

const HomePage = () => {
    const [level, setLevel] = useState(100);
    const [skillSequence, setSkillSequence] = useState([]);

    const [AetherhuesState, setAetherhuesState] = useState(0);
    const [HyperphantasiaState, setHyperphantasiaState] = useState(0)

    const handleLevelChange = (newLevel) => {
        setLevel(newLevel);
    };

    const assingedSkills = pictomancer.filter(skill => skill.isAssignable);
    const filteredSkills = assingedSkills.filter(skill => skill.level <= level);

    const AetherhuesStateUpdater = (skill) => {
        switch (skill.name) {
            case "Fire in Red":
            case "Fire II in Red":
                setAetherhuesState(1); break;
            case "Aero in Green":
            case "Aero II in Green":
                setAetherhuesState(2); break;
            case "Water II in Blue":
            case "Water in Blue":
                setAetherhuesState(0); break;
        }
    }


    const addSkillToStack = (skill_data) => {
        switch (skill_data.name) {
            case "Fire in Red":
            case "Fire II in Red":
                setAetherhuesState(1); break;
            case "Aero in Green":
            case "Aero II in Green":
                setAetherhuesState(2); break;
            case "Water II in Blue":
            case "Water in Blue":
                setAetherhuesState(0); break;
        }
        setSkillSequence([...skillSequence, skill_data]);
    };

    const updateSkillSequence = (sequence) => {
        const updatedSequence = [...sequence];
        const AetherState = 0;
        const HyperState = 0;

        updatedSequence.forEach( skill => {
            console.log(skill)
        })
    }

    const removeLastSkill = (skill_data) => {
        const updatedSequence = [...skillSequence];
        const index = updatedSequence.map(skill => skill.name).lastIndexOf(skill_data.name);
        if (index > -1) {
            updatedSequence.splice(index, 1);
            setSkillSequence(updatedSequence);
        }
        AetherhuesStateUpdater(updatedSequence[updatedSequence.length-1])
        updateSkillSequence(updatedSequence)
    };

    const removeSpecificSkill = (skill_data) => {
        const updatedSequence = [...skillSequence];
        const index = updatedSequence.indexOf(skill_data);
        if (index > -1) {
            updatedSequence.splice(index, 1);
            setSkillSequence(updatedSequence);
        }

        updateSkillSequence(updatedSequence)
    };

    return (
        <div className={styles.homePage}>
            <div className={styles.rowA}>
                <h1>Skill Selector</h1>
                <LevelSlider onLevelChange={handleLevelChange} />
            </div>
            <div className={styles.rowB}>
                {skillSequence.map((skill, index) => (
                    <SkillComponent
                        key={index}
                        skill_data={skill}
                        onAddSkill={addSkillToStack}
                        onRemoveSkill={removeLastSkill}
                        onRemoveSpecificSkill={removeSpecificSkill}
                    />
                ))}
            </div>
            <div className={styles.rowC}>
                <SkillComponent
                    key="0"
                    skill_data={FireInRed(AetherhuesState, HyperphantasiaState)}
                    onAddSkill={addSkillToStack}
                    onRemoveSkill={removeLastSkill}
                    onRemoveSpecificSkill={removeSpecificSkill}
                />
                <SkillComponent
                    key="1"
                    skill_data={FireIIInRed(AetherhuesState, HyperphantasiaState)}
                    onAddSkill={addSkillToStack}
                    onRemoveSkill={removeLastSkill}
                    onRemoveSpecificSkill={removeSpecificSkill}
                />
                <SkillComponent
                    key="2"
                    skill_data={pictomancer[4]}
                    onAddSkill={addSkillToStack}
                    onRemoveSkill={removeLastSkill}
                    onRemoveSpecificSkill={removeSpecificSkill}
                />
            </div>
        </div>
    );
};

export default HomePage;

/*
{filteredSkills.map((skill, index) => (
                    <SkillComponent 
                        key={index} 
                        skill_data={skill} 
                        onAddSkill={addSkillToStack} 
                        onRemoveSkill={removeLastSkill} 
                        onRemoveSpecificSkill={removeSpecificSkill} 
                    />
                ))}
*/
