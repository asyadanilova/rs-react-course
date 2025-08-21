import type { JSX } from "react"
import styles from '../../styles/UncontrolledForm.module.css';
import { useForm, type SubmitHandler } from "react-hook-form";
import { initialCountries} from "../../utils/consts";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema, type IForm } from "../../utils/types";

const Form = ({ onSubmitSuccess }: { onSubmitSuccess: (data: IForm) => void }): JSX.Element => {
    const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm<IForm>({
        mode: "onChange",
        resolver: zodResolver(schema),
        defaultValues: {
            name: "",
            age: 0,
            email: "",
            password: "",
            confirmPassword: "",
            gender: "unspecified",
            terms: false,
            uploadImage: undefined,
            country: ""
        }
    });
    const onSubmit: SubmitHandler<IForm> = (data) => {
        onSubmitSuccess(data);
    }

    return (
        <fieldset>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Controlled Form</h1>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    placeholder="Enter name"
                    {...register("name")}
                />
                {errors.name && <p className={styles.error}>{errors.name.message}</p>}

                <label htmlFor="age">Age</label>
                <input
                    id="age"
                    type="text"
                    placeholder="Enter age"
                    {...register("age", {valueAsNumber: true})}
                />
                {errors.age && <p className={styles.error}>{errors.age.message}</p>}

                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Enter email"
                    {...register("email")}
                />
                {errors.email && <p className={styles.error}>{errors.email.message}</p>}

                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    placeholder="Enter password"
                    {...register("password")}
                />
                {errors.password && <p className={styles.error}>{errors.password.message}</p>}

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm password"
                    {...register("confirmPassword")}
                />
                {errors.confirmPassword && <p className={styles.error}>{errors.confirmPassword.message}</p>}

                <label htmlFor="gender">Gender</label>
                <select id="gender" {...register("gender")}>
                    <option value="unspecified">Unspecified</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                {errors.gender && <p className={styles.error}>{errors.gender.message}</p>}

                <label htmlFor="terms">
                    <input id="terms" type="checkbox" {...register("terms")} />
                    I accept the terms and conditions
                </label>
                {errors.terms && <p className={styles.error}>{errors.terms.message}</p>}

                <label htmlFor="uploadImage">Upload Image</label>
                <input id="uploadImage" type="file" accept=".jpeg,.png" {...register("uploadImage")} />
                {errors.uploadImage && <p className={styles.error}>{errors.uploadImage.message}</p>}

                <label htmlFor="country">Country</label>
                <select id="country" {...register("country")}>
                    <option value="">Select a country</option>
                    {initialCountries.map((country) => (
                        <option key={country} value={country}>
                            {country}
                        </option>
                    ))}
                </select>
                {errors.country && <p className={styles.error}>{errors.country.message}</p>}

                <button type="submit" disabled={!isValid} className={`${styles.button} ${!isValid ? styles['button:disabled'] : ''}`}>Submit</button>
                <button type="reset" onClick={() => reset()}>Reset</button>
            </form>
        </fieldset>
    )
}

export default Form;