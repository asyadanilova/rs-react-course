import styles from '../../styles/UncontrolledForm.module.css';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import { schema, type IForm } from '../../utils/types';

const UncontrolledForm = ({ onSubmitSuccess }: { onSubmitSuccess: (data: IForm) => void }) => {
    const countries = useSelector((state: { countries: { countries: string[] } }) => state.countries.countries);

    const [searchCountry, setSearchCountry] = useState('');
    const [filteredCountries, setFilteredCountries] = useState<string[]>([]);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [showDropdown, setShowDropdown] = useState(false);

    const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchCountry(value);
        if (value) {
            if (Array.isArray(countries)) {
                setFilteredCountries(
                    countries.filter((country: string) =>
                        country.toLowerCase().includes(value.toLowerCase())
                    )
                );
            }
            setShowDropdown(true);
        } else {
            setShowDropdown(false);
        }
    };

    const handleCountrySelect = (country: string) => {
        setSearchCountry(country);
        setShowDropdown(false);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        formData.set('country', searchCountry);
        const formObject = Object.fromEntries(formData.entries());
        const result = schema.safeParse(formObject);
        if (!result.success) {
            const fieldErrors: Record<string, string> = {};
            result.error.issues.forEach((issue) => {
                fieldErrors[String(issue.path[0])] = issue.message;
            });
            setErrors(fieldErrors);
            console.error("Validation errors:", fieldErrors);
        } else {
            setErrors({});
            onSubmitSuccess(result.data);
        }
    };

    const handleReset = () => {
        const form = document.querySelector(`.${styles['uncontrolled-form']}`) as HTMLFormElement;
        if (form) {
            form.reset();
        }
        setSearchCountry('');
        setFilteredCountries([]);
        setShowDropdown(false);
        setErrors({});
    };

    return (
        <fieldset>
            <form className={styles['uncontrolled-form']} onSubmit={handleSubmit}>
                <h1>Uncontrolled Form</h1>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id="name" />
                {errors.name && <p className={styles.error}>{errors.name}</p>}

                <label htmlFor="age">Age:</label>
                <input type="text" name="age" id="age" />
                {errors.age && <p className={styles.error}>{errors.age}</p>}

                <label htmlFor="email">Email:</label>
                <input type="text" name="email" id="email" />
                {errors.email && <p className={styles.error}>{errors.email}</p>}

                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" />
                {errors.password && <p className={styles.error}>{errors.password}</p>}

                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input type="password" name="confirmPassword" id="confirmPassword" />
                {errors.confirmPassword && <p className={styles.error}>{errors.confirmPassword}</p>}

                <label htmlFor="gender">Gender:</label>
                <select name="gender" id="gender">
                    <option value="unspecified">Unspecified</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                {errors.gender && <p className={styles.error}>{errors.gender}</p>}

                <label htmlFor="terms">
                    <input type="checkbox" name="terms" id="terms" /> I agree to the terms and conditions
                </label>
                {errors.terms && <p className={styles.error}>{errors.terms}</p>}

                <label htmlFor="uploadImage">
                    <input type="file" name="uploadImage" id="uploadImage" accept=".jpeg,.png" />
                </label>
                {errors.uploadImage && <p className={styles.error}>{errors.uploadImage}</p>}

                <label htmlFor="country">Country:</label>
                <input
                    type="text"
                    name="country"
                    id="country"
                    placeholder="Type to search..."
                    value={searchCountry}
                    onChange={handleCountryChange}
                    autoComplete="off"
                />
                {showDropdown && filteredCountries.length > 0 && (
                    <ul className={styles['autocomplete-dropdown']}>
                        {filteredCountries.map((country: string, index: number) => (
                            <li
                                key={index}
                                onClick={() => handleCountrySelect(country)}
                                style={{ cursor: 'pointer' }}
                            >
                                {country}
                            </li>
                        ))}
                    </ul>
                )}
                {errors.country && <p className={styles.error}>{errors.country}</p>}

                <button type="submit">Submit</button>
                <button type="reset" onClick={handleReset}>Reset</button>
            </form>
        </fieldset>
    )
}

export default UncontrolledForm;