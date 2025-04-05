import React, { useState, useEffect } from "react";
import Link from 'next/link';
import Hero from '../Home/Hero/index';

const SelectLang = ({ options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        toggleDropdown();
    };

    useEffect(() => {
        // closing modal while clicking outside
        function handleClickOutside(event) {
            if (!event.target.closest(".dropdown-content")) {
                toggleDropdown();
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="dropdown-content custom-select relative border-none">
            <div
                className={`select-selected whitespace-nowrap ${isOpen ? "select-arrow-active" : ""
                    }`}
                onClick={toggleDropdown}
            >
                {selectedOption.label}
            </div>
            <div className={`select-items ${isOpen ? "" : "select-hide"}`}>
                {options.map((option, index) => (
                    <div
                        // onClick={() => window.location.href = '/products'}
                        key={index}
                        // onClick={() => handleOptionClick(option)}
                        className={`select-item ${selectedOption === option ? "same-as-selected" : ""
                            }`}
                    >
                        <p

                        // href="/products"
                        >
                            {option.label}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SelectLang;
