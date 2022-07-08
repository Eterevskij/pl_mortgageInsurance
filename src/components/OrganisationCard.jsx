import React from 'react';
import { Button, Divider } from 'antd';
import styles from './OrganisationCard.module.css';

import { ReactComponent as ButtonArrow } from '../icons/ButtonArrow.svg';



const OrganisationCard = (props) => {

    const { content } = props;
    const { name, price, options } = content;

    return (
        <div className={styles.organizationCard}>
            <div className={styles.topPart}>
                <h5 className={styles.name}>{name}</h5>
                <div className={`${styles.total} ${styles.desktop}`}>

                    <p className={styles.totalTitle}>Итого</p>
                    <p className={styles.totalValue}>{price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ")} ₽</p>

                </div>
            </div>

            <Divider className={styles.divider} />

            <div className={styles.bottomPart}>
                <div className={styles.options}>

                    {
                        options.map(o => {
                            return (
                                <div className={styles.optionItem}>
                                    <p className={styles.optionName}>{o.name}</p>
                                    <p className={styles.optionValue}>{o.value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ")} ₽</p>
                                </div>
                            )
                        })
                    }

                </div>

                <Divider className={`${styles.divider} ${styles.mobile}`} />

                <div className={`${styles.total} ${styles.mobile}`}>

                    <p className={styles.totalTitle}>Итого</p>
                    <p className={styles.totalValue}>{price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ")} ₽</p>

                </div>

                <Button className={styles.submitButton}>Оформить полис <ButtonArrow /></Button>

            </div>
        </div>
    )
}

export default OrganisationCard; 