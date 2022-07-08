import React from 'react';
import { Input, Button, Select } from 'antd';
import styles from './MortgageInsurance.module.css';
import TabSlider from './TabSlider';
import OrganisationCard from './OrganisationCard';

import { ReactComponent as Sort } from '../icons/Sort.svg';

const sortOptions = [{
    value: 'default',
    text: 'По умолчанию',
    default: true
},
{
    value: 'date',
    text: 'По дате',
},
{
    value: 'price',
    text: 'По цене',
},
]

const { Option } = Select;

const MortgageInsurance = (props) => {

    const { insuranceCompanies } = props;

    const defaultSortValue = sortOptions.find(item => {
        return item.default;
    }).value;

    return (
        <div className={styles.wrapper}>

            <div className={styles.filterBlock}>

                <TabSlider>
                    <FormalizePolicy tabName='Оформить полис' />
                    <p tabName='История страхования'>Пусто</p>
                </TabSlider>

            </div>

            <div className={styles.queryResult}>
                <div className={styles.cardsNumAndSort}>

                    <div className={styles.sortWrapper}>

                        <Input.Group className={styles.sort}>

                            <Sort className={styles.sortIcon} />

                            <Select
                                defaultValue={defaultSortValue}
                                className={styles.sortSelect}>
                                {
                                    sortOptions.map(option => {
                                        return (
                                            <Option value={option.value}>{option.text}</Option>
                                        )
                                    })
                                }
                            </Select>

                        </Input.Group>

                    </div>

                    <div className={styles.totalAdWrapper}>
                        <p className={styles.totalAd}>Найдено предложений: <span className={styles.num}>24</span></p>
                    </div>
                </div>

                {
                    insuranceCompanies.map(c => {
                        return (
                            <OrganisationCard content={c} />
                        )
                    })
                }


            </div>

        </div>

    )
}

const FormalizePolicy = () => {
    return (
        <div className={styles.filtersWrapper}>

            <div className={styles.filters}>


                <div className={`${styles.filterItem} ${styles.insuranceObjectWrapper}`}>
                    <Input placeholder='Объект страхования' />
                </div>

                <div className={`${styles.filterItem} ${styles.bankWrapper}`}>
                    <Input placeholder='В каком банке ипотека' />
                </div>

                <div className={`${styles.filterItem} ${styles.firstNameWrapper}`}>
                    <Input placeholder='Фамилия' />
                </div>

                <div className={`${styles.filterItem} ${styles.middleNameWrapper}`}>
                    <Input placeholder='Имя' />
                </div>

                <div className={`${styles.filterItem} ${styles.lastNameWrapper}`}>
                    <Input placeholder='Отчество' />
                </div>

                <div className={`${styles.filterItem} ${styles.birthDateWrapper}`}>
                    <Input placeholder='Дата рождения' />
                </div>

                <div className={`${styles.filterItem} ${styles.sexWrapper}`}>
                    <Input placeholder='Пол' />
                </div>

                <div className={`${styles.filterItem} ${styles.loanAmountWrapper}`}>
                    <Input placeholder='Сумма займа' />
                </div>

                <div className={`${styles.filterItem} ${styles.loanTermWrapper}`}>
                    <Input placeholder='Срок займа, год' />
                </div>

                <div className={`${styles.filterItem} ${styles.interestWrapper}`}>
                    <Input placeholder='Ставка, %' />
                </div>

            </div>

            <Button className={styles.filterButton}>Рассчитать стоимость</Button>

        </div>
    )
}

export default MortgageInsurance; 