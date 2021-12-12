import React, { useState, useCallback } from 'react';

import styles from './style.module';
import { uploadFeedback } from '../../api';

export const Feedback = () => {
    const [message, setMessage] = useState('');
    const [reqStatus, setReqStatus] = useState(null);

    const handleOnChange = useCallback((e) => {
        setMessage(e.target.value);
    }, []);

    const handleOnClick = useCallback(async () => {
        if (message) {
            const request = await uploadFeedback(message);
            setReqStatus(request);
            setTimeout(() => {
                setReqStatus(null);
                setMessage('');
            }, 2000)
        }
    }, [message]);

    console.log(reqStatus)

    return (
        <div className={styles.form}>
            <h2 className={styles.form__title}>Если у вас есть предложения или пожелания, вы можете оставить их тут:</h2>
            <textarea value={message} onChange={handleOnChange} className={styles.form__textarea} />
            {reqStatus?.success ? (
                <div className={styles.status}>{reqStatus.message} Спасибо за отзыв!</div>
            ) : (
                <button disabled={!message} onClick={handleOnClick} className={styles.form__btn}>Отправить</button>
            )}
        </div>
    );
};