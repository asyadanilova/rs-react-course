import { useState, useEffect } from "react";
import type { JSX } from "react";
import type { IForm } from "../../utils/types";
import styles from '../../styles/Results.module.css';

const Results = ({ data }: { data: IForm }): JSX.Element => {
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    useEffect(() => {
        let url: string | null = null;
        let file: File | null = null;

        if (data.uploadImage) {
            if (typeof data.uploadImage === 'string') {
                url = data.uploadImage;
            } else if (data.uploadImage instanceof File) {
                file = data.uploadImage;
            } else if (data.uploadImage instanceof FileList && data.uploadImage.length > 0) {
                file = data.uploadImage[0];
            }
        }

        if (file) {
            url = URL.createObjectURL(file);
            setImageUrl(url);
        } else if (url) {
            setImageUrl(url);
        } else {
            setImageUrl(null);
        }

        return () => {
            if (url && file) {
                URL.revokeObjectURL(url);
            }
        };
    }, [data.uploadImage]);

    return (
        <div className={styles.resultsContainer}>
            <h2 className={styles.header}>Form Results</h2>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <strong className={styles.label}>Name:</strong> {data.name}
                </li>
                <li className={styles.item}>
                    <strong className={styles.label}>Age:</strong> {typeof data.age === 'number' ? data.age : 'No age provided'}
                </li>
                <li className={styles.item}>
                    <strong className={styles.label}>Email:</strong> {data.email}
                </li>
                <li className={styles.item}>
                    <strong className={styles.label}>Password:</strong> {data.password}
                </li>
                <li className={styles.item}>
                    <strong className={styles.label}>Confirm Password:</strong> {data.confirmPassword}
                </li>
                <li className={styles.item}>
                    <strong className={styles.label}>Gender:</strong> {data.gender}
                </li>
                <li className={styles.item}>
                    <strong className={styles.label}>Terms:</strong> {data.terms ? 'Agreed' : 'Not Agreed'}
                </li>
                <li className={styles.item}>
                    <strong className={styles.label}>Image Preview:</strong>
                    {imageUrl ? (
                        <img
                            src={imageUrl}
                            alt="Uploaded preview"
                            style={{ maxWidth: '200px', maxHeight: '200px' }}
                        />
                    ) : (
                        'No file uploaded'
                    )}
                </li>
            </ul>
        </div>
    );
}

export default Results;
