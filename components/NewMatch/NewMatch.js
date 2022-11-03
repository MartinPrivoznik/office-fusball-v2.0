import { Button, Autocomplete, TextField } from '@mui/material'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import useUsers from '../../hooks/useUsers'
import styles from './NewMatch.module.css'

function NewMatch() {
    const router = useRouter()
    const { getAllUsers } = useUsers()
    const [users, setUsers] = useState([])

    const [redDeffender, setRedDeffender] = useState(null)
    const [redAttacker, setRedAttacker] = useState(null)

    const [blueDeffender, setBlueDeffender] = useState(null)
    const [blueAttacker, setBlueAttacker] = useState(null)

    const tryGetUsers = async () => {
        const res = await getAllUsers()
        if (res) setUsers(res)
    }

    useEffect(() => {
        tryGetUsers()
    }, [])

    return (
        <div className={styles['new-match-wrapper']}>
            <div className={styles['stats-wrapper']}>
                <h2>Výsledné skóre</h2>
                <div className={styles['score-wrapper']}>
                    <h3>Č</h3>
                    <TextField
                        className={styles['score-input']}
                        type="number"
                    />
                    <h3>:</h3>
                    <TextField
                        className={styles['score-input']}
                        type="number"
                    />
                    <h3>M</h3>
                </div>
                <div className={styles['players-form-wrapper']}>
                    <div className={styles['left-form-part']}>
                        <Autocomplete
                            className={styles['red-deffender']}
                            value={redDeffender}
                            onChange={(event, newValue) => {
                                setRedDeffender(newValue)
                            }}
                            id="red-deffender-autocomplete"
                            options={users}
                            getOptionLabel={(option) => option.nickname}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Červená - obránce"
                                />
                            )}
                        ></Autocomplete>
                        <Autocomplete
                            className={styles['red-attacker']}
                            value={redAttacker}
                            onChange={(event, newValue) => {
                                setRedAttacker(newValue)
                            }}
                            id="red-attacker-autocomplete"
                            options={users}
                            getOptionLabel={(option) => option.nickname}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Červená - útočník"
                                />
                            )}
                        ></Autocomplete>
                    </div>
                    <div className={styles['foosball-image']}></div>
                    <div className={styles['right-form-part']}>
                        <Autocomplete
                            className={styles['blue-attacker']}
                            value={blueAttacker}
                            onChange={(event, newValue) => {
                                setBlueAttacker(newValue)
                            }}
                            id="blue-attacker-autocomplete"
                            options={users}
                            getOptionLabel={(option) => option.nickname}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Modrá - útočník"
                                />
                            )}
                        ></Autocomplete>
                        <Autocomplete
                            className={styles['blue-deffender']}
                            value={blueDeffender}
                            onChange={(event, newValue) => {
                                setBlueDeffender(newValue)
                            }}
                            id="blue-deffender-autocomplete"
                            options={users}
                            getOptionLabel={(option) => option.nickname}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Modrá - obránce"
                                />
                            )}
                        ></Autocomplete>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewMatch
